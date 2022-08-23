import React, { useState } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import remove from '../../assets/intentRemove.svg';
import './MentionStyle.css';
import {
  ChangeInResponse,
  GetCursorXY,
  GiveSelectionStart,
} from '../../containers/CreateIntentPage/helperFile';
import CreateIntentStyle from '../../containers/CreateIntentPage/Style';
import { Popover } from '@material-ui/core';
import {
  FindIndexOfWord,
  ReplaceWorldOfParticularIndex,
} from '../../containers/CreateIntentPage/helper';
import ConfirmationModal from '../ReusableComponents/ModalComponents/ConfirmationModal';

const TextResponses = ({
  apiList,
  fulfilmentList,
  responses,
  handleChangeRemoveResponse,
  handleChangeBotResponse,
  intentParameter,
  selectIntentParamIdForBotResponse,
  handleChangeIntentParameter,
  handleChangePlainBotResponse,
}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');

  /* function related to popover starts */
  const [selectedResponse, setSelectedResponse] = useState();
  const [popOpen, setPopOpen] = useState(false);
  const [topPosition, setTopPosition] = useState();
  const [leftPosition, setLeftPosition] = useState();
  const [$Position, set$Position] = useState();

  const handleProfileDropDown = () => {
    // setPopOpen(!popOpen);
  };
  const handleRequestClose = () => {
    setPopOpen(false);
  };
  /* function related to popover ends */

  const [showResponseEntity, setShowResponseEntity] = useState(true);
  const [showParamList, setShowParamList] = useState(false);
  const [showFulfilmentList, setShowFulfilmentList] = useState(false);

  const dataParamForDropdown = [];
  intentParameter &&
    intentParameter.map(singleParam =>
      singleParam.value.paramName !== '' && singleParam.value.botEntity !== null
        ? dataParamForDropdown.push(singleParam)
        : null,
    );

  // parameter mention array
  const [mentionArray, setMentionArray] = useState(
    dataParamForDropdown.map(singleData => ({
      id: singleData.id,
      display: `${singleData.value.paramName}`,
    })),
  );

  // api mention array
  const [apiMentionArray, setApiMentionArray] = useState(
    apiList &&
      apiList.map(singleData => ({
        id: singleData.apiId,
        display: `${singleData.title}`,
      })),
  );

  const responseEntity = [
    {
      id: 'RESOLVE_BY_USER_INPUT',
      display: 'Resolved Value',
    },
    {
      id: 'RESOLVE_BY_API_CALL',
      display: 'API Integration',
    },
    {
      id: 'RESOLVE_BY_ANYDONE_DATA',
      display: 'System',
    },
  ];

  const [fulfilmentMentionArray, setFulfilmentMentionArray] = useState(
    fulfilmentList.map(singleFulfilment => ({
      id: singleFulfilment.id,
      display: `${singleFulfilment.value.fulfilmentName}`,
    })),
  );

  const mergedArray = mentionArray.concat(fulfilmentMentionArray);

  const fulfilmentArray = [];
  fulfilmentList.map(singleFulfilment => {
    singleFulfilment.value.response.map(singleRes => {
      if (
        singleFulfilment.display === true &&
        singleFulfilment.value.fulfilmentName !== '' &&
        singleFulfilment.value.selectedApi.apiId !== '' &&
        singleRes.value.name !== ''
      ) {
        const a = {
          id: singleRes.id,
          display: `${singleFulfilment.value.fulfilmentName} - ${
            singleRes.value.name
          }`,
        };
        fulfilmentArray.push(a);
      }
    });
  });

  const handleChange = (
    event,
    newValue,
    newPlainTextValue,
    mentions,
    singleResponse,
  ) => {
    setMentionArray(
      dataParamForDropdown.map(singleData => ({
        id: singleData.id,
        display: `${singleData.value.botEntity.entityName.replace(
          / /g,
          '_',
        )} : ${singleData.value.paramName}`,
      })),
    );
    setApiMentionArray(
      apiList &&
        apiList.map(singleData => ({
          id: singleData.apiId,
          display: `${singleData.title.replace(/ /g, '_')}`,
        })),
    );
    setFulfilmentMentionArray(fulfilmentArray);
    handleChangeBotResponse(
      responses.botResponseId,
      singleResponse.id,
      'response',
      newValue,
    );
    handleChangePlainBotResponse(
      responses.botResponseId,
      singleResponse.id,
      'responseValue',
      newPlainTextValue,
    );

    // while passing data on calling api use newPlainTextValue
    // setMentionData({newValue, newPlainTextValue, mentions});
  };
  const openResponseData = () => {
    const div = [];
    // Outer loop to create parent
    responses &&
      responses.response &&
      responses.response.map((single, index) =>
        div.push(
          <>
            <div className="training-phase-input" id={single.id}>
              <MentionsInput
                id={single.id}
                spellCheck={false}
                allowSpaceInQuery
                // value={single.value.response}
                value={ChangeInResponse(
                  single.value.response,
                  intentParameter,
                  fulfilmentList,
                )}
                onChange={(event, newValue, newPlainTextValue, mentions) => {
                  const intentIdList = [];
                  intentParameter &&
                    intentParameter.map(singleIntent => {
                      intentIdList.push(singleIntent.id.toString());
                    });
                  handleChange(
                    event.target.value,
                    newValue,
                    newPlainTextValue,
                    mentions,
                    single,
                  );
                  if (
                    mentions.length !==
                    single.intentParamIdForBotResponse.length
                  ) {
                    const mentionId = [];
                    mentions.length > 0 &&
                      mentions.map(singleMention => {
                        mentionId.push(singleMention.id);
                      });
                    selectIntentParamIdForBotResponse(
                      responses.botResponseId,
                      single.id,
                      mentionId,
                      intentParameter,
                    );
                    mentionId.length > 0 &&
                      mentionId.map(singleMentionId => {
                        if (intentIdList.includes(singleMentionId)) {
                          handleChangeIntentParameter(
                            singleMentionId,
                            'required',
                            true,
                          );
                        }
                      });
                  }
                }}
                onKeyUp={e => {
                  if (e.target.value[e.target.selectionStart - 1] === '$') {
                    setSelectedResponse({
                      id: single.id,
                      response: single.value.response,
                    });
                    const slicedWord = single.value.response.slice(
                      GiveSelectionStart(e) - 1,
                      GiveSelectionStart(e) + 1,
                    );
                    const index = FindIndexOfWord(
                      single.value.response,
                      slicedWord,
                    );
                    handleProfileDropDown();
                    set$Position(GiveSelectionStart(e));
                    setTopPosition(e.currentTarget.getBoundingClientRect());
                    setLeftPosition(
                      GetCursorXY(e.currentTarget, GiveSelectionStart(e)).x,
                    );
                  }
                }}
                placeholder="Enter Response"
                className="mentions"
              >
                {/* mention to select choose data format and  param */}
                <Mention
                  // appendSpaceOnAdd={true}
                  markup="$[__display__](__id__)"
                  type="user"
                  trigger="$"
                  // data={dataToTrigger === true ? resolveValueList : mentionArray}
                  data={mergedArray}
                  className="mentions__mention"
                />
              </MentionsInput>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: '8px',
                  cursor: 'pointer',
                }}
                onClick={e => {
                  e.preventDefault();
                  setSelectedPhraseId(single.id);
                  setRemoveModal(true);
                }}
              >
                <img
                  hidden={responses.response.length === 1}
                  id={single.id}
                  src={remove}
                />
              </div>
            </div>
            <Popover
              open={popOpen}
              anchorReference="anchorPosition"
              anchorPosition={{
                top: topPosition && topPosition.bottom,
                left: leftPosition + 260,
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleRequestClose}
              onBackdropClick={handleRequestClose}
            >
              <CreateIntentStyle>
                <div
                  className="popover-style"
                  style={{ boxShadow: '5px 10px 8px 10px #888888' }}
                >
                  <div>
                    {responseEntity.map(single => (
                      <div
                        hidden={!showResponseEntity}
                        className="popover-options"
                        onClick={() => {
                          if (single.id === 'RESOLVE_BY_USER_INPUT') {
                            setShowResponseEntity(false);
                            setShowParamList(true);
                          } else if (single.id === 'RESOLVE_BY_API_CALL') {
                            setShowResponseEntity(false);
                            setShowFulfilmentList(true);
                          } else {
                          }
                        }}
                      >
                        {single.display}
                      </div>
                    ))}
                  </div>
                  <div hidden={!showParamList}>
                    {mentionArray &&
                      mentionArray.map((singleParam, index) => (
                        <div
                          id={single.id}
                          className="popover-options"
                          onClick={() => {
                            handleChangeBotResponse(
                              responses.botResponseId,
                              selectedResponse.id,
                              'response',
                              ReplaceWorldOfParticularIndex(
                                selectedResponse.response,
                                singleParam,
                                $Position,
                              ),
                            );
                            handleRequestClose();
                            setShowParamList(false);
                            setShowResponseEntity(true);
                          }}
                        >
                          {singleParam.display}
                        </div>
                      ))}
                  </div>
                  <div hidden={!showFulfilmentList}>
                    {fulfilmentMentionArray &&
                      fulfilmentMentionArray.map(singleFulfilment => (
                        <div
                          id={single.id}
                          className="popover-options"
                          onClick={() => {
                            handleChangeBotResponse(
                              responses.botResponseId,
                              selectedResponse.id,
                              'response',
                              `$[${singleFulfilment.display}](${
                                singleFulfilment.id
                              })`,
                            );
                            handleRequestClose();
                            setShowParamList(false);
                            setShowResponseEntity(true);
                          }}
                        >
                          {singleFulfilment.display}
                        </div>
                      ))}
                  </div>
                </div>
              </CreateIntentStyle>
            </Popover>
          </>,
        ),
      );
    return div;
  };

  return (
    <>
      {openResponseData()}

      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this response?"
        onClick={() =>
          handleChangeRemoveResponse(responses.botResponseId, selectedPhraseId)
        }
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
    </>
  );
};

export default TextResponses;

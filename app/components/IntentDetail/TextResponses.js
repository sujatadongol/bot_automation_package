import React, { useState } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import remove from '../../assets/intentRemove.svg';
import {
  ChangeInResponse,
  GetCursorXY,
} from '../../containers/CreateIntentPage/helperFile';
import './MentionStyle.css';
import {
  ExtractWordOfSpecificIndex,
  FindIndexOfWord,
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

  const giveSelectionStart = e => {
    // grab properties of event we are interested in
    const { currentTarget: input } = e;
    // grab properties of input that we are interested in
    const { selectionStart } = input;
    return selectionStart;
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

  const resolveValueList = [
    {
      id: 'RESOLVE_BY_USER_INPUT',
      display: 'Resolved Value',
    },
    {
      id: 'RESOLVE_BY_ANYDONE_DATA',
      display: 'System',
    },
    {
      id: 'RESOLVE_BY_API_CALL',
      display: 'API Integration',
    },
  ];

  const [fulfilmentMentionArray, setFulfilmentMentionArray] = useState(
    fulfilmentList &&
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
          <div className="training-phase-input">
            <MentionsInput
              spellCheck={false}
              allowSpaceInQuery
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
                  event,
                  newValue,
                  newPlainTextValue,
                  mentions,
                  single,
                );
                if (
                  mentions.length !== single.intentParamIdForBotResponse.length
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
                    giveSelectionStart(e) - 1,
                    giveSelectionStart(e) + 1,
                  );
                  const index = FindIndexOfWord(
                    single.value.response,
                    slicedWord,
                  );
                  console.log(
                    'find index',
                    index,
                    'extract',
                    ExtractWordOfSpecificIndex(single.value.response, index),
                  );

                  handleProfileDropDown();
                  set$Position(giveSelectionStart(e));
                  setTopPosition(e.currentTarget.getBoundingClientRect());
                  setLeftPosition(
                    GetCursorXY(e.currentTarget, giveSelectionStart(e)).x,
                  );
                }
              }}
              placeholder="Enter Response"
              className="mentions"
            >
              {/* mention to select choose data format and  param */}
              <Mention
                markup="$[__display__](__id__)"
                type="user"
                trigger="$"
                // data={dataToTriggerArray === true ? resolveValueList : mentionArray}
                data={mergedArray}
                className="mentions__mention"
              />
            </MentionsInput>
            <div
              onClick={e => {
                e.preventDefault();
                setSelectedPhraseId(single.id);
                setRemoveModal(true);
              }}
              style={{
                width: '22px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginTop: '8px',
                cursor: 'pointer',
              }}
            >
              <img
                hidden={responses.response.length === 1}
                id={single.id}
                src={remove}
              />
            </div>
          </div>,
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
        content="Are you sure you want to remove this response ?"
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

import React, { useEffect, useState } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import DivWrapper from '../DivWrapper/DivWrapper';
import remove from '../../assets/intentRemove.svg';
import {
  ChangeInTrainingPhrase,
  GetIntentId,
  ParamNameExists,
} from '../../containers/CreateIntentPage/helperFile';
import './MentionStyle.css';
import {
  GetCaretPosition,
  GetSelectedText,
  GetSelectedTextIndex,
} from '../../utils/helper';
import TrainingPhraseIntentParam from './TrainingPhraseIntentParam';
import CreateEntityModal from '../../containers/CreateEntityModalContainer';
import CreateIntentComponentStyle from '../CreateIntent/Style';
import { Tooltip } from 'antd';
import SingleParaphraseModal from './ParaphraseComponent/SingleParaphraseModal';
import ConfirmationModal from '../ReusableComponents/ModalComponents/ConfirmationModal';
import intent from '../../assets/intent.svg';
import errorIcon from '../../assets/not_verified.svg';
import MisleadingIntentModal from './MisleadingIntentModal';

const TrainingPhaseDetail = ({
  entityList,
  trainingPhase,
  handleChangeRemoveTrainingPhase,
  handleChangeTrainingPhrase,
  handleChangeInDisplayTrainingPhrase,
  intentParameter,
  handleChangeIntentParameterIdOfTrainingPhrase,
  handleChangeToAddIntentParameter,
  handleChangeIntentParameter,
  removeIntentParamFromParticularTrainingPhrase,
  showIntentRowWhenFocus,

  // paraphrase
  clearParaphraseModal,
  loadingParaphrase,
  getParaphraseById,
  specificParaphraseTitle,
  paraphraseOfSpecificTrainingPhrase,
  addSpecificParaphraseRow,
  removeSpecificParaphraseRow,
  handleChangeInSpecificParaphrase,
  updateSpecificParaphraseRow,

  misleadingIntents,
  fetchMisleadingIntents,
}) => {
  const getEntityArray = () => {
    let entityArray = [];
    entityList &&
      entityList.map(singleEntity =>
        entityArray.push({
          id: singleEntity.entityId,
          display: singleEntity.entityName.replace(/ /g, '_'),
        }),
      );
    return entityArray;
  };

  const [misleadingIntentsModal, setMisleadingIntents] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');
  const [mentionData, setMentionData] = useState([]);
  const [displayStr, setDisplayStr] = useState('');
  const paramNameList = [];
  intentParameter &&
    intentParameter.map(single => paramNameList.push(single.value.paramName));
  const dataParamForDropdown = [];
  intentParameter &&
    intentParameter.map(singleParam =>
      singleParam.value.paramName !== '' &&
      singleParam.value.botEntity !== null &&
      !singleParam.paramNameAlreadyExist
        ? dataParamForDropdown.push(singleParam)
        : null,
    );
  const [triggerValue, setTriggerValue] = useState(undefined);
  const [selectedResolvedValue, setSelectedResolvedValue] = useState('');
  const [mentionArrayWithParam, setMentionArrayWithParam] = useState(
    dataParamForDropdown.map(singleData => ({
      display: `${singleData.value.botEntity.entityName} : ${
        singleData.value.paramName
      }`,
      id: singleData.id,
    })),
  );

  const handleChange = (
    event,
    newValue,
    phrase,
    newPlainTextValue,
    mentions,
  ) => {
    handleChangeTrainingPhrase(phrase.id, 'text', newValue);
  };
  const [indexToReplace, setIndexToReplace] = useState();
  const a = triggerValue;
  useEffect(() => {
    setMentionArrayWithParam(
      dataParamForDropdown &&
        dataParamForDropdown.map(singleData => ({
          id: singleData.id,
          display: `${singleData.value.botEntity.entityName.replace(
            / /g,
            '_',
          )} : ${singleData.value.paramName}`,
        })),
    );
  }, [intentParameter]);

  const [phraseId, setPhraseId] = useState(undefined);
  const [phraseTitle, setPhraseTitle] = useState('');
  const [openParaphraseModal, setOpenParaphraseModal] = useState(false);
  const closeParaphraseModal = () => {
    setOpenParaphraseModal(false);
    clearParaphraseModal();
  };

  function setCaretPosition(elemId, caretPos) {
    const elem = document.getElementById(elemId);
    if (elem) {
      if (typeof elem.createTextRange !== 'undefined') {
        const range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (typeof elem.selectionStart !== 'undefined')
          elem.selectionStart = caretPos;
        elem.focus();
      }
    }
  }

  const openTrainingPhaseData = () => {
    const div = [];
    // Outer loop to create parent
    trainingPhase &&
      trainingPhase.map((singlePhrase, index) =>
        div.push(
          <>
            <div className="training-phase-input">
              <MentionsInput
                dblClick={e => e.preventDefault()}
                spellCheck={false}
                onClick={() => {
                  !singlePhrase.showIntentRow &&
                    showIntentRowWhenFocus(singlePhrase.id);
                }}
                allowSpaceInQuery
                value={ChangeInTrainingPhrase(
                  singlePhrase.value.text,
                  intentParameter,
                  selectedResolvedValue,
                )}
                onChange={(event, newValue, newPlainTextValue, mentions) => {
                  setDisplayStr(newPlainTextValue);
                  handleChangeInDisplayTrainingPhrase(
                    singlePhrase.id,
                    newPlainTextValue,
                  );
                  handleChange(
                    event.target.value,
                    newValue,
                    singlePhrase,
                    newPlainTextValue,
                    mentions,
                  );
                  if (
                    mentions.length !==
                    singlePhrase.intentParamIdForTrainingPhrase.length
                  ) {
                    const mentionId = [];
                    mentions.length > 0 &&
                      mentions.map(singleMention => {
                        mentionId.push(singleMention.id);
                      });
                    handleChangeTrainingPhrase(
                      singlePhrase.id,
                      'text',
                      newValue,
                    );
                    handleChangeInDisplayTrainingPhrase(
                      singlePhrase.id,
                      newPlainTextValue,
                    );
                    handleChangeIntentParameterIdOfTrainingPhrase(
                      singlePhrase.id,
                      mentionId,
                      indexToReplace,
                      triggerValue,
                    );
                    setIndexToReplace();
                    setTriggerValue(undefined);
                  }
                  setMentionData(mentions);
                  setTriggerValue(undefined);
                }}
                placeholder="Enter Training Phrase"
                className="mentions"
                id={singlePhrase.id}
                onMouseUp={e => {
                  if (
                    GetSelectedText() !== '' &&
                    GetSelectedText() !== ' '
                    // && GetSelectedText().includes(' ') === false
                  ) {
                    setSelectedResolvedValue(GetSelectedText());
                    setTriggerValue(GetSelectedText());
                    setIndexToReplace(GetSelectedTextIndex());
                    setCaretPosition(singlePhrase.id, GetCaretPosition());
                  }
                }}
              >
                {/* mention including entity along with param name */}
                <Mention
                  appendSpaceOnAdd
                  markup="[__display__](__id__)"
                  displayTransform={(id, display) => display}
                  type="user"
                  trigger="@"
                  data={a ? [] : mentionArrayWithParam}
                  className="mentions__mention"
                />
                {/* mention including entity only */}
                <Mention
                  appendSpaceOnAdd
                  markup="[__display__](__id__)"
                  displayTransform={(id, display) => {
                    const entityObj = {
                      entityId: id,
                      entityName: display,
                    };
                    handleChangeToAddIntentParameter(id);
                    handleChangeIntentParameter(
                      id,
                      'paramName',
                      display.toLowerCase(),
                    );
                    handleChangeIntentParameter(id, 'botEntity', entityObj);
                    handleChangeIntentParameter(id, 'possibleValue', display);
                    handleChangeIntentParameter(id, 'defaultValue', display);
                    return display;
                  }}
                  type="user"
                  trigger="@"
                  data={a ? [] : getEntityArray()}
                  className="mentions__mention"
                />

                {/* if some word is selected */}
                {/* mention including entity along with param name */}
                <Mention
                  markup={'[__display__](__id__){R}'}
                  displayTransform={(id, display) => {
                    handleChangeIntentParameter(
                      id,
                      'resolvedValue',
                      selectedResolvedValue,
                    );
                    return display;
                  }}
                  type="user"
                  trigger={a}
                  data={a ? mentionArrayWithParam : []}
                  className="mentions__mention"
                />
                {/* mention including entity only */}
                <Mention
                  // appendSpaceOnAdd={true}
                  markup="[__display__](__id__){R}"
                  displayTransform={(id, display) => {
                    const entityObj = {
                      entityId: id,
                      entityName: display,
                    };
                    let intentId = GetIntentId(
                      intentParameter,
                      display.toLowerCase(),
                      id /*entity id must be passed to highlight intent in mention; [__display__](__id__){R} id here is entity id*/,
                    );
                    !ParamNameExists(intentParameter, display.toLowerCase()) &&
                      handleChangeToAddIntentParameter(intentId);
                    handleChangeIntentParameter(
                      intentId,
                      'paramName',
                      display.toLowerCase(),
                    );
                    handleChangeIntentParameter(
                      intentId,
                      'botEntity',
                      entityObj,
                    );
                    handleChangeIntentParameter(
                      intentId,
                      'resolvedValue',
                      selectedResolvedValue,
                    );
                    handleChangeIntentParameter(
                      intentId,
                      'possibleValue',
                      display,
                    );
                    handleChangeIntentParameter(
                      intentId,
                      'defaultValue',
                      display,
                    );
                    return display;
                  }}
                  type="user"
                  trigger={a}
                  data={a ? getEntityArray() : []}
                  className="mentions__mention"
                />
              </MentionsInput>
              {singlePhrase.similarStatus && (
                <Tooltip title="Misleading Intents">
                  <div
                    style={{
                      width: '22px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      marginTop: '8px',
                      cursor: 'pointer',
                      marginLeft: '6px',
                    }}
                    onClick={e => {
                      e.preventDefault();
                      setMisleadingIntents(true);
                      fetchMisleadingIntents(
                        singlePhrase.id,
                        singlePhrase.similarPhrases,
                      );
                    }}
                  >
                    <img
                      hidden={trainingPhase.length === 1}
                      id={singlePhrase.id}
                      src={errorIcon}
                      width={14}
                      height={14}
                    />
                  </div>
                </Tooltip>
              )}
              <Tooltip title="Delete">
                <div
                  style={{
                    width: '22px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: '8px',
                    cursor: 'pointer',
                    marginLeft: '6px',
                  }}
                  onClick={e => {
                    e.preventDefault();
                    setRemoveModal(true);
                    setSelectedPhraseId(singlePhrase.id);
                  }}
                >
                  <img
                    hidden={trainingPhase.length === 1}
                    id={singlePhrase.id}
                    src={remove}
                  />
                </div>
              </Tooltip>
            </div>
            {singlePhrase.intentParamIdForTrainingPhrase.length > 0 &&
            singlePhrase.showIntentRow === true ? (
              <TrainingPhraseIntentParam
                phraseText={singlePhrase.value.text}
                mentionData={mentionData}
                intentParamIdForTrainingPhrase={
                  singlePhrase.intentParamIdForTrainingPhrase
                }
                trainingPhraseId={singlePhrase.id}
                intentParameterList={intentParameter}
                removeIntentParamFromParticularTrainingPhrase={
                  removeIntentParamFromParticularTrainingPhrase
                }
              />
            ) : null}
          </>,
        ),
      );
    return div;
  };

  useEffect(() => {
    const objDiv = document.getElementById('paraphrase-modal-id');
    if (objDiv !== null) {
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [paraphraseOfSpecificTrainingPhrase]);
  return (
    <CreateIntentComponentStyle>
      <DivWrapper
        style={{
          padding: 0,
          borderRadius: '10px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
          marginTop: '8px',
        }}
      >
        <div className="intent-value-header">
          {' '}
          Training Phrases
          <Tooltip title="Possible phrases that detect the intent">
            <img src={intent} className={'title-icon'} />
          </Tooltip>
        </div>
        {openTrainingPhaseData()}
      </DivWrapper>

      <CreateEntityModal />
      <SingleParaphraseModal
        loadingParaphrase={loadingParaphrase}
        title={phraseTitle}
        phraseId={phraseId}
        visibility={openParaphraseModal}
        closeModal={closeParaphraseModal}
        specificParaphraseTitle={specificParaphraseTitle}
        addSpecificParaphraseRow={addSpecificParaphraseRow}
        handleChangeInSpecificParaphrase={handleChangeInSpecificParaphrase}
        paraphraseOfSpecificTrainingPhrase={paraphraseOfSpecificTrainingPhrase}
        removeSpecificParaphraseRow={removeSpecificParaphraseRow}
        updateSpecificParaphraseRow={updateSpecificParaphraseRow}
      />
      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this training phrase ?"
        onClick={() => handleChangeRemoveTrainingPhase(selectedPhraseId)}
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
      <MisleadingIntentModal
        visibility={misleadingIntentsModal}
        closeModal={() => setMisleadingIntents(false)}
        misleadingIntents={misleadingIntents}
        loadingParaphrase={loadingParaphrase}
      />
    </CreateIntentComponentStyle>
  );
};

export default TrainingPhaseDetail;

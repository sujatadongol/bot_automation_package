import React, { useEffect } from 'react';
import TryOut from 'containers/TryOut/Loadable';
import DivWrapper from '../../components/ReusableComponents/DivWrapper/DivWrapper';
import CustomButton from '../../components/ReusableComponents/Button/Button';
import SnackBar from '../../components/ReusableComponents/Snackbar';
import CreateIntentStyle from '../CreateIntentPage/Style';
import TrainingPhaseDetail from '../../components/IntentDetail/TrainingPhaseDetail';
import IntentParameterDetail from '../../components/IntentDetail/IntentParameterDetail';
import ResponseDetail from '../../components/IntentDetail/ResponseDetail';
import { ValidateIntent } from '../CreateIntentPage/helper';
import Fulfilment from '../../components/IntentDetail/FulfilmentList';
import AllParaphraseModal from '../../components/IntentDetail/ParaphraseComponent/GetAllParaphraseModal';
import Action from '../../components/IntentDetail/Action/ActionField';
import history from '../../utils/history';
import OutlinedSpinner from '../../components/ReusableComponents/Spinner';
import { CommonIcons } from '../../assets/CommonIcons';

const IntentDetailScreen = ({
  match,
  loading,
  error,
  snackbar,
  variant,
  closeSnackbar,
  loadingParaphrase,
  notificationObj,

  apiList,
  fetchThirdPartyApiList,

  fetchIntentDetailById,
  entityList,
  fetchEntity,
  intentName,
  handleChangeServiceIdToUpdateIntent,
  handleChangeIntentName,
  handleChangeIntentId,

  trainingPhrase,
  handleChangeRemoveTrainingPhase,
  handleChangeToAddTrainingPhase,
  handleChangeTrainingPhrase,
  handleChangeIntentParameterIdOfTrainingPhrase,
  handleChangeInDisplayTrainingPhrase,
  removeIntentParamFromParticularTrainingPhrase,
  showIntentRowWhenFocus,

  openCreateEntityModal,
  closeCreateEntityModal,
  createEntityModal,

  intentParameter,
  checkIsPromptRequired,
  handleChangeToAddIntentParameter,
  handleChangeRemoveIntentParameter,
  uploadIntentParameterIcon,
  handleChangeIntentParameter,
  paramNameList,
  intentParamIdUsedInBotResponse,
  checkIfParamNameAlreadyExistsInDetail,

  handleChangeToAddPrompt,
  handleChangeRemovePrompt,
  handleChangePrompts,

  fulfilmentList,
  addFulfilment,
  saveFulfilment,
  removeFulfilment,
  handleChangeInFulfilmentData,
  handleChangeInApiParameterValue,
  addResponseInFulfilment,
  removeResponseInFulfilment,
  handleChangeInResponseInFulfilment,

  actionList,
  objToAddAction,
  addAction,
  removeAction,
  handleChangeInActionInCreateActionModal,
  handleChangeInApiParameterValueInAction,
  updateAction,
  handleChangeObjectToUpdateAction,
  clearActionModal,

  botResponse,
  handleChangeToAddTextResponse,
  handleChangeToRemoveTextResponse,
  handleChangeToAddResponse,
  handleChangeRemoveResponse,
  handleChangeBotResponse,
  selectIntentParamIdForBotResponse,
  handleChangePlainBotResponse,

  validateIntent,
  updateIntent,
  clearIntentData,
  clearPromptData,

  isIntentValidatedToBeCreated,

  openTryOutModal,

  //paraphrasing
  openParaphraseModal,
  openParaphraseModalAction,
  handleChangeInParaphraseEvent,
  clearNotificationObj,
  optimizationSuccess,
  clearParaphraseModal,
  paraphraseList,
  specificParaphraseTitle,
  optimizeParaphrase,
  addParaphraseRow,
  removeParaphraseRow,
  handleChangeInParaphrase,
  updateParaphrase,
  getParaphraseById,
  paraphraseOfSpecificTrainingPhrase,
  addSpecificParaphraseRow,
  removeSpecificParaphraseRow,
  handleChangeInSpecificParaphrase,
  updateSpecificParaphraseRow,
  openEventSnackBar,
  eventMsg,
  eventVariant,

  misleadingIntents,
  fetchMisleadingIntents,

  reloadContainer,
}) => {
  const { botId, intentId, language: defaultLanguage } = match.params;
  useEffect(() => {
    fetchIntentDetailById(intentId);
    handleChangeIntentId(intentId);
    handleChangeServiceIdToUpdateIntent(localStorage.getItem('serviceId'));
    fetchEntity();
    fetchThirdPartyApiList();
  }, []);
  useEffect(() => {
    return () => {
      clearIntentData();
      closeSnackbar();
    };
  }, []);

  if (reloadContainer && localStorage.getItem('serviceId')) {
    history.push('/bot');
  }

  const disableValue = intentName === '';

  const closeParaphraseModal = () => {
    openParaphraseModalAction(false);
    clearParaphraseModal();
  };

  if (notificationObj && notificationObj.type === 8) {
    handleChangeInParaphraseEvent(
      JSON.parse(notificationObj.payload),
      notificationObj.title,
    );
    clearNotificationObj();
  }

  return (
    <CreateIntentStyle>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginRight: '10px',
          }}
        >
          <div
            className="optimize-btn"
            onClick={() => {
              optimizeParaphrase(intentId);
              openParaphraseModalAction(true);
            }}
          >
            Optimize Intent
          </div>
        </div>
      </div>

      {loading ? (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      ) : null}
      <div
        className={'d-flex'}
        style={{ minHeight: '100vh', marginRight: '8px' }}
      >
        <div className={'w-100'}>
          <DivWrapper
            style={{
              padding: 0,
              borderRadius: '10px',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
              marginTop: '8px',
            }}
          >
            <div className={'intent-value-header'}>Intent Name</div>
            <div className={'training-phase-input'}>
              <input
                // value={intentName.match(/[0-9a-zA-Z_.]*/)}
                value={intentName}
                placeholder="Intent Name"
                className={'intent-title'}
                style={{
                  border: 'none',
                  fontSize: '14px',
                  color: '#333',
                  width: '100%',
                  padding: '13px 25px !important',
                  height: '30px',
                  paddingLeft: '8px',
                }}
                onChange={e => handleChangeIntentName(e.target.value)}
              />
            </div>
          </DivWrapper>

          <TrainingPhaseDetail
            fetchMisleadingIntents={fetchMisleadingIntents}
            misleadingIntents={misleadingIntents}
            trainingPhase={trainingPhrase}
            handleChangeToAddTrainingPhase={handleChangeToAddTrainingPhase}
            handleChangeRemoveTrainingPhase={handleChangeRemoveTrainingPhase}
            handleChangeInDisplayTrainingPhrase={
              handleChangeInDisplayTrainingPhrase
            }
            handleChangeTrainingPhrase={handleChangeTrainingPhrase}
            intentParameter={intentParameter}
            entityList={entityList}
            handleChangeIntentParameterIdOfTrainingPhrase={
              handleChangeIntentParameterIdOfTrainingPhrase
            }
            handleChangeToAddIntentParameter={handleChangeToAddIntentParameter}
            handleChangeIntentParameter={handleChangeIntentParameter}
            removeIntentParamFromParticularTrainingPhrase={
              removeIntentParamFromParticularTrainingPhrase
            }
            showIntentRowWhenFocus={showIntentRowWhenFocus}
            openCreateEntityModal={openCreateEntityModal}
            closeCreateEntityModal={closeCreateEntityModal}
            createEntityModal={createEntityModal}
            //paraphrase
            loadingParaphrase={loadingParaphrase}
            clearParaphraseModal={clearParaphraseModal}
            specificParaphraseTitle={specificParaphraseTitle}
            updateSpecificParaphraseRow={updateSpecificParaphraseRow}
            removeSpecificParaphraseRow={removeSpecificParaphraseRow}
            paraphraseOfSpecificTrainingPhrase={
              paraphraseOfSpecificTrainingPhrase
            }
            handleChangeInSpecificParaphrase={handleChangeInSpecificParaphrase}
            addSpecificParaphraseRow={addSpecificParaphraseRow}
            getParaphraseById={getParaphraseById}
          />
          <IntentParameterDetail
            botId={botId}
            isIntentValidatedToBeCreated={isIntentValidatedToBeCreated}
            intentParameter={intentParameter}
            checkIsPromptRequired={checkIsPromptRequired}
            handleChangeToAddIntentParameter={handleChangeToAddIntentParameter}
            handleChangeRemoveIntentParameter={
              handleChangeRemoveIntentParameter
            }
            uploadIntentParameterIcon={uploadIntentParameterIcon}
            handleChangeIntentParameter={handleChangeIntentParameter}
            paramNameList={paramNameList}
            checkIfParamNameAlreadyExistsInDetail={
              checkIfParamNameAlreadyExistsInDetail
            }
            entityList={entityList}
            handleChangeRemovePrompt={handleChangeRemovePrompt}
            handleChangeToAddPrompt={handleChangeToAddPrompt}
            handleChangePrompts={handleChangePrompts}
            clearPromptData={clearPromptData}
            openCreateEntityModal={openCreateEntityModal}
            intentParamIdUsedInBotResponse={intentParamIdUsedInBotResponse}
          />
          <Fulfilment
            fulfilmentList={fulfilmentList}
            apiList={apiList}
            intentParameter={intentParameter}
            addFulfilment={addFulfilment}
            saveFulfilment={saveFulfilment}
            removeFulfilment={removeFulfilment}
            handleChangeInFulfilmentData={handleChangeInFulfilmentData}
            handleChangeInApiParameterValue={handleChangeInApiParameterValue}
            addResponseInFulfilment={addResponseInFulfilment}
            removeResponseInFulfilment={removeResponseInFulfilment}
            handleChangeInResponseInFulfilment={
              handleChangeInResponseInFulfilment
            }
          />
          <Action
            objToAddAction={objToAddAction}
            apiList={apiList}
            actionList={actionList}
            handleChangeInApiParameterValue={
              handleChangeInApiParameterValueInAction
            }
            addAction={addAction}
            saveAction={updateAction}
            handleChangeInActionData={handleChangeInActionInCreateActionModal}
            handleChangeObjectToUpdateAction={handleChangeObjectToUpdateAction}
            removeAction={removeAction}
            intentParameter={intentParameter}
            clearActionModal={clearActionModal}
          />
          <ResponseDetail
            apiList={apiList}
            fulfilmentList={fulfilmentList}
            botResponse={botResponse}
            intentParameter={intentParameter}
            handleChangeToAddTextResponse={handleChangeToAddTextResponse}
            handleChangeToRemoveTextResponse={handleChangeToRemoveTextResponse}
            handleChangeToAddResponse={handleChangeToAddResponse}
            handleChangeRemoveResponse={handleChangeRemoveResponse}
            handleChangeBotResponse={handleChangeBotResponse}
            selectIntentParamIdForBotResponse={
              selectIntentParamIdForBotResponse
            }
            handleChangeIntentParameter={handleChangeIntentParameter}
            handleChangePlainBotResponse={handleChangePlainBotResponse}
          />
          <DivWrapper
            style={{
              padding: '10px 0',
              boxShadow: 'none',
              background: 'none',
              display: 'flex',
              justifyContent: 'flex-end',
              border: 'none',
            }}
          >
            <CustomButton
              primary
              disabled={disableValue}
              type="submit"
              size="large"
              clicked={() => {
                validateIntent();
                ValidateIntent(intentParameter) === false
                  ? null
                  : updateIntent(intentId, botId, defaultLanguage);
              }}
              style={
                disableValue
                  ? {
                      width: '96px',
                      borderRadius: '5px',
                      cursor: 'auto',
                      background: 'rgb(132, 148, 247)',
                      color: '#fff',
                      border: '1px solid rgb(132, 148, 247)',
                      marginRight: '8px',
                    }
                  : { width: '96px', borderRadius: '5px' }
              }
            >
              Update
            </CustomButton>
          </DivWrapper>
        </div>
        <div className={'flex-shrink-1 try-out'}>
          <div
            style={{ width: '30px', cursor: 'pointer' }}
            onClick={() => {
              openTryOutModal();
            }}
          >
            <CommonIcons.ArrowLeft />
            <div className={'try-out-text'}> TRY OUT</div>
          </div>
        </div>
      </div>
      <TryOut botId={botId} />

      {/*paraphrase modal*/}
      <AllParaphraseModal
        optimizationSuccess={optimizationSuccess}
        loadingParaphrase={loadingParaphrase}
        closeModal={closeParaphraseModal}
        visibility={openParaphraseModal}
        intentId={intentId}
        addParaphraseRow={addParaphraseRow}
        handleChangeInParaphrase={handleChangeInParaphrase}
        paraphraseList={paraphraseList}
        removeParaphraseRow={removeParaphraseRow}
        updateParaphrase={updateParaphrase}
      />

      <div
        onClick={() => openParaphraseModalAction(true)}
        style={{ cursor: 'pointer' }}
      >
        <SnackBar
          openSnackbar={openEventSnackBar}
          onClose={closeSnackbar}
          message={eventMsg}
          variant={eventVariant}
          clickHereBtn={true}
        />
      </div>

      <SnackBar
        openSnackbar={snackbar}
        onClose={closeSnackbar}
        message={error}
        variant={variant}
      />
    </CreateIntentStyle>
  );
};

export default IntentDetailScreen;

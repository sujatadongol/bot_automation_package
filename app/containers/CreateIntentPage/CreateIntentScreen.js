import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TryOut from 'containers/TryOut/Loadable';
import { Row } from 'antd';
import DivWrapper from '../../components/DivWrapper/DivWrapper';
import CreateIntentStyle from './Style';
import TrainingPhase from '../../components/CreateIntent/TrainingPhase';
import IntentParameters from '../../components/CreateIntent/IntentParameters';
import CustomButton from '../../components/Button/Button';
import SnackBar from '../../components/Snackbar';
import BotResponses from '../../components/CreateIntent/BotResponse';
import { ValidateIntent } from './helper';
import Fulfilment from '../../components/CreateIntent/FulfilmentList';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BreadCrumbValueFunc } from '../Navbar/helper';
import Action from '../../components/CreateIntent/Action/ActionField';
import history from '../../utils/history';

const CreateIntentScreen = ({
  match,
  loading,
  error,
  openSnackbar,
  variant,
  closeSnackbarInCreateIntentSnackbar,

  apiList,
  fetchThirdPartyApiList,

  intentName,
  entityList,
  fetchEntity,
  handleChangeServiceIdToCreateIntent,
  handleChangeIntentName,

  trainingPhase,
  handleChangeRemoveTrainingPhase,
  handleChangeToAddTrainingPhase,
  handleChangeTrainingPhrase,
  handleChangeInDisplayTrainingPhase,
  handleChangeIntentParameterIdOfTrainingPhrase,
  removeIntentParamFromParticularTrainingPhrase,
  showIntentRowWhenFocus,
  openCreateEntityModal,
  closeCreateEntityModal,
  createEntityModal,

  paramNameList,
  intentParameter,
  checkIsPromptRequired,
  handleChangeToAddIntentParameter,
  handleChangeRemoveIntentParameter,
  uploadIntentParameterIcon,
  handleChangeIntentParameter,
  checkIfParamNameAlreadyExists,

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
  clearActionModal,
  handleChangeObjectToUpdateAction,

  botResponse,
  handleChangeToAddTextResponse,
  handleChangeToRemoveTextResponse,
  handleChangeToAddResponse,
  handleChangeRemoveResponse,
  handleChangeBotResponse,
  selectIntentParamIdForBotResponse,
  handleChangePlainBotResponse,

  validateIntent,
  createIntent,
  clearIntentData,
  clearPromptData,

  isIntentValidatedToBeCreated,
  openBotTabAfterCreatingIntent,

  openTryOutModal,

  intentParamIdUsedInBotResponse,

  reloadContainer,
}) => {
  const { botId, language } = match.params;
  const serviceId = localStorage.getItem('serviceId');
  useEffect(() => {
    handleChangeServiceIdToCreateIntent(serviceId);
    fetchEntity();
    fetchThirdPartyApiList();
    openBotTabAfterCreatingIntent();
  }, []);

  useEffect(
    () => () => {
      clearIntentData();
      closeSnackbarInCreateIntentSnackbar();
    },
    [],
  );

  {
    if (reloadContainer && serviceId) {
      history.push('/bot');
    }
  }

  const disableValue = intentName === '';
  return (
    <CreateIntentStyle>
      <Row className="breadcrumbs">
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={[
            '/home',
            '/bot',
            `/bot/${botId}/intent/${language}`,
          ]}
        />
      </Row>
      {loading ? (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <CircularProgress style={{ color: '#376AF5' }} />
        </div>
      ) : null}
      <div
        className="d-flex"
        style={{ minHeight: '100vh', marginRight: '8px' }}
      >
        <div className="w-100">
          <DivWrapper
            style={{
              padding: 0,
              borderRadius: '10px',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
              marginTop: '8px',
            }}
          >
            <div className="intent-value-header">Intent Name</div>
            <div className="training-phase-input">
              <input
                placeholder="Intent Name"
                className="intent-title"
                value={intentName.match(/[0-9a-zA-Z_.]*/)}
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
          <TrainingPhase
            trainingPhase={trainingPhase}
            handleChangeToAddTrainingPhase={handleChangeToAddTrainingPhase}
            handleChangeRemoveTrainingPhase={handleChangeRemoveTrainingPhase}
            handleChangeTrainingPhrase={handleChangeTrainingPhrase}
            handleChangeInDisplayTrainingPhase={
              handleChangeInDisplayTrainingPhase
            }
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
            fetchEntity={fetchEntity}
          />
          <IntentParameters
            botId={botId}
            intentParamIdUsedInBotResponse={intentParamIdUsedInBotResponse}
            paramNameList={paramNameList}
            isIntentValidatedToBeCreated={isIntentValidatedToBeCreated}
            intentParameter={intentParameter}
            checkIsPromptRequired={checkIsPromptRequired}
            handleChangeToAddIntentParameter={handleChangeToAddIntentParameter}
            handleChangeRemoveIntentParameter={
              handleChangeRemoveIntentParameter
            }
            uploadIntentParameterIcon={uploadIntentParameterIcon}
            handleChangeIntentParameter={handleChangeIntentParameter}
            checkIfParamNameAlreadyExists={checkIfParamNameAlreadyExists}
            entityList={entityList}
            handleChangeRemovePrompt={handleChangeRemovePrompt}
            handleChangeToAddPrompt={handleChangeToAddPrompt}
            handleChangePrompts={handleChangePrompts}
            clearPromptData={clearPromptData}
            openCreateEntityModal={openCreateEntityModal}
            closeCreateEntityModal={closeCreateEntityModal}
            createEntityModal={createEntityModal}
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
          <BotResponses
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
                ValidateIntent(intentParameter, trainingPhase) === false
                  ? null
                  : createIntent(botId, language);
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
                    }
                  : { width: '96px', borderRadius: '5px' }
              }
            >
              Create
            </CustomButton>
          </DivWrapper>
        </div>
        <div className="flex-shrink-1 try-out">
          <div
            style={{ width: '30px', cursor: 'pointer' }}
            onClick={() => {
              openTryOutModal();
            }}
          >
            <ArrowBackIosIcon style={{ marginLeft: '7px', height: 18 }} />
            <div className="try-out-text"> TRY OUT</div>
          </div>
        </div>
      </div>
      <TryOut botId={botId} />

      <SnackBar
        openSnackbar={openSnackbar}
        onClose={closeSnackbarInCreateIntentSnackbar}
        message={error}
        variant={variant}
      />
    </CreateIntentStyle>
  );
};

export default CreateIntentScreen;

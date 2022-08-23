import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectCreateIntentPage, {
  makeSelectActionList,
  makeSelectApiList,
  makeSelectBotResponse,
  makeSelectCheckIsPromptRequired,
  makeSelectError,
  makeSelectFinalPromptData,
  makeSelectFulfilmentList,
  makeSelectIntentName,
  makeSelectIntentParameter,
  makeSelectIntentParamUsedInBotResponse,
  makeSelectLoading,
  makeSelectObjToAddAction,
  makeSelectParamNameList,
  makeSelectPrompt,
  makeSelectResponse,
  makeSelectSnackbar,
  makeSelectTrainingPhase,
  makeSelectValidatedIntent,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import CreateIntentScreen from './CreateIntentScreen';
import {
  addAction,
  addFulfilment,
  addResponseInFulfilment,
  checkIfParamNameAlreadyExists,
  clearActionObj,
  clearIntentData,
  clearPromptData,
  closeSnackbarInCreateIntentSnackbar,
  createIntent,
  fetchThirdPartyApi,
  handleChangeBotResponse,
  handleChangeInActionInCreateActionModal,
  handleChangeInApiParameterValue,
  handleChangeInApiParameterValueInAction,
  handleChangeInDisplayTrainingPhase,
  handleChangeInFulfilment,
  handleChangeInResponseInFulfilment,
  handleChangeIntentName,
  handleChangeIntentParameter,
  handleChangeIntentParameterIdOfTrainingPhrase,
  handleChangeObjectToUpdateAction,
  handleChangePlainBotResponse,
  handleChangePrompts,
  handleChangeRemoveIntentParameter,
  handleChangeRemoveResponse,
  handleChangeRemoveTrainingPhase,
  handleChangeServiceIdToCreateIntent,
  handleChangeToAddIntentParameter,
  handleChangeToAddPromptField,
  handleChangeToAddResponse,
  handleChangeToAddTextResponse,
  handleChangeToAddTrainingPhase,
  handleChangeToRemovePromptField,
  handleChangeToRemoveTextResponse,
  handleChangeTrainingPhases,
  removeAction,
  removeFulfilment,
  removeIntentParamFromParticularTrainingPhrase,
  removeResponseInFulfilment,
  saveFulfilment,
  selectIntentParamIdForBotResponse,
  showIntentRowWhenFocus,
  updateAction,
  uploadIntentParameterIcon,
  validateIntent,
} from './actions';
import {
  makeSelectGlobalEntityList,
  makeSelectOpenCreateEntityModal,
  makeSelectOpenTryOutModal,
  makeSelectReloadContainer,
} from '../App/selectors';
import {
  closeCreateEntityModal,
  fetchEntityInIntent,
  openBotTabAfterCreatingIntent,
  openCreateEntityModal,
  openTryOutModal,
} from '../App/actions';

const mapStateToProps = createStructuredSelector({
  createIntentPage: makeSelectCreateIntentPage(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  openSnackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  apiList: makeSelectApiList(),
  intentName: makeSelectIntentName(),
  entityList: makeSelectGlobalEntityList(),
  trainingPhase: makeSelectTrainingPhase(),
  intentParameter: makeSelectIntentParameter(),
  prompt: makeSelectPrompt(),
  checkIsPromptRequired: makeSelectCheckIsPromptRequired(),
  finalPromptData: makeSelectFinalPromptData(),
  paramNameList: makeSelectParamNameList(),

  botResponse: makeSelectBotResponse(),
  response: makeSelectResponse(),
  intentParamIdUsedInBotResponse: makeSelectIntentParamUsedInBotResponse(),

  fulfilmentList: makeSelectFulfilmentList(),
  actionList: makeSelectActionList(),
  objToAddAction: makeSelectObjToAddAction(),

  isIntentValidatedToBeCreated: makeSelectValidatedIntent(),

  createEntityModal: makeSelectOpenCreateEntityModal(),

  tryOutModalState: makeSelectOpenTryOutModal(),
  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchEntity: () => dispatch(fetchEntityInIntent()),
    fetchThirdPartyApiList: () => dispatch(fetchThirdPartyApi()),
    handleChangeServiceIdToCreateIntent: id =>
      dispatch(handleChangeServiceIdToCreateIntent(id)),
    handleChangeIntentName: intentName =>
      dispatch(handleChangeIntentName(intentName)),

    handleChangeToAddTrainingPhase: () =>
      dispatch(handleChangeToAddTrainingPhase()),
    handleChangeRemoveTrainingPhase: id =>
      dispatch(handleChangeRemoveTrainingPhase(id)),
    handleChangeInDisplayTrainingPhase: (id, value) =>
      dispatch(handleChangeInDisplayTrainingPhase(id, value)),
    handleChangeTrainingPhrase: (key, id, value) =>
      dispatch(handleChangeTrainingPhases(key, id, value)),
    handleChangeIntentParameterIdOfTrainingPhrase: (
      trainingPhraseId,
      intentParamId,
      indexToReplace,
      triggerValue,
    ) =>
      dispatch(
        handleChangeIntentParameterIdOfTrainingPhrase(
          trainingPhraseId,
          intentParamId,
          indexToReplace,
          triggerValue,
        ),
      ),
    removeIntentParamFromParticularTrainingPhrase: (
      trainingPhraseId,
      intentParamId,
      paramName,
      resolvedValue,
    ) =>
      dispatch(
        removeIntentParamFromParticularTrainingPhrase(
          trainingPhraseId,
          intentParamId,
          paramName,
          resolvedValue,
        ),
      ),
    showIntentRowWhenFocus: trainingPhraseId =>
      dispatch(showIntentRowWhenFocus(trainingPhraseId)),

    handleChangeToAddIntentParameter: (intentId, paramName) =>
      dispatch(handleChangeToAddIntentParameter(intentId, paramName)),
    handleChangeRemoveIntentParameter: id =>
      dispatch(handleChangeRemoveIntentParameter(id)),
    handleChangeIntentParameter: (key, id, value) =>
      dispatch(handleChangeIntentParameter(key, id, value)),
    checkIfParamNameAlreadyExists: (intentId, bool) =>
      dispatch(checkIfParamNameAlreadyExists(intentId, bool)),
    uploadIntentParameterIcon: (id, icon) =>
      dispatch(uploadIntentParameterIcon(id, icon)),

    handleChangeToAddPrompt: intentParamId =>
      dispatch(handleChangeToAddPromptField(intentParamId)),
    handleChangeRemovePrompt: (intentParamId, promptId) =>
      dispatch(handleChangeToRemovePromptField(intentParamId, promptId)),
    handleChangePrompts: (intentParamId, promptId, value) =>
      dispatch(handleChangePrompts(intentParamId, promptId, value)),

    handleChangeToAddTextResponse: () =>
      dispatch(handleChangeToAddTextResponse()),
    handleChangeToRemoveTextResponse: id =>
      dispatch(handleChangeToRemoveTextResponse(id)),
    handleChangeToAddResponse: () => dispatch(handleChangeToAddResponse()),
    handleChangeRemoveResponse: (botResponseId, id) =>
      dispatch(handleChangeRemoveResponse(botResponseId, id)),
    handleChangeBotResponse: (botResponseId, key, id, value) =>
      dispatch(handleChangeBotResponse(botResponseId, key, id, value)),
    handleChangePlainBotResponse: (botResponseId, key, id, value) =>
      dispatch(handleChangePlainBotResponse(botResponseId, key, id, value)),
    selectIntentParamIdForBotResponse: (
      botResponseId,
      responseId,
      intentParamId,
      intentParameter,
    ) =>
      dispatch(
        selectIntentParamIdForBotResponse(
          botResponseId,
          responseId,
          intentParamId,
          intentParameter,
        ),
      ),

    //fulfilment
    addFulfilment: id => dispatch(addFulfilment(id)),
    saveFulfilment: id => dispatch(saveFulfilment(id)),
    removeFulfilment: id => dispatch(removeFulfilment(id)),
    handleChangeInFulfilmentData: (fulfilmentId, id, value) =>
      dispatch(handleChangeInFulfilment(fulfilmentId, id, value)),
    handleChangeInApiParameterValue: (
      fulfilmentId,
      paramId,
      id,
      value,
      intentId,
    ) =>
      dispatch(
        handleChangeInApiParameterValue(
          fulfilmentId,
          paramId,
          id,
          value,
          intentId,
        ),
      ),
    addResponseInFulfilment: fulfilmentId =>
      dispatch(addResponseInFulfilment(fulfilmentId)),
    removeResponseInFulfilment: (fulfilmentId, responseId) =>
      dispatch(removeResponseInFulfilment(fulfilmentId, responseId)),
    handleChangeInResponseInFulfilment: (fulfilmentId, responseId, id, value) =>
      dispatch(
        handleChangeInResponseInFulfilment(fulfilmentId, responseId, id, value),
      ),

    //action
    addAction: () => dispatch(addAction()),
    removeAction: id => dispatch(removeAction(id)),
    handleChangeInActionInCreateActionModal: (id, value) =>
      dispatch(handleChangeInActionInCreateActionModal(id, value)),
    handleChangeInApiParameterValueInAction: (actionId, paramId, id, value) =>
      dispatch(
        handleChangeInApiParameterValueInAction(actionId, paramId, id, value),
      ),
    handleChangeObjectToUpdateAction: actionId =>
      dispatch(handleChangeObjectToUpdateAction(actionId)),
    updateAction: id => dispatch(updateAction(id)),
    clearActionModal: id => dispatch(clearActionObj(id)),

    validateIntent: () => dispatch(validateIntent()),
    createIntent: (botId, language) => dispatch(createIntent(botId, language)),

    clearIntentData: () => dispatch(clearIntentData()),
    clearPromptData: () => dispatch(clearPromptData()),

    openCreateEntityModal: () => dispatch(openCreateEntityModal()),
    closeCreateEntityModal: () => dispatch(closeCreateEntityModal()),
    closeSnackbarInCreateIntentSnackbar: bool =>
      dispatch(closeSnackbarInCreateIntentSnackbar(true)),
    openBotTabAfterCreatingIntent: () =>
      dispatch(openBotTabAfterCreatingIntent()),

    openTryOutModal: () => dispatch(openTryOutModal(true)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'createIntentPage', reducer });
const withSaga = useInjectSaga({ key: 'createIntentPage', saga });

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(CreateIntentScreen);

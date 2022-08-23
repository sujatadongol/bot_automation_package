import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectIntentDetail, {
  makeSelectAction,
  makeSelectApiListInIntentDetail,
  makeSelectBotResponse,
  makeSelectError,
  makeSelectEventMsg,
  makeSelectEventVariant,
  makeSelectFulfilmentListInIntentDetail,
  makeSelectIntentDetailData,
  makeSelectIntentNameInDetail,
  makeSelectIntentParam,
  makeSelectIntentParamUsedInBotResponse,
  makeSelectIntentValidation,
  makeSelectLoading,
  makeSelectLoadingParaphrase,
  makeSelectMisleadingIntents,
  makeSelectObjToAddAction,
  makeSelectOpenEventSnackBar,
  makeSelectOpenParaphraseModal,
  makeSelectOptimizationSuccess,
  makeSelectParamNameListInDetail,
  makeSelectParaphraseList,
  makeSelectParaphraseOfSpecificTrainingPhrase,
  makeSelectSnackbar,
  makeSelectSpecificParaphraseTitle,
  makeSelectTrainingPhrase,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import IntentDetailScreen from './IntentDetailScreen';
import {
  addAction,
  addFulfilment,
  addParaphraseRow,
  addResponseInFulfilment,
  addSpecificParaphraseRow,
  checkIfParamNameAlreadyExistsInDetail,
  clearActionObj,
  clearIntentDataInDetail,
  clearParaphraseModal,
  clearPromptDataInDetail,
  closeSnackbarInIntentDetail,
  fetchIntentDetail,
  fetchMisleadingIntents,
  fetchThirdPartyApi,
  getParaphraseById,
  handleChangeBotResponseInDetail,
  handleChangeInActionInCreateActionModal,
  handleChangeInApiParameterValue,
  handleChangeInApiParameterValueInAction,
  handleChangeInDisplayTrainingPhrase,
  handleChangeInFulfilment,
  handleChangeInParaphrase,
  handleChangeInParaphraseEvent,
  handleChangeInResponseInFulfilment,
  handleChangeInSpecificParaphrase,
  handleChangeIntentId,
  handleChangeIntentNameInIntentDetail,
  handleChangeIntentParameterIdOfTrainingPhraseInIntentDetail,
  handleChangeIntentParameterInDetail,
  handleChangeObjectToUpdateAction,
  handleChangePlainBotResponseInDetail,
  handleChangePromptsInDetail,
  handleChangeRemoveIntentParameterInDetail,
  handleChangeRemoveResponseInDetail,
  handleChangeRemoveTrainingPhraseInIntentDetail,
  handleChangeServiceIdToUpdateIntent,
  handleChangeToAddIntentParameterInDetail,
  handleChangeToAddPromptFieldInDetail,
  handleChangeToAddResponseInDetail,
  handleChangeToAddTextResponseInDetail,
  handleChangeToAddTrainingPhraseInIntentDetail,
  handleChangeToRemovePromptFieldInDetail,
  handleChangeToRemoveTextResponseInDetail,
  handleChangeTrainingPhrasesInIntentDetail,
  openParaphraseModalAction,
  optimizeParaphrase,
  removeAction,
  removeFulfilment,
  removeIntentParamFromParticularTrainingPhraseInDetail,
  removeParaphraseRow,
  removeResponseInFulfilment,
  removeSpecificParaphraseRow,
  saveFulfilment,
  selectIntentParamIdForBotResponseInDetail,
  showIntentRowWhenFocusInDetail,
  updateAction,
  updateIntentInDetail,
  updateParaphrase,
  updateSpecificParaphrase,
  uploadIntentParameterIconInDetail,
  validateIntentInDetail,
} from './actions';
import {
  // clearNotificationObj,
  closeCreateEntityModal,
  fetchEntityInIntent,
  openCreateEntityModal,
  openTryOutModal,
} from '../App/actions';
import {
  makeSelectGlobalEntityList,
  makeSelectGlobalNotificationObj,
  makeSelectReloadContainer,
} from '../App/selectors';

const mapStateToProps = createStructuredSelector({
  intentDetail: makeSelectIntentDetail(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  notificationObj: makeSelectGlobalNotificationObj(),

  apiList: makeSelectApiListInIntentDetail(),
  entityList: makeSelectGlobalEntityList(),
  intentName: makeSelectIntentNameInDetail(),

  intentDetailData: makeSelectIntentDetailData(),
  trainingPhrase: makeSelectTrainingPhrase(),
  botResponse: makeSelectBotResponse(),
  intentParameter: makeSelectIntentParam(),
  paramNameList: makeSelectParamNameListInDetail(),
  intentParamIdUsedInBotResponse: makeSelectIntentParamUsedInBotResponse(),

  fulfilmentList: makeSelectFulfilmentListInIntentDetail(),
  isIntentValidatedToBeCreated: makeSelectIntentValidation(),

  actionList: makeSelectAction(),
  objToAddAction: makeSelectObjToAddAction(),

  openParaphraseModal: makeSelectOpenParaphraseModal(),
  optimizationSuccess: makeSelectOptimizationSuccess(),
  loadingParaphrase: makeSelectLoadingParaphrase(),
  paraphraseList: makeSelectParaphraseList(),
  paraphraseOfSpecificTrainingPhrase: makeSelectParaphraseOfSpecificTrainingPhrase(),
  specificParaphraseTitle: makeSelectSpecificParaphraseTitle(),
  eventMsg: makeSelectEventMsg(),
  openEventSnackBar: makeSelectOpenEventSnackBar(),
  eventVariant: makeSelectEventVariant(),

  misleadingIntents: makeSelectMisleadingIntents(),

  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeSnackbar: bool => dispatch(closeSnackbarInIntentDetail(true)),
    clearNotificationObj: bool => dispatch(clearNotificationObj(true)),

    clearParaphraseModal: () => dispatch(clearParaphraseModal()),
    fetchThirdPartyApiList: () => dispatch(fetchThirdPartyApi()),
    fetchIntentDetailById: intentId => dispatch(fetchIntentDetail(intentId)),
    fetchEntity: () => dispatch(fetchEntityInIntent()),
    handleChangeServiceIdToUpdateIntent: serviceId =>
      dispatch(handleChangeServiceIdToUpdateIntent(serviceId)),
    handleChangeIntentId: intentId => dispatch(handleChangeIntentId(intentId)),
    handleChangeIntentName: intentName =>
      dispatch(handleChangeIntentNameInIntentDetail(intentName)),

    //training phrases
    handleChangeToAddTrainingPhase: () =>
      dispatch(handleChangeToAddTrainingPhraseInIntentDetail()),
    handleChangeRemoveTrainingPhase: id =>
      dispatch(handleChangeRemoveTrainingPhraseInIntentDetail(id)),
    handleChangeTrainingPhrase: (key, id, value) =>
      dispatch(handleChangeTrainingPhrasesInIntentDetail(key, id, value)),
    handleChangeInDisplayTrainingPhrase: (id, value) =>
      dispatch(handleChangeInDisplayTrainingPhrase(id, value)),
    handleChangeIntentParameterIdOfTrainingPhrase: (
      trainingPhraseId,
      intentParamId,
      indexToReplace,
      triggerValue,
    ) =>
      dispatch(
        handleChangeIntentParameterIdOfTrainingPhraseInIntentDetail(
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
        removeIntentParamFromParticularTrainingPhraseInDetail(
          trainingPhraseId,
          intentParamId,
          paramName,
          resolvedValue,
        ),
      ),
    showIntentRowWhenFocus: trainingPhraseId =>
      dispatch(showIntentRowWhenFocusInDetail(trainingPhraseId)),

    //intent parameter
    handleChangeToAddIntentParameter: intentId =>
      dispatch(handleChangeToAddIntentParameterInDetail(intentId)),
    handleChangeRemoveIntentParameter: id =>
      dispatch(handleChangeRemoveIntentParameterInDetail(id)),
    handleChangeIntentParameter: (key, id, value) =>
      dispatch(handleChangeIntentParameterInDetail(key, id, value)),
    checkIfParamNameAlreadyExistsInDetail: (intentId, bool) =>
      dispatch(checkIfParamNameAlreadyExistsInDetail(intentId, bool)),
    uploadIntentParameterIcon: (id, icon) =>
      dispatch(uploadIntentParameterIconInDetail(id, icon)),

    handleChangeToAddPrompt: intentParamId =>
      dispatch(handleChangeToAddPromptFieldInDetail(intentParamId)),
    handleChangeRemovePrompt: (intentParamId, promptId) =>
      dispatch(
        handleChangeToRemovePromptFieldInDetail(intentParamId, promptId),
      ),
    handleChangePrompts: (intentParamId, promptId, value) =>
      dispatch(handleChangePromptsInDetail(intentParamId, promptId, value)),

    //fulfilment
    addFulfilment: id => dispatch(addFulfilment(id)),
    saveFulfilment: id => dispatch(saveFulfilment(id)),
    removeFulfilment: id => dispatch(removeFulfilment(id)),
    handleChangeInFulfilmentData: (fulfilmentId, id, value) =>
      dispatch(handleChangeInFulfilment(fulfilmentId, id, value)),
    handleChangeInApiParameterValue: (fulfilmentId, paramId, id, value) =>
      dispatch(
        handleChangeInApiParameterValue(fulfilmentId, paramId, id, value),
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
    handleChangeObjectToUpdateAction: actionObj =>
      dispatch(handleChangeObjectToUpdateAction(actionObj)),
    updateAction: id => dispatch(updateAction(id)),
    clearActionModal: id => dispatch(clearActionObj(id)),

    //bot response
    handleChangeToAddTextResponse: () =>
      dispatch(handleChangeToAddTextResponseInDetail()),
    handleChangeToRemoveTextResponse: id =>
      dispatch(handleChangeToRemoveTextResponseInDetail(id)),
    handleChangeToAddResponse: () =>
      dispatch(handleChangeToAddResponseInDetail()),
    handleChangeRemoveResponse: (botResponseId, id) =>
      dispatch(handleChangeRemoveResponseInDetail(botResponseId, id)),
    handleChangeBotResponse: (botResponseId, key, id, value) =>
      dispatch(handleChangeBotResponseInDetail(botResponseId, key, id, value)),
    handleChangePlainBotResponse: (botResponseId, key, id, value) =>
      dispatch(
        handleChangePlainBotResponseInDetail(botResponseId, key, id, value),
      ),
    selectIntentParamIdForBotResponse: (
      botResponseId,
      responseId,
      intentParamId,
    ) =>
      dispatch(
        selectIntentParamIdForBotResponseInDetail(
          botResponseId,
          responseId,
          intentParamId,
        ),
      ),

    validateIntent: () => dispatch(validateIntentInDetail()),
    updateIntent: (intentId, botId, language) =>
      dispatch(updateIntentInDetail(intentId, botId, language)),

    clearIntentData: () => dispatch(clearIntentDataInDetail()),
    clearPromptData: () => dispatch(clearPromptDataInDetail()),

    openCreateEntityModal: () => dispatch(openCreateEntityModal()),
    closeCreateEntityModal: () => dispatch(closeCreateEntityModal()),

    openTryOutModal: () => dispatch(openTryOutModal(true)),

    //paraphrasing
    openParaphraseModalAction: bool =>
      dispatch(openParaphraseModalAction(bool)),
    handleChangeInParaphraseEvent: (obj, msg) =>
      dispatch(handleChangeInParaphraseEvent(obj, msg)),
    optimizeParaphrase: intentId => dispatch(optimizeParaphrase(intentId)),
    addParaphraseRow: phraseId => dispatch(addParaphraseRow(phraseId)),
    removeParaphraseRow: (trainingPhraseId, removedPhraseId) =>
      dispatch(removeParaphraseRow(trainingPhraseId, removedPhraseId)),
    handleChangeInParaphrase: (phraseId, value) =>
      dispatch(handleChangeInParaphrase(phraseId, value)),
    updateParaphrase: intentId => dispatch(updateParaphrase(intentId)),
    getParaphraseById: (id, text) => dispatch(getParaphraseById(id, text)),
    addSpecificParaphraseRow: () => dispatch(addSpecificParaphraseRow()),
    removeSpecificParaphraseRow: removedPhraseId =>
      dispatch(removeSpecificParaphraseRow(removedPhraseId)),
    handleChangeInSpecificParaphrase: (id, value) =>
      dispatch(handleChangeInSpecificParaphrase(id, value)),
    updateSpecificParaphraseRow: id => dispatch(updateSpecificParaphrase(id)),

    fetchMisleadingIntents: (id, similarPhrases) =>
      dispatch(fetchMisleadingIntents(id, similarPhrases)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'intentDetail', reducer });
const withSaga = useInjectSaga({ key: 'intentDetail', saga });
export default compose(
  withConnect,
  withReducer,
  withSaga,
)(IntentDetailScreen);

import { ACTION_TYPE_INTENT_DETAIL, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInIntentDetail = bool => ({
  type: ACTION_TYPE_INTENT_DETAIL.API_REQUEST_MADE_IN_INTENT_DETAIL,
  bool,
});

export const closeSnackbarInIntentDetail = bool => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLOSE_SNACKBAR_IN_INTENT_DETAIL,
  bool,
});

export const fetchIntentDetail = intentId => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID,
  intentId,
});

export const fetchIntentDetailSuccess = intentDetail => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID_SUCCESS,
  intentDetail,
});

export const fetchIntentDetailFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID_FAILURE,
  error,
});

export const fetchEntityListInIntentDetail = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_ENTITY_IN_INTENT_DETAIL,
});

export const fetchEntityListInIntentDetailSuccess = entityList => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_ENTITY_IN_INTENT_DETAIL_SUCCESS,
  entityList,
});

export const fetchEntityListInIntentDetailFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_ENTITY_IN_INTENT_DETAIL_FAILURE,
  error,
});

// fetch third party api
export const fetchThirdPartyApi = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_IN_INTENT_DETAIL,
});
export const fetchThirdPartyApiSuccess = apiList => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_SUCCESS_IN_INTENT_DETAIL,
  apiList,
});
export const fetchThirdPartyApiFailure = error => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_FAILURE_IN_INTENT_DETAIL,
  error,
});

export const handleChangeServiceIdToUpdateIntent = serviceId => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_SERVICE_ID_TO_UPDATE_INTENT,
  serviceId,
});

export const handleChangeIntentId = intentId => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_ID,
  intentId,
});

export const handleChangeIntentNameInIntentDetail = intentName => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_NAME_IN_INTENT_DETAIL,
  intentName,
});

// training section
export const handleChangeToAddTrainingPhraseInIntentDetail = () => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_TRAINING_PHASE_IN_INTENT_DETAIL,
});
export const handleChangeRemoveTrainingPhraseInIntentDetail = id => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE_IN_INTENT_DETAIL,
  id,
});
export const handleChangeTrainingPhrasesInIntentDetail = (key, id, value) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TRAINING_PHASE_IN_INTENT_DETAIL,
  key,
  id,
  value,
});
export const handleChangeInDisplayTrainingPhrase = (id, value) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE,
  id,
  value,
});
export const handleChangeIntentParameterIdOfTrainingPhraseInIntentDetail = (
  trainingPhraseId,
  intentParamId,
  indexToReplace,
  triggerValue,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE_IN_INTENT_DETAIL,
  trainingPhraseId,
  intentParamId,
  indexToReplace,
  triggerValue,
});
export const removeIntentParamFromParticularTrainingPhraseInDetail = (
  trainingPhraseId,
  intentParamId,
  paramName,
  resolvedValue,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE_IN_INTENT_DETAIL,
  trainingPhraseId,
  intentParamId,
  paramName,
  resolvedValue,
});
export const showIntentRowWhenFocusInDetail = trainingPhraseId => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED_IN_INTENT_DETAIL,
  trainingPhraseId,
});

// intent parameter
export const handleChangeToAddIntentParameterInDetail = intentId => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER_IN_INTENT_DETAIL,
  intentId,
});
export const handleChangeRemoveIntentParameterInDetail = id => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER_IN_INTENT_DETAIL,
  id,
});
export const checkIfParamNameAlreadyExistsInDetail = (intentId, bool) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.CHECK_IF_PARAM_NAME_ALREADY_EXISTS_IN_INTENT_DETAIL,
  intentId,
  bool,
});
export const handleChangeIntentParameterInDetail = (key, id, value) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_PARAMETER_IN_INTENT_DETAIL,
  key,
  id,
  value,
});

export const uploadIntentParameterIconInDetail = (id, icon) => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPLOAD_INTENT_PARAMETER_ICON_IN_INTENT_DETAIL,
  id,
  icon,
});
export const uploadIntentParameterIconSuccessInDetail = iconUrl => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.UPLOAD_INTENT_PARAMETER_ICON_SUCCESS_IN_INTENT_DETAIL,
  iconUrl,
});
export const uploadIntentParameterIconFailureInDetail = error => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.UPLOAD_INTENT_PARAMETER_ICON_FAILURE_IN_INTENT_DETAIL,
  error,
});

// prompt
export const handleChangeToAddPromptFieldInDetail = intentParamId => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_PROMPT_FIELD_IN_INTENT_DETAIL,
  intentParamId,
});
export const handleChangeToRemovePromptFieldInDetail = (
  intentParamId,
  promptId,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD_IN_INTENT_DETAIL,
  intentParamId,
  promptId,
});
export const handleChangePromptsInDetail = (
  intentParamId,
  promptId,
  value,
) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_PROMPTS_IN_INTENT_DETAIL,
  intentParamId,
  promptId,
  value,
});
export const clearPromptDataInDetail = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLEAR_PROMPT_VALUE_IN_INTENT_DETAIL,
});

// fulfilment
export const addFulfilment = id => ({
  type: ACTION_TYPE_INTENT_DETAIL.ADD_FULFILMENT_IN_INTENT_DETAIL,
  id,
});
export const removeFulfilment = id => ({
  type: ACTION_TYPE_INTENT_DETAIL.REMOVE_FULFILMENT_IN_INTENT_DETAIL,
  id,
});
export const handleChangeInFulfilment = (fulfilmentId, id, value) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_FULFILMENT_DATA_IN_INTENT_DETAIL,
  fulfilmentId,
  id,
  value,
});
export const handleChangeInApiParameterValue = (
  fulfilmentId,
  paramId,
  id,
  value,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_INTENT_DETAIL,
  fulfilmentId,
  paramId,
  id,
  value,
});

export const saveFulfilment = id => ({
  type: ACTION_TYPE_INTENT_DETAIL.SAVE_FULFILMENT_IN_INTENT_DETAIL,
  id,
});
export const addResponseInFulfilment = fulfilmentId => ({
  type: ACTION_TYPE_INTENT_DETAIL.ADD_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL,
  fulfilmentId,
});
export const removeResponseInFulfilment = (fulfilmentId, responseId) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.REMOVE_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL,
  fulfilmentId,
  responseId,
});
export const handleChangeInResponseInFulfilment = (
  fulfilmentId,
  responseId,
  id,
  value,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL,
  fulfilmentId,
  responseId,
  id,
  value,
});

// action
export const addAction = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.ADD_ACTION_IN_INTENT_DETAIL,
});
export const removeAction = actionId => ({
  type: ACTION_TYPE_INTENT_DETAIL.REMOVE_ACTION_IN_INTENT_DETAIL,
  actionId,
});
export const handleChangeInActionInCreateActionModal = (id, value) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL_IN_INTENT_DETAIL,
  id,
  value,
});
export const handleChangeInApiParameterValueInAction = (
  actionId,
  paramId,
  id,
  value,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL_IN_INTENT_DETAIL,
  actionId,
  paramId,
  id,
  value,
});
export const handleChangeObjectToUpdateAction = actionObj => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION_IN_INTENT_DETAIL,
  actionObj,
});
export const updateAction = actionId => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_ACTION_IN_INTENT_DETAIL,
  actionId,
});
export const clearActionObj = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLEAR_ACTION_OBJECT_IN_INTENT_DETAIL,
});

// response
export const handleChangeToAddTextResponseInDetail = () => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES_IN_INTENT_DETAIL,
});
export const handleChangeToRemoveTextResponseInDetail = botResponseId => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES_IN_INTENT_DETAIL,
  botResponseId,
});
export const handleChangeToAddResponseInDetail = botResponseId => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_RESPONSES_IN_INTENT_DETAIL,
  botResponseId,
});
export const handleChangeRemoveResponseInDetail = (
  botResponseId,
  responseId,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_RESPONSES_IN_INTENT_DETAIL,
  botResponseId,
  responseId,
});
export const handleChangeBotResponseInDetail = (
  botResponseId,
  key,
  id,
  value,
) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_BOT_RESPONSE_IN_INTENT_DETAIL,
  botResponseId,
  key,
  id,
  value,
});
export const handleChangePlainBotResponseInDetail = (
  botResponseId,
  key,
  id,
  value,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_PLAIN_BOT_RESPONSE_IN_INTENT_DETAIL,
  botResponseId,
  key,
  id,
  value,
});
export const selectIntentParamIdForBotResponseInDetail = (
  botResponseId,
  responseId,
  intentParamId,
  intentParameter,
) => ({
  type:
    ACTION_TYPE_INTENT_DETAIL.SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE_IN_INTENT_DETAIL,
  botResponseId,
  responseId,
  intentParamId,
  intentParameter,
});

// update
export const validateIntentInDetail = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.VALIDATE_INTENT_IN_INTENT_DETAIL,
});

export const updateIntentInDetail = (intentId, botId, language) => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT,
  intentId,
  botId,
  language,
});
export const updateIntentSuccess = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT_SUCCESS,
});
export const updateIntentFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT_FAILURE,
  error,
});

export const clearIntentDataInDetail = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLEAR_INTENT_DATA_IN_INTENT_DETAIL,
});

export const clearIntentApiDataInDetail = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLEAR_INTENT_API_DATA,
});

// optimize paraphrase
export const apiRequestMadeForLoadingParaphrase = bool => ({
  type: ACTION_TYPE_INTENT_DETAIL.API_REQUEST_MADE_FOR_LOADING_PARAPHRASE,
  bool,
});

export const clearParaphraseModal = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.CLEAR_PARAPHRASE_MODAL,
});

export const openParaphraseModalAction = bool => ({
  type: ACTION_TYPE_INTENT_DETAIL.OPEN_PARAPHRASE_MODAL,
  bool,
});

export const handleChangeInParaphraseEvent = (paraphraseObj, msg) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_PARAPHRASE_EVENT,
  paraphraseObj,
  msg,
});

export const optimizeParaphrase = intentId => ({
  type: ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE,
  intentId,
});
export const optimizeParaphraseSuccess = res => ({
  type: ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE_SUCCESS,
  res,
});
export const optimizeParaphraseFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE_FAILURE,
  error,
});

export const addParaphraseRow = phraseId => ({
  type: ACTION_TYPE_INTENT_DETAIL.ADD_PARAPHRASE_ROW,
  phraseId,
});
export const removeParaphraseRow = removedPhraseId => ({
  type: ACTION_TYPE_INTENT_DETAIL.REMOVE_PARAPHRASE_ROW,
  removedPhraseId,
});
export const handleChangeInParaphrase = (phraseId, value) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_PARAPHRASE,
  phraseId,
  value,
});

export const updateParaphrase = intentId => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE,
  intentId,
});
export const updateParaphraseSuccess = res => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE_SUCCESS,
  res,
});
export const updateParaphraseFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE_FAILURE,
  error,
});

export const getParaphraseById = (id, title) => ({
  type: ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID,
  id,
  title,
});
export const getParaphraseByIdSuccess = res => ({
  type: ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID_SUCCESS,
  res,
});
export const getParaphraseByIdFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID_FAILURE,
  error,
});

export const addSpecificParaphraseRow = () => ({
  type: ACTION_TYPE_INTENT_DETAIL.ADD_SPECIFIC_PARAPHRASE_ROW,
});
export const removeSpecificParaphraseRow = removedPhraseId => ({
  type: ACTION_TYPE_INTENT_DETAIL.REMOVE_SPECIFIC_PARAPHRASE_ROW,
  removedPhraseId,
});
export const handleChangeInSpecificParaphrase = (id, value) => ({
  type: ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_SPECIFIC_PARAPHRASE,
  id,
  value,
});

export const updateSpecificParaphrase = id => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE,
  id,
});
export const updateSpecificParaphraseSuccess = res => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE_SUCCESS,
  res,
});
export const updateSpecificParaphraseFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE_FAILURE,
  error,
});

export const fetchMisleadingIntents = (id, similarPhrases) => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT,
  id,
  similarPhrases,
});
export const fetchMisleadingIntentsSuccess = res => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT_SUCCESS,
  res,
});
export const fetchMisleadingIntentsFailure = error => ({
  type: ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT_FAILURE,
  error,
});

import { ACTION_TYPE_CREATE_INTENT, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInCreateIntent = bool => ({
  type: ACTION_TYPE_CREATE_INTENT.API_REQUEST_MADE_IN_CREATE_INTENT,
  bool,
});
export const closeSnackbarInCreateIntentSnackbar = bool => ({
  type: ACTION_TYPE_CREATE_INTENT.CLOSE_SNACKBAR_IN_CREATE_INTENT,
  bool,
});

//fetch third party api
export const fetchThirdPartyApi = () => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API,
});
export const fetchThirdPartyApiSuccess = apiList => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API_SUCCESS,
  apiList,
});
export const fetchThirdPartyApiFailure = error => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API_FAILURE,
  error,
});

//fetch entity
export const fetchEntityInCreateIntent = () => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_ENTITY_IN_CREATE_INTENT,
});
export const fetchEntityInCreateIntentSuccess = entityList => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_ENTITY_IN_CREATE_INTENT_SUCCESS,
  entityList,
});
export const fetchEntityInCreateIntentFailure = error => ({
  type: ACTION_TYPE_CREATE_INTENT.FETCH_ENTITY_IN_CREATE_INTENT_FAILURE,
  error,
});

export const handleChangeServiceIdToCreateIntent = serviceId => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_SERVICE_ID_TO_CREATE_INTENT,
  serviceId,
});

export const handleChangeIntentName = intentName => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_NAME,
  intentName,
});

//training phases
export const handleChangeInDisplayTrainingPhase = (id, value) => ({
  type:
    ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE_IN_CREATE_INTENT,
  id,
  value,
});
export const handleChangeToAddTrainingPhase = () => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_TRAINING_PHASE,
});
export const handleChangeRemoveTrainingPhase = id => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE,
  id,
});
export const handleChangeTrainingPhases = (key, id, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TRAINING_PHASE,
  key,
  id,
  value,
});
export const handleChangeIntentParameterIdOfTrainingPhrase = (
  trainingPhraseId,
  intentParamId,
  indexToReplace,
  triggerValue,
) => ({
  type:
    ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE,
  trainingPhraseId,
  intentParamId,
  indexToReplace,
  triggerValue,
});
export const removeIntentParamFromParticularTrainingPhrase = (
  trainingPhraseId,
  intentParamId,
  paramName,
  resolvedValue,
) => ({
  type:
    ACTION_TYPE_CREATE_INTENT.REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE,
  trainingPhraseId,
  intentParamId,
  paramName,
  resolvedValue,
});
export const showIntentRowWhenFocus = trainingPhraseId => ({
  type:
    ACTION_TYPE_CREATE_INTENT.SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED,
  trainingPhraseId,
});

//intent parameter
export const handleChangeToAddIntentParameter = (intentId, paramName) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER,
  intentId,
  paramName,
});
export const handleChangeRemoveIntentParameter = id => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER,
  id,
});
export const handleChangeIntentParameter = (key, id, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_PARAMETER,
  key,
  id,
  value,
});
export const checkIfParamNameAlreadyExists = (intentId, bool) => ({
  type: ACTION_TYPE_CREATE_INTENT.CHECK_IF_PARAM_NAME_ALREADY_EXISTS,
  intentId,
  bool,
});
export const uploadIntentParameterIcon = (id, icon) => ({
  type: ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON,
  id,
  icon,
});
export const uploadIntentParameterIconSuccess = iconUrl => ({
  type: ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON_SUCCESS,
  iconUrl,
});
export const uploadIntentParameterIconFailure = error => ({
  type: ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON_FAILURE,
  error,
});

//response
export const handleChangeToAddTextResponse = () => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES,
});
export const handleChangeToRemoveTextResponse = botResponseId => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES,
  botResponseId,
});
export const handleChangeToAddResponse = botResponseId => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_RESPONSES,
  botResponseId,
});
export const handleChangeRemoveResponse = (botResponseId, responseId) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_RESPONSES,
  botResponseId,
  responseId,
});
export const handleChangeBotResponse = (botResponseId, key, id, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_BOT_RESPONSE,
  botResponseId,
  key,
  id,
  value,
});
export const handleChangePlainBotResponse = (
  botResponseId,
  key,
  id,
  value,
) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_PLAIN_BOT_RESPONSE,
  botResponseId,
  key,
  id,
  value,
});
export const selectIntentParamIdForBotResponse = (
  botResponseId,
  responseId,
  intentParamId,
  intentParameter,
) => ({
  type: ACTION_TYPE_CREATE_INTENT.SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE,
  botResponseId,
  responseId,
  intentParamId,
  intentParameter,
});

//prompt
export const handleChangeToAddPromptField = intentParamId => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_PROMPT_FIELD,
  intentParamId,
});
export const handleChangeToRemovePromptField = (intentParamId, promptId) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD,
  intentParamId,
  promptId,
});
export const handleChangePrompts = (intentParamId, promptId, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_PROMPTS,
  intentParamId,
  promptId,
  value,
});
export const clearPromptData = () => ({
  type: ACTION_TYPE_CREATE_INTENT.CLEAR_PROMPT_VALUE,
});

//fulfilment
export const addFulfilment = id => ({
  type: ACTION_TYPE_CREATE_INTENT.ADD_FULFILMENT,
  id,
});
export const removeFulfilment = id => ({
  type: ACTION_TYPE_CREATE_INTENT.REMOVE_FULFILMENT,
  id,
});
export const handleChangeInFulfilment = (fulfilmentId, id, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_FULFILMENT_DATA,
  fulfilmentId,
  id,
  value,
});
export const handleChangeInApiParameterValue = (
  fulfilmentId,
  paramId,
  id,
  value,
  intentId,
) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_API_PARAMETER_VALUE,
  fulfilmentId,
  paramId,
  id,
  value,
  intentId,
});

export const saveFulfilment = id => ({
  type: ACTION_TYPE_CREATE_INTENT.SAVE_FULFILMENT,
  id,
});
export const addResponseInFulfilment = fulfilmentId => ({
  type: ACTION_TYPE_CREATE_INTENT.ADD_RESPONSE_IN_FULFILMENT,
  fulfilmentId,
});
export const removeResponseInFulfilment = (fulfilmentId, responseId) => ({
  type: ACTION_TYPE_CREATE_INTENT.REMOVE_RESPONSE_IN_FULFILMENT,
  fulfilmentId,
  responseId,
});
export const handleChangeInResponseInFulfilment = (
  fulfilmentId,
  responseId,
  id,
  value,
) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT,
  fulfilmentId,
  responseId,
  id,
  value,
});

//action
export const addAction = () => ({
  type: ACTION_TYPE_CREATE_INTENT.ADD_ACTION,
});
export const removeAction = actionId => ({
  type: ACTION_TYPE_CREATE_INTENT.REMOVE_ACTION,
  actionId,
});
export const handleChangeInActionInCreateActionModal = (id, value) => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL,
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
    ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL,
  actionId,
  paramId,
  id,
  value,
});
export const handleChangeObjectToUpdateAction = actionId => ({
  type: ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION,
  actionId,
});
export const updateAction = actionId => ({
  type: ACTION_TYPE_CREATE_INTENT.UPDATE_ACTION,
  actionId,
});
export const clearActionObj = () => ({
  type: ACTION_TYPE_CREATE_INTENT.CLEAR_ACTION_OBJECT,
});

//create
export const validateIntent = () => ({
  type: ACTION_TYPE_CREATE_INTENT.VALIDATE_INTENT,
});

export const createIntent = (botId, language) => ({
  type: ACTION_TYPE_CREATE_INTENT.CREATE_INTENT,
  botId,
  language,
});
export const createIntentSuccess = () => ({
  type: ACTION_TYPE_CREATE_INTENT.CREATE_INTENT_SUCCESS,
});
export const createIntentFailure = error => ({
  type: ACTION_TYPE_CREATE_INTENT.CREATE_INTENT_FAILURE,
  error,
});

export const clearIntentData = () => ({
  type: ACTION_TYPE_CREATE_INTENT.CLEAR_INTENT_DATA,
});

export const clearIntentApiData = () => ({
  type: ACTION_TYPE_CREATE_INTENT.CLEAR_INTENT_API_DATA,
});

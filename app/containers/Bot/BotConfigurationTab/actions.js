import {
  ACTION_TYPE_BOT_CONFIGURATION_TAB,
  ACTION_TYPE_BOT_SETTING,
  ACTION_TYPE_ENTITY,
  ACTION_TYPE_INTENT,
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInBotConfiguration = bool => ({
  type: ACTION_TYPE_BOT_CONFIGURATION_TAB.API_REQUEST_MADE_IN_BOT_CONFIGURATION,
  bool,
});

export const closeSnackbarInBotConfiguration = bool => ({
  type: ACTION_TYPE_BOT_CONFIGURATION_TAB.CLOSE_SNACKBAR_IN_BOT_CONFIGURATION,
  bool,
});

export const openSnackbarInBotConfiguration = (bool, msg, variant) => ({
  type: ACTION_TYPE_BOT_CONFIGURATION_TAB.OPEN_SNACKBAR_IN_BOT_CONFIGURATION,
  bool,
  msg,
  variant,
});

export const handleChangeLastTrained = lastTrained => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_LAST_TRAINED,
  lastTrained,
});

export const handleChangeInImportedIntentCount = count => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_IMPORTED_INTENTS_COUNT,
  count,
});

export const clearBotSetting = () => ({
  type: ACTION_TYPE_BOT_SETTING.CLEAR_BOT_SETTING,
});

export const fetchSystemEntityList = (botId, from, isPaginating) => ({
  type: ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY,
  botId,
  from,
  isPaginating,
});

export const fetchSystemEntityListSuccess = (
  systemEntityList,
  isPaginating,
) => ({
  type: ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY_SUCCESS,
  systemEntityList,
  isPaginating,
});

export const fetchSystemEntityListFailure = error => ({
  type: ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY_FAILURE,
  error,
});

export const fetchEntityList = (botId, from, isPaginating) => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY,
  botId,
  from,
  isPaginating,
});

export const fetchEntityListSuccess = (entityList, isPagnating) => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY_SUCCESS,
  entityList,
  isPagnating,
});

export const fetchEntityListFailure = error => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY_FAILURE,
  error,
});

//fetch by id
export const handleChangeEntityId = id => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_ID,
  id,
});

export const fetchEntityListById = () => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID,
});

export const fetchEntityListByIdSuccess = entityDetail => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID_SUCCESS,
  entityDetail,
});

export const fetchEntityListByIdFailure = error => ({
  type: ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID_FAILURE,
  error,
});

//regex
export const removeRegex = id => ({
  type: ACTION_TYPE_ENTITY.REMOVE_REGEX_IN_ENTITY,
  id,
});
export const handleChangeRegex = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_REGEX_IN_ENTITY,
  id,
  value,
});

//synonym
export const removeSynonym = id => ({
  type: ACTION_TYPE_ENTITY.REMOVE_SYNONYM_IN_ENTITY,
  id,
});
export const removeSynonymTag = (synonymId, tagId) => ({
  type: ACTION_TYPE_ENTITY.REMOVE_SYNONYM_TAG,
  synonymId,
  tagId,
});
export const handleChangeSynonym = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_SYNONYM_IN_ENTITY,
  id,
  value,
});
export const handleChangeInTagInput = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_IN_TAG_INPUT_IN_ENTITY,
  id,
  value,
});

export const handleChangeSynonymTag = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_SYNONYM_TAG_IN_ENTITY,
  id,
  value,
});

export const handleChangeEntityData = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_DATA_IN_ENTITY,
  id,
  value,
});

export const createEntity = botId => ({
  type: ACTION_TYPE_ENTITY.CREATE_ENTITY_IN_ENTITY,
  botId,
});

export const createEntitySuccess = res => ({
  type: ACTION_TYPE_ENTITY.CREATE_ENTITY_SUCCESS_IN_ENTITY,
  res,
});

export const createEntityFailure = error => ({
  type: ACTION_TYPE_ENTITY.CREATE_ENTITY_FAILURE_IN_ENTITY,
  error,
});

export const handleChangeEntityDetail = (id, value) => ({
  type: ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_DETAIL,
  id,
  value,
});
export const updateEntity = () => ({
  type: ACTION_TYPE_ENTITY.UPDATE_ENTITY,
});

export const updateEntitySuccess = res => ({
  type: ACTION_TYPE_ENTITY.UPDATE_ENTITY_SUCCESS,
  res,
});

export const updateEntityFailure = error => ({
  type: ACTION_TYPE_ENTITY.UPDATE_ENTITY_FAILURE,
  error,
});

export const deleteEntity = botId => ({
  type: ACTION_TYPE_ENTITY.DELETE_ENTITY,
  botId,
});

export const deleteEntitySuccess = res => ({
  type: ACTION_TYPE_ENTITY.DELETE_ENTITY_SUCCESS,
  res,
});

export const deleteEntityFailure = error => ({
  type: ACTION_TYPE_ENTITY.DELETE_ENTITY_FAILURE,
  error,
});

export const clearEntityData = data => ({
  type: ACTION_TYPE_ENTITY.CLEAR_ENTITY_DATA_IN_ENTITY,
  data,
});

//intent
export const clearIntent = () => ({
  type: ACTION_TYPE_INTENT.CLEAR_INTENT,
});
export const fetchIntent = (from, botId, isPaginating, language) => ({
  type: ACTION_TYPE_INTENT.FETCH_INTENT,
  from,
  botId,
  isPaginating,
  language,
});
export const fetchIntentSuccess = (intentList, from, isPaginating) => ({
  type: ACTION_TYPE_INTENT.FETCH_INTENT_SUCCESS,
  intentList,
  from,
  isPaginating,
});
export const fetchIntentFailure = error => ({
  type: ACTION_TYPE_INTENT.FETCH_INTENT_FAILURE,
  error,
});

export const handleChangeLanguage = language => ({
  type: ACTION_TYPE_INTENT.HANDLE_CHANGE_LANGUAGE,
  language,
});
export const retrainIntent = (botId, language) => ({
  type: ACTION_TYPE_INTENT.RETRAIN_INTENT,
  botId,
  language,
});
export const retrainIntentSuccess = () => ({
  type: ACTION_TYPE_INTENT.RETRAIN_INTENT_SUCCESS,
});
export const retrainIntentFailure = error => ({
  type: ACTION_TYPE_INTENT.RETRAIN_INTENT_FAILURE,
  error,
});

export const handleChangeIntentId = intentId => ({
  type: ACTION_TYPE_INTENT.HANDLE_CHANGE_INTENT_ID,
  intentId,
});
export const deleteIntent = () => ({
  type: ACTION_TYPE_INTENT.DELETE_INTENT,
});
export const deleteIntentSuccess = res => ({
  type: ACTION_TYPE_INTENT.DELETE_INTENT_SUCCESS,
  res,
});
export const deleteIntentFailure = error => ({
  type: ACTION_TYPE_INTENT.DELETE_INTENT_FAILURE,
  error,
});

//bot setting
export const fetchBotSetting = id => ({
  type: ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING,
  id,
});
export const fetchBotSettingSuccess = botDetail => ({
  type: ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING_SUCCESS,
  botDetail,
});
export const fetchBotSettingFailure = error => ({
  type: ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING_FAILURE,
  error,
});
export const uploadBotImage = icon => ({
  type: ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE,
  icon,
});
export const uploadBotImageSuccess = botImageUrl => ({
  type: ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE_SUCCESS,
  botImageUrl,
});
export const uploadBotImageFailure = error => ({
  type: ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE_FAILURE,
  error,
});
export const saveBotSetting = payload => ({
  type: ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING,
  botSettingObj: payload,
});
export const saveBotSettingSuccess = () => ({
  type: ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING_SUCCESS,
});
export const saveBotSettingFailure = error => ({
  type: ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING_FAILURE,
  error,
});
export const updateBotSetting = payload => ({
  type: ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING,
  botSettingObj: payload,
});
export const updateBotSettingSuccess = res => ({
  type: ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING_SUCCESS,
  res,
});
export const updateBotSettingFailure = error => ({
  type: ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING_FAILURE,
  error,
});
export const handleChangeBotName = botName => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_NAME,
  botName,
});
export const handleChangeThreshold = threshold => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_THRESHOLD,
  threshold,
});
export const handleChangeBotLanguage = language => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_LANGUAGE,
  language,
});
export const handleChangeTimezone = timezone => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_TIMEZONE,
  timezone,
});
export const handleChangeBotInboxVisibility = bool => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_INBOX_VISIBILITY,
  bool,
});
export const handleChangeBotReplyMessage = replyMessage => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_REPLY_MESSAGE,
  replyMessage,
});
export const handleChangeNoMatchRule = value => ({
  type: ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_NO_MATCH_RULE,
  value,
});

export const toggleBotImportModal = bool => ({
  type: ACTION_TYPE_INTENT.TOGGLE_BOT_IMPORT_MODAL,
  bool,
});

export const onBotImportNotification = obj => ({
  type: ACTION_TYPE_INTENT.ON_BOT_IMPORT_NOTIFICATION,
  obj,
});

export const fetchImportedIntentsCount = (id, language) => {
  return {
    type: ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT,
    id,
    language,
  };
};

export const fetchImportedIntentsCountSuccess = res => {
  return {
    type: ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT_SUCCESS,
    res,
  };
};

export const fetchImportedIntentsCountFailure = error => {
  return {
    type: ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT_FAILURE,
    error,
  };
};

export const botImport = (url, docUrl, botId, importType, docName) => {
  return {
    type: ACTION_TYPE_INTENT.BOT_IMPORT,
    url,
    docUrl,
    botId,
    importType,
    docName,
  };
};

export const botImportSuccess = res => {
  return {
    type: ACTION_TYPE_INTENT.BOT_IMPORT_SUCCESS,
    res,
  };
};

export const botImportFailure = error => {
  return {
    type: ACTION_TYPE_INTENT.BOT_IMPORT_FAILURE,
    error,
  };
};

export const uploadDocument = file => {
  return {
    type: ACTION_TYPE_INTENT.UPLOAD_DOCUMENT,
    file,
  };
};

export const uploadDocumentSuccess = (fileUrl, fileName) => {
  return {
    type: ACTION_TYPE_INTENT.UPLOAD_DOCUMENT_SUCCESS,
    fileUrl,
    fileName,
  };
};

export const uploadDocumentFailure = error => {
  return {
    type: ACTION_TYPE_INTENT.UPLOAD_DOCUMENT_FAILURE,
    error,
  };
};

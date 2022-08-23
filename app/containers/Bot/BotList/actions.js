import { ACTION_TYPE_BOT_LIST, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const fetchBotList = (from, isPaginating) => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT,
  from,
  isPaginating,
});

export const fetchBotListSuccess = (botList, isPaginating) => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT_SUCCESS,
  botList,
  isPaginating,
});

export const fetchBotListFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT_FAILURE,
  error,
});

export const fetchBotVersion = (botId, language) => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION,
    botId,
    language,
  };
};

export const fetchBotVersionSuccess = (botId, language, botVersions) => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION_SUCCESS,
    botId,
    language,
    botVersions,
  };
};

export const fetchBotVersionFailure = error => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION_FAILURE,
    error,
  };
};

export const publishBotVersion = (
  botId,
  language,
  modelName,
  version,
  botVersionId,
) => ({
  type: ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION,
  botId,
  language,
  modelName,
  version,
  botVersionId,
});

export const publishBotVersionSuccess = (res, activeVersion, language) => ({
  type: ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION_SUCCESS,
  res,
  activeVersion,
  language,
});

export const publishBotVersionFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION_FAILURE,
  error,
});

export const enableBotSetting = (botId, status) => ({
  type: ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING,
  botId,
  status,
});

export const enableBotSettingSuccess = (botId, status) => ({
  type: ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING_SUCCESS,
  botId,
  status,
});

export const enableBotSettingFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING_FAILURE,
  error,
});

export const toggleRetrainLoader = (
  botId,
  botVersion,
  versionId,
  modelName,
  language,
) => ({
  type: ACTION_TYPE_BOT_LIST.TOGGLE_RETRAIN_LOADER,
  botId,
  botVersion,
  versionId,
  modelName,
  language,
});

export const retrainBot = (botId, botVersion, language) => ({
  type: ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING,
  botId,
  botVersion,
  language,
});

export const retrainBotSuccess = res => ({
  type: ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING_SUCCESS,
  res,
});

export const retrainBotFailure = (error, id) => ({
  type: ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING_FAILURE,
  error,
  id,
});

// create bot
export const toggleCreateBotModal = bool => ({
  type: ACTION_TYPE_BOT_LIST.TOGGLE_CREATE_BOT_MODAL,
  bool,
});
export const uploadBotImage = icon => ({
  type: ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE,
  icon,
});
export const uploadBotImageSuccess = botImageUrl => ({
  type: ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE_SUCCESS,
  botImageUrl,
});
export const uploadBotImageFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE_FAILURE,
  error,
});

export const createBot = botSettingObj => {
  const botObj = { ...botSettingObj, language: botSettingObj.language.join() };

  console.log('Data being sent:', botObj);
  return {
    type: ACTION_TYPE_BOT_LIST.CREATE_BOT,
    botSettingObj: botObj,
  };
};

export const createBotSuccess = res => ({
  type: ACTION_TYPE_BOT_LIST.CREATE_BOT_SUCCESS,
  res,
});

export const createBotFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.CREATE_BOT_FAILURE,
  error,
});

export const clearBotList = () => ({
  type: ACTION_TYPE_BOT_LIST.CLEAR_BOT_LIST,
});

export const closeSnackbarInBotList = bool => ({
  type: ACTION_TYPE_BOT_LIST.CLOSE_SNACKBAR_IN_BOT,
  bool,
});

// GET ALL BOTS
export const getAllBot = () => ({
  type: ACTION_TYPE_BOT_LIST.GET_ALL_BOT,
});
export const getAllBotSuccess = (botList, cursor, count) => ({
  type: ACTION_TYPE_BOT_LIST.GET_ALL_BOT_SUCCESS,
  botList,
  cursor,
  count,
});
export const getAllBotFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.GET_ALL_BOT_FAILURE,
  error,
});
export const getNextPageBotList = link => ({
  type: ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT,
  link,
});
export const getNextPageBotListSuccess = (botList, cursor, count) => ({
  type: ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT_SUCCESS,
  botList,
  cursor,
  count,
});
export const getNextPageBotListFailure = error => ({
  type: ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT_FAILURE,
  error,
});

// Fetch Project Details
export const fetchProjectDetails = () => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS,
});

export const fetchProjectDetailsSuccess = res => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS_SUCCESS,
  res,
});

export const fetchProjectDetailsFailure = err => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS_FAILURE,
  err,
});

// Fetch Teams
export const fetchTeams = () => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_TEAMS,
});

export const fetchTeamsSuccess = res => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_TEAMS_SUCCESS,
  res,
});

export const fetchTeamsFailure = err => ({
  type: ACTION_TYPE_BOT_LIST.FETCH_TEAMS_FAILURE,
  err,
});
// fetch modal data
export const fetchModalData = page => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA,
    page,
  };
};
export const fetchModalDataSuccess = res => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA_SUCCESS,
    res,
  };
};
export const fetchModalDataFailure = error => {
  return {
    type: ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA_FAILURE,
    error,
  };
};

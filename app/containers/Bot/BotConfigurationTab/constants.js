export const DEFAULT_ACTION = 'app/BotConfigurationTab/DEFAULT_ACTION';

export const ACTION_TYPE_BOT_CONFIGURATION_TAB = {
  API_REQUEST_MADE_IN_BOT_CONFIGURATION:
    'API_REQUEST_MADE_IN_BOT_CONFIGURATION',

  CLOSE_SNACKBAR_IN_BOT_CONFIGURATION: 'CLOSE_SNACKBAR_IN_BOT_CONFIGURATION',
  OPEN_SNACKBAR_IN_BOT_CONFIGURATION: 'OPEN_SNACKBAR_IN_BOT_CONFIGURATION',
};

export const ACTION_TYPE_BOT_SETTING = {
  FETCH_BOT_SETTING: 'FETCH_BOT_SETTING',
  FETCH_BOT_SETTING_SUCCESS: 'FETCH_BOT_SETTING_SUCCESS',
  FETCH_BOT_SETTING_FAILURE: 'FETCH_BOT_SETTING_FAILURE',

  FETCH_IMPORTED_INTENTS_COUNT: 'FETCH_IMPORTED_INTENTS_COUNT',
  FETCH_IMPORTED_INTENTS_COUNT_SUCCESS: 'FETCH_IMPORTED_INTENTS_COUNT_SUCCESS',
  FETCH_IMPORTED_INTENTS_COUNT_FAILURE: 'FETCH_IMPORTED_INTENTS_COUNT_FAILURE',

  CLEAR_BOT_SETTING: 'CLEAR_BOT_SETTING',
  HANDLE_CHANGE_LAST_TRAINED: 'HANDLE_CHANGE_LAST_TRAINED',
  HANDLE_CHANGE_IMPORTED_INTENTS_COUNT: 'HANDLE_CHANGE_IMPORTED_INTENTS_COUNT',

  HANDLE_CHANGE_BOT_NAME: 'HANDLE_CHANGE_BOT_NAME',
  HANDLE_CHANGE_THRESHOLD: 'HANDLE_CHANGE_THRESHOLD',
  HANDLE_CHANGE_TIMEZONE: 'HANDLE_CHANGE_TIMEZONE',
  HANDLE_CHANGE_BOT_LANGUAGE: 'HANDLE_CHANGE_BOT_LANGUAGE',
  HANDLE_CHANGE_BOT_IMAGE: 'HANDLE_CHANGE_BOT_IMAGE',
  HANDLE_CHANGE_BOT_INBOX_VISIBILITY: 'HANDLE_CHANGE_BOT_INBOX_VISIBILITY',
  HANDLE_CHANGE_BOT_NO_MATCH_RULE: 'HANDLE_CHANGE_BOT_NO_MATCH_RULE',
  HANDLE_CHANGE_REPLY_MESSAGE: 'HANDLE_CHANGE_REPLY_MESSAGE',

  UPLOAD_BOT_IMAGE: 'UPLOAD_BOT_IMAGE',
  UPLOAD_BOT_IMAGE_SUCCESS: 'UPLOAD_BOT_IMAGE_SUCCESS',
  UPLOAD_BOT_IMAGE_FAILURE: 'UPLOAD_BOT_IMAGE_FAILURE',

  SAVE_BOT_SETTING: 'SAVE_BOT_SETTING',
  SAVE_BOT_SETTING_SUCCESS: 'SAVE_BOT_SETTING_SUCCESS',
  SAVE_BOT_SETTING_FAILURE: 'SAVE_BOT_SETTING_FAILURE',

  UPDATE_BOT_SETTING: 'UPDATE_BOT_SETTING',
  UPDATE_BOT_SETTING_SUCCESS: 'UPDATE_BOT_SETTING_SUCCESS',
  UPDATE_BOT_SETTING_FAILURE: 'UPDATE_BOT_SETTING_FAILURE',
};

export const ACTION_TYPE_ENTITY = {
  FETCH_SYSTEM_ENTITY: 'FETCH_SYSTEM_ENTITY',
  FETCH_SYSTEM_ENTITY_SUCCESS: 'FETCH_SYSTEM_ENTITY_SUCCESS',
  FETCH_SYSTEM_ENTITY_FAILURE: 'FETCH_SYSTEM_ENTITY_FAILURE',

  FETCH_ENTITY: 'FETCH_ENTITY',
  FETCH_ENTITY_SUCCESS: 'FETCH_ENTITY_SUCCESS',
  FETCH_ENTITY_FAILURE: 'FETCH_ENTITY_FAILURE',

  HANDLE_CHANGE_ENTITY_ID: 'HANDLE_CHANGE_ENTITY_ID',

  FETCH_ENTITY_BY_ID: 'FETCH_ENTITY_BY_ID',
  FETCH_ENTITY_BY_ID_SUCCESS: 'FETCH_ENTITY_BY_ID_SUCCESS',
  FETCH_ENTITY_BY_ID_FAILURE: 'FETCH_ENTITY_BY_ID_FAILURE',

  HANDLE_CHANGE_ENTITY_DATA_IN_ENTITY: 'HANDLE_CHANGE_ENTITY_DATA_IN_ENTITY',
  CREATE_ENTITY_IN_ENTITY: 'CREATE_ENTITY_IN_ENTITY',
  CREATE_ENTITY_SUCCESS_IN_ENTITY: 'CREATE_ENTITY_SUCCESS_IN_ENTITY',
  CREATE_ENTITY_FAILURE_IN_ENTITY: 'CREATE_ENTITY_FAILURE_IN_ENTITY',

  REMOVE_SYNONYM_TAG: 'REMOVE_SYNONYM_TAG',
  HANDLE_CHANGE_SYNONYM_IN_ENTITY: 'HANDLE_CHANGE_SYNONYM_IN_ENTITY',
  HANDLE_CHANGE_IN_TAG_INPUT_IN_ENTITY: 'HANDLE_CHANGE_IN_TAG_INPUT_IN_ENTITY',
  HANDLE_CHANGE_SYNONYM_TAG_IN_ENTITY: 'HANDLE_CHANGE_SYNONYM_TAG_IN_ENTITY',
  REMOVE_SYNONYM_IN_ENTITY: 'REMOVE_SYNONYM_IN_ENTITY',

  HANDLE_CHANGE_REGEX_IN_ENTITY: 'HANDLE_CHANGE_REGEX_IN_ENTITY',
  REMOVE_REGEX_IN_ENTITY: 'REMOVE_REGEX_IN_ENTITY',

  HANDLE_CHANGE_ENTITY_DETAIL: 'HANDLE_CHANGE_ENTITY_DETAIL',
  UPDATE_ENTITY: 'UPDATE_ENTITY',
  UPDATE_ENTITY_SUCCESS: 'UPDATE_ENTITY_SUCCESS',
  UPDATE_ENTITY_FAILURE: 'UPDATE_ENTITY_FAILURE',

  DELETE_ENTITY: 'DELETE_ENTITY',
  DELETE_ENTITY_SUCCESS: 'DELETE_ENTITY_SUCCESS',
  DELETE_ENTITY_FAILURE: 'DELETE_ENTITY_FAILURE',

  CLEAR_ENTITY_DATA_IN_ENTITY: 'CLEAR_ENTITY_DATA_IN_ENTITY',
};

export const ACTION_TYPE_INTENT = {
  FETCH_INTENT: 'FETCH_INTENT',
  FETCH_INTENT_SUCCESS: 'FETCH_INTENT_SUCCESS',
  FETCH_INTENT_FAILURE: 'FETCH_INTENT_FAILURE',
  CLEAR_INTENT: 'CLEAR_INTENT',

  HANDLE_CHANGE_INTENT_ID: 'HANDLE_CHANGE_INTENT_ID',
  DELETE_INTENT: 'DELETE_INTENT',
  DELETE_INTENT_SUCCESS: 'DELETE_INTENT_SUCCESS',
  DELETE_INTENT_FAILURE: 'DELETE_INTENT_FAILURE',

  HANDLE_CHANGE_LANGUAGE: 'HANDLE_CHANGE_LANGUAGE',
  RETRAIN_INTENT: 'RETRAIN_INTENT',
  RETRAIN_INTENT_SUCCESS: 'RETRAIN_INTENT_SUCCESS',
  RETRAIN_INTENT_FAILURE: 'RETRAIN_INTENT_FAILURE',

  ON_BOT_IMPORT_NOTIFICATION: 'ON_BOT_IMPORT_NOTIFICATION',
  TOGGLE_BOT_IMPORT_MODAL: 'TOGGLE_BOT_IMPORT_MODAL',
  SHOW_IMPORT_PROGRESS_MODAL: 'SHOW_IMPORT_PROGRESS_MODAL',
  BOT_IMPORT: 'BOT_IMPORT',
  BOT_IMPORT_SUCCESS: 'BOT_IMPORT_SUCCESS',
  BOT_IMPORT_FAILURE: 'BOT_IMPORT_FAILURE',

  UPLOAD_DOCUMENT: 'UPLOAD_DOCUMENT',
  UPLOAD_DOCUMENT_SUCCESS: 'UPLOAD_DOCUMENT_SUCCESS',
  UPLOAD_DOCUMENT_FAILURE: 'UPLOAD_DOCUMENT_FAILURE',
};

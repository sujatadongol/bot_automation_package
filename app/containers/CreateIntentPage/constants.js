export const DEFAULT_ACTION = 'app/CreateIntentPage/DEFAULT_ACTION';

export const ACTION_TYPE_CREATE_INTENT = {
  API_REQUEST_MADE_IN_CREATE_INTENT: 'API_REQUEST_MADE_IN_CREATE_INTENT',

  FETCH_ENTITY_IN_CREATE_INTENT: 'FETCH_ENTITY_IN_CREATE_INTENT',
  FETCH_ENTITY_IN_CREATE_INTENT_SUCCESS:
    'FETCH_ENTITY_IN_CREATE_INTENT_SUCCESS',
  FETCH_ENTITY_IN_CREATE_INTENT_FAILURE:
    'FETCH_ENTITY_IN_CREATE_INTENT_FAILURE',

  FETCH_THIRD_PARTY_API: 'FETCH_THIRD_PARTY_API',
  FETCH_THIRD_PARTY_API_SUCCESS: 'FETCH_THIRD_PARTY_API_SUCCESS',
  FETCH_THIRD_PARTY_API_FAILURE: 'FETCH_THIRD_PARTY_API_FAILURE',

  HANDLE_CHANGE_SERVICE_ID_TO_CREATE_INTENT:
    'HANDLE_CHANGE_SERVICE_ID_TO_CREATE_INTENT',

  HANDLE_CHANGE_TO_ADD_TRAINING_PHASE: 'HANDLE_CHANGE_TO_ADD_TRAINING_PHASE',
  HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER:
    'HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER',
  HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES: 'HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES',
  HANDLE_CHANGE_TO_ADD_RESPONSES: 'HANDLE_CHANGE_TO_ADD_RESPONSES',
  HANDLE_CHANGE_TO_ADD_PROMPT_FIELD: 'HANDLE_CHANGE_TO_ADD_PROMPT_FIELD',

  HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE:
    'HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE',
  HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER:
    'HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER',
  HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES:
    'HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES',
  HANDLE_CHANGE_TO_REMOVE_RESPONSES: 'HANDLE_CHANGE_TO_REMOVE_RESPONSES',
  HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD: 'HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD',

  HANDLE_CHANGE_PROMPTS: 'HANDLE_CHANGE_PROMPTS',
  CLEAR_PROMPT_VALUE: 'CLEAR_PROMPT_VALUE',

  HANDLE_CHANGE_INTENT_NAME: 'HANDLE_CHANGE_INTENT_NAME',
  HANDLE_CHANGE_TRAINING_PHASE: 'HANDLE_CHANGE_TRAINING_PHASE',
  HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE_IN_CREATE_INTENT:
    'HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE_IN_CREATE_INTENT',
  HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE:
    'HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE',
  REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE:
    'REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE',
  SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED:
    'SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED',

  UPLOAD_INTENT_PARAMETER_ICON: 'UPLOAD_INTENT_PARAMETER_ICON',
  UPLOAD_INTENT_PARAMETER_ICON_SUCCESS: 'UPLOAD_INTENT_PARAMETER_ICON_SUCCESS',
  UPLOAD_INTENT_PARAMETER_ICON_FAILURE: 'UPLOAD_INTENT_PARAMETER_ICON_FAILURE',

  HANDLE_CHANGE_INTENT_PARAMETER: 'HANDLE_CHANGE_INTENT_PARAMETER',
  CHECK_IF_PARAM_NAME_ALREADY_EXISTS: 'CHECK_IF_PARAM_NAME_ALREADY_EXISTS',

  HANDLE_CHANGE_BOT_RESPONSE: 'HANDLE_CHANGE_BOT_RESPONSE',
  HANDLE_CHANGE_PLAIN_BOT_RESPONSE: 'HANDLE_CHANGE_PLAIN_BOT_RESPONSE',
  SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE:
    'SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE',

  //fulfilment
  ADD_FULFILMENT: 'ADD_FULFILMENT',
  REMOVE_FULFILMENT: 'REMOVE_FULFILMENT',
  HANDLE_CHANGE_IN_FULFILMENT_DATA: 'HANDLE_CHANGE_IN_FULFILMENT_DATA',
  HANDLE_CHANGE_IN_API_PARAMETER_VALUE: 'HANDLE_CHANGE_IN_API_PARAMETER_VALUE',
  SAVE_FULFILMENT: 'SAVE_FULFILMENT',
  ADD_RESPONSE_IN_FULFILMENT: 'ADD_RESPONSE_IN_FULFILMENT',
  REMOVE_RESPONSE_IN_FULFILMENT: 'REMOVE_RESPONSE_IN_FULFILMENT',
  HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT:
    'HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT',

  //action
  HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL:
    'HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL',
  HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL:
    'HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL',
  ADD_ACTION: 'ADD_ACTION',
  REMOVE_ACTION: 'REMOVE_ACTION',
  UPDATE_ACTION: 'UPDATE_ACTION',
  CLEAR_ACTION_OBJECT: 'CLEAR_ACTION_OBJECT',
  HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION:
    'HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION',

  VALIDATE_INTENT: 'VALIDATE_INTENT',
  CREATE_INTENT: 'CREATE_INTENT',
  CREATE_INTENT_SUCCESS: 'CREATE_INTENT_SUCCESS',
  CREATE_INTENT_FAILURE: 'CREATE_INTENT_FAILURE',

  CLEAR_INTENT_DATA: 'CLEAR_INTENT_DATA',
  CLEAR_INTENT_API_DATA: 'CLEAR_INTENT_API_DATA',

  CLOSE_SNACKBAR_IN_CREATE_INTENT: 'CLOSE_SNACKBAR_IN_CREATE_INTENT',
};

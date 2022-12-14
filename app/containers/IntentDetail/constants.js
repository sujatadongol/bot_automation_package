export const DEFAULT_ACTION = 'app/IntentDetail/DEFAULT_ACTION';

export const ACTION_TYPE_INTENT_DETAIL = {
  API_REQUEST_MADE_IN_INTENT_DETAIL: 'API_REQUEST_MADE_IN_INTENT_DETAIL',

  FETCH_INTENT_BY_ID: 'FETCH_INTENT_BY_ID',
  FETCH_INTENT_BY_ID_SUCCESS: 'FETCH_INTENT_BY_ID_SUCCESS',
  FETCH_INTENT_BY_ID_FAILURE: 'FETCH_INTENT_BY_ID_FAILURE',

  FETCH_ENTITY_IN_INTENT_DETAIL: 'FETCH_ENTITY_IN_INTENT_DETAIL',
  FETCH_ENTITY_IN_INTENT_DETAIL_SUCCESS:
    'FETCH_ENTITY_IN_INTENT_DETAIL_SUCCESS',
  FETCH_ENTITY_IN_INTENT_DETAIL_FAILURE:
    'FETCH_ENTITY_IN_INTENT_DETAIL_FAILURE',

  FETCH_THIRD_PARTY_API_IN_INTENT_DETAIL:
    'FETCH_THIRD_PARTY_API_IN_INTENT_DETAIL',
  FETCH_THIRD_PARTY_API_SUCCESS_IN_INTENT_DETAIL:
    'FETCH_THIRD_PARTY_API_SUCCESS_IN_INTENT_DETAIL',
  FETCH_THIRD_PARTY_API_FAILURE_IN_INTENT_DETAIL:
    'FETCH_THIRD_PARTY_API_FAILURE_IN_INTENT_DETAIL',

  HANDLE_CHANGE_SERVICE_ID_TO_UPDATE_INTENT:
    'HANDLE_CHANGE_SERVICE_ID_TO_UPDATE_INTENT',
  HANDLE_CHANGE_INTENT_NAME_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_INTENT_NAME_IN_INTENT_DETAIL',
  HANDLE_CHANGE_INTENT_ID: 'HANDLE_CHANGE_INTENT_ID',

  // training phrase
  HANDLE_CHANGE_TO_ADD_TRAINING_PHASE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_ADD_TRAINING_PHASE_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TRAINING_PHASE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TRAINING_PHASE_IN_INTENT_DETAIL',
  HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE:
    'HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE',
  HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE_IN_INTENT_DETAIL',
  REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE_IN_INTENT_DETAIL:
    'REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE_IN_INTENT_DETAIL',
  SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED_IN_INTENT_DETAIL:
    'SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED_IN_INTENT_DETAIL',

  // intent parameter
  HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER_IN_INTENT_DETAIL',
  UPLOAD_INTENT_PARAMETER_ICON_IN_INTENT_DETAIL:
    'UPLOAD_INTENT_PARAMETER_ICON_IN_INTENT_DETAIL',
  UPLOAD_INTENT_PARAMETER_ICON_SUCCESS_IN_INTENT_DETAIL:
    'UPLOAD_INTENT_PARAMETER_ICON_SUCCESS_IN_INTENT_DETAIL',
  UPLOAD_INTENT_PARAMETER_ICON_FAILURE_IN_INTENT_DETAIL:
    'UPLOAD_INTENT_PARAMETER_ICON_FAILURE_IN_INTENT_DETAIL',
  HANDLE_CHANGE_INTENT_PARAMETER_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_INTENT_PARAMETER_IN_INTENT_DETAIL',
  CHECK_IF_PARAM_NAME_ALREADY_EXISTS_IN_INTENT_DETAIL:
    'CHECK_IF_PARAM_NAME_ALREADY_EXISTS_IN_INTENT_DETAIL',

  // prompt
  HANDLE_CHANGE_TO_ADD_PROMPT_FIELD_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_ADD_PROMPT_FIELD_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD_IN_INTENT_DETAIL',
  HANDLE_CHANGE_PROMPTS_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_PROMPTS_IN_INTENT_DETAIL',
  CLEAR_PROMPT_VALUE_IN_INTENT_DETAIL: 'CLEAR_PROMPT_VALUE_IN_INTENT_DETAIL',

  // fulfilment
  ADD_FULFILMENT_IN_INTENT_DETAIL: 'ADD_FULFILMENT_IN_INTENT_DETAIL',
  REMOVE_FULFILMENT_IN_INTENT_DETAIL: 'REMOVE_FULFILMENT_IN_INTENT_DETAIL',
  HANDLE_CHANGE_IN_FULFILMENT_DATA_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_IN_FULFILMENT_DATA_IN_INTENT_DETAIL',
  HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_INTENT_DETAIL',
  SAVE_FULFILMENT_IN_INTENT_DETAIL: 'SAVE_FULFILMENT_IN_INTENT_DETAIL',
  ADD_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
    'ADD_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL',
  REMOVE_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
    'REMOVE_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL',
  HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL',

  // action
  HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL_IN_INTENT_DETAIL',
  HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL_IN_INTENT_DETAIL',
  ADD_ACTION_IN_INTENT_DETAIL: 'ADD_ACTION_IN_INTENT_DETAIL',
  REMOVE_ACTION_IN_INTENT_DETAIL: 'REMOVE_ACTION_IN_INTENT_DETAIL',
  UPDATE_ACTION_IN_INTENT_DETAIL: 'UPDATE_ACTION_IN_INTENT_DETAIL',
  CLEAR_ACTION_OBJECT_IN_INTENT_DETAIL: 'CLEAR_ACTION_OBJECT_IN_INTENT_DETAIL',
  HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION_IN_INTENT_DETAIL',

  // bot response
  HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_ADD_RESPONSES_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_ADD_RESPONSES_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES_IN_INTENT_DETAIL',
  HANDLE_CHANGE_TO_REMOVE_RESPONSES_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_TO_REMOVE_RESPONSES_IN_INTENT_DETAIL',
  HANDLE_CHANGE_BOT_RESPONSE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_BOT_RESPONSE_IN_INTENT_DETAIL',
  HANDLE_CHANGE_PLAIN_BOT_RESPONSE_IN_INTENT_DETAIL:
    'HANDLE_CHANGE_PLAIN_BOT_RESPONSE_IN_INTENT_DETAIL',
  SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE_IN_INTENT_DETAIL:
    'SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE_IN_INTENT_DETAIL',

  VALIDATE_INTENT_IN_INTENT_DETAIL: 'VALIDATE_INTENT_IN_INTENT_DETAIL',
  UPDATE_INTENT: 'UPDATE_INTENT',
  UPDATE_INTENT_SUCCESS: 'UPDATE_INTENT_SUCCESS',
  UPDATE_INTENT_FAILURE: 'UPDATE_INTENT_FAILURE',

  CLEAR_INTENT_DATA_IN_INTENT_DETAIL: 'CLEAR_INTENT_DATA_IN_INTENT_DETAIL',
  CLEAR_INTENT_API_DATA: 'CLEAR_INTENT_API_DATA',

  // optimize paraphrase
  API_REQUEST_MADE_FOR_LOADING_PARAPHRASE:
    'API_REQUEST_MADE_FOR_LOADING_PARAPHRASE',
  CLEAR_PARAPHRASE_MODAL: 'CLEAR_PARAPHRASE_MODAL',

  OPEN_PARAPHRASE_MODAL: 'OPEN_PARAPHRASE_MODAL',
  HANDLE_CHANGE_IN_PARAPHRASE_EVENT: 'HANDLE_CHANGE_IN_PARAPHRASE_EVENT',

  OPTIMIZE_PARAPHRASE: 'OPTIMIZE_PARAPHRASE',
  OPTIMIZE_PARAPHRASE_SUCCESS: 'OPTIMIZE_PARAPHRASE_SUCCESS',
  OPTIMIZE_PARAPHRASE_FAILURE: 'OPTIMIZE_PARAPHRASE_FAILURE',

  ADD_PARAPHRASE_ROW: 'ADD_PARAPHRASE_ROW',
  REMOVE_PARAPHRASE_ROW: 'REMOVE_PARAPHRASE_ROW',
  HANDLE_CHANGE_IN_PARAPHRASE: 'HANDLE_CHANGE_IN_PARAPHRASE',

  UPDATE_PARAPHRASE: 'UPDATE_PARAPHRASE',
  UPDATE_PARAPHRASE_SUCCESS: 'UPDATE_PARAPHRASE_SUCCESS',
  UPDATE_PARAPHRASE_FAILURE: 'UPDATE_PARAPHRASE_FAILURE',

  GET_PARAPHRASE_BY_ID: 'GET_PARAPHRASE_BY_ID',
  GET_PARAPHRASE_BY_ID_SUCCESS: 'GET_PARAPHRASE_BY_ID_SUCCESS',
  GET_PARAPHRASE_BY_ID_FAILURE: 'GET_PARAPHRASE_BY_ID_FAILURE',

  ADD_SPECIFIC_PARAPHRASE_ROW: 'ADD_SPECIFIC_PARAPHRASE_ROW',
  REMOVE_SPECIFIC_PARAPHRASE_ROW: 'REMOVE_SPECIFIC_PARAPHRASE_ROW',
  HANDLE_CHANGE_IN_SPECIFIC_PARAPHRASE: 'HANDLE_CHANGE_IN_SPECIFIC_PARAPHRASE',

  UPDATE_SPECIFIC_PARAPHRASE: 'UPDATE_SPECIFIC_PARAPHRASE',
  UPDATE_SPECIFIC_PARAPHRASE_SUCCESS: 'UPDATE_SPECIFIC_PARAPHRASE_SUCCESS',
  UPDATE_SPECIFIC_PARAPHRASE_FAILURE: 'UPDATE_SPECIFIC_PARAPHRASE_FAILURE',

  FETCH_MISLEADING_INTENT: 'FETCH_MISLEADING_INTENT',
  FETCH_MISLEADING_INTENT_SUCCESS: 'FETCH_MISLEADING_INTENT_SUCCESS',
  FETCH_MISLEADING_INTENT_FAILURE: 'FETCH_MISLEADING_INTENT_FAILURE',

  CLOSE_SNACKBAR_IN_INTENT_DETAIL: 'CLOSE_SNACKBAR_IN_INTENT_DETAIL',
};

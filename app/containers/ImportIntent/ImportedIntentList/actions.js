import { DEFAULT_ACTION, ACTION_TYPE_IMPORTED_INTENT_LIST } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchImportedIntents(id, language) {
  return {
    type: ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS,
    id,
    language,
  };
}

export function fetchImportedIntentsSuccess(res) {
  return {
    type: ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS_SUCCESS,
    res,
  };
}

export function fetchImportedIntentsFailure(error) {
  return {
    type: ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS_FAILURE,
    error,
  };
}

export function closeSnackbar() {
  return {
    type: ACTION_TYPE_IMPORTED_INTENT_LIST.CLOSE_SNACKBAR,
  };
}

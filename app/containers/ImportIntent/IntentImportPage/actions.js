/*
 *
 * IntentImportPage actions
 *
 */

import { ACTION_TYPE_INTENT_IMPORT } from './constants';

export function handleChangeInSpecificData(intentId, itemId, itemType, value) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.HANDLE_CHANGE_IN_SPECIFIC_DATA,
    intentId,
    itemId,
    itemType,
    value,
  };
}

export function removeSpecificData(intentId, itemId, itemType) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.REMOVE_SPECIFIC_DATA,
    intentId,
    itemId,
    itemType,
  };
}

export function saveIntent(botIntents, botId, language) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT,
    botIntents,
    botId,
    language,
  };
}

export function saveIntentSuccess(res) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT_SUCCESS,
    res,
  };
}

export function saveIntentFailure(error) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT_FAILURE,
    error,
  };
}

export function discardIntent(source, botId, language) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT,
    source,
    botId,
    language,
  };
}

export function discardIntentSuccess(res) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT_SUCCESS,
    res,
  };
}

export function discardIntentFailure(error) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT_FAILURE,
    error,
  };
}

export const getIntentsBySource = (botId, source) => ({
  type: ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE,
  botId,
  source,
});

export const getIntentsBySourceSuccess = res => ({
  type: ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE_SUCCESS,
  res,
});

export const getIntentsBySourceFailure = error => ({
  type: ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE_FAILURE,
  error,
});

export function closeSnackbar() {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.CLOSE_SNACKBAR,
  };
}
export function handleintentnamechange(value) {
  return {
    type: ACTION_TYPE_INTENT_IMPORT.HANDLE_INTENT_NAME_CHANGE,
    value,
  };
}

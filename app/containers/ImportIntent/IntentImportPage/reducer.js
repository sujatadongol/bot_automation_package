/*
 *
 * IntentImportPage reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPE_INTENT_IMPORT } from './constants';
import {
  changeInIntentList,
  mapImportedIntents,
  removeResponse,
  removeTrainingPhrase,
} from './helper';

export const initialState = {
  loading: false,
  openSnackBar: false,
  error: '',
  variant: '',
  intentName: '---',
  intentsList: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const intentImportPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_INTENT_IMPORT.CLOSE_SNACKBAR:
        draft.openSnackBar = false;
        break;

      case ACTION_TYPE_INTENT_IMPORT.HANDLE_CHANGE_IN_SPECIFIC_DATA: {
        draft.loading = false;
        const initialIntentList = state.intentsList
          ? [...state.intentsList]
          : undefined;
        draft.intentsList = changeInIntentList(
          initialIntentList,
          action.intentId,
          action.itemId,
          action.itemType,
          action.value,
        );
        break;
      }
      case ACTION_TYPE_INTENT_IMPORT.REMOVE_SPECIFIC_DATA: {
        draft.loading = false;
        let initialIntentList = state.intentsList
          ? [...state.intentsList]
          : undefined;
        initialIntentList.map(singleIntent => {
          if (singleIntent.intentId === action.intentId) {
            if (action.itemType === 'PHRASE') {
              singleIntent.trainingPhrases = removeTrainingPhrase(
                singleIntent.trainingPhrases,
                action.itemId,
              );
            }
            if (action.itemType === 'RESPONSE') {
              singleIntent.botResponses = removeResponse(
                singleIntent.botResponses,
                action.itemId,
              );
            }
          }
        });
        draft.intentsList = initialIntentList;
        break;
      }

      case ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE:
        draft.loading = true;
        break;

      case ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE_SUCCESS:
        draft.loading = false;
        draft.intentsList = mapImportedIntents(action.res);
        break;

      case ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT:
        draft.loading = true;
        break;

      case ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = 'Successful';
        draft.variant = 'success';
        break;

      case ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT:
        draft.loading = true;
        break;

      case ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        break;

      case ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_INTENT_IMPORT.HANDLE_INTENT_NAME_CHANGE:
        draft.intentName = action.value;
        break;
    }
  });

export default intentImportPageReducer;

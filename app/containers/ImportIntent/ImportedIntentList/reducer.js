/*
 *
 * ImportedIntentList reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPE_IMPORTED_INTENT_LIST } from './constants';

export const initialState = {
  loading: false,
  openSnackBar: false,
  error: '',
  variant: '',

  importList: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const importedIntentListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS:
        draft.loading = true;
        break;
      case ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS_SUCCESS:
        draft.loading = false;
        draft.importList = action.res;
        break;
      case ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_IMPORTED_INTENT_LIST.CLOSE_SNACKBAR:
        draft.openSnackBar = false;
        break;
    }
  });

export default importedIntentListReducer;

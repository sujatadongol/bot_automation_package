import produce from 'immer';
import { ACTION_TYPE_TRY_OUT } from './constants';
import { ACTION_TYPE_GLOBAL_INTENT } from '../App/constants';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  tryOutText: '',
  tryOutResponse: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const tryOutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_TRY_OUT.API_REQUEST_MADE_IN_TRY_OUT:
        draft.loading = true;
        break;

      case ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE:
        draft.tryOutResponse = undefined;
        break;
      case ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE_SUCCESS:
        draft.loading = false;
        draft.tryOutResponse = action.tryOutResponse;
        draft.tryOutText = '';
        break;
      case ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TRY_OUT.HANDLE_CHANGE_TEXT_IN_TRY_OUT:
        draft.loading = false;
        draft.tryOutText = action.text;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.CLEAR_TRY_OUT_DATA:
        draft.loading = false;
        draft.tryOutText = '';
        draft.tryOutResponse = undefined;
        break;
      case ACTION_TYPE_TRY_OUT.CLOSE_SNACKBAR_IN_TRY_OUT_PAGE:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default tryOutReducer;

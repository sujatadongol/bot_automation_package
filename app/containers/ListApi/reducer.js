/*
 *
 * ListApi reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPE_LIST_API, DEFAULT_ACTION } from './constants';

export const initialState = {
  loading: false,
  snackbarMsg: '',
  openSnackBar: false,
  variant: '',

  ListApi: [],
};

/* eslint-disable default-case, no-param-reassign */
const listApiReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ACTION_TYPE_LIST_API.API_REQUEST_MADE_IN_LIST_API:
        draft.loading = true;
        break;
      case ACTION_TYPE_LIST_API.FETCH_LIST_API_SUCCESS:
        draft.loading = false;
        draft.ListApi = action.apiList.thirdPartyApis;
        break;
      case ACTION_TYPE_LIST_API.FETCH_LIST_API_FAILURE:
        draft.loading = false;
        draft.variant = 'error';
        draft.openSnackBar = true;
        draft.snackbarMsg = action.error;
        break;
      case ACTION_TYPE_LIST_API.DELETE_LIST_API_SUCCESS:
        draft.loading = false;
        draft.snackbarMsg = 'Successful';
        draft.variant = 'success';
        draft.openSnackBar = true;
        break;
      case ACTION_TYPE_LIST_API.DELETE_LIST_API_FAILURE:
        draft.loading = false;
        draft.snackbarMsg = action.error;
        draft.variant = 'error';
        draft.openSnackBar = true;
        break;
      case ACTION_TYPE_LIST_API.CLOSE_SNACKBAR_IN_LIST_API:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default listApiReducer;

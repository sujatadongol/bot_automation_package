/*
 *
 * ListApi actions
 *
 */

import { DEFAULT_ACTION, ACTION_TYPE_LIST_API } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInListApi = bool => ({
  type: ACTION_TYPE_LIST_API.API_REQUEST_MADE_IN_LIST_API,
  bool,
});

export const fetchListApi = () => ({
  type: ACTION_TYPE_LIST_API.FETCH_LIST_API,
});
export const fetchListApiSuccess = apiList => ({
  type: ACTION_TYPE_LIST_API.FETCH_LIST_API_SUCCESS,
  apiList,
});
export const fetchListApiFailure = error => ({
  type: ACTION_TYPE_LIST_API.FETCH_LIST_API_FAILURE,
  error,
});
export const deleteListApi = apiId => ({
  type: ACTION_TYPE_LIST_API.DELETE_LIST_API,
  apiId,
});
export const deleteListApiSuccess = () => ({
  type: ACTION_TYPE_LIST_API.DELETE_LIST_API_SUCCESS,
});
export const deleteListApiFailure = error => ({
  type: ACTION_TYPE_LIST_API.DELETE_LIST_API_FAILURE,
  error,
});

export const closeSnackBarInListApi = bool => ({
  type: ACTION_TYPE_LIST_API.CLOSE_SNACKBAR_IN_LIST_API,
  bool,
});
export const getAllApi = () => ({
  type: ACTION_TYPE_LIST_API.GET_ALL_API,
});
export const getAllApiSuccess = list => ({
  type: ACTION_TYPE_LIST_API.GET_ALL_API_SUCCESS,
  list,
});
export const getAllApiFailure = error => ({
  type: ACTION_TYPE_LIST_API.GET_ALL_API_FAILURE,
  error,
});

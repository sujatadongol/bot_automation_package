import { ACTION_TYPE_CREATE_API, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInCreateApi = bool => ({
  type: ACTION_TYPE_CREATE_API.API_REQUEST_MADE_IN_CREATE_API,
  bool,
});
export const closeSnackbarInCreateApi = bool => ({
  type: ACTION_TYPE_CREATE_API.CLOSE_SNACKBAR_IN_CREATE_API,
  bool,
});

export const createApi = () => ({
  type: ACTION_TYPE_CREATE_API.CREATE_API,
});
export const createApiSuccess = () => ({
  type: ACTION_TYPE_CREATE_API.CREATE_API_SUCCESS,
});
export const createApiFailure = error => ({
  type: ACTION_TYPE_CREATE_API.CREATE_API_FAILURE,
  error,
});

export const handleChangeApiData = (id, value) => ({
  type: ACTION_TYPE_CREATE_API.HANDLE_CHANGE_API_DATA,
  id,
  value,
});

//header
export const addHeader = () => ({
  type: ACTION_TYPE_CREATE_API.ADD_HEADER,
});
export const removeHeader = headerId => ({
  type: ACTION_TYPE_CREATE_API.REMOVE_HEADER,
  headerId,
});
export const handleChangeInHeader = (headerId, key, value) => ({
  type: ACTION_TYPE_CREATE_API.HANDLE_CHANGE_IN_HEADER,
  headerId,
  key,
  value,
});

//parameter
export const addParameter = () => ({
  type: ACTION_TYPE_CREATE_API.ADD_PARAMETER,
});
export const removeParameter = parameterId => ({
  type: ACTION_TYPE_CREATE_API.REMOVE_PARAMETER,
  parameterId,
});
export const handleChangeInParameter = (parameterId, key, value) => ({
  type: ACTION_TYPE_CREATE_API.HANDLE_CHANGE_IN_PARAMETER,
  parameterId,
  key,
  value,
});

export const clearApiData = () => ({
  type: ACTION_TYPE_CREATE_API.CLEAR_API_DATA,
});

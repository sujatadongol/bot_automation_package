import { ACTION_TYPE_UPDATE_API, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInUpdateApi = bool => ({
  type: ACTION_TYPE_UPDATE_API.API_REQUEST_MADE_IN_UPDATE_API,
  bool,
});
export const closeSnackbarInUpdateApi = bool => ({
  type: ACTION_TYPE_UPDATE_API.CLOSE_SNACKBAR_IN_UPDATE_API,
  bool,
});

export const handleChangeApiId = apiId => ({
  type: ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_API_ID,
  apiId,
});
export const fetchApiById = () => ({
  type: ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID,
});
export const fetchApiByIdSuccess = apiDetail => ({
  type: ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID_SUCCESS,
  apiDetail,
});
export const fetchApiByIdFailure = error => ({
  type: ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID_FAILURE,
  error,
});

export const updateApi = (serviceId, apiId) => ({
  type: ACTION_TYPE_UPDATE_API.UPDATE_API,
  serviceId,
  apiId,
});
export const updateApiSuccess = () => ({
  type: ACTION_TYPE_UPDATE_API.UPDATE_API_SUCCESS,
});
export const updateApiFailure = error => ({
  type: ACTION_TYPE_UPDATE_API.UPDATE_API_FAILURE,
  error,
});

export const handleChangeApiDataInUpdateApi = (id, value) => ({
  type: ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_API_DATA_IN_UPDATE_API,
  id,
  value,
});

//header
export const addHeaderInUpdateApi = () => ({
  type: ACTION_TYPE_UPDATE_API.ADD_HEADER_IN_UPDATE_API,
});
export const removeHeaderInUpdateApi = headerId => ({
  type: ACTION_TYPE_UPDATE_API.REMOVE_HEADER_IN_UPDATE_API,
  headerId,
});
export const handleChangeInHeaderInUpdateApi = (headerId, key, value) => ({
  type: ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_IN_HEADER_IN_UPDATE_API,
  headerId,
  key,
  value,
});

//parameter
export const addParameterInUpdateApi = () => ({
  type: ACTION_TYPE_UPDATE_API.ADD_PARAMETER_IN_UPDATE_API,
});
export const removeParameterInUpdateApi = parameterId => ({
  type: ACTION_TYPE_UPDATE_API.REMOVE_PARAMETER_IN_UPDATE_API,
  parameterId,
});
export const handleChangeInParameterInUpdateApi = (
  parameterId,
  key,
  value,
) => ({
  type: ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_IN_PARAMETER_IN_UPDATE_API,
  parameterId,
  key,
  value,
});

export const clearApiDataInUpdateApi = () => ({
  type: ACTION_TYPE_UPDATE_API.CLEAR_API_DATA_IN_UPDATE_API,
});

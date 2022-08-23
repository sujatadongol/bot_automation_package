import { DEFAULT_ACTION } from './constants';
import { ACTION_TYPE_TRY_OUT } from '../TryOut/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInTryOutPage = bool => ({
  type: ACTION_TYPE_TRY_OUT.API_REQUEST_MADE_IN_TRY_OUT,
  bool,
});
export const fetchTryOutResponse = botId => ({
  type: ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE,
  botId
});
export const handleChangeInTryOutText = text => ({
  type: ACTION_TYPE_TRY_OUT.HANDLE_CHANGE_TEXT_IN_TRY_OUT,
  text,
});
export const fetchTryOutResponseSuccess = tryOutResponse => ({
  type: ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE_SUCCESS,
  tryOutResponse,
});
export const fetchTryOutResponseFailure = error => ({
  type: ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE_FAILURE,
  error,
});
export const closeSnackbarInTryOut = bool => ({
  type: ACTION_TYPE_TRY_OUT.CLOSE_SNACKBAR_IN_TRY_OUT_PAGE,
  bool,
});

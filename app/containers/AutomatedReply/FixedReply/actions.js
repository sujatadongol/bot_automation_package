import { ACTION_TYPE_FIXED_REPLY, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const handleChangeInFixedReplyTitle = value => ({
  type: ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_FIXED_REPLY_TITLE,
  value,
});
export const handleChangeInReplyText = value => ({
  type: ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_REPLY_TEXT,
  value,
});
export const addMatchingText = () => ({
  type: ACTION_TYPE_FIXED_REPLY.ADD_MATCHING_TEXT,
});
export const removeMatchingText = id => ({
  type: ACTION_TYPE_FIXED_REPLY.REMOVE_MATCHING_TEXT,
  id,
});
export const handleChangeInMatchingText = (id, value) => ({
  type: ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_MATCHING_TEXT,
  id,
  value,
});

export const handleChangeInExpireDate = (bool, value) => ({
  type: ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_EXPIRE_DATE,
  bool,
  value,
});

export const createFixedReply = () => ({
  type: ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY,
});
export const createFixedReplySuccess = res => ({
  type: ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY_SUCCESS,
  res,
});
export const createFixedReplyFailure = error => ({
  type: ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY_FAILURE,
  error,
});

export const fetchFixedReplyById = id => ({
  type: ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID,
  id,
});
export const fetchFixedReplyByIdSuccess = res => ({
  type: ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID_SUCCESS,
  res,
});
export const fetchFixedReplyByIdFailure = error => ({
  type: ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID_FAILURE,
  error,
});

export const updateFixedReply = id => ({
  type: ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY,
  id,
});
export const updateFixedReplySuccess = res => ({
  type: ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY_SUCCESS,
  res,
});
export const updateFixedReplyFailure = error => ({
  type: ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY_FAILURE,
  error,
});

export const clearFixedReply = () => ({
  type: ACTION_TYPE_FIXED_REPLY.CLEAR_FIXED_REPLIES,
});
export const closeSnackbarInFixedReply = bool => ({
  type: ACTION_TYPE_FIXED_REPLY.CLOSE_SNACKBAR_IN_FIXED_REPLY,
  bool,
});

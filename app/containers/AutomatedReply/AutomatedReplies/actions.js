import { DEFAULT_ACTION, ACTION_TYPE_AUTOMATED_REPLIES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const fetchAutomatedReplies = () => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES,
});
export const fetchAutomatedRepliesSuccess = res => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES_SUCCESS,
  res,
});
export const fetchAutomatedRepliesFailure = error => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES_FAILURE,
  error,
});

export const deleteAutomatedReply = id => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES,
  id,
});
export const deleteAutomatedReplySuccess = id => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES_SUCCESS,
  id,
});
export const deleteAutomatedReplyFailure = error => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES_FAILURE,
  error,
});

export const updateAutomatedReplyStatus = (id, value) => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS,
  id,
  value,
});
export const updateAutomatedReplyStatusSuccess = (id, value) => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS_SUCCESS,
  id,
  value,
});
export const updateAutomatedReplyStatusFailure = error => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS_FAILURE,
  error,
});

export const clearAutomatedReplies = () => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.CLEAR_AUTOMATED_REPLIES,
});

export const closeSnackbarInAutomatedReplies = bool => ({
  type: ACTION_TYPE_AUTOMATED_REPLIES.CLOSE_SNACKBAR_IN_AUTOMATED_REPLIES,
  bool,
});

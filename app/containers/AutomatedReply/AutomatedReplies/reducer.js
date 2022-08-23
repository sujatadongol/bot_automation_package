/*
 *
 * AutomatedReplies reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPE_AUTOMATED_REPLIES } from './constants';

export const initialState = {
  loading: false,
  message: '',
  openSnackBar: false,
  variant: '',

  automatedReplies: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const automatedRepliesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES:
        draft.loading = !draft.automatedReplies;
        break;
      case ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.automatedReplies =
          action.res && action.res.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES:
        draft.loading = true;
        break;
      case ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES_SUCCESS: {
        draft.loading = false;
        draft.openSnackBar = false;
        let initialReplies = state.automatedReplies
          ? [...state.automatedReplies]
          : undefined;
        draft.automatedReplies =
          initialReplies &&
          initialReplies.filter(
            single => single.automatedReplyKey !== action.id,
          );
        break;
      }
      case ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS: {
        draft.loading = true;
        let initialReplies = state.automatedReplies
          ? [...state.automatedReplies]
          : undefined;
        initialReplies &&
          initialReplies.map(single => {
            if (single.automatedReplyKey === action.id) {
              single.automatedReplyStatus = action.value
                ? 'ACTIVE'
                : 'INACTIVE';
            }
          });
        draft.automatedReplies =
          initialReplies &&
          initialReplies.sort((a, b) => b.createdAt - a.createdAt);
        break;
      }
      case ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS_SUCCESS: {
        draft.loading = false;
        draft.message = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        let initialReplies = state.automatedReplies
          ? [...state.automatedReplies]
          : undefined;
        initialReplies &&
          initialReplies.map(single => {
            if (single.automatedReplyKey === action.id) {
              single.automatedReplyStatus = action.value;
            }
          });
        draft.automatedReplies =
          initialReplies &&
          initialReplies.sort((a, b) => b.createdAt - a.createdAt);
        break;
      }
      case ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_AUTOMATED_REPLIES.CLEAR_AUTOMATED_REPLIES:
        draft.loading = false;
        draft.automatedReplies = undefined;
        break;

      case ACTION_TYPE_AUTOMATED_REPLIES.CLOSE_SNACKBAR_IN_AUTOMATED_REPLIES:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default automatedRepliesReducer;

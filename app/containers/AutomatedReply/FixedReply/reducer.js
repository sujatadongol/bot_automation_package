import produce from 'immer';
import { ACTION_TYPE_FIXED_REPLY } from './constants';
import { FuncToReturnUpdatedList } from '../../../utils/helper';
import {
  mapFetchedMatchingText,
  mapObjToCreateFixedReply,
  mapObjToUpdateFixedReply,
} from './helper';

export const initialState = {
  loading: false,
  message: '',
  openSnackBar: false,
  variant: '',

  title: '',
  matchingList: [],
  replyText: '',
  enableExpiration: false,
  expiredTime: 3600,

  fixedReplyObj: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const createFixedReplyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_FIXED_REPLY_TITLE:
        draft.loading = false;
        draft.title = action.value;
        break;
      case ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_EXPIRE_DATE:
        draft.loading = false;
        draft.enableExpiration = action.bool;
        draft.expiredTime = action.value;
        break;
      case ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_REPLY_TEXT:
        draft.loading = false;
        draft.replyText = action.value;
        break;
      case ACTION_TYPE_FIXED_REPLY.HANDLE_CHANGE_IN_MATCHING_TEXT: {
        draft.loading = false;
        const arrayData = state.matchingList ? [...state.matchingList] : [];
        const newReplyAttribute = arrayData.filter(
          single => single.id === action.id,
        )[0];
        newReplyAttribute.value = action.value;
        draft.matchingList = FuncToReturnUpdatedList(
          arrayData,
          action.id,
          newReplyAttribute,
        );
        break;
      }
      case ACTION_TYPE_FIXED_REPLY.ADD_MATCHING_TEXT:
        draft.loading = false;
        const arrayData = state.matchingList ? [...state.matchingList] : [];
        const formData = {
          id: Math.random(),
          value: '',
        };
        arrayData.push(formData);
        draft.matchingList = arrayData;
        break;
      case ACTION_TYPE_FIXED_REPLY.REMOVE_MATCHING_TEXT:
        draft.loading = false;
        const initialData = state.matchingList ? [...state.matchingList] : [];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.matchingList = finalData;
        break;

      case ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY:
        draft.loading = true;
        draft.fixedReplyObj = mapObjToCreateFixedReply(
          draft.title,
          draft.replyText,
          draft.matchingList,
          'en',
          draft.enableExpiration,
          draft.expiredTime,
        );
        break;
      case ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.fixedReplyObj = undefined;
        break;
      case ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID:
        draft.loading = true;
        break;
      case ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        if (action.res) {
          draft.fixedReplyObj = action.res;
          draft.title = action.res.title;
          draft.matchingList =
            action.res.fixedReply &&
            mapFetchedMatchingText(action.res.fixedReply.matchingTexts);
          draft.replyText =
            action.res.fixedReply && action.res.fixedReply.replyText;
          draft.enableExpiration =
            action.res.fixedReply && action.res.fixedReply.enableExpiration;
          draft.expiredTime =
            action.res.fixedReply && action.res.fixedReply.expirationTime;
        }
        break;
      case ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY:
        draft.loading = true;
        draft.fixedReplyObj = mapObjToUpdateFixedReply(
          draft.title,
          draft.replyText,
          draft.matchingList,
          draft.enableExpiration,
          draft.expiredTime,
          draft.fixedReplyObj,
        );
        break;
      case ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.fixedReplyObj = undefined;
        break;
      case ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_FIXED_REPLY.CLEAR_FIXED_REPLIES:
        draft.loading = false;
        draft.title = '';
        draft.matchingList = [];
        draft.replyText = '';
        draft.enableExpiration = false;
        draft.expiredTime = 3600;
        draft.fixedReplyObj = undefined;
        break;

      case ACTION_TYPE_FIXED_REPLY.CLOSE_SNACKBAR_IN_FIXED_REPLY:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default createFixedReplyReducer;

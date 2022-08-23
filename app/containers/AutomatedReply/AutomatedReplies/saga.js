import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import APIEndPoints from '../../../globalConstants';
import TokenHandler from '../../../token';
import { ACTION_TYPE_AUTOMATED_REPLIES } from './constants';
import {
  deleteAutomatedReplyFailure,
  deleteAutomatedReplySuccess,
  fetchAutomatedRepliesFailure,
  fetchAutomatedRepliesSuccess,
  updateAutomatedReplyStatusFailure,
  updateAutomatedReplyStatusSuccess,
} from './actions';

export function* fetchAutomatedReplies() {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_AUTOMATED_REPLY + serviceId}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchAutomatedRepliesFailure(res.msg));
    } else {
      yield put(fetchAutomatedRepliesSuccess(res && res.automatedReplies));
    }
  } catch (error) {
    yield put(fetchAutomatedRepliesFailure(error.msg));
  }
}

export function* deleteAutomatedReply({ id }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_AUTOMATED_REPLY_BY_ID}${id}`,
      {
        method: 'DELETE',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(deleteAutomatedReplyFailure(res.msg));
    } else {
      yield put(deleteAutomatedReplySuccess(id));
    }
  } catch (error) {
    yield put(deleteAutomatedReplyFailure(error.msg));
  }
}

export function* updateAutomatedReplyStatus({ id, value }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.UPDATE_AUTOMATED_REPLY_STATUS}`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify({
          automatedReplyKey: id,
          automatedReplyStatus: value ? 'ACTIVE' : 'INACTIVE',
          language: 'en',
          serviceId: localStorage.getItem('serviceId'),
        }),
      },
    );
    if (res.error === true) {
      yield put(updateAutomatedReplyStatusFailure(res.msg));
    } else {
      yield put(
        updateAutomatedReplyStatusSuccess(id, value ? 'ACTIVE' : 'INACTIVE'),
      );
    }
  } catch (error) {
    yield put(updateAutomatedReplyStatusFailure(error.msg));
  }
}

// Individual exports for testing
export default function* automatedRepliesSaga() {
  yield takeLatest(
    ACTION_TYPE_AUTOMATED_REPLIES.FETCH_AUTOMATED_REPLIES,
    fetchAutomatedReplies,
  );
  yield takeLatest(
    ACTION_TYPE_AUTOMATED_REPLIES.DELETE_AUTOMATED_REPLIES,
    deleteAutomatedReply,
  );
  yield takeLatest(
    ACTION_TYPE_AUTOMATED_REPLIES.UPDATE_AUTOMATED_REPLY_STATUS,
    updateAutomatedReplyStatus,
  );
}

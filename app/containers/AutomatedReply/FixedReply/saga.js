import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import APIEndPoints from '../../../globalConstants';
import TokenHandler from '../../../token';
import { ACTION_TYPE_FIXED_REPLY } from './constants';
import {
  createFixedReplyFailure,
  createFixedReplySuccess,
  fetchFixedReplyByIdFailure,
  fetchFixedReplyByIdSuccess,
  updateFixedReplyFailure,
  updateFixedReplySuccess,
} from './actions';
import { makeSelectFixedReplyObj } from './selectors';
import history from '../../../utils/history';

export function* fetchFixedReplyById({ id }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_AUTOMATED_REPLY_BY_ID}${id}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchFixedReplyByIdFailure(res.msg));
    } else {
      yield put(fetchFixedReplyByIdSuccess(res && res.automatedReply));
    }
  } catch (error) {
    yield put(fetchFixedReplyByIdFailure(error.msg));
  }
}

export function* createFixedReply() {
  let fixedReplyObj = yield select(makeSelectFixedReplyObj());
  try {
    const res = yield call(request, `${APIEndPoints.CREATE_AUTOMATED_REPLY}`, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(fixedReplyObj),
    });
    if (res.error === true) {
      yield put(createFixedReplyFailure(res.msg));
    } else {
      history.push('/automated/replies');
      yield put(createFixedReplySuccess(res));
    }
  } catch (error) {
    yield put(createFixedReplyFailure(error.msg));
  }
}

export function* updateFixedReply({ id }) {
  let fixedReplyObj = yield select(makeSelectFixedReplyObj());
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_AUTOMATED_REPLY_BY_ID}${id}`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify(fixedReplyObj),
      },
    );
    if (res.error === true) {
      yield put(updateFixedReplyFailure(res.msg));
    } else {
      history.push('/automated/replies');
      yield put(updateFixedReplySuccess(res));
    }
  } catch (error) {
    yield put(updateFixedReplyFailure(error.msg));
  }
}

// Individual exports for testing
export default function* createFixedReplySaga() {
  yield takeLatest(
    ACTION_TYPE_FIXED_REPLY.FETCH_FIXED_REPLY_BY_ID,
    fetchFixedReplyById,
  );
  yield takeLatest(
    ACTION_TYPE_FIXED_REPLY.CREATE_FIXED_REPLY,
    createFixedReply,
  );
  yield takeLatest(
    ACTION_TYPE_FIXED_REPLY.UPDATE_FIXED_REPLY,
    updateFixedReply,
  );
}

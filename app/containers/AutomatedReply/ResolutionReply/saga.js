import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectResolutionReplyObj } from './selectors';
import request from '../../../utils/request';
import APIEndPoints from '../../../globalConstants';
import TokenHandler from '../../../token';
import history from '../../../utils/history';
import {
  createResolutionReplyFailure,
  createResolutionReplySuccess,
  fetchResolutionReplyByIdFailure,
  fetchResolutionReplyByIdSuccess,
  fetchSimilarPossibleSolutionsFailure,
  fetchSimilarPossibleSolutionsSuccess,
  updateResolutionReplyFailure,
  updateResolutionReplySuccess,
} from './actions';
import { ACTION_TYPE_RESOLUTION_REPLY } from './constants';

export function* createResolutionReply() {
  let resolutionReplyObj = yield select(makeSelectResolutionReplyObj());
  try {
    const res = yield call(request, `${APIEndPoints.CREATE_AUTOMATED_REPLY}`, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(resolutionReplyObj),
    });
    if (res.error === true) {
      yield put(createResolutionReplyFailure(res.msg));
    } else {
      history.push('/automated/replies');
      yield put(createResolutionReplySuccess(res));
    }
  } catch (error) {
    yield put(createResolutionReplyFailure(error.msg));
  }
}

export function* fetchResolutionReplyById({ id }) {
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
      yield put(fetchResolutionReplyByIdFailure(res.msg));
    } else {
      yield put(fetchResolutionReplyByIdSuccess(res && res.automatedReply));
    }
  } catch (error) {
    yield put(fetchResolutionReplyByIdFailure(error.msg));
  }
}

export function* fetchSimilarPossibleSolutions({ query }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_SIMILAR_POSSIBLE_SOLUTIONS}${localStorage.getItem(
        'serviceId',
      )}?query=${query}&page=3`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchSimilarPossibleSolutionsFailure(res.msg));
    } else {
      yield put(
        fetchSimilarPossibleSolutionsSuccess(res && res.possibleSolutions),
      );
    }
  } catch (error) {
    yield put(fetchSimilarPossibleSolutionsFailure(error.msg));
  }
}

export function* updateResolutionReply({ id }) {
  let resolutionReplyObj = yield select(makeSelectResolutionReplyObj());
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_AUTOMATED_REPLY_BY_ID}${id}`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify(resolutionReplyObj),
      },
    );
    if (res.error === true) {
      yield put(updateResolutionReplyFailure(res.msg));
    } else {
      history.push('/automated/replies');
      yield put(updateResolutionReplySuccess(res));
    }
  } catch (error) {
    yield put(updateResolutionReplyFailure(error.msg));
  }
}

// Individual exports for testing
export default function* resolutionReplySaga() {
  yield takeLatest(
    ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY,
    createResolutionReply,
  );
  yield takeLatest(
    ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID,
    fetchResolutionReplyById,
  );
  yield takeLatest(
    ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS,
    fetchSimilarPossibleSolutions,
  );
  yield takeLatest(
    ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY,
    updateResolutionReply,
  );
}

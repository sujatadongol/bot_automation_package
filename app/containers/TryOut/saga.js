import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { ACTION_TYPE_TRY_OUT } from './constants';
import {
  apiRequestMadeInTryOutPage,
  fetchTryOutResponseFailure,
  fetchTryOutResponseSuccess,
} from './actions';
import { makeSelectTryOutText } from './selectors';

export function* fetchTryOutResponse(payload) {
  yield put(apiRequestMadeInTryOutPage(true));
  const text = yield select(makeSelectTryOutText());
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_TRY_OUT_RESPONSE + payload.botId,
      {
        method: 'POST',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify({
          // language: 'en',
          text,
        }),
      },
    );
    if (res.error === true) {
      yield put(fetchTryOutResponseFailure(res.msg));
    } else {
      yield put(fetchTryOutResponseSuccess(res));
    }
  } catch (error) {
    yield put(fetchTryOutResponseFailure(error.msg));
  }
}

// Individual exports for testing
export default function* tryOutSaga() {
  yield takeLatest(
    ACTION_TYPE_TRY_OUT.FETCH_TRY_OUT_RESPONSE,
    fetchTryOutResponse,
  );
}

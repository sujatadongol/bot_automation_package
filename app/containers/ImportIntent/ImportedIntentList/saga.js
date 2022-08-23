import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import APIEndPoints from '../../../globalConstants';
import TokenHandler from '../../../token';
import {
  fetchImportedIntentsFailure,
  fetchImportedIntentsSuccess,
} from './actions';
import { ACTION_TYPE_IMPORTED_INTENT_LIST } from './constants';

export function* fetchImportedIntents(action) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_IMPORTED_INTENTS}${action.id}?language=${
        action.language
      }`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchImportedIntentsFailure(res.msg));
    } else {
      yield put(fetchImportedIntentsSuccess(res && res.importedIntents));
    }
  } catch (error) {
    yield put(fetchImportedIntentsFailure(error.msg));
  }
}

// Individual exports for testing
export default function* importedIntentListSaga() {
  yield takeLatest(
    ACTION_TYPE_IMPORTED_INTENT_LIST.FETCH_IMPORTED_INTENTS,
    fetchImportedIntents,
  );
}

import { call, put, takeLatest } from 'redux-saga/effects';
import APIEndPoints from '../../../globalConstants';
import TokenHandler from '../../../token';
import {
  discardIntentFailure,
  discardIntentSuccess,
  getIntentsBySourceFailure,
  getIntentsBySourceSuccess,
  saveIntentFailure,
  saveIntentSuccess,
} from './actions';
import { ACTION_TYPE_INTENT_IMPORT } from './constants';
import request from '../../../utils/request';
import history from '../../../utils/history';
import { mapIntentsToSave } from './helper';

export function* saveIntent(payload) {
  try {
    const res = yield call(request, APIEndPoints.SAVE_MULTIPLE_INTENTS, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(mapIntentsToSave(payload)),
    });
    if (res.error === true) {
      yield put(saveIntentFailure(res.msg));
    } else {
      yield put(saveIntentSuccess(res));
      history.push('/bot/' + payload.botId + '/intent/' + payload.language);
    }
  } catch (error) {
    yield put(saveIntentFailure(error.msg));
  }
}

export function* discardIntent(payload) {
  try {
    const res = yield call(
      request,
      APIEndPoints.DISCARD_MULTIPLE_INTENTS +
        payload.botId +
        '?language=' +
        payload.language +
        '&source=' +
        payload.source,
      {
        method: 'DELETE',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(discardIntentFailure(res.msg));
    } else {
      yield put(discardIntentSuccess(res));
      history.push('/bot/' + payload.botId + '/intent/' + payload.language);
    }
  } catch (error) {
    yield put(discardIntentFailure(error.msg));
  }
}

export function* getIntentsBySource(action) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.GET_INTENTS_BY_SOURCE}${
        action.botId
      }?language=en&source=${action.source}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(getIntentsBySourceFailure(res.msg));
    } else {
      yield put(getIntentsBySourceSuccess(res && res.intents));
    }
  } catch (error) {
    yield put(getIntentsBySourceFailure(error.msg));
  }
}

// Individual exports for testing
export default function* intentImportPageSaga() {
  yield takeLatest(ACTION_TYPE_INTENT_IMPORT.SAVE_INTENT, saveIntent);
  yield takeLatest(ACTION_TYPE_INTENT_IMPORT.DISCARD_INTENT, discardIntent);
  yield takeLatest(
    ACTION_TYPE_INTENT_IMPORT.GET_INTENTS_BY_SOURCE,
    getIntentsBySource,
  );
}

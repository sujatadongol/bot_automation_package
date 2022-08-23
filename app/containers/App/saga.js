import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import {
  ACTION_TYPE_BOT,
  ACTION_TYPE_EMPLOYEE,
  ACTION_TYPE_GLOBAL_INTENT,
  ACTION_TYPE_NAVBAR,
  ACTION_TYPE_USER,
  SETTINGS_ACTION,
} from './constants';
import {
  fetchGlobalTokensFailure,
  fetchGlobalTokensSuccess,
  fetchPublicGroupFailure,
  fetchPublicGroupSuccess,
  fetchServiceInNavbarFailure,
  fetchServiceInNavbarSuccess,
  fetchNextpagePublicGroupSuccess,
  fetchNextpagePublicGroupFailure,
  fetchProjectInNavbarFailure,
  fetchProjectInNavbarSuccess,
  fetchAllSettingsFailure,
  fetchAllSettingsSuccess,
  fetchLanguagesFailure,
  fetchLanguagesSuccess,
} from './actions';

export function* generateTokens() {
  try {
    const res = yield call(request, APIEndPoints.GENERATE_TOKENS, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
    });

    if (res.error === true) {
      yield put(fetchGlobalTokensFailure(res.error));
    } else {
      yield put(fetchGlobalTokensSuccess(res.loginResponse));
    }
  } catch (error) {
    yield put(fetchGlobalTokensFailure(error));
  }
}
export function* fetchServicelist() {
  try {
    const res = yield call(request, APIEndPoints.FETCH_CREATED_SERVICE_LIST, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchServiceInNavbarFailure(res.error));
    } else {
      yield put(fetchServiceInNavbarSuccess(res));
    }
  } catch (error) {
    yield put(fetchServiceInNavbarFailure(error));
  }
}

export function* fetchProjectlist() {
  try {
    const res = yield call(request, APIEndPoints.FETCH_PROJECT_IN_NAVBAR, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchProjectInNavbarFailure(res.error));
    } else {
      yield put(fetchProjectInNavbarSuccess(res.projects));
    }
  } catch (error) {
    yield put(fetchProjectInNavbarFailure(error));
  }
}
export function* fetchPublicGroup() {
  try {
    const res = yield call(request, APIEndPoints.GET_PUBLIC_GROUP, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchPublicGroupFailure(res.msg));
    } else {
      yield put(fetchPublicGroupSuccess(res.inboxResponse.inbox, res.next));
    }
  } catch (error) {
    yield put(fetchPublicGroupFailure(error));
  }
}
export function* fetchNextPublicGroup({ next }) {
  try {
    const res = yield call(request, next, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchNextpagePublicGroupFailure(res.msg));
    } else {
      yield put(
        fetchNextpagePublicGroupSuccess(res.inboxResponse.inbox, res.next),
      );
    }
  } catch (error) {
    yield put(fetchNextpagePublicGroupFailure(error));
  }
}

export default function* appSaga() {
  yield takeLatest(ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS, generateTokens);
  yield takeLatest(
    ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR,
    fetchServicelist,
  );

  yield takeLatest(
    ACTION_TYPE_GLOBAL_INTENT.FETCH_PUBLIC_GROUP,
    fetchPublicGroup,
  );
  yield takeLatest(
    ACTION_TYPE_GLOBAL_INTENT.FETCH_NEXT_PUBLIC_GROUP,
    fetchNextPublicGroup,
  );
  yield takeLatest(
    ACTION_TYPE_NAVBAR.FETCH_PROJECT_IN_NAVBAR,
    fetchProjectlist,
  );
}

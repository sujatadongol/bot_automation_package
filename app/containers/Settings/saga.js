import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { SETTINGS_ACTION } from './constants';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import {
  fetchAllSettingsSuccess,
  fetchAllSettingsFailure,
  fetchLanguagesFailure,
  fetchLanguagesSuccess,
  fetchTimezonesFailure,
  fetchTimezonesSuccess,
  updateSettingsFailure,
  updateSettingsSuccess,
} from './actions';
import { settingsList } from './helper';

// update Settings
export function* fetchAllSettings() {
  try {
    const res = yield call(request, `${APIEndPoints.FETCH_ALL_SETTINGS}`, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchAllSettingsFailure(res.msg));
    } else {
      yield put(fetchAllSettingsSuccess(res.settings));
    }
  } catch (error) {
    yield put(fetchAllSettingsFailure(error));
  }
}
// fetch languages
export function* fetchLanguages() {
  try {
    const res = yield call(request, APIEndPoints.FETCH_LANGUAGES, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchLanguagesFailure(res.msg));
    } else {
      yield put(fetchLanguagesSuccess(res.idNames));
    }
  } catch (error) {
    yield put(fetchLanguagesFailure(error));
  }
}
// fetch timezones
export function* fetchTimezones() {
  try {
    const res = yield call(request, APIEndPoints.FETCH_TIME_ZONE, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchTimezonesFailure(res.msg));
    } else {
      yield put(fetchTimezonesSuccess(res.idNames));
    }
  } catch (error) {
    yield put(fetchTimezonesFailure(error));
  }
}
// update Settings
export function* updateSettings({ settings, settingType }) {
  console.log(settingType, 'setting type at the saga');
  const settingList = settingsList(settings);
  try {
    const res = yield call(request, APIEndPoints.UPDATE_SETTINGS, {
      method: 'PUT',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({ settings: settingList }),
    });
    if (res.error === true) {
      yield put(updateSettingsFailure(res.msg));
    } else {
      yield put(updateSettingsSuccess(res.settings, settingType));
    }
  } catch (error) {
    yield put(updateSettingsFailure(error));
  }
}
// Individual exports for testing
export default function* settingsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SETTINGS_ACTION.FETCH_ALL_SETTINGS, fetchAllSettings);
  yield takeLatest(SETTINGS_ACTION.FETCH_LANGUAGES, fetchLanguages);
  yield takeLatest(SETTINGS_ACTION.FETCH_TIMEZONES, fetchTimezones);
  yield takeLatest(SETTINGS_ACTION.UPDATE_SETTINGS, updateSettings);
}

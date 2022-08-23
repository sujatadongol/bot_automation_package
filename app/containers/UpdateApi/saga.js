import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  makeSelectApiData,
  makeSelectApiHeader,
  makeSelectApiId,
  makeSelectApiParameter,
} from './selectors';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { openIntegrationTabAfterCreatingApi } from '../App/actions';
import history from '../../utils/history';
import { ACTION_TYPE_UPDATE_API } from './constants';
import {
  apiRequestMadeInUpdateApi,
  fetchApiByIdFailure,
  fetchApiByIdSuccess,
  updateApiFailure,
  updateApiSuccess,
} from './actions';

export function* fetchApiById() {
  yield put(apiRequestMadeInUpdateApi(true));
  const apiId = yield select(makeSelectApiId());

  try {
    const res = yield call(request, APIEndPoints.FETCH_API_BY_ID + apiId, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchApiByIdFailure(res.msg));
    } else {
      yield put(fetchApiByIdSuccess(res));
    }
  } catch (error) {
    yield put(fetchApiByIdFailure(error.msg));
  }
}

export function* updateApi(service) {
  yield put(apiRequestMadeInUpdateApi(true));
  const apiData = yield select(makeSelectApiData());
  const apiHeaders = yield select(makeSelectApiHeader());
  const apiParameters = yield select(makeSelectApiParameter());
  const data = JSON.stringify({
    title: apiData.title,
    url: apiData.url,
    method: apiData.method,
    serviceId: service.serviceId,
    apiHeaders,
    apiParameters,
  });
  try {
    const res = yield call(request, APIEndPoints.UPDATE_API + service.apiId, {
      method: 'PATCH',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(updateApiFailure(res.msg));
    } else {
      yield put(updateApiSuccess(res));
      yield put(openIntegrationTabAfterCreatingApi());
      history.push('/auto/api');
    }
  } catch (error) {
    yield put(updateApiFailure(error.msg));
  }
}

// Individual exports for testing
export default function* updateApiSaga() {
  yield takeLatest(ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID, fetchApiById);
  yield takeLatest(ACTION_TYPE_UPDATE_API.UPDATE_API, updateApi);
}

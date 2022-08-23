import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import history from '../../utils/history';
import {
  apiRequestMadeInCreateApi,
  createApiFailure,
  createApiSuccess,
} from './actions';
import { ACTION_TYPE_CREATE_API } from './constants';
import {
  makeSelectApiData,
  makeSelectApiHeader,
  makeSelectApiParameter,
} from './selectors';
import { openListApiAfterCreatingApi } from '../App/actions';

export function* createApi() {
  yield put(apiRequestMadeInCreateApi(true));
  const apiData = yield select(makeSelectApiData());
  const apiHeaders = yield select(makeSelectApiHeader());
  const apiParameters = yield select(makeSelectApiParameter());
  const data = JSON.stringify({
    title: apiData.title,
    url: apiData.url,
    method: apiData.method,
    serviceId: localStorage.getItem('serviceId'),
    apiHeaders,
    apiParameters,
  });
  try {
    const res = yield call(request, APIEndPoints.CREATE_API, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    console.log(res, 'response at the saga');
    if (res.error === true) {
      yield put(createApiFailure(res.msg));
    } else {
      yield put(createApiSuccess(res));
      //   yield put(openListApiAfterCreatingApi());
      history.push('/auto/api');
    }
  } catch (error) {
    yield put(createApiFailure(error));
  }
}

// Individual exports for testing
export default function* createApiSaga() {
  console.log('here in the create api saga');
  yield takeLatest(ACTION_TYPE_CREATE_API.CREATE_API, createApi);
}

import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE_LIST_API } from './constants';
import {
  apiRequestMadeInListApi,
  fetchListApiFailure,
  fetchListApiSuccess,
  deleteListApiFailure,
  deleteListApiSuccess,
  getAllApiFailure,
  getAllApiSuccess,
} from './actions';
import request from '../../utils/request';
import TokenHandler from '../../token';
import APIEndPoints, { PageSize } from '../../globalConstants';

export function* fetchListApi(pageSize) {
  console.log(pageSize);
  yield put(apiRequestMadeInListApi(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_API + serviceId}?page=${pageSize.pageSize}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    console.log(res);
    if (res.error === true) {
      yield put(fetchListApiFailure(res.msg));
    } else {
      yield put(fetchListApiSuccess(res));
    }
  } catch (error) {
    yield put(fetchListApiFailure(error.msg));
  }
}

export function* deleteListApi(api) {
  yield put(apiRequestMadeInListApi(true));
  try {
    const res = yield call(request, APIEndPoints.DELETE_API + api.apiId, {
      method: 'DELETE',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(deleteListApiFailure(res.msg));
    } else {
      yield put(deleteListApiSuccess(res));
      console.log(PageSize);
      yield fetchListApi({ pageSize: PageSize });
    }
  } catch (error) {
    yield put(deleteListApiFailure(error.msg));
  }
}
// export function* getAllApi() {
//   try {
//     const res = yield call(request, APIEndPoints.GET_ALL_APIS, {
//       method: 'GET',
//       headers: TokenHandler.authHeadersForMultipartFormData(),
//     });
//     if (res.error === true) {
//       yield put(getAllApiFailure(res.msg));
//     } else {
//       yield put(getAllApiSuccess(res));
//     }
//   } catch (error) {
//     yield put(getAllApiFailure(error.msg));
//   }
// }

// Individual exports for testing
export default function* listApiSaga() {
  yield takeLatest(ACTION_TYPE_LIST_API.FETCH_LIST_API, fetchListApi);
  yield takeLatest(ACTION_TYPE_LIST_API.DELETE_LIST_API, deleteListApi);
  // yield takeLatest(ACTION_TYPE_LIST_API.GET_ALL_API, getAllApi);
}

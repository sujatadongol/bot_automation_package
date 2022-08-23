import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  clearEntityDataInIntent,
  createEntityInIntentFailure,
  createEntityInIntentSuccess,
} from './actions';
import { makeSelectEntityData } from './selectors';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { ACTION_TYPE_CREATE_ENTITY } from './constants';
import {
  fetchEntityInIntentFailure,
  fetchEntityInIntentSuccess,
} from '../App/actions';
import { ACTION_TYPE_GLOBAL_INTENT } from '../App/constants';

export function* fetchEntity() {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_ENTITY}/${serviceId}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchEntityInIntentFailure(res.msg));
    } else {
      yield put(fetchEntityInIntentSuccess(res));
    }
  } catch (error) {
    yield put(fetchEntityInIntentFailure(error.msg));
  }
}

export function* createEntity() {
  const entityData = yield select(makeSelectEntityData());
  try {
    const res = yield call(request, APIEndPoints.CREATE_ENTITY, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(entityData),
    });
    if (res.error === true) {
      yield put(createEntityInIntentFailure(res.msg));
    } else {
      yield put(createEntityInIntentSuccess(res));
      yield put(clearEntityDataInIntent());
      yield fetchEntity();
    }
  } catch (error) {
    yield put(createEntityInIntentFailure(error.msg));
  }
}

// Individual exports for testing
export default function* createEntityModalContainerSaga() {
  yield takeLatest(
    ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT,
    fetchEntity,
  );
  yield takeLatest(
    ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT,
    createEntity,
  );
}

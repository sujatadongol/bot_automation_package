import { call, put, select, takeLatest } from 'redux-saga/effects';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { ACTION_TYPE_CREATE_INTENT } from './constants';
import {
  apiRequestMadeInCreateIntent,
  clearIntentApiData,
  createIntentFailure,
  createIntentSuccess,
  fetchThirdPartyApiFailure,
  fetchThirdPartyApiSuccess,
  handleChangeIntentParameter,
  uploadIntentParameterIconFailure,
  uploadIntentParameterIconSuccess,
} from './actions';
import request from '../../utils/request';
import {
  makeSelectBotAction,
  makeSelectFinalBotResponse,
  makeSelectFinalIntentParameter,
  makeSelectFinalTrainingPhase,
  makeSelectFulfilments,
  makeSelectIntentName,
  makeSelectResponseEntity,
} from './selectors';
import history from '../../utils/history';
import {
  fetchEntityInIntentFailure,
  fetchEntityInIntentSuccess,
} from '../App/actions';
import { ACTION_TYPE_GLOBAL_INTENT } from '../App/constants';

export function* createIntent(payload) {
  yield put(apiRequestMadeInCreateIntent(true));
  const serviceId = localStorage.getItem('serviceId');
  const intentName = yield select(makeSelectIntentName());
  const trainingPhrases = yield select(makeSelectFinalTrainingPhase());
  const intentResponse = yield select(makeSelectFinalBotResponse());
  const intentParam = yield select(makeSelectFinalIntentParameter());
  const fulfillments = yield select(makeSelectFulfilments());
  const responseEntity = yield select(makeSelectResponseEntity());
  const botAction = yield select(makeSelectBotAction());

  const data = JSON.stringify({
    language: payload.language,
    serviceId,
    botSettingId: payload.botId,
    botIntent: {
      intentName: intentName.toLowerCase(),
      trainingPhrases,
      botResponses: intentResponse,
      intentParam,
      fulfillments,
      responseEntity,
      intentState: 'INTENT_ACTIVE',
      botAction,
    },
  });

  try {
    const res = yield call(request, APIEndPoints.CREATE_INTENT, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(createIntentFailure(res.msg));
      yield put(clearIntentApiData());
    } else {
      yield put(createIntentSuccess(res));
      history.push('/bot/' + payload.botId + '/intent/' + payload.language);
    }
  } catch (error) {
    yield put(createIntentFailure(error.msg));
    yield put(clearIntentApiData());
  }
}

export function* fetchThirdPartyApiList() {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(request, APIEndPoints.FETCH_API + serviceId, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchThirdPartyApiFailure(res.msg));
    } else {
      yield put(fetchThirdPartyApiSuccess(res));
    }
  } catch (error) {
    yield put(fetchThirdPartyApiFailure(error.msg));
  }
}

export function* fetchEntityList() {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_ENTITY}/${JSON.parse(serviceId)}`,
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

export function* uploadIntentParameterIcon(image) {
  const formData = new FormData();
  formData.append('image', image.icon);
  try {
    const res = yield call(request, APIEndPoints.UPLOAD_IMAGE, {
      method: 'POST',
      headers: TokenHandler.authHeadersForMultipartFormData(),
      body: formData,
    });
    if (res.error === true) {
      yield put(uploadIntentParameterIconFailure(res.msg));
    } else {
      yield put(uploadIntentParameterIconSuccess(res.fileUrl));
      yield put(handleChangeIntentParameter(image.id, 'iconUrl', res.fileUrl));
    }
  } catch (error) {
    yield put(uploadIntentParameterIconFailure(error.msg));
  }
}

// Individual exports for testing
export default function* createIntentPageSaga() {
  yield takeLatest(ACTION_TYPE_CREATE_INTENT.CREATE_INTENT, createIntent);
  yield takeLatest(
    ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API,
    fetchThirdPartyApiList,
  );
  yield takeLatest(
    ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT,
    fetchEntityList,
  );
  yield takeLatest(
    ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON,
    uploadIntentParameterIcon,
  );
}

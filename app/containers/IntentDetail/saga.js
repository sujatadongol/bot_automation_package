import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { ACTION_TYPE_INTENT_DETAIL } from './constants';
import {
  apiRequestMadeForLoadingParaphrase,
  apiRequestMadeInIntentDetail,
  clearIntentApiDataInDetail,
  clearIntentDataInDetail,
  fetchIntentDetailFailure,
  fetchIntentDetailSuccess,
  fetchMisleadingIntentsFailure,
  fetchMisleadingIntentsSuccess,
  fetchThirdPartyApiFailure,
  fetchThirdPartyApiSuccess,
  getParaphraseByIdFailure,
  getParaphraseByIdSuccess,
  optimizeParaphraseFailure,
  optimizeParaphraseSuccess,
  updateIntentFailure,
  updateIntentSuccess,
  updateParaphraseFailure,
  updateParaphraseSuccess,
  updateSpecificParaphraseFailure,
  updateSpecificParaphraseSuccess,
} from './actions';
import {
  makeSelectBotAction,
  makeSelectFinalBotResponse,
  makeSelectFinalIntentParam,
  makeSelectFinalTrainingPhrase,
  makeSelectFulfilmentsInIntentDetail,
  makeSelectIntentId,
  makeSelectIntentNameInDetail,
  makeSelectParaphrases,
  makeSelectResponseEntity,
  makeSelectSpecificParaphrase,
} from './selectors';
import history from '../../utils/history';
import { ACTION_TYPE_GLOBAL_INTENT } from '../App/constants';
import {
  fetchEntityInIntentFailure,
  fetchEntityInIntentSuccess,
} from '../App/actions';

export function* fetchIntentById(intent) {
  yield put(apiRequestMadeInIntentDetail(true));
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_INTENT_BY_ID}/${intent.intentId}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    console.log(res, 'response at the intent detail saga');
    if (res.error === true) {
      yield put(fetchIntentDetailFailure(res.msg));
    } else {
      yield put(fetchIntentDetailSuccess(res));
    }
  } catch (error) {
    yield put(fetchIntentDetailFailure(error.msg));
  }
}

export function* fetchEntityList() {
  yield put(apiRequestMadeInIntentDetail(true));
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

export function* updateIntent(intent) {
  yield put(apiRequestMadeInIntentDetail(true));
  const intentId = yield select(makeSelectIntentId());
  const intentName = yield select(makeSelectIntentNameInDetail());
  const trainingPhrases = yield select(makeSelectFinalTrainingPhrase());
  const intentResponse = yield select(makeSelectFinalBotResponse());
  const intentParam = yield select(makeSelectFinalIntentParam());
  const responseEntity = yield select(makeSelectResponseEntity());
  const fulfillments = yield select(makeSelectFulfilmentsInIntentDetail());
  const botAction = yield select(makeSelectBotAction());

  const data = JSON.stringify({
    intentId: intent.intentId,
    intentName: intentName.toLowerCase(),
    trainingPhrases,
    botResponses: intentResponse,
    intentParam,
    fulfillments,
    botAction,
    responseEntity,
    intentState: 'INTENT_ACTIVE',
  });
  try {
    const res = yield call(request, APIEndPoints.UPDATE_INTENT + intentId, {
      method: 'PATCH',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(updateIntentFailure(res.msg));
      yield put(clearIntentApiDataInDetail());
    } else {
      yield put(updateIntentSuccess());
      history.push('/bot/' + intent.botId + '/intent/' + intent.language);
    }
  } catch (error) {
    yield put(updateIntentFailure(error.msg));
  }
}

// paraphrasing
export function* optimizeIntent(action) {
  yield put(apiRequestMadeForLoadingParaphrase(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.OPTIMIZE_BOT + action.intentId,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(optimizeParaphraseFailure(res.msg));
    } else {
      yield put(optimizeParaphraseSuccess(res));
    }
  } catch (error) {
    yield put(optimizeParaphraseFailure(error.msg));
  }
}

export function* updateParaphrase(action) {
  yield put(apiRequestMadeInIntentDetail(true));
  const trainingPhrases = yield select(makeSelectParaphrases());
  const data = JSON.stringify({
    botIntentId: action.intentId,
    trainingPhrases,
    serviceId: localStorage.getItem('serviceId'),
    language: 'en',
  });
  try {
    const res = yield call(request, APIEndPoints.ADD_PARAPHRASE, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(updateParaphraseFailure(res.msg));
    } else {
      yield put(updateParaphraseSuccess());
      yield put(clearIntentDataInDetail());
      yield fetchIntentById({ intentId: action.intentId });
    }
  } catch (error) {
    yield put(updateParaphraseFailure(error.msg));
  }
}

export function* getParaphraseById(action) {
  yield put(apiRequestMadeForLoadingParaphrase(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.GET_PARAPHRASE_BY_ID + action.id,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(getParaphraseByIdFailure(res.msg));
    } else {
      yield put(getParaphraseByIdSuccess(res));
    }
  } catch (error) {
    yield put(getParaphraseByIdFailure(error.msg));
  }
}

export function* updateSpecificParaphrase(action) {
  yield put(apiRequestMadeInIntentDetail(true));
  const phrase = yield select(makeSelectSpecificParaphrase());
  const data = JSON.stringify(phrase);
  try {
    const res = yield call(request, APIEndPoints.UPDATE_PARAPHRASE, {
      method: 'PATCH',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(updateSpecificParaphraseFailure(res.msg));
    } else {
      yield put(updateSpecificParaphraseSuccess());
    }
  } catch (error) {
    yield put(updateSpecificParaphraseFailure(error.msg));
  }
}

export function* fetchMisleadingIntent(action) {
  yield put(apiRequestMadeForLoadingParaphrase(true));
  const data = JSON.stringify({ similarPhrases: action.similarPhrases });
  try {
    const res = yield call(request, APIEndPoints.FETCH_MISLEADING_INTENT, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: data,
    });
    if (res.error === true) {
      yield put(fetchMisleadingIntentsFailure(res.msg));
    } else {
      yield put(fetchMisleadingIntentsSuccess(res.intents));
    }
  } catch (error) {
    yield put(fetchMisleadingIntentsFailure(error.msg));
  }
}

// Individual exports for testing
export default function* intentDetailSaga() {
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_IN_INTENT_DETAIL,
    fetchThirdPartyApiList,
  );
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID,
    fetchIntentById,
  );
  yield takeLatest(
    ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT,
    fetchEntityList,
  );
  yield takeLatest(ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT, updateIntent);

  // paraphrase
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE,
    optimizeIntent,
  );
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID,
    getParaphraseById,
  );
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE,
    updateParaphrase,
  );
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE,
    updateSpecificParaphrase,
  );
  yield takeLatest(
    ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT,
    fetchMisleadingIntent,
  );
}

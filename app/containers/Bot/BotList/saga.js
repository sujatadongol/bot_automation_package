import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import APIEndPoints, { PageSize } from '../../../globalConstants';
import TokenHandler from '../../../token';
import {
  createBotFailure,
  createBotSuccess,
  enableBotSettingFailure,
  enableBotSettingSuccess,
  fetchBotListFailure,
  fetchBotListSuccess,
  publishBotVersionFailure,
  publishBotVersionSuccess,
  retrainBotFailure,
  retrainBotSuccess,
  toggleCreateBotModal,
  uploadBotImageFailure,
  uploadBotImageSuccess,
  fetchBotVersionSuccess,
  fetchBotVersionFailure,
  getAllBotFailure,
  getAllBotSuccess,
  getNextPageBotListFailure,
  getNextPageBotListSuccess,
  fetchProjectDetailsFailure,
  fetchProjectDetailsSuccess,
  fetchTeamsFailure,
  fetchTeamsSuccess,
  fetchModalDataSuccess,
  fetchModalDataFailure,
} from './actions';
import { ACTION_TYPE_BOT_LIST } from './constants';

export function* fetchBotList(payload) {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_BOT_LIST + serviceId}?pageSize=${PageSize}&from=${
        payload.from
      }`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchBotListFailure(res.msg));
    } else {
      yield put(fetchBotListSuccess(res, payload.isPaginating));
    }
  } catch (error) {
    yield put(fetchBotListFailure(error.msg));
  }
}

export function* fetchBotVersion(payload) {
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_BOT_VERSION}/${payload.botId}?language=${
        payload.language
      }`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchBotVersionFailure(res.msg));
    } else {
      yield put(
        fetchBotVersionSuccess(
          payload.botId,
          payload.language,
          res.botVersions,
        ),
      );
    }
  } catch (error) {
    yield put(fetchBotVersionFailure(error.msg));
  }
}

export function* publishBotVersion(payload) {
  try {
    const res = yield call(request, APIEndPoints.PUBLISH_BOT_VERSION, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        botSettingId: payload.botId,
        language: payload.language,
        trainedModelName: payload.modelName,
        versionName: payload.version,
        botVersionId: payload.botVersionId,
      }),
    });
    if (res.error === true) {
      yield put(publishBotVersionFailure(res.msg));
    } else {
      yield put(
        publishBotVersionSuccess(
          res.botSetting,
          payload.version,
          payload.language,
        ),
      );
    }
  } catch (error) {
    yield put(publishBotVersionFailure(error.msg));
  }
}

export function* changeBotStatus(payload) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.CHANGE_BOT_SETTING + payload.botId}/${payload.status}`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(enableBotSettingFailure(res.msg));
    } else {
      yield put(enableBotSettingSuccess(payload.botId, payload.status));
    }
  } catch (error) {
    yield put(enableBotSettingFailure(error.msg));
  }
}

export function* retrainIntent(payload) {
  const { language } = payload;
  const botSettingId = payload.botId;
  const { botVersion } = payload;
  try {
    const res = yield call(request, APIEndPoints.RETRAIN_INTENT, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({ botSettingId, language, botVersion }),
    });
    if (res.error === true) {
      yield put(retrainBotFailure(res.msg));
    } else {
      yield put(retrainBotSuccess(res));
    }
  } catch (error) {
    yield put(retrainBotFailure(error.msg, payload.botId));
  }
}

export function* uploadBotImage(image) {
  const formData = new FormData();
  formData.append('image', image.icon);
  try {
    const res = yield call(request, APIEndPoints.UPLOAD_IMAGE, {
      method: 'POST',
      headers: TokenHandler.authHeadersForMultipartFormData(),
      body: formData,
    });
    if (res.error === true) {
      yield put(uploadBotImageFailure(res.msg));
    } else {
      yield put(uploadBotImageSuccess(res.fileUrl));
    }
  } catch (error) {
    yield put(uploadBotImageFailure(error.msg));
  }
}

export function* createBotSetting(payload) {
  console.log('bot language', payload.botSettingObj.language);
  try {
    const res = yield call(request, APIEndPoints.SAVE_BOT_SETTING, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(payload.botSettingObj),
    });
    if (res.error === true) {
      yield put(createBotFailure(res.msg));
    } else {
      yield put(createBotSuccess(res.botSetting));
      yield put(toggleCreateBotModal(false));
    }
  } catch (error) {
    yield put(createBotFailure(error.msg));
  }
}

export function* getAllBot() {
  try {
    const res = yield call(request, APIEndPoints.GET_ALL_BOTS, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(getAllBotFailure(res.msg));
    } else {
      yield put(getAllBotSuccess(res.botSettings, res.cursor, res.count));
    }
  } catch (error) {
    yield put(getAllBotFailure(error));
  }
}

export function* getNextPageBot({ link }) {
  try {
    const res = yield call(request, link, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(getNextPageBotListFailure(res.msg));
    } else {
      yield put(
        getNextPageBotListSuccess(res.botSettings, res.cursor, res.count),
      );
    }
  } catch (error) {
    yield put(getNextPageBotListFailure(error));
  }
}

export function* fetchProjectList() {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.PROJECT_DETAILS}?fetchArchived=false`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchProjectDetailsFailure(res.msg));
    } else {
      yield put(fetchProjectDetailsSuccess(res));
    }
  } catch (error) {
    yield put(fetchProjectDetailsFailure(error));
  }
}

export function* fetchTeams() {
  try {
    const res = yield call(request, APIEndPoints.TEAM, {
      method: 'GET',
      headers: TokenHandler.authHeaders(),
    });
    if (res.error === true) {
      yield put(fetchTeamsFailure(res.msg));
    } else {
      yield put(fetchTeamsSuccess(res));
    }
  } catch (error) {
    yield put(fetchTeamsFailure(error));
  }
}
export function* fetchModalData({ page }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.FETCH_AUTO_TICKET_CREATE_LIST}?page=${page}`,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchModalDataFailure(res.msg));
    } else {
      yield put(fetchModalDataSuccess(res));
    }
  } catch (error) {
    yield put(fetchModalDataFailure(error.msg));
  }
}

// Individual exports for testing
export default function* botListSaga() {
  yield takeLatest(ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT, fetchBotList);
  yield takeLatest(ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION, publishBotVersion);
  yield takeLatest(ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING, changeBotStatus);
  yield takeLatest(ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING, retrainIntent);
  yield takeLatest(
    ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE,
    uploadBotImage,
  );
  yield takeLatest(ACTION_TYPE_BOT_LIST.CREATE_BOT, createBotSetting);
  yield takeLatest(ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION, fetchBotVersion);
  yield takeLatest(ACTION_TYPE_BOT_LIST.GET_ALL_BOT, getAllBot);
  yield takeLatest(ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT, getNextPageBot);
  yield takeLatest(
    ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS,
    fetchProjectList,
  );
  yield takeLatest(ACTION_TYPE_BOT_LIST.FETCH_TEAMS, fetchTeams);
  yield takeLatest(ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA, fetchModalData);
}

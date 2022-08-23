import { call, put, select, takeLatest } from 'redux-saga/effects';
import APIEndPoints, { PageSize } from '../../../globalConstants';
import TokenHandler from '../../../token';
import {
  ACTION_TYPE_BOT_SETTING,
  ACTION_TYPE_ENTITY,
  ACTION_TYPE_INTENT,
} from './constants';
import {
  apiRequestMadeInBotConfiguration,
  botImportFailure,
  botImportSuccess,
  createEntityFailure,
  createEntitySuccess,
  deleteEntityFailure,
  deleteEntitySuccess,
  deleteIntentFailure,
  deleteIntentSuccess,
  fetchBotSettingFailure,
  fetchBotSettingSuccess,
  fetchEntityListByIdFailure,
  fetchEntityListByIdSuccess,
  fetchEntityListFailure,
  fetchEntityListSuccess,
  fetchImportedIntentsCountFailure,
  fetchImportedIntentsCountSuccess,
  fetchIntentFailure,
  fetchIntentSuccess,
  fetchSystemEntityListFailure,
  fetchSystemEntityListSuccess,
  retrainIntentFailure,
  retrainIntentSuccess,
  saveBotSettingFailure,
  saveBotSettingSuccess,
  updateBotSettingFailure,
  updateBotSettingSuccess,
  updateEntityFailure,
  updateEntitySuccess,
  uploadBotImageFailure,
  uploadBotImageSuccess,
  uploadDocumentFailure,
  uploadDocumentSuccess,
} from './actions';
import {
  makeSelectBotImage,
  makeSelectBotInboxVisibility,
  makeSelectBotLanguage,
  makeSelectBotName,
  makeSelectBotNoMatchRuleType,
  makeSelectBotSettingId,
  makeSelectBotStatus,
  makeSelectBotThreshold,
  makeSelectBotTimezone,
  makeSelectEntityData,
  makeSelectEntityDetail,
  makeSelectEntityId,
  makeSelectIntentId,
  makeSelectReplyMessage,
} from './selectors';
import request from '../../../utils/request';
import { handleChangeInIsBotTraining } from '../../App/actions';
// import SessionDb from '../../../localStorage';
import LocalDb from '../../../localStorage';

export function* fetchEntity(payload) {
  yield put(apiRequestMadeInBotConfiguration(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_CUSTOM_ENTITY +
        payload.botId +
        '/entity/custom?pageSize=' +
        PageSize,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchEntityListFailure(res.msg));
    } else {
      yield put(fetchEntityListSuccess(res, payload.isPaginating));
    }
  } catch (error) {
    yield put(fetchEntityListFailure(error.msg));
  }
}

export function* fetchSystemEntity(payload) {
  yield put(apiRequestMadeInBotConfiguration(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_SYSTEM_ENTITY +
        payload.botId +
        '/entity/system?pageSize=50',
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchSystemEntityListFailure(res.msg));
    } else {
      yield put(fetchSystemEntityListSuccess(res, payload.isPaginating));
    }
  } catch (error) {
    yield put(fetchSystemEntityListFailure(error.msg));
  }
}

export function* fetchEntityById() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const entityId = yield select(makeSelectEntityId());
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_ENTITY_BY_ID + '/' + entityId,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchEntityListByIdFailure(res.msg));
    } else {
      yield put(fetchEntityListByIdSuccess(res));
    }
  } catch (error) {
    yield put(fetchEntityListByIdFailure(error.msg));
  }
}

export function* deleteEntity() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const entityId = yield select(makeSelectEntityId());
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_ENTITY_BY_ID + '/' + entityId,
      {
        method: 'DELETE',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(deleteEntityFailure(res.msg));
    } else {
      yield put(deleteEntitySuccess(entityId));
    }
  } catch (error) {
    yield put(deleteEntityFailure(error.msg));
  }
}

export function* updateEntity() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const entityId = yield select(makeSelectEntityId());
  const entityDetail = yield select(makeSelectEntityDetail());
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_ENTITY_BY_ID + '/' + entityId,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify(entityDetail),
      },
    );
    if (res.error === true) {
      yield put(updateEntityFailure(res.msg));
    } else {
      yield put(updateEntitySuccess(res.entity));
    }
  } catch (error) {
    yield put(updateEntityFailure(error.msg));
  }
}

export function* createEntity() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const entityData = yield select(makeSelectEntityData());
  try {
    const res = yield call(request, APIEndPoints.CREATE_ENTITY, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(entityData),
    });
    if (res.error === true) {
      yield put(createEntityFailure(res.msg));
    } else {
      yield put(createEntitySuccess(res.entity));
    }
  } catch (error) {
    yield put(createEntityFailure(error.msg));
  }
}

export function* fetchIntent(payload) {
  yield put(apiRequestMadeInBotConfiguration(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_INTENT +
        payload.botId +
        '/intent?pageSize=' +
        PageSize +
        '&lang=' +
        payload.language +
        '&from=' +
        payload.from,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchIntentFailure(res.msg));
    } else {
      yield put(fetchIntentSuccess(res, payload.from, payload.isPaginating));
    }
  } catch (error) {
    yield put(fetchIntentFailure(error.msg));
  }
}

export function* retrainIntent(payload) {
  try {
    const res = yield call(request, APIEndPoints.RETRAIN_INTENT, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        botSettingId: payload.botId,
        language: payload.language,
      }),
    });
    if (res.error === true) {
      yield put(retrainIntentFailure(res.msg));
    } else {
      yield put(retrainIntentSuccess(res));
      yield put(handleChangeInIsBotTraining());
    }
  } catch (error) {
    yield put(retrainIntentFailure(error.msg));
  }
}

export function* deleteIntent() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const intentId = yield select(makeSelectIntentId());
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_INTENT_BY_ID + '/' + intentId,
      {
        method: 'DELETE',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(deleteIntentFailure(res.msg));
    } else {
      yield put(deleteIntentSuccess(intentId));
    }
  } catch (error) {
    yield put(deleteIntentFailure(error.msg));
  }
}

// bot setting
export function* fetchBotSetting(payload) {
  yield put(apiRequestMadeInBotConfiguration(true));
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_BOT_SETTING + payload.id,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchBotSettingFailure(res.msg));
    } else {
      yield put(fetchBotSettingSuccess(res));
    }
  } catch (error) {
    yield put(fetchBotSettingFailure(error.msg));
  }
}

export function* saveBotSetting() {
  yield put(apiRequestMadeInBotConfiguration(true));
  const serviceId = localStorage.getItem('serviceId');
  const name = yield select(makeSelectBotName());
  const timezone = yield select(makeSelectBotTimezone());
  const language = yield select(makeSelectBotLanguage());
  const botLanguage =
    language &&
    language
      .map(lang => {
        if (lang === 'English') return 'en';
        if (lang === 'Nepali') return 'ne';
      })
      .join();
  const image = yield select(makeSelectBotImage());
  const threshold = yield select(makeSelectBotThreshold());
  try {
    const res = yield call(request, APIEndPoints.SAVE_BOT_SETTING, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        serviceId,
        name,
        timezone,
        language: botLanguage,
        image,
        threshold: threshold === '' ? 0 : threshold,
      }),
    });
    if (res.error === true) {
      yield put(saveBotSettingFailure(res.msg));
    } else {
      yield put(saveBotSettingSuccess(res));
      yield fetchBotSetting();
    }
  } catch (error) {
    yield put(saveBotSettingFailure(error.msg));
  }
}

export function* updateBotSetting(payload) {
  yield put(apiRequestMadeInBotConfiguration(true));

  const botSettingId = yield select(makeSelectBotSettingId());
  const language = yield select(makeSelectBotLanguage());
  const noMatchRuleType = yield select(makeSelectBotNoMatchRuleType());

  const obj1 = {
    serviceId: localStorage.getItem('serviceId'),
    botSettingId: yield select(makeSelectBotSettingId()),
    name: yield select(makeSelectBotName()),
    botStatus: yield select(makeSelectBotStatus()),
    timezone: yield select(makeSelectBotTimezone()),
    // language: yield select(makeSelectBotLanguage()),
    language:
      language &&
      language
        .map(lang => {
          if (lang === 'English') return 'en';
          if (lang === 'Nepali') return 'ne';
        })
        .join(),
    image: yield select(makeSelectBotImage()),
    threshold: yield select(makeSelectBotThreshold()),
    inboxVisibility: yield select(makeSelectBotInboxVisibility()),
    noMatchRuleType,
  };

  if (noMatchRuleType === 'MESSAGE_REPLY') {
    obj1.replyMessage = yield select(makeSelectReplyMessage());
  } else {
    obj1.replyMessage = '';
  }

  const obj2 = { ...payload.botSettingObj, ...obj1 };

  console.log('ABCD', obj1, payload.botSettingObj, obj2);

  // const serviceId = localStorage.getItem('serviceId');
  // const name = yield select(makeSelectBotName());
  // const botStatus = yield select(makeSelectBotStatus());
  // const timezone = yield select(makeSelectBotTimezone());
  // const botLanguage =
  //   language &&
  //   language
  //     .map(lang => {
  //       if (lang === 'English') return 'en';
  //       if (lang === 'Nepali') return 'ne';
  //     })
  //     .join();
  // const image = yield select(makeSelectBotImage());
  // const threshold = yield select(makeSelectBotThreshold());
  // const inboxVisibility = yield select(makeSelectBotInboxVisibility());
  // const noMatchRuleType = yield select(makeSelectBotNoMatchRuleType());
  // const replyMessage = yield select(makeSelectReplyMessage());

  try {
    const res = yield call(
      request,
      APIEndPoints.UPDATE_BOT_SETTING + botSettingId,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
        body: JSON.stringify(obj2),
      },
    );
    if (res.error === true) {
      yield put(updateBotSettingFailure(res.msg));
      yield fetchBotSetting({ id: botSettingId });
    } else {
      yield put(updateBotSettingSuccess(res));
      yield fetchBotSetting({ id: botSettingId });
    }
  } catch (error) {
    yield put(updateBotSettingFailure(error.msg));
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

export function* fetchImportedIntentCount({ id, language }) {
  try {
    const res = yield call(
      request,
      APIEndPoints.GET_IMPORTED_INTENTS_COUNT + id + '?language=' + language,
      {
        method: 'GET',
        headers: TokenHandler.authHeadersForMultipartFormData(),
      },
    );
    if (res.error === true) {
      yield put(fetchImportedIntentsCountFailure(res.msg));
    } else {
      yield put(fetchImportedIntentsCountSuccess(res && res.count));
    }
  } catch (error) {
    yield put(fetchImportedIntentsCountFailure(error.msg));
  }
}

export function* botImport(payload) {
  try {
    const res = yield call(request, APIEndPoints.BOT_IMPORT, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        url:
          payload.importType === 'URL_TYPE'
            ? payload.url.includes('https://') ||
              payload.url.includes('http://')
              ? payload.url
              : 'https://' + payload.url
            : '',
        doc_file_url: payload.importType !== 'URL_TYPE' ? payload.docUrl : '',
        doc_file_name: payload.docName,
        serviceId: localStorage.getItem('serviceId'),
        accountId: LocalDb.getUserAccountId(),
        language: 'en',
        botSettingId: payload.botId,
        botImportType: payload.importType,
      }),
    });
    if (res.error === true) {
      yield put(botImportFailure(res.msg));
    } else {
      yield put(botImportSuccess(res));
    }
  } catch (error) {
    yield put(botImportFailure(error.msg));
  }
}

export function* uploadIntentDocument(action) {
  const attachment = action.file;
  console.log('attachment is', attachment);
  const formData = new FormData();
  if (attachment.type.includes('image/')) {
    formData.append('image', attachment);
  }
  if (
    attachment.type === 'application/pdf' ||
    attachment.type.includes('text/') ||
    attachment.type.includes('application/')
  ) {
    formData.append('doc', attachment);
  }
  try {
    const res = yield call(
      request,
      attachment.type === 'application/pdf' ||
        attachment.type.includes('text/') ||
        attachment.type.includes('application/')
        ? APIEndPoints.UPLOAD_DOC
        : attachment.type.includes('image/')
        ? APIEndPoints.UPLOAD_IMAGE
        : null,
      {
        method: 'POST',
        headers: TokenHandler.authHeadersForMultipartFormData(),
        body: formData,
      },
    );
    if (res.error === true) {
      yield put(uploadDocumentFailure(res.msg));
    } else {
      yield put(uploadDocumentSuccess(res.fileUrl, attachment.name));
    }
  } catch (error) {
    yield put(uploadDocumentFailure(error.msg));
  }
}

// Individual exports for testing
export default function* botConfigurationTabSaga() {
  yield takeLatest(ACTION_TYPE_ENTITY.FETCH_ENTITY, fetchEntity);
  yield takeLatest(ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY, fetchSystemEntity);
  yield takeLatest(ACTION_TYPE_ENTITY.CREATE_ENTITY_IN_ENTITY, createEntity);
  yield takeLatest(ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID, fetchEntityById);
  yield takeLatest(ACTION_TYPE_ENTITY.UPDATE_ENTITY, updateEntity);
  yield takeLatest(ACTION_TYPE_ENTITY.DELETE_ENTITY, deleteEntity);

  yield takeLatest(ACTION_TYPE_INTENT.FETCH_INTENT, fetchIntent);
  yield takeLatest(ACTION_TYPE_INTENT.DELETE_INTENT, deleteIntent);
  yield takeLatest(ACTION_TYPE_INTENT.RETRAIN_INTENT, retrainIntent);
  yield takeLatest(
    ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT,
    fetchImportedIntentCount,
  );
  yield takeLatest(ACTION_TYPE_INTENT.BOT_IMPORT, botImport);
  yield takeLatest(ACTION_TYPE_INTENT.UPLOAD_DOCUMENT, uploadIntentDocument);

  yield takeLatest(ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING, fetchBotSetting);
  yield takeLatest(ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING, saveBotSetting);
  yield takeLatest(
    ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING,
    updateBotSetting,
  );
  yield takeLatest(ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE, uploadBotImage);
}

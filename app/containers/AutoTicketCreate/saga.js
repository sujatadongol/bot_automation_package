import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import APIEndPoints from '../../globalConstants';
import TokenHandler from '../../token';
import { ACTION_TYPE_TICKET_SETTING } from './constants';
import { autoTicketCreateList } from './helper';
import {
  addCustomRuleFailure,
  addCustomRuleSuccess,
  apiRequestMadeInTicketSetting,
  clearCustomRuleModal,
  disableAutoTicketCreateFailure,
  disableAutoTicketCreateSuccess,
  enableAutoTicketCreateFailure,
  enableAutoTicketCreateSuccess,
  fetchAutoTicketCreateListSuccess,
  fetchAutoTicketCreateListFailure,
  fetchCustomRuleFailure,
  fetchCustomRuleSuccess,
  fetchTicketSettingFailure,
  fetchTicketSettingSuccess,
  getTicketSettingFailure,
  getTicketSettingSuccess,
  retrainCustomRuleFailure,
  retrainCustomRuleSuccess,
  createAutoTicketFailure,
  createAutoTicketSuccess,
  updateAutoTicketSuccess,
  updateAutoTicketFailure,
  getAutoTicketCreateRulesSuccess,
  getAutoTicketCreateRulesFailure,
  deleteAutoTicketCreateFailure,
  deleteAutoTicketCreateSuccess,
  retrainAutoTicketCreateFailure,
  retrainAutoTicketCreateSuccess,
} from './actions';
import { makeSelectCustomRules } from './selectors';
import { handleChangeInIsCustomRuleTraining } from '../App/actions';

export function* fetchTicketSetting() {
  yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_TICKET_SETTING + serviceId,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchTicketSettingFailure(res.msg));
    } else {
      console.log('Fetching ...');
      yield put(fetchTicketSettingSuccess(res));
    }
  } catch (error) {
    yield put(fetchTicketSettingFailure(error.msg));
  }
}

export function* enableAutoTicketCreate() {
  yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.ENABLE_AUTO_TICKET_CREATE + serviceId}/enable`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(enableAutoTicketCreateFailure(res.msg));
    } else {
      yield put(enableAutoTicketCreateSuccess(res));
      yield fetchTicketSetting();
    }
  } catch (error) {
    yield put(enableAutoTicketCreateFailure(error.msg));
  }
}

export function* disableAutoTicketCreate() {
  yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      `${APIEndPoints.DISABLE_AUTO_TICKET_CREATE + serviceId}/disable`,
      {
        method: 'PATCH',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(disableAutoTicketCreateFailure(res.msg));
    } else {
      yield put(disableAutoTicketCreateSuccess(res));
      yield fetchTicketSetting();
    }
  } catch (error) {
    yield put(disableAutoTicketCreateFailure(error.msg));
  }
}

export function* retrainCustomRule() {
  // yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      APIEndPoints.RETRAIN_CUSTOM_RULE + serviceId,
      {
        method: 'POST',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(retrainCustomRuleFailure(res.msg));
    } else {
      yield put(retrainCustomRuleSuccess(res));
      yield put(handleChangeInIsCustomRuleTraining());
    }
  } catch (error) {
    yield put(retrainCustomRuleFailure(error.msg));
  }
}

export function* fetchCustomRule() {
  // yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  try {
    const res = yield call(
      request,
      APIEndPoints.FETCH_CUSTOM_RULE + serviceId,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(fetchCustomRuleFailure(res.msg));
    } else {
      yield put(clearCustomRuleModal());
      yield put(fetchCustomRuleSuccess(res));
    }
  } catch (error) {
    yield put(fetchCustomRuleFailure(error.msg));
  }
}

export function* addCustomRule() {
  yield put(apiRequestMadeInTicketSetting(true));
  const serviceId = localStorage.getItem('serviceId');
  const customRules = yield select(makeSelectCustomRules());
  try {
    const res = yield call(request, APIEndPoints.ADD_CUSTOM_RULE + serviceId, {
      method: 'PATCH',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify(customRules),
    });
    if (res.error === true) {
      yield put(addCustomRuleFailure(res.msg));
    } else {
      yield put(addCustomRuleSuccess(res));
      yield fetchCustomRule();
    }
  } catch (error) {
    yield put(addCustomRuleFailure(error.msg));
  }
}
//
// export function* fetchAutoTicketCreate() {
//   const serviceId = localStorage.getItem('serviceId');
//   try {
//     const res = yield call(
//       request,
//       APIEndPoints.FETCH_TICKET_SETTING + serviceId,
//       {
//         method: 'GET',
//         headers: TokenHandler.authHeaders(),
//       },
//     );
//     console.log(res);
//     if (res.error === true) {
//       yield put(actions.fetchAutoTicketCreateFailure(res.msg));
//     } else {
//       yield put(actions.fetchAutoTicketCreateSuccess(res));
//     }
//   } catch (error) {
//     yield put(actions.fetchAutoTicketCreateFailure(error.msg));
//   }
// }

export function* getTicketSetting() {
  yield put(apiRequestMadeInTicketSetting(true));
  try {
    const res = yield call(request, APIEndPoints.GET_TICKET_SETTING, {
      method: 'GET',
      headers: TokenHandler.authHeadersForMultipartFormData(),
    });
    if (res.error === true) {
      yield put(getTicketSettingFailure(res.msg));
    } else {
      console.log('Fetching ...');
      yield put(getTicketSettingSuccess(res));
    }
  } catch (error) {
    yield put(getTicketSettingFailure(error.msg));
  }
}
// fetch auto ticket create list
export function* fetchAutoTicketList({ page }) {
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
      yield put(fetchAutoTicketCreateListFailure(res.msg));
    } else {
      yield put(
        fetchAutoTicketCreateListSuccess(
          res.autoTicketCreateModels,
          res.cursor,
        ),
      );
    }
  } catch (error) {
    yield put(fetchAutoTicketCreateListFailure(error.msg));
  }
}
// create Auto Ticket
export function* createAutoTicket({ name, rule }) {
  try {
    const res = yield call(request, APIEndPoints.AUTO_TICKET_CREATE, {
      method: 'POST',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        name,
        ticketCreateRule: rule,
      }),
    });
    if (res.error === true) {
      yield put(createAutoTicketFailure(res.msg));
    } else {
      yield put(createAutoTicketSuccess(res.autoTicketCreateModel));
    }
  } catch (error) {
    yield put(createAutoTicketFailure(error));
  }
}
// update ticket create
export function* updateTicketCreate({ id, name, rule }) {
  try {
    const res = yield call(request, APIEndPoints.UPDATE_TICKET_CREATE + id, {
      method: 'PUT',
      headers: TokenHandler.authHeaders(),
      body: JSON.stringify({
        name,
        ticketCreateRule: rule,
      }),
    });
    if (res.error === true) {
      yield put(updateAutoTicketFailure(res.msg));
    } else {
      yield put(updateAutoTicketSuccess(res.autoTicketCreateModel, id));
    }
  } catch (error) {
    yield put(updateAutoTicketFailure(error));
  }
}
// get auto ticket create rules
export function* getAutoTicketCreateRules({ id }) {
  try {
    const res = yield call(
      request,
      APIEndPoints.GET_AUTO_TICKET_CREATE_RULES + id,
      {
        method: 'GET',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(getAutoTicketCreateRulesFailure(res.msg));
    } else {
      yield put(getAutoTicketCreateRulesSuccess(res.autoTicketCreateModel));
    }
  } catch (error) {
    yield put(getAutoTicketCreateRulesFailure(error));
  }
}
// delete auto ticket create
export function* deleteAutoTicketCreate({ id }) {
  try {
    const res = yield call(
      request,
      APIEndPoints.DELETE_AUTO_TICKET_CREATE + id,
      {
        method: 'DELETE',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(deleteAutoTicketCreateFailure(res.msg));
    } else {
      yield put(deleteAutoTicketCreateSuccess(id));
    }
  } catch (error) {
    yield put(deleteAutoTicketCreateFailure(error));
  }
}
export function* retrainAutoTicketCreate({ id }) {
  try {
    const res = yield call(
      request,
      `${APIEndPoints.RETRAIN_AUTO_TICKET_CREATE + id}/train`,
      {
        method: 'POST',
        headers: TokenHandler.authHeaders(),
      },
    );
    if (res.error === true) {
      yield put(retrainAutoTicketCreateFailure(res.msg));
    } else {
      yield put(retrainAutoTicketCreateSuccess(res, id));
    }
  } catch (error) {
    yield put(retrainAutoTicketCreateFailure(error));
  }
}

// Individual exports for testing
export default function* ticketSettingSaga() {
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING,
    fetchTicketSetting,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE,
    enableAutoTicketCreate,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE,
    disableAutoTicketCreate,
  );

  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE,
    retrainCustomRule,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE,
    fetchCustomRule,
  );
  yield takeLatest(ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE, addCustomRule);
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.GET_TICKET_SETTING,
    getTicketSetting,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST,
    fetchAutoTicketList,
  );
  // create auto ticket
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET,
    createAutoTicket,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET,
    updateTicketCreate,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES,
    getAutoTicketCreateRules,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE,
    deleteAutoTicketCreate,
  );
  yield takeLatest(
    ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE,
    retrainAutoTicketCreate,
  );
}

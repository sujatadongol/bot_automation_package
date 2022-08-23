import { ACTION_TYPE_TICKET_SETTING, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const apiRequestMadeInTicketSetting = bool => ({
  type: ACTION_TYPE_TICKET_SETTING.API_REQUEST_MADE_IN_TICKET_SETTING,
  bool,
});

export const fetchTicketSetting = () => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING,
});

export const fetchTicketSettingSuccess = ticketSetting => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING_SUCCESS,
  ticketSetting,
});

export const fetchTicketSettingFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING_FAILURE,
  error,
});

export const enableAutoTicketCreate = () => ({
  type: ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE,
});

export const enableAutoTicketCreateSuccess = () => ({
  type: ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE_SUCCESS,
});

export const enableAutoTicketCreateFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE_FAILURE,
  error,
});

export const disableAutoTicketCreate = () => ({
  type: ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE,
});

export const disableAutoTicketCreateSuccess = () => ({
  type: ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE_SUCCESS,
});

export const disableAutoTicketCreateFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE_FAILURE,
  error,
});

export const retrainCustomRule = () => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE,
});

export const retrainCustomRuleSuccess = () => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE_SUCCESS,
});

export const retrainCustomRuleFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE_FAILURE,
  error,
});

export const fetchCustomRule = () => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE,
});

export const fetchCustomRuleSuccess = customRules => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE_SUCCESS,
  customRules,
});

export const fetchCustomRuleFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE_FAILURE,
  error,
});

export const handleChangeInCustomRule = (id, value) => ({
  type: ACTION_TYPE_TICKET_SETTING.HANDLE_CHANGE_IN_CUSTOM_RULES,
  id,
  value,
});

export const addCustomRuleRow = () => ({
  type: ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_ROW,
});
export const removeCustomRule = id => ({
  type: ACTION_TYPE_TICKET_SETTING.REMOVE_CUSTOM_RULE,
  id,
});
export const clearCustomRuleModal = () => ({
  type: ACTION_TYPE_TICKET_SETTING.CLEAR_CUSTOM_RULE_MODAL,
});
export const addCustomRule = () => ({
  type: ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE,
});

export const addCustomRuleSuccess = () => ({
  type: ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_SUCCESS,
});

export const addCustomRuleFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_FAILURE,
  error,
});

export const closeSnackbarInTicketSetting = bool => ({
  type: ACTION_TYPE_TICKET_SETTING.CLOSE_SNACKBAR_IN_TICKET_SETTING_PAGE,
  bool,
});

// GET TICKET SETTINGS
export const getTicketSetting = () => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_TICKET_SETTING,
});

export const getTicketSettingSuccess = ticketSetting => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_TICKET_SETTING_SUCCESS,
  ticketSetting,
});

export const getTicketSettingFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_TICKET_SETTING_FAILURE,
  error,
});
// fetch auto ticket create list
export const fetchAutoTicketCreateList = page => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST,
  page,
});
export const fetchAutoTicketCreateListSuccess = (autoTicketList, cursor) => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST_SUCCESS,
  autoTicketList,
  cursor,
});
export const fetchAutoTicketCreateListFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST_FAILURE,
  error,
});
// create auto ticket
export const createAutoTicket = (name, rule) => ({
  type: ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET,
  name,
  rule,
});
export const createAutoTicketSuccess = createdTicket => ({
  type: ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET_SUCCESS,
  createdTicket,
});
export const createAutoTicketFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET_FAILURE,
  error,
});
// update auto ticket
export const updateAutoTicket = (id, name, rule) => ({
  type: ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET,
  id,
  name,
  rule,
});
export const updateAutoTicketSuccess = (updatedTicket, id) => ({
  type: ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET_SUCCESS,
  updatedTicket,
  id,
});
export const updateAutoTicketFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET_FAILURE,
  error,
});
// get auto ticket create rules
export const getAutoTicketCreateRules = id => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES,
  id,
});
export const getAutoTicketCreateRulesSuccess = ticketDetail => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES_SUCCESS,
  ticketDetail,
});
export const getAutoTicketCreateRulesFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES_FAILURE,
  error,
});
export const deleteAutoTicketCreate = id => ({
  type: ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE,
  id,
});
export const deleteAutoTicketCreateSuccess = id => ({
  type: ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE_SUCCESS,
  id,
});
export const deleteAutoTicketCreateFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE_FAILURE,
  error,
});
// retrain auto ticket create
export const retrainAutoTicketCreate = id => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE,
  id,
});
export const retrainAutoTicketCreateSuccess = (res, id) => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE_SUCCESS,
  res,
  id,
});
export const retrainAutoTicketCreateFailure = error => ({
  type: ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE_FAILURE,
  error,
});

export const toggleRetrainLoaderInAutoTicketCreate = (id, lastTrained) => ({
  type: ACTION_TYPE_TICKET_SETTING.TOGGLE_AUTO_TICKET_CREATE_RETRAIN,
  id,
  lastTrained,
});

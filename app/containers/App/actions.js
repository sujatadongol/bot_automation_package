/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  ACTION_TYPE_NAVBAR,
  ACTION_TYPE_GLOBAL_INTENT,
  ACTION_TYPE_SERVICE,
  ACTION_TYPE_EMPLOYEE,
  ACTION_TYPE_GLOBAL_TICKET,
  ACTION_TYPE_USER,
  ACTION_TYPE_BOT,
  SETTINGS_ACTION,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
export const reloadContainer = bool => ({
  type: ACTION_TYPE_NAVBAR.RELOAD_CONTAINER,
  bool,
});
export const handleChangeInIsCustomRuleTraining = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.HANDLE_CHANGE_IN_IS_CUSTOM_RULE_TRAINING,
});
// fetch service for navbar
export const toggleEmptyServiceModal = bool => ({
  type: ACTION_TYPE_NAVBAR.TOGGLE_EMPTY_SERVICE_MODAL,
  bool,
});

export const handleChangeBreadcrumbValue = (
  breadcrumbValue,
  breadcrumbPath,
) => ({
  type: ACTION_TYPE_NAVBAR.HANDLE_CHANGE_BREADCRUMBS_VALUE,
  breadcrumbValue,
  breadcrumbPath,
});
export const fetchProjectInNavbar = () => ({
  type: ACTION_TYPE_NAVBAR.FETCH_PROJECT_IN_NAVBAR,
});

export const fetchProjectInNavbarSuccess = projects => ({
  type: ACTION_TYPE_NAVBAR.FETCH_PROJECT_IN_NAVBAR_SUCCESS,
  projects,
});

export const fetchProjectInNavbarFailure = error => ({
  type: ACTION_TYPE_NAVBAR.FETCH_PROJECT_IN_NAVBAR_FAILURE,
  error,
});
export const fetchServiceInNavbar = () => ({
  type: ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR,
});

export const fetchServiceInNavbarSuccess = serviceListInNavbar => ({
  type: ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR_SUCCESS,
  serviceListInNavbar,
});

export const fetchServiceInNavbarFailure = error => ({
  type: ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR_FAILURE,
  error,
});
export const handleChangeServiceIdInNavbar = (
  serviceIdInNavbar,
  serviceObj,
  reload,
  serviceCode,
) => ({
  type: ACTION_TYPE_NAVBAR.HANDLE_CHANGE_SERVICE_ID_IN_NAVBAR,
  serviceIdInNavbar,
  serviceObj,
  reload,
  serviceCode,
});
export const openTryOutModal = bool => ({
  type: ACTION_TYPE_GLOBAL_INTENT.OPEN_TRY_OUT_MODAL,
  bool,
});
export const clearTryOutData = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.CLEAR_TRY_OUT_DATA,
});

export const closeSnackbarInApp = bool => ({
  type: ACTION_TYPE_NAVBAR.CLOSE_SNACKBAR,
  bool,
});
export const openIntegrationTabAfterCreatingApi = () => ({
  type: ACTION_TYPE_SERVICE.OPEN_INTEGRATION_TAB_AFTER_CREATING_API,
});
export const openListApiAfterCreatingApi = () => ({
  type: ACTION_TYPE_SERVICE.OPEN_LIST_API_AFTER_CREATING_API,
});
export const handleChangeInIsBotTraining = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.HANDLE_CHANGE_IN_IS_BOT_TRAINING,
});
export const handleServiceDetailTabs = value => ({
  type: ACTION_TYPE_SERVICE.HANDLE_SERVICE_DETAIL_TABS,
  value,
});
export const closeCreateEntityModal = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.CLOSE_CREATE_ENTITY_MODAL,
});

export const openCreateEntityModal = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.OPEN_CREATE_ENTITY_MODAL,
});
export const openBotTabAfterCreatingIntent = () => ({
  type: ACTION_TYPE_SERVICE.OPEN_BOT_TAB_AFTER_CREATING_INTENT,
});
// fetch entity in intent
export const fetchEntityInIntent = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT,
});
export const fetchEntityInIntentSuccess = entityList => ({
  type: ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT_SUCCESS,
  entityList,
});
export const fetchEntityInIntentFailure = () => ({
  type: ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT_FAILURE,
});
// employee section
export const fetchEmployee = () => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_EMPLOYEE_GLOBALLY,
});

export const fetchEmployeeSuccess = employeeList => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_EMPLOYEE_GLOBALLY_SUCCESS,
  employeeList,
});

export const fetchEmployeeFailure = error => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_EMPLOYEE_GLOBALLY_FAILURE,
  error,
});
export const handleChangeAssignedEmployeeIdInTicket = assignedEmployeeId => ({
  type: ACTION_TYPE_GLOBAL_TICKET.HANDLE_CHANGE_ASSIGNED_EMPLOYEE_ID_IN_TICKET,
  assignedEmployeeId,
});
export const handleChangeInSidebar = accountDetails => ({
  type: ACTION_TYPE_NAVBAR.HANDLE_CHANGE_IN_SIDEBAR,
  accountDetails,
});
export const fetchGlobalTokens = () => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS,
});
export const fetchGlobalTokensSuccess = serviceProviders => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS_SUCCESS,
  serviceProviders,
});
export const fetchGlobalTokensFailure = error => ({
  type: ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS_FAILURE,
  error,
});
export const saveUserInformation = (account, serviceId) => ({
  type: ACTION_TYPE_USER.SAVE_USER_INFORMATION,
  account,
  serviceId,
});

export const getAllBot = () => ({
  type: ACTION_TYPE_BOT.GET_ALL_BOT,
});
export const getAllBotSuccess = (bots, cursor) => ({
  type: ACTION_TYPE_BOT.GET_ALL_BOT_SUCCESS,
  bots,
  cursor,
});
export const getAllBotFailure = error => ({
  type: ACTION_TYPE_BOT.GET_ALL_BOT_FAILURE,
  error,
});

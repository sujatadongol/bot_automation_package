import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectTicketSetting, {
  makeSelectCustomRuleArray,
  makeSelectCustomRuleArrayLength,
  makeSelectError,
  makeSelectLoading,
  makeSelectSnackbar,
  makeSelectTicketSettingDetail,
  makeSelectVariant,
  makeSelectAutoTicketList,
  makeSelectTicketDetail,
  makeSelectAutoTicketCreate,
  makeSelectNextCursor,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import TicketSetting from './TicketSetting';
import {
  addCustomRule,
  addCustomRuleRow,
  clearCustomRuleModal,
  closeSnackbarInTicketSetting,
  disableAutoTicketCreate,
  enableAutoTicketCreate,
  fetchCustomRule,
  fetchTicketSetting,
  handleChangeInCustomRule,
  removeCustomRule,
  retrainCustomRule,
  getTicketSetting,
  fetchAutoTicketCreateList,
  createAutoTicket,
  updateAutoTicket,
  getAutoTicketCreateRules,
  deleteAutoTicketCreate,
  retrainAutoTicketCreate,
  toggleRetrainLoaderInAutoTicketCreate,
} from './actions';
import {
  makeSelectGlobalNotificationObj,
  makeSelectIsCustomRuleTraining,
  makeSelectReloadContainer,
  makeSelectTicketAdminPermission,
  makeSelectTicketWritePermission,
} from '../App/selectors';
import {
  handleChangeInIsCustomRuleTraining,
  reloadContainer,
} from '../App/actions';
import { botPermissionModel } from '../Settings/selectors';

const mapStateToProps = createStructuredSelector({
  ticketSetting: makeSelectTicketSetting(),

  ticketAdmin: makeSelectTicketAdminPermission(),
  ticketWrite: makeSelectTicketWritePermission(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackBar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  notificationObj: makeSelectGlobalNotificationObj(),

  ticketSettingDetail: makeSelectTicketSettingDetail(),
  customRuleArray: makeSelectCustomRuleArray(),
  customRuleArrayLength: makeSelectCustomRuleArrayLength(),

  isCustomRuleTraining: makeSelectIsCustomRuleTraining(),

  reloadContainer: makeSelectReloadContainer(),
  autoTicketList: makeSelectAutoTicketList(),
  ticketDetail: makeSelectTicketDetail(),
  autoTicketCreate: makeSelectAutoTicketCreate(),
  nextCursor: makeSelectNextCursor(),
  botPermissionModel: botPermissionModel(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),

    handleChangeInIsCustomRuleTraining: () =>
      dispatch(handleChangeInIsCustomRuleTraining()),

    fetchTicketSetting: () => dispatch(fetchTicketSetting()),
    enableAutoTicketCreate: () => dispatch(enableAutoTicketCreate()),
    disableAutoTicketCreate: () => dispatch(disableAutoTicketCreate()),

    retrainCustomRule: () => dispatch(retrainCustomRule()),
    fetchCustomRule: () => dispatch(fetchCustomRule()),
    addCustomRule: () => dispatch(addCustomRule()),

    addCustomRuleRow: () => dispatch(addCustomRuleRow()),
    handleChangeInCustomRule: (id, value) =>
      dispatch(handleChangeInCustomRule(id, value)),
    removeCustomRule: id => dispatch(removeCustomRule(id)),
    clearCustomRuleModal: () => dispatch(clearCustomRuleModal()),

    handleSnackBarClose: () => dispatch(closeSnackbarInTicketSetting(true)),
    getTicketSetting: () => dispatch(getTicketSetting()),
    fetchAutoTicketCreateList: page =>
      dispatch(fetchAutoTicketCreateList(page)),
    // create auto ticket
    createAutoTicket: (name, rule) => dispatch(createAutoTicket(name, rule)),
    updateAutoTicket: (id, name, rule) =>
      dispatch(updateAutoTicket(id, name, rule)),
    getAutoTicketCreateRules: id => dispatch(getAutoTicketCreateRules(id)),
    deleteAutoTicketCreate: id => dispatch(deleteAutoTicketCreate(id)),
    retrainAutoTicketCreate: id => dispatch(retrainAutoTicketCreate(id)),
    toggleRetrainLoaderInAutoTicketCreate: (id, lastTrained) =>
      dispatch(toggleRetrainLoaderInAutoTicketCreate(id, lastTrained)),
  };
}

const withReducer = useInjectReducer({ key: 'ticketSetting', reducer });
const withSaga = useInjectSaga({ key: 'ticketSetting', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(TicketSetting);

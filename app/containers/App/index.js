/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Screen from './Screen';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectArrivedMessage,
  makeSelectLoading,
  makeSelectSPAccounts,
  makeSelectReloadContainer,
  makeSelectUserInformation,
  makeSelectUserServiceId,
  makeSelectLanguages,
  // makeSelectBotList,
} from './selectors';
import {
  reloadContainer,
  toggleEmptyServiceModal,
  fetchGlobalTokens,
  handleChangeInSidebar,
  saveUserInformation,
  fetchServiceInNavbar,
  getAllBot,
  fetchProjectInNavbar,
} from './actions';
import { fetchAllSettings } from '../Settings/actions';
import settingsReducer from '../Settings/reducer';
import settingsSaga from '../Settings/saga';
import { makeSelectAllSettings } from '../Settings/selectors';
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  newArrivedMessage: makeSelectArrivedMessage(),
  spAccounts: makeSelectSPAccounts(),
  reloadContainer: makeSelectReloadContainer(),
  userInformation: makeSelectUserInformation(),
  userServiceId: makeSelectUserServiceId(),
  languages: makeSelectLanguages(),
  settings: makeSelectAllSettings(),
  // botList: makeSelectBotList(),
});
// LocalDb.setAccountDataToSession();

function mapDispatchToProps(dispatch) {
  return {
    reloadFunc: () => dispatch(reloadContainer(false)),
    toggleEmptyServiceModal: bool => dispatch(toggleEmptyServiceModal(bool)),
    fetchGlobalTokens: () => dispatch(fetchGlobalTokens()),
    handleChangeInSidebar: accountDetails =>
      dispatch(handleChangeInSidebar(accountDetails)),
    saveUserInformation: (account, serviceId) =>
      dispatch(saveUserInformation(account, serviceId)),
    // selectTheMainUser: (account, serviceId) =>
    //   dispatch(selectTheMainUser(account, serviceId)),
    fetchServiceInNavbar: () => dispatch(fetchServiceInNavbar()),
    fetchProjectInNavbar: () => dispatch(fetchProjectInNavbar()),
    // getServiceGroup: () => dispatch(getServiceGroup()),
    getAllBot: () => dispatch(getAllBot()),
    fetchAllSettings: () => dispatch(fetchAllSettings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

const withReducerSetting = injectReducer({
  key: 'settings',
  reducer: settingsReducer,
});
const withSagaSetting = injectSaga({ key: 'settings', saga: settingsSaga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  withReducerSetting,
  withSagaSetting,
  memo,
)(Screen);

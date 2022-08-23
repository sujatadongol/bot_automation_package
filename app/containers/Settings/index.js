/**
 *
 * Settings
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectSettings, {
  makeSelectChangeState,
  makeSelectPermissionLists,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  fetchAllSettings,
  fetchLanguages,
  fetchTimezones,
  updateSettings,
  handleChangeState,
} from './actions';
import Screen from './Screen';

const mapStateToProps = createStructuredSelector({
  settings: makeSelectSettings(),
  changeState: makeSelectChangeState(),
  permissionList: makeSelectPermissionLists(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAllSettings: () => dispatch(fetchAllSettings()),
    fetchLanguages: () => dispatch(fetchLanguages()),
    fetchTimezones: () => dispatch(fetchTimezones()),
    updateSettings: (settings, settingType) =>
      dispatch(updateSettings(settings, settingType)),
    handleChangeState: (settingType, bool) =>
      dispatch(handleChangeState(settingType, bool)),
  };
}
const withReducer = useInjectReducer({ key: 'settings', reducer });
const withSaga = useInjectSaga({ key: 'settings', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
// Settings.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };
export default compose(
  withConnect,
  memo,
  withReducer,
  withSaga,
)(Screen);

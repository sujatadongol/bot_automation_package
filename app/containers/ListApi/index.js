/**
 *
 * ListApi
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectListApi, {
  makeSelectApiList,
  makeSelectLoading,
  makeSelectOpenSnackBar,
  makeSelectSnackBarMsg,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ListApi from './ListApi';
import {
  deleteListApi,
  fetchListApi,
  closeSnackBarInListApi,
  getAllApi,
} from './actions';
import {
  makeSelectGlobalServiceIdForBotConfiguration,
  makeSelectIntegrationAdminPermission,
  makeSelectReloadContainer,
} from '../App/selectors';
import { reloadContainer } from '../App/actions';
import { botPermissionModel } from '../Settings/selectors';

ListApi.propTypes = {};

const mapStateToProps = createStructuredSelector({
  listApi: makeSelectListApi(),
  integrationAdmin: makeSelectIntegrationAdminPermission(),
  // serviceId: makeSelectGlobalServiceIdForBotConfiguration(),
  apiList: makeSelectApiList(),
  loading: makeSelectLoading(),
  openSnackBar: makeSelectOpenSnackBar(),
  variant: makeSelectVariant(),
  snackbarMsg: makeSelectSnackBarMsg(),

  reloadContainer: makeSelectReloadContainer(),
  botPermissionModel: botPermissionModel(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),
    fetchApiList: () => dispatch(fetchListApi()),
    deleteApi: apiId => dispatch(deleteListApi(apiId)),
    closeSnackbarInListApi: bool => dispatch(closeSnackBarInListApi(true)),
    getAllApi: () => dispatch(getAllApi()),
  };
}

const withReducer = useInjectReducer({ key: 'listApi', reducer });
const withSaga = useInjectSaga({ key: 'listApi', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withReducer,
  withSaga,
)(ListApi);

/**
 *
 * UpdateApi
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectUpdateApi, {
  makeSelectApiData,
  makeSelectError,
  makeSelectHeaderData,
  makeSelectLoading,
  makeSelectParameterData,
  makeSelectSnackbar,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import UpdateApiScreen from './UpdateApiScreen';
import { openIntegrationTabAfterCreatingApi } from '../App/actions';
import {
  addHeaderInUpdateApi,
  addParameterInUpdateApi,
  clearApiDataInUpdateApi,
  closeSnackbarInUpdateApi,
  fetchApiById,
  handleChangeApiDataInUpdateApi,
  handleChangeApiId,
  handleChangeInHeaderInUpdateApi,
  handleChangeInParameterInUpdateApi,
  removeHeaderInUpdateApi,
  removeParameterInUpdateApi,
  updateApi,
} from './actions';
import { makeSelectReloadContainer } from '../App/selectors';

const mapStateToProps = createStructuredSelector({
  updateApi: makeSelectUpdateApi(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  apiData: makeSelectApiData(),
  headerData: makeSelectHeaderData(),
  parameterData: makeSelectParameterData(),

  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleChangeApiId: apiId => dispatch(handleChangeApiId(apiId)),
    fetchApiById: () => dispatch(fetchApiById()),

    handleChangeInApiData: (id, data) =>
      dispatch(handleChangeApiDataInUpdateApi(id, data)),

    addHeader: () => dispatch(addHeaderInUpdateApi()),
    removeHeader: headerId => dispatch(removeHeaderInUpdateApi(headerId)),
    handleChangeInHeader: (headerId, key, value) =>
      dispatch(handleChangeInHeaderInUpdateApi(headerId, key, value)),

    addParameter: () => dispatch(addParameterInUpdateApi()),
    removeParameter: headerId => dispatch(removeParameterInUpdateApi(headerId)),
    handleChangeInParameter: (parameterId, key, value) =>
      dispatch(handleChangeInParameterInUpdateApi(parameterId, key, value)),

    updateApi: (serviceId, apiId) => dispatch(updateApi(serviceId, apiId)),
    openIntegrationTab: () => dispatch(openIntegrationTabAfterCreatingApi()),
    clearApiData: () => dispatch(clearApiDataInUpdateApi()),
    closeSnackbar: () => dispatch(closeSnackbarInUpdateApi(true)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = useInjectReducer({key: 'updateApi', reducer});
const withSaga = useInjectSaga({key: 'updateApi', saga});

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(UpdateApiScreen);

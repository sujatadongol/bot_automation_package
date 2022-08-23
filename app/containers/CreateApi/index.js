import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectCreateApi, {
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
import CreateApiScreen from './CreateApiScreen';
import {
  addHeader,
  addParameter,
  clearApiData,
  closeSnackbarInCreateApi,
  createApi,
  handleChangeApiData,
  handleChangeInHeader,
  handleChangeInParameter,
  removeHeader,
  removeParameter,
} from './actions';
import { openIntegrationTabAfterCreatingApi } from '../App/actions';
import { makeSelectReloadContainer } from '../App/selectors';
import { botPermissionModel } from '../Settings/selectors';

const mapStateToProps = createStructuredSelector({
  createApi: makeSelectCreateApi(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  apiData: makeSelectApiData(),
  headerData: makeSelectHeaderData(),
  parameterData: makeSelectParameterData(),

  reloadContainer: makeSelectReloadContainer(),
  botPermissionModel: botPermissionModel(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleChangeInApiData: (id, data) =>
      dispatch(handleChangeApiData(id, data)),

    addHeader: () => dispatch(addHeader()),
    removeHeader: headerId => dispatch(removeHeader(headerId)),
    handleChangeInHeader: (headerId, key, value) =>
      dispatch(handleChangeInHeader(headerId, key, value)),

    addParameter: () => dispatch(addParameter()),
    removeParameter: headerId => dispatch(removeParameter(headerId)),
    handleChangeInParameter: (parameterId, key, value) =>
      dispatch(handleChangeInParameter(parameterId, key, value)),

    createApi: () => dispatch(createApi()),
    openIntegrationTab: () => dispatch(openIntegrationTabAfterCreatingApi()),
    clearApiData: () => dispatch(clearApiData()),
    closeSnackbar: () => dispatch(closeSnackbarInCreateApi(true)),
  };
}

const withReducer = useInjectReducer({ key: 'createApi', reducer });
const withSaga = useInjectSaga({ key: 'createApi', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(CreateApiScreen);

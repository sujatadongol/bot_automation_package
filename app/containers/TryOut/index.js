/**
 *
 * TryOut
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectTryOut, {
  makeSelectError,
  makeSelectLoading,
  makeSelectSnackbar,
  makeSelectTryOutResponse,
  makeSelectTryOutText,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import TryOutScreen from './TryOutScreen';
import { makeSelectOpenTryOutModal } from '../App/selectors';
import { clearTryOutData, openTryOutModal } from '../App/actions';
import {
  closeSnackbarInTryOut,
  fetchTryOutResponse,
  handleChangeInTryOutText,
} from './actions';

const mapStateToProps = createStructuredSelector({
  tryOut: makeSelectTryOut(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackBar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  openTryOutModal: makeSelectOpenTryOutModal(),
  tryOutText: makeSelectTryOutText(),
  tryOutResponse: makeSelectTryOutResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeTryOutModal: () => dispatch(openTryOutModal(false)),

    handleChangeTryOutText: text => dispatch(handleChangeInTryOutText(text)),
    fetchTryOutResponse: botId => dispatch(fetchTryOutResponse(botId)),
    handleSnackBarClose: () => dispatch(closeSnackbarInTryOut(true)),
    clearTryOutData: () => dispatch(clearTryOutData()),
  };
}

const withReducer = useInjectReducer({ key: 'tryOut', reducer });
const withSaga = useInjectSaga({ key: 'tryOut', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(TryOutScreen);

/**
 *
 * ImportedIntentList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectImportedIntentList, {
  makeSelectError,
  makeSelectImportList,
  makeSelectLoading,
  makeSelectOpenSnackbar,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ImportList from './Screen';
import { closeSnackbar, fetchImportedIntents } from './actions';
import { makeSelectReloadContainer } from '../../App/selectors';
import { reloadContainer } from '../../App/actions';

const mapStateToProps = createStructuredSelector({
  importedIntentList: makeSelectImportedIntentList(),

  snackbarMsg: makeSelectError(),
  loading: makeSelectLoading(),
  variant: makeSelectVariant(),
  openSnackBar: makeSelectOpenSnackbar(),
  importList: makeSelectImportList(),
  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),

    fetchImportList: (id, language) =>
      dispatch(fetchImportedIntents(id, language)),
    closeSnackbar: () => dispatch(closeSnackbar()),
  };
}

const withReducer = useInjectReducer({ key: 'importedIntentList', reducer });
const withSaga = useInjectSaga({ key: 'importedIntentList', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ImportList);

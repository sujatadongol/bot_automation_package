/**
 *
 * AutomatedReplies
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectAutomatedReplies, {
  makeSelectAutomatedRepliesList,
  makeSelectLoading,
  makeSelectMessage,
  makeSelectSnackbar,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import AutomatedReplies from './AutomatedReplies';
import { makeSelectReloadContainer } from '../../App/selectors';
import { reloadContainer, toggleEmptyServiceModal } from '../../App/actions';
import {
  closeSnackbarInAutomatedReplies,
  deleteAutomatedReply,
  fetchAutomatedReplies,
  updateAutomatedReplyStatus,
} from './actions';
import { botPermissionModel } from '../../Settings/selectors';

const mapStateToProps = createStructuredSelector({
  automatedReplies: makeSelectAutomatedReplies(),

  loading: makeSelectLoading(),
  variant: makeSelectVariant(),
  message: makeSelectMessage(),
  openSnackbar: makeSelectSnackbar(),

  automatedRepliesList: makeSelectAutomatedRepliesList(),

  reloadContainer: makeSelectReloadContainer(),
  botPermissionModel: botPermissionModel(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),
    fetchAutomatedReplies: () => dispatch(fetchAutomatedReplies()),
    deleteAutomatedReply: id => dispatch(deleteAutomatedReply(id)),
    updateAutomatedReplyStatus: (id, value) =>
      dispatch(updateAutomatedReplyStatus(id, value)),
    closeSnackbar: () => dispatch(closeSnackbarInAutomatedReplies()),
    toggleEmptyServiceModal: bool => dispatch(toggleEmptyServiceModal(bool)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'automatedReplies', reducer });
const withSaga = useInjectSaga({ key: 'automatedReplies', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(AutomatedReplies);

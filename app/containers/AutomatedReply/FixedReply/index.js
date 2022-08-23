/**
 *
 * FixedReply
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectCreateFixedReply, {
  makeSelectEnableExpiration,
  makeSelectExpiredTime,
  makeSelectLoading,
  makeSelectMatchingList,
  makeSelectMessage,
  makeSelectReplyText,
  makeSelectSnackbar,
  makeSelectTitle,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import FixedReply from './FixedReply';
import {
  addMatchingText,
  clearFixedReply,
  closeSnackbarInFixedReply,
  createFixedReply,
  fetchFixedReplyById,
  handleChangeInExpireDate,
  handleChangeInFixedReplyTitle,
  handleChangeInMatchingText,
  handleChangeInReplyText,
  removeMatchingText,
  updateFixedReply,
} from './actions';
import { makeSelectReloadContainer } from '../../App/selectors';
import { reloadContainer } from '../../App/actions';
import { clearAutomatedReplies } from '../AutomatedReplies/actions';

const mapStateToProps = createStructuredSelector({
  createFixedReply: makeSelectCreateFixedReply(),

  loading: makeSelectLoading(),
  variant: makeSelectVariant(),
  message: makeSelectMessage(),
  openSnackbar: makeSelectSnackbar(),

  title: makeSelectTitle(),
  matchingTextList: makeSelectMatchingList(),
  replyText: makeSelectReplyText(),
  expiredTime: makeSelectExpiredTime(),
  enableExpiration: makeSelectEnableExpiration(),

  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),
    clearAutomatedReplies: () => dispatch(clearAutomatedReplies()),

    handleChangeInFixedReplyTitle: value =>
      dispatch(handleChangeInFixedReplyTitle(value)),
    addMatchingText: value => dispatch(addMatchingText(value)),
    removeMatchingText: id => dispatch(removeMatchingText(id)),
    handleChangeInMatchingText: (id, value) =>
      dispatch(handleChangeInMatchingText(id, value)),
    handleChangeInReplyText: value => dispatch(handleChangeInReplyText(value)),
    handleChangeInExpireDate: (bool, value) =>
      dispatch(handleChangeInExpireDate(bool, value)),

    fetchFixedReplyById: id => dispatch(fetchFixedReplyById(id)),
    createFixedReply: () => dispatch(createFixedReply()),
    updateFixedReply: id => dispatch(updateFixedReply(id)),

    clearFixedReply: () => dispatch(clearFixedReply()),
    closeSnackbar: () => dispatch(closeSnackbarInFixedReply(true)),
  };
}

const withReducer = useInjectReducer({ key: 'createFixedReply', reducer });
const withSaga = useInjectSaga({ key: 'createFixedReply', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(FixedReply);

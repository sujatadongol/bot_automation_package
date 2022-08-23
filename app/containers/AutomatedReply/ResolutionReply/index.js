/**
 *
 * ResolutionReply
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectResolutionReply, {
  makeSelectLoading,
  makeSelectMessage,
  makeSelectProblemDefinition,
  makeSelectProblemSolution,
  makeSelectSimilarPossibleSolutions,
  makeSelectSnackbar,
  makeSelectTitle,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ResolutionReply from './ResolutionReply';
import {
  addProblemDefinition,
  addProblemSolution,
  addSteps,
  clearResolutionReply,
  clearSimilarPossibleSolutions,
  closeSnackbarInResolutionReply,
  createResolutionReply,
  expandProblemSolution,
  fetchResolutionReplyById,
  fetchSimilarPossibleSolutions,
  handleChangeInFeedbackText,
  handleChangeInProblemDefinition,
  handleChangeInProblemSolution,
  handleChangeInResolutionTitle,
  handleChangeInSteps,
  mapProblemSolution,
  openSnackbarInResolutionReply,
  removeProblemDefinition,
  removeProblemSolution,
  removeSteps,
  saveProblemSolution,
  updateResolutionReply,
} from './actions';
import { makeSelectReloadContainer } from '../../App/selectors';
import { reloadContainer } from '../../App/actions';
import { clearAutomatedReplies } from '../AutomatedReplies/actions';

const mapStateToProps = createStructuredSelector({
  resolutionReply: makeSelectResolutionReply(),

  loading: makeSelectLoading(),
  variant: makeSelectVariant(),
  message: makeSelectMessage(),
  openSnackbar: makeSelectSnackbar(),

  title: makeSelectTitle(),
  problemDefinitionList: makeSelectProblemDefinition(),
  problemSolution: makeSelectProblemSolution(),

  similarPossibleSolutions: makeSelectSimilarPossibleSolutions(),

  reloadContainer: makeSelectReloadContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),
    clearAutomatedReplies: () => dispatch(clearAutomatedReplies()),

    handleChangeInResolutionReplyTitle: value =>
      dispatch(handleChangeInResolutionTitle(value)),

    addProblemDefinition: () => dispatch(addProblemDefinition()),
    removeProblemDefinition: id => dispatch(removeProblemDefinition(id)),
    handleChangeInProblemDefinition: (id, value) =>
      dispatch(handleChangeInProblemDefinition(id, value)),

    expandProblemSolution: (problemSolutionId, bool) =>
      dispatch(expandProblemSolution(problemSolutionId, bool)),
    mapProblemSolution: problemSolution =>
      dispatch(mapProblemSolution(problemSolution)),
    saveProblemSolution: (problemDefinitionId, problemSolution) =>
      dispatch(saveProblemSolution(problemDefinitionId, problemSolution)),
    addProblemSolution: problemDefinitionId =>
      dispatch(addProblemSolution(problemDefinitionId)),
    removeProblemSolution: (problemDefinitionId, problemSolutionId) =>
      dispatch(removeProblemSolution(problemDefinitionId, problemSolutionId)),
    handleChangeInProblemSolution: (
      problemDefinitionId,
      problemSolutionId,
      value,
    ) =>
      dispatch(
        handleChangeInProblemSolution(
          problemDefinitionId,
          problemSolutionId,
          value,
        ),
      ),

    addStep: (problemDefinitionId, problemSolutionId) =>
      dispatch(addSteps(problemDefinitionId, problemSolutionId)),
    removeStep: (problemDefinitionId, problemSolutionId, stepId) =>
      dispatch(removeSteps(problemDefinitionId, problemSolutionId, stepId)),
    handleChangeInStep: (
      problemDefinitionId,
      problemSolutionId,
      stepId,
      value,
    ) =>
      dispatch(
        handleChangeInSteps(
          problemDefinitionId,
          problemSolutionId,
          stepId,
          value,
        ),
      ),

    handleChangeInFeedbackText: (
      problemDefinitionId,
      problemSolutionId,
      value,
    ) =>
      dispatch(
        handleChangeInFeedbackText(
          problemDefinitionId,
          problemSolutionId,
          value,
        ),
      ),

    createResolutionReply: () => dispatch(createResolutionReply()),
    fetchResolutionReplyById: id => dispatch(fetchResolutionReplyById(id)),
    fetchSimilarPossibleSolutions: query =>
      dispatch(fetchSimilarPossibleSolutions(query)),
    clearSimilarPossibleSolutions: () =>
      dispatch(clearSimilarPossibleSolutions()),
    updateResolutionReply: id => dispatch(updateResolutionReply(id)),

    openSnackbarInResolutionReply: (bool, msg, variant) =>
      dispatch(openSnackbarInResolutionReply(bool, msg, variant)),
    closeSnackbar: () => dispatch(closeSnackbarInResolutionReply(true)),
    clearResolutionReply: () => dispatch(clearResolutionReply()),
  };
}

const withReducer = useInjectReducer({ key: 'resolutionReply', reducer });
const withSaga = useInjectSaga({ key: 'resolutionReply', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ResolutionReply);

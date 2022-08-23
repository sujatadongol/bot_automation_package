import { ACTION_TYPE_RESOLUTION_REPLY, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const handleChangeInResolutionTitle = value => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_RESOLUTION_REPLY_TITLE,
  value,
});
export const addProblemDefinition = () => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.ADD_PROBLEM_DEFINITION,
});
export const removeProblemDefinition = id => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.REMOVE_PROBLEM_DEFINITION,
  id,
});
export const handleChangeInProblemDefinition = (id, value) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_PROBLEM_DEFINITION,
  id,
  value,
});

export const expandProblemSolution = (problemSolutionId, bool) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.EXPAND_PROBLEM_SOLUTION,
  problemSolutionId,
  bool,
});
export const mapProblemSolution = problemSolution => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.MAP_PROBLEM_SOLUTION,
  problemSolution,
});
export const addProblemSolution = problemDefinitionId => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.ADD_PROBLEM_SOLUTION,
  problemDefinitionId,
});
export const removeProblemSolution = problemSolutionId => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.REMOVE_PROBLEM_SOLUTION,
  problemSolutionId,
});
export const handleChangeInProblemSolution = (problemSolutionId, value) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_PROBLEM_SOLUTION,
  problemSolutionId,
  value,
});

export const addSteps = problemSolutionId => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.ADD_STEPS,
  problemSolutionId,
});
export const removeSteps = (problemSolutionId, stepId) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.REMOVE_STEPS,
  problemSolutionId,
  stepId,
});
export const handleChangeInSteps = (problemSolutionId, stepId, value) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_STEPS,
  problemSolutionId,
  stepId,
  value,
});

export const handleChangeInFeedbackText = (problemSolutionId, value) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_FEEDBACK_TEXT,
  problemSolutionId,
  value,
});

export const saveProblemSolution = (problemDefinitionId, problemSolution) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.SAVE_PROBLEM_SOLUTION,
  problemDefinitionId,
  problemSolution,
});

export const createResolutionReply = () => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY,
});
export const createResolutionReplySuccess = res => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY_SUCCESS,
  res,
});
export const createResolutionReplyFailure = error => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY_FAILURE,
  error,
});

export const fetchResolutionReplyById = id => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID,
  id,
});
export const fetchResolutionReplyByIdSuccess = res => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID_SUCCESS,
  res,
});
export const fetchResolutionReplyByIdFailure = error => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID_FAILURE,
  error,
});

export const fetchSimilarPossibleSolutions = query => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS,
  query,
});
export const fetchSimilarPossibleSolutionsSuccess = res => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS_SUCCESS,
  res,
});
export const fetchSimilarPossibleSolutionsFailure = error => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS_FAILURE,
  error,
});
export const clearSimilarPossibleSolutions = () => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CLEAR_SIMILAR_POSSIBLE_SOLUTIONS,
});

export const updateResolutionReply = id => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY,
  id,
});
export const updateResolutionReplySuccess = res => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY_SUCCESS,
  res,
});
export const updateResolutionReplyFailure = error => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY_FAILURE,
  error,
});

export const clearResolutionReply = () => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CLEAR_RESOLUTION_REPLY,
});

export const openSnackbarInResolutionReply = (bool, msg, variant) => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.OPEN_SNACKBAR_IN_RESOLUTION_REPLY,
  bool,
  msg,
  variant,
});
export const closeSnackbarInResolutionReply = bool => ({
  type: ACTION_TYPE_RESOLUTION_REPLY.CLOSE_SNACKBAR_IN_RESOLUTION_REPLY,
  bool,
});

import produce from 'immer';
import { ACTION_TYPE_RESOLUTION_REPLY } from './constants';
import { FuncToReturnUpdatedList } from '../../../utils/helper';
import {
  mapFetchedProblemDefinition,
  mapObjToCreateResolutionReply,
  mapObjToUpdateResolutionReply,
} from './helper';

export const initialState = {
  loading: false,
  message: '',
  openSnackBar: false,
  variant: '',

  title: '',
  problemDefinition: [],
  problemSolution: undefined,

  resolutionReplyObj: undefined,

  similarPossibleSolutions: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const resolutionReplyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_RESOLUTION_REPLY_TITLE:
        draft.loading = false;
        draft.title = action.value;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_PROBLEM_DEFINITION: {
        draft.loading = false;
        const arrayData = state.problemDefinition
          ? [...state.problemDefinition]
          : [];
        const newReplyAttribute = arrayData.filter(
          single => single.id === action.id,
        )[0];
        newReplyAttribute.value = action.value;
        draft.problemDefinition = FuncToReturnUpdatedList(
          arrayData,
          action.id,
          newReplyAttribute,
        );
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.ADD_PROBLEM_DEFINITION:
        draft.loading = false;
        const arrayData = state.problemDefinition
          ? [...state.problemDefinition]
          : [];
        const formData = {
          id: Math.random(),
          value: '',
        };
        arrayData.push(formData);
        draft.problemDefinition = arrayData;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.REMOVE_PROBLEM_DEFINITION: {
        draft.loading = false;
        const initialData = state.problemDefinition
          ? [...state.problemDefinition]
          : [];
        draft.problemDefinition = initialData.filter(x => x.id !== action.id);
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.SAVE_PROBLEM_SOLUTION: {
        draft.loading = false;
        const initialData = state.problemDefinition
          ? [...state.problemDefinition]
          : undefined;
        initialData &&
          initialData.map(singleObj => {
            if (singleObj.id === action.problemDefinitionId) {
              singleObj.problemSolutions = action.problemSolution;
            }
          });
        draft.problemDefinition = initialData;
        break;
      }

      case ACTION_TYPE_RESOLUTION_REPLY.MAP_PROBLEM_SOLUTION: {
        draft.loading = false;
        draft.problemSolution = action.problemSolution;
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.EXPAND_PROBLEM_SOLUTION: {
        draft.loading = false;
        const arrayData = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        const newProblemSolution =
          arrayData &&
          arrayData.filter(single => single.id === action.problemSolutionId)[0];
        newProblemSolution.expand = action.bool;
        draft.problemSolution = FuncToReturnUpdatedList(
          arrayData,
          action.problemSolutionId,
          newProblemSolution,
        );
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_PROBLEM_SOLUTION: {
        draft.loading = false;
        const arrayData = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        const newProblemSolution =
          arrayData &&
          arrayData.filter(single => single.id === action.problemSolutionId)[0];
        newProblemSolution.value = action.value;
        newProblemSolution.expand = true;
        draft.problemSolution = FuncToReturnUpdatedList(
          arrayData,
          action.problemSolutionId,
          newProblemSolution,
        );
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.ADD_PROBLEM_SOLUTION: {
        draft.loading = false;
        const arrayData = state.problemSolution
          ? [...state.problemSolution]
          : [];
        const formData = {
          id: Math.random(),
          expand: false,
          value: '',
          steps: [
            {
              id: Math.random(),
              value: '',
            },
          ],
          feedback: '',
        };
        arrayData.push(formData);
        draft.problemSolution = arrayData;
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.REMOVE_PROBLEM_SOLUTION: {
        draft.loading = false;
        const initialData = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        draft.problemSolution =
          initialData &&
          initialData.filter(x => x.id !== action.problemSolutionId);
        break;
      }

      case ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_FEEDBACK_TEXT: {
        draft.loading = false;
        const initialData = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        initialData &&
          initialData.map(singleData => {
            if (singleData.id === action.problemSolutionId) {
              singleData.feedback = action.value;
            }
          });
        draft.problemSolution = initialData;
        break;
      }

      case ACTION_TYPE_RESOLUTION_REPLY.HANDLE_CHANGE_IN_STEPS: {
        draft.loading = false;
        const problemSolution = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        const newProblemSolution =
          problemSolution &&
          problemSolution.filter(
            single => single.id === action.problemSolutionId,
          )[0];
        newProblemSolution.steps &&
          newProblemSolution.steps.map(singleStep => {
            if (singleStep.id === action.stepId) {
              singleStep.value = action.value;
            }
          });
        draft.problemSolution = FuncToReturnUpdatedList(
          problemSolution,
          action.problemSolutionId,
          newProblemSolution,
        );
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.ADD_STEPS: {
        draft.loading = false;
        const problemSolution = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        const newProblemSolution =
          problemSolution &&
          problemSolution.filter(
            single => single.id === action.problemSolutionId,
          )[0];
        newProblemSolution.steps.push({ id: Math.random(), value: '' });
        draft.problemSolution = FuncToReturnUpdatedList(
          problemSolution,
          action.problemSolutionId,
          newProblemSolution,
        );
        break;
      }
      case ACTION_TYPE_RESOLUTION_REPLY.REMOVE_STEPS: {
        draft.loading = false;
        const initialData = state.problemSolution
          ? [...state.problemSolution]
          : undefined;
        const newProblemSolution =
          initialData &&
          initialData.filter(
            single => single.id === action.problemSolutionId,
          )[0];
        newProblemSolution.steps = newProblemSolution.steps.filter(
          x => x.id !== action.stepId,
        );
        draft.problemSolution = FuncToReturnUpdatedList(
          initialData,
          action.problemSolutionId,
          newProblemSolution,
        );
        break;
      }

      case ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY:
        draft.loading = true;
        draft.resolutionReplyObj = mapObjToCreateResolutionReply(
          draft.title,
          'en',
          draft.problemDefinition,
        );
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.CREATE_RESOLUTION_REPLY_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.message = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID:
        draft.loading = true;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        if (action.res) {
          draft.resolutionReplyObj = action.res;
          draft.title = action.res.title;
          draft.problemDefinition =
            action.res.resolutionReply &&
            mapFetchedProblemDefinition(
              action.res.resolutionReply.problemDefinitions,
            );
        }
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.FETCH_RESOLUTION_REPLY_BY_ID_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_RESOLUTION_REPLY.CLEAR_SIMILAR_POSSIBLE_SOLUTIONS:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.similarPossibleSolutions = undefined;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.similarPossibleSolutions = action.res;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.FETCH_SIMILAR_POSSIBLE_SOLUTIONS_FAILURE:
        draft.loading = false;
        draft.message = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY:
        draft.loading = true;
        draft.resolutionReplyObj = mapObjToUpdateResolutionReply(
          draft.title,
          draft.problemDefinition,
          draft.resolutionReplyObj,
        );
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.UPDATE_RESOLUTION_REPLY_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.message = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_RESOLUTION_REPLY.CLEAR_RESOLUTION_REPLY:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.title = '';
        draft.problemDefinition = [];
        draft.problemSolution = undefined;
        draft.resolutionReplyObj = undefined;
        draft.similarPossibleSolutions = undefined;
        break;

      case ACTION_TYPE_RESOLUTION_REPLY.OPEN_SNACKBAR_IN_RESOLUTION_REPLY:
        draft.loading = false;
        draft.openSnackBar = action.bool;
        draft.message = action.msg;
        draft.variant = action.variant;
        break;
      case ACTION_TYPE_RESOLUTION_REPLY.CLOSE_SNACKBAR_IN_RESOLUTION_REPLY:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default resolutionReplyReducer;

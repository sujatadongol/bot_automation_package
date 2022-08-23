import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectCreateFixedReply from '../FixedReply/selectors';

/**
 * Direct selector to the resolutionReply state domain
 */

const selectResolutionReplyDomain = state =>
  state.resolutionReply || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResolutionReply
 */

const makeSelectResolutionReply = key => () =>
  createSelector(
    selectResolutionReplyDomain,
    substate => substate[key],
  );

export default makeSelectResolutionReply;
export { selectResolutionReplyDomain };

export const makeSelectLoading = makeSelectResolutionReply('loading');
export const makeSelectMessage = makeSelectResolutionReply('message');
export const makeSelectSnackbar = makeSelectResolutionReply('openSnackBar');
export const makeSelectVariant = makeSelectResolutionReply('variant');

export const makeSelectTitle = makeSelectResolutionReply('title');
export const makeSelectProblemDefinition = makeSelectResolutionReply(
  'problemDefinition',
);
export const makeSelectProblemSolution = makeSelectResolutionReply(
  'problemSolution',
);

export const makeSelectResolutionReplyObj = makeSelectResolutionReply(
  'resolutionReplyObj',
);

export const makeSelectSimilarPossibleSolutions = makeSelectResolutionReply(
  'similarPossibleSolutions',
);

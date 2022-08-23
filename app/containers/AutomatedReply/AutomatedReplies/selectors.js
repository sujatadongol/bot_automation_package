import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the automatedReplies state domain
 */

const selectAutomatedRepliesDomain = state =>
  state.automatedReplies || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AutomatedReplies
 */

const makeSelectAutomatedReplies = key => () =>
  createSelector(
    selectAutomatedRepliesDomain,
    substate => substate[key],
  );

export default makeSelectAutomatedReplies;
export {selectAutomatedRepliesDomain};

export const makeSelectLoading = makeSelectAutomatedReplies('loading');
export const makeSelectMessage = makeSelectAutomatedReplies('message');
export const makeSelectSnackbar = makeSelectAutomatedReplies('openSnackBar');
export const makeSelectVariant = makeSelectAutomatedReplies('variant');

export const makeSelectAutomatedRepliesList = makeSelectAutomatedReplies(
  'automatedReplies',
);

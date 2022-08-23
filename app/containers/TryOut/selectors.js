import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tryOut state domain
 */

const selectTryOutDomain = state => state.tryOut || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TryOut
 */

const makeSelectTryOut = key => () =>
  createSelector(
    selectTryOutDomain,
    substate => substate[key],
  );

export default makeSelectTryOut;
export { selectTryOutDomain };

export const makeSelectLoading = makeSelectTryOut('loading');
export const makeSelectError = makeSelectTryOut('error');
export const makeSelectSnackbar = makeSelectTryOut('openSnackBar');
export const makeSelectVariant = makeSelectTryOut('variant');

export const makeSelectTryOutText = makeSelectTryOut('tryOutText');
export const makeSelectTryOutResponse = makeSelectTryOut('tryOutResponse');

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { mapImportedIntents } from './helper';

/**
 * Direct selector to the intentImportPage state domain
 */

const selectIntentImportPageDomain = state =>
  state.intentImportPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IntentImportPage
 */

const makeSelectIntentImportPage = key => () =>
  createSelector(
    selectIntentImportPageDomain,
    substate => substate[key],
  );

export const makeSelectLoading = makeSelectIntentImportPage('loading');
export const makeSelectError = makeSelectIntentImportPage('error');
export const makeSelectOpenSnackbar = makeSelectIntentImportPage(
  'openSnackBar',
);
export const makeSelectVariant = makeSelectIntentImportPage('variant');
export const makeSelectIntentsList = makeSelectIntentImportPage('intentsList');
export const makeSelectIntentsName = makeSelectIntentImportPage('intentName');

export default makeSelectIntentImportPage;
export { selectIntentImportPageDomain };

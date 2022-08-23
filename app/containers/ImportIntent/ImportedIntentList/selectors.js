import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectIntentImportPage from '../IntentImportPage/selectors';

/**
 * Direct selector to the importedIntentList state domain
 */

const selectImportedIntentListDomain = state =>
  state.importedIntentList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImportedIntentList
 */

const makeSelectImportedIntentList = key => () =>
  createSelector(
    selectImportedIntentListDomain,
    substate => substate[key],
  );

export default makeSelectImportedIntentList;
export { selectImportedIntentListDomain };

export const makeSelectLoading = makeSelectImportedIntentList('loading');
export const makeSelectError = makeSelectImportedIntentList('error');
export const makeSelectOpenSnackbar = makeSelectImportedIntentList(
  'openSnackBar',
);
export const makeSelectVariant = makeSelectImportedIntentList('variant');
export const makeSelectImportList = makeSelectImportedIntentList('importList');

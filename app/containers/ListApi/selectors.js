import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listApi state domain
 */

const selectListApiDomain = state => state.listApi || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListApi
 */

const makeSelectListApi = key => () =>
  createSelector(
    selectListApiDomain,
    substate => substate[key],
  );

export default makeSelectListApi;
export { selectListApiDomain };

export const makeSelectApiList = makeSelectListApi('ListApi');
export const makeSelectLoading = makeSelectListApi('loading');
export const makeSelectOpenSnackBar = makeSelectListApi('openSnackBar');
export const makeSelectVariant = makeSelectListApi('variant');
export const makeSelectSnackBarMsg = makeSelectListApi('snackbarMsg');

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createApi state domain
 */

const selectCreateApiDomain = state => state.createApi || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateApi
 */

const makeSelectCreateApi = key => () =>
  createSelector(
    selectCreateApiDomain,
    substate => substate[key],
  );

export default makeSelectCreateApi;
export { selectCreateApiDomain };

export const makeSelectLoading = makeSelectCreateApi('loading');
export const makeSelectError = makeSelectCreateApi('error');
export const makeSelectSnackbar = makeSelectCreateApi('openSnackBar');
export const makeSelectVariant = makeSelectCreateApi('variant');

export const makeSelectApiData = makeSelectCreateApi('apiData');
export const makeSelectApiHeader = makeSelectCreateApi('apiHeaders');
export const makeSelectApiParameter = makeSelectCreateApi('apiParameters');
export const makeSelectHeaderData = makeSelectCreateApi('headerData');
export const makeSelectParameterData = makeSelectCreateApi('parameterData');

import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the updateApi state domain
 */

const selectUpdateApiDomain = state => state.updateApi || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UpdateApi
 */

const makeSelectUpdateApi = key => () =>
  createSelector(
    selectUpdateApiDomain,
    substate => substate[key],
  );

export default makeSelectUpdateApi;
export {selectUpdateApiDomain};

export const makeSelectLoading = makeSelectUpdateApi('loading');
export const makeSelectError = makeSelectUpdateApi('error');
export const makeSelectSnackbar = makeSelectUpdateApi('openSnackBar');
export const makeSelectVariant = makeSelectUpdateApi('variant');

export const makeSelectApiId = makeSelectUpdateApi('apiId');
export const makeSelectApiData = makeSelectUpdateApi('apiData');
export const makeSelectApiHeader = makeSelectUpdateApi('apiHeaders');
export const makeSelectApiParameter = makeSelectUpdateApi('apiParameters');
export const makeSelectHeaderData = makeSelectUpdateApi('headerData');
export const makeSelectParameterData = makeSelectUpdateApi('parameterData');

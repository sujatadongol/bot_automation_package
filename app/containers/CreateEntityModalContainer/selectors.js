import {createSelector} from 'reselect';
import {initialState} from './reducer';
import makeSelectBotConfigurationTab from "../Bot/BotConfigurationTab/selectors";

/**
 * Direct selector to the createEntityModalContainer state domain
 */

const selectCreateEntityModalContainerDomain = state =>
  state.createEntityModalContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateEntityModalContainer
 */

const makeSelectCreateEntityModalContainer = key => () =>
  createSelector(
    selectCreateEntityModalContainerDomain,
    substate => substate[key],
  );

export default makeSelectCreateEntityModalContainer;
export {selectCreateEntityModalContainerDomain};

export const makeSelectLoading = makeSelectCreateEntityModalContainer('loading');
export const makeSelectError = makeSelectCreateEntityModalContainer('error');
export const makeSelectSnackbar = makeSelectCreateEntityModalContainer('openSnackBar');
export const makeSelectVariant = makeSelectCreateEntityModalContainer('variant');

export const makeSelectEntityData = makeSelectCreateEntityModalContainer('entityData');
export const makeSelectSynonym = makeSelectCreateEntityModalContainer('synonymData');
export const makeSelectRegex = makeSelectCreateEntityModalContainer('regex');

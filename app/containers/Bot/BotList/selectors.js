import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the botList state domain
 */

const selectBotListDomain = state => state.botList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BotList
 */

const makeSelectBotList = key => () =>
  createSelector(
    selectBotListDomain,
    substate => substate[key],
  );

export default makeSelectBotList;
export { selectBotListDomain };

export const makeSelectLoading = makeSelectBotList('loading');
export const makeSelectModalLoader = makeSelectBotList('modalLoader');
export const makeSelectRetrainingBotId = makeSelectBotList('retrainingBotId');
export const makeSelectError = makeSelectBotList('error');
export const makeSelectSnackbar = makeSelectBotList('openSnackBar');
export const makeSelectVariant = makeSelectBotList('variant');

export const makeSelectBotImageUrl = makeSelectBotList('botImageUrl');
export const makeSelectBotImageLoader = makeSelectBotList('botImageLoader');

export const makeSelectCount = makeSelectBotList('count');
export const makeSelectBots = makeSelectBotList('botList');
// export const makeSelectAllBots = makeSelectBotList('BotList');
export const makeSelectCursor = makeSelectBotList('cursor');
export const makeSelectCreateBotModalVisibility = makeSelectBotList(
  'createBotModalVisibility',
);
export const makeSelectProjectDetails = makeSelectBotList('projectDetails');
export const makeSelectTeams = makeSelectBotList('teams');
export const makeSelectTicketModal = makeSelectBotList('ticketModal');

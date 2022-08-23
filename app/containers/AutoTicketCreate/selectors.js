import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import makeSelectLabel from '../Label/selectors';

/**
 * Direct selector to the ticketSetting state domain
 */

const selectTicketSettingDomain = state => state.ticketSetting || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AutoTicketCreate
 */

const makeSelectTicketSetting = key => () =>
  createSelector(
    selectTicketSettingDomain,
    substate => substate[key],
  );

export default makeSelectTicketSetting;
export { selectTicketSettingDomain };

export const makeSelectLoading = makeSelectTicketSetting('loading');
export const makeSelectError = makeSelectTicketSetting('error');
export const makeSelectSnackbar = makeSelectTicketSetting('openSnackBar');
export const makeSelectVariant = makeSelectTicketSetting('variant');

export const makeSelectTicketSettingDetail = makeSelectTicketSetting(
  'ticketSetting',
);
export const makeSelectCustomRules = makeSelectTicketSetting('customRules');
export const makeSelectCustomRuleArray = makeSelectTicketSetting(
  'customRuleArray',
);
export const makeSelectCustomRuleArrayLength = makeSelectTicketSetting(
  'customRuleArrayLength',
);

export const makeSelectAutoTicketCreate = makeSelectTicketSetting(
  'autoTicketCreate',
);
export const makeSelectAutoTicketList = makeSelectTicketSetting(
  'autoTicketList',
);
export const makeSelectTicketDetail = makeSelectTicketSetting('ticketDetail');
export const makeSelectNextCursor = makeSelectTicketSetting('nextCursor');

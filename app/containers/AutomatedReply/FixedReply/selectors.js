import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import makeSelectKgraph from '../../Kgraph/selectors';

/**
 * Direct selector to the createFixedReply state domain
 */

const selectCreateFixedReplyDomain = state =>
  state.createFixedReply || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FixedReply
 */

const makeSelectCreateFixedReply = key => () =>
  createSelector(
    selectCreateFixedReplyDomain,
    substate => substate[key],
  );

export default makeSelectCreateFixedReply;
export { selectCreateFixedReplyDomain };

export const makeSelectLoading = makeSelectCreateFixedReply('loading');
export const makeSelectMessage = makeSelectCreateFixedReply('message');
export const makeSelectSnackbar = makeSelectCreateFixedReply('openSnackBar');
export const makeSelectVariant = makeSelectCreateFixedReply('variant');

export const makeSelectTitle = makeSelectCreateFixedReply('title');
export const makeSelectMatchingList = makeSelectCreateFixedReply(
  'matchingList',
);
export const makeSelectReplyText = makeSelectCreateFixedReply('replyText');
export const makeSelectEnableExpiration = makeSelectCreateFixedReply(
  'enableExpiration',
);
export const makeSelectExpiredTime = makeSelectCreateFixedReply('expiredTime');
export const makeSelectFixedReplyObj = makeSelectCreateFixedReply(
  'fixedReplyObj',
);

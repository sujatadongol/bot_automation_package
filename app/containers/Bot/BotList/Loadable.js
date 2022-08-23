/**
 *
 * Asynchronously loads the component for BotList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

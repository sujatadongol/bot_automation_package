import { createSelector } from 'reselect';
import LocalDb from '../../localStorage';
import { initialState } from './reducer';
// import NotificationProto from '../../protos/notification_pb';

/**
 * Direct selector to the navbar state domain
 */

const selectNavbarDomain = state => state.navbar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Navbar
 */

const makeSelectNavbar = () =>
  createSelector(
    selectNavbarDomain,
    substate => substate,
  );

export default makeSelectNavbar;
export { selectNavbarDomain };

const createMakeSelector = key => () =>
  createSelector(
    selectNavbarDomain,
    state => state[key],
  );

export const makeSelectMqttEvent = createMakeSelector('mqttEvent');

// export const makeSelectNotificationObj = () =>
//   createSelector(
//     makeSelectMqttEvent(),
//     mqttEvent => {
//       console.log({ mqttEvent });
//       if (mqttEvent) {
//         if (
//           mqttEvent.topic ===
//           'anydone/notification/' + LocalDb.getUserAccountId()
//         ) {
//           console.log('eeeeeeeeeee');
//           const baseResponse =
//             mqttEvent &&
//             NotificationProto.Notification.deserializeBinary(
//               mqttEvent.payloadBytes,
//             );
//           console.log(mqttEvent.topic, baseResponse && baseResponse.toObject());
//           return baseResponse && baseResponse.toObject();
//         }
//       }
//     },
//   );

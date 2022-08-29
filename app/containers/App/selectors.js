/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import LocalDb from '../../localStorage';
import { makeSelectMqttEvent } from '../Navbar/selectors';
import { initialState } from './reducer';
// import NotificationProto from '../../protos/notification_pb';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const createMakeSelector = key => () =>
  createSelector(
    selectGlobal,
    state => state[key],
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export const makeSelectReloadContainer = createMakeSelector('reloadContainer');
export const makeSelectServiceAdminPermission = createMakeSelector(
  'serviceAdmin',
);
export const makeSelectServiceWritePermission = createMakeSelector(
  'serviceWrite',
);
export const makeSelectServiceReadPermission = createMakeSelector(
  'serviceRead',
);
export const makeSelectGlobalEmployeeList = createMakeSelector('employeeList');

export const makeSelectTicketAdminPermission = createMakeSelector(
  'ticketAdmin',
);
export const makeSelectTicketWritePermission = createMakeSelector(
  'ticketWrite',
);
export const makeSelectTicketReadPermission = createMakeSelector('ticketRead');

export const makeSelectTeamAdminPermission = createMakeSelector('teamAdmin');
export const makeSelectTeamWritePermission = createMakeSelector('teamWrite');
export const makeSelectTeamReadPermission = createMakeSelector('teamRead');

export const makeSelectIntegrationAdminPermission = createMakeSelector(
  'integrationAdmin',
);

export const makeSelectOpenEmptyServiceModal = createMakeSelector(
  'openEmptyServiceModal',
);
export const makeSelectBreadcrumbValue = createMakeSelector('breadcrumbValue');
export const makeSelectBreadcrumbPath = createMakeSelector('breadcrumbPath');

export const makeSelectArrivedMessage = createMakeSelector('arrivedMessage');
export const makeSelectBotImportNotification = createMakeSelector(
  'botImportNotification',
);

export const makeSelectGlobalNotificationObj = createMakeSelector(
  'notificationObj',
);

// export const makeSelectGlobalNotificationObj = () =>
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

export const makeSelectIsCustomRuleTraining = createMakeSelector(
  'isCustomRuleTraining',
);
export const makeSelectGlobalServiceDetailTab = createMakeSelector(
  'serviceDetailTab',
);
export const makeSelectOpenTryOutModal = createMakeSelector('openTryOutModal');
export const makeSelectGlobalServiceIdForBotConfiguration = createMakeSelector(
  'serviceIdForBotConfiguration',
);
export const makeSelectIsBotTraining = createMakeSelector('isBotTraining');
export const makeSelectOpenBotTab = createMakeSelector('openBotTab');
export const makeSelectOpenCreateEntityModal = createMakeSelector(
  'openCreateEntityModal',
);
export const makeSelectGlobalEntityList = createMakeSelector(
  'globalEntityList',
);
export const makeSelectGlobalAssignedTicketEmployees = createMakeSelector(
  'employeesAssigned',
);
export const makeSelectSPAccounts = createMakeSelector('accounts');
export const makeSelectUserInformation = createMakeSelector('userInformation');
export const makeSelectUserServiceId = createMakeSelector('userServiceId');
export const makeSelectGlobalServiceListInNavbar = createMakeSelector(
  'serviceListInNavbar',
);
export const makeSelectGlobalProjectListInNavbar = createMakeSelector(
  'projectListInNavbar',
);
export const makeSelectGroupList = createMakeSelector('groupList');
// export const makeSelectBotList = createMakeSelector('BotList');
export const makeSelectPublicGroup = createMakeSelector('publicGroup');
export const makeSelectNext = createMakeSelector('next');
export const makeSelectLanguages = createMakeSelector('languages');

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};

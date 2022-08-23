import LocalDb from '../localStorage';
import {
  isVideoCallEvent,
  mapInboxNotificationObj,
  openNewMsgArrivedNotification,
} from '../containers/App/helper';
import history from '../utils/history';
import { CheckIfSpIsLoggedIn } from '../containers/Layout/helper';

import { TicketNotificationToTicketTypeConversion } from '../model/ticketModel';

export const NotificationEventParser = (
  notificationObj,
  a,
  setA,
  updateLastMessage,
  onInboxCallEventArrived,
  incomingCall,
  closeJoinCallModal,
  closeInviteUserModal,
  setInviteParticipant,
  appendNewGroup,
  selectedSuperAdmin,
  videoCallEvent,
  updateCount,
  superAdminList,
  updateInbox,
  createTicketSuccess,
  updateTicketForNotificationEvent,
  inboxList,
) => {
  console.log({ notificationObj });
  const path = history.location.pathname;
  switch (notificationObj.type) {
    case 9:
      const parsedResponse =
        notificationObj.payload && JSON.parse(notificationObj.payload);
      if (parsedResponse && parsedResponse.notificationType === 'UPDATED') {
        updateInbox(parsedResponse.inbox);
      }
      if (
        parsedResponse &&
        parsedResponse.notificationType !== 'UPDATED' &&
        !isVideoCallEvent(parsedResponse.notificationType) &&
        parsedResponse.inbox
      ) {
        if (
          selectedSuperAdmin &&
          selectedSuperAdmin.serviceprovider &&
          notificationObj.spaccountid ===
            selectedSuperAdmin.serviceprovider.accountid
        ) {
          if (parsedResponse.inbox.message) {
            updateLastMessage(
              mapInboxNotificationObj(parsedResponse && parsedResponse.inbox),
              parsedResponse && parsedResponse.id,
              parsedResponse &&
                parsedResponse.notificationType === 'MESSAGE_DELETED',
              selectedSuperAdmin.serviceprovider.accountid,
              notificationObj.notificationcount,
            );
          } else {
            appendNewGroup(
              mapInboxNotificationObj(parsedResponse && parsedResponse.inbox),
            );
          }
        } else {
          updateCount('INC', notificationObj.spaccountid, 'INBOX');
        }
      }

      console.log(
        '%cOTHERSSS',
        'font-size:40px,color:orange',
        {
          notificationObj,
        },
        '/////',
        CheckIfSpIsLoggedIn(superAdminList, notificationObj.spaccountid),
      );
      if (parsedResponse && isVideoCallEvent(parsedResponse.notificationType)) {
        if (
          !videoCallEvent &&
          parsedResponse.notificationType === 'VIDEO_CALL'
        ) {
          updateLastMessage(
            mapInboxNotificationObj(
              parsedResponse && parsedResponse.inbox,
              true,
            ),
            parsedResponse && parsedResponse.id,
            false,
            selectedSuperAdmin.serviceprovider.accountid,
            notificationObj.notificationcount,
          );
          if (notificationObj.senderid !== LocalDb.getUserAccountId()) {
            incomingCall.loop = true;
            incomingCall.play();
          }
        }
        onInboxCallEventArrived(parsedResponse, notificationObj.silent);
      } else if (
        !notificationObj.silent &&
        notificationObj.senderid !== LocalDb.getUserAccountId() &&
        CheckIfSpIsLoggedIn(superAdminList, notificationObj.spaccountid)
      ) {
        if (!path.includes('/messages/')) {
          openNewMsgArrivedNotification(
            a,
            setA,
            notificationObj,
            parsedResponse,
            inboxList,
          );
        } else if (document.visibilityState === 'hidden') {
          openNewMsgArrivedNotification(
            a,
            setA,
            notificationObj,
            parsedResponse,
            inboxList,
          );
        }
      }
      if (
        parsedResponse &&
        parsedResponse.notificationType === 'RECEIVER_CALL_DECLINED' &&
        parsedResponse.receiverCallDeclined
      ) {
        if (
          notificationObj &&
          notificationObj.senderid === LocalDb.getUserAccountId()
        ) {
          closeJoinCallModal();
        }
      }
      break;
    case 14: {
      const parsedResponse =
        notificationObj.payload && JSON.parse(notificationObj.payload);
      if (
        parsedResponse &&
        parsedResponse.notificationType === 'CALL_ACCEPTED' &&
        parsedResponse.callAccepted
      ) {
        if (
          parsedResponse.callAccepted &&
          parsedResponse.callAccepted.senderAccountId ===
            LocalDb.getUserAccountId()
        ) {
          closeJoinCallModal();
        }
      }
      if (
        parsedResponse &&
        parsedResponse.notificationType === 'ADD_CALL_PARTICIPANT' &&
        parsedResponse.addCallParticipant
      ) {
        setInviteParticipant(parsedResponse);
        if (notificationObj.senderid !== LocalDb.getUserAccountId()) {
          incomingCall.loop = true;
          incomingCall.play();
          setTimeout(() => {
            console.log('timeout for call ended');
            incomingCall.pause();
            closeInviteUserModal();
          }, 60 * 1000);
        }
      }
      break;
    }
    // case 2: {
    //   console.log('what is notificationObj', notificationObj);
    //   const parsedResponse =
    //     notificationObj.payload && JSON.parse(notificationObj.payload);

    //   // change it into small cases
    //   const newObj = Object.fromEntries(
    //     Object.entries(parsedResponse).map(([k, v]) => [k.toLowerCase(), v]),
    //   );
    //   const convertedObj = new TicketNotificationToTicketTypeConversion(newObj);
    //   console.log({ newObj }, { convertedObj });
    //   // createTicketSuccess && createTicketSuccess(convertedObj);
    //   // console.log(
    //   //   'createTicketSuccess',
    //   //   createTicketSuccess,
    //   //   {
    //   //     parsedResponse,
    //   //   },
    //   //   { newObj },
    //   //   { convertedObj },
    //   // );
    // }

    // case 3: {
    //   const parsedResponse =
    //     notificationObj.payload && JSON.parse(notificationObj.payload);

    //   // change it into small cases
    //   const newObj = Object.fromEntries(
    //     Object.entries(parsedResponse).map(([k, v]) => [k.toLowerCase(), v]),
    //   );

    //   const convertedObj = new TicketNotificationToTicketTypeConversion(newObj);

    //   console.log(
    //     'what is notificationObj case 3',
    //     notificationObj,
    //     parsedResponse,
    //   );
    //   // updateTicketForNotificationEvent(convertedObj);
    // }
    default:
      break;
  }
};

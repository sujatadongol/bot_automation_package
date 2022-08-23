import LocalDb from '../localStorage';
import { CheckIfRtcMsgExists } from '../containers/Messages/Details/helper';

export const MessageEventParser = (
  newArrivedMsg,
  appendNewMessage,
  changeMessageStatus,
  refId,
  deleteMessageSuccess,
  updateLastMessage,
  inboxList,
  repliesList,
  appendScheduledMessage,
  setReactionInMsgSuccess,
  handlePinEvent,
  updateRtcMessageSuccess,
  setReactionInMsgFailure,
  setTypingParticipants,
  publishSeenRequest,
  empList,
  handleSeenEvent,
  toggleNotifyAnyway,
  allLeaves,
  holidayList,
) => {
  console.log('new arrived message', { newArrivedMsg });
  switch (newArrivedMsg.responsetype) {
    case 1:
      if (
        CheckIfRtcMsgExists(
          GetSpecificInboxMessageList(inboxList, refId),
          newArrivedMsg.rtcmessage.clientid,
        ) ||
        CheckIfRtcMsgExists(repliesList, newArrivedMsg.rtcmessage.clientid)
      ) {
        if (newArrivedMsg.rtcmessage.rtcmessagetype === 18) {
          toggleNotifyAnyway(
            false,
            newArrivedMsg.rtcmessage.refid,
            empList,
            allLeaves,
            holidayList,
          );

          appendNewMessage(
            newArrivedMsg.rtcmessage,
            newArrivedMsg.rtcmessage.refid,
          );
        } else {
          toggleNotifyAnyway(
            true,
            newArrivedMsg.rtcmessage.refid,
            empList,
            allLeaves,
            holidayList,
          );

          changeMessageStatus(newArrivedMsg.rtcmessage, 'SUCCESS', refId);
        }
      } else {
        console.log('scheduled............');
        if (newArrivedMsg.rtcmessage.scheduledat) {
          appendScheduledMessage(
            newArrivedMsg.rtcmessage,
            newArrivedMsg.rtcmessage.refid,
            newArrivedMsg.rtcmessage.serviceprovideraccountid,
            // newArrivedMsg.rtcmessage.refid,
          );
        } else {
          toggleNotifyAnyway(
            false,
            newArrivedMsg.rtcmessage.refid,
            empList,
            allLeaves,
            holidayList,
          );

          appendNewMessage(
            newArrivedMsg.rtcmessage,
            newArrivedMsg.rtcmessage.refid,
          );
          if (refId === newArrivedMsg.rtcmessage.refid) {
            publishSeenRequest(
              newArrivedMsg.rtcmessage.clientid,
              newArrivedMsg.rtcmessage.rtcmessageid,
              newArrivedMsg.rtcmessage.refid,
            );
          }
        }
      }
      break;
    case 2:
      if (
        newArrivedMsg.messagedeliveredresponse &&
        newArrivedMsg.messagedeliveredresponse.senderaccountid
      ) {
        handleSeenEvent(
          newArrivedMsg.refid,
          newArrivedMsg.messagedeliveredresponse.seenmsgcount,
          newArrivedMsg.messagedeliveredresponse.workspaceid,
        );
      }
      break;
    case 3:
      changeMessageStatus(newArrivedMsg.relayerror, 'FAILURE', refId);
      break;
    case 4:
      deleteMessageSuccess(
        newArrivedMsg.rtcmessage.clientid,
        newArrivedMsg.rtcmessage.refid,
        newArrivedMsg.rtcmessage.scheduledat ? 'SCHEDULED' : '',
        newArrivedMsg.rtcmessage.parentmessageid,
      );
      break;
    case 37: {
      setReactionInMsgSuccess(
        newArrivedMsg.reaction,
        newArrivedMsg.rtcmessage.refid,
        'SET_REACTION_MESSAGE',
        newArrivedMsg.rtcmessage,
      );
      break;
    }
    case 39: {
      updateRtcMessageSuccess(
        newArrivedMsg.rtcmessage,
        newArrivedMsg.rtcmessage.refid,
      );
      break;
    }
    case 40: {
      if (newArrivedMsg.pinnedmessageresponse) {
        handlePinEvent(
          newArrivedMsg.pinnedmessageresponse.rtcmessage,
          newArrivedMsg.pinnedmessageresponse.rtcmessage &&
            newArrivedMsg.pinnedmessageresponse.rtcmessage.refid,
          newArrivedMsg.pinnedmessageresponse.pinnedmessagecount,
        );
      }
      break;
    }
    case 42: {
      setReactionInMsgSuccess(
        newArrivedMsg.reaction,
        newArrivedMsg.rtcmessage.refid,
        'REMOVE_REACTION_MESSAGE',
        newArrivedMsg.rtcmessage,
      );
      break;
    }
    case 45: {
      setReactionInMsgFailure(newArrivedMsg.relayerror, 'SET_REACTION_MESSAGE');
      break;
    }
    case 43: {
      newArrivedMsg &&
        newArrivedMsg.typingevent &&
        newArrivedMsg.typingevent.senderaccountid !==
          LocalDb.getUserAccountId() &&
        setTypingParticipants(
          newArrivedMsg.typingevent.refid,
          newArrivedMsg.typingevent.senderaccount,
          newArrivedMsg.typingevent.type === 1 ? 'IS_TYPING' : 'IS_NOT_TYPING',
          empList,
        );
      break;
    }
    default:
      break;
  }
};

export const isOwnMsg = newArrivedMsg => {
  if (newArrivedMsg.rtcmessage.senderaccountid === LocalDb.getUserAccountId()) {
    return true;
  }
};

export const GetSpecificInboxMessageList = (inboxList, refId) => {
  if (
    inboxList &&
    inboxList.filter(singleInbox => singleInbox.inboxId === refId) &&
    inboxList.filter(singleInbox => singleInbox.inboxId === refId)[0]
  )
    return (
      inboxList &&
      inboxList.filter(singleInbox => singleInbox.inboxId === refId)[0]
        .messageList
    );
};

export const MessageEventParserInActivityList = (
  newArrivedMsg,
  appendNewMessage,
  changeMessageStatus,
  refId,
  deleteMessageSuccess,
  updateLastMessage,
  inboxList,
  repliesList,
  appendScheduledMessage,
) => {
  console.log({ newArrivedMsg });
  switch (newArrivedMsg.responsetype) {
    case 1:
      if (
        CheckIfRtcMsgExists(
          GetSpecificInboxMessageListInActivity(inboxList, refId),
          newArrivedMsg.rtcmessage.clientid,
        ) ||
        CheckIfRtcMsgExists(repliesList, newArrivedMsg.rtcmessage.clientid)
      ) {
        changeMessageStatus(newArrivedMsg.rtcmessage, 'SUCCESS', refId);
      } else if (newArrivedMsg.rtcmessage.scheduledat) {
        appendScheduledMessage(
          newArrivedMsg.rtcmessage,
          newArrivedMsg.rtcmessage.serviceprovideraccountid,
        );
      } else {
        appendNewMessage(newArrivedMsg.rtcmessage, refId);
      }
      break;
    case 3:
      changeMessageStatus(newArrivedMsg.relayerror, 'FAILURE', refId);
      break;
    case 4:
      deleteMessageSuccess(
        newArrivedMsg.rtcmessage.clientid,
        refId,
        newArrivedMsg.rtcmessage.scheduledat ? 'SCHEDULED' : '',
      );
      break;
    default:
      break;
  }
};

export const GetSpecificInboxMessageListInActivity = (inboxList, refId) => {
  // if (
  //   inboxList &&
  //   inboxList.filter(
  //     singleInbox => singleInbox.inbox && singleInbox.inbox.inboxId === refId,
  //   ) &&
  //   inboxList.filter(
  //     singleInbox => singleInbox.inbox && singleInbox.inbox.inboxId === refId,
  //   )[0].inbox
  // )
  //   return (
  //     inboxList &&
  //     inboxList.filter(
  //       singleInbox => singleInbox.inbox && singleInbox.inbox.inboxId === refId,
  //     )[0].inbox.messageList
  //   );
};

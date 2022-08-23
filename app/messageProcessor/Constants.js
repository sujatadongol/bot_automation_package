import LocalDb from '../localStorage';

const MqttConstants = {
  RTC_MESSAGE_REQUEST: `anydone/rtc/relay`,
  RTC_MESSAGE_RESPONSE: `anydone/rtc/relay/response/`,
  TYPING_EVENT_RESPONSE: `anydone/relay/response/`,
  RTC_MESSAGE_RESPONSE_ERROR: `anydone/rtc/relay/response/error/`,

  SUBSCRIBE_NOTIFICATION: `anydone/notification/`,
  SUBSCRIBE_ERROR_NOTIFICATION: `anydone/notification/error/`,

  SUBSCRIBE_MEET_EVENT: `anydone/calendar/`,

  SUBSCRIBE_VIDEO_NOTIFICATION: `anydone/notification/video/call/`,

  SYNC_CALENDAR: `anydone/calendar/sync/`,

  AUTH_CONNECT: `anydone/mqtt/connect`,
  AUTH_DISCONNECT: `anydone/mqtt/disconnect`,
  SUBSCRIBE_ONLINE_STATUS: `anydone/inbox/user/online-status/`,
  // Quick Cal
  QC_RTC_MESSAGE_REQUEST: 'anydone/rtc/relay/quickcall',
  QC_RTC_MESSAGE_RESPONSE: 'anydone/rtc/relay/response/quickcall/',

  // update user status
  UPDATED_USER_STATUS: 'anydone/account/',

  CONNECT_SERVER: 'anydone/rtc/server/connect',

  // personal assistant && same for remind to reply also
  PERSONAL_ASSISTANT_MESSAGE_REQUEST: 'anydone/pa/bot/request/',
  PERSONAL_ASSISTANT_MESSAGE_ACK: 'anydone/pa/bot/ack/',
  PERSONAL_ASSISTANT_MESSAGE_RESPONSE_DUPLICATE: 'anydone/pa/bot/response/1',
  PERSONAL_ASSISTANT_MESSAGE_RESPONSE: 'anydone/pa/bot/response/',

  WORKSPACE_RESPONSE: 'anydone/workspace/',
};
export default MqttConstants;

export const initialTopicsList = [
  // MqttConstants.SUBSCRIBE_ONLINE_STATUS,
  // MqttConstants.RTC_MESSAGE_RESPONSE,
  // MqttConstants.RTC_MESSAGE_RESPONSE_ERROR,
  MqttConstants.SUBSCRIBE_NOTIFICATION,
  MqttConstants.SUBSCRIBE_ERROR_NOTIFICATION,
  // MqttConstants.SUBSCRIBE_VIDEO_NOTIFICATION,
  // MqttConstants.TYPING_EVENT_RESPONSE,
  // MqttConstants.SYNC_CALENDAR,
  // MqttConstants.QC_RTC_MESSAGE_RESPONSE,
  // MqttConstants.UPDATED_USER_STATUS,
  // MqttConstants.SUBSCRIBE_MEET_EVENT,
  // MqttConstants.CONNECT_SERVER,
  // MqttConstants.REMIND_TO_REPLY,
  // MqttConstants.PERSONAL_ASSISTANT_MESSAGE_ACK,
  // MqttConstants.PERSONAL_ASSISTANT_MESSAGE_RESPONSE_DUPLICATE,
  // MqttConstants.WORKSPACE_RESPONSE,
  // MqttConstants.REMIND_TO_REPLY + LocalDb.getUserAccountId(),
  // `${MqttConstants.PERSONAL_ASSISTANT_MESSAGE_ACK +
  //   LocalDb.getUserAccountId()}`,
  // `${MqttConstants.PERSONAL_ASSISTANT_MESSAGE_RESPONSE +
  //   LocalDb.getUserAccountId()}`,
];

export const getInitialTopics = accountId => {
  return (
    initialTopicsList &&
    initialTopicsList.map(singleTopic => {
      // if (singleTopic === 'anydone/rtc/server/connect') {
      //   return singleTopic;
      // }
      // if (singleTopic === MqttConstants.REMIND_TO_REPLY) {
      //   return singleTopic + accountId;
      // }
      // if (
      //   singleTopic === MqttConstants.PERSONAL_ASSISTANT_MESSAGE_ACK ||
      //   singleTopic ===
      //     MqttConstants.PERSONAL_ASSISTANT_MESSAGE_RESPONSE_DUPLICATE
      // ) {
      //   if (
      //     singleTopic ===
      //     MqttConstants.PERSONAL_ASSISTANT_MESSAGE_RESPONSE_DUPLICATE
      //   ) {
      //     return `${
      //       MqttConstants.PERSONAL_ASSISTANT_MESSAGE_RESPONSE
      //     }${accountId}`;
      //   }
      //   return `${singleTopic + accountId}`;
      // }
      return singleTopic + accountId;
    })
  );
};

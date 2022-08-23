/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  ACTION_TYPE_NAVBAR,
  ACTION_TYPE_GLOBAL_INTENT,
  ACTION_TYPE_EMPLOYEE,
  ACTION_TYPE_USER,
  ACTION_TYPE_BOT,
  ACTION_TYPE_SERVICE,
  SETTINGS_ACTION,
} from './constants';
import LocalDb from '../../localStorage';
// import SessionDb from '../../sessionStorage';
import tokenHandler from '../../token';
import { ACTION_TYPE_MQTT } from '../Navbar/constants';
import RelayProto from '../../protos/rtc_pb';
import NotificationProto from '../../protos/notification_pb';
import BotImportProto from '../../protos/bot_housekeeping_pb';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  isLoggedIn: false,
  serviceAdmin: LocalDb.getPermissionForDeleteService() === true,
  serviceWrite: LocalDb.getPermissionForCreateService() === true,
  serviceRead: LocalDb.getPermissionForViewService() === true,

  ticketAdmin: LocalDb.getPermissionForTicketAdmin() === true,
  ticketWrite: LocalDb.getPermissionForCreateTicket() === true,
  ticketRead: LocalDb.getPermissionForViewTicket() === true,

  conversationAdmin: LocalDb.getPermissionForConversationAdmin() === true,
  conversationWrite: LocalDb.getPermissionForConversationWrite() === true,
  conversationRead: LocalDb.getPermissionForViewConversation() === true,

  teamAdmin: LocalDb.getPermissionForDeleteTeam() === true,
  teamWrite: LocalDb.getPermissionForCreateTeam() === true,
  teamRead: LocalDb.getPermissionForViewTeam() === true,

  integrationAdmin: LocalDb.getPermissionForIntegration() === true,
  integrationWrite: LocalDb.getPermissionForCreateIntegration() === true,
  integrationRead: LocalDb.getPermissionForViewIntegration() === true,

  openEmptyServiceModal: false,
  breadcrumbValue: ['Home'],
  breadcrumbPath: ['/dashboard'],

  inboxId: '',
  arrivedMessage: null,
  ticketConnectionLost: false,
  mqttStatus: {
    open: false,
    variant: '',
    msg: '',
  },
  connectionFailure: false,
  conversationConnectionLost: {},
  isInternetDisconnected: false,
  slowInternetStrength: false,
  isVideoCallRunning: false,

  newProfilePicture: null,

  reloadContainer: false,
  serviceIdInNavbar: '',
  serviceListInNavbar: [],
  serviceObj: undefined,

  serviceIdForBotConfiguration: '',

  serviceDetailTab: 'attribute',
  openBotTab: false,
  openIntegrationTab: false,
  openListApi: false,
  openCustomServiceTab: false,
  serviceId: '',
  category: null,
  serviceDetailData: null,
  availableServiceLocation: [],
  serviceAttribute: null,
  openEnableLocationModal: false,
  enableLocationSuccess: false,

  labelList: [],

  employeeList: [],
  requesterList: [],

  openCreateTicketModal: false,
  ticketCloseRemark: '',
  globalTicketId: '',
  assignedEmployeeIdInTicket: [],

  employeeAssignedToDisplay: {
    assignedTo: {
      employeeProfileId: '',
    },
  },
  employeesAssigned: [],

  filterValue: '',
  status: '',
  dateFrom: '',
  dateTo: '',
  priority: '',
  selectedEmployee: undefined,
  ticketType: '',
  team: undefined,

  isAssignedTicket: true,
  createTicketSuccess: false,
  openCreateEntityModal: false,
  globalEntityList: [],

  openTryOutModal: false,

  ticketTitle: '',
  consumerData: undefined,
  conversationId: '',

  ticketDetailPath: undefined,

  isCustomRuleTraining: false,
  isBotTraining: false,
  showTrainingCompleteEvent: false,
  notificationObj: undefined,
  numberOfNotification: 0,
  blinkTitle: false,
  botIntentsList: [],
  botImportNotification: undefined,
  accounts: [],
  userInformation: [],
  userServiceId: undefined,
  groupList: [],
  BotList: [],
  publicGroup: [],
  next: undefined,
  languages: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      // intent
      case ACTION_TYPE_GLOBAL_INTENT.HANDLE_CHANGE_IN_IS_BOT_TRAINING:
        draft.loading = false;
        draft.isBotTraining = true;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.HANDLE_CHANGE_IN_IS_CUSTOM_RULE_TRAINING:
        draft.loading = false;
        draft.isCustomRuleTraining = true;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.OPEN_CREATE_ENTITY_MODAL:
        draft.loading = false;
        draft.openCreateEntityModal = true;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.CLOSE_CREATE_ENTITY_MODAL:
        draft.loading = false;
        draft.openCreateEntityModal = false;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_ENTITY_IN_INTENT_SUCCESS:
        draft.loading = false;
        draft.globalEntityList = action.entityList.entities;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.OPEN_TRY_OUT_MODAL:
        draft.loading = false;
        draft.openTryOutModal = action.bool;
        break;
      // navbar
      case ACTION_TYPE_NAVBAR.TOGGLE_EMPTY_SERVICE_MODAL:
        draft.loading = false;
        draft.openEmptyServiceModal = action.bool;
        break;
      case ACTION_TYPE_NAVBAR.RELOAD_CONTAINER:
        draft.reloadContainer = false;
        break;
      case ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR:
        // if (localStorage.getItem('serviceId') === null) {
        //   localStorage.setItem('serviceId', '');
        //
        // tokenHandler.updateToken(
        //   JSON.parse(sessionStorage.getItem('anydoneAccount')),
        // );
        break;

      case ACTION_TYPE_NAVBAR.FETCH_SERVICE_IN_NAVBAR_SUCCESS: {
        draft.loading = false;
        const customServices =
          action.serviceListInNavbar.services &&
          action.serviceListInNavbar.services.length > 0 &&
          action.serviceListInNavbar.services.filter(
            singleService => singleService.serviceType === 'CORPORATE_SERVICE',
          );
        draft.serviceListInNavbar =
          customServices &&
          customServices.sort((a, b) => a.createdAt - b.createdAt);
        if (state.serviceListInNavbar === undefined) {
          draft.openEmptyServiceModal = true;
        }
        break;
      }
      case ACTION_TYPE_NAVBAR.FETCH_PROJECT_IN_NAVBAR_SUCCESS: {
        draft.loading = false;
        draft.projectListInNavbar =
          action.projects &&
          action.projects.sort((a, b) => a.createdAt - b.createdAt);
        break;
      }
      case ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS:
        draft.loading = true;
        break;
      case ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS_SUCCESS:
        draft.loading = false;
        draft.accounts = action.serviceProviders;
        break;
      case ACTION_TYPE_EMPLOYEE.FETCH_GENERATE_TOKENS_FAILURE:
        draft.loading = false;
        break;
      case ACTION_TYPE_NAVBAR.HANDLE_CHANGE_IN_SIDEBAR: {
        localStorage.setItem(
          'anyDoneSession',
          JSON.stringify(action.accountDetails),
        );
        localStorage.setItem(
          'serviceId',
          action.accountDetails &&
            action.accountDetails.serviceId &&
            action.accountDetails.serviceId[0],
        );
        setTimeout((draft.reloadContainer = true), 3000);
        tokenHandler.updateToken(action.accountDetails);
        break;
      }
      case ACTION_TYPE_USER.SAVE_USER_INFORMATION: {
        draft.userInformation = action.account;
        draft.userServiceId = action.serviceId;
        break;
      }
      case ACTION_TYPE_USER.SELECT_THE_MAIN_USER: {
        localStorage.setItem('anyDoneSession', JSON.stringify(action.account));
        localStorage.setItem('serviceId', JSON.stringify(action.serviceId));
        draft.reloadContainer = true;
        tokenHandler.updateToken(action.account);
        break;
      }
      case ACTION_TYPE_USER.GET_SERVICE_GROUP_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPE_USER.GET_SERVICE_GROUP_SUCCESS:
        draft.loading = false;
        draft.groupList =
          action.res &&
          action.res.inbox &&
          action.res.inbox.filter(group => group.subject);

        break;
      case ACTION_TYPE_USER.GET_SERVICE_GROUP_FAILURE:
        draft.loading = false;
        break;
      // get All bots
      case ACTION_TYPE_BOT.GET_ALL_BOT:
        draft.loading = true;
        break;
      case ACTION_TYPE_BOT.GET_ALL_BOT_SUCCESS:
        draft.loading = false;
        draft.BotList = action.bots;
        break;
      case ACTION_TYPE_BOT.GET_ALL_BOT_FAILURE:
        draft.loading = false;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_PUBLIC_GROUP:
        draft.loading = true;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_PUBLIC_GROUP_SUCCESS:
        draft.loading = false;
        draft.publicGroup = action.res;
        draft.next = action.next;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_PUBLIC_GROUP_FAILURE:
        draft.loading = false;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_NEXT_PUBLIC_GROUP:
        draft.loading = true;
        break;
      case ACTION_TYPE_GLOBAL_INTENT.FETCH_NEXT_PUBLIC_GROUP_SUCCESS:
        draft.loading = false;
        draft.publicGroup = draft.publicGroup.concat(action.group);
        draft.next = action.next;
        break;
      case ACTION_TYPE_SERVICE.OPEN_LIST_API_AFTER_CREATING_API:
        draft.openListApi = true;
        break;
      case SETTINGS_ACTION.FETCH_LANGUAGES:
        break;
      case SETTINGS_ACTION.FETCH_LANGUAGES_SUCCESS:
        draft.languages = action.languages;
        break;
      case SETTINGS_ACTION.FETCH_LANGUAGES_FAILURE:
        break;

      case ACTION_TYPE_MQTT.ON_MESSAGE_ARRIVED:
        if (action.message.topic.includes('anydone/notification/')) {
          const baseResponse = action.message
            ? NotificationProto.Notification.deserializeBinary(
                action.message.payloadBytes,
              )
            : null;
          console.log(
            'notification',
            action.message &&
              NotificationProto.Notification.deserializeBinary(
                action.message.payloadBytes,
              ).toObject(),
          );
          draft.numberOfNotification = state.numberOfNotification + 1;
          draft.showTrainingCompleteEvent = !(
            NotificationProto.Notification.deserializeBinary(
              action.message.payloadBytes,
            ).toObject() &&
            action.message &&
            NotificationProto.Notification.deserializeBinary(
              action.message.payloadBytes,
            ).toObject().silent
          );
          if (
            action.message &&
            NotificationProto.Notification.deserializeBinary(
              action.message.payloadBytes,
            ).toObject().type === 1
          ) {
            draft.isBotTraining = false;
          } else if (
            action.message &&
            NotificationProto.Notification.deserializeBinary(
              action.message.payloadBytes,
            ).toObject().type === 6
          ) {
            draft.isCustomRuleTraining = false;
          }
          draft.notificationObj =
            baseResponse !== null && baseResponse.toObject();
        } else if (action.message.topic.includes('bot/import')) {
          let importNotificationObj =
            action.message &&
            BotImportProto.BotImportResponse.deserializeBinary(
              action.message.payloadBytes,
            ) &&
            BotImportProto.BotImportResponse.deserializeBinary(
              action.message.payloadBytes,
            ).toObject();
          console.log('bot import response', importNotificationObj);
          if (
            importNotificationObj &&
            localStorage.getItem('serviceId') ===
              importNotificationObj.serviceid
          )
            draft.botImportNotification = importNotificationObj;
        } else {
          console.log(
            'base response',
            action.message &&
              RelayProto.RelayResponse.deserializeBinary(
                action.message.payloadBytes,
              ).toObject(),
          );
          const baseResponse = action.message
            ? RelayProto.RelayResponse.deserializeBinary(
                action.message.payloadBytes,
              )
            : null;
          draft.arrivedMessage =
            baseResponse !== null && baseResponse.toObject();
        }
        break;
      case ACTION_TYPE_MQTT.CLEAR_NOTIFICATION_OBJ:
        draft.notificationObj = undefined;
        draft.botImportNotification = undefined;
        break;
    }
  });

export default appReducer;

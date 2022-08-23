import produce from 'immer';
import { ACTION_TYPE_BOT_LIST } from './constants';
import { ACTION_TYPE_NAVBAR } from '../../App/constants';

export const initialState = {
  loading: false,
  modalLoader: false,
  retrainingBotId: [],
  error: '',
  openSnackBar: false,
  variant: '',

  botList: undefined,
  BotList: undefined,
  cursor: '',
  count: 0,

  botImageUrl: '',
  botImageLoader: '',
  createBotModalVisibility: false,

  projectDetails: [],
  teams: [],
  ticketModal: [],
};

/* eslint-disable default-case, no-param-reassign */
const botListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_NAVBAR.HANDLE_CHANGE_SERVICE_ID_IN_NAVBAR:
        draft.retrainingBotId = [];
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT:
        draft.loading = true;
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT_SUCCESS:
        console.log(action.isPaginating, 'is paginating at the fetch boit');
        draft.loading = false;
        if (!action.isPaginating) {
          draft.count = action.botList.count;
        }
        const botList = state.botList ? [...state.botList] : [];
        action.botList &&
          action.botList.botSettings &&
          action.botList.botSettings.map(single => {
            const selectedLanguage =
              single.language && single.language.split(',')[0];
            let activeVersion;
            let currentLastTrained;
            single.botVersions &&
              single.botVersions.map(singleVersion => {
                if (
                  singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
                  singleVersion.language === selectedLanguage
                ) {
                  activeVersion = singleVersion.versionName;
                  currentLastTrained = singleVersion.lastTrained;
                }
              });
            const singleBot = {
              ...single,
              activeBotVersion: activeVersion,
              currentLastTrained,
              selectedLanguage,
            };
            botList.push(singleBot);
          });
        draft.botList =
          botList && botList.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_BOT_LIST_IN_BOT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION: {
        draft.loading = true;
        const botArray = state.botList ? [...state.botList] : [];
        botArray.map(list => {
          if (
            list.botSettingId === action.botId &&
            list.language === action.language
          ) {
            list.selectedLanguage = action.language;
          }
        });
        draft.botList = botArray;
        break;
      }

      case ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION_SUCCESS: {
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        const botArray = state.botList ? [...state.botList] : [];
        botArray.map(list => {
          if (list.botSettingId === action.botId) {
            list.botVersions = action.botVersions;
            if (list.botVersions) {
              list.botVersions.map(singleVersion => {
                if (singleVersion.botVersionState === 'BOT_VERSION_ACTIVE') {
                  list.activeBotVersion = singleVersion.versionName;
                  list.currentLastTrained = singleVersion.lastTrained;
                  list.selectedLanguage = singleVersion.language;
                }
              });
            } else {
              list.activeBotVersion = undefined;
              list.currentLastTrained = undefined;
              list.selectedLanguage = action.language;
            }
          }
        });
        draft.botList = botArray;
        break;
      }

      case ACTION_TYPE_BOT_LIST.FETCH_BOT_VERSION_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION: {
        draft.loading = true;
        const botArray = state.botList ? [...state.botList] : [];
        botArray.map(list => {
          if (
            list.botSettingId === action.botId &&
            list.language === action.language
          ) {
            list.botVersions.map(singleVersion => {
              if (singleVersion.botVersionId === action.botVersionId) {
                list.currentLastTrained = singleVersion.lastTrained;
                singleVersion.botVersionState = 'BOT_VERSION_ACTIVE';
              }
            });
          }
        });
        draft.botList = botArray;
        break;
      }
      case ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION_SUCCESS: {
        const initialList = state.botList ? [...state.botList] : [];
        const filteredList = initialList.filter(
          single => single.botSettingId !== action.res.botSettingId,
        );

        let activeVersion;
        let currentLastTrained;
        let selectedLanguage;
        action.res &&
          action.res.botVersions &&
          action.res.botVersions.map(singleVersion => {
            if (
              singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
              singleVersion.language === action.language
            ) {
              activeVersion = singleVersion.versionName;
              currentLastTrained = singleVersion.lastTrained;
              selectedLanguage = singleVersion.language;
            }
          });

        const singleBot = {
          ...action.res,
          // activeBotVersion: action.activeVersion,
          activeBotVersion: activeVersion,
          currentLastTrained,
          selectedLanguage,
        };
        filteredList.push(singleBot);
        draft.botList =
          filteredList &&
          filteredList.sort((a, b) => b.createdAt - a.createdAt);
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_BOT_LIST.PUBLISH_BOT_VERSION_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING_SUCCESS: {
        const initialList = state.botList ? [...state.botList] : [];
        initialList.map(single => {
          if (single.botSettingId === action.botId) {
            single.botStatus = action.status;
          }
        });
        draft.botList =
          initialList && initialList.sort((a, b) => b.createdAt - a.createdAt);
        draft.modalLoader = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_BOT_LIST.ENABLE_BOT_SETTING_FAILURE:
        draft.modalLoader = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING: {
        const initialIdList = state.retrainingBotId
          ? [...state.retrainingBotId]
          : [];
        initialIdList.push(action.botId);
        draft.retrainingBotId = initialIdList;
        break;
      }
      case ACTION_TYPE_BOT_LIST.TOGGLE_RETRAIN_LOADER: {
        draft.error = 'Training Completed';
        draft.openSnackBar = true;
        draft.variant = 'success';
        const versionExists = (arr, id) =>
          arr &&
          arr.some(function(el) {
            return el.botVersionId === id;
          });
        const initialIdList = state.retrainingBotId
          ? [...state.retrainingBotId]
          : [];
        const filteredList = initialIdList.filter(
          single => single !== action.botId,
        );
        draft.retrainingBotId = filteredList;
        const initialList = state.botList ? [...state.botList] : [];
        initialList.map(single => {
          if (single.botSettingId === action.botId) {
            single.currentLastTrained = new Date().getTime();
            if (!single.botVersions) {
              single.activeBotVersion = action.botVersion;
              single.botVersions = [
                {
                  botVersionId: action.versionId,
                  botVersionState: 'BOT_VERSION_ACTIVE',
                  createdAt: new Date().getTime(),
                  trainedModelName: action.modelName,
                  versionName: action.botVersion,
                  language: action.language,
                },
              ];
            } else if (
              !versionExists(single.botVersions, action.botVersionId)
            ) {
              single.botVersions.push({
                botVersionId: action.versionId,
                botVersionState: 'BOT_VERSION_INACTIVE',
                createdAt: new Date().getTime(),
                trainedModelName: action.modelName,
                versionName: action.botVersion,
                language: action.language,
              });
            }
          }
        });
        draft.botList = initialList;
        break;
      }
      case ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING_SUCCESS:
        draft.modalLoader = false;
        draft.error = 'Training Started';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_BOT_LIST.RETRAIN_BOT_SETTING_FAILURE: {
        const initialIdList = state.retrainingBotId
          ? [...state.retrainingBotId]
          : [];
        initialIdList.filter(single => single !== action.botId);
        draft.retrainingBotId = initialIdList;
        draft.modalLoader = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      }

      // create bot
      case ACTION_TYPE_BOT_LIST.TOGGLE_CREATE_BOT_MODAL:
        draft.createBotModalVisibility = action.bool;
        draft.botImageUrl = '';
        draft.botImageLoader = false;
        break;
      case ACTION_TYPE_BOT_LIST.CREATE_BOT:
        draft.modalLoader = true;
        break;
      case ACTION_TYPE_BOT_LIST.CREATE_BOT_SUCCESS: {
        const initialList = state.botList ? [...state.botList] : [];
        const selectedLanguage = action.res.language.split(',')[0];
        let activeVersion;
        let currentLastTrained;
        action.res.botVersions &&
          action.res.botVersions.map(singleVersion => {
            if (
              singleVersion.language === selectedLanguage &&
              singleVersion.botVersionState === 'BOT_VERSION_ACTIVE'
            ) {
              activeVersion = singleVersion.versionName;
              currentLastTrained = singleVersion.lastTrained;
            }
          });
        const singleNewBot = {
          ...action.res,
          activeBotVersion: activeVersion,
          currentLastTrained,
          selectedLanguage,
        };

        initialList.push(singleNewBot);
        // initialList.push(action.res);
        draft.botList =
          initialList && initialList.sort((a, b) => b.createdAt - a.createdAt);
        draft.count = state.count ? parseInt(state.count) + 1 : 1;
        state.retrainingBotId.push(action.res.botSettingId);
        draft.modalLoader = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE:
        draft.botImageLoader = true;
        break;
      case ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE_SUCCESS:
        draft.botImageLoader = false;
        draft.botImageUrl = action.botImageUrl;
        draft.openSnackBar = false;
        break;
      case ACTION_TYPE_BOT_LIST.UPLOAD_BOT_SETTING_IMAGE_FAILURE:
        draft.botImageLoader = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_LIST.CREATE_BOT_FAILURE:
        draft.modalLoader = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_LIST.CLEAR_BOT_LIST:
        draft.loading = false;
        draft.modalLoader = false;
        draft.openSnackBar = false;
        draft.botList = undefined;
        break;
      case ACTION_TYPE_BOT_LIST.CLOSE_SNACKBAR_IN_BOT:
        draft.loading = false;
        draft.modalLoader = false;
        draft.openSnackBar = false;
        break;

      // get all bots
      case ACTION_TYPE_BOT_LIST.GET_ALL_BOT:
        draft.loading = true;
        break;
      case ACTION_TYPE_BOT_LIST.GET_ALL_BOT_SUCCESS: {
        console.log(action.botList, action.cursor, 'dataa at the saga');
        draft.loading = false;
        draft.cursor = action.cursor;
        draft.count = action.count;
        const BotList = [];
        action.botList &&
          action.botList.map(single => {
            const selectedLanguage =
              single.language && single.language.split(',')[0];
            let activeVersion;
            let currentLastTrained;
            single.botVersions &&
              single.botVersions.map(singleVersion => {
                if (
                  singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
                  singleVersion.language === selectedLanguage
                ) {
                  activeVersion = singleVersion.versionName;
                  currentLastTrained = singleVersion.lastTrained;
                }
              });
            const singleBot = {
              ...single,
              activeBotVersion: activeVersion,
              currentLastTrained,
              selectedLanguage,
            };
            BotList.push(singleBot);
          });
        draft.BotList =
          BotList && BotList.sort((a, b) => b.createdAt - a.createdAt);
        console.log(draft.BotList, 'botlist at the jaksdjflk');
        break;
      }
      case ACTION_TYPE_BOT_LIST.GET_ALL_BOT_FAILURE:
        draft.loading = false;
        break;
      case ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT:
        draft.loading = true;
        break;
      case ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT_SUCCESS: {
        draft.loading = false;
        draft.cursor = action.cursor;
        draft.count = action.count;
        const BotList = state.BotList ? [...state.BotList] : [];
        action.botList &&
          action.botList.map(single => {
            const selectedLanguage =
              single.language && single.language.split(',')[0];
            let activeVersion;
            let currentLastTrained;
            single.botVersions &&
              single.botVersions.map(singleVersion => {
                if (
                  singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
                  singleVersion.language === selectedLanguage
                ) {
                  activeVersion = singleVersion.versionName;
                  currentLastTrained = singleVersion.lastTrained;
                }
              });
            const singleBot = {
              ...single,
              activeBotVersion: activeVersion,
              currentLastTrained,
              selectedLanguage,
            };
            BotList.push(singleBot);
          });
        draft.BotList =
          BotList && BotList.sort((a, b) => b.createdAt - a.createdAt);
        break;
      }
      case ACTION_TYPE_BOT_LIST.GET_NEXT_PAGE_BOT_FAILURE:
        draft.loading = false;
        break;

      // fetch project details
      case ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS:
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS_SUCCESS:
        draft.projectDetails = action.res && action.res.projects;
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_PROJECT_DETAILS_FAILURE:
        break;

      // fetch teams
      case ACTION_TYPE_BOT_LIST.FETCH_TEAMS:
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_TEAMS_SUCCESS:
        draft.teams = action.res && action.res.teams;
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_TEAMS_FAILURE:
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA:
        draft.loading = true;
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA_SUCCESS:
        draft.loading = false;
        draft.ticketModal = action.res && action.res.autoTicketCreateModels;
        break;
      case ACTION_TYPE_BOT_LIST.FETCH_MODAL_DATA_FAILURE:
        draft.loading = false;
        break;
      default:
        break;
    }
  });

export default botListReducer;

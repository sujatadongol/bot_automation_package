import produce from 'immer';
import {
  ACTION_TYPE_BOT_CONFIGURATION_TAB,
  ACTION_TYPE_BOT_SETTING,
  ACTION_TYPE_ENTITY,
  ACTION_TYPE_INTENT,
} from './constants';
import { FuncToReturnUpdatedList } from '../../../utils/helper';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  entityId: '',
  entityDetail: undefined,
  entityList: [],
  customEntityCount: 0,
  systemEntityCount: 0,
  systemEntityList: [],
  entityData: {
    serviceId: '',
    entityName: '',
    entityDataType: '',
    synonymValueType: 'PLAIN_VALUE_TYPE',
  },
  regex: [
    {
      id: Math.random(),
      value: '',
    },
  ],
  regexData: [],
  synonymData: [
    {
      id: Math.random(),
      value: '',
      synonyms: [],
      inputForTag: '',
    },
  ],
  synonyms: [],
  entityRefValue: [],
  entityRefId: [],

  // intent
  retrainIntentStatus: false,
  intentId: '',
  intentList: undefined,
  intentCount: 0,
  language: 'en',
  lastRetrainedDate: undefined,
  intentFileUrl: '',
  intentFileName: '',
  botImportModal: false,
  showBotImportProgressBar: false,
  botImportCompleted: false,
  importedIntentsCount: 0,
  uploadingDoc: false,

  // bot
  botSettingData: undefined,
  botSettingId: '',
  botName: '',
  botStatus: '',
  botTimezone: undefined,
  botLanguage: undefined,
  botImage: '',
  threshold: 0.7,
  inboxVisibility: '',
  noMatchRuleType: '',
  replyMessage: '',
  botVersions: [],
  languages: [],
  autoTicketCreateData: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const botConfigurationTabReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_BOT_CONFIGURATION_TAB.API_REQUEST_MADE_IN_BOT_CONFIGURATION:
        draft.loading = true;
        break;

      // bot settings
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_NAME:
        draft.loading = false;
        draft.botName = action.botName;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_THRESHOLD:
        draft.loading = false;
        draft.threshold = action.threshold;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_LANGUAGE:
        draft.loading = false;
        draft.botLanguage = action.language;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_TIMEZONE:
        draft.loading = false;
        draft.botTimezone = action.timezone;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_INBOX_VISIBILITY:
        draft.loading = false;
        draft.inboxVisibility = action.bool;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_REPLY_MESSAGE:
        draft.loading = false;
        draft.replyMessage = action.replyMessage;
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_BOT_NO_MATCH_RULE:
        draft.loading = false;
        draft.noMatchRuleType = action.value;
        break;

      case ACTION_TYPE_BOT_SETTING.CLEAR_BOT_SETTING:
        draft.loading = false;
        draft.botSettingId = '';
        draft.botName = '';
        draft.botStatus = '';
        draft.botTimezone = undefined;
        draft.botLanguage = undefined;
        draft.botImage = '';
        draft.replyMessage = '';
        draft.inboxVisibility = '';
        draft.noMatchRuleType = '';
        draft.threshold = 0.7;
        draft.lastRetrainedDate = undefined;
        break;
      case ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING_SUCCESS:
        draft.loading = false;
        if (action.botDetail.botSetting !== undefined) {
          console.log('ABCDEFGH', action.botDetail);

          draft.botSettingData = action.botDetail.botSetting;
          draft.botStatus = action.botDetail.botSetting.botStatus;
          draft.botSettingId = action.botDetail.botSetting.botSettingId;
          draft.botName = action.botDetail.botSetting.name;
          draft.botStatus = action.botDetail.botSetting.botStatus;
          draft.botTimezone = action.botDetail.botSetting.timezone;
          draft.botImage = action.botDetail.botSetting.image;
          draft.threshold = action.botDetail.botSetting.threshold;
          const selectedLanguage =
            action.botDetail.botSetting.language &&
            action.botDetail.botSetting.language.split(',')[0];
          let currentLastTrained;
          action.botDetail.botSetting.botVersions &&
            action.botDetail.botSetting.botVersions.map(singleVersion => {
              if (
                singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
                singleVersion.language === selectedLanguage
              ) {
                currentLastTrained = singleVersion.lastTrained;
              }
            });
          draft.botVersions = action.botDetail.botSetting.botVersions;
          draft.lastRetrainedDate = currentLastTrained;
          draft.inboxVisibility = action.botDetail.botSetting.inboxVisibility;
          draft.noMatchRuleType = action.botDetail.botSetting.noMatchRuleType;
          draft.replyMessage = action.botDetail.botSetting.replyMessage;
          draft.botLanguage =
            action.botDetail.botSetting.language &&
            action.botDetail.botSetting.language.split(',').map(lang => {
              if (lang === 'en') return 'English';
              if (lang === 'ne') return 'Nepali';
            });
          draft.languages =
            action.botDetail.botSetting.language &&
            action.botDetail.botSetting.language.split(',');
          draft.autoTicketCreateData = {
            modelId: action.botDetail.botSetting.modelId,
            projectId: action.botDetail.botSetting.projectId,
            subprojectId: action.botDetail.botSetting.subprojectId,
            boardId: action.botDetail.botSetting.boardId,
            teamId: action.botDetail.botSetting.teamId,
          };
          // draft.autoTicketCreateData = {
          //   modelId: 'TM3',
          //   teamId: '1df2e5cb01ee46a5865f9ea8361f4db4',
          //   projectId: 'a0a8ea98a87e44df81cc716dbe58a23c',
          //   subprojectId: '5d9a908c726b4d7c806539764dc43645',
          //   boardId: 'e1a94165366049729e01fcf751779314',
          // };
        }
        break;
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_LAST_TRAINED:
        draft.loading = false;
        draft.lastRetrainedDate = action.lastTrained;
        break;
      case ACTION_TYPE_BOT_SETTING.FETCH_BOT_SETTING_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE_SUCCESS:
        draft.loading = false;
        draft.botImage = action.botImageUrl;
        draft.openSnackBar = false;
        break;
      case ACTION_TYPE_BOT_SETTING.UPLOAD_BOT_IMAGE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_BOT_SETTING.SAVE_BOT_SETTING_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING_SUCCESS:
        draft.botSettingData = action.res && action.res.botSetting;
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_BOT_SETTING.UPDATE_BOT_SETTING_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // entity
      case ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY_SUCCESS:
        draft.loading = false;
        if (!action.isPaginating) {
          draft.systemEntityCount = action.systemEntityList.count;
        }
        draft.systemEntityList = action.systemEntityList.entities;
        break;
      case ACTION_TYPE_ENTITY.FETCH_SYSTEM_ENTITY_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_ENTITY.FETCH_ENTITY_SUCCESS:
        draft.loading = false;
        if (!action.isPaginating) {
          draft.customEntityCount = action.entityList.count;
        }
        draft.entityList = action.entityList.entities;
        break;
      case ACTION_TYPE_ENTITY.FETCH_ENTITY_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // entity by id
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_ID:
        draft.loading = false;
        draft.entityId = action.id;
        break;
      case ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID_SUCCESS:
        draft.loading = false;
        draft.entityDetail = {
          entityId: action.entityDetail.entity.entityId,
          entityName: action.entityDetail.entity.entityName,
          entityDataType: action.entityDetail.entity.entityDataType,
          synonymValueType: action.entityDetail.entity.synonymValueType
            ? action.entityDetail.entity.synonymValueType
            : 'PLAIN_VALUE_TYPE',
        };
        if (
          action.entityDetail.entity.synonymValueType === 'PLAIN_VALUE_TYPE'
        ) {
          const a =
            action.entityDetail.entity.entityRefValue &&
            action.entityDetail.entity.entityRefValue.map(single => {
              return {
                id: single.entityRefValueId,
                value: single.value,
                synonyms: single.synonyms ? single.synonyms : [],
                inputForTag: '',
              };
            });
          if (a === undefined || (a && a[a.length - 1].value !== '')) {
            const blankObj = {
              id: Math.random(),
              value: '',
              synonyms: [],
              inputForTag: '',
            };
            a.push(blankObj);
          }
          draft.synonymData =
            a !== undefined
              ? a
              : [
                  {
                    id: Math.random,
                    value: '',
                    synonyms: [],
                    inputForTag: '',
                  },
                ];
        } else if (
          action.entityDetail.entity.synonymValueType === 'REGEX_VALUE_TYPE'
        ) {
          const b =
            action.entityDetail.entity.entityRefValue &&
            action.entityDetail.entity.entityRefValue.map(single => {
              return {
                id: single.entityRefValueId,
                value: single.value,
              };
            });
          if (b === undefined || (b && b[b.length - 1].value !== '')) {
            const blankObj = {
              id: Math.random(),
              value: '',
            };
            b.push(blankObj);
          }
          draft.regex = b;
          let entityRefIdList = [];
          action.entityDetail.entity.entityRefValue &&
            action.entityDetail.entity.entityRefValue.filter(single => {
              entityRefIdList.push(single.entityRefValueId);
            });
          draft.entityRefId = entityRefIdList;
        } else {
          draft.synonymData = [
            {
              id: Math.random,
              value: '',
              synonyms: [],
              inputForTag: '',
            },
          ];
          draft.regex = [
            {
              id: Math.random(),
              value: '',
            },
          ];
        }
        break;
      case ACTION_TYPE_ENTITY.FETCH_ENTITY_BY_ID_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // regex
      case ACTION_TYPE_ENTITY.REMOVE_REGEX_IN_ENTITY:
        draft.loading = false;
        const initialData = [...state.regex];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.regex = finalData;
        break;
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_REGEX_IN_ENTITY:
        draft.loading = false;
        let newRegexAttribute = state.regex.filter(
          single => single.id === action.id,
        )[0];
        if (state.regex[state.regex.length - 1].id === newRegexAttribute.id) {
          const regexFormData = {
            id: Math.random(),
            value: '',
          };
          state.regex.push(regexFormData);
          draft.regex = state.regex;
        }
        newRegexAttribute.value = action.value;
        draft.regex = FuncToReturnUpdatedList(
          state.regex,
          action.id,
          newRegexAttribute,
        );
        break;

      // synonym
      case ACTION_TYPE_ENTITY.REMOVE_SYNONYM_TAG:
        draft.loading = false;
        const initialArray = state.synonymData ? [...state.synonymData] : [];
        initialArray.map(x => {
          if (x.id === action.synonymId) {
            const tags = [];
            x.synonyms.map(single => {
              if (single !== action.tagId) {
                tags.push(single);
              }
            });
            x.synonyms = tags;
          }
        });
        draft.synonymData = initialArray;
        break;
      case ACTION_TYPE_ENTITY.REMOVE_SYNONYM_IN_ENTITY:
        draft.loading = false;
        const finalSynonymData = [];
        state.synonymData.filter(x =>
          x.id !== action.id ? finalSynonymData.push(x) : null,
        );
        draft.synonymData = finalSynonymData;
        break;
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_IN_TAG_INPUT_IN_ENTITY:
        draft.loading = false;
        let newSynonymObj = state.synonymData.filter(
          single => single.id === action.id,
        )[0];
        if (
          state.synonymData[state.synonymData.length - 1].id ===
            newSynonymObj &&
          newSynonymObj.id
        ) {
          const synonymFormData = {
            id: Math.random(),
            value: '',
            synonyms: [],
            inputForTag: '',
          };
          state.synonymData.push(synonymFormData);

          draft.synonymData = state.synonymData;
        }
        if (newSynonymObj !== undefined) {
          newSynonymObj.inputForTag = action.value;
        }
        draft.synonymData = FuncToReturnUpdatedList(
          state.synonymData,
          action.id,
          newSynonymObj,
        );
        break;
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_SYNONYM_TAG_IN_ENTITY:
        draft.loading = false;
        let newSynonymAttribute = state.synonymData.filter(
          single => single.id === action.id,
        )[0];
        if (
          state.synonymData[state.synonymData.length - 1].id ===
          newSynonymAttribute.id
        ) {
          const formData = {
            id: Math.random(),
            value: '',
            synonyms: [],
            inputForTag: '',
          };
          state.synonymData.push(formData);
          draft.synonymData = state.synonymData;
        }
        newSynonymAttribute.synonyms.push(action.value);
        newSynonymAttribute.inputForTag = '';
        draft.synonymData = FuncToReturnUpdatedList(
          state.synonymData,
          action.id,
          newSynonymAttribute,
        );
        break;
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_SYNONYM_IN_ENTITY:
        draft.loading = false;
        let newSynonym = state.synonymData.filter(
          single => single.id === action.id,
        )[0];
        if (
          state.synonymData[state.synonymData.length - 1].id === newSynonym.id
        ) {
          const formData = {
            id: Math.random(),
            value: '',
            synonyms: [],
            inputForTag: '',
          };
          state.synonymData.push(formData);
          draft.synonymData = state.synonymData;
        }
        newSynonym.value = action.value;
        draft.synonymData = FuncToReturnUpdatedList(
          state.synonymData,
          action.id,
          newSynonym,
        );
        break;

      // create entity
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_DATA_IN_ENTITY:
        draft.loading = false;
        draft.entityData[action.id] = action.value;
        break;
      case ACTION_TYPE_ENTITY.CREATE_ENTITY_IN_ENTITY:
        draft.loading = false;
        draft.entityData['serviceId'] = localStorage.getItem('serviceId');
        if (state.entityData.synonymValueType === 'PLAIN_VALUE_TYPE') {
          state.synonymData.map(single => {
            if (single.value !== '') {
              let obj = {
                value: single.value,
                synonyms: single.synonyms,
              };
              state.synonyms.push(obj);
            }
          });
          draft.entityData['entityRefValue'] = state.synonyms;
          draft.entityData['botId'] = action.botId;
        } else {
          state.regex.filter(single => {
            if (single.value !== '') {
              let regexObj = {
                value: single.value,
              };
              state.regexData.push(regexObj);
            }
          });
          draft.entityData['entityRefValue'] = state.regexData;
          draft.entityData['botId'] = action.botId;
        }
        break;
      case ACTION_TYPE_ENTITY.CREATE_ENTITY_SUCCESS_IN_ENTITY: {
        let initialList = state.entityList ? [...state.entityList] : [];
        initialList.push(action.res);
        draft.entityList = initialList;
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_ENTITY.CREATE_ENTITY_FAILURE_IN_ENTITY:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_ENTITY.CLEAR_ENTITY_DATA_IN_ENTITY:
        draft.entityData = {
          entityName: '',
          entityDataType: '',
          synonymValueType: 'PLAIN_VALUE_TYPE',
        };
        draft.entityDetail = undefined;
        draft.regex = [
          {
            id: Math.random(),
            value: '',
          },
        ];
        draft.synonymData = [
          {
            id: Math.random(),
            value: '',
            synonyms: [],
            inputForTag: '',
          },
        ];
        draft.synonyms = [];
        draft.regexData = [];
        break;

      // entity update
      case ACTION_TYPE_ENTITY.HANDLE_CHANGE_ENTITY_DETAIL:
        draft.loading = false;
        draft.entityDetail[action.id] = action.value;
        break;
      case ACTION_TYPE_ENTITY.UPDATE_ENTITY:
        if (state.entityDetail.synonymValueType === 'PLAIN_VALUE_TYPE') {
          state.synonymData.map(single => {
            if (single.value !== '' && state.entityRefId.includes(single.id)) {
              let obj = {
                entityRefValueId: single.id,
                value: single.value,
                synonyms: single.synonyms,
              };
              state.synonyms.push(obj);
            } else if (single.value !== '') {
              let obj = {
                value: single.value,
                synonyms: single.synonyms,
              };
              state.synonyms.push(obj);
            } else {
            }
          });
          draft.entityDetail['entityRefValue'] = state.synonyms;
        } else {
          state.regex.filter(single => {
            if (single.value !== '' && state.entityRefId.includes(single.id)) {
              let regexObj = {
                entityRefValueId: single.id,
                value: single.value,
              };
              state.regexData.push(regexObj);
            } else if (single.value !== '') {
              let regexObj = {
                value: single.value,
              };
              state.regexData.push(regexObj);
            } else {
            }
          });
          draft.entityDetail['entityRefValue'] = state.regexData;
        }
        break;
      case ACTION_TYPE_ENTITY.UPDATE_ENTITY_SUCCESS: {
        let initialList = state.entityList ? [...state.entityList] : [];
        let filteredList = initialList.filter(
          single => single.entityId !== action.res.entityId,
        );
        filteredList.push(action.res);
        draft.entityList = filteredList;
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_ENTITY.UPDATE_ENTITY_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // entity delete
      case ACTION_TYPE_ENTITY.DELETE_ENTITY_SUCCESS: {
        const entityExists = (arr, id) => {
          if (arr) {
            return arr.some(function(el) {
              return el.entityId === id;
            });
          }
        };
        if (entityExists(state.systemEntityList, action.res)) {
          let initialList = state.systemEntityList
            ? [...state.systemEntityList]
            : undefined;
          let filteredSystemEntityList =
            initialList &&
            initialList.filter(single => single.entityId !== action.res);
          draft.systemEntityList = filteredSystemEntityList;
        }
        if (entityExists(state.entityList, action.res)) {
          let initialList = state.entityList
            ? [...state.entityList]
            : undefined;
          let filteredEntityList =
            initialList &&
            initialList.filter(single => single.entityId !== action.res);
          draft.entityList = filteredEntityList;
        }
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_ENTITY.DELETE_ENTITY_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // intent
      case ACTION_TYPE_INTENT.CLEAR_INTENT:
        draft.loading = false;
        draft.intentList = undefined;
        break;
      case ACTION_TYPE_INTENT.FETCH_INTENT:
        let currentLastTrained;
        draft.botVersions &&
          draft.botVersions.map(singleVersion => {
            if (
              singleVersion.botVersionState === 'BOT_VERSION_ACTIVE' &&
              singleVersion.language === action.language
            ) {
              currentLastTrained = singleVersion.lastTrained;
            }
          });
        draft.lastRetrainedDate = currentLastTrained;
        break;
      case ACTION_TYPE_INTENT.FETCH_INTENT_SUCCESS:
        draft.loading = false;
        if (!action.isPaginating) {
          draft.intentCount = action.intentList.count;
        }
        if (state.intentList === undefined) {
          draft.intentList = action.intentList.intents;
        } else {
          let initialArray = [];
          state.intentList &&
            state.intentList.map(single => initialArray.push(single));
          action.intentList.intents &&
            action.intentList.intents.map(single => initialArray.push(single));
          draft.intentList = initialArray;
        }
        break;
      case ACTION_TYPE_INTENT.FETCH_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // delete
      case ACTION_TYPE_INTENT.DELETE_INTENT_SUCCESS:
        let initialIntentList = state.intentList
          ? [...state.intentList]
          : undefined;
        let filteredList =
          initialIntentList &&
          initialIntentList.filter(single => single.intentId !== action.res);
        draft.intentList = filteredList;
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_INTENT.DELETE_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // retrain intent
      case ACTION_TYPE_INTENT.HANDLE_CHANGE_INTENT_ID:
        draft.loading = false;
        draft.intentId = action.intentId;
        break;
      case ACTION_TYPE_INTENT.HANDLE_CHANGE_LANGUAGE:
        draft.loading = false;
        draft.language = action.language;
        draft.retrainIntentStatus = true;
        break;
      case ACTION_TYPE_INTENT.RETRAIN_INTENT_SUCCESS:
        draft.loading = false;
        draft.error = 'Training Started';
        draft.openSnackBar = true;
        draft.variant = 'success';
        draft.retrainIntentStatus = false;
        break;
      case ACTION_TYPE_INTENT.RETRAIN_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_BOT_CONFIGURATION_TAB.CLOSE_SNACKBAR_IN_BOT_CONFIGURATION:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      case ACTION_TYPE_BOT_CONFIGURATION_TAB.OPEN_SNACKBAR_IN_BOT_CONFIGURATION:
        draft.loading = false;
        draft.openSnackBar = action.bool;
        draft.error = action.msg;
        draft.variant = action.variant;
        break;
      default:
        break;

      // bot import
      case ACTION_TYPE_INTENT.ON_BOT_IMPORT_NOTIFICATION: {
        let initialIntentCount = draft.importedIntentsCount;
        if (state.botImportModal) {
          draft.botImportCompleted = true;
        }
        draft.importedIntentsCount = initialIntentCount + 1;
        break;
      }
      case ACTION_TYPE_BOT_SETTING.HANDLE_CHANGE_IMPORTED_INTENTS_COUNT:
        draft.loading = false;
        draft.importedIntentsCount = action.count;
        break;

      case ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT_SUCCESS:
        draft.loading = false;
        draft.importedIntentsCount = action.res && parseInt(action.res);
        break;
      case ACTION_TYPE_BOT_SETTING.FETCH_IMPORTED_INTENTS_COUNT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT.BOT_IMPORT_SUCCESS:
        draft.loading = false;
        draft.showBotImportProgressBar = true;
        break;
      case ACTION_TYPE_INTENT.BOT_IMPORT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT.TOGGLE_BOT_IMPORT_MODAL:
        draft.botImportModal = action.bool;
        if (!action.bool) {
          draft.showBotImportProgressBar = false;
          draft.botImportCompleted = false;
          draft.intentFileName = '';
          draft.intentFileName = '';
          draft.uploadingDoc = false;
        }
        break;

      case ACTION_TYPE_INTENT.UPLOAD_DOCUMENT:
        draft.uploadingDoc = true;
        draft.intentFileName = action.file.name;
        break;

      case ACTION_TYPE_INTENT.UPLOAD_DOCUMENT_SUCCESS:
        draft.loading = false;
        draft.uploadingDoc = false;
        draft.openSnackBar = false;
        draft.intentFileUrl = action.fileUrl;
        draft.intentFileName = action.fileName;
        break;

      case ACTION_TYPE_INTENT.UPLOAD_DOCUMENT_FAILURE:
        draft.loading = false;
        draft.uploadingDoc = false;
        draft.intentFileName = '';
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
    }
  });

export default botConfigurationTabReducer;

import produce from 'immer';
import { ACTION_TYPE_CREATE_ENTITY } from './constants';
import { FuncToReturnUpdatedList } from '../CreateIntentPage/helper';
// import { ACTION_TYPE_ENTITY } from '../Bot/BotConfigurationTab/constants';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

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
};

/* eslint-disable default-case, no-param-reassign */
const createEntityModalContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      //regex
      case ACTION_TYPE_CREATE_ENTITY.REMOVE_REGEX:
        draft.loading = false;
        const initialData = [...state.regex];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.regex = finalData;
        break;
      case ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_REGEX:
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
      //synonym
      case ACTION_TYPE_CREATE_ENTITY.REMOVE_SYNONYM_TAG:
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
      case ACTION_TYPE_CREATE_ENTITY.REMOVE_SYNONYM:
        draft.loading = false;
        const finalSynonymData = [];
        state.synonymData.filter(x =>
          x.id !== action.id ? finalSynonymData.push(x) : null,
        );
        draft.synonymData = finalSynonymData;
        break;
      case ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_IN_TAG_INPUT:
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
      case ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_SYNONYM_TAG:
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
      case ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_SYNONYM:
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

      //create entity
      case ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_IN_ENTITY_DATA:
        draft.loading = false;
        draft.entityData[action.id] = action.value;
        break;
      case ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT:
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
      case ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_CREATE_ENTITY.CLEAR_ENTITY_DATA:
        draft.loading = false;
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
      case ACTION_TYPE_CREATE_ENTITY.CLOSE_SNACKBAR_IN_CREATE_ENTITY:
        draft.loading = false;
        draft.openSnackBar = false;
        break;
      default:
        break;
    }
  });

export default createEntityModalContainerReducer;

import produce from 'immer';
import { ACTION_TYPE_INTENT_DETAIL } from './constants';
import {
  MapAction,
  MapBotResponse,
  MapFulfillment,
  MapIntentParameter,
  MapTrainingPhrase,
} from './helper';
import { FuncToReturnUpdatedList } from '../CreateIntentPage/helper';
import {
  BotResponsesWithoutRemovedIntent,
  ChangeInResponse,
  ChangeInTrainingPhrase,
  ChangeParamInTrainingPhrase,
  ExtractWordContainingParamInResponse,
  ExtractWordInsideSquareBracket,
  MapTrainingPhraseToIntegrateAPI,
  RemoveIntentParamFormParticularPhrase,
  replaceAll,
  TrainingPhrasesWithoutRemovedIntent,
} from '../CreateIntentPage/helperFile';
import { CreateUUID, UnescapeHtml } from '../../utils/helper';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  eventMsg: '',
  openEventSnackBar: false,
  eventVariant: '',

  intentDetail: null,
  apiList: [],
  entityList: [],
  serviceId: '',
  intentId: '',
  intentName: '',

  trainingPhrase: [],
  trainingPhrases: [],

  checkIsPromptRequired: false,
  intentParam: [],
  intentParamList: [],

  fulfilment: [],
  fulfillments: [],

  action: [],
  objToAddAction: {
    actionName: '',
    actionType: '',
    selectedApi: { apiId: '', apiName: '' },
    paramMapping: [],
  },
  botAction: [],

  botResponse: [],
  responseEntity: [],
  intentResponse: [],

  isIntentValidatedToBeCreated: true,

  // paraphrasing
  openParaphraseModal: false,
  optimizationSuccess: false,
  loadingParaphrase: false,
  paraphrases: [],
  paraphraseList: undefined,
  paraphraseOfSpecificTrainingPhrase: undefined,
  specificParaphrase: undefined,
  specificParaphraseTitle: '',

  misleadingIntents: [],
};

/* eslint-disable default-case, no-param-reassign */
const intentDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_INTENT_DETAIL.API_REQUEST_MADE_IN_INTENT_DETAIL:
        draft.loading = true;
        break;

      // api
      case ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_SUCCESS_IN_INTENT_DETAIL:
        // draft.loading = false;
        draft.apiList = action.apiList.thirdPartyApis;
        break;
      case ACTION_TYPE_INTENT_DETAIL.FETCH_THIRD_PARTY_API_FAILURE_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      // entity
      case ACTION_TYPE_INTENT_DETAIL.FETCH_ENTITY_IN_INTENT_DETAIL_SUCCESS:
        // draft.loading = false;
        draft.entityList = action.entityList.entities;
        break;
      case ACTION_TYPE_INTENT_DETAIL.FETCH_ENTITY_IN_INTENT_DETAIL_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      // intent
      case ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID_SUCCESS:
        draft.loading = false;
        draft.intentDetail = action.intentDetail.intent;
        draft.intentName = action.intentDetail.intent.intentName;
        // map intent param
        draft.intentParam = MapIntentParameter(
          action.intentDetail.intent.intentParam,
        );
        // map training phrases
        action.intentDetail.intent.trainingPhrases.map(single => {
          const mappedTrainingPhrase = {
            id: single.phraseId,
            intentParamIdForTrainingPhrase: [],
            displayStr: single.text ? UnescapeHtml(single.text) : '',
            value: {
              text: single.text ? UnescapeHtml(single.text) : '',
            },
            similarStatus: single.similarStatus,
            similarPhrases: single.similarPhrases,
          };
          state.trainingPhrase.push(mappedTrainingPhrase);
        });
        draft.trainingPhrase = MapTrainingPhrase(
          MapIntentParameter(action.intentDetail.intent.intentParam),
          state.trainingPhrase,
        );
        // map fulfilment
        draft.fulfilment = MapFulfillment(
          action.intentDetail.intent.fulfillments,
          MapIntentParameter(action.intentDetail.intent.intentParam),
          state.apiList,
        );

        // map action
        draft.action = MapAction(
          action.intentDetail.intent.botAction,
          MapIntentParameter(action.intentDetail.intent.intentParam),
          state.apiList,
        );
        // map bot responses
        draft.botResponse = action.intentDetail.intent.botResponses
          ? MapBotResponse(
              MapIntentParameter(action.intentDetail.intent.intentParam),
              action.intentDetail.intent.botResponses,
              MapFulfillment(action.intentDetail.intent.fulfillments),
            )
          : null;
        break;
      case ACTION_TYPE_INTENT_DETAIL.FETCH_INTENT_BY_ID_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_SERVICE_ID_TO_UPDATE_INTENT:
        draft.loading = false;
        draft.serviceId = action.serviceId;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_NAME_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.intentName = action.intentName;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_ID:
        draft.loading = false;
        draft.intentId = action.intentId;
        break;

      // training phrase
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_TRAINING_PHASE_IN_INTENT_DETAIL:
        draft.loading = false;
        const array = [...state.trainingPhrase];
        const formData = {
          id: Math.random(),
          displayStr: '',
          intentParamIdForTrainingPhrase: [],
          value: {
            text: '',
          },
        };
        array.push(formData);
        draft.trainingPhrase = array;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialData = [...state.trainingPhrase];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.trainingPhrase = finalData;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TRAINING_PHASE_IN_INTENT_DETAIL:
        draft.loading = false;
        const newTrainingAttribute = state.trainingPhrase.filter(
          single => single.id === action.key,
        )[0];
        if (
          state.trainingPhrase[state.trainingPhrase.length - 1].id ===
            newTrainingAttribute.id &&
          state.trainingPhrase[state.trainingPhrase.length - 1].value.text ===
            ''
        ) {
          const formData = {
            id: Math.random(),
            displayStr: '',
            intentParamIdForTrainingPhrase: [],
            showIntentRow: false,
            value: {
              text: '',
              textValue: '',
            },
          };
          state.trainingPhrase.push(formData);
          draft.trainingPhrase = state.trainingPhrase;
        }
        newTrainingAttribute.value.text = action.value;
        draft.trainingPhrase = FuncToReturnUpdatedList(
          state.trainingPhrase,
          action.key,
          newTrainingAttribute,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE:
        draft.loading = false;
        const selectedTrainingStr = state.trainingPhrase.filter(
          single => single.id === action.id,
        )[0];
        selectedTrainingStr.displayStr = action.value;
        draft.trainingPhrase = FuncToReturnUpdatedList(
          state.trainingPhrase,
          action.id,
          selectedTrainingStr,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE_IN_INTENT_DETAIL:
        draft.loading = false;
        const newTrainingPhrase = state.trainingPhrase.filter(
          single => single.id === action.trainingPhraseId,
        )[0];
        newTrainingPhrase.value.text = ChangeInTrainingPhrase(
          newTrainingPhrase.value.text,
          state.intentParam,
          action.triggerValue,
        );
        newTrainingPhrase.intentParamIdForTrainingPhrase = action.intentParamId;
        draft.trainingPhrase = FuncToReturnUpdatedList(
          state.trainingPhrase,
          action.trainingPhraseId,
          newTrainingPhrase,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedTrainingPhrase = state.trainingPhrase.filter(
          single => single.id === action.trainingPhraseId,
        )[0];
        const updatedTrainingPhrase = RemoveIntentParamFormParticularPhrase(
          selectedTrainingPhrase,
          action.intentParamId,
          action.paramName,
          action.resolvedValue,
        );
        draft.trainingPhrase = FuncToReturnUpdatedList(
          state.trainingPhrase,
          action.trainingPhraseId,
          updatedTrainingPhrase,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialTrainingPhrase = state.trainingPhrase
          ? [...state.trainingPhrase]
          : [];
        initialTrainingPhrase &&
          initialTrainingPhrase.map(x => {
            if (x.id === action.trainingPhraseId) {
              x.showIntentRow = true;
            } else {
              x.showIntentRow = false;
            }
          });
        draft.trainingPhrase = initialTrainingPhrase;
        break;

      // intent parameter
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER_IN_INTENT_DETAIL:
        draft.loading = false;
        const intentArray = [...state.intentParam];
        const intentFormData = {
          id: action.intentId,
          prompts: [{ id: Math.random(), value: '' }],
          paramNameAlreadyExist: false,
          value: {
            orderIndex: '',
            iconUrl: '',
            paramName: '',
            botEntity: null,
            defaultValue: '',
            possibleValue: '',
            required: false,
            prompts: [],
            resolvedValue: [],
          },
        };
        intentArray.push(intentFormData);
        draft.intentParam = intentArray;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialIntentData = [...state.intentParam];
        const finalIntentData = initialIntentData.filter(
          x => x.id !== action.id,
        );
        // List of training phrases from which deleted intents are removed
        const phraseList = TrainingPhrasesWithoutRemovedIntent(
          state.trainingPhrase,
          action.id,
        );
        phraseList.map(singleTrainingObject => {
          draft.trainingPhrase = FuncToReturnUpdatedList(
            state.trainingPhrase,
            singleTrainingObject && singleTrainingObject.id,
            singleTrainingObject,
          );
        });
        // list of bot responses from which deleted intents are removed
        const responseList = BotResponsesWithoutRemovedIntent(
          state.botResponse,
          action.id,
        );
        draft.intentParam = finalIntentData;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_INTENT_PARAMETER_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.isIntentValidatedToBeCreated = true;
        const initialList = state.intentParam
          ? [...state.intentParam]
          : undefined;
        const newIntentAttribute =
          initialList &&
          initialList.filter(
            single =>
              single.id === action.key || single.id.toString() === action.key,
          )[0];
        if (action.id === 'botEntity') {
          newIntentAttribute.value.botEntity = {
            entityId: action.value.entityId,
            entityName: action.value.entityName,
          };
        } else if (action.id === 'resolvedValue') {
          const resolvedValueExists = (arr, id) =>
            arr &&
            arr.some(function(el) {
              return el.value === id;
            });
          if (!resolvedValueExists(newIntentAttribute.value.resolvedValue)) {
            const a = {
              id: CreateUUID().replace(/-/g, ''),
              value: action.value,
            };
            newIntentAttribute.value.resolvedValue.push(a);
          }
        } else {
          newIntentAttribute.value[action.id] = action.value;
        }
        if (action.id === 'paramName') {
          newIntentAttribute.paramNameAlreadyExist = false;
          ChangeParamInTrainingPhrase(
            action.key,
            state.trainingPhase,
            state.intentParam,
          );
        }

        const otherIntentAttributes = state.intentParam.filter(
          single => single.id !== newIntentAttribute.id,
        );
        otherIntentAttributes.splice(
          state.intentParam.findIndex(
            single =>
              single.id === action.key || single.id.toString() === action.key,
          ),
          0,
          newIntentAttribute,
        );
        draft.intentParam = otherIntentAttributes;
        break;
      case ACTION_TYPE_INTENT_DETAIL.CHECK_IF_PARAM_NAME_ALREADY_EXISTS_IN_INTENT_DETAIL:
        draft.loading = false;
        const newIntent = state.intentParam.filter(
          single =>
            single.id === action.intentId ||
            single.id.toString() === action.intentId,
        )[0];
        newIntent.paramNameAlreadyExist = action.bool;
        const otherIntent = state.intentParam.filter(
          single => single.id !== newIntent.id,
        );
        otherIntent.splice(
          state.intentParam.findIndex(
            single =>
              single.id === action.intentId ||
              single.id.toString() === action.intentId,
          ),
          0,
          newIntent,
        );
        draft.intentParam = otherIntent;
        break;

      case ACTION_TYPE_INTENT_DETAIL.UPLOAD_INTENT_PARAMETER_ICON_SUCCESS_IN_INTENT_DETAIL:
        draft.loading = false;
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPLOAD_INTENT_PARAMETER_ICON_FAILURE_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.error = action.error;
        break;

      // prompt
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_PROMPT_FIELD_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedIntentParam = state.intentParam.filter(
          single => single.id === action.intentParamId,
        )[0];
        const promptFormData = {
          id: Math.random(),
          value: '',
        };
        selectedIntentParam.prompts.push(promptFormData);
        const otherIntentParam = state.intentParam.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParam.splice(
          state.intentParam.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParam,
        );
        draft.intentParam = otherIntentParam;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedIntentParamToRemovePrompt = state.intentParam.filter(
          single => single.id === action.intentParamId,
        )[0];

        const finalPromptData = selectedIntentParamToRemovePrompt.prompts.filter(
          x => x.id !== action.promptId,
        );
        selectedIntentParamToRemovePrompt.prompts = finalPromptData;
        const otherIntentParams = state.intentParam.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParams.splice(
          state.intentParam.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParamToRemovePrompt,
        );
        draft.intentParam = otherIntentParams;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_PROMPTS_IN_INTENT_DETAIL:
        draft.loading = false;
        // first filter the selected intent param row
        const selectedIntentParamObject = state.intentParam.filter(
          single => single.id === action.intentParamId,
        )[0];
        // now filter the prompt row on which changes are made
        const newAttribute = selectedIntentParamObject.prompts.filter(
          single => single.id === action.promptId,
        )[0];
        newAttribute.value = action.value;
        // filter other prompts expect the row on which changes were made
        const otherAttributes = selectedIntentParamObject.prompts.filter(
          single => single.id !== action.promptId,
        );
        // add the changed prompt row on otherAttributes
        otherAttributes.splice(
          selectedIntentParamObject.prompts.findIndex(
            single => single.id === action.promptId,
          ),
          0,
          newAttribute,
        );
        selectedIntentParamObject.prompts = otherAttributes;
        selectedIntentParamObject.isPromptRequired = false;
        // filter other intent params expect the one on which prompts were changed
        const otherIntentParamObject = state.intentParam.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParamObject.splice(
          state.intentParam.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParamObject,
        );
        draft.intentParam = otherIntentParamObject;
        break;

      // fulfilment
      case ACTION_TYPE_INTENT_DETAIL.ADD_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialFulfilment = [...state.fulfilment];
        const fulfilmentFormData = {
          id: action.id,
          display: false,
          value: {
            fulfilmentName: '',
            selectedApi: { apiId: '', apiName: '' },
            paramMapping: [],
            response: [
              {
                id: Math.random(),
                value: {
                  name: '',
                  key: '',
                },
              },
            ],
          },
        };
        initialFulfilment.push(fulfilmentFormData);
        draft.fulfilment = initialFulfilment;
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialFulfilmentData = [...state.fulfilment];
        const finalFulfilmentData = initialFulfilmentData.filter(
          x => x.id !== action.id,
        );
        draft.fulfilment = finalFulfilmentData;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_FULFILMENT_DATA_IN_INTENT_DETAIL:
        draft.loading = false;
        const newFulfilment = state.fulfilment.filter(
          single => single.id === action.fulfilmentId,
        )[0];
        if (action.id === 'selectedApi') {
          newFulfilment.value[action.id] = {
            apiId: action.value.key,
            apiName: action.value.value,
          };
          const filteredApi = state.apiList.filter(
            single => single.apiId === action.value.key,
          )[0];
          const paramList = [];
          filteredApi &&
            filteredApi.apiParameters &&
            filteredApi.apiParameters.map(singleParam => {
              if (singleParam.type === 'RESOLVE') {
                const a = {
                  id: Math.random(),
                  value: {
                    name: singleParam.key,
                    value: '',
                  },
                };
                paramList.push(a);
              }
            });
          newFulfilment.value.paramMapping = paramList;
        } else {
          newFulfilment.value[action.id] = action.value;
        }
        draft.fulfilment = FuncToReturnUpdatedList(
          state.fulfilment,
          action.fulfilmentId,
          newFulfilment,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.SAVE_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        const filteredFulfilment = state.fulfilment.filter(
          single => single.id === action.id,
        )[0];

        filteredFulfilment.display = true;
        draft.fulfilment = FuncToReturnUpdatedList(
          state.fulfilment,
          action.id,
          filteredFulfilment,
        );
        break;
      case ACTION_TYPE_INTENT_DETAIL.ADD_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedFulfilment = state.fulfilment.filter(
          single => single.id === action.fulfilmentId,
        )[0];
        const responseObj = {
          id: Math.random(),
          value: {
            name: '',
            key: '',
          },
        };
        selectedFulfilment.value.response.push(responseObj);
        const otherFulfilment = state.fulfilment.filter(
          single => single.id !== action.fulfilmentId,
        );
        otherFulfilment.splice(
          state.fulfilment.findIndex(
            single => single.id === action.fulfilmentId,
          ),
          0,
          selectedFulfilment,
        );
        draft.fulfilment = otherFulfilment;
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedFulfilmentToRemoveResponse = state.fulfilment.filter(
          single => single.id === action.fulfilmentId,
        )[0];

        const finalFulfilmentResponse = selectedFulfilmentToRemoveResponse.value.response.filter(
          x => x.id !== action.responseId,
        );
        selectedFulfilmentToRemoveResponse.value.response = finalFulfilmentResponse;
        const otherFulfilments = state.fulfilment.filter(
          single => single.id !== action.fulfilmentId,
        );
        otherFulfilments.splice(
          state.fulfilment.findIndex(
            single => single.id === action.fulfilmentId,
          ),
          0,
          selectedFulfilmentToRemoveResponse,
        );
        draft.fulfilment = otherFulfilments;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_INTENT_DETAIL:
        draft.loading = false;
        // first filter the selected fulfilment row
        const selectedFulfilmentObj = state.fulfilment.filter(
          single => single.id === action.fulfilmentId,
        )[0];
        // now filter the response row on which changes are made
        const newParam = selectedFulfilmentObj.value.paramMapping.filter(
          single => single.id === action.paramId,
        )[0];

        newParam.value.value = action.value;
        // filter other prompts expect the row on which changes were made
        const otherParam = selectedFulfilmentObj.value.paramMapping.filter(
          single => single.id !== action.paramId,
        );
        // add the changed prompt row on otherAttributes
        otherParam.splice(
          selectedFulfilmentObj.value.paramMapping.findIndex(
            single => single.id === action.paramId,
          ),
          0,
          newParam,
        );
        selectedFulfilmentObj.value.paramMapping = otherParam;
        // filter other intent params expect the one on which prompts were changed
        const otherFulfilmentObj = state.fulfilment.filter(
          single => single.id !== action.fulfilmentId,
        );
        otherFulfilmentObj.splice(
          state.fulfilment.findIndex(
            single => single.id === action.fulfilmentId,
          ),
          0,
          selectedFulfilmentObj,
        );
        draft.fulfilment = otherFulfilmentObj;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT_IN_INTENT_DETAIL:
        draft.loading = false;
        // first filter the selected fulfilment row
        const selectedFulfilmentObject = state.fulfilment.filter(
          single => single.id === action.fulfilmentId,
        )[0];
        // now filter the response row on which changes are made
        const newResponse = selectedFulfilmentObject.value.response.filter(
          single => single.id === action.responseId,
        )[0];

        newResponse.value[action.id] = action.value;
        // filter other prompts expect the row on which changes were made
        const otherResponse = selectedFulfilmentObject.value.response.filter(
          single => single.id !== action.responseId,
        );
        // add the changed prompt row on otherAttributes
        otherResponse.splice(
          selectedFulfilmentObject.value.response.findIndex(
            single => single.id === action.responseId,
          ),
          0,
          newResponse,
        );
        selectedFulfilmentObject.value.response = otherResponse;
        // filter other intent params expect the one on which prompts were changed
        const otherFulfilmentObject = state.fulfilment.filter(
          single => single.id !== action.fulfilmentId,
        );
        otherFulfilmentObject.splice(
          state.fulfilment.findIndex(
            single => single.id === action.fulfilmentId,
          ),
          0,
          selectedFulfilmentObject,
        );
        draft.fulfilment = otherFulfilmentObject;
        break;

      // action
      case ACTION_TYPE_INTENT_DETAIL.CLEAR_ACTION_OBJECT_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.objToAddAction = {
          actionName: '',
          actionType: '',
          selectedApi: { apiId: '', apiName: '' },
          paramMapping: [],
        };
        break;
      case ACTION_TYPE_INTENT_DETAIL.ADD_ACTION_IN_INTENT_DETAIL:
        draft.loading = false;
        const a = {
          id: Math.random(),
          value: state.objToAddAction,
        };
        const initialAction = state.action ? [...state.action] : [];
        initialAction.push(a);
        draft.action = initialAction;
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_ACTION_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.action = [
          {
            id: Math.random(),
            value: state.objToAddAction,
          },
        ];
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_ACTION_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialActionData = state.action ? [...state.action] : [];
        const finalActionData = initialActionData.filter(
          x => x.id !== action.actionId,
        );
        draft.action = finalActionData;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL_IN_INTENT_DETAIL:
        draft.loading = false;
        const newAction = { ...state.objToAddAction };
        if (action.id === 'selectedApi') {
          newAction[action.id] = {
            apiId: action.value.key,
            apiName: action.value.value,
          };
          const filteredApi = state.apiList.filter(
            single => single.apiId === action.value.key,
          )[0];
          const paramList = [];
          filteredApi &&
            filteredApi.apiParameters &&
            filteredApi.apiParameters.map(singleParam => {
              if (singleParam.type === 'RESOLVE') {
                const a = {
                  id: Math.random(),
                  value: {
                    id: singleParam.apiParameterId,
                    name: singleParam.key,
                    value: '',
                  },
                };
                paramList.push(a);
              }
            });
          newAction.paramMapping = paramList;
        } else {
          newAction[action.id] = action.value;
        }
        draft.objToAddAction = newAction;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL_IN_INTENT_DETAIL:
        draft.loading = false;
        const newObj = state.objToAddAction.paramMapping
          ? [...state.objToAddAction.paramMapping]
          : [];
        const newParamObj =
          newObj &&
          newObj.filter(single => single.value.id === action.paramId)[0];
        newParamObj.value.value = action.value;
        // filter other param expect the row on which changes were made
        const otherParamObj =
          newObj && newObj.filter(single => single.value.id !== action.paramId);
        // add the changed param row on otherAttributes
        otherParamObj.splice(
          newObj &&
            newObj.findIndex(single => single.value.id === action.paramId),
          0,
          newParamObj,
        );
        draft.objToAddAction.paramMapping = otherParamObj;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.objToAddAction = action.actionObj.value;
        break;

      // response
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES_IN_INTENT_DETAIL:
        draft.loading = false;
        let botResponseArray = [];
        if (state.botResponse && state.botResponse.length > 0) {
          botResponseArray = [...state.botResponse];
        }
        const botResponseFormData = {
          botResponseId: Math.random(),
          response: [
            {
              id: Math.random(),
              intentParamIdForBotResponse: [],
              value: {
                response: '',
              },
            },
          ],
        };
        botResponseArray.push(botResponseFormData);
        draft.botResponse = botResponseArray;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES_IN_INTENT_DETAIL:
        draft.loading = false;
        const initialResponseData = [...state.botResponse];
        const finalResponse = initialResponseData.filter(
          x => x.botResponseId !== action.botResponseId,
        );
        draft.botResponse = finalResponse;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_TO_REMOVE_RESPONSES_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedResponse = state.botResponse.filter(
          single => single.botResponseId === action.botResponseId,
        )[0];

        const finalResponseData = selectedResponse.response.filter(
          x => x.id !== action.responseId,
        );
        selectedResponse.response = finalResponseData;
        const result = state.botResponse.filter(
          single => single.botResponseId !== action.botResponseId,
        );
        result.splice(
          state.botResponse.findIndex(
            single => single.botResponseId === action.botResponseId,
          ),
          0,
          selectedResponse,
        );
        draft.botResponse = result;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_BOT_RESPONSE_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedBotResponse = state.botResponse.filter(
          single => single.botResponseId === action.botResponseId,
        )[0];
        const newResponseAttribute = selectedBotResponse.response.filter(
          single => single.id === action.key,
        )[0];
        newResponseAttribute.value[action.id] = action.value;
        if (
          selectedBotResponse.response[selectedBotResponse.response.length - 1]
            .id === newResponseAttribute.id &&
          selectedBotResponse.response[selectedBotResponse.response.length - 1]
            .value.response !== ''
        ) {
          const responseFormData = {
            id: Math.random(),
            intentParamIdForBotResponse: [],
            value: {
              response: '',
              responseValue: '',
            },
          };
          selectedBotResponse.response.push(responseFormData);
        }
        selectedBotResponse.response = FuncToReturnUpdatedList(
          selectedBotResponse.response,
          action.key,
          newResponseAttribute,
        );

        const otherData = state.botResponse.filter(
          single => single.botResponseId !== action.botResponseId,
        );
        otherData.splice(
          state.botResponse.findIndex(
            single => single.botResponseId === action.botResponseId,
          ),
          0,
          selectedBotResponse,
        );
        draft.botResponse = otherData;
        break;

      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_PLAIN_BOT_RESPONSE_IN_INTENT_DETAIL:
        draft.loading = false;
        const selectedPlainBotResponse = state.botResponse.filter(
          single => single.botResponseId === action.botResponseId,
        )[0];
        const newPlainResponseAttribute = selectedPlainBotResponse.response.filter(
          single => single.id === action.key,
        )[0];
        newPlainResponseAttribute.value[action.id] = action.value;
        selectedPlainBotResponse.response = FuncToReturnUpdatedList(
          selectedPlainBotResponse.response,
          action.key,
          newPlainResponseAttribute,
        );

        const otherPlainData = state.botResponse.filter(
          single => single.botResponseId !== action.botResponseId,
        );
        otherPlainData.splice(
          state.botResponse.findIndex(
            single => single.botResponseId === action.botResponseId,
          ),
          0,
          selectedPlainBotResponse,
        );
        draft.botResponse = otherPlainData;
        break;

      case ACTION_TYPE_INTENT_DETAIL.SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE_IN_INTENT_DETAIL:
        draft.loading = false;
        const filteredResponse = state.botResponse.filter(
          single => single.botResponseId === action.botResponseId,
        )[0];

        const newResponseData = filteredResponse.response.filter(
          single => single.id === action.responseId,
        )[0];
        newResponseData.intentParamIdForBotResponse = action.intentParamId;
        newResponseData.value.response = ChangeInResponse(
          newResponseData.value.response,
          state.intentParam,
        );
        filteredResponse.response = FuncToReturnUpdatedList(
          filteredResponse.response,
          action.responseId,
          newResponseData,
        );

        const otherResponses = state.botResponse.filter(
          single => single.botResponseId !== action.botResponseId,
        );
        otherResponses.splice(
          state.botResponse.findIndex(
            single => single.botResponseId === action.botResponseId,
          ),
          0,
          filteredResponse,
        );
        draft.botResponse = otherResponses;
        break;

      // update
      case ACTION_TYPE_INTENT_DETAIL.VALIDATE_INTENT_IN_INTENT_DETAIL:
        // entity missing /prompt missing ==> isIntentValidatedToBeCreated=true
        const isAllRequiredPromptsChecked = [];
        state.intentParam.map(single => {
          single.value.required === true && single.value.prompts.length === 0
            ? isAllRequiredPromptsChecked.push(false)
            : isAllRequiredPromptsChecked.push(true);
        });
        isAllRequiredPromptsChecked.includes(false)
          ? (draft.isIntentValidatedToBeCreated = false)
          : null;
        break;

      case ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT:
        draft.loading = false;
        // training phrases
        draft.trainingPhrases = MapTrainingPhraseToIntegrateAPI(
          state.trainingPhrase,
          state.intentParam,
        );
        // intent parameters
        const intentArrayList = state.intentParam;
        intentArrayList.filter((singleList, index) => {
          const resolvedMappedData = new Map();
          singleList.value.resolvedValue.length > 0 &&
            singleList.value.resolvedValue.map(singleResValue => {
              resolvedMappedData[singleResValue.id] = singleResValue.value;
            });
          if (
            singleList.value.paramName !== '' &&
            singleList.value.botEntity !== null
          ) {
            const a = {
              paramName: singleList.value.paramName,
              orderIndex: index + 1,
              iconUrl: singleList.value.iconUrl,
              botEntity: {
                entityId: singleList.value.botEntity.entityId,
              },
              defaultValue: singleList.value.defaultValue,
              possibleValue: singleList.value.possibleValue,
              required: singleList.value.required,
              prompts: singleList.value.prompts,
              resolvedValue: resolvedMappedData,
            };
            state.intentParamList.push(a);
          }
        });

        // fulfilment
        const fulfilmentList = state.fulfilment;
        fulfilmentList.map(singleFulfilment => {
          if (
            singleFulfilment.value.fulfilmentName !== '' &&
            singleFulfilment.display === true &&
            singleFulfilment.value.selectedApi.apiId !== ''
          ) {
            const paramMap = new Map();
            singleFulfilment.value.paramMapping.length > 0 &&
              singleFulfilment.value.paramMapping.map(singleParam => {
                paramMap[singleParam.value.name] = singleParam.value.value;
              });
            const responseList = [];
            singleFulfilment.value.response.filter(single =>
              responseList.push(single.value),
            );
            const a = {
              name: singleFulfilment.value.fulfilmentName,
              thirdPartyApi: {
                apiId: singleFulfilment.value.selectedApi.apiId,
              },
              paramMapping: paramMap,
              responses: responseList,
            };
            state.fulfillments.push(a);
          }
        });
        draft.fulfillments = state.fulfillments;

        // action
        const finalAction = [];
        const actionList = state.action ? [...state.action] : [];
        actionList &&
          actionList.map(single => {
            if (single.value.actionType === 1) {
              const mappedData = new Map();
              single.value.paramMapping.map(singleParam => {
                mappedData[singleParam.value.id] = singleParam.value.value;
              });
              const a = {
                type: single.value.actionType,
                name: single.value.actionName,
                api: {
                  apiId: single.value.selectedApi.apiId,
                },
                param: mappedData,
              };
              finalAction.push(a);
            } else if (single.value.actionType === 2) {
              const a = {
                type: single.value.actionType,
                name: single.value.actionName,
              };
              finalAction.push(a);
            }
          });
        draft.botAction = finalAction;

        // bot responses
        const intentParamIdList = [];
        state.intentParam.map(single =>
          intentParamIdList.push(single.id.toString()),
        );
        const fulfilmentIdList = [];
        state.fulfilment.map(single =>
          fulfilmentIdList.push(single.id.toString()),
        );

        const responseEntityList = [];
        const botResponseData = [];
        const responseArray = state.botResponse;
        responseArray &&
          responseArray.length > 0 &&
          responseArray.map(singleBotResponse => {
            const a = [];
            const singleResponse = singleBotResponse.response.filter(
              single => single.value.response !== '',
            );
            singleResponse.map(singleRes => {
              singleResponse.length > 0 &&
                singleRes.intentParamIdForBotResponse.map(singleId => {
                  responseEntityList.push(singleId);
                });
            });
            singleResponse.map(single => {
              let responseValue = single.value.response;
              ExtractWordContainingParamInResponse(single.value.response).map(
                wordToReplace => {
                  const regExp = /\(([^)]+)\)/; // regex to get id which is inside ()
                  const intentId = regExp.exec(wordToReplace)[1];
                  if (intentParamIdList.includes(intentId)) {
                    const selectedIntentParam = state.intentParam.filter(
                      singleIntentParam =>
                        singleIntentParam.id === intentId ||
                        singleIntentParam.id.toString() === intentId,
                    )[0];
                    responseValue = replaceAll(
                      responseValue,
                      wordToReplace,
                      `\${${selectedIntentParam.value.paramName}}`,
                    );
                  } else {
                    const fulfilmentValue = ExtractWordInsideSquareBracket(
                      wordToReplace,
                    );
                    responseValue = replaceAll(
                      responseValue,
                      wordToReplace,
                      `\${${fulfilmentValue.replace('$', '')}}`,
                    );
                  }
                },
              );
              const b = {
                response: responseValue,
              };
              if (b.response !== '' && b.response !== undefined) {
                a.push(b);
              }
            });
            const intentResponse = {
              intentResponses: a,
            };
            if (a && a.length > 0) {
              botResponseData.push(intentResponse);
            }
          });
        draft.intentResponse = botResponseData;

        // formatting of response entity
        if (responseEntityList.length > 0) {
          const a = [...new Set(responseEntityList)];
          a.map(singleIntentID => {
            if (intentParamIdList.includes(singleIntentID)) {
              const selectedIntentParam = state.intentParam.filter(
                singleIntentParam =>
                  singleIntentParam.id === singleIntentID ||
                  singleIntentParam.id.toString() === singleIntentID,
              )[0].value;
              const formattedResponseEntity = {
                resolvePolicy: 'RESOLVE_BY_USER_INPUT',
                entityName: selectedIntentParam.paramName,
                botEntity: {
                  entityId: selectedIntentParam.botEntity.entityId,
                },
              };
              state.responseEntity.push(formattedResponseEntity);
            } else {
              state.fulfilment.map(singleFulfilment => {
                singleFulfilment.value.response.map(singleRes => {
                  if (singleRes.id.toString() === singleIntentID) {
                    const formattedResponseEntity = {
                      resolvePolicy: 'RESOLVE_BY_API_CALL',
                      entityName: `${singleFulfilment.value.fulfilmentName} - ${
                        singleRes.value.name
                      }`,
                      fulfillment: {
                        name: singleFulfilment.value.fulfilmentName,
                      },
                      fulfillmentResponse: {
                        name: singleRes.value.name,
                      },
                    };
                    state.responseEntity.push(formattedResponseEntity);
                  }
                });
              });
            }
          });
        }
        draft.responseEntity = state.responseEntity;
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.CLEAR_INTENT_DATA_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.intentName = '';
        draft.trainingPhrase = [];
        draft.intentParam = [];
        draft.fulfilment = [];
        draft.botResponse = [];
        draft.trainingPhrases = [];
        draft.intentParamList = [];
        draft.fulfillments = [];
        draft.responseEntity = [];
        draft.intentResponse = [];
        break;
      case ACTION_TYPE_INTENT_DETAIL.CLEAR_INTENT_API_DATA:
        draft.loading = false;
        draft.trainingPhrases = [];
        draft.intentParamList = [];
        draft.fulfillments = [];
        draft.responseEntity = [];
        draft.intentResponse = [];
        break;

      // paraphrasing
      case ACTION_TYPE_INTENT_DETAIL.API_REQUEST_MADE_FOR_LOADING_PARAPHRASE:
        draft.loadingParaphrase = true;
        break;
      case ACTION_TYPE_INTENT_DETAIL.OPEN_PARAPHRASE_MODAL:
        draft.openParaphraseModal = action.bool;
        break;
      case ACTION_TYPE_INTENT_DETAIL.CLEAR_PARAPHRASE_MODAL:
        draft.paraphrases = [];
        draft.paraphraseList = undefined;
        draft.paraphraseOfSpecificTrainingPhrase = undefined;
        draft.specificParaphrase = undefined;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_PARAPHRASE_EVENT:
        draft.optimizationSuccess = true;
        draft.eventMsg = action.msg;
        draft.openEventSnackBar = true;
        draft.eventVariant = 'success';
        draft.loadingParaphrase = false;
        const response = action.paraphraseObj.trainingPhrases;
        const parsedParaphrases = [];
        response &&
          response.map(single => {
            const obj = {
              id: Math.random(),
              text: single.text,
            };
            parsedParaphrases.push(obj);
          });
        draft.paraphraseList = parsedParaphrases;
        break;
      case ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE:
        draft.optimizationSuccess = false;
        break;
      case ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_INTENT_DETAIL.OPTIMIZE_PARAPHRASE_FAILURE:
        draft.loading = false;
        draft.loadingParaphrase = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.ADD_PARAPHRASE_ROW:
        draft.loading = false;
        const paraphraseArray = [...state.paraphraseList];
        paraphraseArray.push({
          id: Math.random(),
          text: '',
        });
        draft.paraphraseList = paraphraseArray;
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_PARAPHRASE_ROW:
        draft.loading = false;
        const initialParaphraseList = [...state.paraphraseList];
        const removedParaphraseList =
          initialParaphraseList &&
          initialParaphraseList.filter(x => x.id !== action.removedPhraseId);
        draft.paraphraseList = removedParaphraseList;
        break;
      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_PARAPHRASE:
        draft.loading = false;
        const initialParaphrase = [...state.paraphraseList];
        initialParaphrase &&
          initialParaphrase.map(x => {
            if (x.id === action.phraseId) {
              x.text = action.value;
            }
          });
        draft.paraphraseList = initialParaphrase;
        break;

      case ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE:
        const paraphraseArr = [...state.paraphraseList];
        const finalRes = [];
        paraphraseArr.map(singlePhrase => {
          if (singlePhrase.text !== '') {
            const obj = {
              text: singlePhrase.text,
            };
            finalRes.push(obj);
          }
        });
        draft.paraphrases = finalRes;
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE_SUCCESS:
        // draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_PARAPHRASE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID_SUCCESS:
        draft.loading = false;
        draft.loadingParaphrase = false;
        draft.paraphraseOfSpecificTrainingPhrase = action.res.trainingPhrases
          ? action.res.trainingPhrases
          : [];
        break;
      case ACTION_TYPE_INTENT_DETAIL.GET_PARAPHRASE_BY_ID_FAILURE:
        draft.loading = false;
        draft.loadingParaphrase = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.HANDLE_CHANGE_IN_SPECIFIC_PARAPHRASE:
        draft.loading = false;
        const newParaphraseAttribute = state.paraphraseOfSpecificTrainingPhrase.filter(
          single => single.phraseId === action.id,
        )[0];
        newParaphraseAttribute.text = action.value;
        const updatedArray = state.paraphraseOfSpecificTrainingPhrase.filter(
          single => single.phraseId !== action.id,
        );
        updatedArray.splice(
          state.paraphraseOfSpecificTrainingPhrase.findIndex(
            single => single.phraseId === action.id,
          ),
          0,
          newParaphraseAttribute,
        );
        draft.paraphraseOfSpecificTrainingPhrase = updatedArray;
        break;
      case ACTION_TYPE_INTENT_DETAIL.ADD_SPECIFIC_PARAPHRASE_ROW:
        draft.loading = false;
        const arrayData = [...state.paraphraseOfSpecificTrainingPhrase];
        const formObj = {
          phraseId: Math.random(),
          text: '',
        };
        arrayData.push(formObj);
        draft.paraphraseOfSpecificTrainingPhrase = arrayData;
        break;
      case ACTION_TYPE_INTENT_DETAIL.REMOVE_SPECIFIC_PARAPHRASE_ROW:
        draft.loading = false;
        const initialArr = [...state.paraphraseOfSpecificTrainingPhrase];
        const arr =
          initialArr &&
          initialArr.filter(x => x.phraseId !== action.removedPhraseId);
        draft.paraphraseOfSpecificTrainingPhrase = arr;
        break;

      case ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE:
        const specificParaphraseArr = [
          ...state.paraphraseOfSpecificTrainingPhrase,
        ];
        const paraphraseArrList = [];
        specificParaphraseArr.map(singlePhrase => {
          if (singlePhrase.text !== '') {
            const obj = {
              text: singlePhrase.text,
            };
            paraphraseArrList.push(obj);
          }
        });
        draft.specificParaphrase = {
          phraseId: action.id,
          paraphrases: paraphraseArrList,
        };
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_INTENT_DETAIL.UPDATE_SPECIFIC_PARAPHRASE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT_SUCCESS:
        draft.loading = false;
        draft.misleadingIntents = action.res;
        draft.openSnackBar = false;
        draft.loadingParaphrase = false;
        break;
      case ACTION_TYPE_INTENT_DETAIL.FETCH_MISLEADING_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        draft.loadingParaphrase = false;
        break;

      case ACTION_TYPE_INTENT_DETAIL.CLOSE_SNACKBAR_IN_INTENT_DETAIL:
        draft.loading = false;
        draft.openSnackBar = false;
        draft.openEventSnackBar = false;
        break;
      default:
        break;
    }
  });

export default intentDetailReducer;

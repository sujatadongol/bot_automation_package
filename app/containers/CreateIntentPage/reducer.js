import produce from 'immer';
import { ACTION_TYPE_CREATE_INTENT } from './constants';
import { FuncToReturnUpdatedList } from './helper';
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
} from './helperFile';
import { CreateUUID } from '../../utils/helper';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  apiList: [],
  entityList: [],
  serviceId: '',

  intentName: '',
  trainingPhase: [
    {
      id: Math.random(),
      displayStr: '',
      intentParamIdForTrainingPhrase: [],
      showIntentRow: false,
      value: {
        textValue: '',
        text: '',
      },
    },
  ],
  trainingPhrases: [],

  checkIsPromptRequired: false,
  paramNameList: [],
  intentParameter: [],
  intentParam: [],

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

  botResponse: [
    {
      botResponseId: Math.random(),
      response: [
        {
          id: Math.random(),
          intentParamIdForBotResponse: [],
          value: {
            response: '',
            responseValue: '',
          },
        },
      ],
    },
  ],
  responseEntity: [],
  intentResponse: [],

  isIntentValidatedToBeCreated: true,
};

/* eslint-disable default-case, no-param-reassign */
const createIntentPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_CREATE_INTENT.API_REQUEST_MADE_IN_CREATE_INTENT:
        draft.loading = true;
        break;
      case ACTION_TYPE_CREATE_INTENT.CLOSE_SNACKBAR_IN_CREATE_INTENT:
        draft.loading = false;
        draft.openSnackBar = false;
        break;

      case ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API_SUCCESS:
        draft.loading = false;
        draft.apiList = action.apiList.thirdPartyApis;
        break;
      case ACTION_TYPE_CREATE_INTENT.FETCH_THIRD_PARTY_API_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_CREATE_INTENT.FETCH_ENTITY_IN_CREATE_INTENT_SUCCESS:
        draft.loading = false;
        draft.entityList = action.entityList.entities;
        break;
      case ACTION_TYPE_CREATE_INTENT.FETCH_ENTITY_IN_CREATE_INTENT_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_SERVICE_ID_TO_CREATE_INTENT:
        draft.loading = false;
        draft.serviceId = action.serviceId;
        break;

      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_NAME:
        draft.loading = false;
        draft.intentName = action.intentName;
        break;

      // training phase
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_TRAINING_PHASE:
        draft.loading = false;
        const array = [...state.trainingPhase];
        const formData = {
          id: Math.random(),
          displayStr: '',
          intentParamIdForTrainingPhrase: [],
          value: {
            text: '',
          },
        };
        array.push(formData);
        draft.trainingPhase = array;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_DISPLAY_TRAINING_PHRASE_IN_CREATE_INTENT:
        draft.loading = false;
        const selectedTrainingStr = state.trainingPhase.filter(
          single => single.id === action.id,
        )[0];
        selectedTrainingStr.displayStr = action.value;
        draft.trainingPhrase = FuncToReturnUpdatedList(
          state.trainingPhase,
          action.id,
          selectedTrainingStr,
        );
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_TRAINING_PHASE:
        draft.loading = false;
        const initialData = [...state.trainingPhase];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.trainingPhase = finalData;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TRAINING_PHASE:
        draft.loading = false;
        const newTrainingAttribute = state.trainingPhase.filter(
          single => single.id === action.key,
        )[0];
        if (
          state.trainingPhase[state.trainingPhase.length - 1].id ===
            newTrainingAttribute.id &&
          state.trainingPhase[state.trainingPhase.length - 1].value.text === ''
        ) {
          const formData = {
            id: Math.random(),
            intentParamIdForTrainingPhrase: [],
            displayStr: '',
            showIntentRow: false,
            value: {
              text: '',
              textValue: '',
            },
          };
          state.trainingPhase.push(formData);
          draft.trainingPhase = state.trainingPhase;
        }
        newTrainingAttribute.value.text = action.value;

        draft.trainingPhase = FuncToReturnUpdatedList(
          state.trainingPhase,
          action.key,
          newTrainingAttribute,
        );
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_PARAMETER_ID_OF_TRAINING_PHRASE:
        draft.loading = false;
        const newTrainingPhrase = state.trainingPhase.filter(
          single => single.id === action.trainingPhraseId,
        )[0];
        newTrainingPhrase.value.text = ChangeInTrainingPhrase(
          newTrainingPhrase.value.text,
          state.intentParameter,
          action.triggerValue,
        );
        newTrainingPhrase.intentParamIdForTrainingPhrase = action.intentParamId;
        draft.trainingPhase = FuncToReturnUpdatedList(
          state.trainingPhase,
          action.trainingPhraseId,
          newTrainingPhrase,
        );
        break;

      case ACTION_TYPE_CREATE_INTENT.REMOVE_INTENT_PARAM_FROM_PARTICULAR_TRAINING_PHRASE:
        draft.loading = false;
        const selectedTrainingPhrase = state.trainingPhase.filter(
          single => single.id === action.trainingPhraseId,
        )[0];
        const updatedTrainingPhrase = RemoveIntentParamFormParticularPhrase(
          selectedTrainingPhrase,
          action.intentParamId,
          action.paramName,
          action.resolvedValue,
        );
        draft.trainingPhase = FuncToReturnUpdatedList(
          state.trainingPhase,
          action.trainingPhraseId,
          updatedTrainingPhrase,
        );
        break;
      case ACTION_TYPE_CREATE_INTENT.SHOW_INTENT_ROW_ON_TRAINING_PHRASE_WHEN_FOCUSED:
        draft.loading = false;
        const initialTrainingPhrase = state.trainingPhase
          ? [...state.trainingPhase]
          : [];
        initialTrainingPhrase &&
          initialTrainingPhrase.map(x => {
            if (x.id === action.trainingPhraseId) {
              x.showIntentRow = true;
            } else {
              x.showIntentRow = false;
            }
          });
        draft.trainingPhase = initialTrainingPhrase;
        break;

      // intent parameter
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_INTENT_PARAMETER:
        draft.loading = false;
        const intentArray = state.intentParameter
          ? [...state.intentParameter]
          : [];
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
        draft.intentParameter = intentArray;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_INTENT_PARAMETER:
        draft.loading = false;
        const initialIntentData = [...state.intentParameter];
        const finalIntentData = initialIntentData.filter(
          x => x.id !== action.id,
        );
        // List of training phrases from which deleted intents are removed
        const phraseList = TrainingPhrasesWithoutRemovedIntent(
          state.trainingPhase,
          action.id,
        );
        phraseList.map(singleTrainingObject => {
          draft.trainingPhase = FuncToReturnUpdatedList(
            state.trainingPhase,
            singleTrainingObject.id,
            singleTrainingObject,
          );
        });

        // list of bot responses from which deleted intents are removed
        const responseList = BotResponsesWithoutRemovedIntent(
          state.botResponse,
          action.id,
        );

        draft.intentParameter = finalIntentData;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_INTENT_PARAMETER:
        draft.loading = false;
        draft.isIntentValidatedToBeCreated = true;
        const newIntentAttribute = state.intentParameter.filter(
          single =>
            single.id === action.key || single.id.toString() === action.key,
        )[0];
        if (action.id === 'botEntity') {
          newIntentAttribute.value.botEntity = {
            entityId: action.value.entityId,
            entityName: action.value.entityName,
          };
        } else if (action.id === 'resolvedValue') {
          const resolvedValueList = [];
          newIntentAttribute.value.resolvedValue.map(single =>
            resolvedValueList.push(single.value),
          );
          if (!resolvedValueList.includes(action.value)) {
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
            state.intentParameter,
          );
        }
        const otherIntentAttributes = state.intentParameter.filter(
          single => single.id !== newIntentAttribute.id,
        );
        otherIntentAttributes.splice(
          state.intentParameter.findIndex(
            single =>
              single.id === action.key || single.id.toString() === action.key,
          ),
          0,
          newIntentAttribute,
        );
        draft.intentParameter = otherIntentAttributes;
        break;
      case ACTION_TYPE_CREATE_INTENT.CHECK_IF_PARAM_NAME_ALREADY_EXISTS:
        draft.loading = false;
        const newIntent = state.intentParameter.filter(
          single =>
            single.id === action.intentId ||
            single.id.toString() === action.intentId,
        )[0];
        newIntent.paramNameAlreadyExist = action.bool;
        const otherIntent = state.intentParameter.filter(
          single => single.id !== newIntent.id,
        );
        otherIntent.splice(
          state.intentParameter.findIndex(
            single =>
              single.id === action.intentId ||
              single.id.toString() === action.intentId,
          ),
          0,
          newIntent,
        );
        draft.intentParameter = otherIntent;
        break;

      case ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_CREATE_INTENT.UPLOAD_INTENT_PARAMETER_ICON_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;

      // prompt
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_PROMPT_FIELD:
        draft.loading = false;
        const selectedIntentParam = state.intentParameter.filter(
          single => single.id === action.intentParamId,
        )[0];
        const promptFormData = {
          id: Math.random(),
          value: '',
        };
        selectedIntentParam.prompts.push(promptFormData);
        const otherIntentParam = state.intentParameter.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParam.splice(
          state.intentParameter.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParam,
        );
        draft.intentParameter = otherIntentParam;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_PROMPT_FIELD:
        draft.loading = false;
        const selectedIntentParamToRemovePrompt = state.intentParameter.filter(
          single => single.id === action.intentParamId,
        )[0];

        const finalPromptData = selectedIntentParamToRemovePrompt.prompts.filter(
          x => x.id !== action.promptId,
        );
        selectedIntentParamToRemovePrompt.prompts = finalPromptData;
        const otherIntentParams = state.intentParameter.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParams.splice(
          state.intentParameter.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParamToRemovePrompt,
        );
        draft.intentParameter = otherIntentParams;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_PROMPTS:
        draft.loading = false;
        // first filter the selected intent param row
        const selectedIntentParamObject = state.intentParameter.filter(
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
        const otherIntentParamObject = state.intentParameter.filter(
          single => single.id !== action.intentParamId,
        );
        otherIntentParamObject.splice(
          state.intentParameter.findIndex(
            single => single.id === action.intentParamId,
          ),
          0,
          selectedIntentParamObject,
        );
        draft.intentParameter = otherIntentParamObject;
        break;

      // fulfilment
      case ACTION_TYPE_CREATE_INTENT.ADD_FULFILMENT:
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
      case ACTION_TYPE_CREATE_INTENT.REMOVE_FULFILMENT:
        draft.loading = false;
        const initialFulfilmentData = [...state.fulfilment];
        const finalFulfilmentData = initialFulfilmentData.filter(
          x => x.id !== action.id,
        );
        draft.fulfilment = finalFulfilmentData;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_FULFILMENT_DATA:
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
      case ACTION_TYPE_CREATE_INTENT.SAVE_FULFILMENT:
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
      case ACTION_TYPE_CREATE_INTENT.ADD_RESPONSE_IN_FULFILMENT:
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
      case ACTION_TYPE_CREATE_INTENT.REMOVE_RESPONSE_IN_FULFILMENT:
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_API_PARAMETER_VALUE:
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_RESPONSE_IN_FULFILMENT:
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
      case ACTION_TYPE_CREATE_INTENT.CLEAR_ACTION_OBJECT:
        draft.loading = false;
        draft.objToAddAction = {
          actionName: '',
          actionType: '',
          selectedApi: { apiId: '', apiName: '' },
          paramMapping: [],
        };
        break;
      case ACTION_TYPE_CREATE_INTENT.ADD_ACTION:
        draft.loading = false;
        const a = {
          id: Math.random(),
          value: state.objToAddAction,
        };
        const initialAction = state.action ? [...state.action] : [];
        initialAction.push(a);
        draft.action = initialAction;
        break;
      case ACTION_TYPE_CREATE_INTENT.UPDATE_ACTION:
        draft.loading = false;
        draft.action = [
          {
            id: Math.random(),
            value: state.objToAddAction,
          },
        ];
        break;
      case ACTION_TYPE_CREATE_INTENT.REMOVE_ACTION:
        draft.loading = false;
        const initialActionData = state.action ? [...state.action] : [];
        const finalActionData = initialActionData.filter(
          x => x.id !== action.actionId,
        );
        draft.action = finalActionData;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_ACTION_IN_CREATE_ACTION_MODAL:
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_IN_API_PARAMETER_VALUE_IN_ACTION_MODAL:
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_OBJECT_TO_UPDATE_ACTION:
        draft.loading = false;
        draft.objToAddAction = action.actionId.value;
        break;

      // response
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_ADD_TEXT_RESPONSES:
        draft.loading = false;
        const botResponseArray = [...state.botResponse];
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_TEXT_RESPONSES:
        draft.loading = false;
        const initialResponseData = [...state.botResponse];
        const finalResponse = initialResponseData.filter(
          x => x.botResponseId !== action.botResponseId,
        );
        draft.botResponse = finalResponse;
        break;
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_TO_REMOVE_RESPONSES:
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
      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_BOT_RESPONSE:
        draft.loading = false;
        const selectedBotResponse = state.botResponse.filter(
          single => single.botResponseId === action.botResponseId,
        )[0];
        const newResponseAttribute = selectedBotResponse.response.filter(
          single => single.id === action.key,
        )[0];

        if (
          selectedBotResponse.response[selectedBotResponse.response.length - 1]
            .id === newResponseAttribute.id &&
          selectedBotResponse.response[selectedBotResponse.response.length - 1]
            .value.response === ''
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
        newResponseAttribute.value[action.id] = action.value;
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

      case ACTION_TYPE_CREATE_INTENT.HANDLE_CHANGE_PLAIN_BOT_RESPONSE:
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

      case ACTION_TYPE_CREATE_INTENT.SELECT_INTENT_PARAM_ID_FOR_BOT_RESPONSE:
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
          state.intentParameter,
          state.fulfilment,
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

      // create
      case ACTION_TYPE_CREATE_INTENT.VALIDATE_INTENT:
        // entity missing /prompt missing ==> isIntentValidatedToBeCreated=true
        const isAllRequiredPromptsChecked = [];
        state.intentParameter.map(single => {
          single.value.required === true && single.value.prompts.length === 0
            ? isAllRequiredPromptsChecked.push(false)
            : isAllRequiredPromptsChecked.push(true);
        });

        isAllRequiredPromptsChecked.includes(false)
          ? (draft.isIntentValidatedToBeCreated = false)
          : null;
        break;
      case ACTION_TYPE_CREATE_INTENT.CREATE_INTENT:
        draft.loading = false;
        // training phrases
        draft.trainingPhrases = MapTrainingPhraseToIntegrateAPI(
          state.trainingPhase,
          state.intentParameter,
        );
        // intent parameters
        const intentArrayList = state.intentParameter;
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
            state.intentParam.push(a);
          }
        });

        // fulfilment
        const finalFulfilmentList = [];
        const fulfilmentList = state.fulfilment ? [...state.fulfilment] : [];
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
            finalFulfilmentList.push(a);
          }
        });
        draft.fulfillments = finalFulfilmentList;

        // action
        const finalAction = [];
        const actionList = state.action ? [...state.action] : [];
        actionList &&
          actionList.map(single => {
            if (single.value.actionType === '1') {
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
            } else if (single.value.actionType === '2') {
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
        state.intentParameter.map(single =>
          intentParamIdList.push(single.id.toString()),
        );
        const fulfilmentIdList = [];
        state.fulfilment.map(single =>
          fulfilmentIdList.push(single.id.toString()),
        );

        const responseEntityList = [];
        const botResponseData = [];
        const responseArray = state.botResponse;
        responseArray.map(singleBotResponse => {
          const a = [];
          const singleResponse = singleBotResponse.response.filter(
            single =>
              single.value.response !== '' &&
              single.value.response.replace(/\s/g, '').length !== 0,
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
                  const selectedIntentParam = state.intentParameter.filter(
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
            a.push(b);
          });
          const intentResponse = {
            intentResponses: a,
          };
        if(a && a.length > 0) {
          botResponseData.push(intentResponse);
        }
        });
        draft.intentResponse = botResponseData;

        // formatting of response entity
        if (responseEntityList.length > 0) {
          const a = [...new Set(responseEntityList)];
          a.map(singleIntentID => {
            if (intentParamIdList.includes(singleIntentID)) {
              const selectedIntentParam = state.intentParameter.filter(
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

      case ACTION_TYPE_CREATE_INTENT.CREATE_INTENT_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_CREATE_INTENT.CREATE_INTENT_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_CREATE_INTENT.CLEAR_INTENT_DATA:
        draft.loading = false;
        const clearTrainingData = [
          {
            id: Math.random(),
            intentParamIdForTrainingPhrase: [],
            displayStr: '',
            showIntentRow: false,
            value: {
              text: '',
              textValue: '',
            },
          },
        ];
        const clearResponseData = [
          {
            botResponseId: Math.random(),
            response: [
              {
                id: Math.random(),
                intentParamIdForBotResponse: [],
                value: {
                  response: '',
                  responseValue: '',
                },
              },
            ],
          },
        ];
        draft.intentName = '';
        draft.trainingPhase = clearTrainingData;
        draft.intentParameter = [];
        draft.fulfilment = [];
        draft.botResponse = clearResponseData;
        draft.trainingPhrases = [];
        draft.intentParam = [];
        draft.fulfillments = [];
        draft.responseEntity = [];
        draft.intentResponse = [];
        draft.action = [];
        draft.objToAddAction = {
          actionName: '',
          actionType: '',
          selectedApi: { apiId: '', apiName: '' },
          paramMapping: [],
        };
        draft.botAction = [];
        break;
      case ACTION_TYPE_CREATE_INTENT.CLEAR_INTENT_API_DATA:
        draft.loading = false;
        draft.trainingPhrases = [];
        draft.intentParam = [];
        draft.fulfillments = [];
        draft.responseEntity = [];
        draft.intentResponse = [];
        break;
      case ACTION_TYPE_CREATE_INTENT.CLEAR_PROMPT_VALUE:
        draft.loading = false;
        const clearPromptData = [{ id: Math.random(), value: '' }];
        draft.prompts = clearPromptData;
        break;
      default:
        break;
    }
  });

export default createIntentPageReducer;

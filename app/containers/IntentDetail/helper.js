import { replaceAll } from '../CreateIntentPage/helperFile';
import { EscapeHtml, UnescapeHtml } from '../../utils/helper';

const mapIntentParameter = intentParamList => {
  const intentParam = [];
  intentParamList &&
    intentParamList.map(single => {
      const promptArray = [];
      const promptsElements = [];
      single.prompts.length > 0 &&
        single.prompts.map(singlePrompt => {
          if (singlePrompt !== '') {
            const promptObj = {
              id: Math.random(),
              value: singlePrompt,
            };
            promptArray.push(promptObj);
            promptsElements.push(singlePrompt);
          }
        });
      const a = {
        id: single.intentParamId,
        customId: single.botEntity.entityId,
        prompts: promptArray,
        isPromptRequired: false,
        paramNameAlreadyExist: false,
        value: {
          paramName: single.paramName,
          orderIndex: single.orderIndex,
          iconUrl: single.iconUrl ? single.iconUrl : '',
          botEntity: single.botEntity,
          defaultValue: single.defaultValue,
          possibleValue: single.possibleValue,
          required: single.required ? single.required : false,
          prompts: promptsElements,
          resolvedValue: single.resolvedValue
            ? ConvertMapToArray(single.resolvedValue)
            : [],
        },
      };
      intentParam.push(a);
    });
  return intentParam.sort((a, b) => a.value.orderIndex - b.value.orderIndex);
};
export const MapIntentParameter = mapIntentParameter;

const mapTrainingPhrase = (intentParamList, phraseList) => {
  const trainingList = phraseList;
  intentParamList &&
    intentParamList.map(singleIntent => {
      phraseList.map(singlePhrase => {
        // replace param name
        singlePhrase.displayStr = replaceAll(
          singlePhrase.displayStr,
          singleIntent.id,
          `@${singleIntent.value.paramName}`,
        );

        singlePhrase.value.text = replaceAll(
          singlePhrase.value.text,
          singleIntent.id,
          `[@${singleIntent.value.paramName}](${singleIntent.id})`,
        );
        if (
          singlePhrase.value.text &&
          (singlePhrase.value.text.includes(singleIntent.id) ||
            singlePhrase.value.text.includes(singleIntent.id.toString()))
        ) {
          singlePhrase.intentParamIdForTrainingPhrase.push(singleIntent.id);
        }
      });

      // replace resolved value
      singleIntent.value.resolvedValue.length > 0 &&
        singleIntent.value.resolvedValue.map(singleResolvedValue => {
          phraseList.map(singlePhrase => {
            singlePhrase.displayStr = EscapeHtml(
              replaceAll(
                singlePhrase.displayStr,
                singleResolvedValue.id,
                `$${singleResolvedValue.value}`,
              ),
            );
            if (
              singleResolvedValue &&
              singleResolvedValue.value.charAt([0]) === '$'
            ) {
              singlePhrase.value.text = EscapeHtml(
                replaceAll(
                  singlePhrase.value.text,
                  singleResolvedValue.id,
                  `[$$${singleResolvedValue.value}](${singleIntent.id})`,
                ),
              );
            } else {
              singlePhrase.value.text = EscapeHtml(
                replaceAll(
                  singlePhrase.value.text,
                  singleResolvedValue.id,
                  `[$${singleResolvedValue.value}](${singleIntent.id})`,
                ),
              );
            }

            if (
              singlePhrase.value.text &&
              (singlePhrase.value.text.includes(singleIntent.id) ||
                singlePhrase.value.text.includes(singleIntent.id.toString()))
            ) {
              singlePhrase.intentParamIdForTrainingPhrase.push(singleIntent.id);
            }
          });
        });
    });
  if (trainingList[trainingList.length - 1].value.text !== '') {
    const a = {
      id: Math.random(),
      intentParamIdForTrainingPhrase: [],
      value: {
        text: '',
      },
    };
    trainingList.push(a);
  }
  return trainingList;
};
export const MapTrainingPhrase = mapTrainingPhrase;

const mapBotResponse = (intentParamList, responseList, fulfilmentList) => {
  const mappedResponse = [];
  responseList.map(singleResponse => {
    const intentResponses = [];
    singleResponse && singleResponse.intentResponses && singleResponse.intentResponses.map(singleTextResponse => {
      const b = {
        id: singleTextResponse.intentResponseId,
        intentParamIdForBotResponse: [],
        value: {
          response: singleTextResponse.response
            ? UnescapeHtml(singleTextResponse.response)
            : '',
          responseValue: singleTextResponse.response
            ? UnescapeHtml(singleTextResponse.response)
            : '',
        },
      };
      intentResponses.push(b);
    });

    const a = {
      botResponseId: singleResponse.botResponseId,
      response: intentResponses,
    };
    mappedResponse.push(a);
  });

  // map intentId to param name
  intentParamList &&
    intentParamList.map(singleIntent => {
      mappedResponse.map(singleBot => {
        singleBot.response.map((singleResponse, index) => {
          const filteredResponse = singleResponse;
          if (
            filteredResponse.value.response &&
            (filteredResponse.value.response.includes(singleIntent.id) ||
              filteredResponse.value.response.includes(
                singleIntent.id.toString(),
              ))
          ) {
            filteredResponse.intentParamIdForBotResponse.push(singleIntent.id);
          }
          filteredResponse.value.response = EscapeHtml(
            replaceAll(
              filteredResponse.value.response,
              singleIntent.id,
              `$[$${singleIntent.value.paramName}](${singleIntent.id})`,
            ),
          );
        });
      });
    });

  fulfilmentList &&
    fulfilmentList.map(singleFulfilment => {
      singleFulfilment.value.response.map(singleRes => {
        mappedResponse.map(singleBot => {
          singleBot.response.map((singleResponse, index) => {
            const filteredResponse = singleResponse;
            if (
              (filteredResponse.value.response &&
                filteredResponse.value.response.includes(singleRes.id)) ||
              (filteredResponse.value.response &&
                filteredResponse.value.response.includes(
                  singleRes.id.toString(),
                ))
            ) {
              filteredResponse.intentParamIdForBotResponse.push(singleRes.id);
            }
            filteredResponse.value.response = replaceAll(
              filteredResponse.value.response,
              singleRes.id,
              `$[$${singleFulfilment.value.fulfilmentName}-${
                singleRes.value.name
              }](${singleRes.id})`,
            );
            if (
              index === singleBot.response.length - 1 &&
              filteredResponse.value.response !== ''
            ) {
              const b = {
                id: Math.random(),
                intentParamIdForBotResponse: [],
                value: {
                  response: '',
                },
              };
              singleBot.response.push(b);
            }
          });
        });
      });
    });
  mappedResponse &&
    mappedResponse.map(singleRes => {
      if (
        singleRes.response[singleRes.response.length - 1] && singleRes.response[singleRes.response.length - 1].value.response !== ''
      ) {
        const b = {
          id: Math.random(),
          intentParamIdForBotResponse: [],
          value: {
            response: '',
          },
        };
        singleRes.response.push(b);
      }
    });
  return mappedResponse;
};
export const MapBotResponse = mapBotResponse;

const mapFulfillment = (fulfilment, intentParameter, apiList) => {
  const fulfilmentArray = [];
  let a = { id: Math.random(), value: { name: '', value: '' } };
  fulfilment &&
    fulfilment.map(singleFulfilment => {
      // const selectedApi =
      //   apiList &&
      //   apiList.filter(
      //     singleApi => singleApi.apiId === singleFulfilment.thirdPartyApi.apiId,
      //   );
      // // console.log({ selectedApi });
      const responseArray = [];
      singleFulfilment.responses &&
        singleFulfilment.responses.map(singleRes => {
          const a = {
            id: singleRes.id,
            value: {
              name: singleRes.name,
              key: singleRes.key,
            },
          };
          responseArray.push(a);
        });
      const a = {
        id: singleFulfilment.fulfillmentId,
        display: true,
        value: {
          fulfilmentName: singleFulfilment.name,
          selectedApi: {
            apiId: singleFulfilment.thirdPartyApi.apiId,
            apiName: singleFulfilment.thirdPartyApi.title,
          },
          paramMapping: ConvertParamMapToArray(
            singleFulfilment.thirdPartyApi.apiParameters,
            singleFulfilment.paramMapping,
            intentParameter,
          ),
          response: responseArray,
        },
      };
      fulfilmentArray.push(a);
    });
  return fulfilmentArray;
};
export const MapFulfillment = mapFulfillment;

const mapActionType = actionType => {
  if (actionType === '1' || actionType === 'API_CALL') {
    return 1;
  }
  if (actionType === '2' || actionType === 'CREATE_TICKET') {
    return 2;
  }
  return actionType;
};
const mapAction = (action, intentParameter, api) => {
  const actionArray = [];
  action &&
    action.map(singleAction => {
      const a = {
        id: singleAction.id,
        value: {
          actionName: singleAction.name,
          actionType: mapActionType(singleAction.type),
          selectedApi: {
            apiId: singleAction.api ? singleAction.api.apiId : '',
            apiName: singleAction.api ? singleAction.api.title : '',
          },
          paramMapping: singleAction.param
            ? ConvertParamMapToArrayForAction(
                singleAction.param,
                intentParameter,
                api,
                singleAction.api ? singleAction.api.apiId : '',
              )
            : [],
        },
      };
      actionArray.push(a);
    });
  return actionArray;
};
export const MapAction = mapAction;

const convertParamMapToArrayForAction = (
  mapData,
  intentParameter,
  api,
  selectedApiId,
) => {
  const map = new Map(Object.entries(mapData));
  const resolvedValueArr = [];
  map.forEach((value, key, map) => {
    const filteredIntent =
      intentParameter &&
      intentParameter.filter(
        singleIntent => singleIntent.id.toString() === value,
      )[0];
    const filteredApi =
      api && api.filter(singleApi => singleApi.apiId === selectedApiId)[0];
    const filteredApiParam =
      filteredApi &&
      filteredApi.apiParameters &&
      filteredApi.apiParameters.filter(
        singleParam => singleParam.apiParameterId === key,
      )[0];
    const b = {
      id: Math.random(),
      value: {
        id: filteredApiParam ? filteredApiParam.apiParameterId : '',
        name: filteredApiParam ? filteredApiParam.key : '',
        value: filteredIntent && filteredIntent.value.paramName,
      },
    };
    resolvedValueArr.push(b);
  });
  return resolvedValueArr;
};
export const ConvertParamMapToArrayForAction = convertParamMapToArrayForAction;

const convertMapToArray = mapData => {
  const map = new Map(Object.entries(mapData));
  const resolvedValueArr = [];
  map.forEach((value, key, map) => {
    const b = {
      id: key,
      value,
    };
    resolvedValueArr.push(b);
  });
  return resolvedValueArr;
};
export const ConvertMapToArray = convertMapToArray;

const convertParamMapToArray = (apiParameters, mapData, intentParameter) => {
  console.log({ mapData });
  const resolvedValueArr = [];
  const map = mapData && new Map(Object.entries(mapData));
  const getIntentId = singleParam => {
    let intentId;
    map &&
      map.forEach((value, key) => {
        if (singleParam.key === key) {
          intentId = value;
        }
      });
    return intentId;
  };

  apiParameters &&
    apiParameters.map(singleParam => {
      const filteredIntent =
        intentParameter &&
        intentParameter.filter(
          singleIntent =>
            singleIntent.id.toString() === getIntentId(singleParam),
        )[0];

      if (singleParam.type === 'RESOLVE') {
        const b = {
          id: Math.random(),
          value: {
            name: singleParam.key,
            value: filteredIntent && filteredIntent.value.paramName,
          },
        };
        resolvedValueArr.push(b);
      }
    });
  return resolvedValueArr;
};
export const ConvertParamMapToArray = convertParamMapToArray;

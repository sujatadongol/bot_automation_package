// function to change param names in training phrase when changed in param name
const changeInTrainingPhrase = (str, intentParamList, trigger) => {
  let newString = str;

  ExtractWordContainingParam(str).map((single, index) => {
    if (
      GetFilteredIntent(ExtractWordInsideBracket(single), intentParamList) !==
      undefined
    ) {
      if (!single.includes('$')) {
        newString = newString.replace(
          single,
          `[@${
            GetFilteredIntent(ExtractWordInsideBracket(single), intentParamList)
              .value.paramName
          }](${ExtractWordInsideBracket(single)})`,
        );
      }
    }
  });

  // to format resolved value based on {R}
  ExtractWordContainingResolveValue(str).map((singleR, index) => {
    if (
      GetFilteredIntent(
        ExtractWordInsideBracket(singleR),
        intentParamList,
        singleR,
      ) !== undefined
    ) {
      if (trigger.charAt([0]) === '$') {
        newString = newString.replace(
          singleR,
          `[$$${trigger}](${ExtractWordInsideBracket(singleR)})`,
        );
      } else {
        newString = newString.replace(
          singleR,
          `[$${trigger}](${
            GetFilteredIntent(
              ExtractWordInsideBracket(singleR),
              intentParamList,
              singleR,
            ).id
          })`,
        );
      }
    }
  });
  return newString;
};
export const ChangeInTrainingPhrase = changeInTrainingPhrase;

const getFilteredIntent = (intentId, intentParamList, string) => {
  let filteredIntent;
  intentParamList.filter(single => {
    if (
      single.id.toString() === intentId.toString() ||
      single.value.paramName === ExtractWordInsideSquareBracket(string)
    ) {
      filteredIntent = single;
    }
  });
  return filteredIntent;
};
export const GetFilteredIntent = getFilteredIntent;

const extractWordInsideBracket = data => {
  const regExp = /\(([^)]+)\)/; // regex to get id which is inside ()
  return regExp.exec(data)[1];
};
export const ExtractWordInsideBracket = extractWordInsideBracket;
const extractWordInsideSquareBracket = data => {
  // let regExp = /\[([.)]+)\]/;
  const regExp = /\[([^]+)\]/; // regex to get id which is inside []
  if (regExp.exec(data)) {
    return regExp.exec(data)[1];
  }
};
export const ExtractWordInsideSquareBracket = extractWordInsideSquareBracket;

const extractWordContainingParam = str => {
  const rx = /\[[^\]]+\]\([^\)]+\)(?!{R})/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[0];
    if (data !== undefined) {
      res.push(data);
    }
  }
  return res;
};
export const ExtractWordContainingParam = extractWordContainingParam;

const extractWordContainingResolveValue = str => {
  const rx = /\[[^\]]+]\([^\)]+\){R}/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[0];
    res.push(data);
  }
  return res;
};
export const ExtractWordContainingResolveValue = extractWordContainingResolveValue;

// find last word
function findLastWord(words) {
  const n = words.split(' ');
  return n[n.length - 1];
}
export const FindLastWord = findLastWord;

/* <--Remove intent param from particular training phrase--> */
const removeIntentParamFormParticularPhrase = (
  trainingPhrase,
  removedIntentId,
  paramName,
  resolvedValue,
) => {
  if (trainingPhrase.value.text.includes(removedIntentId)) {
    let paramWordToRemove;
    let resolvedValueToRemove;
    ExtractWordContainingParam(trainingPhrase.value.text).map(
      (single, index) => {
        if (ExtractWordInsideBracket(single) === removedIntentId.toString()) {
          if (
            resolvedValue &&
            ExtractWordInsideSquareBracket(single) === `$${resolvedValue}`
          ) {
            resolvedValueToRemove = single;
          } else if (
            paramName &&
            ExtractWordInsideSquareBracket(single) === `@${paramName}`
          ) {
            paramWordToRemove = single;
          }
        }
      },
    );
    ExtractWordContainingParamInResponse(trainingPhrase.value.text).map(
      (single, index) => {
        if (ExtractWordInsideBracket(single) === removedIntentId.toString()) {
          resolvedValueToRemove = single;
        }
      },
    );
    if (paramWordToRemove !== undefined) {
      trainingPhrase.value.text = replaceAll(
        trainingPhrase.value.text,
        paramWordToRemove,
        ExtractWordInsideSquareBracket(paramWordToRemove) &&
          ExtractWordInsideSquareBracket(paramWordToRemove).substring(1),
      );
    }
    if (resolvedValueToRemove !== undefined) {
      trainingPhrase.value.text = replaceAll(
        trainingPhrase.value.text,
        resolvedValueToRemove,
        ExtractWordInsideSquareBracket(resolvedValueToRemove) &&
          ExtractWordInsideSquareBracket(resolvedValueToRemove).substring(1),
      );
    }

    // remove intent id from intentParamIdForTrainingPhrase
    function removeItemOnce(arr, value) {
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
    const filteredIntentParamId = removeItemOnce(
      trainingPhrase.intentParamIdForTrainingPhrase,
      removedIntentId,
    );
    trainingPhrase.intentParamIdForTrainingPhrase = filteredIntentParamId || [];

    return trainingPhrase;
  }
};
export const RemoveIntentParamFormParticularPhrase = removeIntentParamFormParticularPhrase;

export function replaceAll(str, term, replacement) {
  if (str) {
    return str.replace(
      new RegExp(escapeRegExp(term.toString()), 'g'),
      replacement,
    );
  }
  return '';
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* <--while removing intent params from intent parameter --> */
// get list of updated training phases
const trainingPhrasesWithoutRemovedIntent = (
  trainingPhaseList,
  removedIntentId,
) => {
  const updatedTrainingPhrasesList = [];
  TrainingPhraseArrayContainingIntentId(trainingPhaseList, removedIntentId).map(
    singlePhrase => {
      updatedTrainingPhrasesList.push(
        RemoveAllIntentParams(singlePhrase, removedIntentId),
      );
    },
  );
  return updatedTrainingPhrasesList;
};
export const TrainingPhrasesWithoutRemovedIntent = trainingPhrasesWithoutRemovedIntent;

const removeAllIntentParams = (trainingPhrase, removedIntentId) => {
  if (trainingPhrase.value.text.includes(removedIntentId)) {
    let paramWordToRemove;
    let resolvedValueToRemove;
    ExtractWordContainingParam(trainingPhrase.value.text).map(
      (single, index) => {
        if (
          ExtractWordInsideSquareBracket(single) &&
          ExtractWordInsideSquareBracket(single).charAt([0]) === '@' &&
          ExtractWordInsideBracket(single) === removedIntentId.toString()
        ) {
          paramWordToRemove = single;
        }
        if (
          ExtractWordInsideSquareBracket(single) &&
          ExtractWordInsideSquareBracket(single).charAt([0]) === '$' &&
          ExtractWordInsideBracket(single) === removedIntentId.toString()
        ) {
          resolvedValueToRemove = single;
        }
      },
    );
    if (paramWordToRemove !== undefined) {
      trainingPhrase.value.text = replaceAll(
        trainingPhrase.value.text,
        paramWordToRemove,
        ExtractWordInsideSquareBracket(paramWordToRemove) &&
          ExtractWordInsideSquareBracket(paramWordToRemove).substring(1),
      );
    }
    if (resolvedValueToRemove !== undefined) {
      trainingPhrase.value.text = replaceAll(
        trainingPhrase.value.text,
        resolvedValueToRemove,
        ExtractWordInsideSquareBracket(resolvedValueToRemove) &&
          ExtractWordInsideSquareBracket(resolvedValueToRemove).substring(1),
      );
    }
    return trainingPhrase;
  }
};
export const RemoveAllIntentParams = removeAllIntentParams;

// get list of training phrases that includes the intent param object which is clicked to remove
const trainingPhraseArrayContainingIntentId = (
  trainingPhaseList,
  removedIntentId,
) => {
  const trainingPhraseArrayContainingRemovedIntent = [];
  trainingPhaseList &&
    trainingPhaseList.filter(singleTrainingPhrase => {
      singleTrainingPhrase.intentParamIdForTrainingPhrase.includes(
        removedIntentId,
      ) === true
        ? trainingPhraseArrayContainingRemovedIntent.push(singleTrainingPhrase)
        : null;
    });
  return trainingPhraseArrayContainingRemovedIntent;
};
export const TrainingPhraseArrayContainingIntentId = trainingPhraseArrayContainingIntentId;

// get list of updated bot responses
const botResponsesWithoutRemovedIntent = (botResponseList, removedIntentId) => {
  const updatedResponsesList = [];
  botResponseList &&
    botResponseList.map(singleResponseBlock => {
      singleResponseBlock.response.map(single => {
        if (
          single.intentParamIdForBotResponse.includes(
            removedIntentId.toString(),
          ) === true
        ) {
          let wordToRemove;
          ExtractWordContainingParamInResponse(single.value.response).map(
            (singleExtractedWord, index) => {
              const regExp = /\(([^)]+)\)/; // regex to get id which is inside ()
              const intentId = regExp.exec(singleExtractedWord)[1];
              if (intentId === removedIntentId.toString()) {
                wordToRemove = singleExtractedWord;
              }
            },
          );
          single.value.response = replaceAll(
            single.value.response,
            wordToRemove,
            '',
          );
          single.intentParamIdForBotResponse = single.intentParamIdForBotResponse.filter(
            single => single !== removedIntentId.toString(),
          );
        }
      });
    });
  return updatedResponsesList;
};
export const BotResponsesWithoutRemovedIntent = botResponsesWithoutRemovedIntent;

// for bot response
// function to change param names in training phrase when changed in param name
const changeInResponse = (str, intentParamList, fulfilmentList) => {
  let newString = str;
  ExtractWordContainingParamInResponse(str).map((single, index) => {
    const regExp = /\(([^)]+)\)/; // regex to get id which is inside ()
    const intentId = regExp.exec(single)[1];
    let filteredIntent;
    let filteredFulfilment;
    // intent
    intentParamList.filter(single => {
      single.id.toString() === intentId ? (filteredIntent = single) : null;
    });
    // fulfilment
    fulfilmentList &&
      fulfilmentList.map(single => {
        single.value.response.map(singleRes => {
          if (singleRes.id.toString() === intentId) {
            filteredFulfilment = {
              fulfilmentName: single.value.fulfilmentName,
              responseName: singleRes.value.name,
            };
          }
        });
      });
    if (filteredIntent !== undefined) {
      newString = newString.replace(
        single,
        `$[$${filteredIntent.value.paramName}](${intentId})`,
      );
    } else if (filteredFulfilment !== undefined) {
      newString = newString.replace(
        single,
        `$[$${filteredFulfilment.fulfilmentName} - ${
          filteredFulfilment.responseName
        }](${intentId})`,
      );
    }
  });

  return newString;
};
export const ChangeInResponse = changeInResponse;

const extractWordContainingParamInResponse = str => {
  const rx = /(?:^|\s)(\$\[(.*?)\]\((.*?)\))/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[1];
    res.push(data);
  }
  return res;
};
export const ExtractWordContainingParamInResponse = extractWordContainingParamInResponse;

const extractUUIDFromString = str => {
  const rx = /[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[0];
    res.push(data);
  }
  return res;
};
export const ExtractUUIDFromString = extractUUIDFromString;

const mapTrainingPhraseToIntegrateAPI = (trainingPhrase, intentParameter) => {
  const trainingPhrasesData = [];
  trainingPhrase.map(single => {
    if (single.value.text !== '') {
      const resolvedValueArray = [];

      single.intentParamIdForTrainingPhrase.map(
        singleIntentParamIdOfTrainingPhrase => {
          const selectedIntentParam = intentParameter.filter(
            singleIntentParam =>
              singleIntentParam.id === singleIntentParamIdOfTrainingPhrase ||
              singleIntentParam.id.toString() ===
                singleIntentParamIdOfTrainingPhrase,
          )[0];
          resolvedValueArray.push(selectedIntentParam);
        },
      );
      let { text } = single.value;

      // extract resolve word, i.e word containing $ and replace it with corresponding id
      ExtractWordContainingParam(single.value.text).map(
        resolvedValueToReplace => {
          const regExp = /\(([^)]+)\)/; // regex to get id which is inside ()
          const intentId = regExp.exec(resolvedValueToReplace)[1];
          const regExpToGetResolvedValue = /\[([^]+)\]/; // regex to get id which is inside ()
          const data = regExpToGetResolvedValue.exec(resolvedValueToReplace)[1]; // data inside [ ]
          if (resolvedValueToReplace.includes('$')) {
            resolvedValueArray.length > 0 &&
              resolvedValueArray.map(singleObj => {
                if (
                  singleObj &&
                  (singleObj.id === intentId ||
                    singleObj.id.toString() === intentId)
                ) {
                  singleObj.value.resolvedValue.map(singleValue => {
                    if (`$${singleValue.value}` === data) {
                      text = text.replace(
                        resolvedValueToReplace,
                        singleValue.id,
                      );
                    }
                  });
                }
              });
          } else {
            resolvedValueArray.length > 0 &&
              resolvedValueArray.map(singleObj => {
                if (
                  singleObj &&
                  (singleObj.id === intentId ||
                    singleObj.id.toString() === intentId)
                ) {
                  text = text.replace(resolvedValueToReplace, data);
                }
              });
          }
        },
      );
      if (single.id.toString().includes('.')) {
        const a = {
          text: text ? text.replace(/  +/g, ' ') : '',
        };
        if (a.text !== '' && a.text.replace(/\s/g, '').length !== 0) {
          return trainingPhrasesData.push(a);
        }
      } else {
        const a = {
          phraseId: single.id,
          text: text ? text.replace(/  +/g, ' ') : '',
        };
        if (a.text !== '' && a.text.replace(/\s/g, '').length !== 0) {
          return trainingPhrasesData.push(a);
        }
      }
    }
  });

  return trainingPhrasesData;
};
export const MapTrainingPhraseToIntegrateAPI = mapTrainingPhraseToIntegrateAPI;

// get position of cursor of input element to popover
const getCursorXY = (input, selectionPoint) => {
  const { offsetLeft: inputX, offsetTop: inputY } = input;
  // create a dummy element that will be a clone of our input
  const div = document.createElement('div');
  // get the computed style of the input and clone it onto the dummy element
  const copyStyle = getComputedStyle(input);
  for (const prop of copyStyle) {
    div.style[prop] = copyStyle[prop];
  }
  // we need a character that will replace whitespace when filling our dummy element if it's a single line <input/>
  const swap = '.';
  const inputValue =
    input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value;
  // set the div content to that of the textarea up until selection
  const textContent = inputValue.substr(0, selectionPoint);
  // set the text content of the dummy element div
  div.textContent = textContent;
  if (input.tagName === 'TEXTAREA') div.style.height = 'auto';
  // if a single line input then the div needs to be single line and not break out like a text area
  if (input.tagName === 'INPUT') div.style.width = 'auto';
  // create a marker element to obtain caret position
  const span = document.createElement('span');
  // give the span the textContent of remaining content so that the recreated dummy element is as close as possible
  span.textContent = inputValue.substr(selectionPoint) || '.';
  // append the span marker to the div
  div.appendChild(span);
  // append the dummy element to the body
  document.body.appendChild(div);
  // get the marker position, this is the caret position top and left relative to the input
  const { offsetLeft: spanX, offsetTop: spanY } = span;
  // lastly, remove that dummy element
  // NOTE:: can comment this out for debugging purposes if you want to see where that span is rendered
  document.body.removeChild(div);
  // return an object with the x and y of the caret. account for input positioning so that you don't need to wrap the input
  return {
    x: inputX + spanX,
    y: inputY + spanY,
  };
};
export const GetCursorXY = getCursorXY;

// get current index of cursor
const giveSelectionStart = e => {
  // grab properties of event we are interested in
  const { currentTarget: input } = e;
  // grab properties of input that we are interested in
  const { selectionStart } = input;
  return selectionStart;
};
export const GiveSelectionStart = giveSelectionStart;

// to replace a character of specific index
const replaceSpecificIndex = (str, index, replacement) => {
  String.prototype.insert = function(index, string) {
    if (index > 0) {
      return (
        this.substring(0, index) + string + this.substring(index, this.length)
      );
    }
    return string + this;
  };
  return str.insert(index, replacement);
};
export const ReplaceSpecificIndex = replaceSpecificIndex;

// mapping text response after clicking option
const mapOptionsInTextResponse = () => {};
export const MapOptionsInTextResponse = mapOptionsInTextResponse;

// change param name in training phrase when changed in intent param
const changeParamInTrainingPhrase = (
  intentId,
  trainingPhraseList,
  intentList,
) => {
  TrainingPhraseArrayContainingIntentId(trainingPhraseList, intentId).map(
    singlePhrase => {
      ExtractWordContainingParam(singlePhrase.value.text).map(
        singleExtractedWord => {
          if (
            !singleExtractedWord.includes('$') &&
            ExtractWordInsideBracket(singleExtractedWord) ===
              intentId.toString()
          ) {
            singlePhrase.value.text = replaceAll(
              singlePhrase.value.text,
              singleExtractedWord,
              `[@${
                FilteredIntentParam(intentList, intentId).value.paramName
              }](${intentId})`,
            );
          }
        },
      );
    },
  );
};
export const ChangeParamInTrainingPhrase = changeParamInTrainingPhrase;

const filteredIntentParam = (intentParamList, selectedIntentId) => {
  let filteredIntentObj;
  intentParamList &&
    intentParamList.map(singleIntent => {
      singleIntent.id.toString() === selectedIntentId.toString()
        ? (filteredIntentObj = singleIntent)
        : null;
    });
  return filteredIntentObj;
};
export const FilteredIntentParam = filteredIntentParam;

const paramNameExists = (arr, name) =>
  arr &&
  arr.some(function(el) {
    return el.value.paramName === name;
  });
export const ParamNameExists = paramNameExists;

const getIntentId = (intentParam, paramName, entityId) => {
  if (ParamNameExists(intentParam, paramName)) {
    let intentId;
    intentParam &&
      intentParam.filter(singleParam => {
        if (singleParam.value.paramName === paramName) {
          intentId = singleParam.id;
        }
      });
    return intentId;
  }
  return entityId;
};
export const GetIntentId = getIntentId;

// check if the given id is intent or entity; intent id is needed
const getIdToParse = (str, intentParamList) => {
  let text = str;
  const idExists = (arr, id) =>
    arr &&
    arr.some(function(el) {
      return el.id === id;
    });
  if (idExists(intentParamList, ExtractWordInsideBracket(str))) {
    text = str;
  } else {
    let id;
    intentParamList &&
      intentParamList.map(singleIntent => {
        if (
          singleIntent.value.paramName === ExtractWordInsideSquareBracket(str)
        ) {
          id = singleIntent.id;
        }
      });
    text = `[${ExtractWordInsideSquareBracket(str)}](${id}){R}`;
  }
  return text;
};
export const GetIdToParse = getIdToParse;

const getFinalResolvedValueList = intentParamWithResolvedValue => {
  const finalMappedResolvedValueList = [];
  intentParamWithResolvedValue.length > 0 &&
    intentParamWithResolvedValue.map(
      singleRow =>
        singleRow &&
        singleRow.value &&
        singleRow.value.resolvedValue &&
        singleRow.value.resolvedValue.map(singleValue =>
          finalMappedResolvedValueList.push({
            intentId: singleRow.id,
            paramName: singleRow.value.paramName,
            entityName:
              singleRow.value.botEntity && singleRow.value.botEntity.entityName,
            resolvedValue: singleValue.value,
          }),
        ),
    );
  return finalMappedResolvedValueList;
};
export const GetFinalResolvedValueList = getFinalResolvedValueList;

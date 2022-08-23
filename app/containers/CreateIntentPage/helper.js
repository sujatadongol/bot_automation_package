// to find the index of a word
// extract word containing @
import {
  CountOccurrencesOfAllElement,
  FindCommonElementInTwoArray,
} from '../../utils/helper';

function findIndexOfWord(str, word) {
  const arr = [];
  const wordLength = word.split(' ').length;
  let position = 0;
  str
    .split(word)
    .slice(0, -1)
    .forEach(function(value, i) {
      position += value.trim().split(' ').length;
      position += i > 0 ? wordLength : 0;
      arr.push(position);
    });
  return arr;
}

export const FindIndexOfWord = findIndexOfWord;

const findIndexOfWordOnBasisOfCharIndex = (str, charIndex) => {
  let w = 0;
  for (let i = 0; i < charIndex; i++) {
    if (str[i] === ' ') {
      w += 1;
    }
  }
  return w;
};
export const FindIndexOfWordOnBasisOfCharIndex = findIndexOfWordOnBasisOfCharIndex;

const replaceWordForResolvedValue = (
  displayStr,
  backgroundStr,
  charIndex,
  wordToWrapWithBracket,
) => {
  // convert string to array
  const arrayOfString = backgroundStr.split(' ');
  const wordToReplace = FindIndexOfWordOnBasisOfCharIndex(
    displayStr,
    charIndex,
  );

  arrayOfString.splice(
    FindIndexOfWordOnBasisOfCharIndex(displayStr, charIndex),
    1,
    arrayOfString[wordToReplace].replace(
      wordToWrapWithBracket,
      `[${wordToWrapWithBracket}]`,
    ),
  );
  // convert array to string
  return arrayOfString.join(' ');
};
export const ReplaceWordForResolvedValue = replaceWordForResolvedValue;

const replaceWorldOfParticularIndex = (str, paramObj, charIndex) => {
  const arrayOfString = str.split(' ');
  arrayOfString.splice(
    FindIndexOfWordOnBasisOfCharIndex(str, charIndex),
    1,
    `$[$${paramObj.display}](${paramObj.id})`,
  );
  return arrayOfString.join(' ');
};
export const ReplaceWorldOfParticularIndex = replaceWorldOfParticularIndex;

// extract word of specific index
const extractWordOfSpecificIndex = (str, nth) => {
  const e = str.match(`^(?:.+?[\\s.,;]+){${nth}}([^\\s.,;]+)`);
  return e && e[1];
};
export const ExtractWordOfSpecificIndex = extractWordOfSpecificIndex;

// replace id by param in given training phrase
const change = (string, intentParamList, indexList, selectedIntentParamId) => {
  const paramName = MapToParamName(intentParamList, selectedIntentParamId);
  let newString = string;
  paramName.map((single, index) => {
    const wordToReplace = FindNthWord(newString, indexList[index]);
    newString = newString.replace(wordToReplace, `@${single}`);
  });
  return newString;
};
export const Change = change;

const findNthWord = (str, n) => str.split(' ')[n];
export const FindNthWord = findNthWord;

// map intentId to param name
const mapToParamName = (intentParamList, selectedIntentParamId) => {
  const paramList = [];
  selectedIntentParamId.map(single => {
    const filteredIntent = intentParamList.filter(
      singleObject => single === singleObject.id,
    )[0];
    paramList.push(filteredIntent && filteredIntent.value.paramName);
  });
  return paramList;
};
export const MapToParamName = mapToParamName;

// decide whether to add new intent param or not
const addNewIntentParam = (targetValue, paramNameList) => {
  if (targetValue[targetValue.length - 1] === ' ') {
    // check if extracted last word is id,i.e number or if it is string, i.e paramName
    const decimal = /^\d*(\.)?\d+$/;
    const isLastWordIntentId = decimal.test(
      GetLastWord(targetValue)[0].slice(1),
    );

    const lastWord = ExtractIntentParamId(GetLastWord(targetValue));
    // check if last word is already a param name
    if (
      !isLastWordIntentId &&
      lastWord.length === 1 &&
      FindCommonElementInTwoArray(paramNameList, lastWord) === false
    ) {
      return true;
    }
    if (FindCommonElementInTwoArray(paramNameList, lastWord) === true) {
      console.log('param name already exist ');
      return false;
    }
  }
};
export const AddNewIntentParam = addNewIntentParam;

const findIntentIdOfAlreadyExistingParamName = (paramName, intentList) => {
  let intentObj;
  intentList.filter(singleIntent => {
    singleIntent.value.paramName === paramName
      ? (intentObj = singleIntent)
      : null;
  });
  return intentObj;
};
export const FindIntentIdOfAlreadyExistingParamName = findIntentIdOfAlreadyExistingParamName;

const extractIntentParamId = str => {
  const rx = /(?:^|\s)(@[a-z0-9]\w*)/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[1].slice(1);
    res.push(data);
  }
  return res;
};
export const ExtractIntentParamId = extractIntentParamId;

const extractWordWith$ = str => {
  const rx = /(?:^|\s)(\$[a-z0-9.]\w*)/gi;
  let m;
  const res = [];
  while ((m = rx.exec(str))) {
    const data = m[1];
    res.push(data);
  }
  return res;
};
export const ExtractWordWith$ = extractWordWith$;

const getLastWord = targetValue => {
  // to extract all the last spaces
  const extractLastSpace = targetValue.replace(/(^[\s]+|[\s]+$)/g, '');
  // to extract the last word
  const lastWord = extractLastSpace.split(' ').slice(-1);
  return lastWord;
};
export const GetLastWord = getLastWord;

/* <--while removing intent params from intent parameter --> */
// get list of updated training phases
const updatedTrainingPhrases = (trainingPhaseList, removedIntentId) => {
  const updatedTrainingPhrasesList = [];
  TrainingPhraseArrayContainingRemovedIntent(
    trainingPhaseList,
    removedIntentId,
  ).map(singlePhrase => {
    let indexToRemove;
    singlePhrase.intentParamIdForTrainingPhrase.filter(
      (singleIntentId, index) =>
        singleIntentId === removedIntentId ? (indexToRemove = index) : null,
    );
    const wordToReplace = FindNthWord(
      singlePhrase.value.text,
      singlePhrase.index[indexToRemove],
    );
    singlePhrase.value.text = singlePhrase.value.text.replace(
      wordToReplace,
      '',
    );
    singlePhrase.index = RemoveItemOfParticularIndex(
      singlePhrase.index,
      singlePhrase.index[indexToRemove],
    );
    singlePhrase.intentParamIdForTrainingPhrase = RemoveItemOfParticularIndex(
      singlePhrase.intentParamIdForTrainingPhrase,
      removedIntentId,
    );
    updatedTrainingPhrasesList.push(singlePhrase);
  });
  return updatedTrainingPhrasesList;
};
export const UpdatedTrainingPhrases = updatedTrainingPhrases;

// get list of training phrases that includes the intent param object which is clicked to remove
const trainingPhraseArrayContainingRemovedIntent = (
  trainingPhaseList,
  removedIntentId,
) => {
  const trainingPhraseArrayContainingRemovedIntent = [];
  trainingPhaseList.filter(singleTrainingPhrase => {
    singleTrainingPhrase.intentParamIdForTrainingPhrase.includes(
      removedIntentId,
    ) === true
      ? trainingPhraseArrayContainingRemovedIntent.push(singleTrainingPhrase)
      : null;
  });
  return trainingPhraseArrayContainingRemovedIntent;
};
export const TrainingPhraseArrayContainingRemovedIntent = trainingPhraseArrayContainingRemovedIntent;

function removeItemOfParticularIndex(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const RemoveItemOfParticularIndex = removeItemOfParticularIndex;

/* <--Remove intent param from particular training phrase--> */
const removeIntentFormParticularPhrase = (trainingPhrase, removedIntentId) => {
  const indexToDelete = [];
  trainingPhrase.intentParamIdForTrainingPhrase.filter(
    (singleIntentId, index) =>
      singleIntentId === removedIntentId ? indexToDelete.push(index) : null,
  );
  const wordToReplace = FindNthWord(
    trainingPhrase.value.text,
    trainingPhrase.index[indexToDelete[0]],
  );

  const indexSet = new Set(indexToDelete);
  trainingPhrase.index = trainingPhrase.index.filter(
    (value, i) => !indexSet.has(i),
  );
  trainingPhrase.intentParamIdForTrainingPhrase = trainingPhrase.intentParamIdForTrainingPhrase.filter(
    (value, i) => !indexSet.has(i),
  );

  trainingPhrase.value.text = trainingPhrase.value.text.replace(
    `@${removedIntentId}`,
    '',
  );
  trainingPhrase.value.text = replaceAll(
    trainingPhrase.value.text,
    wordToReplace,
    '',
  );
  return trainingPhrase;
};
export const RemoveIntentFormParticularPhrase = removeIntentFormParticularPhrase;

export function replaceAll(str, term, replacement) {
  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// return final updated list
const funcToReturnUpdatedList = (arrayList, selectedId, updatedObject) => {
  const updatedArray = arrayList.filter(single => single.id !== selectedId);
  updatedArray.splice(
    arrayList.findIndex(single => single.id === selectedId),
    0,
    updatedObject,
  );
  return updatedArray;
};
export const FuncToReturnUpdatedList = funcToReturnUpdatedList;

/* <--- For bot response ---> */
// replace id by param name in given responses
const changeIdToParamInResponse = (
  string,
  intentParamList,
  indexList,
  selectedIntentParamId,
) => {
  const paramName = MapToParamName(intentParamList, selectedIntentParamId);
  let newString = string;
  paramName.map((single, index) => {
    const wordToReplace = FindNthWord(newString, indexList[index]);
    newString = newString.replace(wordToReplace, `$${single}`);
  });
  return newString;
};
export const ChangeIdToParamInResponse = changeIdToParamInResponse;

// Check if intent is valid to be created
const validateIntent = intentParameter => {
  const isAllRequiredPromptsChecked = [];
  const isParamNameRepeated = [];
  intentParameter.map(single => {
    single.value.required === true && single.value.prompts.length === 0
      ? isAllRequiredPromptsChecked.push(false)
      : isAllRequiredPromptsChecked.push(true);
  });
  intentParameter.map(single => {
    single.paramNameAlreadyExist === false
      ? isParamNameRepeated.push(false)
      : isParamNameRepeated.push(true);
  });
  if (
    isAllRequiredPromptsChecked.includes(false) ||
    isParamNameRepeated.includes(true)
  ) {
    return false;
  }
};
export const ValidateIntent = validateIntent;

const countIntentOccurrencesInPhrase = trainingPhrase => {
  const arr = [];
  trainingPhrase.map(singlePhrase => {
    // let removeDuplicates = [...new Set(singlePhrase.intentParamIdForTrainingPhrase)];
    // removeDuplicates.map(singleId=>arr.push(singleId));
    singlePhrase.intentParamIdForTrainingPhrase.map(singleId =>
      arr.push(singleId),
    );
  });
  // CountOccurrencesOfAllElement(arr);
  return CountOccurrencesOfAllElement(arr)[1];
};
export const CountIntentOccurrencesInPhrase = countIntentOccurrencesInPhrase;

export const mapTrainingPhrases = phrases => {
  let mappedPhrases = [];
  phrases &&
    phrases.map(singlePhrase => {
      mappedPhrases.push({
        id: Math.random(),
        text: singlePhrase.text,
      });
    });
  return mappedPhrases;
};
export const mapResponses = responses => {
  let mappedResponses = [];
  responses &&
    responses.map(singleResponse => {
      let intentResponses = [];
      singleResponse.intentResponses &&
        singleResponse.intentResponses.map(singleObj => {
          intentResponses.push({
            id: Math.random(),
            response: singleObj.response,
          });
        });
      mappedResponses.push({ intentResponses: intentResponses });
    });
  return mappedResponses;
};

export const mapImportedIntents = importedIntents => {
  let mappedIntents = [];
  importedIntents &&
    importedIntents.map(singleIntent => {
      mappedIntents.push({
        intentId: Math.random(),
        intentName: singleIntent.intentName,
        trainingPhrases: mapTrainingPhrases(singleIntent.trainingPhrases),
        botResponses: mapResponses(singleIntent.botResponses),
      });
    });
  return mappedIntents;
};

//remove
export const removeTrainingPhrase = (phraseList, id) => {
  return phraseList && phraseList.filter(single => single.id !== id);
};

export const removeResponse = (responseList, id) => {
  let updatedList = [];
  responseList &&
    responseList.map(single => {
      single.intentResponses &&
        single.intentResponses.filter(singleRes => singleRes.id !== id) &&
        updatedList.push({
          intentResponses: single.intentResponses.filter(
            singleRes => singleRes.id !== id,
          ),
        });
    });
  return updatedList;
};

//handle change in list
export const changeInIntentList = (
  intentList,
  intentId,
  itemId,
  type,
  value,
) => {
  switch (type) {
    case 'INTENT_NAME':
      return handleChangeIntentName(intentList, intentId, value);

    case 'PHRASE':
      return handleChangeIntentPhrase(intentList, intentId, itemId, value);
    case 'RESPONSE':
      return handleChangeIntentResponse(intentList, intentId, itemId, value);
  }
};

const handleChangeIntentName = (intentList, intentId, value) => {
  intentList &&
    intentList.map(single => {
      if (single.intentId === intentId) {
        single.intentName = value;
      }
    });
  return intentList;
};
const handleChangeIntentPhrase = (intentList, intentId, itemId, value) => {
  intentList &&
    intentList.map(single => {
      if (single.intentId === intentId) {
        single.trainingPhrases.map(phrases => {
          if (phrases.id === itemId) {
            phrases.text = value;
          }
        });
      }
    });
  return intentList;
};

const handleChangeIntentResponse = (intentList, intentId, itemId, value) => {
  intentList &&
    intentList.map(single => {
      if (single.intentId === intentId) {
        single.botResponses.map(response => {
          response.intentResponses.map(data => {
            if (data.id === itemId) {
              data.response = value;
            }
          });
        });
      }
    });
  return intentList;
};

//save
const mapPhraseToSave = phraseList => {
  let mappedPhrase = [];
  phraseList &&
    phraseList.map(single => mappedPhrase.push({ text: single.text }));
  return mappedPhrase;
};

const mapResponseToSave = responseList => {
  let mappedResponse = [];
  responseList &&
    responseList.map(single => {
      let intentResponses = [];
      single.intentResponses &&
        single.intentResponses.map(singleRes => {
          const Response = { response: singleRes.response };
          return singleRes.response
            ? intentResponses.push(Response)
            : intentResponses;
        });
      mappedResponse.push({ intentResponses });
    });
  return mappedResponse;
};

export const mapIntentsToSave = payload => {
  let mappedIntents = [];
  payload.botIntents &&
    payload.botIntents.map(singleIntent => {
      mappedIntents.push({
        intentName: singleIntent.intentName,
        importSource: localStorage.getItem('intentImportSource'),
        trainingPhrases: mapPhraseToSave(singleIntent.trainingPhrases),
        botResponses: mapResponseToSave(singleIntent.botResponses),
        intentState: 'INTENT_ACTIVE',
      });
    });
  return {
    language: payload.language,
    serviceId: localStorage.getItem('serviceId'),
    botSettingId: payload.botId,
    botIntents: mappedIntents,
  };
};

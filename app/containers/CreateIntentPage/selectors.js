import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import { selectChangePasswordFormDomain } from '../ChangePasswordForm/selectors';

/**
 * Direct selector to the createIntentPage state domain
 */

const selectCreateIntentPageDomain = state =>
  state.createIntentPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateIntentPage
 */

const makeSelectCreateIntentPage = key => () =>
  createSelector(
    selectCreateIntentPageDomain,
    substate => substate[key],
  );

export default makeSelectCreateIntentPage;
export { selectCreateIntentPageDomain };

export const makeSelectLoading = makeSelectCreateIntentPage('loading');
export const makeSelectError = makeSelectCreateIntentPage('error');
export const makeSelectSnackbar = makeSelectCreateIntentPage('openSnackBar');
export const makeSelectVariant = makeSelectCreateIntentPage('variant');

export const makeSelectApiList = makeSelectCreateIntentPage('apiList');
export const makeSelectEntityListInCreateIntent = makeSelectCreateIntentPage(
  'entityList',
);
export const makeSelectServiceIdToCreateIntent = makeSelectCreateIntentPage(
  'serviceId',
);
export const makeSelectIntentName = makeSelectCreateIntentPage('intentName');

export const makeSelectTrainingPhase = makeSelectCreateIntentPage(
  'trainingPhase',
);
export const makeSelectFinalTrainingPhase = makeSelectCreateIntentPage(
  'trainingPhrases',
);

export const makeSelectIntentParameter = makeSelectCreateIntentPage(
  'intentParameter',
);
export const makeSelectFinalIntentParameter = makeSelectCreateIntentPage(
  'intentParam',
);

export const makeSelectParamNameList = () =>
  createSelector(
    makeSelectIntentParameter(),
    paramNameList => {
      const a = [];
      paramNameList.map(single => a.push(single.value.paramName));
      return a;
    },
  );

export const makeSelectPrompt = makeSelectCreateIntentPage('prompts');
export const makeSelectFinalPromptData = makeSelectCreateIntentPage(
  'finalPromptData',
);
export const makeSelectCheckIsPromptRequired = makeSelectCreateIntentPage(
  'checkIsPromptRequired',
);
export const makeSelectValidatedIntent = makeSelectCreateIntentPage(
  'isIntentValidatedToBeCreated',
);

export const makeSelectBotResponse = makeSelectCreateIntentPage('botResponse');
export const makeSelectResponse = makeSelectCreateIntentPage('response');
export const makeSelectFinalBotResponse = makeSelectCreateIntentPage(
  'intentResponse',
);

export const makeSelectIntentParamUsedInBotResponse = () =>
  createSelector(
    makeSelectBotResponse(),
    botResponse => {
      const intentIdListUsedInResponse = [];
      botResponse &&
      botResponse.map(
        single =>
          single &&
          single.response &&
          single.response.map(singleResponse =>
            singleResponse.intentParamIdForBotResponse.map(singleId =>
              intentIdListUsedInResponse.push(singleId),
            ),
          ),
      );
      return intentIdListUsedInResponse.length > 0
        ? [...new Set(intentIdListUsedInResponse)]
        : [];
    },
  );

export const makeSelectResponseEntity = makeSelectCreateIntentPage(
  'responseEntity',
);

//fulfilment
export const makeSelectFulfilmentList = makeSelectCreateIntentPage(
  'fulfilment',
);
export const makeSelectFulfilments = makeSelectCreateIntentPage('fulfillments');

//action
export const makeSelectActionList = makeSelectCreateIntentPage('action');
export const makeSelectObjToAddAction = makeSelectCreateIntentPage(
  'objToAddAction',
);
export const makeSelectActions = makeSelectCreateIntentPage('actions');
export const makeSelectBotAction = makeSelectCreateIntentPage('botAction');

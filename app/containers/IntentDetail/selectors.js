import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import makeSelectCreateIntentPage from '../CreateIntentPage/selectors';

/**
 * Direct selector to the intentDetail state domain
 */

const selectIntentDetailDomain = state => state.intentDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IntentDetail
 */

const makeSelectIntentDetail = key => () =>
  createSelector(
    selectIntentDetailDomain,
    substate => substate[key],
  );

export default makeSelectIntentDetail;
export { selectIntentDetailDomain };

export const makeSelectLoading = makeSelectIntentDetail('loading');
export const makeSelectError = makeSelectIntentDetail('error');
export const makeSelectSnackbar = makeSelectIntentDetail('openSnackBar');
export const makeSelectVariant = makeSelectIntentDetail('variant');

export const makeSelectApiListInIntentDetail = makeSelectIntentDetail(
  'apiList',
);
export const makeSelectEntityList = makeSelectIntentDetail('entityList');
export const makeSelectServiceIdToUpdateIntent = makeSelectIntentDetail(
  'serviceId',
);
export const makeSelectIntentDetailData = makeSelectIntentDetail(
  'intentDetail',
);
export const makeSelectIntentNameInDetail = makeSelectIntentDetail(
  'intentName',
);
export const makeSelectIntentId = makeSelectIntentDetail('intentId');

export const makeSelectTrainingPhrase = makeSelectIntentDetail(
  'trainingPhrase',
);
export const makeSelectBotResponse = makeSelectIntentDetail('botResponse');
export const makeSelectIntentParam = makeSelectIntentDetail('intentParam');

export const makeSelectParamNameListInDetail = () =>
  createSelector(
    makeSelectIntentParam(),
    paramNameList => {
      const a = [];
      paramNameList.map(single => a.push(single.value.paramName));
      return a;
    },
  );

export const makeSelectFinalTrainingPhrase = makeSelectIntentDetail(
  'trainingPhrases',
);
export const makeSelectFinalBotResponse = makeSelectIntentDetail(
  'intentResponse',
);
export const makeSelectResponseEntity = makeSelectIntentDetail(
  'responseEntity',
);
export const makeSelectFinalIntentParam = makeSelectIntentDetail(
  'intentParamList',
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

export const makeSelectIntentValidation = makeSelectIntentDetail(
  'isIntentValidatedToBeCreated',
);

//fulfilment
export const makeSelectFulfilmentListInIntentDetail = makeSelectIntentDetail(
  'fulfilment',
);
export const makeSelectFulfilmentsInIntentDetail = makeSelectIntentDetail(
  'fulfillments',
);

//action
export const makeSelectAction = makeSelectIntentDetail('action');
export const makeSelectObjToAddAction = makeSelectIntentDetail(
  'objToAddAction',
);
export const makeSelectBotAction = makeSelectIntentDetail('botAction');

//paraphrasing
export const makeSelectLoadingParaphrase = makeSelectIntentDetail(
  'loadingParaphrase',
);
export const makeSelectOpenParaphraseModal = makeSelectIntentDetail(
  'openParaphraseModal',
);
export const makeSelectOptimizationSuccess = makeSelectIntentDetail(
  'optimizationSuccess',
);
export const makeSelectParaphraseList = makeSelectIntentDetail(
  'paraphraseList',
);
export const makeSelectParaphraseOfSpecificTrainingPhrase = makeSelectIntentDetail(
  'paraphraseOfSpecificTrainingPhrase',
);
export const makeSelectParaphrases = makeSelectIntentDetail('paraphrases');
export const makeSelectSpecificParaphrase = makeSelectIntentDetail(
  'specificParaphrase',
);
export const makeSelectSpecificParaphraseTitle = makeSelectIntentDetail(
  'specificParaphraseTitle',
);
export const makeSelectOpenEventSnackBar = makeSelectIntentDetail(
  'openEventSnackBar',
);
export const makeSelectEventVariant = makeSelectIntentDetail('eventVariant');
export const makeSelectEventMsg = makeSelectIntentDetail('eventMsg');

export const makeSelectMisleadingIntents = makeSelectIntentDetail(
  'misleadingIntents',
);

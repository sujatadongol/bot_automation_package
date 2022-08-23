import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the botConfigurationTab state domain
 */

const selectBotConfigurationTabDomain = state =>
  state.botConfigurationTab || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BotConfigurationTab
 */

const makeSelectBotConfigurationTab = key => () =>
  createSelector(
    selectBotConfigurationTabDomain,
    substate => substate[key],
  );

export default makeSelectBotConfigurationTab;
export { selectBotConfigurationTabDomain };

export const makeSelectLoading = makeSelectBotConfigurationTab('loading');
export const makeSelectError = makeSelectBotConfigurationTab('error');
export const makeSelectSnackbar = makeSelectBotConfigurationTab('openSnackBar');
export const makeSelectVariant = makeSelectBotConfigurationTab('variant');

export const makeSelectShowBotImportProgressBar = makeSelectBotConfigurationTab(
  'showBotImportProgressBar',
);
export const makeSelectBotImportCompleted = makeSelectBotConfigurationTab(
  'botImportCompleted',
);
export const makeSelectImportedIntentsCount = makeSelectBotConfigurationTab(
  'importedIntentsCount',
);

export const makeSelectEntityId = makeSelectBotConfigurationTab('entityId');
export const makeSelectEntityDetail = makeSelectBotConfigurationTab(
  'entityDetail',
);
export const makeSelectSystemEntityList = makeSelectBotConfigurationTab(
  'systemEntityList',
);
export const makeSelectEntityList = makeSelectBotConfigurationTab('entityList');
export const makeSelectEntityData = makeSelectBotConfigurationTab('entityData');
export const makeSelectSynonym = makeSelectBotConfigurationTab('synonymData');
export const makeSelectRegex = makeSelectBotConfigurationTab('regex');

export const makeSelectIntentList = makeSelectBotConfigurationTab('intentList');
export const makeSelectIntentCount = makeSelectBotConfigurationTab(
  'intentCount',
);
export const makeSelectIntentFileUrl = makeSelectBotConfigurationTab(
  'intentFileUrl',
);
export const makeSelectIntentFileName = makeSelectBotConfigurationTab(
  'intentFileName',
);
export const makeSelectBotImportModal = makeSelectBotConfigurationTab(
  'botImportModal',
);
export const makeSelectUploadingDoc = makeSelectBotConfigurationTab(
  'uploadingDoc',
);
export const makeSelectLastRetrainedDate = makeSelectBotConfigurationTab(
  'lastRetrainedDate',
);
export const makeSelectRetrainIntentStatus = makeSelectBotConfigurationTab(
  'retrainIntentStatus',
);
export const makeSelectIntentId = makeSelectBotConfigurationTab('intentId');
export const makeSelectLanguage = makeSelectBotConfigurationTab('language');

//bot section
export const makeSelectBotSettingId = makeSelectBotConfigurationTab(
  'botSettingId',
);
export const makeSelectBotStatus = makeSelectBotConfigurationTab('botStatus');
export const makeSelectBotName = makeSelectBotConfigurationTab('botName');
export const makeSelectBotTimezone = makeSelectBotConfigurationTab(
  'botTimezone',
);
export const makeSelectBotLanguage = makeSelectBotConfigurationTab(
  'botLanguage',
);
export const makeSelectBotImage = makeSelectBotConfigurationTab('botImage');
export const makeSelectBotThreshold = makeSelectBotConfigurationTab(
  'threshold',
);
export const makeSelectBotInboxVisibility = makeSelectBotConfigurationTab(
  'inboxVisibility',
);
export const makeSelectBotNoMatchRuleType = makeSelectBotConfigurationTab(
  'noMatchRuleType',
);
export const makeSelectReplyMessage = makeSelectBotConfigurationTab(
  'replyMessage',
);
export const makeSelectLanguages = makeSelectBotConfigurationTab('languages');
export const makeSelectBotSettingData = makeSelectBotConfigurationTab(
  'botSettingData',
);
export const makeSelectBotAutoTicketCreateData = makeSelectBotConfigurationTab(
  'autoTicketCreateData',
);

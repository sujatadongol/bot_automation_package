/**
 *
 * BotConfigurationTab
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectBotConfigurationTab, {
  makeSelectBotAutoTicketCreateData,
  makeSelectBotImage,
  makeSelectBotImportCompleted,
  makeSelectBotImportModal,
  makeSelectBotInboxVisibility,
  makeSelectBotLanguage,
  makeSelectBotName,
  makeSelectBotNoMatchRuleType,
  makeSelectBotSettingData,
  makeSelectBotSettingId,
  makeSelectBotThreshold,
  makeSelectBotTimezone,
  makeSelectEntityData,
  makeSelectEntityDetail,
  makeSelectEntityList,
  makeSelectError,
  makeSelectImportedIntentsCount,
  makeSelectIntentCount,
  makeSelectIntentFileName,
  makeSelectIntentFileUrl,
  makeSelectIntentList,
  makeSelectLanguages,
  makeSelectLastRetrainedDate,
  makeSelectLoading,
  makeSelectRegex,
  makeSelectReplyMessage,
  makeSelectRetrainIntentStatus,
  makeSelectShowBotImportProgressBar,
  makeSelectSnackbar,
  makeSelectSynonym,
  makeSelectSystemEntityList,
  makeSelectUploadingDoc,
  makeSelectVariant,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import BotConfigurationTab from './BotConfigurationTab';
import {
  botImport,
  clearBotSetting,
  clearEntityData,
  clearIntent,
  closeSnackbarInBotConfiguration,
  createEntity,
  deleteEntity,
  deleteIntent,
  fetchBotSetting,
  fetchEntityList,
  fetchEntityListById,
  fetchImportedIntentsCount,
  fetchIntent,
  fetchSystemEntityList,
  handleChangeBotInboxVisibility,
  handleChangeBotLanguage,
  handleChangeBotName,
  handleChangeBotReplyMessage,
  handleChangeEntityData,
  handleChangeEntityDetail,
  handleChangeEntityId,
  handleChangeInImportedIntentCount,
  handleChangeInTagInput,
  handleChangeIntentId,
  handleChangeLanguage,
  handleChangeLastTrained,
  handleChangeNoMatchRule,
  handleChangeRegex,
  handleChangeSynonym,
  handleChangeSynonymTag,
  handleChangeThreshold,
  handleChangeTimezone,
  onBotImportNotification,
  openSnackbarInBotConfiguration,
  removeRegex,
  removeSynonym,
  removeSynonymTag,
  retrainIntent,
  saveBotSetting,
  toggleBotImportModal,
  updateBotSetting,
  updateEntity,
  uploadBotImage,
  uploadDocument,
} from './actions';
import {
  makeSelectBotImportNotification,
  makeSelectGlobalNotificationObj,
  makeSelectGlobalServiceDetailTab,
  makeSelectGlobalServiceIdForBotConfiguration,
  makeSelectIsBotTraining,
  makeSelectOpenBotTab,
  makeSelectReloadContainer,
} from '../../App/selectors';
import {
  clearNotificationObj,
  handleChangeInIsBotTraining,
  handleServiceDetailTabs,
  openTryOutModal,
  toggleEmptyServiceModal,
} from '../../App/actions';
import {
  makeSelectProjectDetails,
  makeSelectRetrainingBotId,
  makeSelectTeams,
  makeSelectTicketModal,
} from '../BotList/selectors';
import {
  fetchProjectDetails,
  fetchTeams,
  toggleRetrainLoader,
} from '../BotList/actions';
import botListReducer from '../BotList/reducer';
import botListSaga from '../BotList/saga';

const mapStateToProps = createStructuredSelector({
  botConfigurationTab: makeSelectBotConfigurationTab(),

  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  openBotTab: makeSelectOpenBotTab(),
  serviceIdForBotConfiguration: makeSelectGlobalServiceIdForBotConfiguration(),
  synonym: makeSelectSynonym(),
  regex: makeSelectRegex(),
  systemEntityList: makeSelectSystemEntityList(),
  entityList: makeSelectEntityList(),
  entityData: makeSelectEntityData(),
  entityDetail: makeSelectEntityDetail(),

  intentCount: makeSelectIntentCount(),
  intentList: makeSelectIntentList(),
  importedIntentsCount: makeSelectImportedIntentsCount(),
  lastRetrainedDate: makeSelectLastRetrainedDate(),
  retrainIntentStatus: makeSelectRetrainIntentStatus(),
  isBotTraining: makeSelectIsBotTraining(),
  retrainingBotId: makeSelectRetrainingBotId(),
  fileName: makeSelectIntentFileName(),
  fileUrl: makeSelectIntentFileUrl(),
  botImportModal: makeSelectBotImportModal(),
  uploadingDoc: makeSelectUploadingDoc(),

  serviceDetailTab: makeSelectGlobalServiceDetailTab(),
  notificationObj: makeSelectGlobalNotificationObj(),
  showBotImportProgressBar: makeSelectShowBotImportProgressBar(),
  botImportCompleted: makeSelectBotImportCompleted(),

  reloadContainer: makeSelectReloadContainer(),

  // general
  botSettingId: makeSelectBotSettingId(),
  botName: makeSelectBotName(),
  timezone: makeSelectBotTimezone(),
  botLanguage: makeSelectBotLanguage(),
  botUrl: makeSelectBotImage(),
  threshold: makeSelectBotThreshold(),
  noMatchRuleType: makeSelectBotNoMatchRuleType(),
  inboxVisibility: makeSelectBotInboxVisibility(),
  replyMessage: makeSelectReplyMessage(),
  languages: makeSelectLanguages(),
  botSettingData: makeSelectBotSettingData(),

  botImportNotification: makeSelectBotImportNotification(),

  // teams and projectDetails
  projectDetails: makeSelectProjectDetails(),
  teams: makeSelectTeams(),

  autoTicketCreateData: makeSelectBotAutoTicketCreateData(),
  ticketModal: makeSelectTicketModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    // clearNotificationObj: () => dispatch(clearNotificationObj()),
    toggleEmptyServiceModal: bool => dispatch(toggleEmptyServiceModal(bool)),
    handleChangeInImportedIntentCount: bool =>
      dispatch(handleChangeInImportedIntentCount(bool)),
    handleChangeLastTrained: lastTrained =>
      dispatch(handleChangeLastTrained(lastTrained)),
    handleChangeInIsBotTraining: () => dispatch(handleChangeInIsBotTraining()),
    onBotImportNotification: obj => dispatch(onBotImportNotification(obj)),
    toggleRetrainLoader: (id, version, versionId, modelName) =>
      dispatch(toggleRetrainLoader(id, version, versionId, modelName)),
    fetchImportedIntentCount: (id, language) =>
      dispatch(fetchImportedIntentsCount(id, language)),

    // bot
    fetchBotSetting: id => dispatch(fetchBotSetting(id)),
    saveBotSetting: autoCreateData => dispatch(saveBotSetting(autoCreateData)),
    updateBotSetting: autoCreateData =>
      dispatch(updateBotSetting(autoCreateData)),
    handleChangeBotName: botName => dispatch(handleChangeBotName(botName)),
    handleChangeThreshold: threshold =>
      dispatch(handleChangeThreshold(threshold)),
    handleChangeBotLanguage: language =>
      dispatch(handleChangeBotLanguage(language)),
    handleChangeTimezone: timezone => dispatch(handleChangeTimezone(timezone)),
    handleChangeInboxVisibility: bool =>
      dispatch(handleChangeBotInboxVisibility(bool)),
    handleChangeNoMatchRuleType: value =>
      dispatch(handleChangeNoMatchRule(value)),
    handleChangeBotReplyMessage: value =>
      dispatch(handleChangeBotReplyMessage(value)),
    uploadBotImage: image => dispatch(uploadBotImage(image)),
    clearBotSetting: () => dispatch(clearBotSetting()),

    // entity
    handleChangeEntityId: id => dispatch(handleChangeEntityId(id)),
    fetchSystemEntityList: (botId, from, isPaginating) =>
      dispatch(fetchSystemEntityList(botId, from, isPaginating)),
    fetchEntityList: (botId, from, isPaginating) =>
      dispatch(fetchEntityList(botId, from, isPaginating)),
    fetchEntityById: () => dispatch(fetchEntityListById()),
    deleteEntity: () => dispatch(deleteEntity()),
    handleChangeEntityDetail: (id, value) =>
      dispatch(handleChangeEntityDetail(id, value)),
    updateEntity: () => dispatch(updateEntity()),

    handleChangeRegex: (id, value) => dispatch(handleChangeRegex(id, value)),
    removeRegex: id => dispatch(removeRegex(id)),
    removeSynonymTag: (synonymId, tagId) =>
      dispatch(removeSynonymTag(synonymId, tagId)),
    handleChangeSynonym: (id, value) =>
      dispatch(handleChangeSynonym(id, value)),
    handleChangeSynonymTag: (id, value) =>
      dispatch(handleChangeSynonymTag(id, value)),
    handleChangeInTagInput: (id, value) =>
      dispatch(handleChangeInTagInput(id, value)),
    removeSynonym: id => dispatch(removeSynonym(id)),

    handleChangeEntityData: (id, value) =>
      dispatch(handleChangeEntityData(id, value)),
    createEntity: botId => dispatch(createEntity(botId)),
    clearEntityData: data => dispatch(clearEntityData(data)),

    // intent
    handleChangeIntentId: id => dispatch(handleChangeIntentId(id)),
    clearIntentList: () => dispatch(clearIntent()),
    fetchIntent: (from, botId, isPaginating, language) =>
      dispatch(fetchIntent(from, botId, isPaginating, language)),
    handleChangeLanguage: language => dispatch(handleChangeLanguage(language)),
    retrainIntent: (botSettingId, language) =>
      dispatch(retrainIntent(botSettingId, language)),
    deleteIntent: intentId => dispatch(deleteIntent(intentId)),

    openSnackbar: (bool, msg, variant) =>
      dispatch(openSnackbarInBotConfiguration(bool, msg, variant)),
    closeSnackbar: bool => dispatch(closeSnackbarInBotConfiguration(true)),
    handleServiceTab: value => dispatch(handleServiceDetailTabs(value)),

    openTryOutModal: () => dispatch(openTryOutModal(true)),
    botImport: (url, docUrl, botId, type, docName) =>
      dispatch(botImport(url, docUrl, botId, type, docName)),
    toggleBotImportModal: bool => dispatch(toggleBotImportModal(bool)),
    uploadDocument: file => dispatch(uploadDocument(file)),

    // fetch teams and projectDetails
    fetchProjectDetails: () => dispatch(fetchProjectDetails()),
    fetchTeams: () => dispatch(fetchTeams()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'botConfigurationTab', reducer });
const withSaga = useInjectSaga({ key: 'botConfigurationTab', saga });

const withBotListReducer = useInjectReducer({
  key: 'botList',
  reducer: botListReducer,
});
const withBotListSaga = useInjectSaga({ key: 'botList', saga: botListSaga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  withBotListReducer,
  withBotListSaga,
)(BotConfigurationTab);

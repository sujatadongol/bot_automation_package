/**
 *
 * BotList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import {
  // makeSelectBotList,
  makeSelectBotImageLoader,
  makeSelectBotImageUrl,
  makeSelectBots,
  makeSelectCount,
  makeSelectCreateBotModalVisibility,
  makeSelectError,
  makeSelectLoading,
  makeSelectModalLoader,
  makeSelectRetrainingBotId,
  makeSelectSnackbar,
  makeSelectVariant,
  makeSelectAllBots,
  makeSelectCursor,
  makeSelectProjectDetails,
  makeSelectTeams,
  makeSelectTicketModal,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import BotListScreen from './BotListScreen';
import {
  clearNotificationObj,
  openTryOutModal,
  reloadContainer,
  toggleEmptyServiceModal,
} from '../../App/actions';
import {
  clearBotList,
  closeSnackbarInBotList,
  createBot,
  enableBotSetting,
  fetchBotList,
  publishBotVersion,
  retrainBot,
  toggleCreateBotModal,
  toggleRetrainLoader,
  uploadBotImage,
  fetchBotVersion,
  getAllBot,
  getNextPageBotListSuccess,
  getNextPageBotList,
  fetchProjectDetails,
  fetchTeams,
  fetchModalData,
} from './actions';
import {
  makeSelectBotImportNotification,
  makeSelectGlobalNotificationObj,
  makeSelectReloadContainer,
  // makeSelectBotList,
} from '../../App/selectors';
import { botPermissionModel } from '../../Settings/selectors';

const mapStateToProps = createStructuredSelector({
  // bot: makeSelectBotList(),

  loading: makeSelectLoading(),
  modalLoader: makeSelectModalLoader(),
  retrainingBotId: makeSelectRetrainingBotId(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  botImageUrl: makeSelectBotImageUrl(),
  botImageLoader: makeSelectBotImageLoader(),

  count: makeSelectCount(),
  botList: makeSelectBots(),
  // botList: makeSelectAllBots(),

  createBotModalVisibility: makeSelectCreateBotModalVisibility(),

  notificationObj: makeSelectGlobalNotificationObj(),
  reloadContainer: makeSelectReloadContainer(),
  cursor: makeSelectCursor(),

  projectDetails: makeSelectProjectDetails(),
  teams: makeSelectTeams(),
  ticketModal: makeSelectTicketModal(),
  botPermissionModel: botPermissionModel(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleEmptyServiceModal: bool => dispatch(toggleEmptyServiceModal(bool)),
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),

    fetchBotList: (from, isPaginating) =>
      dispatch(fetchBotList(from, isPaginating)),

    fetchBotVersion: (botId, language) =>
      dispatch(fetchBotVersion(botId, language)),

    publishBotVersion: (botId, language, modelName, version, botVersionId) =>
      dispatch(
        publishBotVersion(botId, language, modelName, version, botVersionId),
      ),
    enableBotStatus: (botId, status) =>
      dispatch(enableBotSetting(botId, status)),
    retrainBot: (botId, botVersion, language) =>
      dispatch(retrainBot(botId, botVersion, language)),
    toggleRetrainLoader: (id, version, versionId, modelName, language) =>
      dispatch(
        toggleRetrainLoader(id, version, versionId, modelName, language),
      ),

    toggleCreateBotModal: bool => dispatch(toggleCreateBotModal(bool)),
    uploadBotImage: obj => dispatch(uploadBotImage(obj)),
    createBot: obj => dispatch(createBot(obj)),

    clearBotList: () => dispatch(clearBotList(true)),
    closeSnackbar: () => dispatch(closeSnackbarInBotList(true)),
    openTryOutModal: () => dispatch(openTryOutModal(true)),
    getAllBot: () => dispatch(getAllBot()),
    getNextPageBot: link => dispatch(getNextPageBotList(link)),

    fetchProjectDetails: () => dispatch(fetchProjectDetails()),
    fetchTeams: () => dispatch(fetchTeams()),
    fetchModalData: page => dispatch(fetchModalData(page)),
  };
}

const withReducer = useInjectReducer({ key: 'botList', reducer });
const withSaga = useInjectSaga({ key: 'botList', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(BotListScreen);

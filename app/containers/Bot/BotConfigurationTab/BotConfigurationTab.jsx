import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TryOut from '../../TryOut';
import BotConfigurationTabStyle from './Style';
import EntityList from '../../../components/Bot/BotConfigurationComponent/EntityComponent/EntityList';
import IntentList from '../../../components/Bot/BotConfigurationComponent/IntentComponent/Intent';
import SnackBar from '../../../components/ReusableComponents/Snackbar';
import General from '../../../components/Bot/BotConfigurationComponent/GeneralComponent/general';
import DivWrapper from '../../../components/ReusableComponents/DivWrapper/DivWrapper';
import { DateTimeFormatting } from '../../../utils/helper';
import CustomButton from '../../../components/ReusableComponents/Button/Button';
import LocalDb from '../../../localStorage';
import history from '../../../utils/history';
import OutlinedSpinner from '../../../components/ReusableComponents/Spinner';
import { CommonIcons } from '../../../assets/CommonIcons';

const { TabPane } = Tabs;

const BotConfigurationTab = ({
  match,
  loading,
  error,
  snackbar,
  closeSnackbar,
  openSnackbar,
  variant,

  serviceIdForBotConfiguration,
  isBotTraining,
  retrainingBotId,
  toggleRetrainLoader,

  removeSynonymTag,
  synonym,
  handleChangeSynonym,
  handleChangeInTagInput,
  handleChangeSynonymTag,
  removeSynonym,
  regex,
  handleChangeRegex,
  removeRegex,

  handleChangeEntityId,
  entityDetail,
  systemEntityList,
  fetchSystemEntityList,
  entityList,
  entityData,
  fetchEntityList,
  handleChangeEntityData,
  createEntity,
  clearEntityData,
  fetchEntityById,
  handleChangeEntityDetail,
  updateEntity,
  deleteEntity,

  intentList,
  intentCount,
  clearIntentList,
  fetchIntent,
  handleChangeLanguage,
  retrainIntent,
  lastRetrainedDate,
  deleteIntent,
  handleChangeIntentId,
  retrainIntentStatus,
  fetchImportedIntentCount,

  clearBotSetting,
  fetchBotSetting,
  saveBotSetting,
  updateBotSetting,
  handleChangeBotName,
  handleChangeThreshold,
  handleChangeBotLanguage,
  handleChangeTimezone,
  uploadBotImage,
  botUrl,
  botName,
  timezone,
  botLanguage,
  botSettingData,
  threshold,
  botSettingId,
  noMatchRuleType,
  replyMessage,
  inboxVisibility,
  handleChangeInboxVisibility,
  handleChangeNoMatchRuleType,
  handleChangeBotReplyMessage,
  toggleEmptyServiceModal,

  openTryOutModal,
  notificationObj,
  handleChangeLastTrained,
  reloadContainer,

  botImportModal,
  toggleBotImportModal,
  botImport,
  uploadDocument,
  showBotImportProgressBar,
  importedIntentsCount,
  botImportCompleted,
  languages,
  fileName,
  fileUrl,
  uploadingDoc,

  botImportNotification,
  onBotImportNotification,
  clearNotificationObj,

  projectDetails,
  fetchProjectDetails,

  teams,
  fetchTeams,

  autoTicketCreateData,
  ticketModal,
}) => {
  const [openNoServiceSnackbar, setOpenNoServiceSnackbar] = useState(false);
  const { tab: tabValue, id: botId, language: defaultLanguage } = match.params;

  useEffect(() => {
    if (!localStorage.getItem('serviceId')) {
      toggleEmptyServiceModal(true);
      LocalDb.isEmployee() && setOpenNoServiceSnackbar(true);
    }
    if (localStorage.getItem('serviceId')) {
      fetchBotSetting(botId);
      fetchImportedIntentCount(botId, defaultLanguage);
    }

    fetchProjectDetails();
    fetchTeams();
  }, []);

  useEffect(() => {
    if (botImportNotification) {
      onBotImportNotification();
      clearNotificationObj();
    }
  }, [botImportNotification]);

  useEffect(
    () => () => {
      clearBotSetting();
      clearIntentList();
      closeSnackbar();
    },
    [],
  );

  if (reloadContainer && localStorage.getItem('serviceId')) {
    history.push('/bot');
  }

  useEffect(() => {
    if (
      notificationObj &&
      notificationObj.payload !== '' &&
      notificationObj.type === 1 &&
      !JSON.parse(notificationObj.payload).errorCode
    ) {
      const payload = JSON.parse(notificationObj.payload);
      handleChangeLastTrained(payload.lastTrained);
      retrainingBotId.includes(payload.botId) &&
        toggleRetrainLoader(
          payload.botId,
          payload.botVersion,
          payload.botVersionId,
          payload.trainedModelName,
        );
    }
  }, [notificationObj]);

  useEffect(() => {
    if (botSettingData && botSettingData.language) {
      const list = botSettingData.language.split(',');
      if (list && list.length > 0 && !list.includes(defaultLanguage)) {
        history.replace(`/bot/${botId}/general/${list[0]}`);
      }
    }
  }, [botSettingData]);

  const hasIntents = () => {
    if (
      botSettingData &&
      botSettingData.intentCount &&
      botSettingData.intentCount[defaultLanguage] &&
      parseInt(botSettingData.intentCount[defaultLanguage])
    ) {
      return true;
    }
  };

  // console.log('PROJECT DETAILS', projectDetails);
  // console.log('TEAMS', teams);

  return (
    <BotConfigurationTabStyle>
      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      )}
      <div
        style={{
          padding: '8px 38px 6px 20px',
          display: 'flex',
          justifyContent: 'end',
          flexDirection: 'column',
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}
        >
          {importedIntentsCount > 0 && (
            <div style={{ marginRight: '15px' }}>
              <CustomButton
                primary
                type="submit"
                size="large"
                clicked={() => {
                  history.push(
                    `/bot/imported/intents/${botId}/${defaultLanguage}`,
                  );
                }}
                style={{ height: 36 }}
              >
                {importedIntentsCount} New Bot
                {importedIntentsCount > 1 ? 's' : ''} Imported
              </CustomButton>
            </div>
          )}
          <div
            style={{
              paddingRight: '15px',
              color: '#5a5a5a',
              display: 'flex',
              alignItems: 'center',
            }}
            hidden={!lastRetrainedDate}
          >
            Last Trained : {'  '}
            {lastRetrainedDate && DateTimeFormatting(lastRetrainedDate / 1000)}
          </div>
          {LocalDb.getPermissionForBot() && (
            <CustomButton
              disabled={
                isBotTraining === true ||
                retrainingBotId.includes(botId) ||
                !hasIntents()
              }
              primary
              type="submit"
              size="large"
              style={
                isBotTraining === true ||
                retrainingBotId.includes(botId) ||
                !hasIntents()
                  ? {
                      width: 'fit-content',
                      borderRadius: '5px',
                      cursor: 'auto',
                      background: 'rgb(132, 148, 247)',
                      border: '1px solid rgb(132, 148, 247)',
                      color: 'white',
                      height: 36,
                    }
                  : { width: 'fit-content', borderRadius: '5px', height: 36 }
              }
              clicked={() => {
                retrainIntent(botId, languages && languages[0]);
              }}
            >
              {isBotTraining === true ||
                (retrainingBotId.includes(botId) && (
                  <OutlinedSpinner spinnerStyle={{ margin: '0 10px 0 0' }} />
                ))}
              {isBotTraining === true || retrainingBotId.includes(botId)
                ? 'Training...'
                : 'Retrain'}
            </CustomButton>
          )}
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <div className="container-fluid">
            <Row
              gutter={50}
              style={{
                marginBottom: '4px',
                marginRight: '0px',
              }}
            >
              <Col span={24} className="gutter-row">
                <Tabs
                  type="card"
                  defaultActiveKey={
                    tabValue === 'intent' ? 'intent' : 'general'
                  }
                  onChange={key => {
                    history.replace(`/bot/${botId}/${key}/${defaultLanguage}`);
                    if (key === 'intent') {
                      clearIntentList();
                      fetchIntent('0', botId, '', defaultLanguage);
                    }
                  }}
                >
                  <TabPane
                    tab="General"
                    key="general"
                    style={{ background: '#fff !important' }}
                  >
                    <DivWrapper
                      style={{
                        borderTop: 0,
                        margin: '-1px 0px',
                        padding: '30px 20px',
                        borderRadius: 0,
                        fontFamily: 'Roboto',
                      }}
                    >
                      <General
                        replyMessage={replyMessage}
                        handleChangeReplyMessage={handleChangeBotReplyMessage}
                        handleChangeInboxVisibility={
                          handleChangeInboxVisibility
                        }
                        handleChangeNoMatchRuleType={
                          handleChangeNoMatchRuleType
                        }
                        inboxVisibility={inboxVisibility}
                        noMatchRuleType={noMatchRuleType}
                        botPermission={LocalDb.getPermissionForBot()}
                        botSettingId={botSettingId}
                        botLanguage={botLanguage}
                        botName={botName}
                        threshold={threshold}
                        timezone={timezone}
                        botIconUrl={botUrl}
                        uploadBotImage={uploadBotImage}
                        updateBotSetting={updateBotSetting}
                        saveBotSetting={saveBotSetting}
                        fetchBotSetting={fetchBotSetting}
                        handleChangeBotLanguage={handleChangeBotLanguage}
                        handleChangeBotName={handleChangeBotName}
                        handleChangeThreshold={handleChangeThreshold}
                        handleChangeTimezone={handleChangeTimezone}
                        projectDetails={projectDetails}
                        teams={teams}
                        autoTicketCreateData={autoTicketCreateData}
                        ticketModal={ticketModal}
                      />
                    </DivWrapper>
                  </TabPane>
                  <TabPane tab="Intent" key="intent">
                    <DivWrapper
                      style={{
                        borderTop: 0,
                        margin: 0,
                        padding: '10px 20px',
                        borderRadius: 0,
                      }}
                    >
                      <IntentList
                        botId={botId}
                        botPermission={LocalDb.getPermissionForBot()}
                        count={intentCount}
                        clearIntentList={clearIntentList}
                        retrainIntentStatus={retrainIntentStatus}
                        handleChangeIntentId={handleChangeIntentId}
                        deleteIntent={deleteIntent}
                        serviceIdForBotConfiguration={
                          serviceIdForBotConfiguration
                        }
                        intentList={intentList}
                        handleChangeLanguage={handleChangeLanguage}
                        retrainIntent={retrainIntent}
                        lastRetrainedDate={lastRetrainedDate}
                        fetchIntent={fetchIntent}
                        botImport={botImport}
                        showBotImportProgressBar={showBotImportProgressBar}
                        uploadDocument={uploadDocument}
                        fileName={fileName}
                        fileUrl={fileUrl}
                        notificationObj={notificationObj}
                        fetchBotSetting={fetchBotSetting}
                        botSettingData={botSettingData}
                        defaultLanguage={defaultLanguage}
                        botLanguage={botLanguage}
                        languages={languages}
                        botImportModal={botImportModal}
                        toggleBotImportModal={toggleBotImportModal}
                        uploadingDoc={uploadingDoc}
                        botImportCompleted={botImportCompleted}
                        openSnackbar={openSnackbar}
                      />
                    </DivWrapper>
                  </TabPane>

                  <TabPane tab="Entity" key="entity">
                    <DivWrapper
                      style={{
                        borderTop: 0,
                        margin: '0 1px',
                        padding: '0px',
                        borderRadius: 0,
                      }}
                    >
                      <EntityList
                        botId={botId}
                        botPermission={LocalDb.getPermissionForBot()}
                        removeSynonymTag={removeSynonymTag}
                        fetchEntityList={fetchEntityList}
                        fetchSystemEntityList={fetchSystemEntityList}
                        systemEntityList={systemEntityList}
                        handleChangeEntityDetail={handleChangeEntityDetail}
                        handleChangeEntityId={handleChangeEntityId}
                        entityData={entityData}
                        entityList={entityList}
                        entityDetail={entityDetail}
                        deleteEntity={deleteEntity}
                        fetchEntityById={fetchEntityById}
                        updateEntity={updateEntity}
                        handleChangeEntityData={handleChangeEntityData}
                        createEntity={createEntity}
                        clearEntityData={clearEntityData}
                        synonym={synonym}
                        handleChangeSynonym={handleChangeSynonym}
                        handleChangeInTagInput={handleChangeInTagInput}
                        handleChangeSynonymTag={handleChangeSynonymTag}
                        removeSynonym={removeSynonym}
                        regex={regex}
                        handleChangeRegex={handleChangeRegex}
                        removeRegex={removeRegex}
                      />
                    </DivWrapper>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </div>
        </div>
        <div className="try-out">
          <div
            style={{ width: '30px', cursor: 'pointer' }}
            onClick={() => {
              openTryOutModal();
            }}
          >
            <CommonIcons.ArrowLeft />
            <div className="try-out-text"> TRY OUT</div>
          </div>
        </div>
      </div>
      <TryOut botId={botId} />

      <SnackBar
        openSnackbar={snackbar}
        onClose={closeSnackbar}
        message={error}
        variant={variant}
      />
      {/* <SnackBar
        openSnackbar={openNoServiceSnackbar}
        onClose={() => setOpenNoServiceSnackbar(false)}
        message="Project has not been assigned"
        variant="error"
      /> */}
    </BotConfigurationTabStyle>
  );
};

export default BotConfigurationTab;

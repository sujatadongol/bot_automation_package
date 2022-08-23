import React, { useEffect, useState } from 'react';
import { Modal, Select, Tooltip } from 'antd';
import LogoutModal from 'components/LogoutModal';
import newSvg from '../../../../assets/new.svg';
import importSvg from '../../../../assets/import.svg';
import TableComponent from '../../../Table';
import delete_icon from '../../../../assets/delete.svg';
import history from '../../../../utils/history';
import BotConfigurationTabStyle from '../../../../containers/Bot/BotConfigurationTab/Style';
import { UnescapeHtml } from '../../../../utils/helper';
import addIcon from '../../../../assets/whiteAddIcon.svg';
import ImportIntentModalContent from './ImportIntentModalContent';

const IntentList = ({
  botSettingData,
  botPermission,
  deleteIntent,
  intentList,
  defaultLanguage,
  handleChangeIntentId,
  fetchIntent,
  count,
  clearIntentList,
  botId,
  botImport,
  uploadDocument,
  fileName,
  fileUrl,
  showBotImportProgressBar,
  botImportCompleted,
  botImportModal,
  toggleBotImportModal,
  uploadingDoc,
  openSnackbar,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [languageList, setLanguageList] = useState(undefined);

  useEffect(() => {
    if (botSettingData && botSettingData.language) {
      let list = botSettingData.language.split(',');
      setLanguageList(list);
    }
  }, [botSettingData]);

  useEffect(() => {
    if (languageList && (!sortedData || sortedData.length === 0)) {
      clearIntentList();
      if (localStorage.getItem('serviceId') !== '') {
        fetchIntent('0', botId, '', selectedLanguage);
      }
    }
  }, [languageList]);

  const [showBotImport, setShowBotImport] = useState(false);
  const [deleteIntentModal, setDeleteIntentModal] = useState(false);
  const openDeleteIntentModal = () => {
    setDeleteIntentModal(true);
  };
  const closeDeleteIntentModal = () => {
    setDeleteIntentModal(false);
  };
  const deleteIntentFunc = () => {
    deleteIntent();
    setDeleteIntentModal(false);
  };

  const sortedData =
    intentList && intentList.sort((a, b) => b.createdAt - a.createdAt);
  const columns = [
    {
      title: (
        <div style={{ textAlign: 'left', marginLeft: '10px', width: '200px' }}>
          Intents
        </div>
      ),
      render: intent => (
        <div
          style={{
            textAlign: 'left',
            marginLeft: '10px',
            cursor: 'pointer',
            width: '200px',
          }}
        >
          {intent.intentName}
        </div>
      ),
      width: '120px',
    },
    {
      title: <div style={{ width: '350px' }}>Training Phrase</div>,
      dataIndex: '',
      render: intent => (
        <div style={{ cursor: 'pointer', width: '350px' }}>
          <div>
            {intent &&
              intent.trainingPhrases &&
              intent.trainingPhrases
                .slice(0, 4)
                .map(single => <div>{UnescapeHtml(single.text)}</div>)}
          </div>
          {intent &&
          intent.trainingPhrases &&
          intent.trainingPhrases.length > 4 ? (
            <span
              style={{
                color: '#376AF5',
                fontSize: '14px',
                fontStyle: 'medium',
              }}
            >
              More ({' '}
              {intent &&
                intent.trainingPhrases &&
                intent.trainingPhrases.length - 4}{' '}
              )
            </span>
          ) : null}
        </div>
      ),
      width: '350px',
    },
    {
      title: 'Response',
      dataIndex: '',
      ellipsis: {
        showTitle: false,
      },
      render: intent => (
        <div style={{ cursor: 'pointer', width: '350px', maxHeight: '132px' }}>
          <div>
            {intent &&
              intent.botResponses &&
              intent.botResponses[0].intentResponses &&
              intent.botResponses[0].intentResponses
                .slice(0, 4)
                .map(single => <div>{UnescapeHtml(single.response)}</div>)}
          </div>
          {intent &&
          intent.botResponses &&
          intent.botResponses[0].intentResponses &&
          intent.botResponses[0].intentResponses.length > 4 ? (
            <span
              style={{
                color: '#376AF5',
                fontSize: '14px',
                fontStyle: 'medium',
              }}
            >
              More ({' '}
              {intent &&
                intent.botResponses &&
                intent.botResponses[0].intentResponses &&
                intent.botResponses[0].intentResponses.length - 4}{' '}
              )
            </span>
          ) : null}
        </div>
      ),
    },
    {
      render: single => (
        <img
          alt="delete"
          hidden={!botPermission}
          src={delete_icon}
          style={{ cursor: 'pointer' }}
          onClick={e => {
            e.stopPropagation();
            handleChangeIntentId(single.intentId);
            openDeleteIntentModal();
          }}
        />
      ),
      width: '70px',
    },
  ];

  return (
    <BotConfigurationTabStyle>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div
          // hidden={
          //   (sortedData && sortedData.length === 0) || sortedData === undefined
          // }
          style={{
            fontSize: '14px',
            letterSpacing: '0.01em',
            color: '#5a5a5a',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '20px',
          }}
        >
          Language :{' '}
          <Select
            value={defaultLanguage}
            style={{
              width: '153px',
              marginLeft: '10px',
            }}
            onChange={language => {
              clearIntentList();
              fetchIntent('0', botId, '', language);
              setSelectedLanguage(language);
              history.replace(`/bot/${botId}/intent/${language}`);
            }}
          >
            {languageList &&
              languageList.map(lang => {
                return (
                  <Select.Option key={lang}>
                    {lang === 'en' ? 'English' : 'Nepali'}
                  </Select.Option>
                );
              })}
          </Select>
        </div>
      </div>

      {showBotImport && (
        <div className="float-import">
          <div className="d-flex justify-content-end align-items-center">
            <span style={{ fontWeight: 500, color: '#333333' }}>New</span>
            <img
              alt="create-new"
              src={newSvg}
              height={35}
              width={35}
              style={{
                marginBottom: '10px',
                marginLeft: '25px',
                cursor: 'pointer',
              }}
              onClick={() =>
                history.push(`/bot/intent/create/${botId}/${selectedLanguage}`)
              }
            />
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <span style={{ fontWeight: 500, color: '#333333' }}>Import</span>
            <img
              alt="import"
              src={importSvg}
              height={35}
              width={35}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => {
                toggleBotImportModal(true);
                setShowBotImport(visible => !visible);
              }}
            />
          </div>
        </div>
      )}

      {botPermission === true ? (
        <Tooltip title="Create Intent" placement="left">
          <a
            className="float"
            onClick={() => {
              setShowBotImport(visible => !visible);
            }}
          >
            <img src={addIcon} width={16} height={16} alt="add-icon" />
          </a>
        </Tooltip>
      ) : null}

      <TableComponent
        showTotal
        height={350}
        totalData={parseInt(count)}
        columns={columns}
        data={sortedData}
        onRowClick={intent => ({
          onClick: () => {
            history.push(
              `/bot/detail/${botId}/intent/${
                intent.intentId
              }/${defaultLanguage}`,
            );
          },
        })}
        fetchData={() => {
          console.log(
            'last conversation',
            sortedData && sortedData[sortedData.length - 1],
          );
          const from =
            sortedData &&
            sortedData[sortedData.length - 1] &&
            sortedData[sortedData.length - 1].createdAt - 1;
          fetchIntent(from, botId, true, selectedLanguage);
        }}
      />

      {/* delete modal */}
      <LogoutModal
        title={<p style={{ fontSize: '26px', margin: '10px' }}>Confirmation</p>}
        visibility={deleteIntentModal}
        closeModal={closeDeleteIntentModal}
        content="Do you want to delete intent ?"
        cancelLabel="Cancel"
        actionLabel="Delete"
        onClick={deleteIntentFunc}
      />

      {/* bot import modal */}
      <Modal
        visible={botImportModal}
        closable={false}
        footer={null}
        centered
        bodyStyle={{ padding: '20px' }}
        onCancel={() => {
          toggleBotImportModal(false);
        }}
        maskClosable={false}
        // style={{ padding: '20px' }}
      >
        <ImportIntentModalContent
          defaultLanguage={defaultLanguage}
          botImportCompleted={botImportCompleted}
          toggleBotImportModal={toggleBotImportModal}
          botId={botId}
          botImport={botImport}
          fileName={fileName}
          fileUrl={fileUrl}
          progressModalVisible={showBotImportProgressBar}
          uploadDocument={uploadDocument}
          uploadingDoc={uploadingDoc}
          openSnackbar={openSnackbar}
        />
      </Modal>
    </BotConfigurationTabStyle>
  );
};

export default IntentList;

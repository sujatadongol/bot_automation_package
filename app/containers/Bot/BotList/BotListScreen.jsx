import React, { useEffect, useRef, useState } from 'react';
import { format } from 'timeago.js';
import { Popover, Switch, Tooltip } from 'antd';
import SnackBar from '../../../components/ReusableComponents/Snackbar';
import TableComponent from '../../../components/ReusableComponents/Table';
import history from '../../../utils/history';
import { DateTimeFormatting } from '../../../utils/helper';
import DivWrapper from '../../../components/ReusableComponents/DivWrapper/DivWrapper';
import './Style.css';
import CreateBotModal from '../../../components/Bot/CreateBotModal';
import ConfirmationModal from '../../../components/ReusableComponents/ModalComponents/ConfirmationModal';
import { getActiveVersionCreatedAt } from './helper';
import { CommonIcons } from '../../../assets/CommonIcons';
import OutlinedSpinner from '../../../components/ReusableComponents/Spinner';

const BotListScreen = ({
  match,
  loading,
  retrainingBotId,
  modalLoader,
  error,
  snackbar,
  closeSnackbar,
  variant,

  botList,
  count,
  fetchBotList,
  fetchBotVersion,
  publishBotVersion,
  enableBotStatus,
  retrainBot,
  toggleRetrainLoader,

  createBotModalVisibility,
  toggleCreateBotModal,
  botImageUrl,
  botImageLoader,
  uploadBotImage,
  createBot,

  clearBotList,
  toggleEmptyServiceModal,
  notificationObj,
  reloadContainer,
  reloadContainerFunc,
  // getAllBot,
  // getNextPageBot,
  // cursor,

  projectDetails,
  fetchProjectDetails,

  teams,
  fetchTeams,
  fetchModalData,
  ticketModal,

  deleteBot,
  botPermissionModel,
}) => {
  const [openVersionPopover, setOpenVersionPopover] = useState(false);
  const [openLanguagePopover, setOpenLanguagePopover] = useState(false);
  const [changeBotStatusModal, setChangeBotStatusModal] = useState(false);
  const [botObj, setBotObj] = useState({ botId: '', status: false });
  useEffect(() => {
    if (!localStorage.getItem('serviceId')) {
      toggleEmptyServiceModal(true);
      // SessionDb.isEmployee() && setOpenNoServiceSnackbar(true);
    } else {
      fetchBotList();
      // getAllBot();
    }

    fetchProjectDetails();
    fetchTeams();
    fetchModalData(20);
  }, []);

  useEffect(
    () => () => {
      clearBotList();
      closeSnackbar();
    },
    [],
  );

  if (reloadContainer && localStorage.getItem('serviceId')) {
    clearBotList();
    fetchBotList();
    reloadContainerFunc();
  }

  const versionMenu = useRef();

  const handleClickOutside = e => {
    if (e.target.className.includes('version-dropdown-option')) {
      console.log('inside');
      // inside click
      return;
    }
    console.log('outside');
    // outside click
    setOpenVersionPopover(false);
  };

  useEffect(() => {
    if (openVersionPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openVersionPopover]);

  const columns = [
    {
      title: <div style={{ textAlign: 'left' }}>Name</div>,
      dataIndex: '',
      render: bot => (
        <div
          className="text-truncate"
          style={{ display: 'flex', width: '300px' }}
        >
          {bot.name}
        </div>
      ),
      width: 350,
    },
    {
      title: (
        <div style={{ textAlign: 'left', width: '100px' }}>Created Date</div>
      ),
      dataIndex: '',
      render: bot => (
        <div className="text-truncate">
          <Tooltip
            title={DateTimeFormatting(bot.createdAt / 1000)}
            getPopupContainer={trigger => trigger.parentNode}
          >
            {bot.createdAt && format(bot.createdAt)}
          </Tooltip>
        </div>
      ),
      width: '120px',
    },
    {
      title: (
        <div style={{ textAlign: 'left', width: '100px' }}>Last Trained</div>
      ),
      dataIndex: '',
      render: bot => (
        <div className="text-truncate">
          <Tooltip
            title={DateTimeFormatting(bot.currentLastTrained / 1000)}
            getPopupContainer={trigger => trigger.parentNode}
          >
            {bot.currentLastTrained ? format(bot.currentLastTrained) : '-'}
          </Tooltip>
        </div>
      ),
      width: '120px',
    },
    {
      title: <div style={{ textAlign: 'left', width: '100px' }}>Version</div>,
      dataIndex: '',
      render: bot =>
        !bot.activeBotVersion ? (
          '-'
        ) : (
          <div
            onClick={e => {
              e.stopPropagation();
              if (!openVersionPopover) {
                setOpenVersionPopover(bot.botSettingId);
              } else {
                setOpenVersionPopover(false);
              }
            }}
            style={{ position: 'relative' }}
          >
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {bot.activeBotVersion}
              <CommonIcons.ExpandMore hidden={!botPermissionModel.createBot} />
            </div>
            <div
              id="version-dropdown-wrapper-id"
              ref={versionMenu}
              className="version-dropdown-wrapper"
              hidden={
                !openVersionPopover || openVersionPopover !== bot.botSettingId
              }
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {bot.botVersions &&
                bot.botVersions
                  .sort((a, b) => parseInt(a.createdAt) - parseInt(b.createdAt))
                  .map(single => {
                    if (
                      single.language === bot.selectedLanguage &&
                      parseInt(single.createdAt) >=
                        getActiveVersionCreatedAt(
                          bot.botVersions,
                          bot.activeBotVersion,
                          bot.selectedLanguage,
                        )
                    ) {
                      return (
                        <div
                          key={single.botVersionId}
                          className="version-dropdown-option"
                          onClick={e => {
                            setOpenVersionPopover(false);
                            publishBotVersion(
                              bot.botSettingId,
                              bot.selectedLanguage,
                              single.trainedModelName,
                              single.versionName,
                              single.botVersionId,
                            );
                          }}
                          style={{ minWidth: 100 }}
                        >
                          {single.versionName}
                        </div>
                      );
                    }
                  })}
            </div>
          </div>
        ),
      width: '120px',
    },
    {
      title: <div style={{ textAlign: 'left', width: '100px' }}>Language</div>,
      dataIndex: '',
      render: bot => (
        <div
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Popover
            key={bot.botSettingId}
            visible={bot.botSettingId === openLanguagePopover}
            onVisibleChange={visibility => {
              visibility
                ? setOpenLanguagePopover(bot.botSettingId)
                : setOpenLanguagePopover(false);
            }}
            getPopupContainer={trigger => trigger.parentNode}
            placement="bottom"
            trigger="click"
            content={
              <div className="language-dropdown-wrapper">
                {bot.language &&
                  bot.language.split(',').map(lang => {
                    const botLanguage = lang === 'en' ? 'English' : 'Nepali';
                    return (
                      <div
                        key={lang}
                        className="version-dropdown-option"
                        onClick={() => {
                          setOpenLanguagePopover(false);
                          fetchBotVersion(bot.botSettingId, lang);
                        }}
                      >
                        {botLanguage}
                      </div>
                    );
                  })}
              </div>
            }
          >
            <div
              onClick={e => {
                e.stopPropagation();
                setOpenLanguagePopover(bot.botSettingId);
              }}
              className="language-wrapper"
            >
              {bot.selectedLanguage === 'en' ? 'English' : 'Nepali'}{' '}
              {botPermissionModel.createBot && <CommonIcons.ExpandMore />}
            </div>
          </Popover>
        </div>
      ),
    },
    {
      dataIndex: '',
      render: bot => (
        <div
          onClick={e => {
            if (botPermissionModel.createBot) {
              e.stopPropagation();
              setBotObj({ botId: bot.botSettingId, status: !bot.botStatus });
              setChangeBotStatusModal(true);
            }
          }}
        >
          <Switch
            className="switch"
            disabled={!botPermissionModel.createBot}
            checked={bot.botStatus ? bot.botStatus : false}
            size="small"
          />
        </div>
      ),
      width: '100px',
    },
    {
      dataIndex: '',
      render: bot => (
        <div
          className="retrain-button"
          onClick={e => {
            e.stopPropagation();
            if (botPermissionModel.createBot) {
              !retrainingBotId.includes(bot.botSettingId) &&
                (bot &&
                  bot.intentCount &&
                  bot.intentCount[bot.selectedLanguage] &&
                  parseInt(bot.intentCount[bot.selectedLanguage]) > 0) &&
                retrainBot(bot.botSettingId, bot.version, bot.selectedLanguage);
            }
          }}
          style={
            (retrainingBotId && retrainingBotId.includes(bot.botSettingId)) ||
            !botPermissionModel.createBot ||
            !(
              bot &&
              bot.intentCount &&
              bot.intentCount[bot.selectedLanguage] &&
              parseInt(bot.intentCount[bot.selectedLanguage]) > 0
            )
              ? { background: 'rgb(132, 148, 247)', cursor: 'not-allowed' }
              : { background: '#376af5' }
          }
        >
          {retrainingBotId && retrainingBotId.includes(bot.botSettingId)
            ? 'Training...'
            : 'Retrain'}
        </div>
      ),
    },
    // {
    //   dataIndex: '',
    //   render: bot => (
    //     <>
    //       {botPermissionModel.createBot && (
    //         <button
    //           type="button"
    //           disabled={!botPermissionModel.createBot}
    //           className="delete-button"
    //           onClick={e => {
    //             e.stopPropagation();
    //             deleteBot(bot);
    //           }}
    //         >
    //           <CommonIcons.BotListDeleteIcon />
    //         </button>
    //       )}
    //     </>
    //   ),
    // },
  ];

  const toggleRetrainLoaderFunc = payload => {
    const filteredBot =
      botList &&
      botList.filter(singleBot => singleBot.botSettingId === payload.botId)[0];
    // eslint-disable-next-line consistent-return
    const versionExists = (arr, id) => {
      if (arr) {
        return (
          arr &&
          arr.length > 0 &&
          arr.some(function(el) {
            return el.botVersionId === id;
          })
        );
      }
    };
    // eslint-disable-next-line no-unused-expressions
    payload &&
      filteredBot &&
      (retrainingBotId.includes(payload.botId) ||
        !versionExists(filteredBot.botVersions, payload.botVersionId)) &&
      toggleRetrainLoader(
        payload.botId,
        payload.botVersion,
        payload.botVersionId,
        payload.trainedModelName,
        payload.language,
      );
  };

  // console.log('PROJECT DETAILS', projectDetails);
  // console.log('TEAMS', teams);

  return (
    <>
      {notificationObj &&
        notificationObj.payload !== '' &&
        notificationObj.type === 1 &&
        JSON.parse(notificationObj.payload).errorCode === undefined &&
        toggleRetrainLoaderFunc(JSON.parse(notificationObj.payload))}

      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      )}

      <DivWrapper style={{ marginTop: '10px' }}>
        <TableComponent
          showTotal
          totalData={parseInt(count)}
          onRowClick={record => ({
            onClick: () => {
              if (botPermissionModel.createBot) {
                history.push(
                  `/bot/${record.botSettingId}/general/${
                    record.selectedLanguage
                  }`,
                );
              }
            },
          })}
          height={260}
          data={botList}
          columns={columns}
          fetchData={() => {
            const from =
              botList &&
              botList[botList.length - 1] &&
              botList[botList.length - 1].createdAt - 1;
            // getNextPageBot(cursor.nextPage);
          }}
        />
      </DivWrapper>

      {botPermissionModel.createBot && (
        <>
          {localStorage.getItem('serviceId') && (
            <Tooltip title="Create Bot">
              <a
                className="float"
                onClick={() => {
                  toggleCreateBotModal(true);
                }}
              >
                <CommonIcons.WhiteAddIcon />
                {/* <img alt="Add" src={addIcon} width={16} height={16} /> */}
              </a>
            </Tooltip>
          )}
        </>
      )}

      <CreateBotModal
        closeModal={() => toggleCreateBotModal(false)}
        visibility={createBotModalVisibility}
        createBot={createBot}
        modalLoader={modalLoader}
        uploadBotImage={uploadBotImage}
        botIconUrl={botImageUrl}
        botImageLoader={botImageLoader}
        projectDetails={projectDetails}
        teams={teams}
        ticketModal={ticketModal}
      />

      <ConfirmationModal
        onClick={() => enableBotStatus(botObj.botId, botObj.status)}
        visibility={changeBotStatusModal}
        closeModal={() => setChangeBotStatusModal(false)}
        actionLabel="Yes"
        cancelLabel="Cancel"
        title="Confirmation"
        content={
          botObj.status
            ? 'Do you want to enable bot ?'
            : 'Do you want to disable bot ?'
        }
      />

      <SnackBar
        openSnackbar={snackbar}
        onClose={closeSnackbar}
        message={error}
        variant={variant}
      />
      {/* <SnackBar
        openSnackbar={openNoServiceSnackbar}
        onClose={() => setOpenNoServiceSnackbar(false)}
        message="Service has not been assigned"
        variant="error"
      /> */}
    </>
  );
};

export default BotListScreen;

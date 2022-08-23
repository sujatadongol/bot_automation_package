import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Tooltip } from 'antd';
import { format } from 'timeago.js';
import SnackBar from '../../components/Snackbar';
import AddCustomRuleModal from '../../components/SettingComponent/AddCustomRuleModal';
import addIcon from '../../assets/whiteAddIcon.svg';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BreadCrumbPathFunc, BreadCrumbValueFunc } from '../Navbar/helper';
import DivWrapper from '../../components/DivWrapper/DivWrapper';
import { BreadCrumbsDiv } from '../../components/Layouts/NavLayout/Style';
import TableComponent from '../../components/Table';
import CommonIcon from '../../assets/images/common/CommonIcon';
import {
  TicketSettingStyle,
  RetrainButton,
  ActionWrapper,
  CustomRuleButton,
  ActionButton,
} from './Style';
import NewTicketModal from '../../components/SettingComponent/NewTicketModal';
import DeleteModal from '../../components/DeleteComponent/DeleteModal';

const TicketSetting = ({
  match,
  loading,
  snackBar,
  error,
  variant,
  handleSnackBarClose,
  fetchTicketSetting,
  fetchCustomRule,
  addCustomRule,
  clearCustomRuleModal,
  autoTicketList,
  fetchAutoTicketCreateList,
  createAutoTicket,
  updateAutoTicket,
  getAutoTicketCreateRules,
  ticketDetail,
  deleteAutoTicketCreate,
  retrainAutoTicketCreate,
  autoTicketCreate,
  nextCursor,
  botPermissionModel,
  notificationObj,
  toggleRetrainLoaderInAutoTicketCreate,
}) => {
  useEffect(() => {
    if (localStorage.getItem('serviceId') !== '') {
      fetchAutoTicketCreateList(page);
    }
  }, []);

  useEffect(
    () => () => {
      clearCustomRuleModal();
    },
    [],
  );

  useEffect(() => {
    if (
      notificationObj &&
      notificationObj.payload !== '' &&
      notificationObj.type === 6 &&
      !JSON.parse(notificationObj.payload).errorCode
    ) {
      const payload = JSON.parse(notificationObj.payload);
      toggleRetrainLoaderInAutoTicketCreate(
        payload.serviceId,
        payload.lastTrained,
      );
    }
  }, [notificationObj]);

  useEffect(() => {
    // setSelectedTicket(ticketDetail);
    setSelectedRow(ticketDetail);
  }, [ticketDetail]);

  const [newTicketModal, setNewTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [addCustomRuleModal, setAddCustomRuleModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  //   const [retrainModal, setRetrainModal] = useState(false);
  console.log(autoTicketList, 'auto ticket list');
  const [selectedRow, setSelectedRow] = useState(null);
  const page = 20;

  const openAddCustomRuleModal = record => {
    setAddCustomRuleModal(true);
    // getAutoTicketCreateRules(record.id);

    if (record === 'empty') {
      setSelectedRow('new');
    } else {
      setSelectedRow(record);
    }
  };

  const closeAddCustomRuleModal = () => {
    setAddCustomRuleModal(false);
    setSelectedRow(null);
  };

  const openNewTicketModal = () => {
    setNewTicketModal(true);
    setSelectedTicket(null);
  };

  const closeNewTicketModal = () => {
    setNewTicketModal(false);
  };

  const openDeleteModal = id => {
    setSelectedId(id);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };
  const handleEditTicket = record => {
    // getAutoTicketCreateRules(record.id);
    setSelectedTicket(record);
    setNewTicketModal(true);
  };
  const handleRetrainModal = record => {
    // setRetrainModal(true);
    // if (!retrainModal) {
    if (!record.retrainModal) {
      retrainAutoTicketCreate(record.id);
    }
    // }
    setSelectedId(record.id);
  };
  console.log(selectedTicket, 'selected ticket', botPermissionModel);
  const columns = [
    {
      title: <div style={{ textAlign: 'left' }}>Model Name</div>,
      dataIndex: 'modelName',
      render: modelName => <div className="text-truncate">{modelName}</div>,
    },
    {
      title: 'Rules',
      key: 'rules',
      width: 300,
      render: (text, record) => {
        if (record.count && record.count > 0) {
          return (
            <CustomRuleButton onClick={() => openAddCustomRuleModal(record)}>
              View({record.rules ? record.rules.length : record.count})
            </CustomRuleButton>
          );
        }
        return (
          <>
            {botPermissionModel.createBot && (
              <CustomRuleButton onClick={() => openAddCustomRuleModal('empty')}>
                Add Custom Rule
              </CustomRuleButton>
            )}
          </>
        );
      },
    },
    {
      title: 'Last Trained',
      //   dataIndex: 'lastTrained',
      //   key: 'lastTrained',
      render: (text, record) => {
        return (
          <div className="text-truncate">{format(record.lastTrained)}</div>
        );
        // return <div className="text-truncate">Not Trained</div>;
      },
    },
    {
      render: record => (
        <RetrainButton
          onClick={() => {
            if (botPermissionModel.createBot) {
              handleRetrainModal(record);
            }
          }}
          style={!botPermissionModel.createBot ? { cursor: 'not-allowed' } : {}}
          retrain={record && record.retrainModal}
        >
          {record && record.retrainModal ? 'Training...' : 'Retrain'}
        </RetrainButton>
      ),
    },
    {
      title: (
        <>
          {botPermissionModel.createBot && (
            <div style={{ textAlign: 'center' }}>Action</div>
          )}
        </>
      ),
      key: 'action',
      width: 300,
      render: record => (
        <>
          {botPermissionModel.createBot && (
            <ActionWrapper>
              <ActionButton onClick={() => handleEditTicket(record)}>
                <CommonIcon.EditIcon2 />
              </ActionButton>

              <ActionButton onClick={() => openDeleteModal(record.id)}>
                <CommonIcon.DeleteIcon2 />
              </ActionButton>
            </ActionWrapper>
          )}
        </>
      ),
    },
  ];

  return (
    <TicketSettingStyle>
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>

      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <CircularProgress style={{ color: '#376AF5' }} />
        </div>
      )}

      <DivWrapper style={{ marginTop: '10px' }}>
        <TableComponent
          showTotal
          totalData={autoTicketList && autoTicketList.length}
          height={300}
          data={autoTicketList}
          columns={columns}
        />
      </DivWrapper>
      {botPermissionModel.createBot && (
        <>
          {localStorage.getItem('serviceId') && (
            <Tooltip title="Create Ticket" placement="left">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <div
                role="button"
                tabIndex="0"
                className="float"
                onClick={openNewTicketModal}
              >
                <img src={addIcon} width={16} height={16} alt="add" />
              </div>
            </Tooltip>
          )}
        </>
      )}

      <AddCustomRuleModal
        visibility={addCustomRuleModal}
        closeModal={closeAddCustomRuleModal}
        saveCustomRule={addCustomRule}
        selectedRow={selectedRow}
        updateAutoTicket={updateAutoTicket}
        botPermissionModel={botPermissionModel}
      />

      <NewTicketModal
        visibility={newTicketModal}
        closeModal={closeNewTicketModal}
        saveCustomRule={addCustomRule}
        createAutoTicket={createAutoTicket}
        selectedTicket={selectedTicket}
        updateAutoTicket={updateAutoTicket}
        autoTicketCreate={autoTicketCreate}
      />

      <DeleteModal
        title={
          <p style={{ fontSize: '24px', margin: '0', textAlign: 'center' }}>
            Confirmation
          </p>
        }
        visibility={deleteModal}
        closeModal={closeDeleteModal}
        content="Do you want to delete this ticket?"
        cancelLabel="Cancel"
        actionLabel="Yes"
        onClick={() => deleteAutoTicketCreate(selectedId)}
        // width="450px"
      />

      <SnackBar
        openSnackbar={snackBar}
        onClose={handleSnackBarClose}
        message={error}
        variant={variant}
      />
    </TicketSettingStyle>
  );
};

export default TicketSetting;

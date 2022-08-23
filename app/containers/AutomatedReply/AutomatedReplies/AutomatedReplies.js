import React, { useEffect, useState } from 'react';
import { Popover, Row, Switch } from 'antd';
import { CircularProgress } from '@material-ui/core';
import SnackBar from '../../../components/Snackbar';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BreadCrumbPathFunc, BreadCrumbValueFunc } from '../../Navbar/helper';
import './Style.css';
import DivWrapper from '../../../components/DivWrapper/DivWrapper';
import TableComponent from '../../../components/Table';
import history from '../../../utils/history';
import LocalDb from '../../../localStorage';
import { CommonIcons } from '../../../assets/CommonIcons';
import addIcon from '../../../assets/whiteAddIcon.svg';
import ConfirmationModal from '../../../components/ReusableComponents/ModalComponents/ConfirmationModal';
import { BreadCrumbsDiv } from '../../../components/Layouts/NavLayout/Style';
import { IconWrapper } from './style';

const AutomatedReplies = ({
  loading,
  message,
  openSnackbar,
  variant,
  count,

  fetchAutomatedReplies,
  automatedRepliesList,
  deleteAutomatedReply,
  updateAutomatedReplyStatus,

  toggleEmptyServiceModal,
  reloadContainer,
  reloadContainerFunc,
  closeSnackbar,
  match,
  botPermissionModel,
}) => {
  const [deleteReply, setDeleteReply] = useState(false);
  const [selectedReply, setSelectedReply] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('serviceId')) {
      toggleEmptyServiceModal(true);
    } else {
      fetchAutomatedReplies();
    }
  }, []);

  {
    if (reloadContainer && localStorage.getItem('serviceId')) {
      fetchAutomatedReplies();
      reloadContainerFunc();
    }
  }

  const columns = [
    {
      title: <div style={{ textAlign: 'left' }}>Title</div>,
      dataIndex: 'title',
      render: title => <div className="text-truncate">{title}</div>,
      width: 150,
    },
    {
      title: <div style={{ textAlign: 'left' }}>Type</div>,
      dataIndex: 'automatedReplyType',
      render: automatedReplyType =>
        automatedReplyType === 'FIXED_REPLY_TYPE'
          ? 'Fixed Reply'
          : 'Resolution Reply',
      width: 100,
    },
    {
      dataIndex: '',
      render: automatedReply => (
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          style={{ width: 60 }}
        >
          <Switch
            className="switch"
            checked={
              automatedReply.automatedReplyStatus
                ? automatedReply.automatedReplyStatus === 'ACTIVE'
                : false
            }
            disabled={!botPermissionModel.createBot}
            onChange={e => {
              updateAutomatedReplyStatus(automatedReply.automatedReplyKey, e);
            }}
            size="small"
          />
        </div>
      ),
      width: 60,
    },
    {
      title: '',
      dataIndex: '',
      render: automatedReply => (
        <>
          {botPermissionModel.createBot && (
            <IconWrapper>
              <div
                onClick={e => {
                  e.stopPropagation();
                  history.push(
                    `/automated/replies/${
                      automatedReply.automatedReplyType === 'FIXED_REPLY_TYPE'
                        ? 'fixed'
                        : 'resolution'
                    }/${automatedReply.automatedReplyKey}`,
                  );
                }}
              >
                <CommonIcons.Edit />
              </div>
              <div
                onClick={e => {
                  e.stopPropagation();
                  setDeleteReply(true);
                  setSelectedReply(automatedReply.automatedReplyKey);
                }}
              >
                <CommonIcons.Delete />
              </div>
            </IconWrapper>
          )}
        </>
      ),
      width: 120,
    },
  ];

  const popoverContent = (
    <div className="automated-replies-actions">
      <div
        className="automated-replies-option"
        onClick={() => {
          history.push('/automated/replies/fixed/create');
        }}
      >
        Fixed Reply
      </div>
      <div
        className="automated-replies-option"
        onClick={() => {
          history.push('/automated/replies/resolution/create');
        }}
      >
        Resolution Reply
      </div>
    </div>
  );

  return (
    <>
      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <CircularProgress style={{ color: '#376AF5' }} />
        </div>
      )}

      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>

      <DivWrapper style={{ marginTop: '10px' }}>
        <TableComponent
          showTotal
          totalData={parseInt(count)}
          onRowClick={record => ({
            onClick: () => {
              if (botPermissionModel.createBot) {
                history.push(
                  `/automated/replies/${
                    record.automatedReplyType === 'FIXED_REPLY_TYPE'
                      ? 'fixed'
                      : 'resolution'
                  }/${record.automatedReplyKey}`,
                );
              }
            },
          })}
          height={300}
          data={automatedRepliesList}
          columns={columns}
          fetchData={() => {
            console.log(
              'last replies',
              automatedRepliesList &&
                automatedRepliesList[automatedRepliesList.length - 1],
            );
            const from =
              automatedRepliesList &&
              automatedRepliesList[automatedRepliesList.length - 1] &&
              automatedRepliesList[automatedRepliesList.length - 1].createdAt -
                1;
            fetchAutomatedReplies(from, true);
          }}
        />
      </DivWrapper>

      {botPermissionModel.createBot && (
        <>
          {LocalDb.getPermissionForBot() && (
            <Popover content={popoverContent} placement="topRight">
              <a className="float">
                <img src={addIcon} width={16} height={16} alt="add" />
              </a>
            </Popover>
          )}
        </>
      )}

      <ConfirmationModal
        onClick={() => deleteAutomatedReply(selectedReply)}
        content="Are you sure you want to delete this automated reply?"
        closeModal={() => setDeleteReply(false)}
        cancelLabel="Cancel"
        actionLabel="Delete"
        visibility={deleteReply}
        title="Confirmation"
      />
      <SnackBar
        onClose={closeSnackbar}
        variant={variant}
        message={message}
        openSnackbar={openSnackbar}
      />
    </>
  );
};

AutomatedReplies.propTypes = {};

export default AutomatedReplies;

import { Tooltip } from 'antd';
import Modal from 'components/LogoutModal';
import React, { useState } from 'react';
import { CommonIcons } from '../../assets/CommonIcons';
import addIcon from '../../assets/whiteAddIcon.svg';
import history from '../../utils/history';
import TableComponent from '../Table';
import { IconWrapper } from './style';

const ApiList = ({
  apiList,
  fetchApiList,
  deleteApi,
  integrationAdmin,
  botPermissionModel,
}) => {
  const [apiId, setApiId] = useState(false);
  const [deleteApiModal, setDeleteApiModal] = useState(false);
  const openDeleteApiModal = () => {
    setDeleteApiModal(true);
  };
  const closeDeleteApiModal = () => {
    setDeleteApiModal(false);
  };
  const deleteApiFunc = () => {
    deleteApi(apiId);
    setDeleteApiModal(false);
  };
  const serviceId = localStorage.getItem('serviceId');
  const sortedData =
    apiList && apiList.sort((a, b) => b.createdAt - a.createdAt);
  const columns = [
    {
      title: <div style={{ textAlign: 'left', marginLeft: '10px' }}>Title</div>,
      dataIndex: 'title',
      render: title => (
        <div style={{ textAlign: 'left', marginLeft: '10px' }}>{title}</div>
      ),
    },
    {
      title: 'Url',
      dataIndex: 'url',
    },
    {
      title: 'Method',
      dataIndex: 'method',
    },
    {
      title: '',
      dataIndex: 'apiId',
      render: apiId => (
        <>
          {botPermissionModel.createBot && (
            <IconWrapper>
              <div
                onClick={() => {
                  history.push(`/service/api/update/${serviceId}/${apiId}`);
                }}
                hidden={!integrationAdmin}
              >
                <CommonIcons.Edit />
              </div>

              <div
                hidden={!integrationAdmin}
                onClick={e => {
                  e.stopPropagation();
                  setApiId(apiId);
                  openDeleteApiModal();
                }}
              >
                <CommonIcons.Delete />
              </div>
            </IconWrapper>
          )}
        </>
      ),
      width: '100px',
    },
  ];

  return (
    <div style={{ margin: '0' }}>
      <TableComponent
        columns={columns}
        data={sortedData}
        fetchData={a => {
          if (a === sortedData.length / 10) {
            fetchApiList((a + 1) * 10);
          }
        }}
        onRowClick={record => ({
          onClick: () => {
            if (botPermissionModel.createBot) {
              history.push(
                `/service/api/update/${record.serviceId}/${record.apiId}`,
              );
            }
          },
        })}
      />
      {botPermissionModel.createBot && (
        <>
          {integrationAdmin && (
            <Tooltip title="Create Api">
              <div
                className="float"
                onClick={() => {
                  history.push(`/service/api/create/${serviceId}`);
                }}
              >
                <img src={addIcon} width={16} height={16} alt="add" />
              </div>
            </Tooltip>
          )}
        </>
      )}

      {/* delete modal */}
      <Modal
        title={<p style={{ fontSize: '26px', margin: '10px' }}>Confirmation</p>}
        visibility={deleteApiModal}
        closeModal={closeDeleteApiModal}
        content="Do you want to delete api ?"
        cancelLabel="Cancel"
        actionLabel="Delete"
        onClick={deleteApiFunc}
      />
    </div>
  );
};

export default ApiList;

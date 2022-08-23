import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import TableComponent from '../../../Table';
import edit_icon from '../../../../assets/edit.svg';
import delete_icon from '../../../../assets/delete.svg';
import CreateEntityModal from './CreateEntity/CreateEntityModal';
import { ConvertEnum } from '../../../../utils/helper';
import UpdateEntityModal from './UpdateEntity/UpdateEntityModal';
import Modal from 'components/LogoutModal';
import addIcon from '../../../../assets/whiteAddIcon.svg';
import BotEntityStyle from './Style';

const EntityList = ({
  botPermission,

  fetchSystemEntityList,
  fetchEntityList,

  synonym,
  regex,
  entityData,
  systemEntityList,
  entityList,
  handleChangeEntityData,
  handleChangeInTagInput,
  removeSynonymTag,
  handleChangeSynonymTag,
  createEntity,
  clearEntityData,
  handleChangeRegex,
  removeRegex,
  handleChangeSynonym,
  removeSynonym,

  handleChangeEntityId,
  entityDetail,
  fetchEntityById,
  handleChangeEntityDetail,
  updateEntity,
  deleteEntity,
  botId,
}) => {
  useEffect(() => {
    if (localStorage.getItem('serviceId') !== '') {
      fetchSystemEntityList(botId, '0');
      fetchEntityList(botId, '0');
    }
  }, []);

  const [createEntityModal, setCreateEntityModal] = useState(false);
  const openCreateEntityModal = () => {
    setCreateEntityModal(true);
  };
  const closeCreateEntityModal = () => {
    setCreateEntityModal(false);
    handleChangeEntityData('entityDataType', '');
    handleChangeEntityData('entityName', '');
    clearEntityData();
  };

  const [updateEntityModal, setUpdateEntityModal] = useState(false);
  const openUpdateEntityModal = () => {
    fetchEntityById();
    setUpdateEntityModal(true);
  };
  const closeUpdateEntityModal = () => {
    setUpdateEntityModal(false);
    clearEntityData();
  };

  const [deleteEntityModal, setDeleteEntityModal] = useState(false);
  const openDeleteEntityModal = () => {
    setDeleteEntityModal(true);
  };
  const closeDeleteEntityModal = () => {
    setDeleteEntityModal(false);
  };
  const deleteEntityFunc = () => {
    deleteEntity(botId);
    setDeleteEntityModal(false);
  };

  const sortedData =
    entityList && entityList.sort((a, b) => b.createdAt - a.createdAt);
  const columns = [
    {
      title: <div style={{ textAlign: 'left', marginLeft: '10px' }}>Name</div>,
      dataIndex: '',
      render: entity => (
        <div
          style={{ textAlign: 'left', marginLeft: '10px' }}
          onClick={() => {
            handleChangeEntityId(entity.entityId);
            openUpdateEntityModal();
          }}
        >
          {entity && entity.entityName}
        </div>
      ),
    },
    {
      title: 'Type',
      dataIndex: '',
      render: entity => (
        <div
          onClick={() => {
            handleChangeEntityId(entity.entityId);
            openUpdateEntityModal();
          }}
        >
          {entity &&
            entity.entityDataType &&
            ConvertEnum(entity.entityDataType)}
        </div>
      ),
    },
    {
      title: '',
      dataIndex: '',
      render: entity => (
        <>
          <img
            hidden={!botPermission}
            src={edit_icon}
            style={{ cursor: 'pointer', marginRight: '2rem' }}
            onClick={() => {
              handleChangeEntityId(entity.entityId);
              openUpdateEntityModal();
            }}
          />
          <img
            hidden={!botPermission}
            src={delete_icon}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              handleChangeEntityId(entity.entityId);
              openDeleteEntityModal(entity.entityId);
            }}
          />
        </>
      ),
      width: '100px',
    },
  ];
  const sortedSystemData =
    systemEntityList &&
    systemEntityList.sort((a, b) => b.createdAt - a.createdAt);
  const systemEntityColumn = [
    {
      title: <div style={{ textAlign: 'left', marginLeft: '10px' }}>Name</div>,
      dataIndex: '',
      render: entity => (
        <div
          style={{ textAlign: 'left', marginLeft: '10px' }}
          onClick={() => {
            handleChangeEntityId(entity.entityId);
            openUpdateEntityModal();
          }}
        >
          {entity && entity.entityName}
        </div>
      ),
    },
    {
      title: <div style={{ textAlign: 'left', marginLeft: '10px' }}>Type</div>,
      dataIndex: '',
      render: entity => (
        <div
          onClick={() => {
            handleChangeEntityId(entity.entityId);
            openUpdateEntityModal();
          }}
        >
          {entity &&
            entity.entityDataType &&
            ConvertEnum(entity.entityDataType)}
        </div>
      ),
    },
    {
      title: '',
      dataIndex: '',
      render: entity => (
        <>
          <img
            src={edit_icon}
            style={{ cursor: 'pointer', marginRight: '2rem' }}
            onClick={() => {
              handleChangeEntityId(entity.entityId);
              openUpdateEntityModal();
            }}
          />
          <img
            src={delete_icon}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              handleChangeEntityId(entity.entityId);
              openDeleteEntityModal(entity.entityId);
            }}
          />
        </>
      ),
      width: '100px',
    },
  ];

  const [toggleTab, setToggleTab] = useState(false);
  return (
    <div style={{ margin: '0', background: '#fff', padding: '5px' }}>
      <BotEntityStyle>
        <div className={'entityTab'}>
          <div
            className={'tabData'}
            style={
              !toggleTab
                ? {
                    color: '#376AF5',
                    fontWeight: 500,
                    borderBottom: '2px solid #376AF5',
                  }
                : null
            }
            onClick={() => {
              setToggleTab(false);
            }}
          >
            Custom
          </div>
          <div
            className={'tabData'}
            style={
              toggleTab
                ? {
                    color: '#376AF5',
                    fontWeight: 500,
                    borderBottom: '2px solid #376AF5',
                  }
                : null
            }
            onClick={() => {
              setToggleTab(true);
            }}
          >
            System
          </div>
        </div>
        {toggleTab === false ? (
          <>
            {botPermission && (
              <Tooltip title={'Create Entity'}>
                <a
                  className="float"
                  onClick={() => {
                    openCreateEntityModal();
                  }}
                >
                  <img src={addIcon} width={16} height={16} />
                </a>
              </Tooltip>
            )}
            <TableComponent
              showTotal
              height={305}
              columns={columns}
              data={sortedData}
              fetchData={() => {
                console.log(
                  'last entity',
                  sortedData && sortedData[sortedData.length - 1],
                );
                const from =
                  sortedData &&
                  sortedData[sortedData.length - 1] &&
                  sortedData[sortedData.length - 1].createdAt - 1;
                fetchEntityList(botId, from, true);
              }}
            />
          </>
        ) : (
          <TableComponent
            showTotal
            height={305}
            columns={systemEntityColumn}
            data={sortedSystemData}
            fetchData={() => {
              console.log(
                'last entity',
                sortedData && sortedData[sortedData.length - 1],
              );
              const from =
                sortedData &&
                sortedData[sortedData.length - 1] &&
                sortedData[sortedData.length - 1].createdAt - 1;
              fetchSystemEntityList(botId, from, true);
            }}
          />
        )}
      </BotEntityStyle>

      <CreateEntityModal
        botId={botId}
        removeSynonymTag={removeSynonymTag}
        entityData={entityData}
        visibility={createEntityModal}
        closeModal={closeCreateEntityModal}
        createEntity={createEntity}
        handleChangeEntityData={handleChangeEntityData}
        synonym={synonym}
        removeSynonym={removeSynonym}
        handleChangeInTagInput={handleChangeInTagInput}
        handleChangeSynonymTag={handleChangeSynonymTag}
        handleChangeSynonym={handleChangeSynonym}
        regex={regex}
        handleChangeRegex={handleChangeRegex}
        removeRegex={removeRegex}
      />
      <UpdateEntityModal
        removeSynonymTag={removeSynonymTag}
        entityData={entityDetail}
        visibility={updateEntityModal}
        closeModal={closeUpdateEntityModal}
        createEntity={updateEntity}
        handleChangeEntityData={handleChangeEntityDetail}
        synonym={synonym}
        removeSynonym={removeSynonym}
        handleChangeInTagInput={handleChangeInTagInput}
        handleChangeSynonymTag={handleChangeSynonymTag}
        handleChangeSynonym={handleChangeSynonym}
        regex={regex}
        handleChangeRegex={handleChangeRegex}
        removeRegex={removeRegex}
      />

      {/*delete modal*/}
      <Modal
        title={<p style={{ fontSize: '26px', margin: '10px' }}>Confirmation</p>}
        visibility={deleteEntityModal}
        closeModal={closeDeleteEntityModal}
        content="Do you want to delete entity ?"
        cancelLabel="Cancel"
        actionLabel="Delete"
        onClick={deleteEntityFunc}
      />
    </div>
  );
};

export default EntityList;

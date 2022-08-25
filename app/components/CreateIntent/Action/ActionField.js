import React, { useState } from 'react';
import { Col, Row, Tooltip } from 'antd';
import DivWrapper from '../../ReusableComponents/DivWrapper/DivWrapper';
import add from '../../../assets/addIntentIcon.svg';
import CreateIntentComponentStyle from '../Style';
import remove from '../../../assets/intentRemove.svg';
import CreateActionModal from './CreateAction';
import ConfirmationModal from '../../ReusableComponents/ModalComponents/ConfirmationModal';
import intent from '../../../assets/intent.svg';
const Action = ({
  objToAddAction,
  apiList,
  actionList,
  intentParameter,
  addAction,
  saveAction,
  removeAction,
  handleChangeInActionData,
  handleChangeInApiParameterValue,
  handleChangeObjectToUpdateAction,
  clearActionModal,
}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');
  const [selectedActionId, setSelectedActionId] = useState(undefined);
  const [addActionModal, setAddActionModal] = useState(false);
  const openActionModal = () => {
    setAddActionModal(true);
  };
  const closeActionModal = () => {
    clearActionModal();
    setAddActionModal(false);
  };
  const [actionType, setActionType] = useState(false);

  const openIntentParameterData = () => {
    const div = [];
    // Outer loop to create parent
    actionList.length > 0 &&
      actionList.map((single, index) =>
        div.push(
          <CreateIntentComponentStyle>
            <div
              className="intent-input"
              hidden={index !== 0}
              style={{ paddingTop: '10px' }}
            >
              <Row gutter={20}>
                <Col span={6} className="intent-row gutter-row">
                  <div className="intent label-style">Name</div>
                </Col>
                <Col span={6} className="intent-row gutter-row">
                  <div className="intent label-style">Action</div>
                </Col>
                <Col span={4} className="intent-row gutter-row">
                  <div className="intent label-style" />
                </Col>
                <Col
                  span={3}
                  className="intent-row gutter-row"
                  style={{ textAlign: 'center' }}
                >
                  <div className="intent label-style" />
                </Col>
                <Col
                  span={4}
                  className="intent-row gutter-row"
                  style={{ justifyContent: 'center' }}
                >
                  <div className="intent label-style" />
                </Col>
              </Row>
            </div>

            <div className="intent-input">
              <Row
                gutter={20}
                onClick={() => {
                  setSelectedActionId(single.id);
                  handleChangeObjectToUpdateAction(single);
                  setActionType('Update');
                  openActionModal();
                }}
                style={{ cursor: 'text' }}
              >
                <Col
                  span={6}
                  className="intent-row gutter-row"
                  style={{ display: 'flex', cursor: 'text' }}
                >
                  <div
                    onClick={() => {
                      setSelectedActionId(single.id);
                      handleChangeObjectToUpdateAction(single);
                      setActionType('Update');
                      openActionModal();
                    }}
                    placeholder="Name"
                    className="intent-title p-1"
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                      cursor: 'text',
                    }}
                  >
                    {single.value.actionName === '' ? (
                      <p
                        style={{
                          color: '#bebebe',
                          fontSize: '14px',
                          textAlign: 'left',
                          marginBottom: '8px',
                        }}
                      >
                        Name
                      </p>
                    ) : (
                      single.value.actionName
                    )}
                  </div>
                </Col>
                <Col span={6} className="intent-row gutter-row">
                  <div
                    onClick={() => {
                      setSelectedActionId(single.id);
                      handleChangeObjectToUpdateAction(single);
                      setActionType('Update');
                      openActionModal();
                    }}
                    placeholder="Action"
                    className="intent-title p-1"
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                      cursor: 'text',
                    }}
                  >
                    {single.value.actionType === '' ? (
                      <p
                        style={{
                          color: '#bebebe',
                          fontSize: '14px',
                          textAlign: 'left',
                          marginBottom: '8px',
                        }}
                      >
                        Action
                      </p>
                    ) : single.value.actionType === '1' ? (
                      'Api Call'
                    ) : single.value.actionType === '2' ? (
                      'Ticket Create'
                    ) : (
                      ''
                    )}
                  </div>
                </Col>
                <Col span={4} className="intent-row gutter-row" />
                <Col
                  span={3}
                  className="intent-row gutter-row"
                  style={{ textAlign: 'center' }}
                />
                <Col
                  span={4}
                  className="intent-row gutter-row"
                  style={{ justifyContent: 'center' }}
                />
                <Col className="intent-row gutter-row" span={1}>
                  <img
                    // hidden={actionList.length === 1}
                    id={single.id}
                    src={remove}
                    style={{
                      height: 'fit-content',
                      marginTop: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      e.preventDefault();
                      setSelectedPhraseId(single.id);
                      setRemoveModal(true);
                    }}
                  />
                </Col>
              </Row>
            </div>
          </CreateIntentComponentStyle>,
        ),
      );
    return div;
  };
  return (
    <>
      <DivWrapper
        style={{
          padding: 0,
          borderRadius: '10px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
          marginTop: '8px',
        }}
      >
        <div className="intent-value-header">
          <Tooltip title="Appropriate actions performed for detected intent">
            Action
            <img src={intent} className={'title-icon'} />
          </Tooltip>
        </div>
        {openIntentParameterData()}
        <div hidden={actionList.length > 0}>
          <button
            className="add-button"
            onClick={() => {
              setActionType('Add');
              openActionModal();
            }}
          >
            <img src={add} style={{ marginRight: '5px' }} /> New Action
          </button>
        </div>
      </DivWrapper>
      <CreateActionModal
        addAction={addAction}
        objToAddAction={objToAddAction}
        actionType={actionType}
        visibility={addActionModal}
        closeModal={closeActionModal}
        apiList={apiList}
        intentParameter={intentParameter}
        actionList={actionList}
        handleChangeInActionData={handleChangeInActionData}
        saveAction={saveAction}
        handleChangeInApiParameterValue={handleChangeInApiParameterValue}
        singleActionId={selectedActionId}
      />

      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this action?"
        onClick={() => removeAction(selectedPhraseId)}
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
    </>
  );
};

export default Action;

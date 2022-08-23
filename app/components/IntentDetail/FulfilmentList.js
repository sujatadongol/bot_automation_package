import React, { useState } from 'react';
import { Col, Row, Tooltip } from 'antd';
import DivWrapper from '../DivWrapper/DivWrapper';
import add from '../../assets/addIntentIcon.svg';
import CreateIntentComponentStyle from '../CreateIntent/Style';
import CreateFullfilmentModal from './Fulfilment/CreateFulfillmentModal';
import remove from '../../assets/intentRemove.svg';
import ConfirmationModal from '../ReusableComponents/ModalComponents/ConfirmationModal';
import intent from '../../assets/intent.svg';

const Fulfilment = ({
  apiList,
  fulfilmentList,
  intentParameter,
  addFulfilment,
  saveFulfilment,
  removeFulfilment,
  handleChangeInFulfilmentData,
  handleChangeInApiParameterValue,
  addResponseInFulfilment,
  removeResponseInFulfilment,
  handleChangeInResponseInFulfilment,
}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');
  const [selectedFulfilmentId, setSelectedFulfilmentId] = useState(undefined);
  const [addFulfilmentModal, setAddFulfilmentModal] = useState(false);
  const openFulfilmentModal = () => {
    setAddFulfilmentModal(true);
  };
  const closeFulfilmentModal = () => {
    setAddFulfilmentModal(false);
  };

  const savedFulfilment = [];
  fulfilmentList &&
    fulfilmentList.map(single =>
      single.display === true ? savedFulfilment.push(single) : null,
    );

  const openIntentParameterData = () => {
    const div = [];
    // Outer loop to create parent
    savedFulfilment.length > 0 &&
      savedFulfilment.map((single, index) =>
        div.push(
          <CreateIntentComponentStyle>
            <div
              className="intent-input"
              hidden={index !== 0}
              style={{ paddingTop: '10px' }}
            >
              <Row gutter={20}>
                <Col span={5} className="intent-row gutter-row">
                  <div className="intent label-style">Name</div>
                </Col>
                <Col span={5} className="intent-row gutter-row">
                  <div className="intent label-style">Api</div>
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
                  setSelectedFulfilmentId(single.id);
                  openFulfilmentModal();
                }}
                style={{ cursor: 'text' }}
              >
                <Col
                  span={5}
                  className="intent-row gutter-row"
                  style={{ display: 'flex', cursor: 'text' }}
                >
                  <div
                    onClick={() => {
                      setSelectedFulfilmentId(single.id);
                      openFulfilmentModal();
                    }}
                    placeholder="Name"
                    className="intent-title p-0"
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                      cursor: 'text',
                    }}
                  >
                    {single.value.fulfilmentName === '' ? (
                      <p
                        style={{
                          color: '#bebebe',
                          fontSize: '14px',
                          textAlign: 'left',
                        }}
                      >
                        Name
                      </p>
                    ) : (
                      single.value.fulfilmentName
                    )}
                  </div>
                </Col>
                <Col span={5} className="intent-row gutter-row">
                  <div
                    onClick={() => {
                      setSelectedFulfilmentId(single.id);
                      openFulfilmentModal();
                    }}
                    placeholder="Api"
                    className="intent-title p-0"
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                      cursor: 'text',
                    }}
                  >
                    {single.value.selectedApi.apiName === '' ? (
                      <p
                        style={{
                          color: '#bebebe',
                          fontSize: '14px',
                          textAlign: 'left',
                        }}
                      >
                        Api
                      </p>
                    ) : (
                      single.value.selectedApi.apiName
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
                    id={single.id}
                    src={remove}
                    style={{
                      height: 'fit-content',
                      marginTop: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
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
          {' '}
          <Tooltip title="Relevant information extracted through API calls to fulfil the response">
            Fulfilments
            <img src={intent} className={'title-icon'} />
          </Tooltip>
        </div>
        {openIntentParameterData()}
        <div>
          <button
            className="add-button"
            onClick={() => {
              const newFulfilmentId = Math.random();
              addFulfilment(newFulfilmentId);
              setSelectedFulfilmentId(newFulfilmentId);
              openFulfilmentModal();
            }}
          >
            <img src={add} style={{ marginRight: '5px' }} /> New Fulfilment
          </button>
        </div>
      </DivWrapper>
      <CreateFullfilmentModal
        intentParameter={intentParameter}
        fulfilmentList={fulfilmentList}
        singleFulfilmentId={selectedFulfilmentId}
        apiList={apiList}
        handleChangeInFulfilmentData={handleChangeInFulfilmentData}
        handleChangeInApiParameterValue={handleChangeInApiParameterValue}
        visibility={addFulfilmentModal}
        saveFulfilment={saveFulfilment}
        closeModal={closeFulfilmentModal}
        addFulfilment={addFulfilment}
        addResponseInFulfilment={addResponseInFulfilment}
        removeResponseInFulfilment={removeResponseInFulfilment}
        handleChangeInResponseInFulfilment={handleChangeInResponseInFulfilment}
      />
      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this fulfilment ?"
        onClick={() => removeFulfilment(selectedPhraseId)}
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
    </>
  );
};

export default Fulfilment;

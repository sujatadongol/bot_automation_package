import React, { useState } from 'react';
import { Checkbox, Col, Popover, Row, Select, Tooltip } from 'antd';
import DivWrapper from '../DivWrapper/DivWrapper';
import add from '../../assets/addIntentIcon.svg';
import upload_icon from '../../assets/intentIcon.svg';
import remove from '../../assets/intentRemove.svg';
import CreateIntentComponentStyle from '../CreateIntent/Style';
import openPrompt from '../../assets/open.svg';
import errorIcon from '../../assets/not_verified.svg';
import PromptModal from './PromptModal';
import { CountOccurrences } from '../../utils/helper';
import CreateEntityModal from '../../containers/CreateEntityModalContainer';
import ConfirmationModal from '../ReusableComponents/ModalComponents/ConfirmationModal';
import intent from '../../assets/intent.svg';

const IntentParameterDetail = ({
  botId,
  intentParameter,
  handleChangeToAddIntentParameter,
  handleChangeRemoveIntentParameter,
  uploadIntentParameterIcon,
  handleChangeIntentParameter,
  checkIfParamNameAlreadyExistsInDetail,
  paramNameList,
  entityList,

  handleChangeToAddPrompt,
  handleChangeRemovePrompt,
  handleChangePrompts,
  clearPromptData,

  isIntentValidatedToBeCreated,
  openCreateEntityModal,

  intentParamIdUsedInBotResponse,
}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');
  const [selectedIntentParameterRow, setSelectedIntentParameterRow] = useState(
    null,
  );
  const [promptModal, setPromptModal] = useState(false);
  const openPromptModal = intentParameterRow => {
    setPromptModal(true);
    setSelectedIntentParameterRow(intentParameterRow);
  };
  const closePromptModal = () => {
    setPromptModal(false);
    clearPromptData();
  };

  const openIntentParameterData = () => {
    const div = [];
    // Outer loop to create parent
    intentParameter &&
      intentParameter.map((single, index) =>
        div.push(
          <CreateIntentComponentStyle>
            <div
              className="intent-input"
              hidden={index !== 0}
              style={{ paddingTop: '20px' }}
            >
              <Row gutter={20}>
                <Col
                  span={2}
                  className="intent-row gutter-row"
                  style={{ textAlign: 'center' }}
                >
                  <div className="intent label-style">Icon</div>
                </Col>
                <Col span={5} className="intent-row gutter-row">
                  <div className="intent label-style">Parameter Name</div>
                </Col>
                <Col span={5} className="intent-row gutter-row">
                  <div className="intent label-style">Entity</div>
                </Col>
                <Col span={4} className="intent-row gutter-row">
                  <div className="intent label-style">Value</div>
                </Col>
                <Col
                  span={3}
                  className="intent-row gutter-row"
                  style={{ textAlign: 'center' }}
                >
                  <div className="intent label-style">Required</div>
                </Col>
                <Col
                  span={4}
                  className="intent-row gutter-row"
                  style={{ justifyContent: 'center' }}
                >
                  <div className="intent label-style">Prompts</div>
                </Col>
              </Row>
            </div>
            <div className="intent-input">
              <Row gutter={20}>
                <Col
                  span={2}
                  className="intent-row gutter-row"
                  style={{ textAlign: 'center' }}
                >
                  <label
                    htmlFor={single.id}
                    style={{
                      paddingTop: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    {single.value.iconUrl === '' ? (
                      <img
                        style={{ maxWidth: 18, maxHeight: 18 }}
                        src={upload_icon}
                      />
                    ) : (
                      <Popover
                        content={
                          <div
                            style={{
                              padding: '10px',
                              boxShadow:
                                '0px 4.95238px 4.95238px rgba(0, 0, 0, 0.25)',
                              background: 'white',
                              fontSize: '12.381px',
                              color: '#000',
                              borderRadius: '5px',
                              width: '75px',
                            }}
                          >
                            <label
                              htmlFor={single.id}
                              style={{
                                cursor: 'pointer',
                              }}
                            >
                              Update
                            </label>

                            <div
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                handleChangeIntentParameter(
                                  single.id,
                                  'iconUrl',
                                  '',
                                );
                              }}
                            >
                              Remove
                            </div>
                          </div>
                        }
                        placement="right"
                      >
                        <img
                          style={{ maxWidth: 18, maxHeight: 18 }}
                          src={single.value.iconUrl}
                        />
                      </Popover>
                    )}
                  </label>
                  <input
                    className="file-upload"
                    type="file"
                    id={single.id}
                    onChange={e => {
                      e.preventDefault();
                      uploadIntentParameterIcon(single.id, e.target.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </Col>
                <Col
                  span={5}
                  className="intent-row gutter-row"
                  style={{ display: 'flex' }}
                >
                  <Tooltip title="Parameter name must be unique">
                    <img
                      hidden={!single.paramNameAlreadyExist}
                      src={errorIcon}
                      width={14}
                      height={14}
                      style={{ marginRight: '5px' }}
                    />
                  </Tooltip>
                  <input
                    onBlur={e => {
                      if (CountOccurrences(paramNameList, e.target.value) > 1) {
                        checkIfParamNameAlreadyExistsInDetail(single.id, true);
                      }
                    }}
                    placeholder="Parameter Name"
                    className="intent-title p-0"
                    value={single.value.paramName.match(/[0-9a-z_]*/)}
                    onChange={e => {
                      handleChangeIntentParameter(
                        single.id,
                        'paramName',
                        e.target.value.replace(/\s/g, ''),
                      );
                    }}
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      background: '#fff',
                      width: '100%',
                    }}
                  />
                </Col>
                <Col span={5} className="intent-row gutter-row">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    placeholder="Entity"
                    showSearch
                    showArrow={false}
                    value={
                      single.value.botEntity === null
                        ? // <span
                          //   style={{
                          //     color: 'rgb(198, 198, 198)',
                          //     cursor: 'initial',
                          //   }}
                          // >
                          'Entity'
                        : // </span>
                          // <span style={{ background: '#FFF1C7' }}>
                          ` @${single.value.botEntity.entityName}`
                          // </span>
                    }
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <div
                          onClick={() => {
                            openCreateEntityModal();
                          }}
                          style={{
                            color: '#376AF5',
                            borderTop: '1px solid #d2d2d2',
                            padding: '10px',
                          }}
                        >
                          + Create Entity
                        </div>
                      </div>
                    )}
                    onChange={(e, value) => {
                      const entityObj = {
                        entityId: value.key,
                        entityName: value.value,
                      };
                      handleChangeIntentParameter(
                        single.id,
                        'botEntity',
                        entityObj,
                      );
                      handleChangeIntentParameter(
                        single.id,
                        'orderIndex',
                        index + 1,
                      );
                      handleChangeIntentParameter(
                        single.id,
                        'possibleValue',
                        e,
                      );
                      handleChangeIntentParameter(single.id, 'defaultValue', e);
                    }}
                    style={{
                      border: 'none !important',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                      height: 23,
                    }}
                  >
                    {entityList &&
                      entityList.map(singleEntity => (
                        <Select.Option
                          key={singleEntity.entityId}
                          value={singleEntity.entityName}
                        >
                          {singleEntity.entityName}
                        </Select.Option>
                      ))}
                  </Select>
                </Col>
                <Col span={4} className="intent-row gutter-row">
                  <input
                    placeholder="Possible Value"
                    className="intent-title p-0"
                    style={{
                      border: 'none',
                      fontSize: '15px',
                      color: '#333',
                      width: '100%',
                    }}
                    value={single.value.possibleValue}
                  />
                </Col>
                <Col
                  span={3}
                  className="intent-row gutter-row"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox
                    checked={single.value.required}
                    onClick={e => {
                      if (
                        intentParamIdUsedInBotResponse &&
                        intentParamIdUsedInBotResponse.length > 0 &&
                        intentParamIdUsedInBotResponse.includes(single.id)
                      ) {
                      } else {
                        handleChangeIntentParameter(
                          single.id,
                          'required',
                          e.target.checked,
                        );
                      }
                    }}
                  />
                </Col>
                <Col
                  span={4}
                  className="intent-row gutter-row"
                  style={{ justifyContent: 'center' }}
                >
                  <button
                    className="prompt-btn"
                    onClick={() => {
                      openPromptModal(single);
                    }}
                  >
                    {single.value.prompts.length > 0 ? (
                      <span color="#333">
                        {' '}
                        {single.prompts.length}{' '}
                        <img src={openPrompt} style={{ paddingLeft: '2px' }} />
                      </span>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <>
                          {isIntentValidatedToBeCreated === false &&
                          single.value.required === true &&
                          single.value.prompts.length === 0 ? (
                            <img
                              src={errorIcon}
                              width={14}
                              height={14}
                              style={{ marginRight: '5px' }}
                            />
                          ) : null}
                        </>
                        Add Variation
                      </div>
                    )}
                  </button>
                </Col>
                <Col className="intent-row gutter-row" span={1}>
                  {' '}
                  <img
                    // hidden={intentParameter.length === 1}
                    id={single.id}
                    src={remove}
                    style={{
                      height: 'fit-content',
                      marginTop: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={e => {
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
          <Tooltip title="Information extracted to fulfil the response">
            Intent Parameters
            <img src={intent} className={'title-icon'} />
          </Tooltip>
        </div>
        {openIntentParameterData()}
        <div>
          <button
            className="add-button"
            onClick={() => {
              const intentId = Math.random();
              handleChangeToAddIntentParameter(intentId);
            }}
          >
            <img src={add} style={{ marginRight: '5px' }} /> New Parameter
          </button>
        </div>
      </DivWrapper>

      <PromptModal
        visibility={promptModal}
        closeModal={closePromptModal}
        intentParameterRow={selectedIntentParameterRow}
        handleChangeRemovePrompt={handleChangeRemovePrompt}
        handleChangeToAddPrompt={handleChangeToAddPrompt}
        handleChangePrompts={handleChangePrompts}
        handleChangeIntentParameter={handleChangeIntentParameter}
      />

      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this intent parameter ?"
        onClick={() => handleChangeRemoveIntentParameter(selectedPhraseId)}
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
      <CreateEntityModal botId={botId} />
    </>
  );
};

export default IntentParameterDetail;

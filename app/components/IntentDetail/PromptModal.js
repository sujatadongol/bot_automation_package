import React from 'react';
import { Col, Modal, Row } from 'antd';
import CustomButton from '../Button/Button';
import close from '../../assets/close.svg';
import remove from '../../assets/intentRemove.svg';
import add from '../../assets/addIntentIcon.svg';
import CreateIntentComponentStyle from '../CreateIntent/Style';

const PromptModal = ({
  intentParameterRow,
  visibility,
  closeModal,
  handleChangeToAddPrompt,
  handleChangeRemovePrompt,
  handleChangePrompts,
  handleChangeIntentParameter,
}) => {
  const openPromptData = () => {
    const div = [];
    // Outer loop to create parent
    intentParameterRow &&
      intentParameterRow.prompts &&
      intentParameterRow.prompts.map((single, index) => {
        return div.push(
          <CreateIntentComponentStyle>
            <Row>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #F0EDF1',
                }}
              >
                <span>{index + 1}</span>
                <input
                  value={single.value}
                  onChange={e => {
                    e.preventDefault();
                    handleChangePrompts(
                      intentParameterRow.id,
                      single.id,
                      e.target.value,
                    );
                  }}
                  className={'prompt-input'}
                />
                <img
                  hidden={
                    intentParameterRow &&
                    intentParameterRow.prompts &&
                    intentParameterRow.prompts.length === 1
                  }
                  src={remove}
                  onClick={() => {
                    handleChangeRemovePrompt(intentParameterRow.id, single.id);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            </Row>
          </CreateIntentComponentStyle>,
        );
      });
    return div;
  };

  const savePromptData = () => {
    let attributeDetailForm = [];
    intentParameterRow &&
      intentParameterRow.prompts.map(single => {
        return attributeDetailForm.push(single.value);
      });
    handleChangeIntentParameter(
      intentParameterRow.id,
      'prompts',
      attributeDetailForm,
    );
  };

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={700}
    >
      <span>
        <div
          style={{
            fontSize: '18px',
            padding: '14px 0 14px 0',
            borderBottom: '1px solid #F0EDF1',
          }}
        >
          Prompts for {intentParameterRow && intentParameterRow.value.paramName}
          <img
            src={close}
            alt="closeIcon"
            onClick={closeModal}
            style={{
              marginTop: '0px',
              float: 'right',
              marginRight: '-8px',
              cursor: 'pointer',
            }}
          />
        </div>
        {openPromptData()}
      </span>
      <Row style={{ marginTop: '18px' }}>
        <Col
          span={4}
          style={{ color: '#376AF5', cursor: 'pointer' }}
          onClick={() => handleChangeToAddPrompt(intentParameterRow.id)}
        >
          <img src={add} style={{ marginRight: '5px', marginBottom: '2px' }} />
          Add Variation
        </Col>
        <Col span={20} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton
            type="submit"
            primary
            size="large"
            clicked={() => {
              savePromptData();
              closeModal();
            }}
            style={{
              borderRadius: '5px',
              width: '105px',
            }}
          >
            Save
          </CustomButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default PromptModal;

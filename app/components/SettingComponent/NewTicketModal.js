import React, { useEffect, useState } from 'react';
import { Col, Input, Modal, Row } from 'antd';
import styled from 'styled-components';
import CustomButton from '../ReusableComponents/Button/Button';
import remove from '../../assets/intentRemove.svg';
import addIcon from '../../assets/addIntentIcon.svg';
import SettingComponentStyle from './Style';
import { UnescapeHtml } from '../../utils/helper';
import { ticketCreateRule } from './helper';
import CommonIcon from '../../assets/images/common/CommonIcon';

export const HeaderWrapper = styled.div`
  padding: 16px 0 16px 0;
  border-bottom: 1px solid #f0edf1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
`;

export const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 15px;
  margin-bottom: 2px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
`;

export const AddCustomRuleButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #376af5;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
`;

export const ButtonIcon = styled.img`
  margin-right: 5px;
  cursor: pointer;
`;

export const CreateButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 30px;
`;
export const buttonStyle1 = {
  width: '85px',
  borderRadius: '5px',
  cursor: 'not-allowed',
  background: 'rgb(132, 148, 247)',
  border: '1px solid rgb(132, 148, 247)',
  color: '#fff',
};
export const buttonStyle2 = {
  borderRadius: '5px',
  width: '85px',
};

const NewTicketModal = ({
  visibility,
  closeModal,
  saveCustomRule,
  createAutoTicket,
  selectedTicket,
  updateAutoTicket,
  autoTicketCreate,
}) => {
  const [customRules, setCustomRules] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedTicket) {
      setCustomRules(selectedTicket.rules);
      setName(selectedTicket.modelName);
    } else {
      setCustomRules([{ id: `${Math.random()}`, texts: '' }]);
      setName('');
    }
  }, [visibility, selectedTicket]);
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const openCustomRuleData = () => {
    const div = [];
    // Outer loop to create parent
    // eslint-disable-next-line no-unused-expressions
    customRules &&
      customRules.length > 0 &&
      customRules.map(single =>
        div.push(
          <SettingComponentStyle key={single && single.id}>
            <Row>
              <Col span={24} className="col-component">
                <span> - </span>

                <input
                  className="modal-input"
                  key={single.id}
                  value={single.texts && UnescapeHtml(single.texts)}
                  onChange={e => {
                    handleCustomRuleChange(single.id, e.target.value);
                  }}
                />

                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                <ButtonIcon
                  src={remove}
                  hidden={customRules && customRules.length === 1}
                  onClick={() => {
                    handleCustomRuleRemoveRow(single.id);
                  }}
                />
              </Col>
            </Row>
          </SettingComponentStyle>,
        ),
      );
    return div;
  };

  const handleCustomRuleChange = (id, texts) => {
    setCustomRules(
      customRules.map(rule => (rule.id === id ? { ...rule, texts } : rule)),
    );
  };

  const handleCustomRuleAddRow = () => {
    setCustomRules([...customRules, { id: `${Math.random()}`, texts: '' }]);
  };

  const handleCustomRuleRemoveRow = id => {
    setCustomRules(customRules.filter(rule => rule.id !== id));
  };

  const saveCustomRuleData = () => {
    // saveCustomRule();
    if (selectedTicket) {
      updateAutoTicket(selectedTicket.id, name, ticketCreateRule(customRules));
      closeModal();
    } else if (!selectedTicket && name) {
      createAutoTicket(name, ticketCreateRule(customRules));
      closeModal();
    }
    // if (autoTicketCreate) {
    // }
  };
  return (
    <Modal
      destroyOnClose
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      bodyStyle={{ paddingTop: 0 }}
    >
      <HeaderWrapper>
        <Title> {selectedTicket ? 'Update Ticket' : 'New Ticket'}</Title>

        <CloseButton onClick={closeModal}>
          <CommonIcon.CrossIcon color="#000000" />
        </CloseButton>
      </HeaderWrapper>

      <Label>Name</Label>

      <Input
        size="large"
        onChange={handleChangeName}
        value={name}
        key={selectedTicket && selectedTicket.id}
      />

      <Label>Custom Rules</Label>

      {openCustomRuleData()}

      <FooterWrapper>
        <AddCustomRuleButton onClick={handleCustomRuleAddRow}>
          <ButtonIcon src={addIcon} />
          Add Custom Rules
        </AddCustomRuleButton>

        <CreateButtonWrapper>
          <CustomButton
            type="submit"
            primary
            size="large"
            clicked={() => {
              saveCustomRuleData();
            }}
            style={name === '' ? buttonStyle1 : buttonStyle2}
          >
            {selectedTicket ? 'Update' : 'Create'}
          </CustomButton>
        </CreateButtonWrapper>
      </FooterWrapper>
    </Modal>
  );
};

export default NewTicketModal;

import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import CustomButton from '../Button/Button';
import remove from '../../assets/intentRemove.svg';
import addIcon from '../../assets/addIntentIcon.svg';
import SettingComponentStyle from './Style';
import { UnescapeHtml } from '../../utils/helper';
import CommonIcon from '../../assets/images/common/CommonIcon';
import {
  HeaderWrapper,
  Title,
  CloseButton,
  FooterWrapper,
  AddCustomRuleButton,
  ButtonIcon,
  CreateButtonWrapper,
} from './NewTicketModal';

const AddCustomRuleModal = ({
  visibility,
  closeModal,
  saveCustomRule,
  selectedRow,
  updateAutoTicket,
  botPermissionModel,
}) => {
  const [customRules, setCustomRules] = useState([]);

  useEffect(() => {
    if (selectedRow && selectedRow.rules && selectedRow.rules.length > 0) {
      setCustomRules(selectedRow.rules);
    } else if (selectedRow === 'new') {
      setCustomRules([{ id: `${Math.random()}`, texts: '' }]);
    } else {
      setCustomRules([{ id: `${Math.random()}`, texts: '' }]);
    }
  }, [selectedRow]);
  const openCustomRuleData = () => {
    const div = [];
    // Outer loop to create parent
    // eslint-disable-next-line no-unused-expressions
    customRules &&
      customRules.length > 0 &&
      customRules.map(single =>
        div.push(
          <SettingComponentStyle>
            <Row>
              <Col span={24} className="col-component">
                <span> - </span>

                <input
                  className="modal-input"
                  value={single.texts && UnescapeHtml(single.texts)}
                  onChange={e => {
                    handleCustomRuleChange(single.id, e.target.value);
                  }}
                />

                {botPermissionModel.createBot && (
                  <ButtonIcon
                    src={remove}
                    hidden={customRules && customRules.length === 1}
                    onClick={() => {
                      handleCustomRuleRemoveRow(single.id);
                    }}
                  />
                )}
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
    updateAutoTicket(selectedRow.id, selectedRow.modelName, customRules);
    closeModal();
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
      width={700}
      bodyStyle={{ paddingTop: 0 }}
    >
      <HeaderWrapper>
        <Title>Custom Rules</Title>

        <CloseButton onClick={closeModal}>
          <CommonIcon.CrossIcon color="#000000" />
        </CloseButton>
      </HeaderWrapper>

      {openCustomRuleData()}

      {botPermissionModel.createBot && (
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
                //   closeModal();
              }}
              style={{
                borderRadius: '5px',
                width: '85px',
              }}
            >
              Save
            </CustomButton>
          </CreateButtonWrapper>
        </FooterWrapper>
      )}
    </Modal>
  );
};

export default AddCustomRuleModal;

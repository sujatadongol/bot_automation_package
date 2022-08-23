import React from 'react';
import { CustomButton } from '../index';
import { Col, Modal, Row } from 'antd';
import close from '../../assets/close.svg';
import SettingComponentStyle from './Style';

const CreateTicketTypeModal = ({
  ticketTypeName,
  visibility,
  closeModal,
  handleChangeTicketType,
  saveTicketType,
}) => {
  const saveTicketTypeData = () => {
    saveTicketType();
    closeModal();
  };

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={450}
      maskClosable={false}
    >
      <SettingComponentStyle>
        <span>
          <div
            style={{
              textAlign: 'center',
              fontSize: '20px',
              padding: '14px 0 14px 0',
            }}
          >
            Add Ticket Type
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
          <div>
            <label className={'ticket-type-label'}>Name</label>
            <input
              value={ticketTypeName}
              className={'ticket-type-input'}
              onChange={e => handleChangeTicketType(e.target.value)}
            />
          </div>
        </span>
        <Row style={{ marginTop: '18px' }}>
          <Col
            span={24}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <CustomButton
              type="submit"
              primary
              size="large"
              clicked={() => {
                saveTicketTypeData();
                closeModal();
              }}
              style={{
                borderRadius: '5px',
                width: '105px',
              }}
            >
              Add
            </CustomButton>
          </Col>
        </Row>
      </SettingComponentStyle>
    </Modal>
  );
};

export default CreateTicketTypeModal;

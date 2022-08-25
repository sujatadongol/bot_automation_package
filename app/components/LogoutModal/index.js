/**
 *
 * LogoutModal
 *
 */

import React, { memo } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Content, Title, Text } from './style';
import CustomCancelButton from '../ReusableComponents/Button/CancelButton';
import CustomButton from '../ReusableComponents/Button/Button';
// import styled from 'styled-components';

const LogoutModal = ({
  title,
  visibility,
  content,
  closeModal,
  cancelLabel,
  actionLabel,
  onClick,
  width,
}) => {
  return (
    <Modal
      icon
      title={title ? <Title> {title} </Title> : null}
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={width}
      maskClosable={false}
    >
      <Text> {content} </Text>
      {actionLabel ? (
        <div style={{ display: 'flex', gap: '5%', marginTop: '3%' }}>
          <div style={{ width: '45%' }}>
            <CustomCancelButton
              primary
              clicked={closeModal}
              size="large"
              className="mt-4 mb-2"
            >
              {cancelLabel}
            </CustomCancelButton>
          </div>
          <div style={{ width: '45%' }}>
            <CustomButton
              primary
              size="large"
              className="mt-4 mb-2"
              clicked={onClick}
            >
              {actionLabel}
            </CustomButton>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

LogoutModal.propTypes = {
  title: PropTypes.any,
  visibility: PropTypes.any,
  content: PropTypes.any,
  closeModal: PropTypes.func,
  cancelLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(LogoutModal);

import React, { memo } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import CustomCancelButton from '../Button/CancelButton.jsx';
import CustomButton from '../Button/Button.jsx';
import { Container, Text, Title, CancelButton } from './Style';

const DeleteModal = ({
  title,
  visibility,
  content,
  closeModal,
  cancelLabel,
  actionLabel,
  onClick,
  width,
}) => {
  const onClickFunc = () => {
    closeModal();
    onClick();
  };
  return (
    <Modal
      icon
      title={title}
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={width || 325}
      maskClosable={false}
    >
      <Container>
        <Text> {content} </Text>
        {actionLabel ? (
          <CancelButton>
            <CustomCancelButton
              primary
              clicked={closeModal}
              size="large"
              className="mt-3 mb-2"
              style={{ width: '85px', borderRadius: '5px' }}
            >
              {cancelLabel}
            </CustomCancelButton>
            <div className={'m-2'} />
            <CustomButton
              primary
              size="large"
              className="mt-3 mb-2"
              clicked={onClickFunc}
              style={{ width: '85px', borderRadius: '5px' }}
            >
              {actionLabel}
            </CustomButton>
          </CancelButton>
        ) : null}
      </Container>
    </Modal>
  );
};

DeleteModal.propTypes = {
  title: PropTypes.any,
  visibility: PropTypes.any,
  content: PropTypes.any,
  closeModal: PropTypes.func,
  cancelLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(DeleteModal);

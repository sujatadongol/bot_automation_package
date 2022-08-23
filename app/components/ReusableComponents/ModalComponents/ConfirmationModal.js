import React, { memo } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import CustomCancelButton from '../../Button/CancelButton';
import CustomButton from '../../Button/Button';
import './Style.css';

const ConfirmationModal = ({
  title,
  visibility,
  content,
  closeModal,
  cancelLabel,
  actionLabel,
  onClick,
  width,
  disabled,
}) => {
  const onClickFunc = () => {
    closeModal();
    onClick();
  };
  return (
    <Modal
      icon
      className="modal-layout"
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={width || 400}
      maskClosable={false}
    >
      <div className="modal-title">{title}</div>
      <div className="modal-content"> {content} </div>
      {actionLabel && (
        <div className="confirmation-action">
          <CustomCancelButton
            primary
            clicked={closeModal}
            size="large"
            style={{
              borderRadius: '5px',
              padding: '0 20px',
            }}
          >
            {cancelLabel}
          </CustomCancelButton>
          <div style={{ marginRight: '15px' }} />
          <CustomButton
            primary
            size="large"
            clicked={!disabled && onClickFunc}
            style={
              disabled
                ? {
                    cursor: 'auto',
                    background: 'rgb(132, 148, 247)',
                    border: '1px solid rgb(132, 148, 247)',
                    borderRadius: '5px',
                    padding: '0 16px',
                    minWidth: '90px',
                  }
                : {
                    borderRadius: '5px',
                    padding: '0 16px',
                    minWidth: '90px',
                  }
            }
          >
            {actionLabel}
          </CustomButton>
        </div>
      )}
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  title: PropTypes.any,
  visibility: PropTypes.bool,
  disabled: PropTypes.bool,
  content: PropTypes.any,
  closeModal: PropTypes.func,
  cancelLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(ConfirmationModal);

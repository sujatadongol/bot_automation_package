import React, { memo } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './Style.css';

const ModalLayout = ({
  title,
  visibility,
  content,
  closeModal,
  width,
  callModal,
  hideCloseIcon,
  show,
}) => (
  <Modal
    className="modal-layout"
    icon
    centered
    destroyOnClose={true}
    visible={visibility}
    footer={null}
    onCancel={closeModal}
    closable={false}
    width={width}
    maskClosable={false}
    mask={show}
  >
    <div className="modal-title">
      {title}
      <div
        onClick={closeModal}
        className="modal-close-icon"
        hidden={hideCloseIcon}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 3.01429L18.9857 1L11 8.98571L3.01429 1L1 3.01429L8.98571 11L1 18.9857L3.01429 21L11 13.0143L18.9857 21L21 18.9857L13.0143 11L21 3.01429Z"
            fill="#333"
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    <div
      className="modal-content"
      style={callModal ? { padding: '0px 0px 10px 0' } : null}
    >
      {content}
    </div>
  </Modal>
);

ModalLayout.propTypes = {
  title: PropTypes.any,
  visibility: PropTypes.bool,
  content: PropTypes.any,
  closeModal: PropTypes.func,
  width: PropTypes.integer,
};

export default memo(ModalLayout);

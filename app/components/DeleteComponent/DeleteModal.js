import React, { memo } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { useStyles } from './Style';
import CustomCancelButton from '../Button/CancelButton';
import CustomButton from '../Button/Button';

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
  const classes = useStyles();
  const onClickFunc = () => {
    closeModal();
    onClick();
  };
  return (
    <Modal
      icon
      //   className={classes.content}
      title={title}
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={width || 325}
      maskClosable={false}
    >
      <div className={classes.container}>
        <span className={classes.text}> {content} </span>
        {actionLabel ? (
          <div className={classes.cancelBtn}>
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
          </div>
        ) : null}
      </div>
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

import React, { useState } from 'react';
import { Col, Modal, Row } from 'antd';
import { CustomButton, SnackBar } from '../index';
import close from '../../assets/close.svg';
import remove from '../../assets/intentRemove.svg';
import SettingComponentStyle from './Style';
import addIcon from '../../assets/addIntentIcon.svg';
import { array } from 'prop-types';

const LabelModal = ({
  labelArray,
  visibility,
  closeModal,
  handleChangeRemoveLabel,
  handleChangeLabel,
  addLabelRow,
  saveLabel,
}) => {
  const [openSameLabelSnackbar, setOpenSameLabelSnackbar] = useState(false);
  const [openEmptyLabelSnackbar, setOpenEmptyLabelSnackbar] = useState(false);
  const openLabelData = () => {
    const div = [];
    // Outer loop to create parent
    labelArray &&
      labelArray.map((single, index) =>
        div.push(
          <SettingComponentStyle>
            <Row>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #F0EDF1',
                }}
              >
                <span> - </span>
                <input
                  placeholder="Add Label"
                  value={single.value}
                  onChange={e => {
                    e.preventDefault();
                    setOpenSameLabelSnackbar(false);
                    setOpenEmptyLabelSnackbar(false);
                    handleChangeLabel(single.id, e.target.value);
                  }}
                  className="modal-input"
                />
                <img
                  hidden={labelArray && labelArray.length === 1}
                  src={remove}
                  onClick={() => {
                    handleChangeRemoveLabel(single.id);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            </Row>
          </SettingComponentStyle>,
        ),
      );
    return div;
  };

  const doesArrayHaveDuplicates = array => {
    const valuesSoFar = Object.create(null);
    for (let i = 0; i < array.length; ++i) {
      const value = array[i];
      if (value !== '') {
        if (value in valuesSoFar) {
          return true;
        }
        valuesSoFar[value] = true;
      }
    }
    return false;
  };
  const saveLabelData = () => {
    const labelNameList = [];
    let flag = true;
    labelArray && labelArray.map(single => labelNameList.push(single.value));
    for (let ind in labelNameList) {
      if (labelNameList[ind] !== '') {
        flag = false;
      }
    }
    if (flag) {
      setOpenEmptyLabelSnackbar(true);
    } else if (doesArrayHaveDuplicates(labelNameList)) {
      setOpenSameLabelSnackbar(true);
    } else {
      saveLabel();
      closeModal();
    }
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
      maskClosable={false}
    >
      <span>
        <div
          style={{
            fontSize: '18px',
            padding: '14px 0 14px 0',
            borderBottom: '1px solid #F0EDF1',
          }}
        >
          Add Label
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
        {openLabelData()}
      </span>
      <div style={{ marginTop: '18px', display: 'flex' }}>
        <div
          style={{
            cursor: 'pointer',
            fontSize: '14px',
            color: '#376AF5',
          }}
          onClick={addLabelRow}
        >
          <img
            style={{ marginRight: '5px', marginBottom: '2px' }}
            src={addIcon}
          />{' '}
          Add Label
        </div>
        <div className="ml-auto">
          <CustomButton
            type="submit"
            primary
            size="large"
            clicked={() => {
              saveLabelData();
            }}
            style={{
              borderRadius: '5px',
              width: '105px',
            }}
          >
            Add
          </CustomButton>
        </div>
      </div>

      <SnackBar
        openSnackbar={openSameLabelSnackbar}
        onClose={() => setOpenSameLabelSnackbar(false)}
        message="Label name must be unique"
        variant="error"
      />

      <SnackBar
        openSnackbar={openEmptyLabelSnackbar}
        onClose={() => setOpenEmptyLabelSnackbar(false)}
        message="Empty Label cannot be added"
        variant="error"
      />
    </Modal>
  );
};

export default LabelModal;

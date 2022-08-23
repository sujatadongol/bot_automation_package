import React from 'react';
import { Col, Modal, Row } from 'antd';
import { CircularProgress } from '@material-ui/core';
import CustomButton from '../../Button/Button';
import close from '../../../assets/close.svg';
import remove from '../../../assets/intentRemove.svg';
import add from '../../../assets/addIntentIcon.svg';
import CreateIntentComponentStyle from '../../CreateIntent/Style';
import noDataIcon from '../../../assets/noDataIcon.svg';

const SingleParaphraseModal = ({
  visibility,
  closeModal,
  loadingParaphrase,
  paraphraseOfSpecificTrainingPhrase,
  addSpecificParaphraseRow,
  removeSpecificParaphraseRow,
  handleChangeInSpecificParaphrase,
  updateSpecificParaphraseRow,
  title,
  phraseId,
}) => {
  const openPromptData = () => {
    if (
      paraphraseOfSpecificTrainingPhrase &&
      paraphraseOfSpecificTrainingPhrase.length > 0
    ) {
      const div = [];
      // Outer loop to create parent
      paraphraseOfSpecificTrainingPhrase &&
        paraphraseOfSpecificTrainingPhrase.map((single, index) => {
          return div.push(
            <CreateIntentComponentStyle>
              <Row id="paraphrase-content-id">
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #F0EDF1',
                  }}
                >
                  <span style={{ width: '20px' }}>{index + 1}</span>
                  <input
                    value={single.text}
                    onChange={e => {
                      e.preventDefault();
                      handleChangeInSpecificParaphrase(
                        single.phraseId,
                        e.target.value,
                      );
                    }}
                    className={'prompt-input'}
                  />
                  <img
                    src={remove}
                    onClick={() => {
                      removeSpecificParaphraseRow(single.phraseId);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </Col>
              </Row>
            </CreateIntentComponentStyle>,
          );
        });
      return div;
    } else {
      return (
        <CreateIntentComponentStyle>
          <div className="no-data-content">
            <img src={noDataIcon} />
            <div className={'mb-3'}>No Paraphrase</div>
          </div>
        </CreateIntentComponentStyle>
      );
    }
  };

  const saveParaphrase = () => {
    updateSpecificParaphraseRow(phraseId);
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
      <CreateIntentComponentStyle>
        <div
          style={{
            fontSize: '18px',
            padding: '10px 0',
            borderBottom: '1px solid #F0EDF1',
          }}
        >
          {title}
          <img
            src={close}
            alt="closeIcon"
            onClick={closeModal}
            style={{
              marginTop: '4px',
              float: 'right',
              marginRight: '0px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          id="paraphrase-modal-id"
          className={'paraphrase-content-wrapper'}
          style={{ minHeight: '80px' }}
        >
          {loadingParaphrase ? (
            <div className={'message-loader'}>
              <div style={{ margin: '8px 30px' }}>
                <CircularProgress
                  style={{
                    color: '#bebebe',
                    width: 24,
                    height: 24,
                  }}
                />
              </div>
              <div>Loading data...</div>
            </div>
          ) : (
            openPromptData()
          )}
        </div>
      </CreateIntentComponentStyle>
      <div
        className={'d-flex'}
        style={{ marginTop: '10px' }}
        hidden={loadingParaphrase === true}
      >
        <div
          className={'mr-auto'}
          style={{ color: '#376AF5', cursor: 'pointer' }}
          onClick={() => {
            addSpecificParaphraseRow();
          }}
        >
          <img src={add} style={{ marginRight: '5px', marginBottom: '2px' }} />
          Add Paraphrase
        </div>
        <CustomButton
          type="submit"
          primary
          size="large"
          clicked={() => {
            saveParaphrase();
            closeModal();
          }}
          style={{
            borderRadius: '5px',
            width: '105px',
          }}
        >
          Save
        </CustomButton>
      </div>
    </Modal>
  );
};

export default SingleParaphraseModal;

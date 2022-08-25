import React from 'react';
import { Modal } from 'antd';
import close from '../../assets/close.svg';
import CreateIntentComponentStyle from '../CreateIntent/Style';
import OutlinedSpinner from '../ReusableComponents/Spinner';
import { UnescapeHtml } from '../../utils/helper';

const MisleadingIntentModal = ({
  visibility,
  loadingParaphrase,
  closeModal,
  misleadingIntents,
}) => {
  const openData = () => {
    if (misleadingIntents && misleadingIntents.length > 0) {
      const div = [];
      // Outer loop to create parent
      misleadingIntents &&
        misleadingIntents.map((singleIntent, index) => {
          return div.push(
            <CreateIntentComponentStyle>
              <div className="misleading-intents-wrapper">
                <div>{singleIntent.intentName}</div>
                <div className="paraphrase-list-wrapper">
                  {singleIntent.trainingPhrases &&
                    singleIntent.trainingPhrases.map(single => (
                      <div className="single-paraphrase d-flex p-1">
                        <div className="paraphrase-input">
                          {single.text && UnescapeHtml(single.text)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CreateIntentComponentStyle>,
          );
        });
      return div;
    }
    return (
      <CreateIntentComponentStyle>
        <div
          className="no-data-content"
          style={{
            minHeight: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
          }}
        >
          No Data
        </div>
      </CreateIntentComponentStyle>
    );
  };

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={500}
    >
      <CreateIntentComponentStyle>
        <div
          style={{
            fontSize: '18px',
            padding: '10px 0',
            borderBottom: '1px solid #F0EDF1',
          }}
        >
          Misleading Intents
          <img
            src={close}
            alt="closeIcon"
            onClick={closeModal}
            style={{
              marginTop: '8px',
              float: 'right',
              marginRight: '0px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className="paraphrase-content-wrapper"
          style={{ minHeight: '120px' }}
        >
          {loadingParaphrase ? (
            <div
              style={{
                position: 'absolute',
                left: '27%',
                top: '50%',
                color: '#a8a8a8',
                marginBottom: '10px',
              }}
            >
              <div style={{ margin: '8px 100px' }}>
                {/* <CircularProgress
                  style={{
                    color: '#bebebe',
                    width: 24,
                    height: 24,
                  }}
                /> */}
                <OutlinedSpinner />
              </div>
            </div>
          ) : (
            <>{openData()}</>
          )}
        </div>
      </CreateIntentComponentStyle>
    </Modal>
  );
};

export default MisleadingIntentModal;

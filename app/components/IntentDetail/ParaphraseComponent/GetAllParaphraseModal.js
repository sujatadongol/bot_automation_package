import React from 'react';
import { Modal } from 'antd';
import CustomButton from '../../ReusableComponents/Button/Button';
import close from '../../../assets/close.svg';
import remove from '../../../assets/delete.svg';
import add from '../../../assets/addIntentIcon.svg';
import CreateIntentComponentStyle from '../../CreateIntent/Style';
import noDataIcon from '../../../assets/noDataIcon.svg';
import OutlinedSpinner from '../../ReusableComponents/Spinner';

const AllParaphraseModal = ({
  visibility,
  loadingParaphrase,
  optimizationSuccess,
  closeModal,
  paraphraseList,
  addParaphraseRow,
  removeParaphraseRow,
  handleChangeInParaphrase,
  updateParaphrase,
  intentId,
}) => {
  const openParaphraseData = () => {
    if (paraphraseList && paraphraseList.length > 0) {
      const div = [];
      // Outer loop to create parent
      paraphraseList &&
        paraphraseList.map((singleParaphrase, index) => {
          return div.push(
            <CreateIntentComponentStyle>
              <div className="paraphrase-list-wrapper">
                <div className="single-paraphrase d-flex p-1">
                  <input
                    className={'paraphrase-input'}
                    value={singleParaphrase.text}
                    onChange={e => {
                      e.preventDefault();
                      handleChangeInParaphrase(
                        singleParaphrase.id,
                        e.target.value,
                      );
                    }}
                  />
                  <img
                    width={18}
                    height={18}
                    src={remove}
                    onClick={() => {
                      removeParaphraseRow(singleParaphrase.id);
                    }}
                    style={{
                      cursor: 'pointer',
                      margin: '2px 4px 0 6px',
                    }}
                  />
                </div>
              </div>
            </CreateIntentComponentStyle>,
          );
        });

      return div;
    }
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
        {optimizationSuccess ? (
          'Already Optimized'
        ) : (
          <div className={'d-flex-column'}>
            {' '}
            <img src={noDataIcon} />
            <div>No Data</div>
          </div>
        )}
      </div>
    </CreateIntentComponentStyle>;
  };

  const saveParaphrase = () => {
    let attributeDetailForm = [];
    paraphraseList &&
      paraphraseList.map(single => {
        return attributeDetailForm.push(single.value);
      });
    updateParaphrase(intentId);
  };

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={800}
    >
      <CreateIntentComponentStyle>
        <div
          style={{
            fontSize: '18px',
            padding: '10px 0',
            borderBottom: '1px solid #F0EDF1',
          }}
        >
          Intent Optimization
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
          className={'paraphrase-content-wrapper'}
          style={{ minHeight: '120px' }}
        >
          {loadingParaphrase ? (
            <div
              style={{
                position: 'absolute',
                left: '38%',
                top: '40%',
                color: '#a8a8a8',
                marginBottom: '10px',
              }}
            >
              <div style={{ margin: '8px 100px' }}>
                <OutlinedSpinner />
              </div>
              <div>Optimizing intents. Might take some time.</div>
              <div className={'text-center'}>Please wait ...</div>
            </div>
          ) : (
            <>
              {openParaphraseData()}
              <div
                hidden={!(paraphraseList && paraphraseList.length > 0)}
                className="single-paraphrase d-flex p-1 "
                style={{
                  color: '#376AF5',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
                onClick={() => addParaphraseRow()}
              >
                <img src={add} style={{ margin: '0 5px 2px 5px' }} alt="add" />
                Add Paraphrase
              </div>
            </>
          )}
        </div>
      </CreateIntentComponentStyle>
      <div
        className={'d-flex'}
        style={{ marginTop: '18px' }}
        hidden={
          loadingParaphrase === true ||
          paraphraseList === undefined ||
          paraphraseList.length === 0
        }
      >
        <div className={'mr-auto'} />
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

export default AllParaphraseModal;

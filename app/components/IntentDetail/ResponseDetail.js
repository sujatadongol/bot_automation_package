import React, { useState } from 'react';
import DivWrapper from '../ReusableComponents/DivWrapper/DivWrapper';
import add from '../../assets/addIntentIcon.svg';
import deleteResponse from '../../assets/delete_response.svg';
import TextResponses from './TextResponses';
import ConfirmationModal from '../ReusableComponents/ModalComponents/ConfirmationModal';
import { Tooltip } from 'antd';
import intent from '../../assets/intent.svg';

const ResponseDetail = ({
  apiList,
  fulfilmentList,
  botResponse,
  handleChangeToAddTextResponse,
  handleChangeToRemoveTextResponse,
  handleChangeRemoveResponse,
  handleChangeBotResponse,
  intentParameter,
  selectIntentParamIdForBotResponse,
  handleChangeIntentParameter,
  handleChangePlainBotResponse,
}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState('');
  const openResponseData = () => {
    const div = [];
    // Outer loop to create parent
    botResponse &&
      botResponse.map((single, index) =>
        div.push(
          <div className="text-response-wrapper">
            <div className="text-response-header">
              Text Response{' '}
              <img
                hidden={botResponse.length === 1}
                src={deleteResponse}
                style={{ float: 'right', marginTop: '4px', cursor: 'pointer' }}
                onClick={() => {
                  setSelectedPhraseId(single.botResponseId);
                  setRemoveModal(true);
                }}
              />
            </div>
            <TextResponses
              fulfilmentList={fulfilmentList}
              apiList={apiList}
              responses={single}
              handleChangePlainBotResponse={handleChangePlainBotResponse}
              handleChangeBotResponse={handleChangeBotResponse}
              handleChangeRemoveResponse={handleChangeRemoveResponse}
              intentParameter={intentParameter}
              selectIntentParamIdForBotResponse={
                selectIntentParamIdForBotResponse
              }
              handleChangeIntentParameter={handleChangeIntentParameter}
            />
          </div>,
        ),
      );
    return div;
  };

  return (
    <>
      <DivWrapper
        style={{
          padding: 0,
          borderRadius: '10px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
          marginTop: '8px',
        }}
      >
        <div className="intent-value-header" style={{ borderBottom: 'none' }}>
          <Tooltip title="Text responses that bot delivers to the user">
            Responses
            <img src={intent} className={'title-icon'} />
          </Tooltip>
        </div>
        {openResponseData()}

        <div>
          <button
            className="add-button"
            onClick={handleChangeToAddTextResponse}
            style={{ paddingTop: 0 }}
          >
            <img src={add} style={{ marginRight: '5px' }} /> Add Response
          </button>
        </div>
      </DivWrapper>

      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal}
        content="Are you sure you want to remove this response ?"
        onClick={() => handleChangeToRemoveTextResponse(selectedPhraseId)}
        closeModal={() => setRemoveModal(false)}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />
    </>
  );
};

export default ResponseDetail;

import React, { useEffect, useState } from 'react';
import TryOutStyle from './Style';
import SnackBar from '../../components/ReusableComponents/Snackbar';
import TryOutModal from './TryOutModal';
import { UnescapeHtml } from '../../utils/helper';
import OutlinedSpinner from '../../components/ReusableComponents/Spinner';
import { CommonIcons } from '../../assets/CommonIcons';

const TryOutScreen = ({
  loading,
  snackBar,
  error,
  variant,
  handleSnackBarClose,

  openTryOutModal,
  closeTryOutModal,

  handleChangeTryOutText,
  fetchTryOutResponse,
  tryOutText,
  tryOutResponse,
  clearTryOutData,
  botId,
}) => {
  const [rawResponseModal, setRawResponseModal] = useState(false);
  useEffect(
    () => () => {
      if (
        !window.location.pathname.includes('/intent') &&
        !window.location.pathname.includes('/bot/')
      ) {
        clearTryOutData();
      }
    },
    [],
  );

  const parseResponse = () => {
    switch (tryOutResponse.conversationResponse.botReply.replyType) {
      case 'KGRAPH_REPLY':
        return JSON.stringify(
          tryOutResponse.conversationResponse.botReply.kgraphReply,
          null,
          2,
        );
      case 'CONVERSATIONAL_REPLY':
        if (
          tryOutResponse.conversationResponse.botReply.conversationalReply &&
          tryOutResponse.conversationResponse.botReply.conversationalReply
            .replyText &&
          tryOutResponse.conversationResponse.botReply.conversationalReply
            .replyText.length > 0
        ) {
          return UnescapeHtml(
            tryOutResponse.conversationResponse.botReply.conversationalReply
              .replyText[0],
          );
        }
        break;
      case 'WITH_MESSAGE_REPLY':
        return tryOutResponse.conversationResponse.botReply.replyMessage;
      default:
        return (
          <div
            style={{
              fontStyle: 'italic',
              color: '#666',
            }}
          >
            Not Available
          </div>
        );
    }
  };

  return (
    <>
      <TryOutStyle>
        <div hidden={!openTryOutModal} className="try-out-content">
          {loading === true ? <OutlinedSpinner /> : null}
          <div className="try-out-modal">
            <div className="try-out-title ml-auto mr-auto">
              <div onClick={closeTryOutModal}>
                <CommonIcons.ArrowRight />
              </div>

              <div className="ml-auto mr-auto"> TRY OUT</div>
            </div>
            <input
              value={tryOutText}
              className="try-out-input"
              placeholder="ENTER TEXT TO TEST BOT"
              onChange={e => {
                handleChangeTryOutText(e.target.value);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  fetchTryOutResponse(botId);
                }
              }}
            />
            {tryOutResponse ? (
              <div>
                <div className="try-out-label">USER INPUT</div>
                <div className="try-out-data">
                  {tryOutResponse.conversationResponse.queryText}
                </div>
                <div className="try-out-label">RESPONSES</div>
                <pre className="try-out-data">{parseResponse()}</pre>
                {tryOutResponse.conversationResponse.botReply.replyType ===
                'KGRAPH_REPLY' ? null : (
                  <>
                    <div className="try-out-label">INTENT</div>
                    <div className="try-out-data">
                      {tryOutResponse.conversationResponse.botReply
                        .conversationalReply &&
                      tryOutResponse.conversationResponse.botReply
                        .conversationalReply.intentResult &&
                      tryOutResponse.conversationResponse.botReply
                        .conversationalReply.intentResult.intent.name ? (
                        tryOutResponse.conversationResponse.botReply
                          .conversationalReply.intentResult.intent.name
                      ) : (
                        <div
                          style={{
                            fontStyle: 'italic',
                            color: '#666',
                          }}
                        >
                          Not Available
                        </div>
                      )}
                    </div>
                    <div className="row m-0">
                      <div className="col-6 p-0">
                        <div className="try-out-label">PARAMETER</div>
                      </div>
                      <div className="col-6 p-0">
                        <div className="try-out-label">VALUE</div>
                      </div>
                    </div>

                    <div
                      style={{
                        margin: '0',
                        borderBottom: '1px solid #f0edf1',
                        paddingBottom: '10px',
                      }}
                    >
                      {tryOutResponse.conversationResponse.botReply
                        .conversationalReply &&
                      tryOutResponse.conversationResponse.botReply
                        .conversationalReply.intentResult &&
                      tryOutResponse.conversationResponse.botReply
                        .conversationalReply.intentResult.entities ? (
                        tryOutResponse.conversationResponse.botReply.conversationalReply.intentResult.entities.map(
                          single => (
                            <div className="row m-0">
                              <div className="col-6 entities-list">
                                {single.name}
                              </div>
                              <div className="col-6 entities-list">
                                {single.value}
                              </div>
                            </div>
                          ),
                        )
                      ) : (
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{
                              fontStyle: 'italic',
                              color: '#666',
                              paddingLeft: '15px',
                            }}
                          >
                            Not Available
                          </div>{' '}
                          <div
                            className="col-6"
                            style={{
                              fontStyle: 'italic',
                              color: '#666',
                              paddingLeft: '15px',
                            }}
                          >
                            Not Available
                          </div>
                        </div>
                      )}
                    </div>

                    <div style={{ padding: '15px' }}>
                      <div
                        className="raw-response"
                        onClick={() => setRawResponseModal(true)}
                      >
                        VIEW RAW RESPONSE
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </TryOutStyle>

      <TryOutModal
        visibility={rawResponseModal}
        closeModal={() => setRawResponseModal(false)}
        tryOutResponse={tryOutResponse}
      />
      <SnackBar
        openSnackbar={snackBar}
        onClose={handleSnackBarClose}
        message={error}
        variant={variant}
      />
    </>
  );
};

export default TryOutScreen;

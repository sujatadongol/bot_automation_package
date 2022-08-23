import React, { useState } from 'react';
import { Modal, Tooltip } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyIcon from '../../assets/copy.svg';
import TryOutStyle from './Style';

const TryOutModal = ({ visibility, closeModal, tryOutResponse }) => {
  const [msgCopied, setMsgCopied] = useState(false);
  return (
    <Modal
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      centered
      width={700}
    >
      <TryOutStyle>
        <div className="raw-response-title">Raw API Response</div>

        {tryOutResponse ? (
          <div className="raw-response-body">
            <div className="copy-response">
              <Tooltip title={msgCopied ? 'Copied' : 'Copy'}>
                <CopyToClipboard
                  text={JSON.stringify(
                    {
                      conversationResponse: tryOutResponse.conversationResponse,
                    },
                    null,
                    2,
                  )}
                  onCopy={() => setMsgCopied(true)}
                >
                  <img
                    src={copyIcon}
                    alt="Copy"
                    style={{ cursor: 'pointer' }}
                  />
                </CopyToClipboard>
              </Tooltip>
            </div>
            <pre style={{ overflow: 'initial' }}>
              {JSON.stringify(
                { conversationResponse: tryOutResponse.conversationResponse },
                null,
                2,
              )}
            </pre>
          </div>
        ) : null}
      </TryOutStyle>
    </Modal>
  );
};

export default TryOutModal;

import React, { useState } from 'react';
import { Progress } from 'antd';
import modalClose from '../../../../assets/new-modal-close.svg';
import CustomBtn from '../../../Button/Button';
import BotConfigurationTabStyle from '../../../../containers/Bot/BotConfigurationTab/Style';
import history from '../../../../utils/history';
import { checkIfStrIsValidURL, ValidURL } from '../../../../utils/helper';

const ImportIntentModalContent = ({
  defaultLanguage,
  toggleBotImportModal,
  botImport,
  botId,

  botImportCompleted,
  progressModalVisible,
  fileName,
  fileUrl,
  uploadDocument,
  uploadingDoc,
  openSnackbar,
}) => {
  const [urlColor, setUrlColor] = useState('#376AF5');
  const [documentColor, setDocumentColor] = useState('');
  const [urlBorderColor, setUrlBorderColor] = useState('2px solid #376AF5');
  const [documentBorderColor, setDocumentBorderColor] = useState('');
  const [showUrlContent, setShowUrlContent] = useState(true);
  const [urlValue, setUrlValue] = useState('');

  return (
    <BotConfigurationTabStyle>
      {!progressModalVisible ? (
        <>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #E8E8E8',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              className="d-flex align-items-center mr-30"
              style={{ display: 'flex' }}
            >
              <div
                onClick={() => {
                  setUrlColor('#376AF5');
                  setUrlBorderColor('2px solid #376AF5');
                  setDocumentColor('#333333');
                  setDocumentBorderColor('none');
                  setShowUrlContent(true);
                }}
                style={{
                  color: urlColor,
                  padding: '10px',
                  fontSize: '18px',
                  fontWeight: '500px',
                  borderBottom: urlBorderColor,
                  cursor: 'pointer',
                }}
              >
                URL
              </div>
              <div
                onClick={() => {
                  setUrlColor('#333333');
                  setDocumentColor('#376AF5');
                  setUrlBorderColor('none');
                  setDocumentBorderColor('2px solid #376AF5');
                  setShowUrlContent(false);
                }}
                style={{
                  color: documentColor,
                  padding: '10px',
                  fontSize: '18px',
                  fontWeight: '500px',
                  borderBottom: documentBorderColor,
                  cursor: 'pointer',
                }}
              >
                Document
              </div>
            </div>

            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                toggleBotImportModal(false);
                setUrlValue('');
              }}
            >
              <img src={modalClose} alt="icon" />
            </div>
          </div>

          {showUrlContent ? (
            <>
              <div style={{ margin: '25px 0px' }}>
                <input
                  placeholder="URL"
                  style={{
                    width: '100%',
                    border: '1px solid #C4C4C4',
                    borderRadius: '3px',
                    padding: '6px 10px',
                    height: '40px',
                  }}
                  value={urlValue}
                  onChange={e => setUrlValue(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <CustomBtn
                  disabled={!urlValue}
                  clicked={() => {
                    if (urlValue) {
                      checkIfStrIsValidURL(urlValue)
                        ? botImport(
                            urlValue,
                            '',
                            botId,
                            showUrlContent ? 'URL_TYPE' : 'DOCUMENT_TYPE',
                          )
                        : openSnackbar(true, 'Invalid Url', 'error');
                    }
                  }}
                  primary
                  style={
                    urlValue
                      ? { width: '85px' }
                      : {
                          width: '85px',
                          background: 'rgb(132, 148, 247)',
                          borderColor: 'rgb(132, 148, 247)',
                          color: '#fff',
                        }
                  }
                >
                  Import
                </CustomBtn>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: '100%',
                  border: '1px solid #C4C4C4',
                  borderRadius: '3px',
                  padding: '6px 10px',
                  margin: '25px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  justifyContent: 'space-between',
                }}
              >
                <div>{fileName}</div>
                <div>
                  <label
                    htmlFor="doc"
                    className="browse-doc-btn"
                    style={
                      uploadingDoc ? { background: 'rgb(132, 148, 247)' } : null
                    }
                  >
                    {uploadingDoc ? 'Uploading ... ' : 'Browse'}
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    id="doc"
                    style={{ display: 'none' }}
                    onChange={e => {
                      if (!uploadingDoc) {
                        e.preventDefault();
                        uploadDocument(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <CustomBtn
                  disabled={!fileName || uploadingDoc}
                  clicked={() => {
                    if (fileName && !uploadingDoc) {
                      botImport(
                        '',
                        fileUrl,
                        botId,
                        showUrlContent ? 'URL_TYPE' : 'DOCUMENT_TYPE',
                        fileName,
                      );
                    }
                  }}
                  primary
                  style={
                    fileName && !uploadingDoc
                      ? { width: '85px' }
                      : {
                          width: '85px',
                          background: 'rgb(132, 148, 247)',
                          borderColor: 'rgb(132, 148, 247)',
                          color: '#fff',
                        }
                  }
                >
                  Next
                </CustomBtn>
              </div>
            </>
          )}
        </>
      ) : (
        <div style={{ paddingTop: '10px' }}>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            onClick={() => {
              toggleBotImportModal(false);
              setUrlValue('');
            }}
          >
            <img src={modalClose} alt="close-icon" />
          </div>
          <div style={{ margin: '15px 0px' }}>
            <div
              style={{
                fontSize: '18px',
                color: '#333333',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              {botImportCompleted
                ? 'Import Complete.'
                : 'Please wait as this may take some time.'}
            </div>
            <Progress
              percent={botImportCompleted ? 100 : 50}
              showInfo={false}
              strokeLinecap="square"
              strokeWidth={12}
              strokeColor="#376AF5"
            />
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            hidden={!botImportCompleted}
          >
            <CustomBtn
              primary
              style={{ height: '40px', width: '85px' }}
              clicked={() => {
                toggleBotImportModal(false);
                let urlData =
                  urlValue.includes('https://') || urlValue.includes('http://')
                    ? urlValue
                    : 'https://' + urlValue;
                localStorage.setItem(
                  'intentImportSource',
                  showUrlContent ? urlData : fileName,
                );
                history.push(`/bot/intent/import/${botId}/${defaultLanguage}`);
              }}
            >
              Next
            </CustomBtn>
          </div>
        </div>
      )}
    </BotConfigurationTabStyle>
  );
};

export default ImportIntentModalContent;

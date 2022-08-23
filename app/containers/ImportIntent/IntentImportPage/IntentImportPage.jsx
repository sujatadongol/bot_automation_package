import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Row, Tooltip } from 'antd';
import IntentImportStyle from './Style';
import SnackBar from '../../../components/Snackbar';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BreadCrumbValueFunc } from '../../Navbar/helper';
import CustomButton from '../../../components/Button/Button';
import intentSrc from '../../../assets/intent.svg';
import remove from '../../../assets/intentRemove.svg';
import ConfirmationModal from '../../../components/ReusableComponents/ModalComponents/ConfirmationModal';
import history from '../../../utils/history';
import IntentNameHelper from '../../../components/IntentNameHelper';
import { BreadCrumbsDiv } from '../../../components/Layouts/NavLayout/Style';

const IntentImportPage = ({
  match,
  error,
  loading,
  variant,
  openSnackBar,
  closeSnackbar,

  intentsList,
  // botIntentsList,
  fetchIntent,
  saveIntent,
  handleChangeToRemoveItem,
  handleChangeInSpecificData,
  discardIntent,
  intentName,
  handleIntentNameChange,
  reloadContainer,
  reloadContainerFunc,
}) => {
  const { botId, language: defaultLanguage, type: importType } = match.params;
  const [removeModal, setRemoveModal] = useState(false);
  // const [list, setList] = useState(intentsList);
  const [selectedId, setSelectedId] = useState({
    intentId: '',
    itemId: '',
    itemType: '',
  });

  useEffect(() => {
    fetchIntent(botId, localStorage.getItem('intentImportSource'), importType);
  }, []);
  {
    if (reloadContainer && localStorage.getItem('serviceId')) {
      history.push('/bot');
      reloadContainerFunc(false);
    }
  }
  return (
    <IntentImportStyle>
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={[
            '/home',
            '/bot',
            `/bot/${botId}/intent/${defaultLanguage}`,
          ]}
        />
      </BreadCrumbsDiv>

      {loading ? (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <CircularProgress style={{ color: '#376AF5' }} />
        </div>
      ) : (
        <>
          {' '}
          <div className="intents-page">
            {intentsList &&
              intentsList.map((intent, index) => {
                return (
                  <div key={index}>
                    <IntentNameHelper
                      index={index}
                      intentName={intent.intentName}
                      handleIntentNameChange={handleChangeInSpecificData}
                      intentId={intent.intentId}
                    />
                    {/* <div className="imported-intent-wrapper">
                      <div className="imported-intent-header">Intent Name</div>
                      <input
                        placeholder="Intent Name"
                        className="imported-intent-input"
                        value={intent.intentName}
                        // onChange={e=> handleChange(intent.intentId, e.target.value)}
                        onChange={e => {
                          e.preventDefault();
                          handleChangeInSpecificData(
                            intent.intentId,
                            '',
                            'INTENT_NAME',
                            e.target.value,
                          )
                        }}
                      />
                    </div> */}

                    <div className="imported-intent-wrapper">
                      <div className="imported-intent-header">
                        Training Phrases
                        <Tooltip title="Possible phrases that detect the intent">
                          <img
                            src={intentSrc}
                            className={'title-icon'}
                            alt="intent"
                          />
                        </Tooltip>
                      </div>
                      {intent.trainingPhrases &&
                        intent.trainingPhrases.map(trainingPhrase => {
                          return (
                            <div className="d-flex  align-items-center imported-intent-input">
                              <input
                                key={index}
                                placeholder="Training Phrase"
                                value={trainingPhrase.text}
                                onChange={e =>
                                  handleChangeInSpecificData(
                                    intent.intentId,
                                    trainingPhrase.id,
                                    'PHRASE',
                                    e.target.value,
                                  )
                                }
                              />
                              <Tooltip title="Delete">
                                <img
                                  alt="close"
                                  hidden={intent.trainingPhrases.length === 1}
                                  id={trainingPhrase.id}
                                  src={remove}
                                  style={{
                                    height: 'fit-content',
                                    cursor: 'pointer',
                                  }}
                                  onClick={e => {
                                    e.preventDefault();
                                    setSelectedId({
                                      intentId: intent.intentId,
                                      itemId: trainingPhrase.id,
                                      itemType: 'PHRASE',
                                    });
                                    setRemoveModal('PHRASE');
                                  }}
                                />
                              </Tooltip>
                            </div>
                          );
                        })}
                    </div>

                    <div className="imported-intent-wrapper">
                      <div className="imported-intent-header">
                        Responses
                        <Tooltip title="Text responses that bot delivers to the user">
                          <img
                            src={intentSrc}
                            className={'title-icon'}
                            alt="intent"
                          />
                        </Tooltip>
                      </div>
                      {intent.botResponses &&
                        intent.botResponses.map(botResponse => {
                          return (
                            botResponse.intentResponses &&
                            botResponse.intentResponses.map(intentResponse => {
                              return (
                                <div className="d-flex align-items-center imported-intent-input">
                                  <textarea
                                    placeholder="Response"
                                    value={intentResponse.response}
                                    key={index}
                                    onChange={e =>
                                      handleChangeInSpecificData(
                                        intent.intentId,
                                        intentResponse.id,
                                        'RESPONSE',
                                        e.target.value,
                                      )
                                    }
                                  />
                                  <Tooltip title="Delete">
                                    <img
                                      alt="close"
                                      hidden={
                                        intent.botResponses.length === 1 &&
                                        botResponse.intentResponses.length === 1
                                      }
                                      id={intentResponse.id}
                                      src={remove}
                                      style={{
                                        height: 'fit-content',
                                        cursor: 'pointer',
                                      }}
                                      onClick={e => {
                                        e.preventDefault();
                                        setSelectedId({
                                          intentId: intent.intentId,
                                          itemId: intentResponse.id,
                                          itemType: 'RESPONSE',
                                        });
                                        setRemoveModal('RESPONSE');
                                      }}
                                    />
                                  </Tooltip>
                                </div>
                              );
                            })
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <CustomButton
              style={{
                height: '40px',
                width: '96px',
                color: '#376AF5',
                borderColor: '#376AF5',
              }}
              clicked={() =>
                discardIntent(
                  localStorage.getItem('intentImportSource'),
                  botId,
                  defaultLanguage,
                )
              }
            >
              Discard
            </CustomButton>
            <CustomButton
              primary
              disabled={loading}
              style={{ height: '40px', width: '96px', margin: '0 10px' }}
              clicked={() => saveIntent(intentsList, botId, defaultLanguage)}
            >
              {!loading ? 'Save' : 'Saving...'}
            </CustomButton>
          </div>
        </>
      )}

      <ConfirmationModal
        title="Confirmation"
        visibility={removeModal === 'PHRASE' || removeModal === 'RESPONSE'}
        content={`Are you sure you want to remove this ${
          removeModal === 'PHRASE' ? 'training phrase' : 'response'
        } ?`}
        onClick={() =>
          handleChangeToRemoveItem(
            selectedId.intentId,
            selectedId.itemId,
            selectedId.itemType,
          )
        }
        closeModal={() => {
          setRemoveModal(false);
          setSelectedId({ intentId: '', itemId: '', itemType: '' });
        }}
        actionLabel="Remove"
        cancelLabel="Cancel"
      />

      <SnackBar
        openSnackbar={openSnackBar}
        onClose={() => closeSnackbar()}
        message={error}
        variant={variant}
      />
    </IntentImportStyle>
  );
};

export default IntentImportPage;

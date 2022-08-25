import React, { useEffect } from 'react';
import SnackBar from '../../../components/ReusableComponents/Snackbar';
import DivWrapper from '../../../components/ReusableComponents/DivWrapper/DivWrapper';
import history from '../../../utils/history';
import TableComponent from '../../../components/ReusableComponents/Table';
import OutlinedSpinner from '../../../components/ReusableComponents/Spinner';

const ImportList = ({
  match,
  loading,
  openSnackBar,
  variant,
  snackbarMsg,
  closeSnackbar,

  importList,
  fetchImportList,

  reloadContainerFunc,
  reloadContainer,
}) => {
  let { botId, language } = match.params;
  useEffect(() => {
    if (localStorage.getItem('serviceId')) {
      fetchImportList(botId, language);
    }
  }, []);

  if (reloadContainer && localStorage.getItem('serviceId')) {
    history.push('/bot');
    reloadContainerFunc(false);
  }

  const columns = [
    {
      title: (
        <div style={{ textAlign: 'left', marginLeft: '10px', width: 140 }}>
          Document / URL
        </div>
      ),
      dataIndex: 'importedSource',
      render: title => (
        <div
          className="text-truncate"
          style={{ textAlign: 'left', marginLeft: '10px', width: '140px' }}
        >
          {title}
        </div>
      ),
    },
    {
      title: 'Intents',
      dataIndex: 'importedIntents',
      render: intents => intents && intents[0] && intents[0].intentName,
      width: '200px',
    },
    {
      title: 'Training Phrases',
      dataIndex: 'importedIntents',
      render: intents => {
        let phrases = intents && intents[0] && intents[0].trainingPhrases;
        return (
          <>
            {phrases &&
              phrases.slice(0, 4).map(singlePhrase => (
                <div className="text-truncate" style={{ maxWidth: '240px' }}>
                  {singlePhrase.text}
                </div>
              ))}
            {phrases && phrases.length > 4 && (
              <div style={{ cursor: 'pointer', color: '#376af5' }}>
                More ({phrases.length - 4})
              </div>
            )}
          </>
        );
      },
      width: '250px',
    },
    {
      title: 'Responses',
      dataIndex: 'importedIntents',
      ellipsis: {
        showTitle: false,
      },
      render: intents => {
        let response =
          intents &&
          intents[0] &&
          intents[0].botResponses &&
          intents[0].botResponses[0] &&
          intents[0].botResponses[0].intentResponses;
        return (
          <div style={{ width: '340px', maxHeight: '200px' }}>
            <div>
              {response &&
                response.slice(0, 4).map(singleRes => (
                  <div className="text-truncate" style={{ maxWidth: '340px' }}>
                    {singleRes.response}
                  </div>
                ))}
            </div>
            {response && response.length > 4 && (
              <span style={{ cursor: 'pointer', color: '#376af5' }}>More</span>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      )}
      <DivWrapper
        style={{
          margin: '10px 20px',
          padding: '0',
          borderRadius: 0,
        }}
      >
        <TableComponent
          columns={columns}
          data={importList}
          onRowClick={record => ({
            onClick: () => {
              localStorage.setItem('intentImportSource', record.importedSource);
              history.push(`/bot/intent/import/${botId}/${language}`);
            },
          })}
        />
      </DivWrapper>

      <SnackBar
        openSnackbar={openSnackBar}
        onClose={closeSnackbar}
        message={snackbarMsg}
        variant={variant}
      />
    </>
  );
};

export default ImportList;

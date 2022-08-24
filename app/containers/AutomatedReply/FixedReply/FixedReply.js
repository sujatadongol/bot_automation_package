import React, { useEffect } from 'react';
import SnackBar from '../../../components/ReusableComponents/Snackbar';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BreadCrumbPathFunc, BreadCrumbValueFunc } from '../../Navbar/helper';
import '../AutomatedReplies/Style.css';
import DivWrapper from '../../../components/ReusableComponents/DivWrapper/DivWrapper';
import CustomButton from '../../../components/ReusableComponents/Button/Button';
import CustomCancelButton from '../../../components/ReusableComponents/Button/CancelButton';
import add from '../../../assets/addIntentIcon.svg';
import remove from '../../../assets/intentRemove.svg';
import history from '../../../utils/history';
import ExpireComponent from '../../../components/AutomatedReply/FixedReply/ExpireComponent';
import { BreadCrumbsDiv } from '../../../components/Layouts/NavLayout/Style';
import OutlinedSpinner from '../../../components/ReusableComponents/Spinner';

const FixedReply = ({
  loading,
  message,
  openSnackbar,
  closeSnackbar,
  variant,

  title,
  matchingTextList,
  replyText,
  enableExpiration,
  expiredTime,

  handleChangeInFixedReplyTitle,
  addMatchingText,
  removeMatchingText,
  handleChangeInMatchingText,
  handleChangeInReplyText,
  handleChangeInExpireDate,

  fetchFixedReplyById,
  createFixedReply,
  updateFixedReply,

  match,
  clearFixedReply,

  reloadContainer,
  reloadContainerFunc,
  clearAutomatedReplies,
}) => {
  const { id } = match.params;

  useEffect(() => {
    id !== 'create' && fetchFixedReplyById(id);
  }, []);
  useEffect(() => {
    return () => clearFixedReply();
  }, []);

  if (reloadContainer && localStorage.getItem('serviceId')) {
    clearAutomatedReplies();
    history.push('/automated/replies');
    reloadContainerFunc();
  }

  const openMatchingTextData = () => {
    const div = [];
    // Outer loop to create parent
    matchingTextList &&
      matchingTextList.map(singleText =>
        div.push(
          <div className="automated-replies-input-wrapper" key={singleText.id}>
            <input
              placeholder="Enter Matching Text"
              className="automated-replies-input"
              value={singleText.value}
              onChange={e =>
                handleChangeInMatchingText(singleText.id, e.target.value)
              }
            />
            <img
              alt="remove"
              // hidden={matchingTextList && matchingTextList.length === 1}
              src={remove}
              onClick={() => {
                removeMatchingText(singleText.id);
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>,
        ),
      );
    return div;
  };

  return (
    <>
      {loading && (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      )}
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>
      <div className="fixed-reply-wrapper">
        <DivWrapper
          style={{
            padding: 0,
            borderRadius: '10px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="automated-replies-header">Title</div>
          <div className="automated-replies-input-wrapper">
            <input
              placeholder="Enter Title"
              className="automated-replies-input"
              value={title}
              // value={title.match(/[0-9a-zA-Z_.]*/)}
              onChange={e => handleChangeInFixedReplyTitle(e.target.value)}
            />
          </div>
        </DivWrapper>{' '}
        <DivWrapper
          style={{
            padding: 0,
            borderRadius: '10px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
            marginTop: '10px',
          }}
        >
          <div className="automated-replies-header">Matching Text</div>
          {openMatchingTextData()}
          <div>
            <button
              className="add-button"
              onClick={() => {
                const id = Math.random();
                addMatchingText(id);
              }}
            >
              <img src={add} style={{ marginRight: '5px' }} alt="add" /> New
              Matching Text
            </button>
          </div>
        </DivWrapper>{' '}
        <DivWrapper
          style={{
            padding: 0,
            borderRadius: '10px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
            marginTop: '10px',
          }}
        >
          <div className="automated-replies-header">Reply Text</div>
          <div className="automated-replies-input-wrapper">
            <input
              placeholder="Enter Reply Text"
              className="automated-replies-input"
              value={replyText}
              onChange={e => handleChangeInReplyText(e.target.value)}
            />
          </div>
        </DivWrapper>
        <ExpireComponent
          enableExpiration={enableExpiration}
          handleChangeInExpireDate={handleChangeInExpireDate}
          expiredTime={expiredTime}
        />
      </div>

      <div
        style={{
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignContent: 'center',
          gap: '20px',
          marginTop: '-20px',
        }}
      >
        <CustomCancelButton
          primary
          clicked={() => {
            history.push('/automated/replies');
          }}
          size="large"
          style={{ borderRadius: '5px', width: '96px' }}
          className="mr-3"
        >
          Cancel
        </CustomCancelButton>
        <CustomButton
          primary
          type="submit"
          size="large"
          clicked={() => {
            if (title) {
              id === 'create' ? createFixedReply() : updateFixedReply(id);
            }
          }}
          style={
            !title
              ? {
                  width: '96px',
                  borderRadius: '5px',
                  cursor: 'auto',
                  background: 'rgb(132, 148, 247)',
                  color: '#fff',
                  border: '1px solid rgb(132, 148, 247)',
                }
              : { width: '96px', borderRadius: '5px' }
          }
        >
          {id === 'create' ? 'Create' : 'Save'}
        </CustomButton>
      </div>
      <SnackBar
        onClose={closeSnackbar}
        variant={variant}
        message={message}
        openSnackbar={openSnackbar}
      />
    </>
  );
};

FixedReply.propTypes = {};

export default FixedReply;

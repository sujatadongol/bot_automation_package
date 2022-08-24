import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
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
import ProblemSolutionModal from '../../../components/AutomatedReply/ProblemSolutionModal';
import { isProblemSolutionsAdded } from './helper';
import { BreadCrumbsDiv } from '../../../components/Layouts/NavLayout/Style';
import OutlinedSpinner from '../../../components/ReusableComponents/Spinner';

const ResolutionReply = ({
  match,
  loading,
  message,
  openSnackbar,
  openSnackbarInResolutionReply,
  closeSnackbar,
  variant,

  title,
  problemDefinitionList,

  handleChangeInResolutionReplyTitle,

  addProblemDefinition,
  removeProblemDefinition,
  handleChangeInProblemDefinition,

  problemSolution,
  expandProblemSolution,
  addProblemSolution,
  removeProblemSolution,
  handleChangeInProblemSolution,
  saveProblemSolution,
  mapProblemSolution,

  addStep,
  removeStep,
  handleChangeInStep,

  handleChangeInFeedbackText,

  createResolutionReply,
  fetchResolutionReplyById,
  updateResolutionReply,

  similarPossibleSolutions,
  fetchSimilarPossibleSolutions,
  clearSimilarPossibleSolutions,

  clearResolutionReply,

  reloadContainer,
  reloadContainerFunc,
  clearAutomatedReplies,
}) => {
  const { id } = match.params;
  const [openProblemSolutionModal, setOpenProblemSolutionModal] = useState(
    false,
  );
  const [selectedProblemDefinition, setSelectedProblemDefinition] = useState({
    id: '',
    value: '',
  });

  useEffect(() => {
    id !== 'create' && fetchResolutionReplyById(id);
  }, []);

  useEffect(() => {
    return () => clearResolutionReply();
  }, []);

  {
    if (reloadContainer && localStorage.getItem('serviceId')) {
      clearAutomatedReplies();
      history.push('/automated/replies');
      reloadContainerFunc();
    }
  }

  const openMatchingTextData = () => {
    const div = [];
    // Outer loop to create parent
    problemDefinitionList &&
      problemDefinitionList.map(singleText =>
        div.push(
          <div className="automated-replies-input-wrapper" key={singleText.id}>
            <input
              placeholder="Enter Problem Definition"
              className="automated-replies-input"
              value={singleText.value}
              onChange={e =>
                handleChangeInProblemDefinition(singleText.id, e.target.value)
              }
            />
            <span
              className="add-button  py-0"
              hidden={!singleText.value}
              onClick={() => {
                setSelectedProblemDefinition({
                  id: singleText.id,
                  value: singleText.value,
                });
                setOpenProblemSolutionModal(true);
                mapProblemSolution(singleText.problemSolutions);
              }}
              style={{ justifyContent: 'flex-end' }}
            >
              {singleText.problemSolutions &&
              singleText.problemSolutions.length > 0
                ? 'Problem Solutions'
                : ' + Add Problem Solution'}
            </span>
            <img
              alt="remove"
              src={remove}
              onClick={() => {
                removeProblemDefinition(singleText.id);
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
          <OutlinedSpinner style={{ color: '#376AF5' }} />
        </div>
      )}
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>
      <DivWrapper
        style={{
          padding: 0,
          borderRadius: '10px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
          marginTop: '10px',
        }}
      >
        <div className="automated-replies-header">Title</div>
        <div className="automated-replies-input-wrapper">
          <input
            placeholder="Enter Title"
            className="automated-replies-input"
            value={title}
            onChange={e => handleChangeInResolutionReplyTitle(e.target.value)}
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
        <div className="automated-replies-header">Problem Definition</div>
        {openMatchingTextData()}
        <div>
          <button
            type="button"
            className="add-button"
            onClick={() => {
              addProblemDefinition();
            }}
          >
            <img src={add} style={{ marginRight: '5px' }} alt="add" /> Add
            another
          </button>
        </div>
      </DivWrapper>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignContent: 'center',
          gap: '20px',
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
              if (!isProblemSolutionsAdded(problemDefinitionList)) {
                openSnackbarInResolutionReply(
                  true,
                  'Problem solutions must not be empty',
                  'error',
                );
              } else {
                id === 'create'
                  ? createResolutionReply()
                  : updateResolutionReply(id);
              }
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
      <ProblemSolutionModal
        openSnackbarInResolutionReply={openSnackbarInResolutionReply}
        clearSimilarPossibleSolutions={clearSimilarPossibleSolutions}
        similarPossibleSolutions={similarPossibleSolutions}
        fetchSimilarPossibleSolutions={fetchSimilarPossibleSolutions}
        expandProblemSolution={expandProblemSolution}
        saveProblemSolution={saveProblemSolution}
        addProblemSolution={addProblemSolution}
        addStep={addStep}
        handleChangeInFeedbackText={handleChangeInFeedbackText}
        handleChangeInProblemSolution={handleChangeInProblemSolution}
        handleChangeInStep={handleChangeInStep}
        removeProblemSolution={removeProblemSolution}
        removeStep={removeStep}
        problemSolutions={problemSolution}
        selectedProblemDefinition={selectedProblemDefinition}
        visibility={openProblemSolutionModal}
        closeModal={() => {
          setOpenProblemSolutionModal(false);
          clearSimilarPossibleSolutions();
        }}
      />
      <SnackBar
        onClose={closeSnackbar}
        variant={variant}
        message={message}
        openSnackbar={openSnackbar}
      />
    </>
  );
};

ResolutionReply.propTypes = {};

export default ResolutionReply;

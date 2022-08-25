import React from 'react';
import { Modal } from 'antd';
import CustomButton from '../ReusableComponents/Button/Button';
import close from '../../assets/close.svg';
import '../../containers/AutomatedReply/AutomatedReplies/Style.css';
import Steps from './ResolutionReply/Steps';
import ProblemSolution from './ResolutionReply/ProblemSolution';
import { isStepAdded } from '../../containers/AutomatedReply/ResolutionReply/helper';

const ProblemSolutionModal = ({
  expandProblemSolution,
  selectedProblemDefinition,
  problemSolutions,
  visibility,
  closeModal,

  addProblemSolution,
  removeProblemSolution,
  handleChangeInProblemSolution,

  addStep,
  removeStep,
  handleChangeInStep,

  handleChangeInFeedbackText,

  similarPossibleSolutions,
  fetchSimilarPossibleSolutions,
  clearSimilarPossibleSolutions,

  saveProblemSolution,
  openSnackbarInResolutionReply,
}) => {
  const openSteps = (id, steps) => {
    const div = [];
    // Outer loop to create parent
    steps &&
      steps.map(singleStep =>
        div.push(
          <Steps
            clearSimilarPossibleSolutions={clearSimilarPossibleSolutions}
            fetchSimilarPossibleSolutions={fetchSimilarPossibleSolutions}
            removeStep={removeStep}
            handleChangeInStep={handleChangeInStep}
            id={id}
            similarPossibleSolutions={similarPossibleSolutions}
            singleStep={singleStep}
          />,
        ),
      );
    return div;
  };
  const openProblemSolutions = () => {
    const div = [];
    // Outer loop to create parent
    problemSolutions &&
      problemSolutions.map((single, index) =>
        div.push(
          <ProblemSolution
            expandProblemSolution={expandProblemSolution}
            openSteps={openSteps}
            handleChangeInFeedbackText={handleChangeInFeedbackText}
            addStep={addStep}
            single={single}
            removeProblemSolution={removeProblemSolution}
            handleChangeInProblemSolution={handleChangeInProblemSolution}
          />,
        ),
      );
    return div;
  };

  return (
    <Modal
      destroyOnClose
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={700}
    >
      <div
        style={{
          display: 'flex',
          fontSize: '18px',
          padding: '6px 0',
          borderBottom: '1px solid #F0EDF1',
        }}
      >
        {selectedProblemDefinition.value}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: '0px',
            cursor: 'pointer',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={close} alt="closeIcon" onClick={closeModal} />
        </div>
      </div>
      <div className="problem-solution-wrapper">{openProblemSolutions()}</div>
      <div style={{ marginTop: '18px', display: 'flex' }}>
        <div
          style={{
            cursor: 'pointer',
            fontSize: '14px',
            color: '#376AF5',
          }}
          onClick={addProblemSolution}
        >
          + Add
        </div>
        <div className="ml-auto">
          <CustomButton
            type="submit"
            primary
            size="large"
            clicked={() => {
              if (!isStepAdded(problemSolutions)) {
                openSnackbarInResolutionReply(
                  true,
                  'Steps must not be empty',
                  'error',
                );
              } else {
                saveProblemSolution(
                  selectedProblemDefinition.id,
                  problemSolutions,
                );
                closeModal();
              }
            }}
            style={{
              borderRadius: '5px',
              width: '105px',
            }}
          >
            Save
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default ProblemSolutionModal;

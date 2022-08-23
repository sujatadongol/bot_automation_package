import React from 'react';
import deleteIcon from '../../../assets/delete.svg';
import downArrow from '../../../assets/blue_arrow.svg';
import upArrow from '../../../assets/blue_up_arrow.svg';
import '../../../containers/AutomatedReply/AutomatedReplies/Style.css';

const ProblemSolution = ({
  single,
  expandProblemSolution,
  removeProblemSolution,
  handleChangeInProblemSolution,

  addStep,

  handleChangeInFeedbackText,
  openSteps,
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid #F0EDF1',
      }}
      key={single.id}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span> - </span>
        <input
          onFocus={() =>
            !single.expand && expandProblemSolution(single.id, true)
          }
          placeholder="Enter Problem Solution"
          value={single.value}
          onChange={e => {
            e.preventDefault();
            handleChangeInProblemSolution(single.id, e.target.value);
          }}
          className="problem-solution-input"
          style={{ color: '#376af5' }}
        />
        <img
          className="px-2"
          alt="delete"
          src={deleteIcon}
          onClick={() => {
            removeProblemSolution(single.id);
          }}
          style={{ cursor: 'pointer' }}
        />{' '}
        <img
          className="px-2"
          alt="expand"
          src={single.expand ? upArrow : downArrow}
          onClick={() => {
            expandProblemSolution(single.id, !single.expand);
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div hidden={!single.expand}>
        <div className="solution-data-wrapper">
          <div className="step-feedback-title">Steps</div>
          {openSteps(single.id, single.steps)}
          <div className="step-btn" onClick={() => addStep(single.id)}>
            + Add
          </div>
        </div>
        <div className="solution-data-wrapper">
          <div className="step-feedback-title">Feedback Reply</div>
          <input
            placeholder="Enter Feedback Text"
            className="problem-solution-input"
            type="text"
            value={single.feedback}
            onChange={e =>
              handleChangeInFeedbackText(single.id, e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;

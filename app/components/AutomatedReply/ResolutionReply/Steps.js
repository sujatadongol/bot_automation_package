import React, { useState } from 'react';
import { Popover } from 'antd';
import remove from '../../../assets/intentRemove.svg';
import '../../../containers/AutomatedReply/AutomatedReplies/Style.css';

const Steps = ({
  singleStep,
  id,
  removeStep,
  handleChangeInStep,

  similarPossibleSolutions,
  fetchSimilarPossibleSolutions,
  clearSimilarPossibleSolutions,
}) => {
  const [selectedStep, setSelectedStep] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const popoverContent = (
    <div
      className="py-1 popover-content-wrapper"
      style={{ width: '635px' }}
      hidden={!similarPossibleSolutions}
    >
      {similarPossibleSolutions &&
        similarPossibleSolutions.map(single => (
          <div
            onClick={() => {
              handleChangeInStep(
                id,
                selectedStep,
                single.possibleSolutionTitle,
              );
              setOpenPopover(false);
            }}
          >
            {single.possibleSolutionTitle}
          </div>
        ))}
    </div>
  );
  return (
    <Popover
      getPopupContainer={trigger => trigger.parentNode}
      content={popoverContent}
      trigger="click"
      visible={openPopover}
      onVisibleChange={setOpenPopover}
      placement="bottom"
    >
      <div
        key={singleStep.id}
        className="d-flex"
        style={{ borderBottom: '1px solid #f1f1f1' }}
      >
        <input
          placeholder="Enter Step"
          value={singleStep.value}
          onChange={e => {
            e.preventDefault();
            !openPopover && setOpenPopover(true);
            setSelectedStep(singleStep.id);
            handleChangeInStep(id, singleStep.id, e.target.value);
            e.target.value
              ? fetchSimilarPossibleSolutions(e.target.value)
              : clearSimilarPossibleSolutions();
          }}
          className="step-input"
        />
        <img
          className="pr-2"
          alt="remove"
          src={remove}
          onClick={() => {
            removeStep(id, singleStep.id);
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </Popover>
  );
};

export default Steps;

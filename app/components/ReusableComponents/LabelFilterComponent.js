import React, { useState, useEffect } from 'react';
import { Checkbox, Col, Popover, Row } from 'antd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { PageSize } from '../../globalConstants';
import './style.css';

function LabelFilterComponent({
  labelValue,
  handleChangeInLabel,
  fetchConversation,
  labelList,
  clearConversationList,
}) {
  console.log(labelValue,'lavel value');
  const [openTeamPopover, setOpenTeamPopover] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(labelValue);
  useEffect(() => {
    setSelectedLabel(labelValue);
  }, [labelValue]);

  const handleChange = checkedValues => {
    if (checkedValues && checkedValues.length < 1) {
      setSelectedLabel([]);
    } else {
      setSelectedLabel(checkedValues);
    }

    handleChangeInLabel(checkedValues);
    clearConversationList();
    fetchConversation(PageSize);
  };

  const getLabelName = (labelId, index) => {
    let labelName = 'All';
    labelList &&
      labelList.map(singleObj => {
        if (singleObj.id.toString() === labelId.toString()) {
          labelName = singleObj.name;
        }
      });
    if (selectedLabel.length - 1 !== index) {
      return labelName + ', ';
    } else {
      return labelName;
    }
  };
  const checkboxDropDown = (
    <div className="message-filter-dropdown-wrapper">
      <div
        className="filter-dropdown-checkbox-wrapper"
        onClick={() => {
          handleChange([]);
        }}
      >
        {' '}
        All{' '}
        {selectedLabel && selectedLabel.length > 0 ? (
          ''
        ) : (
          <span style={{ paddingLeft: '4px', width: '22px' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.03809 15.0455L2.53383 10.692L1 12.1641L7.03809 18L20 5.47204L18.477 4L7.03809 15.0455Z"
                fill="#376af5"
                stroke="#376af5"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      <Checkbox.Group value={selectedLabel} onChange={handleChange}>
        <Row gutter={24} justify="space-between">
          {labelList &&
            labelList.map(label => (
              <Col span={24} className="filter-dropdown-checkbox-wrapper">
                <Checkbox value={label.id}> {label.name}</Checkbox>
              </Col>
            ))}
        </Row>
      </Checkbox.Group>
    </div>
  );

  return (
    <Popover
      getPopupContainer={trigger => trigger.parentNode}
      visible={openTeamPopover}
      onVisibleChange={visibility => {
        setOpenTeamPopover(visibility);
      }}
      content={checkboxDropDown}
      trigger="click"
      placement="bottomLeft"
    >
      <div className="reusable-filter-wrapper pr-2">
        Label:{' '}
        {selectedLabel && selectedLabel.length > 0 && !selectedLabel.includes('All')
          ? selectedLabel.map((single, index) => getLabelName(single, index))
          : 'All'}
        <ExpandMoreIcon width={10} height={10} />
      </div>
    </Popover>
  );
}

LabelFilterComponent.propTypes = {
  handleChangeInLabel: PropTypes.func,
  fetchConversation: PropTypes.func,
  labelList: PropTypes.array,
};

export default LabelFilterComponent;

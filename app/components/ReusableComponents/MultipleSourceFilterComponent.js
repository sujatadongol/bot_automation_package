import React, { useState, useEffect } from 'react';
import { Checkbox, Col, Popover, Row } from 'antd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { sourceList,postList } from '../AnalyticsComponent/helper';
import { PageSize } from '../../globalConstants';
import './style.css';

function MultipleSourceFilterComponent({
  sourceValue,
  handleChangeInSource,
  clearConversationList,
  fetchConversation,
  style,
  userPosts,
}) {
  const [openTeamPopover, setOpenTeamPopover] = useState(false);
  const [selectedSource, setSelectedSource] = useState(sourceValue);
  const SourceList = userPosts?postList:sourceList;
  useEffect(() => {
    setSelectedSource(sourceValue);
  }, [sourceValue]);

  const getSourceName = (sourceId, index) => {
    let sourceName = 'All';
    SourceList &&
    SourceList.map(singleObj => {
        if (singleObj.id.toString() === sourceId.toString()) {
          sourceName = singleObj.label;
        }
      });
    if (selectedSource.length - 1 !== index) {
      return sourceName + ', ';
    } else {
      return sourceName;
    }
  };
  const handleChange = checkedValues => {
    if (checkedValues && checkedValues.length < 1) {
      setSelectedSource([]);
    } else {
      setSelectedSource(checkedValues);
    }

    handleChangeInSource(checkedValues);
    clearConversationList();
    fetchConversation(PageSize);
  };

  const statusDropdown = (
    <div className="message-filter-dropdown-wrapper">
      <div
        className="filter-dropdown-checkbox-wrapper"
        onClick={() => {
          handleChange([]);
        }}
      >
        {' '}
        All{' '}
        {selectedSource && selectedSource.length > 0 ? (
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
      <Checkbox.Group value={selectedSource} onChange={handleChange}>
        <Row gutter={24} justify="space-between">
          {SourceList &&
            SourceList.map(single => (
              <Col span={24} className="filter-dropdown-checkbox-wrapper">
                <Checkbox value={single.id}> {single.label}</Checkbox>
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
      content={statusDropdown}
      trigger="click"
      placement="bottomLeft"
    >
      <div className="reusable-filter-wrapper  pr-2" style={style}>
        Source:{' '}
        {selectedSource &&
        selectedSource.length > 0 &&
        !selectedSource.includes('All')
          ? selectedSource.map((single, index) => getSourceName(single, index))
          : 'All'}
        <ExpandMoreIcon width={10} height={10} />
      </div>
    </Popover>
  );
}

MultipleSourceFilterComponent.propTypes = {
  handleChangeInSource: PropTypes.func,
  fetchConversation: PropTypes.func,
};

export default MultipleSourceFilterComponent;

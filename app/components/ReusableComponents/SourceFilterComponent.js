import React, { useState } from 'react';
import { Popover } from 'antd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { sourceList } from '../AnalyticsComponent/helper';
import './style.css';

function SourceFilterComponent({ handleChangeInSource, fetchReports }) {
  const [openTeamPopover, setOpenTeamPopover] = useState(false);
  const [selectedSource, setSelectedSource] = useState('');

  const statusDropdown = (
    <div className="message-filter-dropdown-wrapper">
      <div
        key=""
        className="filter-dropdown-option"
        onClick={() => {
          setSelectedSource('');
          setOpenTeamPopover(false);
          handleChangeInSource('');
          fetchReports();
        }}
        style={{ minWidth: 120 }}
      >
        All
      </div>
      {sourceList &&
        sourceList.map(single => (
          <div
            key={single.id}
            className="filter-dropdown-option"
            onClick={() => {
              setSelectedSource(single);
              setOpenTeamPopover(false);
              handleChangeInSource(single.id);
              fetchReports();
            }}
            style={{ minWidth: 120 }}
          >
            {single.label}
          </div>
        ))}
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
      <div className="filter-wrapper  pr-2">
        Source: {selectedSource ? selectedSource.label : 'All'}
        <ExpandMoreIcon width={10} height={10} />
      </div>
    </Popover>
  );
}

SourceFilterComponent.propTypes = {
  handleChangeInSource: PropTypes.func,
  fetchConversation: PropTypes.func,
};

export default SourceFilterComponent;

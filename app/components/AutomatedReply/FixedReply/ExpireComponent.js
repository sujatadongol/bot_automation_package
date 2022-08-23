import React, { useState } from 'react';
import { Checkbox } from 'antd';
import PopoverComponent from '../../ReusableComponents/PopoverComponent/PopoverComponent';
import {
  getHoursArray,
  mapExpiredTimestamp,
} from '../../../containers/AutomatedReply/FixedReply/helper';
import { ExpiredComponentWrapper, TitleStyle } from '../style';

const ExpireComponent = ({
  enableExpiration,
  expiredTime,
  handleChangeInExpireDate,
}) => {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <ExpiredComponentWrapper>
      <Checkbox
        checked={enableExpiration}
        onChange={e => handleChangeInExpireDate(e.target.checked)}
      >
        {' '}
        Enable Expiration
      </Checkbox>

      <div className="pl-3" hidden={!enableExpiration}>
        <PopoverComponent
          openPopover={openPopover}
          setOpenPopover={setOpenPopover}
          title={mapExpiredTimestamp(getHoursArray(), expiredTime)}
          titleStyle={{
            border: '1px solid #b5b5b5',
            borderRadius: '2px',
            padding: '2px 4px',
            width: '70px',
            gap: '10px',
          }}
          content={
            <div className="popover-content-wrapper">
              {getHoursArray() &&
                getHoursArray().map(single => (
                  <div
                    key={single.timestamp}
                    onClick={() => {
                      handleChangeInExpireDate(true, single.timestamp);
                      setOpenPopover(false);
                    }}
                  >
                    {single.value}
                  </div>
                ))}
            </div>
          }
        />
      </div>
      <div className="pl-2" hidden={!enableExpiration}>
        hours
      </div>
    </ExpiredComponentWrapper>
  );
};

export default ExpireComponent;

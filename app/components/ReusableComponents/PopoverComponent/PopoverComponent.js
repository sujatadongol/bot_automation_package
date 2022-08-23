import React from 'react';
import { Popover } from 'antd';
import './style.css';

const PopoverComponent = ({
  openPopover,
  setOpenPopover,
  content,
  title,
  titleStyle,
}) => {
  return (
    <Popover
      visible={openPopover}
      onVisibleChange={setOpenPopover}
      getPopupContainer={trigger => trigger.parentNode}
      content={content}
      trigger="click"
      placement="bottom"
    >
      <div className="popover-title" style={titleStyle}>
        <div className="pr-2">{title}</div>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91605 0H7.12657C7.07288 0 7.02236 0.0263163 6.99078 0.0694749L4.0002 4.19165L1.00962 0.0694749C0.978044 0.0263163 0.927517 0 0.873832 0H0.0843453C0.0159231 0 -0.0240776 0.0778962 0.0159231 0.133687L3.72756 5.25061C3.8623 5.43588 4.1381 5.43588 4.27178 5.25061L7.98342 0.133687C8.02448 0.0778962 7.98448 0 7.91605 0Z"
            fill="#666666"
          />
        </svg>
      </div>
    </Popover>
  );
};

export default PopoverComponent;

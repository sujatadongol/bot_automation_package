import { DatePicker } from "antd";
import React from "react";
import { DisabledDateTillSpecificDate } from "../../../utils/helper";
import {  DateStyle } from "./Style";

export const DateWithLabel=({title,dateValue,onDateChange,marginBottom,suffixIcon,allowClear,dateFormat ='DD MMM YYYY',disableDate}) =>{ 
    return <DateStyle marginBottom={marginBottom}>
      <div className="title">{title}</div>
      <DatePicker
              suffixIcon={suffixIcon}
              allowClear={allowClear}
              getPopupContainer={trigger => trigger.parentNode}
              format={dateFormat}
              style={{ width: '100%' ,height:'36px'}}
              popupStyle={{ width: '100%' }}
              value={dateValue}
              onChange={onDateChange}
              disabledDate={DisabledDateTillSpecificDate(new Date(disableDate))}
            />
    </DateStyle>;
  }
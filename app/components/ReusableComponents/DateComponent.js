import React, {useEffect, useRef} from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { GetDateForRangePicker } from '../../utils/helper';
import { PageSize } from '../../globalConstants';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

function DateComponent({
  dateFrom,
  dateTo,
  handleChangeDateFrom,
  handleChangeDateTo,
  filterList,
  clearFilteredList,
  disabled,
  ref
}) {
  return (
    <RangePicker
      ref={ref}
      disabled={disabled}
      allowClear={false}
      value={[
        dateFrom && moment(GetDateForRangePicker(dateFrom * 1000), dateFormat),
        dateTo && moment(GetDateForRangePicker(dateTo * 1000), dateFormat),
      ]}
      onChange={e => {
        handleChangeDateFrom(e[0].unix());
        handleChangeDateTo(e[1].unix());
        clearFilteredList();
        filterList(PageSize, '0');
      }}
      format={dateFormat}
      style={{ width: '230px', border: 'none', margin: '0 15px' }}
    />
  );
}

DateComponent.propTypes = {
  dateFrom: PropTypes.number,
  dateTo: PropTypes.number,
  handleChangeDateFrom: PropTypes.func,
  handleChangeDateTo: PropTypes.func,
  filterList: PropTypes.func,
  clearFilteredList: PropTypes.func,
};

export default DateComponent;

import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, Popover } from 'antd';
import PropTypes from 'prop-types';
import SearchStyle from '../../TicketComponent/SearchWithFilter/Style';
import { GetDateForRangePicker, GetFullDate } from '../../../utils/helper';
import { PageSize } from '../../../globalConstants';
import dateIcon from '../../../assets/dateIcon.svg';
import {
  TimestampOfFirstDayOfCurrentMonth,
  TimestampOfFirstDayOfCurrentWeek,
  TimestampOfFirstDayOfCurrentYear,
  TimeStampOfFirstDayOfLastMonth,
  TimeStampOfFirstDayOfLastWeek,
  timestampOfFirstDayOfLastYear,
  TimeStampOfYesterday,
} from '../../../containers/DashboardPage/helper';
import './style.css';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

function DateComponent({
  dateFrom,
  dateTo,
  handleChangeDateFrom,
  handleChangeDateTo,
  clearList,
  fetchList,
}) {
  const [openPopover, setOpenPopover] = useState(false);
  const content = (
    <SearchStyle>
      <div className="reusable-messages-filter-content" style={{ width: '340px' }}>
        <div className="mb-3">
          <div className="reusable-filter-title" style={{ fontSize: '14px' }}>
            Date
          </div>
          <RangePicker
            allowClear={false}
            value={[
              dateFrom !== ''
                ? moment(GetDateForRangePicker(dateFrom * 1000), dateFormat)
                : null,
              dateTo !== ''
                ? moment(GetDateForRangePicker(dateTo * 1000), dateFormat)
                : null,
            ]}
            onChange={e => {
              handleChangeDateFrom(e[0].unix());
              handleChangeDateTo(e[1].unix());
            }}
            format={dateFormat}
            style={{ width: '100%', paddingLeft: '20px' }}
          />
        </div>
        <div className="mb-3">
          <div className="reusable-filter-title" style={{ fontSize: '14px' }}>
            Commonly Used
          </div>
          <div className="reusable-date-component-filter-date-button">
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                handleChangeDateFrom(new Date() / 1000);
                handleChangeDateTo(new Date() / 1000);
                fetchList();
                clearList();
                setOpenPopover(false);
              }}
            >
              Today
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(TimeStampOfYesterday());
                handleChangeDateFrom(TimeStampOfYesterday() / 1000);
                handleChangeDateTo(new Date() / 1000);
                clearList();
                fetchList();
                setOpenPopover(false);
              }}
            >
              Yesterday
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                handleChangeDateFrom(
                  TimestampOfFirstDayOfCurrentWeek()[0] / 1000,
                );
                handleChangeDateTo(
                  TimestampOfFirstDayOfCurrentWeek()[1] / 1000,
                );
                clearList();
                fetchList();
                setOpenPopover(false);
              }}
            >
              This Week
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(
                  new Date(TimeStampOfFirstDayOfLastWeek()[0]).toUTCString(),
                );
                console.log(
                  new Date(TimeStampOfFirstDayOfLastWeek()[1]).toUTCString(),
                );
                handleChangeDateFrom(TimeStampOfFirstDayOfLastWeek()[0] / 1000);
                handleChangeDateTo(TimeStampOfFirstDayOfLastWeek()[1] / 1000);
                clearList();
                fetchList();
                setOpenPopover(false);
              }}
            >
              Last Week
            </button>

            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(
                  new Date(
                    TimestampOfFirstDayOfCurrentMonth()[0],
                  ).toUTCString(),
                );
                console.log(
                  new Date(
                    TimestampOfFirstDayOfCurrentMonth()[1],
                  ).toUTCString(),
                );
                handleChangeDateFrom(
                  TimestampOfFirstDayOfCurrentMonth()[0] / 1000,
                );
                handleChangeDateTo(
                  TimestampOfFirstDayOfCurrentMonth()[1] / 1000,
                );
                clearList();
                fetchList();
                setOpenPopover(false);
              }}
            >
              This Month
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(
                  new Date(TimeStampOfFirstDayOfLastMonth()[0]).toUTCString(),
                );
                console.log(
                  new Date(TimeStampOfFirstDayOfLastMonth()[1]).toUTCString(),
                );
                handleChangeDateFrom(
                  TimeStampOfFirstDayOfLastMonth()[0] / 1000,
                );
                handleChangeDateTo(TimeStampOfFirstDayOfLastMonth()[1] / 1000);
                clearList();

                fetchList();
                setOpenPopover(false);
              }}
            >
              Last Month
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(
                  new Date(TimestampOfFirstDayOfCurrentYear()[0]).toUTCString(),
                );
                console.log(
                  new Date(TimestampOfFirstDayOfCurrentYear()[1]).toUTCString(),
                );
                handleChangeDateFrom(
                  TimestampOfFirstDayOfCurrentYear()[0] / 1000,
                );
                handleChangeDateTo(
                  TimestampOfFirstDayOfCurrentYear()[1] / 1000,
                );
                clearList();
                fetchList();
                setOpenPopover(false);
              }}
            >
              This Year
            </button>
            <button
              type="button"
              className="reusable-filter-date-btn"
              onClick={e => {
                console.log(
                  new Date(timestampOfFirstDayOfLastYear()[0]).toUTCString(),
                );
                console.log(
                  new Date(timestampOfFirstDayOfLastYear()[1]).toUTCString(),
                );
                handleChangeDateFrom(timestampOfFirstDayOfLastYear()[0] / 1000);
                handleChangeDateTo(timestampOfFirstDayOfLastYear()[1] / 1000);
                clearList();

                fetchList();
                setOpenPopover(false);
              }}
            >
              Last Year
            </button>
          </div>
        </div>
        <div className="reusable-filter-action">
          <div
            className="reusable-clear-all"
            onClick={() => {
              handleChangeDateFrom('');
              handleChangeDateTo('');
              clearList();
              fetchList();
              setOpenPopover(false);
            }}
          >
            Clear all filters
          </div>
          <div className="ml-auto" style={{ display: 'flex' }}>
            <div
              className="reusable-cancel-filter pr-2"
              onClick={() => {
                setOpenPopover(false);
              }}
            >
              Cancel
            </div>
            <div
              className="reusable-apply"
              onClick={() => {
                setOpenPopover(false);
                clearList();
                fetchList(PageSize);
              }}
            >
              Apply
            </div>
          </div>
        </div>
      </div>
    </SearchStyle>
  );
  return (
    <Popover
      visible={openPopover}
      onVisibleChange={visibility => {
        setOpenPopover(visibility);
      }}
      content={content}
      trigger="click"
      placement="bottomRight"
    >
      {/* <FilterDate
        handleClick={() => setOpenPopover(prev => !prev)}
        dateFrom={dateFrom !== '' ? GetDateForRangePicker(dateFrom * 1000) : ''}
        dateTo={dateTo !== '' ? GetDateForRangePicker(dateTo * 1000) : ''}
      /> */}
      <div className="reusable-filter-date-wrapper">
        <div className="d-flex" style={{ alignItems: 'center', color: '#666' }}>
          {dateFrom === '' ? 'Start Date' : GetFullDate(dateFrom * 1000)}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 6px 3px 6px',
            }}
          >
            <svg
              width="19"
              height="5"
              viewBox="0 0 19 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="4.5" x2="18" y2="4.5" stroke="#333333" />
              <line
                x1="14.3536"
                y1="0.646447"
                x2="18.3536"
                y2="4.64645"
                stroke="#333333"
              />
            </svg>
          </div>
          {dateTo === '' ? 'End Date' : GetFullDate(dateTo * 1000)}
        </div>
        <img src={dateIcon} alt="delete" className="px-1" />
      </div>
    </Popover>
  );
}

DateComponent.propTypes = {
  dateFrom: PropTypes.number,
  dateTo: PropTypes.number,
  handleChangeDateFrom: PropTypes.func,
  handleChangeDateTo: PropTypes.func,
  fetchList: PropTypes.func,
  clearList: PropTypes.func,
};

export default DateComponent;

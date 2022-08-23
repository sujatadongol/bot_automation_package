import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ScrollerPagination = ({
  loader,
  divId,
  list,
  count,
  fromTimestamp,
  fetchApi,
  content,
}) => {
  const listDiv = document.getElementById(divId);

  const scrollDetect = () => {

    let listDivScrollTop = listDiv && listDiv.scrollTop;
    let listDivScrollHeight = listDiv && listDiv.scrollHeight;
    let listDivClientHeight = listDiv && listDiv.clientHeight;
    if (
      Math.round(listDivScrollHeight - listDivScrollTop) === listDivClientHeight
    ) {
      if (!loader && list && list.length < count) {
        fetchApi(2, fromTimestamp - 1, true);
      }
    }
  };
  return <div onScroll={scrollDetect}>{content}</div>;
};

ScrollerPagination.propTypes = {
  loader: PropTypes.bool,
  divId: PropTypes.string,
  list: PropTypes.array,
  count: PropTypes.integer,
  fromTimestamp: PropTypes.any,
  fetchApi: PropTypes.func,
};

export default memo(ScrollerPagination);

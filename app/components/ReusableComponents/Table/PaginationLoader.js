import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import OutlinedSpinner from '../Spinner';

const PaginationLoader = ({ loader, width, height }) => {
  return (
    <div
      hidden={!loader}
      style={{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OutlinedSpinner
        style={{ color: '#376AF5', width: width, height: height }}
      />
    </div>
  );
};

PaginationLoader.propTypes = {
  loader: PropTypes.bool,
  width: PropTypes.integer,
  height: PropTypes.integer,
};

export default memo(PaginationLoader);

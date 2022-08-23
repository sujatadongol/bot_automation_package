import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

const Loader = ({ width, height, position, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: position,
        zIndex: 1,
      }}
    >
      <CircularProgress
        style={{
          color: color ? color : '#376AF5',
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.String,
  height: PropTypes.String,
  position: PropTypes.String,
};

export default Loader;

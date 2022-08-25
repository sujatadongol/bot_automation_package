import React from 'react';
import PropTypes from 'prop-types';
import OutlinedSpinner from './ReusableComponents/Spinner';

const Loader = ({ width, height, position, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position,
        zIndex: 1,
      }}
    >
      <OutlinedSpinner
        spinnerStyle={{
          color: color || '#376AF5',
          width,
          height,
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

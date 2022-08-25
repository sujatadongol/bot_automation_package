import React from 'react';
import loaderGif from '../../../assets/loader.gif';

const OutlinedSpinner = ({ spinnerStyle, width }) => {
  return (
    <div style={spinnerStyle}>
      <img
        src={loaderGif}
        width={width || '30px'}
        height={width || '30px'}
        alt="loader"
      />
    </div>
  );
};

export default OutlinedSpinner;

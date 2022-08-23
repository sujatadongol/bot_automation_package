import React from 'react';
import empty from '../../assets/empty_profile_holder_icon.svg';

const ImageComponent = ({ src, width, height, borderRadius, styles }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius || '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #f1f1f1',
        // background: 'rgb(86 86 86 / 70%)',
        ...styles,
      }}
    >
      <img
        src={src ? src : empty}
        alt="public"
        onError={e => (e.target.src = empty)}
        style={{ height: '100%' }}
      />
    </div>
  );
};
export default ImageComponent;

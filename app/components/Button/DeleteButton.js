import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      borderRadius: '5px',
      width: '83px',
      background: '#E61F27',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Delete
  </div>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteButton;

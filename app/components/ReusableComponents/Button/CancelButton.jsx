import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import CancelButtonWraper from './CancelButtonWrapper';

const CustomCancelButton = ({
  clicked,
  size,
  children,
  type,
  disabled,
  className,
  id,
  primary,
  style
}) => (
  <CancelButtonWraper primary={primary}>
    <Button
      htmlType={type}
      className={className}
      onClick={clicked}
      disabled={disabled}
      id={id}
      size={size}
      style={style}
    >
      {children}
    </Button>
  </CancelButtonWraper>
);

CustomCancelButton.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  primary: PropTypes.bool,
};

export default CustomCancelButton;

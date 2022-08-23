import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import ButtonWraper from './ButtonWraper';

const CustomButton = ({
  clicked,
  size,
  children,
  type,
  disabled,
  className,
  id,
  primary,
  style,
  hidden,
  wrapperClassName,
}) => (
  <ButtonWraper primary={primary} className={wrapperClassName}>
    <Button
      htmlType={type}
      className={className}
      onClick={clicked}
      disabled={disabled}
      id={id}
      size={size}
      style={style}
      hidden={hidden}
    >
      {children}
    </Button>
  </ButtonWraper>
);

CustomButton.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  primary: PropTypes.bool,
};

export default CustomButton;

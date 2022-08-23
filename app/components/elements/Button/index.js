/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import StyledButton from './style';

const Button = () => {
  return <StyledButton>this is Button component</StyledButton>;
};

Button.propTypes = {};

export default memo(Button);

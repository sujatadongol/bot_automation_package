import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Col, Row } from 'antd';
import { useStyles } from './DivStyle';
// eslint-disable-next-line import/extensions

const DivWrapper = ({ children, style }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={style}>
      <Row gutter={50}>
        <Col span={24} className="gutter-row">
          {children}
        </Col>
      </Row>
    </div>
  );
};

DivWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default memo(DivWrapper);

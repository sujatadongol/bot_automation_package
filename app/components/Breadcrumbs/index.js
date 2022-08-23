import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { useStyles } from './style.js';
import 'antd/dist/antd.css';

const Breadcrumbs = ({ breadcrumbs, breadcrumbsPath }) => {
  const classes = useStyles();
  return (
    <Breadcrumb
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {breadcrumbs &&
        breadcrumbs.map((singleBreadcrumb, index, i) => (
          <Breadcrumb.Item className={classes.item} key={i}>
            {index === breadcrumbs.length - 1 ? (
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                  }}
                >
                  {singleBreadcrumb}{' '}
                </div>
              </div>
            ) : (
              <Link to={breadcrumbsPath[index]} className={classes.link}>
                {singleBreadcrumb}
              </Link>
            )}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array,
  breadcrumbsPath: PropTypes.array,
};

export default Breadcrumbs;

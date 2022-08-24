import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import TextFieldWraper from './TextFieldWraper';

const RequiredTextFieldGroup = ({
  text,
  placeholder = text,
  size,
  name,
  icon,
  type,
  required,
  onChange,
}) => {
  return (
    <TextFieldWraper>
      <Form.Item
        autoComplete="off"
        name={name}
        label={name}
        rules={[
          {
            required,
            message: name + ' is required!',
          },
        ]}
      >
        {type === 'password' ? (
          <Input.Password
            autoComplete="off"
            prefix={
              icon ? (
                <img
                  className="icon"
                  src={icon}
                  alt="icon"
                  style={{ width: '20px', marginTop: '5px' }}
                />
              ) : null
            }
            type={type}
            placeholder={placeholder}
            size={size}
            onChange={onChange}
          />
        ) : (
          <Input
            autoComplete="off"
            prefix={
              icon ? <img className="icon" src={icon} alt="icon" /> : null
            }
            type={type}
            placeholder={placeholder}
            size={size}
            onChange={onChange}
          />
        )}
      </Form.Item>
    </TextFieldWraper>
  );
};

RequiredTextFieldGroup.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
RequiredTextFieldGroup.defaultProps = {
  required: false,
};

export default RequiredTextFieldGroup;

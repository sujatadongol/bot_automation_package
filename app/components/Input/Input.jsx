import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tooltip } from 'antd';
import not_verified from '../../assets/not_verified.svg';
import verified from '../../assets/verified.svg';

import TextFieldWraper from './TextFieldWraper';
const TextFieldGroup = ({
  text,
  placeholder = text,
  phoneCode,
  size,
  name,
  icon,
  type,
  value,
  id,
  required,
  onChange,
  suffixIconForEmailVerified,
  suffixIcon,
  style,
  onClick,
}) => (
  <>
    <TextFieldWraper>
      <Form.Item name={name} label={name}>
        {console.log('value suffix', suffixIcon)}
        {type === 'password' ? (
          <Input.Password
            autoComplete={'off'}
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
            required={required}
            type={type}
            placeholder={placeholder}
            size={size}
            onChange={onChange}
          />
        ) : (
          <Input
            autoComplete={'off'}
            prefix={
              icon ? (
                <img className="icon" src={icon} alt="icon" />
              ) : phoneCode !== null ? (
                phoneCode
              ) : null
            }
            suffix={
              suffixIcon ? (
                suffixIcon === false ? (
                  <Tooltip title={'Not verified'}>
                    <img className="icon" src={not_verified} alt="icon" />
                  </Tooltip>
                ) : (
                  <Tooltip title={'Verified'}>
                    <img
                      className="icon"
                      src={verified}
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </Tooltip>
                )
              ) : null
            }
            type={type}
            required={required}
            id={id}
            value={value}
            placeholder={placeholder}
            size={size}
            onChange={onChange}
            onClick={onClick}
            style={style}
          />
        )}
      </Form.Item>
    </TextFieldWraper>
  </>
);

TextFieldGroup.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  id: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
TextFieldGroup.defaultProps = {
  required: false,
};

export default TextFieldGroup;

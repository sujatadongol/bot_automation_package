import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/lib/icons/EyeInvisibleOutlined';
import { StyledPasswordInputField } from './Style';


const PasswordInputField = ({
  label,
  placeholder,
  value,
  onChange,
  onKeyUp,
  autoComplete,
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledPasswordInputField style={style}>
        <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            onChange(e);
          }}
          onKeyUp={onKeyUp}
          autoComplete={autoComplete}
        />
        <div
          className="show-password-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOutlined style={{ color: '#666' }} />
          ) : (
            <EyeInvisibleOutlined style={{ color: '#666' }} />
          )}
        </div>
      </div>
    </StyledPasswordInputField>
  );
};

PasswordInputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default PasswordInputField;

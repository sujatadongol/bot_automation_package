import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import TextFieldWraper from './TextFieldWraper';
import country from './country.json';
import { DisableAutoComplete } from './helper';

const RequiredCountrySelector = ({
  text,
  placeholder = text,
  size,
  name,
  required,
  onChange,
  onSearch,
}) => {
  const [autocomplete, setAutocomplete] = useState(false);
  return (
    <>
      <TextFieldWraper>
        <Form.Item
          name={name}
          label={name}
          rules={[
            {
              required,
            },
          ]}
        >
          <Select
            onFocus={() =>
              DisableAutoComplete(
                autocomplete,
                setAutocomplete,
                'ant-select-selection-search-input',
              )
            }
            placeholder={placeholder}
            showSearch
            size={size}
            onSearch={onSearch}
            onChange={onChange}
          >
            {country.map(value => (
              <Select.Option key={`COUNTRY-${value.alpha3}`} value={value.name}>
                <span
                  style={{
                    marginRight: '10px',
                  }}
                >
                  <img src={value.file_url} width={24} height={18} />
                </span>

                <span>{value.name}</span>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TextFieldWraper>
    </>
  );
};

RequiredCountrySelector.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
};
RequiredCountrySelector.defaultProps = {
  required: false,
};

export default RequiredCountrySelector;

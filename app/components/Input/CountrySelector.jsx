import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from 'antd';
import TextFieldWraper from './TextFieldWraper';
import country from './country.json';

const CountrySelector = ({
  text,
  placeholder = text,
  size,
  name,
  required,
  value,
  onChange,
  onSearch,
}) => (
  <>
    <TextFieldWraper>
      <Form.Item
        name={name}
        label={name}
        // rules={[
        //   {
        //     required,
        //   },
        // ]}
      >
        {console.log('country', value)}
        <Select
          placeholder={placeholder}
          showSearch
          size={size}
          value={value}
          onSearch={onSearch}
          onChange={onChange}
          autoComplete={'off'}
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

CountrySelector.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
};
CountrySelector.defaultProps = {
  required: false,
};

export default CountrySelector;

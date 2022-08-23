import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import TextFieldWraper from './TextFieldWraper';
import currency from './currency.json';

const CurrencySelector = ({
                           text,
                           placeholder = text,
                           size,
                           name,
                           required,
                           value,
                           onChange,
                           onSearch,
                         }) => {
  const currencyList=Object.keys(currency);
  return (
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
            // autocomplete={false}
          >
            {currencyList.map(value => (
              <Select.Option key={value} value={value}>
                <span>{value}</span>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TextFieldWraper>
    </>
  );
}

CurrencySelector.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
};
CurrencySelector.defaultProps = {
  required: false,
};

export default CurrencySelector;

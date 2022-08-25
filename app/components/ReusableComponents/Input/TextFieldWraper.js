import styled from 'styled-components';

const TextFieldWraper = styled.div`
  .icon {
    width: 20px;
    height: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  .ant-form-item {
    margin-bottom: 20px;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px !important;
    padding-top: 0px;
  }
  span.ant-select-arrow {
    margin-top: -6px !important;
  }
  .ant-form-item-required {
    color: #333333;
    font-size: 12.825px;
  }
  .ant-form-item-label {
    padding-bottom: 0px !important;
  }

  .ant-form-item-label > label {
    height: auto;
    padding-bottom: 3px;
    color: #333333;
    font-size: 12.825px;
  }
  .ant-col.ant-form-item-label {
    width: 100%;
    text-align: left;
  }
  .ant-col ant-form-item-control {
    height: 39.19px;
  }
  .ant-input-affix-wrapper {
    &:hover,
    &:focus {
      border-color: #376af5;
    }
    .ant-input-affix-wrapper-lg {
      height: 44px;
      font-size: 14px;
    }
    input.ant-input {
      padding-left: 5px;
    }
  }
  span..ant-input-suffix {
    font-size: 15px;
  }
  .ant-input:hover {
    &:hover,
    &:focus {
      border-color: #376af5;
    }
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    &:hover,
    &:focus {
      border-color: #376af5;
    }
  }
  .ant-input-affix-wrapper.ant-input-affix-wrapper-lg {
    height: 39.2px;
  }

  div.ant-form-item-explain {
    position: absolute;
    top: 38px;
  }
`;
export default TextFieldWraper;

import styled from 'styled-components';

const CreateIntentComponentStyle = styled.div`
  .filter-entity {
    border: 2px solid red;
    color: red;
    background: red;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    display: flex;
    align-items: center;
    border: none !important;
    height: 23px !important;
    padding-left: 0;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    display: flex;
    height: inherit;
    align-items: center;
  }
  .prompt-input {
    height: 40px;
    border: none;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  input :focus {
    outline: none !important;
  }

  .intent-list-title {
    display: flex;
    align-items: center;
    height: 37px;
    background: #ebebeb;
  }

  .intent-list-data {
    display: flex;
    align-items: center;
    height: 37px;
    background: #fafafa;
  }

  .intent-row-wrapper {
    padding: 0px 10px;
  }

  //api
  .api-param-detail {
    border-left: 5px solid rgba(58, 80, 144, 0.8);
  }
  .api-data {
    display: flex;
    align-items: center;
    height: 37px;
    background: #fff;
  }

  //paraphrase section
  .paraphrase-content-wrapper {
    max-height: calc(100vh - 250px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .paraphrase-content-wrapper ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .paraphrase-content-wrapper ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  .paraphrase-content-wrapper ::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  .paraphrase-content-wrapper::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  .paraphrase-title {
    padding: 6px 0;
  }
  .paraphrase-list-wrapper {
    background: #fafafa;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.2);
    border-left: 4px solid #376af5;
    margin-left: 4px;
  }
  .single-paraphrase {
    border-bottom: 1px solid #e4e4e4;
  }
  .paraphrase-input {
    padding-left: 4px;
    border: none;
    margin-right: auto;
    background: none;
    width: 95%;
  }
  .no-data-content {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #999;
  }

  //misleading intents
  .misleading-intents-wrapper {
    padding-top: 6px;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
    padding-right: 10px;
  }
  .misleading-intents-wrapper ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .misleading-intents-wrapper ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  .misleading-intents-wrapper ::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  .misleading-intents-wrapper::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`;

export default CreateIntentComponentStyle;

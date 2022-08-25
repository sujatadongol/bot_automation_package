import styled from 'styled-components';

const BotConfigurationTabStyle = styled.span`
  .ant-tabs-bar {
    margin: 0;
  }
  div.ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs .ant-tabs-top-content,
  .ant-tabs .ant-tabs-bottom-content {
    background: white;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  }
  div.ant-tabs-tab {
    background: #f1f1f1 !important;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    width: 150px;
    margin-right: 5px !important;
    text-align: center;
    border-radius: 0 !important;
    padding-right: 25px !important;
    color: #333 !important;
    width: 150px;
    display: flex;
    justify-content: center;
  }
  div.ant-tabs-tab :hover {
    color: #333;
    width: 150px;
    text-align: center;
  }
  div.ant-tabs-tab.ant-tabs-tab-active {
    background: #fff !important;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    width: 150px;
    margin-right: 5px;
    border-radius: 12px 12px 0 0;
    padding-right: 25px;
    display: flex;
    justify-content: center;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #376af5 !important;
  }

  // div.ant-select-selector
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 38px !important;
  }

  //bot image
  .bot-threshold-error {
    color: #ff4a4a;
    text-align: left;
    position: absolute;
    font-size: 11px;
    padding: 0;
    margin: -14px 0 0 0;
  }
  .browse-image {
    font-family: Roboto !important;
    border: 1px solid #d2d2d2;
    text-decoration-line: underline;
    border-radius: 5px;
    color: #376af5;
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .upload-image {
    position: absolute;
    background: black;
    color: white;
    opacity: 0.3;
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-media-component {
    padding: 0;
    display: flex;
  }
  .media-wrapper {
    border: 1px solid #f0edf1;
    border-radius: 8px;
    width: 160px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 20px;
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.267483);
  }
  .switch {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  button.ant-switch {
    height: 13px;
    width: 11px;
  }
  .ant-switch-small::after {
    height: 11px;
    top: 0px;
  }
  button.ant-switch.ant-switch-checked {
    background-color: #376af5 !important;
  }

  span.ant-select-selection-item {
    display: flex;
    align-items: center;
  }

  .browse-doc-btn {
    margin: 0;
    height: 28px;
    width: 100px;
    background-color: #376af5;
    color: #ffffff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }

  //try out section
  .try-out {
    ${'' /* padding-top: 15px; */}
    font-size: 14px;
    text-align: center;
    background: #ffffff;
    box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.06);
    margin-top: -50px;
    position: fixed;
    right: 0;
    height: calc(100vh - 56px);
  }
  .try-out-text {
    -ms-transform: rotate(270deg); /* IE 9 */
    transform: rotate(270deg);
    height: 80px;
    width: 92px;
  }
  //try out section
`;
export default BotConfigurationTabStyle;

export const BotTab = styled.div`
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

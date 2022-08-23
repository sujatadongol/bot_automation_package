import styled from 'styled-components';

const ListApiStyle = styled.span`
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
    border-radius: 0;
    padding-right: 25px;
    display: flex;
    justify-content: center;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #376af5 !important;
  }
`;

export default ListApiStyle;

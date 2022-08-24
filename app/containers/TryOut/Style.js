import styled from 'styled-components';

const TryOutStyle = styled.span`
  .try-out-content {
    z-index: 2;
    height: 100%;
    background: #fff;
    width: 320px;
    position: fixed;
    right: 0;
    top: 56px;
    box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.06);
  }

  .try-out-title {
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0edf1;
    cursor: pointer;
    gap: 10px;
  }
  .try-out-input {
    border: none;
    width: 100%;
    padding: 14px 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0edf1;
  }
  .try-out-input:focus {
    outline: none;
  }

  .try-out-label {
    font-size: 14px;
    padding: 8px 15px;
    color: #979797;
    font-weight: 500;
    font-weight: normal;
  }
  .try-out-data {
    padding-left: 15px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0edf1;
    max-height: 370px;
    overflow-y: auto;
  }

  .try-out-data ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  .try-out-data ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
    height: 10px;
  }

  /* Handle */
  .try-out-data ::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 10px !important;
  }

  /* Handle on hover */
  .try-out-data::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  .raw-response {
    background: #efefef;
    border: 1px solid #efefef;
    width: 100%;
    padding: 8px 0;
    cursor: pointer;
    text-align: center;
  }
  .entities-list {
    padding: 4px 15px;
  }

  .raw-response-title {
    color: #666;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 1px solid #f0edf1;
    padding: 10px 0;
  }
  .raw-response-body {
    background: #f4f4f4;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin-top: 15px;
    max-height: 350px;
    overflow-y: auto;
    padding: 10px;
  }
  .raw-response-body ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  .raw-response-body ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  .raw-response-body ::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 10px !important;
  }

  /* Handle on hover */
  .raw-response-body::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  .copy-response {
    position: absolute;
    top: 72px;
    right: 45px;
  }

  .kgraph-reply {
    display: flex;
    margin-top: 25px;
    justify-content: center;
    color: #666;
  }
`;
export default TryOutStyle;

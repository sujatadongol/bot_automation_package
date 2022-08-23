import styled from 'styled-components';

const CreateApiStyle = styled.div`
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .add-api-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  .api-title {
    font-size: 13px;
    color: #090909;
    font-style: normal;
    font-weight: normal;
  }
  .api-input {
    height: 38px;
    width: 100%;
    margin-bottom: 10px;
    border: 0.711111px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 5px;
  }
  .api-input :focus {
    outline: none;
  }
  .main-title {
    font-size: 14x;
    color: #090909;
    font-style: normal;
    font-weight: 500;
    margin-top: 4px;
    margin-bottom: 2px;
    line-height: 16px;
  }
  .add-button {
    background: none;
    border: none;
    padding: 0 0 10px 0;
    color: #376af5;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  button.add-button :focus {
    outline: none;
  }

  .invalid-url-msg {
    color: #ff4a4a;
    font-size: 12px;
    margin-bottom: 3px;
    padding-top: -3px !important;
  }
`;

export default CreateApiStyle;

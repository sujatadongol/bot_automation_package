import styled from 'styled-components';

const FulfilmentStyle = styled.div`
  .add-header {
    font-size: 24px;
    color: #666;
    text-align: center;
    width: 100%;
    margin: 10px;
  }
  .input-data {
    height: 38px;
    width: 100%;
    margin-bottom: 10px;
    border: 0.711111px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 5px;
  }
  .input-data :focus {
    outline: none;
  }
  .add-button {
    background: none;
    border: none;
    padding: 0;
    color: #376af5;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  button.add-button :focus {
    outline: none;
  }
  .save-button {
    display: flex;
    justify-content: end;
    margin: 10px 0;
  }
`;

export default FulfilmentStyle;

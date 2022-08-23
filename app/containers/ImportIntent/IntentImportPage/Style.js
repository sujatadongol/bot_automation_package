import styled from 'styled-components';

const IntentImportStyle = styled.div`
  height: 80vh;
  .imported-intent-wrapper {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 5%) 0px 1px 4px;
    margin: 8px 12px 0 12px;
    border: 1px solid #f5f5f5;
  }
  input:focus {
    outline: none !important;
    outline-color: none !important;
  }
  input::placeholder {
    color: #979797;
  }
  textarea:focus {
    outline: none !important;
    outline-color: none !important;
  }
  textarea::placeholder {
    color: #979797;
  }
  .imported-intent-header {
    font-size: 16px;
    color: #333;
    padding: 12px 24px;
    border-bottom: 1px solid #f0edf1;
    font-weight: 500;
  }
  .imported-intent-input {
    display: flex;
    border: none;
    font-size: 14px;
    padding: 12px 24px;
    width: 100%;
    border-bottom: 1px solid #f0edf1;
  }
  .imported-intent-input input,
  .imported-intent-input textarea {
    border: none;
    font-size: 14px;
    width: 100%;
    resize: none;
    overflow: auto;
    color: #333;
    margin-right: 10px;
  }
  .title-icon {
    padding-left: 12px;
  }
  .add-button {
    background: none;
    border: none;
    padding: 13px 25px;
    color: #376af5;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  button.add-button :focus {
    outline: none;
  }

  .training-phase-input {
    padding: 10px 18px;
    border-bottom: 1px solid #f0edf1;
    display: flex;
  }
  .intent-input {
    padding: 7px 25px;
    border-bottom: 1px solid #f0edf1;
  }

  .intent.label-style {
    margin-top: 0px;
    margin-bottom: 2px;
    width: 100%;
  }
  .intent-row {
    display: grid;
    align-items: center;
  }

  //response
  .text-response-wrapper {
    border: 1px solid #f0edf1;
    border-radius: 5px;
    margin: 0px 20px 10px 20px;
  }
  .text-response-header {
    font-size: 16px;
    color: #333;
    background: #f5f5f5;
    border-bottom: 1px solid #f0edf1;
    padding: 7px 17px;
  }

  .prompt-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #376af5;
    font-size: 13px;
    display: flex;
    padding: 0;
  }
  .prompt-btn :focus {
    outline: none;
  }

  .popover-style {
    min-width: 150px;
    background: #fff;
    border: 1px solid grey;
    box-shadow: 5px 10px 8px 10px #888888;
  }
  .popover-options {
    padding: 5px 10px;
    cursor: pointer;
  }

  .intents-page {
    margin: 10px;
    border: 1px solid #f0edf1;
    border-radius: 10px;
    padding: 8px 0px 8px 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 170px);
  }
  .intents-page::-webkit-scrollbar,
  .imported-intent-input input::-webkit-scrollbar,
  .imported-intent-input textarea::-webkit-scrollbar {
    width: 10px;
    height: 150px;
    border-radius: 20px;
  }
  .intents-page::-webkit-scrollbar-thumb,
  .imported-intent-input input::-webkit-scrollbar-thumb,
  .imported-intent-input textarea::-webkit-scrollbar-thumb {
    background-color: #dfdddd;
    border-radius: 20px;
  }
`;

export default IntentImportStyle;

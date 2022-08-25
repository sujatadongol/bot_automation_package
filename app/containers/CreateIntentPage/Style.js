import styled from 'styled-components';

const CreateIntentStyle = styled.div`
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
  .ant-mentions:focus,
  .ant-mentions-focused {
    border-color: #fff !important;
  }
  input:focus {
    outline: none !important;
    outline-color: none !important;
  }
  input::placeholder {
    color: #979797;
  }
  .intent-value-header {
    font-size: 16px;
    color: #333;
    padding: 13px 25px;
    border-bottom: 1px solid #f0edf1;
    font-weight: 500;
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

  //try out section
  .try-out {
    padding-top: 10px;
    font-size: 14px;
    text-align: center;
    background: #ffffff;
    box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.06);
    margin-top: -790px;
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

  //paraphrase
  .optimize-btn {
    cursor: pointer;
    background: #376af5;
    border-radius: 5px;
    color: #fff;
    margin-top: 10px;
    margin-right: 26px;
    height: 33px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-weight: 500;
  }
  .open-paraphrase-icon {
    cursor: pointer;
    margin-left: 12px;
  }
`;

export default CreateIntentStyle;

import styled from 'styled-components';

const SettingComponentStyle = styled.div`
  .modal-input {
    height: 39px;
    margin-bottom: 5px;
    border: none;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    opacity: 0.87;
  }

  .ticket-type-input {
    height: 38px;
    width: 100%;
    margin-bottom: 10px;
    border: 0.711111px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 5px;
  }

  input :focus {
    outline: none !important;
  }

  input::placeholder {
    color: #d4d4d4;
  }

  .ticket-type-label {
    width: 100%;
    margin-bottom: 1px;
  }

  .col-component {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0edf1;
  }
`;

export default SettingComponentStyle;

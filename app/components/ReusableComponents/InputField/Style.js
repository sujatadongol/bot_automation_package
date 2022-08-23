import styled from 'styled-components';

export const InputStyle = styled.div`
  margin-bottom: ${props => props.marginBottom || '20px'};

  .required-field {
    margin-left: 4px;
    color: red;
  }

  .title {
    color: #333;
    margin-bottom: 4px;
    display: flex;
  }
  input {
    width: 100%;
    height: 36px;
    border-radius: 2px;
    border: 0.71px solid #d2d2d2;
    padding: 0 10px;
    color: #333;
    :focus {
      outline: none;
    }
  }
`;

export const StyledPasswordInputField = styled.div`
  width: 100%;

  label {
    display: block;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
  }
  .input-wrapper {
    position: relative;
  }

  input {
    background: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 8px 12px;
    display: block;
    width: 100%;
    outline: none;
    &::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
  .show-password-icon {
    position: absolute;
    top: 12px;
    right: 10px;
    cursor: pointer;
    display: flex;
  }
`;

import styled from 'styled-components';

const GeneralStyle = styled.span`
  .general-label {
    width: 100%;
    margin-bottom: 2px;
    font-family: Roboto !important;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  .general-input {
    width: 100%;
    border: 0.711111px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 10px;
    opacity: 0.87;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
`;
export default GeneralStyle;

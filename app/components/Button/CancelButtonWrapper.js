import styled from 'styled-components';
const CancelButtonWraper = styled.div`
  .ant-btn {
    // background-color: ${props => props.primary && '#01cb5b'};
    border-radius:5px;
    border: 1px solid #C4C4C4;
    color: #878787;
    font-size: 15px;
    height: 39px;
    width: 100%;
    .ant-btn-lg {
      padding: 0px;
    }
    &:hover {
      border-color: #C4C4C4;
      color: #878787;
    }
    &:active {
     border-color: #C4C4C4;
      color: #878787;
    }
    &:focus {
      border-color: #C4C4C4;
      color: #878787;
    }
  }
`;

export default CancelButtonWraper;

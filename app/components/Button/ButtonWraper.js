import styled from 'styled-components';
const ButtonWraper = styled.div`
  .ant-btn {
    background-color: ${props => props.primary && '#376AF5'};
    border-color: ${props => props.primary && '#376AF5'};
    color: ${props => props.primary && 'white'};
    font-size: 15px;
    height: 39.19px;
    width: 100%;
    border-radius: 5px;
    .ant-btn-lg {
      padding: 0px;
    }
    &:hover {
      background-color: ${props => props.primary && '#3f60a5'};
      border-color: #376af5;
      color: ${props => (props.primary ? 'white' : '#376AF5')};
    }
    &:active {
      background-color: ${props => props.primary && '#3f60a5'};
      border-color: #376af5;
      color: ${props => (props.primary ? 'white' : '#376AF5')};
    }
    &:focus {
      background-color: ${props => props.primary && '#3f60a5'};
      border-color: #376af5;
      color: ${props => (props.primary ? 'white' : '#376AF5')};
    }
  }
`;

export default ButtonWraper;

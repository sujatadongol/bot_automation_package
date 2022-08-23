import styled from 'styled-components';

export const TicketSettingStyle = styled.div`
  .addCustomRuleBtn {
    color: #376af5;
    margin: 8px 22px 12px 22px;
    font-weight: 500;
    width: fit-content;
    display: flex;
    cursor: pointer;
  }

  .btnText {
    text-decoration: underline;
    padding-left: 3px;
  }

  .retrainBtn {
    border-radius: 5px;
    width: 90px;
    margin-left: 22px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #376af5;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .retrainBtn:hover {
    border-radius: 5px;
    width: 90px;
    margin-left: 22px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3f60a5;
    color: #fff;
    border: none;
  }
`;

export const CustomRuleButton = styled.div`
  color: #376af5;
  width: fit-content;
  display: flex;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ActionButton = styled.button`
  height: 32px;
  width: 32px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
`;

export const RetrainButton = styled.div`
  border-radius: 5px;
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.retrain ? 'rgb(132, 148, 247)' : '#376af5')};
  color: #fff;
  border: none;
  cursor: ${props => (props.retrain ? 'not-allowed' : 'pointer')};

  ${'' /* :hover {
    background-color: rgba(55, 106, 245, 0.9);
  } */}
`;

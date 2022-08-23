import styled from 'styled-components';

export const TabStyle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: ${props => props.marginBottom};
`;

export const TabDiv = styled.div`
  color: ${props => (props.active ? '#376af5' : props.tabColor)};
  border-bottom: ${props => (props.active ? '2px solid #376af5' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
`;

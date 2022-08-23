import styled from 'styled-components';

export const InboxIconWrapper = styled.div`
  border: 1px solid ${props => props.color};
  background: ${props => props.background};
  color: ${props => props.color};
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

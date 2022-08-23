import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const IconWrapper = styled.div`
  border: 1px solid ${props => props.color};
  background: ${props => props.background};
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

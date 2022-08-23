import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 16px 0 16px 0;
  border-bottom: 1px solid #f0edf1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
`;

export const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

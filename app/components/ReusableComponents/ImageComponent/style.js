import styled from 'styled-components';

export const Imagewrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const Image = styled.img`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
  border-radius: 50%;
`;
export const Text = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || '#333'};
`;

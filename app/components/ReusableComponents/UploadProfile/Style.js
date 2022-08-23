import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  color: #376af5;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .image-wrapper {
    width: 100%;
    height: 100%;
  }

  .flex-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    cursor: pointer;
  }

  .loader-wrapper {
    z-index: 1;
    position: absolute;
  }

  .change-image {
    background: rgb(0 0 0 / 45%);
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 6px;
  }
`;

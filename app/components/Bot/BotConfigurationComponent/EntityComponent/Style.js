import styled from 'styled-components';

const BotEntityStyle = styled.span`
  .tagStyle {
    overflow: auto;
  }

  .tagStyle::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .tagStyle::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  /* Handle */
  .tagStyle::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 10px;
    max-height: 10px !important;
  }

  /* Handle on hover */
  .tagStyle::-webkit-scrollbar-thumb:hover {
    background: #e6e6e6;
  }

  .entityTab {
    display: flex;
    height: 45px;
    border-bottom: 1px solid rgb(240, 240, 240);
    align-items: center;
  }
  .tabData {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 45px;
    cursor: pointer;
  }
`;
export default BotEntityStyle;

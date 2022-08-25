import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: auto;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }
  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
  .loader {
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader>img {
    width: 150px;
}

.loader.hidden {
    animation: fadeOut 1s;
    animation-fill-mode: forwards;
}
.float-import{
    width:110px;
    position: fixed;
    bottom: 70px;
    right: 20px;
    display: flex;
    flex-direction:column;
    z-index: 2;
    padding:10px;
  }
.float {
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    background-color: #376AF5;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor:pointer;
  }
  .ant-layout .ant-layout-has-sider {
    margin-top: 56px;
  }
  .ant-menu.ant-menu-root.ant-menu-inline.ant-menu-light.navbar-menu-wrapper{
    background:#F9FBFC;
  }
  .ant-popover-inner-content{
    padding: 0 !important;
  }
  ${'' /* withScrollbar */}
 .withScrollbar {
    overflow-x: hidden;
    overflow-y: auto;
    height:35px;
  }
  .withScrollbar::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .withScrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  .withScrollbar::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  .withScrollbar::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
.ant-picker-panel{
  width: 100%;
}
.ant-picker-panel .ant-picker-date-panel{
  width: 100%;
}
.ant-picker-body {
  width: 100%
}

.ant-picker-content{
 width: 100%
}
.ant-picker-date-panel .ant-picker-content {
    width: 100% !important
}
.ant-breadcrumb ol {
	display: flex !important;
	align-items: center !important;
}

.ant-checkbox-wrapper + .ant-checkbox-wrapper{
	margin-left: 0px !important;
}
.popover-content-wrapper{
max-height:150px;
margin-top:-10px;
overflow-y:auto;
background:#fff;
border:1px solid #f0f0f0;
border-radius:4px;
}

 .popover-content-wrapper::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .popover-content-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  .popover-content-wrapper::-webkit-scrollbar-thumb {
    background: #aaabae;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  .popover-content-wrapper::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

.popover-content-wrapper div{
padding:3px 10px;
width:100%;
display:flex;
cursor:pointer;
}
.popover-content-wrapper div:hover{
background:#f5f5f5;
}
.truncate {
 max-width: 100px;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 
}


`;

export default GlobalStyle;

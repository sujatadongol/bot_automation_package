import styled from 'styled-components';
import { Menu } from 'antd';

export const TopNavbarPopoverContent = styled.div`
  background: #fff;
  padding: 5px 0;
  .super-admin-list {
    padding: 5px 10px;
    background: #fff;
    cursor: pointer;
    :hover {
      background: #f0f0f0;
    }
    .super-admin-name {
      padding-left: 8px;
    }
  }
`;

export const SideNavbarDiv = styled.div`
  ${'' /* height: 100vh; */}
  background-color: #f9fbfc;
  width: 30%;
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.selected ? '1.5px solid #376AF5' : null)};
  background: ${({ bgcolor }) => bgcolor};
  color: white;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`;

export const Header = styled.div`
  ${'' /* margin: 0 0 10px 30px; */}
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 10px 5px;
  border-bottom: 1px solid #f0edf1;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  .ant-menu-item {
    pointer-events: none;
  }
`;
export const AutomationDiv = styled.div`
  padding: 12px 0 12px 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  ${'' /* padding: 10px; */}
  border-bottom: 1px solid #f0edf1;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
`;
export const BreadCrumbsDiv = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 15px;
  border-bottom: 1px solid #f0edf1;
  ${'' /* box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1); */}
  height: 40px;
  display: flex;
  align-items: center;
`;
export const SidebarAccountDiv = styled.div`
  width: '30%';
  background: '#ffffff';
  padding: '2%';
  cursor: 'pointer';
`;
export const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  @media (max-width: 990px) {
    width: 100%;
  }
  .main-content {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 5px;
    overflow: auto;
    overflow-x: hidden;
  }
`;
export const StatusFilter = styled.div`
  cursor: pointer;
  padding: 2px 10px;
  &:hover {
    background: #fafafa;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ffffff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c5c5c591;
    border-radius: 10px;
    max-height: 20px !important;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #c5c5c591;
  }
`;

export const SVGWrapper = styled.div`
  display: flex;
`;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  border-bottom: 1px solid #f0edf1;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;

  .profile_picture {
    cursor: pointer;
  }
`;
export const LayoutWrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;
export const SubMenuWrapper = styled.div`
  margin-left: 20px;
`;
export const StyledMenu = styled(Menu)`
  .ant-menu-item-selected {
    background-color: ${props =>
      props.selectedKeys === 'bot' ||
      props.selectedKeys === 'account' ||
      props.selectedKeys === 'member'
        ? '#fff !important'
        : '#eff3ff !important'};
  }
  .ant-menu-item::after {
    border-right: 0 !important;
  }
  .ant-menu-item-active {
    background-color: #f5f5f5 !important;
    color: #525252 !important;
  }
  .ant-menu-submenu-active {
    background-color: #f5f5f5 !important;
    color: #525252 !important;
  }
  .ant-menu-submenu-title {
    color: #525252 !important;
  }
  .ant-menu-submenu-arrow {
    color: #525252 !important;
  }
  .ant-menu-title-content {
    color: #525252 !important;
  }
`;
export const NewMenu = styled(Menu)`
  color: #525252 !important;
  display: 'flex';
  align-items: center;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    span {
      color: #525252 !important;
    }
    &:hover {
      background-color: #f5f5f5;
      color: #525252 !important;
    }
  }

  .sub_menu {
    span {
      color: #525252 !important;
    }
    &:hover {
      background-color: #f5f5f5;
      color: #525252 !important;
    }
  }
  .menu_content {
    display: flex;
    gap: 5px;
    align-items: center;
    ${'' /* span {
      margin-left: 20px;
    } */}
  }

  .ant-menu-item-selected {
    background-color: #eff3ff !important;
  }
  .ant-menu-item::after {
    border-right: 0 !important;
  }
  .ant-menu-item-active {
    background-color: #f5f5f5 !important;
    color: #525252 !important;
  }
  .ant-menu-submenu-active {
    background-color: #f5f5f5 !important;
    color: #525252 !important;
  }
  .ant-menu-submenu-title {
    color: #525252 !important;
  }
  .ant-menu-submenu-arrow {
    color: #525252 !important;
  }
  .ant-menu-title-content {
    color: #525252 !important;
    margin: 0 !important;
  }
`;

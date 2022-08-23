import React, { useState } from 'react';
import 'antd/dist/antd.css';
// import { Menu } from 'antd';
import history from '../../../utils/history';
import { items } from './sideData';
import { Content, StyledMenu } from './Style';
import { checkActiveForSideNavbar } from './CheckActive';

const SideMenu = ({ props }) => {
  const [selectedKeys, setSelectedKeys] = useState([
    checkActiveForSideNavbar(props.location.pathname),
  ]);
  const handleOnClick = e => {
    if (e.key !== 'account' && e.key !== 'member' && e.key !== 'bot') {
      history.push(e.key);
    }
    setSelectedKeys(e.key);
  };
  return (
    <Content>
      <StyledMenu
        items={items}
        mode="inline"
        onClick={handleOnClick}
        selectedKeys={selectedKeys}
      />
    </Content>
  );
};

export default SideMenu;

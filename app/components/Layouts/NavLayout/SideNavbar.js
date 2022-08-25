import React from 'react';
import { Col, Layout, Row } from 'antd';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import SideMenu from './SideMenu';
import { ProtectedContainerPath } from '../ProtectedContainerPath';
import { LayoutDiv, LayoutWrapper } from './Style';
// import './index.css';
const { Sider, Content } = Layout;
const SidebarStyle = styled.div`
  width: 20%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: #c5c5c591;
    border-radius: 10px;
    max-height: 20px !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #c5c5c591;
  }
`;

const SideNavbar = ({ props }) => (
  <LayoutWrapper>
    {/* <SidebarStyle>
      <Sider breakpoint="lg" collapsedWidth="0" width="100%" theme="light">
        <SideMenu props={props} />
      </Sider>
    </SidebarStyle> */}
    <LayoutDiv>
      <Layout className="main-content">
        <Content className="site-layout-background content-wrapper">
          <Row>
            <Col span={24}>
              <Switch>
                {ProtectedContainerPath.map(singlePath => (
                  <Route
                    exact
                    path={singlePath.path}
                    from
                    component={singlePath.component}
                  />
                ))}
              </Switch>
            </Col>
          </Row>
        </Content>
      </Layout>
    </LayoutDiv>
  </LayoutWrapper>
);

export default SideNavbar;

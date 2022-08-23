import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import Navbar from '../Navbar';
const AppWrapper = styled.div`
  ${'' /* max-width: calc(768px + 16px * 2); */}
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  ${'' /* padding: 0 16px; */}
  flex-direction: column;
  background-color: #fff;
`;
const Screen = ({
  // actions
  reloadFunc,
  handleChangeInSidebar,
  selectTheMainUser,
  fetchServiceInNavbar,
  fetchProjectInNavbar,
  // getServiceGroup,

  // values
  spAccounts,
  reloadContainer,
  userInformation,
  userServiceId,
  fetchAllSettings,
  // settings
}) => {
  useEffect(() => {
    // fetchGlobalTokens();
    fetchAllSettings();
    fetchServiceInNavbar();
    fetchProjectInNavbar();
    // fetchGroup();
  }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Switch>
        <Navbar
          spAccounts={spAccounts}
          reloadContainer={reloadContainer}
          userInformation={userInformation}
          userServiceId={userServiceId}
          selectTheMainUser={selectTheMainUser}
          // actions
          reloadFunc={reloadFunc}
          handleChangeInSidebar={handleChangeInSidebar}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
};

export default Screen;

import React, { useState, useEffect } from 'react';
import { Detector } from 'react-detect-offline';
import { NavbarWrapperStyle } from './style';
import SideNavbar from '../../components/Layouts/NavLayout/SideNavbar';
import {
  clearClientObj,
  clientObj,
  SetupMqttConnection,
} from '../../utils/Mqtt';
import LocalDb from '../../localStorage';

const Navbar = props => {
  const [isOffline, setIsOffline] = useState(false);

  const isMqttConnected = () => {
    if (clientObj.client && !clientObj.client.isConnected()) {
      props.onConnectionLost();
      props.connectMqtt(
        props.messageArrived,
        isMqttConnected,
        props.clearConnectionLostObject,
      );
    }
  };

  useEffect(() => {
    if (!isOffline) {
      if (clientObj.client && clientObj.client.isConnected()) {
      } else {
        clearClientObj();
        if (LocalDb.getSessions()) {
          SetupMqttConnection(
            props.messageArrived,
            props.clearConnectionLostObject,
            props.connectingMqtt,
            props.connectMqtt,
            isMqttConnected,
          );
        }
      }
    }
  }, [isOffline]);

  return (
    <NavbarWrapperStyle>
      <Detector
        render={({ online }) => {
          if (online) {
            isOffline && setIsOffline(false);
          } else {
            clearClientObj();
            setIsOffline(true);
          }
          return null;
        }}
      />
      <SideNavbar props={props} />
    </NavbarWrapperStyle>
  );
};
export default Navbar;

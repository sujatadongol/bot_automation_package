/**
 *
 * Navbar
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectNavbar, { makeSelectNotificationObj } from './selectors';
import Navbar from './Navbar';
import { handleChangeServiceIdInNavbar } from '../App/actions';
import {
  clearConnectionLostObject,
  connectingMqtt,
  onConnectionLost,
  onMessageArrived,
} from './actions';
import { startConnection } from '../../utils/Mqtt';
import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),

  notificationObj: makeSelectNotificationObj(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeInNavbar: () => dispatch(handleChangeServiceIdInNavbar()),

    //mqtt
    messageArrived: message => {
      dispatch(onMessageArrived(message));
    },
    connectMqtt: (msgArrivedFunc, connectionLostFunc, onConnectFunc) => {
      startConnection(msgArrivedFunc, connectionLostFunc, onConnectFunc);
    },
    connectingMqtt: () => dispatch(connectingMqtt()),
    onConnectionLost: responseObject => {
      dispatch(onConnectionLost(responseObject));
    },
    clearConnectionLostObject: object => {
      dispatch(clearConnectionLostObject(object));
    },
  };
}

const withReducer = useInjectReducer({ key: 'navbar', reducer });
const withSaga = useInjectSaga({ key: 'navbar', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(Navbar);

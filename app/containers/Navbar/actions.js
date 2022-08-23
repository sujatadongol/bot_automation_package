/*
 *
 * Navbar actions
 *
 */

import { ACTION_TYPE_MQTT, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const connectingMqtt = bool => ({
  type: ACTION_TYPE_MQTT.CONNECTING_MQTT,
  bool,
});

export const onMessageArrived = message => ({
  type: ACTION_TYPE_MQTT.ON_MESSAGE_ARRIVED,
  message,
});

export const onConnectionFailure = () => ({
  type: ACTION_TYPE_MQTT.ON_CONNECTION_FAILURE,
});

export const onConnectionLost = responseObject => ({
  type: ACTION_TYPE_MQTT.ON_CONNECTION_LOST,
  responseObject,
});

export const clearNewMsgArrived = message => ({
  type: ACTION_TYPE_MQTT.CLEAR_NEW_ARRIVED_MESSAGE,
  message,
});

export const clearConnectionLostObject = object => ({
  type: ACTION_TYPE_MQTT.CLEAR_CONNECTION_LOST_OBJECT,
  object,
});

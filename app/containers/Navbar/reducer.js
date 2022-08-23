/*
 *
 * Navbar reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPE_MQTT } from './constants';

export const initialState = {
  mqttEvent: undefined,
  connectionLost: false,
};

/* eslint-disable default-case, no-param-reassign */
const navbarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_MQTT.ON_MESSAGE_ARRIVED:
        draft.mqttEvent = action.message;
        break;
      case ACTION_TYPE_MQTT.CONNECTING_MQTT:
        draft.connectionLost = true;
        break;
      case ACTION_TYPE_MQTT.CLEAR_CONNECTION_LOST_OBJECT:
        draft.connectionLost = false;
        break;
      case ACTION_TYPE_MQTT.ON_CONNECTION_LOST:
        draft.connectionLost = true;
        break;
    }
  });

export default navbarReducer;

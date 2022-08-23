// eslint-disable-next-line import/no-unresolved
import Paho from 'paho-mqtt';
import { host, port } from '../globalConstants';
import LocalDb from '../localStorage';
import { MessageProcessor } from '../messageProcessor/MessagePocessor';
import { getInitialTopics } from '../messageProcessor/Constants';
import TokenHandler from '../token';
// import { onLineStatusProto } from '../containers/Layout/DTO';
import { CreateUUID } from './helper';

export const messageProcessors = [];
export let connectedUserId = '';

export const clientObj = {
  // Create a client instance
  client: undefined,
  clientId: undefined,
};

export const clearClientObj = () => {
  // console.log('debugger.................................................');
  clientObj.client &&
    clientObj.client.isConnected() &&
    clientObj.client.disconnect();
  clientObj.client = undefined;
};

export function GenerateNewClientId(
  msgArrivedFunc,
  connectionLostFunc,
  onConnectFunc,
) {
  console.log('client...', clientObj.client);
  if (!clientObj.client) {
    console.log('%cnew client...', 'font-size:30px', clientObj.client);

    const newID = CreateUUID();
    clientObj.clientId = newID;
    clientObj.client = new Paho.Client(host, port, newID);
    console.log('client generated', clientObj.client);
    startConnection(msgArrivedFunc, connectionLostFunc, onConnectFunc);
  }
}

export const SetupMqttConnection = (
  messageArrived,
  clearConnectionLostObject,
  connectingMqtt,
  connectMqtt,
  isMqttConnected,
) => {
  if (navigator.onLine) {
    if (!clientObj.client) {
      console.log('%cCLIENTID', 'font-size:30px', clientObj.client);
      GenerateNewClientId(
        messageArrived,
        isMqttConnected,
        clearConnectionLostObject,
      );
    } else if (!clientObj.client.isConnected()) {
      console.log('mqtt not connected...');
      connectingMqtt();
      connectMqtt(messageArrived, isMqttConnected, clearConnectionLostObject);
    }
  }
};

export function startConnection(
  msgArrivedFunc,
  connectionLostFunc,
  onConnectFunc,
) {
  // debugger;
  console.log(
    '%cMQTT status',
    'font-size:30px',
    clientObj.client.isConnected(),
    LocalDb.getUserAccountId(),
    TokenHandler.token(),
  );

  if (
    LocalDb.getSessions() &&
    LocalDb.getUserAccountId() &&
    TokenHandler.token() &&
    clientObj.client.isConnected() === false
  ) {
    // // Create Last will message
    // const sessionId = LocalDb.getActiveSp() && LocalDb.getActiveSp().sessionid;
    // const lastWill = new Paho.Message(onLineStatusProto(false, sessionId));
    // lastWill.destinationName = MqttConstants.AUTH_DISCONNECT;

    // connect the client
    clientObj.client.connect({
      onSuccess: () => onConnect(onConnectFunc),
      onFailure: () => onFailure(msgArrivedFunc, connectionLostFunc),
      useSSL: true,
      userName: LocalDb.getUserAccountId(),
      password: TokenHandler.token(),
      // willMessage: lastWill,
    });
  }
  clientObj.client.onMessageArrived = msgArrivedFunc;
  clientObj.client.onConnectionLost = connectionLostFunc;
}

// called when the client connects
export function onConnect(onConnectFunc) {
  console.log(
    '%cSUCCESS MQTT',
    consoleStyles.success,
    clientObj.client,
    clientObj.client.isConnected(),
  );
  if (clientObj.client.isConnected()) {
    console.log('%cConnected', 'color:green', LocalDb.getUserAccountId());
    initialSubscribe();
    onConnectFunc();
  }
}

export function initialSubscribe() {
  console.log('initial subscribe');
  const msgProcessor = new MessageProcessor(LocalDb.getUserAccountId());
  msgProcessor.MessageSubscriber(getInitialTopics(LocalDb.getUserAccountId()));
  messageProcessors.push(msgProcessor);
}

export function subscribeToSpecificUser(accountId) {
  const msgProcessor = new MessageProcessor(accountId);
  msgProcessor.MessageSubscriber(
    getInitialTopics(accountId, LocalDb.getUserSessionId()),
  );
  // msgProcessor.MessagePublish({ messageType: 'USER_STATUS' });
  messageProcessors.push(msgProcessor);
}

export function subscribe(topic) {
  if (clientObj.client.isConnected() === true) {
    clientObj.client.subscribe(topic);
  }
}

export function unsubscribe(topic) {
  if (clientObj.client.isConnected() === true) {
    clientObj.client.unsubscribe(topic);
  }
}

export function publish(topic, msg) {
  console.log('publish', msg.buffer);
  const message = new Paho.Message(msg.buffer);
  message.destinationName = topic;
  clientObj.client.send(message);
}

// export function onMessageArrival(message) {
//   console.log('message arrived', message);
// }

export function onFailure(msgArrivedFunc, connectionLostFunc) {
  console.log(
    'onFailure........',
    clientObj,
    clientObj.client.isConnected(),
    msgArrivedFunc,
  );
  startConnection(msgArrivedFunc, connectionLostFunc);
}

const consoleStyles = {
  group: 'font-size: 20px; color: green; background-color: black',
  success: 'font-size: 15px; color: green; background-color: white',
  warn: 'font-size: 15px; color: red; background-color: white',
  event: 'font-size: 12px; color: blue; background-color: white',
  celebrate: 'font-size: 25px; color: green; background-color: white',
};

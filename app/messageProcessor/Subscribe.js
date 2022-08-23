import { clientObj } from '../utils/Mqtt';

export class Subscribe {
  constructor(accountId) {
    this.accountId = accountId;
  }

  subscribe(topics) {
    // console.log({ topics });
    clientObj.client &&
      topics &&
      topics.forEach(singleTopic =>
        clientObj.client.subscribe(singleTopic, { qos: 1 }),
      );
  }

  unsubscribe(topics) {
    clientObj.client &&
      topics &&
      topics.forEach(singleTopic => clientObj.client.unsubscribe(singleTopic));
  }
}

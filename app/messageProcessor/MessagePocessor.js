import { Subscribe } from './Subscribe';

export class MessageProcessor {
  constructor(accountId) {
    this.accountId = accountId;
    this.msgListener = null;
    this.msgSender = null;
    this.allTopics = [];
  }

  MessageSubscriber = topics => {
    console.log('%cSUBSCRIBE', 'font-size:30px; color:yellow', { topics });
    this.msgListener = new Subscribe(this.accountId);
    this.msgListener.subscribe(topics);
    this.allTopics = [...this.allTopics, topics];
  };

  MessageUnSubscriber = topics => {
    this.msgListener.unsubscribe(topics);
  };

  MessageAllUnSubscriber = () => {
    this.msgListener.unsubscribe(this.allTopics);
  };
}

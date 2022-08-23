export class AutoTicketCreate {
  constructor(props) {
    console.log(props, 'props');
    this.id = props && props.id;
    this.modelName = props && props.name;
    this.rules = props && props.ticketCreateRule;
    this.lastTrained = props && props.lastTrained;
    this.count =
      (props && props.rulesCount) ||
      ((props && props.ticketCreateRule && props.ticketCreateRule.length) || 0);
    this.retrainModal = props && props.retrainModal;
  }

  static mapAutoTicketCreate = list => {
    const mappedList = [];
    list && list.map(single => mappedList.push(new AutoTicketCreate(single)));
    return mappedList;
  };
}

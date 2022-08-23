export class SessionDb {
  constructor() {
    this.sessionKey = 'anyDoneSession';
  }
  getSessions() {
    const itemGot = sessionStorage.getItem(this.sessionKey);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }

  getSource() {
    const source = sessionStorage.getItem('source');
    if (source !== null) {
      return JSON.parse(source);
    }
    return null;
  }

  getUser() {
    const itemGot = sessionStorage.getItem(this.sessionKey);
    if (itemGot !== null) {
      const details = JSON.parse(itemGot);
      return details && details.user;
    }
    return null;
  }

  getUserProfileAccount() {
    if (this.isEmployee() !== null) {
      return this.getEmployee().account;
    }
    if (this.isServiceProvider() !== null) {
      return this.getServiceProvider().account;
    }
  }

  getServiceProvider() {
    if (this.getUser() !== null) {
      return (
        this.getUser() &&
        (this.getUser().serviceProvider || this.getUser().serviceprovider)
      );
    }
  }

  isServiceProvider() {
    return this.getServiceProvider() !== undefined;
  }

  getEmployee() {
    if (this.getUser() !== null) {
      return this.getUser() && this.getUser().employee;
    }
  }

  isEmployee() {
    return this.getEmployee() !== undefined;
  }

  getUserAccountId() {
    if (this.isEmployee()) {
      return (
        this.getEmployee().account.accountid ||
        this.getEmployee().account.accountId
      );
    }
    if (this.isServiceProvider()) {
      return (
        this.getServiceProvider().account.accountid ||
        this.getServiceProvider().account.accountId
      );
    }
  }

  getUserProfileId() {
    if (this.isEmployee()) {
      return this.getEmployee().employeeProfileId;
    }
    if (this.isServiceProvider()) {
      return this.getServiceProvider().serviceProviderProfileId;
    }
  }

  getUserProfileAccount() {
    if (this.isEmployee()) {
      return this.getEmployee().account;
    }
    if (this.isServiceProvider()) {
      return this.getServiceProvider().account;
    }
  }

  getPermission() {
    return this.isEmployee() !== undefined && this.getEmployee() !== undefined
      ? this.getEmployee().permissions
      : undefined;
  }

  // employee permission
  getPermissionForCreateEmployee() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('employee.admin') === true) ||
        (permissionObj && permissionObj.includes('employee.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForDeleteEmployee() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('employee.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  // service permission
  getPermissionForViewService() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('service.admin') === true) ||
        (permissionObj && permissionObj.includes('service.write') === true) ||
        (permissionObj && permissionObj.includes('service.read') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForCreateService() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('service.admin') === true) ||
        (permissionObj && permissionObj.includes('service.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForDeleteService() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('service.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  // bot permission
  getPermissionForBot() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('bot.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  // intent permission
  getPermissionForCreateIntent() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('bot.intent.admin') === true) ||
        (permissionObj && permissionObj.includes('bot.intent.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForDeleteIntent() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        permissionObj &&
        permissionObj.includes('bot.intent.admin') === true
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  // ticket permissions
  getPermissionForViewTicket() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('ticket.admin') === true) ||
        (permissionObj && permissionObj.includes('ticket.write') === true) ||
        (permissionObj && permissionObj.includes('ticket.read') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForCreateTicket() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('ticket.admin') === true) ||
        (permissionObj && permissionObj.includes('ticket.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForTicketAdmin() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('ticket.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  // conversation permissions
  getPermissionForViewConversation() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('conversation.admin') === true) ||
        (permissionObj &&
          permissionObj.includes('conversation.write') === true) ||
        (permissionObj && permissionObj.includes('conversation.read') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForConversationWrite() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('conversation.admin') === true) ||
        (permissionObj && permissionObj.includes('conversation.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForConversationAdmin() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        permissionObj &&
        permissionObj.includes('conversation.admin') === true
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  // team permissions
  getPermissionForViewTeam() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('tag.admin') === true) ||
        (permissionObj && permissionObj.includes('tag.write') === true) ||
        (permissionObj && permissionObj.includes('tag.read') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForCreateTeam() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('tag.admin') === true) ||
        (permissionObj && permissionObj.includes('tag.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForDeleteTeam() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('team.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  // integration permissions
  getPermissionForViewIntegration() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('integration.admin') === true) ||
        (permissionObj &&
          permissionObj.includes('integration.write') === true) ||
        (permissionObj && permissionObj.includes('integration.read') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForCreateIntegration() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('integration.admin') === true) ||
        (permissionObj && permissionObj.includes('integration.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForIntegration() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        permissionObj &&
        permissionObj.includes('integration.admin') === true
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  // third party api permissions
  getPermissionForCreateThirdPartyApi() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj &&
          permissionObj.includes('thirdPartyApi.admin') === true) ||
        (permissionObj &&
          permissionObj.includes('thirdPartyApi.write') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getPermissionForDeleteThirdPartyApi() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        permissionObj &&
        permissionObj.includes('thirdPartyApi.admin') === true
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  // billing permissions
  getBillingReadPermission() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (
        (permissionObj && permissionObj.includes('billing') === true) ||
        (permissionObj && permissionObj.includes('billing.admin') === true)
      ) {
        return true;
      }
      return false;
    }
    return true;
  }

  getBillingAdminPermission() {
    if (this.isEmployee() === true) {
      const permissionObj =
        this.getPermission() &&
        this.getPermission().map(single => single.permission);
      if (permissionObj && permissionObj.includes('billing.admin') === true) {
        return true;
      }
      return false;
    }
    return true;
  }

  setSession(session, callback) {
    try {
      sessionStorage.setItem(this.sessionKey, JSON.stringify(session), error =>
        callback(error),
      );
      callback(false);
    } catch (error) {
      console.log('Error while setting session.', error);
    }
  }

  removeSession(callback) {
    try {
      // sessionStorage.removeItem(this.sessionKey, error => callback(error));
      sessionStorage.clear();
    } catch (error) {
      console.log('Error while removing session.', error);
    }
  }

  saveInLocalDB(key, dataToSave, callback) {
    try {
      sessionStorage.setItem(key, JSON.stringify(dataToSave), error =>
        callback(error),
      );
      callback(false);
    } catch (error) {
      console.log('Error while setting session.', error);
    }
  }

  getSavedItemFromDB(key) {
    const itemGot = sessionStorage.getItem(key);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }
}
export default new SessionDb();

/* eslint-disable consistent-return */
export class LocalDb {
  constructor() {
    this.sessionKey = 'anyDoneSession';
    this.accountKey = 'anyDoneSession';
  }

  setAccountDataToSession() {
    const accountData = localStorage.getItem('anyDoneSession');
    const source = localStorage.getItem('source');
    const serviceId = localStorage.getItem('serviceId');
    if (accountData) {
      sessionStorage.setItem('anyDoneSession', accountData);
      localStorage.removeItem(this.accountKey);
    }
    if (source) {
      sessionStorage.setItem('source', source);
      localStorage.removeItem('source');
    }

    if (serviceId) {
      sessionStorage.setItem('serviceId', serviceId);
      localStorage.removeItem('serviceId');
    }
  }

  getSessions() {
    const itemGot = localStorage.getItem(this.sessionKey);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }

  getSource() {
    const source = localStorage.getItem('source');
    if (source !== null) {
      return JSON.parse(source);
    }
    return null;
  }

  getUser() {
    const itemGot = localStorage.getItem(this.sessionKey);
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
      return this.getUser() && this.getUser().billingaccount;
    }
  }

  isGuest() {
    return (
      this.getEmployee() &&
      this.getEmployee().account &&
      this.getEmployee().account.accounttype === 6
    );
  }

  isServiceProvider() {
    return this.getServiceProvider() !== undefined;
  }

  hasTicketAdminPermission = () =>
    this.getPermissionListOfActiveUser() &&
    this.getPermissionListOfActiveUser().find(
      singlePermission => singlePermission.permission === 'ticket.admin',
    );

  getPermissionListOfActiveUser = () => {
    const tokensList =
      this.getSessions() &&
      this.getSessions().tokensList &&
      this.getSessions().tokensList.find(
        singleToken =>
          singleToken.serviceprovider.accountid ===
          localStorage.getItem('selectedSpId'),
      );

    return tokensList && tokensList.permissionList;
  };

  getEmployee() {
    if (this.getUser() !== null) {
      return this.getUser() && this.getUser().employee;
    }
  }

  isOwner = () => {
    const selectedSP =
      this.getSessions() && this.getSessions().selectedTokenObj;
    if (selectedSP) {
      if (selectedSP.serviceprovider && selectedSP.serviceprovider.role === 1) {
        return true;
      }
      return false;
    }
  };

  isAdmin = () => {
    const selectedSP =
      this.getSessions() && this.getSessions().selectedTokenObj;
    if (selectedSP) {
      if (selectedSP.serviceprovider && selectedSP.serviceprovider.role === 2) {
        return true;
      }
      if (selectedSP.serviceprovider && selectedSP.serviceprovider.role === 1) {
        return true;
      }
      return false;
    }
  };

  isOnlyAdmin = () => {
    const selectedSP =
      this.getSessions() && this.getSessions().selectedTokenObj;
    if (selectedSP) {
      if (selectedSP.serviceprovider && selectedSP.serviceprovider.role === 2) {
        return true;
      }
      return false;
    }
  };

  isMember = () => {
    const selectedSP =
      this.getSessions() && this.getSessions().selectedTokenObj;
    if (selectedSP) {
      if (selectedSP.serviceprovider && selectedSP.serviceprovider.role === 3) {
        return true;
      }
      return false;
    }
  };

  isEmployee() {
    return this.getEmployee() !== undefined;
  }

  getUserAccountId() {
    if (this.isEmployee()) {
      return this.getEmployee().account.accountid;
    }
    if (this.isServiceProvider()) {
      return this.getServiceProvider().account.accountid;
    }
  }

  getUserProfileId() {
    if (this.isEmployee()) {
      return this.getEmployee().employeeprofileid;
    }
    if (this.isServiceProvider()) {
      return this.getServiceProvider().billingaccountid;
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
      localStorage.setItem(this.sessionKey, JSON.stringify(session), error =>
        callback(error),
      );
      callback(false);
    } catch (error) {
      console.log('Error while setting session.', error);
    }
  }

  removeSession(callback) {
    try {
      // localStorage.removeItem(this.sessionKey, error => callback(error));
      localStorage.clear();
    } catch (error) {
      console.log('Error while removing session.', error);
    }
  }

  saveInLocalDB(key, dataToSave, callback) {
    try {
      localStorage.setItem(key, JSON.stringify(dataToSave), error =>
        callback(error),
      );
      callback(false);
    } catch (error) {
      console.log('Error while setting session.', error);
    }
  }

  getSavedItemFromDB(key) {
    const itemGot = localStorage.getItem(key);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }

  getPermissionListOfSpecificUser = () => {
    const session = localStorage.getItem('anyDoneSession')
      ? JSON.parse(localStorage.getItem('anyDoneSession'))
      : undefined;
    const tokensList = session && session.selectedTokenObj;

    return tokensList && tokensList.permissionList;
  };

  hasEmployeePermission = () =>
    this.getPermissionListOfSpecificUser() &&
    this.getPermissionListOfSpecificUser().find(
      singlePermission => singlePermission.permission === 'employee.admin',
    );

  getSelectedWorkspaceDetail = () => {
    const session = localStorage.getItem('anyDoneSession')
      ? JSON.parse(localStorage.getItem('anyDoneSession'))
      : undefined;
    return session && session.selectedTokenObj;
  };

  getSelectedWorkspaceId = () => {
    const session = localStorage.getItem('anyDoneSession')
      ? JSON.parse(localStorage.getItem('anyDoneSession'))
      : undefined;
    return (
      session &&
      session.selectedTokenObj &&
      session.selectedTokenObj.serviceprovider &&
      session.selectedTokenObj.serviceprovider.accountid
    );
  };
}
export default new LocalDb();

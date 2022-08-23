
import {
  getAddMemberToGeneralBool,
  getCanDisplayEmailBool,
  getCanInviteMemberBool,
} from './helper';

export class GeneralPermissionModel {
  constructor(settingsList) {
    this.canInviteMember = getCanInviteMemberBool(settingsList);
    this.canDisplayEmail = getCanDisplayEmailBool(settingsList);
    this.canAddMembersToGeneral = getAddMemberToGeneralBool(settingsList);
  }
}

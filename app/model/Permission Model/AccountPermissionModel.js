import LocalDb from '../../localStorage';
import { getAllowGuestMemberBool, getAllowTwoFactorBool } from './helper';

export class AccountPermissionModel {
  constructor(settingsList) {
    this.allowTwoFactor = getAllowTwoFactorBool(settingsList);
    this.allowGuestMember = getAllowGuestMemberBool(settingsList);
  }
}

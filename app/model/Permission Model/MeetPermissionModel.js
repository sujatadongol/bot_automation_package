import LocalDb from '../../localStorage';
import {
  getAllowGuestInvitationBool,
  getAllowThirdPartyCalenderBool,
  getForceGuestUserBool,
} from './helper';

export class MeetPermissionModel {
  constructor(settingsList) {
    this.allowGuestInvitation = getAllowGuestInvitationBool(settingsList);
    this.forceGuestUser = getForceGuestUserBool(settingsList);
    this.allowThirdPartyCalender = getAllowThirdPartyCalenderBool(settingsList);
  }
}

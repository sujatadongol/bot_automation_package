/* eslint-disable consistent-return */
import LocalDb from '../../localStorage';

export const getValue = single => {
  console.log({ single });
  if (single) {
    if (single.value === '5') {
      return 'OWNER';
    }
    if (single.value === '1') {
      return 'ADMIN_ONLY';
    }
    if (single.value === '3') {
      return 'EVERYONE_EXCEPT_GUEST';
    }
  }
};
export const getVisiblityValue = single => {
  if (single) {
    if (single.value === '8') {
      return 'NO_PERMISSION';
    }
    if (single.value === '9') {
      return 'VIEWER';
    }
    if (single.value === '10') {
      return 'EDITOR';
    }
  }
};
export const getEmailDisplayValue = single => {
  if (single) {
    if (single.value === '7') {
      return 'NONE';
    }
    if (single.value === '6') {
      return 'MEMBERS_AND_GUEST_COMPANY';
    }
  }
  // return 'NONE';
};
export const getWorkdaysHolidaysValue = single => {
  if (single) {
    if (single.value === '5') {
      return 'OWNER';
    }
    if (single.value === '1') {
      return 'ADMIN_ONLY';
    }
    if (single.value === '3') {
      return 'EVERYONE_EXCEPT_GUEST';
    }
  }
};
export const getSwitchValue = projectCreator => {
  switch (getValue(projectCreator)) {
    case 'OWNER':
      if (LocalDb.isOwner()) {
        return true;
      }
      return false;
    case 'ADMIN_ONLY':
      if (LocalDb.isAdmin()) {
        return true;
      }
      return false;

    case 'EVERYONE_EXCEPT_GUEST':
      if (!LocalDb.isGuest()) {
        return true;
      }
      return false;

    default:
      break;
  }
};
export const getCanCreateProjectBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'CREATE_PROJECT' && item.type === 'TICKET_SETTINGS',
    );

  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getCanCreateSubProjectBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CREATE_SUBPROJECT' && item.type === 'TICKET_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getCanBoardBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'CREATE_BOARD' && item.type === 'TICKET_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getArchiveProjcetBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'ARCHIVE_PROJECT' && item.type === 'TICKET_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getProjectVisiblity = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'PROJECT_VISIBILITY' && item.type === 'TICKET_SETTINGS',
    );
  if (projectCreator) {
    switch (getVisiblityValue(projectCreator)) {
      case 'NO_PERMISSION':
        return 'NO_PERMISSION';

      case 'VIEWER':
        return 'VIEWER';

      case 'EDITOR':
        return 'EDITOR';

      default:
        break;
    }
  }
};
export const getCreateUpdateGroupBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CREATE_MESSAGE_GROUP' && item.type === 'INBOX_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getArchiveGroupBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'ARCHIVE_MESSAGE_GROUP' && item.type === 'INBOX_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getMessageEditBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item => item.key === 'CAN_EDIT_MESSAGE' && item.type === 'INBOX_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getMessageDeleteBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CAN_DELETE_MESSAGE' && item.type === 'INBOX_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getMessageReplyBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CAN_REPLY_IN_PRIVATE_GROUP' &&
        item.type === 'INBOX_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getWorkAndHolidaysBool = settingsList => {
  const workandHoldiay =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'EDIT_WORKDAYS_AND_HOLIDAYS' &&
        item.type === 'WORKDAYS_AND_HOLIDAYS',
    );
  if (workandHoldiay) {
    return getSwitchValue(workandHoldiay);
  }
};
export const getAllowGuestInvitationBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item => item.key === 'CAN_INVITE_GUEST' && item.type === 'MEET_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getForceGuestUserBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'SHOULD_VERIFY_GUEST_EMAIL' &&
        item.type === 'MEET_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getAllowThirdPartyCalenderBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CAN_IMPORT_THIRDPARTY_CALENDAR' &&
        item.type === 'MEET_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getCanCreateAppsBool = settingsList => {
  const single =
    settingsList &&
    settingsList.find(
      item => item.key === 'CREATE_APPS' && item.type === 'APP_SETTINGS',
    );
  if (single) {
    return getSwitchValue(single);
  }
};
export const getCanintegrateAppsBool = settingsList => {
  const single =
    settingsList &&
    settingsList.find(
      item => item.key === 'INTEGRATE_APPS' && item.type === 'APP_SETTINGS',
    );
  if (single) {
    return getSwitchValue(single);
  }
};
export const getAllowTwoFactorBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'ALLOW_TWO_FACTOR_AUTH' &&
        item.type === 'ACCOUNT_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getAllowGuestMemberBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item =>
        item.key === 'CAN_INVITE_GUEST' && item.type === 'ACCOUNT_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};
export const getCanCreateBotBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'CAN_CREATE_BOT' && item.type === 'BOT_SETTINGS',
    );
  if (projectCreator) {
    return getSwitchValue(projectCreator);
  }
};
export const getCanInviteMemberBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'INVITE_MEMBER' && item.type === 'GENERAL_SETTINGS',
    );
  if (projectCreator) {
    console.log(projectCreator, 'project creator');

    return getSwitchValue(projectCreator);
  }
};
export const getCanDisplayEmailBool = settingsList => {
  const projectCreator =
    settingsList &&
    settingsList.find(
      item => item.key === 'EMAIL_DISPLAY' && item.type === 'GENERAL_SETTINGS',
    );
  if (projectCreator) {
    switch (getEmailDisplayValue(projectCreator)) {
      case 'MEMBERS_AND_GUEST_COMPANY':
        return true;
      case 'NONE':
        return false;
      default:
        break;
    }
  }
};
export const getAddMemberToGeneralBool = settingsList => {
  const singleSetting =
    settingsList &&
    settingsList.find(
      item => item.key === 'DEFAULT_GROUP' && item.type === 'GENERAL_SETTINGS',
    );

  if (singleSetting) {
    if (singleSetting.value === 'true') {
      return true;
    }
    return false;
  }
};

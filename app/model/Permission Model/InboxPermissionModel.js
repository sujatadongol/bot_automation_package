import LocalDb from '../../localStorage';
import {
  getArchiveGroupBool,
  getCreateUpdateGroupBool,
  getMessageDeleteBool,
  getMessageEditBool,
  getMessageReplyBool,
} from './helper';

export class InboxPermissionModel {
  constructor(settingsList) {
    this.createUpdateGroup = getCreateUpdateGroupBool(settingsList);
    this.archiveGroup = getArchiveGroupBool(settingsList);
    this.enableMessageEdit = getMessageEditBool(settingsList);
    this.enableMessageDelete = getMessageDeleteBool(settingsList);
    this.enableMessageReply = getMessageReplyBool(settingsList);
  }
}

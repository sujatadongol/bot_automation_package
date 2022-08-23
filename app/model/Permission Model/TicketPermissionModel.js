import LocalDb from '../../localStorage';
import {
  getArchiveProjcetBool,
  getCanBoardBool,
  getCanCreateProjectBool,
  getCanCreateSubProjectBool,
  getProjectVisiblity,
} from './helper';

export class TicketPermissionModel {
  constructor(settingsList) {
    this.createUpdateProject = getCanCreateProjectBool(settingsList);
    this.createUpdateSubProject = getCanCreateSubProjectBool(settingsList);
    this.createUpdateBoard = getCanBoardBool(settingsList);
    this.archiveProject = getArchiveProjcetBool(settingsList);
    this.projectVisiblity = getProjectVisiblity(settingsList);
  }
}

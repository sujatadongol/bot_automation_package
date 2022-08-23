import LocalDb from '../../localStorage';
import {
  getCanCreateAppsBool,
  getCanintegrateAppsBool,
  getWorkAndHolidaysBool,
} from './helper';

export class AppPermissionModel {
  constructor(settingsList) {
    this.createApps = getCanCreateAppsBool(settingsList);
    this.integrateApps = getCanintegrateAppsBool(settingsList);
  }
}

import LocalDb from '../../localStorage';
import { getWorkAndHolidaysBool } from './helper';

export class SideBarModel {
  constructor(settingsList) {
    this.canPerformWorkdaysAndHolidaysFunction = getWorkAndHolidaysBool(
      settingsList,
    );
    this.showSettings = LocalDb.isServiceProvider();
    this.hideWorkspaces = LocalDb.isServiceProvider();
  }
}

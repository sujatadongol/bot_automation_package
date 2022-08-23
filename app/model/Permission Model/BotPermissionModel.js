import { getCanCreateBotBool } from './helper';

export class BotPermissionModel {
  constructor(settingsList) {
    this.createBot = getCanCreateBotBool(settingsList);
  }
}

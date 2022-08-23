import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { TicketPermissionModel } from '../../model/Permission Model/TicketPermissionModel';
import { MeetPermissionModel } from '../../model/Permission Model/MeetPermissionModel';
import { BotPermissionModel } from '../../model/Permission Model/BotPermissionModel';
import { AccountPermissionModel } from '../../model/Permission Model/AccountPermissionModel';
import { GeneralPermissionModel } from '../../model/Permission Model/GeneralPermissionModel';
import { AppPermissionModel } from '../../model/Permission Model/AppPermissionModel';
import { InboxPermissionModel } from '../../model/Permission Model/InboxPermissionModel';
import { SideBarModel } from '../../model/Permission Model/SidebarModel';

/**
 * Direct selector to the settings state domain
 */

const selectSettingsDomain = state => state.settings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Settings
 */

const makeSelectSettings = () =>
  createSelector(
    selectSettingsDomain,
    substate => substate,
  );

export default makeSelectSettings;

export const makeSelectKeySettings = key => () =>
  createSelector(
    selectSettingsDomain,
    substate => substate[key],
  );

export { selectSettingsDomain };
export const makeSelectAllSettings = makeSelectKeySettings('settings');
export const makeSelectChangeState = makeSelectKeySettings('changeState');
export const makeSelectPermissionLists = makeSelectKeySettings(
  'permissionList',
);

export const ticketPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new TicketPermissionModel(settings),
  );

export const sidebarPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    allSettings => new SideBarModel(allSettings),
  );

export const inboxPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new InboxPermissionModel(settings),
  );

export const meetPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new MeetPermissionModel(settings),
  );

export const botPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new BotPermissionModel(settings),
  );

export const accountPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new AccountPermissionModel(settings),
  );

export const generalPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new GeneralPermissionModel(settings),
  );

export const appsPermissionModel = () =>
  createSelector(
    makeSelectAllSettings(),
    settings => new AppPermissionModel(settings),
  );

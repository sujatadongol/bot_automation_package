/*
 *
 * Settings reducer
 *
 */
import produce from 'immer';
import {
  showErrorNotification,
  showSuccessNotification,
} from '../../components/ReusableComponents/SnackbarComponent';
import { SETTINGS_ACTION } from './constants';

export const initialState = {
  loading: false,
  settings: [],
  languages: [],
  timezones: [],
  changeState: false,
  permissionList: {
    inviteMembers: false,
    createBot: false,
    createApp: false,
    integrateApp: false,
    createGroup: false,
    archiveGroup: false,
    createProject: false,
    createSubProject: false,
    createBoard: false,
    archiveProject: false,
    editWorkdays: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const settingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // fetch all settings
      case SETTINGS_ACTION.FETCH_ALL_SETTINGS:
        break;
      case SETTINGS_ACTION.FETCH_ALL_SETTINGS_SUCCESS:
        draft.settings = action.settings;
        break;
      case SETTINGS_ACTION.FETCH_ALL_SETTINGS_FAILURE:
        break;
      // fetch languages
      case SETTINGS_ACTION.FETCH_LANGUAGES:
        break;
      case SETTINGS_ACTION.FETCH_LANGUAGES_SUCCESS:
        draft.languages = action.languages;
        break;
      case SETTINGS_ACTION.FETCH_LANGUAGES_FAILURE:
        break;
      // fetch timezones
      case SETTINGS_ACTION.FETCH_TIMEZONES:
        break;
      case SETTINGS_ACTION.FETCH_TIMEZONES_SUCCESS:
        draft.timezones = action.timezones;
        break;
      case SETTINGS_ACTION.FETCH_TIMEZONES_FAILURE:
        break;
      // update settings
      case SETTINGS_ACTION.UPDATE_SETTINGS:
        draft.loading = true;
        draft.changeState = true;
        break;
      case SETTINGS_ACTION.UPDATE_SETTINGS_SUCCESS: {
        draft.changeState = false;
        const newSettings = [...state.settings];
        const filteredSettings =
          newSettings &&
          newSettings.length > 0 &&
          newSettings.filter(
            item => item.type && item.type !== action.settingType,
          );
        const newArray = [...filteredSettings, ...action.settings];
        draft.settings = newArray;
        draft.loading = false;
        showSuccessNotification('Settings updated successfully');
        break;
      }
      case SETTINGS_ACTION.UPDATE_SETTINGS_FAILURE:
        showErrorNotification(action.error);
        draft.loading = false;
        // draft.changeState = false;
        break;
      case SETTINGS_ACTION.HANDLE_CHANGE_STATE:
        draft.changeState = action.bool;
        draft.permissionList[action.settingType] = action.bool;
    }
  });

export default settingsReducer;

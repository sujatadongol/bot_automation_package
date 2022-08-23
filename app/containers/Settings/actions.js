/*
 *
 * Settings actions
 *
 */

import { SETTINGS_ACTION } from './constants';
// fetch all settings
export function fetchAllSettings() {
  return {
    type: SETTINGS_ACTION.FETCH_ALL_SETTINGS,
  };
}
export function fetchAllSettingsSuccess(settings) {
  return {
    type: SETTINGS_ACTION.FETCH_ALL_SETTINGS_SUCCESS,
    settings,
  };
}
export function fetchAllSettingsFailure(error) {
  return {
    type: SETTINGS_ACTION.FETCH_ALL_SETTINGS_FAILURE,
    error,
  };
}
// fetch languages
export function fetchLanguages() {
  return {
    type: SETTINGS_ACTION.FETCH_LANGUAGES,
  };
}
export function fetchLanguagesSuccess(languages) {
  return {
    type: SETTINGS_ACTION.FETCH_LANGUAGES_SUCCESS,
    languages,
  };
}
export function fetchLanguagesFailure(error) {
  return {
    type: SETTINGS_ACTION.FETCH_LANGUAGES_FAILURE,
    error,
  };
}
// fetch timezones
export function fetchTimezones() {
  return {
    type: SETTINGS_ACTION.FETCH_TIMEZONES,
  };
}
export function fetchTimezonesSuccess(timezones) {
  return {
    type: SETTINGS_ACTION.FETCH_TIMEZONES_SUCCESS,
    timezones,
  };
}
export function fetchTimezonesFailure(error) {
  return {
    type: SETTINGS_ACTION.FETCH_TIMEZONES_FAILURE,
    error,
  };
}
// updateSettings
export function updateSettings(settings, settingType) {
  return {
    type: SETTINGS_ACTION.UPDATE_SETTINGS,
    settings,
    settingType,
  };
}
export function updateSettingsSuccess(settings, settingType) {
  return {
    type: SETTINGS_ACTION.UPDATE_SETTINGS_SUCCESS,
    settings,
    settingType,
  };
}
export function updateSettingsFailure(error) {
  return {
    type: SETTINGS_ACTION.UPDATE_SETTINGS_FAILURE,
    error,
  };
}
export function handleChangeState(settingType, bool) {
  return {
    type: SETTINGS_ACTION.HANDLE_CHANGE_STATE,
    settingType,
    bool,
  };
}

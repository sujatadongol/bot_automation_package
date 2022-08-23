import { ACTION_TYPE_CREATE_ENTITY, DEFAULT_ACTION } from './constants';
import {
  ACTION_TYPE_BOT_CONFIGURATION_TAB,
  ACTION_TYPE_ENTITY,
} from '../Bot/BotConfigurationTab/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const closeSnackbarInCreateEntityIntent = bool => ({
  type: ACTION_TYPE_CREATE_ENTITY.CLOSE_SNACKBAR_IN_CREATE_ENTITY,
  bool,
});

//regex
export const removeRegex = id => ({
  type: ACTION_TYPE_CREATE_ENTITY.REMOVE_REGEX,
  id,
});
export const handleChangeRegex = (id, value) => ({
  type: ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_REGEX,
  id,
  value,
});

//synonym
export const removeSynonymTag = (synonymId, tagId) => ({
  type: ACTION_TYPE_CREATE_ENTITY.REMOVE_SYNONYM_TAG,
  synonymId,
  tagId,
});
export const removeSynonym = id => ({
  type: ACTION_TYPE_CREATE_ENTITY.REMOVE_SYNONYM,
  id,
});
export const handleChangeSynonym = (id, value) => ({
  type: ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_SYNONYM,
  id,
  value,
});
export const handleChangeInTagInput = (id, value) => ({
  type: ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_IN_TAG_INPUT,
  id,
  value,
});

export const handleChangeSynonymTag = (id, value) => ({
  type: ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_SYNONYM_TAG,
  id,
  value,
});

export const handleChangeEntityDataInIntent = (id, value) => ({
  type: ACTION_TYPE_CREATE_ENTITY.HANDLE_CHANGE_IN_ENTITY_DATA,
  id,
  value,
});

export const createEntityInIntent = botId => ({
  type: ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT,
  botId,
});

export const createEntityInIntentSuccess = () => ({
  type: ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT_SUCCESS,
});

export const createEntityInIntentFailure = error => ({
  type: ACTION_TYPE_CREATE_ENTITY.CREATE_ENTITY_IN_INTENT_FAILURE,
  error,
});

export const clearEntityDataInIntent = data => ({
  type: ACTION_TYPE_CREATE_ENTITY.CLEAR_ENTITY_DATA,
  data,
});

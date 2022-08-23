import produce from 'immer';
import { ACTION_TYPE_TICKET_SETTING } from './constants';
import { FuncToReturnUpdatedList } from '../../utils/helper';
import { AutoTicketCreate } from './AutoTicketCreateModal';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',
  autoTicketCreate: false,
  autoTicketList: [],
  nextCursor: null,
  ticketSetting: undefined,
  customRuleArrayLength: undefined,
  customRuleArray: undefined,
  customRules: [],
  ticketDetail: null,
};

/* eslint-disable default-case, no-param-reassign */
const ticketSettingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_TICKET_SETTING.API_REQUEST_MADE_IN_TICKET_SETTING:
        draft.loading = true;
        break;
      case ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING_SUCCESS:
        console.log('from reducer');
        draft.loading = false;
        draft.ticketSetting = action.ticketSetting.ticketSettings;
        break;
      case ACTION_TYPE_TICKET_SETTING.FETCH_TICKET_SETTING_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_TICKET_SETTING.ENABLE_AUTO_TICKET_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_TICKET_SETTING.DISABLE_AUTO_TICKET_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE_SUCCESS:
        draft.loading = false;
        draft.error = 'Training Started';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_TICKET_SETTING.RETRAIN_CUSTOM_RULE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE_SUCCESS:
        draft.loading = false;
        let ruleArray = [];
        if (action.customRules.ticketCreateRules !== undefined) {
          action.customRules.ticketCreateRules.map(single => {
            ruleArray.push({
              id: single.id,
              value: single.texts,
            });
          });
          draft.customRuleArrayLength = ruleArray.length;
          draft.customRuleArray = ruleArray;
        } else {
          draft.customRuleArray = [
            {
              id: Math.random(),
              value: '',
            },
          ];
        }
        break;
      case ACTION_TYPE_TICKET_SETTING.FETCH_CUSTOM_RULE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_ROW:
        draft.loading = false;
        const arrayData = [...state.customRuleArray];
        const formData = {
          id: Math.random(),
          value: '',
        };
        arrayData.push(formData);
        draft.customRuleArray = arrayData;
        break;
      case ACTION_TYPE_TICKET_SETTING.HANDLE_CHANGE_IN_CUSTOM_RULES:
        draft.loading = false;
        let newRuleAttribute = state.customRuleArray.filter(
          single => single.id === action.id,
        )[0];
        newRuleAttribute.value = action.value;
        draft.customRuleArray = FuncToReturnUpdatedList(
          state.customRuleArray,
          action.id,
          newRuleAttribute,
        );
        break;
      case ACTION_TYPE_TICKET_SETTING.REMOVE_CUSTOM_RULE:
        draft.loading = false;
        const initialData = [...state.customRuleArray];
        const finalData = initialData.filter(x => x.id !== action.id);
        draft.customRuleArray = finalData;
        break;
      case ACTION_TYPE_TICKET_SETTING.CLEAR_CUSTOM_RULE_MODAL:
        draft.loading = false;
        draft.customRuleArray = [
          {
            id: Math.random(),
            value: '',
          },
        ];
        draft.customRules = [];
        draft.customRuleArrayLength = undefined;
        break;
      case ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE:
        draft.loading = false;
        let array = [];
        state.customRuleArray.map(single => {
          if (single.value !== '') {
            if (!single.id.toString().includes('.')) {
              const a = {
                id: single.id,
                texts: single.value,
              };
              array.push(a);
            } else {
              const a = {
                texts: single.value,
              };
              array.push(a);
            }
          }
        });
        draft.customRules = {
          ticketCreateRules: array,
        };
        break;
      case ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_SUCCESS:
        draft.loading = false;
        draft.error = 'Successful';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_TICKET_SETTING.ADD_CUSTOM_RULE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.CLOSE_SNACKBAR_IN_TICKET_SETTING_PAGE:
        draft.openSnackBar = false;
        break;
      case ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST:
        break;
      case ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST_SUCCESS: {
        draft.autoTicketList = AutoTicketCreate.mapAutoTicketCreate(
          action.autoTicketList,
        );
        draft.nextCursor = action.cursor;
        break;
      }
      case ACTION_TYPE_TICKET_SETTING.FETCH_AUTO_TICKET_LIST_FAILURE:
        draft.error = action.error;
        break;
      case ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET:
        draft.loading = true;
        draft.autoTicketCreate = true;
        break;
      case ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET_SUCCESS:
        draft.autoTicketList = state.autoTicketList.concat(
          AutoTicketCreate.mapAutoTicketCreate([action.createdTicket]),
        );
        draft.autoTicketCreate = false;
        draft.loading = false;
        draft.error = 'auto ticket created successfully';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_TICKET_SETTING.CREATE_AUTO_TICKET_FAILURE:
        draft.autoTicketCreate = false;
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET:
        draft.loading = true;
        break;
      case ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET_SUCCESS: {
        const ticketList = state.autoTicketList || [];
        ticketList.forEach(ticket => {
          if (ticket.id === action.id) {
            ticket.modelName = action.updatedTicket.name;
            ticket.rules = action.updatedTicket.ticketCreateRule;
          }
        });
        draft.autoTicketList = ticketList;
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = 'auto ticket updated successfully';
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_TICKET_SETTING.UPDATE_AUTO_TICKET_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES:
        draft.loading = true;
        break;
      case ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES_SUCCESS:
        draft.loading = false;
        draft.ticketDetail = action.ticketDetail;
        break;
      case ACTION_TYPE_TICKET_SETTING.GET_AUTO_TICKET_CREATE_RULES_FAILURE:
        draft.loading = false;
        break;
      case ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE:
        draft.loading = true;
        break;
      case ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE_SUCCESS: {
        const ticketList = state.autoTicketList || [];
        draft.autoTicketList =
          ticketList &&
          ticketList.length > 0 &&
          ticketList.filter(single => single.id !== action.id);
        draft.loading = false;
        draft.error = 'auto ticket deleted successfully';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_TICKET_SETTING.DELETE_AUTO_TICKET_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE:
        draft.loading = false;
        break;
      case ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE_SUCCESS: {
        draft.loading = false;
        const list = state.autoTicketList || [];
        list.forEach(single => {
          if (single.id === action.id) {
            single.retrainModal = true;
          }
        });
        draft.autoTicketList = list;

        draft.error = 'Training Started';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      case ACTION_TYPE_TICKET_SETTING.RETRAIN_AUTO_TICKET_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.openSnackBar = true;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_TICKET_SETTING.TOGGLE_AUTO_TICKET_CREATE_RETRAIN: {
        draft.loading = false;
        const list = state.autoTicketList || [];
        list.forEach(single => {
          if (single.id === action.id) {
            single.retrainModal = false;
            single.lastTrained = action.lastTrained;
          }
        });
        draft.autoTicketList = list;

        draft.error = 'Training Completed';
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      }
      default:
        break;
    }
  });

export default ticketSettingReducer;

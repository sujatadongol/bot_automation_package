import produce from 'immer';
import { ACTION_TYPE_CREATE_API } from './constants';
import { FuncToReturnUpdatedList } from '../../utils/helper';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  apiData: {
    title: '',
    url: '',
    method: '',
  },

  headerData: [
    {
      id: Math.random(),
      value: {
        key: '',
        value: '',
      },
    },
  ],
  apiHeaders: [],

  parameterData: [
    {
      id: Math.random(),
      value: {
        key: '',
        type: '',
        value: '',
      },
    },
  ],
  apiParameters: [],
};

/* eslint-disable default-case, no-param-reassign */
const createApiReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_CREATE_API.API_REQUEST_MADE_IN_CREATE_API:
        draft.loading = true;
        break;
      case ACTION_TYPE_CREATE_API.CLOSE_SNACKBAR_IN_CREATE_API:
        draft.loading = false;
        draft.openSnackBar = false;
        break;

      case ACTION_TYPE_CREATE_API.CREATE_API:
        draft.loading = false;
        state.headerData.map(single => {
          if (single.value.key !== '' && single.value.value !== '') {
            state.apiHeaders.push(single.value);
          }
        });
        state.parameterData.map(single => {
          if (single.value.key !== '' && single.value.type !== '') {
            state.apiParameters.push(single.value);
          }
        });
        draft.apiHeaders = state.apiHeaders;
        draft.apiParameters = state.apiParameters;
        break;
      case ACTION_TYPE_CREATE_API.CREATE_API_SUCCESS:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.variant = 'success';
        break;
      case ACTION_TYPE_CREATE_API.CREATE_API_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_CREATE_API.HANDLE_CHANGE_API_DATA:
        draft.loading = false;
        draft.apiData[action.id] = action.value;
        break;

      case ACTION_TYPE_CREATE_API.ADD_HEADER:
        const a = [...state.headerData];
        const formData = {
          id: Math.random(),
          value: {
            key: '',
            value: '',
          },
        };
        a.push(formData);
        draft.headerData = a;
        break;
      case ACTION_TYPE_CREATE_API.REMOVE_HEADER:
        draft.loading = false;
        const initialData = [...state.headerData];
        const finalData = initialData.filter(x => x.id !== action.headerId);
        draft.headerData = finalData;
        break;
      case ACTION_TYPE_CREATE_API.HANDLE_CHANGE_IN_HEADER:
        draft.loading = false;
        let newHeaderAttribute = state.headerData.filter(
          single => single.id === action.headerId,
        )[0];
        newHeaderAttribute.value[action.key] = action.value;
        draft.headerData = FuncToReturnUpdatedList(
          state.headerData,
          action.headerId,
          newHeaderAttribute,
        );
        break;

      case ACTION_TYPE_CREATE_API.ADD_PARAMETER:
        const b = [...state.parameterData];
        const parameterFormData = {
          id: Math.random(),
          value: {
            key: '',
            value: '',
          },
        };
        b.push(parameterFormData);
        draft.parameterData = b;
        break;
      case ACTION_TYPE_CREATE_API.REMOVE_PARAMETER:
        draft.loading = false;
        const initialParameterData = [...state.parameterData];
        const finalParameterData = initialParameterData.filter(
          x => x.id !== action.parameterId,
        );
        draft.parameterData = finalParameterData;
        break;
      case ACTION_TYPE_CREATE_API.HANDLE_CHANGE_IN_PARAMETER:
        draft.loading = false;
        let newParameterAttribute = state.parameterData.filter(
          single => single.id === action.parameterId,
        )[0];
        newParameterAttribute.value[action.key] = action.value;
        draft.parameterData = FuncToReturnUpdatedList(
          state.parameterData,
          action.parameterId,
          newParameterAttribute,
        );
        break;

      case ACTION_TYPE_CREATE_API.CLEAR_API_DATA:
        draft.loading = false;
        draft.apiData = {};
        draft.headerData = [
          {
            id: Math.random(),
            value: {
              key: '',
              value: '',
            },
          },
        ];
        draft.apiHeaders = [];
        draft.parameterData = [
          {
            id: Math.random(),
            value: {
              key: '',
              type: '',
              value: '',
            },
          },
        ];
        draft.apiParameters = [];
        break;

      default:
        break;
    }
  });

export default createApiReducer;

import produce from 'immer';
import { ACTION_TYPE_UPDATE_API } from './constants';
import { FuncToReturnUpdatedList } from '../../utils/helper';

export const initialState = {
  loading: false,
  error: '',
  openSnackBar: false,
  variant: '',

  apiId: '',
  apiData: {
    title: '',
    url: '',
    method: '',
    serviceId: '',
  },
  headerData: [],
  apiHeaders: [],
  parameterData: [],
  apiParameters: [],
};

/* eslint-disable default-case, no-param-reassign */
const updateApiReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPE_UPDATE_API.API_REQUEST_MADE_IN_UPDATE_API:
        draft.loading = true;
        break;
      case ACTION_TYPE_UPDATE_API.CLOSE_SNACKBAR_IN_UPDATE_API:
        draft.loading = false;
        draft.openSnackBar = false;
        break;

      case ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_API_ID:
        draft.loading = false;
        draft.apiId = action.apiId;
        break;
      case ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID_SUCCESS:
        console.log(action, 'action at the fetch api by id');
        draft.loading = false;
        const c = state.apiData;
        c.title = action.apiDetail.thirdPartyApi.title;
        c.url = action.apiDetail.thirdPartyApi.url;
        c.method = action.apiDetail.thirdPartyApi.method;
        c.serviceId = action.apiDetail.thirdPartyApi.serviceId;

        const newHeaderData = state.headerData ? [...state.headerData] : [];
        const newParameterData = state.parameterData
          ? [...state.parameterData]
          : [];
        if (action.apiDetail.thirdPartyApi.apiHeaders) {
          action.apiDetail.thirdPartyApi.apiHeaders.map(single => {
            const singleHeader = {
              id: single.apiHeaderId,
              value: {
                key: single.key,
                value: single.value,
              },
            };
            newHeaderData.push(singleHeader);
          });
        } else {
          const singleHeader = {
            id: Math.random(),
            value: {
              key: '',
              value: '',
            },
          };
          newHeaderData.push(singleHeader);
        }

        if (action.apiDetail.thirdPartyApi.apiParameters) {
          action.apiDetail.thirdPartyApi.apiParameters.map(single => {
            const singleHeader = {
              id: single.apiParameterId,
              value: {
                key: single.key,
                type: single.type,
                value: single.value,
              },
            };
            newParameterData.push(singleHeader);
          });
        } else {
          const singleHeader = {
            id: Math.random(),
            value: {
              key: '',
              type: '',
              value: '',
            },
          };
          newParameterData.push(singleHeader);
        }

        draft.apiData = c;
        draft.headerData = newHeaderData;
        draft.parameterData = newParameterData;
        break;
      case ACTION_TYPE_UPDATE_API.FETCH_API_BY_ID_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;
      case ACTION_TYPE_UPDATE_API.UPDATE_API:
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
      case ACTION_TYPE_UPDATE_API.UPDATE_API_SUCCESS:
        draft.loading = false;
        break;
      case ACTION_TYPE_UPDATE_API.UPDATE_API_FAILURE:
        draft.loading = false;
        draft.openSnackBar = true;
        draft.error = action.error;
        draft.variant = 'error';
        break;

      case ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_API_DATA_IN_UPDATE_API:
        draft.loading = false;
        draft.apiData[action.id] = action.value;
        break;

      case ACTION_TYPE_UPDATE_API.ADD_HEADER_IN_UPDATE_API:
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
      case ACTION_TYPE_UPDATE_API.REMOVE_HEADER_IN_UPDATE_API:
        draft.loading = false;
        const initialData = [...state.headerData];
        const finalData = initialData.filter(x => x.id !== action.headerId);
        draft.headerData = finalData;
        break;
      case ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_IN_HEADER_IN_UPDATE_API:
        draft.loading = false;
        const newHeaderAttribute = state.headerData.filter(
          single => single.id === action.headerId,
        )[0];
        newHeaderAttribute.value[action.key] = action.value;
        draft.headerData = FuncToReturnUpdatedList(
          state.headerData,
          action.headerId,
          newHeaderAttribute,
        );
        break;

      case ACTION_TYPE_UPDATE_API.ADD_PARAMETER_IN_UPDATE_API:
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
      case ACTION_TYPE_UPDATE_API.REMOVE_PARAMETER_IN_UPDATE_API:
        draft.loading = false;
        const initialParameterData = [...state.parameterData];
        const finalParameterData = initialParameterData.filter(
          x => x.id !== action.parameterId,
        );
        draft.parameterData = finalParameterData;
        break;
      case ACTION_TYPE_UPDATE_API.HANDLE_CHANGE_IN_PARAMETER_IN_UPDATE_API:
        draft.loading = false;
        const newParameterAttribute = state.parameterData.filter(
          single => single.id === action.parameterId,
        )[0];
        newParameterAttribute.value[action.key] = action.value;
        draft.parameterData = FuncToReturnUpdatedList(
          state.parameterData,
          action.parameterId,
          newParameterAttribute,
        );
        break;

      case ACTION_TYPE_UPDATE_API.CLEAR_API_DATA_IN_UPDATE_API:
        draft.loading = false;
        draft.apiId = '';
        draft.apiData = {};
        draft.headerData = [];
        draft.apiHeaders = [];
        draft.parameterData = [];
        draft.apiParameters = [];
        break;

      default:
        break;
    }
  });

export default updateApiReducer;

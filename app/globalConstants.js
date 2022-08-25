import { CreateUUID } from './utils/helper';
import config from './utils/config';

export const PageSize = '20';

export const host = config.mqttURL;
export const port = 443;

export const BASE_API = config.baseURL;

const APIEndPoints = {
  // generate tokens
  GENERATE_TOKENS: `${BASE_API}/generate/tokens`,
  // get all bots
  GET_ALL_BOTS: `${BASE_API}/bot/setting`,

  // get all api based on sp account
  GET_ALL_APIS: `${BASE_API}/thirdparty/api`,
  FETCH_PROJECT_IN_NAVBAR: `${BASE_API}/v2/projects/project`,

  // services
  FETCH_CREATED_SERVICE_LIST: `${BASE_API}/service/created`,

  // bot configuration
  FETCH_TRY_OUT_RESPONSE: `${BASE_API}/bot/query/`,
  FETCH_SYSTEM_ENTITY: `${BASE_API}/bot/`,
  FETCH_CUSTOM_ENTITY: `${BASE_API}/bot/`,
  FETCH_ENTITY: `${BASE_API}/bot/entity/service`,
  FETCH_ENTITY_BY_ID: `${BASE_API}/bot/entity`,
  CREATE_ENTITY: `${BASE_API}/bot/entity`,
  FETCH_INTENT: `${BASE_API}/bot/`,
  FETCH_INTENT_BY_ID: `${BASE_API}/bot/intent`,
  CREATE_INTENT: `${BASE_API}/bot/intent`,
  UPDATE_INTENT: `${BASE_API}/bot/intent/`,
  RETRAIN_INTENT: `${BASE_API}/bot/train`,
  ADD_TRAINING_PHRASE: `${BASE_API}/bot/intent/phrase/`,
  REMOVE_TRAINING_PHRASE: `${BASE_API}/bot/intent/phrase/`,
  ADD_BOT_RESPONSE: `${BASE_API}/bot/response/intent/`,
  REMOVE_BOT_RESPONSE: `${BASE_API}/bot/response/intent/`,
  FETCH_BOT_VERSION: `${BASE_API}/bot/versions`,

  // intent import
  SAVE_MULTIPLE_INTENTS: `${BASE_API}/bot/intents`,
  DISCARD_MULTIPLE_INTENTS: `${BASE_API}/bot/intents/`,
  GET_IMPORTED_INTENTS: `${BASE_API}/bot/intents/`,
  GET_IMPORTED_INTENTS_COUNT: `${BASE_API}/bot/import/intent/count/`,
  BOT_IMPORT: `${BASE_API}/bot/import`,
  GET_INTENTS_BY_SOURCE: `${BASE_API}/bot/intents/source/`,

  // ticket setting container
  FETCH_BOT_LIST: `${BASE_API}/bot/setting/service/`,
  FETCH_BOT_SETTING: `${BASE_API}/bot/setting/`,
  PUBLISH_BOT_VERSION: `${BASE_API}/bot/publish`,
  CHANGE_BOT_SETTING: `${BASE_API}/bot/setting/status/`,
  SAVE_BOT_SETTING: `${BASE_API}/bot/setting`,
  UPDATE_BOT_SETTING: `${BASE_API}/bot/setting/`,

  OPTIMIZE_BOT: `${BASE_API}/bot/optimize/`,
  ADD_PARAPHRASE: `${BASE_API}/bot/paraphrase`,
  GET_PARAPHRASE_BY_ID: `${BASE_API}/bot/paraphrase/`,
  UPDATE_PARAPHRASE: `${BASE_API}/bot/paraphrase`,

  FETCH_MISLEADING_INTENT: `${BASE_API}/bot/misleading`,

  // api
  FETCH_API: `${BASE_API}/thirdparty/api/service/`,
  CREATE_API: `${BASE_API}/thirdparty/api`,
  FETCH_API_BY_ID: `${BASE_API}/thirdparty/api/`,
  UPDATE_API: `${BASE_API}/thirdparty/api/`,
  DELETE_API: `${BASE_API}/thirdparty/api/`,
  // settings
  FETCH_ALL_SETTINGS: `${BASE_API}/service-provider/settings`,
  FETCH_TIME_ZONE: `${BASE_API}/timezones`,
  FETCH_LANGUAGES: `${BASE_API}/languages`,
  UPDATE_SETTINGS: `${BASE_API}/service-provider/settings`,

  // open services
  FETCH_ORDERS: `${BASE_API}/service/orders`,
  FETCH_ORDER_BY_ID: `${BASE_API}/service/order?orderId=`,
  FILTER_ORDER: `${BASE_API}/service/orders?service=`,
  ACCEPT_ORDER: `${BASE_API}/service/order/accept`,
  ASSIGN_EMPLOYEE: `${BASE_API}/service/assign`,
  REMOVE_ASSIGNED_EMPLOYEE: `${BASE_API}/service/unassign`,

  ENABLE_BOT_IN_TICKET: `${BASE_API}/ticket/`,
  DISABLE_BOT_IN_TICKET: `${BASE_API}/ticket/`,

  ADD_TICKET_ATTACHMENT: `${BASE_API}/ticket/attachments`,
  REMOVE_TICKET_ATTACHMENT: `${BASE_API}/ticket/attachments`,

  EXPORT_TICKET_REPORT: `${BASE_API}/ticket/report/`,

  // knowledge graph
  FETCH_KNOWLEDGE_LIST: `${BASE_API}/kgraph/knowledge/service/`,
  SEARCH_SIMILAR_KNOWLEDGE: `${BASE_API}/kgraph/similar/knowledge/`,
  SEARCH_EXISTING_KNOWLEDGE: `${BASE_API}/kgraph/knowledges/`,
  FETCH_LINKED_LIST: `${BASE_API}/kgarph/links/`,
  FETCH_KNOWLEDGE_BY_ID: `${BASE_API}/kgraph/knowledge/`,
  ADD_KNOWLEDGE: `${BASE_API}/kgraph/knowledge`,
  UPDATE_KNOWLEDGE: `${BASE_API}/kgraph/knowledge/`,
  DELETE_KNOWLEDGE: `${BASE_API}/kgraph/knowledge/`,
  CREATE_AND_LINK_KNOWLEDGE: `${BASE_API}/kgraph/knowledge/link`,
  LINK_KNOWLEDGE: `${BASE_API}/kgraph/link`,
  REMOVE_LINKED_VERTEX: `${BASE_API}/kgraph/link?fromId=`,
  REMOVE_ATTACHMENT: `${BASE_API}/kgraph/attribute/`,

  // auto ticket create
  FETCH_AUTO_TICKET_CREATE_LIST: `${BASE_API}/v1/ticket-setting/model`,
  AUTO_TICKET_CREATE: `${BASE_API}/v1/ticket-setting/model`,
  UPDATE_TICKET_CREATE: `${BASE_API}/v1/ticket-setting/model/`,
  GET_AUTO_TICKET_CREATE_RULES: `${BASE_API}/v1/ticket-setting/model/`,
  DELETE_AUTO_TICKET_CREATE: `${BASE_API}/v1/ticket-setting/model/`,
  RETRAIN_AUTO_TICKET_CREATE: `${BASE_API}/v1/ticket-setting/model/`,

  // ticket setting
  FETCH_TICKET_SETTING: `${BASE_API}/ticket/setting/`,
  ENABLE_AUTO_TICKET_CREATE: `${BASE_API}/ticket/setting/autocreate/`,
  DISABLE_AUTO_TICKET_CREATE: `${BASE_API}/ticket/setting/autocreate/`,

  RETRAIN_CUSTOM_RULE: `${BASE_API}/ticket/setting/train/`,
  FETCH_CUSTOM_RULE: `${BASE_API}/ticket/setting/rules/`,
  ADD_CUSTOM_RULE: `${BASE_API}/ticket/setting/rules/`,

  // automated replies
  GET_AUTOMATED_REPLY: `${BASE_API}/automatedReplies/`,
  GET_AUTOMATED_REPLY_BY_ID: `${BASE_API}/automatedReply/`,
  CREATE_AUTOMATED_REPLY: `${BASE_API}/automatedReply`,
  UPDATE_AUTOMATED_REPLY_STATUS: `${BASE_API}/automatedReply/status`,
  GET_SIMILAR_POSSIBLE_SOLUTIONS: `${BASE_API}/automatedReply/possibleSolution/`,
};
export default APIEndPoints;

export const mapBoxAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
export const accessToken =
  'access_token=pk.eyJ1Ijoic3VqYXRhMTIzIiwiYSI6ImNrOW10ZWx3NjBrNDEzZnBkeDBxY3BraTIifQ.846BLIZOTwTqhQ0uVof-7Q';

export const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
};
export const APIHeadersForMultipartFormData = {
  Accept: 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
  // mimeType:'multipart/form-data'
};

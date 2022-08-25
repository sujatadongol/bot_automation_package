Object.defineProperty(exports, '__esModule', {
  value: true
});

require('@babel/polyfill');

require('react');

require('react-dom');

require('react-redux');

var connectedReactRouter = require('connected-react-router');

var FontFaceObserver = require('fontfaceobserver');

var history = require('utils/history');

require('sanitize.css/sanitize.css');

require('@anydone/treeleaf_js_utils');

require('containers/App');

var BotList = require('containers/Bot/BotList');

var redux = require('redux');

var createSagaMiddleware = require('redux-saga');

var reduxLogger = require('redux-logger');

var globalReducer = require('containers/App/reducer');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var FontFaceObserver__default = /*#__PURE__*/_interopDefaultLegacy(FontFaceObserver);

var history__default = /*#__PURE__*/_interopDefaultLegacy(history);

var BotList__default = /*#__PURE__*/_interopDefaultLegacy(BotList);

var createSagaMiddleware__default = /*#__PURE__*/_interopDefaultLegacy(createSagaMiddleware);

var globalReducer__default = /*#__PURE__*/_interopDefaultLegacy(globalReducer);

var config = {
  env: process.env.NODE_ENV || 'production',
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.anydone.com',
  mqttURL: process.env.REACT_APP_MQTT_BASE_URL || 'ws.anydone.com',
  projectEnv: process.env.PROJECT_ENV || 'production',
  endpoints: {},
  subDomain: process.env.SUBDOMAIN || 'anydone.com',
  deskUrl: process.env.DESK_URL || 'https://desk.anydone.com',
  inboxUrl: process.env.INBOX_URL || 'https://inbox.anydone.com'
};
console.log({
  config: config
}, '.......');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */


function createReducer() {
  var injectedReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rootReducer = redux.combineReducers(_objectSpread2({
    global: globalReducer__default["default"],
    router: connectedReactRouter.connectRouter(history__default["default"])
  }, injectedReducers));
  return rootReducer;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments.length > 1 ? arguments[1] : undefined;
  var composeEnhancers = redux.compose;
  var reduxSagaMonitorOptions = {}; // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them

  /* istanbul ignore next */

  if (process.env.NODE_ENV !== 'production' && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}); // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x

    if (window.__SAGA_MONITOR_EXTENSION__) _readOnlyError("reduxSagaMonitorOptions");
    /* eslint-enable */
  }

  var loggerMiddleware = reduxLogger.createLogger();
  var sagaMiddleware = createSagaMiddleware__default["default"](reduxSagaMonitorOptions); // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  var middlewares = [sagaMiddleware, connectedReactRouter.routerMiddleware(history)];

  if (process.env.PROJECT_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  var enhancers = [redux.applyMiddleware.apply(void 0, middlewares)];
  var store = redux.createStore(createReducer(), initialState, composeEnhancers.apply(void 0, enhancers)); // Extensions

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry

  store.injectedSagas = {}; // Saga registry
  // Make reducers hot reloadable, see http://mxs.is/googmo

  /* istanbul ignore next */
  //   if (module.hot) {
  //     module.hot.accept('./reducers', () => {
  //       store.replaceReducer(createReducer(store.injectedReducers));
  //     });
  //   }

  return store;
}
/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)


var openSansObserver = new FontFaceObserver__default["default"]('Open Sans', {}); // When Open Sans is loaded, add a font-family using Open Sans to the body

openSansObserver.load().then(function () {
  document.body.classList.add('fontLoaded');
}); // Create redux store with history

var initialState = {};
configureStore(initialState, history__default["default"]);
document.getElementById('app'); // const { deskUrl, inboxUrl } = config;
//   // Hot reloadable React components and translation json files
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept(['./i18n', 'containers/App'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     render(translationMessages);
//   });
// }
// Chunked polyfill for browsers without Intl support
// if (!window.Intl) {
//   new Promise(resolve => {
//     resolve(import('intl'));
//   })
//     .then(() =>
//       Promise.all([
//         import('intl/locale-data/jsonp/en.js'),
//         import('intl/locale-data/jsonp/de.js'),
//       ]),
//     ) // eslint-disable-line prettier/prettier
//     .then(() => render(translationMessages))
//     .catch(err => {
//       throw err;
//     });
// } else {
//   render(translationMessages);
// }
// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }

Object.defineProperty(exports, 'BotList', {
  enumerable: true,
  get: function () {
    return BotList__default["default"];
  }
});
//# sourceMappingURL=index.js.map

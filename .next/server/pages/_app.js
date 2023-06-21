module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/layouts/DefaultLayout.jsx":
/*!**********************************************!*\
  !*** ./components/layouts/DefaultLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Head */ "./components/layouts/modules/Head.jsx");
var _jsxFileName = "D:\\Mushrooms\\admin-web\\components\\layouts\\DefaultLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DefaultLayout = ({
  children
}) => __jsx("div", {
  className: "layout--default",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(_modules_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), children, __jsx("div", {
  id: "loader-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "loader-section section-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "loader-section section-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/modules/Head.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/modules/Head.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Mushrooms\\admin-web\\components\\layouts\\modules\\Head.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyleSheets = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, "Unnati-Udhyogam-Admin"), __jsx("link", {
  rel: "shortcut icon",
  href: "/img/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/img/favicon.png",
  sizes: "32x32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/img/favicon.png",
  sizes: "192x192",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  href: "/img/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "IE=edge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "format-detection",
  content: "telephone=no",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "author",
  content: "nouthemes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "keywords",
  content: "Nursing",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "description",
  content: "Nursing",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://checkout.razorpay.com/v1/checkout.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/bootstrap.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
  integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (StyleSheets);

/***/ }),

/***/ "./helper/auth.js":
/*!************************!*\
  !*** ./helper/auth.js ***!
  \************************/
/*! exports provided: getCurrentUser, getQuery, jsonToQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToQuery", function() { return jsonToQuery; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentUser() {
  try {
    let local = localStorage.getItem('persist:MushroomAdmin');
    local = JSON.parse(local);
    if (local.auth) {
      let auth = JSON.parse(local.auth);
      if (auth && auth.isLoggedIn) {
        return auth.auth;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (ex) {
    return null;
  }
}
function getQuery() {
  let urlQuery = false ? undefined : null;
  let query = {};
  if (urlQuery) {
    if (urlQuery.includes('&')) {
      let params = urlQuery.split('&');
      for (let i = 0; i < params.length; i++) {
        query[params[i].split('=')[0]] = params[i].split('=')[1];
      }
    } else {
      query[urlQuery.split('=')[0]] = urlQuery.split('=')[1];
    }
  }
  return query;
}
function jsonToQuery(json) {
  let query = '?';
  query += Object.keys(json).map(key => {
    return `${key}=${json[key]}`;
  }).join('&');
  return query;
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric; /**
                                                          * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
                                                          * This allows for keeping state between navigation, custom error handling, injecting additional data.
                                                          */
async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}
class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }
  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps,
    // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }
}
exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;
if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal
function Container(p) {
  if (true) warnContainer();
  return p.children;
}
function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },
    get pathname() {
      if (true) warnUrl();
      return pathname;
    },
    get asPath() {
      if (true) warnUrl();
      return asPath;
    },
    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-component-countdown-timer/lib/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/react-component-countdown-timer/lib/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout.jsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! node_modules/react-component-countdown-timer/lib/styles.css */ "./node_modules/react-component-countdown-timer/lib/styles.css");
/* harmony import */ var node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\Mushrooms\\admin-web\\pages\\_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistStore"])(props.store);
  }
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    const getLayout = Component.getLayout || (page => __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: page,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 59
      }
    }));
    return getLayout(__jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__["PersistGate"], {
      loading: __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 30
        }
      })),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    })))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_store__WEBPACK_IMPORTED_MODULE_7__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp)));

/***/ }),

/***/ "./repositories/AdminMenuRepository.js":
/*!*********************************************!*\
  !*** ./repositories/AdminMenuRepository.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _helper_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/auth */ "./helper/auth.js");



let user = Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["getCurrentUser"])();
class AdminMenuRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async adminMenu() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminMenu`).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getActiveMenuCount() {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminMenu/count`;
    url += `?status=Y`;
    if (user && user.type != 'SA') url += `&posted_id=${user.id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getInactiveMenuCount() {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminMenu/count`;
    url += `?status=N`;
    if (user && user.type != 'SA') url += `&posted_id=${user.id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async mapdata(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminMenu/map-count`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }

  //http://192.168.1.220:4567/api/v1/adminMenu/get/count?id=6475c66da5a4b1ece1da303b
}

/* harmony default export */ __webpack_exports__["default"] = (new AdminMenuRepository());

/***/ }),

/***/ "./repositories/AuthRepository.js":
/*!****************************************!*\
  !*** ./repositories/AuthRepository.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");

class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async adminLogin(payload) {
    let url = '';
    if (payload.type === "SA") {
      url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/login`;
    } else {
      url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operatorLogin`;
    }
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, payload).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getAdmin() {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async changePassword(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/changePassword`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/OperatorRepository.js":
/*!********************************************!*\
  !*** ./repositories/OperatorRepository.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _helper_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/auth */ "./helper/auth.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async getOperator(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=Y`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getInactiveOperatordetails(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=N`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async saveOperator(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async editOperator(id, formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/update/${id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async updateStatus(data) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/updateStatus`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async changePosition(data) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/updatePosition`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async changePassword(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/changePassword`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/*! exports provided: baseurl, file, apiUrl, fileUpload, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// export const baseurl = "https://medadmin.questioncloud.in/api";
//export const baseurl = "http://dev.jobslink.in/api/api/v1";
//export const baseurl = "https://admin.jobslink.in/api/api/v1";

const baseurl = "http://192.168.1.170:5003/api"; //JP
//export const baseurl = "http://192.168.1.220:4567/api/v1";//Lo

//export const baseurl = "http://192.168.1.165:4567/api/v1";
//export const baseurl = "http://localhost:4567/api/v1";
const file = "http://localhost:4567/api/v1/user";
const apiUrl = baseurl;
const fileUpload = file;
let customHeaders = {
  Accept: 'application/json'
};
let local = false ? undefined : null;
if (local && local.usertoken) {
  customHeaders['x-auth-token'] = `${local.usertoken}`;
}
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: customHeaders
}));

/***/ }),

/***/ "./repositories/RoomRepository.js":
/*!****************************************!*\
  !*** ./repositories/RoomRepository.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _helper_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/auth */ "./helper/auth.js");


class RoomRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async getRoom(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=Y`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getRoomById(id) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/${id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getInactiveRoom(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=N`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async saveRoom(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async editRoom(categoryId, formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/update/${categoryId}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async updateStatus(data) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/room/updateStatus`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new RoomRepository());

/***/ }),

/***/ "./repositories/StageRepository.js":
/*!*****************************************!*\
  !*** ./repositories/StageRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _helper_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/auth */ "./helper/auth.js");


class StageRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async getStage(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=Y`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getStageById(id) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/${id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getInactiveStage(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=N`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async saveStage(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async editStage(categoryId, formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/update/${categoryId}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async updateStatus(data) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/stage/updateStatus`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new StageRepository());

/***/ }),

/***/ "./repositories/UnitRepository.js":
/*!****************************************!*\
  !*** ./repositories/UnitRepository.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _helper_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/auth */ "./helper/auth.js");


class UnitRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async getUnit(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=Y`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getUnitById(id) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/${id}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async getInactiveUnit(payload) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/`;
    url += Object(_helper_auth__WEBPACK_IMPORTED_MODULE_1__["jsonToQuery"])(payload);
    url += `&status=N`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async saveUnit(formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async editUnit(categoryId, formdata) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/update/${categoryId}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, formdata).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
  async updateStatus(data) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/unit/updateStatus`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
    return reponse;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new UnitRepository());

/***/ }),

/***/ "./store/Room/action.js":
/*!******************************!*\
  !*** ./store/Room/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getAllRoom, getAllRoomSuccess, getInactiveRoom, getInactiveRoomSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRoom", function() { return getAllRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRoomSuccess", function() { return getAllRoomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveRoom", function() { return getInactiveRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveRoomSuccess", function() { return getInactiveRoomSuccess; });
const actionTypes = {
  GET_ALL_ROOM_REQUEST: 'GET_ALL_ROOM_REQUEST',
  GET_ALL_ROOM_SUCCESS: 'GET_ALL_ROOM_SUCCESS',
  GET_INACTIVE_ROOM_REQUEST: 'GET_INACTIVE_ROOM_REQUEST',
  GET_INACTIVE_ROOM_SUCCESS: 'GET_INACTIVE_ROOM_SUCCESS'
};
function getAllRoom(payload) {
  return {
    type: actionTypes.GET_ALL_ROOM_REQUEST,
    payload
  };
}
function getAllRoomSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_ROOM_SUCCESS,
    payload
  };
}
function getInactiveRoom(payload) {
  return {
    type: actionTypes.GET_INACTIVE_ROOM_REQUEST,
    payload
  };
}
function getInactiveRoomSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_ROOM_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/Room/reducer.js":
/*!*******************************!*\
  !*** ./store/Room/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/Room/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  allRoom: [],
  activeTotalCount: 0,
  activeCount: 0,
  inactiveRoom: [],
  inactiveTotalCount: 0,
  inactiveCount: 0
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_ROOM_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allRoom: action.payload && action.payload.data ? action.payload.data : [],
        activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        activeCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_ROOM_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveRoom: action.payload && action.payload.data ? action.payload.data : [],
        inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        inactiveCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/Room/saga.js":
/*!****************************!*\
  !*** ./store/Room/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/Room/action.js");
/* harmony import */ var _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/RoomRepository */ "./repositories/RoomRepository.js");



function* getAllRoomSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getRoom, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllRoomSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllRoomSuccess"])(null));
  }
}
function* getInactiveRoomSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveRoom, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveRoomSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveRoomSuccess"])(null));
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_ROOM_REQUEST, getAllRoomSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_ROOM_REQUEST, getInactiveRoomSaga)]);
}

/***/ }),

/***/ "./store/Stage/action.js":
/*!*******************************!*\
  !*** ./store/Stage/action.js ***!
  \*******************************/
/*! exports provided: actionTypes, getAllStage, getAllStageSuccess, getInactiveStage, getInactiveStageSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStage", function() { return getAllStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStageSuccess", function() { return getAllStageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveStage", function() { return getInactiveStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveStageSuccess", function() { return getInactiveStageSuccess; });
const actionTypes = {
  GET_ALL_STAGE_REQUEST: 'GET_ALL_STAGE_REQUEST',
  GET_ALL_STAGE_SUCCESS: 'GET_ALL_STAGE_SUCCESS',
  GET_INACTIVE_STAGE_REQUEST: 'GET_INACTIVE_STAGE_REQUEST',
  GET_INACTIVE_STAGE_SUCCESS: 'GET_INACTIVE_STAGE_SUCCESS'
};
function getAllStage(payload) {
  return {
    type: actionTypes.GET_ALL_STAGE_REQUEST,
    payload
  };
}
function getAllStageSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_STAGE_SUCCESS,
    payload
  };
}
function getInactiveStage(payload) {
  return {
    type: actionTypes.GET_INACTIVE_STAGE_REQUEST,
    payload
  };
}
function getInactiveStageSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_STAGE_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/Stage/reducer.js":
/*!********************************!*\
  !*** ./store/Stage/reducer.js ***!
  \********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/Stage/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  allStage: [],
  activeTotalCount: 0,
  activeCount: 0,
  inactiveStage: [],
  inactiveTotalCount: 0,
  inactiveCount: 0
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_STAGE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allStage: action.payload && action.payload.rows ? action.payload.rows : [],
        activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        activeCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_STAGE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveStage: action.payload && action.payload.rows ? action.payload.rows : [],
        inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        inactiveCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/Stage/saga.js":
/*!*****************************!*\
  !*** ./store/Stage/saga.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/Stage/action.js");
/* harmony import */ var _repositories_StageRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/StageRepository */ "./repositories/StageRepository.js");



function* getAllStageSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_StageRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getStage, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllStageSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllStageSuccess"])(null));
  }
}
function* getInactiveStageSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_StageRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveStage, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveStageSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveStageSuccess"])(null));
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_STAGE_REQUEST, getAllStageSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_STAGE_REQUEST, getInactiveStageSaga)]);
}

/***/ }),

/***/ "./store/Unit/action.js":
/*!******************************!*\
  !*** ./store/Unit/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getAllUnit, getAllUnitSuccess, getInactiveUnit, getInactiveUnitSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUnit", function() { return getAllUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUnitSuccess", function() { return getAllUnitSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveUnit", function() { return getInactiveUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveUnitSuccess", function() { return getInactiveUnitSuccess; });
const actionTypes = {
  GET_ALL_UNIT_REQUEST: 'GET_ALL_UNIT_REQUEST',
  GET_ALL_UNIT_SUCCESS: 'GET_ALL_UNIT_SUCCESS',
  GET_INACTIVE_UNIT_REQUEST: 'GET_INACTIVE_UNIT_REQUEST',
  GET_INACTIVE_UNIT_SUCCESS: 'GET_INACTIVE_UNIT_SUCCESS'
};
function getAllUnit(payload) {
  return {
    type: actionTypes.GET_ALL_UNIT_REQUEST,
    payload
  };
}
function getAllUnitSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_UNIT_SUCCESS,
    payload
  };
}
function getInactiveUnit(payload) {
  return {
    type: actionTypes.GET_INACTIVE_UNIT_REQUEST,
    payload
  };
}
function getInactiveUnitSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_UNIT_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/Unit/reducer.js":
/*!*******************************!*\
  !*** ./store/Unit/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/Unit/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  allUnit: [],
  activeTotalCount: 0,
  activeCount: 0,
  inactiveUnit: [],
  inactiveTotalCount: 0,
  inactiveCount: 0
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_UNIT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allUnit: action.payload && action.payload.data ? action.payload.data : [],
        activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        activeCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_UNIT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveUnit: action.payload && action.payload.data ? action.payload.data : [],
        inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        inactiveCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/Unit/saga.js":
/*!****************************!*\
  !*** ./store/Unit/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/Unit/action.js");
/* harmony import */ var _repositories_UnitRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/UnitRepository */ "./repositories/UnitRepository.js");



function* getAllUnitSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_UnitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getUnit, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllUnitSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllUnitSuccess"])(null));
  }
}
function* getInactiveUnitSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_UnitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveUnit, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveUnitSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveUnitSuccess"])(null));
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_UNIT_REQUEST, getAllUnitSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_UNIT_REQUEST, getInactiveUnitSaga)]);
}

/***/ }),

/***/ "./store/adminMenu/action.js":
/*!***********************************!*\
  !*** ./store/adminMenu/action.js ***!
  \***********************************/
/*! exports provided: actionTypes, getAdminUserMenu, getAdminUserMenuSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUserMenu", function() { return getAdminUserMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUserMenuSuccess", function() { return getAdminUserMenuSuccess; });
const actionTypes = {
  GET_ADMIN_USER_MENU_REQUEST: 'GET_ADMIN_USER_MENU_REQUEST',
  GET_ADMIN_USER_MENU_SUCCESS: 'GET_ADMIN_USER_MENU_SUCCESS'
};
function getAdminUserMenu() {
  return {
    type: actionTypes.GET_ADMIN_USER_MENU_REQUEST
  };
}
function getAdminUserMenuSuccess(payload) {
  return {
    type: actionTypes.GET_ADMIN_USER_MENU_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/adminMenu/reducer.js":
/*!************************************!*\
  !*** ./store/adminMenu/reducer.js ***!
  \************************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/adminMenu/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  userMenu: []
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ADMIN_USER_MENU_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        userMenu: action.payload && action.payload.data.data && action.payload.data.data.length > 0 ? action.payload.data.data : []
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/adminMenu/saga.js":
/*!*********************************!*\
  !*** ./store/adminMenu/saga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/adminMenu/action.js");
/* harmony import */ var _repositories_AdminMenuRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/AdminMenuRepository */ "./repositories/AdminMenuRepository.js");



function* getAdminUserMenuSaga() {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_AdminMenuRepository__WEBPACK_IMPORTED_MODULE_2__["default"].adminMenu);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminUserMenuSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminUserMenuSuccess"])(null));
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ADMIN_USER_MENU_REQUEST, getAdminUserMenuSaga)]);
}

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, logout, logoutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccess", function() { return logoutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};
function login(payload) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload
  };
}
function loginSuccess(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload
  };
}
function logout() {
  return {
    type: actionTypes.LOGOUT_REQUEST
  };
}
function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  isLoggedIn: false,
  auth: {},
  token: ''
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        auth: action.payload.auth,
        token: action.payload.token,
        isLoggedIn: true
      });
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        auth: {},
        token: '',
        isLoggedIn: false
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/AuthRepository */ "./repositories/AuthRepository.js");



function* loginSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_2__["default"].login, payload);
    if (data && data.statusCode === 200 && data.authorization) {
      let res = data.data;
      res.authorization = data.authorization;
      res.isLoggedIn = true;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"])(res));
    } else if (data && data.statusCode === 400) {} else if (data && data.statusCode === 404) {} else {}
  } catch (err) {
    // console.log(err);
  }
}
function* logoutSaga() {
  try {
    localStorage.removeItem('usertoken');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["logoutSuccess"])());
  } catch (err) {
    // console.log(err);
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGIN_REQUEST, loginSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGOUT_REQUEST, logoutSaga)]);
}

/***/ }),

/***/ "./store/operator/action.js":
/*!**********************************!*\
  !*** ./store/operator/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, getAllOperator, getAllOperatorSuccess, getInactiveOperator, getInactiveOperatorSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOperator", function() { return getAllOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOperatorSuccess", function() { return getAllOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveOperator", function() { return getInactiveOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveOperatorSuccess", function() { return getInactiveOperatorSuccess; });
const actionTypes = {
  GET_ALL_OPERATOR_REQUEST: 'GET_ALL_OPERATOR_REQUEST',
  GET_ALL_OPERATOR_SUCCESS: 'GET_ALL_OPERATOR_SUCCESS',
  GET_INACTIVE_OPERATOR_REQUEST: 'GET_INACTIVE_OPERATOR_REQUEST',
  GET_INACTIVE_OPERATOR_SUCCESS: 'GET_INACTIVE_OPERATOR_SUCCESS'
};
function getAllOperator(payload) {
  return {
    type: actionTypes.GET_ALL_OPERATOR_REQUEST,
    payload
  };
}
function getAllOperatorSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_OPERATOR_SUCCESS,
    payload
  };
}
function getInactiveOperator(payload) {
  return {
    type: actionTypes.GET_INACTIVE_OPERATOR_REQUEST,
    payload
  };
}
function getInactiveOperatorSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_OPERATOR_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/operator/reducer.js":
/*!***********************************!*\
  !*** ./store/operator/reducer.js ***!
  \***********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/operator/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initState = {
  allOperator: [],
  activeTotalCount: 0,
  activeCount: 0,
  inactiveOperator: [],
  inactiveTotalCount: 0,
  inactiveCount: 0
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_OPERATOR_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allOperator: action.payload && action.payload.data ? action.payload.data : [],
        activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        activeCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_OPERATOR_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveOperator: action.payload && action.payload.data ? action.payload.data : [],
        inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
        inactiveCount: action.payload && action.payload.count ? action.payload.count : 0
      });
    default:
      return state;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/operator/saga.js":
/*!********************************!*\
  !*** ./store/operator/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/operator/action.js");
/* harmony import */ var _repositories_OperatorRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/OperatorRepository */ "./repositories/OperatorRepository.js");



function* getAllOperatorSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_OperatorRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getOperator, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllOperatorSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllOperatorSuccess"])(null));
  }
}
function* getInactiveOperatorSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_OperatorRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveOperator, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveOperatorSuccess"])(data.data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveOperatorSuccess"])(null));
  }
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_OPERATOR_REQUEST, getAllOperatorSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_OPERATOR_REQUEST, getInactiveOperatorSaga)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _adminMenu_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminMenu/reducer */ "./store/adminMenu/reducer.js");
/* harmony import */ var _Room_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Room/reducer */ "./store/Room/reducer.js");
/* harmony import */ var _Stage_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stage/reducer */ "./store/Stage/reducer.js");
/* harmony import */ var _Unit_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Unit/reducer */ "./store/Unit/reducer.js");
/* harmony import */ var _operator_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operator/reducer */ "./store/operator/reducer.js");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  adminMenu: _adminMenu_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  operator: _operator_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  Room: _Room_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  Stage: _Stage_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  Unit: _Unit_reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _adminMenu_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminMenu/saga */ "./store/adminMenu/saga.js");
/* harmony import */ var _Unit_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unit/saga */ "./store/Unit/saga.js");
/* harmony import */ var _Room_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Room/saga */ "./store/Room/saga.js");
/* harmony import */ var _Stage_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stage/saga */ "./store/Stage/saga.js");
/* harmony import */ var _operator_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operator/saga */ "./store/operator/saga.js");







function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_auth_saga__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_Room_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_Unit_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_adminMenu_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_Stage_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_operator_saga__WEBPACK_IMPORTED_MODULE_6__["default"])()]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};
const persistConfig = {
  key: 'MushroomAdmin',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()),
  whitelist: ['auth']
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0TGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvbW9kdWxlcy9IZWFkLmpzeCIsIndlYnBhY2s6Ly8vLi9oZWxwZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvQWRtaW5NZW51UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvQXV0aFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVwb3NpdG9yaWVzL09wZXJhdG9yUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvUm9vbVJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVwb3NpdG9yaWVzL1N0YWdlUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvVW5pdFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvUm9vbS9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvUm9vbS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1Jvb20vc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9TdGFnZS9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvU3RhZ2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9TdGFnZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1VuaXQvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1VuaXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9Vbml0L3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWRtaW5NZW51L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hZG1pbk1lbnUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hZG1pbk1lbnUvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL29wZXJhdG9yL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9vcGVyYXRvci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL29wZXJhdG9yL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcm9vdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsIlN0eWxlU2hlZXRzIiwiZ2V0Q3VycmVudFVzZXIiLCJsb2NhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhdXRoIiwiaXNMb2dnZWRJbiIsImV4IiwiZ2V0UXVlcnkiLCJ1cmxRdWVyeSIsIndpbmRvdyIsInF1ZXJ5IiwiaW5jbHVkZXMiLCJwYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJqc29uVG9RdWVyeSIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsImFwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsIkFwcCIsIlJlYWN0IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsIl9lcnJvckluZm8iLCJyZW5kZXIiLCJyb3V0ZXIiLCJfX05fU1NHIiwiX19OX1NTUCIsInByb3BzIiwidXJsIiwiY3JlYXRlVXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiY29uc29sZSIsIndhcm4iLCJDb250YWluZXIiLCJwIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwiY29uc3RydWN0b3IiLCJwZXJzaXN0b3IiLCJwZXJzaXN0U3RvcmUiLCJzdG9yZSIsImdldExheW91dCIsInBhZ2UiLCJ3aXRoUmVkdXgiLCJjcmVhdGVTdG9yZSIsIndpdGhSZWR1eFNhZ2EiLCJ1c2VyIiwiQWRtaW5NZW51UmVwb3NpdG9yeSIsImNhbGxiYWNrIiwiYWRtaW5NZW51IiwicmVwb25zZSIsIlJlcG9zaXRvcnkiLCJnZXQiLCJhcGlVcmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJnZXRBY3RpdmVNZW51Q291bnQiLCJ0eXBlIiwiaWQiLCJnZXRJbmFjdGl2ZU1lbnVDb3VudCIsIm1hcGRhdGEiLCJwYXlsb2FkIiwiQXV0aFJlcG9zaXRvcnkiLCJhZG1pbkxvZ2luIiwicG9zdCIsImdldEFkbWluIiwiY2hhbmdlUGFzc3dvcmQiLCJmb3JtZGF0YSIsInB1dCIsImdldE9wZXJhdG9yIiwiZ2V0SW5hY3RpdmVPcGVyYXRvcmRldGFpbHMiLCJzYXZlT3BlcmF0b3IiLCJlZGl0T3BlcmF0b3IiLCJ1cGRhdGVTdGF0dXMiLCJjaGFuZ2VQb3NpdGlvbiIsImJhc2V1cmwiLCJmaWxlIiwiZmlsZVVwbG9hZCIsImN1c3RvbUhlYWRlcnMiLCJBY2NlcHQiLCJ1c2VydG9rZW4iLCJheGlvcyIsImNyZWF0ZSIsImhlYWRlcnMiLCJSb29tUmVwb3NpdG9yeSIsImdldFJvb20iLCJnZXRSb29tQnlJZCIsImdldEluYWN0aXZlUm9vbSIsInNhdmVSb29tIiwiZWRpdFJvb20iLCJjYXRlZ29yeUlkIiwiU3RhZ2VSZXBvc2l0b3J5IiwiZ2V0U3RhZ2UiLCJnZXRTdGFnZUJ5SWQiLCJnZXRJbmFjdGl2ZVN0YWdlIiwic2F2ZVN0YWdlIiwiZWRpdFN0YWdlIiwiVW5pdFJlcG9zaXRvcnkiLCJnZXRVbml0IiwiZ2V0VW5pdEJ5SWQiLCJnZXRJbmFjdGl2ZVVuaXQiLCJzYXZlVW5pdCIsImVkaXRVbml0IiwiYWN0aW9uVHlwZXMiLCJHRVRfQUxMX1JPT01fUkVRVUVTVCIsIkdFVF9BTExfUk9PTV9TVUNDRVNTIiwiR0VUX0lOQUNUSVZFX1JPT01fUkVRVUVTVCIsIkdFVF9JTkFDVElWRV9ST09NX1NVQ0NFU1MiLCJnZXRBbGxSb29tIiwiZ2V0QWxsUm9vbVN1Y2Nlc3MiLCJnZXRJbmFjdGl2ZVJvb21TdWNjZXNzIiwiaW5pdFN0YXRlIiwiYWxsUm9vbSIsImFjdGl2ZVRvdGFsQ291bnQiLCJhY3RpdmVDb3VudCIsImluYWN0aXZlUm9vbSIsImluYWN0aXZlVG90YWxDb3VudCIsImluYWN0aXZlQ291bnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0b3RhbENvdW50IiwiY291bnQiLCJnZXRBbGxSb29tU2FnYSIsImNhbGwiLCJlcnIiLCJnZXRJbmFjdGl2ZVJvb21TYWdhIiwicm9vdFNhZ2EiLCJhbGwiLCJ0YWtlRXZlcnkiLCJHRVRfQUxMX1NUQUdFX1JFUVVFU1QiLCJHRVRfQUxMX1NUQUdFX1NVQ0NFU1MiLCJHRVRfSU5BQ1RJVkVfU1RBR0VfUkVRVUVTVCIsIkdFVF9JTkFDVElWRV9TVEFHRV9TVUNDRVNTIiwiZ2V0QWxsU3RhZ2UiLCJnZXRBbGxTdGFnZVN1Y2Nlc3MiLCJnZXRJbmFjdGl2ZVN0YWdlU3VjY2VzcyIsImFsbFN0YWdlIiwiaW5hY3RpdmVTdGFnZSIsInJvd3MiLCJnZXRBbGxTdGFnZVNhZ2EiLCJnZXRJbmFjdGl2ZVN0YWdlU2FnYSIsIkdFVF9BTExfVU5JVF9SRVFVRVNUIiwiR0VUX0FMTF9VTklUX1NVQ0NFU1MiLCJHRVRfSU5BQ1RJVkVfVU5JVF9SRVFVRVNUIiwiR0VUX0lOQUNUSVZFX1VOSVRfU1VDQ0VTUyIsImdldEFsbFVuaXQiLCJnZXRBbGxVbml0U3VjY2VzcyIsImdldEluYWN0aXZlVW5pdFN1Y2Nlc3MiLCJhbGxVbml0IiwiaW5hY3RpdmVVbml0IiwiZ2V0QWxsVW5pdFNhZ2EiLCJnZXRJbmFjdGl2ZVVuaXRTYWdhIiwiR0VUX0FETUlOX1VTRVJfTUVOVV9SRVFVRVNUIiwiR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTIiwiZ2V0QWRtaW5Vc2VyTWVudSIsImdldEFkbWluVXNlck1lbnVTdWNjZXNzIiwidXNlck1lbnUiLCJnZXRBZG1pblVzZXJNZW51U2FnYSIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsImxvZ2luIiwibG9naW5TdWNjZXNzIiwibG9nb3V0IiwibG9nb3V0U3VjY2VzcyIsInRva2VuIiwibG9naW5TYWdhIiwic3RhdHVzQ29kZSIsImF1dGhvcml6YXRpb24iLCJyZXMiLCJsb2dvdXRTYWdhIiwicmVtb3ZlSXRlbSIsIkdFVF9BTExfT1BFUkFUT1JfUkVRVUVTVCIsIkdFVF9BTExfT1BFUkFUT1JfU1VDQ0VTUyIsIkdFVF9JTkFDVElWRV9PUEVSQVRPUl9SRVFVRVNUIiwiR0VUX0lOQUNUSVZFX09QRVJBVE9SX1NVQ0NFU1MiLCJnZXRBbGxPcGVyYXRvciIsImdldEFsbE9wZXJhdG9yU3VjY2VzcyIsImdldEluYWN0aXZlT3BlcmF0b3IiLCJnZXRJbmFjdGl2ZU9wZXJhdG9yU3VjY2VzcyIsImFsbE9wZXJhdG9yIiwiaW5hY3RpdmVPcGVyYXRvciIsImdldEFsbE9wZXJhdG9yU2FnYSIsIk9wZXJhdG9yUmVwb3NpdG9yeSIsImdldEluYWN0aXZlT3BlcmF0b3JTYWdhIiwiY29tYmluZVJlZHVjZXJzIiwib3BlcmF0b3IiLCJSb29tIiwiU3RhZ2UiLCJVbml0IiwiQXV0aFNhZ2EiLCJSb29tU2FnYSIsIlVuaXRTYWdhIiwiQWRtaW5NZW51U2FnYSIsIlN0YWdlU2FnYSIsIm9wZXJhdG9yU2FnYSIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwicGVyc2lzdENvbmZpZyIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJyb290UmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInNhZ2FUYXNrIiwicnVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNRO0FBQ2xDLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0VBQUVDO0FBQVMsQ0FBQyxLQUMvQjtFQUFLLFNBQVMsRUFBQyxpQkFBaUI7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7QUFBQSxHQUM1QixNQUFDLHFEQUFJO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEsRUFBRyxF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Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4vbW9kdWxlcy9IZWFkJztcclxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LS1kZWZhdWx0XCI+XHJcbiAgICAgICAgPEhlYWQgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1sZWZ0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1yaWdodFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBTdHlsZVNoZWV0cyA9ICgpID0+IChcclxuICAgIDxIZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0aXRsZT5Vbm5hdGktVWRoeW9nYW0tQWRtaW48L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltZy9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1nL2Zhdmljb24ucG5nXCIgc2l6ZXM9XCIzMngzMlwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1nL2Zhdmljb24ucG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCIgaHJlZj1cIi9pbWcvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwibm91dGhlbWVzXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiTnVyc2luZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk51cnNpbmdcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc2xpY2stdGhlbWUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc2xpY2subWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcHJvLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xMC4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUFZbUVDM1l3NWNWYjNaY3VIdE9BOTN3MzVkWVRzdmhMUFZuWXM5ZVN0SGZHSnZPdkt4VmZFTEdyb0drdnNnK3BcIlxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgIDwvSGVhZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXRzO1xyXG4iLCJpbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Ok11c2hyb29tQWRtaW4nKTtcclxuICAgICAgICBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWwpO1xyXG4gICAgICAgIGlmKGxvY2FsLmF1dGgpe1xyXG4gICAgICAgICAgICBsZXQgYXV0aCA9IEpTT04ucGFyc2UobG9jYWwuYXV0aCk7XHJcbiAgICAgICAgICAgIGlmKCBhdXRoICYmIGF1dGguaXNMb2dnZWRJbiApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnkoKSB7XHJcbiAgICBsZXQgdXJsUXVlcnkgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI/XCIpWzFdIDogbnVsbDtcclxuICAgIGxldCBxdWVyeSA9IHt9O1xyXG4gICAgaWYodXJsUXVlcnkpe1xyXG4gICAgICAgIGlmKHVybFF1ZXJ5LmluY2x1ZGVzKCcmJykpe1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gdXJsUXVlcnkuc3BsaXQoJyYnKTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlbcGFyYW1zW2ldLnNwbGl0KCc9JylbMF1dID0gcGFyYW1zW2ldLnNwbGl0KCc9JylbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcXVlcnlbdXJsUXVlcnkuc3BsaXQoJz0nKVswXV0gPSB1cmxRdWVyeS5zcGxpdCgnPScpWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBxdWVyeTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGpzb25Ub1F1ZXJ5KGpzb24pIHtcclxuICAgIGxldCBxdWVyeSA9ICc/JztcclxuICAgIHF1ZXJ5ICs9IE9iamVjdC5rZXlzKGpzb24pLm1hcCgga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7a2V5fT0ke2pzb25ba2V5XX1gO1xyXG4gICAgfSkuam9pbignJicpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5O1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvRGVmYXVsdExheW91dCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICdub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vc2Nzcy9tb2RhbC12aWRlby5zY3NzJztcclxuaW1wb3J0ICdub2RlX21vZHVsZXMvcmVhY3QtY29tcG9uZW50LWNvdW50ZG93bi10aW1lci9saWIvc3R5bGVzLmNzcyc7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShwcm9wcy5zdG9yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgfHwgKHBhZ2UgPT4gPERlZmF1bHRMYXlvdXQgY2hpbGRyZW49e3BhZ2V9IC8+KTtcclxuICAgICAgICByZXR1cm4gZ2V0TGF5b3V0KFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxQZXJzaXN0R2F0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdG9yPXt0aGlzLnBlcnNpc3Rvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY3JlYXRlU3RvcmUpKHdpdGhSZWR1eFNhZ2EoTXlBcHApKTtcclxuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9oZWxwZXIvYXV0aCc7XHJcbmltcG9ydCB7IGpzb25Ub1F1ZXJ5IH0gZnJvbSAnLi4vaGVscGVyL2F1dGgnO1xyXG5cclxubGV0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG5jbGFzcyBBZG1pbk1lbnVSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkbWluTWVudSgpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9hZG1pbk1lbnVgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRBY3RpdmVNZW51Q291bnQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vYWRtaW5NZW51L2NvdW50YDtcclxuICAgICAgICB1cmwgKz0gYD9zdGF0dXM9WWA7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci50eXBlICE9ICdTQScpIHVybCArPSBgJnBvc3RlZF9pZD0ke3VzZXIuaWR9YDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldEluYWN0aXZlTWVudUNvdW50KCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L2FkbWluTWVudS9jb3VudGA7XHJcbiAgICAgICAgdXJsICs9IGA/c3RhdHVzPU5gO1xyXG4gICAgICAgIGlmICh1c2VyICYmIHVzZXIudHlwZSAhPSAnU0EnKSB1cmwgKz0gYCZwb3N0ZWRfaWQ9JHt1c2VyLmlkfWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbWFwZGF0YShwYXlsb2FkKXtcclxuICAgICBcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9hZG1pbk1lbnUvbWFwLWNvdW50YDtcclxuICAgICAgIFxyXG4gICAgICAgIHVybCArPSBqc29uVG9RdWVyeShwYXlsb2FkKTtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cDovLzE5Mi4xNjguMS4yMjA6NDU2Ny9hcGkvdjEvYWRtaW5NZW51L2dldC9jb3VudD9pZD02NDc1YzY2ZGE1YTRiMWVjZTFkYTMwM2JcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkbWluTWVudVJlcG9zaXRvcnkoKTtcclxuXHJcbiIsImltcG9ydCBSZXBvc2l0b3J5LCB7IGFwaVVybCB9IGZyb20gJy4vUmVwb3NpdG9yeSc7XHJcblxyXG5jbGFzcyBBdXRoUmVwb3NpdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZG1pbkxvZ2luKHBheWxvYWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgICAgaWYgKHBheWxvYWQudHlwZSA9PT0gXCJTQVwiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH0vbG9naW5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH0vb3BlcmF0b3JMb2dpbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QodXJsLCBwYXlsb2FkKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH0gXHJcblxyXG4gICAgYXN5bmMgZ2V0QWRtaW4oKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGFuZ2VQYXNzd29yZCggZm9ybWRhdGEpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9jaGFuZ2VQYXNzd29yZGBcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQodXJsLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoUmVwb3NpdG9yeSgpO1xyXG5cclxuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuaW1wb3J0IHsganNvblRvUXVlcnkgfSBmcm9tICcuLi9oZWxwZXIvYXV0aCc7XHJcblxyXG5jbGFzcyBBdXRoUmVwb3NpdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZ2V0T3BlcmF0b3IocGF5bG9hZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L29wZXJhdG9yL2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1ZYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRJbmFjdGl2ZU9wZXJhdG9yZGV0YWlscyhwYXlsb2FkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vb3BlcmF0b3IvYDtcclxuICAgICAgICB1cmwgKz0ganNvblRvUXVlcnkocGF5bG9hZCk7XHJcbiAgICAgICAgdXJsICs9IGAmc3RhdHVzPU5gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICBhc3luYyBzYXZlT3BlcmF0b3IoZm9ybWRhdGEpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9vcGVyYXRvci9gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QodXJsLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZWRpdE9wZXJhdG9yKGlkLCBmb3JtZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L29wZXJhdG9yL3VwZGF0ZS8ke2lkfWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KHVybCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZVN0YXR1cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vb3BlcmF0b3IvdXBkYXRlU3RhdHVzYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQodXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGFuZ2VQb3NpdGlvbihkYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vb3BlcmF0b3IvdXBkYXRlUG9zaXRpb25gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dCh1cmwsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKCBmb3JtZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L29wZXJhdG9yL2NoYW5nZVBhc3N3b3JkYFxyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dCh1cmwsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoUmVwb3NpdG9yeSgpO1xyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vbWVkYWRtaW4ucXVlc3Rpb25jbG91ZC5pbi9hcGlcIjtcclxuLy9leHBvcnQgY29uc3QgYmFzZXVybCA9IFwiaHR0cDovL2Rldi5qb2JzbGluay5pbi9hcGkvYXBpL3YxXCI7XHJcbi8vZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYWRtaW4uam9ic2xpbmsuaW4vYXBpL2FwaS92MVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTcwOjUwMDMvYXBpXCI7Ly9KUFxyXG4vL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vMTkyLjE2OC4xLjIyMDo0NTY3L2FwaS92MVwiOy8vTG9cclxuXHJcbiAvL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vMTkyLjE2OC4xLjE2NTo0NTY3L2FwaS92MVwiO1xyXG4vL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQ1NjcvYXBpL3YxXCI7XHJcbmV4cG9ydCBjb25zdCBmaWxlID0gXCJodHRwOi8vbG9jYWxob3N0OjQ1NjcvYXBpL3YxL3VzZXJcIjtcclxuZXhwb3J0IGNvbnN0IGFwaVVybCA9IGJhc2V1cmw7XHJcbmV4cG9ydCBjb25zdCBmaWxlVXBsb2FkID0gZmlsZTtcclxubGV0IGN1c3RvbUhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG59O1xyXG5cclxubGV0IGxvY2FsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UgOiBudWxsO1xyXG5pZiAobG9jYWwgJiYgbG9jYWwudXNlcnRva2VuKSB7XHJcbiAgICBjdXN0b21IZWFkZXJzWyd4LWF1dGgtdG9rZW4nXSA9IGAke2xvY2FsLnVzZXJ0b2tlbn1gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcclxufSk7IiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuXHJcbmltcG9ydCB7IGpzb25Ub1F1ZXJ5IH0gZnJvbSAnLi4vaGVscGVyL2F1dGgnO1xyXG5cclxuY2xhc3MgUm9vbVJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Um9vbShwYXlsb2FkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS9gO1xyXG4gICAgICAgIHVybCArPSBqc29uVG9RdWVyeShwYXlsb2FkKTtcclxuICAgICAgICB1cmwgKz0gYCZzdGF0dXM9WWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRSb29tQnlJZChpZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3Jvb20vJHtpZH1gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0SW5hY3RpdmVSb29tKHBheWxvYWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9yb29tL2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1OYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlUm9vbShmb3JtZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3Jvb20vYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wb3N0KHVybCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRSb29tKGNhdGVnb3J5SWQsIGZvcm1kYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS91cGRhdGUvJHtjYXRlZ29yeUlkfWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KHVybCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZVN0YXR1cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS91cGRhdGVTdGF0dXNgO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dCh1cmwsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvb21SZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5cclxuaW1wb3J0IHsganNvblRvUXVlcnkgfSBmcm9tICcuLi9oZWxwZXIvYXV0aCc7XHJcblxyXG5jbGFzcyBTdGFnZVJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0U3RhZ2UocGF5bG9hZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3N0YWdlL2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1ZYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFN0YWdlQnlJZChpZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3N0YWdlLyR7aWR9YDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldEluYWN0aXZlU3RhZ2UocGF5bG9hZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3N0YWdlL2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1OYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlU3RhZ2UoZm9ybWRhdGEpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9zdGFnZS9gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QodXJsLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZWRpdFN0YWdlKGNhdGVnb3J5SWQsIGZvcm1kYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vc3RhZ2UvdXBkYXRlLyR7Y2F0ZWdvcnlJZH1gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dCh1cmwsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVTdGF0dXMoZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3N0YWdlL3VwZGF0ZVN0YXR1c2A7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KHVybCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhZ2VSZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5cclxuaW1wb3J0IHsganNvblRvUXVlcnkgfSBmcm9tICcuLi9oZWxwZXIvYXV0aCc7XHJcblxyXG5jbGFzcyBVbml0UmVwb3NpdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRVbml0KHBheWxvYWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS91bml0L2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1ZYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFVuaXRCeUlkKGlkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vdW5pdC8ke2lkfWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRJbmFjdGl2ZVVuaXQocGF5bG9hZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3VuaXQvYDtcclxuICAgICAgICB1cmwgKz0ganNvblRvUXVlcnkocGF5bG9hZCk7XHJcbiAgICAgICAgdXJsICs9IGAmc3RhdHVzPU5gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNhdmVVbml0KGZvcm1kYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vdW5pdC9gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QodXJsLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZWRpdFVuaXQoY2F0ZWdvcnlJZCwgZm9ybWRhdGEpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS91bml0L3VwZGF0ZS8ke2NhdGVnb3J5SWR9YDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQodXJsLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlU3RhdHVzKGRhdGEpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS91bml0L3VwZGF0ZVN0YXR1c2A7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KHVybCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdFJlcG9zaXRvcnkoKTtcclxuXHJcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIEdFVF9BTExfUk9PTV9SRVFVRVNUOiAnR0VUX0FMTF9ST09NX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FMTF9ST09NX1NVQ0NFU1M6ICdHRVRfQUxMX1JPT01fU1VDQ0VTUycsXHJcbiAgICBHRVRfSU5BQ1RJVkVfUk9PTV9SRVFVRVNUOiAnR0VUX0lOQUNUSVZFX1JPT01fUkVRVUVTVCcsXHJcbiAgICBHRVRfSU5BQ1RJVkVfUk9PTV9TVUNDRVNTOiAnR0VUX0lOQUNUSVZFX1JPT01fU1VDQ0VTUydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxSb29tKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfUk9PTV9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxSb29tU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX1JPT01fU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5hY3RpdmVSb29tKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9ST09NX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlUm9vbVN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX1JPT01fU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGFsbFJvb206IFtdLFxyXG4gICAgYWN0aXZlVG90YWxDb3VudDogMCxcclxuICAgIGFjdGl2ZUNvdW50OiAwLFxyXG4gICAgaW5hY3RpdmVSb29tOiBbXSxcclxuICAgIGluYWN0aXZlVG90YWxDb3VudDogMCxcclxuICAgIGluYWN0aXZlQ291bnQ6IDAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9BTExfUk9PTV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsUm9vbTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSA/IGFjdGlvbi5wYXlsb2FkLmRhdGEgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb3RhbENvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50ID8gYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvdW50ID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9ST09NX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZVJvb206IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEgPyBhY3Rpb24ucGF5bG9hZC5kYXRhIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVUb3RhbENvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50ID8gYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY291bnQgPyBhY3Rpb24ucGF5bG9hZC5jb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgZ2V0QWxsUm9vbVN1Y2Nlc3MsIGdldEluYWN0aXZlUm9vbVN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5pbXBvcnQgUm9vbVJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL1Jvb21SZXBvc2l0b3J5JztcclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxSb29tU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChSb29tUmVwb3NpdG9yeS5nZXRSb29tLCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsUm9vbVN1Y2Nlc3MoZGF0YS5kYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsUm9vbVN1Y2Nlc3MobnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0SW5hY3RpdmVSb29tU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChSb29tUmVwb3NpdG9yeS5nZXRJbmFjdGl2ZVJvb20sIHBheWxvYWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRJbmFjdGl2ZVJvb21TdWNjZXNzKGRhdGEuZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEluYWN0aXZlUm9vbVN1Y2Nlc3MobnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX1JPT01fUkVRVUVTVCwgZ2V0QWxsUm9vbVNhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfUk9PTV9SRVFVRVNULCBnZXRJbmFjdGl2ZVJvb21TYWdhKV0pO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIEdFVF9BTExfU1RBR0VfUkVRVUVTVDogJ0dFVF9BTExfU1RBR0VfUkVRVUVTVCcsXHJcbiAgICBHRVRfQUxMX1NUQUdFX1NVQ0NFU1M6ICdHRVRfQUxMX1NUQUdFX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1NUQUdFX1JFUVVFU1Q6ICdHRVRfSU5BQ1RJVkVfU1RBR0VfUkVRVUVTVCcsXHJcbiAgICBHRVRfSU5BQ1RJVkVfU1RBR0VfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9TVEFHRV9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFN0YWdlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfU1RBR0VfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3RhZ2VTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfU1RBR0VfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5hY3RpdmVTdGFnZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfU1RBR0VfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5hY3RpdmVTdGFnZVN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX1NUQUdFX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBhbGxTdGFnZTogW10sXHJcbiAgICBhY3RpdmVUb3RhbENvdW50OiAwLFxyXG4gICAgYWN0aXZlQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZVN0YWdlOiBbXSxcclxuICAgIGluYWN0aXZlVG90YWxDb3VudDogMCxcclxuICAgIGluYWN0aXZlQ291bnQ6IDAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9BTExfU1RBR0VfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0YWdlOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5yb3dzID8gYWN0aW9uLnBheWxvYWQucm93cyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRvdGFsQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnRvdGFsQ291bnQgPyBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50IDogMCxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY291bnQgPyBhY3Rpb24ucGF5bG9hZC5jb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX1NUQUdFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZVN0YWdlOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5yb3dzID8gYWN0aW9uLnBheWxvYWQucm93cyA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlVG90YWxDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA/IGFjdGlvbi5wYXlsb2FkLnRvdGFsQ291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvdW50ID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGdldEFsbFN0YWdlU3VjY2VzcywgZ2V0SW5hY3RpdmVTdGFnZVN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5pbXBvcnQgU3RhZ2VSZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9TdGFnZVJlcG9zaXRvcnknO1xyXG5cclxuZnVuY3Rpb24qIGdldEFsbFN0YWdlU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChTdGFnZVJlcG9zaXRvcnkuZ2V0U3RhZ2UsIHBheWxvYWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBbGxTdGFnZVN1Y2Nlc3MoZGF0YS5kYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsU3RhZ2VTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEluYWN0aXZlU3RhZ2VTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKFN0YWdlUmVwb3NpdG9yeS5nZXRJbmFjdGl2ZVN0YWdlLCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVTdGFnZVN1Y2Nlc3MoZGF0YS5kYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVTdGFnZVN1Y2Nlc3MobnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX1NUQUdFX1JFUVVFU1QsIGdldEFsbFN0YWdlU2FnYSldKTtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9TVEFHRV9SRVFVRVNULCBnZXRJbmFjdGl2ZVN0YWdlU2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQUxMX1VOSVRfUkVRVUVTVDogJ0dFVF9BTExfVU5JVF9SRVFVRVNUJyxcclxuICAgIEdFVF9BTExfVU5JVF9TVUNDRVNTOiAnR0VUX0FMTF9VTklUX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1VOSVRfUkVRVUVTVDogJ0dFVF9JTkFDVElWRV9VTklUX1JFUVVFU1QnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1VOSVRfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9VTklUX1NVQ0NFU1MnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVW5pdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX1VOSVRfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVW5pdFN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9VTklUX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlVW5pdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfVU5JVF9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmFjdGl2ZVVuaXRTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9VTklUX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBhbGxVbml0OiBbXSxcclxuICAgIGFjdGl2ZVRvdGFsQ291bnQ6IDAsXHJcbiAgICBhY3RpdmVDb3VudDogMCxcclxuICAgIGluYWN0aXZlVW5pdDogW10sXHJcbiAgICBpbmFjdGl2ZVRvdGFsQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZUNvdW50OiAwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQUxMX1VOSVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVuaXQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEgPyBhY3Rpb24ucGF5bG9hZC5kYXRhIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVG90YWxDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA/IGFjdGlvbi5wYXlsb2FkLnRvdGFsQ291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb3VudCA/IGFjdGlvbi5wYXlsb2FkLmNvdW50IDogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfVU5JVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVVbml0OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5kYXRhID8gYWN0aW9uLnBheWxvYWQuZGF0YSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlVG90YWxDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA/IGFjdGlvbi5wYXlsb2FkLnRvdGFsQ291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvdW50ID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGdldEFsbFVuaXRTdWNjZXNzLCBnZXRJbmFjdGl2ZVVuaXRTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuaW1wb3J0IFVuaXRSZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9Vbml0UmVwb3NpdG9yeSc7XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsVW5pdFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoVW5pdFJlcG9zaXRvcnkuZ2V0VW5pdCwgcGF5bG9hZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbFVuaXRTdWNjZXNzKGRhdGEuZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbFVuaXRTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEluYWN0aXZlVW5pdFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoVW5pdFJlcG9zaXRvcnkuZ2V0SW5hY3RpdmVVbml0LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVVbml0U3VjY2VzcyhkYXRhLmRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRJbmFjdGl2ZVVuaXRTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9VTklUX1JFUVVFU1QsIGdldEFsbFVuaXRTYWdhKV0pO1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX1VOSVRfUkVRVUVTVCwgZ2V0SW5hY3RpdmVVbml0U2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1Q6ICdHRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTOiAnR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnUoKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnVTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59IiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgdXNlck1lbnU6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ueyB1c2VyTWVudTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YS5kYXRhICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEuZGF0YS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuZGF0YS5kYXRhIDogW10gfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGdldEFkbWluVXNlck1lbnVTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuaW1wb3J0IEFkbWluTWVudVJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL0FkbWluTWVudVJlcG9zaXRvcnknO1xyXG5cclxuZnVuY3Rpb24qIGdldEFkbWluVXNlck1lbnVTYWdhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChBZG1pbk1lbnVSZXBvc2l0b3J5LmFkbWluTWVudSk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFkbWluVXNlck1lbnVTdWNjZXNzKGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBZG1pblVzZXJNZW51U3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BRE1JTl9VU0VSX01FTlVfUkVRVUVTVCwgZ2V0QWRtaW5Vc2VyTWVudVNhZ2EpXSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgTE9HSU5fUkVRVUVTVDogJ0xPR0lOX1JFUVVFU1QnLFxyXG4gICAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4gICAgTE9HT1VUX1JFUVVFU1Q6ICdMT0dPVVRfUkVRVUVTVCcsXHJcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTLHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9SRVFVRVNUIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRTdWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcclxufSIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgYXV0aDoge30sXHJcbiAgICB0b2tlbjogJydcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ueyBhdXRoOiBhY3Rpb24ucGF5bG9hZC5hdXRoLCB0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW4sIGlzTG9nZ2VkSW46IHRydWUgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57IGF1dGg6IHt9LCB0b2tlbjogJycsIGlzTG9nZ2VkSW46IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIHB1dCxjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGxvZ2luU3VjY2VzcywgbG9nb3V0U3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmltcG9ydCBBdXRoUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvQXV0aFJlcG9zaXRvcnknO1xyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2dpblNhZ2Eoe3BheWxvYWR9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKEF1dGhSZXBvc2l0b3J5LmxvZ2luLCBwYXlsb2FkKTtcclxuICAgICAgICBpZihkYXRhICYmIGRhdGEuc3RhdHVzQ29kZSA9PT0gMjAwICYmIGRhdGEuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHJlcy5hdXRob3JpemF0aW9uID0gZGF0YS5hdXRob3JpemF0aW9uO1xyXG4gICAgICAgICAgICByZXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChsb2dpblN1Y2Nlc3MocmVzKSk7XHJcbiAgICAgICAgfWVsc2UgaWYoZGF0YSAmJiBkYXRhLnN0YXR1c0NvZGUgPT09IDQwMCApe1xyXG4gICAgICAgIH1lbHNlIGlmKGRhdGEgJiYgZGF0YS5zdGF0dXNDb2RlID09PSA0MDQgKXtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICB9XHJcbiAgICB9ICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VydG9rZW4nKTtcclxuICAgICAgICB5aWVsZCBwdXQobG9nb3V0U3VjY2VzcygpKTtcclxuICAgIH0gIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVRfUkVRVUVTVCwgbG9nb3V0U2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQUxMX09QRVJBVE9SX1JFUVVFU1Q6ICdHRVRfQUxMX09QRVJBVE9SX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FMTF9PUEVSQVRPUl9TVUNDRVNTOiAnR0VUX0FMTF9PUEVSQVRPUl9TVUNDRVNTJyxcclxuICAgIEdFVF9JTkFDVElWRV9PUEVSQVRPUl9SRVFVRVNUOiAnR0VUX0lOQUNUSVZFX09QRVJBVE9SX1JFUVVFU1QnLFxyXG4gICAgR0VUX0lOQUNUSVZFX09QRVJBVE9SX1NVQ0NFU1M6ICdHRVRfSU5BQ1RJVkVfT1BFUkFUT1JfU1VDQ0VTUydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxPcGVyYXRvcihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX09QRVJBVE9SX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE9wZXJhdG9yU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX09QRVJBVE9SX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlT3BlcmF0b3IocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX09QRVJBVE9SX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlT3BlcmF0b3JTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9PUEVSQVRPUl9TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgYWxsT3BlcmF0b3I6IFtdLFxyXG4gICAgYWN0aXZlVG90YWxDb3VudDogMCxcclxuICAgIGFjdGl2ZUNvdW50OiAwLFxyXG4gICAgaW5hY3RpdmVPcGVyYXRvcjogW10sXHJcbiAgICBpbmFjdGl2ZVRvdGFsQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZUNvdW50OiAwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQUxMX09QRVJBVE9SX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICBhbGxPcGVyYXRvcjogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSA/IGFjdGlvbi5wYXlsb2FkLmRhdGEgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUb3RhbENvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50ID8gYWN0aW9uLnBheWxvYWQudG90YWxDb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvdW50ID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9PUEVSQVRPUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVPcGVyYXRvcjogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSA/IGFjdGlvbi5wYXlsb2FkLmRhdGEgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZVRvdGFsQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnRvdGFsQ291bnQgPyBhY3Rpb24ucGF5bG9hZC50b3RhbENvdW50IDogMCxcclxuICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZUNvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb3VudCA/IGFjdGlvbi5wYXlsb2FkLmNvdW50IDogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7IGFjdGlvblR5cGVzLCBnZXRBbGxPcGVyYXRvclN1Y2Nlc3MsIGdldEluYWN0aXZlT3BlcmF0b3JTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuaW1wb3J0IE9wZXJhdG9yUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvT3BlcmF0b3JSZXBvc2l0b3J5JztcclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxPcGVyYXRvclNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoT3BlcmF0b3JSZXBvc2l0b3J5LmdldE9wZXJhdG9yLCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsT3BlcmF0b3JTdWNjZXNzKGRhdGEuZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbE9wZXJhdG9yU3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRJbmFjdGl2ZU9wZXJhdG9yU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChPcGVyYXRvclJlcG9zaXRvcnkuZ2V0SW5hY3RpdmVPcGVyYXRvciwgcGF5bG9hZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEluYWN0aXZlT3BlcmF0b3JTdWNjZXNzKGRhdGEuZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEluYWN0aXZlT3BlcmF0b3JTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9PUEVSQVRPUl9SRVFVRVNULCBnZXRBbGxPcGVyYXRvclNhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfT1BFUkFUT1JfUkVRVUVTVCwgZ2V0SW5hY3RpdmVPcGVyYXRvclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoL3JlZHVjZXInO1xyXG5pbXBvcnQgYWRtaW5NZW51IGZyb20gJy4vYWRtaW5NZW51L3JlZHVjZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20vcmVkdWNlcic7XHJcbmltcG9ydCBTdGFnZSBmcm9tICcuL1N0YWdlL3JlZHVjZXInO1xyXG5pbXBvcnQgVW5pdCBmcm9tICcuL1VuaXQvcmVkdWNlcic7XHJcbmltcG9ydCBvcGVyYXRvciBmcm9tICcuL29wZXJhdG9yL3JlZHVjZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBhdXRoLFxyXG4gICAgYWRtaW5NZW51LFxyXG4gICAgb3BlcmF0b3IsXHJcbiAgICBSb29tLFxyXG4gICAgU3RhZ2UsXHJcbiAgICBVbml0LFxyXG4gICAgXHJcbn0pOyIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgQXV0aFNhZ2EgZnJvbSAnLi9hdXRoL3NhZ2EnO1xyXG5pbXBvcnQgQWRtaW5NZW51U2FnYSBmcm9tICcuL2FkbWluTWVudS9zYWdhJztcclxuaW1wb3J0IFVuaXRTYWdhIGZyb20gJy4vVW5pdC9zYWdhJ1xyXG5pbXBvcnQgUm9vbVNhZ2EgZnJvbSAnLi9Sb29tL3NhZ2EnO1xyXG5pbXBvcnQgU3RhZ2VTYWdhIGZyb20gJy4vU3RhZ2Uvc2FnYSc7XHJcbmltcG9ydCBvcGVyYXRvclNhZ2EgZnJvbSAnLi9vcGVyYXRvci9zYWdhJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIEF1dGhTYWdhKCksXHJcbiAgICAgICAgUm9vbVNhZ2EoKSxcclxuICAgICAgICBVbml0U2FnYSgpLFxyXG4gICAgICAgIEFkbWluTWVudVNhZ2EoKSxcclxuICAgICAgICBTdGFnZVNhZ2EoKSxcclxuICAgICAgICBvcGVyYXRvclNhZ2EoKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcic7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3RTYWdhJztcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5OiAnTXVzaHJvb21BZG1pbicsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgd2hpdGVsaXN0OiBbJ2F1dGgnXVxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxyXG4gICAgKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/room/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/header/HeaderDashboard.jsx":
/*!***********************************************!*\
  !*** ./components/header/HeaderDashboard.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth/action */ "./store/auth/action.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Mushrooms\\admin-web\\components\\header\\HeaderDashboard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    auth
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    auth
  }) => auth);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme == 'dark') {
      changeTheme('dark');
      setTheme('dark');
    } else {
      changeTheme('light');
      setTheme('light');
    }
  }, []);
  const logoutOne = () => {
    antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm({
      title: 'Confirm',
      content: 'Do you want to logout ',
      okText: 'Yes',
      onOk: () => logoutOnClick(),
      cancelText: 'No',
      centered: true
    });
  };
  const logoutOnClick = () => {
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_2__["logout"])());
    window.location.href = "/";
  };
  const changeTheme = value => {
    if (value == 'light') {
      document.documentElement.style.setProperty('--background-color', '#f5f5f5');
      document.documentElement.style.setProperty('--text-color', '#0c0c0c');
      document.documentElement.style.setProperty('--jl-gray', '#f5f5f5');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.style.setProperty('--background-color', '#46494c');
      document.documentElement.style.setProperty('--text-color', '#e4e4e4');
      document.documentElement.style.setProperty('--jl-gray', '#565656');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-nav d-flex justify-content-between align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/img/logo_12.png",
    style: {
      height: '50px'
    },
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "theme-btn-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => changeTheme('light'),
    className: `theme-btn ${theme == 'light' ? 'theme-btn-active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-sun",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 140
    }
  })), __jsx("button", {
    onClick: () => changeTheme('dark'),
    className: `theme-btn ${theme == 'dark' ? 'theme-btn-active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-moon-stars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 138
    }
  }))), __jsx("h4", {
    className: "user-name m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fas fa-user pr-2",
    style: {
      color: '#fff',
      fontSize: '18px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }), auth && auth.name ? auth.name : ''), __jsx("ul", {
    className: "nav__menu m-0 d-flex justify-content-between align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-sign-out-alt",
    style: {
      color: '#fff',
      fontSize: '25px'
    },
    onClick: logoutOne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/sections/sidebar.jsx":
/*!*****************************************!*\
  !*** ./components/sections/sidebar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth/action */ "./store/auth/action.js");
/* harmony import */ var _store_adminMenu_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/adminMenu/action */ "./store/adminMenu/action.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _repositories_AdminMenuRepository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../repositories/AdminMenuRepository */ "./repositories/AdminMenuRepository.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Mushrooms\\admin-web\\components\\sections\\sidebar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Sidebar = props => {
  const itemsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    userMenu
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    adminMenu
  }) => adminMenu);
  const {
    0: showDropdown,
    1: setShowDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    auth
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    auth
  }) => auth);
  const {
    0: menuGroups,
    1: setMenuGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: menuItems,
    1: setMenuItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_store_adminMenu_action__WEBPACK_IMPORTED_MODULE_4__["getAdminUserMenu"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);
  const logoutOne = () => {
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].confirm({
      title: 'Confirm',
      content: 'Do you want to logout ',
      okText: 'Yes',
      onOk: () => logoutOnClick(),
      cancelText: 'No',
      centered: true
    });
  };
  const logoutOnClick = () => {
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["logout"])());
    window.location.href = "/";
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let e = itemsRef.current[props.page];
    if (e) {
      e.scrollIntoView();
    }
    (async () => {
      let today = new Date();
      const data = await _repositories_AdminMenuRepository__WEBPACK_IMPORTED_MODULE_6__["default"].adminMenu();
      const expiredAt = moment__WEBPACK_IMPORTED_MODULE_7___default()(data.message.expiredAt ? data.message.expiredAt : null).format("YYYY-MM-DD HH:mm:ss");
      const time = moment__WEBPACK_IMPORTED_MODULE_7___default()(today).format("YYYY-MM-DD HH:mm:ss");
      if (userMenu && userMenu != "Unauthorized Request" && userMenu.length > 0) {
        setMenuGroups(userMenu.filter(um => um.group_id == null));
        setMenuItems(userMenu.filter(um => um.group_id != null));
      } else if (expiredAt < time || data.status === 500 || data.status === 401) {
        localStorage.removeItem('persist:MushroomAdmin');
      }
    })();
  }, [userMenu]);
  let menuArray = [{
    menu_title: 'Resume Score',
    name: 'Resume Score',
    menu_icon: "fas fa-file-user",
    menu_link: '/resume',
    _id: 22
  }, {
    menu_title: 'Push Notification',
    name: 'Push Notification',
    menu_icon: "fad fa-comments",
    menu_link: '/push_notify',
    _id: 22
  }, {
    menu_title: 'festivals',
    name: 'Festivals',
    menu_icon: "fas fa-holly-berry",
    menu_link: '/festivals',
    _id: 22
  }];
  const showMenu = id => {
    if (id == showDropdown) {
      setShowDropdown(0);
    } else {
      setShowDropdown(id);
    }
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "side-menu text-center",
    id: "style-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: props.page === "home" ? "active" : '',
    ref: el => itemsRef.current['home'] = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "menu-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 61
    }
  })), __jsx("span", {
    className: "menu-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Home")))), menuGroups && menuGroups.length > 0 && menuGroups.map(mg => {
    let href = mg.menu_link;
    return __jsx("li", {
      className: props.page === mg.menu_title || showDropdown == mg._id && "menu-active",
      key: mg._id,
      ref: el => itemsRef.current[mg.name] = el,
      onClick: () => showMenu(mg._id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: menuItems && menuItems.length > 0 && menuItems.find(mi => mi.group_id == mg._id) ? '' : href,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "d-flex justify-content-between align-items-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 45
      }
    }, __jsx("span", {
      className: "menu-icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 49
      }
    }, __jsx("i", {
      className: `fas ${mg.menu_icon}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 77
      }
    })), __jsx("span", {
      className: "menu-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 49
      }
    }, mg.menu_title)), menuItems && menuItems.length > 0 && menuItems.find(mi => mi.group_id == mg._id) && __jsx("span", {
      className: "menu-arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 49
      }
    }, __jsx("i", {
      className: `fas fa-chevron-${showDropdown == mg._id ? 'up' : 'down'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 53
      }
    })))), mg.menu_id == 21 ? __jsx("ul", {
      className: `drop-down ${showDropdown == mg._id && 'drop-down-show'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 41
      }
    }) : __jsx("ul", {
      className: `drop-down ${showDropdown == mg._id && 'drop-down-show'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 41
      }
    }, menuItems && menuItems.length > 0 && menuItems.map(mi => {
      let href = mi.menu_link;
      if (mi.group_id == mg._id) {
        return __jsx("li", {
          className: props.page === mi.menu_title ? "active" : '',
          id: '1',
          ref: el => itemsRef.current[mi.name] = el,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 61
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: href,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 65
          }
        }, __jsx("a", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 69
          }
        }, __jsx("span", {
          className: "menu-icon",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 73
          }
        }, __jsx("i", {
          className: `fas ${mi.menu_icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 101
          }
        })), __jsx("span", {
          className: "menu-text",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 73
          }
        }, mi.menu_title))));
      }
    })));
  }), __jsx("li", {
    className: props.page === "Change Password" ? "active" : '',
    id: '1',
    ref: el => itemsRef.current['Change Password'] = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/changepassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "menu-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fas fa-unlock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 61
    }
  })), __jsx("span", {
    className: "menu-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "Change Password")))), __jsx("li", {
    className: "nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    onClick: logoutOne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "menu-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fas fa-sign-out-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 57
    }
  })), __jsx("span", {
    className: "menu-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, "Logout"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/tables/TableRoom.jsx":
/*!*****************************************!*\
  !*** ./components/tables/TableRoom.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Mushrooms\\admin-web\\components\\tables\\TableRoom.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TableHomeCategory = ({
  category,
  editModalOnClick,
  onSelectAll,
  onSelectOne,
  selectAll,
  selectedCatIds,
  currentPage,
  pageSizeTotal
}) => {
  let columns = [{
    title: 'S No',
    dataIndex: 'sno'
  }, {
    title: 'Country Name',
    dataIndex: 'title'
  }, {
    title: 'State',
    dataIndex: 'state',
    align: 'center'
  }, {
    title: 'Edit',
    dataIndex: 'edit',
    align: 'center'
  }, {
    title: 'Footer Status',
    dataIndex: 'footerStatus',
    align: 'center'
  }, {
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      checked: selectAll,
      onClick: e => onSelectAll(e.target.checked),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }
    }),
    dataIndex: 'check'
  }];
  let data = category.map((a, index) => {
    let obj = {
      key: a._id,
      sno: `${currentPage > 1 ? (currentPage - 1) * pageSizeTotal + index + 1 : index + 1}`,
      title: a.loc_name,
      edit: __jsx("i", {
        className: "fas fa-pen",
        onClick: () => editModalOnClick(a),
        style: {
          cursor: 'pointer'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 14
        }
      }),
      footerStatus: a.foot_status === "Y" ? "Yes" : "No",
      state: __jsx("div", {
        className: "d-flex justify-content-center align-items-center",
        style: {
          backgroundColor: '#f15927',
          width: 60,
          height: 35,
          color: '#fff',
          border: 'none',
          borderRadius: 5,
          padding: 5,
          textAlign: 'center'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/location/state/?id=${a._id}&name=${a.loc_name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, __jsx("a", {
        style: {
          color: '#fff',
          padding: '10px 25px'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, a.subCatCount ? a.subCatCount : 0))),
      check: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        onClick: () => onSelectOne(a._id),
        checked: selectedCatIds.indexOf(a._id) >= 0,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      })
    };
    return obj;
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    pagination: false,
    bordered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (TableHomeCategory);

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/room/index.jsx":
/*!******************************!*\
  !*** ./pages/room/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header/HeaderDashboard */ "./components/header/HeaderDashboard.jsx");
/* harmony import */ var _components_sections_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sections/sidebar */ "./components/sections/sidebar.jsx");
/* harmony import */ var _components_tables_TableRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tables/TableRoom */ "./components/tables/TableRoom.jsx");
/* harmony import */ var _store_Room_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/Room/action */ "./store/Room/action.js");
/* harmony import */ var _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../repositories/RoomRepository */ "./repositories/RoomRepository.js");
var _jsxFileName = "D:\\Mushrooms\\admin-web\\pages\\room\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








const Home = props => {
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const valueRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  const {
    auth
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    auth
  }) => auth);
  const {
    allRoom,
    activeTotalCount,
    activeCount,
    inactiveRoom,
    inactiveTotalCount,
    inactiveCount
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    Room
  }) => Room);
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: footStatus,
    1: setFootStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: selectedCatId,
    1: setSelectedCatId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: selectedCatIds,
    1: setSelectedCatIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: pageSizeTotal,
    1: setPageSizeTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('active');
  const {
    0: selectAll,
    1: setSelectAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: action,
    1: setAction
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isActive,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoader(true);
    let ctr = {};
    ctr.start = currentPage === 1 ? 0 : (currentPage - 1) * pageSizeTotal;
    ctr.limit = pageSizeTotal;
    ctr.type = 'Country';
    dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
    dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoader(false);
  }, [allRoom, inactiveRoom]);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const addModalOnClick = async () => {
    setLoader(true);
    setName('');
    setCode('');
    setImage('');
    setSelectedCatId('');
    setLoader(false);
    setShowModal(true);
  };
  const editModalOnClick = async data => {
    let imageURL = data.loc_image;
    setLoader(true);
    setName(data.loc_name);
    setCode(data.loc_code);
    setStatus(data.loc_status);
    setFootStatus(data.foot_status);
    setImage(imageURL);
    setSelectedCatId(data._id);
    setLoader(false);
    setShowModal(true);
  };
  const closeModalOnClick = () => {
    setName('');
    setCode('');
    setImage('');
    setSelectedCatId('');
    setErrors({});
    setShowModal(false);
  };
  const addImage = () => {
    valueRef.current.click();
  };
  const saveOnClick = () => {
    saveData(selectedCatId);
  };
  const saveData = async selectedCatId => {
    if (name) {
      setLoader(true);
      let saveObj = {
        loc_name: name,
        pid: null,
        loc_code: code,
        loc_image: image ? image : null,
        loc_type: "Country"
      };
      try {
        if (selectedCatId) {
          let result = await _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__["default"].editLocation(selectedCatId, saveObj);
          setResult(result);
        } else {
          await _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__["default"].saveLocation(saveObj);
        }
        if (result && result.status === 200) {
          antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
            message: 'Country Updated Successfully.',
            placement: 'top'
          });
        } else {
          antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
            message: 'Country Added Successfully.',
            placement: 'top'
          });
        }
        let ctr = {}; //chaptId: query.chapter_id };
        ctr.start = currentPage === 1 ? 0 : (currentPage - 1) * pageSizeTotal;
        ctr.limit = pageSizeTotal;
        ctr.type = 'Country';
        if (search) {
          ctr.search = search;
        }
        setLoader(false);
        dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
        dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
        closeModalOnClick();
      } catch (e) {
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].error({
          message: 'Country Updated Failed.',
          placement: 'top'
        });
      }
    } else {
      let errorObj = _objectSpread({}, errors);
      if (!name) errorObj['name'] = "Please Enter CountryName";
      if (!code) errorObj['code'] = "Please Enter code";
      setErrors(errorObj);
    }
  };
  const searchOnChange = search => {
    setLoader(true);
    let ctr = {};
    ctr.start = 0;
    ctr.limit = pageSizeTotal;
    ctr.search = search;
    ctr.type = 'Country';
    if (tab === "active") {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
    } else {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
    }
    setSearch(search);
    setCurrentPage(1);
  };
  const pageSizeChange = async (page, pageSize) => {
    setLoader(true);
    let ctr = {};
    ctr.start = page === 1 ? 0 : (page - 1) * pageSize;
    ctr.limit = pageSize;
    ctr.type = 'Country';
    if (search) ctr.search = search;
    if (tab === "active") {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
    } else {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
    }
    setCurrentPage(page);
    setPageSizeTotal(pageSize);
  };
  const onChangeHandler = (setIdentifierState, event) => {
    let errorObj = _objectSpread({}, errors);
    errorObj[event.target.name] = '';
    setIdentifierState(event.target.value);
    setErrors(errorObj);
  };
  const changeTab = tab => {
    setLoader(true);
    let ctr = {};
    ctr.start = 0;
    ctr.limit = 10;
    ctr.type = 'Country';
    if (tab === "active") {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
    } else if (tab === "inactive") {
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
    }
    setCurrentPage(1);
    setPageSizeTotal(10);
    setSelectedCatIds([]);
    setSelectAll(false);
    setAction('');
    setSearch('');
    setTab(tab);
  };
  const onSelectAll = value => {
    let array = [];
    if (value) {
      if (tab === 'active') {
        array = allRoom.map(h => h._id);
      } else {
        array = inactiveRoom.map(h => h._id);
      }
    }
    setSelectedCatIds(array);
    setSelectAll(value);
  };
  const onSelectOne = id => {
    let array = [...selectedCatIds];
    let array1 = tab === 'active' ? [...allRoom] : [...inactiveRoom];
    let index = array.indexOf(id);
    if (index >= 0) {
      array.splice(index, 1);
    } else {
      array.push(id);
    }
    if (array.length === array1.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
    setSelectedCatIds(array);
  };
  const actionOnChange = action => {
    setAction(action);
  };
  const goOnClick = async () => {
    let selectedHomeCatIdsArr = [...selectedCatIds];
    let obj = {
      ids: selectedHomeCatIdsArr
    };
    if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
      setLoader(true);
      if (action === "active") {
        obj['status'] = 'Y';
        await _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__["default"].updateStatus(obj);
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
          message: 'Location Updated Successfully.',
          placement: 'top'
        });
      }
      if (action === "inactive") {
        obj['status'] = 'N';
        await _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__["default"].updateStatus(obj);
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
          message: 'Location Updated Successfully.',
          placement: 'top'
        });
      }
      if (action === "delete") {
        obj['status'] = 'D';
        await _repositories_RoomRepository__WEBPACK_IMPORTED_MODULE_7__["default"].updateStatus(obj);
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
          message: 'Location Deleted Successfully.',
          placement: 'top'
        });
      }
      setSelectedCatIds([]);
      let ctr = {};
      ctr.start = currentPage === 1 ? 0 : (currentPage - 1) * pageSizeTotal;
      ctr.limit = pageSizeTotal;
      ctr.type = 'Country';
      if (search) {
        ctr.search = search;
      }
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getAllRoom"])(ctr));
      dispatch(Object(_store_Room_action__WEBPACK_IMPORTED_MODULE_6__["getInactiveRoom"])(ctr));
    } else {
      if (!action) {
        antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].error({
          title: 'Please Select Action'
        });
      } else if (!selectedHomeCatIdsArr.length) {
        antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].error({
          title: 'Please Select One Location'
        });
      }
    }
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: loader,
    tip: 'Loading...',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, __jsx(_components_header_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "dashboard-container mt-5 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: "sidebar",
    className: isActive ? 'slide-show' : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }, __jsx(_components_sections_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: 'Location',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "slide-toggle",
    onClick: toggleClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: auth.logintype === "I" ? "school-arrow" : "qc-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fas fa-angle-double-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 100
    }
  })))), __jsx("div", {
    className: "content content-width mt-3",
    id: auth.logintype === 'I' ? 'style-3' : 'style-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: 'page_header',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 25
    }
  }, "Country"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: tab,
    onChange: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 25
    }
  }, __jsx(TabPane, {
    tab: __jsx("p", {
      className: "active-green",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 43
      }
    }, "Active ", activeTotalCount),
    key: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 29
    }
  }), __jsx(TabPane, {
    tab: __jsx("p", {
      className: "inactive-red",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 43
      }
    }, "Inactive ", inactiveTotalCount),
    key: "inactive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "row px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    onChange: actionOnChange,
    placeholder: "Select Action",
    className: "ps-ant-dropdown",
    style: {
      width: '80%'
    },
    value: action,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 37
    }
  }, tab === 'active' && __jsx(Option, {
    value: "inactive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 62
    }
  }, "Inactive"), tab === 'inactive' && __jsx(Option, {
    value: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 64
    }
  }, "Active"), __jsx(Option, {
    value: "delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 41
    }
  }, "Delete")), __jsx("button", {
    onClick: goOnClick,
    style: {
      backgroundColor: '#7063D8',
      width: '17%',
      height: 38,
      color: '#fff',
      border: 'none',
      marginLeft: 7
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 37
    }
  }, "Go"))), __jsx("div", {
    className: "col-md-6 d-flex justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "col-md-2 d-flex justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 29
    }
  }, __jsx("button", {
    onClick: addModalOnClick,
    style: {
      backgroundColor: '#0BBC79',
      width: 100,
      height: 38,
      color: '#fff',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 37
    }
  }), " Add"))), __jsx("div", {
    className: "row px-2",
    style: {
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 33
    }
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    placeholder: "Search",
    value: search,
    onChange: e => searchOnChange(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 37
    }
  })))), __jsx("div", {
    className: "px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, __jsx(_components_tables_TableRoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    category: tab === "active" ? allRoom : inactiveRoom,
    editModalOnClick: editModalOnClick,
    onSelectAll: onSelectAll,
    onSelectOne: onSelectOne,
    selectAll: selectAll,
    selectedCatIds: selectedCatIds,
    currentPage: currentPage,
    pageSizeTotal: pageSizeTotal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 29
    }
  })), __jsx("div", {
    style: {
      margin: '10px auto',
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    total: tab === "active" ? activeTotalCount : inactiveTotalCount,
    defaultCurrent: 1,
    current: currentPage,
    defaultPageSize: 10,
    pageSize: pageSizeTotal,
    pageSizeOptions: ['5', '10', '25', '50', '100', '200', '500'],
    onChange: pageSizeChange,
    showSizeChanger: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: showModal,
    onCancel: closeModalOnClick,
    title: selectedCatId ? "Edit Country" : "Add Country",
    width: 800,
    onOk: saveOnClick,
    okText: selectedCatId ? "Update" : "Save",
    maskClosable: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: loader,
    tip: 'Loading...',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 33
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 37
    }
  }, "Country ", __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 52
    }
  }, "*")), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 37
    }
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    value: name,
    placeholder: "",
    onChange: onChangeHandler.bind(null, setName),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 41
    }
  }), errors['name'] && __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 45
    }
  }, errors['name']))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 33
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 37
    }
  }, "Country Code ", __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 57
    }
  }, "*")), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 37
    }
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    value: code,
    placeholder: "",
    onChange: onChangeHandler.bind(null, setCode),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 41
    }
  }), errors['code'] && __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 45
    }
  }, errors['code'])))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlckRhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlcy9UYWJsZVJvb20uanN4Iiwid2VicGFjazovLy8uL2hlbHBlci9hdXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Jvb20vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9BZG1pbk1lbnVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9Sb29tUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9Sb29tL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hZG1pbk1lbnUvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvYWN0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImp3dC1kZWNvZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvY2FsVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hhbmdlVGhlbWUiLCJsb2dvdXRPbmUiLCJNb2RhbCIsImNvbmZpcm0iLCJ0aXRsZSIsImNvbnRlbnQiLCJva1RleHQiLCJvbk9rIiwibG9nb3V0T25DbGljayIsImNhbmNlbFRleHQiLCJjZW50ZXJlZCIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInZhbHVlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwic2V0SXRlbSIsImhlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJuYW1lIiwiY3Vyc29yIiwiU2lkZWJhciIsInByb3BzIiwiaXRlbXNSZWYiLCJ1c2VSZWYiLCJ1c2VyTWVudSIsImFkbWluTWVudSIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsIm1lbnVHcm91cHMiLCJzZXRNZW51R3JvdXBzIiwibWVudUl0ZW1zIiwic2V0TWVudUl0ZW1zIiwiZ2V0QWRtaW5Vc2VyTWVudSIsImxvY2FsIiwiSlNPTiIsInBhcnNlIiwibG9jYWxBdXRoIiwiaXNMb2dnZWRJbiIsImUiLCJjdXJyZW50IiwicGFnZSIsInNjcm9sbEludG9WaWV3IiwidG9kYXkiLCJEYXRlIiwiZGF0YSIsIkFkbWluUmVwb3NpdG9yeSIsImV4cGlyZWRBdCIsIk1vbWVudCIsIm1lc3NhZ2UiLCJmb3JtYXQiLCJ0aW1lIiwibGVuZ3RoIiwiZmlsdGVyIiwidW0iLCJncm91cF9pZCIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJtZW51QXJyYXkiLCJtZW51X3RpdGxlIiwibWVudV9pY29uIiwibWVudV9saW5rIiwiX2lkIiwic2hvd01lbnUiLCJpZCIsImVsIiwibWFwIiwibWciLCJmaW5kIiwibWkiLCJtZW51X2lkIiwiVGFibGVIb21lQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImVkaXRNb2RhbE9uQ2xpY2siLCJvblNlbGVjdEFsbCIsIm9uU2VsZWN0T25lIiwic2VsZWN0QWxsIiwic2VsZWN0ZWRDYXRJZHMiLCJjdXJyZW50UGFnZSIsInBhZ2VTaXplVG90YWwiLCJjb2x1bW5zIiwiZGF0YUluZGV4IiwiYWxpZ24iLCJ0YXJnZXQiLCJjaGVja2VkIiwiYSIsImluZGV4Iiwib2JqIiwia2V5Iiwic25vIiwibG9jX25hbWUiLCJlZGl0IiwiZm9vdGVyU3RhdHVzIiwiZm9vdF9zdGF0dXMiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInRleHRBbGlnbiIsInN1YkNhdENvdW50IiwiY2hlY2siLCJpbmRleE9mIiwiZ2V0Q3VycmVudFVzZXIiLCJleCIsImdldFF1ZXJ5IiwidXJsUXVlcnkiLCJxdWVyeSIsImluY2x1ZGVzIiwicGFyYW1zIiwic3BsaXQiLCJpIiwianNvblRvUXVlcnkiLCJqc29uIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJib2R5IiwiZm9jdXMiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJ0ZXN0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJIb21lIiwiVGFiUGFuZSIsIlRhYnMiLCJPcHRpb24iLCJTZWxlY3QiLCJ2YWx1ZVJlZiIsImNyZWF0ZVJlZiIsImFsbFJvb20iLCJhY3RpdmVUb3RhbENvdW50IiwiYWN0aXZlQ291bnQiLCJpbmFjdGl2ZVJvb20iLCJpbmFjdGl2ZVRvdGFsQ291bnQiLCJpbmFjdGl2ZUNvdW50IiwiUm9vbSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImVycm9ycyIsInNldEVycm9ycyIsImxvYWRlciIsInNldExvYWRlciIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRDb2RlIiwic2V0TmFtZSIsInNldFN0YXR1cyIsImZvb3RTdGF0dXMiLCJzZXRGb290U3RhdHVzIiwic2VsZWN0ZWRDYXRJZCIsInNldFNlbGVjdGVkQ2F0SWQiLCJzZXRTZWxlY3RlZENhdElkcyIsInNldEN1cnJlbnRQYWdlIiwic2V0UGFnZVNpemVUb3RhbCIsInRhYiIsInNldFRhYiIsInNldFNlbGVjdEFsbCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldFNlYXJjaCIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwic2V0UmVzdWx0IiwiY3RyIiwic3RhcnQiLCJsaW1pdCIsImdldEFsbFJvb20iLCJnZXRJbmFjdGl2ZVJvb20iLCJ0b2dnbGVDbGFzcyIsImFkZE1vZGFsT25DbGljayIsImltYWdlVVJMIiwibG9jX2ltYWdlIiwibG9jX2NvZGUiLCJsb2Nfc3RhdHVzIiwiY2xvc2VNb2RhbE9uQ2xpY2siLCJhZGRJbWFnZSIsImNsaWNrIiwic2F2ZU9uQ2xpY2siLCJzYXZlRGF0YSIsInNhdmVPYmoiLCJwaWQiLCJsb2NfdHlwZSIsIkxvY2F0aW9uUmVwb3NpdG9yeSIsImVkaXRMb2NhdGlvbiIsInNhdmVMb2NhdGlvbiIsIm5vdGlmaWNhdGlvbiIsInBsYWNlbWVudCIsImVycm9yT2JqIiwic2VhcmNoT25DaGFuZ2UiLCJwYWdlU2l6ZUNoYW5nZSIsInBhZ2VTaXplIiwib25DaGFuZ2VIYW5kbGVyIiwic2V0SWRlbnRpZmllclN0YXRlIiwiY2hhbmdlVGFiIiwiYXJyYXkiLCJoIiwiYXJyYXkxIiwiYWN0aW9uT25DaGFuZ2UiLCJnb09uQ2xpY2siLCJzZWxlY3RlZEhvbWVDYXRJZHNBcnIiLCJpZHMiLCJ1cGRhdGVTdGF0dXMiLCJsb2dpbnR5cGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luIiwiYmluZCIsInVzZXIiLCJBZG1pbk1lbnVSZXBvc2l0b3J5IiwiY2FsbGJhY2siLCJyZXBvbnNlIiwiUmVwb3NpdG9yeSIsImFwaVVybCIsInJlc3BvbnNlIiwiZ2V0QWN0aXZlTWVudUNvdW50IiwiZ2V0SW5hY3RpdmVNZW51Q291bnQiLCJtYXBkYXRhIiwicGF5bG9hZCIsImJhc2V1cmwiLCJmaWxlIiwiZmlsZVVwbG9hZCIsImN1c3RvbUhlYWRlcnMiLCJBY2NlcHQiLCJ1c2VydG9rZW4iLCJheGlvcyIsImhlYWRlcnMiLCJSb29tUmVwb3NpdG9yeSIsImdldFJvb20iLCJnZXRSb29tQnlJZCIsInNhdmVSb29tIiwiZm9ybWRhdGEiLCJwb3N0IiwiZWRpdFJvb20iLCJjYXRlZ29yeUlkIiwicHV0IiwiYWN0aW9uVHlwZXMiLCJHRVRfQUxMX1JPT01fUkVRVUVTVCIsIkdFVF9BTExfUk9PTV9TVUNDRVNTIiwiR0VUX0lOQUNUSVZFX1JPT01fUkVRVUVTVCIsIkdFVF9JTkFDVElWRV9ST09NX1NVQ0NFU1MiLCJnZXRBbGxSb29tU3VjY2VzcyIsImdldEluYWN0aXZlUm9vbVN1Y2Nlc3MiLCJHRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QiLCJHRVRfQURNSU5fVVNFUl9NRU5VX1NVQ0NFU1MiLCJnZXRBZG1pblVzZXJNZW51U3VjY2VzcyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsImxvZ2luIiwibG9naW5TdWNjZXNzIiwibG9nb3V0U3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7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QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LE9BQU8sRUFBRTtFQUM3QyxPQUFPO0lBQUV6WixJQUFJLEVBQUUyYSxXQUFXLENBQUNRLDJCQUEyQjtJQUFFMUI7RUFBUSxDQUFDO0FBQ3JFLEM7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1rQixXQUFXLEdBQUc7RUFDdkJVLGFBQWEsRUFBRSxlQUFlO0VBQzlCQyxhQUFhLEVBQUUsZUFBZTtFQUM5QkMsY0FBYyxFQUFFLGdCQUFnQjtFQUNoQ0MsY0FBYyxFQUFFO0FBQ3BCLENBQUM7QUFFTSxTQUFTQyxLQUFLLENBQUNoQyxPQUFPLEVBQUU7RUFDM0IsT0FBTztJQUFFelosSUFBSSxFQUFFMmEsV0FBVyxDQUFDVSxhQUFhO0lBQUU1QjtFQUFRLENBQUM7QUFDdkQ7QUFFTyxTQUFTaUMsWUFBWSxDQUFDakMsT0FBTyxFQUFFO0VBQ2xDLE9BQU87SUFBRXpaLElBQUksRUFBRTJhLFdBQVcsQ0FBQ1csYUFBYTtJQUFDN0I7RUFBUSxDQUFDO0FBQ3REO0FBRU8sU0FBUzdsQixNQUFNLEdBQUc7RUFDckIsT0FBTztJQUFFb00sSUFBSSxFQUFFMmEsV0FBVyxDQUFDWTtFQUFlLENBQUM7QUFDL0M7QUFFTyxTQUFTSSxhQUFhLEdBQUc7RUFDNUIsT0FBTztJQUFFM2IsSUFBSSxFQUFFMmEsV0FBVyxDQUFDYTtFQUFlLENBQUM7QUFDL0MsQzs7Ozs7Ozs7Ozs7QUNyQkEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcm9vbS9pbmRleC5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgvYWN0aW9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBhdXRoIH0gPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBsb2NhbFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICBpZiAobG9jYWxUaGVtZSA9PSAnZGFyaycpIHtcclxuICAgICAgICAgICAgY2hhbmdlVGhlbWUoJ2RhcmsnKTtcclxuICAgICAgICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2hhbmdlVGhlbWUoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKCdsaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0T25lID0gKCkgPT4ge1xyXG4gICAgICAgIE1vZGFsLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRG8geW91IHdhbnQgdG8gbG9nb3V0ICcsXHJcbiAgICAgICAgICAgIG9rVGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgIG9uT2s6ICgpID0+IGxvZ291dE9uQ2xpY2soKSxcclxuICAgICAgICAgICAgY2FuY2VsVGV4dDogJ05vJyxcclxuICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2dvdXRPbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnbGlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjZjVmNWY1Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGV4dC1jb2xvcicsICcjMGMwYzBjJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tamwtZ3JheScsICcjZjVmNWY1Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKCdsaWdodCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjNDY0OTRjJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGV4dC1jb2xvcicsICcjZTRlNGU0Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tamwtZ3JheScsICcjNTY1NjU2Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGhlbWUoJ2RhcmsnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLW5hdiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWcvbG9nb18xMi5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1idG4tZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlVGhlbWUoJ2xpZ2h0Jyl9IGNsYXNzTmFtZT17YHRoZW1lLWJ0biAke3RoZW1lID09ICdsaWdodCcgPyAndGhlbWUtYnRuLWFjdGl2ZScgOiAnJ31gfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3VuXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVRoZW1lKCdkYXJrJyl9IGNsYXNzTmFtZT17YHRoZW1lLWJ0biAke3RoZW1lID09ICdkYXJrJyA/ICd0aGVtZS1idG4tYWN0aXZlJyA6ICcnfWB9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb29uLXN0YXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1c2VyLW5hbWUgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyIHByLTJcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzE4cHgnIH19ID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoICYmIGF1dGgubmFtZSA/IGF1dGgubmFtZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9fbWVudSBtLTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19tZW51LWl0ZW1cIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLW91dC1hbHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzI1cHgnIH19IG9uQ2xpY2s9e2xvZ291dE9uZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoL2FjdGlvbic7XHJcbmltcG9ydCB7IGdldEFkbWluVXNlck1lbnUgfSBmcm9tICcuLi8uLi9zdG9yZS9hZG1pbk1lbnUvYWN0aW9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFkbWluUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvQWRtaW5NZW51UmVwb3NpdG9yeSc7XHJcblxyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zUmVmID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlck1lbnUgfSA9IHVzZVNlbGVjdG9yKCh7IGFkbWluTWVudSB9KSA9PiBhZG1pbk1lbnUpO1xyXG4gICAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgeyBhdXRoIH0gPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgpO1xyXG5cclxuICAgIGNvbnN0IFttZW51R3JvdXBzLCBzZXRNZW51R3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFttZW51SXRlbXMsIHNldE1lbnVJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRBZG1pblVzZXJNZW51KCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDpNdXNocm9vbUFkbWluJykpO1xyXG4gICAgICAgIGxldCBsb2NhbEF1dGggPSBsb2NhbCAmJiBsb2NhbC5hdXRoID8gSlNPTi5wYXJzZShsb2NhbC5hdXRoKSA6IHt9O1xyXG4gICAgICAgIGlmIChsb2NhbEF1dGggJiYgIWxvY2FsQXV0aC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGhdKTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXRPbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgTW9kYWwuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEbyB5b3Ugd2FudCB0byBsb2dvdXQgJyxcclxuICAgICAgICAgICAgb2tUZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgb25PazogKCkgPT4gbG9nb3V0T25DbGljaygpLFxyXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ291dE9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgZSA9IGl0ZW1zUmVmLmN1cnJlbnRbcHJvcHMucGFnZV07XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgZS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBZG1pblJlcG9zaXRvcnkuYWRtaW5NZW51KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZWRBdCA9IE1vbWVudChkYXRhLm1lc3NhZ2UuZXhwaXJlZEF0ID8gZGF0YS5tZXNzYWdlLmV4cGlyZWRBdCA6IG51bGwpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IE1vbWVudCh0b2RheSkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICBpZiAodXNlck1lbnUgJiYgdXNlck1lbnUgIT0gXCJVbmF1dGhvcml6ZWQgUmVxdWVzdFwiICYmIHVzZXJNZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldE1lbnVHcm91cHModXNlck1lbnUuZmlsdGVyKHVtID0+IHVtLmdyb3VwX2lkID09IG51bGwpKVxyXG4gICAgICAgICAgICAgICAgc2V0TWVudUl0ZW1zKHVzZXJNZW51LmZpbHRlcih1bSA9PiB1bS5ncm91cF9pZCAhPSBudWxsKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoZXhwaXJlZEF0IDwgdGltZSB8fCBkYXRhLnN0YXR1cyA9PT0gNTAwIHx8IGRhdGEuc3RhdHVzID09PSA0MDEpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpNdXNocm9vbUFkbWluJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKSgpXHJcbiAgICB9LCBbdXNlck1lbnVdKTtcclxuXHJcblxyXG4gICAgbGV0IG1lbnVBcnJheSA9IFtcclxuICAgICAgICB7IG1lbnVfdGl0bGU6ICdSZXN1bWUgU2NvcmUnLCBuYW1lOiAnUmVzdW1lIFNjb3JlJywgbWVudV9pY29uOiBcImZhcyBmYS1maWxlLXVzZXJcIiwgbWVudV9saW5rOiAnL3Jlc3VtZScsIF9pZDogMjIgfSxcclxuICAgICAgICB7IG1lbnVfdGl0bGU6ICdQdXNoIE5vdGlmaWNhdGlvbicsIG5hbWU6ICdQdXNoIE5vdGlmaWNhdGlvbicsIG1lbnVfaWNvbjogXCJmYWQgZmEtY29tbWVudHNcIiwgbWVudV9saW5rOiAnL3B1c2hfbm90aWZ5JywgX2lkOiAyMiB9LFxyXG4gICAgICAgIHsgbWVudV90aXRsZTogJ2Zlc3RpdmFscycsIG5hbWU6ICdGZXN0aXZhbHMnLCBtZW51X2ljb246IFwiZmFzIGZhLWhvbGx5LWJlcnJ5XCIsIG1lbnVfbGluazogJy9mZXN0aXZhbHMnLF9pZDogMjIgfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBzaG93TWVudSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCA9PSBzaG93RHJvcGRvd24pIHtcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1tZW51IHRleHQtY2VudGVyXCIgaWQ9e1wic3R5bGUtMlwifT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3RleHQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gXCJob21lXCIgPyBcImFjdGl2ZVwiIDogJyd9IHJlZj17ZWwgPT4gaXRlbXNSZWYuY3VycmVudFsnaG9tZSddID0gZWx9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtaWNvbic+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS10ZXh0Jz5Ib21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7bWVudUdyb3VwcyAmJiBtZW51R3JvdXBzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUdyb3Vwcy5tYXAobWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhyZWYgPSBtZy5tZW51X2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwcm9wcy5wYWdlID09PSBtZy5tZW51X3RpdGxlKSB8fCAoc2hvd0Ryb3Bkb3duID09IG1nLl9pZCkgJiYgXCJtZW51LWFjdGl2ZVwifSBrZXk9e21nLl9pZH0gcmVmPXtlbCA9PiBpdGVtc1JlZi5jdXJyZW50W21nLm5hbWVdID0gZWx9IG9uQ2xpY2s9eygpID0+IHNob3dNZW51KG1nLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXttZW51SXRlbXMgJiYgbWVudUl0ZW1zLmxlbmd0aCA+IDAgJiYgbWVudUl0ZW1zLmZpbmQobWkgPT4gbWkuZ3JvdXBfaWQgPT0gbWcuX2lkKSA/ICcnIDogaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtaWNvbic+PGkgY2xhc3NOYW1lPXtgZmFzICR7bWcubWVudV9pY29ufWB9PjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS10ZXh0Jz57bWcubWVudV90aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMgJiYgbWVudUl0ZW1zLmxlbmd0aCA+IDAgJiYgbWVudUl0ZW1zLmZpbmQobWkgPT4gbWkuZ3JvdXBfaWQgPT0gbWcuX2lkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtYXJyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLWNoZXZyb24tJHtzaG93RHJvcGRvd24gPT0gbWcuX2lkID8gJ3VwJyA6ICdkb3duJ31gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21nLm1lbnVfaWQgPT0gMjEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YGRyb3AtZG93biAke3Nob3dEcm9wZG93biA9PSBtZy5faWQgJiYgJ2Ryb3AtZG93bi1zaG93J31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Bkcm9wLWRvd24gJHtzaG93RHJvcGRvd24gPT0gbWcuX2lkICYmICdkcm9wLWRvd24tc2hvdyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcyAmJiBtZW51SXRlbXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMubWFwKG1pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBocmVmID0gbWkubWVudV9saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pLmdyb3VwX2lkID09IG1nLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT09IG1pLm1lbnVfdGl0bGUgPyBcImFjdGl2ZVwiIDogJyd9IGlkPXsnMSd9IHJlZj17ZWwgPT4gaXRlbXNSZWYuY3VycmVudFttaS5uYW1lXSA9IGVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtaWNvbic+PGkgY2xhc3NOYW1lPXtgZmFzICR7bWkubWVudV9pY29ufWB9PjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS10ZXh0Jz57bWkubWVudV90aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09PSBcIkNoYW5nZSBQYXNzd29yZFwiID8gXCJhY3RpdmVcIiA6ICcnfSBpZD17JzEnfSByZWY9e2VsID0+IGl0ZW1zUmVmLmN1cnJlbnRbJ0NoYW5nZSBQYXNzd29yZCddID0gZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoYW5nZXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtaWNvbic+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVubG9ja1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51LXRleHQnPkNoYW5nZSBQYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9fbWVudS1pdGVtXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17bG9nb3V0T25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtaWNvbic+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtdGV4dCc+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGVja2JveCwgVGFibGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFRhYmxlSG9tZUNhdGVnb3J5ID0gKHsgY2F0ZWdvcnksIGVkaXRNb2RhbE9uQ2xpY2ssIG9uU2VsZWN0QWxsLCBvblNlbGVjdE9uZSwgc2VsZWN0QWxsLCBzZWxlY3RlZENhdElkcywgY3VycmVudFBhZ2UsIHBhZ2VTaXplVG90YWwgfSkgPT4ge1xyXG4gIGxldCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1MgTm8nLFxyXG4gICAgICBkYXRhSW5kZXg6ICdzbm8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdDb3VudHJ5IE5hbWUnLFxyXG4gICAgICBkYXRhSW5kZXg6ICd0aXRsZScsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTdGF0ZScsXHJcbiAgICAgIGRhdGFJbmRleDogJ3N0YXRlJyxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0VkaXQnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdlZGl0JyxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0Zvb3RlciBTdGF0dXMnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdmb290ZXJTdGF0dXMnLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiA8Q2hlY2tib3ggY2hlY2tlZD17c2VsZWN0QWxsfSBvbkNsaWNrPXsoZSkgPT4gb25TZWxlY3RBbGwoZS50YXJnZXQuY2hlY2tlZCl9PjwvQ2hlY2tib3g+LFxyXG4gICAgICBkYXRhSW5kZXg6ICdjaGVjaydcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBsZXQgZGF0YSA9IGNhdGVnb3J5Lm1hcCgoYSwgaW5kZXgpID0+IHtcclxuICAgICAgXHJcbiAgICBsZXQgb2JqID0ge1xyXG4gICAgICBrZXk6IGEuX2lkLFxyXG4gICAgICBzbm86IGAke2N1cnJlbnRQYWdlID4gMSA/ICgoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplVG90YWwpICsgaW5kZXggKyAxIDogaW5kZXggKyAxfWAsXHJcbiAgICAgIHRpdGxlOiBhLmxvY19uYW1lLFxyXG4gICAgICBlZGl0OiAoPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBlblwiIG9uQ2xpY2s9eygpID0+IGVkaXRNb2RhbE9uQ2xpY2soYSl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PjwvaT4pLFxyXG4gICAgICBmb290ZXJTdGF0dXM6IGEuZm9vdF9zdGF0dXMgPT09IFwiWVwiID8gXCJZZXNcIiA6IFwiTm9cIixcclxuICAgICAgc3RhdGU6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YxNTkyNycsIHdpZHRoOiA2MCwgaGVpZ2h0OiAzNSwgY29sb3I6ICcjZmZmJywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSwgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbG9jYXRpb24vc3RhdGUvP2lkPSR7YS5faWR9Jm5hbWU9JHthLmxvY19uYW1lfWB9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBwYWRkaW5nOiAnMTBweCAyNXB4JyB9fT57YS5zdWJDYXRDb3VudCA/IGEuc3ViQ2F0Q291bnQgOiAwfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgICAgY2hlY2s6IChcclxuICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0T25lKGEuX2lkKX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ2F0SWRzLmluZGV4T2YoYS5faWQpID49IDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChvYmopO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gcGFnaW5hdGlvbj17ZmFsc2V9IGJvcmRlcmVkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlSG9tZUNhdGVnb3J5OyIsImltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlcnNpc3Q6TXVzaHJvb21BZG1pbicpO1xyXG4gICAgICAgIGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbCk7XHJcbiAgICAgICAgaWYobG9jYWwuYXV0aCl7XHJcbiAgICAgICAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbC5hdXRoKTtcclxuICAgICAgICAgICAgaWYoIGF1dGggJiYgYXV0aC5pc0xvZ2dlZEluICl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0aC5hdXRoO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeSgpIHtcclxuICAgIGxldCB1cmxRdWVyeSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj9cIilbMV0gOiBudWxsO1xyXG4gICAgbGV0IHF1ZXJ5ID0ge307XHJcbiAgICBpZih1cmxRdWVyeSl7XHJcbiAgICAgICAgaWYodXJsUXVlcnkuaW5jbHVkZXMoJyYnKSl7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB1cmxRdWVyeS5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVtwYXJhbXNbaV0uc3BsaXQoJz0nKVswXV0gPSBwYXJhbXNbaV0uc3BsaXQoJz0nKVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBxdWVyeVt1cmxRdWVyeS5zcGxpdCgnPScpWzBdXSA9IHVybFF1ZXJ5LnNwbGl0KCc9JylbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXJ5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ganNvblRvUXVlcnkoanNvbikge1xyXG4gICAgbGV0IHF1ZXJ5ID0gJz8nO1xyXG4gICAgcXVlcnkgKz0gT2JqZWN0LmtleXMoanNvbikubWFwKCBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtrZXl9PSR7anNvbltrZXldfWA7XHJcbiAgICB9KS5qb2luKCcmJyk7XHJcbiAgICByZXR1cm4gcXVlcnk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1vZGFsLCBTcGluLCBub3RpZmljYXRpb24sIFBhZ2luYXRpb24sIFRhYnMsIFNlbGVjdCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlckRhc2hib2FyZCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvc2lkZWJhcic7XHJcbmltcG9ydCBUYWJsZVJvb20gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWJsZXMvVGFibGVSb29tJztcclxuXHJcbmltcG9ydCB7IGdldEFsbFJvb20sIGdldEluYWN0aXZlUm9vbSB9IGZyb20gJy4uLy4uL3N0b3JlL1Jvb20vYWN0aW9uJztcclxuaW1wb3J0IExvY2F0aW9uUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvUm9vbVJlcG9zaXRvcnknO1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcbiAgICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdmFsdWVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIGNvbnN0IHsgYXV0aCB9ID0gdXNlU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBhbGxSb29tLFxyXG4gICAgICAgIGFjdGl2ZVRvdGFsQ291bnQsXHJcbiAgICAgICAgYWN0aXZlQ291bnQsXHJcbiAgICAgICAgaW5hY3RpdmVSb29tLFxyXG4gICAgICAgIGluYWN0aXZlVG90YWxDb3VudCxcclxuICAgICAgICBpbmFjdGl2ZUNvdW50LFxyXG4gICAgfSA9IHVzZVNlbGVjdG9yKCh7IFJvb20gfSkgPT4gUm9vbSk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Zvb3RTdGF0dXMsIHNldEZvb3RTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0SWQsIHNldFNlbGVjdGVkQ2F0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0SWRzLCBzZXRTZWxlY3RlZENhdElkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtwYWdlU2l6ZVRvdGFsLCBzZXRQYWdlU2l6ZVRvdGFsXSA9IHVzZVN0YXRlKDEwKTtcclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgnYWN0aXZlJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0QWxsLCBzZXRTZWxlY3RBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDpNdXNocm9vbUFkbWluJykpO1xyXG4gICAgICAgIGxldCBsb2NhbEF1dGggPSBsb2NhbCAmJiBsb2NhbC5hdXRoID8gSlNPTi5wYXJzZShsb2NhbC5hdXRoKSA6IHt9O1xyXG4gICAgICAgIGlmIChsb2NhbEF1dGggJiYgIWxvY2FsQXV0aC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGhdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICBsZXQgY3RyID0ge307XHJcbiAgICAgICAgY3RyLnN0YXJ0ID0gY3VycmVudFBhZ2UgPT09IDEgPyAwIDogKChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemVUb3RhbCk7XHJcbiAgICAgICAgY3RyLmxpbWl0ID0gcGFnZVNpemVUb3RhbDtcclxuICAgICAgICBjdHIudHlwZT0nQ291bnRyeSdcclxuICAgICAgICBkaXNwYXRjaChnZXRBbGxSb29tKGN0cikpO1xyXG4gICAgICAgIGRpc3BhdGNoKGdldEluYWN0aXZlUm9vbShjdHIpKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgICB9LCBbYWxsUm9vbSwgaW5hY3RpdmVSb29tXSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgYWRkTW9kYWxPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBzZXRDb2RlKCcnKTtcclxuICAgICAgICBzZXRJbWFnZSgnJyk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDYXRJZCgnJyk7XHJcbiAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdE1vZGFsT25DbGljayA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZVVSTCA9IGRhdGEubG9jX2ltYWdlO1xyXG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICBzZXROYW1lKGRhdGEubG9jX25hbWUpO1xyXG4gICAgICAgIHNldENvZGUoZGF0YS5sb2NfY29kZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKGRhdGEubG9jX3N0YXR1cyk7XHJcbiAgICAgICAgc2V0Rm9vdFN0YXR1cyhkYXRhLmZvb3Rfc3RhdHVzKVxyXG4gICAgICAgIHNldEltYWdlKGltYWdlVVJMKVxyXG4gICAgICAgIHNldFNlbGVjdGVkQ2F0SWQoZGF0YS5faWQpO1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWxPbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIHNldENvZGUoJycpO1xyXG4gICAgICAgIHNldEltYWdlKCcnKTtcclxuICAgICAgICBzZXRTZWxlY3RlZENhdElkKCcnKTtcclxuICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGFkZEltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHZhbHVlUmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgY29uc3Qgc2F2ZU9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2F2ZURhdGEoc2VsZWN0ZWRDYXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZURhdGEgPSBhc3luYyAoc2VsZWN0ZWRDYXRJZCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBzYXZlT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgbG9jX25hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2NfY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgIGxvY19pbWFnZTogaW1hZ2UgPyBpbWFnZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2NfdHlwZTogXCJDb3VudHJ5XCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ2F0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTG9jYXRpb25SZXBvc2l0b3J5LmVkaXRMb2NhdGlvbihzZWxlY3RlZENhdElkLCBzYXZlT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBMb2NhdGlvblJlcG9zaXRvcnkuc2F2ZUxvY2F0aW9uKHNhdmVPYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb3VudHJ5IFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ291bnRyeSBBZGRlZCBTdWNjZXNzZnVsbHkuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGN0ciA9IHt9Ly9jaGFwdElkOiBxdWVyeS5jaGFwdGVyX2lkIH07XHJcbiAgICAgICAgICAgICAgICBjdHIuc3RhcnQgPSBjdXJyZW50UGFnZSA9PT0gMSA/IDAgOiAoKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZVRvdGFsKTtcclxuICAgICAgICAgICAgICAgIGN0ci5saW1pdCA9IHBhZ2VTaXplVG90YWw7XHJcbiAgICAgICAgICAgICAgICBjdHIudHlwZT0nQ291bnRyeSdcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHIuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGdldEFsbFJvb20oY3RyKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChnZXRJbmFjdGl2ZVJvb20oY3RyKSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsT25DbGljaygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb3VudHJ5IFVwZGF0ZWQgRmFpbGVkLicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JPYmogPSB7IC4uLmVycm9ycyB9O1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIGVycm9yT2JqWyduYW1lJ10gPSBcIlBsZWFzZSBFbnRlciBDb3VudHJ5TmFtZVwiO1xyXG4gICAgICAgICAgICBpZiAoIWNvZGUpIGVycm9yT2JqWydjb2RlJ10gPSBcIlBsZWFzZSBFbnRlciBjb2RlXCI7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3JPYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWFyY2hPbkNoYW5nZSA9IChzZWFyY2gpID0+IHtcclxuICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGN0ciA9IHt9O1xyXG4gICAgICAgIGN0ci5zdGFydCA9IDA7XHJcbiAgICAgICAgY3RyLmxpbWl0ID0gcGFnZVNpemVUb3RhbDtcclxuICAgICAgICBjdHIuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgICAgIGN0ci50eXBlPSdDb3VudHJ5J1xyXG4gICAgICAgIGlmICh0YWIgPT09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUm9vbShjdHIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRJbmFjdGl2ZVJvb20oY3RyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlYXJjaChzZWFyY2gpO1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhZ2VTaXplQ2hhbmdlID0gYXN5bmMgKHBhZ2UsIHBhZ2VTaXplKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGVyKHRydWUpO1xyXG4gICAgICAgIGxldCBjdHIgPSB7fTtcclxuICAgICAgICBjdHIuc3RhcnQgPSBwYWdlID09PSAxID8gMCA6ICgocGFnZSAtIDEpICogcGFnZVNpemUpO1xyXG4gICAgICAgIGN0ci5saW1pdCA9IHBhZ2VTaXplO1xyXG4gICAgICAgIGN0ci50eXBlPSdDb3VudHJ5J1xyXG4gICAgICAgIGlmIChzZWFyY2gpIGN0ci5zZWFyY2ggPSBzZWFyY2g7XHJcblxyXG4gICAgICAgIGlmICh0YWIgPT09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUm9vbShjdHIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRJbmFjdGl2ZVJvb20oY3RyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gICAgICAgIHNldFBhZ2VTaXplVG90YWwocGFnZVNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChzZXRJZGVudGlmaWVyU3RhdGUsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9yT2JqID0geyAuLi5lcnJvcnMgfVxyXG4gICAgICAgIGVycm9yT2JqW2V2ZW50LnRhcmdldC5uYW1lXSA9ICcnXHJcbiAgICAgICAgc2V0SWRlbnRpZmllclN0YXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVycm9yT2JqKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgICAgICBsZXQgY3RyID0ge307XHJcbiAgICAgICAgY3RyLnN0YXJ0ID0gMDtcclxuICAgICAgICBjdHIubGltaXQgPSAxMDtcclxuICAgICAgICBjdHIudHlwZT0nQ291bnRyeSdcclxuICAgICAgICBpZiAodGFiID09PSBcImFjdGl2ZVwiKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldEFsbFJvb20oY3RyKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09IFwiaW5hY3RpdmVcIikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRJbmFjdGl2ZVJvb20oY3RyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgICAgIHNldFBhZ2VTaXplVG90YWwoMTApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ2F0SWRzKFtdKTtcclxuICAgICAgICBzZXRTZWxlY3RBbGwoZmFsc2UpO1xyXG4gICAgICAgIHNldEFjdGlvbignJyk7XHJcbiAgICAgICAgc2V0U2VhcmNoKCcnKTtcclxuICAgICAgICBzZXRUYWIodGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblNlbGVjdEFsbCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhbGxSb29tLm1hcChoID0+IGguX2lkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gaW5hY3RpdmVSb29tLm1hcChoID0+IGguX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZENhdElkcyhhcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0QWxsKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblNlbGVjdE9uZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnJheSA9IFsuLi5zZWxlY3RlZENhdElkc107XHJcbiAgICAgICAgbGV0IGFycmF5MSA9IHRhYiA9PT0gJ2FjdGl2ZScgPyBbLi4uYWxsUm9vbV0gOiBbLi4uaW5hY3RpdmVSb29tXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKGlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSBhcnJheTEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEFsbCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RBbGwoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZENhdElkcyhhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aW9uT25DaGFuZ2UgPSAoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aW9uKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ29PbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEhvbWVDYXRJZHNBcnIgPSBbLi4uc2VsZWN0ZWRDYXRJZHNdO1xyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIGlkczogc2VsZWN0ZWRIb21lQ2F0SWRzQXJyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRIb21lQ2F0SWRzQXJyICYmIHNlbGVjdGVkSG9tZUNhdElkc0Fyci5sZW5ndGggPiAwICYmIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICAgICAgICAgIG9ialsnc3RhdHVzJ10gPSAnWSc7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBMb2NhdGlvblJlcG9zaXRvcnkudXBkYXRlU3RhdHVzKG9iaik7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvY2F0aW9uIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJpbmFjdGl2ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpbJ3N0YXR1cyddID0gJ04nO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgTG9jYXRpb25SZXBvc2l0b3J5LnVwZGF0ZVN0YXR1cyhvYmopO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2NhdGlvbiBVcGRhdGVkIFN1Y2Nlc3NmdWxseS4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIG9ialsnc3RhdHVzJ10gPSAnRCc7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBMb2NhdGlvblJlcG9zaXRvcnkudXBkYXRlU3RhdHVzKG9iaik7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvY2F0aW9uIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXRJZHMoW10pO1xyXG4gICAgICAgICAgICBsZXQgY3RyID0ge307XHJcbiAgICAgICAgICAgIGN0ci5zdGFydCA9IGN1cnJlbnRQYWdlID09PSAxID8gMCA6ICgoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplVG90YWwpO1xyXG4gICAgICAgICAgICBjdHIubGltaXQgPSBwYWdlU2l6ZVRvdGFsO1xyXG4gICAgICAgICAgICBjdHIudHlwZT0nQ291bnRyeSdcclxuICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgY3RyLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRBbGxSb29tKGN0cikpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRJbmFjdGl2ZVJvb20oY3RyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIE1vZGFsLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBTZWxlY3QgQWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNlbGVjdGVkSG9tZUNhdElkc0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIE1vZGFsLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBTZWxlY3QgT25lIExvY2F0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U3BpbiBzcGlubmluZz17bG9hZGVyfSB0aXA9eydMb2FkaW5nLi4uJ30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1jb250YWluZXIgbXQtNSBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGViYXJcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gJ3NsaWRlLXNob3cnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIHBhZ2U9eydMb2NhdGlvbid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtdG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthdXRoLmxvZ2ludHlwZSA9PT0gXCJJXCIgPyBcInNjaG9vbC1hcnJvd1wiIDogXCJxYy1hcnJvd1wifT48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnRcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGVudC13aWR0aCBtdC0zXCIgaWQ9e2F1dGgubG9naW50eXBlID09PSAnSScgPyAnc3R5bGUtMycgOiAnc3R5bGUtMid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXsncGFnZV9oZWFkZXInfT5Db3VudHJ5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17dGFifSBvbkNoYW5nZT17Y2hhbmdlVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj17PHAgY2xhc3NOYW1lPVwiYWN0aXZlLWdyZWVuXCI+QWN0aXZlIHthY3RpdmVUb3RhbENvdW50fTwvcD59IGtleT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPXs8cCBjbGFzc05hbWU9XCJpbmFjdGl2ZS1yZWRcIj5JbmFjdGl2ZSB7aW5hY3RpdmVUb3RhbENvdW50fTwvcD59IGtleT1cImluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBweC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthY3Rpb25PbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IEFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1hbnQtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSAnYWN0aXZlJyAmJiA8T3B0aW9uIHZhbHVlPVwiaW5hY3RpdmVcIj5JbmFjdGl2ZTwvT3B0aW9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIgPT09ICdpbmFjdGl2ZScgJiYgPE9wdGlvbiB2YWx1ZT1cImFjdGl2ZVwiPkFjdGl2ZTwvT3B0aW9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJkZWxldGVcIj5EZWxldGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29PbkNsaWNrfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzA2M0Q4Jywgd2lkdGg6ICcxNyUnLCBoZWlnaHQ6IDM4LCBjb2xvcjogJyNmZmYnLCBib3JkZXI6ICdub25lJywgbWFyZ2luTGVmdDogNyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZE1vZGFsT25DbGlja30gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzBCQkM3OScsIHdpZHRoOiAxMDAsIGhlaWdodDogMzgsIGNvbG9yOiAnI2ZmZicsIGJvcmRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIC8+IEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHB4LTInIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNlYXJjaE9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm9vbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXt0YWIgPT09IFwiYWN0aXZlXCIgPyBhbGxSb29tIDogaW5hY3RpdmVSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RhbE9uQ2xpY2s9e2VkaXRNb2RhbE9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBbGw9e29uU2VsZWN0QWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0T25lPXtvblNlbGVjdE9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGw9e3NlbGVjdEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdElkcz17c2VsZWN0ZWRDYXRJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplVG90YWw9e3BhZ2VTaXplVG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IGF1dG8nLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXt0YWIgPT09IFwiYWN0aXZlXCIgPyBhY3RpdmVUb3RhbENvdW50IDogaW5hY3RpdmVUb3RhbENvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZT17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplVG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbJzUnLCAnMTAnLCAnMjUnLCAnNTAnLCAnMTAwJywgJzIwMCcsICc1MDAnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFnZVNpemVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbE9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdGVkQ2F0SWQgPyBcIkVkaXQgQ291bnRyeVwiIDogXCJBZGQgQ291bnRyeVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17c2F2ZU9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0PXtzZWxlY3RlZENhdElkID8gXCJVcGRhdGVcIiA6IFwiU2F2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tDbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e2xvYWRlcn0gdGlwPXsnTG9hZGluZy4uLid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnkgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlci5iaW5kKG51bGwsIHNldE5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnNbJ25hbWUnXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3JzWyduYW1lJ119PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnkgQ29kZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyLmJpbmQobnVsbCwgc2V0Q29kZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yc1snY29kZSddICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcnNbJ2NvZGUnXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwaW4+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L1NwaW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL2hlbHBlci9hdXRoJztcclxuaW1wb3J0IHsganNvblRvUXVlcnkgfSBmcm9tICcuLi9oZWxwZXIvYXV0aCc7XHJcblxyXG5sZXQgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcbmNsYXNzIEFkbWluTWVudVJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRtaW5NZW51KCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L2FkbWluTWVudWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFjdGl2ZU1lbnVDb3VudCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9hZG1pbk1lbnUvY291bnRgO1xyXG4gICAgICAgIHVybCArPSBgP3N0YXR1cz1ZYDtcclxuICAgICAgICBpZiAodXNlciAmJiB1c2VyLnR5cGUgIT0gJ1NBJykgdXJsICs9IGAmcG9zdGVkX2lkPSR7dXNlci5pZH1gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0SW5hY3RpdmVNZW51Q291bnQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vYWRtaW5NZW51L2NvdW50YDtcclxuICAgICAgICB1cmwgKz0gYD9zdGF0dXM9TmA7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci50eXBlICE9ICdTQScpIHVybCArPSBgJnBvc3RlZF9pZD0ke3VzZXIuaWR9YDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBtYXBkYXRhKHBheWxvYWQpe1xyXG4gICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L2FkbWluTWVudS9tYXAtY291bnRgO1xyXG4gICAgICAgXHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwOi8vMTkyLjE2OC4xLjIyMDo0NTY3L2FwaS92MS9hZG1pbk1lbnUvZ2V0L2NvdW50P2lkPTY0NzVjNjZkYTVhNGIxZWNlMWRhMzAzYlxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRtaW5NZW51UmVwb3NpdG9yeSgpO1xyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vbWVkYWRtaW4ucXVlc3Rpb25jbG91ZC5pbi9hcGlcIjtcclxuLy9leHBvcnQgY29uc3QgYmFzZXVybCA9IFwiaHR0cDovL2Rldi5qb2JzbGluay5pbi9hcGkvYXBpL3YxXCI7XHJcbi8vZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYWRtaW4uam9ic2xpbmsuaW4vYXBpL2FwaS92MVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2V1cmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTcwOjUwMDMvYXBpXCI7Ly9KUFxyXG4vL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vMTkyLjE2OC4xLjIyMDo0NTY3L2FwaS92MVwiOy8vTG9cclxuXHJcbiAvL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vMTkyLjE2OC4xLjE2NTo0NTY3L2FwaS92MVwiO1xyXG4vL2V4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQ1NjcvYXBpL3YxXCI7XHJcbmV4cG9ydCBjb25zdCBmaWxlID0gXCJodHRwOi8vbG9jYWxob3N0OjQ1NjcvYXBpL3YxL3VzZXJcIjtcclxuZXhwb3J0IGNvbnN0IGFwaVVybCA9IGJhc2V1cmw7XHJcbmV4cG9ydCBjb25zdCBmaWxlVXBsb2FkID0gZmlsZTtcclxubGV0IGN1c3RvbUhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG59O1xyXG5cclxubGV0IGxvY2FsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UgOiBudWxsO1xyXG5pZiAobG9jYWwgJiYgbG9jYWwudXNlcnRva2VuKSB7XHJcbiAgICBjdXN0b21IZWFkZXJzWyd4LWF1dGgtdG9rZW4nXSA9IGAke2xvY2FsLnVzZXJ0b2tlbn1gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcclxufSk7IiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuXHJcbmltcG9ydCB7IGpzb25Ub1F1ZXJ5IH0gZnJvbSAnLi4vaGVscGVyL2F1dGgnO1xyXG5cclxuY2xhc3MgUm9vbVJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Um9vbShwYXlsb2FkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS9gO1xyXG4gICAgICAgIHVybCArPSBqc29uVG9RdWVyeShwYXlsb2FkKTtcclxuICAgICAgICB1cmwgKz0gYCZzdGF0dXM9WWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRSb29tQnlJZChpZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3Jvb20vJHtpZH1gO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0SW5hY3RpdmVSb29tKHBheWxvYWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YXBpVXJsfS9yb29tL2A7XHJcbiAgICAgICAgdXJsICs9IGpzb25Ub1F1ZXJ5KHBheWxvYWQpO1xyXG4gICAgICAgIHVybCArPSBgJnN0YXR1cz1OYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlUm9vbShmb3JtZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHthcGlVcmx9L3Jvb20vYDtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wb3N0KHVybCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRSb29tKGNhdGVnb3J5SWQsIGZvcm1kYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS91cGRhdGUvJHtjYXRlZ29yeUlkfWA7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KHVybCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZVN0YXR1cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vcm9vbS91cGRhdGVTdGF0dXNgO1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dCh1cmwsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvb21SZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQUxMX1JPT01fUkVRVUVTVDogJ0dFVF9BTExfUk9PTV9SRVFVRVNUJyxcclxuICAgIEdFVF9BTExfUk9PTV9TVUNDRVNTOiAnR0VUX0FMTF9ST09NX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1JPT01fUkVRVUVTVDogJ0dFVF9JTkFDVElWRV9ST09NX1JFUVVFU1QnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1JPT01fU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9ST09NX1NVQ0NFU1MnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUm9vbShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX1JPT01fUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUm9vbVN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9ST09NX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlUm9vbShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfUk9PTV9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmFjdGl2ZVJvb21TdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9ST09NX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1Q6ICdHRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTOiAnR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnUoKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnVTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgTE9HSU5fUkVRVUVTVDogJ0xPR0lOX1JFUVVFU1QnLFxyXG4gICAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4gICAgTE9HT1VUX1JFUVVFU1Q6ICdMT0dPVVRfUkVRVUVTVCcsXHJcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTLHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9SRVFVRVNUIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRTdWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
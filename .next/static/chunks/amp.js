_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"); /* globals __webpack_hash__ */
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}
var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
  page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null; /* eslint-disable-next-line */
var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?
function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.
function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.
function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}
function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          jsonData = _context.sent;
          curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead
          pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
            return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
          });
          if (pageUpdated) {
            document.location.reload(true);
          } else {
            curHash = mostRecentHash;
          }
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error('Error occurred checking for update', _context.t0);
          document.location.reload(true);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}
(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }
  try {
    var message = JSON.parse(event.data);
    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }
  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}
_c = EventSourceWrapper;
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }
  return EventSourceWrapper(options);
}
var _c;
$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js")); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;
    this.abort = function () {};
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
_c = TextDecoderPolyfill;
TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }
    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }
    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }
    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }
    if (bitsNeeded === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option
var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }
  return false;
}; // IE, Edge
if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k() {};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
_c2 = XHRWrapper;
XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;
      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';
      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload
  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress
  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64
  xhr.onreadystatechange = onReadyStateChange;
  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }
  xhr.open(method, url, true);
  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function () {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};
XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}
function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
_c3 = HeadersPolyfill;
HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {}
_c4 = XHRTransport;
XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;
  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
_c5 = HeadersWrapper;
HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};
function FetchTransport() {}
_c6 = FetchTransport;
FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120
  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
_c7 = EventTarget;
function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != undefined) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != undefined) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = undefined;
}
_c8 = Event;
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;
var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}
_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }
          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);
      if (chunk !== '') {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);
              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }
                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);
                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = '';
              eventTypeBuffer = '';
            }
            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close() {
    currentState = CLOSED;
    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
    var requestURL = url;
    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';
    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function () {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.
function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"); /* global location */
var evtSource;
var currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection
  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;
    try {
      var payload = JSON.parse(event.data);
      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NvQkE7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBTEE7QUFPQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBWixFQUF5QjtFQUN2QkQsTUFBTSxDQUFDQyxXQUFQRCxHQUFxQkUsK0JBQXJCRjtBQUNEO0FBRUQsSUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUxELENBQVdFLFFBQVEsQ0FBQ0MsY0FBVEQsQ0FBd0IsZUFBeEJBLEVBQXlDRSxXQUFwREosQ0FBYjtBQUNBLElBQU1LLFdBQUYsR0FBd0JOLElBQTVCLENBQU1NLFdBQUY7RUFBZUMsSUFBZixHQUF3QlAsSUFBNUIsQ0FBbUJPLElBQWY7QUFDSkQsV0FBVyxHQUFHQSxXQUFXLElBQUksRUFBN0JBO0FBQ0EsSUFBSUUsY0FBYyxHQUFHLElBQXJCLENBQ0E7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLHVCQUFkO0FBQ0EsSUFBTUMsYUFBYSxHQUNqQkwsV0FBVyxJQUFJQSxXQUFXLENBQUNNLFFBQVpOLENBQXFCLEdBQXJCQSxJQUE0QixFQUE1QkEsR0FBaUMsR0FBckMsQ0FBWEEsR0FBdUQsdUJBRHpELENBR0E7QUFDQSxT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TyxRQUFRLENBQUN1TyxJQUFmLEVBQXFCO1VBQ25CbkcsV0FBVyxFQUFFO1FBRE0sQ0FBckIsRUFFR0UsSUFGSCxDQUVTa0csaUJBQUQsRUFBYTtVQUNuQixJQUFJQSxPQUFPLENBQUN6UCxNQUFSeVAsS0FBbUIsR0FBdkIsRUFBNEI7WUFDMUJ4TyxRQUFRLENBQUNDLE1BQVREO1VBQ0Q7UUFDRixDQU5EO01BT0Q7SUFDRixDQUFDLFFBQU95TyxHQUFQLEVBQVk7TUFDWnZPLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBYyw0Q0FBZEEsRUFBNER1TyxHQUE1RHZPO0lBQ0Q7RUFDRixDQWxCRDZOO0FBbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShKU09OLnBhcnNlKHMucmVzcG9uc2VUZXh0KSl9LGJsb2I6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtzLnJlc3BvbnNlXSkpfSxjbG9uZTphLGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gb30sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB1fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiBpfX19fTtmb3IodmFyIGwgaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLHMub25sb2FkPWZ1bmN0aW9uKCl7cy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24oZSxuLHQpe28ucHVzaChuPW4udG9Mb3dlckNhc2UoKSksdS5wdXNoKFtuLHRdKSxpW25dPWlbbl0/aVtuXStcIixcIit0OnR9KSx0KGEoKSl9LHMub25lcnJvcj1yLHMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobCxuLmhlYWRlcnNbbF0pO3Muc2VuZChuLmJvZHl8fG51bGwpfSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCBFdmVudFNvdXJjZVBvbHlmaWxsIGZyb20gJy4vZXZlbnQtc291cmNlLXBvbHlmaWxsJ1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuaW1wb3J0IHsgc2V0dXBQaW5nIH0gZnJvbSAnLi9vbi1kZW1hbmQtZW50cmllcy11dGlscydcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9mb3VjJ1xuXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpXG5sZXQgeyBhc3NldFByZWZpeCwgcGFnZSB9ID0gZGF0YVxuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbFxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX19cbmNvbnN0IGhvdFVwZGF0ZVBhdGggPVxuICBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLydcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYylcbiAgICAgID8ganNvbkRhdGEuY1xuICAgICAgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKVxuICAgICkuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gXG4gICAgICAgICkgIT09IC0xIHx8XG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7XG4gICAgICAgICAgICBjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWBcbiAgICAgICAgICB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2hcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gIH1cbn1cblxuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yYCxcbn0pLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcblxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3N5bmMnIHx8IG1lc3NhZ2UuYWN0aW9uID09PSAnYnVpbHQnKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1vc3RSZWNlbnRIYXNoID0gbWVzc2FnZS5oYXNoXG4gICAgICB0cnlBcHBseVVwZGF0ZXMoKVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdyZWxvYWRQYWdlJykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfVxuICB9IGNhdGNoIChleCkge1xuICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KVxuICB9XG59KVxuXG5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpID0+IHBhZ2UpXG5kaXNwbGF5Q29udGVudCgpXG4iLCJjb25zdCBldmVudENhbGxiYWNrcyA9IFtdXG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHZhciBzb3VyY2VcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgdmFyIGxpc3RlbmVycyA9IFtdXG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDBcbiAgfVxuXG4gIGluaXQoKVxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMilcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKVxuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmVcbiAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3RcbiAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpXG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KVxuICAgIH1cblxuICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVyblxuICAgICAgY2IoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICBzb3VyY2UuY2xvc2UoKVxuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm9uZGVtYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogKGNiKSA9PiB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2VcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlclxudmFyIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyXG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlclxuXG5pZiAoQWJvcnRDb250cm9sbGVyID09IHVuZGVmaW5lZCkge1xuICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaWduYWwgPSBudWxsXG4gICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgdGhpcy5iaXRzTmVlZGVkID0gMFxuICB0aGlzLmNvZGVQb2ludCA9IDBcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZlxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGQ3ZmYpIHx8XG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHhlMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGZmZmYpXG4gICAgICApXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAxMDAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgxMGZmZmZcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDFcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMlxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgdmFyIFJFUExBQ0VSID0gMHhmZmZkXG4gIHZhciBzdHJpbmcgPSAnJ1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZFxuICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV1cbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXRcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDFcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMlxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgN1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYml0c05lZWRlZCAhPT0gMCAmJlxuICAgICAgICAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNlxuICAgICAgY29kZVBvaW50ID0gKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMCkpXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDB4ZGMwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgJiAweDNmZilcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkXG4gIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSAndGVzdCdcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGxcbn1cblxudmFyIGsgPSBmdW5jdGlvbiAoKSB7fVxuXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gIHRoaXMucmVzcG9uc2VUeXBlID0gJydcbiAgdGhpcy5yZWFkeVN0YXRlID0gMFxuICB0aGlzLnN0YXR1cyA9IDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJydcbiAgdGhpcy5yZXNwb25zZVRleHQgPSAnJ1xuICB0aGlzLm9ucHJvZ3Jlc3MgPSBrXG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICB0aGlzLl9jb250ZW50VHlwZSA9ICcnXG4gIHRoaXMuX3hociA9IHhoclxuICB0aGlzLl9zZW5kVGltZW91dCA9IDBcbiAgdGhpcy5fYWJvcnQgPSBrXG59XG5cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgdGhpcy5fYWJvcnQodHJ1ZSlcblxuICB2YXIgdGhhdCA9IHRoaXNcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICB2YXIgc3RhdGUgPSAxXG4gIHZhciB0aW1lb3V0ID0gMFxuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KVxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICB4aHIub25sb2FkID0ga1xuICAgICAgeGhyLm9uZXJyb3IgPSBrXG4gICAgICB4aHIub25hYm9ydCA9IGtcbiAgICAgIHhoci5vbnByb2dyZXNzID0ga1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUgPSAwXG4gIH1cblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnXG4gICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDBcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gJydcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJ1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZVxuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICBzdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMlxuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0XG4gICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBvblN0YXJ0KClcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gM1xuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnXG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzXG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dFxuICAgICAgdGhhdC5vbnByb2dyZXNzKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gT3BlcmEgMTJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBvbkZpbmlzaCgpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDUwMClcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaFxuICB4aHIub25lcnJvciA9IG9uRmluaXNoXG4gIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbiAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcbiAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaFxuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICBpZiAoXG4gICAgISgnc2VuZEFzQmluYXJ5JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgISgnbW96QW5vbicgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKVxuICApIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3NcbiAgfVxuXG4gIC8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbiAgLy8gT3BlcmEgPCAxMlxuICAvLyBGaXJlZm94IDwgMy41XG4gIC8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuICAvLyBzZWUgYWxzbyAjNjRcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9uUmVhZHlTdGF0ZUNoYW5nZVxuXG4gIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ3BhZGRpbmc9dHJ1ZSdcbiAgfVxuICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcblxuICBpZiAoJ3JlYWR5U3RhdGUnIGluIHhocikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuICAgIC8vICM5MVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgMClcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Fib3J0KGZhbHNlKVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHhocikge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgOiAnJ1xufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gIGlmIChcbiAgICAhKCdvbnRpbWVvdXQnIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZSdcbiAgKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgICAgdGhhdC5zZW5kKClcbiAgICB9LCA0KVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICAvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICB0cnkge1xuICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICB4aHIuc2VuZCh1bmRlZmluZWQpXG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbiAgICB0aHJvdyBlcnJvcjFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMHgyMClcbiAgfSlcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbGluZSA9IGFycmF5W2ldXG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKVxuICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKVxuICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJylcbiAgICBtYXBbdG9Mb3dlckNhc2UobmFtZSldID0gdmFsdWVcbiAgfVxuICB0aGlzLl9tYXAgPSBtYXBcbn1cbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV1cbn1cblxuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge31cblxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gIHZhciBvZmZzZXQgPSAwXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldClcbiAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoXG4gICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICB9XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgdmFyIGhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnXG4gIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfVxuICB9XG4gIHhoci5zZW5kKClcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycykge1xuICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyc1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKVxufVxuXG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHt9XG5cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbCAvLyBzZWUgIzEyMFxuICB2YXIgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICBmZXRjaCh1cmwsIHtcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksXG4gICAgICAgIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZWFkZXJcbiAgICAgICAgICAgIC5yZWFkKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgICAgICAgICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICB0aGlzLl9saXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBlXG4gIH0sIDApXG59XG5cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldCA9IHRoaXNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMgPSBbXVxuICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnNcbiAgfVxuICB2YXIgZm91bmQgPSBmYWxzZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgIGZvdW5kID0gdHJ1ZVxuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhXG4gIHRoaXMubGFzdEV2ZW50SWQgPSBvcHRpb25zLmxhc3RFdmVudElkXG59XG5cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxuZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbn1cblxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG52YXIgV0FJVElORyA9IC0xXG52YXIgQ09OTkVDVElORyA9IDBcbnZhciBPUEVOID0gMVxudmFyIENMT1NFRCA9IDJcblxudmFyIEFGVEVSX0NSID0gLTFcbnZhciBGSUVMRF9TVEFSVCA9IDBcbnZhciBGSUVMRCA9IDFcbnZhciBWQUxVRV9TVEFSVCA9IDJcbnZhciBWQUxVRSA9IDNcblxudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaVxuXG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDBcbnZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDBcblxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGRlZikge1xuICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgaWYgKG4gIT09IG4pIHtcbiAgICBuID0gZGVmXG4gIH1cbiAgcmV0dXJuIGNsYW1wRHVyYXRpb24obilcbn1cbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIE1JTklNVU1fRFVSQVRJT04pLCBNQVhJTVVNX0RVUkFUSU9OKVxufVxuXG52YXIgZmlyZSA9IGZ1bmN0aW9uICh0aGF0LCBmLCBldmVudCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93RXJyb3IoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xuICBFdmVudFRhcmdldC5jYWxsKHRoaXMpXG5cbiAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWRcbiAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWRcbiAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkXG5cbiAgdGhpcy51cmwgPSB1bmRlZmluZWRcbiAgdGhpcy5yZWFkeVN0YXRlID0gdW5kZWZpbmVkXG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbiAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWRcblxuICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpXG59XG5cbnZhciBpc0ZldGNoU3VwcG9ydGVkID1cbiAgZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UucHJvdG90eXBlXG5cbmZ1bmN0aW9uIHN0YXJ0KGVzLCB1cmwsIG9wdGlvbnMpIHtcbiAgdXJsID0gU3RyaW5nKHVybClcbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpXG5cbiAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMClcbiAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWRcbiAgICAgID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKVxuICAgICAgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKVxuXG4gIHZhciBsYXN0RXZlbnRJZCA9ICcnXG4gIHZhciByZXRyeSA9IGluaXRpYWxSZXRyeVxuICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICB2YXIgaGVhZGVycyA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpXG4gICAgICA6IHVuZGVmaW5lZFxuICB2YXIgQ3VycmVudFRyYW5zcG9ydCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkXG4gICAgICA/IG9wdGlvbnMuVHJhbnNwb3J0XG4gICAgICA6IFhNTEh0dHBSZXF1ZXN0XG4gIHZhciB4aHIgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpXG4gIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KClcbiAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gIHZhciB0aW1lb3V0ID0gMFxuICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICB2YXIgZGF0YUJ1ZmZlciA9ICcnXG4gIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnXG4gIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJ1xuXG4gIHZhciB0ZXh0QnVmZmVyID0gJydcbiAgdmFyIHN0YXRlID0gRklFTERfU1RBUlRcbiAgdmFyIGZpZWxkU3RhcnQgPSAwXG4gIHZhciB2YWx1ZVN0YXJ0ID0gMFxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMsIGNhbmNlbCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXR1cyA9PT0gMjAwICYmXG4gICAgICAgIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU5cbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJ1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArXG4gICAgICAgICAgICBzdGF0dXMgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgK1xuICAgICAgICAgICAgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArXG4gICAgICAgICAgICAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArXG4gICAgICAgICAgICAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpXG4gICAgICAgIGNsb3NlKClcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICh0ZXh0Q2h1bmspIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOKSB7XG4gICAgICB2YXIgbiA9IC0xXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBuID0gaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKDAsIG4gKyAxKVxuICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UobiArIDEpXG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSkge1xuICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSlcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2h1bmsuc2xpY2UoXG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCArXG4gICAgICAgICAgICAgICAgICAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmXG4gICAgICAgICAgICAgICAgICBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSAnICcuY2hhckNvZGVBdCgwKVxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJ1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdyZXRyeScpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUmV0cnkgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBpbml0aWFsUmV0cnkpXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2hlYXJ0YmVhdFRpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlclxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFCdWZmZXIuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgZmllbGRTdGFydCA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTERcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgaWYgKGMgPT09ICc6Jy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVfU1RBUlRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOIHx8IGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uVGltZW91dCgpXG4gICAgICB9LCByZXRyeSlcbiAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSlcblxuICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnZXJyb3InKVxuICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50U3RhdGUgPSBDTE9TRURcbiAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB0aW1lb3V0ID0gMFxuICAgIH1cbiAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEXG4gIH1cblxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSAwXG5cbiAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvd0Vycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdObyBhY3Rpdml0eSB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgK1xuICAgICAgICAgICAgICAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLidcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG5cbiAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IGxhc3RFdmVudElkXG4gICAgdGV4dEJ1ZmZlciA9ICcnXG4gICAgZmllbGRTdGFydCA9IDBcbiAgICB2YWx1ZVN0YXJ0ID0gMFxuICAgIHN0YXRlID0gRklFTERfU1RBUlRcblxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgIC8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbiAgICB2YXIgcmVxdWVzdFVSTCA9IHVybFxuICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XG4gICAgICBpZiAobGFzdEV2ZW50SWQgIT09ICcnKSB7XG4gICAgICAgIHJlcXVlc3RVUkwgKz1cbiAgICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICtcbiAgICAgICAgICAnbGFzdEV2ZW50SWQ9JyArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fVxuICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSdcbiAgICBpZiAoaGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydC5vcGVuKFxuICAgICAgICB4aHIsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIG9uRmluaXNoLFxuICAgICAgICByZXF1ZXN0VVJMLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsb3NlKClcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgZXMudXJsID0gdXJsXG4gIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICBlcy5fY2xvc2UgPSBjbG9zZVxuXG4gIG9uVGltZW91dCgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Nsb3NlKClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNvdXJjZVBvbHlmaWxsXG4iLCIvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVtb3ZlIE5leHQuanMnIG5vLUZPVUMgc3R5bGVzIHdvcmthcm91bmQgZm9yIHVzaW5nXG4vLyBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudC4gSXQgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGh5ZHJhdGlvbiwgb3IgZWxzZVxuLy8gcmVuZGVyaW5nIHdvbid0IGhhdmUgdGhlIGNvcnJlY3QgY29tcHV0ZWQgdmFsdWVzIGluIGVmZmVjdHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgOyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoO1xuICAgICAgaS0tO1xuXG4gICAgKSB7XG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSlcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9KVxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5cbmxldCBldnRTb3VyY2VcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKClcbiAgZXZ0U291cmNlID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm5cbiAgY3VycmVudFBhZ2UgPSBwYXRobmFtZVxuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKClcblxuICBjb25zdCB1cmwgPSBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWBcbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHsgcGF0aDogdXJsLCB0aW1lb3V0OiA1MDAwLCBvbmRlbWFuZDogMSB9KVxuXG4gIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpID0+IHtcbiAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpXG4gICAgfVxuICB9KVxufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
/*!
 * AIQUA SDK: aiqua v3.18.1 staging | (c) Appier
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "../../node_modules/asap/browser-raw.js":
/*!**************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/asap/browser-raw.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/web-sdk/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
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

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _toArray(arr) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/babel-preset-react-app/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../node_modules/babel-preset-react-app/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../../node_modules/compare-versions/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/compare-versions/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  return function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

}));


/***/ }),

/***/ "../../node_modules/component-emitter/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/component-emitter/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "../../node_modules/core-js/fn/array/from.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/fn/array/from.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../../node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "../../node_modules/core-js/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/modules/_core.js").Array.from;


/***/ }),

/***/ "../../node_modules/core-js/fn/array/includes.js":
/*!***********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/fn/array/includes.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "../../node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "../../node_modules/core-js/fn/object/assign.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/fn/object/assign.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../../node_modules/core-js/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/modules/_core.js").Object.assign;


/***/ }),

/***/ "../../node_modules/core-js/fn/string/includes.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/fn/string/includes.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.includes */ "../../node_modules/core-js/modules/es6.string.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/modules/_core.js").String.includes;


/***/ }),

/***/ "../../node_modules/core-js/modules/_a-function.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_a-function.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_an-object.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-includes.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_array-includes.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_classof.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_classof.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_cof.js":
/*!******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_cof.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_core.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_create-property.js":
/*!******************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_create-property.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_ctx.js":
/*!******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_ctx.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_defined.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_defined.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_descriptors.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_dom-create.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-bug-keys.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/modules/_export.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_export.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails-is-regexp.js":
/*!******************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_fails.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_global.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_global.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_has.js":
/*!******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_has.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_hide.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_hide.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_html.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_html.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_iobject.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iobject.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array-iter.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_is-array-iter.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_is-object.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-regexp.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_is-regexp.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-call.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iter-call.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-create.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iter-create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-define.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iter-define.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-detect.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iter-detect.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iterators.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_iterators.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_library.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-assign.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-assign.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-create.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-create.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-dp.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dps.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-dps.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gops.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-gops.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gpo.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-gpo.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys-internal.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-keys.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-pie.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_object-pie.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/modules/_property-desc.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_property-desc.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine.js":
/*!***********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_redefine.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-to-string-tag.js":
/*!********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared-key.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_shared-key.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_shared.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_string-at.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_string-at.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_string-context.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_string-context.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-absolute-index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-absolute-index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-integer.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-integer.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-iobject.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-iobject.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-length.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-length.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-object.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-object.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!***************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_to-primitive.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_uid.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/_wks.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.from.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/es6.array.from.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../../node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.assign.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/es6.object.assign.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../../node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.includes.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/es6.string.includes.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../../node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.iterator.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.array.includes.js":
/*!********************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/core-js/modules/es7.array.includes.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/in_web/inweb_html_popup/inweb_html_popup.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/in_web/inweb_html_popup/inweb_html_popup.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-popup-3j0wj{position:fixed;top:0;bottom:0;left:0;right:0;z-index:999999;text-align:center;white-space:nowrap;-webkit-animation-name:aiq-onPopupFadeIn-2-RxQ;animation-name:aiq-onPopupFadeIn-2-RxQ;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aiq-popup-3j0wj,.aiq-popup-scroll-2WIIK{-webkit-box-sizing:border-box;box-sizing:border-box}.aiq-popup-scroll-2WIIK{width:100%;height:100%;padding:30px 10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.aiq-popup-scroll-2WIIK:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.aiq-overlay-6hRJt{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:-1;pointer-events:none}.aiq-close-button-3UAWN{position:absolute;top:10px;right:10px;width:24px;height:24px;background-color:#fff;color:#000;border-radius:50%;cursor:pointer}.aiq-close-button-3UAWN:before{top:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left}.aiq-close-button-3UAWN:after,.aiq-close-button-3UAWN:before{content:\"\";position:absolute;left:7px;width:60%;height:2px;background:currentColor}.aiq-close-button-3UAWN:after{bottom:6px;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-transform-origin:left;transform-origin:left}.aiq-container-1w3uo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;max-width:100%;text-align:start;position:relative}@-webkit-keyframes aiq-onPopupFadeIn-2-RxQ{0%{opacity:0}to{opacity:1}}@keyframes aiq-onPopupFadeIn-2-RxQ{0%{opacity:0}to{opacity:1}}", ""]);

// exports
exports.locals = {
	"popup": "aiq-popup-3j0wj",
	"onPopupFadeIn": "aiq-onPopupFadeIn-2-RxQ",
	"popup-scroll": "aiq-popup-scroll-2WIIK",
	"overlay": "aiq-overlay-6hRJt",
	"close-button": "aiq-close-button-3UAWN",
	"container": "aiq-container-1w3uo"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/in_web/inweb_lead_popup/inweb_lead_popup.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/in_web/inweb_lead_popup/inweb_lead_popup.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-popup-2n2jl{position:fixed;top:0;bottom:0;left:0;right:0;z-index:999999;text-align:center;white-space:nowrap;-webkit-animation-name:aiq-onPopupFadeIn-3fI0f;animation-name:aiq-onPopupFadeIn-3fI0f;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aiq-popup-2n2jl,.aiq-popup-scroll-6FzW5{-webkit-box-sizing:border-box;box-sizing:border-box}.aiq-popup-scroll-6FzW5{width:100%;height:100%;padding:30px 5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.aiq-popup-scroll-6FzW5:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.aiq-overlay-3VVYS{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:-1;pointer-events:none}.aiq-banner-2Wjw_{height:190px;background-position:50% 50%;background-size:cover}.aiq-close-button-1cA2q{position:absolute;top:10px;right:10px;width:24px;height:24px;background-color:#fff;color:#000;border-radius:50%;cursor:pointer}.aiq-close-button-1cA2q:before{top:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left}.aiq-close-button-1cA2q:after,.aiq-close-button-1cA2q:before{content:\"\";position:absolute;left:7px;width:60%;height:2px;background:currentColor}.aiq-close-button-1cA2q:after{bottom:6px;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-transform-origin:left;transform-origin:left}.aiq-container-1nwWc{display:inline-block;vertical-align:middle;width:100%;max-width:340px;text-align:start;position:relative;border-radius:6px;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.5);box-shadow:0 2px 12px 0 rgba(0,0,0,.5);background-color:#fff;overflow:hidden}@-webkit-keyframes aiq-onPopupFadeIn-3fI0f{0%{opacity:0}to{opacity:1}}@keyframes aiq-onPopupFadeIn-3fI0f{0%{opacity:0}to{opacity:1}}.aiq-title-de_v-{font-size:20px;font-weight:600;margin:30px 20px 10px}.aiq-message-17hNz,.aiq-title-de_v-{font-family:OpenSans;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#000;white-space:normal}.aiq-message-17hNz{font-size:14px;font-weight:400;margin:10px 20px 30px}.aiq-input-block-1LgH-{height:70px;margin:0 20px;position:relative}.aiq-input-4GWxu{display:block;width:100%;height:40px;line-height:40px;border-radius:5px;border:1px solid #979797;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 20px;font-family:OpenSans;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:rgba(0,0,0,.6)}.aiq-input-error-3DiEs{border-color:#ff5656}.aiq-input-error-3DiEs~.aiq-error-LhLVl{display:block}.aiq-select-1KDzB{-webkit-appearance:none;-moz-appearance:none;appearance:none}.aiq-input-block-1LgH-.aiq-select-block-9hWdm:after{content:\"\";display:inline-block;width:0;height:0;border-color:rgba(0,0,0,.6) transparent transparent;border-style:solid;border-width:5px 5px 0;position:absolute;top:18px;right:18px}.aiq-error-LhLVl,option:disabled{display:none}.aiq-error-LhLVl{font-family:OpenSans;font-size:10px;font-weight:400;font-style:italic;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#ff5656;margin:5px 0 0;white-space:normal}.aiq-error--show-2ujTS{display:block}.aiq-agreement-15pex{margin:0 20px 10px;min-height:57px;position:relative;padding-left:35px}.aiq-agreement-15pex label{display:inline-block;width:25px;height:25px;position:absolute;left:0;cursor:pointer}.aiq-agreement-15pex input[type=checkbox]{position:absolute;opacity:0}.aiq-agreement-15pex i{position:absolute;top:0;left:0;width:22px;height:22px;border-radius:2px;border:1px solid #979797;background-color:#fff}.aiq-agreement-15pex i:before{content:\"\";position:absolute;display:none;left:7px;top:2px;width:7px;height:12px;border:solid #000;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.aiq-agreement-15pex input[type=checkbox]:checked~i:before{display:block}.aiq-agreement-15pex a{color:#0090ff;text-decoration:none}.aiq-agreement-15pex .aiq-text-f3jRC,.aiq-agreement-15pex a{display:inline-block;white-space:normal;font-family:OpenSans;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal}.aiq-agreement-15pex .aiq-text-f3jRC{color:#000}.aiq-submit-button-3872x{font-family:OpenSans;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;letter-spacing:normal;text-align:center;color:#fff;line-height:40px;border-radius:5px;background-color:#0090ff;cursor:pointer;margin:30px 20px}", ""]);

// exports
exports.locals = {
	"popup": "aiq-popup-2n2jl",
	"onPopupFadeIn": "aiq-onPopupFadeIn-3fI0f",
	"popup-scroll": "aiq-popup-scroll-6FzW5",
	"overlay": "aiq-overlay-3VVYS",
	"banner": "aiq-banner-2Wjw_",
	"close-button": "aiq-close-button-1cA2q",
	"container": "aiq-container-1nwWc",
	"title": "aiq-title-de_v-",
	"message": "aiq-message-17hNz",
	"input-block": "aiq-input-block-1LgH-",
	"input": "aiq-input-4GWxu",
	"input-error": "aiq-input-error-3DiEs",
	"error": "aiq-error-LhLVl",
	"select": "aiq-select-1KDzB",
	"select-block": "aiq-select-block-9hWdm",
	"error--show": "aiq-error--show-2ujTS",
	"agreement": "aiq-agreement-15pex",
	"text": "aiq-text-f3jRC",
	"submit-button": "aiq-submit-button-3872x"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/cym_prompt/cym_prompt.css":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/push_prompts/cym_prompt/cym_prompt.css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-cymp-13-Vd{position:fixed;top:0;left:0;height:100%;z-index:2147484000}.aiq-cymp-13-Vd,.aiq-cymp-13-Vd *{-webkit-box-sizing:border-box;box-sizing:border-box}.aiq-overlay-1Ei8F{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;-webkit-animation:aiq-cymPromptOverlayFadeIn-24AGH .3s ease;animation:aiq-cymPromptOverlayFadeIn-24AGH .3s ease;z-index:-1;pointer-events:none}.aiq-cymp-13-Vd.aiq-is-closing-3NpKp .aiq-overlay-1Ei8F{opacity:0}.aiq-container-3Nsn0{position:absolute;top:13px;left:76px;width:354px;padding:13px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;color:#000;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);border-radius:3px;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;-webkit-animation:aiq-cymPromptSlideInDown-JyuLr .5s ease;animation:aiq-cymPromptSlideInDown-JyuLr .5s ease}.aiq-cymp-13-Vd.aiq-is-closing-3NpKp .aiq-container-3Nsn0{-webkit-transform:translateY(-200%);transform:translateY(-200%);pointer-events:none}.aiq-caret-3Yi04{position:absolute;bottom:100%;left:42px;width:0;height:0;color:#fff;border-color:transparent transparent currentcolor;border-style:solid;border-width:0 9px 9px}.aiq-message-10fpp{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:10px;font-size:14px;line-height:1.42;text-align:start;font-family:Helvetica,Arial,sans-serif}.aiq-close-button-2PgJA{position:relative;width:14px;height:14px;margin-top:2px;cursor:pointer;overflow:hidden;color:currentColor;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;border-radius:0}.aiq-close-button-2PgJA:after,.aiq-close-button-2PgJA:before{content:\"\";position:absolute;top:0;left:50%;margin-left:-1px;height:100%;width:2px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:currentColor}.aiq-close-button-2PgJA:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes aiq-cymPromptSlideInDown-JyuLr{0%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes aiq-cymPromptSlideInDown-JyuLr{0%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes aiq-cymPromptSlideInUp-3457s{0%{-webkit-transform:translateY(100px);transform:translateY(100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes aiq-cymPromptSlideInUp-3457s{0%{-webkit-transform:translateY(100px);transform:translateY(100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes aiq-cymPromptOverlayFadeIn-24AGH{0%{opacity:0}to{opacity:1}}@keyframes aiq-cymPromptOverlayFadeIn-24AGH{0%{opacity:0}to{opacity:1}}@media screen and (max-width:520px){.aiq-caret-3Yi04,.aiq-overlay-1Ei8F{display:none}.aiq-container-3Nsn0{top:auto;bottom:0;left:0;width:100vw;-webkit-box-shadow:0 -3px 6px #c5c2c2;box-shadow:0 -3px 6px #c5c2c2;-webkit-animation-name:aiq-cymPromptSlideInUp-3457s;animation-name:aiq-cymPromptSlideInUp-3457s}.aiq-cymp-13-Vd.aiq-is-closing-3NpKp .aiq-container-3Nsn0{-webkit-transform:translateY(200%);transform:translateY(200%)}}", ""]);

// exports
exports.locals = {
	"cymp": "aiq-cymp-13-Vd",
	"overlay": "aiq-overlay-1Ei8F",
	"cymPromptOverlayFadeIn": "aiq-cymPromptOverlayFadeIn-24AGH",
	"is-closing": "aiq-is-closing-3NpKp",
	"container": "aiq-container-3Nsn0",
	"cymPromptSlideInDown": "aiq-cymPromptSlideInDown-JyuLr",
	"caret": "aiq-caret-3Yi04",
	"message": "aiq-message-10fpp",
	"close-button": "aiq-close-button-2PgJA",
	"cymPromptSlideInUp": "aiq-cymPromptSlideInUp-3457s"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/fake_prompt/fake_prompt.css":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/push_prompts/fake_prompt/fake_prompt.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-fake-prompt-19xM1{position:fixed;top:0;left:0;height:100%;z-index:2147483000}.aiq-fake-prompt-19xM1,.aiq-fake-prompt-19xM1 *{-webkit-box-sizing:border-box;box-sizing:border-box}.aiq-overlay-2h1_g{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;-webkit-animation:aiq-fakePromptOverlayFadeIn-1qYSZ .3s ease;animation:aiq-fakePromptOverlayFadeIn-1qYSZ .3s ease;z-index:-1;pointer-events:none}.aiq-fake-prompt-19xM1.aiq-is-closing-3uhtC .aiq-overlay-2h1_g{opacity:0}.aiq-container-2qr4t{position:absolute;top:0;left:76px;width:354px;color:#000;background-color:#fff;-webkit-box-shadow:0 4px 6px #a9a1a1;box-shadow:0 4px 6px #a9a1a1;font-size:16px;line-height:1;text-align:start;font-family:Helvetica,Arial,sans-serif;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;-webkit-animation:aiq-fakePromptSlideInDown-2NSDt .5s ease;animation:aiq-fakePromptSlideInDown-2NSDt .5s ease}.aiq-fake-prompt-19xM1.aiq-is-middle-1PRoZ .aiq-container-2qr4t{left:50vw;margin-left:-177px}.aiq-fake-prompt-19xM1.aiq-is-closing-3uhtC .aiq-container-2qr4t{-webkit-transform:translateY(-200%);transform:translateY(-200%);pointer-events:none}.aiq-content-wrapper-1kB1O{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:16px 16px 0}.aiq-fake-prompt-19xM1 .aiq-icon-1xo3a{width:32px;height:32px;margin-right:14px}.aiq-content-2C1uR{-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:87%}.aiq-content-2C1uR h3{margin:0 0 1px;font-size:16px;line-height:24px;color:inherit}.aiq-content-2C1uR h3,.aiq-content-2C1uR p{font-weight:400;text-align:start;word-break:break-all}.aiq-content-2C1uR p{margin:0;font-size:14px;line-height:20px;color:rgba(0,0,0,.6)}.aiq-action-buttons-1y2Pa{margin-top:14px;padding:0 16px 16px;overflow:auto;text-align:right;white-space:nowrap}.aiq-action-buttons-1y2Pa button{display:inline-block;padding:8px 16px;font-size:14px;line-height:1;font-weight:700;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;outline:none;border-radius:0;margin:0;min-width:0}.aiq-action-buttons-1y2Pa .aiq-close-button-2z4-6{margin-right:16px;color:rgba(0,0,0,.4)}.aiq-action-buttons-1y2Pa .aiq-confirm-button-3LchN{color:#fff;background-color:#006df0;border-radius:3px}@-webkit-keyframes aiq-fakePromptSlideInDown-2NSDt{0%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes aiq-fakePromptSlideInDown-2NSDt{0%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes aiq-fakePromptSlideInUp-guVQx{0%{-webkit-transform:translateY(100px);transform:translateY(100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes aiq-fakePromptSlideInUp-guVQx{0%{-webkit-transform:translateY(100px);transform:translateY(100px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes aiq-fakePromptOverlayFadeIn-1qYSZ{0%{opacity:0}to{opacity:1}}@keyframes aiq-fakePromptOverlayFadeIn-1qYSZ{0%{opacity:0}to{opacity:1}}@media screen and (max-width:520px){.aiq-overlay-2h1_g{display:none}.aiq-container-2qr4t{top:auto;bottom:0;left:0;width:100vw;-webkit-box-shadow:0 -3px 6px #c5c2c2;box-shadow:0 -3px 6px #c5c2c2;-webkit-animation-name:aiq-fakePromptSlideInUp-guVQx;animation-name:aiq-fakePromptSlideInUp-guVQx}.aiq-fake-prompt-19xM1.aiq-is-middle-1PRoZ .aiq-container-2qr4t{left:0;margin-left:0}.aiq-fake-prompt-19xM1.aiq-is-closing-3uhtC .aiq-container-2qr4t{-webkit-transform:translateY(200%);transform:translateY(200%)}}", ""]);

// exports
exports.locals = {
	"fake-prompt": "aiq-fake-prompt-19xM1",
	"overlay": "aiq-overlay-2h1_g",
	"fakePromptOverlayFadeIn": "aiq-fakePromptOverlayFadeIn-1qYSZ",
	"is-closing": "aiq-is-closing-3uhtC",
	"container": "aiq-container-2qr4t",
	"fakePromptSlideInDown": "aiq-fakePromptSlideInDown-2NSDt",
	"is-middle": "aiq-is-middle-1PRoZ",
	"content-wrapper": "aiq-content-wrapper-1kB1O",
	"icon": "aiq-icon-1xo3a",
	"content": "aiq-content-2C1uR",
	"action-buttons": "aiq-action-buttons-1y2Pa",
	"close-button": "aiq-close-button-2z4-6",
	"confirm-button": "aiq-confirm-button-3LchN",
	"fakePromptSlideInUp": "aiq-fakePromptSlideInUp-guVQx"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-popup-3qzye{position:fixed;top:0;bottom:0;left:0;right:0;z-index:999999;text-align:center;white-space:nowrap;-webkit-animation-name:aiq-onSubscribedPopupFadeIn-2UXLW;animation-name:aiq-onSubscribedPopupFadeIn-2UXLW;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aiq-popup-3qzye,.aiq-popup-scroll-1ztBV{-webkit-box-sizing:border-box;box-sizing:border-box}.aiq-popup-scroll-1ztBV{width:100%;height:100%;padding:30px 10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.aiq-popup-scroll-1ztBV:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.aiq-overlay-SNfsc{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:-1;pointer-events:none}.aiq-overlay-SNfsc+.aiq-close-button-1KXVO{color:#fff}.aiq-close-button-1KXVO{position:fixed;top:20px;right:20px;width:24px;height:24px;cursor:pointer;overflow:hidden;color:#000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;border-radius:0;margin:0;min-width:0}.aiq-close-button-1KXVO:before{top:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left}.aiq-close-button-1KXVO:after,.aiq-close-button-1KXVO:before{content:\"\";position:absolute;left:0;width:150%;height:2px;background:currentColor}.aiq-close-button-1KXVO:after{bottom:0;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-transform-origin:left;transform-origin:left}.aiq-container-l6fX0{display:inline-block;vertical-align:middle;max-width:100%;text-align:start}@-webkit-keyframes aiq-onSubscribedPopupFadeIn-2UXLW{0%{opacity:0}to{opacity:1}}@keyframes aiq-onSubscribedPopupFadeIn-2UXLW{0%{opacity:0}to{opacity:1}}", ""]);

// exports
exports.locals = {
	"popup": "aiq-popup-3qzye",
	"onSubscribedPopupFadeIn": "aiq-onSubscribedPopupFadeIn-2UXLW",
	"popup-scroll": "aiq-popup-scroll-1ztBV",
	"overlay": "aiq-overlay-SNfsc",
	"close-button": "aiq-close-button-1KXVO",
	"container": "aiq-container-l6fX0"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/overlay_prompt/overlay_prompt.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/push_prompts/overlay_prompt/overlay_prompt.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-overlay-1BT3y{position:fixed;z-index:99999999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.9);overflow-x:hidden}.aiq-content-VGqtl{position:relative;top:25%;width:100%;max-width:450px;margin:30px auto 0;text-align:center;color:#fff}.aiq-content-VGqtl h6{font-size:14px;font-weight:400}.aiq-content-VGqtl h4{margin:10px 0;font-size:24px}.aiq-close-button-eUPE_{position:fixed;top:20px;right:20px;width:24px;height:24px;cursor:pointer;overflow:hidden;color:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;border-radius:0}.aiq-close-button-eUPE_:before{top:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:left;transform-origin:left}.aiq-close-button-eUPE_:after,.aiq-close-button-eUPE_:before{content:\"\";position:absolute;left:0;width:150%;height:2px;background:currentColor}.aiq-close-button-eUPE_:after{bottom:0;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-transform-origin:left;transform-origin:left}", ""]);

// exports
exports.locals = {
	"overlay": "aiq-overlay-1BT3y",
	"content": "aiq-content-VGqtl",
	"close-button": "aiq-close-button-eUPE_"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/recommendation/widget.css":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader??ref--6-1!/Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/postcss-loader/src??postcss!./lib/recommendation/widget.css ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aiq-container-GphqG{margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-width:180px;overflow:hidden;font-family:Open Sans}.aiq-container-GphqG .aiq-wrapper-1KT91{-webkit-box-flex:1;-ms-flex:1;flex:1;display:inline-block;font-size:12px;text-decoration:none}.aiq-container-GphqG .aiq-wrapper-1KT91:hover{cursor:pointer;-webkit-transform:scale(1.025);transform:scale(1.025);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.aiq-container-GphqG .aiq-wrapper-1KT91 .aiq-thumbnails-2rton{-ms-flex-preferred-size:100%;flex-basis:100%;margin-bottom:5px;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.aiq-container-GphqG .aiq-wrapper-1KT91 .aiq-text-1rzWe{color:#000}.aiq-container-GphqG .aiq-wrapper-1KT91 .aiq-text-1rzWe+.aiq-text-1rzWe{padding-top:3px}.aiq-container-GphqG .aiq-wrapper-1KT91 .aiq-title-hvjno{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.aiq-container-GphqG .aiq-wrapper-1KT91 .aiq-retailPrice-1vCsZ{text-decoration:line-through}", ""]);

// exports
exports.locals = {
	"container": "aiq-container-GphqG",
	"wrapper": "aiq-wrapper-1KT91",
	"thumbnails": "aiq-thumbnails-2rton",
	"text": "aiq-text-1rzWe",
	"title": "aiq-title-hvjno",
	"retailPrice": "aiq-retailPrice-1vCsZ"
};

/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/css-loader/lib/css-base.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/idb-keyval/dist/idb-keyval.mjs":
/*!*************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/idb-keyval/dist/idb-keyval.mjs ***!
  \*************************************************************************************************************/
/*! exports provided: Store, get, set, del, clear, keys */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
class Store {
    constructor(dbName = 'keyval-store', storeName = 'keyval') {
        this.storeName = storeName;
        this._dbp = new Promise((resolve, reject) => {
            const openreq = indexedDB.open(dbName, 1);
            openreq.onerror = () => reject(openreq.error);
            openreq.onsuccess = () => resolve(openreq.result);
            // First time setup: create an empty object store
            openreq.onupgradeneeded = () => {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    _withIDBStore(type, callback) {
        return this._dbp.then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, type);
            transaction.oncomplete = () => resolve();
            transaction.onabort = transaction.onerror = () => reject(transaction.error);
            callback(transaction.objectStore(this.storeName));
        }));
    }
}
let store;
function getDefaultStore() {
    if (!store)
        store = new Store();
    return store;
}
function get(key, store = getDefaultStore()) {
    let req;
    return store._withIDBStore('readonly', store => {
        req = store.get(key);
    }).then(() => req.result);
}
function set(key, value, store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.put(value, key);
    });
}
function del(key, store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.delete(key);
    });
}
function clear(store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.clear();
    });
}
function keys(store = getDefaultStore()) {
    const keys = [];
    return store._withIDBStore('readonly', store => {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
            if (!this.result)
                return;
            keys.push(this.result.key);
            this.result.continue();
        };
    }).then(() => keys);
}




/***/ }),

/***/ "../../node_modules/js-cookie/src/js.cookie.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/js-cookie/src/js.cookie.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../node_modules/lodash.throttle/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/lodash.throttle/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/web-sdk/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/loglevel/lib/loglevel.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/loglevel/lib/loglevel.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),

/***/ "../../node_modules/promise/lib/core.js":
/*!**************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/promise/lib/core.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(/*! asap/raw */ "../../node_modules/asap/browser-raw.js");

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),

/***/ "../../node_modules/promise/lib/es6-extensions.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/promise/lib/es6-extensions.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(/*! ./core.js */ "../../node_modules/promise/lib/core.js");

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),

/***/ "../../node_modules/promise/lib/rejection-tracking.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/promise/lib/rejection-tracking.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(/*! ./core */ "../../node_modules/promise/lib/core.js");

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),

/***/ "../../node_modules/punycode/punycode.js":
/*!***************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/punycode/punycode.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/web-sdk/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../packages/web-sdk/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/querystring-es3/decode.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/querystring-es3/encode.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/querystring-es3/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../node_modules/rollbar/dist/rollbar.umd.min.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/rollbar/dist/rollbar.umd.min.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";var n=r(2),o="undefined"!=typeof window&&window._rollbarConfig,i=o&&o.globalAlias||"Rollbar",a="undefined"!=typeof window&&window[i]&&"function"==typeof window[i].shimId&&void 0!==window[i].shimId();if("undefined"==typeof window||window._rollbarStartTime||(window._rollbarStartTime=(new Date).getTime()),!a&&o){var s=new n(o);window[i]=s}else"undefined"!=typeof window?(window.rollbar=n,window._rollbarDidLoad=!0):"undefined"!=typeof self&&(self.rollbar=n,self._rollbarDidLoad=!0);t.exports=n},function(t,e,r){"use strict";function n(t,e){this.options=c.handleOptions(x,t);var r=new l(this.options,h,d);this.client=e||new u(this.options,r,p,"browser");var n="undefined"!=typeof window&&window||"undefined"!=typeof self&&self,o="undefined"!=typeof document&&document;i(this.client.notifier,n),a(this.client.queue),(this.options.captureUncaught||this.options.handleUncaughtExceptions)&&(f.captureUncaughtExceptions(n,this),f.wrapGlobals(n,this)),(this.options.captureUnhandledRejections||this.options.handleUnhandledRejections)&&f.captureUnhandledRejections(n,this),this.instrumenter=new w(this.options,this.client.telemeter,this,n,o),this.instrumenter.instrument()}function o(t){var e="Rollbar is not initialized";p.error(e),t&&t(new Error(e))}function i(t,e){t.addTransform(m.handleItemWithError).addTransform(m.ensureItemHasSomethingToSay).addTransform(m.addBaseInfo).addTransform(m.addRequestInfo(e)).addTransform(m.addClientInfo(e)).addTransform(m.addPluginInfo(e)).addTransform(m.addBody).addTransform(g.addMessageWithError).addTransform(g.addTelemetryData).addTransform(g.addConfigToPayload).addTransform(m.scrubPayload).addTransform(g.userTransform(p)).addTransform(g.itemToPayload)}function a(t){t.addPredicate(y.checkLevel).addPredicate(v.checkIgnore).addPredicate(y.userCheckIgnore(p)).addPredicate(y.urlIsNotBlacklisted(p)).addPredicate(y.urlIsWhitelisted(p)).addPredicate(y.messageIsIgnored(p))}function s(t){for(var e=0,r=t.length;e<r;++e)if(c.isFunction(t[e]))return t[e]}var u=r(3),c=r(5),l=r(11),p=r(13),f=r(16),h=r(17),d=r(19),m=r(20),g=r(24),v=r(25),y=r(26),b=r(21),w=r(27),_=null;n.init=function(t,e){return _?_.global(t).configure(t):_=new n(t,e)},n.prototype.global=function(t){return this.client.global(t),this},n.global=function(t){return _?_.global(t):void o()},n.prototype.configure=function(t,e){var r=this.options,n={};return e&&(n={payload:e}),this.options=c.handleOptions(r,t,n),this.client.configure(this.options,e),this.instrumenter.configure(this.options),this},n.configure=function(t,e){return _?_.configure(t,e):void o()},n.prototype.lastError=function(){return this.client.lastError},n.lastError=function(){return _?_.lastError():void o()},n.prototype.log=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.log(t),{uuid:e}},n.log=function(){if(_)return _.log.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.debug=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.debug(t),{uuid:e}},n.debug=function(){if(_)return _.debug.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.info=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.info(t),{uuid:e}},n.info=function(){if(_)return _.info.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.warn=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.warn(t),{uuid:e}},n.warn=function(){if(_)return _.warn.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.warning=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.warning(t),{uuid:e}},n.warning=function(){if(_)return _.warning.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.error=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.error(t),{uuid:e}},n.error=function(){if(_)return _.error.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.critical=function(){var t=this._createItem(arguments),e=t.uuid;return this.client.critical(t),{uuid:e}},n.critical=function(){if(_)return _.critical.apply(_,arguments);var t=s(arguments);o(t)},n.prototype.handleUncaughtException=function(t,e,r,n,o,i){var a,s=c.makeUnhandledStackInfo(t,e,r,n,o,"onerror","uncaught exception",b);c.isError(o)?(a=this._createItem([t,o,i]),a._unhandledStackInfo=s):c.isError(e)?(a=this._createItem([t,e,i]),a._unhandledStackInfo=s):(a=this._createItem([t,i]),a.stackInfo=s),a.level=this.options.uncaughtErrorLevel,a._isUncaught=!0,this.client.log(a)},n.prototype.handleUnhandledRejection=function(t,e){var r="unhandled rejection was null or undefined!";if(t)if(t.message)r=t.message;else{var n=c.stringify(t);n.value&&(r=n.value)}var o,i=t&&t._rollbarContext||e&&e._rollbarContext;c.isError(t)?o=this._createItem([r,t,i]):(o=this._createItem([r,t,i]),o.stackInfo=c.makeUnhandledStackInfo(r,"",0,0,null,"unhandledrejection","",b)),o.level=this.options.uncaughtErrorLevel,o._isUncaught=!0,o._originalArgs=o._originalArgs||[],o._originalArgs.push(e),this.client.log(o)},n.prototype.wrap=function(t,e,r){try{var n;if(n=c.isFunction(e)?e:function(){return e||{}},!c.isFunction(t))return t;if(t._isWrap)return t;if(!t._rollbar_wrapped&&(t._rollbar_wrapped=function(){r&&c.isFunction(r)&&r.apply(this,arguments);try{return t.apply(this,arguments)}catch(r){var e=r;throw e&&window._rollbarWrappedError!==e&&(c.isType(e,"string")&&(e=new String(e)),e._rollbarContext=n()||{},e._rollbarContext._wrappedSource=t.toString(),window._rollbarWrappedError=e),e}},t._rollbar_wrapped._isWrap=!0,t.hasOwnProperty))for(var o in t)t.hasOwnProperty(o)&&"_rollbar_wrapped"!==o&&(t._rollbar_wrapped[o]=t[o]);return t._rollbar_wrapped}catch(e){return t}},n.wrap=function(t,e){return _?_.wrap(t,e):void o()},n.prototype.captureEvent=function(){var t=c.createTelemetryEvent(arguments);return this.client.captureEvent(t.type,t.metadata,t.level)},n.captureEvent=function(){return _?_.captureEvent.apply(_,arguments):void o()},n.prototype.captureDomContentLoaded=function(t,e){return e||(e=new Date),this.client.captureDomContentLoaded(e)},n.prototype.captureLoad=function(t,e){return e||(e=new Date),this.client.captureLoad(e)},n.prototype._createItem=function(t){return c.createItem(t,p,this)};var x={version:"2.5.5",scrubFields:["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken","cc-number","card number","cardnumber","cardnum","ccnum","ccnumber","cc num","creditcardnumber","credit card number","newcreditcardnumber","new credit card","creditcardno","credit card no","card#","card #","cc-csc","cvc2","cvv2","ccv2","security code","card verification","name on credit card","name on card","nameoncard","cardholder","card holder","name des karteninhabers","card type","cardtype","cc type","cctype","payment type","expiration date","expirationdate","expdate","cc-exp"],logLevel:"debug",reportLevel:"debug",uncaughtErrorLevel:"error",endpoint:"api.rollbar.com/api/1/item/",verbose:!1,enabled:!0,sendConfig:!1,includeItemsInTelemetry:!0,captureIp:!0};t.exports=n},function(t,e,r){"use strict";function n(t,e,r,o){this.options=c.merge(t),this.logger=r,n.rateLimiter.configureGlobal(this.options),n.rateLimiter.setPlatformOptions(o,this.options),this.queue=new a(n.rateLimiter,e,r,this.options),this.notifier=new s(this.queue,this.options),this.telemeter=new u(this.options),this.lastError=null,this.lastErrorHash="none"}function o(t){var e=t.message||"",r=(t.err||{}).stack||String(t.err);return e+"::"+r}var i=r(4),a=r(8),s=r(9),u=r(10),c=r(5),l={maxItems:0,itemsPerMinute:60};n.rateLimiter=new i(l),n.prototype.global=function(t){return n.rateLimiter.configureGlobal(t),this},n.prototype.configure=function(t,e){var r=this.options,n={};return e&&(n={payload:e}),this.options=c.merge(r,t,n),this.notifier&&this.notifier.configure(this.options),this.telemeter&&this.telemeter.configure(this.options),this.global(this.options),this},n.prototype.log=function(t){var e=this._defaultLogLevel();return this._log(e,t)},n.prototype.debug=function(t){this._log("debug",t)},n.prototype.info=function(t){this._log("info",t)},n.prototype.warn=function(t){this._log("warning",t)},n.prototype.warning=function(t){this._log("warning",t)},n.prototype.error=function(t){this._log("error",t)},n.prototype.critical=function(t){this._log("critical",t)},n.prototype.wait=function(t){this.queue.wait(t)},n.prototype.captureEvent=function(t,e,r){return this.telemeter.captureEvent(t,e,r)},n.prototype.captureDomContentLoaded=function(t){return this.telemeter.captureDomContentLoaded(t)},n.prototype.captureLoad=function(t){return this.telemeter.captureLoad(t)},n.prototype._log=function(t,e){var r;if(e.callback&&(r=e.callback,delete e.callback),this._sameAsLastError(e)){if(r){var n=new Error("ignored identical item");n.item=e,r(n)}}else try{e.level=e.level||t,this.telemeter._captureRollbarItem(e),e.telemetryEvents=this.telemeter.copyEvents(),this.notifier.log(e,r)}catch(t){this.logger.error(t)}},n.prototype._defaultLogLevel=function(){return this.options.logLevel||"debug"},n.prototype._sameAsLastError=function(t){if(!t._isUncaught)return!1;var e=o(t);return this.lastErrorHash===e||(this.lastError=t.err,this.lastErrorHash=e,!1)},t.exports=n},function(t,e,r){"use strict";function n(t){this.startTime=s.now(),this.counter=0,this.perMinCounter=0,this.platform=null,this.platformOptions={},this.configureGlobal(t)}function o(t,e,r){return!t.ignoreRateLimit&&e>=1&&r>e}function i(t,e,r,n,o,i,s){var u=null;return r&&(r=new Error(r)),r||n||(u=a(t,e,o,i,s)),{error:r,shouldSend:n,payload:u}}function a(t,e,r,n,o){var i,a=e.environment||e.payload&&e.payload.environment;i=o?"item per minute limit reached, ignoring errors until timeout":"maxItems has been hit, ignoring errors until reset.";var s={body:{message:{body:i,extra:{maxItems:r,itemsPerMinute:n}}},language:"javascript",environment:a,notifier:{version:e.notifier&&e.notifier.version||e.version}};return"browser"===t?(s.platform="browser",s.framework="browser-js",s.notifier.name="rollbar-browser-js"):"server"===t?(s.framework=e.framework||"node-js",s.notifier.name=e.notifier.name):"react-native"===t&&(s.framework=e.framework||"react-native",s.notifier.name=e.notifier.name),s}var s=r(5);n.globalSettings={startTime:s.now(),maxItems:void 0,itemsPerMinute:void 0},n.prototype.configureGlobal=function(t){void 0!==t.startTime&&(n.globalSettings.startTime=t.startTime),void 0!==t.maxItems&&(n.globalSettings.maxItems=t.maxItems),void 0!==t.itemsPerMinute&&(n.globalSettings.itemsPerMinute=t.itemsPerMinute)},n.prototype.shouldSend=function(t,e){e=e||s.now();var r=e-this.startTime;(r<0||r>=6e4)&&(this.startTime=e,this.perMinCounter=0);var a=n.globalSettings.maxItems,u=n.globalSettings.itemsPerMinute;if(o(t,a,this.counter))return i(this.platform,this.platformOptions,a+" max items reached",!1);if(o(t,u,this.perMinCounter))return i(this.platform,this.platformOptions,u+" items per minute reached",!1);this.counter++,this.perMinCounter++;var c=!o(t,a,this.counter),l=c;return c=c&&!o(t,u,this.perMinCounter),i(this.platform,this.platformOptions,null,c,a,u,l)},n.prototype.setPlatformOptions=function(t,e){this.platform=t,this.platformOptions=e},t.exports=n},function(t,e,r){"use strict";function n(){if(!P&&(P=!0,c(JSON)&&(s(JSON.stringify)&&(q.stringify=JSON.stringify),s(JSON.parse)&&(q.parse=JSON.parse)),!a(q.stringify)||!a(q.parse))){var t=r(7);t(q)}}function o(t,e){return e===i(t)}function i(t){var e=typeof t;return"object"!==e?e:t?t instanceof Error?"error":{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase():"null"}function a(t){return o(t,"function")}function s(t){var e=/[\\^$.*+?()[\]{}|]/g,r=Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(e,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),n=RegExp("^"+r+"$");return u(t)&&n.test(t)}function u(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function c(t){return!o(t,"undefined")}function l(t){var e=i(t);return"object"===e||"array"===e}function p(t){return o(t,"error")||o(t,"exception")}function f(t,e,r){var n,i,a,s=o(t,"object"),u=o(t,"array"),c=[];if(s&&r.indexOf(t)!==-1)return t;if(r.push(t),s)for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&c.push(n);else if(u)for(a=0;a<t.length;++a)c.push(a);var l=s?{}:[],p=!0;for(a=0;a<c.length;++a)n=c[a],i=t[n],l[n]=e(n,i,r),p=p&&l[n]===t[n];return 0==c.length||p?t:l}function h(){return"********"}function d(){var t=j(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?r:7&r|8).toString(16)});return e}function m(t){var e=g(t);return e?(""===e.anchor&&(e.source=e.source.replace("#","")),t=e.source.replace("?"+e.query,"")):"(unknown)"}function g(t){if(o(t,"string")){for(var e=M,r=e.parser[e.strictMode?"strict":"loose"].exec(t),n={},i=0,a=e.key.length;i<a;++i)n[e.key[i]]=r[i]||"";return n[e.q.name]={},n[e.key[12]].replace(e.q.parser,function(t,r,o){r&&(n[e.q.name][r]=o)}),n}}function v(t,e,r){r=r||{},r.access_token=t;var n,o=[];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&o.push([n,r[n]].join("="));var i="?"+o.sort().join("&");e=e||{},e.path=e.path||"";var a,s=e.path.indexOf("?"),u=e.path.indexOf("#");s!==-1&&(u===-1||u>s)?(a=e.path,e.path=a.substring(0,s)+i+"&"+a.substring(s+1)):u!==-1?(a=e.path,e.path=a.substring(0,u)+i+a.substring(u)):e.path=e.path+i}function y(t,e){if(e=e||t.protocol,!e&&t.port&&(80===t.port?e="http:":443===t.port&&(e="https:")),e=e||"https:",!t.hostname)return null;var r=e+"//"+t.hostname;return t.port&&(r=r+":"+t.port),t.path&&(r+=t.path),r}function b(t,e){var r,n;try{r=q.stringify(t)}catch(o){if(e&&a(e))try{r=e(t)}catch(t){n=t}else n=o}return{error:n,value:r}}function w(t){var e,r;try{e=q.parse(t)}catch(t){r=t}return{error:r,value:e}}function _(t,e,r,n,o,i,a,s){var u={url:e||"",line:r,column:n};u.func=s.guessFunctionName(u.url,u.line),u.context=s.gatherContext(u.url,u.line);var c=document&&document.location&&document.location.href,l=window&&window.navigator&&window.navigator.userAgent;return{mode:i,message:o?String(o):t||a,url:c,stack:[u],useragent:l}}function x(t,e){return function(r,n){try{e(r,n)}catch(e){t.error(e)}}}function k(t,e,r,n,o){for(var a,s,u,c,l,p,f=[],h=0,m=t.length;h<m;++h){p=t[h];var g=i(p);switch(g){case"undefined":break;case"string":a?f.push(p):a=p;break;case"function":c=x(e,p);break;case"date":f.push(p);break;case"error":case"domexception":case"exception":s?f.push(p):s=p;break;case"object":case"array":if(p instanceof Error||"undefined"!=typeof DOMException&&p instanceof DOMException){s?f.push(p):s=p;break}if(n&&"object"===g&&!l){for(var v=0,y=n.length;v<y;++v)if(void 0!==p[n[v]]){l=p;break}if(l)break}u?f.push(p):u=p;break;default:if(p instanceof Error||"undefined"!=typeof DOMException&&p instanceof DOMException){s?f.push(p):s=p;break}f.push(p)}}f.length>0&&(u=F(u),u.extraArgs=f);var b={message:a,err:s,custom:u,timestamp:j(),callback:c,uuid:d()};return u&&void 0!==u.level&&(b.level=u.level,delete u.level),n&&l&&(b.request=l),o&&(b.lambdaContext=o),b._originalArgs=t,b}function E(t,e){for(var r=0;r<t.length;++r)if(t[r]===e)return!0;return!1}function I(t){for(var e,r,n,o,a=0,s=t.length;a<s;++a){o=t[a];var u=i(o);switch(u){case"string":E(U,o)?e=o:E(H,o)&&(n=o);break;case"object":r=o}}var c={type:e||"manual",metadata:r||{},level:n};return c}function T(t,e){if(t){var r=e.split("."),n=t;try{for(var o=0,i=r.length;o<i;++o)n=n[r[o]]}catch(t){n=void 0}return n}}function S(t,e,r){if(t){var n=e.split("."),o=n.length;if(!(o<1)){if(1===o)return void(t[n[0]]=r);try{for(var i=t[n[0]]||{},a=i,s=1;s<o-1;++s)i[n[s]]=i[n[s]]||{},i=i[n[s]];i[n[o-1]]=r,t[n[0]]=a}catch(t){return}}}}function O(t,e){function r(t,e){return e+h()}function n(t){var e;if(o(t,"string"))for(e=0;e<u.length;++e)t=t.replace(u[e],r);return t}function i(t,e){var r;for(r=0;r<s.length;++r)if(s[r].test(t)){e=h();break}return e}function a(t,e,r){var s=i(t,e);return s===e?o(e,"object")||o(e,"array")?f(e,a,r):n(s):s}e=e||[];var s=L(e),u=N(e);return f(t,a,[])}function L(t){for(var e,r=[],n=0;n<t.length;++n)e="^\\[?(%5[bB])?"+t[n]+"\\[?(%5[bB])?\\]?(%5[dD])?$",r.push(new RegExp(e,"i"));return r}function N(t){for(var e,r=[],n=0;n<t.length;++n)e="\\[?(%5[bB])?"+t[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",r.push(new RegExp("("+e+"=)([^&\\n]+)","igm"));return r}function C(t){var e,r,n,o=[];for(e=0,r=t.length;e<r;++e){switch(n=t[e],i(n)){case"object":n=b(n),n=n.error||n.value,n.length>500&&(n=n.substr(0,497)+"...");break;case"null":n="null";break;case"undefined":n="undefined";break;case"symbol":n=n.toString()}o.push(n)}return o.join(" ")}function j(){return Date.now?+Date.now():+new Date}function R(t,e){if(t&&t.user_ip&&e!==!0){var r=t.user_ip;if(e)try{var n;if(r.indexOf(".")!==-1)n=r.split("."),n.pop(),n.push("0"),r=n.join(".");else if(r.indexOf(":")!==-1){if(n=r.split(":"),n.length>2){var o=n.slice(0,3),i=o[2].indexOf("/");i!==-1&&(o[2]=o[2].substring(0,i));var a="0000:0000:0000:0000:0000";r=o.concat(a).join(":")}}else r=null}catch(t){r=null}else r=null;t.user_ip=r}}function A(t,e,r){var n=F(t,e,r);return!e||e.overwriteScrubFields?n:(e.scrubFields&&(n.scrubFields=(t.scrubFields||[]).concat(e.scrubFields)),n)}var F=r(6),q={},P=!1;n();var D={debug:0,info:1,warning:2,error:3,critical:4},M={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},U=["log","network","dom","navigation","error","manual"],H=["critical","error","warning","info","debug"];t.exports={addParamsAndAccessTokenToPath:v,createItem:k,createTelemetryEvent:I,filterIp:R,formatArgsAsString:C,formatUrl:y,get:T,handleOptions:A,isError:p,isFunction:a,isIterable:l,isNativeFunction:s,isType:o,jsonParse:w,LEVELS:D,makeUnhandledStackInfo:_,merge:F,now:j,redact:h,sanitizeUrl:m,scrub:O,set:S,stringify:b,traverse:f,typeName:i,uuid4:d}},function(t,e){"use strict";function r(){var t,e,n,o,a,s={},u=null,c=arguments.length;for(t=0;t<c;t++)if(u=arguments[t],null!=u)for(a in u)e=s[a],n=u[a],s!==n&&(n&&i(n)?(o=e&&i(e)?e:{},s[a]=r(o,n)):"undefined"!=typeof n&&(s[a]=n));return s}var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=function(t){if(!t||"[object Object]"!==o.call(t))return!1;var e=n.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!r)return!1;var i;for(i in t);return"undefined"==typeof i||n.call(t,i)};t.exports=r},function(t,e){var r=function(t){function e(t){return t<10?"0"+t:t}function r(){return this.valueOf()}function n(t){return i.lastIndex=0,i.test(t)?'"'+t.replace(i,function(t){var e=u[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function o(t,e){var r,i,u,l,p,f=a,h=e[t];switch(h&&"object"==typeof h&&"function"==typeof h.toJSON&&(h=h.toJSON(t)),"function"==typeof c&&(h=c.call(e,t,h)),typeof h){case"string":return n(h);case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":return String(h);case"object":if(!h)return"null";if(a+=s,p=[],"[object Array]"===Object.prototype.toString.apply(h)){for(l=h.length,r=0;r<l;r+=1)p[r]=o(r,h)||"null";return u=0===p.length?"[]":a?"[\n"+a+p.join(",\n"+a)+"\n"+f+"]":"["+p.join(",")+"]",a=f,u}if(c&&"object"==typeof c)for(l=c.length,r=0;r<l;r+=1)"string"==typeof c[r]&&(i=c[r],u=o(i,h),u&&p.push(n(i)+(a?": ":":")+u));else for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(u=o(i,h),u&&p.push(n(i)+(a?": ":":")+u));return u=0===p.length?"{}":a?"{\n"+a+p.join(",\n"+a)+"\n"+f+"}":"{"+p.join(",")+"}",a=f,u}}var i=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=r,Number.prototype.toJSON=r,String.prototype.toJSON=r);var a,s,u,c;"function"!=typeof t.stringify&&(u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t.stringify=function(t,e,r){var n;if(a="",s="","number"==typeof r)for(n=0;n<r;n+=1)s+=" ";else"string"==typeof r&&(s=r);if(c=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return o("",{"":t})}),"function"!=typeof t.parse&&(t.parse=function(){function t(t){return t.replace(/\\(?:u(.{4})|([^u]))/g,function(t,e,r){return e?String.fromCharCode(parseInt(e,16)):a[r]})}var e,r,n,o,i,a={"\\":"\\",'"':'"',"/":"/",t:"\t",n:"\n",r:"\r",f:"\f",b:"\b"},s={go:function(){e="ok"},firstokey:function(){o=i,e="colon"},okey:function(){o=i,e="colon"},ovalue:function(){e="ocomma"},firstavalue:function(){e="acomma"},avalue:function(){e="acomma"}},u={go:function(){e="ok"},ovalue:function(){e="ocomma"},firstavalue:function(){e="acomma"},avalue:function(){e="acomma"}},c={"{":{go:function(){r.push({state:"ok"}),n={},e="firstokey"},ovalue:function(){r.push({container:n,state:"ocomma",key:o}),n={},e="firstokey"},firstavalue:function(){r.push({container:n,state:"acomma"}),n={},e="firstokey"},avalue:function(){r.push({container:n,state:"acomma"}),n={},e="firstokey"}},"}":{firstokey:function(){var t=r.pop();i=n,n=t.container,o=t.key,e=t.state},ocomma:function(){var t=r.pop();n[o]=i,i=n,n=t.container,o=t.key,e=t.state}},"[":{go:function(){r.push({state:"ok"}),n=[],e="firstavalue"},ovalue:function(){r.push({container:n,state:"ocomma",key:o}),n=[],e="firstavalue"},firstavalue:function(){r.push({container:n,state:"acomma"}),n=[],e="firstavalue"},avalue:function(){r.push({container:n,state:"acomma"}),n=[],e="firstavalue"}},"]":{firstavalue:function(){var t=r.pop();i=n,n=t.container,o=t.key,e=t.state},acomma:function(){var t=r.pop();n.push(i),i=n,n=t.container,o=t.key,e=t.state}},":":{colon:function(){if(Object.hasOwnProperty.call(n,o))throw new SyntaxError("Duplicate key '"+o+'"');e="ovalue"}},",":{ocomma:function(){n[o]=i,e="okey"},acomma:function(){n.push(i),e="avalue"}},true:{go:function(){i=!0,e="ok"},ovalue:function(){i=!0,e="ocomma"},firstavalue:function(){i=!0,e="acomma"},avalue:function(){i=!0,e="acomma"}},false:{go:function(){i=!1,e="ok"},ovalue:function(){i=!1,e="ocomma"},firstavalue:function(){i=!1,e="acomma"},avalue:function(){i=!1,e="acomma"}},null:{go:function(){i=null,e="ok"},ovalue:function(){i=null,e="ocomma"},firstavalue:function(){i=null,e="acomma"},avalue:function(){i=null,e="acomma"}}};return function(n,o){var a,l=/^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;e="go",r=[];try{for(;;){if(a=l.exec(n),!a)break;a[1]?c[a[1]][e]():a[2]?(i=+a[2],u[e]()):(i=t(a[3]),s[e]()),n=n.slice(a[0].length)}}catch(t){e=t}if("ok"!==e||/[^\u0020\t\n\r]/.test(n))throw e instanceof SyntaxError?e:new SyntaxError("JSON");return"function"==typeof o?function t(e,r){var n,a,s=e[r];if(s&&"object"==typeof s)for(n in i)Object.prototype.hasOwnProperty.call(s,n)&&(a=t(s,n),void 0!==a?s[n]=a:delete s[n]);return o.call(e,r,s)}({"":i},""):i}}())};t.exports=r},function(t,e,r){"use strict";function n(t,e,r,n){this.rateLimiter=t,this.api=e,this.logger=r,this.options=n,this.predicates=[],this.pendingItems=[],this.pendingRequests=[],this.retryQueue=[],this.retryHandle=null,this.waitCallback=null,this.waitIntervalID=null}var o=r(5);n.prototype.configure=function(t){this.api&&this.api.configure(t);var e=this.options;return this.options=o.merge(e,t),this},n.prototype.addPredicate=function(t){return o.isFunction(t)&&this.predicates.push(t),this},n.prototype.addPendingItem=function(t){this.pendingItems.push(t)},n.prototype.removePendingItem=function(t){var e=this.pendingItems.indexOf(t);e!==-1&&this.pendingItems.splice(e,1)},n.prototype.addItem=function(t,e,r,n){e&&o.isFunction(e)||(e=function(){});var i=this._applyPredicates(t);if(i.stop)return this.removePendingItem(n),void e(i.err);this._maybeLog(t,r),this.removePendingItem(n),this.pendingRequests.push(t);try{this._makeApiRequest(t,function(r,n){this._dequeuePendingRequest(t),e(r,n)}.bind(this))}catch(r){this._dequeuePendingRequest(t),e(r)}},n.prototype.wait=function(t){o.isFunction(t)&&(this.waitCallback=t,this._maybeCallWait()||(this.waitIntervalID&&(this.waitIntervalID=clearInterval(this.waitIntervalID)),this.waitIntervalID=setInterval(function(){this._maybeCallWait()}.bind(this),500)))},n.prototype._applyPredicates=function(t){for(var e=null,r=0,n=this.predicates.length;r<n;r++)if(e=this.predicates[r](t,this.options),!e||void 0!==e.err)return{stop:!0,err:e.err};return{stop:!1,err:null}},n.prototype._makeApiRequest=function(t,e){var r=this.rateLimiter.shouldSend(t);r.shouldSend?this.api.postItem(t,function(r,n){r?this._maybeRetry(r,t,e):e(r,n)}.bind(this)):r.error?e(r.error):this.api.postItem(r.payload,e)};var i=["ECONNRESET","ENOTFOUND","ESOCKETTIMEDOUT","ETIMEDOUT","ECONNREFUSED","EHOSTUNREACH","EPIPE","EAI_AGAIN"];n.prototype._maybeRetry=function(t,e,r){var n=!1;if(this.options.retryInterval)for(var o=0,a=i.length;o<a;o++)if(t.code===i[o]){n=!0;break}n?this._retryApiRequest(e,r):r(t)},n.prototype._retryApiRequest=function(t,e){this.retryQueue.push({item:t,callback:e}),this.retryHandle||(this.retryHandle=setInterval(function(){for(;this.retryQueue.length;){var t=this.retryQueue.shift();this._makeApiRequest(t.item,t.callback)}}.bind(this),this.options.retryInterval))},n.prototype._dequeuePendingRequest=function(t){var e=this.pendingRequests.indexOf(t);e!==-1&&(this.pendingRequests.splice(e,1),this._maybeCallWait())},n.prototype._maybeLog=function(t,e){if(this.logger&&this.options.verbose){var r=e;if(r=r||o.get(t,"body.trace.exception.message"),r=r||o.get(t,"body.trace_chain.0.exception.message"))return void this.logger.error(r);r=o.get(t,"body.message.body"),r&&this.logger.log(r)}},n.prototype._maybeCallWait=function(){return!(!o.isFunction(this.waitCallback)||0!==this.pendingItems.length||0!==this.pendingRequests.length)&&(this.waitIntervalID&&(this.waitIntervalID=clearInterval(this.waitIntervalID)),this.waitCallback(),!0)},t.exports=n},function(t,e,r){"use strict";function n(t,e){this.queue=t,this.options=e,this.transforms=[]}var o=r(5);n.prototype.configure=function(t){this.queue&&this.queue.configure(t);var e=this.options;return this.options=o.merge(e,t),this},n.prototype.addTransform=function(t){return o.isFunction(t)&&this.transforms.push(t),this},n.prototype.log=function(t,e){if(e&&o.isFunction(e)||(e=function(){}),!this.options.enabled)return e(new Error("Rollbar is not enabled"));this.queue.addPendingItem(t);var r=t.err;this._applyTransforms(t,function(n,o){return n?(this.queue.removePendingItem(t),e(n,null)):void this.queue.addItem(o,e,r,t)}.bind(this))},n.prototype._applyTransforms=function(t,e){var r=-1,n=this.transforms.length,o=this.transforms,i=this.options,a=function(t,s){return t?void e(t,null):(r++,r===n?void e(null,s):void o[r](s,i,a))};a(null,t)},t.exports=n},function(t,e,r){"use strict";function n(t){this.queue=[],this.options=i.merge(t);var e=this.options.maxTelemetryEvents||a;this.maxQueueSize=Math.max(0,Math.min(e,a))}function o(t,e){if(e)return e;var r={error:"error",manual:"info"};return r[t]||"info"}var i=r(5),a=100;n.prototype.configure=function(t){var e=this.options;this.options=i.merge(e,t);var r=this.options.maxTelemetryEvents||a,n=Math.max(0,Math.min(r,a)),o=0;this.maxQueueSize>n&&(o=this.maxQueueSize-n),this.maxQueueSize=n,this.queue.splice(0,o)},n.prototype.copyEvents=function(){var t=Array.prototype.slice.call(this.queue,0);if(i.isFunction(this.options.filterTelemetry))try{for(var e=t.length;e--;)this.options.filterTelemetry(t[e])&&t.splice(e,1)}catch(t){this.options.filterTelemetry=null}return t},n.prototype.capture=function(t,e,r,n,a){var s={level:o(t,r),type:t,timestamp_ms:a||i.now(),body:e,source:"client"};n&&(s.uuid=n);try{if(i.isFunction(this.options.filterTelemetry)&&this.options.filterTelemetry(s))return!1}catch(t){this.options.filterTelemetry=null}return this.push(s),s},n.prototype.captureEvent=function(t,e,r,n){return this.capture(t,e,r,n)},n.prototype.captureError=function(t,e,r,n){var o={message:t.message||String(t)};return t.stack&&(o.stack=t.stack),this.capture("error",o,e,r,n)},n.prototype.captureLog=function(t,e,r,n){return this.capture("log",{message:t},e,r,n)},n.prototype.captureNetwork=function(t,e,r,n){e=e||"xhr",t.subtype=t.subtype||e,n&&(t.request=n);var o=this.levelFromStatus(t.status_code);return this.capture("network",t,o,r)},n.prototype.levelFromStatus=function(t){return t>=200&&t<400?"info":0===t||t>=400?"error":"info"},n.prototype.captureDom=function(t,e,r,n,o){var i={subtype:t,element:e};return void 0!==r&&(i.value=r),void 0!==n&&(i.checked=n),this.capture("dom",i,"info",o)},n.prototype.captureNavigation=function(t,e,r){return this.capture("navigation",{from:t,to:e},"info",r)},n.prototype.captureDomContentLoaded=function(t){return this.capture("navigation",{subtype:"DOMContentLoaded"},"info",void 0,t&&t.getTime())},n.prototype.captureLoad=function(t){return this.capture("navigation",{subtype:"load"},"info",void 0,t&&t.getTime())},n.prototype.captureConnectivityChange=function(t,e){return this.captureNetwork({change:t},"connectivity",e)},n.prototype._captureRollbarItem=function(t){if(this.options.includeItemsInTelemetry)return t.err?this.captureError(t.err,t.level,t.uuid,t.timestamp):t.message?this.captureLog(t.message,t.level,t.uuid,t.timestamp):t.custom?this.capture("log",t.custom,t.level,t.uuid,t.timestamp):void 0},n.prototype.push=function(t){this.queue.push(t),this.queue.length>this.maxQueueSize&&this.queue.shift()},t.exports=n},function(t,e,r){"use strict";function n(t,e,r,n){this.options=t,this.transport=e,this.url=r,this.jsonBackup=n,this.accessToken=t.accessToken,this.transportOptions=o(t,r)}function o(t,e){return a.getTransportFromOptions(t,s,e)}var i=r(5),a=r(12),s={hostname:"api.rollbar.com",path:"/api/1/item/",search:null,version:"1",protocol:"https:",port:443};n.prototype.postItem=function(t,e){var r=a.transportOptions(this.transportOptions,"POST"),n=a.buildPayload(this.accessToken,t,this.jsonBackup);this.transport.post(this.accessToken,r,n,e)},n.prototype.configure=function(t){var e=this.oldOptions;return this.options=i.merge(e,t),this.transportOptions=o(this.options,this.url),void 0!==this.options.accessToken&&(this.accessToken=this.options.accessToken),this},t.exports=n},function(t,e,r){"use strict";function n(t,e,r){if(!s.isType(e.context,"string")){var n=s.stringify(e.context,r);n.error?e.context="Error: could not serialize 'context'":e.context=n.value||"",e.context.length>255&&(e.context=e.context.substr(0,255))}return{access_token:t,data:e}}function o(t,e,r){var n=e.hostname,o=e.protocol,i=e.port,a=e.path,s=e.search,u=t.proxy;if(t.endpoint){var c=r.parse(t.endpoint);n=c.hostname,o=c.protocol,i=c.port,a=c.pathname,s=c.search}return{hostname:n,protocol:o,port:i,path:a,search:s,proxy:u}}function i(t,e){var r=t.protocol||"https:",n=t.port||("http:"===r?80:"https:"===r?443:void 0),o=t.hostname,i=t.path;
return t.search&&(i+=t.search),t.proxy&&(i=r+"//"+o+i,o=t.proxy.host||t.proxy.hostname,n=t.proxy.port,r=t.proxy.protocol||r),{protocol:r,hostname:o,path:i,port:n,method:e}}function a(t,e){var r=/\/$/.test(t),n=/^\//.test(e);return r&&n?e=e.substring(1):r||n||(e="/"+e),t+e}var s=r(5);t.exports={buildPayload:n,getTransportFromOptions:o,transportOptions:i,appendPathToPath:a}},function(t,e,r){"use strict";function n(){var t=Array.prototype.slice.call(arguments,0);t.unshift("Rollbar:"),a.ieVersion()<=8?console.error(s.formatArgsAsString(t)):console.error.apply(console,t)}function o(){var t=Array.prototype.slice.call(arguments,0);t.unshift("Rollbar:"),a.ieVersion()<=8?console.info(s.formatArgsAsString(t)):console.info.apply(console,t)}function i(){var t=Array.prototype.slice.call(arguments,0);t.unshift("Rollbar:"),a.ieVersion()<=8?console.log(s.formatArgsAsString(t)):console.log.apply(console,t)}r(14);var a=r(15),s=r(5);t.exports={error:n,info:o,log:i}},function(t,e){!function(t){"use strict";t.console||(t.console={});for(var e,r,n=t.console,o=function(){},i=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=i.pop();)n[e]||(n[e]={});for(;r=a.pop();)n[r]||(n[r]=o)}("undefined"==typeof window?this:window)},function(t,e){"use strict";function r(){var t;if(!document)return t;for(var e=3,r=document.createElement("div"),n=r.getElementsByTagName("i");r.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",n[0];);return e>4?e:t}var n={ieVersion:r};t.exports=n},function(t,e){"use strict";function r(t,e,r){if(t){var o;if("function"==typeof e._rollbarOldOnError)o=e._rollbarOldOnError;else if(t.onerror){for(o=t.onerror;o._rollbarOldOnError;)o=o._rollbarOldOnError;e._rollbarOldOnError=o}var i=function(){var r=Array.prototype.slice.call(arguments,0);n(t,e,o,r)};r&&(i._rollbarOldOnError=o),t.onerror=i}}function n(t,e,r,n){t._rollbarWrappedError&&(n[4]||(n[4]=t._rollbarWrappedError),n[5]||(n[5]=t._rollbarWrappedError._rollbarContext),t._rollbarWrappedError=null),e.handleUncaughtException.apply(e,n),r&&r.apply(t,n)}function o(t,e,r){if(t){"function"==typeof t._rollbarURH&&t._rollbarURH.belongsToShim&&t.removeEventListener("unhandledrejection",t._rollbarURH);var n=function(t){var r,n,o;try{r=t.reason}catch(t){r=void 0}try{n=t.promise}catch(t){n="[unhandledrejection] error getting `promise` from event"}try{o=t.detail,!r&&o&&(r=o.reason,n=o.promise)}catch(t){}r||(r="[unhandledrejection] error getting `reason` from event"),e&&e.handleUnhandledRejection&&e.handleUnhandledRejection(r,n)};n.belongsToShim=r,t._rollbarURH=n,t.addEventListener("unhandledrejection",n)}}function i(t,e,r){if(t){var n,o,i="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(n=0;n<i.length;++n)o=i[n],t[o]&&t[o].prototype&&a(e,t[o].prototype,r)}}function a(t,e,r){if(e.hasOwnProperty&&e.hasOwnProperty("addEventListener")){for(var n=e.addEventListener;n._rollbarOldAdd&&n.belongsToShim;)n=n._rollbarOldAdd;var o=function(e,r,o){n.call(this,e,t.wrap(r),o)};o._rollbarOldAdd=n,o.belongsToShim=r,e.addEventListener=o;for(var i=e.removeEventListener;i._rollbarOldRemove&&i.belongsToShim;)i=i._rollbarOldRemove;var a=function(t,e,r){i.call(this,t,e&&e._rollbar_wrapped||e,r)};a._rollbarOldRemove=i,a.belongsToShim=r,e.removeEventListener=a}}t.exports={captureUncaughtExceptions:r,captureUnhandledRejections:o,wrapGlobals:i}},function(t,e,r){"use strict";function n(t,e,r,n,o){n&&p.isFunction(n)||(n=function(){}),p.addParamsAndAccessTokenToPath(t,e,r);var a="GET",s=p.formatUrl(e);i(t,s,a,null,n,o)}function o(t,e,r,n,o){if(n&&p.isFunction(n)||(n=function(){}),!r)return n(new Error("Cannot send empty request"));var a=f.truncate(r);if(a.error)return n(a.error);var s=a.value,u="POST",c=p.formatUrl(e);i(t,c,u,s,n,o)}function i(t,e,r,n,o,i){var s="undefined"!=typeof window&&window||"undefined"!=typeof self&&self,u=s&&s.Zone&&s.Zone.current;if(u&&"angular"===u._name){var c=u._parent;c.run(function(){a(t,e,r,n,o,i)})}else a(t,e,r,n,o,i)}function a(t,e,r,n,o,i){var a;if(a=i?i():s(),!a)return o(new Error("No way to send a request"));try{try{var f=function(){try{if(f&&4===a.readyState){f=void 0;var t=p.jsonParse(a.responseText);if(u(a))return void o(t.error,t.value);if(c(a)){if(403===a.status){var e=t.value&&t.value.message;h.error(e)}o(new Error(String(a.status)))}else{var r="XHR response had no status code (likely connection failure)";o(l(r))}}}catch(t){var n;n=t&&t.stack?t:new Error(t),o(n)}};a.open(r,e,!0),a.setRequestHeader&&(a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-Rollbar-Access-Token",t)),a.onreadystatechange=f,a.send(n)}catch(t){if("undefined"!=typeof XDomainRequest){if(!window||!window.location)return o(new Error("No window available during request, unknown environment"));"http:"===window.location.href.substring(0,5)&&"https"===e.substring(0,5)&&(e="http"+e.substring(5));var d=new XDomainRequest;d.onprogress=function(){},d.ontimeout=function(){var t="Request timed out",e="ETIMEDOUT";o(l(t,e))},d.onerror=function(){o(new Error("Error during request"))},d.onload=function(){var t=p.jsonParse(d.responseText);o(t.error,t.value)},d.open(r,e,!0),d.send(n)}else o(new Error("Cannot find a method to transport a request"))}}catch(t){o(t)}}function s(){var t,e,r=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],n=r.length;for(e=0;e<n;e++)try{t=r[e]();break}catch(t){}return t}function u(t){return t&&t.status&&200===t.status}function c(t){return t&&p.isType(t.status,"number")&&t.status>=400&&t.status<600}function l(t,e){var r=new Error(t);return r.code=e||"ENOTFOUND",r}var p=r(5),f=r(18),h=r(13);t.exports={get:n,post:o}},function(t,e,r){"use strict";function n(t,e){return[t,f.stringify(t,e)]}function o(t,e){var r=t.length;return r>2*e?t.slice(0,e).concat(t.slice(r-e)):t}function i(t,e,r){r="undefined"==typeof r?30:r;var n,i=t.data.body;if(i.trace_chain)for(var a=i.trace_chain,s=0;s<a.length;s++)n=a[s].frames,n=o(n,r),a[s].frames=n;else i.trace&&(n=i.trace.frames,n=o(n,r),i.trace.frames=n);return[t,f.stringify(t,e)]}function a(t,e){return e&&e.length>t?e.slice(0,t-3).concat("..."):e}function s(t,e,r){function n(e,r,o){switch(f.typeName(r)){case"string":return a(t,r);case"object":case"array":return f.traverse(r,n,o);default:return r}}return e=f.traverse(e,n,[]),[e,f.stringify(e,r)]}function u(t){return t.exception&&(delete t.exception.description,t.exception.message=a(255,t.exception.message)),t.frames=o(t.frames,1),t}function c(t,e){var r=t.data.body;if(r.trace_chain)for(var n=r.trace_chain,o=0;o<n.length;o++)n[o]=u(n[o]);else r.trace&&(r.trace=u(r.trace));return[t,f.stringify(t,e)]}function l(t,e){return t.length>e}function p(t,e,r){r="undefined"==typeof r?524288:r;for(var o,a,u,p=[n,i,s.bind(null,1024),s.bind(null,512),s.bind(null,256),c];o=p.shift();)if(a=o(t,e),t=a[0],u=a[1],u.error||!l(u.value,r))return u;return u}var f=r(5);t.exports={truncate:p,raw:n,truncateFrames:i,truncateStrings:s,maybeTruncateValue:a}},function(t,e){"use strict";function r(t){var e,r,n={protocol:null,auth:null,host:null,path:null,hash:null,href:t,hostname:null,port:null,pathname:null,search:null,query:null};if(e=t.indexOf("//"),e!==-1?(n.protocol=t.substring(0,e),r=e+2):r=0,e=t.indexOf("@",r),e!==-1&&(n.auth=t.substring(r,e),r=e+1),e=t.indexOf("/",r),e===-1){if(e=t.indexOf("?",r),e===-1)return e=t.indexOf("#",r),e===-1?n.host=t.substring(r):(n.host=t.substring(r,e),n.hash=t.substring(e)),n.hostname=n.host.split(":")[0],n.port=n.host.split(":")[1],n.port&&(n.port=parseInt(n.port,10)),n;n.host=t.substring(r,e),n.hostname=n.host.split(":")[0],n.port=n.host.split(":")[1],n.port&&(n.port=parseInt(n.port,10)),r=e}else n.host=t.substring(r,e),n.hostname=n.host.split(":")[0],n.port=n.host.split(":")[1],n.port&&(n.port=parseInt(n.port,10)),r=e;if(e=t.indexOf("#",r),e===-1?n.path=t.substring(r):(n.path=t.substring(r,e),n.hash=t.substring(e)),n.path){var o=n.path.split("?");n.pathname=o[0],n.query=o[1],n.search=n.query?"?"+n.query:null}return n}t.exports={parse:r}},function(t,e,r){"use strict";function n(t,e,r){if(t.data=t.data||{},t.err)try{t.stackInfo=t.err._savedStackTrace||d.parse(t.err)}catch(e){m.error("Error while parsing the error object.",e);try{t.message=t.err.message||t.err.description||t.message||String(t.err)}catch(e){t.message=String(t.err)||String(e)}delete t.err}r(null,t)}function o(t,e,r){t.message||t.stackInfo||t.custom||r(new Error("No message, stack info, or custom data"),null),r(null,t)}function i(t,e,r){var n=e.payload&&e.payload.environment||e.environment;t.data=h.merge(t.data,{environment:n,level:t.level,endpoint:e.endpoint,platform:"browser",framework:"browser-js",language:"javascript",server:{},uuid:t.uuid,notifier:{name:"rollbar-browser-js",version:e.version}}),r(null,t)}function a(t){return function(e,r,n){if(!t||!t.location)return n(null,e);var o="$remote_ip";r.captureIp?r.captureIp!==!0&&(o+="_anonymize"):o=null,h.set(e,"data.request",{url:t.location.href,query_string:t.location.search,user_ip:o}),n(null,e)}}function s(t){return function(e,r,n){if(!t)return n(null,e);var o=t.navigator||{},i=t.screen||{};h.set(e,"data.client",{runtime_ms:e.timestamp-t._rollbarStartTime,timestamp:Math.round(e.timestamp/1e3),javascript:{browser:o.userAgent,language:o.language,cookie_enabled:o.cookieEnabled,screen:{width:i.width,height:i.height}}}),n(null,e)}}function u(t){return function(e,r,n){if(!t||!t.navigator)return n(null,e);for(var o,i=[],a=t.navigator.plugins||[],s=0,u=a.length;s<u;++s)o=a[s],i.push({name:o.name,description:o.description});h.set(e,"data.client.javascript.plugins",i),n(null,e)}}function c(t,e,r){t.stackInfo?p(t,e,r):l(t,e,r)}function l(t,e,r){var n=t.message,o=t.custom;if(!n)if(o){var i=e.scrubFields,a=h.stringify(h.scrub(o,i));n=a.error||a.value||""}else n="";var s={body:n};o&&(s.extra=h.merge(o)),h.set(t,"data.body",{message:s}),r(null,t)}function p(t,e,r){var n=t.data.description,o=t.stackInfo,i=t.custom,a=d.guessErrorClass(o.message),s=o.name||a[0],u=a[1],c={exception:{class:s,message:u}};n&&(c.exception.description=n);var p=o.stack;if(p&&0===p.length&&t._unhandledStackInfo&&t._unhandledStackInfo.stack&&(p=t._unhandledStackInfo.stack),p){0===p.length&&(c.exception.stack=o.rawStack,c.exception.raw=String(o.rawException));var f,m,g,v,y,b,w,_;for(c.frames=[],w=0;w<p.length;++w)f=p[w],m={filename:f.url?h.sanitizeUrl(f.url):"(unknown)",lineno:f.line||null,method:f.func&&"?"!==f.func?f.func:"[anonymous]",colno:f.column},e.sendFrameUrl&&(m.url=f.url),m.method&&m.method.endsWith&&m.method.endsWith("_rollbar_wrapped")||(g=v=y=null,b=f.context?f.context.length:0,b&&(_=Math.floor(b/2),v=f.context.slice(0,_),g=f.context[_],y=f.context.slice(_)),g&&(m.code=g),(v||y)&&(m.context={},v&&v.length&&(m.context.pre=v),y&&y.length&&(m.context.post=y)),f.args&&(m.args=f.args),c.frames.push(m));c.frames.reverse(),i&&(c.extra=h.merge(i)),h.set(t,"data.body",{trace:c}),r(null,t)}else t.message=s+": "+u,l(t,e,r)}function f(t,e,r){var n=e.scrubFields;t.data=h.scrub(t.data,n),r(null,t)}var h=r(5),d=r(21),m=r(13);t.exports={handleItemWithError:n,ensureItemHasSomethingToSay:o,addBaseInfo:i,addRequestInfo:a,addClientInfo:s,addPluginInfo:u,addBody:c,scrubPayload:f}},function(t,e,r){"use strict";function n(){return l}function o(){return null}function i(t){var e={};return e._stackFrame=t,e.url=t.fileName,e.line=t.lineNumber,e.func=t.functionName,e.column=t.columnNumber,e.args=t.args,e.context=o(),e}function a(t){function e(){var e,r=[];if(t.stack)e=t;else try{throw t}catch(t){e=t}try{r=c.parse(e)}catch(t){r=[]}for(var n=[],o=0;o<r.length;o++)n.push(new i(r[o]));return n}var r=t.constructor&&t.constructor.name;return(!r||!r.length||r.length<3)&&(r=t.name),{stack:e(),message:t.message,name:r,rawStack:t.stack,rawException:t}}function s(t){return new a(t)}function u(t){if(!t||!t.match)return["Unknown error. There was no error message to display.",""];var e=t.match(p),r="(unknown)";return e&&(r=e[e.length-1],t=t.replace((e[e.length-2]||"")+r+":",""),t=t.replace(/(^[\s]+|[\s]+$)/g,"")),[r,t]}var c=r(22),l="?",p=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");t.exports={guessFunctionName:n,guessErrorClass:u,gatherContext:o,parse:s,Stack:a,Frame:i}},function(t,e,r){var n,o,i;!function(a,s){"use strict";o=[r(23)],n=s,i="function"==typeof n?n.apply(e,o):n,!(void 0!==i&&(t.exports=i))}(this,function(t){"use strict";function e(t,e,r){if("function"==typeof Array.prototype.map)return t.map(e,r);for(var n=new Array(t.length),o=0;o<t.length;o++)n[o]=e.call(r,t[o]);return n}function r(t,e,r){if("function"==typeof Array.prototype.filter)return t.filter(e,r);for(var n=[],o=0;o<t.length;o++)e.call(r,t[o])&&n.push(t[o]);return n}var n=/(^|@)\S+\:\d+/,o=/^\s*at .*(\S+\:\d+|\(native\))/m,i=/^(eval@)?(\[native code\])?$/;return{parse:function(t){if("undefined"!=typeof t.stacktrace||"undefined"!=typeof t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(o))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(t.indexOf(":")===-1)return[t];var e=t.replace(/[\(\)\s]/g,"").split(":"),r=e.pop(),n=e[e.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=e.pop();return[e.join(":"),o,r]}return[e.join(":"),r,void 0]},parseV8OrIE:function(n){var i=r(n.stack.split("\n"),function(t){return!!t.match(o)},this);return e(i,function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var r=e.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),n=this.extractLocation(r.pop()),o=r.join(" ")||void 0,i="eval"===n[0]?void 0:n[0];return new t(o,void 0,i,n[1],n[2],e)},this)},parseFFOrSafari:function(n){var o=r(n.stack.split("\n"),function(t){return!t.match(i)},this);return e(o,function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),e.indexOf("@")===-1&&e.indexOf(":")===-1)return new t(e);var r=e.split("@"),n=this.extractLocation(r.pop()),o=r.shift()||void 0;return new t(o,void 0,n[0],n[1],n[2],e)},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=e.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var s=r.exec(n[i]);s&&o.push(new t(void 0,void 0,s[2],s[1],void 0,n[i]))}return o},parseOpera10:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=e.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var s=r.exec(n[i]);s&&o.push(new t(s[3]||void 0,void 0,s[2],s[1],void 0,n[i]))}return o},parseOpera11:function(o){var i=r(o.stack.split("\n"),function(t){return!!t.match(n)&&!t.match(/^Error created at/)},this);return e(i,function(e){var r,n=e.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new t(a,s,o[0],o[1],o[2],e)},this)}}})},function(t,e,r){var n,o,i;!function(r,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(e,o):n,!(void 0!==i&&(t.exports=i))}(this,function(){"use strict";function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t,e,r,n,o,i){void 0!==t&&this.setFunctionName(t),void 0!==e&&this.setArgs(e),void 0!==r&&this.setFileName(r),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o),void 0!==i&&this.setSource(i)}return e.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(t){this.functionName=String(t)},getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getFileName:function(){return this.fileName},setFileName:function(t){this.fileName=String(t)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(e){if(!t(e))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(e)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(e){if(!t(e))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(e)},getSource:function(){return this.source},setSource:function(t){this.source=String(t)},toString:function(){var e=this.getFunctionName()||"{anonymous}",r="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=t(this.getLineNumber())?":"+this.getLineNumber():"",i=t(this.getColumnNumber())?":"+this.getColumnNumber():"";return e+r+n+o+i}},e})},function(t,e,r){"use strict";function n(t,e,r){var n=e.payload||{};n.body&&delete n.body;var o=u.merge(t.data,n);t._isUncaught&&(o._isUncaught=!0),t._originalArgs&&(o._originalArgs=t._originalArgs),r(null,o)}function o(t,e,r){t.telemetryEvents&&u.set(t,"data.body.telemetry",t.telemetryEvents),r(null,t)}function i(t,e,r){if(!t.message)return void r(null,t);var n="data.body.trace_chain.0",o=u.get(t,n);if(o||(n="data.body.trace",o=u.get(t,n)),o){if(!o.exception||!o.exception.description)return u.set(t,n+".exception.description",t.message),void r(null,t);var i=u.get(t,n+".extra")||{},a=u.merge(i,{message:t.message});u.set(t,n+".extra",a)}r(null,t)}function a(t){return function(e,r,n){var o=u.merge(e);try{u.isFunction(r.transform)&&r.transform(o.data,e)}catch(o){return r.transform=null,t.error("Error while calling custom transform() function. Removing custom transform().",o),void n(null,e)}n(null,o)}}function s(t,e,r){if(!e.sendConfig)return r(null,t);var n="_rollbarConfig",o=u.get(t,"data.custom")||{};o[n]=e,t.data.custom=o,r(null,t)}var u=r(5);t.exports={itemToPayload:n,addTelemetryData:o,addMessageWithError:i,userTransform:a,addConfigToPayload:s}},function(t,e,r){"use strict";function n(t,e){return!o.get(e,"plugins.jquery.ignoreAjaxErrors")||!o.get(t,"body.message.extra.isAjax")}var o=r(5);t.exports={checkIgnore:n}},function(t,e,r){"use strict";function n(t,e){var r=t.level,n=c.LEVELS[r]||0,o=e.reportLevel,i=c.LEVELS[o]||0;return!(n<i)}function o(t){return function(e,r){var n=!!e._isUncaught;delete e._isUncaught;var o=e._originalArgs;delete e._originalArgs;try{c.isFunction(r.onSendCallback)&&r.onSendCallback(n,o,e)}catch(e){r.onSendCallback=null,t.error("Error while calling onSendCallback, removing",e)}try{if(c.isFunction(r.checkIgnore)&&r.checkIgnore(n,o,e))return!1}catch(e){r.checkIgnore=null,t.error("Error while calling custom checkIgnore(), removing",e)}return!0}}function i(t){return function(e,r){return!s(e,r,"blacklist",t)}}function a(t){return function(e,r){return s(e,r,"whitelist",t)}}function s(t,e,r,n){var o=!1;"blacklist"===r&&(o=!0);var i,a,s,u,l,p,f,h,d,m;try{if(i=o?e.hostBlackList:e.hostWhiteList,f=i&&i.length,a=c.get(t,"body.trace"),!i||0===f)return!o;if(!a||!a.frames||0===a.frames.length)return!o;for(l=a.frames.length,d=0;d<l;d++){if(s=a.frames[d],u=s.filename,!c.isType(u,"string"))return!o;for(m=0;m<f;m++)if(p=i[m],h=new RegExp(p),h.test(u))return!0}}catch(t){o?e.hostBlackList=null:e.hostWhiteList=null;var g=o?"hostBlackList":"hostWhiteList";return n.error("Error while reading your configuration's "+g+" option. Removing custom "+g+".",t),!o}return!1}function u(t){return function(e,r){var n,o,i,a,s,u,l,p,f;try{if(s=!1,i=r.ignoredMessages,!i||0===i.length)return!0;if(l=e.body,p=c.get(l,"trace.exception.message"),f=c.get(l,"message.body"),n=p||f,!n)return!0;for(a=i.length,o=0;o<a&&(u=new RegExp(i[o],"gi"),!(s=u.test(n)));o++);}catch(e){r.ignoredMessages=null,t.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return!s}}var c=r(5);t.exports={checkLevel:n,userCheckIgnore:o,urlIsNotBlacklisted:i,urlIsWhitelisted:a,messageIsIgnored:u}},function(t,e,r){"use strict";function n(t,e,r,n,o){var i=t[e];t[e]=r(i),n&&n[o].push([t,e,i])}function o(t,e){for(var r;t[e].length;)r=t[e].shift(),r[0][r[1]]=r[2]}function i(t){if(!t||!t.attributes)return null;for(var e=t.attributes,r=0;r<e.length;++r)if("name"===e[r].key)return e[r].value;return null}function a(t){for(var e=[],r=0;r<t.length;++r)e.push(new RegExp(t[r],"i"));return function(t){var r=i(t);if(!r)return!1;for(var n=0;n<e.length;++n)if(e[n].test(r))return!0;return!1}}function s(t,e,r,n,o){var i=t.autoInstrument;t.enabled===!1||i===!1?this.autoInstrument={}:(u.isType(i,"object")||(i=p),this.autoInstrument=u.merge(p,i)),this.scrubTelemetryInputs=!!t.scrubTelemetryInputs,this.telemetryScrubber=t.telemetryScrubber,this.defaultValueScrubber=a(t.scrubFields),this.telemeter=e,this.rollbar=r,this._window=n||{},this._document=o||{},this.replacements={network:[],log:[],navigation:[],connectivity:[]},this.eventRemovers={dom:[],connectivity:[]},this._location=this._window.location,this._lastHref=this._location&&this._location.href}var u=r(5),c=r(19),l=r(28),p={network:!0,networkResponseHeaders:!1,networkResponseBody:!1,networkRequestBody:!1,log:!0,dom:!0,navigation:!0,connectivity:!0};s.prototype.configure=function(t){var e=t.autoInstrument,r=u.merge(this.autoInstrument);t.enabled===!1||e===!1?this.autoInstrument={}:(u.isType(e,"object")||(e=p),this.autoInstrument=u.merge(p,e)),this.instrument(r),void 0!==t.scrubTelemetryInputs&&(this.scrubTelemetryInputs=!!t.scrubTelemetryInputs),void 0!==t.telemetryScrubber&&(this.telemetryScrubber=t.telemetryScrubber)},s.prototype.instrument=function(t){!this.autoInstrument.network||t&&t.network?!this.autoInstrument.network&&t&&t.network&&this.deinstrumentNetwork():this.instrumentNetwork(),!this.autoInstrument.log||t&&t.log?!this.autoInstrument.log&&t&&t.log&&this.deinstrumentConsole():this.instrumentConsole(),!this.autoInstrument.dom||t&&t.dom?!this.autoInstrument.dom&&t&&t.dom&&this.deinstrumentDom():this.instrumentDom(),!this.autoInstrument.navigation||t&&t.navigation?!this.autoInstrument.navigation&&t&&t.navigation&&this.deinstrumentNavigation():this.instrumentNavigation(),!this.autoInstrument.connectivity||t&&t.connectivity?!this.autoInstrument.connectivity&&t&&t.connectivity&&this.deinstrumentConnectivity():this.instrumentConnectivity()},s.prototype.deinstrumentNetwork=function(){o(this.replacements,"network")},s.prototype.instrumentNetwork=function(){function t(t,r){t in r&&u.isFunction(r[t])&&n(r,t,function(t){return e.rollbar.wrap(t)})}var e=this;if("XMLHttpRequest"in this._window){var r=this._window.XMLHttpRequest.prototype;n(r,"open",function(t){return function(e,r){return u.isType(r,"string")&&(this.__rollbar_xhr={method:e,url:r,status_code:null,start_time_ms:u.now(),end_time_ms:null}),t.apply(this,arguments)}},this.replacements,"network"),n(r,"send",function(r){return function(o){function i(){if(a.__rollbar_xhr){if(null===a.__rollbar_xhr.status_code){a.__rollbar_xhr.status_code=0;var t=null;e.autoInstrument.networkRequestBody&&(t=o),a.__rollbar_event=e.telemeter.captureNetwork(a.__rollbar_xhr,"xhr",void 0,t)}if(a.readyState<2&&(a.__rollbar_xhr.start_time_ms=u.now()),a.readyState>3){a.__rollbar_xhr.end_time_ms=u.now();var r=null;if(e.autoInstrument.networkResponseHeaders){var n=e.autoInstrument.networkResponseHeaders;r={};try{var i,s;if(n===!0){var c=a.getAllResponseHeaders();if(c){var l,p,f=c.trim().split(/[\r\n]+/);for(s=0;s<f.length;s++)l=f[s].split(": "),i=l.shift(),p=l.join(": "),r[i]=p}}else for(s=0;s<n.length;s++)i=n[s],r[i]=a.getResponseHeader(i)}catch(t){}}var h=null;if(e.autoInstrument.networkResponseBody)try{h=a.responseText}catch(t){}var d=null;(h||r)&&(d={},h&&(d.body=h),r&&(d.headers=r)),d&&(a.__rollbar_xhr.response=d);try{var m=a.status;m=1223===m?204:m,a.__rollbar_xhr.status_code=m,a.__rollbar_event.level=e.telemeter.levelFromStatus(m)}catch(t){}}}}var a=this;return t("onload",a),t("onerror",a),t("onprogress",a),"onreadystatechange"in a&&u.isFunction(a.onreadystatechange)?n(a,"onreadystatechange",function(t){return e.rollbar.wrap(t,void 0,i)}):a.onreadystatechange=i,r.apply(this,arguments)}},this.replacements,"network")}"fetch"in this._window&&n(this._window,"fetch",function(t){return function(r,n){for(var o=new Array(arguments.length),i=0,a=o.length;i<a;i++)o[i]=arguments[i];var s,c=o[0],l="GET";u.isType(c,"string")?s=c:c&&(s=c.url,c.method&&(l=c.method)),o[1]&&o[1].method&&(l=o[1].method);var p={method:l,url:s,status_code:null,start_time_ms:u.now(),end_time_ms:null},f=null;return e.autoInstrument.networkRequestBody&&(o[1]&&o[1].body?f=o[1].body:o[0]&&!u.isType(o[0],"string")&&o[0].body&&(f=o[0].body)),e.telemeter.captureNetwork(p,"fetch",void 0,f),t.apply(this,o).then(function(t){p.end_time_ms=u.now(),p.status_code=t.status;var r=null;if(e.autoInstrument.networkResponseHeaders){var n=e.autoInstrument.networkResponseHeaders;r={};try{if(n===!0);else for(var o=0;o<n.length;o++){var i=n[o];r[i]=t.headers.get(i)}}catch(t){}}var a=null;return r&&(a={headers:r}),a&&(p.response=a),t})}},this.replacements,"network")},s.prototype.deinstrumentConsole=function(){if("console"in this._window&&this._window.console.log)for(var t;this.replacements.log.length;)t=this.replacements.log.shift(),this._window.console[t[0]]=t[1]},s.prototype.instrumentConsole=function(){function t(t){var n=r[t],o=r,i="warn"===t?"warning":t;r[t]=function(){var t=Array.prototype.slice.call(arguments),r=u.formatArgsAsString(t);e.telemeter.captureLog(r,i),n&&Function.prototype.apply.call(n,o,t)},e.replacements.log.push([t,n])}if("console"in this._window&&this._window.console.log)for(var e=this,r=this._window.console,n=["debug","info","warn","error","log"],o=0,i=n.length;o<i;o++)t(n[o])},s.prototype.deinstrumentDom=function(){("addEventListener"in this._window||"attachEvent"in this._window)&&this.removeListeners("dom")},s.prototype.instrumentDom=function(){if("addEventListener"in this._window||"attachEvent"in this._window){var t=this.handleClick.bind(this),e=this.handleBlur.bind(this);this.addListener("dom",this._window,"click","onclick",t,!0),this.addListener("dom",this._window,"blur","onfocusout",e,!0)}},s.prototype.handleClick=function(t){try{var e=l.getElementFromEvent(t,this._document),r=e&&e.tagName,n=l.isDescribedElement(e,"a")||l.isDescribedElement(e,"button");r&&(n||l.isDescribedElement(e,"input",["button","submit"]))?this.captureDomEvent("click",e):l.isDescribedElement(e,"input",["checkbox","radio"])&&this.captureDomEvent("input",e,e.value,e.checked)}catch(t){}},s.prototype.handleBlur=function(t){try{var e=l.getElementFromEvent(t,this._document);e&&e.tagName&&(l.isDescribedElement(e,"textarea")?this.captureDomEvent("input",e,e.value):l.isDescribedElement(e,"select")&&e.options&&e.options.length?this.handleSelectInputChanged(e):l.isDescribedElement(e,"input")&&!l.isDescribedElement(e,"input",["button","submit","hidden","checkbox","radio"])&&this.captureDomEvent("input",e,e.value))}catch(t){}},s.prototype.handleSelectInputChanged=function(t){if(t.multiple)for(var e=0;e<t.options.length;e++)t.options[e].selected&&this.captureDomEvent("input",t,t.options[e].value);else t.selectedIndex>=0&&t.options[t.selectedIndex]&&this.captureDomEvent("input",t,t.options[t.selectedIndex].value)},s.prototype.captureDomEvent=function(t,e,r,n){if(void 0!==r)if(this.scrubTelemetryInputs||"password"===l.getElementType(e))r="[scrubbed]";else{var o=l.describeElement(e);this.telemetryScrubber?this.telemetryScrubber(o)&&(r="[scrubbed]"):this.defaultValueScrubber(o)&&(r="[scrubbed]")}var i=l.elementArrayToString(l.treeToArray(e));this.telemeter.captureDom(t,i,r,n)},s.prototype.deinstrumentNavigation=function(){var t=this._window.chrome,e=t&&t.app&&t.app.runtime,r=!e&&this._window.history&&this._window.history.pushState;r&&o(this.replacements,"navigation")},s.prototype.instrumentNavigation=function(){var t=this._window.chrome,e=t&&t.app&&t.app.runtime,r=!e&&this._window.history&&this._window.history.pushState;if(r){var o=this;n(this._window,"onpopstate",function(t){return function(){var e=o._location.href;o.handleUrlChange(o._lastHref,e),t&&t.apply(this,arguments)}},this.replacements,"navigation"),n(this._window.history,"pushState",function(t){return function(){var e=arguments.length>2?arguments[2]:void 0;return e&&o.handleUrlChange(o._lastHref,e+""),t.apply(this,arguments)}},this.replacements,"navigation")}},s.prototype.handleUrlChange=function(t,e){var r=c.parse(this._location.href),n=c.parse(e),o=c.parse(t);this._lastHref=e,r.protocol===n.protocol&&r.host===n.host&&(e=n.path+(n.hash||"")),r.protocol===o.protocol&&r.host===o.host&&(t=o.path+(o.hash||"")),this.telemeter.captureNavigation(t,e)},s.prototype.deinstrumentConnectivity=function(){("addEventListener"in this._window||"body"in this._document)&&(this._window.addEventListener?this.removeListeners("connectivity"):o(this.replacements,"connectivity"))},s.prototype.instrumentConnectivity=function(){if("addEventListener"in this._window||"body"in this._document)if(this._window.addEventListener)this.addListener("connectivity",this._window,"online",void 0,function(){this.telemeter.captureConnectivityChange("online")}.bind(this),!0),this.addListener("connectivity",this._window,"offline",void 0,function(){this.telemeter.captureConnectivityChange("offline")}.bind(this),!0);else{var t=this;n(this._document.body,"ononline",function(e){return function(){t.telemeter.captureConnectivityChange("online"),e&&e.apply(this,arguments)}},this.replacements,"connectivity"),n(this._document.body,"onoffline",function(e){return function(){t.telemeter.captureConnectivityChange("offline"),e&&e.apply(this,arguments)}},this.replacements,"connectivity")}},s.prototype.addListener=function(t,e,r,n,o,i){e.addEventListener?(e.addEventListener(r,o,i),this.eventRemovers[t].push(function(){e.removeEventListener(r,o,i)})):n&&(e.attachEvent(n,o),this.eventRemovers[t].push(function(){e.detachEvent(n,o)}))},s.prototype.removeListeners=function(t){for(var e;this.eventRemovers[t].length;)(e=this.eventRemovers[t].shift())()},t.exports=s},function(t,e){"use strict";function r(t){return(t.getAttribute("type")||"").toLowerCase()}function n(t,e,n){if(t.tagName.toLowerCase()!==e.toLowerCase())return!1;if(!n)return!0;t=r(t);for(var o=0;o<n.length;o++)if(n[o]===t)return!0;return!1}function o(t,e){return t.target?t.target:e&&e.elementFromPoint?e.elementFromPoint(t.clientX,t.clientY):void 0}function i(t){for(var e,r=5,n=[],o=0;t&&o<r&&(e=u(t),"html"!==e.tagName);o++)n.unshift(e),t=t.parentNode;return n}function a(t){for(var e,r,n=80,o=" > ",i=o.length,a=[],u=0,c=t.length-1;c>=0;c--){if(e=s(t[c]),r=u+a.length*i+e.length,c<t.length-1&&r>=n+3){a.unshift("...");break}a.unshift(e),u+=e.length}return a.join(o)}function s(t){if(!t||!t.tagName)return"";var e=[t.tagName];t.id&&e.push("#"+t.id),t.classes&&e.push("."+t.classes.join("."));for(var r=0;r<t.attributes.length;r++)e.push("["+t.attributes[r].key+'="'+t.attributes[r].value+'"]');return e.join("")}function u(t){if(!t||!t.tagName)return null;var e,r,n,o,i={};i.tagName=t.tagName.toLowerCase(),t.id&&(i.id=t.id),e=t.className,e&&"string"==typeof e&&(i.classes=e.split(/\s+/));var a=["type","name","title","alt"];for(i.attributes=[],o=0;o<a.length;o++)r=a[o],n=t.getAttribute(r),n&&i.attributes.push({key:r,value:n});return i}t.exports={describeElement:u,descriptionToString:s,elementArrayToString:a,treeToArray:i,getElementFromEvent:o,isDescribedElement:n,getElementType:r}}])});
//# sourceMappingURL=rollbar.umd.min.js.map

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!************************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/style-loader/lib/addStyles.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/style-loader/lib/urls.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../node_modules/url-polyfill/url-polyfill.js":
/*!***********************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/url-polyfill/url-polyfill.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };


  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
    }

    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function(value) {
    return decodeURIComponent(value).replace(/\+/g, ' ');
  };

  var polyfillURLSearchParams = function() {

    var URLSearchParams = function(searchString) {
      Object.defineProperty(this, '_entries', { writable: true, value: {} });
      var typeofSearchString = typeof searchString;

      if (typeofSearchString === 'undefined') {
        // do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function(value, name) {
          _this.append(name, value);
        });
      } else if ((searchString !== null) && (typeofSearchString === 'object')) {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];
            if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function(name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function(name) {
      delete this._entries[name];
    };

    proto.get = function(name) {
      return (name in this._entries) ? this._entries[name][0] : null;
    };

    proto.getAll = function(name) {
      return (name in this._entries) ? this._entries[name].slice(0) : [];
    };

    proto.has = function(name) {
      return (name in this._entries);
    };

    proto.set = function(name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function(callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function() {
      var searchArray = [];
      this.forEach(function(value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };


    global.URLSearchParams = URLSearchParams;
  };

  if (!('URLSearchParams' in global) || (new URLSearchParams('?a=1').toString() !== 'a=1')) {
    polyfillURLSearchParams();
  }

  var proto = URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function() {
      var _this = this;
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function(a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) { // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function(value, name) {
            keys.push(name);
          });
          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(
            deserializeParam(attribute[0]),
            (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
          );
        }
      }
    });
  }

  // HTMLAnchorElement

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

(function(global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch (e) {
      return false;
    }
  };


  var polyfillURL = function() {
    var _URL = global.URL;

    var URL = function(url, base) {
      if (typeof url !== 'string') url = String(url);

      // Only create another document if the base is different from current location.
      var doc = document, baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });


      // create a linked searchParams which reflect its changes on URL
      var searchParams = new URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function(methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function() {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });

      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });

      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function() {
          return this._anchorElement[attributeName];
        },
        set: function(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol']
      .forEach(function(attributeName) {
        linkURLWithAnchorAttribute(attributeName);
      });

    Object.defineProperty(proto, 'search', {
      get: function() {
        return this._anchorElement['search'];
      },
      set: function(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function() {
          var _this = this;
          return function() {
            return _this.href;
          };
        }
      },

      'href': {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },

      'pathname': {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function() {
          // get expected port from protocol
          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort &&
            this._anchorElement.port !== '';

          return this._anchorElement.protocol +
            '//' +
            this._anchorElement.hostname +
            (addPortToOrigin ? (':' + this._anchorElement.port) : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },

      'username': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },
    });

    URL.createObjectURL = function(blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function(url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;

  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if ((global.location !== void 0) && !('origin' in global.location)) {
    var getOrigin = function() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function() {
        global.location.origin = getOrigin();
      }, 100);
    }
  }

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/web-sdk/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/url/url.js":
/*!*****************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/url/url.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var punycode = __webpack_require__(/*! punycode */ "../../node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "../../node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../node_modules/url/util.js":
/*!******************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/url/util.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../node_modules/whatwg-fetch/fetch.js":
/*!****************************************************************************************************!*\
  !*** /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/whatwg-fetch/fetch.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./config/polyfills.js":
/*!*****************************!*\
  !*** ./config/polyfills.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Polyfills for URL() and URLSearchParams()
 * Also polyfill URL object if url.searchParams() is not supported
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Browser_compatibility
 */

if (typeof URL === 'undefined' || typeof URLSearchParams === 'undefined' || URL && !URL.prototype.hasOwnProperty('searchParams')) {
  __webpack_require__(/*! url-polyfill */ "../../node_modules/url-polyfill/url-polyfill.js");
} // Promise polyfill


if (typeof Promise === 'undefined') {
  __webpack_require__(/*! promise/lib/rejection-tracking */ "../../node_modules/promise/lib/rejection-tracking.js").enable();

  window.Promise = __webpack_require__(/*! promise/lib/es6-extensions.js */ "../../node_modules/promise/lib/es6-extensions.js");
} // fetch() polyfill for making API calls.


__webpack_require__(/*! whatwg-fetch */ "../../node_modules/whatwg-fetch/fetch.js"); // Object.assign() polyfill


__webpack_require__(/*! core-js/fn/object/assign */ "../../node_modules/core-js/fn/object/assign.js"); // .includes() method for string and array


__webpack_require__(/*! core-js/fn/string/includes */ "../../node_modules/core-js/fn/string/includes.js");

__webpack_require__(/*! core-js/fn/array/includes */ "../../node_modules/core-js/fn/array/includes.js"); // Polyfill for array destruction


__webpack_require__(/*! core-js/fn/array/from */ "../../node_modules/core-js/fn/array/from.js");

/***/ }),

/***/ "./lib/QGraph.js":
/*!***********************!*\
  !*** ./lib/QGraph.js ***!
  \***********************/
/*! exports provided: default, cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component-emitter */ "../../node_modules/component-emitter/index.js");
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _third_party_ua_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./third_party/ua-parser */ "./lib/third_party/ua-parser.js");
/* harmony import */ var _third_party_ua_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_third_party_ua_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _third_party_isPrivateMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./third_party/isPrivateMode */ "./lib/third_party/isPrivateMode.js");
/* harmony import */ var _web_push_initSimplePush__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web_push/initSimplePush */ "./lib/web_push/initSimplePush.js");
/* harmony import */ var _web_push_registerServiceWorker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web_push/registerServiceWorker */ "./lib/web_push/registerServiceWorker.js");
/* harmony import */ var _web_push_shouldEnablePush__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web_push/shouldEnablePush */ "./lib/web_push/shouldEnablePush.js");
/* harmony import */ var _web_push_loadManifest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web_push/loadManifest */ "./lib/web_push/loadManifest.js");
/* harmony import */ var _push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./push_prompts/on_subscribed_popup */ "./lib/push_prompts/on_subscribed_popup/index.js");
/* harmony import */ var _push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./push_prompts/overlay_prompt */ "./lib/push_prompts/overlay_prompt/index.js");
/* harmony import */ var _push_prompts_fake_prompt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./push_prompts/fake_prompt */ "./lib/push_prompts/fake_prompt/index.js");
/* harmony import */ var _push_prompts_cym_prompt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./push_prompts/cym_prompt */ "./lib/push_prompts/cym_prompt/index.js");
/* harmony import */ var _in_web_fetchInWebData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./in_web/fetchInWebData */ "./lib/in_web/fetchInWebData.js");
/* harmony import */ var _in_web_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./in_web/triggerInWebCampaign */ "./lib/in_web/triggerInWebCampaign.js");
/* harmony import */ var _in_web_exitIntentHandler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./in_web/exitIntentHandler */ "./lib/in_web/exitIntentHandler.js");
/* harmony import */ var _in_web_scrollPercentHandler__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in_web/scrollPercentHandler */ "./lib/in_web/scrollPercentHandler.js");
/* harmony import */ var _in_web_idleHandler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./in_web/idleHandler */ "./lib/in_web/idleHandler.js");
/* harmony import */ var _recommendation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recommendation */ "./lib/recommendation/index.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/cookie */ "./lib/utils/cookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _utils_attribution__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/attribution */ "./lib/utils/attribution.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/dates */ "./lib/utils/dates.js");
/* harmony import */ var _utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/parseUtmParams */ "./lib/utils/parseUtmParams.js");
/* harmony import */ var _utils_makeRequest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/makeRequest */ "./lib/utils/makeRequest.js");
/* harmony import */ var _utils_first_time__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/first_time */ "./lib/utils/first_time.js");
/* harmony import */ var _utils_user_id__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/user_id */ "./lib/utils/user_id.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");








 // Web Push modules




 // Push Prompts modules




 // In-Web modules





 // Recommendation modules

 // Utilities










var uaParser = Object(_third_party_ua_parser__WEBPACK_IMPORTED_MODULE_7__["UAParser"])();
var QG_DATA_SETTINGS = 'qgdatasettings';
var IS_SAFARI_BROWSER = uaParser.browser.name.toLowerCase().includes('safari');
component_emitter__WEBPACK_IMPORTED_MODULE_5___default()(QG.prototype);
var constants = {
  identified: 'identified',
  qg_identified: '_qg_identified',
  gcm_sender_id: 'qg_gcm_sender_id',
  PUSH_REQUEST: '_qg_pushrequest',
  CYMP: '_qg_cymp',
  QG_DATA_NAME: 'qg_data',
  // Only used for legacy API endpoint
  QG_QAID: '_qg_qaid',
  QG_APPIER_CM_FLAG: '_qg_cm'
};

function QG() {
  this._settings = {};
  this.initialized = false;
  this.headers = {
    'Content-Type': 'application/json',
    'Package-Name': window.location.hostname
  };
}

QG.prototype.callmethod = function (args) {
  var _this = this;

  if (!(args && args.length > 0)) {
    return;
  }

  var _args = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_4__["default"])(args),
      method = _args[0],
      params = _args.slice(1);

  var appId = this._settings.appId;

  switch (method) {
    case 'init':
      return this.init(args[1]);

    case 'prompt-push':
      return this.promptPush();

    case 'message-received':
      return this.messageReceived(args[1]);

    case 'identify':
      return this.identify(args[1]);

    case 'event':
      {
        this.events.apply(this, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));
        break;
      }

    case 'qgEvent':
      {
        this.qgEvents.apply(this, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));
        break;
      }

    case 'getRecommendation':
      {
        Object(_recommendation__WEBPACK_IMPORTED_MODULE_22__["getRecommendationWithApp"])(appId).apply(void 0, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));
        break;
      }

    case 'showRecommendation':
      {
        Object(_recommendation__WEBPACK_IMPORTED_MODULE_22__["showRecommendationWithApp"])(appId).apply(void 0, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));
        break;
      }

    case 'closeOnSubscribedPopup':
      {
        Object(_push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__["closeOnSubscribedPopup"])(function () {
          _this.emit(_push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__["POPUP_CLOSED_EVENT"]);
        });
        break;
      }

    /**
     * Delegate handlers of event emitter
     */

    case 'on':
    case 'once':
    case 'off':
      {
        this[method].apply(this, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));
        break;
      }
    // Turn on debug mode

    case 'debug':
      {
        _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].enableAll();
        break;
      }

    case 'getAttribution':
      {
        Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_25__["getAttribution"])().then(args[1]);
        break;
      }

    case 'navigateWithAttribution':
      {
        var urlStrWithIdentified = setUrlParamsWithIdentified(args[1]);
        Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_25__["navigateWithAttribution"])(urlStrWithIdentified);
        break;
      }

    default:
      _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('undefined method', method);
  }
};

function updateDataSettings(key, value) {
  var d = localStorage.getItem(QG_DATA_SETTINGS);

  try {
    d = JSON.parse(d) || {};
  } catch (err) {
    d = {};
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug(err);
  }

  d[key] = value;
  localStorage.setItem(QG_DATA_SETTINGS, JSON.stringify(d));
}
/**
 * Cookie sync for Appier. (Only for legacy API endpoint)
 * The safari browser does NOT support cookie sync currently(intelligent tracking prevention)
 * So we don't implement cookie sync in safari.js in this stage.
 *
 * #TODO: Remove it until all users migrate to the appier dback.
 */


function appierCookieSync(qg) {
  if (_utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].getJSON(constants.QG_APPIER_CM_FLAG)) {
    return;
  }
  /* disable cookie matching in 1 hr */


  _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.QG_APPIER_CM_FLAG, 1, {
    maxage: 3600 * 1000
  });
  /**
   * POST method with http 302 redirection may cause undefined behavior
   * https://zh.wikipedia.org/wiki/HTTP_302
   * https://zh.wikipedia.org/wiki/HTTP_307
   */

  Object(_utils_makeRequest__WEBPACK_IMPORTED_MODULE_28__["default"])({
    url: "".concat("https://dback.new-infra.staging-api.qgraph.io" || '', "/web/cm/"),
    method: 'GET'
  }).then(function (_ref) {
    var json = _ref.json;
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Ran Appier cookie sync', json);

    var _ref2 = json || {},
        qaid = _ref2.qaid;

    if (qaid) {
      qg._sendDataToServer({
        profiles: {
          qg_qaid: qaid
        }
      }).then(function () {
        /* Cookie sync at most one time each two weeks. */
        _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.QG_APPIER_CM_FLAG, 1, {
          maxage: 86400 * 14 * 1000
        });
        _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.QG_QAID, qaid, {
          maxage: 31536000000
        }); // 1 year
      })["catch"](function (err) {
        _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Failed to save Appier cookie sync', err);
      });
    }
  })["catch"](function (err) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Failed to run Appier cookie sync', err);
  });
}
/**
 * Set `aiq_identified` in url's search params
 *
 * @param {String} urlStr
 * @returns {String}
 */


function setUrlParamsWithIdentified(urlStr) {
  try {
    var url = new URL(urlStr);
    var qgDataSettings = JSON.parse(localStorage.getItem(QG_DATA_SETTINGS) || '{}');

    if (_utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].getJSON(constants.qg_identified) || qgDataSettings[constants.identified]) {
      url.searchParams.set(_constants__WEBPACK_IMPORTED_MODULE_31__["SEARCH_PARAMS_IDENTIFIED_KEY"], true);
    }

    return url.toString();
  } catch (err) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Set url params error', err);
  }
}
/**
 * Send data to server
 *
 * @param {Url} endpoint
 * @param {JSON} data
 * @param {boolean|undefined} runInSync
 * @returns {Promise|void}
 */


QG.prototype._sendDataToServer =
/*#__PURE__*/
function () {
  var _ref3 = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data, runInSync) {
    var apiHost, requestOpts;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data.wUserId = Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["getWUserId"])();
            data.device = 'web';
            data.cv = '1.9.0';

            if (!(data && Array.isArray(data.events))) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_25__["composeAttributionEvents"])(data.events);

          case 6:
            data.events = _context.sent;

          case 7:
            apiHost = this._settings.useLegacyAPI ? "https://dback.new-infra.staging-api.qgraph.io" : "https://dback.new-infra.staging-api.qgraph.io";
            requestOpts = {
              url: "".concat(apiHost, "/web/").concat(this._settings.appId, "/data/"),
              method: 'POST',
              headers: this.headers,
              data: data
            };
            _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Send data to server', data);
            return _context.abrupt("return", Object(_utils_makeRequest__WEBPACK_IMPORTED_MODULE_28__["default"])(requestOpts, runInSync));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Send data to server in batch
 */


QG.prototype.batch = function () {
  var d = this.data;

  if (d.events.length === 0 && Object.keys(d.profiles).length === 0) {
    return;
  }

  if (d.events.length === 0) {
    delete d.events;
  }

  if (Object.keys(d.profiles).length === 0) {
    delete d.profiles;
  }

  this.data = {
    profiles: {},
    events: []
  };

  this._sendDataToServer(d).then(function (data) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug(data);
    localStorage.removeItem(constants.QG_DATA_NAME);
  });
};
/**
 * Send data immediately before page unload
 */


QG.prototype.unloadFlush =
/*#__PURE__*/
Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
  var d, apiHost;
  return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          d = this.data;

          if (!(d.events.length === 0 && Object.keys(d.profiles).length === 0)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          if (d.events.length === 0) {
            delete d.events;
          }

          if (Object.keys(d.profiles).length === 0) {
            delete d.profiles;
          }

          this.data = {
            profiles: {},
            events: []
          }; // Schedule a non-blocking request to flush all the data in background

          if (!(navigator && navigator.sendBeacon)) {
            _context2.next = 18;
            break;
          }

          d.wUserId = Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["getWUserId"])();
          d.device = 'web';
          d.cv = '1.9.0';

          if (!(d && Array.isArray(d.events))) {
            _context2.next = 14;
            break;
          }

          _context2.next = 13;
          return Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_25__["composeAttributionEvents"])(d.events);

        case 13:
          d.events = _context2.sent;

        case 14:
          apiHost = this._settings.useLegacyAPI ? "https://dback.new-infra.staging-api.qgraph.io" : "https://dback.new-infra.staging-api.qgraph.io";
          navigator.sendBeacon("".concat(apiHost, "/web/").concat(this._settings.appId, "/data/"), JSON.stringify(d));
          _context2.next = 19;
          break;

        case 18:
          // Use synchronous xhr if `sendBeacon` API is not supported in client's browser
          this._sendDataToServer(d, true);

        case 19:
          localStorage.removeItem(constants.QG_DATA_NAME);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
/**
 * Compose and collect event if current user is identified
 */

QG.prototype.events = function (eventName, parameters, vts) {
  if (!this.identified) {
    return;
  }

  this.qgEvents(eventName, parameters, vts);
};
/**
 * Compose the event object and put it into queue
 */


QG.prototype.qgEvents = function (eventName, parameters, vts) {
  if (!eventName) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].warn('should contain event name in first parameter');
    return;
  }

  var e = {
    eventName: eventName,
    qgts: parseInt(new Date().getTime() / 1000)
  };

  if (parameters) {
    e.parameters = parameters;
  } // TODO: Add an unit test for numeric validation


  if (vts && !isNaN(parseFloat(vts)) && isFinite(vts)) {
    e.vts = parseFloat(vts);
  }

  this.data.events.push(e);
  localStorage.setItem(constants.QG_DATA_NAME, JSON.stringify(this.data)); // Trigger InWeb campaign

  if (this._settings.inWebEnabled) {
    Object(_in_web_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_18__["default"])(e, this._settings.appId);
  }
};

QG.prototype.identify = function (json) {
  if (json.hasOwnProperty('email')) {
    updateDataSettings(constants.identified, true);
    _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.qg_identified, true);
    this.identified = true;
  } else {
    if (!this.identified) {
      return;
    }
  }

  for (var key in json) {
    this.data.profiles[key] = json[key];
  }

  localStorage.setItem(constants.QG_DATA_NAME, JSON.stringify(this.data));
};

function sendSubscriptionStatus(self, permission, subscription) {
  var profiles = {};
  profiles.permission = permission;

  if (subscription) {
    profiles.subscription = subscription;

    var _k = subscription.endpoint.split('/');

    profiles.gcmId = _k[_k.length - 1];
    profiles.identified = true;
    self.identified = true;
  } else {
    profiles.subscription = '';
    profiles.gcmId = '';
  }

  var data = localStorage.getItem(QG_DATA_SETTINGS);

  try {
    data = JSON.parse(data) || {};
  } catch (err) {
    data = {};
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Invalid profile data', err);
  }

  var sendDataToServer = false;

  for (var _k2 in profiles) {
    if (typeof profiles[_k2] === typeof {}) {
      if (JSON.stringify(profiles[_k2]) !== JSON.stringify(data[_k2])) {
        sendDataToServer = true;
      }
    } else if (profiles[_k2] !== data[_k2]) {
      sendDataToServer = true;
    }

    data[_k2] = profiles[_k2];
  }

  if (sendDataToServer) {
    var d = localStorage.getItem(QG_DATA_SETTINGS);

    try {
      d = JSON.parse(d) || {};
    } catch (err) {
      d = {};
      _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug(err);
    }

    for (var k in profiles) {
      d[k] = profiles[k];
    }

    localStorage.setItem(QG_DATA_SETTINGS, JSON.stringify(d)); // Send `subscribed_to_webpush` event if user granted push permission

    if (permission === 'granted') {
      var paramaters = {
        url: window.location.href
      };

      if (window.document.referrer) {
        paramaters.referrer = window.document.referrer;
      }

      _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].info('Sending "subscribed_to_webpush" event...', paramaters);
      self.events('subscribed_to_webpush', paramaters);
    }

    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Sending push subscription status', permission, subscription);

    self._sendDataToServer({
      profiles: profiles
    });
  }
}

var isPushServiceSubscribed = false;
/**
 * Subscribe to a push service through registered service worker
 */

function subscribeSWPush(_x3) {
  return _subscribeSWPush.apply(this, arguments);
}

function _subscribeSWPush() {
  _subscribeSWPush = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(self) {
    var assetsRoot, swUrl, swRegistration, currentPermissionState, pushSubscription, newPermissionState, currentDate;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if ('serviceWorker' in navigator) {
              _context4.next = 3;
              break;
            }

            _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('serviceWorker not supported');
            return _context4.abrupt("return");

          case 3:
            _context4.prev = 3;
            assetsRoot = (window.QGSettings.assetsRoot || '/').replace(/^\/*/, '/').replace(/$|\/+$/, '/'); // Ensure leading and trailing slash in path

            swUrl = "".concat(assetsRoot, "qg-sw.").concat(window.QGSettings.appId, ".js"); // Register new or get the cached service worker

            _context4.next = 8;
            return Object(_web_push_registerServiceWorker__WEBPACK_IMPORTED_MODULE_10__["default"])(swUrl, // Register the service worker at another scope to prevent scope collision.
            "".concat(assetsRoot).concat(_constants__WEBPACK_IMPORTED_MODULE_31__["DEFAULT_SW_SCOPE"]));

          case 8:
            swRegistration = _context4.sent;

            if (!(isPushServiceSubscribed || !swRegistration || !('Notification' in window) || 'sw' in window.QGSettings && !window.QGSettings.sw)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return");

          case 11:
            isPushServiceSubscribed = true; // Avoid resubscribing

            currentPermissionState = Notification.permission;
            _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Subscribing push service...', currentPermissionState); // Show overlay before asking push permission

            if (currentPermissionState === 'default') {
              Object(_push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__["openOverlayPrompt"])(self._settings.push.overlay);
            } // Subscribe push service on service worker registration


            _context4.next = 17;
            return swRegistration.pushManager.subscribe({
              userVisibleOnly: true
            });

          case 17:
            pushSubscription = _context4.sent;
            newPermissionState = Notification.permission;
            _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Subscribed push', newPermissionState, pushSubscription); // Show On-Subscribed Popup if user first granted the notification permission

            if (currentPermissionState !== 'granted' && newPermissionState === 'granted' && self._settings.push.onSubscribedPopup) {
              Object(_push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__["openOnSubscribedPopup"])(self._settings.push.onSubscribedPopup, {
                onPopupOpened: function onPopupOpened() {
                  self.emit(_push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__["POPUP_OPENED_EVENT"]);
                },
                onPopupClosed: function onPopupClosed() {
                  self.emit(_push_prompts_on_subscribed_popup__WEBPACK_IMPORTED_MODULE_13__["POPUP_CLOSED_EVENT"]);
                }
              });
            } // Send subscription result to dback


            sendSubscriptionStatus(self, newPermissionState, pushSubscription.toJSON()); // Close overlay

            Object(_push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__["closeOverlayPrompt"])(); // Set timeout to ask next permission

            _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.PUSH_REQUEST, true, {
              maxage: (self._settings.push.secondsBetweenPrompts || 3600) * 1000
            });
            _context4.next = 29;
            break;

          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](3);

            // Permission denied or ignored
            if (_context4.t0 instanceof DOMException && _context4.t0.name === 'NotAllowedError') {
              _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Denied or ignored push permission'); // Send subscription result to dback

              sendSubscriptionStatus(self, Notification.permission); // Close overlay

              Object(_push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__["closeOverlayPrompt"])(); // Set timeout to ask next permission

              _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.PUSH_REQUEST, true, {
                maxage: (self._settings.push.secondsBetweenPrompts || 3600) * 1000
              }); // Set timeout to show next CYMP

              currentDate = new Date();
              currentDate.setHours(0, 0, 0, 0); // 12:00am

              Object(idb_keyval__WEBPACK_IMPORTED_MODULE_6__["set"])(_constants__WEBPACK_IMPORTED_MODULE_31__["IDB_PUSH_DENIED_TIMESTAMP"], +currentDate);
            } else {
              _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Failed to register service worker', _context4.t0);
            }

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 26]]);
  }));
  return _subscribeSWPush.apply(this, arguments);
}

QG.prototype.messageReceived = function (data) {
  var d = data || {};

  if (d.src !== 'QG') {
    return;
  }

  _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('messageReceived', data);

  if (d.cmd === 'pushStatus') {
    if (d.status === 'granted' && d.sts) {
      if (d.subscription) {
        sendSubscriptionStatus(this, 'granted', d.subscription);
      }
    } else if (d.status === 'granted' && !d.sts) {
      if (d.subscription) {
        sendSubscriptionStatus(this, 'granted', d.subscription);
      } else {
        sendSubscriptionStatus(this, 'granted');
      }

      this.popSecFakePrompt();
    } else if (d.status === 'default') {
      if (this._settings.push.fakePrompt) {
        this.showFakePrompt();
      } else {
        interestedInPush(this);
      }
    } else if (d.status === 'denied') {
      sendSubscriptionStatus(this, 'denied');
    }
  } else if (d.cmd === 'reqPushPerm') {
    if (d.status === 'granted') {
      this.popSecFakePrompt();
    } else {
      console.log('permission denied by user');
    }

    Object(_push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__["closeOverlayPrompt"])();
    var secondsBetweenPrompts = (this._settings.push.secondsBetweenPrompts || 3600) * 1000;
    _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.PUSH_REQUEST, true, {
      maxage: secondsBetweenPrompts
    });
  } else if (d.cmd === 'ready') {
    if (d.permission === 'granted') {
      _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.qg_identified, true);
      this.identified = data.identified;
      _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].remove(constants.PUSH_REQUEST);
    }

    this._settings.push.ready = true;

    if (this._settings.push.delay) {
      var qg = this;
      window.setTimeout(function () {
        initAdvancedPush(qg);
      }, qg._settings.push.delay * 1000);
    } else {
      initAdvancedPush(this);
    }
  }
};

function interestedInPush(self) {
  var secondsBetweenPrompts = (self._settings.push.secondsBetweenPrompts || 3600) * 1000;
  _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('interestedInPush', 'window.location.protocol', window.location.protocol);
  Object(_push_prompts_fake_prompt__WEBPACK_IMPORTED_MODULE_15__["closeFakePrompt"])(function () {
    _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.PUSH_REQUEST, true, {
      maxage: secondsBetweenPrompts
    });
  });

  if (window.location.protocol === 'https:') {
    subscribeSWPush(self);
  } else {
    Object(_push_prompts_overlay_prompt__WEBPACK_IMPORTED_MODULE_14__["openOverlayPrompt"])(self._settings.push.overlay);
    var frame = document.getElementById('QGA');
    var s = {
      settings: self._settings,
      cmd: 'reqPushPerm',
      src: 'QG'
    };
    frame.contentWindow.postMessage(s, '*');
  }
}

var popupAlign = function popupAlign(alignment) {
  var dim = 'height=' + String('1px');
  dim = dim + ',width=' + String('1px');

  if (alignment) {
    var avHt = window.screen.availHeight;
    var avWt = window.screen.availWidth;

    if (alignment.indexOf('top') > -1) {
      dim = dim + ',top=1px';
    } else if (alignment.indexOf('bottom') > -1) {
      dim = dim + ',top=' + avHt + 'px';
    } else if (alignment.indexOf('center') > -1) {
      var top = avHt / 2 - 45;
      var left = avWt / 2;
      dim = dim + ',top=' + top + ',left=' + left;
    }

    if (alignment.indexOf('left') > -1) {
      dim = dim + ',left=1px';
    }

    if (alignment.indexOf('right') > -1) {
      dim = dim + ',left=' + avWt + 'px';
    }
  } else {
    dim = dim + ',top=2000,left=0';
  }

  return dim;
};

function openPushWindow(self) {
  var e = self._settings.qgendpoint;
  var alignment = self._settings.push.popupAlignment;
  var dim = popupAlign(alignment);
  var landingUrl;

  if (e.startsWith('https:')) {
    landingUrl = window.QGSettings.qgendpoint + '?appId=' + self._settings.appId + '&subscribe=true&userId=' + Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["getWUserId"])();
  } else {
    landingUrl = 'https://' + self._settings.qgendpoint + '.qgr.ph?appId=' + self._settings.appId + '&subscribe=true&userId=' + Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["getWUserId"])();
  }

  var qgraphSecFakePrompt = document.getElementById('qgraphSecFakePrompt');

  if (qgraphSecFakePrompt) {
    qgraphSecFakePrompt.setAttribute('style', 'display:none');
  }

  window.open(landingUrl, '_blank', dim);
}

QG.prototype.popSecFakePrompt = function () {
  if (this.poppedSecFakePrompt) {
    return;
  } else {
    this.poppedSecFakePrompt = true;
  }

  var qgraphCss = document.getElementById('qgraph-css');

  if (!qgraphCss) {
    var sheet = document.createElement('style');
    sheet.id = 'qgraph-css';

    if (uaParser.device.type === 'mobile' || uaParser.device.type === 'tablet') {
      sheet.innerHTML = '.chromePushDv { background-color: #ffffff; line-height: 1; font-size: 16px; font-family: sans-serif; color: #000000; width: 100%; background: #fff; position: fixed; z-index: 2147483000; bottom: 0px; left: 0; right: 0; padding: 10px 10px; box-sizing: border-box; border: 1px solid #efebeb; box-shadow: 0 -3px 6px #a9a1a1; -webkit-box-shadow: 0 -3px 6px #c5c2c2 } .chromePushDv div { opacity: 1; font: inherit; } .chromePushDv span { display: inline-block } .chromePushDv p { font: inherit; margin-top: 4px; margin-left: 8px; opacity: 0.4; margin-right: 30px } .chromePushDv p .allowPush { background-color: #D6E6FD; color: #4285F4; padding: 2px 4px; font: inherit; } .chromePushDv .pushMsg { margin-left: 8px; opacity: 0.8; font: inherit; } .chromePushDv .btnsCont { display: block; font: inherit; font-size: 13px; margin: 15px 0 0 0; } .chromePushDv .btnsCont .powered { opacity: 0.4; font: inherit; margin-top: 20px; margin-left: 8px } .chromePushDv .btnsCont .showPush { float: right; font: inherit; background: #4285F4; padding: 10px 20PX 10px 20PX; position: relative; box-sizing: border-box; color: #ffffff; transition: 1s ease-in; opacity: 0; right: 8px; } .chromePushDv .btnsCont .solidBtn { font-weight: bold; opacity: 1; font: inherit; cursor: pointer } .chromePushDv .pushmodalClose { position: absolute; top: 8px; font: inherit; right: 16px; cursor: pointer; }';
    } else {
      sheet.innerHTML = '.chromePushDv { background-color: #ffffff; line-height: 1; font-size: 16px; color: #000000; top: 0; font-family: sans-serif; width: 30%; left: 10%; right: 60%; background: #fff; position: fixed; z-index: 2147483000; margin 0 auto; padding: 10px 10px; box-sizing: border-box; border: 1px solid #efebeb; box-shadow: 0 -3px 6px #a9a1a1; -webkit-box-shadow: 0 3px 6px #c5c2c2 } .chromePushDv div { font: inherit; opacity: 1 } .chromePushDv span { font: inherit; display: inline-block } .chromePushDv p { font: inherit; margin-top: 4px; margin-left: 8px; opacity: 0.4; margin-right: 30px } .chromePushDv p .allowPush { font: inherit; background-color: #D6E6FD; color: #4285F4; padding: 2px 4px } .chromePushDv .pushMsg { font: inherit; margin-left: 8px; opacity: 0.8 } .chromePushDv .btnsCont { font: inherit; display: block; font-size: 13px; margin: 15px 0 0 0; } .chromePushDv .btnsCont .showPush { font: inherit; float: right; background: #4285F4; padding: 10px 20PX 10px 20PX; position: relative; box-sizing: border-box; color: #ffffff; transition: 1s ease-in; opacity: 0; right: 8px; } .chromePushDv .btnsCont .solidBtn { font: inherit; font-weight: bold; opacity: 1; cursor: pointer } .chromePushDv .btnsCont .powered { font: inherit; opacity: 0.4; margin-top: 20px; margin-left: 8px } .chromePushDv .pushmodalClose { font: inherit; position: absolute; top: 8px; right: 16px; cursor: pointer; }.qg-close-popup { position: fixed; text-rendering: optimizeLegibility; z-index: 0; top: 40%; left: 50%; background: transparent; transform: translate(-50%, -50%) scale(0.948148) translateZ(0px); zoom: 1; background-color: transparent !important; } .qg-popup-form { background-color: #f0f3f5 !important; border-radius: 5px; font-family: sans-serif !important; background: #f0f0f0; color: #444; margin: 0 auto; max-width: none; font-size: 1.1em; line-height: 1.5em; padding-bottom: 0px !important;padding-left: 1.5em !important;padding-right: 1.5em !important;padding-top: 1.5em !important; } .qg-popup-heading { color: #495259 !important; margin: 0 0 10px; font-size: 24px; font-weight: bold; text-align: center; box-sizing: border-box; } .qg-popup-text{ margin: 0; padding: 0; font-family: inherit; font-weight: normal; font-size: 16px; line-height: 1.6; margin-bottom: 20px; text-rendering: optimizeLegibility; text-transform: initial; direction: ltr; text-align: center; letter-spacing: normal; color:#495259 !important; } .qg-close-button{ cursor: pointer; font-family: sans-serif !important; font-weight: normal; line-height: normal; letter-spacing: normal; margin: 0 0 20px; position: relative; text-decoration: none; text-align: center; text-transform: uppercase; text-shadow: none; box-shadow: none; width: auto; height: auto; min-width: initial; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; outline: 0; display: inline-block; padding-top: 16px; padding-right: 32px; padding-bottom: 17px; padding-left: 32px; font-size: 16px; background: #0073b7 !important; border-top: none !important; border-left: none !important; border-right: none !important; border-bottom: none !important; -webkit-transition: background-color 1s; -moz-transition: background-color 1s; -o-transition: background-color 1s; transition: background-color 1s; padding-right: 0; padding-left: 0; width: 100%; -webkit-border-radius: 3px; border-radius: 3px; margin-bottom: 0; opacity: 1; float: initial; background:#0f74b5 !important; color:#ffffff !important; }';
    }
  }

  document.body.appendChild(sheet);
  var prompt = this._settings.push.thankYouPrompt || {};
  var isMobileDevice = uaParser.device.type === 'mobile' || uaParser.device.type === 'tablet';
  var title, textBox, message, powered, interestedBtn, btnsCont, container, body;

  if (prompt.center && !isMobileDevice) {
    title = document.createElement('div');
    title.className = 'qg-popup-heading';
    title.innerHTML = prompt.title || 'Thanks for subscribing.';
    textBox = document.createElement('div');
    textBox.appendChild(title);
    message = document.createElement('div');
    message.className = 'qg-popup-text';
    message.innerHTML = prompt.message || 'Click CLOSE button to finish subscription process.';
    powered = document.createElement('span');
    powered.className = 'powered';
    powered.innerHTML = 'Powered by QGraph';
    interestedBtn = document.createElement('button');
    interestedBtn.className = 'qg-close-button';
    interestedBtn.innerHTML = 'CLOSE';
    interestedBtn.onclick = openPushWindow.bind(null, this);
    btnsCont = document.createElement('div');
    btnsCont.className = 'btnsCont';
    powered.style = 'font-size:12px !important;';
    btnsCont.appendChild(interestedBtn);
    btnsCont.appendChild(powered);
    container = document.createElement('div');
    container.className = 'qg-popup-form qg-close-popup';
    container.appendChild(textBox);
    container.appendChild(message);
    container.appendChild(btnsCont);
    container.id = 'qgraphSecFakePrompt';
    body = document.getElementsByTagName('body');
    body = body[0];
    body.appendChild(container);
  } else {
    title = document.createElement('span');
    title.className = 'pushMsg';
    title.innerHTML = prompt.title || 'Thank you for subscribing';
    textBox = document.createElement('div');
    textBox.appendChild(title);
    message = document.createElement('p');
    message.innerHTML = prompt.message || 'Happy browsing';
    powered = document.createElement('span');
    powered.className = 'powered';
    powered.innerHTML = 'Powered by QGraph';
    interestedBtn = document.createElement('span');
    interestedBtn.className = 'showPush solidBtn';
    interestedBtn.innerHTML = 'CLOSE';
    interestedBtn.onclick = openPushWindow.bind(null, this);
    btnsCont = document.createElement('div');
    btnsCont.className = 'btnsCont';
    btnsCont.appendChild(powered);
    btnsCont.appendChild(interestedBtn);
    container = document.createElement('div');
    container.className = 'font15 chromePushDv';
    container.appendChild(textBox);
    container.appendChild(message);
    container.appendChild(btnsCont);
    container.id = 'qgraphSecFakePrompt';
    body = document.getElementsByTagName('body');
    body = body[0];
    body.appendChild(container);
  }
};

QG.prototype.showFakePrompt = function () {
  var _this2 = this;

  var _this$_settings$push = this._settings.push,
      push = _this$_settings$push === void 0 ? {} : _this$_settings$push;
  var secondsBetweenPrompts = (push.secondsBetweenPrompts || 3600) * 1000;
  Object(_push_prompts_fake_prompt__WEBPACK_IMPORTED_MODULE_15__["openFakePrompt"])(push.prompt, {
    onPromptClosed: function onPromptClosed() {
      _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.PUSH_REQUEST, true, {
        maxage: secondsBetweenPrompts
      });
    },
    onPromptConfirmed: function onPromptConfirmed() {
      interestedInPush(_this2);
    }
  });
};

QG.prototype.promptPush = function () {
  // #TODO: push notification is not supported for safari browser
  if (IS_SAFARI_BROWSER) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].warn('Web push functions are not supported for safari yet');
    return;
  }

  if (!Object(_web_push_shouldEnablePush__WEBPACK_IMPORTED_MODULE_11__["default"])(this._settings)) {
    return;
  }

  if (window.location.protocol === 'https:') {
    if (Notification.permission === 'default' && 'serviceWorker' in navigator) {
      if (this._settings.push.fakePrompt) {
        this.showFakePrompt();
      } else {
        subscribeSWPush(this);
      }
    } else {
      interestedInPush(this);
    }
  } else if ('serviceWorker' in navigator) {
    if (this._settings.push.ready) {
      var frame = document.getElementById('QGA');
      var requestPushStatus = {
        settings: this._settings,
        cmd: 'pushStatus',
        src: 'QG'
      };
      frame.contentWindow.postMessage(requestPushStatus, '*');
    } else {
      this._settings.push.requested = true;
    }
  }
};
/**
 * Initialize web push integration in "advancde" or "manual" way
 *
 * #TODO: move to separate file
 */


function initAdvancedPush(self) {
  try {
    var qgSettings = self._settings; // Skip if current account is not enabling web push

    if (!Object(_web_push_shouldEnablePush__WEBPACK_IMPORTED_MODULE_11__["default"])(qgSettings)) {
      return;
    }

    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Initializing advanced web push integration...'); // Append manifest.json

    if (qgSettings.manifest !== false) {
      Object(_web_push_loadManifest__WEBPACK_IMPORTED_MODULE_12__["default"])(qgSettings.assetsRoot);
    } // Subscribe push subscription


    if (Notification.permission !== 'default') {
      subscribeSWPush(self);
    } // Show prompt (native or fake) if user is not subscribed yet


    if (!qgSettings.push.requestSelf && _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].getJSON(constants.PUSH_REQUEST) === undefined) {
      self.promptPush();
    } // Show CYMP if user denied push permission


    if (qgSettings.push && qgSettings.push.cymp && window.Notification.permission === 'denied') {
      var cymp = qgSettings.push.cymp;
      Object(_third_party_isPrivateMode__WEBPACK_IMPORTED_MODULE_8__["default"])().then(
      /*#__PURE__*/
      function () {
        var _ref5 = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(isPrivate) {
          var cympThreshold, hasCympAcked, pushDeniedTimestamp;
          return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // "threshold" is the number of days after which the user is shown the prompt
                  cympThreshold = +cymp.threshold || 0;
                  _context3.next = 3;
                  return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_6__["get"])(_constants__WEBPACK_IMPORTED_MODULE_31__["IDB_CYMP_ACKED"]);

                case 3:
                  hasCympAcked = _context3.sent;
                  _context3.next = 6;
                  return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_6__["get"])(_constants__WEBPACK_IMPORTED_MODULE_31__["IDB_PUSH_DENIED_TIMESTAMP"]);

                case 6:
                  pushDeniedTimestamp = _context3.sent;

                  if (!(isPrivate || hasCympAcked || (pushDeniedTimestamp && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_26__["diffDatesInDays"])(new Date(pushDeniedTimestamp), new Date())) <= cympThreshold)) {
                    _context3.next = 9;
                    break;
                  }

                  return _context3.abrupt("return");

                case 9:
                  Object(_push_prompts_cym_prompt__WEBPACK_IMPORTED_MODULE_16__["openCymPrompt"])(cymp, {
                    onPromptOpened: function onPromptOpened() {
                      Object(idb_keyval__WEBPACK_IMPORTED_MODULE_6__["set"])(_constants__WEBPACK_IMPORTED_MODULE_31__["IDB_CYMP_ACKED"], true);
                    }
                  });

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  } catch (err) {
    _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Advanced Push Integration', err);
  }
}
/**
 * Initialize web push, split the workflow to "simple" or "advanced"
 */


function initializeWebPush(self) {
  // #TODO: push notification is not supported for safari browser
  if (IS_SAFARI_BROWSER || !('Notification' in window) || !('serviceWorker' in navigator)) {
    return;
  }

  var _ref6 = self._settings.push || {},
      delay = _ref6.delay; // In seconds


  var delayTime = delay ? delay * 1000 : 0; // In milliseconds

  var initPush = function initPush() {
    // #TODO: Should determine the flow by flag in pixel settings,
    //        not only check the website protocol
    if (window.location.protocol === 'https:') {
      initAdvancedPush(self);
    } else if (window.location.protocol === 'http:') {
      Object(_web_push_initSimplePush__WEBPACK_IMPORTED_MODULE_9__["default"])(self._settings);
    }
  };

  if (delayTime > 0) {
    // Initialize web push function after delay
    setTimeout(initPush, delayTime);
  } else {
    initPush();
  }
}

QG.prototype.init = QG.prototype.initialize = function (settings) {
  var _this3 = this;

  if (this.initialized) {
    return;
  }

  _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].debug('Initializing sdk...');
  settings = settings || {};
  this.data = {
    events: [],
    profiles: {}
  };
  this._settings = settings;
  this.emit('initialize', settings); // Set first time cookie at beginning

  Object(_utils_first_time__WEBPACK_IMPORTED_MODULE_29__["setFirstTimeCookie"])(); // Set `wUserId` for first time user

  if (!Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["getWUserId"])()) {
    Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_30__["setWUserId"])();
  }

  var self = this;

  if (_utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].getJSON(constants.qg_identified) || settings.personalizationEnabled) {
    this.identified = true;
  } // Initialize web push function


  initializeWebPush(this);
  /* Initialize InWeb data and refresh every 1hr */

  if (this._settings.inWebEnabled) {
    var firstTimeCookie = Object(_utils_first_time__WEBPACK_IMPORTED_MODULE_29__["getFirstTimeCookie"])() || 0; // Keep flag in first 24hours when user first onboard

    var isFirstTimeUser = new Date() - firstTimeCookie < 86400000;
    Object(_in_web_fetchInWebData__WEBPACK_IMPORTED_MODULE_17__["default"])(this._settings.appId, this._settings.useLegacyAPI, isFirstTimeUser);
    setInterval(function () {
      Object(_in_web_fetchInWebData__WEBPACK_IMPORTED_MODULE_17__["default"])(_this3._settings.appId, _this3._settings.useLegacyAPI, undefined, true);
    }, _constants__WEBPACK_IMPORTED_MODULE_31__["INWEB_DATA_LIFETIME"]);
    Object(_in_web_exitIntentHandler__WEBPACK_IMPORTED_MODULE_19__["default"])(this._settings.appId);
    Object(_in_web_scrollPercentHandler__WEBPACK_IMPORTED_MODULE_20__["default"])(this._settings.appId);
    Object(_in_web_idleHandler__WEBPACK_IMPORTED_MODULE_21__["default"])(this._settings.appId);
  }

  var locationUrl = new URL(window.location); // Try to set attribution from query string

  Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_25__["setAttributionViaUrl"])(locationUrl); // Check identified from url

  if (locationUrl.searchParams.get(_constants__WEBPACK_IMPORTED_MODULE_31__["SEARCH_PARAMS_IDENTIFIED_KEY"])) {
    updateDataSettings(constants.identified, true);
    _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.qg_identified, true);
    this.identified = true;
  }

  this.initialized = true;
  /*
    To save time we have set identified as true when QGSettings.events,
    we need to send events irrespective of identification when
    QGSettings.events is true
    */

  if (this._settings.events) {
    this.identified = true;
  }

  var currentDate = new Date().toJSON().slice(0, 10);
  var e = {
    events: [],
    profiles: {}
  };
  var data = null; // Harness of JSON parse to prevent throwing error while processing
  // null data in some browsers or via polyfills.

  try {
    data = JSON.parse(localStorage.getItem(QG_DATA_SETTINGS));
  } catch (e) {}

  if (!data || data.lastSyncDate !== currentDate) {
    var visitedEvent = {
      eventName: 'visited',
      qgts: parseInt(new Date().getTime() / 1000),
      parameters: Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: window.location.href
      }, Object(_utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_27__["default"])(locationUrl))
    };
    e.events.push(visitedEvent); // Trigger InWeb campaign after `visited` event

    if (this._settings.inWebEnabled) {
      Object(_in_web_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_18__["default"])(visitedEvent, this._settings.appId);
    }

    if (uaParser.device) {
      e.profiles.qgDevice = uaParser.device;
    }

    if (uaParser.browser) {
      e.profiles.qgBrsr = uaParser.browser;
    }

    if (uaParser.os) {
      e.profiles.qgOS = uaParser.os;
    }

    var ga = _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].get('_ga');

    try {
      if (ga) {
        var k = ga.split('.');
        e.profiles.qg_ga = k[2] + '.' + k[3];
        e.profiles.qg_gats = parseInt(k[3]);
      }
    } catch (err) {
      _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Failed to set GA profile', err);
    }

    if (data && (data.identified || data.subscribed)) {
      if (data.hasOwnProperty('subscription')) {
        e.profiles.subscription = data.subscription;
      }

      if (data.hasOwnProperty('gcmId')) {
        e.profiles.gcmId = data.gcmId;
      }

      if (data.hasOwnProperty('permission')) {
        e.profiles.permission = data.permission;
      }
    }
  }

  if (data && (data.identified || data.subscribed)) {
    _utils_cookie__WEBPACK_IMPORTED_MODULE_24__["default"].exSet(constants.qg_identified, true);
    self.identified = data.identified;
  } // Try to set profile if redirect from line ＆ send click event at the same time


  var lineChannel = locationUrl.searchParams.get(_constants__WEBPACK_IMPORTED_MODULE_31__["SEARCH_PARAMS_LINECHANNEL"]);
  var lineUid = locationUrl.searchParams.get(_constants__WEBPACK_IMPORTED_MODULE_31__["SEARCH_PARAMS_LINEUID"]);

  if (lineChannel && lineUid) {
    this.identified = true;
    this.identify({
      line_channel_id: lineChannel,
      line_uid: lineUid
    });
    var clickEvent = {
      eventName: 'qg_line_click',
      qgts: parseInt(new Date().getTime() / 1000),
      parameters: Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: window.location.href
      }, Object(_utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_27__["default"])(locationUrl))
    };
    e.events.push(clickEvent); // Remove particular query strings

    if (window.history && window.history.replaceState) {
      ['_lnuid', '_lnchid', 'openExternalBrowser'].forEach(function (param) {
        return locationUrl.searchParams["delete"](param);
      });
      window.history.replaceState(window.history.state, document.title, locationUrl.href);
    } // Trigger InWeb campaign after line click event


    if (this._settings.inWebEnabled) {
      Object(_in_web_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_18__["default"])(clickEvent, this._settings.appId);
    }
  }

  if (self.identified) {
    var pageViewedEvent = {
      eventName: 'page_viewed',
      qgts: parseInt(new Date().getTime() / 1000),
      parameters: Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: window.location.href
      }, Object(_utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_27__["default"])(locationUrl))
    };

    if (window.document.referrer) {
      pageViewedEvent.parameters.referrer = window.document.referrer;
    }

    var qgSeg = locationUrl.searchParams.get('qg_seg');

    if (qgSeg) {
      pageViewedEvent.parameters.qg_seg = qgSeg;
    }

    e.events.push(pageViewedEvent); // Trigger InWeb campaign after `page_viewed` event

    if (this._settings.inWebEnabled) {
      Object(_in_web_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_18__["default"])(pageViewedEvent, this._settings.appId);
    }
  }

  if (e.events.length > 0) {
    self._sendDataToServer(e).then(function () {
      updateDataSettings('lastSyncDate', currentDate);
    })["catch"](function (err) {
      _utils_log__WEBPACK_IMPORTED_MODULE_23__["default"].error('Failed to send data', err);
    });
  }
  /* Do cookie sync in the background (only for legacy API endpoint) */


  if (this._settings.useLegacyAPI) {
    window.setTimeout(function () {
      appierCookieSync(self);
    }, 2000);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (QG);


/***/ }),

/***/ "./lib/WithAppSdkMode.js":
/*!*******************************!*\
  !*** ./lib/WithAppSdkMode.js ***!
  \*******************************/
/*! exports provided: sendIdentify, sendEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendIdentify", function() { return sendIdentify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEvent", function() { return sendEvent; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/version */ "./lib/utils/version.js");




function WithAppSdkMode() {
  Object(_utils_version__WEBPACK_IMPORTED_MODULE_2__["logMobileSdkVersion"])();
}

WithAppSdkMode.prototype.callmethod = function (args) {
  if (!(args && args.length > 0)) {
    return;
  }

  var _args = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args),
      method = _args[0],
      params = _args.slice(1);

  switch (method) {
    case 'identify':
      return sendIdentify(params[0]);

    case 'event':
    case 'qgEvent':
      return sendEvent.apply(null, params);
    // Turn on debug mode

    case 'debug':
      _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].enableAll();
      break;

    case 'init':
    case 'prompt-push':
    case 'message-received':
    case 'getRecommendation':
    case 'showRecommendation':
    case 'closeOnSubscribedPopup':
    case 'on':
    case 'once':
    case 'off':
    case 'getAttribution':
      break;

    default:
      _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('undefined method', method);
  }
};

var sendIdentify = function sendIdentify(identifies) {
  if (typeof identifies !== 'object' || identifies === null) {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect JSON object, but get', identifies);
    return;
  }

  Object.keys(identifies).forEach(function (key) {
    var value = identifies[key];

    switch (key) {
      case 'email':
      case 'userId':
      case 'name':
      case 'firstName':
      case 'lastName':
      case 'city':
        if (typeof value !== 'string') {
          _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect value as string, but get', {
            key: key,
            value: value
          });
          return;
        }

        break;

      case 'day':
      case 'month':
      case 'year':
        if (typeof value !== 'number') {
          _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect value as number, but get', {
            key: key,
            value: value
          });
          return;
        }

        break;

      default:
        var typeOfValue = typeof value;

        if (typeOfValue !== 'boolean' && typeOfValue !== 'string' && typeOfValue !== 'number') {
          _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect value as boolean, string or number, but get', {
            key: key,
            value: value
          });
          return;
        }

    }

    window.aiqMobileSdk.setCustomKey(JSON.stringify({
      key: key,
      value: value
    })); // Let App-SDK side do the rest type protection
  });
};
var sendEvent = function sendEvent(eventName, parameters, vts) {
  if (!eventName || typeof eventName !== 'string') {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect eventName to be string, but get', eventName);
    return;
  }

  if (parameters && typeof parameters !== 'object') {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect parameters to be JSON object, but get', parameters);
    return;
  }

  if (vts && typeof vts !== 'number') {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Expect vts to be number, but get', vts);
    return;
  }

  var obj = {
    eventName: eventName,
    parameters: parameters,
    vts: vts
  };

  if (!parameters) {
    delete obj.parameters;
  }

  window.aiqMobileSdk.logEvent(JSON.stringify(obj));
};
/* harmony default export */ __webpack_exports__["default"] = (WithAppSdkMode);

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! exports provided: IDB_ATTRIBUTION_KEY, IDB_VERSION_KEY, IDB_INWEB_DATA_KEY, IDB_INWEB_HISTORIES_KEY, IDB_PUSH_DENIED_TIMESTAMP, IDB_CYMP_ACKED, INWEB_EXIT_INTENT_SHOWN, INWEB_SCROLL_PERCENT_SHOWN, SEARCH_PARAMS_ATTRIBUTION_KEY, SEARCH_PARAMS_IDENTIFIED_KEY, SEARCH_PARAMS_LINECHANNEL, SEARCH_PARAMS_LINEUID, DEFAULT_SW_SCOPE, INWEB_DATA_LIFETIME, WUSER_ID_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_ATTRIBUTION_KEY", function() { return IDB_ATTRIBUTION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_VERSION_KEY", function() { return IDB_VERSION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_INWEB_DATA_KEY", function() { return IDB_INWEB_DATA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_INWEB_HISTORIES_KEY", function() { return IDB_INWEB_HISTORIES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_PUSH_DENIED_TIMESTAMP", function() { return IDB_PUSH_DENIED_TIMESTAMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDB_CYMP_ACKED", function() { return IDB_CYMP_ACKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INWEB_EXIT_INTENT_SHOWN", function() { return INWEB_EXIT_INTENT_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INWEB_SCROLL_PERCENT_SHOWN", function() { return INWEB_SCROLL_PERCENT_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARAMS_ATTRIBUTION_KEY", function() { return SEARCH_PARAMS_ATTRIBUTION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARAMS_IDENTIFIED_KEY", function() { return SEARCH_PARAMS_IDENTIFIED_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARAMS_LINECHANNEL", function() { return SEARCH_PARAMS_LINECHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARAMS_LINEUID", function() { return SEARCH_PARAMS_LINEUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SW_SCOPE", function() { return DEFAULT_SW_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INWEB_DATA_LIFETIME", function() { return INWEB_DATA_LIFETIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUSER_ID_KEY", function() { return WUSER_ID_KEY; });
// Storage key in indexDB
var IDB_ATTRIBUTION_KEY = 'aiq-attribution';
var IDB_VERSION_KEY = 'aiq-version';
var IDB_INWEB_DATA_KEY = 'aiq-inweb-data';
var IDB_INWEB_HISTORIES_KEY = 'aiq-inweb-histories';
var IDB_PUSH_DENIED_TIMESTAMP = 'aiq-push-denied-timestamp';
var IDB_CYMP_ACKED = 'aiq-cymp-acked'; // Storage key in SessionStorage

var INWEB_EXIT_INTENT_SHOWN = 'aiq-inwebExitIntentShown';
var INWEB_SCROLL_PERCENT_SHOWN = 'aiq-inwebScrollPercentShown'; // For cross-domain attribution

var SEARCH_PARAMS_ATTRIBUTION_KEY = 'aiq_attr';
var SEARCH_PARAMS_IDENTIFIED_KEY = 'aiq_identified'; // For catch line id & channel

var SEARCH_PARAMS_LINECHANNEL = '_lnchid';
var SEARCH_PARAMS_LINEUID = '_lnuid'; // Service worker's scope

var DEFAULT_SW_SCOPE = 'aiqua'; // Lifetime of inweb data

var INWEB_DATA_LIFETIME = 3600000; // 1hour
// Cookie key for wUserId

var WUSER_ID_KEY = 'QGUserId';

/***/ }),

/***/ "./lib/in_web/buildPageViewedEvent.js":
/*!********************************************!*\
  !*** ./lib/in_web/buildPageViewedEvent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseUtmParams */ "./lib/utils/parseUtmParams.js");



/**
 * Build `page_viewed` event for `ExitIntent` to filter campaign
 */
var buildPageViewedEvent = function buildPageViewedEvent() {
  var locationUrl = new URL(window.location);
  var event = {
    eventName: 'page_viewed',
    // Currently, we make `exitIntent` based on `page_viewd` condition.
    qgts: parseInt(+new Date() / 1000),
    parameters: Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      url: window.location.href
    }, Object(_utils_parseUtmParams__WEBPACK_IMPORTED_MODULE_1__["default"])(locationUrl))
  }; // Flow do not allow to set `referrer` without make `if (event.parameters)` first

  if (event.parameters && window.document.referrer) {
    event.parameters.referrer = window.document.referrer;
  }

  var qgSeg = locationUrl.searchParams.get('qg_seg');

  if (event.parameters && qgSeg) {
    event.parameters.qg_seg = qgSeg;
  }

  return event;
};

/* harmony default export */ __webpack_exports__["default"] = (buildPageViewedEvent);

/***/ }),

/***/ "./lib/in_web/exitIntentHandler.js":
/*!*****************************************!*\
  !*** ./lib/in_web/exitIntentHandler.js ***!
  \*****************************************/
/*! exports provided: setMouseY, handleMouseMove, handleMouseOut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMouseY", function() { return setMouseY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMouseMove", function() { return handleMouseMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMouseOut", function() { return handleMouseOut; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triggerInWebCampaign */ "./lib/in_web/triggerInWebCampaign.js");
/* harmony import */ var _buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildPageViewedEvent */ "./lib/in_web/buildPageViewedEvent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");






var VERTICAL_BOUNDARY = 100;
var mouseY = 0;
var APP_ID; // Export for unit test

var setMouseY = function setMouseY(y) {
  mouseY = y;
};
var handleMouseMove = function handleMouseMove(e) {
  setMouseY(e.clientY);
};
function handleMouseOut(_x) {
  return _handleMouseOut.apply(this, arguments);
}

function _handleMouseOut() {
  _handleMouseOut = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
    var isOpen;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__["INWEB_EXIT_INTENT_SHOWN"]) === 'true')) {
              _context.next = 3;
              break;
            }

            _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('ExitIntent shows before');
            return _context.abrupt("return");

          case 3:
            if (!(!e.relatedTarget && mouseY < VERTICAL_BOUNDARY)) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return Object(_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_4__["default"])(), APP_ID, 'exitIntent');

          case 6:
            isOpen = _context.sent;

            // Record the exit intent had triggered in current browser session
            if (isOpen) {
              sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_5__["INWEB_EXIT_INTENT_SHOWN"], 'true');
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleMouseOut.apply(this, arguments);
}

var bindExitIntentHandler = function bindExitIntentHandler(appId) {
  APP_ID = appId;
  /**
   * Note: Firefox do not fire `mouseleave` on `document`, so we need to use mouseout to simulate it...
   */
  // Remove previous event handler if any

  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseout', handleMouseOut); // Add event handler for Exit Intent

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseout', handleMouseOut);
};

/* harmony default export */ __webpack_exports__["default"] = (bindExitIntentHandler);

/***/ }),

/***/ "./lib/in_web/fetchInWebData.js":
/*!**************************************!*\
  !*** ./lib/in_web/fetchInWebData.js ***!
  \**************************************/
/*! exports provided: FETCH_TIMEOUT, HAS_FETCH_INWEB, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TIMEOUT", function() { return FETCH_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_FETCH_INWEB", function() { return HAS_FETCH_INWEB; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_makeRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/makeRequest */ "./lib/utils/makeRequest.js");
/* harmony import */ var _utils_user_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/user_id */ "./lib/utils/user_id.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");







// Export for unit test
var FETCH_TIMEOUT = 3000; // 3seconds

var HAS_FETCH_INWEB = 'aiq-hasFetchInWeb'; // A flag in sessionStorage

/**
 * Request InWeb data from AIQUA user server
 */

function requestInWebData(appId, useLegacyAPI, firstTime) {
  var apiHost = useLegacyAPI ? "https://user.new-infra.staging-api.qgraph.io" : "https://user.new-infra.staging-api.qgraph.io";
  var apiUrl = "".concat(apiHost || '', "/web-inapp/") + "?appId=".concat(appId) + "&firstTime=".concat(firstTime ? 1 : 0) + "&wUserId=".concat(Object(_utils_user_id__WEBPACK_IMPORTED_MODULE_5__["getWUserId"])()) + // Send wUserId cookie to avoid DoNotTrack limitation
  '&versionNo=0'; // Always get latest campaigns list, instead of diff

  return Object(_utils_makeRequest__WEBPACK_IMPORTED_MODULE_4__["default"])({
    url: apiUrl,
    method: 'GET'
  }).then(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var _ref$json, inapp;

      return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$json = _ref.json;
              _ref$json = _ref$json === void 0 ? {} : _ref$json;
              inapp = _ref$json.inapp;
              return _context.abrupt("return", {
                campaigns: inapp.campaigns || [],
                timestamp: +new Date()
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}
/**
 * Get the InWeb data from cache.
 * But if the cache is not there or outdated, fetch it again.
 */


var fetchInWebData = function (requestPromise, cachedData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(appId, useLegacyAPI, firstTime, forceRequest) {
        var hasFetchInWeb;
        return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                hasFetchInWeb = !!sessionStorage.getItem(HAS_FETCH_INWEB);
                _context2.t1 = "development" !== 'test' && cachedData;

                if (_context2.t1) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["get"])(_constants__WEBPACK_IMPORTED_MODULE_6__["IDB_INWEB_DATA_KEY"]);

              case 5:
                _context2.t1 = _context2.sent;

              case 6:
                _context2.t0 = _context2.t1;

                if (_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                _context2.t0 = null;

              case 9:
                cachedData = _context2.t0;

                // NOTE: Only for unit test
                if (forceRequest) {
                  requestPromise = null;
                } // Early return the cached data if not expired yet.


                if (!(hasFetchInWeb && cachedData && +new Date() - cachedData.timestamp <= _constants__WEBPACK_IMPORTED_MODULE_6__["INWEB_DATA_LIFETIME"])) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve(cachedData));

              case 13:
                // Cache the request promise
                requestPromise = requestPromise || requestInWebData(appId, useLegacyAPI, firstTime);
                return _context2.abrupt("return", Promise.race([requestPromise, new Promise(function (resolve) {
                  return setTimeout(function () {
                    resolve(cachedData);
                  }, FETCH_TIMEOUT);
                })]).then(function (data) {
                  cachedData = data;

                  if (data) {
                    Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["set"])(_constants__WEBPACK_IMPORTED_MODULE_6__["IDB_INWEB_DATA_KEY"], data); // Fire but don't wait, let clourse handle memorization.

                    sessionStorage.setItem(HAS_FETCH_INWEB, 'true');
                  } else {
                    requestPromise = null;
                  }

                  return data;
                })["catch"](function (err) {
                  _utils_log__WEBPACK_IMPORTED_MODULE_3__["default"].error('Failed to fetch inweb data', err);
                  return cachedData;
                }));

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}(null, null);

/* harmony default export */ __webpack_exports__["default"] = (fetchInWebData);

/***/ }),

/***/ "./lib/in_web/idleHandler.js":
/*!***********************************!*\
  !*** ./lib/in_web/idleHandler.js ***!
  \***********************************/
/*! exports provided: setLastActionTimestamp, shouldIdleTimeoutMatch, checkIdle, resetTimer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastActionTimestamp", function() { return setLastActionTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIdleTimeoutMatch", function() { return shouldIdleTimeoutMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIdle", function() { return checkIdle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTimer", function() { return resetTimer; });
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/time */ "./lib/utils/time.js");
/* harmony import */ var _triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triggerInWebCampaign */ "./lib/in_web/triggerInWebCampaign.js");
/* harmony import */ var _buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildPageViewedEvent */ "./lib/in_web/buildPageViewedEvent.js");



var APP_ID;
var lastActionTimestamp;
var timer;
var setLastActionTimestamp = function setLastActionTimestamp(timestamp) {
  lastActionTimestamp = timestamp;
};
var shouldIdleTimeoutMatch = function shouldIdleTimeoutMatch(seconds) {
  return function (campaign) {
    return (// SPEC: Check `over` not `closest to`
      !!campaign.idleTriggerRule && seconds >= campaign.idleTriggerRule.timeout
    );
  };
};
var checkIdle = function checkIdle() {
  var timeSecondDiff = Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["toUnixTimestamp"])(+new Date()) - lastActionTimestamp;
  Object(_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_2__["default"])(), APP_ID, 'idleTime', shouldIdleTimeoutMatch(timeSecondDiff));
};
var resetTimer = function resetTimer() {
  // Reset last action's timestamp
  setLastActionTimestamp(Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["toUnixTimestamp"])(+new Date()));
  clearInterval(timer);
  timer = setInterval(checkIdle, 10 * 1000); // Checking based on each 10 sec.
};

var bindIdleHandler = function bindIdleHandler(appId) {
  APP_ID = appId;
  clearInterval(timer);
  ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(function (eventName) {
    // Remove previous event handler if any
    document.removeEventListener(eventName, resetTimer, true); // Add event handler

    document.addEventListener(eventName, resetTimer, true);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bindIdleHandler);

/***/ }),

/***/ "./lib/in_web/inweb_html_popup/index.js":
/*!**********************************************!*\
  !*** ./lib/in_web/inweb_html_popup/index.js ***!
  \**********************************************/
/*! exports provided: openInwebHtmlPopup, closeInwebHtmlPopup, HTML_POPUP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inweb_html_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inweb_html_popup */ "./lib/in_web/inweb_html_popup/inweb_html_popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openInwebHtmlPopup", function() { return _inweb_html_popup__WEBPACK_IMPORTED_MODULE_0__["openInwebHtmlPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeInwebHtmlPopup", function() { return _inweb_html_popup__WEBPACK_IMPORTED_MODULE_0__["closeInwebHtmlPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_POPUP_ID", function() { return _inweb_html_popup__WEBPACK_IMPORTED_MODULE_0__["POPUP_ID"]; });



/***/ }),

/***/ "./lib/in_web/inweb_html_popup/inweb_html_popup.css":
/*!**********************************************************!*\
  !*** ./lib/in_web/inweb_html_popup/inweb_html_popup.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./inweb_html_popup.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/in_web/inweb_html_popup/inweb_html_popup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/in_web/inweb_html_popup/inweb_html_popup.js":
/*!*********************************************************!*\
  !*** ./lib/in_web/inweb_html_popup/inweb_html_popup.js ***!
  \*********************************************************/
/*! exports provided: POPUP_ID, isHyperlinkUrl, handleHyperlinkClick, openInwebHtmlPopup, closeInwebHtmlPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_ID", function() { return POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHyperlinkUrl", function() { return isHyperlinkUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleHyperlinkClick", function() { return handleHyperlinkClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInwebHtmlPopup", function() { return openInwebHtmlPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeInwebHtmlPopup", function() { return closeInwebHtmlPopup; });
/* harmony import */ var _inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inweb_html_popup.css */ "./lib/in_web/inweb_html_popup/inweb_html_popup.css");
/* harmony import */ var _inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/log */ "./lib/utils/log.js");


var POPUP_ID = 'qg-inweb-html-popup'; // Export for unit test

/**
 * Check it is a hyperlink and not perform as a click button.
 * Bypass any of below cases:
 * <a>example</a>
 * <a href="#">example</a>
 * <a href="#" onclick="handleClick()">onclick</a>
 * <a href="javascript:handleClick()">onclick</a>
 * <a href="javascript:void()" onclick="handleClick()">onclick</a>
 */

var isHyperlinkUrl = function isHyperlinkUrl(href) {
  return href && href !== '#' && !href.startsWith('javascript:');
};
var handleHyperlinkClick = function handleHyperlinkClick(popupOptions) {
  return function (e) {
    var target = e.target,
        currentTarget = e.currentTarget;

    var _ref = popupOptions || {},
        onPopupClosed = _ref.onPopupClosed,
        onHyperlinkClick = _ref.onHyperlinkClick;

    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Click', e, 'target', target);
    /**
     * Go through the event bubbling path to handle the case below.
     * <a href="https://www.appier.com/"><img src="https://upload.cc/i1/2019/02/01/v46NyC.png" /></a>
     */

    var node = target;

    while (node !== currentTarget) {
      _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].trace('The node', node, 'currentTarget', currentTarget);
      var href = (node.getAttribute('href') || '').trim(); // Check it is a hyperlink and not perform as a click button

      if (node.tagName.toLowerCase() === 'a' && isHyperlinkUrl(href)) {
        e.preventDefault();
        _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Click on hyperlink', href); // Log event to calculate campaign click

        if (typeof onHyperlinkClick === 'function') {
          onHyperlinkClick();
        } // Close popup


        closeInwebHtmlPopup(onPopupClosed); // Redirect based on target attribute

        var hyperlinkTarget = node.getAttribute('target') || '_self';
        window.open(href, hyperlinkTarget);
        break;
      }

      node = node.parentNode;
      _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].trace('New node', node);
    }
  };
};
/**
 * Append Inweb html Popup on body element
 */

function openInwebHtmlPopup(inWebHtmlPopup, popupOptions) {
  if (document.getElementById(POPUP_ID)) {
    return;
  }

  var _ref2 = popupOptions || {},
      rootDocument = _ref2.rootDocument,
      containerId = _ref2.containerId,
      onPopupOpened = _ref2.onPopupOpened,
      onPopupClosed = _ref2.onPopupClosed,
      onCloseButtonClick = _ref2.onCloseButtonClick;

  var popup = document.createElement('div');
  popup.classList.add(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.popup);
  popup.id = POPUP_ID; // Append overlay if necessary

  if (inWebHtmlPopup.showOverlay) {
    var overlay = document.createElement('div');
    overlay.classList.add(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.overlay);
    popup.appendChild(overlay);
  } // Prevent body from scrolling with extra wrapper


  var poupScroll = document.createElement('div');
  poupScroll.classList.add(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['popup-scroll']);
  popup.appendChild(poupScroll); // Append container

  var container = document.createElement('div');

  if (containerId) {
    container.id = containerId;
  }

  container.classList.add(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.container);
  container.innerHTML = inWebHtmlPopup.htmlBody; // Append customer HTML

  poupScroll.appendChild(container); // Append close button

  var closeButton = document.createElement('div');
  closeButton.classList.add(_inweb_html_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['close-button']);

  closeButton.onclick = onCloseButtonClick || function () {
    closeInwebHtmlPopup(onPopupClosed);
  };

  container.appendChild(closeButton); // Append to DOM

  var renderedDocument = rootDocument || document;

  if (renderedDocument.body) {
    renderedDocument.body.appendChild(popup);
  } // Bind click event listener


  container.addEventListener('click', handleHyperlinkClick(popupOptions));

  if (onPopupOpened) {
    onPopupOpened();
  }
}
/**
 * Remove Inweb html Popup from DOM tree
 */

function closeInwebHtmlPopup(onPopupClosed) {
  var popupWrapper = document.getElementById(POPUP_ID);

  if (popupWrapper) {
    popupWrapper.remove();

    if (onPopupClosed) {
      onPopupClosed();
    }
  }
}

/***/ }),

/***/ "./lib/in_web/inweb_lead_popup/index.js":
/*!**********************************************!*\
  !*** ./lib/in_web/inweb_lead_popup/index.js ***!
  \**********************************************/
/*! exports provided: openInwebLeadPopup, closeInwebLeadPopup, LEAD_POPUP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inweb_lead_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inweb_lead_popup */ "./lib/in_web/inweb_lead_popup/inweb_lead_popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openInwebLeadPopup", function() { return _inweb_lead_popup__WEBPACK_IMPORTED_MODULE_0__["openInwebLeadPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeInwebLeadPopup", function() { return _inweb_lead_popup__WEBPACK_IMPORTED_MODULE_0__["closeInwebLeadPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEAD_POPUP_ID", function() { return _inweb_lead_popup__WEBPACK_IMPORTED_MODULE_0__["POPUP_ID"]; });



/***/ }),

/***/ "./lib/in_web/inweb_lead_popup/inweb_lead_popup.css":
/*!**********************************************************!*\
  !*** ./lib/in_web/inweb_lead_popup/inweb_lead_popup.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./inweb_lead_popup.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/in_web/inweb_lead_popup/inweb_lead_popup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/in_web/inweb_lead_popup/inweb_lead_popup.js":
/*!*********************************************************!*\
  !*** ./lib/in_web/inweb_lead_popup/inweb_lead_popup.js ***!
  \*********************************************************/
/*! exports provided: POPUP_ID, openInwebLeadPopup, closeInwebLeadPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_ID", function() { return POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInwebLeadPopup", function() { return openInwebLeadPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeInwebLeadPopup", function() { return closeInwebLeadPopup; });
/* harmony import */ var _inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inweb_lead_popup.css */ "./lib/in_web/inweb_lead_popup/inweb_lead_popup.css");
/* harmony import */ var _inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0__);

var POPUP_ID = 'qg-inweb-lead-popup'; // Export for unit test

/**
 * Append Inweb lead Popup on body element
 */

function openInwebLeadPopup(inWebLeadPopup, popupOptions) {
  if (document.getElementById(POPUP_ID)) {
    return;
  }

  var _ref = popupOptions || {},
      rootDocument = _ref.rootDocument,
      containerId = _ref.containerId,
      onPopupOpened = _ref.onPopupOpened,
      onPopupClosed = _ref.onPopupClosed,
      onCloseButtonClick = _ref.onCloseButtonClick,
      onSubmit = _ref.onSubmit;

  var error = inWebLeadPopup.errorMessages || {
    required: 'This field is required',
    invalid: 'Invalid value',
    agreement: 'Please tick above to agree terms'
  };
  var popup = document.createElement('div');
  popup.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.popup);
  popup.id = POPUP_ID;

  if (inWebLeadPopup.showOverlay) {
    var overlay = document.createElement('div');
    overlay.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.overlay);
    popup.appendChild(overlay);
  }

  var container = document.createElement('div');

  if (containerId) {
    container.id = containerId;
  }

  container.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.container);
  container.style.backgroundColor = inWebLeadPopup.contentBackgroundColor;

  if (inWebLeadPopup.imgSrc) {
    var banner = document.createElement('div');
    banner.style.backgroundImage = "url(".concat(inWebLeadPopup.imgSrc || '', ")");
    banner.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.banner);
    container.appendChild(banner);
  }

  var closeButton = document.createElement('div');
  closeButton.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['close-button']);

  closeButton.onclick = onCloseButtonClick || function () {
    closeInwebLeadPopup(onPopupClosed);
  };

  container.appendChild(closeButton);

  if (inWebLeadPopup.title) {
    var title = document.createElement('p');
    title.innerText = inWebLeadPopup.title;
    title.style.color = inWebLeadPopup.titleColor;
    title.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.title);
    container.appendChild(title);
  }

  if (inWebLeadPopup.message) {
    var message = document.createElement('p');
    message.innerText = inWebLeadPopup.message;
    message.style.color = inWebLeadPopup.messageColor;
    message.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.message);
    container.appendChild(message);
  }

  if (Array.isArray(inWebLeadPopup.inputs)) {
    inWebLeadPopup.inputs.forEach(function (leadInput) {
      var inputBlock = document.createElement('div');
      inputBlock.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-block']);

      if (leadInput.inputType === 'dropdown') {
        var select = document.createElement('select');
        select.name = leadInput.fieldName;
        select.required = leadInput.required;
        select.dataset.dataType = leadInput.dataType;
        var option = document.createElement('option');
        option.innerText = "".concat(leadInput.placeholder).concat(leadInput.required ? '*' : '');
        option.value = '';
        option.selected = true;
        option.disabled = true;
        select.appendChild(option);

        if (Array.isArray(leadInput.options)) {
          leadInput.options.forEach(function (opt) {
            var option = document.createElement('option');
            option.value = opt.value;
            option.innerText = opt.label;
            select.appendChild(option);
          });
        }

        select.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.input);
        select.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.select);
        inputBlock.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['select-block']);
        inputBlock.appendChild(select);
      } else {
        var input = document.createElement('input');
        input.name = leadInput.fieldName;
        input.type = leadInput.inputType;
        input.required = leadInput.required;
        input.placeholder = "".concat(leadInput.placeholder).concat(leadInput.required ? '*' : '');
        input.dataset.dataType = leadInput.dataType;
        input.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.input);
        inputBlock.appendChild(input);
      }

      var err = document.createElement('span');
      err.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.error);
      inputBlock.appendChild(err);
      container.appendChild(inputBlock);
    });
  }

  if (inWebLeadPopup.agreementText) {
    var agreement = document.createElement('div');
    agreement.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.agreement);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'agreement';
    label.appendChild(check);
    var icon = document.createElement('i');
    label.appendChild(icon);
    agreement.appendChild(label);

    if (inWebLeadPopup.agreementUrl) {
      var link = document.createElement('a');
      link.innerText = inWebLeadPopup.agreementText;
      link.href = inWebLeadPopup.agreementUrl || '';
      link.target = '_blank';
      link.style.color = inWebLeadPopup.agreementColor || '';
      agreement.appendChild(link);
    } else {
      var text = document.createElement('span');
      text.innerText = inWebLeadPopup.agreementText;
      text.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.text);
      text.style.color = inWebLeadPopup.agreementColor || '';
      agreement.appendChild(text);
    }

    var err = document.createElement('span');
    err.innerText = "*".concat(error.agreement);
    err.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.error);
    agreement.appendChild(err);
    container.appendChild(agreement);
  }

  if (inWebLeadPopup.submitText) {
    var submit = document.createElement('div');
    submit.innerText = inWebLeadPopup.submitText;
    submit.style.color = inWebLeadPopup.submitColor;
    submit.style.backgroundColor = inWebLeadPopup.submitBackgroundColor;
    submit.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['submit-button']);

    submit.onclick = function () {
      var result = {};
      var pass = true;
      popup.querySelectorAll('input, select').forEach(function (node) {
        switch (node.type) {
          case 'checkbox':
            if (node.checked) {
              node.parentElement.classList.remove(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
              result[node.name] = true;
            } else {
              node.parentElement.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
              node.addEventListener('change', function _listener() {
                node.parentElement.classList.remove(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
                node.removeEventListener('change', _listener);
              });
              pass = false;
            }

            break;

          default:
            node.classList.remove(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);

            if (node.value) {
              if (node.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(node.value) || node.dataset.dataType === 'number' && isNaN(node.value * 1)) {
                node.nextSibling.innerText = "*".concat(error.invalid);
                node.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
                node.addEventListener('change', function _listener() {
                  node.classList.remove(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
                  node.removeEventListener('change', _listener);
                });
                pass = false;
              } else {
                result[node.name] = node.dataset.dataType === 'number' ? +node.value : node.value;
              }
            } else if (node.required) {
              node.nextSibling.innerText = "*".concat(error.required);
              node.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
              node.addEventListener('change', function _listener() {
                node.classList.remove(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['input-error']);
                node.removeEventListener('change', _listener);
              });
              pass = false;
            }

            break;
        }
      });

      if (pass && onSubmit) {
        onSubmit(result);
        closeInwebLeadPopup(onPopupClosed);

        if (inWebLeadPopup.redirectUrl) {
          window.location.assign(inWebLeadPopup.redirectUrl);
        }
      }
    };

    container.appendChild(submit);
  } // Prevent body from scrolling with extra wrapper


  var poupScroll = document.createElement('div');
  poupScroll.classList.add(_inweb_lead_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['popup-scroll']);
  poupScroll.append(container);
  popup.appendChild(poupScroll);
  var renderedDocument = rootDocument || document;

  if (renderedDocument.body) {
    renderedDocument.body.appendChild(popup);
  }

  if (onPopupOpened) {
    onPopupOpened();
  }
}
/**
 * Remove Inweb lead Popup from DOM tree
 */

function closeInwebLeadPopup(onPopupClosed) {
  var popupWrapper = document.getElementById(POPUP_ID);

  if (popupWrapper) {
    popupWrapper.remove();

    if (onPopupClosed) {
      onPopupClosed();
    }
  }
}

/***/ }),

/***/ "./lib/in_web/matchEventParameter.js":
/*!*******************************************!*\
  !*** ./lib/in_web/matchEventParameter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Match the value of event parameter based on condition's operator
 */
function matchEventParameter(event, condition) {
  // Should match parameter keyname
  if (!event.parameters || !event.parameters.hasOwnProperty(condition.param)) {
    return false;
  }

  var eventValue = event.parameters[condition.param];

  switch (condition.op) {
    case 'contains':
      return typeof eventValue === 'string' ? eventValue.includes(condition.value) : false;

    case 'equals':
      return typeof eventValue === 'string' ? eventValue === condition.value : false;

    case '=':
      return +eventValue === +condition.value;

    case '!=':
      return +eventValue !== +condition.value;

    case '<':
      return +eventValue < +condition.value;

    case '>':
      return +eventValue > +condition.value;

    case '<=':
      return +eventValue <= +condition.value;

    case '>=':
      return +eventValue >= +condition.value;

    case 'exists':
      return eventValue !== null && eventValue !== undefined;

    default:
      return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (matchEventParameter);

/***/ }),

/***/ "./lib/in_web/openInWebPopup.js":
/*!**************************************!*\
  !*** ./lib/in_web/openInWebPopup.js ***!
  \**************************************/
/*! exports provided: toggleIsPopupOpened, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleIsPopupOpened", function() { return toggleIsPopupOpened; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_attribution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/attribution */ "./lib/utils/attribution.js");
/* harmony import */ var _inweb_html_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inweb_html_popup */ "./lib/in_web/inweb_html_popup/index.js");
/* harmony import */ var _inweb_lead_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inweb_lead_popup */ "./lib/in_web/inweb_lead_popup/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");










var isPopupOpened = false; // Export for unit test to reset.

var toggleIsPopupOpened = function toggleIsPopupOpened(opened) {
  isPopupOpened = !!opened;
};

var handlePopupOpened = function handlePopupOpened(campaign) {
  return function () {
    _utils_log__WEBPACK_IMPORTED_MODULE_5__["default"].debug("Displayed ".concat(campaign.notificationId, " campaign"), campaign);
    toggleIsPopupOpened(true); // Set "view" attribution

    Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_6__["setAttribution"])('view', campaign.notificationId).then(function () {
      // Log event to calculate campaign impression
      window.qg('event', 'qg_inweb_displayed', {
        notificationId: campaign.notificationId
      });
    }); // Mark current campaign is readed

    Object(idb_keyval__WEBPACK_IMPORTED_MODULE_4__["get"])(_constants__WEBPACK_IMPORTED_MODULE_9__["IDB_INWEB_HISTORIES_KEY"]).then(function () {
      var histories = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var triggeredCount = +histories["camp-".concat(campaign.notificationId)] || 0;
      return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_4__["set"])(_constants__WEBPACK_IMPORTED_MODULE_9__["IDB_INWEB_HISTORIES_KEY"], Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, histories, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "camp-".concat(campaign.notificationId), triggeredCount + 1)));
    });
  };
};

var handlePopupClosed = function handlePopupClosed(campaign) {
  return function () {
    _utils_log__WEBPACK_IMPORTED_MODULE_5__["default"].debug("Closed ".concat(campaign.notificationId, " campaign"));
    toggleIsPopupOpened(false);
    window.qg('event', 'qg_inweb_closed', {
      notificationId: campaign.notificationId
    });
  };
};
/**
 * Open corresponding inweb popup depends on creativeType
 */


function openInWebPopup(_x) {
  return _openInWebPopup.apply(this, arguments);
}

function _openInWebPopup() {
  _openInWebPopup = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(campaign) {
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isPopupOpened) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.resolve(false));

          case 2:
            _context.t0 = campaign.creativeType;
            _context.next = _context.t0 === 'html' ? 5 : _context.t0 === 'lead' ? 9 : 13;
            break;

          case 5:
            if (campaign.html) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", Promise.resolve(false));

          case 7:
            Object(_inweb_html_popup__WEBPACK_IMPORTED_MODULE_7__["openInwebHtmlPopup"])(campaign.html, {
              onPopupOpened: handlePopupOpened(campaign),
              onPopupClosed: handlePopupClosed(campaign),
              onHyperlinkClick: function onHyperlinkClick() {
                _utils_log__WEBPACK_IMPORTED_MODULE_5__["default"].debug("Click hyperlink from ".concat(campaign.notificationId, " campaign")); // Log event to calculate campaign clicks

                window.qg('event', 'qg_inweb_clicked', {
                  notificationId: campaign.notificationId
                });
              }
            });
            return _context.abrupt("return", Promise.resolve(true));

          case 9:
            if (campaign.lead) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", Promise.resolve(false));

          case 11:
            Object(_inweb_lead_popup__WEBPACK_IMPORTED_MODULE_8__["openInwebLeadPopup"])(campaign.lead, {
              onPopupOpened: handlePopupOpened(campaign),
              onPopupClosed: handlePopupClosed(campaign),
              onSubmit: function onSubmit(leadData) {
                _utils_log__WEBPACK_IMPORTED_MODULE_5__["default"].debug("Submit lead to ".concat(campaign.notificationId, " campaign"), leadData);
                window.qg('identify', leadData);
                window.qg('event', 'qg_inweb_lead_gen', {
                  notificationId: campaign.notificationId,
                  leadKeys: Object.keys(leadData)
                });
              }
            });
            return _context.abrupt("return", Promise.resolve(true));

          case 13:
            return _context.abrupt("break", 14);

          case 14:
            return _context.abrupt("return", Promise.resolve(false));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _openInWebPopup.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (openInWebPopup);

/***/ }),

/***/ "./lib/in_web/scrollPercentHandler.js":
/*!********************************************!*\
  !*** ./lib/in_web/scrollPercentHandler.js ***!
  \********************************************/
/*! exports provided: setLastPercent, shouldScrollPercentMatch, handleScroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastPercent", function() { return setLastPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldScrollPercentMatch", function() { return shouldScrollPercentMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScroll", function() { return handleScroll; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "../../node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _third_party_getScrollPercent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../third_party/getScrollPercent */ "./lib/third_party/getScrollPercent.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triggerInWebCampaign */ "./lib/in_web/triggerInWebCampaign.js");
/* harmony import */ var _buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildPageViewedEvent */ "./lib/in_web/buildPageViewedEvent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");








var lastPercent = 0;
var APP_ID;
var setLastPercent = function setLastPercent(percent) {
  lastPercent = percent;
};
var shouldScrollPercentMatch = function shouldScrollPercentMatch(scrollPercent) {
  return function (campaign) {
    return (// SPEC: Check `over` not `closest to`
      !!campaign.scrollTriggerRule && scrollPercent >= campaign.scrollTriggerRule.percent
    );
  };
};
function handleScroll() {
  return _handleScroll.apply(this, arguments);
}

function _handleScroll() {
  _handleScroll = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var inwebscrollPercentShown, previousPercent, percent, isOpen;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inwebscrollPercentShown = +sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["INWEB_SCROLL_PERCENT_SHOWN"]); // Only allow once in one browser session.

            if (!(inwebscrollPercentShown > 0)) {
              _context.next = 4;
              break;
            }

            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug("ScrollPercent show ".concat(inwebscrollPercentShown, " before"));
            return _context.abrupt("return");

          case 4:
            previousPercent = lastPercent;
            percent = Object(_third_party_getScrollPercent__WEBPACK_IMPORTED_MODULE_3__["default"])();
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug("handleScroll ".concat(previousPercent, "%, ").concat(percent, "%"));

            if (!(!Number.isFinite(percent) || Number.isNaN(percent))) {
              _context.next = 10;
              break;
            }

            // In case we get `Infinity` or `NaN` from getScrollPercent()
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].warn("handleScroll error");
            return _context.abrupt("return");

          case 10:
            // Note: In mobile, might get 100.xxx% for some screen size...
            setLastPercent(percent);

            if (!(previousPercent >= percent)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return");

          case 13:
            _context.next = 15;
            return Object(_triggerInWebCampaign__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_buildPageViewedEvent__WEBPACK_IMPORTED_MODULE_6__["default"])(), APP_ID, 'scrollThreshold', shouldScrollPercentMatch(percent));

          case 15:
            isOpen = _context.sent;

            // Record the exit intent had triggered in current browser session
            if (isOpen) {
              sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_7__["INWEB_SCROLL_PERCENT_SHOWN"], "".concat(inwebscrollPercentShown + 1));
            }

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleScroll.apply(this, arguments);
}

var throttleHandleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(handleScroll, 100);

var bindScrollPercentHandler = function bindScrollPercentHandler(appId) {
  APP_ID = appId; // Remove previous event handler if any

  document.removeEventListener('scroll', throttleHandleScroll); // Add event handler

  document.addEventListener('scroll', throttleHandleScroll);
};

/* harmony default export */ __webpack_exports__["default"] = (bindScrollPercentHandler);

/***/ }),

/***/ "./lib/in_web/triggerInWebCampaign.js":
/*!********************************************!*\
  !*** ./lib/in_web/triggerInWebCampaign.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _utils_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/delay */ "./lib/utils/delay.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _fetchInWebData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchInWebData */ "./lib/in_web/fetchInWebData.js");
/* harmony import */ var _matchEventParameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchEventParameter */ "./lib/in_web/matchEventParameter.js");
/* harmony import */ var _openInWebPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openInWebPopup */ "./lib/in_web/openInWebPopup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");










/**
 * Find the matched based on trigger condition
 */
function getMatchedInWebCampaign(triggerType, event, campaigns, inWebHistories, extraCondition) {
  return campaigns.find(function (campaign) {
    // Convert to unix timestamp
    var currentTime = Math.floor(+new Date() / 1000); // should match active time range

    if (currentTime < campaign.startTime || currentTime > campaign.endTime) {
      return false;
    } // should match trigger type


    if (campaign.triggerType !== triggerType) {
      return false;
    } // Should match extra matcher


    if (extraCondition && !extraCondition(campaign)) {
      return false;
    }

    var triggerCondition = campaign.whenCond || {}; // should match event name

    if (event.eventName !== triggerCondition.eventName) {
      return false;
    } // should not reaches the max display count


    var triggeredCount = +inWebHistories["camp-".concat(campaign.notificationId)] || 0;
    var hasReachMaxDisplayCount = campaign.scheduledType === 'once' ? triggeredCount > 0 : triggeredCount >= (campaign.maxNumTimesToShow || 0);

    if (hasReachMaxDisplayCount) {
      return false;
    } // should fuzzy match the campaign if conditions is an empty list


    if (triggerCondition.conditions.length === 0) {
      return true;
    } // should match all event parameters


    if (triggerCondition.operator === 'AND') {
      return triggerCondition.conditions.every(function (condition) {
        return Object(_matchEventParameter__WEBPACK_IMPORTED_MODULE_6__["default"])(event, condition);
      });
    } // should match any event parameter


    return triggerCondition.conditions.some(function (condition) {
      return Object(_matchEventParameter__WEBPACK_IMPORTED_MODULE_6__["default"])(event, condition);
    });
  });
}
/**
 * Trigger InWeb campaign by event
 */


function triggerInWebCampaign(_x, _x2) {
  return _triggerInWebCampaign.apply(this, arguments);
}

function _triggerInWebCampaign() {
  _triggerInWebCampaign = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, appId) {
    var triggerType,
        extraCondition,
        inWebData,
        inWebHistories,
        matchedCampaign,
        _args = arguments;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            triggerType = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'userEvent';
            extraCondition = _args.length > 3 ? _args[3] : undefined;
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug("Triggering inweb campaigns by \"".concat(triggerType, "\" with \"").concat(event.eventName, "\" event..."), event);
            _context.next = 5;
            return Object(_fetchInWebData__WEBPACK_IMPORTED_MODULE_5__["default"])(appId);

          case 5:
            inWebData = _context.sent;

            if (inWebData) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", Promise.resolve(false));

          case 8:
            _context.next = 10;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["get"])(_constants__WEBPACK_IMPORTED_MODULE_8__["IDB_INWEB_HISTORIES_KEY"]);

          case 10:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 13;
              break;
            }

            _context.t0 = {};

          case 13:
            inWebHistories = _context.t0;
            matchedCampaign = getMatchedInWebCampaign(triggerType, event, inWebData.campaigns, inWebHistories, extraCondition);

            if (matchedCampaign) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", Promise.resolve(false));

          case 17:
            _context.next = 19;
            return Object(_utils_delay__WEBPACK_IMPORTED_MODULE_3__["default"])((matchedCampaign.delayTime || 0) * 1e3);

          case 19:
            return _context.abrupt("return", Object(_openInWebPopup__WEBPACK_IMPORTED_MODULE_7__["default"])(matchedCampaign));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _triggerInWebCampaign.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (triggerInWebCampaign);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _QGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QGraph */ "./lib/QGraph.js");
/* harmony import */ var _WithAppSdkMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WithAppSdkMode */ "./lib/WithAppSdkMode.js");
/* harmony import */ var _migrations_runMigrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./migrations/runMigrations */ "./lib/migrations/runMigrations.js");
/* harmony import */ var _utils_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/version */ "./lib/utils/version.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_withAppSdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/withAppSdk */ "./lib/utils/withAppSdk.js");
/* harmony import */ var _utils_rollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/rollbar */ "./lib/utils/rollbar.js");









/**
 * Run in browser (Not in webview)
 */

function initWebMode() {
  return _initWebMode.apply(this, arguments);
}
/**
 * Starts to excute the queue.
 */


function _initWebMode() {
  _initWebMode = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var currentVersion, lastestVersion, hasMigratedFailed;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Send events and profiles data in batch
            window.setInterval(function () {
              if (window._qg) {
                window._qg.batch();
              }
            }, 5000); // Flush all the unexcuted profiles and events before page unload

            window.addEventListener('beforeunload', function () {
              if (window._qg) {
                window._qg.unloadFlush();
              }
            }, false); // -------------------------------------
            //   Run migrations
            // -------------------------------------

            _context.next = 4;
            return Object(_utils_version__WEBPACK_IMPORTED_MODULE_5__["getSdkVersion"])();

          case 4:
            currentVersion = _context.sent;
            lastestVersion = Object(_utils_version__WEBPACK_IMPORTED_MODULE_5__["getPackageVersion"])();
            _utils_log__WEBPACK_IMPORTED_MODULE_6__["default"].info("Current SDK version: ".concat(currentVersion || 'None'), "lastest SDK version: ".concat(lastestVersion));

            if (!(currentVersion !== lastestVersion)) {
              _context.next = 14;
              break;
            }

            hasMigratedFailed = false; // Run migrations only if current version was stored before

            if (!currentVersion) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return Object(_migrations_runMigrations__WEBPACK_IMPORTED_MODULE_4__["default"])(currentVersion);

          case 12:
            hasMigratedFailed = !_context.sent;

          case 13:
            if (!hasMigratedFailed) {
              Object(_utils_version__WEBPACK_IMPORTED_MODULE_5__["setSdkVersion"])(lastestVersion);
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initWebMode.apply(this, arguments);
}

function initSdk() {
  return _initSdk.apply(this, arguments);
}

function _initSdk() {
  _initSdk = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var isWithAppSdk, _qg, _q, args;

    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!window.qg || window._qg)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _utils_log__WEBPACK_IMPORTED_MODULE_6__["default"].setDefaultLevel(_utils_log__WEBPACK_IMPORTED_MODULE_6__["default"].levels.ERROR); // Log sdk error to Rollbar

            _utils_rollbar__WEBPACK_IMPORTED_MODULE_8__["default"].configure({
              payload: {
                person: {
                  id: window.QGSettings ? window.QGSettings.appId : ''
                }
              }
            }); // Display logs in development mode or debug setting is true

            if (true) {
              _utils_log__WEBPACK_IMPORTED_MODULE_6__["default"].enableAll();
            } // Bootstrap SDK instance by platform


            _context2.next = 7;
            return Object(_utils_withAppSdk__WEBPACK_IMPORTED_MODULE_7__["default"])();

          case 7:
            isWithAppSdk = _context2.sent;
            _qg = isWithAppSdk ? new _WithAppSdkMode__WEBPACK_IMPORTED_MODULE_3__["default"]() : new _QGraph__WEBPACK_IMPORTED_MODULE_2__["default"]();
            window.QG = window._qg = _qg;

            if (isWithAppSdk) {
              _context2.next = 13;
              break;
            }

            _context2.next = 13;
            return initWebMode();

          case 13:
            // Starts to excute qg queue
            if (window.qg.hasOwnProperty('queue')) {
              _q = window.qg.queue || [];

              while (_q.length > 0) {
                args = _q.shift();

                window._qg.callmethod.call(_qg, args);
              }

              window.qg = function () {
                window._qg.callmethod.call(_qg, arguments);
              };
            }

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initSdk.apply(this, arguments);
}

initSdk();

/***/ }),

/***/ "./lib/migrations/migrateCympCookie.js":
/*!*********************************************!*\
  !*** ./lib/migrations/migrateCympCookie.js ***!
  \*********************************************/
/*! exports provided: LEGACY_CYMP_COOKIE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGACY_CYMP_COOKIE", function() { return LEGACY_CYMP_COOKIE; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/cookie */ "./lib/utils/cookie.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");





 // Export for unit test

var LEGACY_CYMP_COOKIE = '_qg_cymp';
/**
 * Migrate legacy `_qg_cymp` cookie to new two flags in IDB
 *
 * 1. If legacy cookie's value is unix timestamp -> convert to standard timestamp (12:00am) in iDB
 * 2. If legacy cookie's value is -1 -> set timestamp with current date (12:00am), CYMP is acked
 */

function migrateCympCookie() {
  return _migrateCympCookie.apply(this, arguments);
}

function _migrateCympCookie() {
  _migrateCympCookie = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var legacyPushDeniedUnixTime, currentDate, pushDeniedDate;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            legacyPushDeniedUnixTime = _utils_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].getJSON(LEGACY_CYMP_COOKIE); // Do nothing if can't find legacy flag

            if (!(!legacyPushDeniedUnixTime && legacyPushDeniedUnixTime !== 0)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (!(legacyPushDeniedUnixTime === -1)) {
              _context.next = 12;
              break;
            }

            // Current date in 12:00am
            currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            _context.next = 8;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_PUSH_DENIED_TIMESTAMP"], +currentDate);

          case 8:
            _context.next = 10;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_CYMP_ACKED"], true);

          case 10:
            _utils_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove(LEGACY_CYMP_COOKIE); // Remove legacy cookie

            return _context.abrupt("return");

          case 12:
            // Convert unix time to standard timestamp, and convert to 12:00am
            pushDeniedDate = new Date(+legacyPushDeniedUnixTime * 1000);
            pushDeniedDate.setHours(0, 0, 0, 0); // Set push denied date

            _context.next = 16;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_PUSH_DENIED_TIMESTAMP"], +pushDeniedDate);

          case 16:
            // Remove legacy cookie
            _utils_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove(LEGACY_CYMP_COOKIE);
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug('Migrated legacy cymp cookie to new data in iDB');

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _migrateCympCookie.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (migrateCympCookie);

/***/ }),

/***/ "./lib/migrations/migrateWUserId.js":
/*!******************************************!*\
  !*** ./lib/migrations/migrateWUserId.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cookie */ "./lib/utils/cookie.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");




 // Matches `"` or encoded double quote

var DOUBLE_QUOTE_REGEXP = new RegExp(/"|%22/g);
/**
 * XXX:
 * we have some legacy users have double quote like `"123"` as value.
 * We should sanitize it once and for all.
 */

function migrateWUserId() {
  return _migrateWUserId.apply(this, arguments);
}

function _migrateWUserId() {
  _migrateWUserId = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var wUserId, modifiedWUserId;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wUserId = _utils_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__["WUSER_ID_KEY"]) || '';

            if (!(!wUserId || !DOUBLE_QUOTE_REGEXP.test(wUserId))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            // Remove double quote then set back to cookie
            modifiedWUserId = wUserId.replace(DOUBLE_QUOTE_REGEXP, '');
            _utils_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].exSet(_constants__WEBPACK_IMPORTED_MODULE_4__["WUSER_ID_KEY"], modifiedWUserId);
            _utils_log__WEBPACK_IMPORTED_MODULE_3__["default"].debug('Migrated legacy wUserId to correct format');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _migrateWUserId.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (migrateWUserId);

/***/ }),

/***/ "./lib/migrations/runMigrations.js":
/*!*****************************************!*\
  !*** ./lib/migrations/runMigrations.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compare-versions */ "../../node_modules/compare-versions/index.js");
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compare_versions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _utils_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/version */ "./lib/utils/version.js");
/* harmony import */ var _migrateCympCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migrateCympCookie */ "./lib/migrations/migrateCympCookie.js");
/* harmony import */ var _migrateWUserId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./migrateWUserId */ "./lib/migrations/migrateWUserId.js");




 // Migration scripts



/**
 * Run available migration scripts
 */

function runMigrations(_x) {
  return _runMigrations.apply(this, arguments);
}

function _runMigrations() {
  _runMigrations = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(currentVersion) {
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(compare_versions__WEBPACK_IMPORTED_MODULE_2___default()('3.15.0', currentVersion) === 1)) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return Object(_migrateCympCookie__WEBPACK_IMPORTED_MODULE_5__["default"])();

          case 4:
            Object(_utils_version__WEBPACK_IMPORTED_MODULE_4__["setSdkVersion"])('3.15.0'); // Bump version incrementally

          case 5:
            if (!(compare_versions__WEBPACK_IMPORTED_MODULE_2___default()('3.18.1', currentVersion) === 1)) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return Object(_migrateWUserId__WEBPACK_IMPORTED_MODULE_6__["default"])();

          case 8:
            Object(_utils_version__WEBPACK_IMPORTED_MODULE_4__["setSdkVersion"])('3.18.1'); // Bump version incrementally

          case 9:
            return _context.abrupt("return", true);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            _utils_log__WEBPACK_IMPORTED_MODULE_3__["default"].error('Migration failed', _context.t0);
            return _context.abrupt("return", false);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _runMigrations.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (runMigrations);

/***/ }),

/***/ "./lib/push_prompts/cym_prompt/cym_prompt.css":
/*!****************************************************!*\
  !*** ./lib/push_prompts/cym_prompt/cym_prompt.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./cym_prompt.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/cym_prompt/cym_prompt.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/push_prompts/cym_prompt/cym_prompt.js":
/*!***************************************************!*\
  !*** ./lib/push_prompts/cym_prompt/cym_prompt.js ***!
  \***************************************************/
/*! exports provided: CYM_PROMPT_ID, CLOSE_TRANSITION_DURATION, openCymPrompt, closeCymPrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYM_PROMPT_ID", function() { return CYM_PROMPT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_TRANSITION_DURATION", function() { return CLOSE_TRANSITION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCymPrompt", function() { return openCymPrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeCymPrompt", function() { return closeCymPrompt; });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _cym_prompt_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cym_prompt.css */ "./lib/push_prompts/cym_prompt/cym_prompt.css");
/* harmony import */ var _cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1__);


var CYM_PROMPT_ID = 'qgraphFakePromptContainer';
var CLOSE_TRANSITION_DURATION = 550;

/**
 * Compose cymp's container
 */
function composeCympContainer(cymPromptData, cymPromptOptions) {
  var container = document.createElement('div');
  container.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.container); // Apply custom background color on container

  if (cymPromptData.color) {
    container.style.background = cymPromptData.color;
  } // Apply custom text color on container


  if (cymPromptData.textColor) {
    container.style.color = cymPromptData.textColor;
  } // Append container's caret


  var caret = document.createElement('span');
  caret.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.caret);

  if (cymPromptData.color) {
    caret.style.color = cymPromptData.color;
  }

  container.appendChild(caret); // Append message (switch content in different window size)

  var message = document.createElement('div');
  message.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.message);
  message.innerHTML = window.innerWidth < 520 ? (cymPromptData.mobile || {}).message : (cymPromptData.desktop || {}).message;
  container.appendChild(message); // Append close button

  var closeButton = document.createElement('button');
  closeButton.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['close-button']);

  closeButton.onclick = function () {
    return closeCymPrompt(cymPromptOptions.onPromptClosed);
  };

  container.appendChild(closeButton);
  return container;
}
/**
 * Append CYM-Prompt (Change-Your-Mind Prompt) on body element
 */


function openCymPrompt(cymPromptData) {
  var cymPromptOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (document.getElementById(CYM_PROMPT_ID) || !cymPromptData) {
    return;
  }

  _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Showing cym-prompt...');
  var cymPrompt = document.createElement('div');
  cymPrompt.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['cymp']);
  cymPrompt.id = CYM_PROMPT_ID;

  if (cymPromptData.html) {
    cymPrompt.innerHTML = cymPromptData.html;
  } else {
    // Append overlay
    var overlay = document.createElement('div');
    overlay.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay);
    cymPrompt.appendChild(overlay); // Append container

    var container = composeCympContainer(cymPromptData, cymPromptOptions);
    cymPrompt.appendChild(container);
  } // Append to DOM


  if (document.body) {
    document.body.appendChild(cymPrompt);
  } // Opened callback


  if (cymPromptOptions.onPromptOpened) {
    cymPromptOptions.onPromptOpened();
  }
}
/**
 * Remove CYM-Prompt (Change-Your-Mind Prompt) from DOM tree
 */

function closeCymPrompt(onPromptClosed) {
  var promptElement = document.getElementById(CYM_PROMPT_ID);

  if (promptElement) {
    _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Closing cym-prompt...');
    promptElement.classList.add(_cym_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['is-closing']); // Closed callback

    if (onPromptClosed) {
      onPromptClosed();
    } // Remove DOM element after transition


    setTimeout(function () {
      promptElement.remove();
    }, CLOSE_TRANSITION_DURATION);
  }
}

/***/ }),

/***/ "./lib/push_prompts/cym_prompt/index.js":
/*!**********************************************!*\
  !*** ./lib/push_prompts/cym_prompt/index.js ***!
  \**********************************************/
/*! exports provided: openCymPrompt, closeCymPrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cym_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cym_prompt */ "./lib/push_prompts/cym_prompt/cym_prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCymPrompt", function() { return _cym_prompt__WEBPACK_IMPORTED_MODULE_0__["openCymPrompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeCymPrompt", function() { return _cym_prompt__WEBPACK_IMPORTED_MODULE_0__["closeCymPrompt"]; });



/***/ }),

/***/ "./lib/push_prompts/fake_prompt/fake_prompt.css":
/*!******************************************************!*\
  !*** ./lib/push_prompts/fake_prompt/fake_prompt.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./fake_prompt.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/fake_prompt/fake_prompt.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/push_prompts/fake_prompt/fake_prompt.js":
/*!*****************************************************!*\
  !*** ./lib/push_prompts/fake_prompt/fake_prompt.js ***!
  \*****************************************************/
/*! exports provided: FAKE_PROMPT_ID, CLOSE_TRANSITION_DURATION, openFakePrompt, closeFakePrompt, confirmFakePrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAKE_PROMPT_ID", function() { return FAKE_PROMPT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_TRANSITION_DURATION", function() { return CLOSE_TRANSITION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFakePrompt", function() { return openFakePrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeFakePrompt", function() { return closeFakePrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmFakePrompt", function() { return confirmFakePrompt; });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _fake_prompt_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake_prompt.css */ "./lib/push_prompts/fake_prompt/fake_prompt.css");
/* harmony import */ var _fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1__);


var FAKE_PROMPT_ID = 'qgraphFakePromptContainer';
var CLOSE_TRANSITION_DURATION = 550;
var defaultPromptData = {
  title: 'Get Latest Updates',
  message: 'Subscribe to notifications',
  // A bell icon
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MzUuNSA1MzUuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTM1LjUgNTM1LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48ZyBpZD0ibm90aWZpY2F0aW9ucy1vbiI+PHBhdGggZD0iTTE0Mi44LDUzLjU1bC0zNS43LTM1LjdDNDUuOSw2My43NSw1LjEsMTM1LjE1LDAsMjE2Ljc1aDUxQzU2LjEsMTQ3LjksODkuMjUsODkuMjUsMTQyLjgsNTMuNTV6IE00ODQuNSwyMTYuNzVoNTEgICAgYy01LjEtODEuNi00My4zNS0xNTMtMTA0LjU1LTE5OC45bC0zNS43LDM1LjdDNDQ2LjI1LDg5LjI1LDQ3OS40LDE0Ny45LDQ4NC41LDIxNi43NXogTTQzMy41LDIyOS41ICAgIGMwLTc5LjA1LTUzLjU1LTE0Mi44LTEyNy41LTE2MC42NVY1MWMwLTIwLjQtMTcuODUtMzguMjUtMzguMjUtMzguMjVjLTIwLjQsMC0zOC4yNSwxNy44NS0zOC4yNSwzOC4yNXYxNy44NSAgICBDMTU1LjU1LDg2LjcsMTAyLDE1MC40NSwxMDIsMjI5LjV2MTQwLjI1bC01MSw1MXYyNS41aDQzMy41di0yNS41bC01MS01MVYyMjkuNXogTTI2Ny43NSw1MjIuNzVjMi41NSwwLDcuNjUsMCwxMC4yLDAgICAgYzE3Ljg1LTIuNTUsMzAuNi0xNS4zLDM1LjctMzAuNmMyLjU1LTUuMTAxLDUuMS0xMi43NSw1LjEtMjAuNGgtMTAyQzIxNi43NSw0OTkuOCwyMzkuNyw1MjIuNzUsMjY3Ljc1LDUyMi43NXoiIGZpbGw9IiMwMDZERjAiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==',
  subscribeText: 'Enable',
  laterText: 'Not Now'
};

/**
 * Compose fake prompt's container
 */
function composeFakePromptContainer(fakePromptData, fakePromptOptions) {
  var container = document.createElement('div');
  container.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.container);
  var contentWrapper = document.createElement('div');
  contentWrapper.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['content-wrapper']);
  var content = document.createElement('div');
  content.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.content);
  var actionButtons = document.createElement('div');
  actionButtons.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['action-buttons']); // Append icon image

  var iconImg = document.createElement('img');
  iconImg.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon);
  iconImg.setAttribute('src', fakePromptData.icon || defaultPromptData.icon);
  contentWrapper.appendChild(iconImg); // Append title

  var title = document.createElement('h3');
  title.innerHTML = fakePromptData.title || defaultPromptData.title;
  content.appendChild(title); // Append message

  var message = document.createElement('p');
  message.innerHTML = fakePromptData.message || defaultPromptData.message;
  content.appendChild(message); // Append close button

  var closeButton = document.createElement('button');
  closeButton.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['close-button']);
  closeButton.innerHTML = fakePromptData.laterText || defaultPromptData.laterText;

  closeButton.onclick = function () {
    return closeFakePrompt(fakePromptOptions.onPromptClosed);
  };

  actionButtons.appendChild(closeButton); // Append confirm button

  var confirmButton = document.createElement('button');
  confirmButton.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['confirm-button']);
  confirmButton.innerHTML = fakePromptData.subscribeText || defaultPromptData.subscribeText;

  confirmButton.onclick = function () {
    return confirmFakePrompt(fakePromptOptions.onPromptConfirmed, fakePromptOptions.onPromptClosed);
  };

  if (fakePromptData.buttonColor) {
    confirmButton.setAttribute('style', "background: ".concat(fakePromptData.buttonColor, ";"));
  }

  actionButtons.appendChild(confirmButton);
  contentWrapper.appendChild(content);
  container.appendChild(contentWrapper);
  container.appendChild(actionButtons);
  return container;
}
/**
 * Append Fake Prompt on body element
 */


function openFakePrompt() {
  var fakePromptData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fakePromptOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (document.getElementById(FAKE_PROMPT_ID)) {
    return;
  }

  _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Showing fake prompt...');
  var fakePrompt = document.createElement('div');
  fakePrompt.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['fake-prompt']);
  fakePrompt.id = FAKE_PROMPT_ID; // Append `.is-middle` modifier on container's class

  if (fakePromptData.isMiddle) {
    fakePrompt.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['is-middle']);
  }

  if (fakePromptData.html) {
    fakePrompt.innerHTML = fakePromptData.html;
  } else {
    // Append overlay
    if (fakePromptData.overlay) {
      var overlay = document.createElement('div');
      overlay.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay);
      fakePrompt.appendChild(overlay);
    } // Append container


    var container = composeFakePromptContainer(fakePromptData, fakePromptOptions);
    fakePrompt.appendChild(container);
  } // Append to DOM


  if (document.body) {
    document.body.appendChild(fakePrompt);
  } // Opened callback


  if (fakePromptOptions.onPromptOpened) {
    fakePromptOptions.onPromptOpened();
  }
}
/**
 * Remove Fake Prompt from DOM tree
 */

function closeFakePrompt(onPromptClosed) {
  var promptElement = document.getElementById(FAKE_PROMPT_ID);

  if (promptElement) {
    _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Closing fake prompt...');
    promptElement.classList.add(_fake_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['is-closing']); // Closed callback

    if (onPromptClosed) {
      onPromptClosed();
    } // Remove DOM element after transition


    setTimeout(function () {
      promptElement.remove();
    }, CLOSE_TRANSITION_DURATION);
  }
}
/**
 * Close then fire confirm callback
 */

function confirmFakePrompt(onPromptConfirmed, onPromptClosed) {
  closeFakePrompt(onPromptClosed);
  _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('Confirm fake prompt'); // Confirmed callback

  if (onPromptConfirmed) {
    onPromptConfirmed();
  }
}

/***/ }),

/***/ "./lib/push_prompts/fake_prompt/index.js":
/*!***********************************************!*\
  !*** ./lib/push_prompts/fake_prompt/index.js ***!
  \***********************************************/
/*! exports provided: openFakePrompt, closeFakePrompt, confirmFakePrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake_prompt */ "./lib/push_prompts/fake_prompt/fake_prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openFakePrompt", function() { return _fake_prompt__WEBPACK_IMPORTED_MODULE_0__["openFakePrompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeFakePrompt", function() { return _fake_prompt__WEBPACK_IMPORTED_MODULE_0__["closeFakePrompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmFakePrompt", function() { return _fake_prompt__WEBPACK_IMPORTED_MODULE_0__["confirmFakePrompt"]; });



/***/ }),

/***/ "./lib/push_prompts/on_subscribed_popup/index.js":
/*!*******************************************************!*\
  !*** ./lib/push_prompts/on_subscribed_popup/index.js ***!
  \*******************************************************/
/*! exports provided: openOnSubscribedPopup, closeOnSubscribedPopup, POPUP_OPENED_EVENT, POPUP_CLOSED_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on_subscribed_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_subscribed_popup */ "./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openOnSubscribedPopup", function() { return _on_subscribed_popup__WEBPACK_IMPORTED_MODULE_0__["openOnSubscribedPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeOnSubscribedPopup", function() { return _on_subscribed_popup__WEBPACK_IMPORTED_MODULE_0__["closeOnSubscribedPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POPUP_OPENED_EVENT", function() { return _on_subscribed_popup__WEBPACK_IMPORTED_MODULE_0__["POPUP_OPENED_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POPUP_CLOSED_EVENT", function() { return _on_subscribed_popup__WEBPACK_IMPORTED_MODULE_0__["POPUP_CLOSED_EVENT"]; });



/***/ }),

/***/ "./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css":
/*!**********************************************************************!*\
  !*** ./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./on_subscribed_popup.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.js":
/*!*********************************************************************!*\
  !*** ./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.js ***!
  \*********************************************************************/
/*! exports provided: POPUP_ID, POPUP_OPENED_EVENT, POPUP_CLOSED_EVENT, openOnSubscribedPopup, closeOnSubscribedPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_ID", function() { return POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_OPENED_EVENT", function() { return POPUP_OPENED_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_CLOSED_EVENT", function() { return POPUP_CLOSED_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOnSubscribedPopup", function() { return openOnSubscribedPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeOnSubscribedPopup", function() { return closeOnSubscribedPopup; });
/* harmony import */ var _on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_subscribed_popup.css */ "./lib/push_prompts/on_subscribed_popup/on_subscribed_popup.css");
/* harmony import */ var _on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0__);

var POPUP_ID = 'qg-on-subscribed-popup'; // Export for unit test

var POPUP_OPENED_EVENT = 'onSubscribedPopupOpened';
var POPUP_CLOSED_EVENT = 'onSubscribedPopupClosed';
/**
 * Append On-Subscribed Popup on body element
 */

function openOnSubscribedPopup(onSubscribedPopup, popupOptions) {
  if (!onSubscribedPopup.enabled) {
    return;
  }

  var _ref = popupOptions || {},
      rootDocument = _ref.rootDocument,
      containerId = _ref.containerId,
      onPopupOpened = _ref.onPopupOpened,
      onPopupClosed = _ref.onPopupClosed,
      onCloseButtonClick = _ref.onCloseButtonClick;

  var popup = document.createElement('div');
  popup.classList.add(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.popup);
  popup.id = POPUP_ID; // Append overlay if necessary

  if (onSubscribedPopup.showOverlay) {
    var overlay = document.createElement('div');
    overlay.classList.add(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.overlay);
    popup.appendChild(overlay);
  } // Append close button


  var closeButton = document.createElement('div');
  closeButton.classList.add(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['close-button']);

  closeButton.onclick = onCloseButtonClick || function () {
    closeOnSubscribedPopup(onPopupClosed);
  };

  popup.appendChild(closeButton); // Prevent body from scrolling with extra wrapper

  var poupScroll = document.createElement('div');
  poupScroll.classList.add(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a['popup-scroll']);
  popup.appendChild(poupScroll); // Append container

  var container = document.createElement('div');

  if (containerId) {
    container.id = containerId;
  }

  container.classList.add(_on_subscribed_popup_css__WEBPACK_IMPORTED_MODULE_0___default.a.container);
  container.innerHTML = onSubscribedPopup.htmlBody;
  poupScroll.appendChild(container); // Append to DOM

  var renderedDocument = rootDocument || document;

  if (renderedDocument.body) {
    renderedDocument.body.appendChild(popup);
  } // Opened callback


  if (onPopupOpened) {
    onPopupOpened();
  }
}
/**
 * Remove On-Subscribed Popup from DOM tree
 */

function closeOnSubscribedPopup(onPopupClosed) {
  var popupWrapper = document.getElementById(POPUP_ID);

  if (popupWrapper) {
    popupWrapper.remove(); // Closed callback

    if (onPopupClosed) {
      onPopupClosed();
    }
  }
}

/***/ }),

/***/ "./lib/push_prompts/overlay_prompt/index.js":
/*!**************************************************!*\
  !*** ./lib/push_prompts/overlay_prompt/index.js ***!
  \**************************************************/
/*! exports provided: openOverlayPrompt, closeOverlayPrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overlay_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay_prompt */ "./lib/push_prompts/overlay_prompt/overlay_prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openOverlayPrompt", function() { return _overlay_prompt__WEBPACK_IMPORTED_MODULE_0__["openOverlayPrompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeOverlayPrompt", function() { return _overlay_prompt__WEBPACK_IMPORTED_MODULE_0__["closeOverlayPrompt"]; });



/***/ }),

/***/ "./lib/push_prompts/overlay_prompt/overlay_prompt.css":
/*!************************************************************!*\
  !*** ./lib/push_prompts/overlay_prompt/overlay_prompt.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??postcss!./overlay_prompt.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/push_prompts/overlay_prompt/overlay_prompt.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/push_prompts/overlay_prompt/overlay_prompt.js":
/*!***********************************************************!*\
  !*** ./lib/push_prompts/overlay_prompt/overlay_prompt.js ***!
  \***********************************************************/
/*! exports provided: OVERLAY_PROMPT_ID, openOverlayPrompt, closeOverlayPrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROMPT_ID", function() { return OVERLAY_PROMPT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOverlayPrompt", function() { return openOverlayPrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeOverlayPrompt", function() { return closeOverlayPrompt; });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay_prompt.css */ "./lib/push_prompts/overlay_prompt/overlay_prompt.css");
/* harmony import */ var _overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1__);


var OVERLAY_PROMPT_ID = 'qg-overlay-view';
/**
 * Get DOM element of overlay's content
 */

function composeOverlayContent(_ref) {
  var title = _ref.title,
      message = _ref.message;
  var content = document.createElement('div');
  content.classList.add(_overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.content);

  content.onclick = function (e) {
    _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].debug('clicked overlay child');
    e.stopPropagation();
  }; // Append title


  if (title) {
    var contentTitle = document.createElement('h4');
    contentTitle.innerHTML = title;
    content.appendChild(contentTitle);
  } // Append message


  if (message) {
    var contentMsg = document.createElement('h6');
    contentMsg.innerHTML = message;
    content.appendChild(contentMsg);
  }

  return content;
}

function openOverlayPrompt(overlayPrompt) {
  // Do nothing if settings are invalid or prompt was existed
  if (!overlayPrompt || !overlayPrompt.title || !overlayPrompt.message || document.getElementById(OVERLAY_PROMPT_ID)) {
    return;
  }

  var overlay = document.createElement('div');
  overlay.classList.add(_overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay);
  overlay.id = OVERLAY_PROMPT_ID;
  overlay.onclick = closeOverlayPrompt; // Append content

  var content = composeOverlayContent(overlayPrompt);
  overlay.appendChild(content); // Append close button

  var closeButton = document.createElement('a');
  closeButton.classList.add(_overlay_prompt_css__WEBPACK_IMPORTED_MODULE_1___default.a['close-button']);
  closeButton.onclick = closeOverlayPrompt;
  overlay.appendChild(closeButton); // Append to DOM

  if (document.body) {
    document.body.appendChild(overlay);
  }
}
function closeOverlayPrompt() {
  var promptElement = document.getElementById(OVERLAY_PROMPT_ID);

  if (promptElement) {
    promptElement.remove();
  }
}

/***/ }),

/***/ "./lib/recommendation/index.js":
/*!*************************************!*\
  !*** ./lib/recommendation/index.js ***!
  \*************************************/
/*! exports provided: getRecommendationWithApp, showRecommendationWithApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recommendation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommendation */ "./lib/recommendation/recommendation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecommendationWithApp", function() { return _recommendation__WEBPACK_IMPORTED_MODULE_0__["getRecommendationWithApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showRecommendationWithApp", function() { return _recommendation__WEBPACK_IMPORTED_MODULE_0__["showRecommendationWithApp"]; });



/***/ }),

/***/ "./lib/recommendation/recommendation.js":
/*!**********************************************!*\
  !*** ./lib/recommendation/recommendation.js ***!
  \**********************************************/
/*! exports provided: getRecommendationWithApp, showRecommendationWithApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendationWithApp", function() { return getRecommendationWithApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRecommendationWithApp", function() { return showRecommendationWithApp; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _utils_makeRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/makeRequest */ "./lib/utils/makeRequest.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ "./lib/recommendation/widget.js");




var getRecommendationWithApp = function getRecommendationWithApp(appId) {
  return function (type) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;

    // Required for flow as hard to judge the replacement can work all the times.
    if (false) {}

    var _options$productId = options.productId,
        productId = _options$productId === void 0 ? '' : _options$productId,
        _options$datafeedId = options.datafeedId,
        datafeedId = _options$datafeedId === void 0 ? '' : _options$datafeedId,
        maxItems = options.maxItems;
    var endpoint = "".concat("https://config.new-infra.staging-api.qgraph.io", "/api/v1.0/user_recommendation?type=").concat(type, "&appId=").concat(appId, "&productId=").concat(productId, "&datafeedId=").concat(datafeedId);
    cb = typeof cb === 'function' ? cb : function () {};
    Object(_utils_makeRequest__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: endpoint,
      method: 'GET'
    }).then(function (res) {
      _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('getRecommendation', res);

      if (!res || !res.json || !Array.isArray(res.json)) {
        return cb(new Error('Retrieved invalid recommendation format'));
      }

      cb(null, res.json.slice(0, maxItems || undefined));
    })["catch"](function (err) {
      _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Failed to get recommendation', err);
      cb(err);
    });
  };
};
var showRecommendationWithApp = function showRecommendationWithApp(appId) {
  return function (id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      model: 'auto'
    };
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    // TODO: If no given columns from user, the columns value should be calculated
    // by intrinsic layout size. e.g. desirable item width is 180px. With a given
    // computed available width: 600px, the columns should be 3.
    var defaultOpts = {
      model: 'auto',
      productId: '',
      datafeedId: '',
      layout: {
        type: 'row',
        gap: 20,
        columns: 5,
        ratio: 1 / 1
      },
      styles: {},
      query: {}
    };
    var container = document.getElementById(id);

    if (!container || !(container instanceof HTMLDivElement)) {
      _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Cannot find the target widget container', id);
      return cb(new Error('Container element for recommendation is not found'));
    }

    var productId = options.productId,
        datafeedId = options.datafeedId,
        _options$layout = options.layout,
        layout = _options$layout === void 0 ? {} : _options$layout;
    var globalParams = JSON.parse((window._AIQ_REC_PARAMS || {})[id] || '{}');
    var maxItems = layout.maxItems || globalParams.layout && globalParams.layout.maxItems;
    _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('showRecommendation', globalParams, options);
    getRecommendationWithApp(appId)(options.model || globalParams.model || defaultOpts.model, {
      productId: productId,
      datafeedId: datafeedId,
      maxItems: maxItems
    }, function (err) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (err) {
        return cb(err);
      }

      if (!result || result.length === 0) {
        return cb(new Error('No recommendation found'));
      } // Append query pairs to existing url


      if (globalParams.query || options.query) {
        result = result.map(function (item) {
          try {
            var _ref = new URL(item.url),
                href = _ref.href,
                searchParams = _ref.searchParams;

            var qs = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalParams.query || {}, options.query || {});

            Object.keys(qs).forEach(function (k) {
              searchParams.set(k, qs[k]);
            });
            item.url = "".concat(href, "?").concat(searchParams.toString());
          } catch (e) {}

          return item;
        });
      }

      Object(_widget__WEBPACK_IMPORTED_MODULE_3__["renderRecommendationWidget"])(container, result, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultOpts.layout, globalParams.layout || {}, options.layout || {}), Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultOpts.styles, globalParams.styles || {}, options.styles || {}));
      cb(null, {
        widgetId: id,
        recommendations: result
      });
    });
  };
};

/***/ }),

/***/ "./lib/recommendation/widget.css":
/*!***************************************!*\
  !*** ./lib/recommendation/widget.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??postcss!./widget.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./lib/recommendation/widget.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/recommendation/widget.js":
/*!**************************************!*\
  !*** ./lib/recommendation/widget.js ***!
  \**************************************/
/*! exports provided: renderRecommendationWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRecommendationWidget", function() { return renderRecommendationWidget; });
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget.css */ "./lib/recommendation/widget.css");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widget_css__WEBPACK_IMPORTED_MODULE_0__);


var applyStyleRules = function applyStyleRules(elem, styles) {
  if (!styles) {
    return;
  }

  Object.keys(styles).forEach(function (rule) {
    // $FlowFixMe No way to cover the type checking but respect the input from user's parameters.
    elem.style[rule] = styles[rule];
  });
}; // TODO: Encapsulate recommendation into a class to contain configurated context instead
// of single render function.


var renderRecommendationWidget = function renderRecommendationWidget(container, recommendations, layout, styles) {
  var type = layout.type,
      gap = layout.gap,
      columns = layout.columns,
      ratio = layout.ratio; // TODO: If no specified columns from call site, we can leverage onresize
  // event to decide better column number for responsiveness.

  var displayColumns = columns + (type === 'row' ? 0.2 : 0);
  var calcWidthStyle = "calc(100% / ".concat(displayColumns, " - ").concat(gap, "px)");
  var calcRatioStyle = "calc(100% * 1 / ".concat(ratio, ")");
  var outerFrag = document.createDocumentFragment(); // TODO: QGRAPH-1146: Send feedback event of impression and click

  recommendations.forEach(function (rec) {
    var wrapper = document.createElement('a');
    var thumbnail = document.createElement('div');
    var productText = document.createElement('div');
    var priceText = document.createElement('div');
    var retailPriceText = document.createElement('div');
    thumbnail.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.thumbnails);
    thumbnail.style.backgroundImage = "url(\"".concat(rec.image, "\")");
    thumbnail.style.paddingTop = calcRatioStyle;
    productText.textContent = rec.title;
    productText.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.text);
    productText.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.title);
    applyStyleRules(productText, styles.title);
    priceText.textContent = new Intl.NumberFormat('en', {
      style: 'decimal',
      currency: rec.currency
    }).format(+rec.currentPrice) || '';
    priceText.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.text);
    applyStyleRules(priceText, styles.price);
    retailPriceText.textContent = new Intl.NumberFormat('en', {
      style: 'decimal',
      currency: rec.currency
    }).format(+rec.retailPrice) || '';
    retailPriceText.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.text);
    retailPriceText.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.retailPrice);
    applyStyleRules(retailPriceText, styles.retailPrice);
    wrapper.append(thumbnail, productText, priceText, retailPriceText);
    wrapper.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.wrapper);
    wrapper.title = rec.title;
    wrapper.style.minWidth = calcWidthStyle;
    wrapper.style.maxWidth = calcWidthStyle;
    wrapper.style.padding = "".concat(gap, "px ").concat(gap / 2, "px");
    wrapper.href = rec.url;
    outerFrag.appendChild(wrapper);
  }); // Remove existing children under target element.

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.classList.add(_widget_css__WEBPACK_IMPORTED_MODULE_0___default.a.container); // Override the default style accordingly by layout types

  if (type === 'grid') {
    container.style.flexWrap = 'wrap';
  }

  if (type === 'row') {
    container.style.overflowX = 'auto';
  }

  container.appendChild(outerFrag);
};

/***/ }),

/***/ "./lib/third_party/getScrollPercent.js":
/*!*********************************************!*\
  !*** ./lib/third_party/getScrollPercent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get viewport height even the `DOCTYPE` is not specified.
 */
function getViewportHeight() {
  if (document.compatMode === 'BackCompat') {
    /**
     * In Quirks mode, have an issue `document.documentElement.clientHeight === document.documentElement.scrollHeight`
     */
    // Try to get from innerHeight especially for mobile device case (EX: OPPO A3, body.clientHeight will be too small...)
    // https://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto
    if (typeof window.innerHeight !== 'undefined') {
      return window.innerHeight;
    } // https://stackoverflow.com/questions/18284087/if-doctype-is-not-specified-on-chrome-firefox-or-safari-is-there-a-way-to-fin


    return document.body.clientHeight;
  }

  return document.documentElement.clientHeight;
}
/**
 * Cross browser method to determine vertical scroll percentage.
 * https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
 */


function getScrollPercent() {
  var h = document.documentElement;
  var b = document.body;
  var st = 'scrollTop';
  var sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - getViewportHeight()) * 100;
}

/* harmony default export */ __webpack_exports__["default"] = (getScrollPercent);

/***/ }),

/***/ "./lib/third_party/isPrivateMode.js":
/*!******************************************!*\
  !*** ./lib/third_party/isPrivateMode.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Detect if the browser is running in Private mode
 * https://gist.github.com/jherax/a81c8c132d09cc354a0e2cb911841ff1
 *
 * @returns {Promise}
 */
function isPrivateMode() {
  return new Promise(function (resolve) {
    var on = function on() {
      return resolve(true);
    }; // is in private mode


    var off = function off() {
      return resolve(false);
    }; // not private mode


    var testLocalStorage = function testLocalStorage() {
      try {
        if (localStorage.length) off();else {
          localStorage.x = 1;
          localStorage.removeItem('x');
          off();
        }
      } catch (e) {
        // Safari only enables cookie in private mode
        // if cookie is disabled, then all client side storage is disabled
        // if all client side storage is disabled, then there is no point
        // in using private mode
        navigator.cookieEnabled ? on() : off();
      }
    }; // Chrome & Opera


    if (window.webkitRequestFileSystem) {
      return void window.webkitRequestFileSystem(0, 0, off, on);
    } // Firefox


    if ('MozAppearance' in document.documentElement.style) {
      if (indexedDB === null) return on();
      var db = indexedDB.open('test');
      db.onerror = on;
      db.onsuccess = off;
      return void 0;
    } // Safari


    var isSafari = navigator.userAgent.match(/Version\/([0-9._]+).*Safari/);

    if (isSafari) {
      var version = parseInt(isSafari[1], 10);
      if (version < 11) return testLocalStorage();

      try {
        window.openDatabase(null, null, null, null);
        return off();
      } catch (_) {
        return on();
      }
    } // IE10+ & Edge InPrivate


    if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
      return on();
    } // default navigation mode


    return off();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (isPrivateMode);

/***/ }),

/***/ "./lib/third_party/ua-parser.js":
/*!**************************************!*\
  !*** ./lib/third_party/ua-parser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
(function (window, undefined) {
  'use strict';

  var LIBVERSION = '0.7.10',
      EMPTY = '',
      UNKNOWN = '?',
      FUNC_TYPE = 'function',
      UNDEF_TYPE = 'undefined',
      OBJ_TYPE = 'object',
      STR_TYPE = 'string',
      MAJOR = 'major',
      MODEL = 'model',
      NAME = 'name',
      TYPE = 'type',
      VENDOR = 'vendor',
      VERSION = 'version',
      ARCHITECTURE = 'architecture',
      CONSOLE = 'console',
      MOBILE = 'mobile',
      TABLET = 'tablet',
      SMARTTV = 'smarttv',
      WEARABLE = 'wearable',
      EMBEDDED = 'embedded';
  var util = {
    extend: function extend(regexes, extensions) {
      var margedRegexes = {};

      for (var i in regexes) {
        if (extensions[i] && extensions[i].length % 2 === 0) {
          margedRegexes[i] = extensions[i].concat(regexes[i]);
        } else {
          margedRegexes[i] = regexes[i];
        }
      }

      return margedRegexes;
    },
    has: function has(str1, str2) {
      if (typeof str1 === 'string') {
        return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
      } else {
        return false;
      }
    },
    lowerize: function lowerize(str) {
      return str.toLowerCase();
    },
    major: function major(version) {
      return typeof version === STR_TYPE ? version.split('.')[0] : undefined;
    }
  };
  var mapper = {
    rgx: function rgx() {
      var result,
          i = 0,
          j,
          k,
          p,
          q,
          matches,
          match,
          args = arguments;

      while (i < args.length && !matches) {
        var regex = args[i],
            props = args[i + 1];

        if (typeof result === UNDEF_TYPE) {
          result = {};

          for (p in props) {
            if (props.hasOwnProperty(p)) {
              q = props[p];

              if (typeof q === OBJ_TYPE) {
                result[q[0]] = undefined;
              } else {
                result[q] = undefined;
              }
            }
          }
        }

        j = k = 0;

        while (j < regex.length && !matches) {
          matches = regex[j++].exec(this.getUA());

          if (matches) {
            for (p = 0; p < props.length; p++) {
              match = matches[++k];
              q = props[p];

              if (typeof q === OBJ_TYPE && q.length > 0) {
                if (q.length == 2) {
                  if (typeof q[1] === FUNC_TYPE) {
                    result[q[0]] = q[1].call(this, match);
                  } else {
                    result[q[0]] = q[1];
                  }
                } else if (q.length == 3) {
                  if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                    result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                  } else {
                    result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                  }
                } else if (q.length == 4) {
                  result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                }
              } else {
                result[q] = match || undefined;
              }
            }
          }
        }

        i += 2;
      }

      return result;
    },
    str: function str(_str, map) {
      for (var i in map) {
        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
          for (var j = 0; j < map[i].length; j++) {
            if (util.has(map[i][j], _str)) {
              return i === UNKNOWN ? undefined : i;
            }
          }
        } else if (util.has(map[i], _str)) {
          return i === UNKNOWN ? undefined : i;
        }
      }

      return _str;
    }
  };
  var maps = {
    browser: {
      oldsafari: {
        version: {
          '1.0': '/8',
          1.2: '/1',
          1.3: '/3',
          '2.0': '/412',
          '2.0.2': '/416',
          '2.0.3': '/417',
          '2.0.4': '/419',
          '?': '/'
        }
      }
    },
    device: {
      amazon: {
        model: {
          'Fire Phone': ['SD', 'KF']
        }
      },
      sprint: {
        model: {
          'Evo Shift 4G': '7373KT'
        },
        vendor: {
          HTC: 'APA',
          Sprint: 'Sprint'
        }
      }
    },
    os: {
      windows: {
        version: {
          ME: '4.90',
          'NT 3.11': 'NT3.51',
          'NT 4.0': 'NT4.0',
          2000: 'NT 5.0',
          XP: ['NT 5.1', 'NT 5.2'],
          Vista: 'NT 6.0',
          7: 'NT 6.1',
          8: 'NT 6.2',
          8.1: 'NT 6.3',
          10: ['NT 6.4', 'NT 10.0'],
          RT: 'ARM'
        }
      }
    }
  };
  var regexes = {
    browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [NAME, VERSION], [/(OPiOS)[\/\s]+([\w\.]+)/i], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i], [[NAME, 'Opera'], VERSION], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i], [[NAME, 'Yandex'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, ' '], VERSION], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[NAME, 'UCBrowser'], VERSION], [/(dolfin)\/([\w\.]+)/i], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[NAME, 'Chrome'], VERSION], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [VERSION, [NAME, 'MIUI Browser']], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [VERSION, [NAME, 'Android Browser']], [/FBAV\/([\w\.]+);/i], [VERSION, [NAME, 'Facebook']], [/fxios\/([\w\.-]+)/i], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [VERSION, NAME], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape)\/([\w\.-]+)/i], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [NAME, VERSION]],
    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, 'ia32']], [/windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[ARCHITECTURE, util.lowerize]]],
    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/(samsung);smarttv/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/sie-(\w+)*/i], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(glass)\s\d/i], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[TYPE, util.lowerize], VENDOR, MODEL]],
    engine: [[/windows.+\sedge\/([\w\.]+)/i], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i], [VERSION, NAME]],
    os: [[/microsoft\s(windows)\s(vista|xp)/i], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[NAME, 'Symbian'], VERSION], [/\((series40);/i], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[NAME, 'Firefox OS'], VERSION], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[NAME, 'Chromium OS'], VERSION], [/(sunos)\s?([\w\.]+\d)*/i], [[NAME, 'Solaris'], VERSION], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [NAME, VERSION], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [NAME, VERSION]]
  };

  var UAParser = function UAParser(uastring, extensions) {
    if (!(this instanceof UAParser)) {
      return new UAParser(uastring, extensions).getResult();
    }

    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

    this.getBrowser = function () {
      var browser = mapper.rgx.apply(this, rgxmap.browser);
      browser.major = util.major(browser.version);
      return browser;
    };

    this.getCPU = function () {
      return mapper.rgx.apply(this, rgxmap.cpu);
    };

    this.getDevice = function () {
      return mapper.rgx.apply(this, rgxmap.device);
    };

    this.getEngine = function () {
      return mapper.rgx.apply(this, rgxmap.engine);
    };

    this.getOS = function () {
      return mapper.rgx.apply(this, rgxmap.os);
    };

    this.getResult = function () {
      return {
        ua: this.getUA(),
        browser: this.getBrowser(),
        engine: this.getEngine(),
        os: this.getOS(),
        device: this.getDevice(),
        cpu: this.getCPU()
      };
    };

    this.getUA = function () {
      return ua;
    };

    this.setUA = function (uastring) {
      ua = uastring;
      return this;
    };

    return this;
  };

  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = {
    NAME: NAME,
    MAJOR: MAJOR,
    VERSION: VERSION
  };
  UAParser.CPU = {
    ARCHITECTURE: ARCHITECTURE
  };
  UAParser.DEVICE = {
    MODEL: MODEL,
    VENDOR: VENDOR,
    TYPE: TYPE,
    CONSOLE: CONSOLE,
    MOBILE: MOBILE,
    SMARTTV: SMARTTV,
    TABLET: TABLET,
    WEARABLE: WEARABLE,
    EMBEDDED: EMBEDDED
  };
  UAParser.ENGINE = {
    NAME: NAME,
    VERSION: VERSION
  };
  UAParser.OS = {
    NAME: NAME,
    VERSION: VERSION
  };

  if (typeof exports !== UNDEF_TYPE) {
    if (typeof module !== UNDEF_TYPE && module.exports) {
      exports = module.exports = UAParser;
    }

    exports.UAParser = UAParser;
  } else {
    if ("function" === FUNC_TYPE && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return UAParser;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      window.UAParser = UAParser;
    }
  }

  var $ = window.jQuery || window.Zepto;

  if (typeof $ !== UNDEF_TYPE) {
    var parser = new UAParser();
    $.ua = parser.getResult();

    $.ua.get = function () {
      return parser.getUA();
    };

    $.ua.set = function (uastring) {
      parser.setUA(uastring);
      var result = parser.getResult();

      for (var prop in result) {
        $.ua[prop] = result[prop];
      }
    };
  }
})(typeof window === 'object' ? window : this);

/***/ }),

/***/ "./lib/utils/attribution.js":
/*!**********************************!*\
  !*** ./lib/utils/attribution.js ***!
  \**********************************/
/*! exports provided: getAttribution, setAttribution, setAttributionViaUrl, navigateWithAttribution, composeAttributionEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribution", function() { return getAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribution", function() { return setAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributionViaUrl", function() { return setAttributionViaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateWithAttribution", function() { return navigateWithAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeAttributionEvents", function() { return composeAttributionEvents; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");







/**
 * Check if attribution is not expired yet
 *
 * - "click" event lasts for 24 hours
 * - "view" event lasts for 1 hour
 */
function shouldAttributionValid(attr) {
  var timeDiff = +new Date() - attr.ts;

  switch (attr.action) {
    case 'click':
      return Math.max(3600 * 24 * 1e3 - timeDiff, 0) > 0;

    case 'view':
      return Math.max(3600 * 1 * 1e3 - timeDiff, 0) > 0;

    default:
      {
        _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].warn('Invalid attribution', attr);
        return false;
      }
  }
}
/**
 * Get attribution data from indexedDB
 */


function getAttribution() {
  return _getAttribution.apply(this, arguments);
}
/**
 * Compose and set attribution
 */

function _getAttribution() {
  _getAttribution = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var attr;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["get"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_ATTRIBUTION_KEY"]);

          case 2:
            attr = _context.sent;

            if (!(attr && shouldAttributionValid(attr))) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", attr);

          case 5:
            return _context.abrupt("return", undefined);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAttribution.apply(this, arguments);
}

function setAttribution(_x, _x2) {
  return _setAttribution.apply(this, arguments);
}
/**
 * Read attribution from url's query string and
 * set them into indexedDB.
 */

function _setAttribution() {
  _setAttribution = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(action, notificationId) {
    var attribution;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            attribution = {
              action: action,
              notificationId: notificationId,
              ts: +new Date()
            };
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug('Set attribution into indexedDB', attribution);
            _context2.next = 4;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_ATTRIBUTION_KEY"], attribution);

          case 4:
            return _context2.abrupt("return", attribution);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setAttribution.apply(this, arguments);
}

function setAttributionViaUrl(_x3) {
  return _setAttributionViaUrl.apply(this, arguments);
}
/**
 * Set attribution on target url's search params, then navigate to that page.
 */

function _setAttributionViaUrl() {
  _setAttributionViaUrl = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(url) {
    var attributionStr, attributionObj, attribution;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            attributionStr = url.searchParams.get(_constants__WEBPACK_IMPORTED_MODULE_5__["SEARCH_PARAMS_ATTRIBUTION_KEY"]);

            if (!attributionStr) {
              _context3.next = 8;
              break;
            }

            attributionObj = JSON.parse(attributionStr); // Only keep the fields that we have

            attribution = {
              action: attributionObj.action,
              notificationId: attributionObj.notificationId,
              ts: +attributionObj.ts
            };
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug('Get attribution and set into indexedDB', attribution);
            _context3.next = 8;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_ATTRIBUTION_KEY"], attribution);

          case 8:
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('Failed to set attribution via url', _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _setAttributionViaUrl.apply(this, arguments);
}

function navigateWithAttribution(_x4) {
  return _navigateWithAttribution.apply(this, arguments);
}
/**
 * Compose the attribution data (like notificationId)
 * into each event record.
 */

function _navigateWithAttribution() {
  _navigateWithAttribution = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(urlStr) {
    var url, attribution;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            url = new URL(urlStr, location.href);
            _context4.next = 4;
            return getAttribution();

          case 4:
            attribution = _context4.sent;

            // Set attribution into search parameters
            if (attribution) {
              url.searchParams.set(_constants__WEBPACK_IMPORTED_MODULE_5__["SEARCH_PARAMS_ATTRIBUTION_KEY"], JSON.stringify(attribution));
            } // Navigate to a new page


            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].debug('Navigate to new page with attribution', url.toString());
            window.location.assign(url.toString());
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            _utils_log__WEBPACK_IMPORTED_MODULE_4__["default"].error('Failed to navigate with attribution', _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _navigateWithAttribution.apply(this, arguments);
}

function composeAttributionEvents(_x5) {
  return _composeAttributionEvents.apply(this, arguments);
}

function _composeAttributionEvents() {
  _composeAttributionEvents = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(events) {
    var attribution, notificationId, action, lastClkdNotId;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getAttribution();

          case 2:
            attribution = _context5.sent;

            if (!attribution) {
              _context5.next = 7;
              break;
            }

            notificationId = attribution.notificationId, action = attribution.action;
            lastClkdNotId = action === 'click' ? notificationId : undefined;
            return _context5.abrupt("return", events.map(function (event) {
              return Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event, {
                notificationId: notificationId,
                lastClkdNotId: lastClkdNotId
              });
            }));

          case 7:
            return _context5.abrupt("return", events);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _composeAttributionEvents.apply(this, arguments);
}

/***/ }),

/***/ "./lib/utils/cookie.js":
/*!*****************************!*\
  !*** ./lib/utils/cookie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _topDomain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topDomain */ "./lib/utils/topDomain.js");



/**
 * Module dependencies.
 */


var domain = '.' + Object(_topDomain__WEBPACK_IMPORTED_MODULE_3__["default"])(window.location.href);
var DEFAULT_OPTIONS = {
  maxage: 31536000000,
  // default to a year
  path: '/',
  domain: domain !== '.' ? domain : undefined
};
/**
 * Add function exSet for Set a `key` and `value` with default options in our cookie.
 */

var exSet = function exSet(key, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Build expires by maxage
  var _DEFAULT_OPTIONS$opti = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_OPTIONS, options),
      maxage = _DEFAULT_OPTIONS$opti.maxage,
      attr = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_DEFAULT_OPTIONS$opti, ["maxage"]);

  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(key, value, Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attr, {
    expires: new Date(new Date().getTime() + maxage)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a, {
  exSet: exSet
}));

/***/ }),

/***/ "./lib/utils/dates.js":
/*!****************************!*\
  !*** ./lib/utils/dates.js ***!
  \****************************/
/*! exports provided: diffDatesInDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDatesInDays", function() { return diffDatesInDays; });
/**
 * Get the difference between two dates in days
 *
 * @see https://www.w3resource.com/javascript-exercises/javascript-date-exercise-8.php
 */
function diffDatesInDays(fromDate, toDate) {
  return Math.floor((Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()) - Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate())) / (1000 * 60 * 60 * 24));
}

/***/ }),

/***/ "./lib/utils/delay.js":
/*!****************************!*\
  !*** ./lib/utils/delay.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return delay; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



/**
 * Delay for a duration.
 * @param {number} milliseconds The delay
 */
function delay(_x) {
  return _delay.apply(this, arguments);
}

function _delay() {
  _delay = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(milliseconds) {
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _delay.apply(this, arguments);
}

/***/ }),

/***/ "./lib/utils/first_time.js":
/*!*********************************!*\
  !*** ./lib/utils/first_time.js ***!
  \*********************************/
/*! exports provided: FIRST_TIME_COOKIE, getFirstTimeCookie, setFirstTimeCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_TIME_COOKIE", function() { return FIRST_TIME_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTimeCookie", function() { return getFirstTimeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFirstTimeCookie", function() { return setFirstTimeCookie; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./lib/utils/cookie.js");
 // Export for unit test

var FIRST_TIME_COOKIE = '_qg_fts';
/**
 * Get first time cookie in Date format
 */

function getFirstTimeCookie() {
  var firstTime = _cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(FIRST_TIME_COOKIE);

  if (!firstTime) {
    return null;
  } // Due legacy issue, convert unix timestamp to standard timestamp


  return new Date(+firstTime * 1000);
}
/**
 * Set first time cookie
 */

function setFirstTimeCookie() {
  // Avoid duplicated cookie set
  if (_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(FIRST_TIME_COOKIE)) {
    return;
  } // Due legacy issue, convert timestamp to unix format


  var unixTimestamp = parseInt(+new Date() / 1000);
  _cookie__WEBPACK_IMPORTED_MODULE_0__["default"].exSet(FIRST_TIME_COOKIE, unixTimestamp);
}

/***/ }),

/***/ "./lib/utils/log.js":
/*!**************************!*\
  !*** ./lib/utils/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loglevel */ "../../node_modules/loglevel/lib/loglevel.js");
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);
 // Export logger with giving name to avoid level settings conflict with customer's.
// (In case they are using loglevel too)

var logger = loglevel__WEBPACK_IMPORTED_MODULE_0__["getLogger"]('aiqua-sdk');
var originalFactory = logger.methodFactory;

logger.methodFactory = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Trace error log on Rollbar
  if (args[0] === 'error') {
    return function () {
      /**
       * Since rollbar will try to access window to track the uncaught errors.
       * But there will not have window object in web worker, we should simply
       * check the global state before using it.
       */
      if (window) {
        var Rollbar = __webpack_require__(/*! ./rollbar */ "./lib/utils/rollbar.js")["default"];

        Rollbar.error.apply(Rollbar, arguments);
      }

      originalFactory.apply(void 0, args).apply(void 0, arguments);
    };
  }

  return originalFactory.apply(void 0, args);
};

/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./lib/utils/makeRequest.js":
/*!**********************************!*\
  !*** ./lib/utils/makeRequest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./lib/utils/log.js");


/**
 * Sending a HTTP request with XHR
 */
function makeRequest(opts, runInSync) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url, !runInSync);
    xhr.withCredentials = true; // Set timeout in async call

    if (!runInSync) {
      xhr.timeout = 8000;
    }

    if (opts.headers) {
      // Destruct it first to avoid flow error
      var headers = opts.headers;
      Object.keys(headers).forEach(function (key) {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        var respData = {
          status: this.status
        };

        if (xhr.responseText) {
          try {
            respData.json = JSON.parse(xhr.responseText);
          } catch (err) {
            _log__WEBPACK_IMPORTED_MODULE_0__["default"].warn(err);
            respData.text = xhr.responseText;
          }
        }

        resolve(respData);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function () {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };

    if (opts.data) {
      xhr.send(JSON.stringify(opts.data));
    } else {
      xhr.send();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (makeRequest);

/***/ }),

/***/ "./lib/utils/parseUtmParams.js":
/*!*************************************!*\
  !*** ./lib/utils/parseUtmParams.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Valid utm parameters
 *
 * @see https://support.google.com/analytics/answer/1033863#parameters
 */
var UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
/**
 * Parse utm parameters from URL querystring
 */

function parseUtmParams(url) {
  if (!url.search) {
    return {};
  }

  var searchParams = new URLSearchParams(url.search);
  var utmParams = {};
  UTM_PARAMS.forEach(function (param) {
    var utmParam = searchParams.get(param);

    if (utmParam) {
      utmParams[param] = utmParam;
    }
  });
  return utmParams;
}

/* harmony default export */ __webpack_exports__["default"] = (parseUtmParams);

/***/ }),

/***/ "./lib/utils/rollbar.js":
/*!******************************!*\
  !*** ./lib/utils/rollbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rollbar */ "../../node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "./lib/utils/version.js");


var SDK_ENV = "staging" || 'local';
var sentExceptions = [];
/**
 * Check if new exception is repeated.
 * If not, put it into an array for duplicated check.
 */

function shouldIgnoreNewException(exception) {
  // Ignore duplicated exception
  if (sentExceptions.includes(exception)) {
    return true;
  } // Log the known exception


  sentExceptions.push(exception);
  return false;
}

var Rollbar = new rollbar__WEBPACK_IMPORTED_MODULE_0___default.a({
  // Only enable on staging or production env
  enabled: SDK_ENV === 'staging' || SDK_ENV === 'production',
  accessToken: "151683fe477143ea98b84fcc44161c35",
  captureUncaught: true,
  captureUnhandledRejections: true,
  verbose: true,
  autoInstrument: {
    log: false
  },
  payload: {
    environment: SDK_ENV,
    client: {
      javascript: {
        code_version: Object(_version__WEBPACK_IMPORTED_MODULE_1__["getPackageVersion"])()
      }
    }
  },
  checkIgnore: function checkIgnore(isUncaught, args, payload) {
    /**
     * Should contains any content
     */
    if (args.length === 0) {
      return true;
    }
    /**
     * Handle uncaught error
     */


    if (isUncaught) {
      var err = args[1]; // Ignore if error instance is not found

      if (!(err instanceof Error)) {
        return true;
      } // Ignore uncaught error that not caused by our SDK


      if (!err.stack.includes('aiqua.js')) {
        return true;
      }

      return shouldIgnoreNewException(err.message);
    }
    /**
     * Try to get error message from first argument
     */


    try {
      var errMsg = "".concat(args[0]) || '';
      return shouldIgnoreNewException(errMsg);
    } catch (err) {
      return shouldIgnoreNewException(err.message);
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Rollbar);

/***/ }),

/***/ "./lib/utils/time.js":
/*!***************************!*\
  !*** ./lib/utils/time.js ***!
  \***************************/
/*! exports provided: toUnixTimestamp, toDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnixTimestamp", function() { return toUnixTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDateTime", function() { return toDateTime; });
/**
 * Cover JavaScript dateTime to Unix timestamp
 * @param {Number} dateTime The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
 */
var toUnixTimestamp = function toUnixTimestamp(dateTime) {
  return Math.floor(dateTime / 1e3);
};
/**
 * Cover Unix timestamp to JavaScript dateTime.
 * dateTime: The numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
 * @param {Number} timestamp The Unix timestamp
 */

var toDateTime = function toDateTime(unixTimestamp) {
  return unixTimestamp * 1e3;
};

/***/ }),

/***/ "./lib/utils/topDomain.js":
/*!********************************!*\
  !*** ./lib/utils/topDomain.js ***!
  \********************************/
/*! exports provided: default, getLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevels", function() { return getLevels; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);


/**
 * getLevels returns all levels of the given url.
 *
 * Example levels:
 *
 *      getLevels('http://www.google.co.uk');
 *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
 *
 *
 * @param {String} url
 * @return {Array}
 * @api public
 */

var getLevels = function getLevels(url) {
  var host = Object(url__WEBPACK_IMPORTED_MODULE_1__["parse"])(url).hostname;
  var parts = host.split('.');
  var last = parts[parts.length - 1];
  var levels = []; // Ip address.

  var numLast = parseInt(last, 10);

  if (parts.length === 4 && !isNaN(numLast) && "".concat(numLast) === last) {
    return levels;
  } // Localhost.


  if (parts.length <= 1) {
    return levels;
  } // Create levels.


  for (var i = parts.length - 2; i >= 0; --i) {
    levels.push(parts.slice(i).join('.'));
  }

  return levels;
};
/**
 * Get the top domain.
 *
 * The function constructs the levels of domain
 * and attempts to set a global cookie on each one
 * when it succeeds it returns the top level domain.
 *
 * The method returns an empty string when the hostname
 * is an ip or `localhost`.
 *
 * Example:
 *
 *      topDomain('http://localhost:3000/baz');
 *      // => ''
 *      topDomain('http://dev:3000/baz');
 *      // => ''
 *      topDomain('http://127.0.0.1:3000/baz');
 *      // => ''
 *      topDomain('http://segment.io/baz');
 *      // => 'segment.io'
 *
 * @param {String} url
 * @return {String}
 * @api public
 */


var topDomain = function topDomain(url) {
  var levels = getLevels(url); // Lookup the real top level one.

  for (var i = 0; i < levels.length; ++i) {
    var cname = 'QG:test';
    var domain = levels[i];
    var opts = {
      domain: '.' + domain
    }; // http://curl.haxx.se/rfc/cookie_spec.html
    // https://publicsuffix.org/list/effective_tld_names.dat
    // https://stackoverflow.com/a/47419897
    //
    // try setting a dummy cookie with the options
    // if the cookie isn't set, it probably means
    // that the domain is on the public suffix list
    // like myapp.herokuapp.com or localhost / ip.

    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(cname, true, opts);

    if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON(cname)) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(cname, opts);
      return domain;
    }
  }

  return '';
};
/**
 * Expose `topDomain`
 */


/* harmony default export */ __webpack_exports__["default"] = (topDomain);


/***/ }),

/***/ "./lib/utils/user_id.js":
/*!******************************!*\
  !*** ./lib/utils/user_id.js ***!
  \******************************/
/*! exports provided: generateUserId, getWUserId, setWUserId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUserId", function() { return generateUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWUserId", function() { return getWUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWUserId", function() { return setWUserId; });
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cookie */ "./lib/utils/cookie.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");


/**
 * Generate a random number string (16 characters) as `wUserId`.
 *
 * @private
 * TODO: Rewrite this function.
 *       Currently, it will not guarantee the length of return value.
 *       EX: When Math.random() return 0
 */

function generateUserId() {
  return (Math.random() + ' ').substring(2, 10) + (Math.random() + ' ').substring(2, 10) + (Math.random() + ' ').substring(2, 2);
}
/**
 * Get user id from cookies
 * (Use for user events & inweb request)
 */

function getWUserId() {
  return (_utils_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].getJSON(_constants__WEBPACK_IMPORTED_MODULE_1__["WUSER_ID_KEY"]) || '').toString();
}
/**
 * Set user id into cookies
 *
 * TODO: `QGUserId` that stored inside cookies is the
 *       alias of `wUserId` we using in server, may rename
 *       it to `wUserId` to prevent confusion.
 */

function setWUserId() {
  var userId = generateUserId();
  _utils_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].exSet(_constants__WEBPACK_IMPORTED_MODULE_1__["WUSER_ID_KEY"], userId);
  return userId;
}

/***/ }),

/***/ "./lib/utils/version.js":
/*!******************************!*\
  !*** ./lib/utils/version.js ***!
  \******************************/
/*! exports provided: getPackageVersion, getSdkVersion, setSdkVersion, logMobileSdkVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackageVersion", function() { return getPackageVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSdkVersion", function() { return getSdkVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSdkVersion", function() { return setSdkVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMobileSdkVersion", function() { return logMobileSdkVersion; });
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./lib/utils/log.js");
/* harmony import */ var _withAppSdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAppSdk */ "./lib/utils/withAppSdk.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");






/**
 * Get sdk version based on package.json
 */

function getPackageVersion() {
  return "3.18.1" || '';
}
/**
 * Get sdk version from indexedDB
 */

function getSdkVersion() {
  return _getSdkVersion.apply(this, arguments);
}
/**
 * Save latest sdk version into indexedDB
 */

function _getSdkVersion() {
  _getSdkVersion = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var version;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["get"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_VERSION_KEY"]);

          case 2:
            version = _context.sent;
            return _context.abrupt("return", version);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSdkVersion.apply(this, arguments);
}

function setSdkVersion(_x) {
  return _setSdkVersion.apply(this, arguments);
}
/**
 * Log Android or iOS sdk version on console
 */

function _setSdkVersion() {
  _setSdkVersion = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(version) {
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_2__["set"])(_constants__WEBPACK_IMPORTED_MODULE_5__["IDB_VERSION_KEY"], version);

          case 2:
            _log__WEBPACK_IMPORTED_MODULE_3__["default"].info("Updated SDK version to ".concat(version));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setSdkVersion.apply(this, arguments);
}

function logMobileSdkVersion() {
  return _logMobileSdkVersion.apply(this, arguments);
}

function _logMobileSdkVersion() {
  _logMobileSdkVersion = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var isWithAppSdk, _ref, getPlatform, getVersion, androidSdkVersion, iosSdkVersion;

    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_withAppSdk__WEBPACK_IMPORTED_MODULE_4__["default"])();

          case 2:
            isWithAppSdk = _context3.sent;

            if (isWithAppSdk) {
              _context3.next = 6;
              break;
            }

            _log__WEBPACK_IMPORTED_MODULE_3__["default"].debug('AIQUA App SDK is not installed');
            return _context3.abrupt("return");

          case 6:
            _ref = window.aiqMobileSdk || {}, getPlatform = _ref.getPlatform, getVersion = _ref.getVersion; // Get Android sdk version

            if (!(typeof getPlatform === 'function' && getPlatform() === 'android')) {
              _context3.next = 11;
              break;
            }

            androidSdkVersion = getVersion();
            _log__WEBPACK_IMPORTED_MODULE_3__["default"].debug('Android SDK verion, v', androidSdkVersion);
            return _context3.abrupt("return");

          case 11:
            _context3.next = 13;
            return getVersion();

          case 13:
            iosSdkVersion = _context3.sent;
            _log__WEBPACK_IMPORTED_MODULE_3__["default"].debug('iOS SDK verion, v', iosSdkVersion);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logMobileSdkVersion.apply(this, arguments);
}

/***/ }),

/***/ "./lib/utils/withAppSdk.js":
/*!*********************************!*\
  !*** ./lib/utils/withAppSdk.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



/**
 * Test it is in App's webview with our App-SDK or not
 */
var withAppSdk =
/*#__PURE__*/
function () {
  var _ref = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _window, aiqMobileSdk, ReactNativeWebView, handshakeResolver, msgHandler, isWithinRN;

    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _window = window, aiqMobileSdk = _window.aiqMobileSdk, ReactNativeWebView = _window.ReactNativeWebView; // Do handshaking when ReactNativeWebView present in global. The WebSdk
            // inside WebView will try to send handshake message to reach out
            // our message listener on React Native WebView. If we don't receive
            // the response in 200ms, we assume the WebPage is not inside react native
            // app. Handshake is required to avoid racing issue of JS injection in the
            // webview and WebSdk init.

            if (!ReactNativeWebView) {
              _context.next = 8;
              break;
            }

            msgHandler = function msgHandler(_ref2) {
              var data = _ref2.data;
              window.removeEventListener('message', msgHandler);

              if (typeof handshakeResolver === 'function') {
                handshakeResolver(data === 'aiq_ack');
              }
            };

            _context.next = 5;
            return Promise.race([new Promise(function (resolve) {
              handshakeResolver = resolve;
              ReactNativeWebView.postMessage(JSON.stringify({
                type: 'handshake',
                source: 'aiq'
              }));
              window.addEventListener('message', msgHandler, {
                once: true
              });
            }), new Promise(function (resolve) {
              return setTimeout(function () {
                // Remove message handler when timeout
                window.removeEventListener('message', msgHandler);
                resolve(false);
              }, 200);
            })]);

          case 5:
            isWithinRN = _context.sent;

            if (!isWithinRN) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", isWithinRN);

          case 8:
            return _context.abrupt("return", aiqMobileSdk && aiqMobileSdk.logEvent && aiqMobileSdk.getVersion);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function withAppSdk() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (withAppSdk);

/***/ }),

/***/ "./lib/web_push/initSimplePush.js":
/*!****************************************!*\
  !*** ./lib/web_push/initSimplePush.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadNotifyIframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadNotifyIframe */ "./lib/web_push/loadNotifyIframe.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");



/**
 * Initialize web push integration in "simple" way
 *
 * #TODO: [QGRAPH-2077] more codes here TEEHEE~
 */
function initSimplePush(qgSettings) {
  try {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Initializing simple web push integration...'); // Append iframe

    Object(_loadNotifyIframe__WEBPACK_IMPORTED_MODULE_0__["default"])(qgSettings.qgendpoint);
  } catch (err) {
    _utils_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Simple Push Integration', err);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initSimplePush);

/***/ }),

/***/ "./lib/web_push/loadManifest.js":
/*!**************************************!*\
  !*** ./lib/web_push/loadManifest.js ***!
  \**************************************/
/*! exports provided: MANIFEST_LINK_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANIFEST_LINK_ID", function() { return MANIFEST_LINK_ID; });
var MANIFEST_LINK_ID = 'qg-manifest';
/**
 * Load manifest.json in client website
 * (For push notification subscription)
 */

function loadManifest(assetsRoot) {
  // Not need to append again
  if (document.getElementById(MANIFEST_LINK_ID)) {
    return;
  } // Ensure leading and trailing slash in path


  var modifiedAssetsRoot = (assetsRoot || '/').replace(/^\/*/, '/').replace(/$|\/+$/, '/');
  var l = document.createElement('link');
  l.setAttribute('rel', 'manifest');
  l.setAttribute('id', MANIFEST_LINK_ID);
  l.setAttribute('href', "".concat(modifiedAssetsRoot, "manifest.json"));
  l.setAttribute('crossorigin', 'use-credentials'); // Enable CROS
  // If `<head>` is not available, append manifest on document root

  if (!document.head) {
    document.appendChild(l);
    return;
  }

  var childs = document.head.children;

  if (childs.length > 0) {
    document.head.insertBefore(l, childs[0]);
  } else {
    document.head.appendChild(l);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loadManifest);

/***/ }),

/***/ "./lib/web_push/loadNotifyIframe.js":
/*!******************************************!*\
  !*** ./lib/web_push/loadNotifyIframe.js ***!
  \******************************************/
/*! exports provided: IFRAME_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFRAME_ID", function() { return IFRAME_ID; });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");
 // Export for unit test

var IFRAME_ID = 'QGA';
/**
 * Load iframe to enable service worker and
 * ask push permission at specific custom domain.
 */

function loadNotifyIframe(qgendpoint) {
  if (!qgendpoint) {
    _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('Failed to add iframe, `qgendpoint` setting is missing');
    return;
  } // Append an iframe to ask push permission


  var iframe = document.createElement('iframe');
  var iframeUrl = qgendpoint.startsWith('https:') ? qgendpoint.replace(/$|\/+$/, '') // Remove trailing slash
  : "https://".concat(qgendpoint, "/.qgr.ph");
  iframe.id = 'QGA';
  iframe.setAttribute('src', iframeUrl);
  iframe.setAttribute('style', 'visibility: hidden; width: 0;height: 0;');

  if (document.body) {
    document.body.appendChild(iframe);
  } else if (document.head) {
    document.head.appendChild(iframe);
  } // Get a signal that user allowed/disallowed the push notificatin in iframe


  window.addEventListener('message', function (_ref) {
    var data = _ref.data,
        origin = _ref.origin;

    if (origin !== iframeUrl) {
      return;
    }

    window.qg('message-received', data);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (loadNotifyIframe);

/***/ }),

/***/ "./lib/web_push/registerServiceWorker.js":
/*!***********************************************!*\
  !*** ./lib/web_push/registerServiceWorker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");



var cachedSwRegistration = null;
/**
 * Check if our service worker was registered on relative scopes,
 * unregister them all except of target's scope one.
 */

function unregisterExistedServiceWorkers(_x) {
  return _unregisterExistedServiceWorkers.apply(this, arguments);
}
/**
 * Register a new service worker on default scope,
 * and try to unregister existed service worker which installed at other scope(s).
 */


function _unregisterExistedServiceWorkers() {
  _unregisterExistedServiceWorkers = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(scopePath) {
    var registrations, unregisterResults;
    return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (navigator.serviceWorker) {
              _context3.next = 2;
              break;
            }

            throw new Error('Service workers are not supported.');

          case 2:
            _context3.next = 4;
            return navigator.serviceWorker.getRegistrations();

          case 4:
            registrations = _context3.sent;
            unregisterResults = registrations // Only if current registration contains our service worker
            .filter(function (registration) {
              // Do not unregister service worker which on target scope
              if (new URL(registration.scope).pathname === scopePath) {
                return false;
              }

              return registration.active && registration.active.scriptURL.includes('qg-sw') || registration.installing && registration.installing.scriptURL.includes('qg-sw');
            }).map(
            /*#__PURE__*/
            function () {
              var _ref2 = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
              /*#__PURE__*/
              _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(registration) {
                var unregisterResult;
                return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return registration.unregister();

                      case 2:
                        unregisterResult = _context2.sent;

                        if (unregisterResult) {
                          _context2.next = 6;
                          break;
                        }

                        _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Failed to unregister existed service worker', registration.scope);
                        return _context2.abrupt("return", false);

                      case 6:
                        _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('Unregisted existed service worker', registration.scope);
                        return _context2.abrupt("return", true);

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 8;
            return Promise.all(unregisterResults);

          case 8:
            _context3.t0 = Boolean;
            return _context3.abrupt("return", _context3.sent.every(_context3.t0));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _unregisterExistedServiceWorkers.apply(this, arguments);
}

function registerServiceWorker(scriptUrl, scope) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var serviceWorker, areAllExistedSWUnregistered, newRegistration;
      return _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if ('serviceWorker' in navigator) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", reject(new Error('Service workers are not supported.')));

            case 3:
              // $FlowFixMe - Checked existence above
              serviceWorker = navigator.serviceWorker; // Quick resolve registered worker

              if (!cachedSwRegistration) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", resolve(cachedSwRegistration));

            case 6:
              _context.next = 8;
              return unregisterExistedServiceWorkers(scope);

            case 8:
              areAllExistedSWUnregistered = _context.sent;

              if (areAllExistedSWUnregistered) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", reject(new Error('Failed to unregister existed service worker(s)')));

            case 11:
              _context.next = 13;
              return serviceWorker.register(scriptUrl, {
                scope: scope,
                type: 'classic',
                updateViaCache: 'none'
              });

            case 13:
              newRegistration = _context.sent;

              if (!(newRegistration.active && newRegistration.active.state === 'activated')) {
                _context.next = 18;
                break;
              }

              _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('Got activated service worker', newRegistration);
              cachedSwRegistration = newRegistration;
              return _context.abrupt("return", resolve(newRegistration));

            case 18:
              /**
               * Waiting for the new worker is been fully activated
               */
              newRegistration.addEventListener('updatefound', function () {
                var installingWorker = newRegistration.installing;
                if (!installingWorker) return; // Waiting if the service worker is been activated

                installingWorker.onstatechange = function () {
                  if (newRegistration.active && newRegistration.active.state === 'activated') {
                    _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('Registered and activated new service worker', newRegistration);
                    cachedSwRegistration = newRegistration;
                    return resolve(newRegistration);
                  }
                };
              });
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", reject(_context.t0));

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 21]]);
    }));

    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
}

/* harmony default export */ __webpack_exports__["default"] = (registerServiceWorker);

/***/ }),

/***/ "./lib/web_push/shouldEnablePush.js":
/*!******************************************!*\
  !*** ./lib/web_push/shouldEnablePush.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./lib/utils/log.js");


/**
 * Check availability of push related functions which
 * depends on QGSettings.
 */
function shouldEnablePush(qgSettings) {
  var _ref = qgSettings || {},
      push = _ref.push,
      origin = _ref.origin;

  if (!push) {
    _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].warn('Web push functions are disabled by user settings.');
    return false;
  } // Check if push functions are restricted by same origin


  if (push.restrictOrigin && origin) {
    try {
      var originUrl = new URL(origin);
      var isSameOrigin = originUrl.origin === window.location.origin; // Show warning on console

      if (!isSameOrigin) {
        _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].warn("Web push can only be used on ".concat(originUrl.origin, ", but current origin is ").concat(window.location.origin, "."));
      }

      return isSameOrigin;
    } catch (e) {
      _utils_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('Invalid origin URL', origin);
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (shouldEnablePush);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
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


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./config/polyfills.js ./lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/packages/web-sdk/config/polyfills.js */"./config/polyfills.js");
module.exports = __webpack_require__(/*! ./lib/index.js */"./lib/index.js");


/***/ })

/******/ });
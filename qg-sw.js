/*!
 * AIQUA SDK: qg-sw v3.18.1 staging | (c) Appier
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/service_worker.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./lib/service_worker.js":
/*!*******************************!*\
  !*** ./lib/service_worker.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/cjies_appier/Documents/Programming/appier/aiqua-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _utils_attribution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/attribution */ "./lib/utils/attribution.js");



/* eslint-env serviceworker */


/**
 * All the client's appIds that using legacy server endpoint
 * (api.quantumgraph.com) in service worker
 *
 * @see https://docs.google.com/spreadsheets/d/1aIWng-MrQWv13NVDxqGoub_C899V21d3qxqie1aoLCg/edit
 */
var LEGACY_HOST_APPIDS = ['db5af2230f8ca4f18e95', // Dineout
'db6757c58cf228c7b6f3', // ShoppersStop
'6105f8c85f2a3badc914', // Domodi
'46837031b31996595f46', // Homebook
'68c58caf69267adf3fe4', // Allani
'79eda9a5b2ff93a46079', // Voylla
'e74bc58aef11677effe8', // DraperJames
'8d58b287ccbc7929d9a0', // FitPass
'7b1c12adf5ac2b876750', // QGraph
'2f1918f51370f3dae829', // monsieurcadeau
'919c1af469ca50fd0df1', // Aso
'f0b5ac0d4403bf074e34', // Pazzo
'707cccc9ee264c44a582', // H&D
'dbe5165a8fd340b912e8', // MyDress
'4c9c439615e8389a1f29', // Womanstalk
'95eb9b3a156560bef027', // Gamania
'a1f8a604216c1d7877d2', // Zee5 India
'9e15113f52bcef998da2', // Zee5 MENA
'ae5ecb63a30974627faa', // Zee5 EU
'ee4a1f660a8f1cfccc7c', // Zee5 AM
'9a18fd99e892bff0dcb7'];
/**
 * log event to dback server
 */

function logEvent(eventName, parameters) {
  // If the appId is included in the list, switch to the legacy API host
  var apiHost = LEGACY_HOST_APPIDS.includes(appId) ? "https://dback.new-infra.staging-api.qgraph.io" : "https://dback.new-infra.staging-api.qgraph.io";
  var data = JSON.stringify({
    events: [{
      eventName: eventName,
      parameters: parameters,
      qgts: parseInt(+new Date() / 1000)
    }]
  }); // send data back to dback server

  fetch("".concat(apiHost || '', "/web/").concat(appId, "/data/"), {
    method: 'POST',
    body: data,
    mode: 'cors',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Origin: self.registration.scope
    })
  }).then(function (response) {
    console.log('response - success', response);
  })["catch"](function (err) {
    console.log('response - error ', err);
  });
}
/**
 * Show notification with Web Notifications API
 */


function showNotification(notificationOptions) {
  var title = notificationOptions.title,
      _notificationOptions$ = notificationOptions.data,
      data = _notificationOptions$ === void 0 ? {} : _notificationOptions$,
      notificationId = notificationOptions.notificationId,
      restNotificationOptions = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(notificationOptions, ["title", "data", "notificationId"]);

  if (!(data.hasOwnProperty('sendReceipt') && !data.sendReceipt)) {
    logEvent('notification_received', {
      notificationId: notificationId
    });
  } // Remove `title` field and move `notificationId` into data


  var modifiedNotificationOptions = Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restNotificationOptions, {
    data: Object(_Users_cjies_appier_Documents_Programming_appier_aiqua_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data, {
      notificationId: notificationId
    })
  });

  return self.registration.showNotification(title, modifiedNotificationOptions).then(function () {
    return Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_2__["setAttribution"])('view', notificationId);
  });
} // -------------------------------------
//   Event listeners
// -------------------------------------


self.addEventListener('push', function (event) {
  try {
    var data = event.data.json();
    event.waitUntil(showNotification(data));
  } catch (e) {
    console.log('error in displaying notification', e);
  }
});
self.addEventListener('notificationclick', function (event) {
  var data = event.notification.data;
  var action = event.action;

  if (data.drip) {
    delete data.drip;
  }

  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function (clientList) {
    var url = '/';

    if (data.hasOwnProperty('url')) {
      url = data.url;
    }

    if (action) {
      var urlKey = String(action) + '_url';

      if (data.hasOwnProperty(urlKey)) {
        url = data[urlKey];
      }
    }

    var foundClient = clientList.find(function (client) {
      return client.url === url;
    });
    var notificationId = data.notificationId || event.notification.notificationId;

    if (foundClient instanceof WindowClient) {
      foundClient.focus();
      return Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_2__["setAttribution"])('click', notificationId);
    }

    if (clients.openWindow) {
      return Object(_utils_attribution__WEBPACK_IMPORTED_MODULE_2__["setAttribution"])('click', notificationId).then(function () {
        return clients.openWindow(url);
      });
    }
  }));

  if (data.hasOwnProperty('sendReceipt') && !data.sendReceipt) {
    return;
  }

  logEvent('notification_clicked', {
    notificationId: data.notificationId
  });
});
self.addEventListener('notificationclose', function (event) {
  var drip = event.notification.data.drip;

  if (drip) {
    showNotification(drip);
  }
});

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWctc3cuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jamllc19hcHBpZXIvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2FwcGllci9haXF1YS11aS9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NqaWVzX2FwcGllci9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvYXBwaWVyL2FpcXVhLXVpL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NqaWVzX2FwcGllci9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvYXBwaWVyL2FpcXVhLXVpL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jamllc19hcHBpZXIvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2FwcGllci9haXF1YS11aS9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jamllc19hcHBpZXIvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2FwcGllci9haXF1YS11aS9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NqaWVzX2FwcGllci9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvYXBwaWVyL2FpcXVhLXVpL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NqaWVzX2FwcGllci9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvYXBwaWVyL2FpcXVhLXVpL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jamllc19hcHBpZXIvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2FwcGllci9haXF1YS11aS9ub2RlX21vZHVsZXMvaWRiLWtleXZhbC9kaXN0L2lkYi1rZXl2YWwubWpzIiwid2VicGFjazovLy8vVXNlcnMvY2ppZXNfYXBwaWVyL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9hcHBpZXIvYWlxdWEtdWkvbm9kZV9tb2R1bGVzL2xvZ2xldmVsL2xpYi9sb2dsZXZlbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NqaWVzX2FwcGllci9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvYXBwaWVyL2FpcXVhLXVpL25vZGVfbW9kdWxlcy9yb2xsYmFyL2Rpc3Qvcm9sbGJhci51bWQubWluLmpzIiwid2VicGFjazovLy8uL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3NlcnZpY2Vfd29ya2VyLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9hdHRyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvbG9nLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yb2xsYmFyLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy93aXRoQXBwU2RrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL3NlcnZpY2Vfd29ya2VyLmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImNsYXNzIFN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9ICdrZXl2YWwtc3RvcmUnLCBzdG9yZU5hbWUgPSAna2V5dmFsJykge1xyXG4gICAgICAgIHRoaXMuc3RvcmVOYW1lID0gc3RvcmVOYW1lO1xyXG4gICAgICAgIHRoaXMuX2RicCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XHJcbiAgICAgICAgICAgIG9wZW5yZXEub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVucmVxLmVycm9yKTtcclxuICAgICAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSBzZXR1cDogY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBzdG9yZVxyXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9wZW5yZXEucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfd2l0aElEQlN0b3JlKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RicC50aGVuKGRiID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yKTtcclxuICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxubGV0IHN0b3JlO1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0U3RvcmUoKSB7XHJcbiAgICBpZiAoIXN0b3JlKVxyXG4gICAgICAgIHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0KGtleSwgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgbGV0IHJlcTtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcclxuICAgICAgICByZXEgPSBzdG9yZS5nZXQoa2V5KTtcclxuICAgIH0pLnRoZW4oKCkgPT4gcmVxLnJlc3VsdCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUsIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpIHtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XHJcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsKGtleSwgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcclxuICAgICAgICBzdG9yZS5kZWxldGUoa2V5KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpIHtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XHJcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgd291bGQgYmUgc3RvcmUuZ2V0QWxsS2V5cygpLCBidXQgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEVkZ2Ugb3IgU2FmYXJpLlxyXG4gICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXHJcbiAgICAgICAgKHN0b3JlLm9wZW5LZXlDdXJzb3IgfHwgc3RvcmUub3BlbkN1cnNvcikuY2FsbChzdG9yZSkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkudGhlbigoKSA9PiBrZXlzKTtcclxufVxuXG5leHBvcnQgeyBTdG9yZSwgZ2V0LCBzZXQsIGRlbCwgY2xlYXIsIGtleXMgfTtcbiIsIi8qXG4qIGxvZ2xldmVsIC0gaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsXG4qXG4qIENvcHlyaWdodCAoYykgMjAxMyBUaW0gUGVycnlcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAocm9vdCwgZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5sb2cgPSBkZWZpbml0aW9uKCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBTbGlnaHRseSBkdWJpb3VzIHRyaWNrcyB0byBjdXQgZG93biBtaW5pbWl6ZWQgZmlsZSBzaXplXG4gICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgIHZhciB1bmRlZmluZWRUeXBlID0gXCJ1bmRlZmluZWRcIjtcblxuICAgIHZhciBsb2dNZXRob2RzID0gW1xuICAgICAgICBcInRyYWNlXCIsXG4gICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgXCJpbmZvXCIsXG4gICAgICAgIFwid2FyblwiLFxuICAgICAgICBcImVycm9yXCJcbiAgICBdO1xuXG4gICAgLy8gQ3Jvc3MtYnJvd3NlciBiaW5kIGVxdWl2YWxlbnQgdGhhdCB3b3JrcyBhdCBsZWFzdCBiYWNrIHRvIElFNlxuICAgIGZ1bmN0aW9uIGJpbmRNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kLmJpbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYmluZChvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChtZXRob2QsIG9iaik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gTWlzc2luZyBiaW5kIHNoaW0gb3IgSUU4ICsgTW9kZXJuaXpyLCBmYWxsYmFjayB0byB3cmFwcGluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShtZXRob2QsIFtvYmosIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgYmVzdCBsb2dnaW5nIG1ldGhvZCBwb3NzaWJsZSBmb3IgdGhpcyBlbnZcbiAgICAvLyBXaGVyZXZlciBwb3NzaWJsZSB3ZSB3YW50IHRvIGJpbmQsIG5vdCB3cmFwLCB0byBwcmVzZXJ2ZSBzdGFjayB0cmFjZXNcbiAgICBmdW5jdGlvbiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgPSAnbG9nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBtZXRob2QgcG9zc2libGUsIGZvciBub3cgLSBmaXhlZCBsYXRlciBieSBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzXG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZVttZXRob2ROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCBtZXRob2ROYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCAnbG9nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHByaXZhdGUgZnVuY3Rpb25zIGFsd2F5cyBuZWVkIGB0aGlzYCB0byBiZSBzZXQgcHJvcGVybHlcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb2dnaW5nTWV0aG9kcyhsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbG9nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0gPSAoaSA8IGxldmVsKSA/XG4gICAgICAgICAgICAgICAgbm9vcCA6XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBsb2cubG9nIGFzIGFuIGFsaWFzIGZvciBsb2cuZGVidWdcbiAgICAgICAgdGhpcy5sb2cgPSB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIC8vIEluIG9sZCBJRSB2ZXJzaW9ucywgdGhlIGNvbnNvbGUgaXNuJ3QgcHJlc2VudCB1bnRpbCB5b3UgZmlyc3Qgb3BlbiBpdC5cbiAgICAvLyBXZSBidWlsZCByZWFsTWV0aG9kKCkgcmVwbGFjZW1lbnRzIGhlcmUgdGhhdCByZWdlbmVyYXRlIGxvZ2dpbmcgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHRoaXMsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UgdXNlIGNsb3NlbHkgYm91bmQgcmVhbCBtZXRob2RzIHdoZXJldmVyIHBvc3NpYmxlLCBhbmRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugd2FpdCBmb3IgYSBjb25zb2xlIHRvIGFwcGVhciwgYW5kIHRoZW4gdHJ5IGFnYWluLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRNZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHJldHVybiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHx8XG4gICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUsIGRlZmF1bHRMZXZlbCwgZmFjdG9yeSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGN1cnJlbnRMZXZlbDtcbiAgICAgIHZhciBzdG9yYWdlS2V5ID0gXCJsb2dsZXZlbFwiO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgc3RvcmFnZUtleSArPSBcIjpcIiArIG5hbWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWxOdW0pIHtcbiAgICAgICAgICB2YXIgbGV2ZWxOYW1lID0gKGxvZ01ldGhvZHNbbGV2ZWxOdW1dIHx8ICdzaWxlbnQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XSA9IGxldmVsTmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiICsgbGV2ZWxOYW1lICsgXCI7XCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRQZXJzaXN0ZWRMZXZlbCgpIHtcbiAgICAgICAgICB2YXIgc3RvcmVkTGV2ZWw7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSkgcmV0dXJuO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGNvb2tpZXMgaWYgbG9jYWwgc3RvcmFnZSBnaXZlcyB1cyBub3RoaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdG9yZWRMZXZlbCA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHdpbmRvdy5kb2N1bWVudC5jb29raWU7XG4gICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjb29raWUuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIik7XG4gICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSAvXihbXjtdKykvLmV4ZWMoY29va2llLnNsaWNlKGxvY2F0aW9uKSlbMV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgc3RvcmVkIGxldmVsIGlzIG5vdCB2YWxpZCwgdHJlYXQgaXQgYXMgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgIGlmIChzZWxmLmxldmVsc1tzdG9yZWRMZXZlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RvcmVkTGV2ZWw7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKlxuICAgICAgICogUHVibGljIGxvZ2dlciBBUEkgLSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsIGZvciBkZXRhaWxzXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgIHNlbGYubmFtZSA9IG5hbWU7XG5cbiAgICAgIHNlbGYubGV2ZWxzID0geyBcIlRSQUNFXCI6IDAsIFwiREVCVUdcIjogMSwgXCJJTkZPXCI6IDIsIFwiV0FSTlwiOiAzLFxuICAgICAgICAgIFwiRVJST1JcIjogNCwgXCJTSUxFTlRcIjogNX07XG5cbiAgICAgIHNlbGYubWV0aG9kRmFjdG9yeSA9IGZhY3RvcnkgfHwgZGVmYXVsdE1ldGhvZEZhY3Rvcnk7XG5cbiAgICAgIHNlbGYuZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRMZXZlbDtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwsIHBlcnNpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInN0cmluZ1wiICYmIHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV2ZWwgPSBzZWxmLmxldmVsc1tsZXZlbC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJudW1iZXJcIiAmJiBsZXZlbCA+PSAwICYmIGxldmVsIDw9IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICBjdXJyZW50TGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgaWYgKHBlcnNpc3QgIT09IGZhbHNlKSB7ICAvLyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXBsYWNlTG9nZ2luZ01ldGhvZHMuY2FsbChzZWxmLCBsZXZlbCwgbmFtZSk7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSAmJiBsZXZlbCA8IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gY29uc29sZSBhdmFpbGFibGUgZm9yIGxvZ2dpbmdcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IFwibG9nLnNldExldmVsKCkgY2FsbGVkIHdpdGggaW52YWxpZCBsZXZlbDogXCIgKyBsZXZlbDtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnNldERlZmF1bHRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgICAgIGlmICghZ2V0UGVyc2lzdGVkTGV2ZWwoKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldExldmVsKGxldmVsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5lbmFibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5UUkFDRSwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmRpc2FibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5TSUxFTlQsIHBlcnNpc3QpO1xuICAgICAgfTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB3aXRoIHRoZSByaWdodCBsZXZlbFxuICAgICAgdmFyIGluaXRpYWxMZXZlbCA9IGdldFBlcnNpc3RlZExldmVsKCk7XG4gICAgICBpZiAoaW5pdGlhbExldmVsID09IG51bGwpIHtcbiAgICAgICAgICBpbml0aWFsTGV2ZWwgPSBkZWZhdWx0TGV2ZWwgPT0gbnVsbCA/IFwiV0FSTlwiIDogZGVmYXVsdExldmVsO1xuICAgICAgfVxuICAgICAgc2VsZi5zZXRMZXZlbChpbml0aWFsTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqXG4gICAgICogVG9wLWxldmVsIEFQSVxuICAgICAqXG4gICAgICovXG5cbiAgICB2YXIgZGVmYXVsdExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICAgIHZhciBfbG9nZ2Vyc0J5TmFtZSA9IHt9O1xuICAgIGRlZmF1bHRMb2dnZXIuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gZ2V0TG9nZ2VyKG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIGNyZWF0aW5nIGEgbG9nZ2VyLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXTtcbiAgICAgICAgaWYgKCFsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXSA9IG5ldyBMb2dnZXIoXG4gICAgICAgICAgICBuYW1lLCBkZWZhdWx0TG9nZ2VyLmdldExldmVsKCksIGRlZmF1bHRMb2dnZXIubWV0aG9kRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9O1xuXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudCBnbG9iYWwgbG9nIHZhcmlhYmxlIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgdmFyIF9sb2cgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgPyB3aW5kb3cubG9nIDogdW5kZWZpbmVkO1xuICAgIGRlZmF1bHRMb2dnZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LmxvZyA9PT0gZGVmYXVsdExvZ2dlcikge1xuICAgICAgICAgICAgd2luZG93LmxvZyA9IF9sb2c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbiAgICB9O1xuXG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXJzID0gZnVuY3Rpb24gZ2V0TG9nZ2VycygpIHtcbiAgICAgICAgcmV0dXJuIF9sb2dnZXJzQnlOYW1lO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbn0pKTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMucm9sbGJhcj1lKCk6dC5yb2xsYmFyPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4pe2lmKHJbbl0pcmV0dXJuIHJbbl0uZXhwb3J0czt2YXIgbz1yW25dPXtleHBvcnRzOnt9LGlkOm4sbG9hZGVkOiExfTtyZXR1cm4gdFtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIGUubT10LGUuYz1yLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUscil7dC5leHBvcnRzPXIoMSl9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDIpLG89XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Ll9yb2xsYmFyQ29uZmlnLGk9byYmby5nbG9iYWxBbGlhc3x8XCJSb2xsYmFyXCIsYT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3dbaV0mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvd1tpXS5zaGltSWQmJnZvaWQgMCE9PXdpbmRvd1tpXS5zaGltSWQoKTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHx3aW5kb3cuX3JvbGxiYXJTdGFydFRpbWV8fCh3aW5kb3cuX3JvbGxiYXJTdGFydFRpbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCkpLCFhJiZvKXt2YXIgcz1uZXcgbihvKTt3aW5kb3dbaV09c31lbHNlXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz8od2luZG93LnJvbGxiYXI9bix3aW5kb3cuX3JvbGxiYXJEaWRMb2FkPSEwKTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKHNlbGYucm9sbGJhcj1uLHNlbGYuX3JvbGxiYXJEaWRMb2FkPSEwKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlKXt0aGlzLm9wdGlvbnM9Yy5oYW5kbGVPcHRpb25zKHgsdCk7dmFyIHI9bmV3IGwodGhpcy5vcHRpb25zLGgsZCk7dGhpcy5jbGllbnQ9ZXx8bmV3IHUodGhpcy5vcHRpb25zLHIscCxcImJyb3dzZXJcIik7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93fHxcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZixvPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZG9jdW1lbnQ7aSh0aGlzLmNsaWVudC5ub3RpZmllcixuKSxhKHRoaXMuY2xpZW50LnF1ZXVlKSwodGhpcy5vcHRpb25zLmNhcHR1cmVVbmNhdWdodHx8dGhpcy5vcHRpb25zLmhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucykmJihmLmNhcHR1cmVVbmNhdWdodEV4Y2VwdGlvbnMobix0aGlzKSxmLndyYXBHbG9iYWxzKG4sdGhpcykpLCh0aGlzLm9wdGlvbnMuY2FwdHVyZVVuaGFuZGxlZFJlamVjdGlvbnN8fHRoaXMub3B0aW9ucy5oYW5kbGVVbmhhbmRsZWRSZWplY3Rpb25zKSYmZi5jYXB0dXJlVW5oYW5kbGVkUmVqZWN0aW9ucyhuLHRoaXMpLHRoaXMuaW5zdHJ1bWVudGVyPW5ldyB3KHRoaXMub3B0aW9ucyx0aGlzLmNsaWVudC50ZWxlbWV0ZXIsdGhpcyxuLG8pLHRoaXMuaW5zdHJ1bWVudGVyLmluc3RydW1lbnQoKX1mdW5jdGlvbiBvKHQpe3ZhciBlPVwiUm9sbGJhciBpcyBub3QgaW5pdGlhbGl6ZWRcIjtwLmVycm9yKGUpLHQmJnQobmV3IEVycm9yKGUpKX1mdW5jdGlvbiBpKHQsZSl7dC5hZGRUcmFuc2Zvcm0obS5oYW5kbGVJdGVtV2l0aEVycm9yKS5hZGRUcmFuc2Zvcm0obS5lbnN1cmVJdGVtSGFzU29tZXRoaW5nVG9TYXkpLmFkZFRyYW5zZm9ybShtLmFkZEJhc2VJbmZvKS5hZGRUcmFuc2Zvcm0obS5hZGRSZXF1ZXN0SW5mbyhlKSkuYWRkVHJhbnNmb3JtKG0uYWRkQ2xpZW50SW5mbyhlKSkuYWRkVHJhbnNmb3JtKG0uYWRkUGx1Z2luSW5mbyhlKSkuYWRkVHJhbnNmb3JtKG0uYWRkQm9keSkuYWRkVHJhbnNmb3JtKGcuYWRkTWVzc2FnZVdpdGhFcnJvcikuYWRkVHJhbnNmb3JtKGcuYWRkVGVsZW1ldHJ5RGF0YSkuYWRkVHJhbnNmb3JtKGcuYWRkQ29uZmlnVG9QYXlsb2FkKS5hZGRUcmFuc2Zvcm0obS5zY3J1YlBheWxvYWQpLmFkZFRyYW5zZm9ybShnLnVzZXJUcmFuc2Zvcm0ocCkpLmFkZFRyYW5zZm9ybShnLml0ZW1Ub1BheWxvYWQpfWZ1bmN0aW9uIGEodCl7dC5hZGRQcmVkaWNhdGUoeS5jaGVja0xldmVsKS5hZGRQcmVkaWNhdGUodi5jaGVja0lnbm9yZSkuYWRkUHJlZGljYXRlKHkudXNlckNoZWNrSWdub3JlKHApKS5hZGRQcmVkaWNhdGUoeS51cmxJc05vdEJsYWNrbGlzdGVkKHApKS5hZGRQcmVkaWNhdGUoeS51cmxJc1doaXRlbGlzdGVkKHApKS5hZGRQcmVkaWNhdGUoeS5tZXNzYWdlSXNJZ25vcmVkKHApKX1mdW5jdGlvbiBzKHQpe2Zvcih2YXIgZT0wLHI9dC5sZW5ndGg7ZTxyOysrZSlpZihjLmlzRnVuY3Rpb24odFtlXSkpcmV0dXJuIHRbZV19dmFyIHU9cigzKSxjPXIoNSksbD1yKDExKSxwPXIoMTMpLGY9cigxNiksaD1yKDE3KSxkPXIoMTkpLG09cigyMCksZz1yKDI0KSx2PXIoMjUpLHk9cigyNiksYj1yKDIxKSx3PXIoMjcpLF89bnVsbDtuLmluaXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gXz9fLmdsb2JhbCh0KS5jb25maWd1cmUodCk6Xz1uZXcgbih0LGUpfSxuLnByb3RvdHlwZS5nbG9iYWw9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2xpZW50Lmdsb2JhbCh0KSx0aGlzfSxuLmdsb2JhbD1mdW5jdGlvbih0KXtyZXR1cm4gXz9fLmdsb2JhbCh0KTp2b2lkIG8oKX0sbi5wcm90b3R5cGUuY29uZmlndXJlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5vcHRpb25zLG49e307cmV0dXJuIGUmJihuPXtwYXlsb2FkOmV9KSx0aGlzLm9wdGlvbnM9Yy5oYW5kbGVPcHRpb25zKHIsdCxuKSx0aGlzLmNsaWVudC5jb25maWd1cmUodGhpcy5vcHRpb25zLGUpLHRoaXMuaW5zdHJ1bWVudGVyLmNvbmZpZ3VyZSh0aGlzLm9wdGlvbnMpLHRoaXN9LG4uY29uZmlndXJlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIF8/Xy5jb25maWd1cmUodCxlKTp2b2lkIG8oKX0sbi5wcm90b3R5cGUubGFzdEVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xpZW50Lmxhc3RFcnJvcn0sbi5sYXN0RXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gXz9fLmxhc3RFcnJvcigpOnZvaWQgbygpfSxuLnByb3RvdHlwZS5sb2c9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jcmVhdGVJdGVtKGFyZ3VtZW50cyksZT10LnV1aWQ7cmV0dXJuIHRoaXMuY2xpZW50LmxvZyh0KSx7dXVpZDplfX0sbi5sb2c9ZnVuY3Rpb24oKXtpZihfKXJldHVybiBfLmxvZy5hcHBseShfLGFyZ3VtZW50cyk7dmFyIHQ9cyhhcmd1bWVudHMpO28odCl9LG4ucHJvdG90eXBlLmRlYnVnPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY3JlYXRlSXRlbShhcmd1bWVudHMpLGU9dC51dWlkO3JldHVybiB0aGlzLmNsaWVudC5kZWJ1Zyh0KSx7dXVpZDplfX0sbi5kZWJ1Zz1mdW5jdGlvbigpe2lmKF8pcmV0dXJuIF8uZGVidWcuYXBwbHkoXyxhcmd1bWVudHMpO3ZhciB0PXMoYXJndW1lbnRzKTtvKHQpfSxuLnByb3RvdHlwZS5pbmZvPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY3JlYXRlSXRlbShhcmd1bWVudHMpLGU9dC51dWlkO3JldHVybiB0aGlzLmNsaWVudC5pbmZvKHQpLHt1dWlkOmV9fSxuLmluZm89ZnVuY3Rpb24oKXtpZihfKXJldHVybiBfLmluZm8uYXBwbHkoXyxhcmd1bWVudHMpO3ZhciB0PXMoYXJndW1lbnRzKTtvKHQpfSxuLnByb3RvdHlwZS53YXJuPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY3JlYXRlSXRlbShhcmd1bWVudHMpLGU9dC51dWlkO3JldHVybiB0aGlzLmNsaWVudC53YXJuKHQpLHt1dWlkOmV9fSxuLndhcm49ZnVuY3Rpb24oKXtpZihfKXJldHVybiBfLndhcm4uYXBwbHkoXyxhcmd1bWVudHMpO3ZhciB0PXMoYXJndW1lbnRzKTtvKHQpfSxuLnByb3RvdHlwZS53YXJuaW5nPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY3JlYXRlSXRlbShhcmd1bWVudHMpLGU9dC51dWlkO3JldHVybiB0aGlzLmNsaWVudC53YXJuaW5nKHQpLHt1dWlkOmV9fSxuLndhcm5pbmc9ZnVuY3Rpb24oKXtpZihfKXJldHVybiBfLndhcm5pbmcuYXBwbHkoXyxhcmd1bWVudHMpO3ZhciB0PXMoYXJndW1lbnRzKTtvKHQpfSxuLnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NyZWF0ZUl0ZW0oYXJndW1lbnRzKSxlPXQudXVpZDtyZXR1cm4gdGhpcy5jbGllbnQuZXJyb3IodCkse3V1aWQ6ZX19LG4uZXJyb3I9ZnVuY3Rpb24oKXtpZihfKXJldHVybiBfLmVycm9yLmFwcGx5KF8sYXJndW1lbnRzKTt2YXIgdD1zKGFyZ3VtZW50cyk7byh0KX0sbi5wcm90b3R5cGUuY3JpdGljYWw9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jcmVhdGVJdGVtKGFyZ3VtZW50cyksZT10LnV1aWQ7cmV0dXJuIHRoaXMuY2xpZW50LmNyaXRpY2FsKHQpLHt1dWlkOmV9fSxuLmNyaXRpY2FsPWZ1bmN0aW9uKCl7aWYoXylyZXR1cm4gXy5jcml0aWNhbC5hcHBseShfLGFyZ3VtZW50cyk7dmFyIHQ9cyhhcmd1bWVudHMpO28odCl9LG4ucHJvdG90eXBlLmhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9uPWZ1bmN0aW9uKHQsZSxyLG4sbyxpKXt2YXIgYSxzPWMubWFrZVVuaGFuZGxlZFN0YWNrSW5mbyh0LGUscixuLG8sXCJvbmVycm9yXCIsXCJ1bmNhdWdodCBleGNlcHRpb25cIixiKTtjLmlzRXJyb3Iobyk/KGE9dGhpcy5fY3JlYXRlSXRlbShbdCxvLGldKSxhLl91bmhhbmRsZWRTdGFja0luZm89cyk6Yy5pc0Vycm9yKGUpPyhhPXRoaXMuX2NyZWF0ZUl0ZW0oW3QsZSxpXSksYS5fdW5oYW5kbGVkU3RhY2tJbmZvPXMpOihhPXRoaXMuX2NyZWF0ZUl0ZW0oW3QsaV0pLGEuc3RhY2tJbmZvPXMpLGEubGV2ZWw9dGhpcy5vcHRpb25zLnVuY2F1Z2h0RXJyb3JMZXZlbCxhLl9pc1VuY2F1Z2h0PSEwLHRoaXMuY2xpZW50LmxvZyhhKX0sbi5wcm90b3R5cGUuaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIHI9XCJ1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCFcIjtpZih0KWlmKHQubWVzc2FnZSlyPXQubWVzc2FnZTtlbHNle3ZhciBuPWMuc3RyaW5naWZ5KHQpO24udmFsdWUmJihyPW4udmFsdWUpfXZhciBvLGk9dCYmdC5fcm9sbGJhckNvbnRleHR8fGUmJmUuX3JvbGxiYXJDb250ZXh0O2MuaXNFcnJvcih0KT9vPXRoaXMuX2NyZWF0ZUl0ZW0oW3IsdCxpXSk6KG89dGhpcy5fY3JlYXRlSXRlbShbcix0LGldKSxvLnN0YWNrSW5mbz1jLm1ha2VVbmhhbmRsZWRTdGFja0luZm8ocixcIlwiLDAsMCxudWxsLFwidW5oYW5kbGVkcmVqZWN0aW9uXCIsXCJcIixiKSksby5sZXZlbD10aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLG8uX2lzVW5jYXVnaHQ9ITAsby5fb3JpZ2luYWxBcmdzPW8uX29yaWdpbmFsQXJnc3x8W10sby5fb3JpZ2luYWxBcmdzLnB1c2goZSksdGhpcy5jbGllbnQubG9nKG8pfSxuLnByb3RvdHlwZS53cmFwPWZ1bmN0aW9uKHQsZSxyKXt0cnl7dmFyIG47aWYobj1jLmlzRnVuY3Rpb24oZSk/ZTpmdW5jdGlvbigpe3JldHVybiBlfHx7fX0sIWMuaXNGdW5jdGlvbih0KSlyZXR1cm4gdDtpZih0Ll9pc1dyYXApcmV0dXJuIHQ7aWYoIXQuX3JvbGxiYXJfd3JhcHBlZCYmKHQuX3JvbGxiYXJfd3JhcHBlZD1mdW5jdGlvbigpe3ImJmMuaXNGdW5jdGlvbihyKSYmci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dHJ5e3JldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1jYXRjaChyKXt2YXIgZT1yO3Rocm93IGUmJndpbmRvdy5fcm9sbGJhcldyYXBwZWRFcnJvciE9PWUmJihjLmlzVHlwZShlLFwic3RyaW5nXCIpJiYoZT1uZXcgU3RyaW5nKGUpKSxlLl9yb2xsYmFyQ29udGV4dD1uKCl8fHt9LGUuX3JvbGxiYXJDb250ZXh0Ll93cmFwcGVkU291cmNlPXQudG9TdHJpbmcoKSx3aW5kb3cuX3JvbGxiYXJXcmFwcGVkRXJyb3I9ZSksZX19LHQuX3JvbGxiYXJfd3JhcHBlZC5faXNXcmFwPSEwLHQuaGFzT3duUHJvcGVydHkpKWZvcih2YXIgbyBpbiB0KXQuaGFzT3duUHJvcGVydHkobykmJlwiX3JvbGxiYXJfd3JhcHBlZFwiIT09byYmKHQuX3JvbGxiYXJfd3JhcHBlZFtvXT10W29dKTtyZXR1cm4gdC5fcm9sbGJhcl93cmFwcGVkfWNhdGNoKGUpe3JldHVybiB0fX0sbi53cmFwPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIF8/Xy53cmFwKHQsZSk6dm9pZCBvKCl9LG4ucHJvdG90eXBlLmNhcHR1cmVFdmVudD1mdW5jdGlvbigpe3ZhciB0PWMuY3JlYXRlVGVsZW1ldHJ5RXZlbnQoYXJndW1lbnRzKTtyZXR1cm4gdGhpcy5jbGllbnQuY2FwdHVyZUV2ZW50KHQudHlwZSx0Lm1ldGFkYXRhLHQubGV2ZWwpfSxuLmNhcHR1cmVFdmVudD1mdW5jdGlvbigpe3JldHVybiBfP18uY2FwdHVyZUV2ZW50LmFwcGx5KF8sYXJndW1lbnRzKTp2b2lkIG8oKX0sbi5wcm90b3R5cGUuY2FwdHVyZURvbUNvbnRlbnRMb2FkZWQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8KGU9bmV3IERhdGUpLHRoaXMuY2xpZW50LmNhcHR1cmVEb21Db250ZW50TG9hZGVkKGUpfSxuLnByb3RvdHlwZS5jYXB0dXJlTG9hZD1mdW5jdGlvbih0LGUpe3JldHVybiBlfHwoZT1uZXcgRGF0ZSksdGhpcy5jbGllbnQuY2FwdHVyZUxvYWQoZSl9LG4ucHJvdG90eXBlLl9jcmVhdGVJdGVtPWZ1bmN0aW9uKHQpe3JldHVybiBjLmNyZWF0ZUl0ZW0odCxwLHRoaXMpfTt2YXIgeD17dmVyc2lvbjpcIjIuNS41XCIsc2NydWJGaWVsZHM6W1wicHdcIixcInBhc3NcIixcInBhc3N3ZFwiLFwicGFzc3dvcmRcIixcInNlY3JldFwiLFwiY29uZmlybV9wYXNzd29yZFwiLFwiY29uZmlybVBhc3N3b3JkXCIsXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcInBhc3N3b3JkQ29uZmlybWF0aW9uXCIsXCJhY2Nlc3NfdG9rZW5cIixcImFjY2Vzc1Rva2VuXCIsXCJzZWNyZXRfa2V5XCIsXCJzZWNyZXRLZXlcIixcInNlY3JldFRva2VuXCIsXCJjYy1udW1iZXJcIixcImNhcmQgbnVtYmVyXCIsXCJjYXJkbnVtYmVyXCIsXCJjYXJkbnVtXCIsXCJjY251bVwiLFwiY2NudW1iZXJcIixcImNjIG51bVwiLFwiY3JlZGl0Y2FyZG51bWJlclwiLFwiY3JlZGl0IGNhcmQgbnVtYmVyXCIsXCJuZXdjcmVkaXRjYXJkbnVtYmVyXCIsXCJuZXcgY3JlZGl0IGNhcmRcIixcImNyZWRpdGNhcmRub1wiLFwiY3JlZGl0IGNhcmQgbm9cIixcImNhcmQjXCIsXCJjYXJkICNcIixcImNjLWNzY1wiLFwiY3ZjMlwiLFwiY3Z2MlwiLFwiY2N2MlwiLFwic2VjdXJpdHkgY29kZVwiLFwiY2FyZCB2ZXJpZmljYXRpb25cIixcIm5hbWUgb24gY3JlZGl0IGNhcmRcIixcIm5hbWUgb24gY2FyZFwiLFwibmFtZW9uY2FyZFwiLFwiY2FyZGhvbGRlclwiLFwiY2FyZCBob2xkZXJcIixcIm5hbWUgZGVzIGthcnRlbmluaGFiZXJzXCIsXCJjYXJkIHR5cGVcIixcImNhcmR0eXBlXCIsXCJjYyB0eXBlXCIsXCJjY3R5cGVcIixcInBheW1lbnQgdHlwZVwiLFwiZXhwaXJhdGlvbiBkYXRlXCIsXCJleHBpcmF0aW9uZGF0ZVwiLFwiZXhwZGF0ZVwiLFwiY2MtZXhwXCJdLGxvZ0xldmVsOlwiZGVidWdcIixyZXBvcnRMZXZlbDpcImRlYnVnXCIsdW5jYXVnaHRFcnJvckxldmVsOlwiZXJyb3JcIixlbmRwb2ludDpcImFwaS5yb2xsYmFyLmNvbS9hcGkvMS9pdGVtL1wiLHZlcmJvc2U6ITEsZW5hYmxlZDohMCxzZW5kQ29uZmlnOiExLGluY2x1ZGVJdGVtc0luVGVsZW1ldHJ5OiEwLGNhcHR1cmVJcDohMH07dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSxyLG8pe3RoaXMub3B0aW9ucz1jLm1lcmdlKHQpLHRoaXMubG9nZ2VyPXIsbi5yYXRlTGltaXRlci5jb25maWd1cmVHbG9iYWwodGhpcy5vcHRpb25zKSxuLnJhdGVMaW1pdGVyLnNldFBsYXRmb3JtT3B0aW9ucyhvLHRoaXMub3B0aW9ucyksdGhpcy5xdWV1ZT1uZXcgYShuLnJhdGVMaW1pdGVyLGUscix0aGlzLm9wdGlvbnMpLHRoaXMubm90aWZpZXI9bmV3IHModGhpcy5xdWV1ZSx0aGlzLm9wdGlvbnMpLHRoaXMudGVsZW1ldGVyPW5ldyB1KHRoaXMub3B0aW9ucyksdGhpcy5sYXN0RXJyb3I9bnVsbCx0aGlzLmxhc3RFcnJvckhhc2g9XCJub25lXCJ9ZnVuY3Rpb24gbyh0KXt2YXIgZT10Lm1lc3NhZ2V8fFwiXCIscj0odC5lcnJ8fHt9KS5zdGFja3x8U3RyaW5nKHQuZXJyKTtyZXR1cm4gZStcIjo6XCIrcn12YXIgaT1yKDQpLGE9cig4KSxzPXIoOSksdT1yKDEwKSxjPXIoNSksbD17bWF4SXRlbXM6MCxpdGVtc1Blck1pbnV0ZTo2MH07bi5yYXRlTGltaXRlcj1uZXcgaShsKSxuLnByb3RvdHlwZS5nbG9iYWw9ZnVuY3Rpb24odCl7cmV0dXJuIG4ucmF0ZUxpbWl0ZXIuY29uZmlndXJlR2xvYmFsKHQpLHRoaXN9LG4ucHJvdG90eXBlLmNvbmZpZ3VyZT1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMub3B0aW9ucyxuPXt9O3JldHVybiBlJiYobj17cGF5bG9hZDplfSksdGhpcy5vcHRpb25zPWMubWVyZ2Uocix0LG4pLHRoaXMubm90aWZpZXImJnRoaXMubm90aWZpZXIuY29uZmlndXJlKHRoaXMub3B0aW9ucyksdGhpcy50ZWxlbWV0ZXImJnRoaXMudGVsZW1ldGVyLmNvbmZpZ3VyZSh0aGlzLm9wdGlvbnMpLHRoaXMuZ2xvYmFsKHRoaXMub3B0aW9ucyksdGhpc30sbi5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2RlZmF1bHRMb2dMZXZlbCgpO3JldHVybiB0aGlzLl9sb2coZSx0KX0sbi5wcm90b3R5cGUuZGVidWc9ZnVuY3Rpb24odCl7dGhpcy5fbG9nKFwiZGVidWdcIix0KX0sbi5wcm90b3R5cGUuaW5mbz1mdW5jdGlvbih0KXt0aGlzLl9sb2coXCJpbmZvXCIsdCl9LG4ucHJvdG90eXBlLndhcm49ZnVuY3Rpb24odCl7dGhpcy5fbG9nKFwid2FybmluZ1wiLHQpfSxuLnByb3RvdHlwZS53YXJuaW5nPWZ1bmN0aW9uKHQpe3RoaXMuX2xvZyhcIndhcm5pbmdcIix0KX0sbi5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24odCl7dGhpcy5fbG9nKFwiZXJyb3JcIix0KX0sbi5wcm90b3R5cGUuY3JpdGljYWw9ZnVuY3Rpb24odCl7dGhpcy5fbG9nKFwiY3JpdGljYWxcIix0KX0sbi5wcm90b3R5cGUud2FpdD1mdW5jdGlvbih0KXt0aGlzLnF1ZXVlLndhaXQodCl9LG4ucHJvdG90eXBlLmNhcHR1cmVFdmVudD1mdW5jdGlvbih0LGUscil7cmV0dXJuIHRoaXMudGVsZW1ldGVyLmNhcHR1cmVFdmVudCh0LGUscil9LG4ucHJvdG90eXBlLmNhcHR1cmVEb21Db250ZW50TG9hZGVkPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRlbGVtZXRlci5jYXB0dXJlRG9tQ29udGVudExvYWRlZCh0KX0sbi5wcm90b3R5cGUuY2FwdHVyZUxvYWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGVsZW1ldGVyLmNhcHR1cmVMb2FkKHQpfSxuLnByb3RvdHlwZS5fbG9nPWZ1bmN0aW9uKHQsZSl7dmFyIHI7aWYoZS5jYWxsYmFjayYmKHI9ZS5jYWxsYmFjayxkZWxldGUgZS5jYWxsYmFjayksdGhpcy5fc2FtZUFzTGFzdEVycm9yKGUpKXtpZihyKXt2YXIgbj1uZXcgRXJyb3IoXCJpZ25vcmVkIGlkZW50aWNhbCBpdGVtXCIpO24uaXRlbT1lLHIobil9fWVsc2UgdHJ5e2UubGV2ZWw9ZS5sZXZlbHx8dCx0aGlzLnRlbGVtZXRlci5fY2FwdHVyZVJvbGxiYXJJdGVtKGUpLGUudGVsZW1ldHJ5RXZlbnRzPXRoaXMudGVsZW1ldGVyLmNvcHlFdmVudHMoKSx0aGlzLm5vdGlmaWVyLmxvZyhlLHIpfWNhdGNoKHQpe3RoaXMubG9nZ2VyLmVycm9yKHQpfX0sbi5wcm90b3R5cGUuX2RlZmF1bHRMb2dMZXZlbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubG9nTGV2ZWx8fFwiZGVidWdcIn0sbi5wcm90b3R5cGUuX3NhbWVBc0xhc3RFcnJvcj1mdW5jdGlvbih0KXtpZighdC5faXNVbmNhdWdodClyZXR1cm4hMTt2YXIgZT1vKHQpO3JldHVybiB0aGlzLmxhc3RFcnJvckhhc2g9PT1lfHwodGhpcy5sYXN0RXJyb3I9dC5lcnIsdGhpcy5sYXN0RXJyb3JIYXNoPWUsITEpfSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7dGhpcy5zdGFydFRpbWU9cy5ub3coKSx0aGlzLmNvdW50ZXI9MCx0aGlzLnBlck1pbkNvdW50ZXI9MCx0aGlzLnBsYXRmb3JtPW51bGwsdGhpcy5wbGF0Zm9ybU9wdGlvbnM9e30sdGhpcy5jb25maWd1cmVHbG9iYWwodCl9ZnVuY3Rpb24gbyh0LGUscil7cmV0dXJuIXQuaWdub3JlUmF0ZUxpbWl0JiZlPj0xJiZyPmV9ZnVuY3Rpb24gaSh0LGUscixuLG8saSxzKXt2YXIgdT1udWxsO3JldHVybiByJiYocj1uZXcgRXJyb3IocikpLHJ8fG58fCh1PWEodCxlLG8saSxzKSkse2Vycm9yOnIsc2hvdWxkU2VuZDpuLHBheWxvYWQ6dX19ZnVuY3Rpb24gYSh0LGUscixuLG8pe3ZhciBpLGE9ZS5lbnZpcm9ubWVudHx8ZS5wYXlsb2FkJiZlLnBheWxvYWQuZW52aXJvbm1lbnQ7aT1vP1wiaXRlbSBwZXIgbWludXRlIGxpbWl0IHJlYWNoZWQsIGlnbm9yaW5nIGVycm9ycyB1bnRpbCB0aW1lb3V0XCI6XCJtYXhJdGVtcyBoYXMgYmVlbiBoaXQsIGlnbm9yaW5nIGVycm9ycyB1bnRpbCByZXNldC5cIjt2YXIgcz17Ym9keTp7bWVzc2FnZTp7Ym9keTppLGV4dHJhOnttYXhJdGVtczpyLGl0ZW1zUGVyTWludXRlOm59fX0sbGFuZ3VhZ2U6XCJqYXZhc2NyaXB0XCIsZW52aXJvbm1lbnQ6YSxub3RpZmllcjp7dmVyc2lvbjplLm5vdGlmaWVyJiZlLm5vdGlmaWVyLnZlcnNpb258fGUudmVyc2lvbn19O3JldHVyblwiYnJvd3NlclwiPT09dD8ocy5wbGF0Zm9ybT1cImJyb3dzZXJcIixzLmZyYW1ld29yaz1cImJyb3dzZXItanNcIixzLm5vdGlmaWVyLm5hbWU9XCJyb2xsYmFyLWJyb3dzZXItanNcIik6XCJzZXJ2ZXJcIj09PXQ/KHMuZnJhbWV3b3JrPWUuZnJhbWV3b3JrfHxcIm5vZGUtanNcIixzLm5vdGlmaWVyLm5hbWU9ZS5ub3RpZmllci5uYW1lKTpcInJlYWN0LW5hdGl2ZVwiPT09dCYmKHMuZnJhbWV3b3JrPWUuZnJhbWV3b3JrfHxcInJlYWN0LW5hdGl2ZVwiLHMubm90aWZpZXIubmFtZT1lLm5vdGlmaWVyLm5hbWUpLHN9dmFyIHM9cig1KTtuLmdsb2JhbFNldHRpbmdzPXtzdGFydFRpbWU6cy5ub3coKSxtYXhJdGVtczp2b2lkIDAsaXRlbXNQZXJNaW51dGU6dm9pZCAwfSxuLnByb3RvdHlwZS5jb25maWd1cmVHbG9iYWw9ZnVuY3Rpb24odCl7dm9pZCAwIT09dC5zdGFydFRpbWUmJihuLmdsb2JhbFNldHRpbmdzLnN0YXJ0VGltZT10LnN0YXJ0VGltZSksdm9pZCAwIT09dC5tYXhJdGVtcyYmKG4uZ2xvYmFsU2V0dGluZ3MubWF4SXRlbXM9dC5tYXhJdGVtcyksdm9pZCAwIT09dC5pdGVtc1Blck1pbnV0ZSYmKG4uZ2xvYmFsU2V0dGluZ3MuaXRlbXNQZXJNaW51dGU9dC5pdGVtc1Blck1pbnV0ZSl9LG4ucHJvdG90eXBlLnNob3VsZFNlbmQ9ZnVuY3Rpb24odCxlKXtlPWV8fHMubm93KCk7dmFyIHI9ZS10aGlzLnN0YXJ0VGltZTsocjwwfHxyPj02ZTQpJiYodGhpcy5zdGFydFRpbWU9ZSx0aGlzLnBlck1pbkNvdW50ZXI9MCk7dmFyIGE9bi5nbG9iYWxTZXR0aW5ncy5tYXhJdGVtcyx1PW4uZ2xvYmFsU2V0dGluZ3MuaXRlbXNQZXJNaW51dGU7aWYobyh0LGEsdGhpcy5jb3VudGVyKSlyZXR1cm4gaSh0aGlzLnBsYXRmb3JtLHRoaXMucGxhdGZvcm1PcHRpb25zLGErXCIgbWF4IGl0ZW1zIHJlYWNoZWRcIiwhMSk7aWYobyh0LHUsdGhpcy5wZXJNaW5Db3VudGVyKSlyZXR1cm4gaSh0aGlzLnBsYXRmb3JtLHRoaXMucGxhdGZvcm1PcHRpb25zLHUrXCIgaXRlbXMgcGVyIG1pbnV0ZSByZWFjaGVkXCIsITEpO3RoaXMuY291bnRlcisrLHRoaXMucGVyTWluQ291bnRlcisrO3ZhciBjPSFvKHQsYSx0aGlzLmNvdW50ZXIpLGw9YztyZXR1cm4gYz1jJiYhbyh0LHUsdGhpcy5wZXJNaW5Db3VudGVyKSxpKHRoaXMucGxhdGZvcm0sdGhpcy5wbGF0Zm9ybU9wdGlvbnMsbnVsbCxjLGEsdSxsKX0sbi5wcm90b3R5cGUuc2V0UGxhdGZvcm1PcHRpb25zPWZ1bmN0aW9uKHQsZSl7dGhpcy5wbGF0Zm9ybT10LHRoaXMucGxhdGZvcm1PcHRpb25zPWV9LHQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe2lmKCFQJiYoUD0hMCxjKEpTT04pJiYocyhKU09OLnN0cmluZ2lmeSkmJihxLnN0cmluZ2lmeT1KU09OLnN0cmluZ2lmeSkscyhKU09OLnBhcnNlKSYmKHEucGFyc2U9SlNPTi5wYXJzZSkpLCFhKHEuc3RyaW5naWZ5KXx8IWEocS5wYXJzZSkpKXt2YXIgdD1yKDcpO3QocSl9fWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gZT09PWkodCl9ZnVuY3Rpb24gaSh0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm5cIm9iamVjdFwiIT09ZT9lOnQ/dCBpbnN0YW5jZW9mIEVycm9yP1wiZXJyb3JcIjp7fS50b1N0cmluZy5jYWxsKHQpLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKCk6XCJudWxsXCJ9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gbyh0LFwiZnVuY3Rpb25cIil9ZnVuY3Rpb24gcyh0KXt2YXIgZT0vW1xcXFxeJC4qKz8oKVtcXF17fXxdL2cscj1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KS5yZXBsYWNlKGUsXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpLG49UmVnRXhwKFwiXlwiK3IrXCIkXCIpO3JldHVybiB1KHQpJiZuLnRlc3QodCl9ZnVuY3Rpb24gdSh0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm4gbnVsbCE9dCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gYyh0KXtyZXR1cm4hbyh0LFwidW5kZWZpbmVkXCIpfWZ1bmN0aW9uIGwodCl7dmFyIGU9aSh0KTtyZXR1cm5cIm9iamVjdFwiPT09ZXx8XCJhcnJheVwiPT09ZX1mdW5jdGlvbiBwKHQpe3JldHVybiBvKHQsXCJlcnJvclwiKXx8byh0LFwiZXhjZXB0aW9uXCIpfWZ1bmN0aW9uIGYodCxlLHIpe3ZhciBuLGksYSxzPW8odCxcIm9iamVjdFwiKSx1PW8odCxcImFycmF5XCIpLGM9W107aWYocyYmci5pbmRleE9mKHQpIT09LTEpcmV0dXJuIHQ7aWYoci5wdXNoKHQpLHMpZm9yKG4gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmYy5wdXNoKG4pO2Vsc2UgaWYodSlmb3IoYT0wO2E8dC5sZW5ndGg7KythKWMucHVzaChhKTt2YXIgbD1zP3t9OltdLHA9ITA7Zm9yKGE9MDthPGMubGVuZ3RoOysrYSluPWNbYV0saT10W25dLGxbbl09ZShuLGkscikscD1wJiZsW25dPT09dFtuXTtyZXR1cm4gMD09Yy5sZW5ndGh8fHA/dDpsfWZ1bmN0aW9uIGgoKXtyZXR1cm5cIioqKioqKioqXCJ9ZnVuY3Rpb24gZCgpe3ZhciB0PWooKSxlPVwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLGZ1bmN0aW9uKGUpe3ZhciByPSh0KzE2Kk1hdGgucmFuZG9tKCkpJTE2fDA7cmV0dXJuIHQ9TWF0aC5mbG9vcih0LzE2KSwoXCJ4XCI9PT1lP3I6NyZyfDgpLnRvU3RyaW5nKDE2KX0pO3JldHVybiBlfWZ1bmN0aW9uIG0odCl7dmFyIGU9Zyh0KTtyZXR1cm4gZT8oXCJcIj09PWUuYW5jaG9yJiYoZS5zb3VyY2U9ZS5zb3VyY2UucmVwbGFjZShcIiNcIixcIlwiKSksdD1lLnNvdXJjZS5yZXBsYWNlKFwiP1wiK2UucXVlcnksXCJcIikpOlwiKHVua25vd24pXCJ9ZnVuY3Rpb24gZyh0KXtpZihvKHQsXCJzdHJpbmdcIikpe2Zvcih2YXIgZT1NLHI9ZS5wYXJzZXJbZS5zdHJpY3RNb2RlP1wic3RyaWN0XCI6XCJsb29zZVwiXS5leGVjKHQpLG49e30saT0wLGE9ZS5rZXkubGVuZ3RoO2k8YTsrK2kpbltlLmtleVtpXV09cltpXXx8XCJcIjtyZXR1cm4gbltlLnEubmFtZV09e30sbltlLmtleVsxMl1dLnJlcGxhY2UoZS5xLnBhcnNlcixmdW5jdGlvbih0LHIsbyl7ciYmKG5bZS5xLm5hbWVdW3JdPW8pfSksbn19ZnVuY3Rpb24gdih0LGUscil7cj1yfHx7fSxyLmFjY2Vzc190b2tlbj10O3ZhciBuLG89W107Zm9yKG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmby5wdXNoKFtuLHJbbl1dLmpvaW4oXCI9XCIpKTt2YXIgaT1cIj9cIitvLnNvcnQoKS5qb2luKFwiJlwiKTtlPWV8fHt9LGUucGF0aD1lLnBhdGh8fFwiXCI7dmFyIGEscz1lLnBhdGguaW5kZXhPZihcIj9cIiksdT1lLnBhdGguaW5kZXhPZihcIiNcIik7cyE9PS0xJiYodT09PS0xfHx1PnMpPyhhPWUucGF0aCxlLnBhdGg9YS5zdWJzdHJpbmcoMCxzKStpK1wiJlwiK2Euc3Vic3RyaW5nKHMrMSkpOnUhPT0tMT8oYT1lLnBhdGgsZS5wYXRoPWEuc3Vic3RyaW5nKDAsdSkraSthLnN1YnN0cmluZyh1KSk6ZS5wYXRoPWUucGF0aCtpfWZ1bmN0aW9uIHkodCxlKXtpZihlPWV8fHQucHJvdG9jb2wsIWUmJnQucG9ydCYmKDgwPT09dC5wb3J0P2U9XCJodHRwOlwiOjQ0Mz09PXQucG9ydCYmKGU9XCJodHRwczpcIikpLGU9ZXx8XCJodHRwczpcIiwhdC5ob3N0bmFtZSlyZXR1cm4gbnVsbDt2YXIgcj1lK1wiLy9cIit0Lmhvc3RuYW1lO3JldHVybiB0LnBvcnQmJihyPXIrXCI6XCIrdC5wb3J0KSx0LnBhdGgmJihyKz10LnBhdGgpLHJ9ZnVuY3Rpb24gYih0LGUpe3ZhciByLG47dHJ5e3I9cS5zdHJpbmdpZnkodCl9Y2F0Y2gobyl7aWYoZSYmYShlKSl0cnl7cj1lKHQpfWNhdGNoKHQpe249dH1lbHNlIG49b31yZXR1cm57ZXJyb3I6bix2YWx1ZTpyfX1mdW5jdGlvbiB3KHQpe3ZhciBlLHI7dHJ5e2U9cS5wYXJzZSh0KX1jYXRjaCh0KXtyPXR9cmV0dXJue2Vycm9yOnIsdmFsdWU6ZX19ZnVuY3Rpb24gXyh0LGUscixuLG8saSxhLHMpe3ZhciB1PXt1cmw6ZXx8XCJcIixsaW5lOnIsY29sdW1uOm59O3UuZnVuYz1zLmd1ZXNzRnVuY3Rpb25OYW1lKHUudXJsLHUubGluZSksdS5jb250ZXh0PXMuZ2F0aGVyQ29udGV4dCh1LnVybCx1LmxpbmUpO3ZhciBjPWRvY3VtZW50JiZkb2N1bWVudC5sb2NhdGlvbiYmZG9jdW1lbnQubG9jYXRpb24uaHJlZixsPXdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7cmV0dXJue21vZGU6aSxtZXNzYWdlOm8/U3RyaW5nKG8pOnR8fGEsdXJsOmMsc3RhY2s6W3VdLHVzZXJhZ2VudDpsfX1mdW5jdGlvbiB4KHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7dHJ5e2UocixuKX1jYXRjaChlKXt0LmVycm9yKGUpfX19ZnVuY3Rpb24gayh0LGUscixuLG8pe2Zvcih2YXIgYSxzLHUsYyxsLHAsZj1bXSxoPTAsbT10Lmxlbmd0aDtoPG07KytoKXtwPXRbaF07dmFyIGc9aShwKTtzd2l0Y2goZyl7Y2FzZVwidW5kZWZpbmVkXCI6YnJlYWs7Y2FzZVwic3RyaW5nXCI6YT9mLnB1c2gocCk6YT1wO2JyZWFrO2Nhc2VcImZ1bmN0aW9uXCI6Yz14KGUscCk7YnJlYWs7Y2FzZVwiZGF0ZVwiOmYucHVzaChwKTticmVhaztjYXNlXCJlcnJvclwiOmNhc2VcImRvbWV4Y2VwdGlvblwiOmNhc2VcImV4Y2VwdGlvblwiOnM/Zi5wdXNoKHApOnM9cDticmVhaztjYXNlXCJvYmplY3RcIjpjYXNlXCJhcnJheVwiOmlmKHAgaW5zdGFuY2VvZiBFcnJvcnx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIERPTUV4Y2VwdGlvbiYmcCBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbil7cz9mLnB1c2gocCk6cz1wO2JyZWFrfWlmKG4mJlwib2JqZWN0XCI9PT1nJiYhbCl7Zm9yKHZhciB2PTAseT1uLmxlbmd0aDt2PHk7Kyt2KWlmKHZvaWQgMCE9PXBbblt2XV0pe2w9cDticmVha31pZihsKWJyZWFrfXU/Zi5wdXNoKHApOnU9cDticmVhaztkZWZhdWx0OmlmKHAgaW5zdGFuY2VvZiBFcnJvcnx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIERPTUV4Y2VwdGlvbiYmcCBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbil7cz9mLnB1c2gocCk6cz1wO2JyZWFrfWYucHVzaChwKX19Zi5sZW5ndGg+MCYmKHU9Rih1KSx1LmV4dHJhQXJncz1mKTt2YXIgYj17bWVzc2FnZTphLGVycjpzLGN1c3RvbTp1LHRpbWVzdGFtcDpqKCksY2FsbGJhY2s6Yyx1dWlkOmQoKX07cmV0dXJuIHUmJnZvaWQgMCE9PXUubGV2ZWwmJihiLmxldmVsPXUubGV2ZWwsZGVsZXRlIHUubGV2ZWwpLG4mJmwmJihiLnJlcXVlc3Q9bCksbyYmKGIubGFtYmRhQ29udGV4dD1vKSxiLl9vcmlnaW5hbEFyZ3M9dCxifWZ1bmN0aW9uIEUodCxlKXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcilpZih0W3JdPT09ZSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBJKHQpe2Zvcih2YXIgZSxyLG4sbyxhPTAscz10Lmxlbmd0aDthPHM7KythKXtvPXRbYV07dmFyIHU9aShvKTtzd2l0Y2godSl7Y2FzZVwic3RyaW5nXCI6RShVLG8pP2U9bzpFKEgsbykmJihuPW8pO2JyZWFrO2Nhc2VcIm9iamVjdFwiOnI9b319dmFyIGM9e3R5cGU6ZXx8XCJtYW51YWxcIixtZXRhZGF0YTpyfHx7fSxsZXZlbDpufTtyZXR1cm4gY31mdW5jdGlvbiBUKHQsZSl7aWYodCl7dmFyIHI9ZS5zcGxpdChcIi5cIiksbj10O3RyeXtmb3IodmFyIG89MCxpPXIubGVuZ3RoO288aTsrK28pbj1uW3Jbb11dfWNhdGNoKHQpe249dm9pZCAwfXJldHVybiBufX1mdW5jdGlvbiBTKHQsZSxyKXtpZih0KXt2YXIgbj1lLnNwbGl0KFwiLlwiKSxvPW4ubGVuZ3RoO2lmKCEobzwxKSl7aWYoMT09PW8pcmV0dXJuIHZvaWQodFtuWzBdXT1yKTt0cnl7Zm9yKHZhciBpPXRbblswXV18fHt9LGE9aSxzPTE7czxvLTE7KytzKWlbbltzXV09aVtuW3NdXXx8e30saT1pW25bc11dO2lbbltvLTFdXT1yLHRbblswXV09YX1jYXRjaCh0KXtyZXR1cm59fX19ZnVuY3Rpb24gTyh0LGUpe2Z1bmN0aW9uIHIodCxlKXtyZXR1cm4gZStoKCl9ZnVuY3Rpb24gbih0KXt2YXIgZTtpZihvKHQsXCJzdHJpbmdcIikpZm9yKGU9MDtlPHUubGVuZ3RoOysrZSl0PXQucmVwbGFjZSh1W2VdLHIpO3JldHVybiB0fWZ1bmN0aW9uIGkodCxlKXt2YXIgcjtmb3Iocj0wO3I8cy5sZW5ndGg7KytyKWlmKHNbcl0udGVzdCh0KSl7ZT1oKCk7YnJlYWt9cmV0dXJuIGV9ZnVuY3Rpb24gYSh0LGUscil7dmFyIHM9aSh0LGUpO3JldHVybiBzPT09ZT9vKGUsXCJvYmplY3RcIil8fG8oZSxcImFycmF5XCIpP2YoZSxhLHIpOm4ocyk6c31lPWV8fFtdO3ZhciBzPUwoZSksdT1OKGUpO3JldHVybiBmKHQsYSxbXSl9ZnVuY3Rpb24gTCh0KXtmb3IodmFyIGUscj1bXSxuPTA7bjx0Lmxlbmd0aDsrK24pZT1cIl5cXFxcWz8oJTVbYkJdKT9cIit0W25dK1wiXFxcXFs/KCU1W2JCXSk/XFxcXF0/KCU1W2REXSk/JFwiLHIucHVzaChuZXcgUmVnRXhwKGUsXCJpXCIpKTtyZXR1cm4gcn1mdW5jdGlvbiBOKHQpe2Zvcih2YXIgZSxyPVtdLG49MDtuPHQubGVuZ3RoOysrbillPVwiXFxcXFs/KCU1W2JCXSk/XCIrdFtuXStcIlxcXFxbPyglNVtiQl0pP1xcXFxdPyglNVtkRF0pP1wiLHIucHVzaChuZXcgUmVnRXhwKFwiKFwiK2UrXCI9KShbXiZcXFxcbl0rKVwiLFwiaWdtXCIpKTtyZXR1cm4gcn1mdW5jdGlvbiBDKHQpe3ZhciBlLHIsbixvPVtdO2ZvcihlPTAscj10Lmxlbmd0aDtlPHI7KytlKXtzd2l0Y2gobj10W2VdLGkobikpe2Nhc2VcIm9iamVjdFwiOm49YihuKSxuPW4uZXJyb3J8fG4udmFsdWUsbi5sZW5ndGg+NTAwJiYobj1uLnN1YnN0cigwLDQ5NykrXCIuLi5cIik7YnJlYWs7Y2FzZVwibnVsbFwiOm49XCJudWxsXCI7YnJlYWs7Y2FzZVwidW5kZWZpbmVkXCI6bj1cInVuZGVmaW5lZFwiO2JyZWFrO2Nhc2VcInN5bWJvbFwiOm49bi50b1N0cmluZygpfW8ucHVzaChuKX1yZXR1cm4gby5qb2luKFwiIFwiKX1mdW5jdGlvbiBqKCl7cmV0dXJuIERhdGUubm93PytEYXRlLm5vdygpOituZXcgRGF0ZX1mdW5jdGlvbiBSKHQsZSl7aWYodCYmdC51c2VyX2lwJiZlIT09ITApe3ZhciByPXQudXNlcl9pcDtpZihlKXRyeXt2YXIgbjtpZihyLmluZGV4T2YoXCIuXCIpIT09LTEpbj1yLnNwbGl0KFwiLlwiKSxuLnBvcCgpLG4ucHVzaChcIjBcIikscj1uLmpvaW4oXCIuXCIpO2Vsc2UgaWYoci5pbmRleE9mKFwiOlwiKSE9PS0xKXtpZihuPXIuc3BsaXQoXCI6XCIpLG4ubGVuZ3RoPjIpe3ZhciBvPW4uc2xpY2UoMCwzKSxpPW9bMl0uaW5kZXhPZihcIi9cIik7aSE9PS0xJiYob1syXT1vWzJdLnN1YnN0cmluZygwLGkpKTt2YXIgYT1cIjAwMDA6MDAwMDowMDAwOjAwMDA6MDAwMFwiO3I9by5jb25jYXQoYSkuam9pbihcIjpcIil9fWVsc2Ugcj1udWxsfWNhdGNoKHQpe3I9bnVsbH1lbHNlIHI9bnVsbDt0LnVzZXJfaXA9cn19ZnVuY3Rpb24gQSh0LGUscil7dmFyIG49Rih0LGUscik7cmV0dXJuIWV8fGUub3ZlcndyaXRlU2NydWJGaWVsZHM/bjooZS5zY3J1YkZpZWxkcyYmKG4uc2NydWJGaWVsZHM9KHQuc2NydWJGaWVsZHN8fFtdKS5jb25jYXQoZS5zY3J1YkZpZWxkcykpLG4pfXZhciBGPXIoNikscT17fSxQPSExO24oKTt2YXIgRD17ZGVidWc6MCxpbmZvOjEsd2FybmluZzoyLGVycm9yOjMsY3JpdGljYWw6NH0sTT17c3RyaWN0TW9kZTohMSxrZXk6W1wic291cmNlXCIsXCJwcm90b2NvbFwiLFwiYXV0aG9yaXR5XCIsXCJ1c2VySW5mb1wiLFwidXNlclwiLFwicGFzc3dvcmRcIixcImhvc3RcIixcInBvcnRcIixcInJlbGF0aXZlXCIsXCJwYXRoXCIsXCJkaXJlY3RvcnlcIixcImZpbGVcIixcInF1ZXJ5XCIsXCJhbmNob3JcIl0scTp7bmFtZTpcInF1ZXJ5S2V5XCIscGFyc2VyOi8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZ30scGFyc2VyOntzdHJpY3Q6L14oPzooW146XFwvPyNdKyk6KT8oPzpcXC9cXC8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPyhbXjpcXC8/I10qKSg/OjooXFxkKikpPykpPygoKCg/OltePyNcXC9dKlxcLykqKShbXj8jXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLyxsb29zZTovXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS99fSxVPVtcImxvZ1wiLFwibmV0d29ya1wiLFwiZG9tXCIsXCJuYXZpZ2F0aW9uXCIsXCJlcnJvclwiLFwibWFudWFsXCJdLEg9W1wiY3JpdGljYWxcIixcImVycm9yXCIsXCJ3YXJuaW5nXCIsXCJpbmZvXCIsXCJkZWJ1Z1wiXTt0LmV4cG9ydHM9e2FkZFBhcmFtc0FuZEFjY2Vzc1Rva2VuVG9QYXRoOnYsY3JlYXRlSXRlbTprLGNyZWF0ZVRlbGVtZXRyeUV2ZW50OkksZmlsdGVySXA6Uixmb3JtYXRBcmdzQXNTdHJpbmc6Qyxmb3JtYXRVcmw6eSxnZXQ6VCxoYW5kbGVPcHRpb25zOkEsaXNFcnJvcjpwLGlzRnVuY3Rpb246YSxpc0l0ZXJhYmxlOmwsaXNOYXRpdmVGdW5jdGlvbjpzLGlzVHlwZTpvLGpzb25QYXJzZTp3LExFVkVMUzpELG1ha2VVbmhhbmRsZWRTdGFja0luZm86XyxtZXJnZTpGLG5vdzpqLHJlZGFjdDpoLHNhbml0aXplVXJsOm0sc2NydWI6TyxzZXQ6UyxzdHJpbmdpZnk6Yix0cmF2ZXJzZTpmLHR5cGVOYW1lOmksdXVpZDQ6ZH19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0LGUsbixvLGEscz17fSx1PW51bGwsYz1hcmd1bWVudHMubGVuZ3RoO2Zvcih0PTA7dDxjO3QrKylpZih1PWFyZ3VtZW50c1t0XSxudWxsIT11KWZvcihhIGluIHUpZT1zW2FdLG49dVthXSxzIT09biYmKG4mJmkobik/KG89ZSYmaShlKT9lOnt9LHNbYV09cihvLG4pKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmKHNbYV09bikpO3JldHVybiBzfXZhciBuPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksbz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGk9ZnVuY3Rpb24odCl7aWYoIXR8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwodCkpcmV0dXJuITE7dmFyIGU9bi5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSxyPXQuY29uc3RydWN0b3ImJnQuY29uc3RydWN0b3IucHJvdG90eXBlJiZuLmNhbGwodC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpO2lmKHQuY29uc3RydWN0b3ImJiFlJiYhcilyZXR1cm4hMTt2YXIgaTtmb3IoaSBpbiB0KTtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgaXx8bi5jYWxsKHQsaSl9O3QuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe3ZhciByPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHQ8MTA/XCIwXCIrdDp0fWZ1bmN0aW9uIHIoKXtyZXR1cm4gdGhpcy52YWx1ZU9mKCl9ZnVuY3Rpb24gbih0KXtyZXR1cm4gaS5sYXN0SW5kZXg9MCxpLnRlc3QodCk/J1wiJyt0LnJlcGxhY2UoaSxmdW5jdGlvbih0KXt2YXIgZT11W3RdO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2U6XCJcXFxcdVwiKyhcIjAwMDBcIit0LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCl9KSsnXCInOidcIicrdCsnXCInfWZ1bmN0aW9uIG8odCxlKXt2YXIgcixpLHUsbCxwLGY9YSxoPWVbdF07c3dpdGNoKGgmJlwib2JqZWN0XCI9PXR5cGVvZiBoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBoLnRvSlNPTiYmKGg9aC50b0pTT04odCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJihoPWMuY2FsbChlLHQsaCkpLHR5cGVvZiBoKXtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gbihoKTtjYXNlXCJudW1iZXJcIjpyZXR1cm4gaXNGaW5pdGUoaCk/U3RyaW5nKGgpOlwibnVsbFwiO2Nhc2VcImJvb2xlYW5cIjpjYXNlXCJudWxsXCI6cmV0dXJuIFN0cmluZyhoKTtjYXNlXCJvYmplY3RcIjppZighaClyZXR1cm5cIm51bGxcIjtpZihhKz1zLHA9W10sXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShoKSl7Zm9yKGw9aC5sZW5ndGgscj0wO3I8bDtyKz0xKXBbcl09byhyLGgpfHxcIm51bGxcIjtyZXR1cm4gdT0wPT09cC5sZW5ndGg/XCJbXVwiOmE/XCJbXFxuXCIrYStwLmpvaW4oXCIsXFxuXCIrYSkrXCJcXG5cIitmK1wiXVwiOlwiW1wiK3Auam9pbihcIixcIikrXCJdXCIsYT1mLHV9aWYoYyYmXCJvYmplY3RcIj09dHlwZW9mIGMpZm9yKGw9Yy5sZW5ndGgscj0wO3I8bDtyKz0xKVwic3RyaW5nXCI9PXR5cGVvZiBjW3JdJiYoaT1jW3JdLHU9byhpLGgpLHUmJnAucHVzaChuKGkpKyhhP1wiOiBcIjpcIjpcIikrdSkpO2Vsc2UgZm9yKGkgaW4gaClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaCxpKSYmKHU9byhpLGgpLHUmJnAucHVzaChuKGkpKyhhP1wiOiBcIjpcIjpcIikrdSkpO3JldHVybiB1PTA9PT1wLmxlbmd0aD9cInt9XCI6YT9cIntcXG5cIithK3Auam9pbihcIixcXG5cIithKStcIlxcblwiK2YrXCJ9XCI6XCJ7XCIrcC5qb2luKFwiLFwiKStcIn1cIixhPWYsdX19dmFyIGk9L1tcXFxcXCJcXHUwMDAwLVxcdTAwMWZcXHUwMDdmLVxcdTAwOWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcImZ1bmN0aW9uXCIhPXR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0pTT04mJihEYXRlLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gaXNGaW5pdGUodGhpcy52YWx1ZU9mKCkpP3RoaXMuZ2V0VVRDRnVsbFllYXIoKStcIi1cIitlKHRoaXMuZ2V0VVRDTW9udGgoKSsxKStcIi1cIitlKHRoaXMuZ2V0VVRDRGF0ZSgpKStcIlRcIitlKHRoaXMuZ2V0VVRDSG91cnMoKSkrXCI6XCIrZSh0aGlzLmdldFVUQ01pbnV0ZXMoKSkrXCI6XCIrZSh0aGlzLmdldFVUQ1NlY29uZHMoKSkrXCJaXCI6bnVsbH0sQm9vbGVhbi5wcm90b3R5cGUudG9KU09OPXIsTnVtYmVyLnByb3RvdHlwZS50b0pTT049cixTdHJpbmcucHJvdG90eXBlLnRvSlNPTj1yKTt2YXIgYSxzLHUsYztcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnN0cmluZ2lmeSYmKHU9e1wiXFxiXCI6XCJcXFxcYlwiLFwiXFx0XCI6XCJcXFxcdFwiLFwiXFxuXCI6XCJcXFxcblwiLFwiXFxmXCI6XCJcXFxcZlwiLFwiXFxyXCI6XCJcXFxcclwiLCdcIic6J1xcXFxcIicsXCJcXFxcXCI6XCJcXFxcXFxcXFwifSx0LnN0cmluZ2lmeT1mdW5jdGlvbih0LGUscil7dmFyIG47aWYoYT1cIlwiLHM9XCJcIixcIm51bWJlclwiPT10eXBlb2Ygcilmb3Iobj0wO248cjtuKz0xKXMrPVwiIFwiO2Vsc2VcInN0cmluZ1wiPT10eXBlb2YgciYmKHM9cik7aWYoYz1lLGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJudW1iZXJcIiE9dHlwZW9mIGUubGVuZ3RoKSl0aHJvdyBuZXcgRXJyb3IoXCJKU09OLnN0cmluZ2lmeVwiKTtyZXR1cm4gbyhcIlwiLHtcIlwiOnR9KX0pLFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQucGFyc2UmJih0LnBhcnNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gdC5yZXBsYWNlKC9cXFxcKD86dSguezR9KXwoW151XSkpL2csZnVuY3Rpb24odCxlLHIpe3JldHVybiBlP1N0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZSwxNikpOmFbcl19KX12YXIgZSxyLG4sbyxpLGE9e1wiXFxcXFwiOlwiXFxcXFwiLCdcIic6J1wiJyxcIi9cIjpcIi9cIix0OlwiXFx0XCIsbjpcIlxcblwiLHI6XCJcXHJcIixmOlwiXFxmXCIsYjpcIlxcYlwifSxzPXtnbzpmdW5jdGlvbigpe2U9XCJva1wifSxmaXJzdG9rZXk6ZnVuY3Rpb24oKXtvPWksZT1cImNvbG9uXCJ9LG9rZXk6ZnVuY3Rpb24oKXtvPWksZT1cImNvbG9uXCJ9LG92YWx1ZTpmdW5jdGlvbigpe2U9XCJvY29tbWFcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtlPVwiYWNvbW1hXCJ9LGF2YWx1ZTpmdW5jdGlvbigpe2U9XCJhY29tbWFcIn19LHU9e2dvOmZ1bmN0aW9uKCl7ZT1cIm9rXCJ9LG92YWx1ZTpmdW5jdGlvbigpe2U9XCJvY29tbWFcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtlPVwiYWNvbW1hXCJ9LGF2YWx1ZTpmdW5jdGlvbigpe2U9XCJhY29tbWFcIn19LGM9e1wie1wiOntnbzpmdW5jdGlvbigpe3IucHVzaCh7c3RhdGU6XCJva1wifSksbj17fSxlPVwiZmlyc3Rva2V5XCJ9LG92YWx1ZTpmdW5jdGlvbigpe3IucHVzaCh7Y29udGFpbmVyOm4sc3RhdGU6XCJvY29tbWFcIixrZXk6b30pLG49e30sZT1cImZpcnN0b2tleVwifSxmaXJzdGF2YWx1ZTpmdW5jdGlvbigpe3IucHVzaCh7Y29udGFpbmVyOm4sc3RhdGU6XCJhY29tbWFcIn0pLG49e30sZT1cImZpcnN0b2tleVwifSxhdmFsdWU6ZnVuY3Rpb24oKXtyLnB1c2goe2NvbnRhaW5lcjpuLHN0YXRlOlwiYWNvbW1hXCJ9KSxuPXt9LGU9XCJmaXJzdG9rZXlcIn19LFwifVwiOntmaXJzdG9rZXk6ZnVuY3Rpb24oKXt2YXIgdD1yLnBvcCgpO2k9bixuPXQuY29udGFpbmVyLG89dC5rZXksZT10LnN0YXRlfSxvY29tbWE6ZnVuY3Rpb24oKXt2YXIgdD1yLnBvcCgpO25bb109aSxpPW4sbj10LmNvbnRhaW5lcixvPXQua2V5LGU9dC5zdGF0ZX19LFwiW1wiOntnbzpmdW5jdGlvbigpe3IucHVzaCh7c3RhdGU6XCJva1wifSksbj1bXSxlPVwiZmlyc3RhdmFsdWVcIn0sb3ZhbHVlOmZ1bmN0aW9uKCl7ci5wdXNoKHtjb250YWluZXI6bixzdGF0ZTpcIm9jb21tYVwiLGtleTpvfSksbj1bXSxlPVwiZmlyc3RhdmFsdWVcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtyLnB1c2goe2NvbnRhaW5lcjpuLHN0YXRlOlwiYWNvbW1hXCJ9KSxuPVtdLGU9XCJmaXJzdGF2YWx1ZVwifSxhdmFsdWU6ZnVuY3Rpb24oKXtyLnB1c2goe2NvbnRhaW5lcjpuLHN0YXRlOlwiYWNvbW1hXCJ9KSxuPVtdLGU9XCJmaXJzdGF2YWx1ZVwifX0sXCJdXCI6e2ZpcnN0YXZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9ci5wb3AoKTtpPW4sbj10LmNvbnRhaW5lcixvPXQua2V5LGU9dC5zdGF0ZX0sYWNvbW1hOmZ1bmN0aW9uKCl7dmFyIHQ9ci5wb3AoKTtuLnB1c2goaSksaT1uLG49dC5jb250YWluZXIsbz10LmtleSxlPXQuc3RhdGV9fSxcIjpcIjp7Y29sb246ZnVuY3Rpb24oKXtpZihPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkR1cGxpY2F0ZSBrZXkgJ1wiK28rJ1wiJyk7ZT1cIm92YWx1ZVwifX0sXCIsXCI6e29jb21tYTpmdW5jdGlvbigpe25bb109aSxlPVwib2tleVwifSxhY29tbWE6ZnVuY3Rpb24oKXtuLnB1c2goaSksZT1cImF2YWx1ZVwifX0sdHJ1ZTp7Z286ZnVuY3Rpb24oKXtpPSEwLGU9XCJva1wifSxvdmFsdWU6ZnVuY3Rpb24oKXtpPSEwLGU9XCJvY29tbWFcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtpPSEwLGU9XCJhY29tbWFcIn0sYXZhbHVlOmZ1bmN0aW9uKCl7aT0hMCxlPVwiYWNvbW1hXCJ9fSxmYWxzZTp7Z286ZnVuY3Rpb24oKXtpPSExLGU9XCJva1wifSxvdmFsdWU6ZnVuY3Rpb24oKXtpPSExLGU9XCJvY29tbWFcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtpPSExLGU9XCJhY29tbWFcIn0sYXZhbHVlOmZ1bmN0aW9uKCl7aT0hMSxlPVwiYWNvbW1hXCJ9fSxudWxsOntnbzpmdW5jdGlvbigpe2k9bnVsbCxlPVwib2tcIn0sb3ZhbHVlOmZ1bmN0aW9uKCl7aT1udWxsLGU9XCJvY29tbWFcIn0sZmlyc3RhdmFsdWU6ZnVuY3Rpb24oKXtpPW51bGwsZT1cImFjb21tYVwifSxhdmFsdWU6ZnVuY3Rpb24oKXtpPW51bGwsZT1cImFjb21tYVwifX19O3JldHVybiBmdW5jdGlvbihuLG8pe3ZhciBhLGw9L15bXFx1MDAyMFxcdFxcblxccl0qKD86KFssOlxcW1xcXXt9XXx0cnVlfGZhbHNlfG51bGwpfCgtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPyl8XCIoKD86W15cXHJcXG5cXHRcXFxcXFxcIl18XFxcXCg/OltcIlxcXFxcXC90cm5mYl18dVswLTlhLWZBLUZdezR9KSkqKVwiKS87ZT1cImdvXCIscj1bXTt0cnl7Zm9yKDs7KXtpZihhPWwuZXhlYyhuKSwhYSlicmVhazthWzFdP2NbYVsxXV1bZV0oKTphWzJdPyhpPSthWzJdLHVbZV0oKSk6KGk9dChhWzNdKSxzW2VdKCkpLG49bi5zbGljZShhWzBdLmxlbmd0aCl9fWNhdGNoKHQpe2U9dH1pZihcIm9rXCIhPT1lfHwvW15cXHUwMDIwXFx0XFxuXFxyXS8udGVzdChuKSl0aHJvdyBlIGluc3RhbmNlb2YgU3ludGF4RXJyb3I/ZTpuZXcgU3ludGF4RXJyb3IoXCJKU09OXCIpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG8/ZnVuY3Rpb24gdChlLHIpe3ZhciBuLGEscz1lW3JdO2lmKHMmJlwib2JqZWN0XCI9PXR5cGVvZiBzKWZvcihuIGluIGkpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsbikmJihhPXQocyxuKSx2b2lkIDAhPT1hP3Nbbl09YTpkZWxldGUgc1tuXSk7cmV0dXJuIG8uY2FsbChlLHIscyl9KHtcIlwiOml9LFwiXCIpOml9fSgpKX07dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSxyLG4pe3RoaXMucmF0ZUxpbWl0ZXI9dCx0aGlzLmFwaT1lLHRoaXMubG9nZ2VyPXIsdGhpcy5vcHRpb25zPW4sdGhpcy5wcmVkaWNhdGVzPVtdLHRoaXMucGVuZGluZ0l0ZW1zPVtdLHRoaXMucGVuZGluZ1JlcXVlc3RzPVtdLHRoaXMucmV0cnlRdWV1ZT1bXSx0aGlzLnJldHJ5SGFuZGxlPW51bGwsdGhpcy53YWl0Q2FsbGJhY2s9bnVsbCx0aGlzLndhaXRJbnRlcnZhbElEPW51bGx9dmFyIG89cig1KTtuLnByb3RvdHlwZS5jb25maWd1cmU9ZnVuY3Rpb24odCl7dGhpcy5hcGkmJnRoaXMuYXBpLmNvbmZpZ3VyZSh0KTt2YXIgZT10aGlzLm9wdGlvbnM7cmV0dXJuIHRoaXMub3B0aW9ucz1vLm1lcmdlKGUsdCksdGhpc30sbi5wcm90b3R5cGUuYWRkUHJlZGljYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBvLmlzRnVuY3Rpb24odCkmJnRoaXMucHJlZGljYXRlcy5wdXNoKHQpLHRoaXN9LG4ucHJvdG90eXBlLmFkZFBlbmRpbmdJdGVtPWZ1bmN0aW9uKHQpe3RoaXMucGVuZGluZ0l0ZW1zLnB1c2godCl9LG4ucHJvdG90eXBlLnJlbW92ZVBlbmRpbmdJdGVtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGVuZGluZ0l0ZW1zLmluZGV4T2YodCk7ZSE9PS0xJiZ0aGlzLnBlbmRpbmdJdGVtcy5zcGxpY2UoZSwxKX0sbi5wcm90b3R5cGUuYWRkSXRlbT1mdW5jdGlvbih0LGUscixuKXtlJiZvLmlzRnVuY3Rpb24oZSl8fChlPWZ1bmN0aW9uKCl7fSk7dmFyIGk9dGhpcy5fYXBwbHlQcmVkaWNhdGVzKHQpO2lmKGkuc3RvcClyZXR1cm4gdGhpcy5yZW1vdmVQZW5kaW5nSXRlbShuKSx2b2lkIGUoaS5lcnIpO3RoaXMuX21heWJlTG9nKHQsciksdGhpcy5yZW1vdmVQZW5kaW5nSXRlbShuKSx0aGlzLnBlbmRpbmdSZXF1ZXN0cy5wdXNoKHQpO3RyeXt0aGlzLl9tYWtlQXBpUmVxdWVzdCh0LGZ1bmN0aW9uKHIsbil7dGhpcy5fZGVxdWV1ZVBlbmRpbmdSZXF1ZXN0KHQpLGUocixuKX0uYmluZCh0aGlzKSl9Y2F0Y2gocil7dGhpcy5fZGVxdWV1ZVBlbmRpbmdSZXF1ZXN0KHQpLGUocil9fSxuLnByb3RvdHlwZS53YWl0PWZ1bmN0aW9uKHQpe28uaXNGdW5jdGlvbih0KSYmKHRoaXMud2FpdENhbGxiYWNrPXQsdGhpcy5fbWF5YmVDYWxsV2FpdCgpfHwodGhpcy53YWl0SW50ZXJ2YWxJRCYmKHRoaXMud2FpdEludGVydmFsSUQ9Y2xlYXJJbnRlcnZhbCh0aGlzLndhaXRJbnRlcnZhbElEKSksdGhpcy53YWl0SW50ZXJ2YWxJRD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3RoaXMuX21heWJlQ2FsbFdhaXQoKX0uYmluZCh0aGlzKSw1MDApKSl9LG4ucHJvdG90eXBlLl9hcHBseVByZWRpY2F0ZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW51bGwscj0wLG49dGhpcy5wcmVkaWNhdGVzLmxlbmd0aDtyPG47cisrKWlmKGU9dGhpcy5wcmVkaWNhdGVzW3JdKHQsdGhpcy5vcHRpb25zKSwhZXx8dm9pZCAwIT09ZS5lcnIpcmV0dXJue3N0b3A6ITAsZXJyOmUuZXJyfTtyZXR1cm57c3RvcDohMSxlcnI6bnVsbH19LG4ucHJvdG90eXBlLl9tYWtlQXBpUmVxdWVzdD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMucmF0ZUxpbWl0ZXIuc2hvdWxkU2VuZCh0KTtyLnNob3VsZFNlbmQ/dGhpcy5hcGkucG9zdEl0ZW0odCxmdW5jdGlvbihyLG4pe3I/dGhpcy5fbWF5YmVSZXRyeShyLHQsZSk6ZShyLG4pfS5iaW5kKHRoaXMpKTpyLmVycm9yP2Uoci5lcnJvcik6dGhpcy5hcGkucG9zdEl0ZW0oci5wYXlsb2FkLGUpfTt2YXIgaT1bXCJFQ09OTlJFU0VUXCIsXCJFTk9URk9VTkRcIixcIkVTT0NLRVRUSU1FRE9VVFwiLFwiRVRJTUVET1VUXCIsXCJFQ09OTlJFRlVTRURcIixcIkVIT1NUVU5SRUFDSFwiLFwiRVBJUEVcIixcIkVBSV9BR0FJTlwiXTtuLnByb3RvdHlwZS5fbWF5YmVSZXRyeT1mdW5jdGlvbih0LGUscil7dmFyIG49ITE7aWYodGhpcy5vcHRpb25zLnJldHJ5SW50ZXJ2YWwpZm9yKHZhciBvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHQuY29kZT09PWlbb10pe249ITA7YnJlYWt9bj90aGlzLl9yZXRyeUFwaVJlcXVlc3QoZSxyKTpyKHQpfSxuLnByb3RvdHlwZS5fcmV0cnlBcGlSZXF1ZXN0PWZ1bmN0aW9uKHQsZSl7dGhpcy5yZXRyeVF1ZXVlLnB1c2goe2l0ZW06dCxjYWxsYmFjazplfSksdGhpcy5yZXRyeUhhbmRsZXx8KHRoaXMucmV0cnlIYW5kbGU9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtmb3IoO3RoaXMucmV0cnlRdWV1ZS5sZW5ndGg7KXt2YXIgdD10aGlzLnJldHJ5UXVldWUuc2hpZnQoKTt0aGlzLl9tYWtlQXBpUmVxdWVzdCh0Lml0ZW0sdC5jYWxsYmFjayl9fS5iaW5kKHRoaXMpLHRoaXMub3B0aW9ucy5yZXRyeUludGVydmFsKSl9LG4ucHJvdG90eXBlLl9kZXF1ZXVlUGVuZGluZ1JlcXVlc3Q9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wZW5kaW5nUmVxdWVzdHMuaW5kZXhPZih0KTtlIT09LTEmJih0aGlzLnBlbmRpbmdSZXF1ZXN0cy5zcGxpY2UoZSwxKSx0aGlzLl9tYXliZUNhbGxXYWl0KCkpfSxuLnByb3RvdHlwZS5fbWF5YmVMb2c9ZnVuY3Rpb24odCxlKXtpZih0aGlzLmxvZ2dlciYmdGhpcy5vcHRpb25zLnZlcmJvc2Upe3ZhciByPWU7aWYocj1yfHxvLmdldCh0LFwiYm9keS50cmFjZS5leGNlcHRpb24ubWVzc2FnZVwiKSxyPXJ8fG8uZ2V0KHQsXCJib2R5LnRyYWNlX2NoYWluLjAuZXhjZXB0aW9uLm1lc3NhZ2VcIikpcmV0dXJuIHZvaWQgdGhpcy5sb2dnZXIuZXJyb3Iocik7cj1vLmdldCh0LFwiYm9keS5tZXNzYWdlLmJvZHlcIiksciYmdGhpcy5sb2dnZXIubG9nKHIpfX0sbi5wcm90b3R5cGUuX21heWJlQ2FsbFdhaXQ9ZnVuY3Rpb24oKXtyZXR1cm4hKCFvLmlzRnVuY3Rpb24odGhpcy53YWl0Q2FsbGJhY2spfHwwIT09dGhpcy5wZW5kaW5nSXRlbXMubGVuZ3RofHwwIT09dGhpcy5wZW5kaW5nUmVxdWVzdHMubGVuZ3RoKSYmKHRoaXMud2FpdEludGVydmFsSUQmJih0aGlzLndhaXRJbnRlcnZhbElEPWNsZWFySW50ZXJ2YWwodGhpcy53YWl0SW50ZXJ2YWxJRCkpLHRoaXMud2FpdENhbGxiYWNrKCksITApfSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlKXt0aGlzLnF1ZXVlPXQsdGhpcy5vcHRpb25zPWUsdGhpcy50cmFuc2Zvcm1zPVtdfXZhciBvPXIoNSk7bi5wcm90b3R5cGUuY29uZmlndXJlPWZ1bmN0aW9uKHQpe3RoaXMucXVldWUmJnRoaXMucXVldWUuY29uZmlndXJlKHQpO3ZhciBlPXRoaXMub3B0aW9ucztyZXR1cm4gdGhpcy5vcHRpb25zPW8ubWVyZ2UoZSx0KSx0aGlzfSxuLnByb3RvdHlwZS5hZGRUcmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIG8uaXNGdW5jdGlvbih0KSYmdGhpcy50cmFuc2Zvcm1zLnB1c2godCksdGhpc30sbi5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKHQsZSl7aWYoZSYmby5pc0Z1bmN0aW9uKGUpfHwoZT1mdW5jdGlvbigpe30pLCF0aGlzLm9wdGlvbnMuZW5hYmxlZClyZXR1cm4gZShuZXcgRXJyb3IoXCJSb2xsYmFyIGlzIG5vdCBlbmFibGVkXCIpKTt0aGlzLnF1ZXVlLmFkZFBlbmRpbmdJdGVtKHQpO3ZhciByPXQuZXJyO3RoaXMuX2FwcGx5VHJhbnNmb3Jtcyh0LGZ1bmN0aW9uKG4sbyl7cmV0dXJuIG4/KHRoaXMucXVldWUucmVtb3ZlUGVuZGluZ0l0ZW0odCksZShuLG51bGwpKTp2b2lkIHRoaXMucXVldWUuYWRkSXRlbShvLGUscix0KX0uYmluZCh0aGlzKSl9LG4ucHJvdG90eXBlLl9hcHBseVRyYW5zZm9ybXM9ZnVuY3Rpb24odCxlKXt2YXIgcj0tMSxuPXRoaXMudHJhbnNmb3Jtcy5sZW5ndGgsbz10aGlzLnRyYW5zZm9ybXMsaT10aGlzLm9wdGlvbnMsYT1mdW5jdGlvbih0LHMpe3JldHVybiB0P3ZvaWQgZSh0LG51bGwpOihyKysscj09PW4/dm9pZCBlKG51bGwscyk6dm9pZCBvW3JdKHMsaSxhKSl9O2EobnVsbCx0KX0sdC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe3RoaXMucXVldWU9W10sdGhpcy5vcHRpb25zPWkubWVyZ2UodCk7dmFyIGU9dGhpcy5vcHRpb25zLm1heFRlbGVtZXRyeUV2ZW50c3x8YTt0aGlzLm1heFF1ZXVlU2l6ZT1NYXRoLm1heCgwLE1hdGgubWluKGUsYSkpfWZ1bmN0aW9uIG8odCxlKXtpZihlKXJldHVybiBlO3ZhciByPXtlcnJvcjpcImVycm9yXCIsbWFudWFsOlwiaW5mb1wifTtyZXR1cm4gclt0XXx8XCJpbmZvXCJ9dmFyIGk9cig1KSxhPTEwMDtuLnByb3RvdHlwZS5jb25maWd1cmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5vcHRpb25zO3RoaXMub3B0aW9ucz1pLm1lcmdlKGUsdCk7dmFyIHI9dGhpcy5vcHRpb25zLm1heFRlbGVtZXRyeUV2ZW50c3x8YSxuPU1hdGgubWF4KDAsTWF0aC5taW4ocixhKSksbz0wO3RoaXMubWF4UXVldWVTaXplPm4mJihvPXRoaXMubWF4UXVldWVTaXplLW4pLHRoaXMubWF4UXVldWVTaXplPW4sdGhpcy5xdWV1ZS5zcGxpY2UoMCxvKX0sbi5wcm90b3R5cGUuY29weUV2ZW50cz1mdW5jdGlvbigpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMucXVldWUsMCk7aWYoaS5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5maWx0ZXJUZWxlbWV0cnkpKXRyeXtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm9wdGlvbnMuZmlsdGVyVGVsZW1ldHJ5KHRbZV0pJiZ0LnNwbGljZShlLDEpfWNhdGNoKHQpe3RoaXMub3B0aW9ucy5maWx0ZXJUZWxlbWV0cnk9bnVsbH1yZXR1cm4gdH0sbi5wcm90b3R5cGUuY2FwdHVyZT1mdW5jdGlvbih0LGUscixuLGEpe3ZhciBzPXtsZXZlbDpvKHQsciksdHlwZTp0LHRpbWVzdGFtcF9tczphfHxpLm5vdygpLGJvZHk6ZSxzb3VyY2U6XCJjbGllbnRcIn07biYmKHMudXVpZD1uKTt0cnl7aWYoaS5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5maWx0ZXJUZWxlbWV0cnkpJiZ0aGlzLm9wdGlvbnMuZmlsdGVyVGVsZW1ldHJ5KHMpKXJldHVybiExfWNhdGNoKHQpe3RoaXMub3B0aW9ucy5maWx0ZXJUZWxlbWV0cnk9bnVsbH1yZXR1cm4gdGhpcy5wdXNoKHMpLHN9LG4ucHJvdG90eXBlLmNhcHR1cmVFdmVudD1mdW5jdGlvbih0LGUscixuKXtyZXR1cm4gdGhpcy5jYXB0dXJlKHQsZSxyLG4pfSxuLnByb3RvdHlwZS5jYXB0dXJlRXJyb3I9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89e21lc3NhZ2U6dC5tZXNzYWdlfHxTdHJpbmcodCl9O3JldHVybiB0LnN0YWNrJiYoby5zdGFjaz10LnN0YWNrKSx0aGlzLmNhcHR1cmUoXCJlcnJvclwiLG8sZSxyLG4pfSxuLnByb3RvdHlwZS5jYXB0dXJlTG9nPWZ1bmN0aW9uKHQsZSxyLG4pe3JldHVybiB0aGlzLmNhcHR1cmUoXCJsb2dcIix7bWVzc2FnZTp0fSxlLHIsbil9LG4ucHJvdG90eXBlLmNhcHR1cmVOZXR3b3JrPWZ1bmN0aW9uKHQsZSxyLG4pe2U9ZXx8XCJ4aHJcIix0LnN1YnR5cGU9dC5zdWJ0eXBlfHxlLG4mJih0LnJlcXVlc3Q9bik7dmFyIG89dGhpcy5sZXZlbEZyb21TdGF0dXModC5zdGF0dXNfY29kZSk7cmV0dXJuIHRoaXMuY2FwdHVyZShcIm5ldHdvcmtcIix0LG8scil9LG4ucHJvdG90eXBlLmxldmVsRnJvbVN0YXR1cz1mdW5jdGlvbih0KXtyZXR1cm4gdD49MjAwJiZ0PDQwMD9cImluZm9cIjowPT09dHx8dD49NDAwP1wiZXJyb3JcIjpcImluZm9cIn0sbi5wcm90b3R5cGUuY2FwdHVyZURvbT1mdW5jdGlvbih0LGUscixuLG8pe3ZhciBpPXtzdWJ0eXBlOnQsZWxlbWVudDplfTtyZXR1cm4gdm9pZCAwIT09ciYmKGkudmFsdWU9ciksdm9pZCAwIT09biYmKGkuY2hlY2tlZD1uKSx0aGlzLmNhcHR1cmUoXCJkb21cIixpLFwiaW5mb1wiLG8pfSxuLnByb3RvdHlwZS5jYXB0dXJlTmF2aWdhdGlvbj1mdW5jdGlvbih0LGUscil7cmV0dXJuIHRoaXMuY2FwdHVyZShcIm5hdmlnYXRpb25cIix7ZnJvbTp0LHRvOmV9LFwiaW5mb1wiLHIpfSxuLnByb3RvdHlwZS5jYXB0dXJlRG9tQ29udGVudExvYWRlZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jYXB0dXJlKFwibmF2aWdhdGlvblwiLHtzdWJ0eXBlOlwiRE9NQ29udGVudExvYWRlZFwifSxcImluZm9cIix2b2lkIDAsdCYmdC5nZXRUaW1lKCkpfSxuLnByb3RvdHlwZS5jYXB0dXJlTG9hZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jYXB0dXJlKFwibmF2aWdhdGlvblwiLHtzdWJ0eXBlOlwibG9hZFwifSxcImluZm9cIix2b2lkIDAsdCYmdC5nZXRUaW1lKCkpfSxuLnByb3RvdHlwZS5jYXB0dXJlQ29ubmVjdGl2aXR5Q2hhbmdlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2FwdHVyZU5ldHdvcmsoe2NoYW5nZTp0fSxcImNvbm5lY3Rpdml0eVwiLGUpfSxuLnByb3RvdHlwZS5fY2FwdHVyZVJvbGxiYXJJdGVtPWZ1bmN0aW9uKHQpe2lmKHRoaXMub3B0aW9ucy5pbmNsdWRlSXRlbXNJblRlbGVtZXRyeSlyZXR1cm4gdC5lcnI/dGhpcy5jYXB0dXJlRXJyb3IodC5lcnIsdC5sZXZlbCx0LnV1aWQsdC50aW1lc3RhbXApOnQubWVzc2FnZT90aGlzLmNhcHR1cmVMb2codC5tZXNzYWdlLHQubGV2ZWwsdC51dWlkLHQudGltZXN0YW1wKTp0LmN1c3RvbT90aGlzLmNhcHR1cmUoXCJsb2dcIix0LmN1c3RvbSx0LmxldmVsLHQudXVpZCx0LnRpbWVzdGFtcCk6dm9pZCAwfSxuLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3RoaXMucXVldWUucHVzaCh0KSx0aGlzLnF1ZXVlLmxlbmd0aD50aGlzLm1heFF1ZXVlU2l6ZSYmdGhpcy5xdWV1ZS5zaGlmdCgpfSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlLHIsbil7dGhpcy5vcHRpb25zPXQsdGhpcy50cmFuc3BvcnQ9ZSx0aGlzLnVybD1yLHRoaXMuanNvbkJhY2t1cD1uLHRoaXMuYWNjZXNzVG9rZW49dC5hY2Nlc3NUb2tlbix0aGlzLnRyYW5zcG9ydE9wdGlvbnM9byh0LHIpfWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gYS5nZXRUcmFuc3BvcnRGcm9tT3B0aW9ucyh0LHMsZSl9dmFyIGk9cig1KSxhPXIoMTIpLHM9e2hvc3RuYW1lOlwiYXBpLnJvbGxiYXIuY29tXCIscGF0aDpcIi9hcGkvMS9pdGVtL1wiLHNlYXJjaDpudWxsLHZlcnNpb246XCIxXCIscHJvdG9jb2w6XCJodHRwczpcIixwb3J0OjQ0M307bi5wcm90b3R5cGUucG9zdEl0ZW09ZnVuY3Rpb24odCxlKXt2YXIgcj1hLnRyYW5zcG9ydE9wdGlvbnModGhpcy50cmFuc3BvcnRPcHRpb25zLFwiUE9TVFwiKSxuPWEuYnVpbGRQYXlsb2FkKHRoaXMuYWNjZXNzVG9rZW4sdCx0aGlzLmpzb25CYWNrdXApO3RoaXMudHJhbnNwb3J0LnBvc3QodGhpcy5hY2Nlc3NUb2tlbixyLG4sZSl9LG4ucHJvdG90eXBlLmNvbmZpZ3VyZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm9sZE9wdGlvbnM7cmV0dXJuIHRoaXMub3B0aW9ucz1pLm1lcmdlKGUsdCksdGhpcy50cmFuc3BvcnRPcHRpb25zPW8odGhpcy5vcHRpb25zLHRoaXMudXJsKSx2b2lkIDAhPT10aGlzLm9wdGlvbnMuYWNjZXNzVG9rZW4mJih0aGlzLmFjY2Vzc1Rva2VuPXRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbiksdGhpc30sdC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSxyKXtpZighcy5pc1R5cGUoZS5jb250ZXh0LFwic3RyaW5nXCIpKXt2YXIgbj1zLnN0cmluZ2lmeShlLmNvbnRleHQscik7bi5lcnJvcj9lLmNvbnRleHQ9XCJFcnJvcjogY291bGQgbm90IHNlcmlhbGl6ZSAnY29udGV4dCdcIjplLmNvbnRleHQ9bi52YWx1ZXx8XCJcIixlLmNvbnRleHQubGVuZ3RoPjI1NSYmKGUuY29udGV4dD1lLmNvbnRleHQuc3Vic3RyKDAsMjU1KSl9cmV0dXJue2FjY2Vzc190b2tlbjp0LGRhdGE6ZX19ZnVuY3Rpb24gbyh0LGUscil7dmFyIG49ZS5ob3N0bmFtZSxvPWUucHJvdG9jb2wsaT1lLnBvcnQsYT1lLnBhdGgscz1lLnNlYXJjaCx1PXQucHJveHk7aWYodC5lbmRwb2ludCl7dmFyIGM9ci5wYXJzZSh0LmVuZHBvaW50KTtuPWMuaG9zdG5hbWUsbz1jLnByb3RvY29sLGk9Yy5wb3J0LGE9Yy5wYXRobmFtZSxzPWMuc2VhcmNofXJldHVybntob3N0bmFtZTpuLHByb3RvY29sOm8scG9ydDppLHBhdGg6YSxzZWFyY2g6cyxwcm94eTp1fX1mdW5jdGlvbiBpKHQsZSl7dmFyIHI9dC5wcm90b2NvbHx8XCJodHRwczpcIixuPXQucG9ydHx8KFwiaHR0cDpcIj09PXI/ODA6XCJodHRwczpcIj09PXI/NDQzOnZvaWQgMCksbz10Lmhvc3RuYW1lLGk9dC5wYXRoO1xucmV0dXJuIHQuc2VhcmNoJiYoaSs9dC5zZWFyY2gpLHQucHJveHkmJihpPXIrXCIvL1wiK28raSxvPXQucHJveHkuaG9zdHx8dC5wcm94eS5ob3N0bmFtZSxuPXQucHJveHkucG9ydCxyPXQucHJveHkucHJvdG9jb2x8fHIpLHtwcm90b2NvbDpyLGhvc3RuYW1lOm8scGF0aDppLHBvcnQ6bixtZXRob2Q6ZX19ZnVuY3Rpb24gYSh0LGUpe3ZhciByPS9cXC8kLy50ZXN0KHQpLG49L15cXC8vLnRlc3QoZSk7cmV0dXJuIHImJm4/ZT1lLnN1YnN0cmluZygxKTpyfHxufHwoZT1cIi9cIitlKSx0K2V9dmFyIHM9cig1KTt0LmV4cG9ydHM9e2J1aWxkUGF5bG9hZDpuLGdldFRyYW5zcG9ydEZyb21PcHRpb25zOm8sdHJhbnNwb3J0T3B0aW9uczppLGFwcGVuZFBhdGhUb1BhdGg6YX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO3QudW5zaGlmdChcIlJvbGxiYXI6XCIpLGEuaWVWZXJzaW9uKCk8PTg/Y29uc29sZS5lcnJvcihzLmZvcm1hdEFyZ3NBc1N0cmluZyh0KSk6Y29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLHQpfWZ1bmN0aW9uIG8oKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7dC51bnNoaWZ0KFwiUm9sbGJhcjpcIiksYS5pZVZlcnNpb24oKTw9OD9jb25zb2xlLmluZm8ocy5mb3JtYXRBcmdzQXNTdHJpbmcodCkpOmNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLHQpfWZ1bmN0aW9uIGkoKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7dC51bnNoaWZ0KFwiUm9sbGJhcjpcIiksYS5pZVZlcnNpb24oKTw9OD9jb25zb2xlLmxvZyhzLmZvcm1hdEFyZ3NBc1N0cmluZyh0KSk6Y29uc29sZS5sb2cuYXBwbHkoY29uc29sZSx0KX1yKDE0KTt2YXIgYT1yKDE1KSxzPXIoNSk7dC5leHBvcnRzPXtlcnJvcjpuLGluZm86byxsb2c6aX19LGZ1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3QuY29uc29sZXx8KHQuY29uc29sZT17fSk7Zm9yKHZhciBlLHIsbj10LmNvbnNvbGUsbz1mdW5jdGlvbigpe30saT1bXCJtZW1vcnlcIl0sYT1cImFzc2VydCxjbGVhcixjb3VudCxkZWJ1ZyxkaXIsZGlyeG1sLGVycm9yLGV4Y2VwdGlvbixncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlcyxwcm9maWxlRW5kLHNob3csdGFibGUsdGltZSx0aW1lRW5kLHRpbWVsaW5lLHRpbWVsaW5lRW5kLHRpbWVTdGFtcCx0cmFjZSx3YXJuXCIuc3BsaXQoXCIsXCIpO2U9aS5wb3AoKTspbltlXXx8KG5bZV09e30pO2Zvcig7cj1hLnBvcCgpOyluW3JdfHwobltyXT1vKX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz90aGlzOndpbmRvdyl9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3ZhciB0O2lmKCFkb2N1bWVudClyZXR1cm4gdDtmb3IodmFyIGU9MyxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbj1yLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtyLmlubmVySFRNTD1cIjwhLS1baWYgZ3QgSUUgXCIrICsrZStcIl0+PGk+PC9pPjwhW2VuZGlmXS0tPlwiLG5bMF07KTtyZXR1cm4gZT40P2U6dH12YXIgbj17aWVWZXJzaW9uOnJ9O3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlLHIpe2lmKHQpe3ZhciBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuX3JvbGxiYXJPbGRPbkVycm9yKW89ZS5fcm9sbGJhck9sZE9uRXJyb3I7ZWxzZSBpZih0Lm9uZXJyb3Ipe2ZvcihvPXQub25lcnJvcjtvLl9yb2xsYmFyT2xkT25FcnJvcjspbz1vLl9yb2xsYmFyT2xkT25FcnJvcjtlLl9yb2xsYmFyT2xkT25FcnJvcj1vfXZhciBpPWZ1bmN0aW9uKCl7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24odCxlLG8scil9O3ImJihpLl9yb2xsYmFyT2xkT25FcnJvcj1vKSx0Lm9uZXJyb3I9aX19ZnVuY3Rpb24gbih0LGUscixuKXt0Ll9yb2xsYmFyV3JhcHBlZEVycm9yJiYobls0XXx8KG5bNF09dC5fcm9sbGJhcldyYXBwZWRFcnJvciksbls1XXx8KG5bNV09dC5fcm9sbGJhcldyYXBwZWRFcnJvci5fcm9sbGJhckNvbnRleHQpLHQuX3JvbGxiYXJXcmFwcGVkRXJyb3I9bnVsbCksZS5oYW5kbGVVbmNhdWdodEV4Y2VwdGlvbi5hcHBseShlLG4pLHImJnIuYXBwbHkodCxuKX1mdW5jdGlvbiBvKHQsZSxyKXtpZih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Ll9yb2xsYmFyVVJIJiZ0Ll9yb2xsYmFyVVJILmJlbG9uZ3NUb1NoaW0mJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLHQuX3JvbGxiYXJVUkgpO3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciByLG4sbzt0cnl7cj10LnJlYXNvbn1jYXRjaCh0KXtyPXZvaWQgMH10cnl7bj10LnByb21pc2V9Y2F0Y2godCl7bj1cIlt1bmhhbmRsZWRyZWplY3Rpb25dIGVycm9yIGdldHRpbmcgYHByb21pc2VgIGZyb20gZXZlbnRcIn10cnl7bz10LmRldGFpbCwhciYmbyYmKHI9by5yZWFzb24sbj1vLnByb21pc2UpfWNhdGNoKHQpe31yfHwocj1cIlt1bmhhbmRsZWRyZWplY3Rpb25dIGVycm9yIGdldHRpbmcgYHJlYXNvbmAgZnJvbSBldmVudFwiKSxlJiZlLmhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbiYmZS5oYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24ocixuKX07bi5iZWxvbmdzVG9TaGltPXIsdC5fcm9sbGJhclVSSD1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLG4pfX1mdW5jdGlvbiBpKHQsZSxyKXtpZih0KXt2YXIgbixvLGk9XCJFdmVudFRhcmdldCxXaW5kb3csTm9kZSxBcHBsaWNhdGlvbkNhY2hlLEF1ZGlvVHJhY2tMaXN0LENoYW5uZWxNZXJnZXJOb2RlLENyeXB0b09wZXJhdGlvbixFdmVudFNvdXJjZSxGaWxlUmVhZGVyLEhUTUxVbmtub3duRWxlbWVudCxJREJEYXRhYmFzZSxJREJSZXF1ZXN0LElEQlRyYW5zYWN0aW9uLEtleU9wZXJhdGlvbixNZWRpYUNvbnRyb2xsZXIsTWVzc2FnZVBvcnQsTW9kYWxXaW5kb3csTm90aWZpY2F0aW9uLFNWR0VsZW1lbnRJbnN0YW5jZSxTY3JlZW4sVGV4dFRyYWNrLFRleHRUcmFja0N1ZSxUZXh0VHJhY2tMaXN0LFdlYlNvY2tldCxXZWJTb2NrZXRXb3JrZXIsV29ya2VyLFhNTEh0dHBSZXF1ZXN0LFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsWE1MSHR0cFJlcXVlc3RVcGxvYWRcIi5zcGxpdChcIixcIik7Zm9yKG49MDtuPGkubGVuZ3RoOysrbilvPWlbbl0sdFtvXSYmdFtvXS5wcm90b3R5cGUmJmEoZSx0W29dLnByb3RvdHlwZSxyKX19ZnVuY3Rpb24gYSh0LGUscil7aWYoZS5oYXNPd25Qcm9wZXJ0eSYmZS5oYXNPd25Qcm9wZXJ0eShcImFkZEV2ZW50TGlzdGVuZXJcIikpe2Zvcih2YXIgbj1lLmFkZEV2ZW50TGlzdGVuZXI7bi5fcm9sbGJhck9sZEFkZCYmbi5iZWxvbmdzVG9TaGltOyluPW4uX3JvbGxiYXJPbGRBZGQ7dmFyIG89ZnVuY3Rpb24oZSxyLG8pe24uY2FsbCh0aGlzLGUsdC53cmFwKHIpLG8pfTtvLl9yb2xsYmFyT2xkQWRkPW4sby5iZWxvbmdzVG9TaGltPXIsZS5hZGRFdmVudExpc3RlbmVyPW87Zm9yKHZhciBpPWUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtpLl9yb2xsYmFyT2xkUmVtb3ZlJiZpLmJlbG9uZ3NUb1NoaW07KWk9aS5fcm9sbGJhck9sZFJlbW92ZTt2YXIgYT1mdW5jdGlvbih0LGUscil7aS5jYWxsKHRoaXMsdCxlJiZlLl9yb2xsYmFyX3dyYXBwZWR8fGUscil9O2EuX3JvbGxiYXJPbGRSZW1vdmU9aSxhLmJlbG9uZ3NUb1NoaW09cixlLnJlbW92ZUV2ZW50TGlzdGVuZXI9YX19dC5leHBvcnRzPXtjYXB0dXJlVW5jYXVnaHRFeGNlcHRpb25zOnIsY2FwdHVyZVVuaGFuZGxlZFJlamVjdGlvbnM6byx3cmFwR2xvYmFsczppfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlLHIsbixvKXtuJiZwLmlzRnVuY3Rpb24obil8fChuPWZ1bmN0aW9uKCl7fSkscC5hZGRQYXJhbXNBbmRBY2Nlc3NUb2tlblRvUGF0aCh0LGUscik7dmFyIGE9XCJHRVRcIixzPXAuZm9ybWF0VXJsKGUpO2kodCxzLGEsbnVsbCxuLG8pfWZ1bmN0aW9uIG8odCxlLHIsbixvKXtpZihuJiZwLmlzRnVuY3Rpb24obil8fChuPWZ1bmN0aW9uKCl7fSksIXIpcmV0dXJuIG4obmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgZW1wdHkgcmVxdWVzdFwiKSk7dmFyIGE9Zi50cnVuY2F0ZShyKTtpZihhLmVycm9yKXJldHVybiBuKGEuZXJyb3IpO3ZhciBzPWEudmFsdWUsdT1cIlBPU1RcIixjPXAuZm9ybWF0VXJsKGUpO2kodCxjLHUscyxuLG8pfWZ1bmN0aW9uIGkodCxlLHIsbixvLGkpe3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYsdT1zJiZzLlpvbmUmJnMuWm9uZS5jdXJyZW50O2lmKHUmJlwiYW5ndWxhclwiPT09dS5fbmFtZSl7dmFyIGM9dS5fcGFyZW50O2MucnVuKGZ1bmN0aW9uKCl7YSh0LGUscixuLG8saSl9KX1lbHNlIGEodCxlLHIsbixvLGkpfWZ1bmN0aW9uIGEodCxlLHIsbixvLGkpe3ZhciBhO2lmKGE9aT9pKCk6cygpLCFhKXJldHVybiBvKG5ldyBFcnJvcihcIk5vIHdheSB0byBzZW5kIGEgcmVxdWVzdFwiKSk7dHJ5e3RyeXt2YXIgZj1mdW5jdGlvbigpe3RyeXtpZihmJiY0PT09YS5yZWFkeVN0YXRlKXtmPXZvaWQgMDt2YXIgdD1wLmpzb25QYXJzZShhLnJlc3BvbnNlVGV4dCk7aWYodShhKSlyZXR1cm4gdm9pZCBvKHQuZXJyb3IsdC52YWx1ZSk7aWYoYyhhKSl7aWYoNDAzPT09YS5zdGF0dXMpe3ZhciBlPXQudmFsdWUmJnQudmFsdWUubWVzc2FnZTtoLmVycm9yKGUpfW8obmV3IEVycm9yKFN0cmluZyhhLnN0YXR1cykpKX1lbHNle3ZhciByPVwiWEhSIHJlc3BvbnNlIGhhZCBubyBzdGF0dXMgY29kZSAobGlrZWx5IGNvbm5lY3Rpb24gZmFpbHVyZSlcIjtvKGwocikpfX19Y2F0Y2godCl7dmFyIG47bj10JiZ0LnN0YWNrP3Q6bmV3IEVycm9yKHQpLG8obil9fTthLm9wZW4ocixlLCEwKSxhLnNldFJlcXVlc3RIZWFkZXImJihhLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIiksYS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1Sb2xsYmFyLUFjY2Vzcy1Ub2tlblwiLHQpKSxhLm9ucmVhZHlzdGF0ZWNoYW5nZT1mLGEuc2VuZChuKX1jYXRjaCh0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgWERvbWFpblJlcXVlc3Qpe2lmKCF3aW5kb3d8fCF3aW5kb3cubG9jYXRpb24pcmV0dXJuIG8obmV3IEVycm9yKFwiTm8gd2luZG93IGF2YWlsYWJsZSBkdXJpbmcgcmVxdWVzdCwgdW5rbm93biBlbnZpcm9ubWVudFwiKSk7XCJodHRwOlwiPT09d2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyaW5nKDAsNSkmJlwiaHR0cHNcIj09PWUuc3Vic3RyaW5nKDAsNSkmJihlPVwiaHR0cFwiK2Uuc3Vic3RyaW5nKDUpKTt2YXIgZD1uZXcgWERvbWFpblJlcXVlc3Q7ZC5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7fSxkLm9udGltZW91dD1mdW5jdGlvbigpe3ZhciB0PVwiUmVxdWVzdCB0aW1lZCBvdXRcIixlPVwiRVRJTUVET1VUXCI7byhsKHQsZSkpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtvKG5ldyBFcnJvcihcIkVycm9yIGR1cmluZyByZXF1ZXN0XCIpKX0sZC5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgdD1wLmpzb25QYXJzZShkLnJlc3BvbnNlVGV4dCk7byh0LmVycm9yLHQudmFsdWUpfSxkLm9wZW4ocixlLCEwKSxkLnNlbmQobil9ZWxzZSBvKG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGEgbWV0aG9kIHRvIHRyYW5zcG9ydCBhIHJlcXVlc3RcIikpfX1jYXRjaCh0KXtvKHQpfX1mdW5jdGlvbiBzKCl7dmFyIHQsZSxyPVtmdW5jdGlvbigpe3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9LGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIil9LGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwzLlhNTEhUVFBcIil9LGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9XSxuPXIubGVuZ3RoO2ZvcihlPTA7ZTxuO2UrKyl0cnl7dD1yW2VdKCk7YnJlYWt9Y2F0Y2godCl7fXJldHVybiB0fWZ1bmN0aW9uIHUodCl7cmV0dXJuIHQmJnQuc3RhdHVzJiYyMDA9PT10LnN0YXR1c31mdW5jdGlvbiBjKHQpe3JldHVybiB0JiZwLmlzVHlwZSh0LnN0YXR1cyxcIm51bWJlclwiKSYmdC5zdGF0dXM+PTQwMCYmdC5zdGF0dXM8NjAwfWZ1bmN0aW9uIGwodCxlKXt2YXIgcj1uZXcgRXJyb3IodCk7cmV0dXJuIHIuY29kZT1lfHxcIkVOT1RGT1VORFwiLHJ9dmFyIHA9cig1KSxmPXIoMTgpLGg9cigxMyk7dC5leHBvcnRzPXtnZXQ6bixwb3N0Om99fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe3JldHVyblt0LGYuc3RyaW5naWZ5KHQsZSldfWZ1bmN0aW9uIG8odCxlKXt2YXIgcj10Lmxlbmd0aDtyZXR1cm4gcj4yKmU/dC5zbGljZSgwLGUpLmNvbmNhdCh0LnNsaWNlKHItZSkpOnR9ZnVuY3Rpb24gaSh0LGUscil7cj1cInVuZGVmaW5lZFwiPT10eXBlb2Ygcj8zMDpyO3ZhciBuLGk9dC5kYXRhLmJvZHk7aWYoaS50cmFjZV9jaGFpbilmb3IodmFyIGE9aS50cmFjZV9jaGFpbixzPTA7czxhLmxlbmd0aDtzKyspbj1hW3NdLmZyYW1lcyxuPW8obixyKSxhW3NdLmZyYW1lcz1uO2Vsc2UgaS50cmFjZSYmKG49aS50cmFjZS5mcmFtZXMsbj1vKG4sciksaS50cmFjZS5mcmFtZXM9bik7cmV0dXJuW3QsZi5zdHJpbmdpZnkodCxlKV19ZnVuY3Rpb24gYSh0LGUpe3JldHVybiBlJiZlLmxlbmd0aD50P2Uuc2xpY2UoMCx0LTMpLmNvbmNhdChcIi4uLlwiKTplfWZ1bmN0aW9uIHModCxlLHIpe2Z1bmN0aW9uIG4oZSxyLG8pe3N3aXRjaChmLnR5cGVOYW1lKHIpKXtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gYSh0LHIpO2Nhc2VcIm9iamVjdFwiOmNhc2VcImFycmF5XCI6cmV0dXJuIGYudHJhdmVyc2UocixuLG8pO2RlZmF1bHQ6cmV0dXJuIHJ9fXJldHVybiBlPWYudHJhdmVyc2UoZSxuLFtdKSxbZSxmLnN0cmluZ2lmeShlLHIpXX1mdW5jdGlvbiB1KHQpe3JldHVybiB0LmV4Y2VwdGlvbiYmKGRlbGV0ZSB0LmV4Y2VwdGlvbi5kZXNjcmlwdGlvbix0LmV4Y2VwdGlvbi5tZXNzYWdlPWEoMjU1LHQuZXhjZXB0aW9uLm1lc3NhZ2UpKSx0LmZyYW1lcz1vKHQuZnJhbWVzLDEpLHR9ZnVuY3Rpb24gYyh0LGUpe3ZhciByPXQuZGF0YS5ib2R5O2lmKHIudHJhY2VfY2hhaW4pZm9yKHZhciBuPXIudHJhY2VfY2hhaW4sbz0wO288bi5sZW5ndGg7bysrKW5bb109dShuW29dKTtlbHNlIHIudHJhY2UmJihyLnRyYWNlPXUoci50cmFjZSkpO3JldHVyblt0LGYuc3RyaW5naWZ5KHQsZSldfWZ1bmN0aW9uIGwodCxlKXtyZXR1cm4gdC5sZW5ndGg+ZX1mdW5jdGlvbiBwKHQsZSxyKXtyPVwidW5kZWZpbmVkXCI9PXR5cGVvZiByPzUyNDI4ODpyO2Zvcih2YXIgbyxhLHUscD1bbixpLHMuYmluZChudWxsLDEwMjQpLHMuYmluZChudWxsLDUxMikscy5iaW5kKG51bGwsMjU2KSxjXTtvPXAuc2hpZnQoKTspaWYoYT1vKHQsZSksdD1hWzBdLHU9YVsxXSx1LmVycm9yfHwhbCh1LnZhbHVlLHIpKXJldHVybiB1O3JldHVybiB1fXZhciBmPXIoNSk7dC5leHBvcnRzPXt0cnVuY2F0ZTpwLHJhdzpuLHRydW5jYXRlRnJhbWVzOmksdHJ1bmNhdGVTdHJpbmdzOnMsbWF5YmVUcnVuY2F0ZVZhbHVlOmF9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7dmFyIGUscixuPXtwcm90b2NvbDpudWxsLGF1dGg6bnVsbCxob3N0Om51bGwscGF0aDpudWxsLGhhc2g6bnVsbCxocmVmOnQsaG9zdG5hbWU6bnVsbCxwb3J0Om51bGwscGF0aG5hbWU6bnVsbCxzZWFyY2g6bnVsbCxxdWVyeTpudWxsfTtpZihlPXQuaW5kZXhPZihcIi8vXCIpLGUhPT0tMT8obi5wcm90b2NvbD10LnN1YnN0cmluZygwLGUpLHI9ZSsyKTpyPTAsZT10LmluZGV4T2YoXCJAXCIsciksZSE9PS0xJiYobi5hdXRoPXQuc3Vic3RyaW5nKHIsZSkscj1lKzEpLGU9dC5pbmRleE9mKFwiL1wiLHIpLGU9PT0tMSl7aWYoZT10LmluZGV4T2YoXCI/XCIsciksZT09PS0xKXJldHVybiBlPXQuaW5kZXhPZihcIiNcIixyKSxlPT09LTE/bi5ob3N0PXQuc3Vic3RyaW5nKHIpOihuLmhvc3Q9dC5zdWJzdHJpbmcocixlKSxuLmhhc2g9dC5zdWJzdHJpbmcoZSkpLG4uaG9zdG5hbWU9bi5ob3N0LnNwbGl0KFwiOlwiKVswXSxuLnBvcnQ9bi5ob3N0LnNwbGl0KFwiOlwiKVsxXSxuLnBvcnQmJihuLnBvcnQ9cGFyc2VJbnQobi5wb3J0LDEwKSksbjtuLmhvc3Q9dC5zdWJzdHJpbmcocixlKSxuLmhvc3RuYW1lPW4uaG9zdC5zcGxpdChcIjpcIilbMF0sbi5wb3J0PW4uaG9zdC5zcGxpdChcIjpcIilbMV0sbi5wb3J0JiYobi5wb3J0PXBhcnNlSW50KG4ucG9ydCwxMCkpLHI9ZX1lbHNlIG4uaG9zdD10LnN1YnN0cmluZyhyLGUpLG4uaG9zdG5hbWU9bi5ob3N0LnNwbGl0KFwiOlwiKVswXSxuLnBvcnQ9bi5ob3N0LnNwbGl0KFwiOlwiKVsxXSxuLnBvcnQmJihuLnBvcnQ9cGFyc2VJbnQobi5wb3J0LDEwKSkscj1lO2lmKGU9dC5pbmRleE9mKFwiI1wiLHIpLGU9PT0tMT9uLnBhdGg9dC5zdWJzdHJpbmcocik6KG4ucGF0aD10LnN1YnN0cmluZyhyLGUpLG4uaGFzaD10LnN1YnN0cmluZyhlKSksbi5wYXRoKXt2YXIgbz1uLnBhdGguc3BsaXQoXCI/XCIpO24ucGF0aG5hbWU9b1swXSxuLnF1ZXJ5PW9bMV0sbi5zZWFyY2g9bi5xdWVyeT9cIj9cIituLnF1ZXJ5Om51bGx9cmV0dXJuIG59dC5leHBvcnRzPXtwYXJzZTpyfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlLHIpe2lmKHQuZGF0YT10LmRhdGF8fHt9LHQuZXJyKXRyeXt0LnN0YWNrSW5mbz10LmVyci5fc2F2ZWRTdGFja1RyYWNlfHxkLnBhcnNlKHQuZXJyKX1jYXRjaChlKXttLmVycm9yKFwiRXJyb3Igd2hpbGUgcGFyc2luZyB0aGUgZXJyb3Igb2JqZWN0LlwiLGUpO3RyeXt0Lm1lc3NhZ2U9dC5lcnIubWVzc2FnZXx8dC5lcnIuZGVzY3JpcHRpb258fHQubWVzc2FnZXx8U3RyaW5nKHQuZXJyKX1jYXRjaChlKXt0Lm1lc3NhZ2U9U3RyaW5nKHQuZXJyKXx8U3RyaW5nKGUpfWRlbGV0ZSB0LmVycn1yKG51bGwsdCl9ZnVuY3Rpb24gbyh0LGUscil7dC5tZXNzYWdlfHx0LnN0YWNrSW5mb3x8dC5jdXN0b218fHIobmV3IEVycm9yKFwiTm8gbWVzc2FnZSwgc3RhY2sgaW5mbywgb3IgY3VzdG9tIGRhdGFcIiksbnVsbCkscihudWxsLHQpfWZ1bmN0aW9uIGkodCxlLHIpe3ZhciBuPWUucGF5bG9hZCYmZS5wYXlsb2FkLmVudmlyb25tZW50fHxlLmVudmlyb25tZW50O3QuZGF0YT1oLm1lcmdlKHQuZGF0YSx7ZW52aXJvbm1lbnQ6bixsZXZlbDp0LmxldmVsLGVuZHBvaW50OmUuZW5kcG9pbnQscGxhdGZvcm06XCJicm93c2VyXCIsZnJhbWV3b3JrOlwiYnJvd3Nlci1qc1wiLGxhbmd1YWdlOlwiamF2YXNjcmlwdFwiLHNlcnZlcjp7fSx1dWlkOnQudXVpZCxub3RpZmllcjp7bmFtZTpcInJvbGxiYXItYnJvd3Nlci1qc1wiLHZlcnNpb246ZS52ZXJzaW9ufX0pLHIobnVsbCx0KX1mdW5jdGlvbiBhKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7aWYoIXR8fCF0LmxvY2F0aW9uKXJldHVybiBuKG51bGwsZSk7dmFyIG89XCIkcmVtb3RlX2lwXCI7ci5jYXB0dXJlSXA/ci5jYXB0dXJlSXAhPT0hMCYmKG8rPVwiX2Fub255bWl6ZVwiKTpvPW51bGwsaC5zZXQoZSxcImRhdGEucmVxdWVzdFwiLHt1cmw6dC5sb2NhdGlvbi5ocmVmLHF1ZXJ5X3N0cmluZzp0LmxvY2F0aW9uLnNlYXJjaCx1c2VyX2lwOm99KSxuKG51bGwsZSl9fWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtpZighdClyZXR1cm4gbihudWxsLGUpO3ZhciBvPXQubmF2aWdhdG9yfHx7fSxpPXQuc2NyZWVufHx7fTtoLnNldChlLFwiZGF0YS5jbGllbnRcIix7cnVudGltZV9tczplLnRpbWVzdGFtcC10Ll9yb2xsYmFyU3RhcnRUaW1lLHRpbWVzdGFtcDpNYXRoLnJvdW5kKGUudGltZXN0YW1wLzFlMyksamF2YXNjcmlwdDp7YnJvd3NlcjpvLnVzZXJBZ2VudCxsYW5ndWFnZTpvLmxhbmd1YWdlLGNvb2tpZV9lbmFibGVkOm8uY29va2llRW5hYmxlZCxzY3JlZW46e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0fX19KSxuKG51bGwsZSl9fWZ1bmN0aW9uIHUodCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtpZighdHx8IXQubmF2aWdhdG9yKXJldHVybiBuKG51bGwsZSk7Zm9yKHZhciBvLGk9W10sYT10Lm5hdmlnYXRvci5wbHVnaW5zfHxbXSxzPTAsdT1hLmxlbmd0aDtzPHU7KytzKW89YVtzXSxpLnB1c2goe25hbWU6by5uYW1lLGRlc2NyaXB0aW9uOm8uZGVzY3JpcHRpb259KTtoLnNldChlLFwiZGF0YS5jbGllbnQuamF2YXNjcmlwdC5wbHVnaW5zXCIsaSksbihudWxsLGUpfX1mdW5jdGlvbiBjKHQsZSxyKXt0LnN0YWNrSW5mbz9wKHQsZSxyKTpsKHQsZSxyKX1mdW5jdGlvbiBsKHQsZSxyKXt2YXIgbj10Lm1lc3NhZ2Usbz10LmN1c3RvbTtpZighbilpZihvKXt2YXIgaT1lLnNjcnViRmllbGRzLGE9aC5zdHJpbmdpZnkoaC5zY3J1YihvLGkpKTtuPWEuZXJyb3J8fGEudmFsdWV8fFwiXCJ9ZWxzZSBuPVwiXCI7dmFyIHM9e2JvZHk6bn07byYmKHMuZXh0cmE9aC5tZXJnZShvKSksaC5zZXQodCxcImRhdGEuYm9keVwiLHttZXNzYWdlOnN9KSxyKG51bGwsdCl9ZnVuY3Rpb24gcCh0LGUscil7dmFyIG49dC5kYXRhLmRlc2NyaXB0aW9uLG89dC5zdGFja0luZm8saT10LmN1c3RvbSxhPWQuZ3Vlc3NFcnJvckNsYXNzKG8ubWVzc2FnZSkscz1vLm5hbWV8fGFbMF0sdT1hWzFdLGM9e2V4Y2VwdGlvbjp7Y2xhc3M6cyxtZXNzYWdlOnV9fTtuJiYoYy5leGNlcHRpb24uZGVzY3JpcHRpb249bik7dmFyIHA9by5zdGFjaztpZihwJiYwPT09cC5sZW5ndGgmJnQuX3VuaGFuZGxlZFN0YWNrSW5mbyYmdC5fdW5oYW5kbGVkU3RhY2tJbmZvLnN0YWNrJiYocD10Ll91bmhhbmRsZWRTdGFja0luZm8uc3RhY2spLHApezA9PT1wLmxlbmd0aCYmKGMuZXhjZXB0aW9uLnN0YWNrPW8ucmF3U3RhY2ssYy5leGNlcHRpb24ucmF3PVN0cmluZyhvLnJhd0V4Y2VwdGlvbikpO3ZhciBmLG0sZyx2LHksYix3LF87Zm9yKGMuZnJhbWVzPVtdLHc9MDt3PHAubGVuZ3RoOysrdylmPXBbd10sbT17ZmlsZW5hbWU6Zi51cmw/aC5zYW5pdGl6ZVVybChmLnVybCk6XCIodW5rbm93bilcIixsaW5lbm86Zi5saW5lfHxudWxsLG1ldGhvZDpmLmZ1bmMmJlwiP1wiIT09Zi5mdW5jP2YuZnVuYzpcIlthbm9ueW1vdXNdXCIsY29sbm86Zi5jb2x1bW59LGUuc2VuZEZyYW1lVXJsJiYobS51cmw9Zi51cmwpLG0ubWV0aG9kJiZtLm1ldGhvZC5lbmRzV2l0aCYmbS5tZXRob2QuZW5kc1dpdGgoXCJfcm9sbGJhcl93cmFwcGVkXCIpfHwoZz12PXk9bnVsbCxiPWYuY29udGV4dD9mLmNvbnRleHQubGVuZ3RoOjAsYiYmKF89TWF0aC5mbG9vcihiLzIpLHY9Zi5jb250ZXh0LnNsaWNlKDAsXyksZz1mLmNvbnRleHRbX10seT1mLmNvbnRleHQuc2xpY2UoXykpLGcmJihtLmNvZGU9ZyksKHZ8fHkpJiYobS5jb250ZXh0PXt9LHYmJnYubGVuZ3RoJiYobS5jb250ZXh0LnByZT12KSx5JiZ5Lmxlbmd0aCYmKG0uY29udGV4dC5wb3N0PXkpKSxmLmFyZ3MmJihtLmFyZ3M9Zi5hcmdzKSxjLmZyYW1lcy5wdXNoKG0pKTtjLmZyYW1lcy5yZXZlcnNlKCksaSYmKGMuZXh0cmE9aC5tZXJnZShpKSksaC5zZXQodCxcImRhdGEuYm9keVwiLHt0cmFjZTpjfSkscihudWxsLHQpfWVsc2UgdC5tZXNzYWdlPXMrXCI6IFwiK3UsbCh0LGUscil9ZnVuY3Rpb24gZih0LGUscil7dmFyIG49ZS5zY3J1YkZpZWxkczt0LmRhdGE9aC5zY3J1Yih0LmRhdGEsbikscihudWxsLHQpfXZhciBoPXIoNSksZD1yKDIxKSxtPXIoMTMpO3QuZXhwb3J0cz17aGFuZGxlSXRlbVdpdGhFcnJvcjpuLGVuc3VyZUl0ZW1IYXNTb21ldGhpbmdUb1NheTpvLGFkZEJhc2VJbmZvOmksYWRkUmVxdWVzdEluZm86YSxhZGRDbGllbnRJbmZvOnMsYWRkUGx1Z2luSW5mbzp1LGFkZEJvZHk6YyxzY3J1YlBheWxvYWQ6Zn19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7cmV0dXJuIGx9ZnVuY3Rpb24gbygpe3JldHVybiBudWxsfWZ1bmN0aW9uIGkodCl7dmFyIGU9e307cmV0dXJuIGUuX3N0YWNrRnJhbWU9dCxlLnVybD10LmZpbGVOYW1lLGUubGluZT10LmxpbmVOdW1iZXIsZS5mdW5jPXQuZnVuY3Rpb25OYW1lLGUuY29sdW1uPXQuY29sdW1uTnVtYmVyLGUuYXJncz10LmFyZ3MsZS5jb250ZXh0PW8oKSxlfWZ1bmN0aW9uIGEodCl7ZnVuY3Rpb24gZSgpe3ZhciBlLHI9W107aWYodC5zdGFjayllPXQ7ZWxzZSB0cnl7dGhyb3cgdH1jYXRjaCh0KXtlPXR9dHJ5e3I9Yy5wYXJzZShlKX1jYXRjaCh0KXtyPVtdfWZvcih2YXIgbj1bXSxvPTA7bzxyLmxlbmd0aDtvKyspbi5wdXNoKG5ldyBpKHJbb10pKTtyZXR1cm4gbn12YXIgcj10LmNvbnN0cnVjdG9yJiZ0LmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuKCFyfHwhci5sZW5ndGh8fHIubGVuZ3RoPDMpJiYocj10Lm5hbWUpLHtzdGFjazplKCksbWVzc2FnZTp0Lm1lc3NhZ2UsbmFtZTpyLHJhd1N0YWNrOnQuc3RhY2sscmF3RXhjZXB0aW9uOnR9fWZ1bmN0aW9uIHModCl7cmV0dXJuIG5ldyBhKHQpfWZ1bmN0aW9uIHUodCl7aWYoIXR8fCF0Lm1hdGNoKXJldHVybltcIlVua25vd24gZXJyb3IuIFRoZXJlIHdhcyBubyBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkuXCIsXCJcIl07dmFyIGU9dC5tYXRjaChwKSxyPVwiKHVua25vd24pXCI7cmV0dXJuIGUmJihyPWVbZS5sZW5ndGgtMV0sdD10LnJlcGxhY2UoKGVbZS5sZW5ndGgtMl18fFwiXCIpK3IrXCI6XCIsXCJcIiksdD10LnJlcGxhY2UoLyheW1xcc10rfFtcXHNdKyQpL2csXCJcIikpLFtyLHRdfXZhciBjPXIoMjIpLGw9XCI/XCIscD1uZXcgUmVnRXhwKFwiXigoW2EtekEtWjAtOS1fJCBdKik6ICopPyhVbmNhdWdodCApPyhbYS16QS1aMC05LV8kIF0qKTogXCIpO3QuZXhwb3J0cz17Z3Vlc3NGdW5jdGlvbk5hbWU6bixndWVzc0Vycm9yQ2xhc3M6dSxnYXRoZXJDb250ZXh0Om8scGFyc2U6cyxTdGFjazphLEZyYW1lOml9fSxmdW5jdGlvbih0LGUscil7dmFyIG4sbyxpOyFmdW5jdGlvbihhLHMpe1widXNlIHN0cmljdFwiO289W3IoMjMpXSxuPXMsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24uYXBwbHkoZSxvKTpuLCEodm9pZCAwIT09aSYmKHQuZXhwb3J0cz1pKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LGUscil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLm1hcClyZXR1cm4gdC5tYXAoZSxyKTtmb3IodmFyIG49bmV3IEFycmF5KHQubGVuZ3RoKSxvPTA7bzx0Lmxlbmd0aDtvKyspbltvXT1lLmNhbGwocix0W29dKTtyZXR1cm4gbn1mdW5jdGlvbiByKHQsZSxyKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuZmlsdGVyKXJldHVybiB0LmZpbHRlcihlLHIpO2Zvcih2YXIgbj1bXSxvPTA7bzx0Lmxlbmd0aDtvKyspZS5jYWxsKHIsdFtvXSkmJm4ucHVzaCh0W29dKTtyZXR1cm4gbn12YXIgbj0vKF58QClcXFMrXFw6XFxkKy8sbz0vXlxccyphdCAuKihcXFMrXFw6XFxkK3xcXChuYXRpdmVcXCkpL20saT0vXihldmFsQCk/KFxcW25hdGl2ZSBjb2RlXFxdKT8kLztyZXR1cm57cGFyc2U6ZnVuY3Rpb24odCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuc3RhY2t0cmFjZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRbXCJvcGVyYSNzb3VyY2Vsb2NcIl0pcmV0dXJuIHRoaXMucGFyc2VPcGVyYSh0KTtpZih0LnN0YWNrJiZ0LnN0YWNrLm1hdGNoKG8pKXJldHVybiB0aGlzLnBhcnNlVjhPcklFKHQpO2lmKHQuc3RhY2spcmV0dXJuIHRoaXMucGFyc2VGRk9yU2FmYXJpKHQpO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwYXJzZSBnaXZlbiBFcnJvciBvYmplY3RcIil9LGV4dHJhY3RMb2NhdGlvbjpmdW5jdGlvbih0KXtpZih0LmluZGV4T2YoXCI6XCIpPT09LTEpcmV0dXJuW3RdO3ZhciBlPXQucmVwbGFjZSgvW1xcKFxcKVxcc10vZyxcIlwiKS5zcGxpdChcIjpcIikscj1lLnBvcCgpLG49ZVtlLmxlbmd0aC0xXTtpZighaXNOYU4ocGFyc2VGbG9hdChuKSkmJmlzRmluaXRlKG4pKXt2YXIgbz1lLnBvcCgpO3JldHVybltlLmpvaW4oXCI6XCIpLG8scl19cmV0dXJuW2Uuam9pbihcIjpcIikscix2b2lkIDBdfSxwYXJzZVY4T3JJRTpmdW5jdGlvbihuKXt2YXIgaT1yKG4uc3RhY2suc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24odCl7cmV0dXJuISF0Lm1hdGNoKG8pfSx0aGlzKTtyZXR1cm4gZShpLGZ1bmN0aW9uKGUpe2UuaW5kZXhPZihcIihldmFsIFwiKT4tMSYmKGU9ZS5yZXBsYWNlKC9ldmFsIGNvZGUvZyxcImV2YWxcIikucmVwbGFjZSgvKFxcKGV2YWwgYXQgW15cXCgpXSopfChcXClcXCwuKiQpL2csXCJcIikpO3ZhciByPWUucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xcKGV2YWwgY29kZS9nLFwiKFwiKS5zcGxpdCgvXFxzKy8pLnNsaWNlKDEpLG49dGhpcy5leHRyYWN0TG9jYXRpb24oci5wb3AoKSksbz1yLmpvaW4oXCIgXCIpfHx2b2lkIDAsaT1cImV2YWxcIj09PW5bMF0/dm9pZCAwOm5bMF07cmV0dXJuIG5ldyB0KG8sdm9pZCAwLGksblsxXSxuWzJdLGUpfSx0aGlzKX0scGFyc2VGRk9yU2FmYXJpOmZ1bmN0aW9uKG4pe3ZhciBvPXIobi5zdGFjay5zcGxpdChcIlxcblwiKSxmdW5jdGlvbih0KXtyZXR1cm4hdC5tYXRjaChpKX0sdGhpcyk7cmV0dXJuIGUobyxmdW5jdGlvbihlKXtpZihlLmluZGV4T2YoXCIgPiBldmFsXCIpPi0xJiYoZT1lLnJlcGxhY2UoLyBsaW5lIChcXGQrKSg/OiA+IGV2YWwgbGluZSBcXGQrKSogPiBldmFsXFw6XFxkK1xcOlxcZCsvZyxcIjokMVwiKSksZS5pbmRleE9mKFwiQFwiKT09PS0xJiZlLmluZGV4T2YoXCI6XCIpPT09LTEpcmV0dXJuIG5ldyB0KGUpO3ZhciByPWUuc3BsaXQoXCJAXCIpLG49dGhpcy5leHRyYWN0TG9jYXRpb24oci5wb3AoKSksbz1yLnNoaWZ0KCl8fHZvaWQgMDtyZXR1cm4gbmV3IHQobyx2b2lkIDAsblswXSxuWzFdLG5bMl0sZSl9LHRoaXMpfSxwYXJzZU9wZXJhOmZ1bmN0aW9uKHQpe3JldHVybiF0LnN0YWNrdHJhY2V8fHQubWVzc2FnZS5pbmRleE9mKFwiXFxuXCIpPi0xJiZ0Lm1lc3NhZ2Uuc3BsaXQoXCJcXG5cIikubGVuZ3RoPnQuc3RhY2t0cmFjZS5zcGxpdChcIlxcblwiKS5sZW5ndGg/dGhpcy5wYXJzZU9wZXJhOSh0KTp0LnN0YWNrP3RoaXMucGFyc2VPcGVyYTExKHQpOnRoaXMucGFyc2VPcGVyYTEwKHQpfSxwYXJzZU9wZXJhOTpmdW5jdGlvbihlKXtmb3IodmFyIHI9L0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykvaSxuPWUubWVzc2FnZS5zcGxpdChcIlxcblwiKSxvPVtdLGk9MixhPW4ubGVuZ3RoO2k8YTtpKz0yKXt2YXIgcz1yLmV4ZWMobltpXSk7cyYmby5wdXNoKG5ldyB0KHZvaWQgMCx2b2lkIDAsc1syXSxzWzFdLHZvaWQgMCxuW2ldKSl9cmV0dXJuIG99LHBhcnNlT3BlcmExMDpmdW5jdGlvbihlKXtmb3IodmFyIHI9L0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykoPzo6IEluIGZ1bmN0aW9uIChcXFMrKSk/JC9pLG49ZS5zdGFja3RyYWNlLnNwbGl0KFwiXFxuXCIpLG89W10saT0wLGE9bi5sZW5ndGg7aTxhO2krPTIpe3ZhciBzPXIuZXhlYyhuW2ldKTtzJiZvLnB1c2gobmV3IHQoc1szXXx8dm9pZCAwLHZvaWQgMCxzWzJdLHNbMV0sdm9pZCAwLG5baV0pKX1yZXR1cm4gb30scGFyc2VPcGVyYTExOmZ1bmN0aW9uKG8pe3ZhciBpPXIoby5zdGFjay5zcGxpdChcIlxcblwiKSxmdW5jdGlvbih0KXtyZXR1cm4hIXQubWF0Y2gobikmJiF0Lm1hdGNoKC9eRXJyb3IgY3JlYXRlZCBhdC8pfSx0aGlzKTtyZXR1cm4gZShpLGZ1bmN0aW9uKGUpe3ZhciByLG49ZS5zcGxpdChcIkBcIiksbz10aGlzLmV4dHJhY3RMb2NhdGlvbihuLnBvcCgpKSxpPW4uc2hpZnQoKXx8XCJcIixhPWkucmVwbGFjZSgvPGFub255bW91cyBmdW5jdGlvbig6IChcXHcrKSk/Pi8sXCIkMlwiKS5yZXBsYWNlKC9cXChbXlxcKV0qXFwpL2csXCJcIil8fHZvaWQgMDtpLm1hdGNoKC9cXCgoW15cXCldKilcXCkvKSYmKHI9aS5yZXBsYWNlKC9eW15cXChdK1xcKChbXlxcKV0qKVxcKSQvLFwiJDFcIikpO3ZhciBzPXZvaWQgMD09PXJ8fFwiW2FyZ3VtZW50cyBub3QgYXZhaWxhYmxlXVwiPT09cj92b2lkIDA6ci5zcGxpdChcIixcIik7cmV0dXJuIG5ldyB0KGEscyxvWzBdLG9bMV0sb1syXSxlKX0sdGhpcyl9fX0pfSxmdW5jdGlvbih0LGUscil7dmFyIG4sbyxpOyFmdW5jdGlvbihyLGEpe1widXNlIHN0cmljdFwiO289W10sbj1hLGk9XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uLmFwcGx5KGUsbyk6biwhKHZvaWQgMCE9PWkmJih0LmV4cG9ydHM9aSkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfWZ1bmN0aW9uIGUodCxlLHIsbixvLGkpe3ZvaWQgMCE9PXQmJnRoaXMuc2V0RnVuY3Rpb25OYW1lKHQpLHZvaWQgMCE9PWUmJnRoaXMuc2V0QXJncyhlKSx2b2lkIDAhPT1yJiZ0aGlzLnNldEZpbGVOYW1lKHIpLHZvaWQgMCE9PW4mJnRoaXMuc2V0TGluZU51bWJlcihuKSx2b2lkIDAhPT1vJiZ0aGlzLnNldENvbHVtbk51bWJlcihvKSx2b2lkIDAhPT1pJiZ0aGlzLnNldFNvdXJjZShpKX1yZXR1cm4gZS5wcm90b3R5cGU9e2dldEZ1bmN0aW9uTmFtZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZ1bmN0aW9uTmFtZX0sc2V0RnVuY3Rpb25OYW1lOmZ1bmN0aW9uKHQpe3RoaXMuZnVuY3Rpb25OYW1lPVN0cmluZyh0KX0sZ2V0QXJnczpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFyZ3N9LHNldEFyZ3M6ZnVuY3Rpb24odCl7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmdzIG11c3QgYmUgYW4gQXJyYXlcIik7dGhpcy5hcmdzPXR9LGdldEZpbGVOYW1lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsZU5hbWV9LHNldEZpbGVOYW1lOmZ1bmN0aW9uKHQpe3RoaXMuZmlsZU5hbWU9U3RyaW5nKHQpfSxnZXRMaW5lTnVtYmVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGluZU51bWJlcn0sc2V0TGluZU51bWJlcjpmdW5jdGlvbihlKXtpZighdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiTGluZSBOdW1iZXIgbXVzdCBiZSBhIE51bWJlclwiKTt0aGlzLmxpbmVOdW1iZXI9TnVtYmVyKGUpfSxnZXRDb2x1bW5OdW1iZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2x1bW5OdW1iZXJ9LHNldENvbHVtbk51bWJlcjpmdW5jdGlvbihlKXtpZighdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29sdW1uIE51bWJlciBtdXN0IGJlIGEgTnVtYmVyXCIpO3RoaXMuY29sdW1uTnVtYmVyPU51bWJlcihlKX0sZ2V0U291cmNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc291cmNlfSxzZXRTb3VyY2U6ZnVuY3Rpb24odCl7dGhpcy5zb3VyY2U9U3RyaW5nKHQpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZ2V0RnVuY3Rpb25OYW1lKCl8fFwie2Fub255bW91c31cIixyPVwiKFwiKyh0aGlzLmdldEFyZ3MoKXx8W10pLmpvaW4oXCIsXCIpK1wiKVwiLG49dGhpcy5nZXRGaWxlTmFtZSgpP1wiQFwiK3RoaXMuZ2V0RmlsZU5hbWUoKTpcIlwiLG89dCh0aGlzLmdldExpbmVOdW1iZXIoKSk/XCI6XCIrdGhpcy5nZXRMaW5lTnVtYmVyKCk6XCJcIixpPXQodGhpcy5nZXRDb2x1bW5OdW1iZXIoKSk/XCI6XCIrdGhpcy5nZXRDb2x1bW5OdW1iZXIoKTpcIlwiO3JldHVybiBlK3IrbitvK2l9fSxlfSl9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSxyKXt2YXIgbj1lLnBheWxvYWR8fHt9O24uYm9keSYmZGVsZXRlIG4uYm9keTt2YXIgbz11Lm1lcmdlKHQuZGF0YSxuKTt0Ll9pc1VuY2F1Z2h0JiYoby5faXNVbmNhdWdodD0hMCksdC5fb3JpZ2luYWxBcmdzJiYoby5fb3JpZ2luYWxBcmdzPXQuX29yaWdpbmFsQXJncykscihudWxsLG8pfWZ1bmN0aW9uIG8odCxlLHIpe3QudGVsZW1ldHJ5RXZlbnRzJiZ1LnNldCh0LFwiZGF0YS5ib2R5LnRlbGVtZXRyeVwiLHQudGVsZW1ldHJ5RXZlbnRzKSxyKG51bGwsdCl9ZnVuY3Rpb24gaSh0LGUscil7aWYoIXQubWVzc2FnZSlyZXR1cm4gdm9pZCByKG51bGwsdCk7dmFyIG49XCJkYXRhLmJvZHkudHJhY2VfY2hhaW4uMFwiLG89dS5nZXQodCxuKTtpZihvfHwobj1cImRhdGEuYm9keS50cmFjZVwiLG89dS5nZXQodCxuKSksbyl7aWYoIW8uZXhjZXB0aW9ufHwhby5leGNlcHRpb24uZGVzY3JpcHRpb24pcmV0dXJuIHUuc2V0KHQsbitcIi5leGNlcHRpb24uZGVzY3JpcHRpb25cIix0Lm1lc3NhZ2UpLHZvaWQgcihudWxsLHQpO3ZhciBpPXUuZ2V0KHQsbitcIi5leHRyYVwiKXx8e30sYT11Lm1lcmdlKGkse21lc3NhZ2U6dC5tZXNzYWdlfSk7dS5zZXQodCxuK1wiLmV4dHJhXCIsYSl9cihudWxsLHQpfWZ1bmN0aW9uIGEodCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXt2YXIgbz11Lm1lcmdlKGUpO3RyeXt1LmlzRnVuY3Rpb24oci50cmFuc2Zvcm0pJiZyLnRyYW5zZm9ybShvLmRhdGEsZSl9Y2F0Y2gobyl7cmV0dXJuIHIudHJhbnNmb3JtPW51bGwsdC5lcnJvcihcIkVycm9yIHdoaWxlIGNhbGxpbmcgY3VzdG9tIHRyYW5zZm9ybSgpIGZ1bmN0aW9uLiBSZW1vdmluZyBjdXN0b20gdHJhbnNmb3JtKCkuXCIsbyksdm9pZCBuKG51bGwsZSl9bihudWxsLG8pfX1mdW5jdGlvbiBzKHQsZSxyKXtpZighZS5zZW5kQ29uZmlnKXJldHVybiByKG51bGwsdCk7dmFyIG49XCJfcm9sbGJhckNvbmZpZ1wiLG89dS5nZXQodCxcImRhdGEuY3VzdG9tXCIpfHx7fTtvW25dPWUsdC5kYXRhLmN1c3RvbT1vLHIobnVsbCx0KX12YXIgdT1yKDUpO3QuZXhwb3J0cz17aXRlbVRvUGF5bG9hZDpuLGFkZFRlbGVtZXRyeURhdGE6byxhZGRNZXNzYWdlV2l0aEVycm9yOmksdXNlclRyYW5zZm9ybTphLGFkZENvbmZpZ1RvUGF5bG9hZDpzfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4hby5nZXQoZSxcInBsdWdpbnMuanF1ZXJ5Lmlnbm9yZUFqYXhFcnJvcnNcIil8fCFvLmdldCh0LFwiYm9keS5tZXNzYWdlLmV4dHJhLmlzQWpheFwiKX12YXIgbz1yKDUpO3QuZXhwb3J0cz17Y2hlY2tJZ25vcmU6bn19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSl7dmFyIHI9dC5sZXZlbCxuPWMuTEVWRUxTW3JdfHwwLG89ZS5yZXBvcnRMZXZlbCxpPWMuTEVWRUxTW29dfHwwO3JldHVybiEobjxpKX1mdW5jdGlvbiBvKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3ZhciBuPSEhZS5faXNVbmNhdWdodDtkZWxldGUgZS5faXNVbmNhdWdodDt2YXIgbz1lLl9vcmlnaW5hbEFyZ3M7ZGVsZXRlIGUuX29yaWdpbmFsQXJnczt0cnl7Yy5pc0Z1bmN0aW9uKHIub25TZW5kQ2FsbGJhY2spJiZyLm9uU2VuZENhbGxiYWNrKG4sbyxlKX1jYXRjaChlKXtyLm9uU2VuZENhbGxiYWNrPW51bGwsdC5lcnJvcihcIkVycm9yIHdoaWxlIGNhbGxpbmcgb25TZW5kQ2FsbGJhY2ssIHJlbW92aW5nXCIsZSl9dHJ5e2lmKGMuaXNGdW5jdGlvbihyLmNoZWNrSWdub3JlKSYmci5jaGVja0lnbm9yZShuLG8sZSkpcmV0dXJuITF9Y2F0Y2goZSl7ci5jaGVja0lnbm9yZT1udWxsLHQuZXJyb3IoXCJFcnJvciB3aGlsZSBjYWxsaW5nIGN1c3RvbSBjaGVja0lnbm9yZSgpLCByZW1vdmluZ1wiLGUpfXJldHVybiEwfX1mdW5jdGlvbiBpKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiFzKGUscixcImJsYWNrbGlzdFwiLHQpfX1mdW5jdGlvbiBhKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBzKGUscixcIndoaXRlbGlzdFwiLHQpfX1mdW5jdGlvbiBzKHQsZSxyLG4pe3ZhciBvPSExO1wiYmxhY2tsaXN0XCI9PT1yJiYobz0hMCk7dmFyIGksYSxzLHUsbCxwLGYsaCxkLG07dHJ5e2lmKGk9bz9lLmhvc3RCbGFja0xpc3Q6ZS5ob3N0V2hpdGVMaXN0LGY9aSYmaS5sZW5ndGgsYT1jLmdldCh0LFwiYm9keS50cmFjZVwiKSwhaXx8MD09PWYpcmV0dXJuIW87aWYoIWF8fCFhLmZyYW1lc3x8MD09PWEuZnJhbWVzLmxlbmd0aClyZXR1cm4hbztmb3IobD1hLmZyYW1lcy5sZW5ndGgsZD0wO2Q8bDtkKyspe2lmKHM9YS5mcmFtZXNbZF0sdT1zLmZpbGVuYW1lLCFjLmlzVHlwZSh1LFwic3RyaW5nXCIpKXJldHVybiFvO2ZvcihtPTA7bTxmO20rKylpZihwPWlbbV0saD1uZXcgUmVnRXhwKHApLGgudGVzdCh1KSlyZXR1cm4hMH19Y2F0Y2godCl7bz9lLmhvc3RCbGFja0xpc3Q9bnVsbDplLmhvc3RXaGl0ZUxpc3Q9bnVsbDt2YXIgZz1vP1wiaG9zdEJsYWNrTGlzdFwiOlwiaG9zdFdoaXRlTGlzdFwiO3JldHVybiBuLmVycm9yKFwiRXJyb3Igd2hpbGUgcmVhZGluZyB5b3VyIGNvbmZpZ3VyYXRpb24ncyBcIitnK1wiIG9wdGlvbi4gUmVtb3ZpbmcgY3VzdG9tIFwiK2crXCIuXCIsdCksIW99cmV0dXJuITF9ZnVuY3Rpb24gdSh0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXt2YXIgbixvLGksYSxzLHUsbCxwLGY7dHJ5e2lmKHM9ITEsaT1yLmlnbm9yZWRNZXNzYWdlcywhaXx8MD09PWkubGVuZ3RoKXJldHVybiEwO2lmKGw9ZS5ib2R5LHA9Yy5nZXQobCxcInRyYWNlLmV4Y2VwdGlvbi5tZXNzYWdlXCIpLGY9Yy5nZXQobCxcIm1lc3NhZ2UuYm9keVwiKSxuPXB8fGYsIW4pcmV0dXJuITA7Zm9yKGE9aS5sZW5ndGgsbz0wO288YSYmKHU9bmV3IFJlZ0V4cChpW29dLFwiZ2lcIiksIShzPXUudGVzdChuKSkpO28rKyk7fWNhdGNoKGUpe3IuaWdub3JlZE1lc3NhZ2VzPW51bGwsdC5lcnJvcihcIkVycm9yIHdoaWxlIHJlYWRpbmcgeW91ciBjb25maWd1cmF0aW9uJ3MgaWdub3JlZE1lc3NhZ2VzIG9wdGlvbi4gUmVtb3ZpbmcgY3VzdG9tIGlnbm9yZWRNZXNzYWdlcy5cIil9cmV0dXJuIXN9fXZhciBjPXIoNSk7dC5leHBvcnRzPXtjaGVja0xldmVsOm4sdXNlckNoZWNrSWdub3JlOm8sdXJsSXNOb3RCbGFja2xpc3RlZDppLHVybElzV2hpdGVsaXN0ZWQ6YSxtZXNzYWdlSXNJZ25vcmVkOnV9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUscixuLG8pe3ZhciBpPXRbZV07dFtlXT1yKGkpLG4mJm5bb10ucHVzaChbdCxlLGldKX1mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciByO3RbZV0ubGVuZ3RoOylyPXRbZV0uc2hpZnQoKSxyWzBdW3JbMV1dPXJbMl19ZnVuY3Rpb24gaSh0KXtpZighdHx8IXQuYXR0cmlidXRlcylyZXR1cm4gbnVsbDtmb3IodmFyIGU9dC5hdHRyaWJ1dGVzLHI9MDtyPGUubGVuZ3RoOysrcilpZihcIm5hbWVcIj09PWVbcl0ua2V5KXJldHVybiBlW3JdLnZhbHVlO3JldHVybiBudWxsfWZ1bmN0aW9uIGEodCl7Zm9yKHZhciBlPVtdLHI9MDtyPHQubGVuZ3RoOysrcillLnB1c2gobmV3IFJlZ0V4cCh0W3JdLFwiaVwiKSk7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciByPWkodCk7aWYoIXIpcmV0dXJuITE7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDsrK24paWYoZVtuXS50ZXN0KHIpKXJldHVybiEwO3JldHVybiExfX1mdW5jdGlvbiBzKHQsZSxyLG4sbyl7dmFyIGk9dC5hdXRvSW5zdHJ1bWVudDt0LmVuYWJsZWQ9PT0hMXx8aT09PSExP3RoaXMuYXV0b0luc3RydW1lbnQ9e306KHUuaXNUeXBlKGksXCJvYmplY3RcIil8fChpPXApLHRoaXMuYXV0b0luc3RydW1lbnQ9dS5tZXJnZShwLGkpKSx0aGlzLnNjcnViVGVsZW1ldHJ5SW5wdXRzPSEhdC5zY3J1YlRlbGVtZXRyeUlucHV0cyx0aGlzLnRlbGVtZXRyeVNjcnViYmVyPXQudGVsZW1ldHJ5U2NydWJiZXIsdGhpcy5kZWZhdWx0VmFsdWVTY3J1YmJlcj1hKHQuc2NydWJGaWVsZHMpLHRoaXMudGVsZW1ldGVyPWUsdGhpcy5yb2xsYmFyPXIsdGhpcy5fd2luZG93PW58fHt9LHRoaXMuX2RvY3VtZW50PW98fHt9LHRoaXMucmVwbGFjZW1lbnRzPXtuZXR3b3JrOltdLGxvZzpbXSxuYXZpZ2F0aW9uOltdLGNvbm5lY3Rpdml0eTpbXX0sdGhpcy5ldmVudFJlbW92ZXJzPXtkb206W10sY29ubmVjdGl2aXR5OltdfSx0aGlzLl9sb2NhdGlvbj10aGlzLl93aW5kb3cubG9jYXRpb24sdGhpcy5fbGFzdEhyZWY9dGhpcy5fbG9jYXRpb24mJnRoaXMuX2xvY2F0aW9uLmhyZWZ9dmFyIHU9cig1KSxjPXIoMTkpLGw9cigyOCkscD17bmV0d29yazohMCxuZXR3b3JrUmVzcG9uc2VIZWFkZXJzOiExLG5ldHdvcmtSZXNwb25zZUJvZHk6ITEsbmV0d29ya1JlcXVlc3RCb2R5OiExLGxvZzohMCxkb206ITAsbmF2aWdhdGlvbjohMCxjb25uZWN0aXZpdHk6ITB9O3MucHJvdG90eXBlLmNvbmZpZ3VyZT1mdW5jdGlvbih0KXt2YXIgZT10LmF1dG9JbnN0cnVtZW50LHI9dS5tZXJnZSh0aGlzLmF1dG9JbnN0cnVtZW50KTt0LmVuYWJsZWQ9PT0hMXx8ZT09PSExP3RoaXMuYXV0b0luc3RydW1lbnQ9e306KHUuaXNUeXBlKGUsXCJvYmplY3RcIil8fChlPXApLHRoaXMuYXV0b0luc3RydW1lbnQ9dS5tZXJnZShwLGUpKSx0aGlzLmluc3RydW1lbnQociksdm9pZCAwIT09dC5zY3J1YlRlbGVtZXRyeUlucHV0cyYmKHRoaXMuc2NydWJUZWxlbWV0cnlJbnB1dHM9ISF0LnNjcnViVGVsZW1ldHJ5SW5wdXRzKSx2b2lkIDAhPT10LnRlbGVtZXRyeVNjcnViYmVyJiYodGhpcy50ZWxlbWV0cnlTY3J1YmJlcj10LnRlbGVtZXRyeVNjcnViYmVyKX0scy5wcm90b3R5cGUuaW5zdHJ1bWVudD1mdW5jdGlvbih0KXshdGhpcy5hdXRvSW5zdHJ1bWVudC5uZXR3b3JrfHx0JiZ0Lm5ldHdvcms/IXRoaXMuYXV0b0luc3RydW1lbnQubmV0d29yayYmdCYmdC5uZXR3b3JrJiZ0aGlzLmRlaW5zdHJ1bWVudE5ldHdvcmsoKTp0aGlzLmluc3RydW1lbnROZXR3b3JrKCksIXRoaXMuYXV0b0luc3RydW1lbnQubG9nfHx0JiZ0LmxvZz8hdGhpcy5hdXRvSW5zdHJ1bWVudC5sb2cmJnQmJnQubG9nJiZ0aGlzLmRlaW5zdHJ1bWVudENvbnNvbGUoKTp0aGlzLmluc3RydW1lbnRDb25zb2xlKCksIXRoaXMuYXV0b0luc3RydW1lbnQuZG9tfHx0JiZ0LmRvbT8hdGhpcy5hdXRvSW5zdHJ1bWVudC5kb20mJnQmJnQuZG9tJiZ0aGlzLmRlaW5zdHJ1bWVudERvbSgpOnRoaXMuaW5zdHJ1bWVudERvbSgpLCF0aGlzLmF1dG9JbnN0cnVtZW50Lm5hdmlnYXRpb258fHQmJnQubmF2aWdhdGlvbj8hdGhpcy5hdXRvSW5zdHJ1bWVudC5uYXZpZ2F0aW9uJiZ0JiZ0Lm5hdmlnYXRpb24mJnRoaXMuZGVpbnN0cnVtZW50TmF2aWdhdGlvbigpOnRoaXMuaW5zdHJ1bWVudE5hdmlnYXRpb24oKSwhdGhpcy5hdXRvSW5zdHJ1bWVudC5jb25uZWN0aXZpdHl8fHQmJnQuY29ubmVjdGl2aXR5PyF0aGlzLmF1dG9JbnN0cnVtZW50LmNvbm5lY3Rpdml0eSYmdCYmdC5jb25uZWN0aXZpdHkmJnRoaXMuZGVpbnN0cnVtZW50Q29ubmVjdGl2aXR5KCk6dGhpcy5pbnN0cnVtZW50Q29ubmVjdGl2aXR5KCl9LHMucHJvdG90eXBlLmRlaW5zdHJ1bWVudE5ldHdvcms9ZnVuY3Rpb24oKXtvKHRoaXMucmVwbGFjZW1lbnRzLFwibmV0d29ya1wiKX0scy5wcm90b3R5cGUuaW5zdHJ1bWVudE5ldHdvcms9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQscil7dCBpbiByJiZ1LmlzRnVuY3Rpb24oclt0XSkmJm4ocix0LGZ1bmN0aW9uKHQpe3JldHVybiBlLnJvbGxiYXIud3JhcCh0KX0pfXZhciBlPXRoaXM7aWYoXCJYTUxIdHRwUmVxdWVzdFwiaW4gdGhpcy5fd2luZG93KXt2YXIgcj10aGlzLl93aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO24ocixcIm9wZW5cIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdS5pc1R5cGUocixcInN0cmluZ1wiKSYmKHRoaXMuX19yb2xsYmFyX3hocj17bWV0aG9kOmUsdXJsOnIsc3RhdHVzX2NvZGU6bnVsbCxzdGFydF90aW1lX21zOnUubm93KCksZW5kX3RpbWVfbXM6bnVsbH0pLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sdGhpcy5yZXBsYWNlbWVudHMsXCJuZXR3b3JrXCIpLG4ocixcInNlbmRcIixmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24obyl7ZnVuY3Rpb24gaSgpe2lmKGEuX19yb2xsYmFyX3hocil7aWYobnVsbD09PWEuX19yb2xsYmFyX3hoci5zdGF0dXNfY29kZSl7YS5fX3JvbGxiYXJfeGhyLnN0YXR1c19jb2RlPTA7dmFyIHQ9bnVsbDtlLmF1dG9JbnN0cnVtZW50Lm5ldHdvcmtSZXF1ZXN0Qm9keSYmKHQ9byksYS5fX3JvbGxiYXJfZXZlbnQ9ZS50ZWxlbWV0ZXIuY2FwdHVyZU5ldHdvcmsoYS5fX3JvbGxiYXJfeGhyLFwieGhyXCIsdm9pZCAwLHQpfWlmKGEucmVhZHlTdGF0ZTwyJiYoYS5fX3JvbGxiYXJfeGhyLnN0YXJ0X3RpbWVfbXM9dS5ub3coKSksYS5yZWFkeVN0YXRlPjMpe2EuX19yb2xsYmFyX3hoci5lbmRfdGltZV9tcz11Lm5vdygpO3ZhciByPW51bGw7aWYoZS5hdXRvSW5zdHJ1bWVudC5uZXR3b3JrUmVzcG9uc2VIZWFkZXJzKXt2YXIgbj1lLmF1dG9JbnN0cnVtZW50Lm5ldHdvcmtSZXNwb25zZUhlYWRlcnM7cj17fTt0cnl7dmFyIGkscztpZihuPT09ITApe3ZhciBjPWEuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7aWYoYyl7dmFyIGwscCxmPWMudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKTtmb3Iocz0wO3M8Zi5sZW5ndGg7cysrKWw9ZltzXS5zcGxpdChcIjogXCIpLGk9bC5zaGlmdCgpLHA9bC5qb2luKFwiOiBcIikscltpXT1wfX1lbHNlIGZvcihzPTA7czxuLmxlbmd0aDtzKyspaT1uW3NdLHJbaV09YS5nZXRSZXNwb25zZUhlYWRlcihpKX1jYXRjaCh0KXt9fXZhciBoPW51bGw7aWYoZS5hdXRvSW5zdHJ1bWVudC5uZXR3b3JrUmVzcG9uc2VCb2R5KXRyeXtoPWEucmVzcG9uc2VUZXh0fWNhdGNoKHQpe312YXIgZD1udWxsOyhofHxyKSYmKGQ9e30saCYmKGQuYm9keT1oKSxyJiYoZC5oZWFkZXJzPXIpKSxkJiYoYS5fX3JvbGxiYXJfeGhyLnJlc3BvbnNlPWQpO3RyeXt2YXIgbT1hLnN0YXR1czttPTEyMjM9PT1tPzIwNDptLGEuX19yb2xsYmFyX3hoci5zdGF0dXNfY29kZT1tLGEuX19yb2xsYmFyX2V2ZW50LmxldmVsPWUudGVsZW1ldGVyLmxldmVsRnJvbVN0YXR1cyhtKX1jYXRjaCh0KXt9fX19dmFyIGE9dGhpcztyZXR1cm4gdChcIm9ubG9hZFwiLGEpLHQoXCJvbmVycm9yXCIsYSksdChcIm9ucHJvZ3Jlc3NcIixhKSxcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gYSYmdS5pc0Z1bmN0aW9uKGEub25yZWFkeXN0YXRlY2hhbmdlKT9uKGEsXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbih0KXtyZXR1cm4gZS5yb2xsYmFyLndyYXAodCx2b2lkIDAsaSl9KTphLm9ucmVhZHlzdGF0ZWNoYW5nZT1pLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sdGhpcy5yZXBsYWNlbWVudHMsXCJuZXR3b3JrXCIpfVwiZmV0Y2hcImluIHRoaXMuX3dpbmRvdyYmbih0aGlzLl93aW5kb3csXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihyLG4pe2Zvcih2YXIgbz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaT0wLGE9by5sZW5ndGg7aTxhO2krKylvW2ldPWFyZ3VtZW50c1tpXTt2YXIgcyxjPW9bMF0sbD1cIkdFVFwiO3UuaXNUeXBlKGMsXCJzdHJpbmdcIik/cz1jOmMmJihzPWMudXJsLGMubWV0aG9kJiYobD1jLm1ldGhvZCkpLG9bMV0mJm9bMV0ubWV0aG9kJiYobD1vWzFdLm1ldGhvZCk7dmFyIHA9e21ldGhvZDpsLHVybDpzLHN0YXR1c19jb2RlOm51bGwsc3RhcnRfdGltZV9tczp1Lm5vdygpLGVuZF90aW1lX21zOm51bGx9LGY9bnVsbDtyZXR1cm4gZS5hdXRvSW5zdHJ1bWVudC5uZXR3b3JrUmVxdWVzdEJvZHkmJihvWzFdJiZvWzFdLmJvZHk/Zj1vWzFdLmJvZHk6b1swXSYmIXUuaXNUeXBlKG9bMF0sXCJzdHJpbmdcIikmJm9bMF0uYm9keSYmKGY9b1swXS5ib2R5KSksZS50ZWxlbWV0ZXIuY2FwdHVyZU5ldHdvcmsocCxcImZldGNoXCIsdm9pZCAwLGYpLHQuYXBwbHkodGhpcyxvKS50aGVuKGZ1bmN0aW9uKHQpe3AuZW5kX3RpbWVfbXM9dS5ub3coKSxwLnN0YXR1c19jb2RlPXQuc3RhdHVzO3ZhciByPW51bGw7aWYoZS5hdXRvSW5zdHJ1bWVudC5uZXR3b3JrUmVzcG9uc2VIZWFkZXJzKXt2YXIgbj1lLmF1dG9JbnN0cnVtZW50Lm5ldHdvcmtSZXNwb25zZUhlYWRlcnM7cj17fTt0cnl7aWYobj09PSEwKTtlbHNlIGZvcih2YXIgbz0wO288bi5sZW5ndGg7bysrKXt2YXIgaT1uW29dO3JbaV09dC5oZWFkZXJzLmdldChpKX19Y2F0Y2godCl7fX12YXIgYT1udWxsO3JldHVybiByJiYoYT17aGVhZGVyczpyfSksYSYmKHAucmVzcG9uc2U9YSksdH0pfX0sdGhpcy5yZXBsYWNlbWVudHMsXCJuZXR3b3JrXCIpfSxzLnByb3RvdHlwZS5kZWluc3RydW1lbnRDb25zb2xlPWZ1bmN0aW9uKCl7aWYoXCJjb25zb2xlXCJpbiB0aGlzLl93aW5kb3cmJnRoaXMuX3dpbmRvdy5jb25zb2xlLmxvZylmb3IodmFyIHQ7dGhpcy5yZXBsYWNlbWVudHMubG9nLmxlbmd0aDspdD10aGlzLnJlcGxhY2VtZW50cy5sb2cuc2hpZnQoKSx0aGlzLl93aW5kb3cuY29uc29sZVt0WzBdXT10WzFdfSxzLnByb3RvdHlwZS5pbnN0cnVtZW50Q29uc29sZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIG49clt0XSxvPXIsaT1cIndhcm5cIj09PXQ/XCJ3YXJuaW5nXCI6dDtyW3RdPWZ1bmN0aW9uKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxyPXUuZm9ybWF0QXJnc0FzU3RyaW5nKHQpO2UudGVsZW1ldGVyLmNhcHR1cmVMb2cocixpKSxuJiZGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChuLG8sdCl9LGUucmVwbGFjZW1lbnRzLmxvZy5wdXNoKFt0LG5dKX1pZihcImNvbnNvbGVcImluIHRoaXMuX3dpbmRvdyYmdGhpcy5fd2luZG93LmNvbnNvbGUubG9nKWZvcih2YXIgZT10aGlzLHI9dGhpcy5fd2luZG93LmNvbnNvbGUsbj1bXCJkZWJ1Z1wiLFwiaW5mb1wiLFwid2FyblwiLFwiZXJyb3JcIixcImxvZ1wiXSxvPTAsaT1uLmxlbmd0aDtvPGk7bysrKXQobltvXSl9LHMucHJvdG90eXBlLmRlaW5zdHJ1bWVudERvbT1mdW5jdGlvbigpeyhcImFkZEV2ZW50TGlzdGVuZXJcImluIHRoaXMuX3dpbmRvd3x8XCJhdHRhY2hFdmVudFwiaW4gdGhpcy5fd2luZG93KSYmdGhpcy5yZW1vdmVMaXN0ZW5lcnMoXCJkb21cIil9LHMucHJvdG90eXBlLmluc3RydW1lbnREb209ZnVuY3Rpb24oKXtpZihcImFkZEV2ZW50TGlzdGVuZXJcImluIHRoaXMuX3dpbmRvd3x8XCJhdHRhY2hFdmVudFwiaW4gdGhpcy5fd2luZG93KXt2YXIgdD10aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyksZT10aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTt0aGlzLmFkZExpc3RlbmVyKFwiZG9tXCIsdGhpcy5fd2luZG93LFwiY2xpY2tcIixcIm9uY2xpY2tcIix0LCEwKSx0aGlzLmFkZExpc3RlbmVyKFwiZG9tXCIsdGhpcy5fd2luZG93LFwiYmx1clwiLFwib25mb2N1c291dFwiLGUsITApfX0scy5wcm90b3R5cGUuaGFuZGxlQ2xpY2s9ZnVuY3Rpb24odCl7dHJ5e3ZhciBlPWwuZ2V0RWxlbWVudEZyb21FdmVudCh0LHRoaXMuX2RvY3VtZW50KSxyPWUmJmUudGFnTmFtZSxuPWwuaXNEZXNjcmliZWRFbGVtZW50KGUsXCJhXCIpfHxsLmlzRGVzY3JpYmVkRWxlbWVudChlLFwiYnV0dG9uXCIpO3ImJihufHxsLmlzRGVzY3JpYmVkRWxlbWVudChlLFwiaW5wdXRcIixbXCJidXR0b25cIixcInN1Ym1pdFwiXSkpP3RoaXMuY2FwdHVyZURvbUV2ZW50KFwiY2xpY2tcIixlKTpsLmlzRGVzY3JpYmVkRWxlbWVudChlLFwiaW5wdXRcIixbXCJjaGVja2JveFwiLFwicmFkaW9cIl0pJiZ0aGlzLmNhcHR1cmVEb21FdmVudChcImlucHV0XCIsZSxlLnZhbHVlLGUuY2hlY2tlZCl9Y2F0Y2godCl7fX0scy5wcm90b3R5cGUuaGFuZGxlQmx1cj1mdW5jdGlvbih0KXt0cnl7dmFyIGU9bC5nZXRFbGVtZW50RnJvbUV2ZW50KHQsdGhpcy5fZG9jdW1lbnQpO2UmJmUudGFnTmFtZSYmKGwuaXNEZXNjcmliZWRFbGVtZW50KGUsXCJ0ZXh0YXJlYVwiKT90aGlzLmNhcHR1cmVEb21FdmVudChcImlucHV0XCIsZSxlLnZhbHVlKTpsLmlzRGVzY3JpYmVkRWxlbWVudChlLFwic2VsZWN0XCIpJiZlLm9wdGlvbnMmJmUub3B0aW9ucy5sZW5ndGg/dGhpcy5oYW5kbGVTZWxlY3RJbnB1dENoYW5nZWQoZSk6bC5pc0Rlc2NyaWJlZEVsZW1lbnQoZSxcImlucHV0XCIpJiYhbC5pc0Rlc2NyaWJlZEVsZW1lbnQoZSxcImlucHV0XCIsW1wiYnV0dG9uXCIsXCJzdWJtaXRcIixcImhpZGRlblwiLFwiY2hlY2tib3hcIixcInJhZGlvXCJdKSYmdGhpcy5jYXB0dXJlRG9tRXZlbnQoXCJpbnB1dFwiLGUsZS52YWx1ZSkpfWNhdGNoKHQpe319LHMucHJvdG90eXBlLmhhbmRsZVNlbGVjdElucHV0Q2hhbmdlZD1mdW5jdGlvbih0KXtpZih0Lm11bHRpcGxlKWZvcih2YXIgZT0wO2U8dC5vcHRpb25zLmxlbmd0aDtlKyspdC5vcHRpb25zW2VdLnNlbGVjdGVkJiZ0aGlzLmNhcHR1cmVEb21FdmVudChcImlucHV0XCIsdCx0Lm9wdGlvbnNbZV0udmFsdWUpO2Vsc2UgdC5zZWxlY3RlZEluZGV4Pj0wJiZ0Lm9wdGlvbnNbdC5zZWxlY3RlZEluZGV4XSYmdGhpcy5jYXB0dXJlRG9tRXZlbnQoXCJpbnB1dFwiLHQsdC5vcHRpb25zW3Quc2VsZWN0ZWRJbmRleF0udmFsdWUpfSxzLnByb3RvdHlwZS5jYXB0dXJlRG9tRXZlbnQ9ZnVuY3Rpb24odCxlLHIsbil7aWYodm9pZCAwIT09cilpZih0aGlzLnNjcnViVGVsZW1ldHJ5SW5wdXRzfHxcInBhc3N3b3JkXCI9PT1sLmdldEVsZW1lbnRUeXBlKGUpKXI9XCJbc2NydWJiZWRdXCI7ZWxzZXt2YXIgbz1sLmRlc2NyaWJlRWxlbWVudChlKTt0aGlzLnRlbGVtZXRyeVNjcnViYmVyP3RoaXMudGVsZW1ldHJ5U2NydWJiZXIobykmJihyPVwiW3NjcnViYmVkXVwiKTp0aGlzLmRlZmF1bHRWYWx1ZVNjcnViYmVyKG8pJiYocj1cIltzY3J1YmJlZF1cIil9dmFyIGk9bC5lbGVtZW50QXJyYXlUb1N0cmluZyhsLnRyZWVUb0FycmF5KGUpKTt0aGlzLnRlbGVtZXRlci5jYXB0dXJlRG9tKHQsaSxyLG4pfSxzLnByb3RvdHlwZS5kZWluc3RydW1lbnROYXZpZ2F0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fd2luZG93LmNocm9tZSxlPXQmJnQuYXBwJiZ0LmFwcC5ydW50aW1lLHI9IWUmJnRoaXMuX3dpbmRvdy5oaXN0b3J5JiZ0aGlzLl93aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7ciYmbyh0aGlzLnJlcGxhY2VtZW50cyxcIm5hdmlnYXRpb25cIil9LHMucHJvdG90eXBlLmluc3RydW1lbnROYXZpZ2F0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fd2luZG93LmNocm9tZSxlPXQmJnQuYXBwJiZ0LmFwcC5ydW50aW1lLHI9IWUmJnRoaXMuX3dpbmRvdy5oaXN0b3J5JiZ0aGlzLl93aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7aWYocil7dmFyIG89dGhpcztuKHRoaXMuX3dpbmRvdyxcIm9ucG9wc3RhdGVcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1vLl9sb2NhdGlvbi5ocmVmO28uaGFuZGxlVXJsQ2hhbmdlKG8uX2xhc3RIcmVmLGUpLHQmJnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sdGhpcy5yZXBsYWNlbWVudHMsXCJuYXZpZ2F0aW9uXCIpLG4odGhpcy5fd2luZG93Lmhpc3RvcnksXCJwdXNoU3RhdGVcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMDtyZXR1cm4gZSYmby5oYW5kbGVVcmxDaGFuZ2Uoby5fbGFzdEhyZWYsZStcIlwiKSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LHRoaXMucmVwbGFjZW1lbnRzLFwibmF2aWdhdGlvblwiKX19LHMucHJvdG90eXBlLmhhbmRsZVVybENoYW5nZT1mdW5jdGlvbih0LGUpe3ZhciByPWMucGFyc2UodGhpcy5fbG9jYXRpb24uaHJlZiksbj1jLnBhcnNlKGUpLG89Yy5wYXJzZSh0KTt0aGlzLl9sYXN0SHJlZj1lLHIucHJvdG9jb2w9PT1uLnByb3RvY29sJiZyLmhvc3Q9PT1uLmhvc3QmJihlPW4ucGF0aCsobi5oYXNofHxcIlwiKSksci5wcm90b2NvbD09PW8ucHJvdG9jb2wmJnIuaG9zdD09PW8uaG9zdCYmKHQ9by5wYXRoKyhvLmhhc2h8fFwiXCIpKSx0aGlzLnRlbGVtZXRlci5jYXB0dXJlTmF2aWdhdGlvbih0LGUpfSxzLnByb3RvdHlwZS5kZWluc3RydW1lbnRDb25uZWN0aXZpdHk9ZnVuY3Rpb24oKXsoXCJhZGRFdmVudExpc3RlbmVyXCJpbiB0aGlzLl93aW5kb3d8fFwiYm9keVwiaW4gdGhpcy5fZG9jdW1lbnQpJiYodGhpcy5fd2luZG93LmFkZEV2ZW50TGlzdGVuZXI/dGhpcy5yZW1vdmVMaXN0ZW5lcnMoXCJjb25uZWN0aXZpdHlcIik6byh0aGlzLnJlcGxhY2VtZW50cyxcImNvbm5lY3Rpdml0eVwiKSl9LHMucHJvdG90eXBlLmluc3RydW1lbnRDb25uZWN0aXZpdHk9ZnVuY3Rpb24oKXtpZihcImFkZEV2ZW50TGlzdGVuZXJcImluIHRoaXMuX3dpbmRvd3x8XCJib2R5XCJpbiB0aGlzLl9kb2N1bWVudClpZih0aGlzLl93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil0aGlzLmFkZExpc3RlbmVyKFwiY29ubmVjdGl2aXR5XCIsdGhpcy5fd2luZG93LFwib25saW5lXCIsdm9pZCAwLGZ1bmN0aW9uKCl7dGhpcy50ZWxlbWV0ZXIuY2FwdHVyZUNvbm5lY3Rpdml0eUNoYW5nZShcIm9ubGluZVwiKX0uYmluZCh0aGlzKSwhMCksdGhpcy5hZGRMaXN0ZW5lcihcImNvbm5lY3Rpdml0eVwiLHRoaXMuX3dpbmRvdyxcIm9mZmxpbmVcIix2b2lkIDAsZnVuY3Rpb24oKXt0aGlzLnRlbGVtZXRlci5jYXB0dXJlQ29ubmVjdGl2aXR5Q2hhbmdlKFwib2ZmbGluZVwiKX0uYmluZCh0aGlzKSwhMCk7ZWxzZXt2YXIgdD10aGlzO24odGhpcy5fZG9jdW1lbnQuYm9keSxcIm9ub25saW5lXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dC50ZWxlbWV0ZXIuY2FwdHVyZUNvbm5lY3Rpdml0eUNoYW5nZShcIm9ubGluZVwiKSxlJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LHRoaXMucmVwbGFjZW1lbnRzLFwiY29ubmVjdGl2aXR5XCIpLG4odGhpcy5fZG9jdW1lbnQuYm9keSxcIm9ub2ZmbGluZVwiLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3QudGVsZW1ldGVyLmNhcHR1cmVDb25uZWN0aXZpdHlDaGFuZ2UoXCJvZmZsaW5lXCIpLGUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sdGhpcy5yZXBsYWNlbWVudHMsXCJjb25uZWN0aXZpdHlcIil9fSxzLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0LGUscixuLG8saSl7ZS5hZGRFdmVudExpc3RlbmVyPyhlLmFkZEV2ZW50TGlzdGVuZXIocixvLGkpLHRoaXMuZXZlbnRSZW1vdmVyc1t0XS5wdXNoKGZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHIsbyxpKX0pKTpuJiYoZS5hdHRhY2hFdmVudChuLG8pLHRoaXMuZXZlbnRSZW1vdmVyc1t0XS5wdXNoKGZ1bmN0aW9uKCl7ZS5kZXRhY2hFdmVudChuLG8pfSkpfSxzLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlO3RoaXMuZXZlbnRSZW1vdmVyc1t0XS5sZW5ndGg7KShlPXRoaXMuZXZlbnRSZW1vdmVyc1t0XS5zaGlmdCgpKSgpfSx0LmV4cG9ydHM9c30sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybih0LmdldEF0dHJpYnV0ZShcInR5cGVcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gbih0LGUsbil7aWYodC50YWdOYW1lLnRvTG93ZXJDYXNlKCkhPT1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuITE7aWYoIW4pcmV0dXJuITA7dD1yKHQpO2Zvcih2YXIgbz0wO288bi5sZW5ndGg7bysrKWlmKG5bb109PT10KXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gdC50YXJnZXQ/dC50YXJnZXQ6ZSYmZS5lbGVtZW50RnJvbVBvaW50P2UuZWxlbWVudEZyb21Qb2ludCh0LmNsaWVudFgsdC5jbGllbnRZKTp2b2lkIDB9ZnVuY3Rpb24gaSh0KXtmb3IodmFyIGUscj01LG49W10sbz0wO3QmJm88ciYmKGU9dSh0KSxcImh0bWxcIiE9PWUudGFnTmFtZSk7bysrKW4udW5zaGlmdChlKSx0PXQucGFyZW50Tm9kZTtyZXR1cm4gbn1mdW5jdGlvbiBhKHQpe2Zvcih2YXIgZSxyLG49ODAsbz1cIiA+IFwiLGk9by5sZW5ndGgsYT1bXSx1PTAsYz10Lmxlbmd0aC0xO2M+PTA7Yy0tKXtpZihlPXModFtjXSkscj11K2EubGVuZ3RoKmkrZS5sZW5ndGgsYzx0Lmxlbmd0aC0xJiZyPj1uKzMpe2EudW5zaGlmdChcIi4uLlwiKTticmVha31hLnVuc2hpZnQoZSksdSs9ZS5sZW5ndGh9cmV0dXJuIGEuam9pbihvKX1mdW5jdGlvbiBzKHQpe2lmKCF0fHwhdC50YWdOYW1lKXJldHVyblwiXCI7dmFyIGU9W3QudGFnTmFtZV07dC5pZCYmZS5wdXNoKFwiI1wiK3QuaWQpLHQuY2xhc3NlcyYmZS5wdXNoKFwiLlwiK3QuY2xhc3Nlcy5qb2luKFwiLlwiKSk7Zm9yKHZhciByPTA7cjx0LmF0dHJpYnV0ZXMubGVuZ3RoO3IrKyllLnB1c2goXCJbXCIrdC5hdHRyaWJ1dGVzW3JdLmtleSsnPVwiJyt0LmF0dHJpYnV0ZXNbcl0udmFsdWUrJ1wiXScpO3JldHVybiBlLmpvaW4oXCJcIil9ZnVuY3Rpb24gdSh0KXtpZighdHx8IXQudGFnTmFtZSlyZXR1cm4gbnVsbDt2YXIgZSxyLG4sbyxpPXt9O2kudGFnTmFtZT10LnRhZ05hbWUudG9Mb3dlckNhc2UoKSx0LmlkJiYoaS5pZD10LmlkKSxlPXQuY2xhc3NOYW1lLGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiYoaS5jbGFzc2VzPWUuc3BsaXQoL1xccysvKSk7dmFyIGE9W1widHlwZVwiLFwibmFtZVwiLFwidGl0bGVcIixcImFsdFwiXTtmb3IoaS5hdHRyaWJ1dGVzPVtdLG89MDtvPGEubGVuZ3RoO28rKylyPWFbb10sbj10LmdldEF0dHJpYnV0ZShyKSxuJiZpLmF0dHJpYnV0ZXMucHVzaCh7a2V5OnIsdmFsdWU6bn0pO3JldHVybiBpfXQuZXhwb3J0cz17ZGVzY3JpYmVFbGVtZW50OnUsZGVzY3JpcHRpb25Ub1N0cmluZzpzLGVsZW1lbnRBcnJheVRvU3RyaW5nOmEsdHJlZVRvQXJyYXk6aSxnZXRFbGVtZW50RnJvbUV2ZW50Om8saXNEZXNjcmliZWRFbGVtZW50Om4sZ2V0RWxlbWVudFR5cGU6cn19XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvbGxiYXIudW1kLm1pbi5qcy5tYXAiLCIvLyBAZmxvd1xuLy8gU3RvcmFnZSBrZXkgaW4gaW5kZXhEQlxuZXhwb3J0IGNvbnN0IElEQl9BVFRSSUJVVElPTl9LRVkgPSAnYWlxLWF0dHJpYnV0aW9uJztcbmV4cG9ydCBjb25zdCBJREJfVkVSU0lPTl9LRVkgPSAnYWlxLXZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IElEQl9JTldFQl9EQVRBX0tFWSA9ICdhaXEtaW53ZWItZGF0YSc7XG5leHBvcnQgY29uc3QgSURCX0lOV0VCX0hJU1RPUklFU19LRVkgPSAnYWlxLWlud2ViLWhpc3Rvcmllcyc7XG5leHBvcnQgY29uc3QgSURCX1BVU0hfREVOSUVEX1RJTUVTVEFNUCA9ICdhaXEtcHVzaC1kZW5pZWQtdGltZXN0YW1wJztcbmV4cG9ydCBjb25zdCBJREJfQ1lNUF9BQ0tFRCA9ICdhaXEtY3ltcC1hY2tlZCc7XG5cbi8vIFN0b3JhZ2Uga2V5IGluIFNlc3Npb25TdG9yYWdlXG5leHBvcnQgY29uc3QgSU5XRUJfRVhJVF9JTlRFTlRfU0hPV04gPSAnYWlxLWlud2ViRXhpdEludGVudFNob3duJztcbmV4cG9ydCBjb25zdCBJTldFQl9TQ1JPTExfUEVSQ0VOVF9TSE9XTiA9ICdhaXEtaW53ZWJTY3JvbGxQZXJjZW50U2hvd24nO1xuXG4vLyBGb3IgY3Jvc3MtZG9tYWluIGF0dHJpYnV0aW9uXG5leHBvcnQgY29uc3QgU0VBUkNIX1BBUkFNU19BVFRSSUJVVElPTl9LRVkgPSAnYWlxX2F0dHInO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QQVJBTVNfSURFTlRJRklFRF9LRVkgPSAnYWlxX2lkZW50aWZpZWQnO1xuXG4vLyBGb3IgY2F0Y2ggbGluZSBpZCAmIGNoYW5uZWxcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUEFSQU1TX0xJTkVDSEFOTkVMID0gJ19sbmNoaWQnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QQVJBTVNfTElORVVJRCA9ICdfbG51aWQnO1xuXG4vLyBTZXJ2aWNlIHdvcmtlcidzIHNjb3BlXG5leHBvcnQgY29uc3QgREVGQVVMVF9TV19TQ09QRSA9ICdhaXF1YSc7XG5cbi8vIExpZmV0aW1lIG9mIGlud2ViIGRhdGFcbmV4cG9ydCBjb25zdCBJTldFQl9EQVRBX0xJRkVUSU1FID0gMzYwMDAwMDsgLy8gMWhvdXJcblxuLy8gQ29va2llIGtleSBmb3Igd1VzZXJJZFxuZXhwb3J0IGNvbnN0IFdVU0VSX0lEX0tFWSA9ICdRR1VzZXJJZCc7XG4iLCIvLyBAZmxvd1xuLyogZXNsaW50LWVudiBzZXJ2aWNld29ya2VyICovXG5pbXBvcnQgeyBzZXRBdHRyaWJ1dGlvbiB9IGZyb20gJy4vdXRpbHMvYXR0cmlidXRpb24nO1xuXG5kZWNsYXJlIHZhciBhcHBJZDogc3RyaW5nO1xuXG4vKipcbiAqIEFsbCB0aGUgY2xpZW50J3MgYXBwSWRzIHRoYXQgdXNpbmcgbGVnYWN5IHNlcnZlciBlbmRwb2ludFxuICogKGFwaS5xdWFudHVtZ3JhcGguY29tKSBpbiBzZXJ2aWNlIHdvcmtlclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWFJV25nLU1yUVd2MTNOVkR4cUdvdWJfQzg5OVYyMWQzcXhxaWUxYW9MQ2cvZWRpdFxuICovXG5jb25zdCBMRUdBQ1lfSE9TVF9BUFBJRFMgPSBbXG4gICdkYjVhZjIyMzBmOGNhNGYxOGU5NScsIC8vIERpbmVvdXRcbiAgJ2RiNjc1N2M1OGNmMjI4YzdiNmYzJywgLy8gU2hvcHBlcnNTdG9wXG4gICc2MTA1ZjhjODVmMmEzYmFkYzkxNCcsIC8vIERvbW9kaVxuICAnNDY4MzcwMzFiMzE5OTY1OTVmNDYnLCAvLyBIb21lYm9va1xuICAnNjhjNThjYWY2OTI2N2FkZjNmZTQnLCAvLyBBbGxhbmlcbiAgJzc5ZWRhOWE1YjJmZjkzYTQ2MDc5JywgLy8gVm95bGxhXG4gICdlNzRiYzU4YWVmMTE2NzdlZmZlOCcsIC8vIERyYXBlckphbWVzXG4gICc4ZDU4YjI4N2NjYmM3OTI5ZDlhMCcsIC8vIEZpdFBhc3NcbiAgJzdiMWMxMmFkZjVhYzJiODc2NzUwJywgLy8gUUdyYXBoXG4gICcyZjE5MThmNTEzNzBmM2RhZTgyOScsIC8vIG1vbnNpZXVyY2FkZWF1XG4gICc5MTljMWFmNDY5Y2E1MGZkMGRmMScsIC8vIEFzb1xuICAnZjBiNWFjMGQ0NDAzYmYwNzRlMzQnLCAvLyBQYXp6b1xuICAnNzA3Y2NjYzllZTI2NGM0NGE1ODInLCAvLyBIJkRcbiAgJ2RiZTUxNjVhOGZkMzQwYjkxMmU4JywgLy8gTXlEcmVzc1xuICAnNGM5YzQzOTYxNWU4Mzg5YTFmMjknLCAvLyBXb21hbnN0YWxrXG4gICc5NWViOWIzYTE1NjU2MGJlZjAyNycsIC8vIEdhbWFuaWFcbiAgJ2ExZjhhNjA0MjE2YzFkNzg3N2QyJywgLy8gWmVlNSBJbmRpYVxuICAnOWUxNTExM2Y1MmJjZWY5OThkYTInLCAvLyBaZWU1IE1FTkFcbiAgJ2FlNWVjYjYzYTMwOTc0NjI3ZmFhJywgLy8gWmVlNSBFVVxuICAnZWU0YTFmNjYwYThmMWNmY2NjN2MnLCAvLyBaZWU1IEFNXG4gICc5YTE4ZmQ5OWU4OTJiZmYwZGNiNycsIC8vIFplZTUgQVBBQ1xuXTtcblxuLyoqXG4gKiBsb2cgZXZlbnQgdG8gZGJhY2sgc2VydmVyXG4gKi9cbmZ1bmN0aW9uIGxvZ0V2ZW50KGV2ZW50TmFtZSwgcGFyYW1ldGVycykge1xuICAvLyBJZiB0aGUgYXBwSWQgaXMgaW5jbHVkZWQgaW4gdGhlIGxpc3QsIHN3aXRjaCB0byB0aGUgbGVnYWN5IEFQSSBob3N0XG4gIGNvbnN0IGFwaUhvc3QgPSBMRUdBQ1lfSE9TVF9BUFBJRFMuaW5jbHVkZXMoYXBwSWQpXG4gICAgPyBwcm9jZXNzLmVudi5MRUdBQ1lfQVBJX0hPU1RcbiAgICA6IHByb2Nlc3MuZW52LkFQSV9IT1NUO1xuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGV2ZW50czogW1xuICAgICAge1xuICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIHBhcmFtZXRlcnMsXG4gICAgICAgIHFndHM6IHBhcnNlSW50KCtuZXcgRGF0ZSgpIC8gMTAwMCksXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIC8vIHNlbmQgZGF0YSBiYWNrIHRvIGRiYWNrIHNlcnZlclxuICBmZXRjaChgJHthcGlIb3N0IHx8ICcnfS93ZWIvJHthcHBJZH0vZGF0YS9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogZGF0YSxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgT3JpZ2luOiBzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSxcbiAgICB9KSxcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgLSBzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgLSBlcnJvciAnLCBlcnIpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFNob3cgbm90aWZpY2F0aW9uIHdpdGggV2ViIE5vdGlmaWNhdGlvbnMgQVBJXG4gKi9cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uT3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgZGF0YSA9IHt9LFxuICAgIG5vdGlmaWNhdGlvbklkLFxuICAgIC4uLnJlc3ROb3RpZmljYXRpb25PcHRpb25zXG4gIH0gPSBub3RpZmljYXRpb25PcHRpb25zO1xuXG4gIGlmICghKGRhdGEuaGFzT3duUHJvcGVydHkoJ3NlbmRSZWNlaXB0JykgJiYgIWRhdGEuc2VuZFJlY2VpcHQpKSB7XG4gICAgbG9nRXZlbnQoJ25vdGlmaWNhdGlvbl9yZWNlaXZlZCcsIHtcbiAgICAgIG5vdGlmaWNhdGlvbklkLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGB0aXRsZWAgZmllbGQgYW5kIG1vdmUgYG5vdGlmaWNhdGlvbklkYCBpbnRvIGRhdGFcbiAgY29uc3QgbW9kaWZpZWROb3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgIC4uLnJlc3ROb3RpZmljYXRpb25PcHRpb25zLFxuICAgIGRhdGE6IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBub3RpZmljYXRpb25JZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBzZWxmLnJlZ2lzdHJhdGlvblxuICAgIC5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCBtb2RpZmllZE5vdGlmaWNhdGlvbk9wdGlvbnMpXG4gICAgLnRoZW4oKCkgPT4gc2V0QXR0cmlidXRpb24oJ3ZpZXcnLCBub3RpZmljYXRpb25JZCkpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIEV2ZW50IGxpc3RlbmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCBldmVudCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuanNvbigpO1xuICAgIGV2ZW50LndhaXRVbnRpbChzaG93Tm90aWZpY2F0aW9uKGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbicsIGUpO1xuICB9XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIGV2ZW50ID0+IHtcbiAgY29uc3QgZGF0YSA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhO1xuICBjb25zdCBhY3Rpb24gPSBldmVudC5hY3Rpb247XG5cbiAgaWYgKGRhdGEuZHJpcCkge1xuICAgIGRlbGV0ZSBkYXRhLmRyaXA7XG4gIH1cblxuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNsaWVudHNcbiAgICAgIC5tYXRjaEFsbCh7XG4gICAgICAgIHR5cGU6ICd3aW5kb3cnLFxuICAgICAgfSlcbiAgICAgIC50aGVuKGNsaWVudExpc3QgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJy8nO1xuXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgIHVybCA9IGRhdGEudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHVybEtleSA9IFN0cmluZyhhY3Rpb24pICsgJ191cmwnO1xuXG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkodXJsS2V5KSkge1xuICAgICAgICAgICAgdXJsID0gZGF0YVt1cmxLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvdW5kQ2xpZW50ID0gY2xpZW50TGlzdC5maW5kKGNsaWVudCA9PiBjbGllbnQudXJsID09PSB1cmwpO1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb25JZCA9XG4gICAgICAgICAgZGF0YS5ub3RpZmljYXRpb25JZCB8fCBldmVudC5ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uSWQ7XG5cbiAgICAgICAgaWYgKGZvdW5kQ2xpZW50IGluc3RhbmNlb2YgV2luZG93Q2xpZW50KSB7XG4gICAgICAgICAgZm91bmRDbGllbnQuZm9jdXMoKTtcblxuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGlvbignY2xpY2snLCBub3RpZmljYXRpb25JZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xpZW50cy5vcGVuV2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0aW9uKCdjbGljaycsIG5vdGlmaWNhdGlvbklkKS50aGVuKCgpID0+XG4gICAgICAgICAgICBjbGllbnRzLm9wZW5XaW5kb3codXJsKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICk7XG5cbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3NlbmRSZWNlaXB0JykgJiYgIWRhdGEuc2VuZFJlY2VpcHQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2dFdmVudCgnbm90aWZpY2F0aW9uX2NsaWNrZWQnLCB7XG4gICAgbm90aWZpY2F0aW9uSWQ6IGRhdGEubm90aWZpY2F0aW9uSWQsXG4gIH0pO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xvc2UnLCBldmVudCA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IGRyaXAgfSxcbiAgfSA9IGV2ZW50Lm5vdGlmaWNhdGlvbjtcblxuICBpZiAoZHJpcCkge1xuICAgIHNob3dOb3RpZmljYXRpb24oZHJpcCk7XG4gIH1cbn0pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCB7IGdldCBhcyBnZXRJREIsIHNldCBhcyBzZXRJREIgfSBmcm9tICdpZGIta2V5dmFsJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCB7XG4gIElEQl9BVFRSSUJVVElPTl9LRVksXG4gIFNFQVJDSF9QQVJBTVNfQVRUUklCVVRJT05fS0VZLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG50eXBlIEV2ZW50ID0gT2JqZWN0O1xudHlwZSBBY3Rpb24gPSAndmlldycgfCAnY2xpY2snO1xudHlwZSBBdHRyaWJ1dGlvbiA9IHtcbiAgYWN0aW9uOiBBY3Rpb24sXG4gIG5vdGlmaWNhdGlvbklkOiBudW1iZXIsXG4gIHRzOiBudW1iZXIsXG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGF0dHJpYnV0aW9uIGlzIG5vdCBleHBpcmVkIHlldFxuICpcbiAqIC0gXCJjbGlja1wiIGV2ZW50IGxhc3RzIGZvciAyNCBob3Vyc1xuICogLSBcInZpZXdcIiBldmVudCBsYXN0cyBmb3IgMSBob3VyXG4gKi9cbmZ1bmN0aW9uIHNob3VsZEF0dHJpYnV0aW9uVmFsaWQoYXR0cjogQXR0cmlidXRpb24pIHtcbiAgY29uc3QgdGltZURpZmYgPSArbmV3IERhdGUoKSAtIGF0dHIudHM7XG5cbiAgc3dpdGNoIChhdHRyLmFjdGlvbikge1xuICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgIHJldHVybiBNYXRoLm1heCgzNjAwICogMjQgKiAxZTMgLSB0aW1lRGlmZiwgMCkgPiAwO1xuICAgIGNhc2UgJ3ZpZXcnOlxuICAgICAgcmV0dXJuIE1hdGgubWF4KDM2MDAgKiAxICogMWUzIC0gdGltZURpZmYsIDApID4gMDtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBsb2cud2FybignSW52YWxpZCBhdHRyaWJ1dGlvbicsIGF0dHIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldCBhdHRyaWJ1dGlvbiBkYXRhIGZyb20gaW5kZXhlZERCXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdHRyaWJ1dGlvbigpOiBQcm9taXNlPD9BdHRyaWJ1dGlvbj4ge1xuICBjb25zdCBhdHRyOiA/QXR0cmlidXRpb24gPSBhd2FpdCBnZXRJREIoSURCX0FUVFJJQlVUSU9OX0tFWSk7XG5cbiAgaWYgKGF0dHIgJiYgc2hvdWxkQXR0cmlidXRpb25WYWxpZChhdHRyKSkge1xuICAgIHJldHVybiBhdHRyO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDb21wb3NlIGFuZCBzZXQgYXR0cmlidXRpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldEF0dHJpYnV0aW9uKFxuICBhY3Rpb246IEFjdGlvbixcbiAgbm90aWZpY2F0aW9uSWQ6IG51bWJlclxuKTogUHJvbWlzZTxBdHRyaWJ1dGlvbj4ge1xuICBjb25zdCBhdHRyaWJ1dGlvbiA9IHtcbiAgICBhY3Rpb24sXG4gICAgbm90aWZpY2F0aW9uSWQsXG4gICAgdHM6ICtuZXcgRGF0ZSgpLFxuICB9O1xuXG4gIGxvZy5kZWJ1ZygnU2V0IGF0dHJpYnV0aW9uIGludG8gaW5kZXhlZERCJywgYXR0cmlidXRpb24pO1xuICBhd2FpdCBzZXRJREIoSURCX0FUVFJJQlVUSU9OX0tFWSwgYXR0cmlidXRpb24pO1xuICByZXR1cm4gYXR0cmlidXRpb247XG59XG5cbi8qKlxuICogUmVhZCBhdHRyaWJ1dGlvbiBmcm9tIHVybCdzIHF1ZXJ5IHN0cmluZyBhbmRcbiAqIHNldCB0aGVtIGludG8gaW5kZXhlZERCLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0QXR0cmlidXRpb25WaWFVcmwodXJsOiBVUkwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdHRyaWJ1dGlvblN0ciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFNFQVJDSF9QQVJBTVNfQVRUUklCVVRJT05fS0VZKTtcblxuICAgIGlmIChhdHRyaWJ1dGlvblN0cikge1xuICAgICAgY29uc3QgYXR0cmlidXRpb25PYmogPSBKU09OLnBhcnNlKGF0dHJpYnV0aW9uU3RyKTtcblxuICAgICAgLy8gT25seSBrZWVwIHRoZSBmaWVsZHMgdGhhdCB3ZSBoYXZlXG4gICAgICBjb25zdCBhdHRyaWJ1dGlvbjogQXR0cmlidXRpb24gPSB7XG4gICAgICAgIGFjdGlvbjogYXR0cmlidXRpb25PYmouYWN0aW9uLFxuICAgICAgICBub3RpZmljYXRpb25JZDogYXR0cmlidXRpb25PYmoubm90aWZpY2F0aW9uSWQsXG4gICAgICAgIHRzOiArYXR0cmlidXRpb25PYmoudHMsXG4gICAgICB9O1xuXG4gICAgICBsb2cuZGVidWcoJ0dldCBhdHRyaWJ1dGlvbiBhbmQgc2V0IGludG8gaW5kZXhlZERCJywgYXR0cmlidXRpb24pO1xuICAgICAgYXdhaXQgc2V0SURCKElEQl9BVFRSSUJVVElPTl9LRVksIGF0dHJpYnV0aW9uKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZy5lcnJvcignRmFpbGVkIHRvIHNldCBhdHRyaWJ1dGlvbiB2aWEgdXJsJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhdHRyaWJ1dGlvbiBvbiB0YXJnZXQgdXJsJ3Mgc2VhcmNoIHBhcmFtcywgdGhlbiBuYXZpZ2F0ZSB0byB0aGF0IHBhZ2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZVdpdGhBdHRyaWJ1dGlvbih1cmxTdHI6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodXJsU3RyLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBjb25zdCBhdHRyaWJ1dGlvbiA9IGF3YWl0IGdldEF0dHJpYnV0aW9uKCk7XG5cbiAgICAvLyBTZXQgYXR0cmlidXRpb24gaW50byBzZWFyY2ggcGFyYW1ldGVyc1xuICAgIGlmIChhdHRyaWJ1dGlvbikge1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoXG4gICAgICAgIFNFQVJDSF9QQVJBTVNfQVRUUklCVVRJT05fS0VZLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShhdHRyaWJ1dGlvbilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGUgdG8gYSBuZXcgcGFnZVxuICAgIGxvZy5kZWJ1ZygnTmF2aWdhdGUgdG8gbmV3IHBhZ2Ugd2l0aCBhdHRyaWJ1dGlvbicsIHVybC50b1N0cmluZygpKTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybC50b1N0cmluZygpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nLmVycm9yKCdGYWlsZWQgdG8gbmF2aWdhdGUgd2l0aCBhdHRyaWJ1dGlvbicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb3NlIHRoZSBhdHRyaWJ1dGlvbiBkYXRhIChsaWtlIG5vdGlmaWNhdGlvbklkKVxuICogaW50byBlYWNoIGV2ZW50IHJlY29yZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXBvc2VBdHRyaWJ1dGlvbkV2ZW50cyhcbiAgZXZlbnRzOiBFdmVudFtdXG4pOiBQcm9taXNlPEFycmF5PEV2ZW50ICYgeyBub3RpZmljYXRpb25JZD86IG51bWJlciwgbGFzdENsa2ROb3RJZD86IG51bWJlciB9Pj4ge1xuICBjb25zdCBhdHRyaWJ1dGlvbiA9IGF3YWl0IGdldEF0dHJpYnV0aW9uKCk7XG5cbiAgaWYgKGF0dHJpYnV0aW9uKSB7XG4gICAgY29uc3QgeyBub3RpZmljYXRpb25JZCwgYWN0aW9uIH0gPSBhdHRyaWJ1dGlvbjtcbiAgICBjb25zdCBsYXN0Q2xrZE5vdElkID0gYWN0aW9uID09PSAnY2xpY2snID8gbm90aWZpY2F0aW9uSWQgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gZXZlbnRzLm1hcChldmVudCA9PiAoe1xuICAgICAgLi4uZXZlbnQsXG4gICAgICBub3RpZmljYXRpb25JZCxcbiAgICAgIGxhc3RDbGtkTm90SWQsXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50cztcbn1cbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tICdsb2dsZXZlbCc7XG5cbi8vIEV4cG9ydCBsb2dnZXIgd2l0aCBnaXZpbmcgbmFtZSB0byBhdm9pZCBsZXZlbCBzZXR0aW5ncyBjb25mbGljdCB3aXRoIGN1c3RvbWVyJ3MuXG4vLyAoSW4gY2FzZSB0aGV5IGFyZSB1c2luZyBsb2dsZXZlbCB0b28pXG5jb25zdCBsb2dnZXIgPSBsb2cuZ2V0TG9nZ2VyKCdhaXF1YS1zZGsnKTtcblxuY29uc3Qgb3JpZ2luYWxGYWN0b3J5ID0gbG9nZ2VyLm1ldGhvZEZhY3Rvcnk7XG5sb2dnZXIubWV0aG9kRmFjdG9yeSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgLy8gVHJhY2UgZXJyb3IgbG9nIG9uIFJvbGxiYXJcbiAgaWYgKGFyZ3NbMF0gPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gKC4uLm1zZ3MpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogU2luY2Ugcm9sbGJhciB3aWxsIHRyeSB0byBhY2Nlc3Mgd2luZG93IHRvIHRyYWNrIHRoZSB1bmNhdWdodCBlcnJvcnMuXG4gICAgICAgKiBCdXQgdGhlcmUgd2lsbCBub3QgaGF2ZSB3aW5kb3cgb2JqZWN0IGluIHdlYiB3b3JrZXIsIHdlIHNob3VsZCBzaW1wbHlcbiAgICAgICAqIGNoZWNrIHRoZSBnbG9iYWwgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgICAgICovXG4gICAgICBpZiAod2luZG93KSB7XG4gICAgICAgIGNvbnN0IFJvbGxiYXIgPSByZXF1aXJlKCcuL3JvbGxiYXInKS5kZWZhdWx0O1xuICAgICAgICBSb2xsYmFyLmVycm9yKC4uLm1zZ3MpO1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5hbEZhY3RvcnkoLi4uYXJncykoLi4ubXNncyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBvcmlnaW5hbEZhY3RvcnkoLi4uYXJncyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCIvLyBAZmxvd1xuaW1wb3J0IFJvbGxiYXJJbnN0YW5jZSBmcm9tICdyb2xsYmFyJztcbmltcG9ydCB7IGdldFBhY2thZ2VWZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uJztcblxuY29uc3QgU0RLX0VOViA9IHByb2Nlc3MuZW52LlNES19FTlYgfHwgJ2xvY2FsJztcbmxldCBzZW50RXhjZXB0aW9ucyA9IFtdO1xuXG4vKipcbiAqIENoZWNrIGlmIG5ldyBleGNlcHRpb24gaXMgcmVwZWF0ZWQuXG4gKiBJZiBub3QsIHB1dCBpdCBpbnRvIGFuIGFycmF5IGZvciBkdXBsaWNhdGVkIGNoZWNrLlxuICovXG5mdW5jdGlvbiBzaG91bGRJZ25vcmVOZXdFeGNlcHRpb24oZXhjZXB0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gSWdub3JlIGR1cGxpY2F0ZWQgZXhjZXB0aW9uXG4gIGlmIChzZW50RXhjZXB0aW9ucy5pbmNsdWRlcyhleGNlcHRpb24pKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBMb2cgdGhlIGtub3duIGV4Y2VwdGlvblxuICBzZW50RXhjZXB0aW9ucy5wdXNoKGV4Y2VwdGlvbik7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgUm9sbGJhciA9IG5ldyBSb2xsYmFySW5zdGFuY2Uoe1xuICAvLyBPbmx5IGVuYWJsZSBvbiBzdGFnaW5nIG9yIHByb2R1Y3Rpb24gZW52XG4gIGVuYWJsZWQ6IFNES19FTlYgPT09ICdzdGFnaW5nJyB8fCBTREtfRU5WID09PSAncHJvZHVjdGlvbicsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ST0xMQkFSX1RPS0VOLFxuICBjYXB0dXJlVW5jYXVnaHQ6IHRydWUsXG4gIGNhcHR1cmVVbmhhbmRsZWRSZWplY3Rpb25zOiB0cnVlLFxuICB2ZXJib3NlOiB0cnVlLFxuICBhdXRvSW5zdHJ1bWVudDoge1xuICAgIGxvZzogZmFsc2UsXG4gIH0sXG4gIHBheWxvYWQ6IHtcbiAgICBlbnZpcm9ubWVudDogU0RLX0VOVixcbiAgICBjbGllbnQ6IHtcbiAgICAgIGphdmFzY3JpcHQ6IHtcbiAgICAgICAgY29kZV92ZXJzaW9uOiBnZXRQYWNrYWdlVmVyc2lvbigpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjaGVja0lnbm9yZShpc1VuY2F1Z2h0LCBhcmdzLCBwYXlsb2FkKSB7XG4gICAgLyoqXG4gICAgICogU2hvdWxkIGNvbnRhaW5zIGFueSBjb250ZW50XG4gICAgICovXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdW5jYXVnaHQgZXJyb3JcbiAgICAgKi9cbiAgICBpZiAoaXNVbmNhdWdodCkge1xuICAgICAgY29uc3QgZXJyID0gYXJnc1sxXTtcblxuICAgICAgLy8gSWdub3JlIGlmIGVycm9yIGluc3RhbmNlIGlzIG5vdCBmb3VuZFxuICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgdW5jYXVnaHQgZXJyb3IgdGhhdCBub3QgY2F1c2VkIGJ5IG91ciBTREtcbiAgICAgIGlmICghZXJyLnN0YWNrLmluY2x1ZGVzKCdhaXF1YS5qcycpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2hvdWxkSWdub3JlTmV3RXhjZXB0aW9uKGVyci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBmaXJzdCBhcmd1bWVudFxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBgJHthcmdzWzBdfWAgfHwgJyc7XG4gICAgICByZXR1cm4gc2hvdWxkSWdub3JlTmV3RXhjZXB0aW9uKGVyck1zZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gc2hvdWxkSWdub3JlTmV3RXhjZXB0aW9uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUm9sbGJhcjtcbiIsIi8vIEBmbG93XG5pbXBvcnQgeyBnZXQgYXMgZ2V0SURCLCBzZXQgYXMgc2V0SURCIH0gZnJvbSAnaWRiLWtleXZhbCc7XG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nJztcbmltcG9ydCB3aXRoQXBwU2RrIGZyb20gJy4vd2l0aEFwcFNkayc7XG5pbXBvcnQgeyBJREJfVkVSU0lPTl9LRVkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEdldCBzZGsgdmVyc2lvbiBiYXNlZCBvbiBwYWNrYWdlLmpzb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhY2thZ2VWZXJzaW9uKCk6IHN0cmluZyB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5WRVJTSU9OIHx8ICcnO1xufVxuXG4vKipcbiAqIEdldCBzZGsgdmVyc2lvbiBmcm9tIGluZGV4ZWREQlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZyB8IHR5cGVvZiB1bmRlZmluZWQ+IHtcbiAgY29uc3QgdmVyc2lvbiA9IGF3YWl0IGdldElEQihJREJfVkVSU0lPTl9LRVkpO1xuICByZXR1cm4gdmVyc2lvbjtcbn1cblxuLyoqXG4gKiBTYXZlIGxhdGVzdCBzZGsgdmVyc2lvbiBpbnRvIGluZGV4ZWREQlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0U2RrVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc2V0SURCKElEQl9WRVJTSU9OX0tFWSwgdmVyc2lvbik7XG4gIGxvZy5pbmZvKGBVcGRhdGVkIFNESyB2ZXJzaW9uIHRvICR7dmVyc2lvbn1gKTtcbn1cblxuLyoqXG4gKiBMb2cgQW5kcm9pZCBvciBpT1Mgc2RrIHZlcnNpb24gb24gY29uc29sZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nTW9iaWxlU2RrVmVyc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgaXNXaXRoQXBwU2RrID0gYXdhaXQgd2l0aEFwcFNkaygpO1xuXG4gIGlmICghaXNXaXRoQXBwU2RrKSB7XG4gICAgbG9nLmRlYnVnKCdBSVFVQSBBcHAgU0RLIGlzIG5vdCBpbnN0YWxsZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGdldFBsYXRmb3JtLCBnZXRWZXJzaW9uIH0gPSB3aW5kb3cuYWlxTW9iaWxlU2RrIHx8IHt9O1xuXG4gIC8vIEdldCBBbmRyb2lkIHNkayB2ZXJzaW9uXG4gIGlmICh0eXBlb2YgZ2V0UGxhdGZvcm0gPT09ICdmdW5jdGlvbicgJiYgZ2V0UGxhdGZvcm0oKSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgY29uc3QgYW5kcm9pZFNka1ZlcnNpb24gPSBnZXRWZXJzaW9uKCk7XG4gICAgbG9nLmRlYnVnKCdBbmRyb2lkIFNESyB2ZXJpb24sIHYnLCBhbmRyb2lkU2RrVmVyc2lvbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IGlPUyBzZGsgdmVyc2lvblxuICAvLyBOb3RlOiBpT1Mgc2RrIHdvdWxkJ3QgaW5qZWN0IGdldFBsYXRmb3JtKCkgbWV0aG9kXG4gIGNvbnN0IGlvc1Nka1ZlcnNpb24gPSBhd2FpdCBnZXRWZXJzaW9uKCk7XG4gIGxvZy5kZWJ1ZygnaU9TIFNESyB2ZXJpb24sIHYnLCBpb3NTZGtWZXJzaW9uKTtcbn1cbiIsIi8vIEBmbG93XG5cbi8qKlxuICogVGVzdCBpdCBpcyBpbiBBcHAncyB3ZWJ2aWV3IHdpdGggb3VyIEFwcC1TREsgb3Igbm90XG4gKi9cbmNvbnN0IHdpdGhBcHBTZGsgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYWlxTW9iaWxlU2RrLCBSZWFjdE5hdGl2ZVdlYlZpZXcgfSA9IHdpbmRvdztcblxuICAvLyBEbyBoYW5kc2hha2luZyB3aGVuIFJlYWN0TmF0aXZlV2ViVmlldyBwcmVzZW50IGluIGdsb2JhbC4gVGhlIFdlYlNka1xuICAvLyBpbnNpZGUgV2ViVmlldyB3aWxsIHRyeSB0byBzZW5kIGhhbmRzaGFrZSBtZXNzYWdlIHRvIHJlYWNoIG91dFxuICAvLyBvdXIgbWVzc2FnZSBsaXN0ZW5lciBvbiBSZWFjdCBOYXRpdmUgV2ViVmlldy4gSWYgd2UgZG9uJ3QgcmVjZWl2ZVxuICAvLyB0aGUgcmVzcG9uc2UgaW4gMjAwbXMsIHdlIGFzc3VtZSB0aGUgV2ViUGFnZSBpcyBub3QgaW5zaWRlIHJlYWN0IG5hdGl2ZVxuICAvLyBhcHAuIEhhbmRzaGFrZSBpcyByZXF1aXJlZCB0byBhdm9pZCByYWNpbmcgaXNzdWUgb2YgSlMgaW5qZWN0aW9uIGluIHRoZVxuICAvLyB3ZWJ2aWV3IGFuZCBXZWJTZGsgaW5pdC5cbiAgaWYgKFJlYWN0TmF0aXZlV2ViVmlldykge1xuICAgIGxldCBoYW5kc2hha2VSZXNvbHZlcjtcblxuICAgIGNvbnN0IG1zZ0hhbmRsZXIgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbXNnSGFuZGxlcik7XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZHNoYWtlUmVzb2x2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaGFuZHNoYWtlUmVzb2x2ZXIoZGF0YSA9PT0gJ2FpcV9hY2snKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGlzV2l0aGluUk4gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGhhbmRzaGFrZVJlc29sdmVyID0gcmVzb2x2ZTtcblxuICAgICAgICBSZWFjdE5hdGl2ZVdlYlZpZXcucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ2hhbmRzaGFrZScsXG4gICAgICAgICAgICBzb3VyY2U6ICdhaXEnLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtc2dIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB9KSxcbiAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gUmVtb3ZlIG1lc3NhZ2UgaGFuZGxlciB3aGVuIHRpbWVvdXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1zZ0hhbmRsZXIpO1xuXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0sIDIwMClcbiAgICAgICksXG4gICAgXSk7XG5cbiAgICBpZiAoaXNXaXRoaW5STikge1xuICAgICAgcmV0dXJuIGlzV2l0aGluUk47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFpcU1vYmlsZVNkayAmJiBhaXFNb2JpbGVTZGsubG9nRXZlbnQgJiYgYWlxTW9iaWxlU2RrLmdldFZlcnNpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBwU2RrO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNydEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsYUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6UEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBR0E7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFFQTs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFVQTs7Ozs7OztBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFhQTtBQUFBO0FBQUE7QUFlQTs7Ozs7Ozs7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQW1CQTtBQUFBO0FBQUE7QUFzQkE7Ozs7Ozs7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBeUJBO0FBQUE7QUFBQTtBQXFCQTs7Ozs7Ozs7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQXlCQTtBQUFBO0FBQUE7QUFDQTs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMxSEE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFGQTtBQVFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQXlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBUUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFRQTtBQUFBO0FBQUE7QUFDQTs7OztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBYkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFtQkE7QUFDQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBcUJBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFOQTtBQUNBO0FBakNBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWlEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
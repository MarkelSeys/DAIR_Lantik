System.register(["jimu-core","jimu-core/react","jimu-core/react-dom","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis :
/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
{};

function getContext() {
  var _gT$ContextKey;

  if (!react__WEBPACK_IMPORTED_MODULE_0__.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
  let realContext = contextMap.get(react__WEBPACK_IMPORTED_MODULE_0__.createContext);

  if (!realContext) {
    realContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

    if (true) {
      realContext.displayName = 'ReactRedux';
    }

    contextMap.set(react__WEBPACK_IMPORTED_MODULE_0__.createContext, realContext);
  }

  return realContext;
}

const ReactReduxContext = /*#__PURE__*/getContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");





function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => store.getState(), [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connect.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/connect.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initializeConnect: () => (/* binding */ initializeConnect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var _connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connect/selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");
/* harmony import */ var _connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connect/mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connect/mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connect/mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__.notInitialized;
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areStatePropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areMergedPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context__WEBPACK_IMPORTED_MODULE_13__.ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_12__["default"])('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
    }
  }

  const Context = context;
  const initMapStateToProps = (0,_connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0,_connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0,_connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = react__WEBPACK_IMPORTED_MODULE_3__.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0,_connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_9__.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      const lastWrapperProps = react__WEBPACK_IMPORTED_MODULE_3__.useRef(wrapperProps);
      const childPropsFromStoreUpdate = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      const renderIsScheduled = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const isProcessingDispatch = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const isMounted = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
      const latestSubscriptionCallbackError = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          react__WEBPACK_IMPORTED_MODULE_3__.createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = react__WEBPACK_IMPORTED_MODULE_3__.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/invalidArgFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/invalidArgFactory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidArgFactory: () => (/* binding */ createInvalidArgFactory)
/* harmony export */ });
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapDispatchToPropsFactory: () => (/* binding */ mapDispatchToPropsFactory)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapStateToPropsFactory: () => (/* binding */ mapStateToPropsFactory)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   mergePropsFactory: () => (/* binding */ mergePropsFactory),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps);
  }

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _components_connect__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/react-redux/es/types.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReduxContextHook: () => (/* binding */ createReduxContextHook),
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);

    if ( true && !contextValue) {
      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    }

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext = /*#__PURE__*/createReduxContextHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   initializeUseSelector: () => (/* binding */ initializeUseSelector),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");




let useSyncExternalStoreWithSelector = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__.notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext) {
  const useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }

      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }

      if (typeof equalityFn !== 'function') {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext();
    const firstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const wrappedSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({
      [selector.name](state) {
        const selected = selector(state);

        if (true) {
          const finalStabilityCheck = typeof stabilityCheck === 'undefined' ? globalStabilityCheck : stabilityCheck;

          if (finalStabilityCheck === 'always' || finalStabilityCheck === 'once' && firstRun.current) {
            const toCompare = selector(state);

            if (!equalityFn(selected, toCompare)) {
              let stack = undefined;

              try {
                throw new Error();
              } catch (e) {
                ;
                ({
                  stack
                } = e);
              }

              console.warn('Selector ' + (selector.name || 'unknown') + ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' + '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization', {
                state,
                selected,
                selected2: toCompare,
                stack
              });
            }
          }

          const finalNoopCheck = typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck;

          if (finalNoopCheck === 'always' || finalNoopCheck === 'once' && firstRun.current) {
            // @ts-ignore
            if (selected === state) {
              let stack = undefined;

              try {
                throw new Error();
              } catch (e) {
                ;
                ({
                  stack
                } = e);
              }

              console.warn('Selector ' + (selector.name || 'unknown') + ' returned the root state when called. This can lead to unnecessary rerenders.' + '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.', {
                stack
              });
            }
          }

          if (firstRun.current) firstRun.current = false;
        }

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");


/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : // @ts-ignore
  (0,_useReduxContext__WEBPACK_IMPORTED_MODULE_1__.createReduxContextHook)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.connect),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");
/* harmony import */ var use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector */ "./node_modules/use-sync-external-store/shim/with-selector.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






(0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.initializeUseSelector)(use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
(0,_components_connect__WEBPACK_IMPORTED_MODULE_5__.initializeConnect)(use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_3__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates);



/***/ }),

/***/ "./node_modules/react-redux/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/types.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners; // Reasons to keep the subscription active

  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

  let selfSubscribed = false;

  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return selfSubscribed;
  }

  function trySubscribe() {
    subscriptionsAmount++;

    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    subscriptionsAmount--;

    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }

  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useSyncExternalStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useSyncExternalStore.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notInitialized: () => (/* binding */ notInitialized)
/* harmony export */ });
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
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

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
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
}
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
var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
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
function isSuspenseList(object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
}

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
exports.SuspenseList = SuspenseList;
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
exports.isSuspenseList = isSuspenseList;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");
var shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
}


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/coordendas/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");



const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function Widget(props) {
    var _a;
    const [appWidgets, setAppWidgets] = useState({});
    const [chartbarWidgetId, setChartWidgetId] = useState(null);
    const [chartWidgetsArray, setChartWidgetsArray] = useState([]);
    const [newAppConfig, setNewAppConfig] = useState({});
    const [campo, setCampo] = useState(null);
    const [escala, setEscala] = useState(null);
    const [zoom, setZoom] = useState(null);
    // Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
    const widgetState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => {
        console.log(state);
        const widgetState = state.widgetsState['widget_4'];
        return widgetState;
    });
    // Utiliza useSelector para acceder al estado global
    //const appConfig = useSelector(state => state.appConfig)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            jmv.view.on('mouse-wheel', (evt) => {
                sleep(1000).then(() => {
                    console.log('mouse');
                    console.log(jmv.view.scale);
                    console.log(jmv.view.zoom);
                    setEscala(jmv.view.scale);
                    setZoom(jmv.view.zoom);
                });
            });
        }
    };
    useEffect(() => {
        if (escala > 1577790) {
            const config = {
                "tools": {
                    "cursorEnable": true
                },
                "template": "column",
                "webChart": {
                    "version": "7.3.1",
                    "id": "column",
                    "type": "chart",
                    "dataSource": {
                        "query": {
                            "groupByFieldsForStatistics": [
                                "Kilometro"
                            ],
                            "outStatistics": [
                                {
                                    "statisticType": "count",
                                    "onStatisticField": "OBJECTID",
                                    "outStatisticFieldName": "count_of_OBJECTID"
                                }
                            ],
                            "orderByFields": [
                                "Kilometro ASC"
                            ],
                            "where": ""
                        }
                    },
                    "sortLabelsBy": "originalValue",
                    "rotated": false,
                    "series": [
                        {
                            "type": "barSeries",
                            "id": "OBJECTID",
                            "name": "OBJECTID",
                            "x": "Kilometro",
                            "y": "count_of_OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#8257C2",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true
                        }
                    ],
                    "axes": [
                        {
                            "type": "chartAxis",
                            "visible": true,
                            "isLogarithmic": false,
                            "title": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "labels": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-500)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "valueFormat": {
                                "type": "category",
                                "characterLimit": 11
                            },
                            "lineSymbol": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-800)",
                                "width": 1
                            },
                            "grid": {
                                "type": "esriSLS",
                                "style": "esriSLSDash",
                                "color": "var(--light-300)",
                                "width": 0
                            }
                        },
                        {
                            "type": "chartAxis",
                            "visible": true,
                            "isLogarithmic": false,
                            "title": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "labels": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-500)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "valueFormat": {
                                "type": "number",
                                "intlOptions": {
                                    "style": "decimal",
                                    "useGrouping": true,
                                    "minimumFractionDigits": 0,
                                    "maximumFractionDigits": 0
                                }
                            },
                            "lineSymbol": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-800)",
                                "width": 1
                            },
                            "grid": {
                                "type": "esriSLS",
                                "style": "esriSLSDash",
                                "color": "var(--light-300)",
                                "width": 0
                            }
                        }
                    ],
                    "background": "var(--white)",
                    "title": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--black)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 24,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        }
                    },
                    "footer": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        }
                    },
                    "legend": {
                        "type": "chartLegend",
                        "visible": false,
                        "title": {
                            "type": "chartText",
                            "visible": true,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-800)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 20,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "text": ""
                            }
                        },
                        "body": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        },
                        "position": "right"
                    }
                }
            };
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetConfigLoaded('widget_11', config));
        }
        else {
            const config = {
                "tools": {
                    "cursorEnable": true
                },
                "template": "column",
                "webChart": {
                    "version": "7.3.1",
                    "id": "column",
                    "type": "chart",
                    "dataSource": {
                        "query": {
                            "groupByFieldsForStatistics": [
                                "Kilometro"
                            ],
                            "outStatistics": [
                                {
                                    "statisticType": "count",
                                    "onStatisticField": "OBJECTID",
                                    "outStatisticFieldName": "count_of_OBJECTID"
                                }
                            ],
                            "orderByFields": [
                                "Kilometro ASC"
                            ],
                            "where": "Tipo_accidente={value}"
                        }
                    },
                    "sortLabelsBy": "originalValue",
                    "rotated": false,
                    "series": [
                        {
                            "type": "barSeries",
                            "id": "",
                            "name": "",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#5E8FD0",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente=''"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Alcances",
                            "name": "Alcances",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#77B484",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Alcances'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Atropellos de animales",
                            "name": "Atropellos de animales",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#DF6B35",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Atropellos de animales'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Atropellos de peatones",
                            "name": "Atropellos de peatones",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#DBCF4E",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Atropellos de peatones'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Caidas",
                            "name": "Caidas",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#41546D",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Caidas'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Choques",
                            "name": "Choques",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#8257C2",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Choques'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Colisiones",
                            "name": "Colisiones",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#D6558B",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Colisiones'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Otros",
                            "name": "Otros",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#5E8FD0",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Otros'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Salidas de vía",
                            "name": "Salidas de vía",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#77B484",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Salidas de vía'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "Vuelcos",
                            "name": "Vuelcos",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#DF6B35",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='Vuelcos'"
                            }
                        },
                        {
                            "type": "barSeries",
                            "id": "__other-split-value__",
                            "name": "Undefined",
                            "x": "Kilometro",
                            "y": "OBJECTID",
                            "colorType": "singleColor",
                            "stackedType": "stacked",
                            "fillSymbol": {
                                "type": "esriSFS",
                                "style": "esriSFSSolid",
                                "color": "#DBCF4E",
                                "outline": {
                                    "type": "esriSLS",
                                    "style": "esriSLSSolid",
                                    "color": "var(--light-900)",
                                    "width": 0
                                }
                            },
                            "dataLabels": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-600)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 10,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "top"
                                }
                            },
                            "rotated": false,
                            "dataTooltipVisible": true,
                            "query": {
                                "where": "Tipo_accidente='__other-split-value__'"
                            }
                        }
                    ],
                    "axes": [
                        {
                            "type": "chartAxis",
                            "visible": true,
                            "isLogarithmic": false,
                            "title": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "labels": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-500)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "valueFormat": {
                                "type": "category",
                                "characterLimit": 11
                            },
                            "lineSymbol": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-800)",
                                "width": 1
                            },
                            "grid": {
                                "type": "esriSLS",
                                "style": "esriSLSDash",
                                "color": "var(--light-300)",
                                "width": 0
                            }
                        },
                        {
                            "type": "chartAxis",
                            "visible": true,
                            "isLogarithmic": false,
                            "title": {
                                "type": "chartText",
                                "visible": false,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "labels": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-500)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "verticalAlignment": "middle"
                                }
                            },
                            "valueFormat": {
                                "type": "number",
                                "intlOptions": {
                                    "style": "decimal",
                                    "useGrouping": true,
                                    "minimumFractionDigits": 0,
                                    "maximumFractionDigits": 0
                                }
                            },
                            "lineSymbol": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-800)",
                                "width": 1
                            },
                            "grid": {
                                "type": "esriSLS",
                                "style": "esriSLSDash",
                                "color": "var(--light-300)",
                                "width": 0
                            }
                        }
                    ],
                    "background": "var(--white)",
                    "title": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--black)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 24,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        }
                    },
                    "footer": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        }
                    },
                    "legend": {
                        "type": "chartLegend",
                        "visible": false,
                        "title": {
                            "type": "chartText",
                            "visible": true,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-800)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 20,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "text": ""
                            }
                        },
                        "body": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        },
                        "position": "right"
                    }
                }
            };
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetConfigLoaded('widget_11', config));
        }
    }, [escala]);
    // aqui habria que poner la variable seleccionada por el usuario que seria un estado y meterla en la lista de la parte de abajo
    useEffect(() => {
        const appC = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
        //appC.widgets.widget_4.config.webChart.dataSource.query.where = 'Subtipo_Accidente={value}'
        //console.log(appC)
        const config = {
            "pages": {
                "page_1": {
                    "id": "page_1",
                    "mode": "FIT_WINDOW",
                    "type": "NORMAL",
                    "layout": {
                        "LARGE": "layout_3"
                    },
                    "isDefault": true,
                    "isVisible": true,
                    "label": "Página 2",
                    "header": false,
                    "footer": false
                }
            },
            "layouts": {
                "layout_1": {
                    "content": {},
                    "type": "FIXED",
                    "setting": {
                        "lockDescendants": true
                    },
                    "id": "layout_1",
                    "parent": {
                        "id": "",
                        "type": "header"
                    }
                },
                "layout_3": {
                    "type": "FIXED",
                    "content": {
                        "0": {
                            "type": "WIDGET",
                            "widgetId": "widget_3",
                            "bbox": {
                                "left": "30.8%",
                                "right": "21.6%",
                                "top": "3.2%",
                                "bottom": "45.2%",
                                "width": "47.6%",
                                "height": "51.6%"
                            },
                            "setting": {
                                "autoProps": {
                                    "left": true,
                                    "right": false,
                                    "top": false,
                                    "bottom": true
                                },
                                "vCenter": false,
                                "hCenter": false
                            },
                            "id": "0"
                        },
                        "1": {
                            "type": "WIDGET",
                            "widgetId": "widget_4",
                            "bbox": {
                                "left": "6.2%",
                                "right": "47.0%",
                                "top": "58.0%",
                                "bottom": "2.0%",
                                "width": "46.8%",
                                "height": "40.0%"
                            },
                            "setting": {
                                "autoProps": {
                                    "left": false,
                                    "right": true,
                                    "top": true,
                                    "bottom": false
                                },
                                "vCenter": false,
                                "hCenter": false
                            },
                            "id": "1"
                        },
                        "2": {
                            "type": "WIDGET",
                            "widgetId": "widget_5",
                            "bbox": {
                                "left": "75.2%",
                                "right": "16.9%",
                                "top": "62.1%",
                                "bottom": "32.2%",
                                "width": "8.0%",
                                "height": "5.7%"
                            },
                            "setting": {
                                "autoProps": {
                                    "width": "AUTO",
                                    "height": "AUTO",
                                    "right": false,
                                    "left": true,
                                    "top": true,
                                    "bottom": false
                                },
                                "vCenter": false,
                                "hCenter": false
                            },
                            "id": "2"
                        }
                    },
                    "order": [
                        "0",
                        "1",
                        "2"
                    ],
                    "id": "layout_3",
                    "parent": {
                        "id": "page_1",
                        "type": "pages"
                    }
                },
                "layout_4": {
                    "content": {},
                    "type": "FIXED",
                    "label": "Map FixedLayout",
                    "id": "layout_4",
                    "parent": {
                        "id": "widget_3",
                        "type": "widget"
                    }
                },
                "layout_5": {
                    "content": {
                        "0": {
                            "type": "WIDGET",
                            "widgetId": "widget_6",
                            "bbox": {},
                            "id": "0"
                        },
                        "1": {
                            "type": "WIDGET",
                            "widgetId": "widget_9",
                            "bbox": {},
                            "id": "1"
                        }
                    },
                    "type": "FIXED",
                    "label": "Controller layout",
                    "order": [
                        "1",
                        "0"
                    ],
                    "id": "layout_5",
                    "parent": {
                        "id": "widget_5",
                        "type": "widget"
                    }
                }
            },
            "exbVersion": "1.14.0",
            "mainSizeMode": "LARGE",
            "theme": "themes/default/",
            "forBuilderAttributes": {
                "lockLayout": false
            },
            "template": "blankfullscreen",
            "widgets": {
                "widget_3": {
                    "uri": "widgets/arcgis/arcgis-map/",
                    "version": "1.14.0",
                    "label": "Mapa 2",
                    "config": {
                        "toolConfig": {
                            "canZoom": true,
                            "canHome": true,
                            "canSearch": true,
                            "canNavigation": true
                        },
                        "isUseCustomMapState": false
                    },
                    "id": "widget_3",
                    "layouts": {
                        "MapFixedLayout": {
                            "LARGE": "layout_4"
                        }
                    },
                    "useDataSources": [
                        {
                            "dataSourceId": "dataSource_1",
                            "mainDataSourceId": "dataSource_1"
                        }
                    ],
                    "context": {
                        "isRemote": false,
                        "folderUrl": "https://localhost:3001/experience/../widgets/arcgis/arcgis-map/"
                    },
                    "parent": {
                        "LARGE": [
                            {
                                "layoutId": "layout_3",
                                "layoutItemId": "0"
                            }
                        ]
                    },
                    "_originManifest": {
                        "name": "arcgis-map",
                        "label": "Map",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "publishMessages": [
                            "EXTENT_CHANGE",
                            "DATA_RECORDS_SELECTION_CHANGE"
                        ],
                        "messageActions": [
                            {
                                "name": "panTo",
                                "label": "Pan to",
                                "uri": "message-actions/pan-to-action",
                                "settingUri": "message-actions/pan-to-action-setting"
                            },
                            {
                                "name": "zoomToFeature",
                                "label": "Zoom to",
                                "uri": "message-actions/zoom-to-feature-action",
                                "settingUri": "message-actions/zoom-to-feature-action-setting"
                            },
                            {
                                "name": "flash",
                                "label": "Flash",
                                "uri": "message-actions/flash-action",
                                "settingUri": "message-actions/flash-action-setting"
                            },
                            {
                                "name": "filter",
                                "label": "Filter",
                                "uri": "message-actions/filter-action",
                                "settingUri": "message-actions/filter-action-setting"
                            },
                            {
                                "name": "showOnMap",
                                "label": "Show on map",
                                "uri": "message-actions/show-on-map-action",
                                "settingUri": "message-actions/show-on-map-action-setting"
                            },
                            {
                                "name": "addToMap",
                                "label": "Add to map",
                                "uri": "message-actions/add-to-map-action"
                            }
                        ],
                        "defaultSize": {
                            "width": 400,
                            "height": 400
                        },
                        "properties": {
                            "canCreateMapView": true,
                            "hasEmbeddedLayout": true,
                            "passDataSourceToChildren": false,
                            "coverLayoutBackground": true,
                            "watchViewportVisibility": true,
                            "supportAutoSize": false,
                            "canConsumeDataAction": true,
                            "needActiveState": true
                        },
                        "excludeDataActions": [
                            "setFilter",
                            "arcgis-map.addToMap",
                            "dataStatistics",
                            "table.addToTable"
                        ],
                        "dataActions": [
                            {
                                "name": "zoomToFeature",
                                "label": "Zoom to",
                                "uri": "data-actions/zoom-to",
                                "icon": "runtime/assets/icons/select-tool/select-zoomto.svg"
                            },
                            {
                                "name": "panTo",
                                "label": "Pan to",
                                "uri": "data-actions/pan-to",
                                "icon": "runtime/assets/icons/pan-to.svg"
                            },
                            {
                                "name": "showOnMap",
                                "label": "Show on map",
                                "uri": "data-actions/show-on-map",
                                "settingUri": "data-actions/show-on-map-setting",
                                "icon": "runtime/assets/icons/show-on-map.svg"
                            },
                            {
                                "name": "addToMap",
                                "label": "Add to map",
                                "uri": "data-actions/add-to-map",
                                "icon": "runtime/assets/icons/add-to-map.svg"
                            }
                        ],
                        "layouts": [
                            {
                                "name": "MapFixedLayout",
                                "label": "Map FixedLayout",
                                "type": "FIXED"
                            }
                        ],
                        "urlParameters": [
                            {
                                "name": "viewpoint",
                                "label": "Viewpoint",
                                "tooltip": "Viewpoint describes the point of view for a web map or web scene."
                            },
                            {
                                "name": "center",
                                "label": "Center"
                            },
                            {
                                "name": "scale",
                                "label": "Scale"
                            },
                            {
                                "name": "rotation",
                                "label": "Rotation"
                            },
                            {
                                "name": "layer_visibility",
                                "label": "Layer visibility"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "appConfigOperations",
                                "point": "APP_CONFIG_OPERATIONS",
                                "uri": "tools/app-config-operations"
                            }
                        ],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ]
                    },
                    "manifest": {
                        "name": "arcgis-map",
                        "label": "Map",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "publishMessages": [
                            "EXTENT_CHANGE",
                            "DATA_RECORDS_SELECTION_CHANGE"
                        ],
                        "messageActions": [
                            {
                                "name": "panTo",
                                "label": "Pan to",
                                "uri": "message-actions/pan-to-action",
                                "settingUri": "message-actions/pan-to-action-setting"
                            },
                            {
                                "name": "zoomToFeature",
                                "label": "Zoom to",
                                "uri": "message-actions/zoom-to-feature-action",
                                "settingUri": "message-actions/zoom-to-feature-action-setting"
                            },
                            {
                                "name": "flash",
                                "label": "Flash",
                                "uri": "message-actions/flash-action",
                                "settingUri": "message-actions/flash-action-setting"
                            },
                            {
                                "name": "filter",
                                "label": "Filter",
                                "uri": "message-actions/filter-action",
                                "settingUri": "message-actions/filter-action-setting"
                            },
                            {
                                "name": "showOnMap",
                                "label": "Show on map",
                                "uri": "message-actions/show-on-map-action",
                                "settingUri": "message-actions/show-on-map-action-setting"
                            },
                            {
                                "name": "addToMap",
                                "label": "Add to map",
                                "uri": "message-actions/add-to-map-action"
                            }
                        ],
                        "defaultSize": {
                            "width": 400,
                            "height": 400
                        },
                        "properties": {
                            "canCreateMapView": true,
                            "hasEmbeddedLayout": true,
                            "passDataSourceToChildren": false,
                            "coverLayoutBackground": true,
                            "watchViewportVisibility": true,
                            "supportAutoSize": false,
                            "canConsumeDataAction": true,
                            "needActiveState": true,
                            "hasVersionManager": false,
                            "supportInlineEditing": false,
                            "supportRepeat": false,
                            "hasBuilderSupportModule": false,
                            "lockChildren": false,
                            "flipIcon": false,
                            "canCrossLayoutBoundary": false,
                            "isWidgetController": false,
                            "hasMainClass": true,
                            "hasConfig": true,
                            "hasSettingPage": true,
                            "hasConfigInSettingPage": true,
                            "deactivateOtherWidgets": true
                        },
                        "excludeDataActions": [
                            "setFilter",
                            "arcgis-map.addToMap",
                            "dataStatistics",
                            "table.addToTable"
                        ],
                        "dataActions": [
                            {
                                "name": "zoomToFeature",
                                "label": "Zoom to",
                                "uri": "data-actions/zoom-to",
                                "icon": "runtime/assets/icons/select-tool/select-zoomto.svg"
                            },
                            {
                                "name": "panTo",
                                "label": "Pan to",
                                "uri": "data-actions/pan-to",
                                "icon": "runtime/assets/icons/pan-to.svg"
                            },
                            {
                                "name": "showOnMap",
                                "label": "Show on map",
                                "uri": "data-actions/show-on-map",
                                "settingUri": "data-actions/show-on-map-setting",
                                "icon": "runtime/assets/icons/show-on-map.svg"
                            },
                            {
                                "name": "addToMap",
                                "label": "Add to map",
                                "uri": "data-actions/add-to-map",
                                "icon": "runtime/assets/icons/add-to-map.svg"
                            }
                        ],
                        "layouts": [
                            {
                                "name": "MapFixedLayout",
                                "label": "Map FixedLayout",
                                "type": "FIXED"
                            }
                        ],
                        "urlParameters": [
                            {
                                "name": "viewpoint",
                                "label": "Viewpoint",
                                "tooltip": "Viewpoint describes the point of view for a web map or web scene."
                            },
                            {
                                "name": "center",
                                "label": "Center"
                            },
                            {
                                "name": "scale",
                                "label": "Scale"
                            },
                            {
                                "name": "rotation",
                                "label": "Rotation"
                            },
                            {
                                "name": "layer_visibility",
                                "label": "Layer visibility"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "appConfigOperations",
                                "point": "APP_CONFIG_OPERATIONS",
                                "uri": "tools/app-config-operations"
                            }
                        ],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ],
                        "i18nMessages": {
                            "_widgetLabel": "Mapa",
                            "_action_displayFeatureSet_label": "Mostrar conjunto de entidades",
                            "_action_panTo_label": "Desplazar a",
                            "_action_zoomToFeature_label": "Acercar a",
                            "_action_selectFeature_label": "Seleccionar entidad",
                            "_action_flash_label": "Destacar",
                            "_action_filter_label": "Filtrar",
                            "_action_showOnMap_label": "Mostrar en el mapa",
                            "_action_addToMap_label": "Agregar al mapa",
                            "showOnMapData": "Mostrar en datos del mapa",
                            "addedData": "datos agregados",
                            "failToAddTheDataOnMap": "Error al agregar los datos.",
                            "addToMapData": "Agregar a datos del mapa",
                            "mapCurrentRecord": "Registro actual de mapas {layerName}",
                            "_url_params_viewpoint_label": "Punto de visualización",
                            "_url_params_viewpoint_tooltip": "Viewpoint describe el punto de vista para un mapa web o una escena web.",
                            "_url_params_center_label": "Centro",
                            "_url_params_scale_label": "Escala",
                            "_url_params_rotation_label": "Rotación",
                            "_url_params_layer_visibility_label": "Visibilidad de capa"
                        }
                    },
                    "icon": "https://localhost:3001/experience/../widgets/arcgis/arcgis-map/icon.svg"
                },
                "widget_4": {
                    "uri": "widgets/common/chart/",
                    "version": "1.14.0",
                    "label": "Gráfico",
                    "config": {
                        "tools": {
                            "cursorEnable": true
                        },
                        "template": "column",
                        "webChart": {
                            "version": "7.3.1",
                            "id": "column",
                            "type": "chart",
                            "dataSource": {
                                "query": {
                                    "groupByFieldsForStatistics": [
                                        "Año"
                                    ],
                                    "outStatistics": [
                                        {
                                            "statisticType": "count",
                                            "onStatisticField": "OBJECTID",
                                            "outStatisticFieldName": "count_of_OBJECTID"
                                        }
                                    ],
                                    "orderByFields": [
                                        "Año ASC"
                                    ],
                                    "where": "Subtipo_Accidente={value}"
                                }
                            },
                            "sortLabelsBy": "originalValue",
                            "rotated": false,
                            "series": [
                                {
                                    "type": "barSeries",
                                    "id": "",
                                    "name": "",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#5E8FD0",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente=''"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Alcance",
                                    "name": "Alcance",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#77B484",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Alcance'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Animal conducido o rebaño",
                                    "name": "Animal conducido o rebaño",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DF6B35",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Animal conducido o rebaño'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Animales sueltos",
                                    "name": "Animales sueltos",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DBCF4E",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Animales sueltos'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Barrera de paso a nivel",
                                    "name": "Barrera de paso a nivel",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#41546D",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Barrera de paso a nivel'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Caida en calzada",
                                    "name": "Caida en calzada",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#8257C2",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Caida en calzada'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Choque con árbol o poste",
                                    "name": "Choque con árbol o poste",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#D6558B",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Choque con árbol o poste'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Choque con cuneta o bordillo",
                                    "name": "Choque con cuneta o bordillo",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#5E8FD0",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Choque con cuneta o bordillo'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Choque con murete o edificio",
                                    "name": "Choque con murete o edificio",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#77B484",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Choque con murete o edificio'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Choque contra barrera de seguridad",
                                    "name": "Choque contra barrera de seguridad",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DF6B35",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Choque contra barrera de seguridad'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Con despeñamiento",
                                    "name": "Con despeñamiento",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DBCF4E",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Con despeñamiento'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Con vuelco",
                                    "name": "Con vuelco",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#41546D",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Con vuelco'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Despeñamiento",
                                    "name": "Despeñamiento",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#8257C2",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Despeñamiento'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "En llano",
                                    "name": "En llano",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#D6558B",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='En llano'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Frontal",
                                    "name": "Frontal",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#5E8FD0",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Frontal'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Frontolateral",
                                    "name": "Frontolateral",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#77B484",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Frontolateral'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Lateral",
                                    "name": "Lateral",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DF6B35",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Lateral'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Múltiple o en caravana",
                                    "name": "Múltiple o en caravana",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#DBCF4E",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Múltiple o en caravana'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Obstáculo  o elemento de la vía",
                                    "name": "Obstáculo  o elemento de la vía",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#41546D",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Obstáculo  o elemento de la vía'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "Otro",
                                    "name": "Otro",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#8257C2",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='Otro'"
                                    }
                                },
                                {
                                    "type": "barSeries",
                                    "id": "__other-split-value__",
                                    "name": "Undefined",
                                    "x": "Año",
                                    "y": "OBJECTID",
                                    "colorType": "singleColor",
                                    "stackedType": "stacked",
                                    "fillSymbol": {
                                        "type": "esriSFS",
                                        "style": "esriSFSSolid",
                                        "color": "#D6D6D6",
                                        "outline": {
                                            "type": "esriSLS",
                                            "style": "esriSLSSolid",
                                            "color": "var(--light-900)",
                                            "width": 0
                                        }
                                    },
                                    "dataLabels": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-600)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 10,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "top"
                                        }
                                    },
                                    "rotated": false,
                                    "dataTooltipVisible": true,
                                    "query": {
                                        "where": "Subtipo_Accidente='__other-split-value__'"
                                    }
                                }
                            ],
                            "axes": [
                                {
                                    "type": "chartAxis",
                                    "visible": true,
                                    "isLogarithmic": false,
                                    "title": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-800)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 14,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "middle"
                                        }
                                    },
                                    "labels": {
                                        "type": "chartText",
                                        "visible": true,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-500)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 14,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "middle"
                                        }
                                    },
                                    "valueFormat": {
                                        "type": "category",
                                        "characterLimit": 11
                                    },
                                    "lineSymbol": {
                                        "type": "esriSLS",
                                        "style": "esriSLSSolid",
                                        "color": "var(--light-800)",
                                        "width": 1
                                    },
                                    "grid": {
                                        "type": "esriSLS",
                                        "style": "esriSLSDash",
                                        "color": "var(--light-300)",
                                        "width": 0
                                    }
                                },
                                {
                                    "type": "chartAxis",
                                    "visible": true,
                                    "isLogarithmic": false,
                                    "title": {
                                        "type": "chartText",
                                        "visible": false,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-800)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 14,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "middle"
                                        }
                                    },
                                    "labels": {
                                        "type": "chartText",
                                        "visible": true,
                                        "content": {
                                            "type": "esriTS",
                                            "color": "var(--dark-500)",
                                            "font": {
                                                "family": "Avenir Next",
                                                "size": 14,
                                                "style": "normal",
                                                "weight": "normal",
                                                "decoration": "none"
                                            },
                                            "horizontalAlignment": "center",
                                            "verticalAlignment": "middle"
                                        }
                                    },
                                    "valueFormat": {
                                        "type": "number",
                                        "intlOptions": {
                                            "style": "decimal",
                                            "useGrouping": true,
                                            "minimumFractionDigits": 0,
                                            "maximumFractionDigits": 0
                                        }
                                    },
                                    "lineSymbol": {
                                        "type": "esriSLS",
                                        "style": "esriSLSSolid",
                                        "color": "var(--light-800)",
                                        "width": 1
                                    },
                                    "grid": {
                                        "type": "esriSLS",
                                        "style": "esriSLSDash",
                                        "color": "var(--light-300)",
                                        "width": 0
                                    }
                                }
                            ],
                            "background": "var(--white)",
                            "title": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--black)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 24,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "text": ""
                                }
                            },
                            "footer": {
                                "type": "chartText",
                                "visible": true,
                                "content": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "text": ""
                                }
                            },
                            "legend": {
                                "type": "chartLegend",
                                "visible": false,
                                "title": {
                                    "type": "chartText",
                                    "visible": true,
                                    "content": {
                                        "type": "esriTS",
                                        "color": "var(--dark-800)",
                                        "font": {
                                            "family": "Avenir Next",
                                            "size": 20,
                                            "style": "normal",
                                            "weight": "normal",
                                            "decoration": "none"
                                        },
                                        "horizontalAlignment": "center",
                                        "text": ""
                                    }
                                },
                                "body": {
                                    "type": "esriTS",
                                    "color": "var(--dark-800)",
                                    "font": {
                                        "family": "Avenir Next",
                                        "size": 14,
                                        "style": "normal",
                                        "weight": "normal",
                                        "decoration": "none"
                                    },
                                    "horizontalAlignment": "center",
                                    "text": ""
                                },
                                "position": "right"
                            }
                        }
                    },
                    "id": "widget_4",
                    "useDataSources": [
                        {
                            "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                            "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                            "rootDataSourceId": "dataSource_1",
                            "fields": [
                                "Año",
                                "OBJECTID",
                                "Subtipo_Accidente"
                            ]
                        }
                    ],
                    "outputDataSources": [
                        "widget_4_ouput"
                    ],
                    "context": {
                        "isRemote": false,
                        "folderUrl": "https://localhost:3001/experience/../widgets/common/chart/"
                    },
                    "parent": {
                        "LARGE": [
                            {
                                "layoutId": "layout_3",
                                "layoutItemId": "1"
                            }
                        ]
                    },
                    "_originManifest": {
                        "name": "chart",
                        "label": "Chart",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "dependency": "jimu-arcgis",
                        "settingDependency": "jimu-arcgis",
                        "publishMessages": [
                            {
                                "messageType": "DATA_RECORDS_SELECTION_CHANGE",
                                "messageCarryData": "OUTPUT_DATA_SOURCE"
                            }
                        ],
                        "defaultSize": {
                            "width": 450,
                            "height": 300
                        },
                        "properties": {
                            "hasSettingPage": true,
                            "canConsumeDataAction": true,
                            "coverLayoutBackground": true,
                            "notAutoLoadUsedFieldsData": true
                        },
                        "excludeDataActions": [
                            "arcgis-map.*",
                            "setFilter",
                            "near-me.locate",
                            "elevation-profile.*",
                            "directions.*"
                        ],
                        "extensions": [],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ]
                    },
                    "manifest": {
                        "name": "chart",
                        "label": "Chart",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "dependency": "jimu-arcgis",
                        "settingDependency": "jimu-arcgis",
                        "publishMessages": [
                            {
                                "messageType": "DATA_RECORDS_SELECTION_CHANGE",
                                "messageCarryData": "OUTPUT_DATA_SOURCE"
                            }
                        ],
                        "defaultSize": {
                            "width": 450,
                            "height": 300
                        },
                        "properties": {
                            "hasSettingPage": true,
                            "canConsumeDataAction": true,
                            "coverLayoutBackground": true,
                            "notAutoLoadUsedFieldsData": true,
                            "hasVersionManager": false,
                            "supportInlineEditing": false,
                            "supportRepeat": false,
                            "hasBuilderSupportModule": false,
                            "hasEmbeddedLayout": false,
                            "lockChildren": false,
                            "flipIcon": false,
                            "canCrossLayoutBoundary": false,
                            "needActiveState": false,
                            "watchViewportVisibility": false,
                            "isWidgetController": false,
                            "hasMainClass": true,
                            "hasConfig": true,
                            "hasConfigInSettingPage": true,
                            "passDataSourceToChildren": true,
                            "deactivateOtherWidgets": true,
                            "supportAutoSize": true
                        },
                        "excludeDataActions": [
                            "arcgis-map.*",
                            "setFilter",
                            "near-me.locate",
                            "elevation-profile.*",
                            "directions.*"
                        ],
                        "extensions": [],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ],
                        "i18nMessages": {
                            "_widgetLabel": "Gráfico",
                            "bar1SeriesLimitation": "Los gráficos de barras o columnas con una serie están limitados a 10.000 barras en total. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                            "bar2SeriesLimitation": "Los gráficos de barras o columnas con dos series están limitados a 2.000 barras, o 1.000 barras por serie. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                            "bar3SeriesLimitation": "Los gráficos de barras o columnas con tres o más series están limitados a 2.000 barras, o 100 barras por serie. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                            "lineLimitation": "Los gráficos de líneas o áreas están limitados a 10.000 marcadores de valor en total y a un máximo de 100 series. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                            "pieLimitation": "No se pudo renderizar; demasiadas categorías. El gráfico circular está limitado a 300 categorías como máximo.",
                            "dataEmptyTip": "No se han encontrado datos."
                        }
                    },
                    "icon": "https://localhost:3001/experience/../widgets/common/chart/icon.svg"
                },
                "widget_5": {
                    "uri": "widgets/common/controller/",
                    "version": "1.14.0",
                    "label": "Controlador de widget",
                    "config": {
                        "behavior": {
                            "onlyOpenOne": true,
                            "openStarts": [],
                            "displayType": "STACK",
                            "vertical": false,
                            "size": {
                                "widget_6": {
                                    "width": 648,
                                    "height": 484
                                }
                            }
                        },
                        "appearance": {
                            "space": 0,
                            "advanced": false,
                            "card": {
                                "showLabel": false,
                                "labelGrowth": 10,
                                "avatar": {
                                    "type": "primary",
                                    "size": "default",
                                    "shape": "circle"
                                }
                            }
                        }
                    },
                    "id": "widget_5",
                    "layouts": {
                        "controller": {
                            "LARGE": "layout_5"
                        }
                    },
                    "context": {
                        "isRemote": false,
                        "folderUrl": "https://localhost:3001/experience/../widgets/common/controller/"
                    },
                    "parent": {
                        "LARGE": [
                            {
                                "layoutId": "layout_3",
                                "layoutItemId": "2"
                            }
                        ]
                    },
                    "_originManifest": {
                        "name": "controller",
                        "label": "Widget Controller",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "defaultSize": {
                            "height": 54,
                            "width": 200,
                            "autoWidth": true,
                            "autoHeight": true
                        },
                        "properties": {
                            "hasSettingPage": true,
                            "hasEmbeddedLayout": true,
                            "isWidgetController": true,
                            "supportAutoSize": true,
                            "useDragHandler": true,
                            "canCrossLayoutBoundary": true,
                            "hasBuilderSupportModule": true
                        },
                        "layouts": [
                            {
                                "name": "controller",
                                "label": "Controller layout",
                                "type": "FIXED"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "previous",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/previous"
                            },
                            {
                                "name": "next",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/next"
                            },
                            {
                                "name": "add-widget",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/add-widget"
                            },
                            {
                                "name": "appConfigOperations",
                                "point": "APP_CONFIG_OPERATIONS",
                                "uri": "tools/app-config-operations"
                            }
                        ],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ]
                    },
                    "manifest": {
                        "name": "controller",
                        "label": "Widget Controller",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "defaultSize": {
                            "height": 54,
                            "width": 200,
                            "autoWidth": true,
                            "autoHeight": true
                        },
                        "properties": {
                            "hasSettingPage": true,
                            "hasEmbeddedLayout": true,
                            "isWidgetController": true,
                            "supportAutoSize": true,
                            "useDragHandler": true,
                            "canCrossLayoutBoundary": true,
                            "hasBuilderSupportModule": true,
                            "hasVersionManager": false,
                            "supportInlineEditing": false,
                            "supportRepeat": false,
                            "lockChildren": false,
                            "flipIcon": false,
                            "coverLayoutBackground": false,
                            "needActiveState": false,
                            "canConsumeDataAction": false,
                            "watchViewportVisibility": false,
                            "hasMainClass": true,
                            "hasConfig": true,
                            "hasConfigInSettingPage": true,
                            "passDataSourceToChildren": true,
                            "deactivateOtherWidgets": true
                        },
                        "layouts": [
                            {
                                "name": "controller",
                                "label": "Controller layout",
                                "type": "FIXED"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "previous",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/previous"
                            },
                            {
                                "name": "next",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/next"
                            },
                            {
                                "name": "add-widget",
                                "point": "CONTEXT_TOOL",
                                "uri": "tools/add-widget"
                            },
                            {
                                "name": "appConfigOperations",
                                "point": "APP_CONFIG_OPERATIONS",
                                "uri": "tools/app-config-operations"
                            }
                        ],
                        "translatedLocales": [
                            "en",
                            "ar",
                            "bg",
                            "bs",
                            "ca",
                            "cs",
                            "da",
                            "de",
                            "el",
                            "es",
                            "et",
                            "fi",
                            "fr",
                            "he",
                            "hr",
                            "hu",
                            "id",
                            "it",
                            "ja",
                            "ko",
                            "lt",
                            "lv",
                            "nb",
                            "nl",
                            "pl",
                            "pt-br",
                            "pt-pt",
                            "ro",
                            "ru",
                            "sk",
                            "sl",
                            "sr",
                            "sv",
                            "th",
                            "tr",
                            "zh-cn",
                            "uk",
                            "vi",
                            "zh-hk",
                            "zh-tw"
                        ],
                        "i18nMessages": {
                            "_widgetLabel": "Controlador de widget"
                        }
                    },
                    "icon": "https://localhost:3001/experience/../widgets/common/controller/icon.svg"
                },
                "widget_6": {
                    "uri": "widgets/coordendas/",
                    "version": "1.12.0",
                    "label": "Coordenadas",
                    "config": {
                        "exampleConfigProperty": "test"
                    },
                    "id": "widget_6",
                    "context": {
                        "isRemote": false,
                        "folderUrl": "https://localhost:3001/experience/../widgets/coordendas/"
                    },
                    "parent": {
                        "LARGE": [
                            {
                                "layoutId": "layout_5",
                                "layoutItemId": "0"
                            }
                        ]
                    },
                    "_originManifest": {
                        "name": "coordendas",
                        "label": "Coordenadas",
                        "type": "widget",
                        "version": "1.12.0",
                        "exbVersion": "1.12.0",
                        "author": "SyKgis",
                        "description": "Widget de coordenadas.",
                        "copyright": "",
                        "dependency": "jimu-arcgis",
                        "license": "http://www.apache.org/licenses/LICENSE-2.0",
                        "properties": {},
                        "translatedLocales": [
                            "es",
                            "en"
                        ],
                        "defaultSize": {
                            "width": 400,
                            "height": 400
                        }
                    },
                    "manifest": {
                        "name": "coordendas",
                        "label": "Coordenadas",
                        "type": "widget",
                        "version": "1.12.0",
                        "exbVersion": "1.12.0",
                        "author": "SyKgis",
                        "description": "Widget de coordenadas.",
                        "copyright": "",
                        "dependency": "jimu-arcgis",
                        "license": "http://www.apache.org/licenses/LICENSE-2.0",
                        "properties": {
                            "hasVersionManager": false,
                            "supportInlineEditing": false,
                            "supportRepeat": false,
                            "hasBuilderSupportModule": false,
                            "hasEmbeddedLayout": false,
                            "lockChildren": false,
                            "flipIcon": false,
                            "coverLayoutBackground": false,
                            "canCrossLayoutBoundary": false,
                            "needActiveState": false,
                            "canConsumeDataAction": false,
                            "watchViewportVisibility": false,
                            "isWidgetController": false,
                            "hasMainClass": true,
                            "hasConfig": true,
                            "hasSettingPage": true,
                            "hasConfigInSettingPage": true,
                            "passDataSourceToChildren": true,
                            "deactivateOtherWidgets": true,
                            "supportAutoSize": true
                        },
                        "translatedLocales": [
                            "es",
                            "en"
                        ],
                        "defaultSize": {
                            "width": 400,
                            "height": 400
                        },
                        "i18nMessages": {}
                    },
                    "icon": "https://localhost:3001/experience/../widgets/coordendas/icon.svg"
                },
                "widget_9": {
                    "uri": "widgets/control-the-widget-state/",
                    "version": "1.14.0",
                    "label": "Control the Widget State",
                    "config": null,
                    "id": "widget_9",
                    "context": {
                        "isRemote": false,
                        "folderUrl": "https://localhost:3001/experience/../widgets/control-the-widget-state/"
                    },
                    "parent": {
                        "LARGE": [
                            {
                                "layoutId": "layout_5",
                                "layoutItemId": "1"
                            }
                        ]
                    },
                    "_originManifest": {
                        "name": "control-the-widget-state",
                        "label": "Control the Widget State",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "author": "Esri R&D Center Beijing",
                        "description": "This widgets demonstrates the ability to control the widget state of another widget.",
                        "copyright": "",
                        "license": "http://www.apache.org/licenses/LICENSE-2.0",
                        "properties": {
                            "hasSettingPage": false,
                            "hasConfig": false
                        },
                        "translatedLocales": [
                            "en"
                        ],
                        "defaultSize": {
                            "width": 300,
                            "height": 300
                        }
                    },
                    "manifest": {
                        "name": "control-the-widget-state",
                        "label": "Control the Widget State",
                        "type": "widget",
                        "version": "1.14.0",
                        "exbVersion": "1.14.0",
                        "author": "Esri R&D Center Beijing",
                        "description": "This widgets demonstrates the ability to control the widget state of another widget.",
                        "copyright": "",
                        "license": "http://www.apache.org/licenses/LICENSE-2.0",
                        "properties": {
                            "hasSettingPage": false,
                            "hasConfig": false,
                            "hasVersionManager": false,
                            "supportInlineEditing": false,
                            "supportRepeat": false,
                            "hasBuilderSupportModule": false,
                            "hasEmbeddedLayout": false,
                            "lockChildren": false,
                            "flipIcon": false,
                            "coverLayoutBackground": false,
                            "canCrossLayoutBoundary": false,
                            "needActiveState": false,
                            "canConsumeDataAction": false,
                            "watchViewportVisibility": false,
                            "isWidgetController": false,
                            "hasMainClass": true,
                            "hasConfigInSettingPage": true,
                            "passDataSourceToChildren": true,
                            "deactivateOtherWidgets": true,
                            "supportAutoSize": true
                        },
                        "translatedLocales": [
                            "en"
                        ],
                        "defaultSize": {
                            "width": 300,
                            "height": 300
                        },
                        "i18nMessages": {}
                    },
                    "icon": "https://localhost:3001/experience/../widgets/control-the-widget-state/icon.svg"
                }
            },
            "widgetsManifest": {},
            "views": {},
            "sections": {},
            "dialogs": {},
            "dataSources": {
                "dataSource_1": {
                    "id": "dataSource_1",
                    "type": "WEB_MAP",
                    "sourceLabel": "Web Map Pruebas-Copia",
                    "itemId": "5ef68bc6848a4d9fb253177ce47637ca",
                    "portalUrl": "https://Dair.maps.arcgis.com"
                },
                "widget_4_ouput": {
                    "id": "widget_4_ouput",
                    "type": "FEATURE_LAYER",
                    "label": "Estadísticas de Gráfico",
                    "originDataSources": [
                        {
                            "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                            "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                            "rootDataSourceId": "dataSource_1"
                        }
                    ],
                    "isOutputFromWidget": true,
                    "isDataInDataSourceInstance": true,
                    "schema": {
                        "idField": "__outputid__",
                        "label": "Estadísticas de Gráfico",
                        "fields": {
                            "__outputid__": {
                                "jimuName": "__outputid__",
                                "alias": "OBJECTID",
                                "type": "NUMBER",
                                "name": "__outputid__"
                            },
                            "Año": {
                                "jimuName": "Año",
                                "name": "Año",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeDouble",
                                "alias": "Año",
                                "format": {
                                    "digitSeparator": true,
                                    "places": 0
                                },
                                "originFields": [
                                    "Año"
                                ]
                            },
                            "count_of_OBJECTID_of_": {
                                "jimuName": "count_of_OBJECTID_of_",
                                "name": "count_of_OBJECTID_of_",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of ",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Alcance": {
                                "jimuName": "count_of_OBJECTID_of_Alcance",
                                "name": "count_of_OBJECTID_of_Alcance",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Alcance",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Animal conducido o rebaño": {
                                "jimuName": "count_of_OBJECTID_of_Animal conducido o rebaño",
                                "name": "count_of_OBJECTID_of_Animal conducido o rebaño",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Animal conducido o rebaño",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Animales sueltos": {
                                "jimuName": "count_of_OBJECTID_of_Animales sueltos",
                                "name": "count_of_OBJECTID_of_Animales sueltos",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Animales sueltos",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Barrera de paso a nivel": {
                                "jimuName": "count_of_OBJECTID_of_Barrera de paso a nivel",
                                "name": "count_of_OBJECTID_of_Barrera de paso a nivel",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Barrera de paso a nivel",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Caida en calzada": {
                                "jimuName": "count_of_OBJECTID_of_Caida en calzada",
                                "name": "count_of_OBJECTID_of_Caida en calzada",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Caida en calzada",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Choque con árbol o poste": {
                                "jimuName": "count_of_OBJECTID_of_Choque con árbol o poste",
                                "name": "count_of_OBJECTID_of_Choque con árbol o poste",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Choque con árbol o poste",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Choque con cuneta o bordillo": {
                                "jimuName": "count_of_OBJECTID_of_Choque con cuneta o bordillo",
                                "name": "count_of_OBJECTID_of_Choque con cuneta o bordillo",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Choque con cuneta o bordillo",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Choque con murete o edificio": {
                                "jimuName": "count_of_OBJECTID_of_Choque con murete o edificio",
                                "name": "count_of_OBJECTID_of_Choque con murete o edificio",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Choque con murete o edificio",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Choque contra barrera de seguridad": {
                                "jimuName": "count_of_OBJECTID_of_Choque contra barrera de seguridad",
                                "name": "count_of_OBJECTID_of_Choque contra barrera de seguridad",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Choque contra barrera de seguridad",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Con despeñamiento": {
                                "jimuName": "count_of_OBJECTID_of_Con despeñamiento",
                                "name": "count_of_OBJECTID_of_Con despeñamiento",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Con despeñamiento",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Con vuelco": {
                                "jimuName": "count_of_OBJECTID_of_Con vuelco",
                                "name": "count_of_OBJECTID_of_Con vuelco",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Con vuelco",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Despeñamiento": {
                                "jimuName": "count_of_OBJECTID_of_Despeñamiento",
                                "name": "count_of_OBJECTID_of_Despeñamiento",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Despeñamiento",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_En llano": {
                                "jimuName": "count_of_OBJECTID_of_En llano",
                                "name": "count_of_OBJECTID_of_En llano",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of En llano",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Frontal": {
                                "jimuName": "count_of_OBJECTID_of_Frontal",
                                "name": "count_of_OBJECTID_of_Frontal",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Frontal",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Frontolateral": {
                                "jimuName": "count_of_OBJECTID_of_Frontolateral",
                                "name": "count_of_OBJECTID_of_Frontolateral",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Frontolateral",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Lateral": {
                                "jimuName": "count_of_OBJECTID_of_Lateral",
                                "name": "count_of_OBJECTID_of_Lateral",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Lateral",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Múltiple o en caravana": {
                                "jimuName": "count_of_OBJECTID_of_Múltiple o en caravana",
                                "name": "count_of_OBJECTID_of_Múltiple o en caravana",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Múltiple o en caravana",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Obstáculo  o elemento de la vía": {
                                "jimuName": "count_of_OBJECTID_of_Obstáculo  o elemento de la vía",
                                "name": "count_of_OBJECTID_of_Obstáculo  o elemento de la vía",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Obstáculo  o elemento de la vía",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Otro": {
                                "jimuName": "count_of_OBJECTID_of_Otro",
                                "name": "count_of_OBJECTID_of_Otro",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Otro",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Otro objeto o material": {
                                "jimuName": "count_of_OBJECTID_of_Otro objeto o material",
                                "name": "count_of_OBJECTID_of_Otro objeto o material",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Otro objeto o material",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Otro tipo de choque": {
                                "jimuName": "count_of_OBJECTID_of_Otro tipo de choque",
                                "name": "count_of_OBJECTID_of_Otro tipo de choque",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Otro tipo de choque",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Peatón aislado": {
                                "jimuName": "count_of_OBJECTID_of_Peatón aislado",
                                "name": "count_of_OBJECTID_of_Peatón aislado",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Peatón aislado",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Peatón aislado o en grupo": {
                                "jimuName": "count_of_OBJECTID_of_Peatón aislado o en grupo",
                                "name": "count_of_OBJECTID_of_Peatón aislado o en grupo",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Peatón aislado o en grupo",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Peatón reparando vehículo": {
                                "jimuName": "count_of_OBJECTID_of_Peatón reparando vehículo",
                                "name": "count_of_OBJECTID_of_Peatón reparando vehículo",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Peatón reparando vehículo",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Peatón sosteniendo bicicleta": {
                                "jimuName": "count_of_OBJECTID_of_Peatón sosteniendo bicicleta",
                                "name": "count_of_OBJECTID_of_Peatón sosteniendo bicicleta",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Peatón sosteniendo bicicleta",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Sólo Salida de Vía": {
                                "jimuName": "count_of_OBJECTID_of_Sólo Salida de Vía",
                                "name": "count_of_OBJECTID_of_Sólo Salida de Vía",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Sólo Salida de Vía",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Valla de defensa": {
                                "jimuName": "count_of_OBJECTID_of_Valla de defensa",
                                "name": "count_of_OBJECTID_of_Valla de defensa",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Valla de defensa",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Vehículo estacionado/averiado": {
                                "jimuName": "count_of_OBJECTID_of_Vehículo estacionado/averiado",
                                "name": "count_of_OBJECTID_of_Vehículo estacionado/averiado",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Vehículo estacionado/averiado",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            },
                            "count_of_OBJECTID_of_Vuelco en la calzada": {
                                "jimuName": "count_of_OBJECTID_of_Vuelco en la calzada",
                                "name": "count_of_OBJECTID_of_Vuelco en la calzada",
                                "type": "NUMBER",
                                "esriType": "esriFieldTypeOID",
                                "alias": "Count of OBJECTID of Vuelco en la calzada",
                                "format": {
                                    "digitSeparator": false,
                                    "places": 0
                                },
                                "originFields": [
                                    "OBJECTID",
                                    "Subtipo_Accidente"
                                ]
                            }
                        }
                    }
                }
            },
            "messageConfigs": {
                "messageConfig_1": {
                    "id": "messageConfig_1",
                    "widgetId": "widget_4",
                    "messageType": "DATA_RECORDS_SELECTION_CHANGE",
                    "actions": [
                        {
                            "actionId": "widget_3-filter-1713336630458",
                            "widgetId": "widget_3",
                            "messageWidgetId": "widget_4",
                            "actionName": "filter",
                            "description": null,
                            "config": {
                                "messageUseDataSource": {
                                    "dataSourceId": "widget_4_ouput",
                                    "mainDataSourceId": "widget_4_ouput",
                                    "rootDataSourceId": null,
                                    "fields": [
                                        "__outputid__"
                                    ]
                                },
                                "actionUseDataSource": {
                                    "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                                    "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                                    "rootDataSourceId": "dataSource_1",
                                    "fields": [
                                        "OBJECTID"
                                    ]
                                },
                                "sqlExprObj": null,
                                "enabledDataRelationShip": true
                            },
                            "version": "1.14.0",
                            "useDataSources": [
                                {
                                    "dataSourceId": "widget_4_ouput",
                                    "mainDataSourceId": "widget_4_ouput",
                                    "rootDataSourceId": null,
                                    "fields": [
                                        "__outputid__"
                                    ]
                                },
                                {
                                    "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                                    "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                                    "rootDataSourceId": "dataSource_1",
                                    "fields": [
                                        "OBJECTID"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            "attributes": {
                "portalUrl": "https://Dair.maps.arcgis.com"
            },
            "sharedThemeVariables": null,
            "originExbVersion": "1.14.0",
            "pageStructure": [
                {
                    "page_1": []
                }
            ],
            "header": {
                "layout": {
                    "LARGE": "layout_1"
                },
                "height": {
                    "LARGE": 75
                }
            },
            "timestamp": 1713336686880
        };
        //appC = config
        //console.log(appC)
        setNewAppConfig(config);
    }, []);
    useEffect(() => {
        console.log((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig);
        console.log(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions);
    }, [campo]);
    useEffect(() => {
        const widgets = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets;
        setAppWidgets(widgets);
        setChartWidgetId('widget_4');
    }, []);
    // Update the widgetsArray and sidebarWidgetsArray properties every time appWidgets changes
    useEffect(() => {
        if (appWidgets) {
            const widgetsArray = Object.values(appWidgets);
            setChartWidgetsArray(widgetsArray.filter(w => w.uri === 'widgets/common/chart/'));
            // console.log(appWidgets)
        }
    }, [appWidgets]);
    const handleChart = () => {
        const config = {
            "tools": {
                "cursorEnable": true
            },
            "template": "column",
            "webChart": {
                "version": "7.3.1",
                "id": "column",
                "type": "chart",
                "dataSource": {
                    "query": {
                        "groupByFieldsForStatistics": [
                            "Año"
                        ],
                        "outStatistics": [
                            {
                                "statisticType": "count",
                                "onStatisticField": "OBJECTID",
                                "outStatisticFieldName": "count_of_OBJECTID"
                            }
                        ],
                        "orderByFields": [
                            "Año ASC"
                        ],
                        "where": "Subtipo_Accidente={value}"
                    }
                },
                "sortLabelsBy": "originalValue",
                "rotated": false,
                "series": [
                    {
                        "type": "barSeries",
                        "id": "",
                        "name": "",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#5E8FD0",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente=''"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Alcance",
                        "name": "Alcance",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#77B484",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Alcance'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Animal conducido o rebaño",
                        "name": "Animal conducido o rebaño",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DF6B35",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Animal conducido o rebaño'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Animales sueltos",
                        "name": "Animales sueltos",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DBCF4E",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Animales sueltos'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Barrera de paso a nivel",
                        "name": "Barrera de paso a nivel",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#41546D",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Barrera de paso a nivel'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Caida en calzada",
                        "name": "Caida en calzada",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#8257C2",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Caida en calzada'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Choque con árbol o poste",
                        "name": "Choque con árbol o poste",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#D6558B",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Choque con árbol o poste'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Choque con cuneta o bordillo",
                        "name": "Choque con cuneta o bordillo",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#5E8FD0",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Choque con cuneta o bordillo'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Choque con murete o edificio",
                        "name": "Choque con murete o edificio",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#77B484",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Choque con murete o edificio'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Choque contra barrera de seguridad",
                        "name": "Choque contra barrera de seguridad",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DF6B35",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Choque contra barrera de seguridad'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Con despeñamiento",
                        "name": "Con despeñamiento",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DBCF4E",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Con despeñamiento'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Con vuelco",
                        "name": "Con vuelco",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#41546D",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Con vuelco'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Despeñamiento",
                        "name": "Despeñamiento",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#8257C2",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Despeñamiento'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "En llano",
                        "name": "En llano",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#D6558B",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='En llano'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Frontal",
                        "name": "Frontal",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#5E8FD0",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Frontal'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Frontolateral",
                        "name": "Frontolateral",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#77B484",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Frontolateral'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Lateral",
                        "name": "Lateral",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DF6B35",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Lateral'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Múltiple o en caravana",
                        "name": "Múltiple o en caravana",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#DBCF4E",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Múltiple o en caravana'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Obstáculo  o elemento de la vía",
                        "name": "Obstáculo  o elemento de la vía",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#41546D",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Obstáculo  o elemento de la vía'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "Otro",
                        "name": "Otro",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#8257C2",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='Otro'"
                        }
                    },
                    {
                        "type": "barSeries",
                        "id": "__other-split-value__",
                        "name": "Undefined",
                        "x": "Año",
                        "y": "OBJECTID",
                        "colorType": "singleColor",
                        "stackedType": "stacked",
                        "fillSymbol": {
                            "type": "esriSFS",
                            "style": "esriSFSSolid",
                            "color": "#D6D6D6",
                            "outline": {
                                "type": "esriSLS",
                                "style": "esriSLSSolid",
                                "color": "var(--light-900)",
                                "width": 0
                            }
                        },
                        "dataLabels": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-600)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 10,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "top"
                            }
                        },
                        "rotated": false,
                        "dataTooltipVisible": true,
                        "query": {
                            "where": "Subtipo_Accidente='__other-split-value__'"
                        }
                    }
                ],
                "axes": [
                    {
                        "type": "chartAxis",
                        "visible": true,
                        "isLogarithmic": false,
                        "title": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-800)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 14,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "middle"
                            }
                        },
                        "labels": {
                            "type": "chartText",
                            "visible": true,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-500)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 14,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "middle"
                            }
                        },
                        "valueFormat": {
                            "type": "category",
                            "characterLimit": 11
                        },
                        "lineSymbol": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-800)",
                            "width": 1
                        },
                        "grid": {
                            "type": "esriSLS",
                            "style": "esriSLSDash",
                            "color": "var(--light-300)",
                            "width": 0
                        }
                    },
                    {
                        "type": "chartAxis",
                        "visible": true,
                        "isLogarithmic": false,
                        "title": {
                            "type": "chartText",
                            "visible": false,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-800)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 14,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "middle"
                            }
                        },
                        "labels": {
                            "type": "chartText",
                            "visible": true,
                            "content": {
                                "type": "esriTS",
                                "color": "var(--dark-500)",
                                "font": {
                                    "family": "Avenir Next",
                                    "size": 14,
                                    "style": "normal",
                                    "weight": "normal",
                                    "decoration": "none"
                                },
                                "horizontalAlignment": "center",
                                "verticalAlignment": "middle"
                            }
                        },
                        "valueFormat": {
                            "type": "number",
                            "intlOptions": {
                                "style": "decimal",
                                "useGrouping": true,
                                "minimumFractionDigits": 0,
                                "maximumFractionDigits": 0
                            }
                        },
                        "lineSymbol": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-800)",
                            "width": 1
                        },
                        "grid": {
                            "type": "esriSLS",
                            "style": "esriSLSDash",
                            "color": "var(--light-300)",
                            "width": 0
                        }
                    }
                ],
                "background": "var(--white)",
                "title": {
                    "type": "chartText",
                    "visible": true,
                    "content": {
                        "type": "esriTS",
                        "color": "var(--black)",
                        "font": {
                            "family": "Avenir Next",
                            "size": 24,
                            "style": "normal",
                            "weight": "normal",
                            "decoration": "none"
                        },
                        "horizontalAlignment": "center",
                        "text": ""
                    }
                },
                "footer": {
                    "type": "chartText",
                    "visible": true,
                    "content": {
                        "type": "esriTS",
                        "color": "var(--dark-800)",
                        "font": {
                            "family": "Avenir Next",
                            "size": 14,
                            "style": "normal",
                            "weight": "normal",
                            "decoration": "none"
                        },
                        "horizontalAlignment": "center",
                        "text": ""
                    }
                },
                "legend": {
                    "type": "chartLegend",
                    "visible": false,
                    "title": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 20,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "text": ""
                        }
                    },
                    "body": {
                        "type": "esriTS",
                        "color": "var(--dark-800)",
                        "font": {
                            "family": "Avenir Next",
                            "size": 14,
                            "style": "normal",
                            "weight": "normal",
                            "decoration": "none"
                        },
                        "horizontalAlignment": "center",
                        "text": ""
                    },
                    "position": "right"
                }
            }
        };
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetConfigLoaded('widget_4', config));
    };
    function handleField(evt) {
        setCampo(evt.value);
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { name: "Seleccionable", id: "Seleccionable", onChange: handleField },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "1" }, "1"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "2" }, "2"))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: handleChart }, "Cambiar gr\u00E1fico")),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                "Escala: ",
                escala),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                "Zoom: ",
                zoom))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb29yZGVuZGFzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYTs7QUFFYixjQUFjLG1CQUFPLENBQUMsa0RBQVU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFNO3lCQUN2Qjt3QkFDRCxxQkFBcUIsRUFBRSxRQUFRO3dCQUMvQixNQUFNLEVBQUUsRUFBRTtxQkFDYjtvQkFDRCxVQUFVLEVBQUUsT0FBTztpQkFDdEI7YUFDSjtTQUNGO1FBRUQsc0RBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpREFBVSxDQUFDLGtCQUFrQixDQUNsRCxVQUFVLEVBQ1YsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUUsR0FBRztRQUN2QixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTyxDQUNMO1FBQ0csS0FBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDOUQsMkRBQUMsNkRBQW9CLElBQUMsY0FBYyxFQUFFLFdBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixHQUFJLENBQ2xIO1FBQ0Q7WUFDRSx1RUFBUSxJQUFJLEVBQUMsZUFBZSxFQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFFLFdBQVc7Z0JBQ25FLHVFQUFRLEtBQUssRUFBQyxHQUFHLFFBQVc7Z0JBQzVCLHVFQUFRLEtBQUssRUFBQyxHQUFHLFFBQVcsQ0FDckIsQ0FDTDtRQUNOO1lBQ0UsdUVBQVEsT0FBTyxFQUFFLFdBQVcsMkJBQTBCLENBQ2xEO1FBQ047WUFDRTs7Z0JBQ1csTUFBTSxDQUNiO1lBQ0o7O2dCQUNTLElBQUksQ0FDVCxDQUNBLENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZURpc3BhdGNoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlUmVkdXhDb250ZXh0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvYmF0Y2guanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb29yZGVuZGFzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ29udGV4dEtleSA9IFN5bWJvbC5mb3IoYHJlYWN0LXJlZHV4LWNvbnRleHRgKTtcbmNvbnN0IGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDpcbi8qIGZhbGwgYmFjayB0byBhIHBlci1tb2R1bGUgc2NvcGUgKHByZS04LjEgYmVoYXZpb3VyKSBpZiBgZ2xvYmFsVGhpc2AgaXMgbm90IGF2YWlsYWJsZSAqL1xue307XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHZhciBfZ1QkQ29udGV4dEtleTtcblxuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpIHJldHVybiB7fTtcbiAgY29uc3QgY29udGV4dE1hcCA9IChfZ1QkQ29udGV4dEtleSA9IGdUW0NvbnRleHRLZXldKSAhPSBudWxsID8gX2dUJENvbnRleHRLZXkgOiBnVFtDb250ZXh0S2V5XSA9IG5ldyBNYXAoKTtcbiAgbGV0IHJlYWxDb250ZXh0ID0gY29udGV4dE1hcC5nZXQoUmVhY3QuY3JlYXRlQ29udGV4dCk7XG5cbiAgaWYgKCFyZWFsQ29udGV4dCkge1xuICAgIHJlYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZWFsQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSZWFjdFJlZHV4JztcbiAgICB9XG5cbiAgICBjb250ZXh0TWFwLnNldChSZWFjdC5jcmVhdGVDb250ZXh0LCByZWFsQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVhbENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBSZWFjdFJlZHV4Q29udGV4dCA9IC8qI19fUFVSRV9fKi9nZXRDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBSZWFjdFJlZHV4Q29udGV4dDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuXG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gJ29uY2UnLFxuICBub29wQ2hlY2sgPSAnb25jZSdcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgbm9vcENoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIG5vb3BDaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc3Vic2NyaXB0aW9uXG4gICAgfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7IC8vIEB0cy1pZ25vcmUgJ0FueUFjdGlvbicgaXMgYXNzaWduYWJsZSB0byB0aGUgY29uc3RyYWludCBvZiB0eXBlICdBJywgYnV0ICdBJyBjb3VsZCBiZSBpbnN0YW50aWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBzdWJ0eXBlXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcInJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcIl07XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlLCBpc0NvbnRleHRDb25zdW1lciB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IGZyb20gJy4uL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5JztcbmltcG9ydCB7IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkgfSBmcm9tICcuLi9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcyc7XG5pbXBvcnQgeyBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5IH0gZnJvbSAnLi4vY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IHsgbWVyZ2VQcm9wc0ZhY3RvcnkgfSBmcm9tICcuLi9jb25uZWN0L21lcmdlUHJvcHMnO1xuaW1wb3J0IHsgY3JlYXRlU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uL3V0aWxzL3dhcm5pbmcnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IHsgbm90SW5pdGlhbGl6ZWQgfSBmcm9tICcuLi91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZSc7XG5sZXQgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBub3RJbml0aWFsaXplZDtcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQ29ubmVjdCA9IGZuID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07IC8vIERlZmluZSBzb21lIGNvbnN0YW50IGFycmF5cyBqdXN0IHRvIGF2b2lkIHJlLWNyZWF0aW5nIHRoZXNlXG5cbmNvbnN0IEVNUFRZX0FSUkFZID0gW251bGwsIDBdO1xuY29uc3QgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdOyAvLyBBdHRlbXB0cyB0byBzdHJpbmdpZnkgd2hhdGV2ZXIgbm90LXJlYWxseS1hLWNvbXBvbmVudCB2YWx1ZSB3ZSB3ZXJlIGdpdmVuXG4vLyBmb3IgbG9nZ2luZyBpbiBhbiBlcnJvciBtZXNzYWdlXG5cbmNvbnN0IHN0cmluZ2lmeUNvbXBvbmVudCA9IENvbXAgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcblxuLy8gVGhpcyBpcyBcImp1c3RcIiBhIGB1c2VMYXlvdXRFZmZlY3RgLCBidXQgd2l0aCB0d28gbW9kaWZpY2F0aW9uczpcbi8vIC0gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gYHVzZUVmZmVjdGAgaW4gU1NSIHRvIGF2b2lkIGFubm95aW5nIHdhcm5pbmdzXG4vLyAtIHdlIGV4dHJhY3QgdGhpcyB0byBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRvIGF2b2lkIGNsb3Npbmcgb3ZlciB2YWx1ZXNcbi8vICAgYW5kIGNhdXNpbmcgbWVtb3J5IGxlYWtzXG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4gZWZmZWN0RnVuYyguLi5lZmZlY3RBcmdzKSwgZGVwZW5kZW5jaWVzKTtcbn0gLy8gRWZmZWN0IGNhbGxiYWNrLCBleHRyYWN0ZWQ6IGFzc2lnbiB0aGUgbGF0ZXN0IHByb3BzIHZhbHVlcyB0byByZWZzIGZvciBsYXRlciB1c2FnZVxuXG5cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIC8vIGFjdHVhbENoaWxkUHJvcHM6IHVua25vd24sXG5jaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7IC8vIElmIHRoZSByZW5kZXIgd2FzIGZyb20gYSBzdG9yZSB1cGRhdGUsIGNsZWFyIG91dCB0aGF0IHJlZmVyZW5jZSBhbmQgY2FzY2FkZSB0aGUgc3Vic2NyaWJlciB1cGRhdGVcblxuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn0gLy8gRWZmZWN0IGNhbGxiYWNrLCBleHRyYWN0ZWQ6IHN1YnNjcmliZSB0byB0aGUgUmVkdXggc3RvcmUgb3IgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IsXG4vLyBjaGVjayBmb3IgdXBkYXRlcyBhZnRlciBkaXNwYXRjaGVkIGFjdGlvbnMsIGFuZCB0cmlnZ2VyIHJlLXJlbmRlcnMuXG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIC8vIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2g6IFJlYWN0LkRpc3BhdGNoPGFueT4sXG5hZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgLy8gSWYgd2UncmUgbm90IHN1YnNjcmliZWQgdG8gdGhlIHN0b3JlLCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybiAoKSA9PiB7fTsgLy8gQ2FwdHVyZSB2YWx1ZXMgZm9yIGNoZWNraW5nIGlmIGFuZCB3aGVuIHRoaXMgY29tcG9uZW50IHVubW91bnRzXG5cbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsOyAvLyBXZSdsbCBydW4gdGhpcyBjYWxsYmFjayBldmVyeSB0aW1lIGEgc3RvcmUgc3Vic2NyaXB0aW9uIHVwZGF0ZSBwcm9wYWdhdGVzIHRvIHRoaXMgY29tcG9uZW50XG5cbiAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSB8fCAhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIC8vIERvbid0IHJ1biBzdGFsZSBsaXN0ZW5lcnMuXG4gICAgICAvLyBSZWR1eCBkb2Vzbid0IGd1YXJhbnRlZSB1bnN1YnNjcmlwdGlvbnMgaGFwcGVuIHVudGlsIG5leHQgZGlzcGF0Y2guXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUT0RPIFdlJ3JlIGN1cnJlbnRseSBjYWxsaW5nIGdldFN0YXRlIG91cnNlbHZlcyBoZXJlLCByYXRoZXIgdGhhbiBsZXR0aW5nIGB1U0VTYCBkbyBpdFxuXG5cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQWN0dWFsbHkgcnVuIHRoZSBzZWxlY3RvciB3aXRoIHRoZSBtb3N0IHJlY2VudCBzdG9yZSBzdGF0ZSBhbmQgd3JhcHBlciBwcm9wc1xuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZVxuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihsYXRlc3RTdG9yZVN0YXRlLCBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBoYXZlbid0IGNoYW5nZWQsIG5vdGhpbmcgdG8gZG8gaGVyZSAtIGNhc2NhZGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGVcblxuXG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNhdmUgcmVmZXJlbmNlcyB0byB0aGUgbmV3IGNoaWxkIHByb3BzLiAgTm90ZSB0aGF0IHdlIHRyYWNrIHRoZSBcImNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlXCJcbiAgICAgIC8vIGFzIGEgcmVmIGluc3RlYWQgb2YgYSB1c2VTdGF0ZS91c2VSZWR1Y2VyIGJlY2F1c2Ugd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgaWYgdGhhdCB2YWx1ZSBoYXNcbiAgICAgIC8vIGJlZW4gcHJvY2Vzc2VkLiAgSWYgdGhpcyB3ZW50IGludG8gdXNlU3RhdGUvdXNlUmVkdWNlciwgd2UgY291bGRuJ3QgY2xlYXIgb3V0IHRoZSB2YWx1ZSB3aXRob3V0XG4gICAgICAvLyBmb3JjaW5nIGFub3RoZXIgcmUtcmVuZGVyLCB3aGljaCB3ZSBkb24ndCB3YW50LlxuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7IC8vIFRPRE8gVGhpcyBpcyBoYWNreSBhbmQgbm90IGhvdyBgdVNFU2AgaXMgbWVhbnQgdG8gYmUgdXNlZFxuICAgICAgLy8gVHJpZ2dlciB0aGUgUmVhY3QgYHVzZVN5bmNFeHRlcm5hbFN0b3JlYCBzdWJzY3JpYmVyXG5cbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTsgLy8gQWN0dWFsbHkgc3Vic2NyaWJlIHRvIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3RvciAob3Igc3RvcmUpXG5cblxuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpOyAvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuICAvLyBjaGFuZ2VkIHNpbmNlIHdlIGJlZ2FuLlxuXG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuXG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHdlIGNhdWdodCBhbiBlcnJvciBkdWUgdG8gYSBiYWQgbWFwU3RhdGUgZnVuY3Rpb24sIGJ1dCB0aGVcbiAgICAgIC8vIHBhcmVudCByZS1yZW5kZXJlZCB3aXRob3V0IHRoaXMgY29tcG9uZW50IGFuZCB3ZSdyZSBhYm91dCB0byB1bm1vdW50LlxuICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIGFzIGxvbmcgYXMgd2UgZG8gdG9wLWRvd24gc3Vic2NyaXB0aW9ucyBjb3JyZWN0bHksIGJ1dFxuICAgICAgLy8gaWYgd2UgZXZlciBkbyB0aG9zZSB3cm9uZywgdGhpcyB0aHJvdyB3aWxsIHN1cmZhY2UgdGhlIGVycm9yIGluIG91ciB0ZXN0cy5cbiAgICAgIC8vIEluIHRoYXQgY2FzZSwgdGhyb3cgdGhlIGVycm9yIGZyb20gaGVyZSBzbyBpdCBkb2Vzbid0IGdldCBsb3N0LlxuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufSAvLyBSZWR1Y2VyIGluaXRpYWwgc3RhdGUgY3JlYXRpb24gZm9yIG91ciB1cGRhdGUgcmVkdWNlclxuXG5cbmNvbnN0IGluaXRTdGF0ZVVwZGF0ZXMgPSAoKSA9PiBFTVBUWV9BUlJBWTtcblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbi8qKlxyXG4gKiBJbmZlcnMgdGhlIHR5cGUgb2YgcHJvcHMgdGhhdCBhIGNvbm5lY3RvciB3aWxsIGluamVjdCBpbnRvIGEgY29tcG9uZW50LlxyXG4gKi9cblxuXG5sZXQgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IGZhbHNlO1xuLyoqXHJcbiAqIENvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIGEgUmVkdXggc3RvcmUuXHJcbiAqXHJcbiAqIC0gV2l0aG91dCBhcmd1bWVudHMsIGp1c3Qgd3JhcHMgdGhlIGNvbXBvbmVudCwgd2l0aG91dCBjaGFuZ2luZyB0aGUgYmVoYXZpb3IgLyBwcm9wc1xyXG4gKlxyXG4gKiAtIElmIDIgcGFyYW1zIGFyZSBwYXNzZWQgKDNyZCBwYXJhbSwgbWVyZ2VQcm9wcywgaXMgc2tpcHBlZCksIGRlZmF1bHQgYmVoYXZpb3JcclxuICogaXMgdG8gb3ZlcnJpZGUgb3duUHJvcHMgKGFzIHN0YXRlZCBpbiB0aGUgZG9jcyksIHNvIHdoYXQgcmVtYWlucyBpcyBldmVyeXRoaW5nIHRoYXQnc1xyXG4gKiBub3QgYSBzdGF0ZSBvciBkaXNwYXRjaCBwcm9wXHJcbiAqXHJcbiAqIC0gV2hlbiAzcmQgcGFyYW0gaXMgcGFzc2VkLCB3ZSBkb24ndCBrbm93IGlmIG93blByb3BzIHByb3BhZ2F0ZSBhbmQgd2hldGhlciB0aGV5XHJcbiAqIHNob3VsZCBiZSB2YWxpZCBjb21wb25lbnQgcHJvcHMsIGJlY2F1c2UgaXQgZGVwZW5kcyBvbiBtZXJnZVByb3BzIGltcGxlbWVudGF0aW9uLlxyXG4gKiBBcyBzdWNoLCBpdCBpcyB0aGUgdXNlcidzIHJlc3BvbnNpYmlsaXR5IHRvIGV4dGVuZCBvd25Qcm9wcyBpbnRlcmZhY2UgZnJvbSBzdGF0ZSBvclxyXG4gKiBkaXNwYXRjaCBwcm9wcyBvciBib3RoIHdoZW4gYXBwbGljYWJsZVxyXG4gKlxyXG4gKiBAcGFyYW0gbWFwU3RhdGVUb1Byb3BzIEEgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB2YWx1ZXMgZnJvbSBzdGF0ZVxyXG4gKiBAcGFyYW0gbWFwRGlzcGF0Y2hUb1Byb3BzIFNldHVwIGZvciBkaXNwYXRjaGluZyBhY3Rpb25zXHJcbiAqIEBwYXJhbSBtZXJnZVByb3BzIE9wdGlvbmFsIGNhbGxiYWNrIHRvIG1lcmdlIHN0YXRlIGFuZCBkaXNwYXRjaCBwcm9wcyB0b2dldGhlclxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBjb25maWd1cmluZyB0aGUgY29ubmVjdGlvblxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywge1xuICAvLyBUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLCBzbyBUUyBkb2Vzbid0IGxpa2UgdXMgZGVzdHJ1Y3R1cmluZyB0aGlzIHRvIGNoZWNrIGl0cyBleGlzdGVuY2UuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVyZSxcbiAgYXJlU3RhdGVzRXF1YWwgPSBzdHJpY3RFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICAvLyB1c2UgUmVhY3QncyBmb3J3YXJkUmVmIHRvIGV4cG9zZSBhIHJlZiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnRcbiAgZm9yd2FyZFJlZiA9IGZhbHNlLFxuICAvLyB0aGUgY29udGV4dCBjb25zdW1lciB0byB1c2VcbiAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0XG59ID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAocHVyZSAhPT0gdW5kZWZpbmVkICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQ7XG4gIGNvbnN0IGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNZXJnZVByb3BzID0gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcyk7XG4gIGNvbnN0IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcblxuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCl9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIERpc3Rpbmd1aXNoIGJldHdlZW4gYWN0dWFsIFwiZGF0YVwiIHByb3BzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZXIgY29tcG9uZW50LFxuICAgICAgICAvLyBhbmQgdmFsdWVzIG5lZWRlZCB0byBjb250cm9sIGJlaGF2aW9yIChmb3J3YXJkZWQgcmVmcywgYWx0ZXJuYXRlIGNvbnRleHQgaW5zdGFuY2VzKS5cbiAgICAgICAgLy8gVG8gbWFpbnRhaW4gdGhlIHdyYXBwZXJQcm9wcyBvYmplY3QgcmVmZXJlbmNlLCBtZW1vaXplIHRoaXMgZGVzdHJ1Y3R1cmluZy5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgfSA9IHByb3BzLFxuICAgICAgICAgICAgICB3cmFwcGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc107XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBVc2VycyBtYXkgb3B0aW9uYWxseSBwYXNzIGluIGEgY3VzdG9tIGNvbnRleHQgaW5zdGFuY2UgdG8gdXNlIGluc3RlYWQgb2Ygb3VyIFJlYWN0UmVkdXhDb250ZXh0LlxuICAgICAgICAvLyBNZW1vaXplIHRoZSBjaGVjayB0aGF0IGRldGVybWluZXMgd2hpY2ggY29udGV4dCBpbnN0YW5jZSB3ZSBzaG91bGQgdXNlLlxuICAgICAgICByZXR1cm4gcHJvcHNDb250ZXh0ICYmIHByb3BzQ29udGV4dC5Db25zdW1lciAmJiAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlzQ29udGV4dENvbnN1bWVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpKSA/IHByb3BzQ29udGV4dCA6IENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7IC8vIFJldHJpZXZlIHRoZSBzdG9yZSBhbmQgYW5jZXN0b3Igc3Vic2NyaXB0aW9uIHZpYSBjb250ZXh0LCBpZiBhdmFpbGFibGVcblxuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpOyAvLyBUaGUgc3RvcmUgX211c3RfIGV4aXN0IGFzIGVpdGhlciBhIHByb3Agb3IgaW4gY29udGV4dC5cbiAgICAgIC8vIFdlJ2xsIGNoZWNrIHRvIHNlZSBpZiBpdCBfbG9va3NfIGxpa2UgYSBSZWR1eCBzdG9yZSBmaXJzdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIHBhc3MgdGhyb3VnaCBhIGBzdG9yZWAgcHJvcCB0aGF0IGlzIGp1c3QgYSBwbGFpbiB2YWx1ZS5cblxuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIGAgKyBgXCIke2Rpc3BsYXlOYW1lfVwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBgICsgYG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBgICsgYFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmApO1xuICAgICAgfSAvLyBCYXNlZCBvbiB0aGUgcHJldmlvdXMgY2hlY2ssIG9uZSBvZiB0aGVzZSBtdXN0IGJlIHRydWVcblxuXG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBjaGlsZCBwcm9wcyBzZWxlY3RvciBuZWVkcyB0aGUgc3RvcmUgcmVmZXJlbmNlIGFzIGFuIGlucHV0LlxuICAgICAgICAvLyBSZS1jcmVhdGUgdGhpcyBzZWxlY3RvciB3aGVuZXZlciB0aGUgc3RvcmUgY2hhbmdlcy5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTsgLy8gVGhpcyBTdWJzY3JpcHRpb24ncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cblxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHVuZGVmaW5lZCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb24pOyAvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGBzdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBUaGlzIGNhblxuICAgICAgICAvLyBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVyc1xuICAgICAgICAvLyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlICBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLlxuXG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cbiAgICAgIGNvbnN0IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTsgLy8gU2V0IHVwIHJlZnMgdG8gY29vcmRpbmF0ZSB2YWx1ZXMgYmV0d2VlbiB0aGUgc3Vic2NyaXB0aW9uIGVmZmVjdCBhbmQgdGhlIHJlbmRlciBsb2dpY1xuXG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZigpO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZigpO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNQcm9jZXNzaW5nRGlzcGF0Y2ggPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICAvLyBUcmlja3kgbG9naWMgaGVyZTpcbiAgICAgICAgICAvLyAtIFRoaXMgcmVuZGVyIG1heSBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJ5IGEgUmVkdXggc3RvcmUgdXBkYXRlIHRoYXQgcHJvZHVjZWQgbmV3IGNoaWxkIHByb3BzXG4gICAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAgIC8vIElmIHdlIGhhdmUgbmV3IGNoaWxkIHByb3BzLCBhbmQgdGhlIHNhbWUgd3JhcHBlciBwcm9wcywgd2Uga25vdyB3ZSBzaG91bGQgdXNlIHRoZSBuZXcgY2hpbGQgcHJvcHMgYXMtaXMuXG4gICAgICAgICAgLy8gQnV0LCBpZiB3ZSBoYXZlIG5ldyB3cmFwcGVyIHByb3BzLCB0aG9zZSBtaWdodCBjaGFuZ2UgdGhlIGNoaWxkIHByb3BzLCBzbyB3ZSBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoaW5ncy5cbiAgICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIGxpa2VseSBjYXVzZSBCYWQgVGhpbmdzIChUTSkgdG8gaGFwcGVuIGluIENvbmN1cnJlbnQgTW9kZS5cbiAgICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG8gdGhpcyBiZWNhdXNlIG9uIHJlbmRlcnMgX25vdF8gY2F1c2VkIGJ5IHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdGhlIGxhdGVzdCBzdG9yZSBzdGF0ZVxuICAgICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LCBbc3RvcmUsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlRm9yUmVhY3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gcmVhY3RMaXN0ZW5lciA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCByZWFjdExpc3RlbmVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vic10pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSggLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCwgLy8gVE9ETyBUaGlzIGlzIGluY3JlZGlibHkgaGFja3kuIFdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZSBzdG9yZSB1cGRhdGUgYW5kIGNhbGN1bGF0ZWQgbmV3IGNoaWxkIHByb3BzLFxuICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLCBnZXRTZXJ2ZXJTdGF0ZSA/ICgpID0+IGNoaWxkUHJvcHNTZWxlY3RvcihnZXRTZXJ2ZXJTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpIDogYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxcblxcbmA7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTsgLy8gTm93IHRoYXQgYWxsIHRoYXQncyBkb25lLCB3ZSBjYW4gZmluYWxseSB0cnkgdG8gYWN0dWFsbHkgcmVuZGVyIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBtZW1vaXplIHRoZSBlbGVtZW50cyBmb3IgdGhlIHJlbmRlcmVkIGNoaWxkIGNvbXBvbmVudCBhcyBhbiBvcHRpbWl6YXRpb24uXG5cbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYWN0dWFsQ2hpbGRQcm9wcywge1xuICAgICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pOyAvLyBJZiBSZWFjdCBzZWVzIHRoZSBleGFjdCBzYW1lIGVsZW1lbnQgcmVmZXJlbmNlIGFzIGxhc3QgdGltZSwgaXQgYmFpbHMgb3V0IG9mIHJlLXJlbmRlcmluZ1xuICAgICAgLy8gdGhhdCBjaGlsZCwgc2FtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBSZWFjdC5tZW1vKCkgb3IgcmV0dXJuZWQgZmFsc2UgZnJvbSBzaG91bGRDb21wb25lbnRVcGRhdGUuXG5cbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIC8vIElmIHRoaXMgY29tcG9uZW50IGlzIHN1YnNjcmliZWQgdG8gc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0byBwYXNzIGl0cyBvd25cbiAgICAgICAgICAvLyBzdWJzY3JpcHRpb24gaW5zdGFuY2UgZG93biB0byBvdXIgZGVzY2VuZGFudHMuIFRoYXQgbWVhbnMgcmVuZGVyaW5nIHRoZSBzYW1lXG4gICAgICAgICAgLy8gQ29udGV4dCBpbnN0YW5jZSwgYW5kIHB1dHRpbmcgYSBkaWZmZXJlbnQgdmFsdWUgaW50byB0aGUgY29udGV4dC5cbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZVxuICAgICAgICAgIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9XG5cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcblxuICAgIC8vIEFkZCBhIGhhY2t5IGNhc3QgdG8gZ2V0IHRoZSByaWdodCBvdXRwdXQgdHlwZVxuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICBjb25zdCBfZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9yd2FyZGVkID0gX2ZvcndhcmRlZDtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gKTtcbiAgfTtcbn0iLCJpbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4uL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5IH0gZnJvbSAnLi9pbnZhbGlkQXJnRmFjdG9yeSc7XG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnb2JqZWN0JyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZGlzcGF0Y2ggPT4gLy8gQHRzLWlnbm9yZVxuICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCkpIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZGlzcGF0Y2ggPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gLy8gQHRzLWlnbm9yZVxuICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbn0iLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5IH0gZnJvbSAnLi9pbnZhbGlkQXJnRmFjdG9yeSc7XG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IC8vIEB0cy1pZ25vcmVcbiAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkgfSBmcm9tICcuL2ludmFsaWRBcmdGYWN0b3J5JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3duUHJvcHMsIHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7XG4gICAgZGlzcGxheU5hbWUsXG4gICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJyk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJpbml0TWFwU3RhdGVUb1Byb3BzXCIsIFwiaW5pdE1hcERpc3BhdGNoVG9Qcm9wc1wiLCBcImluaXRNZXJnZVByb3BzXCJdO1xuaW1wb3J0IHZlcmlmeVN1YnNlbGVjdG9ycyBmcm9tICcuL3ZlcmlmeVN1YnNlbGVjdG9ycyc7XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcblxuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUsIG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG4vLyBUT0RPOiBBZGQgbW9yZSBjb21tZW50c1xuLy8gVGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIHJldHVybiBmYWxzZSBpZiBmaW5hbFxuLy8gcHJvcHMgaGF2ZSBub3QgY2hhbmdlZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgbGV0IHtcbiAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgaW5pdE1lcmdlUHJvcHNcbiAgfSA9IF9yZWYsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnKTtcbn0iLCJpbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoIC8vICogTm90ZTpcbi8vICBJdCBzZWVtcyB0aGF0IHRoZSBkaXNwYXRjaCBhcmd1bWVudFxuLy8gIGNvdWxkIGJlIGEgZGlzcGF0Y2ggZnVuY3Rpb24gaW4gc29tZSBjYXNlcyAoZXg6IHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcpXG4vLyAgYW5kIGEgc3RhdGUgb2JqZWN0IGluIHNvbWUgb3RoZXJzIChleDogd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cblxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn0gLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vL1xuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cbi8vIFRPRE8gQ2FuIHRoaXMgZ2V0IHB1bGxlZCBvdXQgc28gdGhhdCB3ZSBjYW4gc3Vic2NyaWJlIGRpcmVjdGx5IHRvIHRoZSBzdG9yZSBpZiB3ZSBkb24ndCBuZWVkIG93blByb3BzP1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn0gLy8gVXNlZCBieSB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiBhbmQgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sXG4vLyB0aGlzIGZ1bmN0aW9uIHdyYXBzIG1hcFRvUHJvcHMgaW4gYSBwcm94eSBmdW5jdGlvbiB3aGljaCBkb2VzIHNldmVyYWwgdGhpbmdzOlxuLy9cbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIHZlcmlmaWVzIHRoZSBmaXJzdCByZXN1bHQgaXMgYSBwbGFpbiBvYmplY3QsIGluIG9yZGVyIHRvIHdhcm5cbi8vICAgIHRoZSBkZXZlbG9wZXIgdGhhdCB0aGVpciBtYXBUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7XG4gICAgZGlzcGxheU5hbWVcbiAgfSkge1xuICAgIGNvbnN0IHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgdW5kZWZpbmVkKTtcbiAgICB9OyAvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xuXG5cbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG5cbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICBsZXQgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufSIsImltcG9ydCBQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rIH0gZnJvbSAnLi9ob29rcy91c2VEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHsgUHJvdmlkZXIsIFJlYWN0UmVkdXhDb250ZXh0LCBjb25uZWN0LCB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rLCB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rLCB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rLCBzaGFsbG93RXF1YWwgfTsiLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlID0gLy8gQHRzLWlnbm9yZVxuICBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCkge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IGBkaXNwYXRjaGAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl8ZnVuY3Rpb259IHJlZHV4IHN0b3JlJ3MgYGRpc3BhdGNoYCBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAqICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAqICAgY29uc3QgaW5jcmVhc2VDb3VudGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVhc2UtY291bnRlcicgfSksIFtdKVxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlYXNlQ291bnRlcn0+SW5jcmVhc2UgY291bnRlcjwvYnV0dG9uPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgKVxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgY29uc3QgdXNlRGlzcGF0Y2ggPSAvKiNfX1BVUkVfXyovY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcblxuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VSZWR1eENvbnRleHRgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LiBUaGlzIGlzIGEgbG93LWxldmVsXHJcbiAqIGhvb2sgdGhhdCB5b3Ugc2hvdWxkIHVzdWFsbHkgbm90IG5lZWQgdG8gY2FsbCBkaXJlY3RseS5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlUmVkdXhDb250ZXh0YCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgLiBUaGlzIGlzIGEgbG93LWxldmVsXHJcbiAqIGhvb2sgdGhhdCB5b3Ugc2hvdWxkIHVzdWFsbHkgbm90IG5lZWQgdG8gY2FsbCBkaXJlY3RseS5cclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dCgpXHJcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBjb25zdCB1c2VSZWR1eENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlUmVkdXhDb250ZXh0SG9vaygpOyIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VEZWJ1Z1ZhbHVlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSZWR1eENvbnRleHRIb29rLCB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IG5vdEluaXRpYWxpemVkIH0gZnJvbSAnLi4vdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUnO1xubGV0IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gZm4gPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZuO1xufTtcblxuY29uc3QgcmVmRXF1YWxpdHkgPSAoYSwgYikgPT4gYSA9PT0gYjtcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dCA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5LFxuICAgICAgc3RhYmlsaXR5Q2hlY2sgPSB1bmRlZmluZWQsXG4gICAgICBub29wQ2hlY2sgPSB1bmRlZmluZWRcbiAgICB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyB7XG4gICAgICBlcXVhbGl0eUZuOiBlcXVhbGl0eUZuT3JPcHRpb25zXG4gICAgfSA6IGVxdWFsaXR5Rm5Pck9wdGlvbnM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSxcbiAgICAgIHN0YWJpbGl0eUNoZWNrOiBnbG9iYWxTdGFiaWxpdHlDaGVjayxcbiAgICAgIG5vb3BDaGVjazogZ2xvYmFsTm9vcENoZWNrXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dCgpO1xuICAgIGNvbnN0IGZpcnN0UnVuID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHdyYXBwZWRTZWxlY3RvciA9IHVzZUNhbGxiYWNrKHtcbiAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yKHN0YXRlKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPSB0eXBlb2Ygc3RhYmlsaXR5Q2hlY2sgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsU3RhYmlsaXR5Q2hlY2sgOiBzdGFiaWxpdHlDaGVjaztcblxuICAgICAgICAgIGlmIChmaW5hbFN0YWJpbGl0eUNoZWNrID09PSAnYWx3YXlzJyB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSAnb25jZScgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgdG9Db21wYXJlID0gc2VsZWN0b3Ioc3RhdGUpO1xuXG4gICAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm4oc2VsZWN0ZWQsIHRvQ29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgfSA9IGUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTZWxlY3RvciAnICsgKHNlbGVjdG9yLm5hbWUgfHwgJ3Vua25vd24nKSArICcgcmV0dXJuZWQgYSBkaWZmZXJlbnQgcmVzdWx0IHdoZW4gY2FsbGVkIHdpdGggdGhlIHNhbWUgcGFyYW1ldGVycy4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuJyArICdcXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uJywge1xuICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkMjogdG9Db21wYXJlLFxuICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbmFsTm9vcENoZWNrID0gdHlwZW9mIG5vb3BDaGVjayA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxOb29wQ2hlY2sgOiBub29wQ2hlY2s7XG5cbiAgICAgICAgICBpZiAoZmluYWxOb29wQ2hlY2sgPT09ICdhbHdheXMnIHx8IGZpbmFsTm9vcENoZWNrID09PSAnb25jZScgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICB9ID0gZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdG9yICcgKyAoc2VsZWN0b3IubmFtZSB8fCAndW5rbm93bicpICsgJyByZXR1cm5lZCB0aGUgcm9vdCBzdGF0ZSB3aGVuIGNhbGxlZC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuJyArICdcXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy4nLCB7XG4gICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpcnN0UnVuLmN1cnJlbnQpIGZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgIH1bc2VsZWN0b3IubmFtZV0sIFtzZWxlY3RvciwgZ2xvYmFsU3RhYmlsaXR5Q2hlY2ssIHN0YWJpbGl0eUNoZWNrXSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmlwdGlvbi5hZGROZXN0ZWRTdWIsIHN0b3JlLmdldFN0YXRlLCBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSwgd3JhcHBlZFNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgICB1c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlJ3Mgc3RhdGUuIFRoaXMgaG9vayB0YWtlcyBhIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIGFzIGFuIGFyZ3VtZW50LiBUaGUgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIHN0b3JlIHN0YXRlLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgdGFrZXMgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyaXNvbiBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiB0aGF0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSB3YXkgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGNvbXBhcmVkIHRvIGRldGVybWluZVxyXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIHRoZSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyKVxyXG4gKiAgIHJldHVybiA8ZGl2Pntjb3VudGVyfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0b3IgPSAvKiNfX1BVUkVfXyovY3JlYXRlU2VsZWN0b3JIb29rKCk7IiwiaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQsIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2sgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0ID0gLy8gQHRzLWlnbm9yZVxuICBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiAvLyBAdHMtaWdub3JlXG4gIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdG9yZVxuICAgIH0gPSB1c2VSZWR1eENvbnRleHQoKTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgcmVkdXggc3RvcmVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcclxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gLyojX19QVVJFX18qL2NyZWF0ZVN0b3JlSG9vaygpOyIsIi8vIFRoZSBwcmltYXJ5IGVudHJ5IHBvaW50IGFzc3VtZXMgd2UncmUgd29ya2luZyB3aXRoIHN0YW5kYXJkIFJlYWN0RE9NL1JOLCBidXRcbi8vIG9sZGVyIHZlcnNpb25zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHVzZVN5bmNFeHRlcm5hbFN0b3JlYCAoUmVhY3QgMTYuOSAtIDE3LngpLlxuLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGUgdXNlU3luY0V4dGVybmFsU3RvcmUgY29tcGF0IHNoaW0gaXMgbmVlZGVkLlxuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltJztcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIH0gZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCB7IHNldEJhdGNoIH0gZnJvbSAnLi91dGlscy9iYXRjaCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVXNlU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdG9yJztcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3QnO1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKTtcbmluaXRpYWxpemVDb25uZWN0KHVzZVN5bmNFeHRlcm5hbFN0b3JlKTsgLy8gRW5hYmxlIGJhdGNoZWQgdXBkYXRlcyBpbiBvdXIgc3Vic2NyaXB0aW9ucyBmb3IgdXNlXG4vLyB3aXRoIHN0YW5kYXJkIFJlYWN0IHJlbmRlcmVycyAoUmVhY3RET00sIFJlYWN0IE5hdGl2ZSlcblxuc2V0QmF0Y2goYmF0Y2gpO1xuZXhwb3J0IHsgYmF0Y2ggfTtcbmV4cG9ydCAqIGZyb20gJy4vZXhwb3J0cyc7IiwiaW1wb3J0IHsgZ2V0QmF0Y2ggfSBmcm9tICcuL2JhdGNoJzsgLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBjb25zdCBiYXRjaCA9IGdldEJhdGNoKCk7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG5cbiAgICBub3RpZnkoKSB7XG4gICAgICBiYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0KCkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbn1cblxuY29uc3QgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge30sXG5cbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzOyAvLyBSZWFzb25zIHRvIGtlZXAgdGhlIHN1YnNjcmlwdGlvbiBhY3RpdmVcblxuICBsZXQgc3Vic2NyaXB0aW9uc0Ftb3VudCA9IDA7IC8vIElzIHRoaXMgc3BlY2lmaWMgc3Vic2NyaXB0aW9uIHN1YnNjcmliZWQgKG9yIG9ubHkgbmVzdGVkIG9uZXM/KVxuXG4gIGxldCBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpOyAvLyBjbGVhbnVwIG5lc3RlZCBzdWJcblxuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50Kys7XG5cbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG5cbiAgICBpZiAodW5zdWJzY3JpYmUgJiYgc3Vic2NyaXB0aW9uc0Ftb3VudCA9PT0gMCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKCFzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0ge1xuICAgIGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkLFxuICAgIHRyeVN1YnNjcmliZTogdHJ5U3Vic2NyaWJlU2VsZixcbiAgICB0cnlVbnN1YnNjcmliZTogdHJ5VW5zdWJzY3JpYmVTZWxmLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59IiwiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxubGV0IGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IGNvbnN0IHNldEJhdGNoID0gbmV3QmF0Y2ggPT4gYmF0Y2ggPSBuZXdCYXRjaDsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCBjb25zdCBnZXRCYXRjaCA9ICgpID0+IGJhdGNoOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgY29uc3QgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn0iLCIvKipcclxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsImZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuIFdlIG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvIGVuc3VyZSB0aGUgc3RvcmVcbi8vIHN1YnNjcmlwdGlvbiBjYWxsYmFjayBhbHdheXMgaGFzIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBsYXRlc3QgcmVuZGVyIGNvbW1pdFxuLy8gYXZhaWxhYmxlLCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IGhhcHBlbiBiZXR3ZWVuIHJlbmRlciBhbmQgdGhlIGVmZmVjdCxcbi8vIHdoaWNoIG1heSBjYXVzZSBtaXNzZWQgdXBkYXRlczsgd2UgYWxzbyBtdXN0IGVuc3VyZSB0aGUgc3RvcmUgc3Vic2NyaXB0aW9uXG4vLyBpcyBjcmVhdGVkIHN5bmNocm9ub3VzbHksIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgb2NjdXIgYmVmb3JlIHRoZVxuLy8gc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQgYW5kIGFuIGluY29uc2lzdGVudCBzdGF0ZSBtYXkgYmUgb2JzZXJ2ZWRcbi8vIE1hdGNoZXMgbG9naWMgaW4gUmVhY3QncyBgc2hhcmVkL0V4ZWN1dGlvbkVudmlyb25tZW50YCBmaWxlXG5cbmV4cG9ydCBjb25zdCBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKTtcbmV4cG9ydCBjb25zdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0OyIsImV4cG9ydCBjb25zdCBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCd1U0VTIG5vdCBpbml0aWFsaXplZCEnKTtcbn07IiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vd2FybmluZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcoYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gKTtcbiAgfVxufSIsIi8qKlxyXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cblxufSIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnNlcnZlcl9jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIFN1c3BlbnNlTGlzdCA9IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlTGlzdChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5TdXNwZW5zZUxpc3QgPSBTdXNwZW5zZUxpc3Q7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNTdXNwZW5zZUxpc3QgPSBpc1N1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG4vLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxuXG52YXIgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSxcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0ID0gUmVhY3QudXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlO1xudmFyIGRpZFdhcm5PbGQxOEFscGhhID0gZmFsc2U7XG52YXIgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSBmYWxzZTsgLy8gRGlzY2xhaW1lcjogVGhpcyBzaGltIGJyZWFrcyBtYW55IG9mIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3Ncbi8vIGJlY2F1c2Ugb2YgYSB2ZXJ5IHBhcnRpY3VsYXIgc2V0IG9mIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYW5kIGFzc3VtcHRpb25zXG4vLyAtLSBjaGFuZ2UgYW55IG9uZSBvZiB0aGVtIGFuZCBpdCB3aWxsIGJyZWFrLiBUaGUgbW9zdCBpbXBvcnRhbnQgYXNzdW1wdGlvblxuLy8gaXMgdGhhdCB1cGRhdGVzIGFyZSBhbHdheXMgc3luY2hyb25vdXMsIGJlY2F1c2UgY29uY3VycmVudCByZW5kZXJpbmcgaXNcbi8vIG9ubHkgYXZhaWxhYmxlIGluIHZlcnNpb25zIG9mIFJlYWN0IHRoYXQgYWxzbyBoYXZlIGEgYnVpbHQtaW5cbi8vIHVzZVN5bmNFeHRlcm5hbFN0b3JlIEFQSS4gQW5kIHdlIG9ubHkgdXNlIHRoaXMgc2hpbSB3aGVuIHRoZSBidWlsdC1pbiBBUElcbi8vIGRvZXMgbm90IGV4aXN0LlxuLy9cbi8vIERvIG5vdCBhc3N1bWUgdGhhdCB0aGUgY2xldmVyIGhhY2tzIHVzZWQgYnkgdGhpcyBob29rIGFsc28gd29yayBpbiBnZW5lcmFsLlxuLy8gVGhlIHBvaW50IG9mIHRoaXMgc2hpbSBpcyB0byByZXBsYWNlIHRoZSBuZWVkIGZvciBoYWNrcyBieSBvdGhlciBsaWJyYXJpZXMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIC8vIE5vdGU6IFRoZSBzaGltIGRvZXMgbm90IHVzZSBnZXRTZXJ2ZXJTbmFwc2hvdCwgYmVjYXVzZSBwcmUtMTggdmVyc2lvbnMgb2Zcbi8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4vLyBmcm9tIGBnZXRTbmFwc2hvdGAuXG5nZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB7XG4gICAgaWYgKCFkaWRXYXJuT2xkMThBbHBoYSkge1xuICAgICAgaWYgKFJlYWN0LnN0YXJ0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignWW91IGFyZSB1c2luZyBhbiBvdXRkYXRlZCwgcHJlLXJlbGVhc2UgYWxwaGEgb2YgUmVhY3QgMTggdGhhdCAnICsgJ2RvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSAnICsgJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgJyArICd0byBhIG5ld2VyIHByZS1yZWxlYXNlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZWFkIHRoZSBjdXJyZW50IHNuYXBzaG90IGZyb20gdGhlIHN0b3JlIG9uIGV2ZXJ5IHJlbmRlci4gQWdhaW4sIHRoaXNcbiAgLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4gIC8vIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIG1vc3QgaW1wb3J0YW50bHkgdGhhdCB1cGRhdGVzIGFyZVxuICAvLyBhbHdheXMgc3luY2hyb25vdXMuXG5cblxuICB2YXIgdmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90KSB7XG4gICAgICB2YXIgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gICAgICBpZiAoIW9iamVjdElzKHZhbHVlLCBjYWNoZWRWYWx1ZSkpIHtcbiAgICAgICAgZXJyb3IoJ1RoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wJyk7XG5cbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBCZWNhdXNlIHVwZGF0ZXMgYXJlIHN5bmNocm9ub3VzLCB3ZSBkb24ndCBxdWV1ZSB0aGVtLiBJbnN0ZWFkIHdlIGZvcmNlIGFcbiAgLy8gcmUtcmVuZGVyIHdoZW5ldmVyIHRoZSBzdWJzY3JpYmVkIHN0YXRlIGNoYW5nZXMgYnkgdXBkYXRpbmcgYW4gc29tZVxuICAvLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4gIC8vIHRoZSBjdXJyZW50IHZhbHVlLlxuICAvL1xuICAvLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4gIC8vIGNhbiBzYXZlIGEgYml0IG9mIG1lbW9yeSBieSBzdG9yaW5nIG90aGVyIHN0dWZmIGluIHRoYXQgc2xvdC5cbiAgLy9cbiAgLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuICAvLyBvYmplY3QuIFVzdWFsbHksIHdlIHdvdWxkIHB1dCB0aGF0IGluIGEgdXNlUmVmIGhvb2ssIGJ1dCB3ZSBjYW4gc3Rhc2ggaXQgaW5cbiAgLy8gb3VyIHVzZVN0YXRlIGhvb2sgaW5zdGVhZC5cbiAgLy9cbiAgLy8gVG8gZm9yY2UgYSByZS1yZW5kZXIsIHdlIGNhbGwgZm9yY2VVcGRhdGUoe2luc3R9KS4gVGhhdCB3b3JrcyBiZWNhdXNlIHRoZVxuICAvLyBuZXcgb2JqZWN0IGFsd2F5cyBmYWlscyBhbiBlcXVhbGl0eSBjaGVjay5cblxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgaW5zdDoge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90XG4gICAgfVxuICB9KSxcbiAgICAgIGluc3QgPSBfdXNlU3RhdGVbMF0uaW5zdCxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlWzFdOyAvLyBUcmFjayB0aGUgbGF0ZXN0IGdldFNuYXBzaG90IGZ1bmN0aW9uIHdpdGggYSByZWYuIFRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZFxuICAvLyBpbiB0aGUgbGF5b3V0IHBoYXNlIHNvIHdlIGNhbiBhY2Nlc3MgaXQgZHVyaW5nIHRoZSB0ZWFyaW5nIGNoZWNrIHRoYXRcbiAgLy8gaGFwcGVucyBvbiBzdWJzY3JpYmUuXG5cblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7IC8vIFdoZW5ldmVyIGdldFNuYXBzaG90IG9yIHN1YnNjcmliZSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNoZWNrIGluIHRoZVxuICAgIC8vIGNvbW1pdCBwaGFzZSBpZiB0aGVyZSB3YXMgYW4gaW50ZXJsZWF2ZWQgbXV0YXRpb24uIEluIGNvbmN1cnJlbnQgbW9kZVxuICAgIC8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbiAgICAvLyBlZmZlY3QgbWF5IGhhdmUgbXV0YXRlZCB0aGUgc3RvcmUuXG5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3Q6IGluc3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgcmlnaHQgYmVmb3JlIHN1YnNjcmliaW5nLiBTdWJzZXF1ZW50IGNoYW5nZXMgd2lsbCBiZVxuICAgIC8vIGRldGVjdGVkIGluIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlci5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3Q6IGluc3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVTdG9yZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRPRE86IEJlY2F1c2UgdGhlcmUgaXMgbm8gY3Jvc3MtcmVuZGVyZXIgQVBJIGZvciBiYXRjaGluZyB1cGRhdGVzLCBpdCdzXG4gICAgICAvLyB1cCB0byB0aGUgY29uc3VtZXIgb2YgdGhpcyBsaWJyYXJ5IHRvIHdyYXAgdGhlaXIgc3Vic2NyaXB0aW9uIGV2ZW50XG4gICAgICAvLyB3aXRoIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLiBTaG91bGQgd2UgdHJ5IHRvIGRldGVjdCB3aGVuIHRoaXMgaXNuJ3RcbiAgICAgIC8vIHRoZSBjYXNlIGFuZCBwcmludCBhIHdhcm5pbmcgaW4gZGV2ZWxvcG1lbnQ/XG4gICAgICAvLyBUaGUgc3RvcmUgY2hhbmdlZC4gQ2hlY2sgaWYgdGhlIHNuYXBzaG90IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB3ZVxuICAgICAgLy8gcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgICAgaW5zdDogaW5zdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gYSBjbGVhbi11cCBmdW5jdGlvbi5cblxuXG4gICAgcmV0dXJuIHN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7XG4gIH0sIFtzdWJzY3JpYmVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSB7XG4gIHZhciBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gIHZhciBwcmV2VmFsdWUgPSBpbnN0LnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIG5leHRWYWx1ZSA9IGxhdGVzdEdldFNuYXBzaG90KCk7XG4gICAgcmV0dXJuICFvYmplY3RJcyhwcmV2VmFsdWUsIG5leHRWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4gIC8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuICAvLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbiAgLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG52YXIgaXNTZXJ2ZXJFbnZpcm9ubWVudCA9ICFjYW5Vc2VET007XG5cbnZhciBzaGltID0gaXNTZXJ2ZXJFbnZpcm9ubWVudCA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgIT09IHVuZGVmaW5lZCA/IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlIDogc2hpbTtcblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDI7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0nKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gc2hpbS51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zLCBSZWFjdFJlZHV4LCB0eXBlIFdpZGdldFByb3BzLCBXaWRnZXRNYW5hZ2VyLCB0eXBlIElNU3RhdGUsIHR5cGUgSU1BcHBDb25maWcsIFdpZGdldFN0YXRlIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xyXG4gIGNvbnN0IFthcHBXaWRnZXRzLCBzZXRBcHBXaWRnZXRzXSA9IHVzZVN0YXRlKHt9IGFzIHVua25vd24pXHJcbiAgY29uc3QgW2NoYXJ0YmFyV2lkZ2V0SWQsIHNldENoYXJ0V2lkZ2V0SWRdID0gdXNlU3RhdGUobnVsbCBhcyBzdHJpbmcpXHJcbiAgY29uc3QgW2NoYXJ0V2lkZ2V0c0FycmF5LCBzZXRDaGFydFdpZGdldHNBcnJheV0gPSB1c2VTdGF0ZShbXSBhcyBhbnlbXSlcclxuICBjb25zdCBbbmV3QXBwQ29uZmlnLCBzZXROZXdBcHBDb25maWddID0gdXNlU3RhdGUoe30gYXMgSU1BcHBDb25maWcpXHJcbiAgY29uc3QgW2NhbXBvLCBzZXRDYW1wb10gPSB1c2VTdGF0ZShudWxsIGFzIHN0cmluZylcclxuICBjb25zdCBbZXNjYWxhLCBzZXRFc2NhbGFdID0gdXNlU3RhdGUobnVsbCBhcyBpbnRlZ2VyKVxyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKG51bGwgYXMgaW50ZWdlcilcclxuXHJcbiAgLy8gR2V0IHRoZSB3aWRnZXQgc3RhdGUgLSBiZWNhdXNlIHRoZSBzaWRlYmFyIHN0YXRlIG1heSBjaGFuZ2UgaW4gdGhlIHJ1bnRpbWUsIHZpYSBSZWR1eCdzIHVzZVNlbGVjdG9yIGhvb2tcclxuICBjb25zdCB3aWRnZXRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgICBjb25zdCB3aWRnZXRTdGF0ZSA9IHN0YXRlLndpZGdldHNTdGF0ZVsnd2lkZ2V0XzQnXVxyXG4gICAgcmV0dXJuIHdpZGdldFN0YXRlXHJcbiAgfSlcclxuICAvLyBVdGlsaXphIHVzZVNlbGVjdG9yIHBhcmEgYWNjZWRlciBhbCBlc3RhZG8gZ2xvYmFsXHJcbiAgLy9jb25zdCBhcHBDb25maWcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hcHBDb25maWcpXHJcblxyXG4gIGZ1bmN0aW9uIHNsZWVwIChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIGptdi52aWV3Lm9uKCdtb3VzZS13aGVlbCcsIChldnQpID0+IHtcclxuICAgICAgICBzbGVlcCgxMDAwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhqbXYudmlldy5zY2FsZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGptdi52aWV3Lnpvb20pXHJcbiAgICAgICAgICBzZXRFc2NhbGEoam12LnZpZXcuc2NhbGUpXHJcbiAgICAgICAgICBzZXRab29tKGptdi52aWV3Lnpvb20pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXNjYWxhID4gMTU3Nzc5MCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJ0b29sc1wiOiB7XHJcbiAgICAgICAgICAgIFwiY3Vyc29yRW5hYmxlXCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjogXCJjb2x1bW5cIixcclxuICAgICAgICBcIndlYkNoYXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy4zLjFcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFwiLFxyXG4gICAgICAgICAgICBcImRhdGFTb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiS2lsb21ldHJvXCJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGlzdGljVHlwZVwiOiBcImNvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uU3RhdGlzdGljRmllbGRcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRTdGF0aXN0aWNGaWVsZE5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3JkZXJCeUZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiS2lsb21ldHJvIEFTQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzb3J0TGFiZWxzQnlcIjogXCJvcmlnaW5hbFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJzZXJpZXNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiS2lsb21ldHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiY291bnRfb2ZfT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4MjU3QzJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYXhlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc0xvZ2FyaXRobWljXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTUwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlRm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFyYWN0ZXJMaW1pdFwiOiAxMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU0Rhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTMwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydEF4aXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVGb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRsT3B0aW9uc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZGVjaW1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VHcm91cGluZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5pbXVtRnJhY3Rpb25EaWdpdHNcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4aW11bUZyYWN0aW9uRGlnaXRzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU0Rhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTMwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCJ2YXIoLS13aGl0ZSlcIixcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tYmxhY2spXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImZvb3RlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxlZ2VuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydExlZ2VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstODAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRDb25maWdMb2FkZWQoXHJcbiAgICAgICAgJ3dpZGdldF8xMScsXHJcbiAgICAgICAgY29uZmlnXHJcbiAgICAgICkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJ0b29sc1wiOiB7XHJcbiAgICAgICAgICAgIFwiY3Vyc29yRW5hYmxlXCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGVtcGxhdGVcIjogXCJjb2x1bW5cIixcclxuICAgICAgICBcIndlYkNoYXJ0XCI6IHtcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy4zLjFcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFwiLFxyXG4gICAgICAgICAgICBcImRhdGFTb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiS2lsb21ldHJvXCJcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGlzdGljVHlwZVwiOiBcImNvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uU3RhdGlzdGljRmllbGRcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRTdGF0aXN0aWNGaWVsZE5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3JkZXJCeUZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiS2lsb21ldHJvIEFTQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiVGlwb19hY2NpZGVudGU9e3ZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic29ydExhYmVsc0J5XCI6IFwib3JpZ2luYWxWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic2VyaWVzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiS2lsb21ldHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1RThGRDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiVGlwb19hY2NpZGVudGU9JydcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkFsY2FuY2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxjYW5jZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc3QjQ4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nQWxjYW5jZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJBdHJvcGVsbG9zIGRlIGFuaW1hbGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXRyb3BlbGxvcyBkZSBhbmltYWxlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIktpbG9tZXRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREY2QjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlRpcG9fYWNjaWRlbnRlPSdBdHJvcGVsbG9zIGRlIGFuaW1hbGVzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQXRyb3BlbGxvcyBkZSBwZWF0b25lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkF0cm9wZWxsb3MgZGUgcGVhdG9uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0RCQ0Y0RVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nQXRyb3BlbGxvcyBkZSBwZWF0b25lcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkNhaWRhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhaWRhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIktpbG9tZXRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNDE1NDZEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlRpcG9fYWNjaWRlbnRlPSdDYWlkYXMnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDaG9xdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hvcXVlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIktpbG9tZXRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjODI1N0MyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlRpcG9fYWNjaWRlbnRlPSdDaG9xdWVzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQ29saXNpb25lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbGlzaW9uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0Q2NTU4QlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nQ29saXNpb25lcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk90cm9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3Ryb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVFOEZEMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nT3Ryb3MnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJTYWxpZGFzIGRlIHbDrWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYWxpZGFzIGRlIHbDrWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc3QjQ4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nU2FsaWRhcyBkZSB2w61hJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiVnVlbGNvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZ1ZWxjb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJLaWxvbWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0RGNkIzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJUaXBvX2FjY2lkZW50ZT0nVnVlbGNvcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIl9fb3RoZXItc3BsaXQtdmFsdWVfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVuZGVmaW5lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIktpbG9tZXRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlRpcG9fYWNjaWRlbnRlPSdfX290aGVyLXNwbGl0LXZhbHVlX18nXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiYXhlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpc0xvZ2FyaXRobWljXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTUwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlRm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFyYWN0ZXJMaW1pdFwiOiAxMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU0Rhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTMwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydEF4aXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVGb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRsT3B0aW9uc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZGVjaW1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VHcm91cGluZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5pbXVtRnJhY3Rpb25EaWdpdHNcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4aW11bUZyYWN0aW9uRGlnaXRzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU0Rhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTMwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCJ2YXIoLS13aGl0ZSlcIixcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tYmxhY2spXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImZvb3RlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxlZ2VuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydExlZ2VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstODAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRDb25maWdMb2FkZWQoXHJcbiAgICAgICAgJ3dpZGdldF8xMScsXHJcbiAgICAgICAgY29uZmlnXHJcbiAgICAgICkpXHJcbiAgICB9XHJcbiAgfSwgW2VzY2FsYV0pXHJcbiAgLy8gYXF1aSBoYWJyaWEgcXVlIHBvbmVyIGxhIHZhcmlhYmxlIHNlbGVjY2lvbmFkYSBwb3IgZWwgdXN1YXJpbyBxdWUgc2VyaWEgdW4gZXN0YWRvIHkgbWV0ZXJsYSBlbiBsYSBsaXN0YSBkZSBsYSBwYXJ0ZSBkZSBhYmFqb1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhcHBDID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xyXG4gICAgLy9hcHBDLndpZGdldHMud2lkZ2V0XzQuY29uZmlnLndlYkNoYXJ0LmRhdGFTb3VyY2UucXVlcnkud2hlcmUgPSAnU3VidGlwb19BY2NpZGVudGU9e3ZhbHVlfSdcclxuICAgIC8vY29uc29sZS5sb2coYXBwQylcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgXCJwYWdlc1wiOiB7XHJcbiAgICAgICAgICBcInBhZ2VfMVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBhZ2VfMVwiLFxyXG4gICAgICAgICAgICAgIFwibW9kZVwiOiBcIkZJVF9XSU5ET1dcIixcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJOT1JNQUxcIixcclxuICAgICAgICAgICAgICBcImxheW91dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiTEFSR0VcIjogXCJsYXlvdXRfM1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImlzRGVmYXVsdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgIFwiaXNWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlDDoWdpbmEgMlwiLFxyXG4gICAgICAgICAgICAgIFwiaGVhZGVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIFwiZm9vdGVyXCI6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwibGF5b3V0c1wiOiB7XHJcbiAgICAgICAgICBcImxheW91dF8xXCI6IHtcclxuICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge30sXHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIixcclxuICAgICAgICAgICAgICBcInNldHRpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImxvY2tEZXNjZW5kYW50c1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImlkXCI6IFwibGF5b3V0XzFcIixcclxuICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGVhZGVyXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJsYXlvdXRfM1wiOiB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIixcclxuICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIjBcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV0lER0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndpZGdldElkXCI6IFwid2lkZ2V0XzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYmJveFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMzAuOCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IFwiMjEuNiVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjMuMiVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiBcIjQ1LjIlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjQ3LjYlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCI1MS42JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9Qcm9wc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2Q2VudGVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaENlbnRlclwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCIxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldJREdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWRnZXRJZFwiOiBcIndpZGdldF80XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJib3hcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjYuMiVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IFwiNDcuMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjU4LjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogXCIyLjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjQ2LjglXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCI0MC4wJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9Qcm9wc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2Q2VudGVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaENlbnRlclwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCIyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldJREdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWRnZXRJZFwiOiBcIndpZGdldF81XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJib3hcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjc1LjIlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiBcIjE2LjklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI2Mi4xJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IFwiMzIuMiVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiOC4wJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiNS43JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9Qcm9wc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCJBVVRPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiQVVUT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidkNlbnRlclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhDZW50ZXJcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwib3JkZXJcIjogW1xyXG4gICAgICAgICAgICAgICAgICBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiMlwiXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImlkXCI6IFwibGF5b3V0XzNcIixcclxuICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJwYWdlXzFcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFnZXNcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImxheW91dF80XCI6IHtcclxuICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge30sXHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFwIEZpeGVkTGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcImxheW91dF80XCIsXHJcbiAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwid2lkZ2V0XzNcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwid2lkZ2V0XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJsYXlvdXRfNVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldJREdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWRnZXRJZFwiOiBcIndpZGdldF82XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJib3hcIjoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiMVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXSURHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkZ2V0SWRcIjogXCJ3aWRnZXRfOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiYm94XCI6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJGSVhFRFwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb250cm9sbGVyIGxheW91dFwiLFxyXG4gICAgICAgICAgICAgIFwib3JkZXJcIjogW1xyXG4gICAgICAgICAgICAgICAgICBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgXCIwXCJcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJsYXlvdXRfNVwiLFxyXG4gICAgICAgICAgICAgIFwicGFyZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIndpZGdldF81XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImV4YlZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgXCJtYWluU2l6ZU1vZGVcIjogXCJMQVJHRVwiLFxyXG4gICAgICBcInRoZW1lXCI6IFwidGhlbWVzL2RlZmF1bHQvXCIsXHJcbiAgICAgIFwiZm9yQnVpbGRlckF0dHJpYnV0ZXNcIjoge1xyXG4gICAgICAgICAgXCJsb2NrTGF5b3V0XCI6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIFwidGVtcGxhdGVcIjogXCJibGFua2Z1bGxzY3JlZW5cIixcclxuICAgICAgXCJ3aWRnZXRzXCI6IHtcclxuICAgICAgICAgIFwid2lkZ2V0XzNcIjoge1xyXG4gICAgICAgICAgICAgIFwidXJpXCI6IFwid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9cIixcclxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFwYSAyXCIsXHJcbiAgICAgICAgICAgICAgXCJjb25maWdcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcInRvb2xDb25maWdcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5ab29tXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkhvbWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2FuU2VhcmNoXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbk5hdmlnYXRpb25cIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImlzVXNlQ3VzdG9tTWFwU3RhdGVcIjogZmFsc2VcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJ3aWRnZXRfM1wiLFxyXG4gICAgICAgICAgICAgIFwibGF5b3V0c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiTWFwRml4ZWRMYXlvdXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJMQVJHRVwiOiBcImxheW91dF80XCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJ1c2VEYXRhU291cmNlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVNvdXJjZUlkXCI6IFwiZGF0YVNvdXJjZV8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1haW5EYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzFcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImNvbnRleHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlzUmVtb3RlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbGRlclVybFwiOiBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDEvZXhwZXJpZW5jZS8uLi93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiTEFSR0VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGF5b3V0SWRcIjogXCJsYXlvdXRfM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGF5b3V0SXRlbUlkXCI6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiX29yaWdpbk1hbmlmZXN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXJjZ2lzLW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJleGJWZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwicHVibGlzaE1lc3NhZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiRVhURU5UX0NIQU5HRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJEQVRBX1JFQ09SRFNfU0VMRUNUSU9OX0NIQU5HRVwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwibWVzc2FnZUFjdGlvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhblRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhbiB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdVcmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvcGFuLXRvLWFjdGlvbi1zZXR0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiem9vbVRvRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJab29tIHRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFzaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGbGFzaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24tc2V0dGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGaWx0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5nVXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24tc2V0dGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNob3dPbk1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTaG93IG9uIG1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL3Nob3ctb24tbWFwLWFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFkZFRvTWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFkZCB0byBtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9hZGQtdG8tbWFwLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFNpemVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiA0MDBcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2FuQ3JlYXRlTWFwVmlld1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNFbWJlZGRlZExheW91dFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwYXNzRGF0YVNvdXJjZVRvQ2hpbGRyZW5cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdmVyTGF5b3V0QmFja2dyb3VuZFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3YXRjaFZpZXdwb3J0VmlzaWJpbGl0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0QXV0b1NpemVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNvbnN1bWVEYXRhQWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRBY3RpdmVTdGF0ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhjbHVkZURhdGFBY3Rpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwic2V0RmlsdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyY2dpcy1tYXAuYWRkVG9NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVN0YXRpc3RpY3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGUuYWRkVG9UYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUFjdGlvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInpvb21Ub0ZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiWm9vbSB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL3pvb20tdG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJydW50aW1lL2Fzc2V0cy9pY29ucy9zZWxlY3QtdG9vbC9zZWxlY3Qtem9vbXRvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhblRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhbiB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL3Bhbi10b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInJ1bnRpbWUvYXNzZXRzL2ljb25zL3Bhbi10by5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaG93T25NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiU2hvdyBvbiBtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcImRhdGEtYWN0aW9ucy9zaG93LW9uLW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcImRhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC1zZXR0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicnVudGltZS9hc3NldHMvaWNvbnMvc2hvdy1vbi1tYXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYWRkVG9NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWRkIHRvIG1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL2FkZC10by1tYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJydW50aW1lL2Fzc2V0cy9pY29ucy9hZGQtdG8tbWFwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwibGF5b3V0c1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFwRml4ZWRMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFwIEZpeGVkTGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcInVybFBhcmFtZXRlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZpZXdwb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaWV3cG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXBcIjogXCJWaWV3cG9pbnQgZGVzY3JpYmVzIHRoZSBwb2ludCBvZiB2aWV3IGZvciBhIHdlYiBtYXAgb3Igd2ViIHNjZW5lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2FsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJvdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvdGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGF5ZXJfdmlzaWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMYXllciB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJleHRlbnNpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhcHBDb25maWdPcGVyYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkFQUF9DT05GSUdfT1BFUkFUSU9OU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVkTG9jYWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImh1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImphXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImtvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LWJyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWNuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWhrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLXR3XCJcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtYW5pZmVzdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFyY2dpcy1tYXBcIixcclxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhiVmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInB1Ymxpc2hNZXNzYWdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkVYVEVOVF9DSEFOR0VcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiREFUQV9SRUNPUkRTX1NFTEVDVElPTl9DSEFOR0VcIlxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VBY3Rpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYW5Ub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYW4gdG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9wYW4tdG8tYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5nVXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24tc2V0dGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInpvb21Ub0ZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiWm9vbSB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwibWVzc2FnZS1hY3Rpb25zL3pvb20tdG8tZmVhdHVyZS1hY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdVcmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRmxhc2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdVcmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLXNldHRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWx0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRmlsdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvZmlsdGVyLWFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLXNldHRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaG93T25NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiU2hvdyBvbiBtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcIm1lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdVcmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvc2hvdy1vbi1tYXAtYWN0aW9uLXNldHRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhZGRUb01hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJBZGQgdG8gbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmlcIjogXCJtZXNzYWdlLWFjdGlvbnMvYWRkLXRvLW1hcC1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHRTaXplXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogNDAwXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNyZWF0ZU1hcFZpZXdcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzRW1iZWRkZWRMYXlvdXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwicGFzc0RhdGFTb3VyY2VUb0NoaWxkcmVuXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlckxheW91dEJhY2tncm91bmRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2F0Y2hWaWV3cG9ydFZpc2liaWxpdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3VwcG9ydEF1dG9TaXplXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5Db25zdW1lRGF0YUFjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQWN0aXZlU3RhdGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzVmVyc2lvbk1hbmFnZXJcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRJbmxpbmVFZGl0aW5nXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0UmVwZWF0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNCdWlsZGVyU3VwcG9ydE1vZHVsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibG9ja0NoaWxkcmVuXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmbGlwSWNvblwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2FuQ3Jvc3NMYXlvdXRCb3VuZGFyeVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaXNXaWRnZXRDb250cm9sbGVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNNYWluQ2xhc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzQ29uZmlnXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc1NldHRpbmdQYWdlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0NvbmZpZ0luU2V0dGluZ1BhZ2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGVhY3RpdmF0ZU90aGVyV2lkZ2V0c1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhjbHVkZURhdGFBY3Rpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwic2V0RmlsdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyY2dpcy1tYXAuYWRkVG9NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVN0YXRpc3RpY3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGUuYWRkVG9UYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUFjdGlvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInpvb21Ub0ZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiWm9vbSB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL3pvb20tdG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJydW50aW1lL2Fzc2V0cy9pY29ucy9zZWxlY3QtdG9vbC9zZWxlY3Qtem9vbXRvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhblRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhbiB0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL3Bhbi10b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInJ1bnRpbWUvYXNzZXRzL2ljb25zL3Bhbi10by5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaG93T25NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiU2hvdyBvbiBtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcImRhdGEtYWN0aW9ucy9zaG93LW9uLW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ1VyaVwiOiBcImRhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC1zZXR0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicnVudGltZS9hc3NldHMvaWNvbnMvc2hvdy1vbi1tYXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYWRkVG9NYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWRkIHRvIG1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwiZGF0YS1hY3Rpb25zL2FkZC10by1tYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJydW50aW1lL2Fzc2V0cy9pY29ucy9hZGQtdG8tbWFwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwibGF5b3V0c1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFwRml4ZWRMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFwIEZpeGVkTGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcInVybFBhcmFtZXRlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZpZXdwb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaWV3cG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXBcIjogXCJWaWV3cG9pbnQgZGVzY3JpYmVzIHRoZSBwb2ludCBvZiB2aWV3IGZvciBhIHdlYiBtYXAgb3Igd2ViIHNjZW5lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2FsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJvdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvdGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGF5ZXJfdmlzaWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMYXllciB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJleHRlbnNpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhcHBDb25maWdPcGVyYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkFQUF9DT05GSUdfT1BFUkFUSU9OU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVkTG9jYWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImh1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImphXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImtvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LWJyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWNuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWhrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLXR3XCJcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJpMThuTWVzc2FnZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfd2lkZ2V0TGFiZWxcIjogXCJNYXBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIl9hY3Rpb25fZGlzcGxheUZlYXR1cmVTZXRfbGFiZWxcIjogXCJNb3N0cmFyIGNvbmp1bnRvIGRlIGVudGlkYWRlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfYWN0aW9uX3BhblRvX2xhYmVsXCI6IFwiRGVzcGxhemFyIGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX2FjdGlvbl96b29tVG9GZWF0dXJlX2xhYmVsXCI6IFwiQWNlcmNhciBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIl9hY3Rpb25fc2VsZWN0RmVhdHVyZV9sYWJlbFwiOiBcIlNlbGVjY2lvbmFyIGVudGlkYWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX2FjdGlvbl9mbGFzaF9sYWJlbFwiOiBcIkRlc3RhY2FyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIl9hY3Rpb25fZmlsdGVyX2xhYmVsXCI6IFwiRmlsdHJhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfYWN0aW9uX3Nob3dPbk1hcF9sYWJlbFwiOiBcIk1vc3RyYXIgZW4gZWwgbWFwYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfYWN0aW9uX2FkZFRvTWFwX2xhYmVsXCI6IFwiQWdyZWdhciBhbCBtYXBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3dPbk1hcERhdGFcIjogXCJNb3N0cmFyIGVuIGRhdG9zIGRlbCBtYXBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFkZGVkRGF0YVwiOiBcImRhdG9zIGFncmVnYWRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmYWlsVG9BZGRUaGVEYXRhT25NYXBcIjogXCJFcnJvciBhbCBhZ3JlZ2FyIGxvcyBkYXRvcy5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYWRkVG9NYXBEYXRhXCI6IFwiQWdyZWdhciBhIGRhdG9zIGRlbCBtYXBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1hcEN1cnJlbnRSZWNvcmRcIjogXCJSZWdpc3RybyBhY3R1YWwgZGUgbWFwYXMge2xheWVyTmFtZX1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3VybF9wYXJhbXNfdmlld3BvaW50X2xhYmVsXCI6IFwiUHVudG8gZGUgdmlzdWFsaXphY2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3VybF9wYXJhbXNfdmlld3BvaW50X3Rvb2x0aXBcIjogXCJWaWV3cG9pbnQgZGVzY3JpYmUgZWwgcHVudG8gZGUgdmlzdGEgcGFyYSB1biBtYXBhIHdlYiBvIHVuYSBlc2NlbmEgd2ViLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfdXJsX3BhcmFtc19jZW50ZXJfbGFiZWxcIjogXCJDZW50cm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3VybF9wYXJhbXNfc2NhbGVfbGFiZWxcIjogXCJFc2NhbGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3VybF9wYXJhbXNfcm90YXRpb25fbGFiZWxcIjogXCJSb3RhY2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3VybF9wYXJhbXNfbGF5ZXJfdmlzaWJpbGl0eV9sYWJlbFwiOiBcIlZpc2liaWxpZGFkIGRlIGNhcGFcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImljb25cIjogXCJodHRwczovL2xvY2FsaG9zdDozMDAxL2V4cGVyaWVuY2UvLi4vd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9pY29uLnN2Z1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJ3aWRnZXRfNFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ1cmlcIjogXCJ3aWRnZXRzL2NvbW1vbi9jaGFydC9cIixcclxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiR3LDoWZpY29cIixcclxuICAgICAgICAgICAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidG9vbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjdXJzb3JFbmFibGVcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCI6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwid2ViQ2hhcnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy4zLjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0aXN0aWNUeXBlXCI6IFwiY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uU3RhdGlzdGljRmllbGRcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljRmllbGROYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyQnlGaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBw7FvIEFTQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT17dmFsdWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzb3J0TGFiZWxzQnlcIjogXCJvcmlnaW5hbFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNlcmllc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVFOEZEMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9JydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQWxjYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGNhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3N0I0ODRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdBbGNhbmNlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJBbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREY2QjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQW5pbWFsIGNvbmR1Y2lkbyBvIHJlYmHDsW8nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkFuaW1hbGVzIHN1ZWx0b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5pbWFsZXMgc3VlbHRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQW5pbWFsZXMgc3VlbHRvcydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQmFycmVyYSBkZSBwYXNvIGEgbml2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFycmVyYSBkZSBwYXNvIGEgbml2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0JhcnJlcmEgZGUgcGFzbyBhIG5pdmVsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDYWlkYSBlbiBjYWx6YWRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhaWRhIGVuIGNhbHphZGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzgyNTdDMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0NhaWRhIGVuIGNhbHphZGEnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkNob3F1ZSBjb24gw6FyYm9sIG8gcG9zdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hvcXVlIGNvbiDDoXJib2wgbyBwb3N0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjRDY1NThCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ2hvcXVlIGNvbiDDoXJib2wgbyBwb3N0ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQ2hvcXVlIGNvbiBjdW5ldGEgbyBib3JkaWxsb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaG9xdWUgY29uIGN1bmV0YSBvIGJvcmRpbGxvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1RThGRDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdDaG9xdWUgY29uIGN1bmV0YSBvIGJvcmRpbGxvJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDaG9xdWUgY29uIG11cmV0ZSBvIGVkaWZpY2lvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc3QjQ4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0Nob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW8nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkNob3F1ZSBjb250cmEgYmFycmVyYSBkZSBzZWd1cmlkYWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hvcXVlIGNvbnRyYSBiYXJyZXJhIGRlIHNlZ3VyaWRhZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREY2QjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ2hvcXVlIGNvbnRyYSBiYXJyZXJhIGRlIHNlZ3VyaWRhZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQ29uIGRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbiBkZXNwZcOxYW1pZW50b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ29uIGRlc3Blw7FhbWllbnRvJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDb24gdnVlbGNvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbiB2dWVsY29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0NvbiB2dWVsY28nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4MjU3QzJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdEZXNwZcOxYW1pZW50bydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiRW4gbGxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW4gbGxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0Q2NTU4QlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0VuIGxsYW5vJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJGcm9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyb250YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVFOEZEMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0Zyb250YWwnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkZyb250b2xhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJvbnRvbGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzdCNDg0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nRnJvbnRvbGF0ZXJhbCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNERjZCMzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdMYXRlcmFsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nTcO6bHRpcGxlIG8gZW4gY2FyYXZhbmEnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk9ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPYnN0w6FjdWxvICBvIGVsZW1lbnRvIGRlIGxhIHbDrWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J09ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiT3Ryb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPdHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4MjU3QzJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdPdHJvJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJfX290aGVyLXNwbGl0LXZhbHVlX19cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5kZWZpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNENkQ2RDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdfX290aGVyLXNwbGl0LXZhbHVlX18nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF4ZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay01MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZUZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFyYWN0ZXJMaW1pdFwiOiAxMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNEYXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtMzAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay01MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZUZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW50bE9wdGlvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VHcm91cGluZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaW11bUZyYWN0aW9uRGlnaXRzXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhpbXVtRnJhY3Rpb25EaWdpdHNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNEYXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtMzAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwidmFyKC0td2hpdGUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWJsYWNrKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZ2VuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRMZWdlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstODAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib2R5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImlkXCI6IFwid2lkZ2V0XzRcIixcclxuICAgICAgICAgICAgICBcInVzZURhdGFTb3VyY2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzEtQWNjaWRlbnRlc1NleXNfMTcwOV81MjExXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1haW5EYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzEtQWNjaWRlbnRlc1NleXNfMTcwOV81MjExXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvb3REYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwib3V0cHV0RGF0YVNvdXJjZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICBcIndpZGdldF80X291cHV0XCJcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiY29udGV4dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaXNSZW1vdGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9sZGVyVXJsXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9leHBlcmllbmNlLy4uL3dpZGdldHMvY29tbW9uL2NoYXJ0L1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiTEFSR0VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGF5b3V0SWRcIjogXCJsYXlvdXRfM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGF5b3V0SXRlbUlkXCI6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiX29yaWdpbk1hbmlmZXN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2hhcnRcIixcclxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJleGJWZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVwZW5kZW5jeVwiOiBcImppbXUtYXJjZ2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2V0dGluZ0RlcGVuZGVuY3lcIjogXCJqaW11LWFyY2dpc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInB1Ymxpc2hNZXNzYWdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlVHlwZVwiOiBcIkRBVEFfUkVDT1JEU19TRUxFQ1RJT05fQ0hBTkdFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlQ2FycnlEYXRhXCI6IFwiT1VUUFVUX0RBVEFfU09VUkNFXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0U2l6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ1MCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDMwMFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNTZXR0aW5nUGFnZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5Db25zdW1lRGF0YUFjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlckxheW91dEJhY2tncm91bmRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90QXV0b0xvYWRVc2VkRmllbGRzRGF0YVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhjbHVkZURhdGFBY3Rpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYXJjZ2lzLW1hcC4qXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNldEZpbHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWFyLW1lLmxvY2F0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbGV2YXRpb24tcHJvZmlsZS4qXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvbnMuKlwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVkTG9jYWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImh1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImphXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImtvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LWJyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWNuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWhrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLXR3XCJcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtYW5pZmVzdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDaGFydFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhiVmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImRlcGVuZGVuY3lcIjogXCJqaW11LWFyY2dpc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInNldHRpbmdEZXBlbmRlbmN5XCI6IFwiamltdS1hcmNnaXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJwdWJsaXNoTWVzc2FnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVR5cGVcIjogXCJEQVRBX1JFQ09SRFNfU0VMRUNUSU9OX0NIQU5HRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZUNhcnJ5RGF0YVwiOiBcIk9VVFBVVF9EQVRBX1NPVVJDRVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFNpemVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAzMDBcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzU2V0dGluZ1BhZ2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2FuQ29uc3VtZURhdGFBY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJMYXlvdXRCYWNrZ3JvdW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vdEF1dG9Mb2FkVXNlZEZpZWxkc0RhdGFcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzVmVyc2lvbk1hbmFnZXJcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRJbmxpbmVFZGl0aW5nXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0UmVwZWF0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNCdWlsZGVyU3VwcG9ydE1vZHVsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzRW1iZWRkZWRMYXlvdXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxvY2tDaGlsZHJlblwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZmxpcEljb25cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNyb3NzTGF5b3V0Qm91bmRhcnlcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRBY3RpdmVTdGF0ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2F0Y2hWaWV3cG9ydFZpc2liaWxpdHlcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlzV2lkZ2V0Q29udHJvbGxlclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzTWFpbkNsYXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0NvbmZpZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNDb25maWdJblNldHRpbmdQYWdlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBhc3NEYXRhU291cmNlVG9DaGlsZHJlblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZWFjdGl2YXRlT3RoZXJXaWRnZXRzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRBdXRvU2l6ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhjbHVkZURhdGFBY3Rpb25zXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYXJjZ2lzLW1hcC4qXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNldEZpbHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWFyLW1lLmxvY2F0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbGV2YXRpb24tcHJvZmlsZS4qXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvbnMuKlwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVkTG9jYWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImh1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImphXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImtvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImx2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LWJyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInB0LXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJ1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWNuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLWhrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInpoLXR3XCJcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJpMThuTWVzc2FnZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJfd2lkZ2V0TGFiZWxcIjogXCJHcsOhZmljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiYXIxU2VyaWVzTGltaXRhdGlvblwiOiBcIkxvcyBncsOhZmljb3MgZGUgYmFycmFzIG8gY29sdW1uYXMgY29uIHVuYSBzZXJpZSBlc3TDoW4gbGltaXRhZG9zIGEgMTAuMDAwIGJhcnJhcyBlbiB0b3RhbC4gRmlsdHJlIG8gdnVlbHZhIGEgYWdyZWdhciBsb3MgZGF0b3MgZSBpbnTDqW50ZWxvIG90cmEgdmV6LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiYXIyU2VyaWVzTGltaXRhdGlvblwiOiBcIkxvcyBncsOhZmljb3MgZGUgYmFycmFzIG8gY29sdW1uYXMgY29uIGRvcyBzZXJpZXMgZXN0w6FuIGxpbWl0YWRvcyBhIDIuMDAwIGJhcnJhcywgbyAxLjAwMCBiYXJyYXMgcG9yIHNlcmllLiBGaWx0cmUgbyB2dWVsdmEgYSBhZ3JlZ2FyIGxvcyBkYXRvcyBlIGludMOpbnRlbG8gb3RyYSB2ZXouXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImJhcjNTZXJpZXNMaW1pdGF0aW9uXCI6IFwiTG9zIGdyw6FmaWNvcyBkZSBiYXJyYXMgbyBjb2x1bW5hcyBjb24gdHJlcyBvIG3DoXMgc2VyaWVzIGVzdMOhbiBsaW1pdGFkb3MgYSAyLjAwMCBiYXJyYXMsIG8gMTAwIGJhcnJhcyBwb3Igc2VyaWUuIEZpbHRyZSBvIHZ1ZWx2YSBhIGFncmVnYXIgbG9zIGRhdG9zIGUgaW50w6ludGVsbyBvdHJhIHZlei5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGluZUxpbWl0YXRpb25cIjogXCJMb3MgZ3LDoWZpY29zIGRlIGzDrW5lYXMgbyDDoXJlYXMgZXN0w6FuIGxpbWl0YWRvcyBhIDEwLjAwMCBtYXJjYWRvcmVzIGRlIHZhbG9yIGVuIHRvdGFsIHkgYSB1biBtw6F4aW1vIGRlIDEwMCBzZXJpZXMuIEZpbHRyZSBvIHZ1ZWx2YSBhIGFncmVnYXIgbG9zIGRhdG9zIGUgaW50w6ludGVsbyBvdHJhIHZlei5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwicGllTGltaXRhdGlvblwiOiBcIk5vIHNlIHB1ZG8gcmVuZGVyaXphcjsgZGVtYXNpYWRhcyBjYXRlZ29yw61hcy4gRWwgZ3LDoWZpY28gY2lyY3VsYXIgZXN0w6EgbGltaXRhZG8gYSAzMDAgY2F0ZWdvcsOtYXMgY29tbyBtw6F4aW1vLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhRW1wdHlUaXBcIjogXCJObyBzZSBoYW4gZW5jb250cmFkbyBkYXRvcy5cIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImljb25cIjogXCJodHRwczovL2xvY2FsaG9zdDozMDAxL2V4cGVyaWVuY2UvLi4vd2lkZ2V0cy9jb21tb24vY2hhcnQvaWNvbi5zdmdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwid2lkZ2V0XzVcIjoge1xyXG4gICAgICAgICAgICAgIFwidXJpXCI6IFwid2lkZ2V0cy9jb21tb24vY29udHJvbGxlci9cIixcclxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29udHJvbGFkb3IgZGUgd2lkZ2V0XCIsXHJcbiAgICAgICAgICAgICAgXCJjb25maWdcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImJlaGF2aW9yXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwib25seU9wZW5PbmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3BlblN0YXJ0c1wiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVR5cGVcIjogXCJTVEFDS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWRnZXRfNlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNjQ4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiA0ODRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiYXBwZWFyYW5jZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYWNlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFkdmFuY2VkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYXJkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsR3Jvd3RoXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhcGVcIjogXCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIndpZGdldF81XCIsXHJcbiAgICAgICAgICAgICAgXCJsYXlvdXRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJjb250cm9sbGVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiTEFSR0VcIjogXCJsYXlvdXRfNVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiY29udGV4dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaXNSZW1vdGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9sZGVyVXJsXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9leHBlcmllbmNlLy4uL3dpZGdldHMvY29tbW9uL2NvbnRyb2xsZXIvXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicGFyZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJMQVJHRVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXlvdXRJZFwiOiBcImxheW91dF8zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXlvdXRJdGVtSWRcIjogXCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJfb3JpZ2luTWFuaWZlc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJXaWRnZXQgQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhiVmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHRTaXplXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDU0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdXRvSGVpZ2h0XCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzU2V0dGluZ1BhZ2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzRW1iZWRkZWRMYXlvdXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaXNXaWRnZXRDb250cm9sbGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRBdXRvU2l6ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1c2VEcmFnSGFuZGxlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5Dcm9zc0xheW91dEJvdW5kYXJ5XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0J1aWxkZXJTdXBwb3J0TW9kdWxlXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJsYXlvdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbnRyb2xsZXIgbGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInByZXZpb3VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkNPTlRFWFRfVE9PTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvcHJldmlvdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkNPTlRFWFRfVE9PTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFkZC13aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvaW50XCI6IFwiQ09OVEVYVF9UT09MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmlcIjogXCJ0b29scy9hZGQtd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwQ29uZmlnT3BlcmF0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9pbnRcIjogXCJBUFBfQ09ORklHX09QRVJBVElPTlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcInRvb2xzL2FwcC1jb25maWctb3BlcmF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlZExvY2FsZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJic1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJodVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJqYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJubFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwdC1iclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwdC1wdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJydVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJza1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC1jblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC1oa1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC10d1wiXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWFuaWZlc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJXaWRnZXQgQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhiVmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHRTaXplXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDU0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdXRvSGVpZ2h0XCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzU2V0dGluZ1BhZ2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzRW1iZWRkZWRMYXlvdXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaXNXaWRnZXRDb250cm9sbGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRBdXRvU2l6ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1c2VEcmFnSGFuZGxlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5Dcm9zc0xheW91dEJvdW5kYXJ5XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0J1aWxkZXJTdXBwb3J0TW9kdWxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc1ZlcnNpb25NYW5hZ2VyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0SW5saW5lRWRpdGluZ1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3VwcG9ydFJlcGVhdFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibG9ja0NoaWxkcmVuXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmbGlwSWNvblwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJMYXlvdXRCYWNrZ3JvdW5kXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQWN0aXZlU3RhdGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNvbnN1bWVEYXRhQWN0aW9uXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3YXRjaFZpZXdwb3J0VmlzaWJpbGl0eVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzTWFpbkNsYXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0NvbmZpZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNDb25maWdJblNldHRpbmdQYWdlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBhc3NEYXRhU291cmNlVG9DaGlsZHJlblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZWFjdGl2YXRlT3RoZXJXaWRnZXRzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJsYXlvdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbnRyb2xsZXIgbGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRklYRURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInByZXZpb3VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkNPTlRFWFRfVE9PTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvcHJldmlvdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludFwiOiBcIkNPTlRFWFRfVE9PTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJpXCI6IFwidG9vbHMvbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFkZC13aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvaW50XCI6IFwiQ09OVEVYVF9UT09MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmlcIjogXCJ0b29scy9hZGQtd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwQ29uZmlnT3BlcmF0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9pbnRcIjogXCJBUFBfQ09ORklHX09QRVJBVElPTlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVyaVwiOiBcInRvb2xzL2FwcC1jb25maWctb3BlcmF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlZExvY2FsZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJic1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJodVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJqYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJubFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwdC1iclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwdC1wdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJydVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJza1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC1jblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC1oa1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ6aC10d1wiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiaTE4bk1lc3NhZ2VzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX3dpZGdldExhYmVsXCI6IFwiQ29udHJvbGFkb3IgZGUgd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJpY29uXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9leHBlcmllbmNlLy4uL3dpZGdldHMvY29tbW9uL2NvbnRyb2xsZXIvaWNvbi5zdmdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwid2lkZ2V0XzZcIjoge1xyXG4gICAgICAgICAgICAgIFwidXJpXCI6IFwid2lkZ2V0cy9jb29yZGVuZGFzL1wiLFxyXG4gICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTIuMFwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb29yZGVuYWRhc1wiLFxyXG4gICAgICAgICAgICAgIFwiY29uZmlnXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJleGFtcGxlQ29uZmlnUHJvcGVydHlcIjogXCJ0ZXN0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJ3aWRnZXRfNlwiLFxyXG4gICAgICAgICAgICAgIFwiY29udGV4dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiaXNSZW1vdGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9sZGVyVXJsXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9leHBlcmllbmNlLy4uL3dpZGdldHMvY29vcmRlbmRhcy9cIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIkxBUkdFXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxheW91dElkXCI6IFwibGF5b3V0XzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxheW91dEl0ZW1JZFwiOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIl9vcmlnaW5NYW5pZmVzdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvb3JkZW5kYXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvb3JkZW5hZGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjEyLjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJleGJWZXJzaW9uXCI6IFwiMS4xMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IFwiU3lLZ2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaWRnZXQgZGUgY29vcmRlbmFkYXMuXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29weXJpZ2h0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVwZW5kZW5jeVwiOiBcImppbXUtYXJjZ2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGljZW5zZVwiOiBcImh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge30sXHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlZExvY2FsZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFNpemVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiA0MDBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtYW5pZmVzdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvb3JkZW5kYXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvb3JkZW5hZGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjEyLjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJleGJWZXJzaW9uXCI6IFwiMS4xMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IFwiU3lLZ2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaWRnZXQgZGUgY29vcmRlbmFkYXMuXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29weXJpZ2h0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVwZW5kZW5jeVwiOiBcImppbXUtYXJjZ2lzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGljZW5zZVwiOiBcImh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNWZXJzaW9uTWFuYWdlclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3VwcG9ydElubGluZUVkaXRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRSZXBlYXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0J1aWxkZXJTdXBwb3J0TW9kdWxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNFbWJlZGRlZExheW91dFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibG9ja0NoaWxkcmVuXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmbGlwSWNvblwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY292ZXJMYXlvdXRCYWNrZ3JvdW5kXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYW5Dcm9zc0xheW91dEJvdW5kYXJ5XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZWVkQWN0aXZlU3RhdGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNvbnN1bWVEYXRhQWN0aW9uXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3YXRjaFZpZXdwb3J0VmlzaWJpbGl0eVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaXNXaWRnZXRDb250cm9sbGVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNNYWluQ2xhc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzQ29uZmlnXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc1NldHRpbmdQYWdlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0NvbmZpZ0luU2V0dGluZ1BhZ2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwicGFzc0RhdGFTb3VyY2VUb0NoaWxkcmVuXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlYWN0aXZhdGVPdGhlcldpZGdldHNcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3VwcG9ydEF1dG9TaXplXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVkTG9jYWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuXCJcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0U2l6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDQwMFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImkxOG5NZXNzYWdlc1wiOiB7fVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJpY29uXCI6IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9leHBlcmllbmNlLy4uL3dpZGdldHMvY29vcmRlbmRhcy9pY29uLnN2Z1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJ3aWRnZXRfOVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ1cmlcIjogXCJ3aWRnZXRzL2NvbnRyb2wtdGhlLXdpZGdldC1zdGF0ZS9cIixcclxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29udHJvbCB0aGUgV2lkZ2V0IFN0YXRlXCIsXHJcbiAgICAgICAgICAgICAgXCJjb25maWdcIjogbnVsbCxcclxuICAgICAgICAgICAgICBcImlkXCI6IFwid2lkZ2V0XzlcIixcclxuICAgICAgICAgICAgICBcImNvbnRleHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlzUmVtb3RlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbGRlclVybFwiOiBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDEvZXhwZXJpZW5jZS8uLi93aWRnZXRzL2NvbnRyb2wtdGhlLXdpZGdldC1zdGF0ZS9cIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIkxBUkdFXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxheW91dElkXCI6IFwibGF5b3V0XzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxheW91dEl0ZW1JZFwiOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIl9vcmlnaW5NYW5pZmVzdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbnRyb2wtdGhlLXdpZGdldC1zdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29udHJvbCB0aGUgV2lkZ2V0IFN0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndpZGdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJleGJWZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IFwiRXNyaSBSJkQgQ2VudGVyIEJlaWppbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgd2lkZ2V0cyBkZW1vbnN0cmF0ZXMgdGhlIGFiaWxpdHkgdG8gY29udHJvbCB0aGUgd2lkZ2V0IHN0YXRlIG9mIGFub3RoZXIgd2lkZ2V0LlwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvcHlyaWdodFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxpY2Vuc2VcIjogXCJodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcIixcclxuICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzU2V0dGluZ1BhZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0NvbmZpZ1wiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZWRMb2NhbGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5cIlxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHRTaXplXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWFuaWZlc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb250cm9sLXRoZS13aWRnZXQtc3RhdGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbnRyb2wgdGhlIFdpZGdldCBTdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3aWRnZXRcIixcclxuICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZXhiVmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiBcIkVzcmkgUiZEIENlbnRlciBCZWlqaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIHdpZGdldHMgZGVtb25zdHJhdGVzIHRoZSBhYmlsaXR5IHRvIGNvbnRyb2wgdGhlIHdpZGdldCBzdGF0ZSBvZiBhbm90aGVyIHdpZGdldC5cIixcclxuICAgICAgICAgICAgICAgICAgXCJjb3B5cmlnaHRcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgXCJsaWNlbnNlXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc1NldHRpbmdQYWdlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNDb25maWdcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc1ZlcnNpb25NYW5hZ2VyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0SW5saW5lRWRpdGluZ1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3VwcG9ydFJlcGVhdFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzQnVpbGRlclN1cHBvcnRNb2R1bGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc0VtYmVkZGVkTGF5b3V0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2NrQ2hpbGRyZW5cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZsaXBJY29uXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3ZlckxheW91dEJhY2tncm91bmRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbkNyb3NzTGF5b3V0Qm91bmRhcnlcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5lZWRBY3RpdmVTdGF0ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2FuQ29uc3VtZURhdGFBY3Rpb25cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndhdGNoVmlld3BvcnRWaXNpYmlsaXR5XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpc1dpZGdldENvbnRyb2xsZXJcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhhc01haW5DbGFzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXNDb25maWdJblNldHRpbmdQYWdlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBhc3NEYXRhU291cmNlVG9DaGlsZHJlblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZWFjdGl2YXRlT3RoZXJXaWRnZXRzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1cHBvcnRBdXRvU2l6ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlZExvY2FsZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlblwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFNpemVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAzMDBcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJpMThuTWVzc2FnZXNcIjoge31cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiaWNvblwiOiBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDEvZXhwZXJpZW5jZS8uLi93aWRnZXRzL2NvbnRyb2wtdGhlLXdpZGdldC1zdGF0ZS9pY29uLnN2Z1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwid2lkZ2V0c01hbmlmZXN0XCI6IHt9LFxyXG4gICAgICBcInZpZXdzXCI6IHt9LFxyXG4gICAgICBcInNlY3Rpb25zXCI6IHt9LFxyXG4gICAgICBcImRpYWxvZ3NcIjoge30sXHJcbiAgICAgIFwiZGF0YVNvdXJjZXNcIjoge1xyXG4gICAgICAgICAgXCJkYXRhU291cmNlXzFcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJkYXRhU291cmNlXzFcIixcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJXRUJfTUFQXCIsXHJcbiAgICAgICAgICAgICAgXCJzb3VyY2VMYWJlbFwiOiBcIldlYiBNYXAgUHJ1ZWJhcy1Db3BpYVwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbUlkXCI6IFwiNWVmNjhiYzY4NDhhNGQ5ZmIyNTMxNzdjZTQ3NjM3Y2FcIixcclxuICAgICAgICAgICAgICBcInBvcnRhbFVybFwiOiBcImh0dHBzOi8vRGFpci5tYXBzLmFyY2dpcy5jb21cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwid2lkZ2V0XzRfb3VwdXRcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJ3aWRnZXRfNF9vdXB1dFwiLFxyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZFQVRVUkVfTEFZRVJcIixcclxuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRXN0YWTDrXN0aWNhcyBkZSBHcsOhZmljb1wiLFxyXG4gICAgICAgICAgICAgIFwib3JpZ2luRGF0YVNvdXJjZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VJZFwiOiBcImRhdGFTb3VyY2VfMS1BY2NpZGVudGVzU2V5c18xNzA5XzUyMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibWFpbkRhdGFTb3VyY2VJZFwiOiBcImRhdGFTb3VyY2VfMS1BY2NpZGVudGVzU2V5c18xNzA5XzUyMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwicm9vdERhdGFTb3VyY2VJZFwiOiBcImRhdGFTb3VyY2VfMVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiaXNPdXRwdXRGcm9tV2lkZ2V0XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgXCJpc0RhdGFJbkRhdGFTb3VyY2VJbnN0YW5jZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpZEZpZWxkXCI6IFwiX19vdXRwdXRpZF9fXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJFc3RhZMOtc3RpY2FzIGRlIEdyw6FmaWNvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiX19vdXRwdXRpZF9fXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiX19vdXRwdXRpZF9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiX19vdXRwdXRpZF9fXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkHDsW9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlRG91YmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkHDsW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0FsY2FuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9BbGNhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQWxjYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIEFsY2FuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9BbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0FuaW1hbCBjb25kdWNpZG8gbyByZWJhw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQW5pbWFsIGNvbmR1Y2lkbyBvIHJlYmHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBBbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0FuaW1hbGVzIHN1ZWx0b3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9BbmltYWxlcyBzdWVsdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQW5pbWFsZXMgc3VlbHRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIEFuaW1hbGVzIHN1ZWx0b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9CYXJyZXJhIGRlIHBhc28gYSBuaXZlbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0JhcnJlcmEgZGUgcGFzbyBhIG5pdmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQmFycmVyYSBkZSBwYXNvIGEgbml2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBCYXJyZXJhIGRlIHBhc28gYSBuaXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0NhaWRhIGVuIGNhbHphZGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9DYWlkYSBlbiBjYWx6YWRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ2FpZGEgZW4gY2FsemFkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIENhaWRhIGVuIGNhbHphZGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9DaG9xdWUgY29uIMOhcmJvbCBvIHBvc3RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ2hvcXVlIGNvbiDDoXJib2wgbyBwb3N0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0Nob3F1ZSBjb24gw6FyYm9sIG8gcG9zdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBDaG9xdWUgY29uIMOhcmJvbCBvIHBvc3RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ2hvcXVlIGNvbiBjdW5ldGEgbyBib3JkaWxsb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0Nob3F1ZSBjb24gY3VuZXRhIG8gYm9yZGlsbG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9DaG9xdWUgY29uIGN1bmV0YSBvIGJvcmRpbGxvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgQ2hvcXVlIGNvbiBjdW5ldGEgbyBib3JkaWxsb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0Nob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9DaG9xdWUgY29uIG11cmV0ZSBvIGVkaWZpY2lvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ2hvcXVlIGNvbiBtdXJldGUgbyBlZGlmaWNpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIENob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9DaG9xdWUgY29udHJhIGJhcnJlcmEgZGUgc2VndXJpZGFkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ2hvcXVlIGNvbnRyYSBiYXJyZXJhIGRlIHNlZ3VyaWRhZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0Nob3F1ZSBjb250cmEgYmFycmVyYSBkZSBzZWd1cmlkYWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBDaG9xdWUgY29udHJhIGJhcnJlcmEgZGUgc2VndXJpZGFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ29uIGRlc3Blw7FhbWllbnRvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ29uIGRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ29uIGRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgQ29uIGRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfQ29uIHZ1ZWxjb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0NvbiB2dWVsY29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9Db24gdnVlbGNvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgQ29uIHZ1ZWxjb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0Rlc3Blw7FhbWllbnRvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfRGVzcGXDsWFtaWVudG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9EZXNwZcOxYW1pZW50b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIERlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfRW4gbGxhbm9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9FbiBsbGFub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0VuIGxsYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgRW4gbGxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9Gcm9udGFsXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfRnJvbnRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0Zyb250YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBGcm9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfRnJvbnRvbGF0ZXJhbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX0Zyb250b2xhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9Gcm9udG9sYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgRnJvbnRvbGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX0xhdGVyYWxcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9MYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfTGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIExhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9Nw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX03Dumx0aXBsZSBvIGVuIGNhcmF2YW5hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfTcO6bHRpcGxlIG8gZW4gY2FyYXZhbmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBNw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX09ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX09ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX09ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIE9ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX090cm9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9PdHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfT3Ryb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIE90cm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9PdHJvIG9iamV0byBvIG1hdGVyaWFsXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfT3RybyBvYmpldG8gbyBtYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX090cm8gb2JqZXRvIG8gbWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBPdHJvIG9iamV0byBvIG1hdGVyaWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfT3RybyB0aXBvIGRlIGNob3F1ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX090cm8gdGlwbyBkZSBjaG9xdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9PdHJvIHRpcG8gZGUgY2hvcXVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgT3RybyB0aXBvIGRlIGNob3F1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX1BlYXTDs24gYWlzbGFkb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1BlYXTDs24gYWlzbGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1BlYXTDs24gYWlzbGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIFBlYXTDs24gYWlzbGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX1BlYXTDs24gYWlzbGFkbyBvIGVuIGdydXBvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfUGVhdMOzbiBhaXNsYWRvIG8gZW4gZ3J1cG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9QZWF0w7NuIGFpc2xhZG8gbyBlbiBncnVwb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIFBlYXTDs24gYWlzbGFkbyBvIGVuIGdydXBvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfUGVhdMOzbiByZXBhcmFuZG8gdmVow61jdWxvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImppbXVOYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfUGVhdMOzbiByZXBhcmFuZG8gdmVow61jdWxvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfUGVhdMOzbiByZXBhcmFuZG8gdmVow61jdWxvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgUGVhdMOzbiByZXBhcmFuZG8gdmVow61jdWxvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0U2VwYXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlc1wiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbkZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJ0aXBvX0FjY2lkZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfUGVhdMOzbiBzb3N0ZW5pZW5kbyBiaWNpY2xldGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9QZWF0w7NuIHNvc3RlbmllbmRvIGJpY2ljbGV0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1BlYXTDs24gc29zdGVuaWVuZG8gYmljaWNsZXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTlVNQkVSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3JpVHlwZVwiOiBcImVzcmlGaWVsZFR5cGVPSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IFwiQ291bnQgb2YgT0JKRUNUSUQgb2YgUGVhdMOzbiBzb3N0ZW5pZW5kbyBiaWNpY2xldGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9Tw7NsbyBTYWxpZGEgZGUgVsOtYVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1PDs2xvIFNhbGlkYSBkZSBWw61hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfU8OzbG8gU2FsaWRhIGRlIFbDrWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBTw7NsbyBTYWxpZGEgZGUgVsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvdW50X29mX09CSkVDVElEX29mX1ZhbGxhIGRlIGRlZmVuc2FcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9WYWxsYSBkZSBkZWZlbnNhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfVmFsbGEgZGUgZGVmZW5zYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5VTUJFUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXNyaVR5cGVcIjogXCJlc3JpRmllbGRUeXBlT0lEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBcIkNvdW50IG9mIE9CSkVDVElEIG9mIFZhbGxhIGRlIGRlZmVuc2FcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9WZWjDrWN1bG8gZXN0YWNpb25hZG8vYXZlcmlhZG9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiamltdU5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9WZWjDrWN1bG8gZXN0YWNpb25hZG8vYXZlcmlhZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9WZWjDrWN1bG8gZXN0YWNpb25hZG8vYXZlcmlhZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBWZWjDrWN1bG8gZXN0YWNpb25hZG8vYXZlcmlhZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRTZXBhcmF0b3JcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VzXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luRmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YnRpcG9fQWNjaWRlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb3VudF9vZl9PQkpFQ1RJRF9vZl9WdWVsY28gZW4gbGEgY2FsemFkYVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqaW11TmFtZVwiOiBcImNvdW50X29mX09CSkVDVElEX29mX1Z1ZWxjbyBlbiBsYSBjYWx6YWRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURfb2ZfVnVlbGNvIGVuIGxhIGNhbHphZGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOVU1CRVJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzcmlUeXBlXCI6IFwiZXNyaUZpZWxkVHlwZU9JRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogXCJDb3VudCBvZiBPQkpFQ1RJRCBvZiBWdWVsY28gZW4gbGEgY2FsemFkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWdpdFNlcGFyYXRvclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZXNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5GaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VidGlwb19BY2NpZGVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJtZXNzYWdlQ29uZmlnc1wiOiB7XHJcbiAgICAgICAgICBcIm1lc3NhZ2VDb25maWdfMVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lc3NhZ2VDb25maWdfMVwiLFxyXG4gICAgICAgICAgICAgIFwid2lkZ2V0SWRcIjogXCJ3aWRnZXRfNFwiLFxyXG4gICAgICAgICAgICAgIFwibWVzc2FnZVR5cGVcIjogXCJEQVRBX1JFQ09SRFNfU0VMRUNUSU9OX0NIQU5HRVwiLFxyXG4gICAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uSWRcIjogXCJ3aWRnZXRfMy1maWx0ZXItMTcxMzMzNjYzMDQ1OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWRnZXRJZFwiOiBcIndpZGdldF8zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VXaWRnZXRJZFwiOiBcIndpZGdldF80XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvbk5hbWVcIjogXCJmaWx0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlnXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VVc2VEYXRhU291cmNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhU291cmNlSWRcIjogXCJ3aWRnZXRfNF9vdXB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1haW5EYXRhU291cmNlSWRcIjogXCJ3aWRnZXRfNF9vdXB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvb3REYXRhU291cmNlSWRcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX291dHB1dGlkX19cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblVzZURhdGFTb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VJZFwiOiBcImRhdGFTb3VyY2VfMS1BY2NpZGVudGVzU2V5c18xNzA5XzUyMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWluRGF0YVNvdXJjZUlkXCI6IFwiZGF0YVNvdXJjZV8xLUFjY2lkZW50ZXNTZXlzXzE3MDlfNTIxMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvb3REYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPQkpFQ1RJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3FsRXhwck9ialwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZERhdGFSZWxhdGlvblNoaXBcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1c2VEYXRhU291cmNlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VJZFwiOiBcIndpZGdldF80X291cHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbkRhdGFTb3VyY2VJZFwiOiBcIndpZGdldF80X291cHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm9vdERhdGFTb3VyY2VJZFwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fb3V0cHV0aWRfX1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhU291cmNlSWRcIjogXCJkYXRhU291cmNlXzEtQWNjaWRlbnRlc1NleXNfMTcwOV81MjExXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbkRhdGFTb3VyY2VJZFwiOiBcImRhdGFTb3VyY2VfMS1BY2NpZGVudGVzU2V5c18xNzA5XzUyMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb290RGF0YVNvdXJjZUlkXCI6IFwiZGF0YVNvdXJjZV8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0JKRUNUSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImF0dHJpYnV0ZXNcIjoge1xyXG4gICAgICAgICAgXCJwb3J0YWxVcmxcIjogXCJodHRwczovL0RhaXIubWFwcy5hcmNnaXMuY29tXCJcclxuICAgICAgfSxcclxuICAgICAgXCJzaGFyZWRUaGVtZVZhcmlhYmxlc1wiOiBudWxsLFxyXG4gICAgICBcIm9yaWdpbkV4YlZlcnNpb25cIjogXCIxLjE0LjBcIixcclxuICAgICAgXCJwYWdlU3RydWN0dXJlXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcInBhZ2VfMVwiOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcImhlYWRlclwiOiB7XHJcbiAgICAgICAgICBcImxheW91dFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJMQVJHRVwiOiBcImxheW91dF8xXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImhlaWdodFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJMQVJHRVwiOiA3NVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcInRpbWVzdGFtcFwiOiAxNzEzMzM2Njg2ODgwXHJcbiAgfVxyXG4gICAgLy9hcHBDID0gY29uZmlnXHJcbiAgICAvL2NvbnNvbGUubG9nKGFwcEMpXHJcbiAgICBzZXROZXdBcHBDb25maWcoY29uZmlnKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZylcclxuICAgIGNvbnNvbGUubG9nKGFwcEFjdGlvbnMpXHJcbiAgfSwgW2NhbXBvXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHdpZGdldHMgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHNcclxuICAgIHNldEFwcFdpZGdldHMod2lkZ2V0cylcclxuICAgIHNldENoYXJ0V2lkZ2V0SWQoJ3dpZGdldF80JylcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gVXBkYXRlIHRoZSB3aWRnZXRzQXJyYXkgYW5kIHNpZGViYXJXaWRnZXRzQXJyYXkgcHJvcGVydGllcyBldmVyeSB0aW1lIGFwcFdpZGdldHMgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXBwV2lkZ2V0cykge1xyXG4gICAgICBjb25zdCB3aWRnZXRzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFwcFdpZGdldHMpXHJcbiAgICAgIHNldENoYXJ0V2lkZ2V0c0FycmF5KHdpZGdldHNBcnJheS5maWx0ZXIodyA9PiB3LnVyaSA9PT0gJ3dpZGdldHMvY29tbW9uL2NoYXJ0LycpKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhcHBXaWRnZXRzKVxyXG4gICAgfVxyXG4gIH0sIFthcHBXaWRnZXRzXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIFwidG9vbHNcIjoge1xyXG4gICAgICAgICAgXCJjdXJzb3JFbmFibGVcIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBcInRlbXBsYXRlXCI6IFwiY29sdW1uXCIsXHJcbiAgICAgIFwid2ViQ2hhcnRcIjoge1xyXG4gICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy4zLjFcIixcclxuICAgICAgICAgIFwiaWRcIjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0XCIsXHJcbiAgICAgICAgICBcImRhdGFTb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiQcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0aXN0aWNUeXBlXCI6IFwiY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uU3RhdGlzdGljRmllbGRcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0U3RhdGlzdGljRmllbGROYW1lXCI6IFwiY291bnRfb2ZfT0JKRUNUSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcIm9yZGVyQnlGaWVsZHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJBw7FvIEFTQ1wiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT17dmFsdWV9XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJzb3J0TGFiZWxzQnlcIjogXCJvcmlnaW5hbFZhbHVlXCIsXHJcbiAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNlcmllc1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVFOEZEMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9JydcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQWxjYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGNhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3N0I0ODRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdBbGNhbmNlJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJBbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbmltYWwgY29uZHVjaWRvIG8gcmViYcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREY2QjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQW5pbWFsIGNvbmR1Y2lkbyBvIHJlYmHDsW8nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkFuaW1hbGVzIHN1ZWx0b3NcIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5pbWFsZXMgc3VlbHRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQW5pbWFsZXMgc3VlbHRvcydcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQmFycmVyYSBkZSBwYXNvIGEgbml2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFycmVyYSBkZSBwYXNvIGEgbml2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0JhcnJlcmEgZGUgcGFzbyBhIG5pdmVsJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDYWlkYSBlbiBjYWx6YWRhXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhaWRhIGVuIGNhbHphZGFcIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzgyNTdDMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0NhaWRhIGVuIGNhbHphZGEnXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkNob3F1ZSBjb24gw6FyYm9sIG8gcG9zdGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hvcXVlIGNvbiDDoXJib2wgbyBwb3N0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjRDY1NThCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ2hvcXVlIGNvbiDDoXJib2wgbyBwb3N0ZSdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQ2hvcXVlIGNvbiBjdW5ldGEgbyBib3JkaWxsb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaG9xdWUgY29uIGN1bmV0YSBvIGJvcmRpbGxvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM1RThGRDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdDaG9xdWUgY29uIGN1bmV0YSBvIGJvcmRpbGxvJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDaG9xdWUgY29uIG11cmV0ZSBvIGVkaWZpY2lvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc3QjQ4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0Nob3F1ZSBjb24gbXVyZXRlIG8gZWRpZmljaW8nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkNob3F1ZSBjb250cmEgYmFycmVyYSBkZSBzZWd1cmlkYWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hvcXVlIGNvbnRyYSBiYXJyZXJhIGRlIHNlZ3VyaWRhZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREY2QjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ2hvcXVlIGNvbnRyYSBiYXJyZXJhIGRlIHNlZ3VyaWRhZCdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiQ29uIGRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbiBkZXNwZcOxYW1pZW50b1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nQ29uIGRlc3Blw7FhbWllbnRvJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJDb24gdnVlbGNvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbiB2dWVsY29cIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0NvbiB2dWVsY28nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlc3Blw7FhbWllbnRvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4MjU3QzJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdEZXNwZcOxYW1pZW50bydcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiRW4gbGxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW4gbGxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0Q2NTU4QlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0VuIGxsYW5vJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJGcm9udGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyb250YWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVFOEZEMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J0Zyb250YWwnXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIkZyb250b2xhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJvbnRvbGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzdCNDg0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nRnJvbnRvbGF0ZXJhbCdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNERjZCMzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdMYXRlcmFsJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNw7psdGlwbGUgbyBlbiBjYXJhdmFuYVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInhcIjogXCJBw7FvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieVwiOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JUeXBlXCI6IFwic2luZ2xlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJzdGFja2VkVHlwZVwiOiBcInN0YWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJmaWxsU3ltYm9sXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTRlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0ZTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREJDRjRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm91dGxpbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlTTFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNMU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTkwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhTGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay02MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFUb29sdGlwVmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjogXCJTdWJ0aXBvX0FjY2lkZW50ZT0nTcO6bHRpcGxlIG8gZW4gY2FyYXZhbmEnXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJiYXJTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk9ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPYnN0w6FjdWxvICBvIGVsZW1lbnRvIGRlIGxhIHbDrWFcIixcclxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IFwiQcOxb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInlcIjogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yVHlwZVwiOiBcInNpbmdsZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3RhY2tlZFR5cGVcIjogXCJzdGFja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZmlsbFN5bWJvbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0ZTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZXNyaVNGU1NvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQxNTQ2RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpU0xTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1saWdodC05MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YUxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstNjAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiBcInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicm90YXRlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJkYXRhVG9vbHRpcFZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IFwiU3VidGlwb19BY2NpZGVudGU9J09ic3TDoWN1bG8gIG8gZWxlbWVudG8gZGUgbGEgdsOtYSdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiT3Ryb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPdHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4MjU3QzJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdPdHJvJ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmFyU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJfX290aGVyLXNwbGl0LXZhbHVlX19cIixcclxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5kZWZpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBcIkHDsW9cIixcclxuICAgICAgICAgICAgICAgICAgXCJ5XCI6IFwiT0JKRUNUSURcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclR5cGVcIjogXCJzaW5nbGVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0YWNrZWRUeXBlXCI6IFwic3RhY2tlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZpbGxTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTRlNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNENkQ2RDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJlc3JpU0xTU29saWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtOTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGFMYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTYwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVRvb2x0aXBWaXNpYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiBcIlN1YnRpcG9fQWNjaWRlbnRlPSdfX290aGVyLXNwbGl0LXZhbHVlX18nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBcImF4ZXNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay01MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZUZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGFyYWN0ZXJMaW1pdFwiOiAxMVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImxpbmVTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImdyaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNEYXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtMzAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRBeGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcImlzTG9nYXJpdGhtaWNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogXCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay01MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IFwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZUZvcm1hdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaW50bE9wdGlvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VHcm91cGluZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaW11bUZyYWN0aW9uRGlnaXRzXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhpbXVtRnJhY3Rpb25EaWdpdHNcIjogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImxpbmVTeW1ib2xcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNTb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWxpZ2h0LTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImdyaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVNMU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImVzcmlTTFNEYXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbGlnaHQtMzAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwidmFyKC0td2hpdGUpXCIsXHJcbiAgICAgICAgICBcInRpdGxlXCI6IHtcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFydFRleHRcIixcclxuICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlc3JpVFNcIixcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWJsYWNrKVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmYW1pbHlcIjogXCJBdmVuaXIgTmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJmb290ZXJcIjoge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tZGFyay04MDApXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZWNvcmF0aW9uXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImxlZ2VuZFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhcnRMZWdlbmRcIixcclxuICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVzcmlUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLWRhcmstODAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbWlseVwiOiBcIkF2ZW5pciBOZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJib2R5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXNyaVRTXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1kYXJrLTgwMClcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZmFtaWx5XCI6IFwiQXZlbmlyIE5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlY29yYXRpb25cIjogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmlnaHRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRDb25maWdMb2FkZWQoXHJcbiAgICAgICd3aWRnZXRfNCcsIFxyXG4gICAgICBjb25maWdcclxuICAgICkpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWVsZCAoZXZ0KSB7XHJcbiAgICBzZXRDYW1wbyhldnQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIlNlbGVjY2lvbmFibGVcIiBpZD1cIlNlbGVjY2lvbmFibGVcIiBvbkNoYW5nZT17aGFuZGxlRmllbGR9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGFydH0+Q2FtYmlhciBncsOhZmljbzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEVzY2FsYToge2VzY2FsYX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBab29tOiB7em9vbX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
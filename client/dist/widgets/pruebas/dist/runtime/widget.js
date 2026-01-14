System.register(["jimu-core","jimu-core/react","jimu-core/react-dom","jimu-arcgis","jimu-ui/advanced/setting-components","esri/renderers/UniqueValueRenderer","esri/smartMapping/renderers/pieChart","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_renderers_UniqueValueRenderer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_renderers_UniqueValueRenderer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_renderers_UniqueValueRenderer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ "./your-extensions/widgets/leyenda_dinamica/src/runtime/widget.tsx":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/leyenda_dinamica/src/runtime/widget.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ DinLeyend)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/leyenda_dinamica/src/runtime/translations/default.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var esri_renderers_UniqueValueRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/renderers/UniqueValueRenderer */ "esri/renderers/UniqueValueRenderer");
/* harmony import */ var esri_smartMapping_renderers_pieChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/smartMapping/renderers/pieChart */ "esri/smartMapping/renderers/pieChart");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pruebas/src/runtime/assets/accidentColors.json */ "./your-extensions/widgets/pruebas/src/runtime/assets/accidentColors.json");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// import Legend from "esri/widgets/Legend";
// import LegendVM from "esri/widgets/Legend/LegendViewModel";
// IMPORTA TU DICCIONARIO DE COLORES
// Ajusta la ruta si el archivo está en otra carpeta.

const normalizeKey = (s) => {
    if (!s)
        return "";
    // Corrección de errores frecuentes desde la capa
    const corrections = {
        "inudado": "inundado",
        "encharcado": "encharcado",
        "gravilla": "gravilla",
        "barro": "barro"
    };
    // 1) quitar tildes y minúsculas
    let result = s
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    // 2) aplicar correcciones internas
    Object.keys(corrections).forEach(key => {
        result = result.replace(new RegExp(key, "g"), corrections[key]);
    });
    // 3) eliminar palabras irrelevantes
    const stopwords = ["de", "del", "la", "el", "los", "las", "o", "y"];
    result = result
        .split(/\s+/)
        .filter(word => !stopwords.includes(word))
        .join(" ");
    // 4) limpiar caracteres
    result = result.replace(/[^a-z0-9]+/g, "_");
    return result.replace(/^_|_$/g, "");
};
/** extrae [r,g,b] desde 'rgba(r,g,b,a)' o 'rgb(r,g,b)' */
const parseRgba = (rgba) => {
    const m = rgba === null || rgba === void 0 ? void 0 : rgba.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
};
function capitalizeFirstLetter(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/** obtiene el color [r,g,b] desde el JSON para (campo, valor). Si no existe -> null */
const getColorFromJson = (fieldName, value) => {
    var campoPrimeraMayusculas = capitalizeFirstLetter(fieldName);
    if (_pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__[campoPrimeraMayusculas]) {
        for (const key in _pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__[campoPrimeraMayusculas]) {
            console.log('Primero:' + _pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__[campoPrimeraMayusculas][key].nombre.toLowerCase() + '      Segundo:    ' + value.toLowerCase());
            //console.log('Segundo'+value.toLowerCase())
            if (normalizeKey(_pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__[campoPrimeraMayusculas][key].nombre.toLowerCase()) ===
                normalizeKey(value.toLowerCase())) {
                return _pruebas_src_runtime_assets_accidentColors_json__WEBPACK_IMPORTED_MODULE_8__[campoPrimeraMayusculas][key].color;
                break;
            }
        }
        return "rgb(200, 200, 200)";
    }
    else {
        return null;
    }
};
function DinLeyend(props) {
    var _a;
    const supportedFieldTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String]);
    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); //Tipo_accidente
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [nombreCapa, setNombreCapa] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const [seleccionables, setSeleccionables] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]));
    const [valoresAgg, setValoresAgg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [ejecutar, setEjecutar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [cluster, setCluster] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [attUnico, setAttUnico] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // const [layer, setLayer] = useState<Layer>()
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (props.useDataSources && props.useDataSources.length > 0) {
            const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1];
            setNombreCapa(nombreCapa); // No cambia el estilo al cambiar la fuente de datos de la capa, mirarlo bien
        }
    }, [props.useDataSources]);
    function comparacion(atributos, listaNombres) {
        const final = {};
        listaNombres = listaNombres.map(String);
        for (const atributo of atributos) {
            const nAciertos = {};
            const listaAciertos = [];
            for (const nombre of listaNombres) {
                let aciertos = 0;
                if (atributo.length === nombre.length) {
                    for (let i = 0; i < atributo.length; i++) {
                        if (atributo[i] === nombre[i]) {
                            aciertos++;
                        }
                    }
                }
                nAciertos[aciertos] = nombre;
                listaAciertos.push(aciertos);
            }
            function comparar(a, b) {
                return b - a; // Resta b de a para ordenar de mayor a menor
            }
            listaAciertos.sort(comparar);
            if (listaAciertos[0] === 0) {
                if (atributo === ' ') {
                    final[atributo] = ' ';
                }
                else {
                    final[atributo] = 'Agrupación';
                }
            }
            else {
                final[atributo] = nAciertos[listaAciertos[0]];
            }
        }
        return (final);
    }
    const campos = {
        Tipo_accidente: 'Tipo de accidente',
        Subtipo_Accidente: 'Subtipo de Accidente',
        Sentido: 'Sentido',
        Superficie: 'Superficie',
        Luminosidad: 'Luminosidad',
        Factores_atmosfericos: 'Factores atmosféricos',
        Tipo_dia: 'Tipo de día',
        Factor_Concurrente_3: 'Factor concurrente'
    };
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            setJimuMapView(jmv);
        }
    };
    function generarColorAleatorio() {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    }
    const fieldsListChangeHandler = (evt, item) => {
        if (evt) {
            setNombre(evt.target.value);
            props.onUpdate(evt.target.value);
        }
    };
    const ejecucion = () => {
        setEjecutar(true);
        props.onRun(true);
    };
    function selectAgregate(listaItems) {
        return (react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingSection, { className: "attribute-selector-section", title: 'Este atributo tiene m\u00E1s de 10 categor\u00EDas, l\u00EDmite que el mapa no permite visualizar. Seleccione como m\u00E1ximo 9 atributos para visualizarlos en el mapa.' },
            react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.MultiSelect
            //values = {values}
            , { 
                //values = {values}
                items: listaItems, placeholder: "Selecione 9 atributos \u00FAnicos", displayByValues: function displayValues(values) {
                    return `${values.length} seleccionados`;
                }, 
                //values={values}
                onClickItem: function seleccionValores(evt, value, selectedValues) {
                    if (selectedValues.length <= 10) {
                        setValoresAgg(selectedValues);
                    }
                } })));
    }
    const createPieChartRenderer = (layer, attUnique) => __awaiter(this, void 0, void 0, function* () {
        const { renderer, fields } = yield esri_smartMapping_renderers_pieChart__WEBPACK_IMPORTED_MODULE_6__.createRendererForClustering({
            layer,
            legendOptions: {
                title: campos[nombre]
            }
        });
        const atributos = [];
        fields.forEach(field => {
            atributos.push(field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length));
        });
        let nombresCod;
        if (nombre === 'Tipo_accidente') {
            nombresCod = {
                'Salidas de v a': 'Salidas de vía',
                Colisiones: 'Colisiones',
                Alcances: 'Alcances',
                Choques: 'Choques',
                Otros: 'Otros',
                'Atropellos de animales': 'Atropellos de animales',
                Caidas: 'Caídas',
                Vuelcos: 'Vuelcos',
                'Atropellos de peatones': 'Atropellos de peatones',
                'cluster default': 'Agrupación',
                'Sin datos': 'Sin datos'
            };
        }
        else {
            nombresCod = comparacion(atributos, attUnique);
        }
        const fieldInfos = fields.map(field => {
            return {
                fieldName: field.name,
                label: nombresCod[field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)],
                format: {
                    places: 0,
                    digitSeparator: true
                }
            };
        });
        if (attUnique.length < 11) {
            fieldInfos.pop();
        }
        // maps the field names for the popup chart
        const fieldNames = fieldInfos.map(field => {
            return field.fieldName;
        });
        const popupTemplate = {
            title: 'Resumen del clúster',
            content: [{
                    type: 'text',
                    text: 'This cluster represents <b>{cluster_count}</b> features. '
                },
                {
                    type: 'media',
                    mediaInfos: [{
                            title: 'Reports',
                            type: 'pie-chart',
                            value: {
                                fields: fieldNames
                            }
                        }]
                },
                {
                    type: 'fields'
                }],
            fieldInfos
        };
        // ---- Colores de cada sector desde el JSON ----
        renderer.attributes.forEach((attr) => {
            var _a;
            const base = attr.field
                .split('_')
                .map((n) => n.replace('SUM', ''))
                .join(' ')
                .replace('SUM', '');
            const label = (_a = nombresCod[base.slice(1)]) !== null && _a !== void 0 ? _a : base.slice(1);
            const c = getColorFromJson(nombre, label);
            if (c) {
                attr.symbol = attr.symbol || {};
                attr.symbol.color = c;
            }
        });
        // renderer.attributes.map((field) => {
        //   if (attUnique.length < 11 && field.field.includes('default')) {
        //     return (renderer.attributes.splice(renderer.attributes.findIndex(function (elemento) {
        //       return elemento.field === field.field
        //     }), 1))
        //   } else {
        //     return (field.label = nombresCod[field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)])
        //   }
        // })
        layer.featureReduction = {
            type: 'cluster',
            fields: fields,
            clusterMinSize: 25,
            renderer,
            popupTemplate,
            labelingInfo: []
        };
        setEjecutar(false);
    });
    // function cleanArrayValues(arr: Array<string | null | undefined>): string[] {
    // // return arr
    // //   .filter((item): item is string => typeof item === 'string') // quita null/undefined
    // //   .map(item => item.trim()); // elimina espacios al inicio y final
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (jimuMapView && nombre && nombreCapa !== '') {
            const layer1 = jimuMapView.view.map.findLayerById(nombreCapa);
            const field = layer1.getField(nombre);
            const query = layer1.createQuery();
            query.outFields = [field.name];
            query.maxRecordCountFactor = 3;
            const obtenerAttUnique = () => __awaiter(this, void 0, void 0, function* () {
                const attributes = [];
                const result = yield layer1.queryFeatures(query);
                result.features.forEach((feature) => {
                    const value = feature.attributes[field.name];
                    attributes.push(value);
                });
                const attUnique = Array.from(new Set(attributes));
                console.log(attUnique);
                // console.log(cleanArrayValues(attUnique))
                if (ejecutar) {
                    const appConf = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    appConf.attUnique = attUnique && attUnique.length ? attUnique : [
                        'Salidas de vía',
                        'Colisiones',
                        'Alcances',
                        'Choques',
                        'Otros',
                        'Atropellos de animales',
                        'Caídas',
                        'Vuelcos',
                        'Atropellos de peatones',
                        'Sin datos'
                    ];
                }
                return attUnique;
            });
            obtenerAttUnique().then((attUnique) => {
                const items = [];
                attUnique.forEach((att) => {
                    const item = {};
                    if (att === null) {
                        item['value'] = 'Sin datos';
                        item['label'] = 'Sin datos';
                    }
                    else {
                        item['value'] = att.toString();
                        item['label'] = att.toString();
                    }
                    items.push(item);
                });
                setSeleccionables(items);
                window.attUnique = attUnique;
                window.valoresAgg = valoresAgg;
                if (ejecutar) {
                    if (valoresAgg.length <= 25 && valoresAgg.length !== 0) {
                        for (const att of attUnique) {
                            let coincidencias = 0;
                            for (const att2 of valoresAgg) {
                                if (att === att2) {
                                    coincidencias++;
                                }
                            }
                            if (coincidencias === 0) {
                                valoresAgg.push(att);
                                break;
                            }
                        }
                        simbologia(valoresAgg.slice(0, -1), layer1, field.name);
                    }
                    else {
                        simbologia(attUnique, layer1, field.name);
                    }
                    setAttUnico(attUnique);
                    cluster ? createPieChartRenderer(layer1, attUnique) : layer1.featureReduction = {};
                    setEjecutar(false);
                }
            });
            function simbologia(listaValores, capa, campo) {
                const symbology = [];
                const valueColor = {};
                for (const atributo of listaValores) {
                    // 1) Color desde JSON como string (rgb / rgba)
                    const fromJson = getColorFromJson(campo, String(atributo));
                    let colorForMap; // lo que va a symbol.color
                    let rgbArray; // SIEMPRE [r,g,b] para valueColor
                    if (fromJson) {
                        // Intentamos extraer [r,g,b] del string
                        const parsed = parseRgba(fromJson);
                        if (parsed) {
                            rgbArray = parsed;
                            colorForMap = fromJson; // el mapa puede trabajar con el string
                        }
                        else {
                            // Si el string no se puede parsear, caemos a random pero consistente
                            rgbArray = generarColorAleatorio();
                            colorForMap = rgbArray;
                        }
                    }
                    else {
                        // No hay JSON para este campo → random pero consistente
                        rgbArray = generarColorAleatorio();
                        colorForMap = rgbArray;
                    }
                    // 👉 Esto es lo que luego usan los gráficos: siempre [r,g,b]
                    valueColor[String(atributo)] = rgbArray;
                    symbology.push({
                        value: atributo,
                        label: atributo,
                        symbol: {
                            type: 'simple-marker',
                            color: colorForMap,
                            outline: null,
                            size: 6
                        }
                    });
                }
                const colorAgg = [195, 195, 195];
                const renderer = new esri_renderers_UniqueValueRenderer__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    field: campo,
                    defaultSymbol: {
                        type: 'simple-marker',
                        color: colorAgg,
                        outline: null,
                        size: 6
                    },
                    uniqueValueInfos: symbology
                });
                // 👉 Aquí mandas SOLO arrays [r,g,b] al widget de gráficos
                props.onAtt(valueColor);
                // ❌ Antes: capa.renderer = r
                // ✅ Ahora:
                capa.renderer = renderer;
            }
        }
        setValoresAgg([]);
    }, [jimuMapView, nombre, nombreCapa, ejecutar]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (jimuMapView && nombre && nombreCapa !== undefined) {
            const layer1 = jimuMapView.view.map.findLayerById(nombreCapa);
            cluster ? createPieChartRenderer(layer1, attUnico) : layer1.featureReduction = {};
            setEjecutar(false);
        }
    }, [cluster]);
    return (react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement("div", { className: "widget-setting-get-map-coordinates" },
        react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement("div", { className: "widget-starter jimu-widget" }, props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }))),
        props.useDataSources && props.useDataSources.length > 0 &&
            react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingSection, { className: "attribute-selector-section", title: props.intl.formatMessage({
                    id: 'chooseAttributeSelectorLabel',
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_1__["default"].chooseAttribute
                }) },
                react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Select, { value: nombre, onChange: fieldsListChangeHandler, placeholder: "Seleccione un campo...", autoWidth: true, menuProps: {
                        showArrow: true
                    } }, Object.keys(campos).map((campo) => (react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement("option", { key: campo, value: campo }, campos[campo]))))),
        (nombre === 'Subtipo_Accidente') &&
            selectAgregate(seleccionables),
        (nombre === 'Factor_Concurrente_3') &&
            selectAgregate(seleccionables),
        react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingSection, { className: "attribute-selector-section" },
            react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: ejecucion, size: "sm" }, "Ejecutar"),
            ejecutar &&
                react__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Loading, { height: 200, type: "DONUT", width: 200 }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }


/***/ }),

/***/ "./your-extensions/widgets/leyenda_dinamica/src/runtime/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/leyenda_dinamica/src/runtime/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Leyenda dinámica',
    chooseAttribute: 'Visualización por atributo'
});


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

/***/ "esri/renderers/UniqueValueRenderer":
/*!*****************************************************!*\
  !*** external "esri/renderers/UniqueValueRenderer" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_renderers_UniqueValueRenderer__;

/***/ }),

/***/ "esri/smartMapping/renderers/pieChart":
/*!*******************************************************!*\
  !*** external "esri/smartMapping/renderers/pieChart" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__;

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

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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

/***/ }),

/***/ "./your-extensions/widgets/pruebas/src/runtime/assets/accidentColors.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/pruebas/src/runtime/assets/accidentColors.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Tipo_accidente":{"salidas_de_via":{"color":"rgba(203, 0, 203, 1)","nombre":"Salidas de vía"},"colisiones":{"color":"rgba(101, 178, 255, 1)","nombre":"Colisiones"},"alcances":{"color":"rgba(255, 153, 50, 1)","nombre":"Alcances"},"choques":{"color":"rgba(153, 255, 229, 1)","nombre":"Choques"},"otros":{"color":"rgba(0, 63, 255, 1)","nombre":"Otros"},"atropellos_de_animales":{"color":"rgba(255, 255, 50, 1)","nombre":"Atropellos de animales"},"caidas":{"color":"rgba(140, 255, 101, 1)","nombre":"Caídas"},"vuelcos":{"color":"rgba(255, 0, 197, 1)","nombre":"Vuelcos"},"atropellos_de_peatones":{"color":"rgba(216, 255, 101, 1)","nombre":"Atropellos de peatones"},"sin_datos":{"color":"rgba(182, 182, 182, 1)","nombre":"Sin datos"},"no_definido":{"color":"rgba(214, 214, 214, 1)","nombre":"No definido"}},"Sentido":{"Ascendente":{"color":"rgba(255,125,125,1)","nombre":"Ascendente"},"Descendente":{"color":"rgba(77,147,217,1)","nombre":"Descendente"},"Sin_datos":{"color":"rgba(151,151,151,1)","nombre":"Sin datos"}},"Superficie":{"no_consta":{"color":"rgba(191,191,191,1)","nombre":"No consta"},"seca_y_limpia":{"color":"rgba(190,233,173,1)","nombre":"Seca y limpia"},"umbria":{"color":"rgba(184,231,254,1)","nombre":"Umbría"},"mojada":{"color":"rgba(94,184,246,1)","nombre":"Mojada"},"muy_encharcado_o_inundado":{"color":"rgba(15,65,177,1)","nombre":"Muy encharcado o inundado"},"helada":{"color":"rgba(238,245,252,1)","nombre":"Helada"},"nevada":{"color":"rgba(255,255,243,1)","nombre":"Nevada"},"aceite":{"color":"rgba(255,255,153,1)","nombre":"Aceite"},"con_barro_o_gravilla_suelta":{"color":"rgba(255,190,125,1)","nombre":"Con barro o gravilla suelta"},"gravilla_suelta":{"color":"rgba(255,224,193,1)","nombre":"Gravilla suelta"},"barrillo":{"color":"rgba(255,155,55,1)","nombre":"Barrillo"},"otro_tipo":{"color":"rgba(217,179,255,1)","nombre":"Otro tipo"},"sin_datos":{"color":"rgba(151,151,151,1)","nombre":"Sin datos"}},"Luminosidad":{"no_consta":{"color":"rgba(191,191,191,1)","nombre":"No consta"},"luz_del_dia_natural_solar":{"color":"rgba(255,255,75,1)","nombre":"Luz del día natural, solar"},"amanecer_o_atardecer_con_luz_artificial":{"color":"rgba(255,219,105,1)","nombre":"Amanecer o atardecer con luz artificial"},"amanecer_o_atardecer_sin_luz_artificial":{"color":"rgba(255,176,97,1)","nombre":"Amanecer o atardecer sin luz artificial"},"sin_luz_natural_luz_artificial_suficiente":{"color":"rgba(255,225,255,1)","nombre":"Sin luz natural, luz artificial suficiente"},"sin_luz_natural_luz_artificial_insuficiente":{"color":"rgba(37,105,173,1)","nombre":"Sin luz natural, luz artificial insuficiente"},"sin_iluminacion_natural_ni_artificial":{"color":"rgba(21,61,100,1)","nombre":"Sin iluminación natural ni artificial"},"crepusculo":{"color":"rgba(244,191,162,1)","nombre":"Crepúsculo"},"sin_datos":{"color":"rgba(151,151,151,1)","nombre":"Sin datos"}},"Factores_atmosfericos":{"no_consta":{"color":"rgba(191,191,191,1)","nombre":"No consta"},"despejado":{"color":"rgba(255,255,75,1)","nombre":"Despejado"},"niebla_intensa":{"color":"rgba(240,241,227,1)","nombre":"Niebla intensa"},"niebla_ligera":{"color":"rgba(255,255,204,1)","nombre":"Niebla ligera"},"lluvia_debil":{"color":"rgba(185,255,255,1)","nombre":"Lluvia débil"},"lluvia_fuerte":{"color":"rgba(117,171,225,1)","nombre":"Lluvia fuerte"},"granizando":{"color":"rgba(37,105,173,1)","nombre":"Granizando"},"nevando":{"color":"rgba(21,61,100,1)","nombre":"Nevando"},"viento_fuerte":{"color":"rgba(241,169,131,1)","nombre":"Viento fuerte"},"nublado":{"color":"rgba(217,217,217,1)","nombre":"Nublado"},"otro":{"color":"rgba(217,179,255,1)","nombre":"Otro"},"sin_datos":{"color":"rgba(151,151,151,1)","nombre":"Sin datos"}},"Tipo_dia":{"festivo":{"color":"rgba(255,124,128,1)","nombre":"Festivo"},"laborable":{"color":"rgba(190,233,173,1)","nombre":"Laborable"},"posterior_a_festivo":{"color":"rgba(217,179,255,1)","nombre":"Posterior a festivo"},"vispera_de_festivo":{"color":"rgba(255,190,125,1)","nombre":"Víspera de festivo"},"sin_datos":{"color":"rgba(151,151,151,1)","nombre":"Sin datos"}},"Factor_Concurrente_3":{"adelantamiento_antirreglamentario":{"color":"rgba(255,215,175,1)","nombre":"Adelantamiento antirreglamentario"},"alcohol":{"color":"rgba(74,154,42,1)","nombre":"Alcohol"},"alcohol_o_drogas":{"color":"rgba(190,233,173,1)","nombre":"Alcohol o drogas"},"averia_mecanica":{"color":"rgba(185,255,255,1)","nombre":"Avería mecánica"},"caida_de_carga_en_la_calzada":{"color":"rgba(255,219,105,1)","nombre":"Caída de carga en la calzada"},"cansancio_sueno_o_enfermedad":{"color":"rgba(245,235,255,1)","nombre":"Cansancio, sueño o enfermedad"},"conduccion_distraida_o_desatenta":{"color":"rgba(217,179,255,1)","nombre":"Conducción distraida o desatenta"},"conduccion_negligente":{"color":"rgba(255,55,60,1)","nombre":"Conducción negligente"},"conduccion_temeraria":{"color":"rgba(255,124,128,1)","nombre":"Conducción temeraria"},"distraccion":{"color":"rgba(217,179,255,1)","nombre":"Distracción"},"drogas":{"color":"rgba(190,233,173,1)","nombre":"Drogas"},"enfermedad":{"color":"rgba(21,61,100,1)","nombre":"Enfermedad"},"estado_o_condicion_de_la_senalizacion":{"color":"rgba(238,238,238,1)","nombre":"Estado o condición de la señalización"},"estado_o_condicion_de_la_via":{"color":"rgba(191,191,191,1)","nombre":"Estado o condición de la vía"},"giro_incorrecto":{"color":"rgba(254,218,227,1)","nombre":"Giro incorrecto"},"inexperiencia_del_conductor":{"color":"rgba(176,254,235,1)","nombre":"Inexperiencia del conductor"},"infraccion_a_norma_de_circulacion":{"color":"rgba(255,175,177,1)","nombre":"Infracción a norma de circulación"},"irrumpir_animal_en_calzada":{"color":"rgba(213,171,129,1)","nombre":"Irrumpir animal en calzada"},"irrumpir_peaton_en_calzada":{"color":"rgba(164,109,54,1)","nombre":"Irrumpir peatón en calzada"},"mal_estado_del_vehiculo":{"color":"rgba(117,171,225,1)","nombre":"Mal estado del vehículo"},"meteorologia_adversa":{"color":"rgba(37,105,173,1)","nombre":"Meteorología adversa"},"no_mantener_intervalo_de_seguridad":{"color":"rgba(255,182,109,1)","nombre":"No mantener intervalo de seguridad"},"no_respetar_prioridad":{"color":"rgba(255,153,51,1)","nombre":"No respetar prioridad"},"obstaculo_en_calzada":{"color":"rgba(255,219,105,1)","nombre":"Obstáculo en calzada"},"otro_factor":{"color":"rgba(255,193,255,1)","nombre":"Otro factor"},"presencia_de_un_obstaculo_en_la_calzada":{"color":"rgba(255,219,105,1)","nombre":"Presencia de un obstáculo en la calzada"},"sin_opinion_definida":{"color":"rgba(255,255,204,1)","nombre":"Sin opinión definida"},"tramo_en_obras":{"color":"rgba(255,255,75,1)","nombre":"Tramo en obras"},"velocidad_inadecuada":{"color":"rgba(190,125,255,1)","nombre":"Velocidad inadecuada"}},"Subtipo_Accidente":{"alcance":{"color":"rgba(255,224,193,1)","nombre":"Alcance"},"multiple_o_en_caravana":{"color":"rgba(255,153,51,1)","nombre":"Múltiple o en caravana"},"caida_en_calzada":{"color":"rgba(0,255,0,1)","nombre":"Caida en calzada"},"choque_con_arbol_o_poste":{"color":"rgba(255,225,255,1)","nombre":"Choque con árbol o poste"},"choque_con_arbol_o_poste_izqd":{"color":"rgba(215,107,205,1)","nombre":"Choque con árbol o poste izqd"},"choque_con_cuneta_o_bordillo":{"color":"rgba(37,105,173,1)","nombre":"Choque con cuneta o bordillo"},"choque_con_cuneta_o_bordillo_izqd":{"color":"rgba(21,61,100,1)","nombre":"Choque con cuneta o bordillo izqd"},"choque_con_murete_o_edificio":{"color":"rgba(190,233,173,1)","nombre":"Choque con murete o edificio"},"choque_con_murete_o_edificio_izqd":{"color":"rgba(74,154,42,1)","nombre":"Choque con murete o edificio izqd"},"otro_tipo_de_choque":{"color":"rgba(213,171,129,1)","nombre":"Otro tipo de choque"},"otro_tipo_de_choque_izqd":{"color":"rgba(164,109,54,1)","nombre":"Otro tipo de choque izqd"},"en_llano":{"color":"rgba(255,255,75,1)","nombre":"En llano"},"en_llano_izqd":{"color":"rgba(255,219,105,1)","nombre":"En llano izqd"},"con_vuelco":{"color":"rgba(255,175,177,1)","nombre":"Con vuelco"},"con_vuelco_izqd":{"color":"rgba(255,124,128,1)","nombre":"Con vuelco izqd"},"con_despenamiento":{"color":"rgba(245,235,255,1)","nombre":"Con despeñamiento"},"con_despenamiento_izqd":{"color":"rgba(217,179,255,1)","nombre":"Con despeñamiento izqd"},"otra_salida":{"color":"rgba(199,199,199,1)","nombre":"Otra salida"},"otra_salida_izqd":{"color":"rgba(138,138,138,1)","nombre":"Otra salida izqd"},"solo_salida_de_via":{"color":"rgba(204,56,186,1)","nombre":"Sólo Salida de Vía"},"despenamiento":{"color":"rgba(81,21,74,1)","nombre":"Despeñamiento"},"vuelco_en_la_calzada":{"color":"rgba(253,23,138,1)","nombre":"Vuelco en la calzada"},"otro":{"color":"rgba(0,0,255,1)","nombre":"Otro"},"frontal":{"color":"rgba(192,230,245,1)","nombre":"Frontal"},"frontolateral":{"color":"rgba(94,184,246,1)","nombre":"Frontolateral"},"lateral":{"color":"rgba(6,83,136,1)","nombre":"Lateral"},"obstaculo_o_elemento_de_la_via":{"color":"rgba(176,254,235,1)","nombre":"Obstáculo o elemento de la vía"},"otro_objeto_o_material":{"color":"rgba(15,241,214,1)","nombre":"Otro objeto o material"},"vehiculo_estacionado_averiado":{"color":"rgba(10,178,158,1)","nombre":"Vehículo estacionado/averiado"},"barrera_de_paso_a_nivel":{"color":"rgba(6,98,87,1)","nombre":"Barrera de paso a nivel"},"valla_de_defensa":{"color":"rgba(11,245,156,1)","nombre":"Valla de defensa"},"choque_contra_barrera_de_seguridad":{"color":"rgba(24,130,74,1)","nombre":"Choque contra barrera de seguridad"},"peaton_aislado":{"color":"rgba(139,208,0,1)","nombre":"Peatón aislado"},"peaton_aislado_o_en_grupo":{"color":"rgba(97,146,0,1)","nombre":"Peatón aislado o en grupo"},"peaton_sosteniendo_bicicleta":{"color":"rgba(194,255,71,1)","nombre":"Peatón sosteniendo bicicleta"},"peaton_reparando_vehiculo":{"color":"rgba(159,248,144,1)","nombre":"Peatón reparando vehículo"},"conductor_de_animales":{"color":"rgba(217,201,83,1)","nombre":"Conductor de animales"},"animal_conducido_o_rebano":{"color":"rgba(255,255,0,1)","nombre":"Animal conducido o rebaño"},"animales_sueltos":{"color":"rgba(255,255,159,1)","nombre":"Animales sueltos"}}}');

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
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/pruebas/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _leyenda_dinamica_src_runtime_widget_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../leyenda_dinamica/src/runtime/widget.tsx */ "./your-extensions/widgets/leyenda_dinamica/src/runtime/widget.tsx");




const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function Widget(props) {
    var _a, _b, _c, _d;
    const [appWidgets, setAppWidgets] = useState({});
    const [chartbarWidgetId, setChartWidgetId] = useState(null);
    const [chartWidgetsArray, setChartWidgetsArray] = useState([]);
    const [campo, setCampo] = useState(null);
    const [jmvs, setJmvs] = useState();
    const [ejecutar, setEjecutar] = useState(false);
    const [attUnique, setAttUnique] = useState(null);
    const refElemento = useRef(null);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const ejecutarChart = () => ({
        type: 'CHART_EJECUTADO'
    });
    function makeChartContadores() {
        const config = {
            uri: 'widgets/common/chart/',
            version: '1.14.0',
            label: 'Gráfico 21',
            config: {
                tools: {
                    cursorEnable: true
                },
                template: 'column',
                webChart: {
                    version: '7.3.1',
                    id: 'column',
                    type: 'chart',
                    dataSource: {
                        query: {
                            groupByFieldsForStatistics: [
                                'Año'
                            ],
                            outStatistics: [
                                {
                                    statisticType: 'sum',
                                    onStatisticField: 'NACV_n',
                                    outStatisticFieldName: 'sum_of_NACV_n'
                                },
                                {
                                    statisticType: 'sum',
                                    onStatisticField: 'V',
                                    outStatisticFieldName: 'sum_of_V'
                                },
                                {
                                    statisticType: 'sum',
                                    onStatisticField: 'NAT_n',
                                    outStatisticFieldName: 'sum_of_NAT_n'
                                }
                            ],
                            orderByFields: [
                                'Año ASC'
                            ],
                            where: ''
                        }
                    },
                    sortLabelsBy: 'yValue',
                    sortLabelsOrder: 'descending',
                    rotated: true,
                    series: [
                        {
                            type: 'barSeries',
                            id: 'NACV_n',
                            name: 'Suma NACV',
                            x: 'Año',
                            y: 'sum_of_NACV_n',
                            colorType: 'singleColor',
                            stackedType: 'sideBySide',
                            fillSymbol: {
                                type: 'esriSFS',
                                style: 'esriSFSSolid',
                                color: '#5E8FD0',
                                outline: {
                                    type: 'esriSLS',
                                    style: 'esriSLSSolid',
                                    color: 'var(--light-900)',
                                    width: 0
                                }
                            },
                            dataLabels: {
                                type: 'chartText',
                                visible: false,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-600)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 10,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'top'
                                }
                            },
                            rotated: false,
                            dataTooltipVisible: true
                        },
                        {
                            type: 'barSeries',
                            id: 'V',
                            name: 'Suma V',
                            x: 'Año',
                            y: 'sum_of_V',
                            colorType: 'singleColor',
                            stackedType: 'sideBySide',
                            fillSymbol: {
                                type: 'esriSFS',
                                style: 'esriSFSSolid',
                                color: '#77B484',
                                outline: {
                                    type: 'esriSLS',
                                    style: 'esriSLSSolid',
                                    color: 'var(--light-900)',
                                    width: 0
                                }
                            },
                            dataLabels: {
                                type: 'chartText',
                                visible: false,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-600)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 10,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'top'
                                }
                            },
                            rotated: false,
                            dataTooltipVisible: true
                        },
                        {
                            type: 'barSeries',
                            id: 'NAT_n',
                            name: 'Suma NAT',
                            x: 'Año',
                            y: 'sum_of_NAT_n',
                            colorType: 'singleColor',
                            stackedType: 'sideBySide',
                            fillSymbol: {
                                type: 'esriSFS',
                                style: 'esriSFSSolid',
                                color: '#DF6B35',
                                outline: {
                                    type: 'esriSLS',
                                    style: 'esriSLSSolid',
                                    color: 'var(--light-900)',
                                    width: 0
                                }
                            },
                            dataLabels: {
                                type: 'chartText',
                                visible: false,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-600)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 10,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'top'
                                }
                            },
                            rotated: false,
                            dataTooltipVisible: true
                        }
                    ],
                    axes: [
                        {
                            type: 'chartAxis',
                            visible: true,
                            isLogarithmic: false,
                            title: {
                                type: 'chartText',
                                visible: true,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-800)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 14,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'middle',
                                    text: 'Accidentes por año (NACV, V NAT)'
                                }
                            },
                            labels: {
                                type: 'chartText',
                                visible: true,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-500)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 14,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'middle'
                                }
                            },
                            valueFormat: {
                                type: 'category',
                                characterLimit: 11
                            },
                            lineSymbol: {
                                type: 'esriSLS',
                                style: 'esriSLSSolid',
                                color: 'var(--light-800)',
                                width: 1
                            },
                            grid: {
                                type: 'esriSLS',
                                style: 'esriSLSDash',
                                color: 'var(--light-300)',
                                width: 0
                            }
                        },
                        {
                            type: 'chartAxis',
                            visible: true,
                            isLogarithmic: false,
                            title: {
                                type: 'chartText',
                                visible: false,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-800)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 14,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'middle'
                                }
                            },
                            labels: {
                                type: 'chartText',
                                visible: true,
                                content: {
                                    type: 'esriTS',
                                    color: 'var(--dark-500)',
                                    font: {
                                        family: 'Avenir Next',
                                        size: 14,
                                        style: 'normal',
                                        weight: 'normal',
                                        decoration: 'none'
                                    },
                                    horizontalAlignment: 'center',
                                    verticalAlignment: 'middle'
                                }
                            },
                            valueFormat: {
                                type: 'number',
                                intlOptions: {
                                    style: 'decimal',
                                    useGrouping: true,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }
                            },
                            lineSymbol: {
                                type: 'esriSLS',
                                style: 'esriSLSSolid',
                                color: 'var(--light-800)',
                                width: 1
                            },
                            grid: {
                                type: 'esriSLS',
                                style: 'esriSLSDash',
                                color: 'var(--light-300)',
                                width: 0
                            }
                        }
                    ],
                    background: 'var(--white)',
                    title: {
                        type: 'chartText',
                        visible: true,
                        content: {
                            type: 'esriTS',
                            color: 'var(--black)',
                            font: {
                                family: 'Avenir Next',
                                size: 24,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            text: ''
                        }
                    },
                    footer: {
                        type: 'chartText',
                        visible: true,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-800)',
                            font: {
                                family: 'Avenir Next',
                                size: 14,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            text: ''
                        }
                    },
                    legend: {
                        type: 'chartLegend',
                        visible: true,
                        title: {
                            type: 'chartText',
                            visible: true,
                            content: {
                                type: 'esriTS',
                                color: 'var(--dark-800)',
                                font: {
                                    family: 'Avenir Next',
                                    size: 20,
                                    style: 'normal',
                                    weight: 'normal',
                                    decoration: 'none'
                                },
                                horizontalAlignment: 'center',
                                text: ''
                            }
                        },
                        body: {
                            type: 'esriTS',
                            color: 'var(--dark-800)',
                            font: {
                                family: 'Avenir Next',
                                size: 14,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            text: ''
                        },
                        position: 'left'
                    }
                }
            },
            id: 'widget_89',
            useDataSources: [
                {
                    dataSourceId: 'dataSource_1-AccidentesSeys_1709_5211',
                    mainDataSourceId: 'dataSource_1-AccidentesSeys_1709_5211',
                    rootDataSourceId: 'dataSource_1',
                    fields: [
                        'Año',
                        'NACV_n',
                        'V',
                        'NAT_n'
                    ]
                }
            ],
            outputDataSources: [
                'widget_89_ouput'
            ]
        };
        return config;
    }
    // ==================== makeChart con configbarras / configpie ====================
    function makeChart(id, groupBy, campo, values, idWidget) {
        const makeSeries = (values, groupBy, campo) => {
            const listSeries = [
                {
                    type: 'barSeries',
                    id: '',
                    name: '',
                    x: groupBy,
                    y: 'OBJECTID',
                    colorType: 'singleColor',
                    stackedType: 'stacked',
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: '#5E8FD0',
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-900)',
                            width: 0
                        }
                    },
                    dataLabels: {
                        type: 'chartText',
                        visible: false,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-600)',
                            font: {
                                family: 'Avenir Next',
                                size: 10,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            verticalAlignment: 'top'
                        }
                    },
                    displayPercentageOnDataLabel: true,
                    displayNumericValueOnDataLabel: false,
                    dataLabelsOffset: 5,
                    rotated: false,
                    dataTooltipVisible: true,
                    query: {
                        where: `${campo}=''`
                    }
                }
            ];
            for (const value in values) {
                const series = {
                    type: 'barSeries',
                    id: value,
                    name: value,
                    x: groupBy,
                    y: 'OBJECTID',
                    colorType: 'singleColor',
                    stackedType: 'stacked',
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-900)',
                            width: 0
                        }
                    },
                    dataLabels: {
                        type: 'chartText',
                        visible: false,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-600)',
                            font: {
                                family: 'Avenir Next',
                                size: 10,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            verticalAlignment: 'top'
                        }
                    },
                    rotated: false,
                    dataTooltipVisible: true,
                    query: {
                        where: `${campo}='${value}'`
                    }
                };
                listSeries.push(series);
            }
            const lastElem = {
                type: 'barSeries',
                id: '__other-split-value__',
                name: 'Undefined',
                x: groupBy,
                y: 'OBJECTID',
                colorType: 'singleColor',
                stackedType: 'stacked',
                fillSymbol: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: '#D6D6D6',
                    outline: {
                        type: 'esriSLS',
                        style: 'esriSLSSolid',
                        color: 'var(--light-900)',
                        width: 0
                    }
                },
                dataLabels: {
                    type: 'chartText',
                    visible: false,
                    content: {
                        type: 'esriTS',
                        color: 'var(--dark-600)',
                        font: {
                            family: 'Avenir Next',
                            size: 10,
                            style: 'normal',
                            weight: 'normal',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        verticalAlignment: 'top'
                    }
                },
                rotated: false,
                dataTooltipVisible: true,
                query: {
                    where: "Tipo_accidente='__other-split-value__'"
                }
            };
            listSeries.push(lastElem);
            return listSeries;
        };
        // Pie normal (quesitos pequeños)
        const makeSeriesPie = (campo, values) => {
            const listSeries = [
                {
                    type: 'pieSeries',
                    colorType: 'singleColor',
                    id: 'OBJECTID',
                    name: 'OBJECTID',
                    x: campo,
                    y: 'count_of_OBJECTID',
                    innerRadius: 0,
                    // 👉 empezamos a "y cuarto" (3 en punto)
                    startAngle: -90,
                    endAngle: 270,
                    displayNumericValueOnDataLabel: true,
                    displayPercentageOnDataLabel: false,
                    displayNumericValueOnTooltip: true,
                    displayPercentageOnTooltip: true,
                    dataLabelsOffset: 2,
                    sliceGrouping: {
                        sliceId: '__other-slice__',
                        percentageThreshold: 0,
                        label: 'Other',
                        fillSymbol: {
                            type: 'esriSFS',
                            style: 'esriSFSSolid',
                            color: '#D6D6D6',
                            outline: {
                                type: 'esriSLS',
                                style: 'esriSLSSolid',
                                color: 'var(--light-100)',
                                width: 0
                            }
                        }
                    },
                    numericValueFormat: {
                        type: 'number',
                        intlOptions: {
                            style: 'decimal',
                            useGrouping: true,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 3
                        }
                    },
                    percentValueFormat: {
                        type: 'number',
                        intlOptions: {
                            style: 'percent',
                            notation: 'standard',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 3
                        }
                    },
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: '#D6D6D6',
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-100)',
                            width: 0
                        }
                    },
                    dataLabels: {
                        type: 'chartText',
                        visible: false,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-600)',
                            font: {
                                family: 'Avenir Next',
                                size: 8,
                                style: 'normal',
                                weight: 'bold',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            verticalAlignment: 'middle',
                            wrap: true,
                            maxWidth: 100
                        }
                    },
                    dataTooltipVisible: true,
                    query: {
                        where: `${campo}=''`
                    },
                    slices: [
                        {
                            sliceId: '',
                            label: '',
                            fillSymbol: {
                                type: 'esriSFS',
                                style: 'esriSFSSolid',
                                color: '#5E8FD0',
                                outline: {
                                    type: 'esriSLS',
                                    style: 'esriSLSSolid',
                                    color: 'var(--light-100)',
                                    width: 0
                                }
                            }
                        }
                    ]
                }
            ];
            for (const value in values) {
                const slice = {
                    sliceId: value,
                    label: value,
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-100)',
                            width: 0
                        }
                    }
                };
                listSeries[0].slices.push(slice);
            }
            return listSeries;
        };
        // Pie grande (widget_55)
        const makeSeriesPieMax = (campo, values) => {
            const listSeriesMax = [
                {
                    type: 'pieSeries',
                    colorType: 'singleColor',
                    id: 'OBJECTID',
                    name: 'OBJECTID',
                    x: campo,
                    y: 'count_of_OBJECTID',
                    innerRadius: 0,
                    startAngle: 0,
                    endAngle: 360,
                    displayNumericValueOnDataLabel: true,
                    displayPercentageOnDataLabel: true,
                    displayNumericValueOnTooltip: true,
                    displayPercentageOnTooltip: true,
                    dataLabelsOffset: -100,
                    sliceGrouping: {
                        sliceId: '__other-slice__',
                        percentageThreshold: 0,
                        label: 'Other',
                        fillSymbol: {
                            type: 'esriSFS',
                            style: 'esriSFSSolid',
                            color: '#D6D6D6',
                            outline: {
                                type: 'esriSLS',
                                style: 'esriSLSSolid',
                                color: 'var(--light-100)',
                                width: 0
                            }
                        }
                    },
                    numericValueFormat: {
                        type: 'number',
                        intlOptions: {
                            style: 'decimal',
                            useGrouping: true,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 1
                        }
                    },
                    percentValueFormat: {
                        type: 'number',
                        intlOptions: {
                            style: 'percent',
                            notation: 'standard',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 1
                        }
                    },
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: '#D6D6D6',
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-100)',
                            width: 0
                        }
                    },
                    dataLabels: {
                        type: 'chartText',
                        visible: true,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-600)',
                            font: {
                                family: 'Avenir Next',
                                size: 13,
                                style: 'normal',
                                weight: 'bold',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            verticalAlignment: 'middle',
                            wrap: true,
                            maxWidth: 100
                        }
                    },
                    dataTooltipVisible: true,
                    query: {
                        where: `${campo}=''`
                    },
                    slices: [
                        {
                            sliceId: '',
                            label: '',
                            fillSymbol: {
                                type: 'esriSFS',
                                style: 'esriSFSSolid',
                                color: '#5E8FD0',
                                outline: {
                                    type: 'esriSLS',
                                    style: 'esriSLSSolid',
                                    color: 'var(--light-100)',
                                    width: 0
                                }
                            }
                        }
                    ]
                }
            ];
            for (const value in values) {
                const slice = {
                    sliceId: value,
                    label: value,
                    fillSymbol: {
                        type: 'esriSFS',
                        style: 'esriSFSSolid',
                        color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
                        outline: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: 'var(--light-100)',
                            width: 0
                        }
                    }
                };
                listSeriesMax[0].slices.push(slice);
            }
            return listSeriesMax;
        };
        // =================== elegir series ===================
        let series;
        if (id === 'column') {
            series = makeSeries(values, groupBy, campo);
        }
        else {
            if (idWidget === 'widget_55') {
                series = makeSeriesPieMax(campo, values);
            }
            else {
                series = makeSeriesPie(campo, values);
            }
        }
        // =================== partes comunes ===================
        const commonAxes = [
            {
                type: 'chartAxis',
                visible: true,
                isLogarithmic: false,
                title: {
                    type: 'chartText',
                    visible: false,
                    content: {
                        type: 'esriTS',
                        color: 'var(--dark-800)',
                        font: {
                            family: 'Avenir Next',
                            size: 14,
                            style: 'normal',
                            weight: 'normal',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        verticalAlignment: 'middle'
                    }
                },
                labels: {
                    type: 'chartText',
                    visible: true,
                    content: {
                        type: 'esriTS',
                        color: 'var(--dark-500)',
                        font: {
                            family: 'Avenir Next',
                            size: 14,
                            style: 'normal',
                            weight: 'normal',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        verticalAlignment: 'middle'
                    }
                },
                valueFormat: {
                    type: 'category',
                    characterLimit: 11
                },
                lineSymbol: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: 'var(--light-800)',
                    width: 1
                },
                grid: {
                    type: 'esriSLS',
                    style: 'esriSLSDash',
                    color: 'var(--light-300)',
                    width: 0
                }
            },
            {
                type: 'chartAxis',
                visible: true,
                isLogarithmic: false,
                title: {
                    type: 'chartText',
                    visible: false,
                    content: {
                        type: 'esriTS',
                        color: 'var(--dark-800)',
                        font: {
                            family: 'Avenir Next',
                            size: 14,
                            style: 'normal',
                            weight: 'normal',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        verticalAlignment: 'middle'
                    }
                },
                labels: {
                    type: 'chartText',
                    visible: true,
                    content: {
                        type: 'esriTS',
                        color: 'var(--dark-500)',
                        font: {
                            family: 'Avenir Next',
                            size: 14,
                            style: 'normal',
                            weight: 'normal',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        verticalAlignment: 'middle'
                    }
                },
                valueFormat: {
                    type: 'number',
                    intlOptions: {
                        style: 'decimal',
                        useGrouping: true,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }
                },
                lineSymbol: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: 'var(--light-800)',
                    width: 1
                },
                grid: {
                    type: 'esriSLS',
                    style: 'esriSLSDash',
                    color: 'var(--light-300)',
                    width: 0
                }
            }
        ];
        const commonFooter = {
            type: 'chartText',
            visible: true,
            content: {
                type: 'esriTS',
                color: 'var(--dark-800)',
                font: {
                    family: 'Avenir Next',
                    size: 14,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                },
                horizontalAlignment: 'center',
                text: ''
            }
        };
        const commonTitle = {
            type: 'chartText',
            visible: true,
            content: {
                type: 'esriTS',
                color: 'var(--black)',
                font: {
                    family: 'Avenir Next',
                    size: 24,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                },
                horizontalAlignment: 'center',
                text: ''
            }
        };
        // =================== CONFIG BARRAS ===================
        const configbarras = {
            tools: {
                cursorEnable: true
            },
            template: id,
            webChart: {
                version: '7.3.1',
                id: id,
                type: 'chart',
                axes: commonAxes,
                background: 'var(--white)',
                dataSource: {
                    query: {
                        groupByFieldsForStatistics: [
                            groupBy
                        ],
                        outStatistics: [
                            {
                                statisticType: 'count',
                                onStatisticField: 'OBJECTID',
                                outStatisticFieldName: 'count_of_OBJECTID'
                            }
                        ],
                        orderByFields: [
                            `${groupBy} ASC`
                        ],
                        where: `${campo}={value}`
                    }
                },
                footer: commonFooter,
                legend: {
                    type: 'chartLegend',
                    visible: false,
                    layout: 'vertical',
                    labelMaxWidth: 200,
                    title: {
                        type: 'chartText',
                        visible: true,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-800)',
                            font: {
                                family: 'Avenir Next',
                                size: 40,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            text: ''
                        }
                    },
                    body: {
                        type: 'esriTS',
                        color: 'var(--dark-800)',
                        font: {
                            family: 'Avenir Next',
                            size: 9,
                            style: 'normal',
                            weight: 'bold',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        text: ''
                    },
                    position: 'right'
                },
                sortLabelsBy: 'originalValue',
                sortLabelsOrder: 'ascending',
                rotated: false,
                series: series,
                title: commonTitle
            }
        };
        // =================== CONFIG PIE ===================
        const configpie = {
            tools: {
                cursorEnable: true
            },
            template: id,
            webChart: {
                version: '7.3.1',
                id: id,
                type: 'chart',
                axes: commonAxes,
                background: 'var(--white)',
                dataSource: {
                    query: {
                        groupByFieldsForStatistics: [
                            groupBy
                        ],
                        outStatistics: [
                            {
                                statisticType: 'count',
                                onStatisticField: 'OBJECTID',
                                outStatisticFieldName: 'count_of_OBJECTID'
                            }
                        ],
                        // 👉 ordenar quesitos de mayor a menor porcentaje
                        orderByFields: [
                            'count_of_OBJECTID DESC'
                        ],
                        where: ''
                    }
                },
                footer: commonFooter,
                legend: {
                    type: 'chartLegend',
                    visible: true,
                    layout: 'vertical',
                    labelMaxWidth: 200,
                    title: {
                        type: 'chartText',
                        visible: true,
                        content: {
                            type: 'esriTS',
                            color: 'var(--dark-800)',
                            font: {
                                family: 'Avenir Next',
                                size: 40,
                                style: 'normal',
                                weight: 'normal',
                                decoration: 'none'
                            },
                            horizontalAlignment: 'center',
                            text: ''
                        }
                    },
                    body: {
                        type: 'esriTS',
                        color: 'var(--dark-800)',
                        font: {
                            family: 'Avenir Next',
                            size: 9,
                            style: 'normal',
                            weight: 'bold',
                            decoration: 'none'
                        },
                        horizontalAlignment: 'center',
                        text: ''
                    },
                    position: 'right'
                },
                sortLabelsBy: 'originalValue',
                sortLabelsOrder: 'descending',
                rotated: false,
                series: series,
                title: commonTitle
            }
        };
        // 👉 devolvemos la config correcta
        return id === 'column' ? configbarras : configpie;
    }
    const handleUpdate = (newState) => {
        setCampo(newState);
    };
    const handleRun = (run) => {
        setEjecutar(run);
    };
    const handleAtt = (att) => {
        setAttUnique(att);
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            setJmvs(jmv);
        }
    };
    // Aáde props globales cuando se pulsa Ejecutar
    useEffect(() => {
        if (jmvs) {
            const appConf = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            appConf.lastFilter = jmvs.view.map.layers.items[17].definitionExpression;
            if (ejecutar) {
                appConf.counter = appConf.counter ? appConf.counter + 1 : 1;
            }
            dispatch(ejecutarChart());
        }
    }, [ejecutar]);
    useEffect(() => {
        if (attUnique && ejecutar) {
            const groupByWidgets = {
                widget_2: campo,
                widget_4: 'Año',
                widget_5: 'Mes',
                widget_6: 'Dia',
                widget_7: 'Mes_Año',
                widget_9: 'PK',
                widget_10: 'Kilometro',
                widget_102: 'Año',
                widget_58: 'Mes',
                widget_85: 'Dia',
                widget_60: 'Mes_Año',
                widget_68: 'PK',
                widget_67: 'Kilometro',
                widget_55: campo,
                widget_132: 'Año',
                widget_168: campo,
                widget_159: 'Año',
                widget_160: 'Mes',
                widget_161: 'Dia',
                widget_162: 'Mes_Año',
                widget_172: 'Kilometro',
                widget_173: 'PK'
            };
            for (const widget in chartWidgetsArray) {
                if (chartWidgetsArray[widget].id === 'widget_2') {
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetConfigLoaded(chartWidgetsArray[widget].id, makeChart('pie', groupByWidgets[chartWidgetsArray[widget].id], campo, attUnique, chartWidgetsArray[widget].id)));
                }
                else if (chartWidgetsArray[widget].id === 'widget_89') {
                    makeChartContadores();
                }
                else {
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetConfigLoaded(chartWidgetsArray[widget].id, makeChart('column', groupByWidgets[chartWidgetsArray[widget].id], campo, attUnique, null)));
                }
                // Añade la simbología al gráfico de quesito grande
                setChartCategoryAndColors('widget_168', campo, attUnique);
            }
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            appConfig.campo = campo;
            setEjecutar(false);
        }
    }, [campo, attUnique]);
    // Normaliza attUnique a ColorMap (string->CSS color)
    function normalizeAttUnique(attUnique) {
        const toCss = (v) => {
            if (typeof v === 'string')
                return v;
            if (Array.isArray(v) && v.length >= 3) {
                const [r, g, b] = v;
                return `rgb(${r}, ${g}, ${b})`;
            }
            return undefined;
        };
        const out = {};
        for (const [k, v] of Object.entries(attUnique || {})) {
            const c = toCss(v);
            if (c)
                out[k] = c;
        }
        return out;
    }
    function setChartCategoryAndColors(widgetId, fieldName, attUnique) {
        const store = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)();
        // 1) mapa base valor -> color desde renderer
        const baseColorMap = normalizeAttUnique(attUnique); // aquí deben venir los colores “buenos”
        console.log('baseColorMap', baseColorMap);
        // 2) TODOS los valores posibles:
        //    - array que tengas guardado en window.attUnique (23 valores)
        //    - más las claves del objeto de colores (por si difieren)
        const fromWin = Array.isArray(window.attUnique)
            ? window.attUnique.map((s) => String(s))
            : [];
        const fromAtt = Object.keys(attUnique || {});
        const fromBase = Object.keys(baseColorMap || {});
        const allValues = Array.from(new Set([...fromWin, ...fromAtt, ...fromBase].map(s => String(s))));
        // 3) seleccionados (3 en tu ejemplo)
        const seleccionados = window.valoresAgg || [];
        const setSel = new Set(seleccionados.map(s => String(s)));
        const GRIS_RESTO = '#dcdcdc';
        const colorMapFinal = {};
        // helper: busca color en baseColorMap aunque cambien espacios/mayúsculas
        const findRendererColor = (name) => {
            const trimmed = name.trim().toLowerCase();
            const key = Object.keys(baseColorMap).find(k => k.trim().toLowerCase() === trimmed);
            return key ? baseColorMap[key] : undefined;
        };
        // 4) construir el mapa final recorriendo TODAS las categorías
        allValues.forEach(raw => {
            const nombre = String(raw);
            const rendererColor = findRendererColor(nombre);
            if (!setSel.size || setSel.has(nombre)) {
                // sin selección → todos normales
                // con selección → solo éstos con color original
                colorMapFinal[nombre] = rendererColor || 'GRIS_RESTO'; // fallback visible
            }
            else {
                // no seleccionados → gris claro
                colorMapFinal[nombre] = GRIS_RESTO;
            }
        });
        console.log('Colores gráfico grande', colorMapFinal);
        window.SimbologiaSeleccionada = fieldName;
        window.valoresSeleccionados = allValues;
        store.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(widgetId, 'categoryFieldOverride', fieldName));
        store.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(widgetId, 'categoryColorsOverride', colorMapFinal));
        store.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(widgetId, 'categoryValuesOverride', allValues));
    }
    useEffect(() => {
        const widgets = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets;
        setAppWidgets(widgets);
        setChartWidgetId('widget_4');
    }, []);
    // Trigger externo para sincronizar (ejemplo Tipo_accidente)
    useEffect(() => {
        var _a, _b;
        const campoExt = (_a = props === null || props === void 0 ? void 0 : props.stateProps) === null || _a === void 0 ? void 0 : _a.campo;
        const trig = (_b = props === null || props === void 0 ? void 0 : props.stateProps) === null || _b === void 0 ? void 0 : _b.applyClusterChartsTrigger;
        if (campoExt === 'Tipo_accidente' && trig) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(props.id, 'applyClusterChartsTrigger', 0));
        }
    }, [(_a = props === null || props === void 0 ? void 0 : props.stateProps) === null || _a === void 0 ? void 0 : _a.campo, (_b = props === null || props === void 0 ? void 0 : props.stateProps) === null || _b === void 0 ? void 0 : _b.applyClusterChartsTrigger]);
    useEffect(() => {
        if (appWidgets) {
            const widgetsArray = Object.values(appWidgets);
            setChartWidgetsArray(widgetsArray.filter((w) => w.uri === 'widgets/common/chart/'));
        }
    }, [appWidgets]);
    function handleRestart() {
        try {
            setCampo(null);
            setEjecutar(false);
            setAttUnique(null);
        }
        catch (e) {
            console.warn('[widget_14] handleRestart error:', e);
        }
    }
    // Reinicio completo solicitado desde fuera
    useEffect(() => {
        var _a;
        const trig = (_a = props === null || props === void 0 ? void 0 : props.stateProps) === null || _a === void 0 ? void 0 : _a.restartTrigger;
        if (!trig)
            return;
        handleRestart();
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(props.id, 'restartTrigger', 0));
    }, [(_c = props === null || props === void 0 ? void 0 : props.stateProps) === null || _c === void 0 ? void 0 : _c.restartTrigger]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_d = props.useMapWidgetIds) === null || _d === void 0 ? void 0 : _d[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_leyenda_dinamica_src_runtime_widget_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { onUpdate: handleUpdate, onRun: handleRun, onAtt: handleAtt })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcnVlYmFzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLGtEQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDO1FBQ3BCLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDYixNQUFNLElBQUksR0FBRyxNQUFDLEtBQWEsYUFBYixLQUFLLHVCQUFMLEtBQUssQ0FBVSxVQUFVLDBDQUFFLGNBQWM7UUFDdkQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFNO1FBRWpCLGFBQWEsRUFBRTtRQUVmLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQ3BCLGlEQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FDaEU7SUFDSCxDQUFDLEVBQUUsQ0FBQyxNQUFDLEtBQWEsYUFBYixLQUFLLHVCQUFMLEtBQUssQ0FBVSxVQUFVLDBDQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRWhELE9BQU8sQ0FDTDtRQUNHLEtBQUssQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQzlELDJEQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsR0FBSSxDQUNsSDtRQUNEO1lBQ0UsMkRBQUMsZ0ZBQVMsb0JBQUssS0FBSyxJQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxJQUFJLENBQ2hGLENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZURpc3BhdGNoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlUmVkdXhDb250ZXh0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvYmF0Y2guanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGV5ZW5kYV9kaW5hbWljYS9zcmMvcnVudGltZS93aWRnZXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9sZXllbmRhX2RpbmFtaWNhL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVuZGVyZXJzL1VuaXF1ZVZhbHVlUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc21hcnRNYXBwaW5nL3JlbmRlcmVycy9waWVDaGFydFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3BydWViYXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xuY29uc3QgZ1QgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOlxuLyogZmFsbCBiYWNrIHRvIGEgcGVyLW1vZHVsZSBzY29wZSAocHJlLTguMSBiZWhhdmlvdXIpIGlmIGBnbG9iYWxUaGlzYCBpcyBub3QgYXZhaWxhYmxlICovXG57fTtcblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgdmFyIF9nVCRDb250ZXh0S2V5O1xuXG4gIGlmICghUmVhY3QuY3JlYXRlQ29udGV4dCkgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gKF9nVCRDb250ZXh0S2V5ID0gZ1RbQ29udGV4dEtleV0pICE9IG51bGwgPyBfZ1QkQ29udGV4dEtleSA6IGdUW0NvbnRleHRLZXldID0gbmV3IE1hcCgpO1xuICBsZXQgcmVhbENvbnRleHQgPSBjb250ZXh0TWFwLmdldChSZWFjdC5jcmVhdGVDb250ZXh0KTtcblxuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJlYWxDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JlYWN0UmVkdXgnO1xuICAgIH1cblxuICAgIGNvbnRleHRNYXAuc2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQsIHJlYWxDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IFJlYWN0UmVkdXhDb250ZXh0ID0gLyojX19QVVJFX18qL2dldENvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCB7IGNyZWF0ZVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSAnb25jZScsXG4gIG5vb3BDaGVjayA9ICdvbmNlJ1xufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlOiBzZXJ2ZXJTdGF0ZSA/ICgpID0+IHNlcnZlclN0YXRlIDogdW5kZWZpbmVkLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBub29wQ2hlY2tcbiAgICB9O1xuICB9LCBbc3RvcmUsIHNlcnZlclN0YXRlLCBzdGFiaWxpdHlDaGVjaywgbm9vcENoZWNrXSk7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN0b3JlLmdldFN0YXRlKCksIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzdWJzY3JpcHRpb25cbiAgICB9ID0gY29udGV4dFZhbHVlO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDsgLy8gQHRzLWlnbm9yZSAnQW55QWN0aW9uJyBpcyBhc3NpZ25hYmxlIHRvIHRoZSBjb25zdHJhaW50IG9mIHR5cGUgJ0EnLCBidXQgJ0EnIGNvdWxkIGJlIGluc3RhbnRpYXRlZCB3aXRoIGEgZGlmZmVyZW50IHN1YnR5cGVcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wicmVhY3RSZWR1eEZvcndhcmRlZFJlZlwiXTtcblxuLyogZXNsaW50LWRpc2FibGUgdmFsaWQtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUsIGlzQ29udGV4dENvbnN1bWVyIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi4vY29ubmVjdC9zZWxlY3RvckZhY3RvcnknO1xuaW1wb3J0IHsgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeSB9IGZyb20gJy4uL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCB7IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkgfSBmcm9tICcuLi9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcyc7XG5pbXBvcnQgeyBtZXJnZVByb3BzRmFjdG9yeSB9IGZyb20gJy4uL2Nvbm5lY3QvbWVyZ2VQcm9wcyc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgeyBub3RJbml0aWFsaXplZCB9IGZyb20gJy4uL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlJztcbmxldCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVDb25uZWN0ID0gZm4gPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZuO1xufTsgLy8gRGVmaW5lIHNvbWUgY29uc3RhbnQgYXJyYXlzIGp1c3QgdG8gYXZvaWQgcmUtY3JlYXRpbmcgdGhlc2VcblxuY29uc3QgRU1QVFlfQVJSQVkgPSBbbnVsbCwgMF07XG5jb25zdCBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07IC8vIEF0dGVtcHRzIHRvIHN0cmluZ2lmeSB3aGF0ZXZlciBub3QtcmVhbGx5LWEtY29tcG9uZW50IHZhbHVlIHdlIHdlcmUgZ2l2ZW5cbi8vIGZvciBsb2dnaW5nIGluIGFuIGVycm9yIG1lc3NhZ2VcblxuY29uc3Qgc3RyaW5naWZ5Q29tcG9uZW50ID0gQ29tcCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuXG4vLyBUaGlzIGlzIFwianVzdFwiIGEgYHVzZUxheW91dEVmZmVjdGAsIGJ1dCB3aXRoIHR3byBtb2RpZmljYXRpb25zOlxuLy8gLSB3ZSBuZWVkIHRvIGZhbGwgYmFjayB0byBgdXNlRWZmZWN0YCBpbiBTU1IgdG8gYXZvaWQgYW5ub3lpbmcgd2FybmluZ3Ncbi8vIC0gd2UgZXh0cmFjdCB0aGlzIHRvIGEgc2VwYXJhdGUgZnVuY3Rpb24gdG8gYXZvaWQgY2xvc2luZyBvdmVyIHZhbHVlc1xuLy8gICBhbmQgY2F1c2luZyBtZW1vcnkgbGVha3NcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufSAvLyBFZmZlY3QgY2FsbGJhY2ssIGV4dHJhY3RlZDogYXNzaWduIHRoZSBsYXRlc3QgcHJvcHMgdmFsdWVzIHRvIHJlZnMgZm9yIGxhdGVyIHVzYWdlXG5cblxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgLy8gYWN0dWFsQ2hpbGRQcm9wczogdW5rbm93bixcbmNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgLy8gV2Ugd2FudCB0byBjYXB0dXJlIHRoZSB3cmFwcGVyIHByb3BzIGFuZCBjaGlsZCBwcm9wcyB3ZSB1c2VkIGZvciBsYXRlciBjb21wYXJpc29uc1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTsgLy8gSWYgdGhlIHJlbmRlciB3YXMgZnJvbSBhIHN0b3JlIHVwZGF0ZSwgY2xlYXIgb3V0IHRoYXQgcmVmZXJlbmNlIGFuZCBjYXNjYWRlIHRoZSBzdWJzY3JpYmVyIHVwZGF0ZVxuXG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufSAvLyBFZmZlY3QgY2FsbGJhY2ssIGV4dHJhY3RlZDogc3Vic2NyaWJlIHRvIHRoZSBSZWR1eCBzdG9yZSBvciBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvcixcbi8vIGNoZWNrIGZvciB1cGRhdGVzIGFmdGVyIGRpc3BhdGNoZWQgYWN0aW9ucywgYW5kIHRyaWdnZXIgcmUtcmVuZGVycy5cblxuXG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgLy8gZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8YW55PixcbmFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcikge1xuICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuICgpID0+IHt9OyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRPRE8gV2UncmUgY3VycmVudGx5IGNhbGxpbmcgZ2V0U3RhdGUgb3Vyc2VsdmVzIGhlcmUsIHJhdGhlciB0aGFuIGxldHRpbmcgYHVTRVNgIGRvIGl0XG5cblxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBBY3R1YWxseSBydW4gdGhlIHNlbGVjdG9yIHdpdGggdGhlIG1vc3QgcmVjZW50IHN0b3JlIHN0YXRlIGFuZCB3cmFwcGVyIHByb3BzXG4gICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlXG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKGxhdGVzdFN0b3JlU3RhdGUsIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH0gLy8gSWYgdGhlIGNoaWxkIHByb3BzIGhhdmVuJ3QgY2hhbmdlZCwgbm90aGluZyB0byBkbyBoZXJlIC0gY2FzY2FkZSB0aGUgc3Vic2NyaXB0aW9uIHVwZGF0ZVxuXG5cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2F2ZSByZWZlcmVuY2VzIHRvIHRoZSBuZXcgY2hpbGQgcHJvcHMuICBOb3RlIHRoYXQgd2UgdHJhY2sgdGhlIFwiY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGVcIlxuICAgICAgLy8gYXMgYSByZWYgaW5zdGVhZCBvZiBhIHVzZVN0YXRlL3VzZVJlZHVjZXIgYmVjYXVzZSB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSBpZiB0aGF0IHZhbHVlIGhhc1xuICAgICAgLy8gYmVlbiBwcm9jZXNzZWQuICBJZiB0aGlzIHdlbnQgaW50byB1c2VTdGF0ZS91c2VSZWR1Y2VyLCB3ZSBjb3VsZG4ndCBjbGVhciBvdXQgdGhlIHZhbHVlIHdpdGhvdXRcbiAgICAgIC8vIGZvcmNpbmcgYW5vdGhlciByZS1yZW5kZXIsIHdoaWNoIHdlIGRvbid0IHdhbnQuXG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTsgLy8gVE9ETyBUaGlzIGlzIGhhY2t5IGFuZCBub3QgaG93IGB1U0VTYCBpcyBtZWFudCB0byBiZSB1c2VkXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBSZWFjdCBgdXNlU3luY0V4dGVybmFsU3RvcmVgIHN1YnNjcmliZXJcblxuICAgICAgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9OyAvLyBBY3R1YWxseSBzdWJzY3JpYmUgdG8gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yIChvciBzdG9yZSlcblxuXG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7IC8vIFB1bGwgZGF0YSBmcm9tIHRoZSBzdG9yZSBhZnRlciBmaXJzdCByZW5kZXIgaW4gY2FzZSB0aGUgc3RvcmUgaGFzXG4gIC8vIGNoYW5nZWQgc2luY2Ugd2UgYmVnYW4uXG5cbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG5cbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgd2UgY2F1Z2h0IGFuIGVycm9yIGR1ZSB0byBhIGJhZCBtYXBTdGF0ZSBmdW5jdGlvbiwgYnV0IHRoZVxuICAgICAgLy8gcGFyZW50IHJlLXJlbmRlcmVkIHdpdGhvdXQgdGhpcyBjb21wb25lbnQgYW5kIHdlJ3JlIGFib3V0IHRvIHVubW91bnQuXG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gYXMgbG9uZyBhcyB3ZSBkbyB0b3AtZG93biBzdWJzY3JpcHRpb25zIGNvcnJlY3RseSwgYnV0XG4gICAgICAvLyBpZiB3ZSBldmVyIGRvIHRob3NlIHdyb25nLCB0aGlzIHRocm93IHdpbGwgc3VyZmFjZSB0aGUgZXJyb3IgaW4gb3VyIHRlc3RzLlxuICAgICAgLy8gSW4gdGhhdCBjYXNlLCB0aHJvdyB0aGUgZXJyb3IgZnJvbSBoZXJlIHNvIGl0IGRvZXNuJ3QgZ2V0IGxvc3QuXG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59IC8vIFJlZHVjZXIgaW5pdGlhbCBzdGF0ZSBjcmVhdGlvbiBmb3Igb3VyIHVwZGF0ZSByZWR1Y2VyXG5cblxuY29uc3QgaW5pdFN0YXRlVXBkYXRlcyA9ICgpID0+IEVNUFRZX0FSUkFZO1xuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuLyoqXHJcbiAqIEluZmVycyB0aGUgdHlwZSBvZiBwcm9wcyB0aGF0IGEgY29ubmVjdG9yIHdpbGwgaW5qZWN0IGludG8gYSBjb21wb25lbnQuXHJcbiAqL1xuXG5cbmxldCBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG4vKipcclxuICogQ29ubmVjdHMgYSBSZWFjdCBjb21wb25lbnQgdG8gYSBSZWR1eCBzdG9yZS5cclxuICpcclxuICogLSBXaXRob3V0IGFyZ3VtZW50cywganVzdCB3cmFwcyB0aGUgY29tcG9uZW50LCB3aXRob3V0IGNoYW5naW5nIHRoZSBiZWhhdmlvciAvIHByb3BzXHJcbiAqXHJcbiAqIC0gSWYgMiBwYXJhbXMgYXJlIHBhc3NlZCAoM3JkIHBhcmFtLCBtZXJnZVByb3BzLCBpcyBza2lwcGVkKSwgZGVmYXVsdCBiZWhhdmlvclxyXG4gKiBpcyB0byBvdmVycmlkZSBvd25Qcm9wcyAoYXMgc3RhdGVkIGluIHRoZSBkb2NzKSwgc28gd2hhdCByZW1haW5zIGlzIGV2ZXJ5dGhpbmcgdGhhdCdzXHJcbiAqIG5vdCBhIHN0YXRlIG9yIGRpc3BhdGNoIHByb3BcclxuICpcclxuICogLSBXaGVuIDNyZCBwYXJhbSBpcyBwYXNzZWQsIHdlIGRvbid0IGtub3cgaWYgb3duUHJvcHMgcHJvcGFnYXRlIGFuZCB3aGV0aGVyIHRoZXlcclxuICogc2hvdWxkIGJlIHZhbGlkIGNvbXBvbmVudCBwcm9wcywgYmVjYXVzZSBpdCBkZXBlbmRzIG9uIG1lcmdlUHJvcHMgaW1wbGVtZW50YXRpb24uXHJcbiAqIEFzIHN1Y2gsIGl0IGlzIHRoZSB1c2VyJ3MgcmVzcG9uc2liaWxpdHkgdG8gZXh0ZW5kIG93blByb3BzIGludGVyZmFjZSBmcm9tIHN0YXRlIG9yXHJcbiAqIGRpc3BhdGNoIHByb3BzIG9yIGJvdGggd2hlbiBhcHBsaWNhYmxlXHJcbiAqXHJcbiAqIEBwYXJhbSBtYXBTdGF0ZVRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IGV4dHJhY3RzIHZhbHVlcyBmcm9tIHN0YXRlXHJcbiAqIEBwYXJhbSBtYXBEaXNwYXRjaFRvUHJvcHMgU2V0dXAgZm9yIGRpc3BhdGNoaW5nIGFjdGlvbnNcclxuICogQHBhcmFtIG1lcmdlUHJvcHMgT3B0aW9uYWwgY2FsbGJhY2sgdG8gbWVyZ2Ugc3RhdGUgYW5kIGRpc3BhdGNoIHByb3BzIHRvZ2V0aGVyXHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBjb25uZWN0aW9uXHJcbiAqXHJcbiAqL1xuXG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChwdXJlICE9PSB1bmRlZmluZWQgJiYgIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24pIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSB0cnVlO1xuICAgICAgd2FybmluZygnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuXG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChXcmFwcGVkQ29tcG9uZW50KX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIGNvbnN0IFtwcm9wc0NvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgLy8gRGlzdGluZ3Vpc2ggYmV0d2VlbiBhY3R1YWwgXCJkYXRhXCIgcHJvcHMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgd3JhcHBlciBjb21wb25lbnQsXG4gICAgICAgIC8vIGFuZCB2YWx1ZXMgbmVlZGVkIHRvIGNvbnRyb2wgYmVoYXZpb3IgKGZvcndhcmRlZCByZWZzLCBhbHRlcm5hdGUgY29udGV4dCBpbnN0YW5jZXMpLlxuICAgICAgICAvLyBUbyBtYWludGFpbiB0aGUgd3JhcHBlclByb3BzIG9iamVjdCByZWZlcmVuY2UsIG1lbW9pemUgdGhpcyBkZXN0cnVjdHVyaW5nLlxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICB9ID0gcHJvcHMsXG4gICAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIFVzZXJzIG1heSBvcHRpb25hbGx5IHBhc3MgaW4gYSBjdXN0b20gY29udGV4dCBpbnN0YW5jZSB0byB1c2UgaW5zdGVhZCBvZiBvdXIgUmVhY3RSZWR1eENvbnRleHQuXG4gICAgICAgIC8vIE1lbW9pemUgdGhlIGNoZWNrIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBjb250ZXh0IGluc3RhbmNlIHdlIHNob3VsZCB1c2UuXG4gICAgICAgIHJldHVybiBwcm9wc0NvbnRleHQgJiYgcHJvcHNDb250ZXh0LkNvbnN1bWVyICYmIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaXNDb250ZXh0Q29uc3VtZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbCkpID8gcHJvcHNDb250ZXh0IDogQ29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTsgLy8gUmV0cmlldmUgdGhlIHN0b3JlIGFuZCBhbmNlc3RvciBzdWJzY3JpcHRpb24gdmlhIGNvbnRleHQsIGlmIGF2YWlsYWJsZVxuXG4gICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHRUb1VzZSk7IC8vIFRoZSBzdG9yZSBfbXVzdF8gZXhpc3QgYXMgZWl0aGVyIGEgcHJvcCBvciBpbiBjb250ZXh0LlxuICAgICAgLy8gV2UnbGwgY2hlY2sgdG8gc2VlIGlmIGl0IF9sb29rc18gbGlrZSBhIFJlZHV4IHN0b3JlIGZpcnN0LlxuICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gcGFzcyB0aHJvdWdoIGEgYHN0b3JlYCBwcm9wIHRoYXQgaXMganVzdCBhIHBsYWluIHZhbHVlLlxuXG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBcInN0b3JlXCIgaW4gdGhlIGNvbnRleHQgb2YgYCArIGBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIGAgKyBgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIGAgKyBgUmVhY3QgY29udGV4dCBjb25zdW1lciB0byAke2Rpc3BsYXlOYW1lfSBpbiBjb25uZWN0IG9wdGlvbnMuYCk7XG4gICAgICB9IC8vIEJhc2VkIG9uIHRoZSBwcmV2aW91cyBjaGVjaywgb25lIG9mIHRoZXNlIG11c3QgYmUgdHJ1ZVxuXG5cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgLy8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4gICAgICAgIC8vIFJlLWNyZWF0ZSB0aGlzIHNlbGVjdG9yIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLlxuICAgICAgICByZXR1cm4gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgICB9LCBbc3RvcmVdKTtcbiAgICAgIGNvbnN0IFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gdW5kZWZpbmVkIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3VicyA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pOyAvLyBEZXRlcm1pbmUgd2hhdCB7c3RvcmUsIHN1YnNjcmlwdGlvbn0gdmFsdWUgc2hvdWxkIGJlIHB1dCBpbnRvIG5lc3RlZCBjb250ZXh0LCBpZiBuZWNlc3NhcnksXG4gICAgICAvLyBhbmQgbWVtb2l6ZSB0aGF0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGNvbnRleHQgdXBkYXRlcy5cblxuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgaXMgZGlyZWN0bHkgc3Vic2NyaWJlZCB0byBhIHN0b3JlIGZyb20gcHJvcHMuXG4gICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBkZXNjZW5kYW50cyByZWFkaW5nIGZyb20gdGhpcyBzdG9yZSAtIHBhc3MgZG93biB3aGF0ZXZlclxuICAgICAgICAgIC8vIHRoZSBleGlzdGluZyBjb250ZXh0IHZhbHVlIGlzIGZyb20gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yLlxuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBwdXQgdGhpcyBjb21wb25lbnQncyBzdWJzY3JpcHRpb24gaW5zdGFuY2UgaW50byBjb250ZXh0LCBzbyB0aGF0XG4gICAgICAgIC8vIGNvbm5lY3RlZCBkZXNjZW5kYW50cyB3b24ndCB1cGRhdGUgdW50aWwgYWZ0ZXIgdGhpcyBjb21wb25lbnQgaXMgZG9uZVxuXG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0VmFsdWUsIHtcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBTZXQgdXAgcmVmcyB0byBjb29yZGluYXRlIHZhbHVlcyBiZXR3ZWVuIHRoZSBzdWJzY3JpcHRpb24gZWZmZWN0IGFuZCB0aGUgcmVuZGVyIGxvZ2ljXG5cbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc1Byb2Nlc3NpbmdEaXNwYXRjaCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZigpO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIC8vIFRyaWNreSBsb2dpYyBoZXJlOlxuICAgICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgICAvLyAtIEhvd2V2ZXIsIHdlIG1heSBoYXZlIGdvdHRlbiBuZXcgd3JhcHBlciBwcm9wcyBhZnRlciB0aGF0XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBuZXcgY2hpbGQgcHJvcHMsIGFuZCB0aGUgc2FtZSB3cmFwcGVyIHByb3BzLCB3ZSBrbm93IHdlIHNob3VsZCB1c2UgdGhlIG5ldyBjaGlsZCBwcm9wcyBhcy1pcy5cbiAgICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAgIC8vIFNvLCB3ZSdsbCB1c2UgdGhlIGNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlIG9ubHkgaWYgdGhlIHdyYXBwZXIgcHJvcHMgYXJlIHRoZSBzYW1lIGFzIGxhc3QgdGltZS5cbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH0gLy8gVE9ETyBXZSdyZSByZWFkaW5nIHRoZSBzdG9yZSBkaXJlY3RseSBpbiByZW5kZXIoKSBoZXJlLiBCYWQgaWRlYT9cbiAgICAgICAgICAvLyBUaGlzIHdpbGwgbGlrZWx5IGNhdXNlIEJhZCBUaGluZ3MgKFRNKSB0byBoYXBwZW4gaW4gQ29uY3VycmVudCBNb2RlLlxuICAgICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZS5cblxuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7IC8vIFdlIG5lZWQgdGhpcyB0byBleGVjdXRlIHN5bmNocm9ub3VzbHkgZXZlcnkgdGltZSB3ZSByZS1yZW5kZXIuIEhvd2V2ZXIsIFJlYWN0IHdhcm5zXG4gICAgICAvLyBhYm91dCB1c2VMYXlvdXRFZmZlY3QgaW4gU1NSLCBzbyB3ZSB0cnkgdG8gZGV0ZWN0IGVudmlyb25tZW50IGFuZCBmYWxsIGJhY2sgdG9cbiAgICAgIC8vIGp1c3QgdXNlRWZmZWN0IGluc3RlYWQgdG8gYXZvaWQgdGhlIHdhcm5pbmcsIHNpbmNlIG5laXRoZXIgd2lsbCBydW4gYW55d2F5LlxuXG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSByZWFjdExpc3RlbmVyID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHt9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIHJlYWN0TGlzdGVuZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgICB9LCBbc3Vic2NyaXB0aW9uXSk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW2xhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzXSk7XG4gICAgICBsZXQgYWN0dWFsQ2hpbGRQcm9wcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKCAvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG4gICAgICAgIHN1YnNjcmliZUZvclJlYWN0LCAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgIC8vIFRPRE8gYW5kIHdlJ3JlIGp1c3QgcGFzc2luZyB0aGF0IHRocm91Z2ggc28gaXQgdHJpZ2dlcnMgYSByZS1yZW5kZXIgZm9yIHVzIHJhdGhlciB0aGFuIHJlbHlpbmcgb24gYHVTRVNgLlxuICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XFxuJHtsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2t9XFxuXFxuYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIH0pOyAvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cblxuICAgICAgY29uc3QgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBhY3R1YWxDaGlsZFByb3BzLCB7XG4gICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7IC8vIElmIFJlYWN0IHNlZXMgdGhlIGV4YWN0IHNhbWUgZWxlbWVudCByZWZlcmVuY2UgYXMgbGFzdCB0aW1lLCBpdCBiYWlscyBvdXQgb2YgcmUtcmVuZGVyaW5nXG4gICAgICAvLyB0aGF0IGNoaWxkLCBzYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIFJlYWN0Lm1lbW8oKSBvciByZXR1cm5lZCBmYWxzZSBmcm9tIHNob3VsZENvbXBvbmVudFVwZGF0ZS5cblxuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlXG4gICAgICAgICAgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cblxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuXG4gICAgLy8gQWRkIGEgaGFja3kgY2FzdCB0byBnZXQgdGhlIHJpZ2h0IG91dHB1dCB0eXBlXG4gICAgY29uc3QgQ29ubmVjdCA9IF9Db25uZWN0O1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gaG9pc3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcblxuICByZXR1cm4gd3JhcFdpdGhDb25uZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIGFyZ30gZm9yICR7bmFtZX0gYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAke29wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWV9LmApO1xuICB9O1xufSIsImltcG9ydCBiaW5kQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vdXRpbHMvYmluZEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkgfSBmcm9tICcuL2ludmFsaWRBcmdGYWN0b3J5JztcbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChkaXNwYXRjaCA9PiAvLyBAdHMtaWdub3JlXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKSkgOiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChkaXNwYXRjaCA9PiAoe1xuICAgIGRpc3BhdGNoXG4gIH0pKSA6IHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyAvLyBAdHMtaWdub3JlXG4gIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xufSIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkgfSBmcm9tICcuL2ludmFsaWRBcmdGYWN0b3J5JztcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKCkgPT4gKHt9KSkgOiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gLy8gQHRzLWlnbm9yZVxuICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeSB9IGZyb20gJy4vaW52YWxpZEFyZ0ZhY3RvcnknO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIHtcbiAgICBkaXNwbGF5TmFtZSxcbiAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gIH0pIHtcbiAgICBsZXQgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIGxldCBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICBjb25zdCBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyAoKSA9PiBkZWZhdWx0TWVyZ2VQcm9wcyA6IHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnKTtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImluaXRNYXBTdGF0ZVRvUHJvcHNcIiwgXCJpbml0TWFwRGlzcGF0Y2hUb1Byb3BzXCIsIFwiaW5pdE1lcmdlUHJvcHNcIl07XG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcbmV4cG9ydCBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZCkgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSwgbmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbi8vIFRPRE86IEFkZCBtb3JlIGNvbW1lbnRzXG4vLyBUaGUgc2VsZWN0b3IgcmV0dXJuZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHdpbGwgbWVtb2l6ZSBpdHMgcmVzdWx0cyxcbi8vIGFsbG93aW5nIGNvbm5lY3QncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwgX3JlZikge1xuICBsZXQge1xuICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICBpbml0TWVyZ2VQcm9wc1xuICB9ID0gX3JlZixcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG4gIH1cblxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCAnZGVwZW5kc09uT3duUHJvcHMnKSkge1xuICAgICAgd2FybmluZyhgVGhlIHNlbGVjdG9yIGZvciAke21ldGhvZE5hbWV9IG9mIGNvbm5lY3QgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG4gIHZlcmlmeShtZXJnZVByb3BzLCAnbWVyZ2VQcm9wcycpO1xufSIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudCggLy8gKiBOb3RlOlxuLy8gIEl0IHNlZW1zIHRoYXQgdGhlIGRpc3BhdGNoIGFyZ3VtZW50XG4vLyAgY291bGQgYmUgYSBkaXNwYXRjaCBmdW5jdGlvbiBpbiBzb21lIGNhc2VzIChleDogd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZylcbi8vICBhbmQgYSBzdGF0ZSBvYmplY3QgaW4gc29tZSBvdGhlcnMgKGV4OiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nKVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5nZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuXG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufSAvLyBkZXBlbmRzT25Pd25Qcm9wcyBpcyB1c2VkIGJ5IGNyZWF0ZU1hcFRvUHJvcHNQcm94eSB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwYXNzIHByb3BzIGFzIGFyZ3Ncbi8vIHRvIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuIEl0IGlzIGFsc28gdXNlZCBieSBtYWtlUHVyZVByb3BzU2VsZWN0b3IgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIG1hcFRvUHJvcHMgbmVlZHMgdG8gYmUgaW52b2tlZCB3aGVuIHByb3BzIGhhdmUgY2hhbmdlZC5cbi8vXG4vLyBBIGxlbmd0aCBvZiBvbmUgc2lnbmFscyB0aGF0IG1hcFRvUHJvcHMgZG9lcyBub3QgZGVwZW5kIG9uIHByb3BzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXG4vLyBBIGxlbmd0aCBvZiB6ZXJvIGlzIGFzc3VtZWQgdG8gbWVhbiBtYXBUb1Byb3BzIGlzIGdldHRpbmcgYXJncyB2aWEgYXJndW1lbnRzIG9yIC4uLmFyZ3MgYW5kXG4vLyB0aGVyZWZvcmUgbm90IHJlcG9ydGluZyBpdHMgbGVuZ3RoIGFjY3VyYXRlbHkuLlxuLy8gVE9ETyBDYW4gdGhpcyBnZXQgcHVsbGVkIG91dCBzbyB0aGF0IHdlIGNhbiBzdWJzY3JpYmUgZGlyZWN0bHkgdG8gdGhlIHN0b3JlIGlmIHdlIGRvbid0IG5lZWQgb3duUHJvcHM/XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vL1xuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIGhhbmRsZXMgbWFwVG9Qcm9wcyBpZiByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24sIGFuZCB0cmVhdHMgdGhhdFxuLy8gICAgbmV3IGZ1bmN0aW9uIGFzIHRoZSB0cnVlIG1hcFRvUHJvcHMgZm9yIHN1YnNlcXVlbnQgY2FsbHMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIHtcbiAgICBkaXNwbGF5TmFtZVxuICB9KSB7XG4gICAgY29uc3QgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCB1bmRlZmluZWQpO1xuICAgIH07IC8vIGFsbG93IGRldGVjdEZhY3RvcnlBbmRWZXJpZnkgdG8gZ2V0IG93blByb3BzXG5cblxuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIGxldCBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZURpc3BhdGNoJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdG9yJztcbmltcG9ydCB7IHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVN0b3JlJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi91dGlscy9zaGFsbG93RXF1YWwnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgeyBQcm92aWRlciwgUmVhY3RSZWR1eENvbnRleHQsIGNvbm5lY3QsIHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2ssIHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2ssIHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2ssIHNoYWxsb3dFcXVhbCB9OyIsImltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVN0b3JlIGFzIHVzZURlZmF1bHRTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi91c2VTdG9yZSc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUgPSAvLyBAdHMtaWdub3JlXG4gIGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpOyAvLyBAdHMtaWdub3JlXG5cbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cclxuICpcclxuICogQHJldHVybnMge2FueXxmdW5jdGlvbn0gcmVkdXggc3RvcmUncyBgZGlzcGF0Y2hgIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICogICBjb25zdCBpbmNyZWFzZUNvdW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZWFzZS1jb3VudGVyJyB9KSwgW10pXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApXHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBjb25zdCB1c2VEaXNwYXRjaCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEaXNwYXRjaEhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVJlZHV4Q29udGV4dGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuIFRoaXMgaXMgYSBsb3ctbGV2ZWxcclxuICogaG9vayB0aGF0IHlvdSBzaG91bGQgdXN1YWxseSBub3QgbmVlZCB0byBjYWxsIGRpcmVjdGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VSZWR1eENvbnRleHRgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPicpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGAuIFRoaXMgaXMgYSBsb3ctbGV2ZWxcclxuICogaG9vayB0aGF0IHlvdSBzaG91bGQgdXN1YWxseSBub3QgbmVlZCB0byBjYWxsIGRpcmVjdGx5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0KClcclxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IGNvbnN0IHVzZVJlZHV4Q29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVSZWR1eENvbnRleHRIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZURlYnVnVmFsdWUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2ssIHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgbm90SW5pdGlhbGl6ZWQgfSBmcm9tICcuLi91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZSc7XG5sZXQgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSBmbiA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xuXG5jb25zdCByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNlbGVjdG9yKHNlbGVjdG9yLCBlcXVhbGl0eUZuT3JPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksXG4gICAgICBzdGFiaWxpdHlDaGVjayA9IHVuZGVmaW5lZCxcbiAgICAgIG5vb3BDaGVjayA9IHVuZGVmaW5lZFxuICAgIH0gPSB0eXBlb2YgZXF1YWxpdHlGbk9yT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IHtcbiAgICAgIGVxdWFsaXR5Rm46IGVxdWFsaXR5Rm5Pck9wdGlvbnNcbiAgICB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVxdWFsaXR5Rm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlLFxuICAgICAgc3RhYmlsaXR5Q2hlY2s6IGdsb2JhbFN0YWJpbGl0eUNoZWNrLFxuICAgICAgbm9vcENoZWNrOiBnbG9iYWxOb29wQ2hlY2tcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0KCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSB1c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gdXNlQ2FsbGJhY2soe1xuICAgICAgW3NlbGVjdG9yLm5hbWVdKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgZmluYWxTdGFiaWxpdHlDaGVjayA9IHR5cGVvZiBzdGFiaWxpdHlDaGVjayA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxTdGFiaWxpdHlDaGVjayA6IHN0YWJpbGl0eUNoZWNrO1xuXG4gICAgICAgICAgaWYgKGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09ICdhbHdheXMnIHx8IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09ICdvbmNlJyAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0b0NvbXBhcmUgPSBzZWxlY3RvcihzdGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICghZXF1YWxpdHlGbihzZWxlY3RlZCwgdG9Db21wYXJlKSkge1xuICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICB9ID0gZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdG9yICcgKyAoc2VsZWN0b3IubmFtZSB8fCAndW5rbm93bicpICsgJyByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy4nICsgJ1xcblNlbGVjdG9ycyB0aGF0IHJldHVybiBhIG5ldyByZWZlcmVuY2UgKHN1Y2ggYXMgYW4gb2JqZWN0IG9yIGFuIGFycmF5KSBzaG91bGQgYmUgbWVtb2l6ZWQ6IGh0dHBzOi8vcmVkdXguanMub3JnL3VzYWdlL2Rlcml2aW5nLWRhdGEtc2VsZWN0b3JzI29wdGltaXppbmctc2VsZWN0b3JzLXdpdGgtbWVtb2l6YXRpb24nLCB7XG4gICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZmluYWxOb29wQ2hlY2sgPSB0eXBlb2Ygbm9vcENoZWNrID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbE5vb3BDaGVjayA6IG5vb3BDaGVjaztcblxuICAgICAgICAgIGlmIChmaW5hbE5vb3BDaGVjayA9PT0gJ2Fsd2F5cycgfHwgZmluYWxOb29wQ2hlY2sgPT09ICdvbmNlJyAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgIGxldCBzdGFjayA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICAgIH0gPSBlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2VsZWN0b3IgJyArIChzZWxlY3Rvci5uYW1lIHx8ICd1bmtub3duJykgKyAnIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy4nICsgJ1xcblNlbGVjdG9ycyB0aGF0IHJldHVybiB0aGUgZW50aXJlIHN0YXRlIGFyZSBhbG1vc3QgY2VydGFpbmx5IGEgbWlzdGFrZSwgYXMgdGhleSB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXIgKmFueXRoaW5nKiBpbiBzdGF0ZSBjaGFuZ2VzLicsIHtcbiAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmlyc3RSdW4uY3VycmVudCkgZmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgfVtzZWxlY3Rvci5uYW1lXSwgW3NlbGVjdG9yLCBnbG9iYWxTdGFiaWxpdHlDaGVjaywgc3RhYmlsaXR5Q2hlY2tdKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1Yiwgc3RvcmUuZ2V0U3RhdGUsIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLCB3cmFwcGVkU2VsZWN0b3IsIGVxdWFsaXR5Rm4pO1xuICAgIHVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUncyBzdGF0ZS4gVGhpcyBob29rIHRha2VzIGEgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogYXMgYW4gYXJndW1lbnQuIFRoZSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgc3RvcmUgc3RhdGUuXHJcbiAqXHJcbiAqIFRoaXMgaG9vayB0YWtlcyBhbiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJpc29uIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIHRoYXQgYWxsb3dzIHlvdSB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgY29tcGFyZWQgdG8gZGV0ZXJtaW5lXHJcbiAqIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBlcXVhbGl0eUZuIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHlcclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3QgY291bnRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50ZXIpXHJcbiAqICAgcmV0dXJuIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBjb25zdCB1c2VTZWxlY3RvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVTZWxlY3Rvckhvb2soKTsiLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCwgY3JlYXRlUmVkdXhDb250ZXh0SG9vayB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0Jztcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQgPSAvLyBAdHMtaWdub3JlXG4gIGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IC8vIEB0cy1pZ25vcmVcbiAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dCgpOyAvLyBAdHMtaWdub3JlXG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBFeGFtcGxlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAvKiNfX1BVUkVfXyovY3JlYXRlU3RvcmVIb29rKCk7IiwiLy8gVGhlIHByaW1hcnkgZW50cnkgcG9pbnQgYXNzdW1lcyB3ZSdyZSB3b3JraW5nIHdpdGggc3RhbmRhcmQgUmVhY3RET00vUk4sIGJ1dFxuLy8gb2xkZXIgdmVyc2lvbnMgdGhhdCBkbyBub3QgaW5jbHVkZSBgdXNlU3luY0V4dGVybmFsU3RvcmVgIChSZWFjdCAxNi45IC0gMTcueCkuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoZSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBjb21wYXQgc2hpbSBpcyBuZWVkZWQuXG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0nO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgfSBmcm9tICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3InO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tICcuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IGluaXRpYWxpemVVc2VTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdCc7XG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IpO1xuaW5pdGlhbGl6ZUNvbm5lY3QodXNlU3luY0V4dGVybmFsU3RvcmUpOyAvLyBFbmFibGUgYmF0Y2hlZCB1cGRhdGVzIGluIG91ciBzdWJzY3JpcHRpb25zIGZvciB1c2Vcbi8vIHdpdGggc3RhbmRhcmQgUmVhY3QgcmVuZGVyZXJzIChSZWFjdERPTSwgUmVhY3QgTmF0aXZlKVxuXG5zZXRCYXRjaChiYXRjaCk7XG5leHBvcnQgeyBiYXRjaCB9O1xuZXhwb3J0ICogZnJvbSAnLi9leHBvcnRzJzsiLCJpbXBvcnQgeyBnZXRCYXRjaCB9IGZyb20gJy4vYmF0Y2gnOyAvLyBlbmNhcHN1bGF0ZXMgdGhlIHN1YnNjcmlwdGlvbiBsb2dpYyBmb3IgY29ubmVjdGluZyBhIGNvbXBvbmVudCB0byB0aGUgcmVkdXggc3RvcmUsIGFzXG4vLyB3ZWxsIGFzIG5lc3Rpbmcgc3Vic2NyaXB0aW9ucyBvZiBkZXNjZW5kYW50IGNvbXBvbmVudHMsIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGVcbi8vIGFuY2VzdG9yIGNvbXBvbmVudHMgcmUtcmVuZGVyIGJlZm9yZSBkZXNjZW5kYW50c1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIGNvbnN0IGJhdGNoID0gZ2V0QmF0Y2goKTtcbiAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcblxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGJhdGNoKCgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQoKSB7XG4gICAgICBsZXQgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG5cbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgbGV0IGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9O1xufVxuXG5jb25zdCBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnkoKSB7fSxcblxuICBnZXQ6ICgpID0+IFtdXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7IC8vIFJlYXNvbnMgdG8ga2VlcCB0aGUgc3Vic2NyaXB0aW9uIGFjdGl2ZVxuXG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDsgLy8gSXMgdGhpcyBzcGVjaWZpYyBzdWJzY3JpcHRpb24gc3Vic2NyaWJlZCAob3Igb25seSBuZXN0ZWQgb25lcz8pXG5cbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgY29uc3QgY2xlYW51cExpc3RlbmVyID0gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7IC8vIGNsZWFudXAgbmVzdGVkIHN1YlxuXG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyZW1vdmVkKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwTGlzdGVuZXIoKTtcbiAgICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICBsaXN0ZW5lcnMubm90aWZ5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIHNlbGZTdWJzY3JpYmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQrKztcblxuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQtLTtcblxuICAgIGlmICh1bnN1YnNjcmliZSAmJiBzdWJzY3JpcHRpb25zQW1vdW50ID09PSAwKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKHNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmVTZWxmLFxuICAgIHRyeVVuc3Vic2NyaWJlOiB0cnlVbnN1YnNjcmliZVNlbGYsXG4gICAgZ2V0TGlzdGVuZXJzOiAoKSA9PiBsaXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbn0iLCIvLyBEZWZhdWx0IHRvIGEgZHVtbXkgXCJiYXRjaFwiIGltcGxlbWVudGF0aW9uIHRoYXQganVzdCBydW5zIHRoZSBjYWxsYmFja1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG5sZXQgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoOyAvLyBBbGxvdyBpbmplY3RpbmcgYW5vdGhlciBiYXRjaGluZyBmdW5jdGlvbiBsYXRlclxuXG5leHBvcnQgY29uc3Qgc2V0QmF0Y2ggPSBuZXdCYXRjaCA9PiBiYXRjaCA9IG5ld0JhdGNoOyAvLyBTdXBwbHkgYSBnZXR0ZXIganVzdCB0byBza2lwIGRlYWxpbmcgd2l0aCBFU00gYmluZGluZ3NcblxuZXhwb3J0IGNvbnN0IGdldEJhdGNoID0gKCkgPT4gYmF0Y2g7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IoLi4uYXJncykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufSIsIi8qKlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXHJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgbGV0IGJhc2VQcm90byA9IHByb3RvO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59IiwiZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2UgbmVlZCB1c2VMYXlvdXRFZmZlY3QgdG8gZW5zdXJlIHRoZSBzdG9yZVxuLy8gc3Vic2NyaXB0aW9uIGNhbGxiYWNrIGFsd2F5cyBoYXMgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGxhdGVzdCByZW5kZXIgY29tbWl0XG4vLyBhdmFpbGFibGUsIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgaGFwcGVuIGJldHdlZW4gcmVuZGVyIGFuZCB0aGUgZWZmZWN0LFxuLy8gd2hpY2ggbWF5IGNhdXNlIG1pc3NlZCB1cGRhdGVzOyB3ZSBhbHNvIG11c3QgZW5zdXJlIHRoZSBzdG9yZSBzdWJzY3JpcHRpb25cbi8vIGlzIGNyZWF0ZWQgc3luY2hyb25vdXNseSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBvY2N1ciBiZWZvcmUgdGhlXG4vLyBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZCBhbmQgYW4gaW5jb25zaXN0ZW50IHN0YXRlIG1heSBiZSBvYnNlcnZlZFxuLy8gTWF0Y2hlcyBsb2dpYyBpbiBSZWFjdCdzIGBzaGFyZWQvRXhlY3V0aW9uRW52aXJvbm1lbnRgIGZpbGVcblxuZXhwb3J0IGNvbnN0IGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpO1xuZXhwb3J0IGNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7IiwiZXhwb3J0IGNvbnN0IG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3VTRVMgbm90IGluaXRpYWxpemVkIScpO1xufTsiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmApO1xuICB9XG59IiwiLyoqXHJcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG59IiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc2VydmVyX2NvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgU3VzcGVuc2VMaXN0ID0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2VMaXN0KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLlN1c3BlbnNlTGlzdCA9IFN1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1N1c3BlbnNlTGlzdCA9IGlzU3VzcGVuc2VMaXN0O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IHsganN4LCBJbW11dGFibGUsIEppbXVGaWVsZFR5cGUsIEltbXV0YWJsZUFycmF5LCBnZXRBcHBTdG9yZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgU2V0dGluZ1NlY3Rpb25cclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IFVuaXF1ZVZhbHVlUmVuZGVyZXIgZnJvbSAnZXNyaS9yZW5kZXJlcnMvVW5pcXVlVmFsdWVSZW5kZXJlcidcclxuaW1wb3J0ICogYXMgcGllQ2hhcnRSZW5kZXJlckNyZWF0b3IgZnJvbSAnZXNyaS9zbWFydE1hcHBpbmcvcmVuZGVyZXJzL3BpZUNoYXJ0J1xyXG5pbXBvcnQgeyBTZWxlY3QsIE11bHRpU2VsZWN0LCB0eXBlIE11bHRpU2VsZWN0SXRlbSwgQnV0dG9uLCBMb2FkaW5nLCBTd2l0Y2ggfSBmcm9tICdqaW11LXVpJ1xyXG4vLyBpbXBvcnQgTGVnZW5kIGZyb20gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCI7XHJcbi8vIGltcG9ydCBMZWdlbmRWTSBmcm9tIFwiZXNyaS93aWRnZXRzL0xlZ2VuZC9MZWdlbmRWaWV3TW9kZWxcIjtcclxuXHJcblxyXG4vLyBJTVBPUlRBIFRVIERJQ0NJT05BUklPIERFIENPTE9SRVNcclxuLy8gQWp1c3RhIGxhIHJ1dGEgc2kgZWwgYXJjaGl2byBlc3TDoSBlbiBvdHJhIGNhcnBldGEuXHJcbmltcG9ydCBhY2NpZGVudENvbG9ycyBmcm9tICcuLi8uLi8uLi9wcnVlYmFzL3NyYy9ydW50aW1lL2Fzc2V0cy9hY2NpZGVudENvbG9ycy5qc29uJ1xyXG5cclxuY29uc3Qgbm9ybWFsaXplS2V5ID0gKHM6IHN0cmluZykgPT4ge1xyXG4gIGlmICghcykgcmV0dXJuIFwiXCI7XHJcblxyXG4gIC8vIENvcnJlY2Npw7NuIGRlIGVycm9yZXMgZnJlY3VlbnRlcyBkZXNkZSBsYSBjYXBhXHJcbiAgY29uc3QgY29ycmVjdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBcImludWRhZG9cIjogXCJpbnVuZGFkb1wiLFxyXG4gICAgXCJlbmNoYXJjYWRvXCI6IFwiZW5jaGFyY2Fkb1wiLFxyXG4gICAgXCJncmF2aWxsYVwiOiBcImdyYXZpbGxhXCIsXHJcbiAgICBcImJhcnJvXCI6IFwiYmFycm9cIlxyXG4gIH07XHJcblxyXG4gIC8vIDEpIHF1aXRhciB0aWxkZXMgeSBtaW7DunNjdWxhc1xyXG4gIGxldCByZXN1bHQgPSBzXHJcbiAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgIC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAvLyAyKSBhcGxpY2FyIGNvcnJlY2Npb25lcyBpbnRlcm5hc1xyXG4gIE9iamVjdC5rZXlzKGNvcnJlY3Rpb25zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgXCJnXCIpLCBjb3JyZWN0aW9uc1trZXldKTtcclxuICB9KTtcclxuXHJcbiAgLy8gMykgZWxpbWluYXIgcGFsYWJyYXMgaXJyZWxldmFudGVzXHJcbiAgY29uc3Qgc3RvcHdvcmRzID0gW1wiZGVcIiwgXCJkZWxcIiwgXCJsYVwiLCBcImVsXCIsIFwibG9zXCIsIFwibGFzXCIsIFwib1wiLCBcInlcIl07XHJcbiAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAuc3BsaXQoL1xccysvKVxyXG4gICAgLmZpbHRlcih3b3JkID0+ICFzdG9wd29yZHMuaW5jbHVkZXMod29yZCkpXHJcbiAgICAuam9pbihcIiBcIik7XHJcblxyXG4gIC8vIDQpIGxpbXBpYXIgY2FyYWN0ZXJlc1xyXG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiX1wiKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC9eX3xfJC9nLCBcIlwiKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qKiBleHRyYWUgW3IsZyxiXSBkZXNkZSAncmdiYShyLGcsYixhKScgbyAncmdiKHIsZyxiKScgKi9cclxuY29uc3QgcGFyc2VSZ2JhID0gKHJnYmE6IHN0cmluZyk6IG51bWJlcltdIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgbSA9IHJnYmE/Lm1hdGNoKC9yZ2JhP1xccypcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspL2kpXHJcbiAgcmV0dXJuIG0gPyBbTnVtYmVyKG1bMV0pLCBOdW1iZXIobVsyXSksIE51bWJlcihtWzNdKV0gOiBudWxsXHJcbn1cclxuXHJcblxyXG4gZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgfVxyXG4vKiogb2J0aWVuZSBlbCBjb2xvciBbcixnLGJdIGRlc2RlIGVsIEpTT04gcGFyYSAoY2FtcG8sIHZhbG9yKS4gU2kgbm8gZXhpc3RlIC0+IG51bGwgKi9cclxuY29uc3QgZ2V0Q29sb3JGcm9tSnNvbiA9IChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IFN0cmluZykgPT4ge1xyXG5cclxuXHJcbiAgICB2YXIgY2FtcG9QcmltZXJhTWF5dXNjdWxhcyA9IGNhcGl0YWxpemVGaXJzdExldHRlcihmaWVsZE5hbWUpO1xyXG4gICAgaWYoYWNjaWRlbnRDb2xvcnNbY2FtcG9QcmltZXJhTWF5dXNjdWxhc10pe1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGFjY2lkZW50Q29sb3JzW2NhbXBvUHJpbWVyYU1heXVzY3VsYXNdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmltZXJvOicrYWNjaWRlbnRDb2xvcnNbY2FtcG9QcmltZXJhTWF5dXNjdWxhc11ba2V5XS5ub21icmUudG9Mb3dlckNhc2UoKSsnICAgICAgU2VndW5kbzogICAgJyt2YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTZWd1bmRvJyt2YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgbm9ybWFsaXplS2V5KGFjY2lkZW50Q29sb3JzW2NhbXBvUHJpbWVyYU1heXVzY3VsYXNdW2tleV0ubm9tYnJlLnRvTG93ZXJDYXNlKCkpID09PVxyXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZUtleSh2YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gYWNjaWRlbnRDb2xvcnNbY2FtcG9QcmltZXJhTWF5dXNjdWxhc11ba2V5XS5jb2xvcjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcInJnYigyMDAsIDIwMCwgMjAwKVwiO1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgICAgXHJcbn1cclxuXHJcbi8vIEV4dGllbmRlIGxhcyBwcm9wcyBwYXJhIGluY2x1aXIgbGEgZnVuY2nDs24gb25VcGRhdGVcclxuaW50ZXJmYWNlIERpbkxleWVuZFByb3BzIGV4dGVuZHMgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPiB7XHJcbiAgb25VcGRhdGU6IChuZXdTdGF0ZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25SdW46IChydW5TdDogYm9vbGVhbikgPT4gdm9pZFxyXG4gIG9uQXR0OiAoYXR0U3Q6IHt9KSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpbkxleWVuZCAocHJvcHM6IERpbkxleWVuZFByb3BzKSB7XHJcbiAgY29uc3Qgc3VwcG9ydGVkRmllbGRUeXBlcyA9IEltbXV0YWJsZShbSmltdUZpZWxkVHlwZS5TdHJpbmddKVxyXG4gIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnJykvL1RpcG9fYWNjaWRlbnRlXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtub21icmVDYXBhLCBzZXROb21icmVDYXBhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzZWxlY2Npb25hYmxlcywgc2V0U2VsZWNjaW9uYWJsZXNdID0gdXNlU3RhdGU8SW1tdXRhYmxlQXJyYXk8TXVsdGlTZWxlY3RJdGVtPj4oSW1tdXRhYmxlKFtdKSlcclxuICBjb25zdCBbdmFsb3Jlc0FnZywgc2V0VmFsb3Jlc0FnZ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZWplY3V0YXIsIHNldEVqZWN1dGFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjbHVzdGVyLCBzZXRDbHVzdGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2F0dFVuaWNvLCBzZXRBdHRVbmljb10gPSB1c2VTdGF0ZShbXSlcclxuICAvLyBjb25zdCBbbGF5ZXIsIHNldExheWVyXSA9IHVzZVN0YXRlPExheWVyPigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBub21icmVDYXBhID0gcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLnNwbGl0KCctJylbMV1cclxuICAgICAgc2V0Tm9tYnJlQ2FwYShub21icmVDYXBhKSAvLyBObyBjYW1iaWEgZWwgZXN0aWxvIGFsIGNhbWJpYXIgbGEgZnVlbnRlIGRlIGRhdG9zIGRlIGxhIGNhcGEsIG1pcmFybG8gYmllblxyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy51c2VEYXRhU291cmNlc10pXHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBhcmFjaW9uIChhdHJpYnV0b3MsIGxpc3RhTm9tYnJlcykge1xyXG4gICAgY29uc3QgZmluYWwgPSB7fVxyXG4gICAgbGlzdGFOb21icmVzID0gbGlzdGFOb21icmVzLm1hcChTdHJpbmcpXHJcbiAgICBmb3IgKGNvbnN0IGF0cmlidXRvIG9mIGF0cmlidXRvcykge1xyXG4gICAgICBjb25zdCBuQWNpZXJ0b3MgPSB7fVxyXG4gICAgICBjb25zdCBsaXN0YUFjaWVydG9zID0gW11cclxuICAgICAgZm9yIChjb25zdCBub21icmUgb2YgbGlzdGFOb21icmVzKSB7XHJcbiAgICAgICAgbGV0IGFjaWVydG9zID0gMFxyXG4gICAgICAgIGlmIChhdHJpYnV0by5sZW5ndGggPT09IG5vbWJyZS5sZW5ndGgpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXRyaWJ1dG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGF0cmlidXRvW2ldID09PSBub21icmVbaV0pIHtcclxuICAgICAgICAgICAgICBhY2llcnRvcysrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbkFjaWVydG9zW2FjaWVydG9zXSA9IG5vbWJyZVxyXG4gICAgICAgIGxpc3RhQWNpZXJ0b3MucHVzaChhY2llcnRvcylcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBjb21wYXJhciAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiIC0gYSAvLyBSZXN0YSBiIGRlIGEgcGFyYSBvcmRlbmFyIGRlIG1heW9yIGEgbWVub3JcclxuICAgICAgfVxyXG4gICAgICBsaXN0YUFjaWVydG9zLnNvcnQoY29tcGFyYXIpXHJcbiAgICAgIGlmIChsaXN0YUFjaWVydG9zWzBdID09PSAwKSB7XHJcbiAgICAgICAgaWYgKGF0cmlidXRvID09PSAnICcpIHtcclxuICAgICAgICAgIGZpbmFsW2F0cmlidXRvXSA9ICcgJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaW5hbFthdHJpYnV0b10gPSAnQWdydXBhY2nDs24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmFsW2F0cmlidXRvXSA9IG5BY2llcnRvc1tsaXN0YUFjaWVydG9zWzBdXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGZpbmFsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FtcG9zID0ge1xyXG4gICAgVGlwb19hY2NpZGVudGU6ICdUaXBvIGRlIGFjY2lkZW50ZScsXHJcbiAgICBTdWJ0aXBvX0FjY2lkZW50ZTogJ1N1YnRpcG8gZGUgQWNjaWRlbnRlJyxcclxuICAgIFNlbnRpZG86ICdTZW50aWRvJyxcclxuICAgIFN1cGVyZmljaWU6ICdTdXBlcmZpY2llJyxcclxuICAgIEx1bWlub3NpZGFkOiAnTHVtaW5vc2lkYWQnLFxyXG4gICAgRmFjdG9yZXNfYXRtb3NmZXJpY29zOiAnRmFjdG9yZXMgYXRtb3Nmw6lyaWNvcycsXHJcbiAgICBUaXBvX2RpYTogJ1RpcG8gZGUgZMOtYScsXHJcbiAgICBGYWN0b3JfQ29uY3VycmVudGVfMzogJ0ZhY3RvciBjb25jdXJyZW50ZSdcclxuICB9XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgc2V0SmltdU1hcFZpZXcoam12KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhckNvbG9yQWxlYXRvcmlvICgpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NiksXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NiksXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NilcclxuICAgIF1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpZWxkc0xpc3RDaGFuZ2VIYW5kbGVyID0gKGV2dCwgaXRlbSkgPT4ge1xyXG4gICAgaWYgKGV2dCkge1xyXG4gICAgICBzZXROb21icmUoZXZ0LnRhcmdldC52YWx1ZSlcclxuICAgICAgcHJvcHMub25VcGRhdGUoZXZ0LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVqZWN1Y2lvbiA9ICgpID0+IHtcclxuICAgIHNldEVqZWN1dGFyKHRydWUpXHJcbiAgICBwcm9wcy5vblJ1bih0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VsZWN0QWdyZWdhdGUgKGxpc3RhSXRlbXMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImF0dHJpYnV0ZS1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICB0aXRsZT0nRXN0ZSBhdHJpYnV0byB0aWVuZSBtw6FzIGRlIDEwIGNhdGVnb3LDrWFzLCBsw61taXRlIHF1ZSBlbCBtYXBhIG5vIHBlcm1pdGUgdmlzdWFsaXphci4gU2VsZWNjaW9uZSBjb21vIG3DoXhpbW8gOSBhdHJpYnV0b3MgcGFyYSB2aXN1YWxpemFybG9zIGVuIGVsIG1hcGEuJ1xyXG4gICAgICAgID5cclxuICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgIC8vdmFsdWVzID0ge3ZhbHVlc31cclxuICAgICAgICAgIGl0ZW1zID0ge2xpc3RhSXRlbXN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjaW9uZSA5IGF0cmlidXRvcyDDum5pY29zXCJcclxuICAgICAgICAgIGRpc3BsYXlCeVZhbHVlcz17ZnVuY3Rpb24gZGlzcGxheVZhbHVlcyAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZXMubGVuZ3RofSBzZWxlY2Npb25hZG9zYFxyXG4gICAgICAgICAgfSB9XHJcbiAgICAgICAgICAvL3ZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgb25DbGlja0l0ZW09e2Z1bmN0aW9uIHNlbGVjY2lvblZhbG9yZXMgKGV2dCwgdmFsdWUsIHNlbGVjdGVkVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPD0gMTApIHtcclxuICAgICAgICAgICAgICBzZXRWYWxvcmVzQWdnKHNlbGVjdGVkVmFsdWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxuICBjb25zdCBjcmVhdGVQaWVDaGFydFJlbmRlcmVyID0gYXN5bmMgKGxheWVyLCBhdHRVbmlxdWUpID0+IHtcclxuICAgIGNvbnN0IHsgcmVuZGVyZXIsIGZpZWxkcyB9ID0gYXdhaXQgcGllQ2hhcnRSZW5kZXJlckNyZWF0b3IuY3JlYXRlUmVuZGVyZXJGb3JDbHVzdGVyaW5nKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIGxlZ2VuZE9wdGlvbnM6IHtcclxuICAgICAgICB0aXRsZTogY2FtcG9zW25vbWJyZV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBhdHJpYnV0b3MgPSBbXVxyXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBhdHJpYnV0b3MucHVzaChmaWVsZC5uYW1lLnNwbGl0KCdfJykubWFwKChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKCdTVU0nLCAnJykpKS5qb2luKCcgJykucmVwbGFjZSgnU1VNJywgJycpLnNsaWNlKDEsIGZpZWxkLm5hbWUuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykubGVuZ3RoKSlcclxuICAgIH0pXHJcbiAgICBsZXQgbm9tYnJlc0NvZFxyXG4gICAgaWYgKG5vbWJyZSA9PT0gJ1RpcG9fYWNjaWRlbnRlJykge1xyXG4gICAgICBub21icmVzQ29kID0ge1xyXG4gICAgICAgICdTYWxpZGFzIGRlIHYgYSc6ICdTYWxpZGFzIGRlIHbDrWEnLFxyXG4gICAgICAgIENvbGlzaW9uZXM6ICdDb2xpc2lvbmVzJyxcclxuICAgICAgICBBbGNhbmNlczogJ0FsY2FuY2VzJyxcclxuICAgICAgICBDaG9xdWVzOiAnQ2hvcXVlcycsXHJcbiAgICAgICAgT3Ryb3M6ICdPdHJvcycsXHJcbiAgICAgICAgJ0F0cm9wZWxsb3MgZGUgYW5pbWFsZXMnOiAnQXRyb3BlbGxvcyBkZSBhbmltYWxlcycsXHJcbiAgICAgICAgQ2FpZGFzOiAnQ2HDrWRhcycsXHJcbiAgICAgICAgVnVlbGNvczogJ1Z1ZWxjb3MnLFxyXG4gICAgICAgICdBdHJvcGVsbG9zIGRlIHBlYXRvbmVzJzogJ0F0cm9wZWxsb3MgZGUgcGVhdG9uZXMnLFxyXG4gICAgICAgICdjbHVzdGVyIGRlZmF1bHQnOiAnQWdydXBhY2nDs24nLFxyXG4gICAgICAgICdTaW4gZGF0b3MnOiAnU2luIGRhdG9zJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub21icmVzQ29kID0gY29tcGFyYWNpb24oYXRyaWJ1dG9zLCBhdHRVbmlxdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWVsZEluZm9zID0gZmllbGRzLm1hcChmaWVsZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGROYW1lOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgIGxhYmVsOiBub21icmVzQ29kW2ZpZWxkLm5hbWUuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykuc2xpY2UoMSwgZmllbGQubmFtZS5zcGxpdCgnXycpLm1hcCgobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgnU1VNJywgJycpKSkuam9pbignICcpLnJlcGxhY2UoJ1NVTScsICcnKS5sZW5ndGgpXSxcclxuICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgIHBsYWNlczogMCxcclxuICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICApXHJcbiAgICBpZiAoYXR0VW5pcXVlLmxlbmd0aCA8IDExKSB7XHJcbiAgICAgIGZpZWxkSW5mb3MucG9wKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBtYXBzIHRoZSBmaWVsZCBuYW1lcyBmb3IgdGhlIHBvcHVwIGNoYXJ0XHJcbiAgICBjb25zdCBmaWVsZE5hbWVzID0gZmllbGRJbmZvcy5tYXAoZmllbGQgPT4ge1xyXG4gICAgICByZXR1cm4gZmllbGQuZmllbGROYW1lXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBvcHVwVGVtcGxhdGUgPSB7XHJcbiAgICAgIHRpdGxlOiAnUmVzdW1lbiBkZWwgY2zDunN0ZXInLFxyXG4gICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB0ZXh0OiAnVGhpcyBjbHVzdGVyIHJlcHJlc2VudHMgPGI+e2NsdXN0ZXJfY291bnR9PC9iPiBmZWF0dXJlcy4gJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ21lZGlhJyxcclxuICAgICAgICBtZWRpYUluZm9zOiBbe1xyXG4gICAgICAgICAgdGl0bGU6ICdSZXBvcnRzJyxcclxuICAgICAgICAgIHR5cGU6ICdwaWUtY2hhcnQnLFxyXG4gICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZE5hbWVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdmaWVsZHMnXHJcbiAgICAgIH1dLFxyXG4gICAgICBmaWVsZEluZm9zXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLSBDb2xvcmVzIGRlIGNhZGEgc2VjdG9yIGRlc2RlIGVsIEpTT04gLS0tLVxyXG4gICAgcmVuZGVyZXIuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgYmFzZSA9IGF0dHIuZmllbGRcclxuICAgICAgICAuc3BsaXQoJ18nKVxyXG4gICAgICAgIC5tYXAoKG46IHN0cmluZykgPT4gbi5yZXBsYWNlKCdTVU0nLCAnJykpXHJcbiAgICAgICAgLmpvaW4oJyAnKVxyXG4gICAgICAgIC5yZXBsYWNlKCdTVU0nLCAnJylcclxuICAgICAgY29uc3QgbGFiZWwgPSBub21icmVzQ29kW2Jhc2Uuc2xpY2UoMSldID8/IGJhc2Uuc2xpY2UoMSlcclxuICAgICAgY29uc3QgYyA9IGdldENvbG9yRnJvbUpzb24obm9tYnJlLCBsYWJlbClcclxuICAgICAgaWYgKGMpIHtcclxuICAgICAgICBhdHRyLnN5bWJvbCA9IGF0dHIuc3ltYm9sIHx8IHt9XHJcbiAgICAgICAgYXR0ci5zeW1ib2wuY29sb3IgPSBjXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gcmVuZGVyZXIuYXR0cmlidXRlcy5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAvLyAgIGlmIChhdHRVbmlxdWUubGVuZ3RoIDwgMTEgJiYgZmllbGQuZmllbGQuaW5jbHVkZXMoJ2RlZmF1bHQnKSkge1xyXG4gICAgLy8gICAgIHJldHVybiAocmVuZGVyZXIuYXR0cmlidXRlcy5zcGxpY2UocmVuZGVyZXIuYXR0cmlidXRlcy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnRvKSB7XHJcbiAgICAvLyAgICAgICByZXR1cm4gZWxlbWVudG8uZmllbGQgPT09IGZpZWxkLmZpZWxkXHJcbiAgICAvLyAgICAgfSksIDEpKVxyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIHJldHVybiAoZmllbGQubGFiZWwgPSBub21icmVzQ29kW2ZpZWxkLmZpZWxkLnNwbGl0KCdfJykubWFwKChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKCdTVU0nLCAnJykpKS5qb2luKCcgJykucmVwbGFjZSgnU1VNJywgJycpLnNsaWNlKDEsIGZpZWxkLmZpZWxkLnNwbGl0KCdfJykubWFwKChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKCdTVU0nLCAnJykpKS5qb2luKCcgJykucmVwbGFjZSgnU1VNJywgJycpLmxlbmd0aCldKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGxheWVyLmZlYXR1cmVSZWR1Y3Rpb24gPSB7XHJcbiAgICAgIHR5cGU6ICdjbHVzdGVyJyxcclxuICAgICAgZmllbGRzOiBmaWVsZHMsXHJcbiAgICAgIGNsdXN0ZXJNaW5TaXplOiAyNSxcclxuICAgICAgcmVuZGVyZXIsXHJcbiAgICAgIHBvcHVwVGVtcGxhdGUsXHJcbiAgICAgICAgbGFiZWxpbmdJbmZvOiBbXSAgICAgIFxyXG4gICAgfVxyXG4gICAgc2V0RWplY3V0YXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gZnVuY3Rpb24gY2xlYW5BcnJheVZhbHVlcyhhcnI6IEFycmF5PHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KTogc3RyaW5nW10ge1xyXG4gIC8vIC8vIHJldHVybiBhcnJcclxuICAvLyAvLyAgIC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIHN0cmluZyA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIC8vIHF1aXRhIG51bGwvdW5kZWZpbmVkXHJcbiAgLy8gLy8gICAubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpOyAvLyBlbGltaW5hIGVzcGFjaW9zIGFsIGluaWNpbyB5IGZpbmFsXHJcbiAgLy8gfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3ICYmIG5vbWJyZSAmJiBub21icmVDYXBhICE9PSAnJykge1xyXG4gICAgICBjb25zdCBsYXllcjEgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKG5vbWJyZUNhcGEpXHJcbiAgICAgIGNvbnN0IGZpZWxkID0gbGF5ZXIxLmdldEZpZWxkKG5vbWJyZSlcclxuICAgICAgY29uc3QgcXVlcnkgPSBsYXllcjEuY3JlYXRlUXVlcnkoKVxyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbZmllbGQubmFtZV1cclxuICAgICAgcXVlcnkubWF4UmVjb3JkQ291bnRGYWN0b3IgPSAzXHJcbiAgICAgIGNvbnN0IG9idGVuZXJBdHRVbmlxdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIxLnF1ZXJ5RmVhdHVyZXMocXVlcnkpXHJcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2godmFsdWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBhdHRVbmlxdWUgPSBBcnJheS5mcm9tKG5ldyBTZXQoYXR0cmlidXRlcykpXHJcbiAgICAgICAgY29uc29sZS5sb2coYXR0VW5pcXVlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsZWFuQXJyYXlWYWx1ZXMoYXR0VW5pcXVlKSlcclxuICAgICAgICBpZiAoZWplY3V0YXIpIHtcclxuICAgICAgICAgIGNvbnN0IGFwcENvbmY6IGFueSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWdcclxuICAgICAgICAgIGFwcENvbmYuYXR0VW5pcXVlID0gYXR0VW5pcXVlICYmIGF0dFVuaXF1ZS5sZW5ndGggPyBhdHRVbmlxdWUgOiBbXHJcbiAgICAgICAgICAgICAgJ1NhbGlkYXMgZGUgdsOtYScsXHJcbiAgICAgICAgICAgICAgJ0NvbGlzaW9uZXMnLFxyXG4gICAgICAgICAgICAgICdBbGNhbmNlcycsXHJcbiAgICAgICAgICAgICAgJ0Nob3F1ZXMnLFxyXG4gICAgICAgICAgICAgICdPdHJvcycsXHJcbiAgICAgICAgICAgICAgJ0F0cm9wZWxsb3MgZGUgYW5pbWFsZXMnLFxyXG4gICAgICAgICAgICAgICdDYcOtZGFzJyxcclxuICAgICAgICAgICAgICAnVnVlbGNvcycsXHJcbiAgICAgICAgICAgICAgJ0F0cm9wZWxsb3MgZGUgcGVhdG9uZXMnLFxyXG4gICAgICAgICAgICAgICdTaW4gZGF0b3MnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhdHRVbmlxdWVcclxuICAgICAgfVxyXG5cclxuICAgICAgb2J0ZW5lckF0dFVuaXF1ZSgpLnRoZW4oKGF0dFVuaXF1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW11cclxuICAgICAgICBhdHRVbmlxdWUuZm9yRWFjaCgoYXR0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0ge31cclxuICAgICAgICAgIGlmIChhdHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbVsndmFsdWUnXSA9ICdTaW4gZGF0b3MnXHJcbiAgICAgICAgICAgIGl0ZW1bJ2xhYmVsJ10gPSAnU2luIGRhdG9zJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbVsndmFsdWUnXSA9IGF0dC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGl0ZW1bJ2xhYmVsJ10gPSBhdHQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbXMucHVzaChpdGVtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0U2VsZWNjaW9uYWJsZXMoaXRlbXMgYXMgYW55KVxyXG4gICAgICAgIHdpbmRvdy5hdHRVbmlxdWU9YXR0VW5pcXVlO1xyXG4gICAgICAgIHdpbmRvdy52YWxvcmVzQWdnPXZhbG9yZXNBZ2c7XHJcbiAgICAgICAgaWYgKGVqZWN1dGFyKSB7XHJcbiAgICAgICAgICBpZiAodmFsb3Jlc0FnZy5sZW5ndGggPD0gMjUgJiYgdmFsb3Jlc0FnZy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhdHQgb2YgYXR0VW5pcXVlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGNvaW5jaWRlbmNpYXMgPSAwXHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHQyIG9mIHZhbG9yZXNBZ2cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHQgPT09IGF0dDIpIHtcclxuICAgICAgICAgICAgICAgICAgY29pbmNpZGVuY2lhcysrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChjb2luY2lkZW5jaWFzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxvcmVzQWdnLnB1c2goYXR0KVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2ltYm9sb2dpYSh2YWxvcmVzQWdnLnNsaWNlKDAsIC0xKSwgbGF5ZXIxLCBmaWVsZC5uYW1lKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2ltYm9sb2dpYShhdHRVbmlxdWUsIGxheWVyMSwgZmllbGQubmFtZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldEF0dFVuaWNvKGF0dFVuaXF1ZSlcclxuICAgICAgICAgIGNsdXN0ZXIgPyBjcmVhdGVQaWVDaGFydFJlbmRlcmVyKGxheWVyMSwgYXR0VW5pcXVlKSA6IGxheWVyMS5mZWF0dXJlUmVkdWN0aW9uID0ge307IHNldEVqZWN1dGFyKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNpbWJvbG9naWEgKGxpc3RhVmFsb3JlczogYW55W10sIGNhcGE6IGFueSwgY2FtcG86IHN0cmluZykge1xyXG4gIGNvbnN0IHN5bWJvbG9neTogYW55W10gPSBbXVxyXG4gIGNvbnN0IHZhbHVlQ29sb3I6IFJlY29yZDxzdHJpbmcsIG51bWJlcltdPiA9IHt9XHJcblxyXG4gIGZvciAoY29uc3QgYXRyaWJ1dG8gb2YgbGlzdGFWYWxvcmVzKSB7XHJcbiAgICAvLyAxKSBDb2xvciBkZXNkZSBKU09OIGNvbW8gc3RyaW5nIChyZ2IgLyByZ2JhKVxyXG4gICAgY29uc3QgZnJvbUpzb24gPSBnZXRDb2xvckZyb21Kc29uKGNhbXBvLCBTdHJpbmcoYXRyaWJ1dG8pKVxyXG5cclxuICAgIGxldCBjb2xvckZvck1hcDogYW55ICAgICAgLy8gbG8gcXVlIHZhIGEgc3ltYm9sLmNvbG9yXHJcbiAgICBsZXQgcmdiQXJyYXk6IG51bWJlcltdICAgIC8vIFNJRU1QUkUgW3IsZyxiXSBwYXJhIHZhbHVlQ29sb3JcclxuXHJcbiAgICBpZiAoZnJvbUpzb24pIHtcclxuICAgICAgLy8gSW50ZW50YW1vcyBleHRyYWVyIFtyLGcsYl0gZGVsIHN0cmluZ1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVJnYmEoZnJvbUpzb24pXHJcbiAgICAgIGlmIChwYXJzZWQpIHtcclxuICAgICAgICByZ2JBcnJheSA9IHBhcnNlZFxyXG4gICAgICAgIGNvbG9yRm9yTWFwID0gZnJvbUpzb24gICAgICAvLyBlbCBtYXBhIHB1ZWRlIHRyYWJhamFyIGNvbiBlbCBzdHJpbmdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTaSBlbCBzdHJpbmcgbm8gc2UgcHVlZGUgcGFyc2VhciwgY2FlbW9zIGEgcmFuZG9tIHBlcm8gY29uc2lzdGVudGVcclxuICAgICAgICByZ2JBcnJheSA9IGdlbmVyYXJDb2xvckFsZWF0b3JpbygpXHJcbiAgICAgICAgY29sb3JGb3JNYXAgPSByZ2JBcnJheVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBoYXkgSlNPTiBwYXJhIGVzdGUgY2FtcG8g4oaSIHJhbmRvbSBwZXJvIGNvbnNpc3RlbnRlXHJcbiAgICAgIHJnYkFycmF5ID0gZ2VuZXJhckNvbG9yQWxlYXRvcmlvKClcclxuICAgICAgY29sb3JGb3JNYXAgPSByZ2JBcnJheVxyXG4gICAgfVxyXG5cclxuICAgIC8vIPCfkYkgRXN0byBlcyBsbyBxdWUgbHVlZ28gdXNhbiBsb3MgZ3LDoWZpY29zOiBzaWVtcHJlIFtyLGcsYl1cclxuICAgIHZhbHVlQ29sb3JbU3RyaW5nKGF0cmlidXRvKV0gPSByZ2JBcnJheVxyXG5cclxuICAgIHN5bWJvbG9neS5wdXNoKHtcclxuICAgICAgdmFsdWU6IGF0cmlidXRvLFxyXG4gICAgICBsYWJlbDogYXRyaWJ1dG8sXHJcbiAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgICBjb2xvcjogY29sb3JGb3JNYXAsXHJcbiAgICAgICAgb3V0bGluZTogbnVsbCxcclxuICAgICAgICBzaXplOiA2XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb2xvckFnZyA9IFsxOTUsIDE5NSwgMTk1XVxyXG4gIGNvbnN0IHJlbmRlcmVyID0gbmV3IFVuaXF1ZVZhbHVlUmVuZGVyZXIoe1xyXG4gICAgZmllbGQ6IGNhbXBvLFxyXG4gICAgZGVmYXVsdFN5bWJvbDoge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbiAgICAgIGNvbG9yOiBjb2xvckFnZyxcclxuICAgICAgb3V0bGluZTogbnVsbCxcclxuICAgICAgc2l6ZTogNlxyXG4gICAgfSxcclxuICAgIHVuaXF1ZVZhbHVlSW5mb3M6IHN5bWJvbG9neVxyXG4gIH0pXHJcblxyXG4gIC8vIPCfkYkgQXF1w60gbWFuZGFzIFNPTE8gYXJyYXlzIFtyLGcsYl0gYWwgd2lkZ2V0IGRlIGdyw6FmaWNvc1xyXG4gIHByb3BzLm9uQXR0KHZhbHVlQ29sb3IpXHJcblxyXG4gIC8vIOKdjCBBbnRlczogY2FwYS5yZW5kZXJlciA9IHJcclxuICAvLyDinIUgQWhvcmE6XHJcbiAgY2FwYS5yZW5kZXJlciA9IHJlbmRlcmVyXHJcbn1cclxuXHJcbiAgICB9XHJcbiAgICBzZXRWYWxvcmVzQWdnKFtdKVxyXG4gIH0sIFtqaW11TWFwVmlldywgbm9tYnJlLCBub21icmVDYXBhLCBlamVjdXRhcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcgJiYgbm9tYnJlICYmIG5vbWJyZUNhcGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsYXllcjEgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKG5vbWJyZUNhcGEpXHJcbiAgICAgIGNsdXN0ZXIgPyBjcmVhdGVQaWVDaGFydFJlbmRlcmVyKGxheWVyMSwgYXR0VW5pY28pIDogbGF5ZXIxLmZlYXR1cmVSZWR1Y3Rpb24gPSB7fTsgc2V0RWplY3V0YXIoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW2NsdXN0ZXJdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1nZXQtbWFwLWNvb3JkaW5hdGVzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXN0YXJ0ZXIgamltdS13aWRnZXRcIj5cclxuICAgICAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy51c2VEYXRhU291cmNlcyAmJiBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXR0cmlidXRlLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICBpZDogJ2Nob29zZUF0dHJpYnV0ZVNlbGVjdG9yTGFiZWwnLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuY2hvb3NlQXR0cmlidXRlXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZmllbGRzTGlzdENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIHVuIGNhbXBvLi4uXCJcclxuICAgICAgICAgICAgICBhdXRvV2lkdGhcclxuICAgICAgICAgICAgICBtZW51UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIHNob3dBcnJvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNhbXBvcykubWFwKChjYW1wbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2FtcG99IHZhbHVlPXtjYW1wb30+e2NhbXBvc1tjYW1wb119PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Lyogeyhub21icmUgPT09ICdUaXBvX2FjY2lkZW50ZScpICYmXHJcbiAgICAgICAgICBzZWxlY3RBZ3JlZ2F0ZShzZWxlY2Npb25hYmxlcylcclxuICAgICAgICB9ICovfVxyXG4gICAgICAgIHsobm9tYnJlID09PSAnU3VidGlwb19BY2NpZGVudGUnKSAmJlxyXG4gICAgICAgICAgc2VsZWN0QWdyZWdhdGUoc2VsZWNjaW9uYWJsZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsvKiB7KG5vbWJyZSA9PT0gJ0HDsW8nKSAmJlxyXG4gICAgICAgICAgc2VsZWN0QWdyZWdhdGUoc2VsZWNjaW9uYWJsZXMpXHJcbiAgICAgICAgfSAqL31cclxuICAgICAgICB7Lyogeyhub21icmUgPT09ICdTdXBlcmZpY2llJykgJiZcclxuICAgICAgICAgIHNlbGVjdEFncmVnYXRlKHNlbGVjY2lvbmFibGVzKVxyXG4gICAgICAgIH0gKi99XHJcbiAgICAgICAgey8qIHsobm9tYnJlID09PSAnRmFjdG9yZXNfYXRtb3NmZXJpY29zJykgJiZcclxuICAgICAgICAgIHNlbGVjdEFncmVnYXRlKHNlbGVjY2lvbmFibGVzKVxyXG4gICAgICAgIH0gKi99XHJcbiAgICAgICAgeyhub21icmUgPT09ICdGYWN0b3JfQ29uY3VycmVudGVfMycpICYmXHJcbiAgICAgICAgICBzZWxlY3RBZ3JlZ2F0ZShzZWxlY2Npb25hYmxlcylcclxuICAgICAgICB9IFxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXR0cmlidXRlLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2VqZWN1Y2lvbn1cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWplY3V0YXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHtlamVjdXRhciAmJlxyXG4gICAgICAgICAgICAgPExvYWRpbmdcclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICB0eXBlPVwiRE9OVVRcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIHsvKiA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImF0dHJpYnV0ZS1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTd2l0Y2ggc3R5bGU9eyB7IHBhZGRpbmdUb3A6ICcxMHB4JyB9IH0gY2hlY2tlZD17Y2x1c3Rlcn0gb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRDbHVzdGVyKCFjbHVzdGVyKVxyXG4gICAgICAgICAgICB9fSAvPiAgIEFjdGl2YSBvIGRlc2FjdGl2YSBlbCBjbMO6c3RlclxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iLCIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnTGV5ZW5kYSBkaW7DoW1pY2EnLFxuICBjaG9vc2VBdHRyaWJ1dGU6ICdWaXN1YWxpemFjacOzbiBwb3IgYXRyaWJ1dG8nXG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxuLy8gZGlzcGF0Y2ggZm9yIENvbW1vbkpTIGludGVyb3AgbmFtZWQgaW1wb3J0cy5cblxudmFyIHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCA9IFJlYWN0LnVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTtcbnZhciBkaWRXYXJuT2xkMThBbHBoYSA9IGZhbHNlO1xudmFyIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gZmFsc2U7IC8vIERpc2NsYWltZXI6IFRoaXMgc2hpbSBicmVha3MgbWFueSBvZiB0aGUgcnVsZXMgb2YgUmVhY3QsIGFuZCBvbmx5IHdvcmtzXG4vLyBiZWNhdXNlIG9mIGEgdmVyeSBwYXJ0aWN1bGFyIHNldCBvZiBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGFuZCBhc3N1bXB0aW9uc1xuLy8gLS0gY2hhbmdlIGFueSBvbmUgb2YgdGhlbSBhbmQgaXQgd2lsbCBicmVhay4gVGhlIG1vc3QgaW1wb3J0YW50IGFzc3VtcHRpb25cbi8vIGlzIHRoYXQgdXBkYXRlcyBhcmUgYWx3YXlzIHN5bmNocm9ub3VzLCBiZWNhdXNlIGNvbmN1cnJlbnQgcmVuZGVyaW5nIGlzXG4vLyBvbmx5IGF2YWlsYWJsZSBpbiB2ZXJzaW9ucyBvZiBSZWFjdCB0aGF0IGFsc28gaGF2ZSBhIGJ1aWx0LWluXG4vLyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBBUEkuIEFuZCB3ZSBvbmx5IHVzZSB0aGlzIHNoaW0gd2hlbiB0aGUgYnVpbHQtaW4gQVBJXG4vLyBkb2VzIG5vdCBleGlzdC5cbi8vXG4vLyBEbyBub3QgYXNzdW1lIHRoYXQgdGhlIGNsZXZlciBoYWNrcyB1c2VkIGJ5IHRoaXMgaG9vayBhbHNvIHdvcmsgaW4gZ2VuZXJhbC5cbi8vIFRoZSBwb2ludCBvZiB0aGlzIHNoaW0gaXMgdG8gcmVwbGFjZSB0aGUgbmVlZCBmb3IgaGFja3MgYnkgb3RoZXIgbGlicmFyaWVzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuZ2V0U2VydmVyU25hcHNob3QpIHtcbiAge1xuICAgIGlmICghZGlkV2Fybk9sZDE4QWxwaGEpIHtcbiAgICAgIGlmIChSZWFjdC5zdGFydFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkaWRXYXJuT2xkMThBbHBoYSA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJ1lvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgJyArICdkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgJyArICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBzaGltIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5LiBVcGdyYWRlICcgKyAndG8gYSBuZXdlciBwcmUtcmVsZWFzZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVhZCB0aGUgY3VycmVudCBzbmFwc2hvdCBmcm9tIHRoZSBzdG9yZSBvbiBldmVyeSByZW5kZXIuIEFnYWluLCB0aGlzXG4gIC8vIGJyZWFrcyB0aGUgcnVsZXMgb2YgUmVhY3QsIGFuZCBvbmx5IHdvcmtzIGhlcmUgYmVjYXVzZSBvZiBzcGVjaWZpY1xuICAvLyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLCBtb3N0IGltcG9ydGFudGx5IHRoYXQgdXBkYXRlcyBhcmVcbiAgLy8gYWx3YXlzIHN5bmNocm9ub3VzLlxuXG5cbiAgdmFyIHZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgdmFyIGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICAgICAgaWYgKCFvYmplY3RJcyh2YWx1ZSwgY2FjaGVkVmFsdWUpKSB7XG4gICAgICAgIGVycm9yKCdUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCcpO1xuXG4gICAgICAgIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQmVjYXVzZSB1cGRhdGVzIGFyZSBzeW5jaHJvbm91cywgd2UgZG9uJ3QgcXVldWUgdGhlbS4gSW5zdGVhZCB3ZSBmb3JjZSBhXG4gIC8vIHJlLXJlbmRlciB3aGVuZXZlciB0aGUgc3Vic2NyaWJlZCBzdGF0ZSBjaGFuZ2VzIGJ5IHVwZGF0aW5nIGFuIHNvbWVcbiAgLy8gYXJiaXRyYXJ5IHVzZVN0YXRlIGhvb2suIFRoZW4sIGR1cmluZyByZW5kZXIsIHdlIGNhbGwgZ2V0U25hcHNob3QgdG8gcmVhZFxuICAvLyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgLy9cbiAgLy8gQmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSB1c2UgdGhlIHN0YXRlIHJldHVybmVkIGJ5IHRoZSB1c2VTdGF0ZSBob29rLCB3ZVxuICAvLyBjYW4gc2F2ZSBhIGJpdCBvZiBtZW1vcnkgYnkgc3RvcmluZyBvdGhlciBzdHVmZiBpbiB0aGF0IHNsb3QuXG4gIC8vXG4gIC8vIFRvIGltcGxlbWVudCB0aGUgZWFybHkgYmFpbG91dCwgd2UgbmVlZCB0byB0cmFjayBzb21lIHRoaW5ncyBvbiBhIG11dGFibGVcbiAgLy8gb2JqZWN0LiBVc3VhbGx5LCB3ZSB3b3VsZCBwdXQgdGhhdCBpbiBhIHVzZVJlZiBob29rLCBidXQgd2UgY2FuIHN0YXNoIGl0IGluXG4gIC8vIG91ciB1c2VTdGF0ZSBob29rIGluc3RlYWQuXG4gIC8vXG4gIC8vIFRvIGZvcmNlIGEgcmUtcmVuZGVyLCB3ZSBjYWxsIGZvcmNlVXBkYXRlKHtpbnN0fSkuIFRoYXQgd29ya3MgYmVjYXVzZSB0aGVcbiAgLy8gbmV3IG9iamVjdCBhbHdheXMgZmFpbHMgYW4gZXF1YWxpdHkgY2hlY2suXG5cblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgIGluc3Q6IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdFxuICAgIH1cbiAgfSksXG4gICAgICBpbnN0ID0gX3VzZVN0YXRlWzBdLmluc3QsXG4gICAgICBmb3JjZVVwZGF0ZSA9IF91c2VTdGF0ZVsxXTsgLy8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgLy8gaW4gdGhlIGxheW91dCBwaGFzZSBzbyB3ZSBjYW4gYWNjZXNzIGl0IGR1cmluZyB0aGUgdGVhcmluZyBjaGVjayB0aGF0XG4gIC8vIGhhcHBlbnMgb24gc3Vic2NyaWJlLlxuXG5cbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gICAgaW5zdC5nZXRTbmFwc2hvdCA9IGdldFNuYXBzaG90OyAvLyBXaGVuZXZlciBnZXRTbmFwc2hvdCBvciBzdWJzY3JpYmUgY2hhbmdlcywgd2UgbmVlZCB0byBjaGVjayBpbiB0aGVcbiAgICAvLyBjb21taXQgcGhhc2UgaWYgdGhlcmUgd2FzIGFuIGludGVybGVhdmVkIG11dGF0aW9uLiBJbiBjb25jdXJyZW50IG1vZGVcbiAgICAvLyB0aGlzIGNhbiBoYXBwZW4gYWxsIHRoZSB0aW1lLCBidXQgZXZlbiBpbiBzeW5jaHJvbm91cyBtb2RlLCBhbiBlYXJsaWVyXG4gICAgLy8gZWZmZWN0IG1heSBoYXZlIG11dGF0ZWQgdGhlIHN0b3JlLlxuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0OiBpbnN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIHJpZ2h0IGJlZm9yZSBzdWJzY3JpYmluZy4gU3Vic2VxdWVudCBjaGFuZ2VzIHdpbGwgYmVcbiAgICAvLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0OiBpbnN0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUT0RPOiBCZWNhdXNlIHRoZXJlIGlzIG5vIGNyb3NzLXJlbmRlcmVyIEFQSSBmb3IgYmF0Y2hpbmcgdXBkYXRlcywgaXQnc1xuICAgICAgLy8gdXAgdG8gdGhlIGNvbnN1bWVyIG9mIHRoaXMgbGlicmFyeSB0byB3cmFwIHRoZWlyIHN1YnNjcmlwdGlvbiBldmVudFxuICAgICAgLy8gd2l0aCB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcy4gU2hvdWxkIHdlIHRyeSB0byBkZXRlY3Qgd2hlbiB0aGlzIGlzbid0XG4gICAgICAvLyB0aGUgY2FzZSBhbmQgcHJpbnQgYSB3YXJuaW5nIGluIGRldmVsb3BtZW50P1xuICAgICAgLy8gVGhlIHN0b3JlIGNoYW5nZWQuIENoZWNrIGlmIHRoZSBzbmFwc2hvdCBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgd2VcbiAgICAgIC8vIHJlYWQgZnJvbSB0aGUgc3RvcmUuXG4gICAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgICAvLyBGb3JjZSBhIHJlLXJlbmRlci5cbiAgICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICAgIGluc3Q6IGluc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTsgLy8gU3Vic2NyaWJlIHRvIHRoZSBzdG9yZSBhbmQgcmV0dXJuIGEgY2xlYW4tdXAgZnVuY3Rpb24uXG5cblxuICAgIHJldHVybiBzdWJzY3JpYmUoaGFuZGxlU3RvcmVDaGFuZ2UpO1xuICB9LCBbc3Vic2NyaWJlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICB2YXIgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICB2YXIgcHJldlZhbHVlID0gaW5zdC52YWx1ZTtcblxuICB0cnkge1xuICAgIHZhciBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgIHJldHVybiAhb2JqZWN0SXMocHJldlZhbHVlLCBuZXh0VmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuICAvLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbiAgLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4gIC8vIGZyb20gYGdldFNuYXBzaG90YC5cbiAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKTtcblxudmFyIGlzU2VydmVyRW52aXJvbm1lbnQgPSAhY2FuVXNlRE9NO1xuXG52YXIgc2hpbSA9IGlzU2VydmVyRW52aXJvbm1lbnQgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIDogdXNlU3luY0V4dGVybmFsU3RvcmU7XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUkMiA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlICE9PSB1bmRlZmluZWQgPyBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSA6IHNoaW07XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltJyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHNoaW0udXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3JlbmRlcmVyc19VbmlxdWVWYWx1ZVJlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc21hcnRNYXBwaW5nX3JlbmRlcmVyc19waWVDaGFydF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zLCB0eXBlIFdpZGdldFByb3BzLCBXaWRnZXRNYW5hZ2VyLCB0eXBlIElNU3RhdGUsIHR5cGUgSU1BcHBDb25maWcsIFdpZGdldFN0YXRlIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IERpbkxleWVuZCBmcm9tICcuLi8uLi8uLi9sZXllbmRhX2RpbmFtaWNhL3NyYy9ydW50aW1lL3dpZGdldC50c3gnXHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdsb2Rhc2gtZXMnXHJcbmltcG9ydCB7IGNtcCB9IGZyb20gJ3NlbXZlcidcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gPSBSZWFjdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8dW5rbm93bj4pIHtcclxuICBjb25zdCBbYXBwV2lkZ2V0cywgc2V0QXBwV2lkZ2V0c10gPSB1c2VTdGF0ZSh7fSBhcyB1bmtub3duKVxyXG4gIGNvbnN0IFtjaGFydGJhcldpZGdldElkLCBzZXRDaGFydFdpZGdldElkXSA9IHVzZVN0YXRlKG51bGwgYXMgc3RyaW5nKVxyXG4gIGNvbnN0IFtjaGFydFdpZGdldHNBcnJheSwgc2V0Q2hhcnRXaWRnZXRzQXJyYXldID0gdXNlU3RhdGUoW10gYXMgYW55W10pXHJcbiAgY29uc3QgW2NhbXBvLCBzZXRDYW1wb10gPSB1c2VTdGF0ZShudWxsIGFzIHN0cmluZylcclxuICBjb25zdCBbam12cywgc2V0Sm12c10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtlamVjdXRhciwgc2V0RWplY3V0YXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2F0dFVuaXF1ZSwgc2V0QXR0VW5pcXVlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgcmVmRWxlbWVudG8gPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgZWplY3V0YXJDaGFydCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnQ0hBUlRfRUpFQ1VUQURPJ1xyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VDaGFydENvbnRhZG9yZXMgKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICB1cmk6ICd3aWRnZXRzL2NvbW1vbi9jaGFydC8nLFxyXG4gICAgICB2ZXJzaW9uOiAnMS4xNC4wJyxcclxuICAgICAgbGFiZWw6ICdHcsOhZmljbyAyMScsXHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgICBjdXJzb3JFbmFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiAnY29sdW1uJyxcclxuICAgICAgICB3ZWJDaGFydDoge1xyXG4gICAgICAgICAgdmVyc2lvbjogJzcuMy4xJyxcclxuICAgICAgICAgIGlkOiAnY29sdW1uJyxcclxuICAgICAgICAgIHR5cGU6ICdjaGFydCcsXHJcbiAgICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M6IFtcclxuICAgICAgICAgICAgICAgICdBw7FvJ1xyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgb3V0U3RhdGlzdGljczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzdGF0aXN0aWNUeXBlOiAnc3VtJyxcclxuICAgICAgICAgICAgICAgICAgb25TdGF0aXN0aWNGaWVsZDogJ05BQ1ZfbicsXHJcbiAgICAgICAgICAgICAgICAgIG91dFN0YXRpc3RpY0ZpZWxkTmFtZTogJ3N1bV9vZl9OQUNWX24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzdGF0aXN0aWNUeXBlOiAnc3VtJyxcclxuICAgICAgICAgICAgICAgICAgb25TdGF0aXN0aWNGaWVsZDogJ1YnLFxyXG4gICAgICAgICAgICAgICAgICBvdXRTdGF0aXN0aWNGaWVsZE5hbWU6ICdzdW1fb2ZfVidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY1R5cGU6ICdzdW0nLFxyXG4gICAgICAgICAgICAgICAgICBvblN0YXRpc3RpY0ZpZWxkOiAnTkFUX24nLFxyXG4gICAgICAgICAgICAgICAgICBvdXRTdGF0aXN0aWNGaWVsZE5hbWU6ICdzdW1fb2ZfTkFUX24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBvcmRlckJ5RmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICAnQcOxbyBBU0MnXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB3aGVyZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNvcnRMYWJlbHNCeTogJ3lWYWx1ZScsXHJcbiAgICAgICAgICBzb3J0TGFiZWxzT3JkZXI6ICdkZXNjZW5kaW5nJyxcclxuICAgICAgICAgIHJvdGF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdiYXJTZXJpZXMnLFxyXG4gICAgICAgICAgICAgIGlkOiAnTkFDVl9uJyxcclxuICAgICAgICAgICAgICBuYW1lOiAnU3VtYSBOQUNWJyxcclxuICAgICAgICAgICAgICB4OiAnQcOxbycsXHJcbiAgICAgICAgICAgICAgeTogJ3N1bV9vZl9OQUNWX24nLFxyXG4gICAgICAgICAgICAgIGNvbG9yVHlwZTogJ3NpbmdsZUNvbG9yJyxcclxuICAgICAgICAgICAgICBzdGFja2VkVHlwZTogJ3NpZGVCeVNpZGUnLFxyXG4gICAgICAgICAgICAgIGZpbGxTeW1ib2w6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0ZTJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNGU1NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzVFOEZEMCcsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTkwMCknLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay02MDApJyxcclxuICAgICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcm90YXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YVRvb2x0aXBWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiAnYmFyU2VyaWVzJyxcclxuICAgICAgICAgICAgICBpZDogJ1YnLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdTdW1hIFYnLFxyXG4gICAgICAgICAgICAgIHg6ICdBw7FvJyxcclxuICAgICAgICAgICAgICB5OiAnc3VtX29mX1YnLFxyXG4gICAgICAgICAgICAgIGNvbG9yVHlwZTogJ3NpbmdsZUNvbG9yJyxcclxuICAgICAgICAgICAgICBzdGFja2VkVHlwZTogJ3NpZGVCeVNpZGUnLFxyXG4gICAgICAgICAgICAgIGZpbGxTeW1ib2w6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0ZTJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNGU1NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzc3QjQ4NCcsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTkwMCknLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay02MDApJyxcclxuICAgICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcm90YXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YVRvb2x0aXBWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiAnYmFyU2VyaWVzJyxcclxuICAgICAgICAgICAgICBpZDogJ05BVF9uJyxcclxuICAgICAgICAgICAgICBuYW1lOiAnU3VtYSBOQVQnLFxyXG4gICAgICAgICAgICAgIHg6ICdBw7FvJyxcclxuICAgICAgICAgICAgICB5OiAnc3VtX29mX05BVF9uJyxcclxuICAgICAgICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgICAgICAgc3RhY2tlZFR5cGU6ICdzaWRlQnlTaWRlJyxcclxuICAgICAgICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNERjZCMzUnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC05MDApJyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNjAwKScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHJvdGF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGFUb29sdGlwVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYXhlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0QXhpcycsXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0xvZ2FyaXRobWljOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTgwMCknLFxyXG4gICAgICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY29yYXRpb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQWNjaWRlbnRlcyBwb3IgYcOxbyAoTkFDViwgViBOQVQpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNTAwKScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHZhbHVlRm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyTGltaXQ6IDExXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsaW5lU3ltYm9sOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTgwMCknLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU0Rhc2gnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC0zMDApJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0QXhpcycsXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0xvZ2FyaXRobWljOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay04MDApJyxcclxuICAgICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNTAwKScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHZhbHVlRm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIGludGxPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbGluZVN5bWJvbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC04MDApJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNEYXNoJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMzAwKScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS13aGl0ZSknLFxyXG4gICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJsYWNrKScsXHJcbiAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjQsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTgwMCknLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgIHNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIGRlY29yYXRpb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcnRMZWdlbmQnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstODAwKScsXHJcbiAgICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay04MDApJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGlkOiAnd2lkZ2V0Xzg5JyxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6ICdkYXRhU291cmNlXzEtQWNjaWRlbnRlc1NleXNfMTcwOV81MjExJyxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6ICdkYXRhU291cmNlXzEtQWNjaWRlbnRlc1NleXNfMTcwOV81MjExJyxcclxuICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6ICdkYXRhU291cmNlXzEnLFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICdBw7FvJyxcclxuICAgICAgICAgICAgJ05BQ1ZfbicsXHJcbiAgICAgICAgICAgICdWJyxcclxuICAgICAgICAgICAgJ05BVF9uJ1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0RGF0YVNvdXJjZXM6IFtcclxuICAgICAgICAnd2lkZ2V0Xzg5X291cHV0J1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBtYWtlQ2hhcnQgY29uIGNvbmZpZ2JhcnJhcyAvIGNvbmZpZ3BpZSA9PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG1ha2VDaGFydCAoaWQsIGdyb3VwQnksIGNhbXBvLCB2YWx1ZXMsIGlkV2lkZ2V0KSB7XHJcbiAgICBjb25zdCBtYWtlU2VyaWVzID0gKHZhbHVlcywgZ3JvdXBCeSwgY2FtcG8pID0+IHtcclxuICAgICAgY29uc3QgbGlzdFNlcmllcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnYmFyU2VyaWVzJyxcclxuICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgeDogZ3JvdXBCeSxcclxuICAgICAgICAgIHk6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgICBzdGFja2VkVHlwZTogJ3N0YWNrZWQnLFxyXG4gICAgICAgICAgZmlsbFN5bWJvbDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNGU1NvbGlkJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjNUU4RkQwJyxcclxuICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC05MDApJyxcclxuICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNjAwKScsXHJcbiAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRpc3BsYXlQZXJjZW50YWdlT25EYXRhTGFiZWw6IHRydWUsXHJcbiAgICAgICAgICBkaXNwbGF5TnVtZXJpY1ZhbHVlT25EYXRhTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YUxhYmVsc09mZnNldDogNSxcclxuICAgICAgICAgIHJvdGF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YVRvb2x0aXBWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgd2hlcmU6IGAke2NhbXBvfT0nJ2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICBjb25zdCBzZXJpZXMgPSB7XHJcbiAgICAgICAgICB0eXBlOiAnYmFyU2VyaWVzJyxcclxuICAgICAgICAgIGlkOiB2YWx1ZSxcclxuICAgICAgICAgIG5hbWU6IHZhbHVlLFxyXG4gICAgICAgICAgeDogZ3JvdXBCeSxcclxuICAgICAgICAgIHk6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgICBzdGFja2VkVHlwZTogJ3N0YWNrZWQnLFxyXG4gICAgICAgICAgZmlsbFN5bWJvbDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNGU1NvbGlkJyxcclxuICAgICAgICAgICAgY29sb3I6IGByZ2IoJHt2YWx1ZXNbdmFsdWVdWzBdfSwgJHt2YWx1ZXNbdmFsdWVdWzFdfSwgJHt2YWx1ZXNbdmFsdWVdWzJdfSlgLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTkwMCknLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay02MDApJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcm90YXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhVG9vbHRpcFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB3aGVyZTogYCR7Y2FtcG99PScke3ZhbHVlfSdgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RTZXJpZXMucHVzaChzZXJpZXMpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbGFzdEVsZW0gPSB7XHJcbiAgICAgICAgdHlwZTogJ2JhclNlcmllcycsXHJcbiAgICAgICAgaWQ6ICdfX290aGVyLXNwbGl0LXZhbHVlX18nLFxyXG4gICAgICAgIG5hbWU6ICdVbmRlZmluZWQnLFxyXG4gICAgICAgIHg6IGdyb3VwQnksXHJcbiAgICAgICAgeTogJ09CSkVDVElEJyxcclxuICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgc3RhY2tlZFR5cGU6ICdzdGFja2VkJyxcclxuICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXHJcbiAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICBjb2xvcjogJyNENkQ2RDYnLFxyXG4gICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC05MDApJyxcclxuICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNjAwKScsXHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvdGF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFUb29sdGlwVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgd2hlcmU6IFwiVGlwb19hY2NpZGVudGU9J19fb3RoZXItc3BsaXQtdmFsdWVfXydcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0U2VyaWVzLnB1c2gobGFzdEVsZW0pXHJcbiAgICAgIHJldHVybiBsaXN0U2VyaWVzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGllIG5vcm1hbCAocXVlc2l0b3MgcGVxdWXDsW9zKVxyXG4gICAgY29uc3QgbWFrZVNlcmllc1BpZSA9IChjYW1wbywgdmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RTZXJpZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3BpZVNlcmllcycsXHJcbiAgICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgICBpZDogJ09CSkVDVElEJyxcclxuICAgICAgICAgIG5hbWU6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICB4OiBjYW1wbyxcclxuICAgICAgICAgIHk6ICdjb3VudF9vZl9PQkpFQ1RJRCcsXHJcbiAgICAgICAgICBpbm5lclJhZGl1czogMCxcclxuICAgICAgICAgIC8vIPCfkYkgZW1wZXphbW9zIGEgXCJ5IGN1YXJ0b1wiICgzIGVuIHB1bnRvKVxyXG4gICAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxyXG4gICAgICAgICAgZW5kQW5nbGU6IDI3MCxcclxuICAgICAgICAgIGRpc3BsYXlOdW1lcmljVmFsdWVPbkRhdGFMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlQZXJjZW50YWdlT25EYXRhTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheU51bWVyaWNWYWx1ZU9uVG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlQZXJjZW50YWdlT25Ub29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YUxhYmVsc09mZnNldDogMixcclxuICAgICAgICAgIHNsaWNlR3JvdXBpbmc6IHtcclxuICAgICAgICAgICAgc2xpY2VJZDogJ19fb3RoZXItc2xpY2VfXycsXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VUaHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3RoZXInLFxyXG4gICAgICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTRlMnLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNGU1NvbGlkJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyNENkQ2RDYnLFxyXG4gICAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMTAwKScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG51bWVyaWNWYWx1ZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgaW50bE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBzdHlsZTogJ2RlY2ltYWwnLFxyXG4gICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcclxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBlcmNlbnRWYWx1ZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgaW50bE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBzdHlsZTogJ3BlcmNlbnQnLFxyXG4gICAgICAgICAgICAgIG5vdGF0aW9uOiAnc3RhbmRhcmQnLFxyXG4gICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcclxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZpbGxTeW1ib2w6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VzcmlTRlMnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0Q2RDZENicsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMTAwKScsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTYwMCknLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgIHNpemU6IDgsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIGRlY29yYXRpb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgIHdyYXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YVRvb2x0aXBWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgd2hlcmU6IGAke2NhbXBvfT0nJ2BcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzbGljZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNsaWNlSWQ6ICcnLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM1RThGRDAnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC0xMDApJyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpY2UgPSB7XHJcbiAgICAgICAgICBzbGljZUlkOiB2YWx1ZSxcclxuICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcclxuICAgICAgICAgIGZpbGxTeW1ib2w6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VzcmlTRlMnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiBgcmdiKCR7dmFsdWVzW3ZhbHVlXVswXX0sICR7dmFsdWVzW3ZhbHVlXVsxXX0sICR7dmFsdWVzW3ZhbHVlXVsyXX0pYCxcclxuICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC0xMDApJyxcclxuICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RTZXJpZXNbMF0uc2xpY2VzLnB1c2goc2xpY2UpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBsaXN0U2VyaWVzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGllIGdyYW5kZSAod2lkZ2V0XzU1KVxyXG4gICAgY29uc3QgbWFrZVNlcmllc1BpZU1heCA9IChjYW1wbywgdmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RTZXJpZXNNYXggPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3BpZVNlcmllcycsXHJcbiAgICAgICAgICBjb2xvclR5cGU6ICdzaW5nbGVDb2xvcicsXHJcbiAgICAgICAgICBpZDogJ09CSkVDVElEJyxcclxuICAgICAgICAgIG5hbWU6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICB4OiBjYW1wbyxcclxuICAgICAgICAgIHk6ICdjb3VudF9vZl9PQkpFQ1RJRCcsXHJcbiAgICAgICAgICBpbm5lclJhZGl1czogMCxcclxuICAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXHJcbiAgICAgICAgICBlbmRBbmdsZTogMzYwLFxyXG4gICAgICAgICAgZGlzcGxheU51bWVyaWNWYWx1ZU9uRGF0YUxhYmVsOiB0cnVlLFxyXG4gICAgICAgICAgZGlzcGxheVBlcmNlbnRhZ2VPbkRhdGFMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlOdW1lcmljVmFsdWVPblRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICBkaXNwbGF5UGVyY2VudGFnZU9uVG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgIGRhdGFMYWJlbHNPZmZzZXQ6IC0xMDAsXHJcbiAgICAgICAgICBzbGljZUdyb3VwaW5nOiB7XHJcbiAgICAgICAgICAgIHNsaWNlSWQ6ICdfX290aGVyLXNsaWNlX18nLFxyXG4gICAgICAgICAgICBwZXJjZW50YWdlVGhyZXNob2xkOiAwLFxyXG4gICAgICAgICAgICBsYWJlbDogJ090aGVyJyxcclxuICAgICAgICAgICAgZmlsbFN5bWJvbDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpU0ZTJyxcclxuICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTRlNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjRDZENkQ2JyxcclxuICAgICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTEwMCknLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBudW1lcmljVmFsdWVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGludGxPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdkZWNpbWFsJyxcclxuICAgICAgICAgICAgICB1c2VHcm91cGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwZXJjZW50VmFsdWVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGludGxPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdwZXJjZW50JyxcclxuICAgICAgICAgICAgICBub3RhdGlvbjogJ3N0YW5kYXJkJyxcclxuICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpU0ZTJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0ZTU29saWQnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNENkQ2RDYnLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU1NvbGlkJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTEwMCknLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTYwMCknLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICAgIHNpemU6IDEzLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgICB3cmFwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGFUb29sdGlwVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHdoZXJlOiBgJHtjYW1wb309JydgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2xpY2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzbGljZUlkOiAnJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgICAgICAgZmlsbFN5bWJvbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTRlMnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0ZTU29saWQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNUU4RkQwJyxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMTAwKScsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlcykge1xyXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xyXG4gICAgICAgICAgc2xpY2VJZDogdmFsdWUsXHJcbiAgICAgICAgICBsYWJlbDogdmFsdWUsXHJcbiAgICAgICAgICBmaWxsU3ltYm9sOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpU0ZTJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0ZTU29saWQnLFxyXG4gICAgICAgICAgICBjb2xvcjogYHJnYigke3ZhbHVlc1t2YWx1ZV1bMF19LCAke3ZhbHVlc1t2YWx1ZV1bMV19LCAke3ZhbHVlc1t2YWx1ZV1bMl19KWAsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMTAwKScsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0U2VyaWVzTWF4WzBdLnNsaWNlcy5wdXNoKHNsaWNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbGlzdFNlcmllc01heFxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT0gZWxlZ2lyIHNlcmllcyA9PT09PT09PT09PT09PT09PT09XHJcbiAgICBsZXQgc2VyaWVzXHJcbiAgICBpZiAoaWQgPT09ICdjb2x1bW4nKSB7XHJcbiAgICAgIHNlcmllcyA9IG1ha2VTZXJpZXModmFsdWVzLCBncm91cEJ5LCBjYW1wbylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpZFdpZGdldCA9PT0gJ3dpZGdldF81NScpIHtcclxuICAgICAgICBzZXJpZXMgPSBtYWtlU2VyaWVzUGllTWF4KGNhbXBvLCB2YWx1ZXMpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VyaWVzID0gbWFrZVNlcmllc1BpZShjYW1wbywgdmFsdWVzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PSBwYXJ0ZXMgY29tdW5lcyA9PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBjb21tb25BeGVzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoYXJ0QXhpcycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2FyaXRobWljOiBmYWxzZSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay04MDApJyxcclxuICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICBzaXplOiAxNCxcclxuICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnbWlkZGxlJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNTAwKScsXHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ21pZGRsZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlRm9ybWF0OiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgY2hhcmFjdGVyTGltaXQ6IDExXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5lU3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNTb2xpZCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3ZhcigtLWxpZ2h0LTgwMCknLFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcclxuICAgICAgICAgIHN0eWxlOiAnZXNyaVNMU0Rhc2gnLFxyXG4gICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC0zMDApJyxcclxuICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoYXJ0QXhpcycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2FyaXRobWljOiBmYWxzZSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay04MDApJyxcclxuICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgICAgICBzaXplOiAxNCxcclxuICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnbWlkZGxlJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNTAwKScsXHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ21pZGRsZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlRm9ybWF0OiB7XHJcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgIGludGxPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXHJcbiAgICAgICAgICAgIHVzZUdyb3VwaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZVN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxyXG4gICAgICAgICAgc3R5bGU6ICdlc3JpU0xTU29saWQnLFxyXG4gICAgICAgICAgY29sb3I6ICd2YXIoLS1saWdodC04MDApJyxcclxuICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZXNyaVNMUycsXHJcbiAgICAgICAgICBzdHlsZTogJ2VzcmlTTFNEYXNoJyxcclxuICAgICAgICAgIGNvbG9yOiAndmFyKC0tbGlnaHQtMzAwKScsXHJcbiAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGNvbW1vbkZvb3RlciA9IHtcclxuICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstODAwKScsXHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tbW9uVGl0bGUgPSB7XHJcbiAgICAgIHR5cGU6ICdjaGFydFRleHQnLFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdHlwZTogJ2VzcmlUUycsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS1ibGFjayknLFxyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcclxuICAgICAgICAgIHNpemU6IDI0LFxyXG4gICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgIGRlY29yYXRpb246ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgdGV4dDogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT0gQ09ORklHIEJBUlJBUyA9PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBjb25maWdiYXJyYXMgPSB7XHJcbiAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgY3Vyc29yRW5hYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlOiBpZCxcclxuICAgICAgd2ViQ2hhcnQ6IHtcclxuICAgICAgICB2ZXJzaW9uOiAnNy4zLjEnLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICB0eXBlOiAnY2hhcnQnLFxyXG4gICAgICAgIGF4ZXM6IGNvbW1vbkF4ZXMsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLXdoaXRlKScsXHJcbiAgICAgICAgZGF0YVNvdXJjZToge1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M6IFtcclxuICAgICAgICAgICAgICBncm91cEJ5XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG91dFN0YXRpc3RpY3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWNUeXBlOiAnY291bnQnLFxyXG4gICAgICAgICAgICAgICAgb25TdGF0aXN0aWNGaWVsZDogJ09CSkVDVElEJyxcclxuICAgICAgICAgICAgICAgIG91dFN0YXRpc3RpY0ZpZWxkTmFtZTogJ2NvdW50X29mX09CSkVDVElEJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1xyXG4gICAgICAgICAgICAgIGAke2dyb3VwQnl9IEFTQ2BcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgd2hlcmU6IGAke2NhbXBvfT17dmFsdWV9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiBjb21tb25Gb290ZXIsXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hhcnRMZWdlbmQnLFxyXG4gICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICBsYWJlbE1heFdpZHRoOiAyMDAsXHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hhcnRUZXh0JyxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFyay04MDApJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlc3JpVFMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstODAwKScsXHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXHJcbiAgICAgICAgICAgICAgc2l6ZTogOSxcclxuICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3J0TGFiZWxzQnk6ICdvcmlnaW5hbFZhbHVlJyxcclxuICAgICAgICBzb3J0TGFiZWxzT3JkZXI6ICdhc2NlbmRpbmcnLFxyXG4gICAgICAgIHJvdGF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlcmllczogc2VyaWVzLFxyXG4gICAgICAgIHRpdGxlOiBjb21tb25UaXRsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PSBDT05GSUcgUElFID09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGNvbmZpZ3BpZSA9IHtcclxuICAgICAgdG9vbHM6IHtcclxuICAgICAgICBjdXJzb3JFbmFibGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6IGlkLFxyXG4gICAgICB3ZWJDaGFydDoge1xyXG4gICAgICAgIHZlcnNpb246ICc3LjMuMScsXHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHR5cGU6ICdjaGFydCcsXHJcbiAgICAgICAgYXhlczogY29tbW9uQXhlcyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0td2hpdGUpJyxcclxuICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljczogW1xyXG4gICAgICAgICAgICAgIGdyb3VwQnlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3V0U3RhdGlzdGljczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXRpc3RpY1R5cGU6ICdjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBvblN0YXRpc3RpY0ZpZWxkOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICAgICAgb3V0U3RhdGlzdGljRmllbGROYW1lOiAnY291bnRfb2ZfT0JKRUNUSUQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyDwn5GJIG9yZGVuYXIgcXVlc2l0b3MgZGUgbWF5b3IgYSBtZW5vciBwb3JjZW50YWplXHJcbiAgICAgICAgICAgIG9yZGVyQnlGaWVsZHM6IFtcclxuICAgICAgICAgICAgICAnY291bnRfb2ZfT0JKRUNUSUQgREVTQydcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgd2hlcmU6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IGNvbW1vbkZvb3RlcixcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIHR5cGU6ICdjaGFydExlZ2VuZCcsXHJcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxyXG4gICAgICAgICAgbGFiZWxNYXhXaWR0aDogMjAwLFxyXG4gICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoYXJ0VGV4dCcsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWRhcmstODAwKScsXHJcbiAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICB0eXBlOiAnZXNyaVRTJyxcclxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTgwMCknLFxyXG4gICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgZmFtaWx5OiAnQXZlbmlyIE5leHQnLFxyXG4gICAgICAgICAgICAgIHNpemU6IDksXHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgIGRlY29yYXRpb246ICdub25lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29ydExhYmVsc0J5OiAnb3JpZ2luYWxWYWx1ZScsXHJcbiAgICAgICAgc29ydExhYmVsc09yZGVyOiAnZGVzY2VuZGluZycsXHJcbiAgICAgICAgcm90YXRlZDogZmFsc2UsXHJcbiAgICAgICAgc2VyaWVzOiBzZXJpZXMsXHJcbiAgICAgICAgdGl0bGU6IGNvbW1vblRpdGxlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn5GJIGRldm9sdmVtb3MgbGEgY29uZmlnIGNvcnJlY3RhXHJcbiAgICByZXR1cm4gaWQgPT09ICdjb2x1bW4nID8gY29uZmlnYmFycmFzIDogY29uZmlncGllXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAobmV3U3RhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q2FtcG8obmV3U3RhdGUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSdW4gPSAocnVuOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRFamVjdXRhcihydW4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBdHQgPSAoYXR0OiB7fSkgPT4ge1xyXG4gICAgc2V0QXR0VW5pcXVlKGF0dClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNsZWVwIChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIHNldEptdnMoam12KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQcOhZGUgcHJvcHMgZ2xvYmFsZXMgY3VhbmRvIHNlIHB1bHNhIEVqZWN1dGFyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChqbXZzKSB7XHJcbiAgICAgIGNvbnN0IGFwcENvbmYgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnXHJcbiAgICAgIGFwcENvbmYubGFzdEZpbHRlciA9IGptdnMudmlldy5tYXAubGF5ZXJzLml0ZW1zWzE3XS5kZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgICBpZiAoZWplY3V0YXIpIHtcclxuICAgICAgICBhcHBDb25mLmNvdW50ZXIgPSBhcHBDb25mLmNvdW50ZXIgPyBhcHBDb25mLmNvdW50ZXIgKyAxIDogMVxyXG4gICAgICB9XHJcbiAgICAgIGRpc3BhdGNoKGVqZWN1dGFyQ2hhcnQoKSlcclxuICAgIH1cclxuICB9LCBbZWplY3V0YXJdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF0dFVuaXF1ZSAmJiBlamVjdXRhcikge1xyXG4gICAgICBjb25zdCBncm91cEJ5V2lkZ2V0cyA9IHtcclxuICAgICAgICB3aWRnZXRfMjogY2FtcG8sXHJcbiAgICAgICAgd2lkZ2V0XzQ6ICdBw7FvJyxcclxuICAgICAgICB3aWRnZXRfNTogJ01lcycsXHJcbiAgICAgICAgd2lkZ2V0XzY6ICdEaWEnLFxyXG4gICAgICAgIHdpZGdldF83OiAnTWVzX0HDsW8nLFxyXG4gICAgICAgIHdpZGdldF85OiAnUEsnLFxyXG4gICAgICAgIHdpZGdldF8xMDogJ0tpbG9tZXRybycsXHJcbiAgICAgICAgd2lkZ2V0XzEwMjogJ0HDsW8nLFxyXG4gICAgICAgIHdpZGdldF81ODogJ01lcycsXHJcbiAgICAgICAgd2lkZ2V0Xzg1OiAnRGlhJyxcclxuICAgICAgICB3aWRnZXRfNjA6ICdNZXNfQcOxbycsXHJcbiAgICAgICAgd2lkZ2V0XzY4OiAnUEsnLFxyXG4gICAgICAgIHdpZGdldF82NzogJ0tpbG9tZXRybycsXHJcbiAgICAgICAgd2lkZ2V0XzU1OiBjYW1wbyxcclxuICAgICAgICB3aWRnZXRfMTMyOiAnQcOxbycsXHJcbiAgICAgICAgd2lkZ2V0XzE2ODogY2FtcG8sXHJcbiAgICAgICAgd2lkZ2V0XzE1OTogJ0HDsW8nLFxyXG4gICAgICAgIHdpZGdldF8xNjA6ICdNZXMnLFxyXG4gICAgICAgIHdpZGdldF8xNjE6ICdEaWEnLFxyXG4gICAgICAgIHdpZGdldF8xNjI6ICdNZXNfQcOxbycsXHJcbiAgICAgICAgd2lkZ2V0XzE3MjogJ0tpbG9tZXRybycsXHJcbiAgICAgICAgd2lkZ2V0XzE3MzogJ1BLJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHdpZGdldCBpbiBjaGFydFdpZGdldHNBcnJheSkge1xyXG4gICAgICAgIGlmIChjaGFydFdpZGdldHNBcnJheVt3aWRnZXRdLmlkID09PSAnd2lkZ2V0XzInKSB7XHJcbiAgICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0Q29uZmlnTG9hZGVkKFxyXG4gICAgICAgICAgICBjaGFydFdpZGdldHNBcnJheVt3aWRnZXRdLmlkLFxyXG4gICAgICAgICAgICBtYWtlQ2hhcnQoJ3BpZScsIGdyb3VwQnlXaWRnZXRzW2NoYXJ0V2lkZ2V0c0FycmF5W3dpZGdldF0uaWRdLCBjYW1wbywgYXR0VW5pcXVlLCBjaGFydFdpZGdldHNBcnJheVt3aWRnZXRdLmlkKVxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJ0V2lkZ2V0c0FycmF5W3dpZGdldF0uaWQgPT09ICd3aWRnZXRfODknKSB7XHJcbiAgICAgICAgICBtYWtlQ2hhcnRDb250YWRvcmVzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldENvbmZpZ0xvYWRlZChcclxuICAgICAgICAgICAgY2hhcnRXaWRnZXRzQXJyYXlbd2lkZ2V0XS5pZCxcclxuICAgICAgICAgICAgbWFrZUNoYXJ0KCdjb2x1bW4nLCBncm91cEJ5V2lkZ2V0c1tjaGFydFdpZGdldHNBcnJheVt3aWRnZXRdLmlkXSwgY2FtcG8sIGF0dFVuaXF1ZSwgbnVsbClcclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEHDsWFkZSBsYSBzaW1ib2xvZ8OtYSBhbCBncsOhZmljbyBkZSBxdWVzaXRvIGdyYW5kZVxyXG4gICAgICAgIHNldENoYXJ0Q2F0ZWdvcnlBbmRDb2xvcnMoJ3dpZGdldF8xNjgnLCBjYW1wbywgYXR0VW5pcXVlKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWdcclxuICAgICAgYXBwQ29uZmlnLmNhbXBvID0gY2FtcG9cclxuICAgICAgc2V0RWplY3V0YXIoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW2NhbXBvLCBhdHRVbmlxdWVdKVxyXG5cclxuICAvLyBOb3JtYWxpemEgYXR0VW5pcXVlIGEgQ29sb3JNYXAgKHN0cmluZy0+Q1NTIGNvbG9yKVxyXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUF0dFVuaXF1ZSAoYXR0VW5pcXVlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICBjb25zdCB0b0NzcyA9ICh2OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykgcmV0dXJuIHZcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikgJiYgdi5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IHZcclxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0VW5pcXVlIHx8IHt9KSkge1xyXG4gICAgICBjb25zdCBjID0gdG9Dc3ModilcclxuICAgICAgaWYgKGMpIG91dFtrXSA9IGNcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldENoYXJ0Q2F0ZWdvcnlBbmRDb2xvcnMgKHdpZGdldElkOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nLCBhdHRVbmlxdWU6IGFueSkge1xyXG4gICAgICBjb25zdCBzdG9yZSA9IGdldEFwcFN0b3JlKClcclxuICAgIFxyXG4gICAgICAvLyAxKSBtYXBhIGJhc2UgdmFsb3IgLT4gY29sb3IgZGVzZGUgcmVuZGVyZXJcclxuICAgICAgY29uc3QgYmFzZUNvbG9yTWFwID0gbm9ybWFsaXplQXR0VW5pcXVlKGF0dFVuaXF1ZSkgLy8gYXF1w60gZGViZW4gdmVuaXIgbG9zIGNvbG9yZXMg4oCcYnVlbm9z4oCdXHJcbiAgICAgIGNvbnNvbGUubG9nKCdiYXNlQ29sb3JNYXAnLCBiYXNlQ29sb3JNYXApXHJcbiAgICBcclxuICAgICAgLy8gMikgVE9ET1MgbG9zIHZhbG9yZXMgcG9zaWJsZXM6XHJcbiAgICAgIC8vICAgIC0gYXJyYXkgcXVlIHRlbmdhcyBndWFyZGFkbyBlbiB3aW5kb3cuYXR0VW5pcXVlICgyMyB2YWxvcmVzKVxyXG4gICAgICAvLyAgICAtIG3DoXMgbGFzIGNsYXZlcyBkZWwgb2JqZXRvIGRlIGNvbG9yZXMgKHBvciBzaSBkaWZpZXJlbilcclxuICAgICAgY29uc3QgZnJvbVdpbjogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KCh3aW5kb3cgYXMgYW55KS5hdHRVbmlxdWUpXHJcbiAgICAgICAgPyAod2luZG93IGFzIGFueSkuYXR0VW5pcXVlLm1hcCgoczogYW55KSA9PiBTdHJpbmcocykpXHJcbiAgICAgICAgOiBbXVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGZyb21BdHQgPSBPYmplY3Qua2V5cyhhdHRVbmlxdWUgfHwge30pXHJcbiAgICAgIGNvbnN0IGZyb21CYXNlID0gT2JqZWN0LmtleXMoYmFzZUNvbG9yTWFwIHx8IHt9KVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGFsbFZhbHVlcyA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgbmV3IFNldChbLi4uZnJvbVdpbiwgLi4uZnJvbUF0dCwgLi4uZnJvbUJhc2VdLm1hcChzID0+IFN0cmluZyhzKSkpXHJcbiAgICAgIClcclxuICAgIFxyXG4gICAgICAvLyAzKSBzZWxlY2Npb25hZG9zICgzIGVuIHR1IGVqZW1wbG8pXHJcbiAgICAgIGNvbnN0IHNlbGVjY2lvbmFkb3M6IHN0cmluZ1tdID0gKHdpbmRvdyBhcyBhbnkpLnZhbG9yZXNBZ2cgfHwgW11cclxuICAgICAgY29uc3Qgc2V0U2VsID0gbmV3IFNldChzZWxlY2Npb25hZG9zLm1hcChzID0+IFN0cmluZyhzKSkpXHJcbiAgICBcclxuICAgICAgY29uc3QgR1JJU19SRVNUTyA9ICcjZGNkY2RjJ1xyXG4gICAgICBjb25zdCBjb2xvck1hcEZpbmFsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cclxuICAgIFxyXG4gICAgICAvLyBoZWxwZXI6IGJ1c2NhIGNvbG9yIGVuIGJhc2VDb2xvck1hcCBhdW5xdWUgY2FtYmllbiBlc3BhY2lvcy9tYXnDunNjdWxhc1xyXG4gICAgICBjb25zdCBmaW5kUmVuZGVyZXJDb2xvciA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoYmFzZUNvbG9yTWFwKS5maW5kKFxyXG4gICAgICAgICAgayA9PiBrLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSB0cmltbWVkXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiBrZXkgPyBiYXNlQ29sb3JNYXBba2V5XSA6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLy8gNCkgY29uc3RydWlyIGVsIG1hcGEgZmluYWwgcmVjb3JyaWVuZG8gVE9EQVMgbGFzIGNhdGVnb3LDrWFzXHJcbiAgICAgIGFsbFZhbHVlcy5mb3JFYWNoKHJhdyA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9tYnJlID0gU3RyaW5nKHJhdylcclxuICAgICAgICBjb25zdCByZW5kZXJlckNvbG9yID0gZmluZFJlbmRlcmVyQ29sb3Iobm9tYnJlKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKCFzZXRTZWwuc2l6ZSB8fCBzZXRTZWwuaGFzKG5vbWJyZSkpIHtcclxuICAgICAgICAgIC8vIHNpbiBzZWxlY2Npw7NuIOKGkiB0b2RvcyBub3JtYWxlc1xyXG4gICAgICAgICAgLy8gY29uIHNlbGVjY2nDs24g4oaSIHNvbG8gw6lzdG9zIGNvbiBjb2xvciBvcmlnaW5hbFxyXG4gICAgICAgICAgY29sb3JNYXBGaW5hbFtub21icmVdID0gcmVuZGVyZXJDb2xvciB8fCAnR1JJU19SRVNUTycgLy8gZmFsbGJhY2sgdmlzaWJsZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBubyBzZWxlY2Npb25hZG9zIOKGkiBncmlzIGNsYXJvXHJcbiAgICAgICAgICBjb2xvck1hcEZpbmFsW25vbWJyZV0gPSBHUklTX1JFU1RPXHJcbiAgICAgICAgfVxyXG4gIH0pXHJcbiBcclxuICBjb25zb2xlLmxvZygnQ29sb3JlcyBncsOhZmljbyBncmFuZGUnLCBjb2xvck1hcEZpbmFsKVxyXG4gXHJcbiAgOyh3aW5kb3cgYXMgYW55KS5TaW1ib2xvZ2lhU2VsZWNjaW9uYWRhID0gZmllbGROYW1lXHJcbiAgOyh3aW5kb3cgYXMgYW55KS52YWxvcmVzU2VsZWNjaW9uYWRvcyA9IGFsbFZhbHVlc1xyXG4gXHJcbiAgc3RvcmUuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2Uod2lkZ2V0SWQsICdjYXRlZ29yeUZpZWxkT3ZlcnJpZGUnLCBmaWVsZE5hbWUpKVxyXG4gIHN0b3JlLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHdpZGdldElkLCAnY2F0ZWdvcnlDb2xvcnNPdmVycmlkZScsIGNvbG9yTWFwRmluYWwpKVxyXG4gIHN0b3JlLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHdpZGdldElkLCAnY2F0ZWdvcnlWYWx1ZXNPdmVycmlkZScsIGFsbFZhbHVlcykpXHJcbn1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHdpZGdldHMgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHNcclxuICAgIHNldEFwcFdpZGdldHMod2lkZ2V0cylcclxuICAgIHNldENoYXJ0V2lkZ2V0SWQoJ3dpZGdldF80JylcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gVHJpZ2dlciBleHRlcm5vIHBhcmEgc2luY3Jvbml6YXIgKGVqZW1wbG8gVGlwb19hY2NpZGVudGUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhbXBvRXh0ID0gKHByb3BzIGFzIGFueSk/LnN0YXRlUHJvcHM/LmNhbXBvXHJcbiAgICBjb25zdCB0cmlnID0gKHByb3BzIGFzIGFueSk/LnN0YXRlUHJvcHM/LmFwcGx5Q2x1c3RlckNoYXJ0c1RyaWdnZXJcclxuICAgIGlmIChjYW1wb0V4dCA9PT0gJ1RpcG9fYWNjaWRlbnRlJyAmJiB0cmlnKSB7XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UocHJvcHMuaWQsICdhcHBseUNsdXN0ZXJDaGFydHNUcmlnZ2VyJywgMCkpXHJcbiAgICB9XHJcbiAgfSwgWyhwcm9wcyBhcyBhbnkpPy5zdGF0ZVByb3BzPy5jYW1wbywgKHByb3BzIGFzIGFueSk/LnN0YXRlUHJvcHM/LmFwcGx5Q2x1c3RlckNoYXJ0c1RyaWdnZXJdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFwcFdpZGdldHMpIHtcclxuICAgICAgY29uc3Qgd2lkZ2V0c0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhcHBXaWRnZXRzIGFzIGFueSlcclxuICAgICAgc2V0Q2hhcnRXaWRnZXRzQXJyYXkod2lkZ2V0c0FycmF5LmZpbHRlcigodzogYW55KSA9PiB3LnVyaSA9PT0gJ3dpZGdldHMvY29tbW9uL2NoYXJ0LycpKVxyXG4gICAgfVxyXG4gIH0sIFthcHBXaWRnZXRzXSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVzdGFydCAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRDYW1wbyhudWxsKVxyXG4gICAgICBzZXRFamVjdXRhcihmYWxzZSlcclxuICAgICAgc2V0QXR0VW5pcXVlKG51bGwpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW3dpZGdldF8xNF0gaGFuZGxlUmVzdGFydCBlcnJvcjonLCBlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVpbmljaW8gY29tcGxldG8gc29saWNpdGFkbyBkZXNkZSBmdWVyYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0cmlnID0gKHByb3BzIGFzIGFueSk/LnN0YXRlUHJvcHM/LnJlc3RhcnRUcmlnZ2VyXHJcbiAgICBpZiAoIXRyaWcpIHJldHVyblxyXG5cclxuICAgIGhhbmRsZVJlc3RhcnQoKVxyXG5cclxuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goXHJcbiAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHByb3BzLmlkLCAncmVzdGFydFRyaWdnZXInLCAwKVxyXG4gICAgKVxyXG4gIH0sIFsocHJvcHMgYXMgYW55KT8uc3RhdGVQcm9wcz8ucmVzdGFydFRyaWdnZXJdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxEaW5MZXllbmQgey4uLnByb3BzfSBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfSBvblJ1bj17aGFuZGxlUnVufSBvbkF0dD17aGFuZGxlQXR0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
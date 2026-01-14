System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/filtros/src/setting/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/filtros/src/setting/translations/default.ts ***!
  \*****************************************************************************/
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
    selectDataSource: 'Select Feature Layer Data Source'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/filtros/src/setting/setting.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filtros/src/setting/translations/default.ts");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    const supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]);
    const supportedFieldTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String]);
    //const supportedFieldTypes = Immutable([JimuFieldType.String])
    // When the dataSource is chosen, save it to the settings.
    const onDataSourceChange = (useDataSources) => {
        if (!useDataSources) {
            return;
        }
        props.onSettingChange({
            id: props.id,
            useDataSources: useDataSources
        });
    };
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    // When a field is chosen from the dropdown, save it to the settings.
    const fieldsListChangeHandler = (evt) => {
        if (evt && evt.length === 1) {
            props.onSettingChange({
                id: props.id,
                config: props.config.set('filterField', evt[0].name)
            });
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-get-map-coordinates" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "data-source-selector-section", title: props.intl.formatMessage({
                    id: 'dataSourceSelectorLabel',
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectDataSource
                }) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { types: supportedDsTypes, useDataSourcesEnabled: true, mustUseDataSource: true, useDataSources: props.useDataSources, onChange: onDataSourceChange, widgetId: props.id, hideDataView: true }))),
            props.useDataSources && props.useDataSources.length > 0 &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "attribute-selector-section", title: props.intl.formatMessage({
                        id: 'chooseAttributeSelectorLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].chooseAttribute
                    }) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.FieldSelector, { useDataSources: props.useDataSources, types: supportedFieldTypes, onChange: fieldsListChangeHandler, selectedFields: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([props.config.filterField]), isMultiple: false, isSearchInputHidden: false, isDataSourceDropDownHidden: true, useDropdown: true }))))));
}
;
//   const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
//     props.onSettingChange({
//       id: props.id,
//       useMapWidgetIds: useMapWidgetIds
//     })
//   }
//   return (
//     <div className="widget-setting-demo">
//     <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapWidgetSelected} />
//     </div>
// );
//   // eslint-disable-next-line no-unreachable
// };
// export default Setting;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cm9zL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUNGLGlFQUFlO0lBQ2IsZ0JBQWdCLEVBQUUsa0NBQWtDO0NBQ3JEOzs7Ozs7Ozs7Ozs7QUNyQkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObEI7QUFFd0Q7QUFLN0M7QUFFWTtBQUN5QztBQUVqRyw2QkFBZSxvQ0FBVSxLQUFzQztJQUM3RCxNQUFNLGdCQUFnQixHQUFHLG9EQUFTLENBQUMsQ0FBQyx5REFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSxNQUFNLG1CQUFtQixHQUFHLG9EQUFTLENBQUMsQ0FBQyxvREFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELCtEQUErRDtJQUMvRCwwREFBMEQ7SUFDMUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGNBQStCLEVBQUUsRUFBRTtRQUM3RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsT0FBTTtRQUNSLENBQUM7UUFFRCxL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Z2V0cy9maWx0cm9zL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJvcy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VsZWN0RGF0YVNvdXJjZTogJ1NlbGVjdCBGZWF0dXJlIExheWVyIERhdGEgU291cmNlJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBGaWVsZFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHtcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93LFxyXG4gIE1hcFdpZGdldFNlbGVjdG9yXHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IGpzeCwgSW1tdXRhYmxlLCB0eXBlIFVzZURhdGFTb3VyY2UsIEppbXVGaWVsZFR5cGUsIEFsbERhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gIGNvbnN0IHN1cHBvcnRlZERzVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKVxyXG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkVHlwZXMgPSBJbW11dGFibGUoW0ppbXVGaWVsZFR5cGUuU3RyaW5nXSlcclxuICAvL2NvbnN0IHN1cHBvcnRlZEZpZWxkVHlwZXMgPSBJbW11dGFibGUoW0ppbXVGaWVsZFR5cGUuU3RyaW5nXSlcclxuICAvLyBXaGVuIHRoZSBkYXRhU291cmNlIGlzIGNob3Nlbiwgc2F2ZSBpdCB0byB0aGUgc2V0dGluZ3MuXHJcbiAgY29uc3Qgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICghdXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIFdoZW4gYSBmaWVsZCBpcyBjaG9zZW4gZnJvbSB0aGUgZHJvcGRvd24sIHNhdmUgaXQgdG8gdGhlIHNldHRpbmdzLlxyXG4gIGNvbnN0IGZpZWxkc0xpc3RDaGFuZ2VIYW5kbGVyID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dCAmJiBldnQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZmlsdGVyRmllbGQnLCBldnRbMF0ubmFtZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXNcIj5cclxuICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3IgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9IG9uU2VsZWN0PXtvbk1hcFdpZGdldFNlbGVjdGVkfSAvPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF0YS1zb3VyY2Utc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6ICdkYXRhU291cmNlU2VsZWN0b3JMYWJlbCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNlbGVjdERhdGFTb3VyY2VcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgdHlwZXM9e3N1cHBvcnRlZERzVHlwZXN9XHJcbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17cHJvcHMudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRGF0YVNvdXJjZUNoYW5nZX0gd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgIGhpZGVEYXRhVmlldz17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAge3Byb3BzLnVzZURhdGFTb3VyY2VzICYmIHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRyaWJ1dGUtc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgICAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgIGlkOiAnY2hvb3NlQXR0cmlidXRlU2VsZWN0b3JMYWJlbCcsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMuY2hvb3NlQXR0cmlidXRlXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3Byb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgdHlwZXM9e3N1cHBvcnRlZEZpZWxkVHlwZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZmllbGRzTGlzdENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17SW1tdXRhYmxlKFtwcm9wcy5jb25maWcuZmlsdGVyRmllbGRdKX1cclxuICAgICAgICAgICAgICAgIGlzTXVsdGlwbGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaXNTZWFyY2hJbnB1dEhpZGRlbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpc0RhdGFTb3VyY2VEcm9wRG93bkhpZGRlblxyXG4gICAgICAgICAgICAgICAgdXNlRHJvcGRvd25cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAgIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4vLyAgICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuLy8gICAgICAgaWQ6IHByb3BzLmlkLFxyXG4vLyAgICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4vLyAgICAgfSlcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZGVtb1wiPlxyXG4vLyAgICAgPE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfSBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH0gLz5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApO1xyXG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnJlYWNoYWJsZVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2V0dGluZztcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
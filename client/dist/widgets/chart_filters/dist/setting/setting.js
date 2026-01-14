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

/***/ "./your-extensions/widgets/chart_filters/src/setting/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/chart_filters/src/setting/translations/default.ts ***!
  \***********************************************************************************/
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/chart_filters/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/chart_filters/src/setting/translations/default.ts");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    const supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]);
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
    //   // When a field is chosen from the dropdown, save it to the settings.
    //   const fieldsListChangeHandler = (evt) => {
    //     if (evt && evt.length === 1) {
    //       props.onSettingChange({
    //         id: props.id,
    //         config: props.config.set('filterField', evt[0].name)
    //       })
    //     }
    //   }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-get-map-coordinates" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapWidgetSelected }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "data-source-selector-section", title: props.intl.formatMessage({
                    id: 'dataSourceSelectorLabel',
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectDataSource
                }) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { types: supportedDsTypes, useDataSourcesEnabled: true, mustUseDataSource: true, useDataSources: props.useDataSources, onChange: onDataSourceChange, widgetId: props.id, hideDataView: true }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaGFydF9maWx0ZXJzL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUNGLGlFQUFlO0lBQ2IsZ0JBQWdCLEVBQUUsa0NBQWtDO0NBQ3JEOzs7Ozs7Ozs7Ozs7QUNyQkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObEI7QUFFd0Q7QUFLN0M7QUFFWTtBQUN5QztBQUVqRyw2QkFBZSxvQ0FBVSxLQUFzQztJQUM3RCxNQUFNLGdCQUFnQixHQUFHLG9EQUFTLENBQUMsQ0FBQyx5REFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSwrREFBK0Q7SUFDL0QsMERBQTBEO0lBQzFELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7UUFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLE9BQU07UUFDUixDQUFDO1FBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNwQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixjQUFjLEVBQUUsY0FBYztTQUMvQixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxlQUF5QixFQUFFLEVBQUU7UUFDeEQsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNwQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVILDBFQUEwRTtJQUMxRSwrQ0FBK0M7SUFDL0MscUNBQXFDO0lBQ3JDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsK0RBQStEO0lBQy9ELFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUVKLE9BQU8sQ0FDTDtRQUNFLG9FQUFLLFNBQVMsRUFBQyxvQ0FBb0M7WUFDakQsMkRBQUMsa0ZBQWlCLElBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixHQUFJO1lBQzVGLDJEQUFDLCtFQUFjLElBQ2IsU0FBUyxFQUFDLDhCQUE4QixFQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLEVBQUUsRUFBRSx5QkFBeUI7b0JBQzdCLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxnQkFBZ0I7aUJBQ3JELENBQUM7Z0JBRUYsMkRBQUMsMkVBQVU7b0JBQ1QsMkRBQUMscUZBQWtCLElBQ2pCLEtBQUssRUFBRSxnQkFBZ0IsRUFDdkIscUJBQXFCLFFBQ3JCLGlCQUFpQixRQUNqQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFDcEMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNoRCxZQUFZLEVBQUUsSUFBSSxHQUNsQixDQUVTLENBQ0UsQ0F5QmIsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUFBLENBQUM7QUFhRixpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0Qix5Q0FBeUM7QUFDekMsU0FBUztBQUNULE1BQU07QUFDTixhQUFhO0FBQ2IsNENBQTRDO0FBQzVDLG1HQUFtRztBQUNuRyxhQUFhO0FBQ2IsS0FBSztBQUNMLCtDQUErQztBQUMvQyxLQUFLO0FBRUwsMEJBQTBCO0FBRWxCLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NoYXJ0X2ZpbHRlcnMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jaGFydF9maWx0ZXJzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZWxlY3REYXRhU291cmNlOiAnU2VsZWN0IEZlYXR1cmUgTGF5ZXIgRGF0YSBTb3VyY2UnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IsIEZpZWxkU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5pbXBvcnQge1xyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3csXHJcbiAgTWFwV2lkZ2V0U2VsZWN0b3JcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGRlZmF1bHRJMThuTWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsganN4LCBJbW11dGFibGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgSmltdUZpZWxkVHlwZSwgQWxsRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XHJcbiAgY29uc3Qgc3VwcG9ydGVkRHNUeXBlcyA9IEltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pXHJcbiAgLy9jb25zdCBzdXBwb3J0ZWRGaWVsZFR5cGVzID0gSW1tdXRhYmxlKFtKaW11RmllbGRUeXBlLlN0cmluZ10pXHJcbiAgLy8gV2hlbiB0aGUgZGF0YVNvdXJjZSBpcyBjaG9zZW4sIHNhdmUgaXQgdG8gdGhlIHNldHRpbmdzLlxyXG4gIGNvbnN0IG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBpZiAoIXVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuLy8gICAvLyBXaGVuIGEgZmllbGQgaXMgY2hvc2VuIGZyb20gdGhlIGRyb3Bkb3duLCBzYXZlIGl0IHRvIHRoZSBzZXR0aW5ncy5cclxuLy8gICBjb25zdCBmaWVsZHNMaXN0Q2hhbmdlSGFuZGxlciA9IChldnQpID0+IHtcclxuLy8gICAgIGlmIChldnQgJiYgZXZ0Lmxlbmd0aCA9PT0gMSkge1xyXG4vLyAgICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4vLyAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuLy8gICAgICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2ZpbHRlckZpZWxkJywgZXZ0WzBdLm5hbWUpXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1nZXQtbWFwLWNvb3JkaW5hdGVzXCI+XHJcbiAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfSBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH0gLz5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGEtc291cmNlLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiAnZGF0YVNvdXJjZVNlbGVjdG9yTGFiZWwnLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5zZWxlY3REYXRhU291cmNlXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICAgIHR5cGVzPXtzdXBwb3J0ZWREc1R5cGVzfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3Byb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9IHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiB7cHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dHJpYnV0ZS1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgaWQ6ICdjaG9vc2VBdHRyaWJ1dGVTZWxlY3RvckxhYmVsJyxcclxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5jaG9vc2VBdHRyaWJ1dGVcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17cHJvcHMudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICB0eXBlcz17c3VwcG9ydGVkRmllbGRUeXBlc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmaWVsZHNMaXN0Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzPXtJbW11dGFibGUoW3Byb3BzLmNvbmZpZy5maWx0ZXJGaWVsZF0pfVxyXG4gICAgICAgICAgICAgICAgaXNNdWx0aXBsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpc1NlYXJjaElucHV0SGlkZGVuPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlzRGF0YVNvdXJjZURyb3BEb3duSGlkZGVuXHJcbiAgICAgICAgICAgICAgICB1c2VEcm9wZG93blxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgfSAqL31cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAgIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4vLyAgICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuLy8gICAgICAgaWQ6IHByb3BzLmlkLFxyXG4vLyAgICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4vLyAgICAgfSlcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZGVtb1wiPlxyXG4vLyAgICAgPE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfSBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH0gLz5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApO1xyXG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnJlYWNoYWJsZVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2V0dGluZztcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
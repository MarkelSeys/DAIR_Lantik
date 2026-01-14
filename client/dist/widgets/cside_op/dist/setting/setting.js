System.register(["jimu-core","jimu-ui/advanced/sql-expression-builder","jimu-ui/basic/sql-expression-runtime","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
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

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/sql-expression-builder":
/*!**********************************************************!*\
  !*** external "jimu-ui/advanced/sql-expression-builder" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__;

/***/ }),

/***/ "jimu-ui/basic/sql-expression-runtime":
/*!*******************************************************!*\
  !*** external "jimu-ui/basic/sql-expression-runtime" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__;

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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/cside_op/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/sql-expression-builder */ "jimu-ui/advanced/sql-expression-builder");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");





class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.onDataSourceChange = (useDataSources) => {
            var _a;
            if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) > 0) {
                const originDsId = (_a = useDataSources[0]) === null || _a === void 0 ? void 0 : _a.dataSourceId;
                const originDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(originDsId);
                const outputDsJsons = [{
                        id: `${this.props.id}-ouput`,
                        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
                        label: `${this.props.manifest.name}-output-data-source`,
                        geometryType: originDs.getDataSourceJson().geometryType,
                        originDataSources: [useDataSources[0]],
                        isDataInDataSourceInstance: true
                    }];
                // Let framework know which data source current widget is using and which data source current widget is outputing.
                this.props.onSettingChange({
                    id: this.props.id,
                    useDataSources: useDataSources
                }, outputDsJsons);
            }
        };
        this.onSqlExpressionChange = (sqlExpression) => {
            const usedFields = (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__.getJimuFieldNamesBySqlExpression)(sqlExpression);
            const newUseDs = this.props.useDataSources[0].set('fields', usedFields).asMutable({ deep: true });
            // Save the SQL expression to config and update use data sources based on the fields SQL expression is using.
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: [newUseDs],
                config: { sqlExpression }
            });
        };
        this.toggleSqlBuilder = () => { this.setState({ isSqlBuilderOpen: !this.state.isSqlBuilderOpen }); };
        this.state = {
            isSqlBuilderOpen: false
        };
    }
    render() {
        var _a, _b;
        const dsId = (_b = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
        const ds = dsId && jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'setting-attribute-query-result-as-output p-2' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: this.props.useDataSources, useDataSourcesEnabled: this.props.useDataSourcesEnabled, onChange: this.onDataSourceChange, widgetId: this.props.id }),
            ds && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mt-2' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: this.toggleSqlBuilder }, "Click to set a SQL expression")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_1__.SqlExpressionBuilderPopup, { dataSource: ds, mode: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SqlExpressionMode.Simple, expression: this.props.config.sqlExpression, onChange: this.onSqlExpressionChange, isOpen: this.state.isSqlBuilderOpen, toggle: this.toggleSqlBuilder })));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jc2lkZV9vcC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0c7QUFFL0U7QUFDSTtBQUNiO0FBRTFDO0FBTWpCLE1BQU0sT0FBUSxTQUFRLDRDQUFLLENBQUMsYUFBcUQ7SUFHOUYsWUFBYSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFIZCxtQkFBYyxHQUFHLG9EQUFTLENBQUMsQ0FBQyxzREFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBUzFELHVCQUFrQixHQUFHLENBQUMsY0FBK0IsRUFBRSxFQUFFOztZQUN2RCxJQUFJLGVBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxNQUFNLElBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU0sVUFBVSxHQUFHLG9CQUFjLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFlBQVk7Z0JBQ2xELE1BQU0sUUFBUSxHQUFHLHdE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QUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUM3QixDQUNFLENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvc3FsLWV4cHJlc3Npb24tcnVudGltZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3NpZGVfb3Avc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zcWxfZXhwcmVzc2lvbl9idWlsZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfc3FsX2V4cHJlc3Npb25fcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBJbW11dGFibGUsIERhdGFTb3VyY2VUeXBlcywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlSnNvbiwgU3FsRXhwcmVzc2lvbk1vZGUsIHR5cGUgSU1TcWxFeHByZXNzaW9uIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xuaW1wb3J0IHsgU3FsRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3FsLWV4cHJlc3Npb24tYnVpbGRlcidcbmltcG9ydCB7IGdldEppbXVGaWVsZE5hbWVzQnlTcWxFeHByZXNzaW9uIH0gZnJvbSAnamltdS11aS9iYXNpYy9zcWwtZXhwcmVzc2lvbi1ydW50aW1lJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc1NxbEJ1aWxkZXJPcGVuOiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4sIFN0YXRlPiB7XG4gIHN1cHBvcnRlZFR5cGVzID0gSW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSlcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNTcWxCdWlsZGVyT3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIGlmICh1c2VEYXRhU291cmNlcz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb3JpZ2luRHNJZCA9IHVzZURhdGFTb3VyY2VzWzBdPy5kYXRhU291cmNlSWRcbiAgICAgIGNvbnN0IG9yaWdpbkRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKG9yaWdpbkRzSWQpXG4gICAgICBjb25zdCBvdXRwdXREc0pzb25zOiBEYXRhU291cmNlSnNvbltdID0gW3tcbiAgICAgICAgaWQ6IGAke3RoaXMucHJvcHMuaWR9LW91cHV0YCxcbiAgICAgICAgdHlwZTogRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcixcbiAgICAgICAgbGFiZWw6IGAke3RoaXMucHJvcHMubWFuaWZlc3QubmFtZX0tb3V0cHV0LWRhdGEtc291cmNlYCxcbiAgICAgICAgZ2VvbWV0cnlUeXBlOiBvcmlnaW5Ecy5nZXREYXRhU291cmNlSnNvbigpLmdlb21ldHJ5VHlwZSxcbiAgICAgICAgb3JpZ2luRGF0YVNvdXJjZXM6IFt1c2VEYXRhU291cmNlc1swXV0sXG4gICAgICAgIGlzRGF0YUluRGF0YVNvdXJjZUluc3RhbmNlOiB0cnVlXG4gICAgICB9XVxuXG4gICAgICAvLyBMZXQgZnJhbWV3b3JrIGtub3cgd2hpY2ggZGF0YSBzb3VyY2UgY3VycmVudCB3aWRnZXQgaXMgdXNpbmcgYW5kIHdoaWNoIGRhdGEgc291cmNlIGN1cnJlbnQgd2lkZ2V0IGlzIG91dHB1dGluZy5cbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xuICAgICAgfSwgb3V0cHV0RHNKc29ucylcbiAgICB9XG4gIH1cblxuICBvblNxbEV4cHJlc3Npb25DaGFuZ2UgPSAoc3FsRXhwcmVzc2lvbjogSU1TcWxFeHByZXNzaW9uKSA9PiB7XG4gICAgY29uc3QgdXNlZEZpZWxkcyA9IGdldEppbXVGaWVsZE5hbWVzQnlTcWxFeHByZXNzaW9uKHNxbEV4cHJlc3Npb24pXG4gICAgY29uc3QgbmV3VXNlRHMgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLnNldCgnZmllbGRzJywgdXNlZEZpZWxkcykuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuXG4gICAgLy8gU2F2ZSB0aGUgU1FMIGV4cHJlc3Npb24gdG8gY29uZmlnIGFuZCB1cGRhdGUgdXNlIGRhdGEgc291cmNlcyBiYXNlZCBvbiB0aGUgZmllbGRzIFNRTCBleHByZXNzaW9uIGlzIHVzaW5nLlxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IFtuZXdVc2VEc10sXG4gICAgICBjb25maWc6IHsgc3FsRXhwcmVzc2lvbiB9XG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZVNxbEJ1aWxkZXIgPSAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBpc1NxbEJ1aWxkZXJPcGVuOiAhdGhpcy5zdGF0ZS5pc1NxbEJ1aWxkZXJPcGVuIH0pIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGRzSWQgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZFxuICAgIGNvbnN0IGRzID0gZHNJZCAmJiBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNJZClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmctYXR0cmlidXRlLXF1ZXJ5LXJlc3VsdC1hcy1vdXRwdXQgcC0yJz5cbiAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIC8+XG5cbiAgICAgICAge1xuICAgICAgICAgIGRzICYmIDxkaXYgY2xhc3NOYW1lPSdtdC0yJz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy50b2dnbGVTcWxCdWlsZGVyfT5DbGljayB0byBzZXQgYSBTUUwgZXhwcmVzc2lvbjwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgPFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcbiAgICAgICAgICBkYXRhU291cmNlPXtkc31cbiAgICAgICAgICBtb2RlPXtTcWxFeHByZXNzaW9uTW9kZS5TaW1wbGV9XG4gICAgICAgICAgZXhwcmVzc2lvbj17dGhpcy5wcm9wcy5jb25maWcuc3FsRXhwcmVzc2lvbn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNxbEV4cHJlc3Npb25DaGFuZ2V9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzU3FsQnVpbGRlck9wZW59XG4gICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZVNxbEJ1aWxkZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
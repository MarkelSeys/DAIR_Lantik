System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
  !*** ./your-extensions/widgets/cside_op/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.isDsConfigured = () => {
            if (this.props.useDataSources && this.props.useDataSources.length === 1) {
                return true;
            }
            return false;
        };
        this.onDataSourceCreated = () => {
            this.setSourceRecordsToOutputDs();
        };
        this.onCreateDataSourceFailed = () => {
            this.setSourceRecordsToOutputDs();
        };
        this.getOriginDataSource = () => {
            var _a, _b;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource((_b = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId);
        };
        this.getOutputDataSource = () => {
            var _a;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource((_a = this.props.outputDataSources) === null || _a === void 0 ? void 0 : _a[0]);
        };
        this.setSourceRecordsToOutputDs = () => {
            /**
             * Just like using other data sources, to use an output data source, widget should use it through `DataSourceComponent`, the framework will create the data source instance on the fly.
             * No output data source instance means there isn't any widgets using the output data source,
             * in this case, no need to set source to the output data source.
             */
            if (!this.getOutputDataSource()) {
                return;
            }
            /**
             * Need origin data source instance to get source records.
             * If do not have origin data source instance, set status of output data source to not ready, which indicates output data source is not ready to do query.
             */
            if (!this.getOriginDataSource()) {
                this.getOutputDataSource().setStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady);
                this.getOutputDataSource().setCountStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady);
                return;
            }
            const sql = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(this.props.config.sqlExpression, this.getOriginDataSource()).sql || '1=1';
            const featureLayerDs = this.getOriginDataSource();
            featureLayerDs.query({ where: sql }).then(res => {
                var _a, _b, _c;
                /**
                 * Set source to the output data source.
                 * Output data source can use the source to do query, to load records and so on.
                 * If use the source to load records,
                 * will save the loaded records to output data source instance and widget can get these records by `outputDs.getRecords()`.
                 */
                (_a = this.getOutputDataSource()) === null || _a === void 0 ? void 0 : _a.setSourceRecords(res.records);
                /**
                 * Status of output data source is not ready by default, set it to unloaded to let other widgets know output data source is ready to do query.
                 */
                (_b = this.getOutputDataSource()) === null || _b === void 0 ? void 0 : _b.setStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded);
                (_c = this.getOutputDataSource()) === null || _c === void 0 ? void 0 : _c.setCountStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded);
            });
        };
    }
    render() {
        if (!this.isDsConfigured()) {
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null,
                "This widget demonstrates how to use attribute query results to generate a client-side output data source.",
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("br", null),
                "Please config data source."));
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'widget-attribute-query-result-as-output', style: { width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "The client-side output data source is generated."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null, "If you want to use the client-side output data source, you should add another widget (such as List) and configure the output data source for it."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null, "If the widget's origin data source is changed (e.g. add a filter), the output data source won't update automatically. Please click the following button."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.setSourceRecordsToOutputDs }, "Update output data source"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.useDataSources[0], widgetId: this.props.id, onDataSourceCreated: this.onDataSourceCreated, onCreateDataSourceFailed: this.onCreateDataSourceFailed })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jc2lkZV9vcC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04yRztBQUM5SDtBQUlqQixNQUFNLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBQWdEO0lBQTFGOztRQUNFLG1CQUFjLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUN4RSxPQUFPLElBQUk7WUFDYixDQUFDO1lBQ0QsT0FBTyxLQUFLO1FBQ2QsQ0FBQztRQUVELHdCQUFtQixHQUFHLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsMEJBQTBCLEVBQUU7UUFDbkMsQ0FBQztRQUVELDZCQUF3QixHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsMEJBQTBCLEVBQUU7UUFDbkMsQ0FBQztRQUVELHdCQUFtQixHQUFHLEdBQUcsRUFBRTs7WUFDekIsT0FBTyx3REFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUMsMENBQUUsWUFBWSxDQUFDO1FBQ3BHLENBQUM7UUFFRCx3QkFBbUIsR0FBRyxHQUFHLEVBQUU7O1lBQ3pCLE9BQU8sd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLDBDQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxHQUFHLEVBQUU7WUFDaEM7Ozs7ZUFJRztZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO2dCQUNoQyxPQUFNO1lBQ1IsQ0FBQztZQUVEOzs7ZUFHRztZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTLENBQUMsdURBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUMvRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxjQUFjLENBQUMsdURBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNwRSxPQUFNO1lBQ1IsQ0FBQztZQUVELE1BQU0sR0FBRyxHQUFHLHNEQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLO1lBQ2xILE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBNEI7WUFDM0UsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQzlDOzs7OzttQkFLRztnQkFDSCxVQUFJLENBQUMsbUJBQW1CLEVBQUUsMENBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDekQ7O21CQUVHO2dCQUNILFVBQUksQ0FBQyxtQkFBbUIsRUFBRSwwQ0FBRSxTQUFTLENBQUMsdURBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNoRSxVQUFJLENBQUMsbUJBQW1CLEVBQUUsMENBQUUsY0FBYyxDQUFDLHVEQUFnQixDQUFDLFFBQVEsQ0FBQztZQUN2RSxDQUFDLENBQUM7UUFDSixDQUFDO0lBdUNILENBQUM7SUFyQ0MsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQ0w7O2dCQUVFLHNFQUFNOzZDQUVILENBQ047UUFDSCxDQUFDO1FBRUQsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyx5Q0FBeUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1lBQ3JJLDBIQUVLO1lBQ0wsME5BRUs7WUFDTCxrT0FFSztZQUVMLDJEQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywwQkFBMEIsZ0NBRXZDO1lBRVQsMkRBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDM0MsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN2QixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQzdDLHdCQUF3QixFQUFFLElBQUksQ0FBQyx3QkFBd0IsR0FDdkQsQ0FFRSxDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY3NpZGVfb3Avc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRGF0YVNvdXJjZUNvbXBvbmVudCwgZGF0YVNvdXJjZVV0aWxzLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCBEYXRhU291cmNlU3RhdHVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcblxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIHVua25vd24+IHtcbiAgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb25EYXRhU291cmNlQ3JlYXRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFNvdXJjZVJlY29yZHNUb091dHB1dERzKClcbiAgfVxuXG4gIG9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFNvdXJjZVJlY29yZHNUb091dHB1dERzKClcbiAgfVxuXG4gIGdldE9yaWdpbkRhdGFTb3VyY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZClcbiAgfVxuXG4gIGdldE91dHB1dERhdGFTb3VyY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLm91dHB1dERhdGFTb3VyY2VzPy5bMF0pXG4gIH1cblxuICBzZXRTb3VyY2VSZWNvcmRzVG9PdXRwdXREcyA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBKdXN0IGxpa2UgdXNpbmcgb3RoZXIgZGF0YSBzb3VyY2VzLCB0byB1c2UgYW4gb3V0cHV0IGRhdGEgc291cmNlLCB3aWRnZXQgc2hvdWxkIHVzZSBpdCB0aHJvdWdoIGBEYXRhU291cmNlQ29tcG9uZW50YCwgdGhlIGZyYW1ld29yayB3aWxsIGNyZWF0ZSB0aGUgZGF0YSBzb3VyY2UgaW5zdGFuY2Ugb24gdGhlIGZseS5cbiAgICAgKiBObyBvdXRwdXQgZGF0YSBzb3VyY2UgaW5zdGFuY2UgbWVhbnMgdGhlcmUgaXNuJ3QgYW55IHdpZGdldHMgdXNpbmcgdGhlIG91dHB1dCBkYXRhIHNvdXJjZSxcbiAgICAgKiBpbiB0aGlzIGNhc2UsIG5vIG5lZWQgdG8gc2V0IHNvdXJjZSB0byB0aGUgb3V0cHV0IGRhdGEgc291cmNlLlxuICAgICAqL1xuICAgIGlmICghdGhpcy5nZXRPdXRwdXREYXRhU291cmNlKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWQgb3JpZ2luIGRhdGEgc291cmNlIGluc3RhbmNlIHRvIGdldCBzb3VyY2UgcmVjb3Jkcy5cbiAgICAgKiBJZiBkbyBub3QgaGF2ZSBvcmlnaW4gZGF0YSBzb3VyY2UgaW5zdGFuY2UsIHNldCBzdGF0dXMgb2Ygb3V0cHV0IGRhdGEgc291cmNlIHRvIG5vdCByZWFkeSwgd2hpY2ggaW5kaWNhdGVzIG91dHB1dCBkYXRhIHNvdXJjZSBpcyBub3QgcmVhZHkgdG8gZG8gcXVlcnkuXG4gICAgICovXG4gICAgaWYgKCF0aGlzLmdldE9yaWdpbkRhdGFTb3VyY2UoKSkge1xuICAgICAgdGhpcy5nZXRPdXRwdXREYXRhU291cmNlKCkuc2V0U3RhdHVzKERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpXG4gICAgICB0aGlzLmdldE91dHB1dERhdGFTb3VyY2UoKS5zZXRDb3VudFN0YXR1cyhEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3FsID0gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTCh0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByZXNzaW9uLCB0aGlzLmdldE9yaWdpbkRhdGFTb3VyY2UoKSkuc3FsIHx8ICcxPTEnXG4gICAgY29uc3QgZmVhdHVyZUxheWVyRHMgPSB0aGlzLmdldE9yaWdpbkRhdGFTb3VyY2UoKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG4gICAgZmVhdHVyZUxheWVyRHMucXVlcnkoeyB3aGVyZTogc3FsIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHNvdXJjZSB0byB0aGUgb3V0cHV0IGRhdGEgc291cmNlLlxuICAgICAgICogT3V0cHV0IGRhdGEgc291cmNlIGNhbiB1c2UgdGhlIHNvdXJjZSB0byBkbyBxdWVyeSwgdG8gbG9hZCByZWNvcmRzIGFuZCBzbyBvbi5cbiAgICAgICAqIElmIHVzZSB0aGUgc291cmNlIHRvIGxvYWQgcmVjb3JkcyxcbiAgICAgICAqIHdpbGwgc2F2ZSB0aGUgbG9hZGVkIHJlY29yZHMgdG8gb3V0cHV0IGRhdGEgc291cmNlIGluc3RhbmNlIGFuZCB3aWRnZXQgY2FuIGdldCB0aGVzZSByZWNvcmRzIGJ5IGBvdXRwdXREcy5nZXRSZWNvcmRzKClgLlxuICAgICAgICovXG4gICAgICB0aGlzLmdldE91dHB1dERhdGFTb3VyY2UoKT8uc2V0U291cmNlUmVjb3JkcyhyZXMucmVjb3JkcylcbiAgICAgIC8qKlxuICAgICAgICogU3RhdHVzIG9mIG91dHB1dCBkYXRhIHNvdXJjZSBpcyBub3QgcmVhZHkgYnkgZGVmYXVsdCwgc2V0IGl0IHRvIHVubG9hZGVkIHRvIGxldCBvdGhlciB3aWRnZXRzIGtub3cgb3V0cHV0IGRhdGEgc291cmNlIGlzIHJlYWR5IHRvIGRvIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICB0aGlzLmdldE91dHB1dERhdGFTb3VyY2UoKT8uc2V0U3RhdHVzKERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQpXG4gICAgICB0aGlzLmdldE91dHB1dERhdGFTb3VyY2UoKT8uc2V0Q291bnRTdGF0dXMoRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEc0NvbmZpZ3VyZWQoKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGgzPlxuICAgICAgICAgIFRoaXMgd2lkZ2V0IGRlbW9uc3RyYXRlcyBob3cgdG8gdXNlIGF0dHJpYnV0ZSBxdWVyeSByZXN1bHRzIHRvIGdlbmVyYXRlIGEgY2xpZW50LXNpZGUgb3V0cHV0IGRhdGEgc291cmNlLlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFBsZWFzZSBjb25maWcgZGF0YSBzb3VyY2UuXG4gICAgICAgIDwvaDM+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtYXR0cmlidXRlLXF1ZXJ5LXJlc3VsdC1hcy1vdXRwdXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBtYXhIZWlnaHQ6ICc4MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBUaGUgY2xpZW50LXNpZGUgb3V0cHV0IGRhdGEgc291cmNlIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGg1PlxuICAgICAgICAgIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgY2xpZW50LXNpZGUgb3V0cHV0IGRhdGEgc291cmNlLCB5b3Ugc2hvdWxkIGFkZCBhbm90aGVyIHdpZGdldCAoc3VjaCBhcyBMaXN0KSBhbmQgY29uZmlndXJlIHRoZSBvdXRwdXQgZGF0YSBzb3VyY2UgZm9yIGl0LlxuICAgICAgICA8L2g1PlxuICAgICAgICA8aDU+XG4gICAgICAgICAgSWYgdGhlIHdpZGdldCdzIG9yaWdpbiBkYXRhIHNvdXJjZSBpcyBjaGFuZ2VkIChlLmcuIGFkZCBhIGZpbHRlciksIHRoZSBvdXRwdXQgZGF0YSBzb3VyY2Ugd29uJ3QgdXBkYXRlIGF1dG9tYXRpY2FsbHkuIFBsZWFzZSBjbGljayB0aGUgZm9sbG93aW5nIGJ1dHRvbi5cbiAgICAgICAgPC9oNT5cblxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2V0U291cmNlUmVjb3Jkc1RvT3V0cHV0RHN9PlxuICAgICAgICAgIFVwZGF0ZSBvdXRwdXQgZGF0YSBzb3VyY2VcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdfVxuICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQ9e3RoaXMub25DcmVhdGVEYXRhU291cmNlRmFpbGVkfVxuICAgICAgICAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
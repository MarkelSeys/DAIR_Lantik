System.register(["jimu-core","jimu-arcgis","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/filtros/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");



// import Legend from "esri/widgets/Legend";
// import LegendVM from "esri/widgets/Legend/LegendViewModel";
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    var _a;
    const [jmvs, setJmvs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [nombreCapa, setNombreCapa] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [filtro, setFiltro] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // useEffect(() => {
    //   if (props.useDataSources && props.useDataSources.length > 0) {
    //     // const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
    //     // setNombreCapa(nombreCapa)
    //     console.log(props.useDataSources)
    //     const useDataSource = props.useDataSources[0]
    //     const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource
    //     const queryParams: SqlQueryParams = {
    //       where: 'Mes = 1'
    //     }
    //     ds.updateQueryParams(queryParams, props.id)
    //   }
    // }, [props.useDataSources])
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            setJmvs(jmv);
            // console.log('filtro antes')
            // sleep(2000).then(() => {
            //   console.log('filtro')
            //   jmv.view.map.layers.items[17].definitionExpression = filtro ? 'Mes = 1' : ''
            // })
            // console.log(jmv)
            // sleep(2000).then(() => {
            //   jmv.view.on('click', () => {
            //     sleep(2000).then(() => {
            //       // console.log(jmv.view.map.layers.items[17].definitionExpression)
            //       console.log(filtro)
            //       jmv.view.map.layers.items[17].definitionExpression = 'Mes = 1'
            //     })
            //   })
            // })
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (jmvs) {
            console.log(jmvs);
            // jmvs.view.on('click', () => {
            //   sleep(2000).then(() => {
            //     jmvs.view.map.layers.items[17].definitionExpression = filtro ? 'Mes = 1' : ''
            //   })
            // })
            // jmvs.view.map.layers
            if (props.useDataSources && props.useDataSources.length > 0) {
                // const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
                // setNombreCapa(nombreCapa)
                console.log(props.useDataSources);
                const useDataSource = props.useDataSources[0];
                const ds = dsManager.getDataSource(useDataSource.dataSourceId);
                const queryParams = {
                    where: filtro ? 'Mes = 1' : ''
                };
                ds.updateQueryParams(queryParams, props.id);
            }
        }
    }, [filtro]);
    return (react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", null, props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }))),
        react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", { onClick: () => {
                    setFiltro(!filtro);
                } }, "Filtro"))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cm9zL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0g7QUFJL0Y7QUFDbEI7QUFPbEQsNENBQTRDO0FBQzVDLDhEQUE4RDtBQUU5RCw2QkFBZSxvQ0FBVSxLQUErQjs7SUFDdEQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrQ0FBUSxFQUFlO0lBQy9DLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDaEQsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMzQyxNQUFNLFNBQVMsR0FBRyx3REFBaUIsQ0FBQyxXQUFXLEVBQUU7SUFFakQsU0FBUyxLQUFLLENBQUUsRUFBRTtRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLG1FQUFtRTtJQUNuRSwrRUFBK0U7SUFDL0UsbUNBQW1DO0lBQ25DLHdDQUF3QztJQUN4QyxvREFBb0Q7SUFDcEQsdUhBQXVIO0lBRXZILDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLGtEQUFrRDtJQUVsRCxNQUFNO0lBQ04sNkJBQTZCO0lBRTdCLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDWiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLDBCQUEwQjtZQUMxQixpRkFBaUY7WUFDakYsS0FBSztZQUNMLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0IsaUNBQWlDO1lBQ2pDLCtCQUErQjtZQUMvQiwyRUFBMkU7WUFDM0UsNEJBQTRCO1lBQzVCLHVFQUF1RTtZQUN2RSxTQUFTO1lBQ1QsT0FBTztZQUNQLEtBQUs7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2pCLGdDQUFnQztZQUNoQyw2QkFBNkI7WUFDN0Isb0ZBQW9GO1lBQ3BGLE9BQU87WUFDUCxLQUFLO1lBQ0wsdUJBQXVCO1lBQ3ZCLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDNUQsd0VBQXdFO2dCQUN4RSw0QkFBNEI7Z0JBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztnQkFDakMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sRUFBRSxHQUEyQixTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQTJCO2dCQUVoSCxNQUFNLFdBQVcsR0FBbUI7b0JBQ2xDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDL0I7Z0JBQ0QsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBRTdDLENBQUM7UUFHSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFWixPQUFPLENBQ0w7UUFDRSx5RUFDRyxLQUFLLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUM5RCw0REFBQyw2REFBb0IsSUFBQyxjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQUksQ0FDbEgsQ0FDRztRQUNOO1lBQ0Usd0VBQVEsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDcEIsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNwQixDQUFDLGFBRVEsQ0FDTCxDQUNGLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJvcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBqc3gsIEltbXV0YWJsZSwgSmltdUZpZWxkVHlwZSwgSW1tdXRhYmxlQXJyYXksIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSwgdHlwZSBTcWxRdWVyeVBhcmFtcywgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIFNldHRpbmdTZWN0aW9uXHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCBVbmlxdWVWYWx1ZVJlbmRlcmVyIGZyb20gJ2VzcmkvcmVuZGVyZXJzL1VuaXF1ZVZhbHVlUmVuZGVyZXInXHJcbmltcG9ydCAqIGFzIHBpZUNoYXJ0UmVuZGVyZXJDcmVhdG9yIGZyb20gJ2Vzcmkvc21hcnRNYXBwaW5nL3JlbmRlcmVycy9waWVDaGFydCdcclxuaW1wb3J0IHsgU2VsZWN0LCBNdWx0aVNlbGVjdCwgdHlwZSBNdWx0aVNlbGVjdEl0ZW0sIEJ1dHRvbiwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknXHJcbi8vIGltcG9ydCBMZWdlbmQgZnJvbSBcImVzcmkvd2lkZ2V0cy9MZWdlbmRcIjtcclxuLy8gaW1wb3J0IExlZ2VuZFZNIGZyb20gXCJlc3JpL3dpZGdldHMvTGVnZW5kL0xlZ2VuZFZpZXdNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcclxuICBjb25zdCBbam12cywgc2V0Sm12c10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtub21icmVDYXBhLCBzZXROb21icmVDYXBhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcblxyXG4gIGZ1bmN0aW9uIHNsZWVwIChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbiAgfVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKHByb3BzLnVzZURhdGFTb3VyY2VzICYmIHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAvLyAgICAgLy8gY29uc3Qgbm9tYnJlQ2FwYSA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZC5zcGxpdCgnLScpWzFdXHJcbiAgLy8gICAgIC8vIHNldE5vbWJyZUNhcGEobm9tYnJlQ2FwYSlcclxuICAvLyAgICAgY29uc29sZS5sb2cocHJvcHMudXNlRGF0YVNvdXJjZXMpXHJcbiAgLy8gICAgIGNvbnN0IHVzZURhdGFTb3VyY2UgPSBwcm9wcy51c2VEYXRhU291cmNlc1swXVxyXG4gIC8vICAgICBjb25zdCBkczogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGRzTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXHJcblxyXG4gIC8vICAgICBjb25zdCBxdWVyeVBhcmFtczogU3FsUXVlcnlQYXJhbXMgPSB7XHJcbiAgLy8gICAgICAgd2hlcmU6ICdNZXMgPSAxJ1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zLCBwcm9wcy5pZClcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3Byb3BzLnVzZURhdGFTb3VyY2VzXSlcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgaWYgKGptdikge1xyXG4gICAgICBzZXRKbXZzKGptdilcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRybyBhbnRlcycpXHJcbiAgICAgIC8vIHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdmaWx0cm8nKVxyXG4gICAgICAvLyAgIGptdi52aWV3Lm1hcC5sYXllcnMuaXRlbXNbMTddLmRlZmluaXRpb25FeHByZXNzaW9uID0gZmlsdHJvID8gJ01lcyA9IDEnIDogJydcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coam12KVxyXG4gICAgICAvLyBzbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gICBqbXYudmlldy5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vICAgICBzbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coam12LnZpZXcubWFwLmxheWVycy5pdGVtc1sxN10uZGVmaW5pdGlvbkV4cHJlc3Npb24pXHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGZpbHRybylcclxuICAgICAgLy8gICAgICAgam12LnZpZXcubWFwLmxheWVycy5pdGVtc1sxN10uZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnTWVzID0gMSdcclxuICAgICAgLy8gICAgIH0pXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoam12cykge1xyXG4gICAgICBjb25zb2xlLmxvZyhqbXZzKVxyXG4gICAgICAvLyBqbXZzLnZpZXcub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyAgICAgam12cy52aWV3Lm1hcC5sYXllcnMuaXRlbXNbMTddLmRlZmluaXRpb25FeHByZXNzaW9uID0gZmlsdHJvID8gJ01lcyA9IDEnIDogJydcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyBqbXZzLnZpZXcubWFwLmxheWVyc1xyXG4gICAgICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIGNvbnN0IG5vbWJyZUNhcGEgPSBwcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQuc3BsaXQoJy0nKVsxXVxyXG4gICAgICAgIC8vIHNldE5vbWJyZUNhcGEobm9tYnJlQ2FwYSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMudXNlRGF0YVNvdXJjZXMpXHJcbiAgICAgICAgY29uc3QgdXNlRGF0YVNvdXJjZSA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdXHJcbiAgICAgICAgY29uc3QgZHM6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgPSBkc01hbmFnZXIuZ2V0RGF0YVNvdXJjZSh1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxyXG4gIFxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBTcWxRdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgIHdoZXJlOiBmaWx0cm8gPyAnTWVzID0gMScgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcy51cGRhdGVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcywgcHJvcHMuaWQpXHJcbiAgXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gIH0sIFtmaWx0cm9dKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldEZpbHRybyghZmlsdHJvKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgRmlsdHJvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
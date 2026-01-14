System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/smartMapping/renderers/pieChart"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_pieChart__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/ActivarDesactivarCluster/src/runtime/widget.tsx ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_smartMapping_renderers_pieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/smartMapping/renderers/pieChart */ "esri/smartMapping/renderers/pieChart");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */




const ClusterToggleWidget = (props) => {
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [layerId, setLayerId] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [cluster, setCluster] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(true);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (props.useDataSources && props.useDataSources.length > 0) {
            const id = props.useDataSources[0].dataSourceId.split('-')[1];
            setLayerId(id);
        }
    }, [props.useDataSources]);
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            setJimuMapView(jmv);
        }
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!jimuMapView || !layerId)
            return;
        const layer = jimuMapView.view.map.findLayerById(layerId);
        if (!layer)
            return;
        setCluster(!!layer.featureReduction);
        const handle = layer.watch('featureReduction', (newVal) => {
            setCluster(!!newVal);
        });
        return () => {
            if (handle && typeof handle.remove === 'function') {
                handle.remove();
            }
        };
    }, [jimuMapView, layerId]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const applyCluster = () => __awaiter(void 0, void 0, void 0, function* () {
            if (!jimuMapView || !layerId)
                return;
            const layer = jimuMapView.view.map.findLayerById(layerId);
            if (!layer)
                return;
            const hasCluster = !!layer.featureReduction;
            if (cluster && !hasCluster) {
                const { renderer, fields } = yield esri_smartMapping_renderers_pieChart__WEBPACK_IMPORTED_MODULE_3__.createRendererForClustering({
                    layer
                });
                layer.featureReduction = {
                    type: 'cluster',
                    fields,
                    clusterMinSize: 16,
                    renderer
                };
            }
            else if (!cluster && hasCluster) {
                layer.featureReduction = null;
            }
        });
        applyCluster();
    }, [cluster, jimuMapView, layerId]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "cluster-toggle-widget jimu-widget" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 10px',
                borderRadius: 999,
                background: 'rgba(148, 163, 184, 0.5)',
                color: '#0f172a',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(148, 163, 184, 0.9)',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                maxWidth: 260,
                minHeight: 32
            }, onClick: () => setCluster(!cluster) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'conic-gradient(#6efce3 0deg 120deg, #fca311 120deg 240deg, #64b5f6 240deg 360deg)',
                    border: '2px solid rgba(15,23,42,0.9)',
                    flexShrink: 0
                } }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onClick: (e) => e.stopPropagation(), style: { paddingLeft: 2 } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: cluster, onChange: () => setCluster(!cluster), "aria-label": "Cluster" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClusterToggleWidget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9BY3RpdmFyRGVzYWN0aXZhckNsdXN0ZXIvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5ELGVBQWU7QUFDNEM7QUFDUztBQUNwQztBQUMrQztBQUcvRSxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFO0lBQzlELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLEVBQWU7SUFDbkUsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQVUsSUFBSSxDQUFDO0lBRTNELDRDQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixJQUFJLEtBQUssQ0FBQyxjQUFjLElB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VUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixZQUFZLEVBQUUsR0FBRztnQkFDakIsVUFBVSxFQUFFLDBCQUEwQjtnQkFDdEMsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFNBQVMsRUFBRSwrQkFBK0I7Z0JBQzFDLE1BQU0sRUFBRSxvQ0FBb0M7Z0JBQzVDLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7YUFDZCxFQUNELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFJbkMsd0RBQ0UsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxFQUFFO29CQUNULE1BQU0sRUFBRSxFQUFFO29CQUNWLFlBQVksRUFBRSxLQUFLO29CQUNuQixVQUFVLEVBQUUsbUZBQW1GO29CQUMvRixNQUFNLEVBQUUsOEJBQThCO29CQUN0QyxVQUFVLEVBQUUsQ0FBQztpQkFDZCxHQUNEO1lBR0Ysd0RBQ0UsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ25DLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7Z0JBRXpCLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFDekIsU0FBUyxHQUNwQixDQUNFLENBQ0YsQ0FDRixDQUNQO0FBQ0QsQ0FBQztBQUVELGlFQUFlLG1CQUFtQjtBQUUxQixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zbWFydE1hcHBpbmcvcmVuZGVyZXJzL3BpZUNoYXJ0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BY3RpdmFyRGVzYWN0aXZhckNsdXN0ZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zbWFydE1hcHBpbmdfcmVuZGVyZXJzX3BpZUNoYXJ0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCAqIGFzIHBpZUNoYXJ0UmVuZGVyZXJDcmVhdG9yIGZyb20gJ2Vzcmkvc21hcnRNYXBwaW5nL3JlbmRlcmVycy9waWVDaGFydCdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IENsdXN0ZXJUb2dnbGVXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbbGF5ZXJJZCwgc2V0TGF5ZXJJZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtjbHVzdGVyLCBzZXRDbHVzdGVyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBpZCA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZC5zcGxpdCgnLScpWzFdXHJcbiAgICAgIHNldExheWVySWQoaWQpXHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLnVzZURhdGFTb3VyY2VzXSlcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgaWYgKGptdikge1xyXG4gICAgICBzZXRKaW11TWFwVmlldyhqbXYpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldyB8fCAhbGF5ZXJJZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVySWQpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuICAgIGlmICghbGF5ZXIpIHJldHVyblxyXG5cclxuICAgIHNldENsdXN0ZXIoISFsYXllci5mZWF0dXJlUmVkdWN0aW9uKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZSA9IChsYXllciBhcyBhbnkpLndhdGNoKCdmZWF0dXJlUmVkdWN0aW9uJywgKG5ld1ZhbDogYW55KSA9PiB7XHJcbiAgICAgIHNldENsdXN0ZXIoISFuZXdWYWwpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChoYW5kbGUgJiYgdHlwZW9mIGhhbmRsZS5yZW1vdmUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBoYW5kbGUucmVtb3ZlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlldywgbGF5ZXJJZF0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhcHBseUNsdXN0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghamltdU1hcFZpZXcgfHwgIWxheWVySWQpIHJldHVyblxyXG5cclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVySWQpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuICAgICAgaWYgKCFsYXllcikgcmV0dXJuXHJcblxyXG4gICAgICBjb25zdCBoYXNDbHVzdGVyID0gISFsYXllci5mZWF0dXJlUmVkdWN0aW9uXHJcblxyXG4gICAgICBpZiAoY2x1c3RlciAmJiAhaGFzQ2x1c3Rlcikge1xyXG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIsIGZpZWxkcyB9ID0gYXdhaXQgcGllQ2hhcnRSZW5kZXJlckNyZWF0b3IuY3JlYXRlUmVuZGVyZXJGb3JDbHVzdGVyaW5nKHtcclxuICAgICAgICAgIGxheWVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGF5ZXIuZmVhdHVyZVJlZHVjdGlvbiA9IHtcclxuICAgICAgICAgIHR5cGU6ICdjbHVzdGVyJyxcclxuICAgICAgICAgIGZpZWxkcyxcclxuICAgICAgICAgIGNsdXN0ZXJNaW5TaXplOiAxNixcclxuICAgICAgICAgIHJlbmRlcmVyXHJcbiAgICAgICAgfSBhcyBhbnlcclxuICAgICAgfSBlbHNlIGlmICghY2x1c3RlciAmJiBoYXNDbHVzdGVyKSB7XHJcbiAgICAgICAgbGF5ZXIuZmVhdHVyZVJlZHVjdGlvbiA9IG51bGwgYXMgYW55XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseUNsdXN0ZXIoKVxyXG4gIH0sIFtjbHVzdGVyLCBqaW11TWFwVmlldywgbGF5ZXJJZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjbHVzdGVyLXRvZ2dsZS13aWRnZXQgamltdS13aWRnZXRcIj5cclxuICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgLz5cclxuICAgICl9XHJcblxyXG4gICAgey8qIFBhc3RpbGxhIGZsb3RhbnRlIGNvbXBhY3RhICovfVxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgZ2FwOiA4LFxyXG4gICAgICAgIHBhZGRpbmc6ICc2cHggMTBweCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMTQ4LCAxNjMsIDE4NCwgMC41KScsXHJcbiAgICAgICAgY29sb3I6ICcjMGYxNzJhJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC45KScsXHJcbiAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDRweCknLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1heFdpZHRoOiAyNjAsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAzMlxyXG4gICAgICB9fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbHVzdGVyKCFjbHVzdGVyKX1cclxuICAgID5cclxuXHJcbiAgICAgIHsvKiBJY29ubyBwaWUgY2hhcnQgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IDIyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAyMixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29uaWMtZ3JhZGllbnQoIzZlZmNlMyAwZGVnIDEyMGRlZywgI2ZjYTMxMSAxMjBkZWcgMjQwZGVnLCAjNjRiNWY2IDI0MGRlZyAzNjBkZWcpJyxcclxuICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDE1LDIzLDQyLDAuOSknLFxyXG4gICAgICAgICAgZmxleFNocmluazogMFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogU3dpdGNoICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgIGNoZWNrZWQ9e2NsdXN0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q2x1c3RlcighY2x1c3Rlcil9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2x1c3RlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbHVzdGVyVG9nZ2xlV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
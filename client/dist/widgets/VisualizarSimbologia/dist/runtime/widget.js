System.register(["jimu-core/react","jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
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

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/VisualizarSimbologia/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ WidgetSimbologia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const NULL_TOKEN = '__ESRI_NULL__';
// 🔧 ←——— FÍJALO AQUÍ
const TARGET_FIELDS = ['Tipo_accidente', 'Sentido'];
function WidgetSimbologia(props) {
    var _a, _b;
    const dsId = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
    const dsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    // Campos que mostraremos en el combo
    const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [fieldName, setFieldName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    // Categorías del campo
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
    // ---------- 1) DS ----------
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setError(null);
        setReady(false);
        if (!dsId)
            return;
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
        dsRef.current = ds !== null && ds !== void 0 ? ds : null;
        ds === null || ds === void 0 ? void 0 : ds.ready().then(() => setReady(true)).catch((e) => {
            console.error(e);
            setError('No se pudo inicializar el DataSource.');
        });
    }, [dsId]);
    // ---------- 2) Lee esquema y usa SOLO los TARGET_FIELDS ----------
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a;
        if (!ready || !dsRef.current)
            return;
        const schema = dsRef.current.getSchema();
        const all = Object.values((_a = schema === null || schema === void 0 ? void 0 : schema.fields) !== null && _a !== void 0 ? _a : {})
            .map((f) => { var _a; return ({ name: f.name, alias: (_a = f.alias) !== null && _a !== void 0 ? _a : f.name, type: f.type }); });
        const wanted = all.filter(f => TARGET_FIELDS.includes(f.name));
        wanted.sort((a, b) => (a.alias || a.name).localeCompare(b.alias || b.name));
        setFields(wanted);
        if (wanted.length === 0) {
            setError(`No se encontraron en la capa los campos: ${TARGET_FIELDS.join(', ')}`);
        }
        else {
            setFieldName(prev => prev && wanted.some(f => f.name === prev) ? prev : wanted[0].name);
        }
    }, [ready]);
    // ---------- 3) Carga categorías ----------
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!ready || !dsRef.current || !fieldName)
            return;
        let cancelled = false;
        setLoading(true);
        setError(null);
        (() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const q = {
                    where: '1=1',
                    groupByFieldsForStatistics: [fieldName],
                    outStatistics: [{ statisticType: 'count', onStatisticField: fieldName, outStatisticFieldName: 'n' }],
                    orderByFields: [`${fieldName} ASC`],
                    returnGeometry: false,
                    pageSize: 2000
                };
                const res = yield dsRef.current.query(q);
                const vs = ((_a = res === null || res === void 0 ? void 0 : res.records) !== null && _a !== void 0 ? _a : []).map(r => {
                    const v = r.getFieldValue(fieldName);
                    return (v === null || typeof v === 'undefined') ? NULL_TOKEN : String(v);
                });
                const uniq = Array.from(new Set(vs));
                if (!cancelled) {
                    setValues(uniq);
                    setSelected(new Set(uniq));
                }
            }
            catch (e) {
                console.error(e);
                if (!cancelled)
                    setError('Error consultando categorías del campo.');
            }
            finally {
                if (!cancelled)
                    setLoading(false);
            }
        }))();
        return () => { cancelled = true; };
    }, [ready, fieldName]);
    // ---------- 4) Aplica WHERE ----------
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => { void applyWhere(); }, [selected, fieldName]); // eslint-disable-line
    const currentFieldType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => { var _a, _b; return (_b = (_a = fields.find(f => f.name === fieldName)) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'esriFieldTypeString'; }, [fields, fieldName]);
    const applyWhere = () => __awaiter(this, void 0, void 0, function* () {
        const ds = dsRef.current;
        if (!ds || !fieldName)
            return;
        if (selected.size === 0) {
            yield ds.updateQueryParams({ where: '1=0' }, props.id);
            return;
        }
        if (selected.size === values.length) {
            yield ds.updateQueryParams({ where: '1=1' }, props.id);
            return;
        }
        const notNull = Array.from(selected).filter(v => v !== NULL_TOKEN);
        const hasNull = selected.has(NULL_TOKEN);
        const isString = currentFieldType === 'esriFieldTypeString';
        const cooked = notNull.map(v => {
            if (isString)
                return `'${v.replace(/'/g, "''")}'`;
            const n = Number(v);
            return Number.isFinite(n) ? String(n) : `'${v.replace(/'/g, "''")}'`;
        });
        const inClause = cooked.length ? `${fieldName} IN (${cooked.join(',')})` : '';
        const nullClause = hasNull ? `${fieldName} IS NULL` : '';
        const where = [inClause, nullClause].filter(Boolean).map(s => `(${s})`).join(' OR ') || '1=0';
        yield ds.updateQueryParams({ where }, props.id);
    });
    // ---------- UI ----------
    const toggleValue = (val, on) => {
        setSelected(prev => {
            const next = new Set(prev);
            if (on)
                next.add(val);
            else
                next.delete(val);
            return next;
        });
    };
    const selectAll = () => setSelected(new Set(values));
    const selectNone = () => setSelected(new Set());
    const labelFor = (raw) => (raw === NULL_TOKEN ? '(vacío)' : raw);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "p-3", style: { overflow: 'auto', height: '100%' } },
        !dsId && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { type: "warning", text: "Selecciona un DataSource en la configuraci\u00F3n del widget." }),
        error && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { className: "mb-2", type: "error", text: error }),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "mb-3" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "mb-1 font-weight-bold" }, "Simbolog\u00EDa (campo)"),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: fieldName, onChange: (e) => setFieldName(e.target.value), disabled: !ready || fields.length === 0 }, fields.map(f => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { key: f.name, value: f.name },
                f.alias,
                " (",
                f.name,
                ")"))))),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "border-top pt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "d-flex align-items-center justify-content-between" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "font-weight-bold" },
                    "Categor\u00EDas de ",
                    fieldName || '—'),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "text-muted", style: { fontSize: 12 } }, values.length ? `${selected.size}/${values.length}` : '—')),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "d-flex gap-2 my-2" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", onClick: selectAll, disabled: loading || values.length === 0 }, "Todo"),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", onClick: selectNone, disabled: loading || values.length === 0 }, "Ninguno")),
            loading && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, null),
            !loading && values.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "text-muted" }, "Sin categor\u00EDas (o pendiente de carga).")),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, { isOpen: true },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "pl-1", style: { maxHeight: 320, overflow: 'auto' } }, values.map(v => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: `${fieldName}|${v}`, className: "d-flex align-items-center mb-1" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: selected.has(v), onChange: (_, on) => toggleValue(v, on) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { className: "ml-2" }, labelFor(v))))))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9WaXN1YWxpemFyU2ltYm9sb2dpYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmdCO0FBRXRCO0FBQytCO0FBRzVFLE1BQU0sVUFBVSxHQUFHLGVBQWU7QUFFbEMsc0JBQXNCO0FBQ3RCLE1BQU0sYUFBYSxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFVO0FBRTdDLFNBQVMsZ0JBQWdCLENBQUUsS0FBMEI7O0lBQ2xFLE1BQU0sSUFBSSxHQUFHLGlCQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUMsMENBQUUsWUFBWTtJQUNwRCxNQUFNLEtBQUssR0FBRyw2Q0FBTSxDQUFvQixJQUFJLENBQUM7SUFFN0MsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN6QyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU0s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QUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFJO29CQUMvRSxzRUFBTSxTQUFTLEVBQUMsTUFBTSxJQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBUSxDQUN2QyxDQUNQLENBQUMsQ0FDRSxDQUNHLENBQ1AsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvVmlzdWFsaXphclNpbWJvbG9naWEvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IERhdGFTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBDaGVja2JveCwgQ29sbGFwc2UsIExvYWRpbmcsIFNlbGVjdCB9IGZyb20gJ2ppbXUtdWknXHJcblxyXG50eXBlIERpY3Q8VD4gPSB7IFtrOiBzdHJpbmddOiBUIH1cclxuY29uc3QgTlVMTF9UT0tFTiA9ICdfX0VTUklfTlVMTF9fJ1xyXG5cclxuLy8g8J+UpyDihpDigJTigJTigJQgRsONSkFMTyBBUVXDjVxyXG5jb25zdCBUQVJHRVRfRklFTERTID0gWydUaXBvX2FjY2lkZW50ZScsICdTZW50aWRvJ10gYXMgY29uc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldFNpbWJvbG9naWEgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgZHNJZCA9IHByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZFxyXG4gIGNvbnN0IGRzUmVmID0gdXNlUmVmPERhdGFTb3VyY2UgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuXHJcbiAgLy8gQ2FtcG9zIHF1ZSBtb3N0cmFyZW1vcyBlbiBlbCBjb21ib1xyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZTx7IG5hbWU6IHN0cmluZzsgYWxpYXM6IHN0cmluZzsgdHlwZT86IHN0cmluZyB9W10+KFtdKVxyXG4gIGNvbnN0IFtmaWVsZE5hbWUsIHNldEZpZWxkTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG5cclxuICAvLyBDYXRlZ29yw61hcyBkZWwgY2FtcG9cclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoKSlcclxuXHJcbiAgLy8gLS0tLS0tLS0tLSAxKSBEUyAtLS0tLS0tLS0tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVycm9yKG51bGwpXHJcbiAgICBzZXRSZWFkeShmYWxzZSlcclxuICAgIGlmICghZHNJZCkgcmV0dXJuXHJcbiAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKVxyXG4gICAgZHNSZWYuY3VycmVudCA9IGRzID8/IG51bGxcclxuICAgIGRzPy5yZWFkeSgpLnRoZW4oKCkgPT4gc2V0UmVhZHkodHJ1ZSkpLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IHNldEVycm9yKCdObyBzZSBwdWRvIGluaWNpYWxpemFyIGVsIERhdGFTb3VyY2UuJylcclxuICAgIH0pXHJcbiAgfSwgW2RzSWRdKVxyXG5cclxuICAvLyAtLS0tLS0tLS0tIDIpIExlZSBlc3F1ZW1hIHkgdXNhIFNPTE8gbG9zIFRBUkdFVF9GSUVMRFMgLS0tLS0tLS0tLVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWR5IHx8ICFkc1JlZi5jdXJyZW50KSByZXR1cm5cclxuICAgIGNvbnN0IHNjaGVtYSA9IGRzUmVmLmN1cnJlbnQuZ2V0U2NoZW1hKClcclxuICAgIGNvbnN0IGFsbCA9IE9iamVjdC52YWx1ZXMoc2NoZW1hPy5maWVsZHMgPz8ge30pXHJcbiAgICAgIC5tYXAoKGY6IGFueSkgPT4gKHsgbmFtZTogZi5uYW1lLCBhbGlhczogZi5hbGlhcyA/PyBmLm5hbWUsIHR5cGU6IGYudHlwZSB9KSlcclxuXHJcbiAgICBjb25zdCB3YW50ZWQgPSBhbGwuZmlsdGVyKGYgPT4gKFRBUkdFVF9GSUVMRFMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKGYubmFtZSkpXHJcbiAgICB3YW50ZWQuc29ydCgoYSwgYikgPT4gKGEuYWxpYXMgfHwgYS5uYW1lKS5sb2NhbGVDb21wYXJlKGIuYWxpYXMgfHwgYi5uYW1lKSlcclxuICAgIHNldEZpZWxkcyh3YW50ZWQpXHJcblxyXG4gICAgaWYgKHdhbnRlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0RXJyb3IoYE5vIHNlIGVuY29udHJhcm9uIGVuIGxhIGNhcGEgbG9zIGNhbXBvczogJHtUQVJHRVRfRklFTERTLmpvaW4oJywgJyl9YClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZpZWxkTmFtZShwcmV2ID0+IHByZXYgJiYgd2FudGVkLnNvbWUoZiA9PiBmLm5hbWUgPT09IHByZXYpID8gcHJldiA6IHdhbnRlZFswXS5uYW1lKVxyXG4gICAgfVxyXG4gIH0sIFtyZWFkeV0pXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0gMykgQ2FyZ2EgY2F0ZWdvcsOtYXMgLS0tLS0tLS0tLVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWR5IHx8ICFkc1JlZi5jdXJyZW50IHx8ICFmaWVsZE5hbWUpIHJldHVyblxyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpOyBzZXRFcnJvcihudWxsKVxyXG5cclxuICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHE6IGFueSA9IHtcclxuICAgICAgICAgIHdoZXJlOiAnMT0xJyxcclxuICAgICAgICAgIGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzOiBbZmllbGROYW1lXSxcclxuICAgICAgICAgIG91dFN0YXRpc3RpY3M6IFt7IHN0YXRpc3RpY1R5cGU6ICdjb3VudCcsIG9uU3RhdGlzdGljRmllbGQ6IGZpZWxkTmFtZSwgb3V0U3RhdGlzdGljRmllbGROYW1lOiAnbicgfV0sXHJcbiAgICAgICAgICBvcmRlckJ5RmllbGRzOiBbYCR7ZmllbGROYW1lfSBBU0NgXSxcclxuICAgICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcclxuICAgICAgICAgIHBhZ2VTaXplOiAyMDAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRzUmVmLmN1cnJlbnQhLnF1ZXJ5KHEpXHJcbiAgICAgICAgY29uc3QgdnMgPSAocmVzPy5yZWNvcmRzID8/IFtdKS5tYXAociA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2ID0gci5nZXRGaWVsZFZhbHVlKGZpZWxkTmFtZSlcclxuICAgICAgICAgIHJldHVybiAodiA9PT0gbnVsbCB8fCB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcpID8gTlVMTF9UT0tFTiA6IFN0cmluZyh2KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdW5pcSA9IEFycmF5LmZyb20obmV3IFNldCh2cykpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0VmFsdWVzKHVuaXEpOyBzZXRTZWxlY3RlZChuZXcgU2V0KHVuaXEpKSB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBpZiAoIWNhbmNlbGxlZCkgc2V0RXJyb3IoJ0Vycm9yIGNvbnN1bHRhbmRvIGNhdGVnb3LDrWFzIGRlbCBjYW1wby4nKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9KSgpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW3JlYWR5LCBmaWVsZE5hbWVdKVxyXG5cclxuICAvLyAtLS0tLS0tLS0tIDQpIEFwbGljYSBXSEVSRSAtLS0tLS0tLS0tXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgdm9pZCBhcHBseVdoZXJlKCkgfSwgW3NlbGVjdGVkLCBmaWVsZE5hbWVdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gIGNvbnN0IGN1cnJlbnRGaWVsZFR5cGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGZpZWxkTmFtZSk/LnR5cGUgPz8gJ2VzcmlGaWVsZFR5cGVTdHJpbmcnLFxyXG4gICAgW2ZpZWxkcywgZmllbGROYW1lXVxyXG4gIClcclxuXHJcbiAgY29uc3QgYXBwbHlXaGVyZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNSZWYuY3VycmVudFxyXG4gICAgaWYgKCFkcyB8fCAhZmllbGROYW1lKSByZXR1cm5cclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQuc2l6ZSA9PT0gMCkgeyBhd2FpdCBkcy51cGRhdGVRdWVyeVBhcmFtcyh7IHdoZXJlOiAnMT0wJyB9LCBwcm9wcy5pZCk7IHJldHVybiB9XHJcbiAgICBpZiAoc2VsZWN0ZWQuc2l6ZSA9PT0gdmFsdWVzLmxlbmd0aCkgeyBhd2FpdCBkcy51cGRhdGVRdWVyeVBhcmFtcyh7IHdoZXJlOiAnMT0xJyB9LCBwcm9wcy5pZCk7IHJldHVybiB9XHJcblxyXG4gICAgY29uc3Qgbm90TnVsbCA9IEFycmF5LmZyb20oc2VsZWN0ZWQpLmZpbHRlcih2ID0+IHYgIT09IE5VTExfVE9LRU4pXHJcbiAgICBjb25zdCBoYXNOdWxsID0gc2VsZWN0ZWQuaGFzKE5VTExfVE9LRU4pXHJcblxyXG4gICAgY29uc3QgaXNTdHJpbmcgPSBjdXJyZW50RmllbGRUeXBlID09PSAnZXNyaUZpZWxkVHlwZVN0cmluZydcclxuICAgIGNvbnN0IGNvb2tlZCA9IG5vdE51bGwubWFwKHYgPT4ge1xyXG4gICAgICBpZiAoaXNTdHJpbmcpIHJldHVybiBgJyR7di5yZXBsYWNlKC8nL2csIFwiJydcIil9J2BcclxuICAgICAgY29uc3QgbiA9IE51bWJlcih2KTsgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IFN0cmluZyhuKSA6IGAnJHt2LnJlcGxhY2UoLycvZywgXCInJ1wiKX0nYFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBpbkNsYXVzZSA9IGNvb2tlZC5sZW5ndGggPyBgJHtmaWVsZE5hbWV9IElOICgke2Nvb2tlZC5qb2luKCcsJyl9KWAgOiAnJ1xyXG4gICAgY29uc3QgbnVsbENsYXVzZSA9IGhhc051bGwgPyBgJHtmaWVsZE5hbWV9IElTIE5VTExgIDogJydcclxuICAgIGNvbnN0IHdoZXJlID0gW2luQ2xhdXNlLCBudWxsQ2xhdXNlXS5maWx0ZXIoQm9vbGVhbikubWFwKHMgPT4gYCgke3N9KWApLmpvaW4oJyBPUiAnKSB8fCAnMT0wJ1xyXG5cclxuICAgIGF3YWl0IGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKHsgd2hlcmUgfSwgcHJvcHMuaWQpXHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tIFVJIC0tLS0tLS0tLS1cclxuICBjb25zdCB0b2dnbGVWYWx1ZSA9ICh2YWw6IHN0cmluZywgb246IGJvb2xlYW4pID0+IHtcclxuICAgIHNldFNlbGVjdGVkKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0ID0gbmV3IFNldChwcmV2KTsgaWYgKG9uKSBuZXh0LmFkZCh2YWwpOyBlbHNlIG5leHQuZGVsZXRlKHZhbCk7IHJldHVybiBuZXh0XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBzZWxlY3RBbGwgPSAoKSA9PiBzZXRTZWxlY3RlZChuZXcgU2V0KHZhbHVlcykpXHJcbiAgY29uc3Qgc2VsZWN0Tm9uZSA9ICgpID0+IHNldFNlbGVjdGVkKG5ldyBTZXQoKSlcclxuICBjb25zdCBsYWJlbEZvciA9IChyYXc6IHN0cmluZykgPT4gKHJhdyA9PT0gTlVMTF9UT0tFTiA/ICcodmFjw61vKScgOiByYXcpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiIHN0eWxlPXt7IG92ZXJmbG93OiAnYXV0bycsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICB7IWRzSWQgJiYgPEFsZXJ0IHR5cGU9XCJ3YXJuaW5nXCIgdGV4dD1cIlNlbGVjY2lvbmEgdW4gRGF0YVNvdXJjZSBlbiBsYSBjb25maWd1cmFjacOzbiBkZWwgd2lkZ2V0LlwiIC8+fVxyXG4gICAgICB7ZXJyb3IgJiYgPEFsZXJ0IGNsYXNzTmFtZT1cIm1iLTJcIiB0eXBlPVwiZXJyb3JcIiB0ZXh0PXtlcnJvcn0gLz59XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEgZm9udC13ZWlnaHQtYm9sZFwiPlNpbWJvbG9nw61hIChjYW1wbyk8L2Rpdj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgdmFsdWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmllbGROYW1lKChlLnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWUpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFyZWFkeSB8fCBmaWVsZHMubGVuZ3RoID09PSAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmaWVsZHMubWFwKGYgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17Zi5uYW1lfSB2YWx1ZT17Zi5uYW1lfT57Zi5hbGlhc30gKHtmLm5hbWV9KTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIHB0LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNhdGVnb3LDrWFzIGRlIHtmaWVsZE5hbWUgfHwgJ+KAlCd9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgICAgIHt2YWx1ZXMubGVuZ3RoID8gYCR7c2VsZWN0ZWQuc2l6ZX0vJHt2YWx1ZXMubGVuZ3RofWAgOiAn4oCUJ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBnYXAtMiBteS0yXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9e3NlbGVjdEFsbH0gZGlzYWJsZWQ9e2xvYWRpbmcgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMH0+VG9kbzwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwidGVydGlhcnlcIiBvbkNsaWNrPXtzZWxlY3ROb25lfSBkaXNhYmxlZD17bG9hZGluZyB8fCB2YWx1ZXMubGVuZ3RoID09PSAwfT5OaW5ndW5vPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG5cclxuICAgICAgICB7IWxvYWRpbmcgJiYgdmFsdWVzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5TaW4gY2F0ZWdvcsOtYXMgKG8gcGVuZGllbnRlIGRlIGNhcmdhKS48L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0xXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMjAsIG92ZXJmbG93OiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgIHt2YWx1ZXMubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtmaWVsZE5hbWV9fCR7dn1gfSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtzZWxlY3RlZC5oYXModil9IG9uQ2hhbmdlPXsoXywgb24pID0+IHRvZ2dsZVZhbHVlKHYsIG9uKX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bGFiZWxGb3Iodil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/WidgetUnido/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ WidgetUnido)
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
const TARGET_FIELDS = [
    'Tipo_accidente',
    'Subtipo_Accidente',
    'Sentido',
    'Superficie',
    'Luminosidad',
    'Factores_atmosfericos',
    'Tipo_dia',
    'Factor_concurrente_1'
];
const FIELD_LABELS = {
    Tipo_accidente: 'Tipo de accidente',
    Subtipo_Accidente: 'Subtipo de accidente',
    Sentido: 'Sentido',
    Superficie: 'Superficie',
    Luminosidad: 'Luminosidad',
    Factores_atmosfericos: 'Factores atmosféricos',
    Tipo_dia: 'Tipo de día',
    Factor_concurrente_1: 'Factor concurrente'
};
const prettyField = (f) => { var _a; return (_a = FIELD_LABELS[f]) !== null && _a !== void 0 ? _a : f.replace(/_/g, ' '); };
const GLOBAL_CACHE = {};
const cloneSelected = (src) => Object.fromEntries(Object.entries(src).map(([k, v]) => [k, new Set(v)]));
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function WidgetUnido(props) {
    var _a, _b, _c;
    const dsId = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
    const dsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [availableFields, setAvailableFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [valuesByField, setValuesByField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [selectedByField, setSelectedByField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [openField, setOpenField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    // Espera al aplicar filtros
    const [applying, setApplying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // Historial de consultas aplicadas (cada elemento es un snapshot de selección)
    const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => { historyRef.current = history; }, [history]);
    // Trigger externo enviado por el widget de "Actualizar"
    const doClearAllTs = (_c = props === null || props === void 0 ? void 0 : props.stateProps) === null || _c === void 0 ? void 0 : _c.doClearAllTs;
    const lastHandledTs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // --------------------------- estilos ---------------------------
    const styles = {
        wrapper: {
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--light-200, #f5f5f7)',
            borderRadius: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            overflow: 'hidden'
        },
        header: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            padding: '10px 12px',
            background: 'linear-gradient(135deg, #005e95, #0090c5)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: 8
        },
        titleIcon: {
            width: 24,
            height: 24,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.12)',
            color: '#ffffff'
        },
        headerRight: {
            display: 'flex',
            alignItems: 'center',
            gap: 6
        },
        content: {
            padding: 10,
            paddingTop: 8,
            overflow: 'auto',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        },
        badgeRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
            fontSize: 11,
            color: 'var(--dark-600, #555)'
        },
        badge: {
            padding: '2px 8px',
            borderRadius: 999,
            background: '#ffffff',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.04)'
        },
        groupCard: {
            background: '#ffffff',
            borderRadius: 10,
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            padding: '6px 8px'
        },
        headRow: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 2px'
        },
        headLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--dark-700, #333)'
        },
        chevronBox: {
            width: 18,
            height: 18,
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            background: 'var(--light-200, #f3f3f5)',
            color: 'var(--dark-500, #666)'
        },
        chip: {
            fontSize: 11,
            padding: '2px 8px',
            borderRadius: 999,
            background: 'var(--light-200, #f3f3f5)',
            color: 'var(--dark-600, #555)'
        },
        inner: {
            marginTop: 6,
            paddingTop: 6,
            borderTop: '1px dashed var(--light-400, #e0e0e0)',
            display: 'grid',
            gap: 6
        },
        smallBtns: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 4
        },
        pillBtn: {
            borderRadius: 999
        },
        optionRow: {
            display: 'flex',
            alignItems: 'center',
            padding: '2px 0'
        },
        optionLabel: {
            marginLeft: 6,
            fontSize: 12,
            color: 'var(--dark-700, #333)'
        },
        applyOverlay: {
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5
        },
        applyOverlayInner: {
            background: '#ffffff',
            padding: '8px 14px',
            borderRadius: 999,
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 12,
            color: 'var(--dark-700,#333)'
        }
    };
    // --------------------------- lógica DS ---------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setError(null);
        if (!dsId)
            return;
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
        dsRef.current = ds;
        ds === null || ds === void 0 ? void 0 : ds.ready().then(() => setReady(true)).catch((e) => {
            console.error(e);
            setReady(false);
            setError('No se pudo inicializar el DataSource.');
        });
    }, [dsId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a;
        if (!ready || !dsRef.current || !dsId)
            return;
        const schema = dsRef.current.getSchema();
        const layerFields = Object.keys((_a = schema === null || schema === void 0 ? void 0 : schema.fields) !== null && _a !== void 0 ? _a : {});
        const present = TARGET_FIELDS.filter(f => layerFields.includes(f));
        setAvailableFields(present);
        if (present.length === 0)
            setError('Los campos de filtro no existen en esta capa.');
        const cached = GLOBAL_CACHE[dsId];
        if (cached) {
            setValuesByField(Object.assign({}, cached.valuesByField));
            setSelectedByField(cloneSelected(cached.selectedByField));
        }
    }, [ready, dsId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a;
        if (!ready || !dsRef.current || availableFields.length === 0 || !dsId)
            return;
        if (((_a = GLOBAL_CACHE[dsId]) === null || _a === void 0 ? void 0 : _a.valuesByField) && Object.keys(GLOBAL_CACHE[dsId].valuesByField).length) {
            return;
        }
        let cancelled = false;
        setLoading(true);
        setError(null);
        const load = (field) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            const q = {
                where: '1=1',
                groupByFieldsForStatistics: [field],
                outStatistics: [{ statisticType: 'count', onStatisticField: field, outStatisticFieldName: 'n' }],
                orderByFields: [`${field} ASC`],
                returnGeometry: false,
                pageSize: 2000
            };
            const res = yield dsRef.current.query(q);
            const vals = ((_b = res === null || res === void 0 ? void 0 : res.records) !== null && _b !== void 0 ? _b : []).map(r => {
                const v = r.getFieldValue(field);
                return (v === null || typeof v === 'undefined') ? NULL_TOKEN : String(v);
            });
            const uniq = Array.from(new Set(vals));
            if (!cancelled) {
                setValuesByField(prev => (Object.assign(Object.assign({}, prev), { [field]: uniq })));
                setSelectedByField(prev => (Object.assign(Object.assign({}, prev), { [field]: new Set(uniq) })));
            }
        });
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                for (const f of availableFields)
                    yield load(f);
            }
            catch (e) {
                console.error(e);
                if (!cancelled)
                    setError('Error consultando categorías.');
            }
            finally {
                if (!cancelled)
                    setLoading(false);
            }
        }))();
        return () => { cancelled = true; };
    }, [ready, availableFields, dsId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!dsId)
            return;
        const haveAll = availableFields.length > 0 &&
            availableFields.every(f => Array.isArray(valuesByField[f]));
        if (!haveAll)
            return;
        GLOBAL_CACHE[dsId] = {
            availableFields: [...availableFields],
            valuesByField: Object.assign({}, valuesByField),
            selectedByField: cloneSelected(selectedByField)
        };
    }, [dsId, availableFields, valuesByField, selectedByField]);
    const applyWhere = (overrideSelected) => __awaiter(this, void 0, void 0, function* () {
        var _d;
        const ds = dsRef.current;
        if (!ds || availableFields.length === 0)
            return;
        const selection = overrideSelected !== null && overrideSelected !== void 0 ? overrideSelected : selectedByField;
        const parts = [];
        for (const field of availableFields) {
            const all = (_d = valuesByField[field]) !== null && _d !== void 0 ? _d : [];
            const sel = selection[field];
            if (!sel)
                continue;
            if (sel.size === 0) {
                parts.push('1=0');
                continue;
            }
            if (sel.size === all.length)
                continue;
            const notNull = Array.from(sel).filter(v => v !== NULL_TOKEN);
            const hasNull = sel.has(NULL_TOKEN);
            const quoted = notNull.map(v => `'${v.replace(/'/g, "''")}'`);
            const inClause = quoted.length ? `${field} IN (${quoted.join(',')})` : '';
            const nullClause = hasNull ? `${field} IS NULL` : '';
            const clause = [inClause, nullClause].filter(Boolean).join(' OR ');
            parts.push(`(${clause})`);
        }
        const where = parts.length ? parts.join(' AND ') : '1=1';
        yield ds.updateQueryParams({ where }, props.id);
    });
    const toggle = (field, value, on) => {
        setSelectedByField(prev => {
            var _a;
            const next = new Set((_a = prev[field]) !== null && _a !== void 0 ? _a : []);
            if (on)
                next.add(value);
            else
                next.delete(value);
            return Object.assign(Object.assign({}, prev), { [field]: next });
        });
    };
    const toggleOpen = (field) => setOpenField(prev => (prev === field ? null : field));
    const labelFor = (raw) => (raw === NULL_TOKEN ? '(valor vacío)' : raw);
    const clearAll = (applyNow = false) => __awaiter(this, void 0, void 0, function* () {
        var _e;
        const next = {};
        for (const f of availableFields)
            next[f] = new Set((_e = valuesByField[f]) !== null && _e !== void 0 ? _e : []);
        setSelectedByField(next);
        setOpenField(null);
        if (dsId) {
            if (!GLOBAL_CACHE[dsId]) {
                GLOBAL_CACHE[dsId] = {
                    availableFields: [...availableFields],
                    valuesByField: Object.assign({}, valuesByField),
                    selectedByField: {}
                };
            }
            GLOBAL_CACHE[dsId].selectedByField = Object.fromEntries(Object.entries(next).map(([k, v]) => [k, new Set(v)]));
        }
        if (applyNow) {
            // resetear historial a este estado base
            setHistory([cloneSelected(next)]);
            yield applyWhere(next);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const ts = Number(doClearAllTs) || 0;
        if (!ts || ts === lastHandledTs.current)
            return;
        const readyValues = availableFields.length > 0 &&
            availableFields.every(f => Array.isArray(valuesByField[f]));
        if (!readyValues)
            return;
        void clearAll(true);
        lastHandledTs.current = ts;
    }, [doClearAllTs, availableFields, valuesByField]);
    // Consultar: guarda snapshot en historial y aplica filtros
    const handleConsultar = () => __awaiter(this, void 0, void 0, function* () {
        try {
            setApplying(true);
            const snapshot = cloneSelected(selectedByField);
            setHistory(prev => [...prev, snapshot]); // añadimos nuevo estado al historial
            yield sleep(350);
            yield applyWhere(snapshot);
        }
        finally {
            setApplying(false);
        }
    });
    // Deshacer: ir a la consulta anterior en el historial
    const handleUndo = () => __awaiter(this, void 0, void 0, function* () {
        const currentHistory = historyRef.current;
        if (currentHistory.length < 2)
            return; // nada que deshacer
        const newHistory = currentHistory.slice(0, -1);
        const previous = cloneSelected(newHistory[newHistory.length - 1]);
        setHistory(newHistory);
        setSelectedByField(previous);
        try {
            setApplying(true);
            yield sleep(350);
            yield applyWhere(previous);
        }
        finally {
            setApplying(false);
        }
    });
    // resumen de filtros activos
    const totalCampos = availableFields.length;
    const camposFiltrados = availableFields.filter(f => {
        var _a;
        const all = (_a = valuesByField[f]) !== null && _a !== void 0 ? _a : [];
        const sel = selectedByField[f];
        if (!sel)
            return false;
        return sel.size > 0 && sel.size < all.length;
    }).length;
    const canUndo = history.length > 1;
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.wrapper },
        applying && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.applyOverlay },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.applyOverlayInner },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, null),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Actualizando gr\u00E1ficos\u2026")))),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.header },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.headerLeft, title: "Filtros" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.titleIcon },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", { viewBox: "0 0 24 24", width: 14, height: 14, "aria-hidden": "true", focusable: "false", style: { display: 'block' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", { d: "M4 4h16l-5.5 6.6v4.7l-4 2.5v-7.2L4 4z", fill: "currentColor" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.headerRight },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "primary", onClick: handleConsultar, disabled: !ready || loading || availableFields.length === 0 || applying }, applying ? 'Consultando…' : 'Consultar'),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "default", onClick: () => { void clearAll(false); }, disabled: applying, title: "Restablece todos los filtros (requiere Consultar)" }, "Limpiar"))),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.content },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.badgeRow }, !dsId
                ? react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: Object.assign(Object.assign({}, styles.badge), { background: '#ffe9e5', color: '#b43424' }) }, "Sin DataSource configurado")
                : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: styles.badge },
                        "Categor\u00EDas: ",
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, totalCampos)),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: styles.badge },
                        "Filtros activos: ",
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, camposFiltrados)),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "secondary", style: { borderRadius: 999, fontSize: 11, padding: '0 10px' }, disabled: !canUndo || applying, onClick: handleUndo }, "Consulta anterior")))),
            error && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { type: "error", text: error, className: "mt-1 mb-1" }),
            loading && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, null),
            !dsId && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { type: "warning", text: "Selecciona un DataSource en el panel de configuraci\u00F3n del widget.", className: "mt-2" })),
            availableFields.map((field) => {
                var _a, _b;
                const vals = (_a = valuesByField[field]) !== null && _a !== void 0 ? _a : [];
                const sel = (_b = selectedByField[field]) !== null && _b !== void 0 ? _b : new Set();
                const isOpen = openField === field;
                const allCount = vals.length;
                const isFiltered = sel.size > 0 && sel.size < allCount;
                const isAll = allCount > 0 && sel.size === allCount;
                const statusDotStyle = {
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
                    backgroundColor: isFiltered
                        ? '#ffb020'
                        : isAll
                            ? '#22a160'
                            : '#d0d0d0'
                };
                const chipStyle = Object.assign(Object.assign({}, styles.chip), { background: isFiltered ? '#fff4e5' : styles.chip.background, color: isFiltered ? '#b15c00' : styles.chip.color });
                return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: field, style: styles.groupCard },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.headRow, onClick: () => toggleOpen(field) },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.headLeft },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.chevronBox }, isOpen ? '▾' : '▸'),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, prettyField(field))),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6 } },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: statusDotStyle }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: chipStyle },
                                sel.size,
                                "/",
                                vals.length || 0))),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, { isOpen: isOpen },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.inner },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.smallBtns },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", style: styles.pillBtn, onClick: () => setSelectedByField(prev => (Object.assign(Object.assign({}, prev), { [field]: new Set(vals) }))) }, "Seleccionar todo"),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", style: styles.pillBtn, onClick: () => setSelectedByField(prev => (Object.assign(Object.assign({}, prev), { [field]: new Set() }))) }, "Deseleccionar todo")),
                            vals.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { fontSize: 12, color: 'var(--dark-500,#666)' } }, "Cargando valores\u2026")),
                            vals.map(v => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: `${field}|${v}`, style: styles.optionRow },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: sel.has(v), onChange: (_, on) => toggle(field, v, on) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: styles.optionLabel }, labelFor(v)))))))));
            }),
            ready && dsId && availableFields.length === 0 && !error && !loading && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { type: "info", text: "No se han encontrado campos configurados para filtrar en esta capa." })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9XaWRnZXRVbmlkby9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFFYjtBQUN1QjtBQUdwRSxNQUFNLFVBQVUsR0FBRyxlQUFlO0FBQ2xDLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixzQkFBc0I7Q0FDZDtBQUVWLE1BQU0sWUFBWSxHQUEyQjtJQUMzQyxjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLGlCQUFpQixFQUFFLHNCQUFzQjtJQUN6QyxPQUFPLEVBQUUsU0FBUztJQUNsQixVQUFVLEVBQUUsWUFBWTtJQUN4QixXQUFXLEVBQUUsYUFBYTtJQUMxQixxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsUUFBUSxFQUFFLGFBQWE7SUFDdkIsb0JBQW9CLEVBQUUsb0JBQW9CO0NBQzNDO0FBQ0QsTUFBTSxXQUFXLEdB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SUFBSSxDQUFDLE9BQU8sSUFBSSxDQUN0RSw0REFBQywwQ0FBSyxJQUNKLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFDLHFFQUFxRSxHQUMxRSxDQUNILENBQ0csQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvV2lkZ2V0VW5pZG8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IERhdGFTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBDaGVja2JveCwgQWxlcnQsIExvYWRpbmcsIEJ1dHRvbiwgQ29sbGFwc2UgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxudHlwZSBEaWN0PFQ+ID0geyBbazogc3RyaW5nXTogVCB9XHJcbmNvbnN0IE5VTExfVE9LRU4gPSAnX19FU1JJX05VTExfXydcclxuY29uc3QgVEFSR0VUX0ZJRUxEUyA9IFtcclxuICAnVGlwb19hY2NpZGVudGUnLFxyXG4gICdTdWJ0aXBvX0FjY2lkZW50ZScsXHJcbiAgJ1NlbnRpZG8nLFxyXG4gICdTdXBlcmZpY2llJyxcclxuICAnTHVtaW5vc2lkYWQnLFxyXG4gICdGYWN0b3Jlc19hdG1vc2Zlcmljb3MnLFxyXG4gICdUaXBvX2RpYScsXHJcbiAgJ0ZhY3Rvcl9jb25jdXJyZW50ZV8xJ1xyXG5dIGFzIGNvbnN0XHJcblxyXG5jb25zdCBGSUVMRF9MQUJFTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgVGlwb19hY2NpZGVudGU6ICdUaXBvIGRlIGFjY2lkZW50ZScsXHJcbiAgU3VidGlwb19BY2NpZGVudGU6ICdTdWJ0aXBvIGRlIGFjY2lkZW50ZScsXHJcbiAgU2VudGlkbzogJ1NlbnRpZG8nLFxyXG4gIFN1cGVyZmljaWU6ICdTdXBlcmZpY2llJyxcclxuICBMdW1pbm9zaWRhZDogJ0x1bWlub3NpZGFkJyxcclxuICBGYWN0b3Jlc19hdG1vc2Zlcmljb3M6ICdGYWN0b3JlcyBhdG1vc2bDqXJpY29zJyxcclxuICBUaXBvX2RpYTogJ1RpcG8gZGUgZMOtYScsXHJcbiAgRmFjdG9yX2NvbmN1cnJlbnRlXzE6ICdGYWN0b3IgY29uY3VycmVudGUnXHJcbn1cclxuY29uc3QgcHJldHR5RmllbGQgPSAoZjogc3RyaW5nKSA9PiBGSUVMRF9MQUJFTFNbZl0gPz8gZi5yZXBsYWNlKC9fL2csICcgJylcclxuXHJcbnR5cGUgQ2FjaGVSZWNvcmQgPSB7XHJcbiAgYXZhaWxhYmxlRmllbGRzOiBzdHJpbmdbXVxyXG4gIHZhbHVlc0J5RmllbGQ6IERpY3Q8c3RyaW5nW10+XHJcbiAgc2VsZWN0ZWRCeUZpZWxkOiBEaWN0PFNldDxzdHJpbmc+PlxyXG59XHJcbmNvbnN0IEdMT0JBTF9DQUNIRTogUmVjb3JkPHN0cmluZywgQ2FjaGVSZWNvcmQ+ID0ge31cclxuXHJcbmNvbnN0IGNsb25lU2VsZWN0ZWQgPSAoc3JjOiBEaWN0PFNldDxzdHJpbmc+Pik6IERpY3Q8U2V0PHN0cmluZz4+ID0+XHJcbiAgT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHNyYykubWFwKChbaywgdl0pID0+IFtrLCBuZXcgU2V0KHYpXSkpXHJcblxyXG5jb25zdCBzbGVlcCA9IChtczogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0VW5pZG8gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgZHNJZCA9IHByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZFxyXG4gIGNvbnN0IGRzUmVmID0gdXNlUmVmPERhdGFTb3VyY2UgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBbYXZhaWxhYmxlRmllbGRzLCBzZXRBdmFpbGFibGVGaWVsZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFt2YWx1ZXNCeUZpZWxkLCBzZXRWYWx1ZXNCeUZpZWxkXSA9IHVzZVN0YXRlPERpY3Q8c3RyaW5nW10+Pih7fSlcclxuICBjb25zdCBbc2VsZWN0ZWRCeUZpZWxkLCBzZXRTZWxlY3RlZEJ5RmllbGRdID0gdXNlU3RhdGU8RGljdDxTZXQ8c3RyaW5nPj4+KHt9KVxyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW29wZW5GaWVsZCwgc2V0T3BlbkZpZWxkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIEVzcGVyYSBhbCBhcGxpY2FyIGZpbHRyb3NcclxuICBjb25zdCBbYXBwbHlpbmcsIHNldEFwcGx5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAvLyBIaXN0b3JpYWwgZGUgY29uc3VsdGFzIGFwbGljYWRhcyAoY2FkYSBlbGVtZW50byBlcyB1biBzbmFwc2hvdCBkZSBzZWxlY2Npw7NuKVxyXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlPERpY3Q8U2V0PHN0cmluZz4+W10+KFtdKVxyXG4gIGNvbnN0IGhpc3RvcnlSZWYgPSB1c2VSZWY8RGljdDxTZXQ8c3RyaW5nPj5bXT4oW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgaGlzdG9yeVJlZi5jdXJyZW50ID0gaGlzdG9yeSB9LCBbaGlzdG9yeV0pXHJcblxyXG4gIC8vIFRyaWdnZXIgZXh0ZXJubyBlbnZpYWRvIHBvciBlbCB3aWRnZXQgZGUgXCJBY3R1YWxpemFyXCJcclxuICBjb25zdCBkb0NsZWFyQWxsVHMgPSAocHJvcHMgYXMgYW55KT8uc3RhdGVQcm9wcz8uZG9DbGVhckFsbFRzXHJcbiAgY29uc3QgbGFzdEhhbmRsZWRUcyA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXN0aWxvcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICB3cmFwcGVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnIGFzIGNvbnN0LFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyBhcyBjb25zdCxcclxuICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWxpZ2h0LTIwMCwgI2Y1ZjVmNyknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA4KScsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ3N0aWNreScgYXMgY29uc3QsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgICBwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDVlOTUsICMwMDkwYzUpJyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgZ2FwOiA4XHJcbiAgICB9LFxyXG4gICAgaGVhZGVyTGVmdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBnYXA6IDhcclxuICAgIH0sXHJcbiAgICB0aXRsZUljb246IHtcclxuICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OSxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4xMiknLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyUmlnaHQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZ2FwOiA2XHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyBhcyBjb25zdCxcclxuICAgICAgZmxleDogMSxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyBhcyBjb25zdCxcclxuICAgICAgZ2FwOiA4XHJcbiAgICB9LFxyXG4gICAgYmFkZ2VSb3c6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgZ2FwOiA2LFxyXG4gICAgICBmb250U2l6ZTogMTEsXHJcbiAgICAgIGNvbG9yOiAndmFyKC0tZGFyay02MDAsICM1NTUpJ1xyXG4gICAgfSxcclxuICAgIGJhZGdlOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcycHggOHB4JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wNCknXHJcbiAgICB9LFxyXG4gICAgZ3JvdXBDYXJkOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNiknLFxyXG4gICAgICBwYWRkaW5nOiAnNnB4IDhweCdcclxuICAgIH0sXHJcbiAgICBoZWFkUm93OiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnNHB4IDJweCdcclxuICAgIH0sXHJcbiAgICBoZWFkTGVmdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBnYXA6IDgsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgICBjb2xvcjogJ3ZhcigtLWRhcmstNzAwLCAjMzMzKSdcclxuICAgIH0sXHJcbiAgICBjaGV2cm9uQm94OiB7XHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgaGVpZ2h0OiAxOCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tbGlnaHQtMjAwLCAjZjNmM2Y1KScsXHJcbiAgICAgIGNvbG9yOiAndmFyKC0tZGFyay01MDAsICM2NjYpJ1xyXG4gICAgfSxcclxuICAgIGNoaXA6IHtcclxuICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICBwYWRkaW5nOiAnMnB4IDhweCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5LFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tbGlnaHQtMjAwLCAjZjNmM2Y1KScsXHJcbiAgICAgIGNvbG9yOiAndmFyKC0tZGFyay02MDAsICM1NTUpJ1xyXG4gICAgfSxcclxuICAgIGlubmVyOiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgICAgcGFkZGluZ1RvcDogNixcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IGRhc2hlZCB2YXIoLS1saWdodC00MDAsICNlMGUwZTApJyxcclxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICBnYXA6IDZcclxuICAgIH0sXHJcbiAgICBzbWFsbEJ0bnM6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnIGFzIGNvbnN0LFxyXG4gICAgICBnYXA6IDYsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgfSxcclxuICAgIHBpbGxCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTlcclxuICAgIH0sXHJcbiAgICBvcHRpb25Sb3c6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGFkZGluZzogJzJweCAwJ1xyXG4gICAgfSxcclxuICAgIG9wdGlvbkxhYmVsOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDYsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgY29sb3I6ICd2YXIoLS1kYXJrLTcwMCwgIzMzMyknXHJcbiAgICB9LFxyXG4gICAgYXBwbHlPdmVybGF5OiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnIGFzIGNvbnN0LFxyXG4gICAgICBpbnNldDogMCxcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC41NSknLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHpJbmRleDogNVxyXG4gICAgfSxcclxuICAgIGFwcGx5T3ZlcmxheUlubmVyOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuICAgICAgcGFkZGluZzogJzhweCAxNHB4JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTksXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMTgpJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZ2FwOiA4LFxyXG4gICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgIGNvbG9yOiAndmFyKC0tZGFyay03MDAsIzMzMyknXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbMOzZ2ljYSBEUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVycm9yKG51bGwpXHJcbiAgICBpZiAoIWRzSWQpIHJldHVyblxyXG4gICAgY29uc3QgZHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNJZClcclxuICAgIGRzUmVmLmN1cnJlbnQgPSBkc1xyXG4gICAgZHM/LnJlYWR5KCkudGhlbigoKSA9PiBzZXRSZWFkeSh0cnVlKSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICBzZXRSZWFkeShmYWxzZSlcclxuICAgICAgc2V0RXJyb3IoJ05vIHNlIHB1ZG8gaW5pY2lhbGl6YXIgZWwgRGF0YVNvdXJjZS4nKVxyXG4gICAgfSlcclxuICB9LCBbZHNJZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWR5IHx8ICFkc1JlZi5jdXJyZW50IHx8ICFkc0lkKSByZXR1cm5cclxuICAgIGNvbnN0IHNjaGVtYSA9IGRzUmVmLmN1cnJlbnQuZ2V0U2NoZW1hKClcclxuICAgIGNvbnN0IGxheWVyRmllbGRzID0gT2JqZWN0LmtleXMoc2NoZW1hPy5maWVsZHMgPz8ge30pXHJcbiAgICBjb25zdCBwcmVzZW50ID0gVEFSR0VUX0ZJRUxEUy5maWx0ZXIoZiA9PiBsYXllckZpZWxkcy5pbmNsdWRlcyhmKSlcclxuICAgIHNldEF2YWlsYWJsZUZpZWxkcyhwcmVzZW50KVxyXG4gICAgaWYgKHByZXNlbnQubGVuZ3RoID09PSAwKSBzZXRFcnJvcignTG9zIGNhbXBvcyBkZSBmaWx0cm8gbm8gZXhpc3RlbiBlbiBlc3RhIGNhcGEuJylcclxuXHJcbiAgICBjb25zdCBjYWNoZWQgPSBHTE9CQUxfQ0FDSEVbZHNJZF1cclxuICAgIGlmIChjYWNoZWQpIHtcclxuICAgICAgc2V0VmFsdWVzQnlGaWVsZCh7IC4uLmNhY2hlZC52YWx1ZXNCeUZpZWxkIH0pXHJcbiAgICAgIHNldFNlbGVjdGVkQnlGaWVsZChjbG9uZVNlbGVjdGVkKGNhY2hlZC5zZWxlY3RlZEJ5RmllbGQpKVxyXG4gICAgfVxyXG4gIH0sIFtyZWFkeSwgZHNJZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWR5IHx8ICFkc1JlZi5jdXJyZW50IHx8IGF2YWlsYWJsZUZpZWxkcy5sZW5ndGggPT09IDAgfHwgIWRzSWQpIHJldHVyblxyXG4gICAgaWYgKEdMT0JBTF9DQUNIRVtkc0lkXT8udmFsdWVzQnlGaWVsZCAmJiBPYmplY3Qua2V5cyhHTE9CQUxfQ0FDSEVbZHNJZF0udmFsdWVzQnlGaWVsZCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0RXJyb3IobnVsbClcclxuXHJcbiAgICBjb25zdCBsb2FkID0gYXN5bmMgKGZpZWxkOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcTogYW55ID0ge1xyXG4gICAgICAgIHdoZXJlOiAnMT0xJyxcclxuICAgICAgICBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljczogW2ZpZWxkXSxcclxuICAgICAgICBvdXRTdGF0aXN0aWNzOiBbeyBzdGF0aXN0aWNUeXBlOiAnY291bnQnLCBvblN0YXRpc3RpY0ZpZWxkOiBmaWVsZCwgb3V0U3RhdGlzdGljRmllbGROYW1lOiAnbicgfV0sXHJcbiAgICAgICAgb3JkZXJCeUZpZWxkczogW2Ake2ZpZWxkfSBBU0NgXSxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXHJcbiAgICAgICAgcGFnZVNpemU6IDIwMDBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkc1JlZi5jdXJyZW50IS5xdWVyeShxKVxyXG4gICAgICBjb25zdCB2YWxzID0gKHJlcz8ucmVjb3JkcyA/PyBbXSkubWFwKHIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSByLmdldEZpZWxkVmFsdWUoZmllbGQpXHJcbiAgICAgICAgcmV0dXJuICh2ID09PSBudWxsIHx8IHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykgPyBOVUxMX1RPS0VOIDogU3RyaW5nKHYpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHVuaXEgPSBBcnJheS5mcm9tKG5ldyBTZXQodmFscykpXHJcbiAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgc2V0VmFsdWVzQnlGaWVsZChwcmV2ID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHVuaXEgfSkpXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRCeUZpZWxkKHByZXYgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogbmV3IFNldCh1bmlxKSB9KSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZiBvZiBhdmFpbGFibGVGaWVsZHMpIGF3YWl0IGxvYWQoZilcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0RXJyb3IoJ0Vycm9yIGNvbnN1bHRhbmRvIGNhdGVnb3LDrWFzLicpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pKClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbcmVhZHksIGF2YWlsYWJsZUZpZWxkcywgZHNJZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRzSWQpIHJldHVyblxyXG4gICAgY29uc3QgaGF2ZUFsbCA9IGF2YWlsYWJsZUZpZWxkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgIGF2YWlsYWJsZUZpZWxkcy5ldmVyeShmID0+IEFycmF5LmlzQXJyYXkodmFsdWVzQnlGaWVsZFtmXSkpXHJcbiAgICBpZiAoIWhhdmVBbGwpIHJldHVyblxyXG5cclxuICAgIEdMT0JBTF9DQUNIRVtkc0lkXSA9IHtcclxuICAgICAgYXZhaWxhYmxlRmllbGRzOiBbLi4uYXZhaWxhYmxlRmllbGRzXSxcclxuICAgICAgdmFsdWVzQnlGaWVsZDogeyAuLi52YWx1ZXNCeUZpZWxkIH0sXHJcbiAgICAgIHNlbGVjdGVkQnlGaWVsZDogY2xvbmVTZWxlY3RlZChzZWxlY3RlZEJ5RmllbGQpXHJcbiAgICB9XHJcbiAgfSwgW2RzSWQsIGF2YWlsYWJsZUZpZWxkcywgdmFsdWVzQnlGaWVsZCwgc2VsZWN0ZWRCeUZpZWxkXSlcclxuXHJcbiAgY29uc3QgYXBwbHlXaGVyZSA9IGFzeW5jIChvdmVycmlkZVNlbGVjdGVkPzogRGljdDxTZXQ8c3RyaW5nPj4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNSZWYuY3VycmVudFxyXG4gICAgaWYgKCFkcyB8fCBhdmFpbGFibGVGaWVsZHMubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBvdmVycmlkZVNlbGVjdGVkID8/IHNlbGVjdGVkQnlGaWVsZFxyXG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGF2YWlsYWJsZUZpZWxkcykge1xyXG4gICAgICBjb25zdCBhbGwgPSB2YWx1ZXNCeUZpZWxkW2ZpZWxkXSA/PyBbXVxyXG4gICAgICBjb25zdCBzZWwgPSBzZWxlY3Rpb25bZmllbGRdXHJcbiAgICAgIGlmICghc2VsKSBjb250aW51ZVxyXG4gICAgICBpZiAoc2VsLnNpemUgPT09IDApIHsgcGFydHMucHVzaCgnMT0wJyk7IGNvbnRpbnVlIH1cclxuICAgICAgaWYgKHNlbC5zaXplID09PSBhbGwubGVuZ3RoKSBjb250aW51ZVxyXG5cclxuICAgICAgY29uc3Qgbm90TnVsbCA9IEFycmF5LmZyb20oc2VsKS5maWx0ZXIodiA9PiB2ICE9PSBOVUxMX1RPS0VOKVxyXG4gICAgICBjb25zdCBoYXNOdWxsID0gc2VsLmhhcyhOVUxMX1RPS0VOKVxyXG4gICAgICBjb25zdCBxdW90ZWQgPSBub3ROdWxsLm1hcCh2ID0+IGAnJHt2LnJlcGxhY2UoLycvZywgXCInJ1wiKX0nYClcclxuICAgICAgY29uc3QgaW5DbGF1c2UgPSBxdW90ZWQubGVuZ3RoID8gYCR7ZmllbGR9IElOICgke3F1b3RlZC5qb2luKCcsJyl9KWAgOiAnJ1xyXG4gICAgICBjb25zdCBudWxsQ2xhdXNlID0gaGFzTnVsbCA/IGAke2ZpZWxkfSBJUyBOVUxMYCA6ICcnXHJcbiAgICAgIGNvbnN0IGNsYXVzZSA9IFtpbkNsYXVzZSwgbnVsbENsYXVzZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyBPUiAnKVxyXG4gICAgICBwYXJ0cy5wdXNoKGAoJHtjbGF1c2V9KWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2hlcmUgPSBwYXJ0cy5sZW5ndGggPyBwYXJ0cy5qb2luKCcgQU5EICcpIDogJzE9MSdcclxuICAgIGF3YWl0IGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKHsgd2hlcmUgfSwgcHJvcHMuaWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb246IGJvb2xlYW4pID0+IHtcclxuICAgIHNldFNlbGVjdGVkQnlGaWVsZChwcmV2ID0+IHtcclxuICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldltmaWVsZF0gPz8gW10pXHJcbiAgICAgIGlmIChvbikgbmV4dC5hZGQodmFsdWUpXHJcbiAgICAgIGVsc2UgbmV4dC5kZWxldGUodmFsdWUpXHJcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIFtmaWVsZF06IG5leHQgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoZmllbGQ6IHN0cmluZykgPT4gc2V0T3BlbkZpZWxkKHByZXYgPT4gKHByZXYgPT09IGZpZWxkID8gbnVsbCA6IGZpZWxkKSlcclxuXHJcbiAgY29uc3QgbGFiZWxGb3IgPSAocmF3OiBzdHJpbmcpID0+IChyYXcgPT09IE5VTExfVE9LRU4gPyAnKHZhbG9yIHZhY8OtbyknIDogcmF3KVxyXG5cclxuICBjb25zdCBjbGVhckFsbCA9IGFzeW5jIChhcHBseU5vdyA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0OiBEaWN0PFNldDxzdHJpbmc+PiA9IHt9XHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgYXZhaWxhYmxlRmllbGRzKSBuZXh0W2ZdID0gbmV3IFNldCh2YWx1ZXNCeUZpZWxkW2ZdID8/IFtdKVxyXG5cclxuICAgIHNldFNlbGVjdGVkQnlGaWVsZChuZXh0KVxyXG4gICAgc2V0T3BlbkZpZWxkKG51bGwpXHJcblxyXG4gICAgaWYgKGRzSWQpIHtcclxuICAgICAgaWYgKCFHTE9CQUxfQ0FDSEVbZHNJZF0pIHtcclxuICAgICAgICBHTE9CQUxfQ0FDSEVbZHNJZF0gPSB7XHJcbiAgICAgICAgICBhdmFpbGFibGVGaWVsZHM6IFsuLi5hdmFpbGFibGVGaWVsZHNdLFxyXG4gICAgICAgICAgdmFsdWVzQnlGaWVsZDogeyAuLi52YWx1ZXNCeUZpZWxkIH0sXHJcbiAgICAgICAgICBzZWxlY3RlZEJ5RmllbGQ6IHt9IGFzIGFueVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBHTE9CQUxfQ0FDSEVbZHNJZF0uc2VsZWN0ZWRCeUZpZWxkID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG5leHQpLm1hcCgoW2ssIHZdKSA9PiBbaywgbmV3IFNldCh2KV0pXHJcbiAgICAgICkgYXMgYW55XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFwcGx5Tm93KSB7XHJcbiAgICAgIC8vIHJlc2V0ZWFyIGhpc3RvcmlhbCBhIGVzdGUgZXN0YWRvIGJhc2VcclxuICAgICAgc2V0SGlzdG9yeShbY2xvbmVTZWxlY3RlZChuZXh0KV0pXHJcbiAgICAgIGF3YWl0IGFwcGx5V2hlcmUobmV4dClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0cyA9IE51bWJlcihkb0NsZWFyQWxsVHMpIHx8IDBcclxuICAgIGlmICghdHMgfHwgdHMgPT09IGxhc3RIYW5kbGVkVHMuY3VycmVudCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgcmVhZHlWYWx1ZXMgPVxyXG4gICAgICBhdmFpbGFibGVGaWVsZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICBhdmFpbGFibGVGaWVsZHMuZXZlcnkoZiA9PiBBcnJheS5pc0FycmF5KHZhbHVlc0J5RmllbGRbZl0pKVxyXG5cclxuICAgIGlmICghcmVhZHlWYWx1ZXMpIHJldHVyblxyXG5cclxuICAgIHZvaWQgY2xlYXJBbGwodHJ1ZSlcclxuICAgIGxhc3RIYW5kbGVkVHMuY3VycmVudCA9IHRzXHJcbiAgfSwgW2RvQ2xlYXJBbGxUcywgYXZhaWxhYmxlRmllbGRzLCB2YWx1ZXNCeUZpZWxkXSlcclxuXHJcbiAgLy8gQ29uc3VsdGFyOiBndWFyZGEgc25hcHNob3QgZW4gaGlzdG9yaWFsIHkgYXBsaWNhIGZpbHRyb3NcclxuICBjb25zdCBoYW5kbGVDb25zdWx0YXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRBcHBseWluZyh0cnVlKVxyXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IGNsb25lU2VsZWN0ZWQoc2VsZWN0ZWRCeUZpZWxkKVxyXG4gICAgICBzZXRIaXN0b3J5KHByZXYgPT4gWy4uLnByZXYsIHNuYXBzaG90XSkgLy8gYcOxYWRpbW9zIG51ZXZvIGVzdGFkbyBhbCBoaXN0b3JpYWxcclxuICAgICAgYXdhaXQgc2xlZXAoMzUwKVxyXG4gICAgICBhd2FpdCBhcHBseVdoZXJlKHNuYXBzaG90KVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0QXBwbHlpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZXNoYWNlcjogaXIgYSBsYSBjb25zdWx0YSBhbnRlcmlvciBlbiBlbCBoaXN0b3JpYWxcclxuICBjb25zdCBoYW5kbGVVbmRvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnRcclxuICAgIGlmIChjdXJyZW50SGlzdG9yeS5sZW5ndGggPCAyKSByZXR1cm4gLy8gbmFkYSBxdWUgZGVzaGFjZXJcclxuXHJcbiAgICBjb25zdCBuZXdIaXN0b3J5ID0gY3VycmVudEhpc3Rvcnkuc2xpY2UoMCwgLTEpXHJcbiAgICBjb25zdCBwcmV2aW91cyA9IGNsb25lU2VsZWN0ZWQobmV3SGlzdG9yeVtuZXdIaXN0b3J5Lmxlbmd0aCAtIDFdKVxyXG5cclxuICAgIHNldEhpc3RvcnkobmV3SGlzdG9yeSlcclxuICAgIHNldFNlbGVjdGVkQnlGaWVsZChwcmV2aW91cylcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRBcHBseWluZyh0cnVlKVxyXG4gICAgICBhd2FpdCBzbGVlcCgzNTApXHJcbiAgICAgIGF3YWl0IGFwcGx5V2hlcmUocHJldmlvdXMpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRBcHBseWluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJlc3VtZW4gZGUgZmlsdHJvcyBhY3Rpdm9zXHJcbiAgY29uc3QgdG90YWxDYW1wb3MgPSBhdmFpbGFibGVGaWVsZHMubGVuZ3RoXHJcbiAgY29uc3QgY2FtcG9zRmlsdHJhZG9zID0gYXZhaWxhYmxlRmllbGRzLmZpbHRlcihmID0+IHtcclxuICAgIGNvbnN0IGFsbCA9IHZhbHVlc0J5RmllbGRbZl0gPz8gW11cclxuICAgIGNvbnN0IHNlbCA9IHNlbGVjdGVkQnlGaWVsZFtmXVxyXG4gICAgaWYgKCFzZWwpIHJldHVybiBmYWxzZVxyXG4gICAgcmV0dXJuIHNlbC5zaXplID4gMCAmJiBzZWwuc2l6ZSA8IGFsbC5sZW5ndGhcclxuICB9KS5sZW5ndGhcclxuXHJcbiAgY29uc3QgY2FuVW5kbyA9IGhpc3RvcnkubGVuZ3RoID4gMVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICB7LyogT3ZlcmxheSBkZSDigJxlc3BlcmHigJ0gYWwgYXBsaWNhciBmaWx0cm9zICovfVxyXG4gICAgICB7YXBwbHlpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5hcHBseU92ZXJsYXl9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmFwcGx5T3ZlcmxheUlubmVyfT5cclxuICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgPHNwYW4+QWN0dWFsaXphbmRvIGdyw6FmaWNvc+KApjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEhFQURFUiAqL31cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmhlYWRlckxlZnR9IHRpdGxlPVwiRmlsdHJvc1wiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlSWNvbn0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICB3aWR0aD17MTR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNH1cclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk00IDRoMTZsLTUuNSA2LjZ2NC43bC00IDIuNXYtNy4yTDQgNHpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmhlYWRlclJpZ2h0fT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25zdWx0YXJ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcmVhZHkgfHwgbG9hZGluZyB8fCBhdmFpbGFibGVGaWVsZHMubGVuZ3RoID09PSAwIHx8IGFwcGx5aW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXBwbHlpbmcgPyAnQ29uc3VsdGFuZG/igKYnIDogJ0NvbnN1bHRhcid9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHZvaWQgY2xlYXJBbGwoZmFsc2UpIH19XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXthcHBseWluZ31cclxuICAgICAgICAgICAgdGl0bGU9XCJSZXN0YWJsZWNlIHRvZG9zIGxvcyBmaWx0cm9zIChyZXF1aWVyZSBDb25zdWx0YXIpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTGltcGlhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIENPTlRFTklETyAqL31cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYWRnZVJvd30+XHJcbiAgICAgICAgICB7IWRzSWRcclxuICAgICAgICAgICAgPyA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuYmFkZ2UsIGJhY2tncm91bmQ6ICcjZmZlOWU1JywgY29sb3I6ICcjYjQzNDI0JyB9fT5TaW4gRGF0YVNvdXJjZSBjb25maWd1cmFkbzwvc3Bhbj5cclxuICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuYmFkZ2V9PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yw61hczogPHN0cm9uZz57dG90YWxDYW1wb3N9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmJhZGdlfT5cclxuICAgICAgICAgICAgICAgICAgRmlsdHJvcyBhY3Rpdm9zOiA8c3Ryb25nPntjYW1wb3NGaWx0cmFkb3N9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDk5OSwgZm9udFNpemU6IDExLCBwYWRkaW5nOiAnMCAxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblVuZG8gfHwgYXBwbHlpbmd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVuZG99XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvbnN1bHRhIGFudGVyaW9yXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPEFsZXJ0IHR5cGU9XCJlcnJvclwiIHRleHQ9e2Vycm9yfSBjbGFzc05hbWU9XCJtdC0xIG1iLTFcIiAvPn1cclxuICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuXHJcbiAgICAgICAgeyFkc0lkICYmIChcclxuICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgIHRleHQ9XCJTZWxlY2Npb25hIHVuIERhdGFTb3VyY2UgZW4gZWwgcGFuZWwgZGUgY29uZmlndXJhY2nDs24gZGVsIHdpZGdldC5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIGdydXBvcyBkZSBmaWx0cm9zICovfVxyXG4gICAgICAgIHthdmFpbGFibGVGaWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFscyA9IHZhbHVlc0J5RmllbGRbZmllbGRdID8/IFtdXHJcbiAgICAgICAgICBjb25zdCBzZWwgPSBzZWxlY3RlZEJ5RmllbGRbZmllbGRdID8/IG5ldyBTZXQ8c3RyaW5nPigpXHJcbiAgICAgICAgICBjb25zdCBpc09wZW4gPSBvcGVuRmllbGQgPT09IGZpZWxkXHJcblxyXG4gICAgICAgICAgY29uc3QgYWxsQ291bnQgPSB2YWxzLmxlbmd0aFxyXG4gICAgICAgICAgY29uc3QgaXNGaWx0ZXJlZCA9IHNlbC5zaXplID4gMCAmJiBzZWwuc2l6ZSA8IGFsbENvdW50XHJcbiAgICAgICAgICBjb25zdCBpc0FsbCA9IGFsbENvdW50ID4gMCAmJiBzZWwuc2l6ZSA9PT0gYWxsQ291bnRcclxuXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNEb3RTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgsXHJcbiAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wNSknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRmlsdGVyZWRcclxuICAgICAgICAgICAgICA/ICcjZmZiMDIwJ1xyXG4gICAgICAgICAgICAgIDogaXNBbGxcclxuICAgICAgICAgICAgICAgID8gJyMyMmExNjAnXHJcbiAgICAgICAgICAgICAgICA6ICcjZDBkMGQwJ1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGNoaXBTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgLi4uc3R5bGVzLmNoaXAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzRmlsdGVyZWQgPyAnI2ZmZjRlNScgOiAoc3R5bGVzLmNoaXAgYXMgYW55KS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBjb2xvcjogaXNGaWx0ZXJlZCA/ICcjYjE1YzAwJyA6IChzdHlsZXMuY2hpcCBhcyBhbnkpLmNvbG9yXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkfSBzdHlsZT17c3R5bGVzLmdyb3VwQ2FyZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmhlYWRSb3d9IG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW4oZmllbGQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5oZWFkTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jaGV2cm9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuID8gJ+KWvicgOiAn4pa4J31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmV0dHlGaWVsZChmaWVsZCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3RhdHVzRG90U3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtjaGlwU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWwuc2l6ZX0ve3ZhbHMubGVuZ3RoIHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnNtYWxsQnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnBpbGxCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEJ5RmllbGQocHJldiA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiBuZXcgU2V0KHZhbHMpIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmFyIHRvZG9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMucGlsbEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQnlGaWVsZChwcmV2ID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IG5ldyBTZXQoKSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZXNlbGVjY2lvbmFyIHRvZG9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7dmFscy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLWRhcmstNTAwLCM2NjYpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIENhcmdhbmRvIHZhbG9yZXPigKZcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHt2YWxzLm1hcCh2ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7ZmllbGR9fCR7dn1gfSBzdHlsZT17c3R5bGVzLm9wdGlvblJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsLmhhcyh2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhfLCBvbikgPT4gdG9nZ2xlKGZpZWxkLCB2LCBvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5vcHRpb25MYWJlbH0+e2xhYmVsRm9yKHYpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgICAge3JlYWR5ICYmIGRzSWQgJiYgYXZhaWxhYmxlRmllbGRzLmxlbmd0aCA9PT0gMCAmJiAhZXJyb3IgJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgdGV4dD1cIk5vIHNlIGhhbiBlbmNvbnRyYWRvIGNhbXBvcyBjb25maWd1cmFkb3MgcGFyYSBmaWx0cmFyIGVuIGVzdGEgY2FwYS5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
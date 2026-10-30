// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/trix
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/tema
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import "../modules/stock.src.js";
import "./indicators.src.js";
import "./tema.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__tema_src_js_f2c134bb__ from "./tema.src.js";
/******/ // The require scope
/******/ const __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/ __webpack_require__.n = (module) => {
/******/ 	const getter = module && module.__esModule ?
/******/ 		() => (module['default']) :
/******/ 		() => (module);
/******/ 	__webpack_require__.d(getter, { a: getter });
/******/ 	return getter;
/******/ };
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = (exports, definition) => {
/******/ 	for(var key in definition) {
/******/ 		if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// external "../modules/stock.src.js"

;// external "./indicators.src.js"

;// external "./tema.src.js"

;// external ["./tema.src.js","default","Series","types","tema"]
const external_tema_src_js_default_Series_types_tema_namespaceObject = __WEBPACK_EXTERNAL_MODULE__tema_src_js_f2c134bb__["default"].Series.types.tema;
var external_tema_src_js_default_Series_types_tema_default = /*#__PURE__*/__webpack_require__.n(external_tema_src_js_default_Series_types_tema_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js
/* *
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * The TRIX series type.
 *
 * @class
 * @name Highcharts.seriesTypes.trix
 *
 * @augments Highcharts.Series
 */
class TRIXIndicator extends (external_tema_src_js_default_Series_types_tema_default()) {
    /* *
     *
     *  Functions
     *
     * */
    // TRIX is calculated using TEMA so we just extend getTemaPoint method.
    /** @internal */
    getTemaPoint(xVal, tripledPeriod, EMAlevels, i) {
        if (i > tripledPeriod) {
            return [
                xVal[i - 3],
                EMAlevels.prevLevel3 !== 0 ?
                    (0,external_highcharts_src_js_default_namespaceObject.correctFloat)(EMAlevels.level3 - EMAlevels.prevLevel3) /
                        EMAlevels.prevLevel3 * 100 : null
            ];
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * @sample {highstock} stock/indicators/trix
 * TRIX indicator
 *
 * @extends      plotOptions.tema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     indicators/indicators
 * @requires     indicators/tema
 * @requires     indicators/trix
 * @optionparent plotOptions.trix
 * @internal
 */
TRIXIndicator.defaultOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)((external_tema_src_js_default_Series_types_tema_default()).defaultOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('trix', TRIXIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TRIX_TRIXIndicator = ((/* unused pure expression or super */ null && (TRIXIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `TRIX` series. If the [type](#series.trix.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.trix
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  indicators/indicators
 * @requires  indicators/tema
 * @requires  indicators/trix
 * @apioption series.trix
 */
''; // To include the above in the js output

;// ./code/es-modules/masters/indicators/trix.src.js







/* harmony default export */ const trix_src = ((external_highcharts_src_js_default_default()));

export { trix_src as default };

// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/natr
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/atr
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Dalek
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import "../modules/stock.src.js";
import "./indicators.src.js";
import "./atr.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__atr_src_js_5996ba2a__ from "./atr.src.js";
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

;// external "./atr.src.js"

;// external ["./atr.src.js","default","Series","types","atr"]
const external_atr_src_js_default_Series_types_atr_namespaceObject = __WEBPACK_EXTERNAL_MODULE__atr_src_js_5996ba2a__["default"].Series.types.atr;
var external_atr_src_js_default_Series_types_atr_default = /*#__PURE__*/__webpack_require__.n(external_atr_src_js_default_Series_types_atr_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/NATR/NATRIndicator.js
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
 * The NATR series type.
 *
 * @class
 * @name Highcharts.seriesTypes.natr
 *
 * @augments Highcharts.Series
 */
class NATRIndicator extends (external_atr_src_js_default_Series_types_atr_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    getValues(series, params) {
        const atrData = (super.getValues.apply(this, arguments)), atrLength = atrData.values.length, yVal = series.yData;
        let i = 0, period = params.period - 1;
        if (!atrData) {
            return;
        }
        for (; i < atrLength; i++) {
            atrData.yData[i] = (atrData.values[i][1] / yVal[period][3] * 100);
            atrData.values[i][1] = atrData.yData[i];
            period++;
        }
        return atrData;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Normalized average true range indicator (NATR). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
 *
 * @sample {highstock} stock/indicators/natr
 *         NATR indicator
 *
 * @extends      plotOptions.atr
 * @since        7.0.0
 * @product      highstock
 * @requires     indicators/indicators
 * @requires     indicators/atr
 * @requires     indicators/natr
 * @optionparent plotOptions.natr
 * @internal
 */
NATRIndicator.defaultOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)((external_atr_src_js_default_Series_types_atr_default()).defaultOptions, {
    tooltip: {
        valueSuffix: '%'
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('natr', NATRIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const NATR_NATRIndicator = ((/* unused pure expression or super */ null && (NATRIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `NATR` series. If the [type](#series.natr.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.natr
 * @since     7.0.0
 * @product   highstock
 * @requires  indicators/indicators
 * @requires  indicators/atr
 * @requires  indicators/natr
 * @apioption series.natr
 */
''; // To include the above in the js output

;// ./code/es-modules/masters/indicators/natr.src.js







/* harmony default export */ const natr_src = ((external_highcharts_src_js_default_default()));

export { natr_src as default };

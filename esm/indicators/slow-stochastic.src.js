// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/slow-stochastic
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/stochastic
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import "../modules/stock.src.js";
import "./indicators.src.js";
import "./stochastic.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__indicators_src_js_eb4ee23f__ from "./indicators.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__stochastic_src_js_e83721be__ from "./stochastic.src.js";
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

;// external "./stochastic.src.js"

;// external ["./indicators.src.js","default","Series","types","sma"]
const external_indicators_src_js_default_Series_types_sma_namespaceObject = __WEBPACK_EXTERNAL_MODULE__indicators_src_js_eb4ee23f__["default"].Series.types.sma;
var external_indicators_src_js_default_Series_types_sma_default = /*#__PURE__*/__webpack_require__.n(external_indicators_src_js_default_Series_types_sma_namespaceObject);
;// external ["./stochastic.src.js","default","Series","types","stochastic"]
const external_stochastic_src_js_default_Series_types_stochastic_namespaceObject = __WEBPACK_EXTERNAL_MODULE__stochastic_src_js_e83721be__["default"].Series.types.stochastic;
var external_stochastic_src_js_default_Series_types_stochastic_default = /*#__PURE__*/__webpack_require__.n(external_stochastic_src_js_default_Series_types_stochastic_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js
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
 * The Slow Stochastic series type.
 *
 * @class
 * @name Highcharts.seriesTypes.slowstochastic
 *
 * @augments Highcharts.Series
 */
class SlowStochasticIndicator extends (external_stochastic_src_js_default_Series_types_stochastic_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    getValues(series, params) {
        const periods = params.periods, fastValues = super.getValues.call(this, series, params), slowValues = {
            values: [],
            xData: [],
            yData: []
        };
        if (!fastValues) {
            return;
        }
        slowValues.xData = fastValues.xData.slice(periods[1] - 1);
        const fastYData = fastValues.yData.slice(periods[1] - 1);
        // Get SMA(%D)
        const smoothedValues = external_indicators_src_js_default_Series_types_sma_default().prototype.getValues.call(this, {
            xData: slowValues.xData,
            yData: fastYData
        }, {
            index: 1,
            period: periods[2]
        });
        if (!smoothedValues) {
            return;
        }
        // Format data
        for (let i = 0, xDataLen = slowValues.xData.length; i < xDataLen; i++) {
            slowValues.yData[i] = [
                fastYData[i][1],
                smoothedValues.yData[i - periods[2] + 1] || null
            ];
            slowValues.values[i] = [
                slowValues.xData[i],
                fastYData[i][1],
                smoothedValues.yData[i - periods[2] + 1] || null
            ];
        }
        return slowValues;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option
 * to be set and should be loaded after `stock/indicators/indicators.js`
 * and `stock/indicators/stochastic.js` files.
 *
 * @sample {highstock} stock/indicators/slow-stochastic
 *         Slow Stochastic oscillator
 *
 * @extends      plotOptions.stochastic
 * @since        8.0.0
 * @product      highstock
 * @requires     indicators/indicators
 * @requires     indicators/stochastic
 * @requires     indicators/slow-stochastic
 * @optionparent plotOptions.slowstochastic
 * @internal
 */
SlowStochasticIndicator.defaultOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)((external_stochastic_src_js_default_Series_types_stochastic_default()).defaultOptions, {
    params: {
        /**
         * Periods for Slow Stochastic oscillator: [%K, %D, SMA(%D)].
         *
         * @type    {Array<number,number,number>}
         * @default [14, 3, 3]
         */
        periods: [14, 3, 3]
    }
});
(0,external_highcharts_src_js_default_namespaceObject.extend)(SlowStochasticIndicator.prototype, {
    nameBase: 'Slow Stochastic'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('slowstochastic', SlowStochasticIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SlowStochastic_SlowStochasticIndicator = ((/* unused pure expression or super */ null && (SlowStochasticIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Slow Stochastic indicator. If the [type](#series.slowstochastic.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.slowstochastic
 * @since     8.0.0
 * @product   highstock
 * @requires  indicators/indicators
 * @requires  indicators/stochastic
 * @requires  indicators/slow-stochastic
 * @apioption series.slowstochastic
 */
''; // To include the above in the js output

;// ./code/es-modules/masters/indicators/slow-stochastic.src.js







/* harmony default export */ const slow_stochastic_src = ((external_highcharts_src_js_default_default()));

export { slow_stochastic_src as default };

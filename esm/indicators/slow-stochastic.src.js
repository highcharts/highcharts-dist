// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/indicators
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Pawel Fus
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js
/* *
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { sma: SMAIndicator, stochastic: StochasticIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend, merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Slow Stochastic series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.slowstochastic
 *
 * @augments Highcharts.Series
 */
class SlowStochasticIndicator extends StochasticIndicator {
    /* *
     *
     *  Functions
     *
     * */
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
        const smoothedValues = SMAIndicator.prototype.getValues.call(this, {
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
 * @sample stock/indicators/slow-stochastic
 *         Slow Stochastic oscillator
 *
 * @extends      plotOptions.stochastic
 * @since        8.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/stochastic
 * @requires     stock/indicators/slow-stochastic
 * @optionparent plotOptions.slowstochastic
 */
SlowStochasticIndicator.defaultOptions = merge(StochasticIndicator.defaultOptions, {
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
extend(SlowStochasticIndicator.prototype, {
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
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/stochastic
 * @requires  stock/indicators/slow-stochastic
 * @apioption series.slowstochastic
 */
''; // To include the above in the js output

;// ./code/es-modules/masters/indicators/slow-stochastic.src.js




/* harmony default export */ const slow_stochastic_src = ((external_highcharts_src_js_default_default()));

export { slow_stochastic_src as default };

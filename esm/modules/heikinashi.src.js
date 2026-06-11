// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/heikinashi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * HeikinAshi series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
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
;// ./code/es-modules/Series/HeikinAshi/HeikinAshiPoint.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { candlestick: { prototype: { pointClass: CandlestickPoint } }, hlc: { prototype: { 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
pointClass: HLCPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class HeikinAshiPoint extends CandlestickPoint {
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HeikinAshi_HeikinAshiPoint = (HeikinAshiPoint);

;// ./code/es-modules/Series/HeikinAshi/HeikinAshiSeriesDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * An HeikinAshi series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per
 * data point.
 *
 * @sample stock/demo/heikinashi/
 *         Heikin Ashi series
 *
 * @extends      plotOptions.candlestick
 * @product      highstock
 * @requires     modules/heikinashi
 * @optionparent plotOptions.heikinashi
 */
const HeikinAshiDefaults = {
    dataGrouping: {
        groupAll: true
    }
};
/**
 * A `heikinashi` series. If the [type](#series.heikinashi.type)
 * option is not specified, it is inherited from [chart.type](
 * #chart.type).
 *
 * @type      {*}
 * @extends   series,plotOptions.heikinashi
 * @excluding dataParser, dataURL, marker
 * @product   highstock
 * @requires  modules/heikinashi
 * @apioption series.heikinashi
 */
/**
 * An array of data points for the series. For the `heikinashi` series
 * type, points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 7, 2, 0, 4],
 *        [1, 1, 4, 2, 8],
 *        [2, 3, 3, 9, 3]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.heikinashi.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 9,
 *        high: 2,
 *        low: 4,
 *        close: 6,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 1,
 *        high: 4,
 *        low: 7,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @basic
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.candlestick.data
 * @excluding y
 * @product   highstock
 * @apioption series.heikinashi.data
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HeikinAshiSeriesDefaults = (HeikinAshiDefaults);

;// ./code/es-modules/Series/HeikinAshi/HeikinAshiSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { composed } = (external_highcharts_src_js_default_default());



const { candlestick: CandlestickSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

/* *
 *
 *  Functions
 *
 * */
/**
 * After processing and grouping the data, calculate how the heikinashi data
 * set should look like.
 * @private
 */
function onAxisPostProcessData() {
    const series = this.series;
    series.forEach((series) => {
        if (series.is('heikinashi')) {
            const heikinashiSeries = series;
            heikinashiSeries.heikinashiData.length = 0;
            heikinashiSeries.getHeikinashiData();
        }
    });
}
/**
 * Assign heikinashi data into the points.
 * @private
 * @todo move to HeikinAshiPoint class
 */
function onHeikinAshiSeriesAfterTranslate() {
    const series = this, points = series.points, heikinashiData = series.heikinashiData, cropStart = series.cropStart || 0;
    // Modify points.
    for (let i = 0; i < points.length; i++) {
        const point = points[i], heikinashiDataPoint = heikinashiData[i + cropStart];
        point.open = heikinashiDataPoint[0];
        point.high = heikinashiDataPoint[1];
        point.low = heikinashiDataPoint[2];
        point.close = heikinashiDataPoint[3];
    }
}
/**
 * Force to recalculate the heikinashi data set after updating data.
 * @private
 */
function onHeikinAshiSeriesUpdatedData() {
    if (this.heikinashiData.length) {
        this.heikinashiData.length = 0;
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Heikin Ashi series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.heikinashi
 *
 * @augments Highcharts.Series
 */
class HeikinAshiSeries extends CandlestickSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.heikinashiData = [];
    }
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass, AxisClass) {
        CandlestickSeries.compose(SeriesClass);
        if ((0,external_highcharts_src_js_default_namespaceObject.pushUnique)(composed, 'HeikinAshi')) {
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(AxisClass, 'postProcessData', onAxisPostProcessData);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(HeikinAshiSeries, 'afterTranslate', onHeikinAshiSeriesAfterTranslate);
            (0,external_highcharts_src_js_default_namespaceObject.addEvent)(HeikinAshiSeries, 'updatedData', onHeikinAshiSeriesUpdatedData);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Calculate data set for the heikinashi series before creating the points.
     * @private
     */
    getHeikinashiData() {
        const series = this, table = series.allGroupedTable || series.dataTable, dataLength = table.rowCount, heikinashiData = series.heikinashiData;
        if (!heikinashiData.length && dataLength) {
            // Modify the first point.
            this.modifyFirstPointValue(table.getRowObject(0, this.pointArrayMap));
            // Modify other points.
            for (let i = 1; i < dataLength; i++) {
                this.modifyDataPoint(table.getRowObject(i, this.pointArrayMap), heikinashiData[i - 1]);
            }
        }
        series.heikinashiData = heikinashiData;
    }
    /**
     * @private
     */
    init() {
        super.init.apply(this, arguments);
        this.heikinashiData = [];
    }
    /**
     * Calculate and modify the first data point value.
     * @private
     * @param {Object} dataPoint
     *        Current data point.
     */
    modifyFirstPointValue(dataPoint) {
        const avg = (dataPoint.open +
            dataPoint.high +
            dataPoint.low +
            dataPoint.close) / 4, close = (dataPoint.open + dataPoint.close) / 2;
        this.heikinashiData.push([avg, dataPoint.high, dataPoint.low, close]);
    }
    /**
     * Calculate and modify the data point's value.
     * @private
     * @param {Object} dataPoint
     *        Current data point.
     * @param {Array<(number)>} previousDataPoint
     *        Previous data point.
     */
    modifyDataPoint(dataPoint, previousDataPoint) {
        const newOpen = (previousDataPoint[0] + previousDataPoint[3]) / 2, newClose = (dataPoint.open +
            dataPoint.high +
            dataPoint.low +
            dataPoint.close) / 4, newHigh = Math.max(dataPoint.high, newClose, newOpen), newLow = Math.min(dataPoint.low, newClose, newOpen);
        // Add new points to the array in order to properly calculate extremes.
        this.heikinashiData.push([newOpen, newHigh, newLow, newClose]);
    }
}
HeikinAshiSeries.defaultOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)(CandlestickSeries.defaultOptions, HeikinAshiSeriesDefaults);
/* *
 *
 *  Class Prototype
 *
 * */
HeikinAshiSeries.prototype.pointClass = HeikinAshi_HeikinAshiPoint;
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('heikinashi', HeikinAshiSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HeikinAshi_HeikinAshiSeries = (HeikinAshiSeries);

;// ./code/es-modules/masters/modules/heikinashi.src.js




const G = (external_highcharts_src_js_default_default());
HeikinAshi_HeikinAshiSeries.compose(G.Series, G.Axis);
/* harmony default export */ const heikinashi_src = ((external_highcharts_src_js_default_default()));

export { heikinashi_src as default };

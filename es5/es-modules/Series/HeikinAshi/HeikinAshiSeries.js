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
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import H from '../../Core/Globals.js';
var composed = H.composed;
import HeikinAshiPoint from './HeikinAshiPoint.js';
import HeikinAshiSeriesDefaults from './HeikinAshiSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var CandlestickSeries = SeriesRegistry.seriesTypes.candlestick;
import { addEvent, merge, pushUnique } from '../../Shared/Utilities.js';
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
    var series = this.series;
    series.forEach(function (series) {
        if (series.is('heikinashi')) {
            var heikinashiSeries = series;
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
    var series = this, points = series.points, heikinashiData = series.heikinashiData, cropStart = series.cropStart || 0;
    // Modify points.
    for (var i = 0; i < points.length; i++) {
        var point = points[i], heikinashiDataPoint = heikinashiData[i + cropStart];
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
var HeikinAshiSeries = /** @class */ (function (_super) {
    __extends(HeikinAshiSeries, _super);
    function HeikinAshiSeries() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.heikinashiData = [];
        return _this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    HeikinAshiSeries.compose = function (SeriesClass, AxisClass) {
        CandlestickSeries.compose(SeriesClass);
        if (pushUnique(composed, 'HeikinAshi')) {
            addEvent(AxisClass, 'postProcessData', onAxisPostProcessData);
            addEvent(HeikinAshiSeries, 'afterTranslate', onHeikinAshiSeriesAfterTranslate);
            addEvent(HeikinAshiSeries, 'updatedData', onHeikinAshiSeriesUpdatedData);
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Calculate data set for the heikinashi series before creating the points.
     * @private
     */
    HeikinAshiSeries.prototype.getHeikinashiData = function () {
        var series = this, table = series.allGroupedTable || series.dataTable, dataLength = table.rowCount, heikinashiData = series.heikinashiData;
        if (!heikinashiData.length && dataLength) {
            // Modify the first point.
            this.modifyFirstPointValue(table.getRowObject(0, this.pointArrayMap));
            // Modify other points.
            for (var i = 1; i < dataLength; i++) {
                this.modifyDataPoint(table.getRowObject(i, this.pointArrayMap), heikinashiData[i - 1]);
            }
        }
        series.heikinashiData = heikinashiData;
    };
    /**
     * @private
     */
    HeikinAshiSeries.prototype.init = function () {
        _super.prototype.init.apply(this, arguments);
        this.heikinashiData = [];
    };
    /**
     * Calculate and modify the first data point value.
     * @private
     * @param {Object} dataPoint
     *        Current data point.
     */
    HeikinAshiSeries.prototype.modifyFirstPointValue = function (dataPoint) {
        var avg = (dataPoint.open +
            dataPoint.high +
            dataPoint.low +
            dataPoint.close) / 4, close = (dataPoint.open + dataPoint.close) / 2;
        this.heikinashiData.push([avg, dataPoint.high, dataPoint.low, close]);
    };
    /**
     * Calculate and modify the data point's value.
     * @private
     * @param {Object} dataPoint
     *        Current data point.
     * @param {Array<(number)>} previousDataPoint
     *        Previous data point.
     */
    HeikinAshiSeries.prototype.modifyDataPoint = function (dataPoint, previousDataPoint) {
        var newOpen = (previousDataPoint[0] + previousDataPoint[3]) / 2, newClose = (dataPoint.open +
            dataPoint.high +
            dataPoint.low +
            dataPoint.close) / 4, newHigh = Math.max(dataPoint.high, newClose, newOpen), newLow = Math.min(dataPoint.low, newClose, newOpen);
        // Add new points to the array in order to properly calculate extremes.
        this.heikinashiData.push([newOpen, newHigh, newLow, newClose]);
    };
    HeikinAshiSeries.defaultOptions = merge(CandlestickSeries.defaultOptions, HeikinAshiSeriesDefaults);
    return HeikinAshiSeries;
}(CandlestickSeries));
/* *
 *
 *  Class Prototype
 *
 * */
HeikinAshiSeries.prototype.pointClass = HeikinAshiPoint;
SeriesRegistry.registerSeriesType('heikinashi', HeikinAshiSeries);
/* *
 *
 *  Default Export
 *
 * */
export default HeikinAshiSeries;

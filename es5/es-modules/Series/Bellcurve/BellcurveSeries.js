/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Sebastian Domas
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
import BellcurveSeriesDefaults from './BellcurveSeriesDefaults.js';
import DerivedComposition from '../DerivedComposition.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var AreaSplineSeries = SeriesRegistry.seriesTypes.areaspline;
import { correctFloat, isNumber, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Bell curve class
 *
 * @internal
 * @class
 * @name Highcharts.seriesTypes.bellcurve
 *
 * @augments Highcharts.Series
 */
var BellcurveSeries = /** @class */ (function (_super) {
    __extends(BellcurveSeries, _super);
    function BellcurveSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    /** @internal */
    BellcurveSeries.mean = function (data) {
        var length = data.length, sum = data.reduce(function (sum, value) {
            return (sum += value);
        }, 0);
        return length > 0 && sum / length;
    };
    /** @internal */
    BellcurveSeries.standardDeviation = function (data, average) {
        var len = data.length;
        average = isNumber(average) ?
            average : BellcurveSeries.mean(data);
        var sum = data.reduce(function (sum, value) {
            var diff = value - average;
            return (sum += diff * diff);
        }, 0);
        return len > 1 && Math.sqrt(sum / (len - 1));
    };
    /** @internal */
    BellcurveSeries.normalDensity = function (x, mean, standardDeviation) {
        var translation = x - mean;
        return Math.exp(-(translation * translation) /
            (2 * standardDeviation * standardDeviation)) / (standardDeviation * Math.sqrt(2 * Math.PI));
    };
    /* *
     *
     *  Functions
     *
     * */
    BellcurveSeries.prototype.setData = function (data, redraw, animation, updatePoints) {
        if (redraw === void 0) { redraw = true; }
        var alteredData;
        if (typeof data !== 'undefined' && data.length > 0) {
            // Support data array of objects (#24073).
            data = data
                .map(function (item) {
                return isNumber(item) ? item : item === null || item === void 0 ? void 0 : item.y;
            })
                .filter(isNumber);
            this.setMean(data);
            this.setStandardDeviation(data);
            alteredData = this.derivedData(this.mean || 0, this.standardDeviation || 0);
        }
        _super.prototype.setData.call(this, alteredData, redraw, animation, updatePoints);
    };
    BellcurveSeries.prototype.derivedData = function (mean, standardDeviation) {
        var options = this.options, intervals = options.intervals, pointsInInterval = options.pointsInInterval, stop = intervals * pointsInInterval * 2 + 1, increment = standardDeviation / pointsInInterval, data = [];
        var x = mean - intervals * standardDeviation;
        for (var i = 0; i < stop; i++) {
            data.push([x, BellcurveSeries.normalDensity(x, mean, standardDeviation)]);
            x += increment;
        }
        return data;
    };
    BellcurveSeries.prototype.setDerivedData = function () {
        var _a, _b;
        var series = this;
        if ((_a = series.baseSeries) === null || _a === void 0 ? void 0 : _a.getColumn('y').length) {
            series.setData((_b = series.baseSeries) === null || _b === void 0 ? void 0 : _b.getColumn('y'), false, void 0, false);
        }
    };
    BellcurveSeries.prototype.setMean = function (data) {
        var series = this;
        series.mean = correctFloat(BellcurveSeries.mean(data || []));
    };
    BellcurveSeries.prototype.setStandardDeviation = function (data) {
        var series = this;
        series.standardDeviation = correctFloat(BellcurveSeries.standardDeviation(data || [], series.mean));
    };
    /* *
     *
     *  Static Properties
     *
     * */
    BellcurveSeries.defaultOptions = merge(AreaSplineSeries.defaultOptions, BellcurveSeriesDefaults);
    return BellcurveSeries;
}(AreaSplineSeries));
DerivedComposition.compose(BellcurveSeries);
SeriesRegistry.registerSeriesType('bellcurve', BellcurveSeries);
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default BellcurveSeries;

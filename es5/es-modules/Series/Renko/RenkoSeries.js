/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
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
import RenkoPoint from './RenkoPoint.js';
import RenkoSeriesDefaults from './RenkoSeriesDefaults.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import ColumnSeries from '../Column/ColumnSeries.js';
import { extend, isNumber, merge, relativeLength } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * The renko series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.renko
 *
 * @augments Highcharts.seriesTypes.column
 */
var RenkoSeries = /** @class */ (function (_super) {
    __extends(RenkoSeries, _super);
    function RenkoSeries() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasDerivedData = true;
        _this.allowDG = false;
        return _this;
        /* *
         *
         *  Functions
         *
         * */
    }
    RenkoSeries.prototype.init = function () {
        _super.prototype.init.apply(this, arguments);
        this.renkoData = [];
    };
    RenkoSeries.prototype.setData = function (data, redraw, animation) {
        this.renkoData = [];
        _super.prototype.setData.call(this, data, redraw, animation, false);
    };
    RenkoSeries.prototype.getXExtremes = function (xData) {
        this.processData();
        xData = this.getColumn('x', true);
        return {
            min: xData[0],
            max: xData[xData.length - 1]
        };
    };
    RenkoSeries.prototype.getProcessedData = function () {
        var modified = this.dataTable.getModified();
        var processedXData = [];
        var processedYData = [];
        var processedLowData = [];
        var processedColorData = [];
        var processedUpTrendData = [];
        var xData = this.getColumn('x', true);
        var yData = this.getColumn('y', true);
        if (!this.renkoData || this.renkoData.length > 0) {
            return {
                modified: modified,
                closestPointRange: 1,
                cropped: false,
                cropStart: 0
            };
        }
        var boxSize = this.options.boxSize;
        var change = isNumber(boxSize) ? boxSize : relativeLength(boxSize, yData[0]);
        var renkoData = [], length = xData.length;
        var prevTrend = 0;
        var prevPrice = yData[0];
        for (var i = 1; i < length; i++) {
            var currentChange = yData[i] - yData[i - 1];
            if (currentChange > change) {
                // Uptrend
                if (prevTrend === 2) {
                    prevPrice += change;
                }
                for (var j = 0; j < currentChange / change; j++) {
                    renkoData.push({
                        x: xData[i] + j,
                        low: prevPrice,
                        y: prevPrice + change,
                        color: this.options.color,
                        upTrend: true
                    });
                    prevPrice += change;
                }
                prevTrend = 1;
            }
            else if (Math.abs(currentChange) > change) {
                if (prevTrend === 1) {
                    prevPrice -= change;
                }
                // Downtrend
                for (var j = 0; j < Math.abs(currentChange) / change; j++) {
                    renkoData.push({
                        x: xData[i] + j,
                        low: prevPrice - change,
                        y: prevPrice,
                        color: this.options.downColor,
                        upTrend: false
                    });
                    prevPrice -= change;
                }
                prevTrend = 2;
            }
        }
        this.renkoData = renkoData;
        for (var _i = 0, renkoData_1 = renkoData; _i < renkoData_1.length; _i++) {
            var point = renkoData_1[_i];
            processedXData.push(point.x);
            processedYData.push(point.y);
            processedLowData.push(point.low);
            processedColorData.push(point.color);
            processedUpTrendData.push(point.upTrend);
        }
        this.hasProcessedDataTable = true;
        modified.setColumn('x', processedXData);
        modified.setColumn('y', processedYData);
        modified.setColumn('low', processedLowData);
        modified.setColumn('color', processedColorData);
        modified.setColumn('upTrend', processedUpTrendData);
        return {
            modified: modified,
            cropped: false,
            cropStart: 0,
            closestPointRange: 1
        };
    };
    /* *
     *
     *  Static Properties
     *
     * */
    RenkoSeries.defaultOptions = merge(ColumnSeries.defaultOptions, RenkoSeriesDefaults);
    return RenkoSeries;
}(ColumnSeries));
extend(RenkoSeries.prototype, {
    pointClass: RenkoPoint
});
SeriesRegistry.registerSeriesType('renko', RenkoSeries);
/* *
 *
 *  Default Export
 *
 * */
export default RenkoSeries;

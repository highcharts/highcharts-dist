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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Axis from './Axis.js';
import D from '../Defaults.js';
var defaultOptions = D.defaultOptions;
import { splat, merge, addEvent } from '../../Shared/Utilities.js';
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function chartAddZAxis(options) {
    return new ZAxis(this, options);
}
/**
 * Get the Z axis in addition to the default X and Y.
 * @internal
 */
function onChartAfterCreateAxes() {
    var _this = this;
    var zAxisOptions = this.options.zAxis = splat(this.options.zAxis || {});
    if (!this.is3d()) {
        return;
    }
    this.zAxis = [];
    zAxisOptions.forEach(function (axisOptions) {
        _this.addZAxis(axisOptions).setScale();
    });
}
/* *
 *
 *  Class
 *
 * */
/**
 * 3D axis for z coordinates.
 */
var ZAxis = /** @class */ (function (_super) {
    __extends(ZAxis, _super);
    function ZAxis() {
        /* *
         *
         *  Static Properties
         *
         * */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isZAxis = true;
        return _this;
    }
    /** @internal */
    ZAxis.compose = function (ChartClass) {
        var chartProto = ChartClass.prototype;
        if (!chartProto.addZAxis) {
            defaultOptions.zAxis = merge(defaultOptions.xAxis, {
                offset: 0,
                lineWidth: 0
            });
            chartProto.addZAxis = chartAddZAxis;
            chartProto.collectionsWithInit.zAxis = [chartProto.addZAxis];
            chartProto.collectionsWithUpdate.push('zAxis');
            addEvent(ChartClass, 'afterCreateAxes', onChartAfterCreateAxes);
        }
    };
    /* *
     *
     *  Constructor
     *
     * */
    ZAxis.prototype.init = function (chart, userOptions) {
        // #14793, this used to be set on the prototype
        this.isZAxis = true;
        _super.prototype.init.call(this, chart, userOptions, 'zAxis');
    };
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    ZAxis.prototype.getSeriesExtremes = function () {
        var _this = this;
        this.hasVisibleSeries = false;
        // Reset properties in case we're redrawing (#3353)
        this.dataMin = this.dataMax = this.ignoreMinPadding = (this.ignoreMaxPadding = void 0);
        if (this.stacking) {
            this.stacking.buildStacks();
        }
        // Loop through this axis' series
        this.series.forEach(function (series) {
            var _a, _b;
            if (series.reserveSpace()) {
                var threshold = series.options.threshold;
                _this.hasVisibleSeries = true;
                // Validate threshold in logarithmic axes
                if (_this.positiveValuesOnly && threshold <= 0) {
                    threshold = void 0;
                }
                var zData = __spreadArray([], series.getColumn('z', false, true), true).map(function (z) { return z || 0; });
                if (zData.length) {
                    _this.dataMin = Math.min((_a = _this.dataMin) !== null && _a !== void 0 ? _a : (zData[0] || 0), Math.min.apply(null, zData));
                    _this.dataMax = Math.max((_b = _this.dataMax) !== null && _b !== void 0 ? _b : (zData[0] || 0), Math.max.apply(null, zData));
                }
            }
        });
    };
    /** @internal */
    ZAxis.prototype.setAxisSize = function () {
        var _a;
        var chart = this.chart;
        _super.prototype.setAxisSize.call(this);
        this.width = this.len = ((_a = chart.options.chart.options3d) === null || _a === void 0 ? void 0 : _a.depth) || 0;
        this.right = chart.chartWidth - this.width - this.left;
    };
    return ZAxis;
}(Axis));
/* *
 *
 *  Default Export
 *
 * */
export default ZAxis;

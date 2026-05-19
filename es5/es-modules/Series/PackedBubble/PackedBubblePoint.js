/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Grzegorz Blachliński, Sebastian Bochan
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
import Chart from '../../Core/Chart/Chart.js';
import Point from '../../Core/Series/Point.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var BubblePoint = SeriesRegistry.seriesTypes.bubble.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var PackedBubblePoint = /** @class */ (function (_super) {
    __extends(PackedBubblePoint, _super);
    function PackedBubblePoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Destroy point.
     * Then remove point from the layout.
     * @private
     */
    PackedBubblePoint.prototype.destroy = function () {
        var _a;
        if ((_a = this.series) === null || _a === void 0 ? void 0 : _a.layout) {
            this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
        }
        return Point.prototype.destroy.apply(this, arguments);
    };
    PackedBubblePoint.prototype.firePointEvent = function () {
        var series = this.series, seriesOptions = series.options;
        if (this.isParentNode && seriesOptions.parentNode) {
            var temp = seriesOptions.allowPointSelect;
            seriesOptions.allowPointSelect = (seriesOptions.parentNode.allowPointSelect);
            Point.prototype.firePointEvent.apply(this, arguments);
            seriesOptions.allowPointSelect = temp;
        }
        else {
            Point.prototype.firePointEvent.apply(this, arguments);
        }
    };
    PackedBubblePoint.prototype.select = function () {
        var point = this, series = this.series, chart = series.chart;
        if (point.isParentNode) {
            chart.getSelectedPoints = chart.getSelectedParentNodes;
            Point.prototype.select.apply(this, arguments);
            chart.getSelectedPoints = Chart.prototype.getSelectedPoints;
        }
        else {
            Point.prototype.select.apply(this, arguments);
        }
    };
    PackedBubblePoint.prototype.setState = function (state, move) {
        var _a, _b;
        if ((_b = (_a = this === null || this === void 0 ? void 0 : this.graphic) === null || _a === void 0 ? void 0 : _a.parentGroup) === null || _b === void 0 ? void 0 : _b.element) {
            _super.prototype.setState.call(this, state, move);
        }
    };
    return PackedBubblePoint;
}(BubblePoint));
/* *
 *
 *  Default Export
 *
 * */
export default PackedBubblePoint;

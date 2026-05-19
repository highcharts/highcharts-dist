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
import Point from '../../Core/Series/Point.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
var ScatterPoint = SeriesRegistry.seriesTypes.scatter.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
/**
 * @internal
 */
var BubblePoint = /** @class */ (function (_super) {
    __extends(BubblePoint, _super);
    function BubblePoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     */
    BubblePoint.prototype.haloPath = function (size) {
        var computedSize = (size && this.marker ?
            this.marker.radius ||
                0 :
            0) + size;
        if (this.series.chart.inverted) {
            var pos = this.pos() || [0, 0], _a = this.series, xAxis = _a.xAxis, yAxis = _a.yAxis, chart = _a.chart, diameter = computedSize * 2;
            return chart.renderer.symbols.circle(((xAxis === null || xAxis === void 0 ? void 0 : xAxis.len) || 0) - pos[1] - computedSize, ((yAxis === null || yAxis === void 0 ? void 0 : yAxis.len) || 0) - pos[0] - computedSize, diameter, diameter);
        }
        return Point.prototype.haloPath.call(this, 
        // #6067
        computedSize);
    };
    return BubblePoint;
}(ScatterPoint));
/* *
 *
 *  Class Prototype
 *
 * */
extend(BubblePoint.prototype, {
    ttBelow: false
});
/* *
 *
 *  Default Export
 *
 * */
/**
 * @internal
 */
export default BubblePoint;

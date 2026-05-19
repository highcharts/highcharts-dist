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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var ColumnPoint = SeriesRegistry.seriesTypes.column.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var HLCPoint = /** @class */ (function (_super) {
    __extends(HLCPoint, _super);
    function HLCPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the origin position for entrance animation of new points
     */
    HLCPoint.prototype.getOrigin = function (_a, shape) {
        var _b = _a.x, x = _b === void 0 ? 0 : _b;
        if (shape === void 0) { shape = {}; }
        var d = shape.d, shiftX = x - (this.plotX || 0);
        if (d) {
            return {
                d: d.map(function (segment) {
                    var slice = segment.slice();
                    if (typeof slice[1] === 'number') {
                        slice[1] += shiftX;
                    }
                    return slice;
                })
            };
        }
        return shape;
    };
    return HLCPoint;
}(ColumnPoint));
/* *
 *
 *  Default Export
 *
 * */
export default HLCPoint;

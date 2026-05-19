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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var _a = SeriesRegistry.seriesTypes, columnProto = _a.column.prototype.pointClass.prototype, AreaRangePoint = _a.arearange.prototype.pointClass;
import { extend, isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var ColumnRangePoint = /** @class */ (function (_super) {
    __extends(ColumnRangePoint, _super);
    function ColumnRangePoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    ColumnRangePoint.prototype.isValid = function () {
        return isNumber(this.low);
    };
    return ColumnRangePoint;
}(AreaRangePoint));
extend(ColumnRangePoint.prototype, {
    setState: columnProto.setState
});
/* *
 *
 *  Default Export
 *
 * */
export default ColumnRangePoint;

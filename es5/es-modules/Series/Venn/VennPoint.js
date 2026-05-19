/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
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
import { isNumber } from '../../Shared/Utilities.js';
var ScatterPoint = SeriesRegistry.seriesTypes.scatter.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var VennPoint = /** @class */ (function (_super) {
    __extends(VennPoint, _super);
    function VennPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    VennPoint.prototype.isValid = function () {
        return isNumber(this.value);
    };
    VennPoint.prototype.shouldDraw = function () {
        // Only draw points with single sets.
        return !!this.shapeArgs;
    };
    return VennPoint;
}(ScatterPoint));
/* *
 *
 *  Default Export
 *
 * */
export default VennPoint;

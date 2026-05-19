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
import ColumnSeries from '../Column/ColumnSeries.js';
import Point from '../../Core/Series/Point.js';
import { isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
var WaterfallPoint = /** @class */ (function (_super) {
    __extends(WaterfallPoint, _super);
    function WaterfallPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    WaterfallPoint.prototype.getClassName = function () {
        var className = Point.prototype.getClassName.call(this);
        if (this.isSum) {
            className += ' highcharts-sum';
        }
        else if (this.isIntermediateSum) {
            className += ' highcharts-intermediate-sum';
        }
        return className;
    };
    // Pass the null test in ColumnSeries.translate.
    WaterfallPoint.prototype.isValid = function () {
        return (isNumber(this.y) ||
            this.isSum ||
            Boolean(this.isIntermediateSum));
    };
    return WaterfallPoint;
}(ColumnSeries.prototype.pointClass));
/* *
 *
 *  Export
 *
 * */
export default WaterfallPoint;

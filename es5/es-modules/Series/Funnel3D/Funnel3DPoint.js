/* *
 *
 *  Highcharts funnel3d series module
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
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
import { extend } from '../../Shared/Utilities.js';
var ColumnSeries = SeriesRegistry.seriesTypes.column;
/* *
 *
 *  Class
 *
 * */
var Funnel3DPoint = /** @class */ (function (_super) {
    __extends(Funnel3DPoint, _super);
    function Funnel3DPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Funnel3DPoint;
}(ColumnSeries.prototype.pointClass));
extend(Funnel3DPoint.prototype, {
    shapeType: 'funnel3d'
});
/* *
 *
 *  Default Export
 *
 * */
export default Funnel3DPoint;

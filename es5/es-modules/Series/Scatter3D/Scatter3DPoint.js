/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Scatter 3D series.
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
import ScatterSeries from '../Scatter/ScatterSeries.js';
import { defined } from '../../Shared/Utilities.js';
var ScatterPoint = ScatterSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var Scatter3DPoint = /** @class */ (function (_super) {
    __extends(Scatter3DPoint, _super);
    function Scatter3DPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    Scatter3DPoint.prototype.applyOptions = function () {
        _super.prototype.applyOptions.apply(this, arguments);
        if (!defined(this.z)) {
            this.z = 0;
        }
        return this;
    };
    return Scatter3DPoint;
}(ScatterPoint));
/* *
 *
 *  Default Export
 *
 * */
export default Scatter3DPoint;

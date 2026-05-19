/* *
 *
 *  Tilemap module
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Øystein Moseng
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
import ColorAxisComposition from '../../Core/Axis/Color/ColorAxisComposition.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
var Point = SeriesRegistry.series.prototype.pointClass, HeatmapPoint = SeriesRegistry.seriesTypes.heatmap.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var TilemapPoint = /** @class */ (function (_super) {
    __extends(TilemapPoint, _super);
    function TilemapPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     * @function Highcharts.Point#haloPath
     */
    TilemapPoint.prototype.haloPath = function () {
        return this.series.tileShape.haloPath.apply(this, arguments);
    };
    return TilemapPoint;
}(HeatmapPoint));
extend(TilemapPoint.prototype, {
    setState: Point.prototype.setState,
    setVisible: ColorAxisComposition.pointSetVisible
});
/* *
 *
 *  Default Export
 *
 * */
export default TilemapPoint;

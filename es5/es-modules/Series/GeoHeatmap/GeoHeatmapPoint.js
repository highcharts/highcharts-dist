/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Authors: Magdalena Gut, Piotr Madej
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
var MapPoint = SeriesRegistry.seriesTypes.map.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
var GeoHeatmapPoint = /** @class */ (function (_super) {
    __extends(GeoHeatmapPoint, _super);
    function GeoHeatmapPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    GeoHeatmapPoint.prototype.applyOptions = function (options, x) {
        var point = _super.prototype.applyOptions.call(this, options, x), _a = point.options, lat = _a.lat, lon = _a.lon;
        if (isNumber(lon) && isNumber(lat)) {
            var _b = this.series.options, _c = _b.colsize, colsize = _c === void 0 ? 1 : _c, _d = _b.rowsize, rowsize = _d === void 0 ? 1 : _d, x1 = lon - colsize / 2, y1 = lat - rowsize / 2;
            point.geometry = point.options.geometry = {
                type: 'Polygon',
                // A rectangle centered in lon/lat
                coordinates: [
                    [
                        [x1, y1],
                        [x1 + colsize, y1],
                        [x1 + colsize, y1 + rowsize],
                        [x1, y1 + rowsize],
                        [x1, y1]
                    ]
                ]
            };
        }
        return point;
    };
    return GeoHeatmapPoint;
}(MapPoint));
/* *
 *
 *  Default Export
 *
 * */
export default GeoHeatmapPoint;

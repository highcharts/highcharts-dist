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
import ColorAxisComposition from '../../Core/Axis/Color/ColorAxisComposition.js';
import HeatmapSeries from '../Heatmap/HeatmapSeries.js';
import Series from '../../Core/Series/Series.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const Point = Series.prototype.pointClass;
const HeatmapPoint = HeatmapSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class TilemapPoint extends HeatmapPoint {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     * @function Highcharts.Point#haloPath
     */
    haloPath() {
        return this.series.tileShape.haloPath.apply(this, arguments);
    }
}
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

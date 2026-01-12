/* *
 *
 *  Tilemaps module
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import ColorAxisComposition from '../../Core/Axis/Color/ColorAxisComposition.js';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { series: { prototype: { pointClass: Point } }, seriesTypes: { heatmap: { prototype: { pointClass: HeatmapPoint } } } } = SeriesRegistry;
import U from '../../Core/Utilities.js';
const { extend } = U;
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
     * @private
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

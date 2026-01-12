/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  3D pie series
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { pie: { prototype: { pointClass: PiePoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
class Pie3DPoint extends PiePoint {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    haloPath() {
        return this.series?.chart.is3d() ?
            [] : super.haloPath.apply(this, arguments);
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default Pie3DPoint;

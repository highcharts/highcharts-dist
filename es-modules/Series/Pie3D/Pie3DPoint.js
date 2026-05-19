/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  3D pie series
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
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

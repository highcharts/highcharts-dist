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
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { series: { prototype: { pointClass: Point } } } = SeriesRegistry;
/* *
 *
 *  Class
 *
 * */
class GaugePoint extends Point {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Don't do any hover colors or anything
     * @private
     */
    setState(state) {
        this.state = state;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default GaugePoint;

/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
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
    /* eslint-disable valid-jsdoc */
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

/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { scatter: { prototype: { pointClass: ScatterPoint } } } = SeriesRegistry.seriesTypes;
import U from '../../Core/Utilities.js';
const { isNumber } = U;
/* *
 *
 *  Class
 *
 * */
class VennPoint extends ScatterPoint {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return isNumber(this.value);
    }
    shouldDraw() {
        // Only draw points with single sets.
        return !!this.shapeArgs;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default VennPoint;

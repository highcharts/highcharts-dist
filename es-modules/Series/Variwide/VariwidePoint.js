/* *
 *
 *  Highcharts variwide module
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
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
import U from '../../Core/Utilities.js';
const { isNumber } = U;
/* *
 *
 *  Class
 *
 * */
class VariwidePoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return isNumber(this.y) && isNumber(this.z);
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default VariwidePoint;

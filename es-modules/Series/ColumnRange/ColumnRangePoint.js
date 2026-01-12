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
const { seriesTypes: { column: { prototype: { pointClass: { prototype: columnProto } } }, arearange: { prototype: { pointClass: AreaRangePoint } } } } = SeriesRegistry;
import U from '../../Core/Utilities.js';
const { extend, isNumber } = U;
/* *
 *
 *  Class
 *
 * */
class ColumnRangePoint extends AreaRangePoint {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return isNumber(this.low);
    }
}
extend(ColumnRangePoint.prototype, {
    setState: columnProto.setState
});
/* *
 *
 *  Default Export
 *
 * */
export default ColumnRangePoint;

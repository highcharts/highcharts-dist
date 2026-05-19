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
const { seriesTypes: { column: { prototype: { pointClass: { prototype: columnProto } } }, arearange: { prototype: { pointClass: AreaRangePoint } } } } = SeriesRegistry;
import { extend, isNumber } from '../../Shared/Utilities.js';
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

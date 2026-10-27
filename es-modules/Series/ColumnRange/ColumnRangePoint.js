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
import AreaRangePoint from '../AreaRange/AreaRangePoint.js';
import ColumnSeries from '../Column/ColumnSeries.js';
import { extend, isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const ColumnPoint = ColumnSeries.prototype.pointClass;
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
    /** @internal */
    isValid() {
        return isNumber(this.low);
    }
}
extend(ColumnRangePoint.prototype, {
    setState: ColumnPoint.prototype.setState
});
/* *
 *
 *  Default Export
 *
 * */
export default ColumnRangePoint;

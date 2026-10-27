/* *
 *
 *  Highcharts variwide module
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
import ColumnSeries from '../Column/ColumnSeries.js';
import { isNumber } from '../../Shared/Utilities.js';
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
class VariwidePoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
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

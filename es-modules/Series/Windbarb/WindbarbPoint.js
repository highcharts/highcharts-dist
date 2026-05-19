/* *
 *
 *  Wind barb series module
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
import ColumnSeries from '../Column/ColumnSeries.js';
import { isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
class WindbarbPoint extends ColumnSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return isNumber(this.value) && this.value >= 0;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default WindbarbPoint;

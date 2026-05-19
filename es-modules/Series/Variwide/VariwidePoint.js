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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { isNumber } from '../../Shared/Utilities.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
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

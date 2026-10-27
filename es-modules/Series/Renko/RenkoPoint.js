/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Paweł Lysy
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import ColumnSeries from '../Column/ColumnSeries.js';
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
class RenkoPoint extends ColumnPoint {
    /** @internal */
    getClassName() {
        return (super.getClassName.call(this) +
            (this.upTrend ? ' highcharts-point-up' : ' highcharts-point-down'));
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default RenkoPoint;

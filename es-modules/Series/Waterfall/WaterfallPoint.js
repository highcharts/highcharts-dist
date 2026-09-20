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
import ColumnSeries from '../Column/ColumnSeries.js';
import Point from '../../Core/Series/Point.js';
import { isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
class WaterfallPoint extends ColumnSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    getClassName() {
        let className = Point.prototype.getClassName.call(this);
        if (this.isSum) {
            className += ' highcharts-sum';
        }
        else if (this.isIntermediateSum) {
            className += ' highcharts-intermediate-sum';
        }
        return className;
    }
    // Pass the null test in ColumnSeries.translate.
    isValid() {
        return (isNumber(this.y) ||
            this.isSum ||
            Boolean(this.isIntermediateSum));
    }
}
/* *
 *
 *  Export
 *
 * */
export default WaterfallPoint;

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
import ColumnSeries from '../Column/ColumnSeries.js';
import Point from '../../Core/Series/Point.js';
import U from '../../Core/Utilities.js';
const { isNumber } = U;
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

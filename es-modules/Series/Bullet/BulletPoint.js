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
import ColumnSeries from '../Column/ColumnSeries.js';
/* *
 *
 *  Class
 *
 * */
class BulletPoint extends ColumnSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Destroys target graphic.
     * @private
     */
    destroy() {
        const series = this;
        if (series.targetGraphic) {
            series.targetGraphic = series.targetGraphic.destroy();
        }
        super.destroy.apply(series, arguments);
        return;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default BulletPoint;

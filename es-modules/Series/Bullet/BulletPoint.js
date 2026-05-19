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
import ColumnSeries from '../Column/ColumnSeries.js';
/* *
 *
 *  Class
 *
 * */
/** @internal */
class BulletPoint extends ColumnSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Destroys target graphic.
     * @internal
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
/** @internal */
export default BulletPoint;

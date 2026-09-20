/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Scatter 3D series.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import ScatterSeries from '../Scatter/ScatterSeries.js';
import { defined } from '../../Shared/Utilities.js';
const { pointClass: ScatterPoint } = ScatterSeries.prototype;
/* *
 *
 *  Class
 *
 * */
class Scatter3DPoint extends ScatterPoint {
    /* *
     *
     *  Functions
     *
     * */
    applyOptions() {
        super.applyOptions.apply(this, arguments);
        if (!defined(this.z)) {
            this.z = 0;
        }
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default Scatter3DPoint;

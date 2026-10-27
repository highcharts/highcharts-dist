/* *
 *
 *  Experimental Highcharts module which enables visualization of a Venn
 *  diagram.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Layout algorithm by Ben Frederickson:
 *  https://www.benfrederickson.com/better-venn-diagrams/
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import ScatterSeries from '../Scatter/ScatterSeries.js';
import { isNumber } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const ScatterPoint = ScatterSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class VennPoint extends ScatterPoint {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    isValid() {
        return isNumber(this.value);
    }
    /** @internal */
    shouldDraw() {
        // Only draw points with single sets.
        return !!this.shapeArgs;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default VennPoint;

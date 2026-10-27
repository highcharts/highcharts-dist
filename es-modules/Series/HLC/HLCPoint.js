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
class HLCPoint extends ColumnPoint {
    /**
     * Get the origin position for entrance animation of new points.
     * @internal
     */
    getOrigin({ x = 0 }, shape = {}) {
        const d = shape.d, shiftX = x - (this.plotX || 0);
        if (d) {
            return {
                d: d.map((segment) => {
                    const slice = segment.slice();
                    if (typeof slice[1] === 'number') {
                        slice[1] += shiftX;
                    }
                    return slice;
                })
            };
        }
        return shape;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default HLCPoint;

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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
class HLCPoint extends ColumnPoint {
    /**
     * Get the origin position for entrance animation of new points
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

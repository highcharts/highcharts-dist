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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { isNumber } from '../../Shared/Utilities.js';
const { scatter: ScatterSeries } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
class MapPointPoint extends ScatterSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    isValid() {
        return Boolean(this.options.geometry ||
            (isNumber(this.x) && isNumber(this.y)) ||
            (isNumber(this.options.lon) && isNumber(this.options.lat)));
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default MapPointPoint;

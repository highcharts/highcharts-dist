/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Askel Eirik Johansson, Piotr Madej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { seriesTypes: { mapline: { prototype: { pointClass: MapLinePoint } } } } = SeriesRegistry;
import U from '../../Core/Utilities.js';
const { pick, isString, isNumber } = U;
/* *
 *
 *  Class
 *
 * */
class FlowMapPoint extends MapLinePoint {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    isValid() {
        let valid = !!(this.options.to && this.options.from);
        [this.options.to, this.options.from]
            .forEach(function (toOrFrom) {
            valid = !!(valid && (toOrFrom && (isString(toOrFrom) || ( // Point id or has lat/lon coords
            isNumber(pick(toOrFrom[0], toOrFrom.lat)) &&
                isNumber(pick(toOrFrom[1], toOrFrom.lon))))));
        });
        return valid;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default FlowMapPoint;

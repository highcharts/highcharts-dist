/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Askel Eirik Johansson, Piotr Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import MapLineSeries from '../MapLine/MapLineSeries.js';
import { isNumber, isString } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const MapLinePoint = MapLineSeries.prototype.pointClass;
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
    /** @internal */
    isValid() {
        let valid = !!(this.options.to && this.options.from);
        [this.options.to, this.options.from]
            .forEach(function (toOrFrom) {
            valid = !!(valid && (toOrFrom && (isString(toOrFrom) || ( // Point id or has lat/lon coords
            isNumber(toOrFrom[0] ??
                toOrFrom.lat) &&
                isNumber(toOrFrom[1] ??
                    toOrFrom.lon)))));
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

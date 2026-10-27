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
/* *
 *
 *  Imports
 *
 * */
import BubblePoint from '../Bubble/BubblePoint.js';
import MapSeries from '../Map/MapSeries.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const MapPoint = MapSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class MapBubblePoint extends BubblePoint {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    isValid() {
        return typeof this.z === 'number';
    }
}
extend(MapBubblePoint.prototype, {
    applyOptions: MapPoint.prototype.applyOptions,
    getProjectedBounds: MapPoint.prototype.getProjectedBounds
});
/* *
 *
 *  Default Export
 *
 * */
export default MapBubblePoint;

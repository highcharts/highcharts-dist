/* *
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../../Core/Series/SeriesRegistry.js';
const SMAPoint = SeriesRegistry.seriesTypes.sma.prototype.pointClass;
/* *
 *
 *  Functions
 *
 * */
/** @internal */
function destroyExtraLabels(point, functionName) {
    const props = point.series.pointArrayMap;
    let prop, i = props.length;
    SeriesRegistry.seriesTypes.sma.prototype.pointClass.prototype[functionName].call(point);
    while (i--) {
        prop = 'dataLabel' + props[i];
        // S4 dataLabel could be removed by parent method:
        if (point[prop] && point[prop].element) {
            point[prop].destroy();
        }
        point[prop] = null;
    }
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
class PivotPointsPoint extends SMAPoint {
    /* *
     *
     *  Functions
     *
     * */
    destroyElements() {
        destroyExtraLabels(this, 'destroyElements');
    }
    // This method is called when removing points, e.g. series.update()
    destroy() {
        destroyExtraLabels(this, 'destroyElements');
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default PivotPointsPoint;

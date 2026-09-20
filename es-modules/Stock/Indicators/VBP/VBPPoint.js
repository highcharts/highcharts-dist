/* *
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
import SeriesRegistry from '../../../Core/Series/SeriesRegistry.js';
const { sma: { prototype: { pointClass: SMAPoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
/** @internal */
class VBPPoint extends SMAPoint {
    // Required for destroying negative part of volume
    destroy() {
        // @todo: this.negativeGraphic doesn't seem to be used anywhere
        if (this.negativeGraphic) {
            this.negativeGraphic = this.negativeGraphic.destroy();
        }
        super.destroy.apply(this, arguments);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default VBPPoint;

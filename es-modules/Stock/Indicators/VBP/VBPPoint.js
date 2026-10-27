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
import SMAIndicator from '../SMA/SMAIndicator.js';
/* *
 *
 *  Constants
 *
 * */
const SMAPoint = SMAIndicator.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class VBPPoint extends SMAPoint {
    // Required for destroying negative part of volume
    /** @internal */
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
export default VBPPoint;

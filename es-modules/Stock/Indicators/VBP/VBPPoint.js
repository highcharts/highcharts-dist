/* *
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
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
export default VBPPoint;

/* *
 *
 *  Experimental Highcharts module which enables visualization of a word cloud.
 *
 *  (c) 2016-2026 Highsoft AS
 *  Authors: Jon Arild Nygård
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 * */
'use strict';
import ColumnSeries from '../Column/ColumnSeries.js';
import { extend } from '../../Shared/Utilities.js';
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
class WordcloudPoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    isValid() {
        return true;
    }
}
extend(WordcloudPoint.prototype, {
    weight: 1
});
/* *
 *
 *  Default Export
 *
 * */
export default WordcloudPoint;

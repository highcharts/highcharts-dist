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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
import { extend } from '../../Shared/Utilities.js';
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

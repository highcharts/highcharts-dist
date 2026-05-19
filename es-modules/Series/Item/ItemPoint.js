/* *
 *
 *  (c) 2019-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Item series type for Highcharts
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
const { series: { prototype: { pointClass: Point } }, seriesTypes: { pie: { prototype: { pointClass: PiePoint } } } } = SeriesRegistry;
/* *
 *
 *  Class
 *
 * */
class ItemPoint extends PiePoint {
}
extend(ItemPoint.prototype, {
    haloPath: Point.prototype.haloPath
});
/* *
 *
 *  Default Export
 *
 * */
export default ItemPoint;

/* *
 *
 *  (c) 2019-2026 Highsoft AS
 *  Author: Torstein Honsi
 *
 *  Item series type for Highcharts
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { series: { prototype: { pointClass: Point } }, seriesTypes: { pie: { prototype: { pointClass: PiePoint } } } } = SeriesRegistry;
import U from '../../Core/Utilities.js';
const { extend } = U;
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

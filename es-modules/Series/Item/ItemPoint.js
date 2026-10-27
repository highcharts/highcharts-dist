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
import PieSeries from '../Pie/PieSeries.js';
import Series from '../../Core/Series/Series.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const PiePoint = PieSeries.prototype.pointClass;
const Point = Series.prototype.pointClass;
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

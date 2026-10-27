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
import DumbbellSeries from '../Dumbbell/DumbbellSeries.js';
import ScatterSeries from '../Scatter/ScatterSeries.js';
import Series from '../../Core/Series/Series.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Constants
 *
 * */
const Point = Series.prototype.pointClass;
const ScatterPoint = ScatterSeries.prototype.pointClass;
const DumbbellPoint = DumbbellSeries.prototype.pointClass;
/* *
 *
 *  Class
 *
 * */
class LollipopPoint extends Point {
}
extend(LollipopPoint.prototype, {
    destroy: DumbbellPoint.prototype.destroy,
    pointSetState: ScatterPoint.prototype.setState,
    setState: DumbbellPoint.prototype.setState
});
/* *
 *
 *  Default Export
 *
 * */
export default LollipopPoint;

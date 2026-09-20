/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
const { series: { prototype: { pointClass: Point } }, seriesTypes: { scatter: { prototype: { pointClass: ScatterPoint } }, dumbbell: { prototype: { pointClass: DumbbellPoint } } } } = SeriesRegistry;
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

/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Pawel Lysy
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
class RenkoPoint extends ColumnPoint {
    getClassName() {
        return (super.getClassName.call(this) +
            (this.upTrend ? ' highcharts-point-up' : ' highcharts-point-down'));
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default RenkoPoint;

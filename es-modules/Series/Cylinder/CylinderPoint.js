/* *
 *
 *  Highcharts cylinder - a 3D series
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import { extend } from '../../Shared/Utilities.js';
const { column: { prototype: { pointClass: ColumnPoint } } } = SeriesRegistry.seriesTypes;
/* *
 *
 *  Class
 *
 * */
class CylinderPoint extends ColumnPoint {
}
extend(CylinderPoint.prototype, {
    shapeType: 'cylinder'
});
/* *
 *
 *  Default Export
 *
 * */
export default CylinderPoint;

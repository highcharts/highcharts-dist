/* *
 *
 *  Highcharts funnel3d series module
 *
 *  (c) 2010-2026 Highsoft AS
 *
 *  Author: Kacper Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import ColumnSeries from '../Column/ColumnSeries.js';
import { extend } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
class Funnel3DPoint extends ColumnSeries.prototype.pointClass {
}
extend(Funnel3DPoint.prototype, {
    shapeType: 'funnel3d'
});
/* *
 *
 *  Default Export
 *
 * */
export default Funnel3DPoint;

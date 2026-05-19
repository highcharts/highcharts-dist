/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi, Magdalena Gut
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
import PictorialUtilities from './PictorialUtilities.js';
const ColumnPoint = SeriesRegistry.seriesTypes.column.prototype.pointClass;
const { rescalePatternFill, getStackMetrics } = PictorialUtilities;
/* *
 *
 *  Class
 *
 * */
class PictorialPoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    setState() {
        const point = this;
        super.setState.apply(point, arguments);
        const series = point.series, paths = series.options.paths;
        if (point.graphic && point.shapeArgs && paths) {
            const shape = paths[point.index %
                paths.length];
            rescalePatternFill(point.graphic, getStackMetrics(series.yAxis, shape).height, point.shapeArgs.width || 0, point.shapeArgs.height || Infinity, point.series.options.borderWidth || 0);
        }
    }
}
/* *
 *
 *  Export Default
 *
 * */
export default PictorialPoint;

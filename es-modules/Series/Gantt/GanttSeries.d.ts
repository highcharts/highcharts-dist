import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type GanttSeriesOptions from './GanttSeriesOptions';
import type Tick from '../../Core/Axis/Tick';
import GanttPoint from './GanttPoint.js';
declare const Series: typeof import("../../Core/Series/Series").default, XRangeSeries: typeof import("../XRange/XRangeSeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.gantt
 *
 * @augments Highcharts.Series
 */
declare class GanttSeries extends XRangeSeries {
    static defaultOptions: GanttSeriesOptions;
    static compose(AxisClass: typeof Axis, ChartClass?: typeof Chart, SeriesClass?: typeof Series, TickClass?: typeof Tick): void;
    data: Array<GanttPoint>;
    options: GanttSeriesOptions;
    points: Array<GanttPoint>;
    getColumn(columnName: string): Array<number>;
    /**
     * Draws a single point in the series.
     *
     * This override draws the point as a diamond if point.options.milestone
     * is true, and uses the original drawPoint() if it is false or not set.
     *
     * @requires highcharts-gantt
     *
     * @private
     * @function Highcharts.seriesTypes.gantt#drawPoint
     *
     * @param {Highcharts.Point} point
     *        An instance of Point in the series
     *
     * @param {"animate"|"attr"} verb
     *        'animate' (animates changes) or 'attr' (sets options)
     */
    drawPoint(point: GanttPoint, verb: string): void;
    /**
     * Handle milestones, as they have no x2.
     * @private
     */
    translatePoint(point: GanttPoint): void;
}
interface GanttSeries {
    keyboardMoveVertical: boolean;
    pointClass: typeof GanttPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        gantt: typeof GanttSeries;
    }
}
export default GanttSeries;

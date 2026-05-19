import type GanttPointOptions from './GanttPointOptions';
import type GanttSeries from './GanttSeries';
import type Chart from '../../Core/Chart/Chart';
declare const XRangePoint: typeof import("../XRange/XRangePoint").default;
declare class GanttPoint extends XRangePoint {
    /**
     * @private
     */
    static setGanttPointAliases(options: (GanttPoint | GanttPointOptions), chart: Chart): void;
    collapsed?: boolean;
    completed?: boolean;
    end?: number;
    milestone?: boolean;
    options: GanttPointOptions;
    series: GanttSeries;
    start?: number;
    /**
     * Applies the options containing the x and y data and possible some
     * extra properties. This is called on point init or from point.update.
     *
     * @private
     * @function Highcharts.Point#applyOptions
     *
     * @param {Object} options
     *        The point options
     *
     * @param {number} x
     *        The x value
     *
     * @return {Highcharts.Point}
     *         The Point instance
     */
    applyOptions(options: GanttPointOptions, x: number): GanttPoint;
    isValid(): boolean;
}
export default GanttPoint;

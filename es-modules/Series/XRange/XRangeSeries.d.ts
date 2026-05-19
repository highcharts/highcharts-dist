import type Axis from '../../Core/Axis/Axis';
import type ColumnMetricsObject from '../Column/ColumnMetricsObject';
import type DataTableCore from '../../Data/DataTableCore';
import type SeriesClass from '../../Core/Series/Series';
import type { XRangePointOptions } from './XRangePointOptions';
import type XRangeSeriesOptions from './XRangeSeriesOptions';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import XRangePoint from './XRangePoint.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.xrange
 *
 * @augments Highcharts.Series
 */
declare class XRangeSeries extends ColumnSeries {
    static defaultOptions: XRangeSeriesOptions;
    static compose(AxisClass: typeof Axis): void;
    data: Array<XRangePoint>;
    options: XRangeSeriesOptions;
    points: Array<XRangePoint>;
    /**
     * @private
     */
    init(): void;
    /**
     * Borrow the column series metrics, but with swapped axes. This gives
     * free access to features like groupPadding, grouping, pointWidth etc.
     * @private
     */
    getColumnMetrics(): ColumnMetricsObject;
    /**
     * Override cropData to show a point where x or x2 is outside visible range,
     * but one of them is inside.
     * @private
     */
    cropData(table: DataTableCore, min: number, max: number): SeriesClass.CropDataObject;
    /**
     * Finds the index of an existing point that matches the given point
     * options.
     *
     * @private
     *
     * @param {Highcharts.XRangePointOptions} options
     *        The options of the point.
     *
     * @return {number|undefined}
     *         Returns index of a matching point, or undefined if no match is
     *         found.
     */
    findPointIndex(options: XRangePointOptions): (number | undefined);
    alignDataLabel(point: XRangePoint): void;
    /**
     * @private
     */
    translatePoint(point: XRangePoint): void;
    /**
     * @private
     */
    translate(): void;
    /**
     * Draws a single point in the series. Needed for partial fill.
     *
     * This override turns point.graphic into a group containing the
     * original graphic and an overlay displaying the partial fill.
     *
     * @private
     *
     * @param {Highcharts.Point} point
     *        An instance of Point in the series.
     *
     * @param {"animate"|"attr"} verb
     *        'animate' (animates changes) or 'attr' (sets options)
     */
    drawPoint(point: XRangePoint, verb: string): void;
    /**
     * @private
     */
    drawPoints(): void;
    /**
     * Returns "animate", or "attr" if the number of points is above the
     * animation limit.
     *
     * @private
     */
    getAnimationVerb(): string;
    /**
     * @private
     */
    isPointInside(point: (XRangePoint | Record<string, number>)): boolean;
}
interface XRangeSeries {
    pointClass: typeof XRangePoint;
    columnMetrics: ColumnMetricsObject;
    getExtremesFromAll: boolean;
    parallelArrays: Array<string>;
    requireSorting: boolean;
    type: string;
    x2Data: Array<(number | undefined)>;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        xrange: typeof XRangeSeries;
    }
}
export default XRangeSeries;

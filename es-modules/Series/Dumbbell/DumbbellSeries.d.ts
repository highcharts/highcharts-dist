import type DumbbellSeriesOptions from './DumbbellSeriesOptions';
import type ColorType from '../../Core/Color/ColorType';
import type ColumnMetricsObject from '../Column/ColumnMetricsObject';
import type LollipopPoint from '../Lollipop/LollipopPoint';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import DumbbellPoint from './DumbbellPoint.js';
declare const AreaRangeSeries: typeof import("../AreaRange/AreaRangeSeries").default, ColumnSeries: typeof import("../Column/ColumnSeries").default;
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        connectorWidthPlus?: number;
    }
}
/**
 * The dumbbell series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dumbbell
 *
 * @augments Highcharts.Series
 */
declare class DumbbellSeries extends AreaRangeSeries {
    static defaultOptions: DumbbellSeriesOptions;
    data: Array<DumbbellPoint>;
    options: DumbbellSeriesOptions;
    points: Array<DumbbellPoint>;
    columnMetrics: ColumnMetricsObject;
    lowColor?: ColorType;
    /**
     * Get connector line path and styles that connects dumbbell point's low and
     * high values.
     * @private
     *
     * @param {Highcharts.Point} point The point to inspect.
     *
     * @return {Highcharts.SVGAttributes} attribs The path and styles.
     */
    getConnectorAttribs(point: DumbbellPoint | LollipopPoint): SVGAttributes;
    /**
     * Draw connector line that connects dumbbell point's low and high values.
     * @private
     * @param {Highcharts.Point} point
     *        The point to inspect.
     */
    drawConnector(point: (DumbbellPoint | LollipopPoint)): void;
    /**
     * Return the width and x offset of the dumbbell adjusted for grouping,
     * groupPadding, pointPadding, pointWidth etc.
     * @private
     */
    getColumnMetrics(): ColumnMetricsObject;
    /**
     * Translate each point to the plot area coordinate system and find
     * shape positions
     * @private
     */
    translate(): void;
    /**
     * Extend the arearange series' drawPoints method by applying a connector
     * and coloring markers.
     * @private
     */
    drawPoints(): void;
    /**
     * Get presentational attributes.
     *
     * @private
     * @function Highcharts.seriesTypes.column#pointAttribs
     *
     * @param {Highcharts.Point} point
     *        The point to inspect.
     *
     * @param {string} state
     *        Current state of point (normal, hover, select).
     *
     * @return {Highcharts.SVGAttributes}
     *         Presentational attributes.
     */
    pointAttribs(point: DumbbellPoint, state?: string): SVGAttributes;
    /**
     * Set the shape arguments for dumbbells.
     * @private
     */
    setShapeArgs(): void;
}
interface DumbbellSeries {
    pointClass: typeof DumbbellPoint;
    crispCol: typeof ColumnSeries.prototype.crispCol;
    trackerGroups: Array<string>;
    translatePoint: typeof AreaRangeSeries.prototype['translate'];
    seriesDrawPoints: typeof AreaRangeSeries.prototype['drawPoints'];
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dumbbell: typeof DumbbellSeries;
    }
}
export default DumbbellSeries;

import type LollipopSeriesOptions from './LollipopSeriesOptions';
import LollipopPoint from './LollipopPoint.js';
import Series from '../../Core/Series/Series.js';
declare const colProto: import("../Column/ColumnSeries").default, dumbbellProto: import("../Dumbbell/DumbbellSeries").default;
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        connectorWidthPlus?: number;
    }
}
/**
 * Lollipop series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.lollipop
 *
 * @augments Highcharts.Series
 *
 */
declare class LollipopSeries extends Series {
    /**
     * The lollipop series is a cartesian series with a line anchored from
     * the x axis and a dot at the end to mark the value.
     * Requires `highcharts-more.js`, `modules/dumbbell.js` and
     * `modules/lollipop.js`.
     *
     * @sample {highcharts} highcharts/demo/lollipop/
     *         Lollipop chart
     * @sample {highcharts} highcharts/series-dumbbell/styled-mode-dumbbell/
     *         Styled mode
     *
     * @extends      plotOptions.dumbbell
     * @product      highcharts highstock
     * @excluding    fillColor, fillOpacity, lineWidth, stack, stacking,
     *               lowColor, stickyTracking, trackByArea
     * @since        8.0.0
     * @optionparent plotOptions.lollipop
     */
    static defaultOptions: LollipopSeriesOptions;
    data: Array<LollipopPoint>;
    options: LollipopSeriesOptions;
    points: Array<LollipopPoint>;
    /**
     * Extend the series' drawPoints method by applying a connector
     * and coloring markers.
     * @private
     *
     * @function Highcharts.Series#drawPoints
     */
    drawPoints(): void;
    /**
     * Extend the series' translate method to use grouping option.
     * @private
     *
     * @function Highcharts.Series#translate
     *
     */
    translate(): void;
}
interface LollipopSeries {
    alignDataLabel: typeof colProto['alignDataLabel'];
    crispCol: typeof colProto['crispCol'];
    drawConnector: typeof dumbbellProto['drawConnector'];
    drawDataLabels: typeof colProto['drawDataLabels'];
    getColumnMetrics: typeof colProto['getColumnMetrics'];
    getConnectorAttribs: typeof dumbbellProto['getConnectorAttribs'];
    pointClass: typeof LollipopPoint;
}
/**
 * @private
 */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        lollipop: typeof LollipopSeries;
    }
}
export default LollipopSeries;

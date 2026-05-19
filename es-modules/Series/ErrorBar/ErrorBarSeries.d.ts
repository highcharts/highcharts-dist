import type ErrorBarPoint from './ErrorBarPoint';
import type ErrorBarSeriesOptions from './ErrorBarSeriesOptions';
import type ColumnMetricsObject from '../Column/ColumnMetricsObject';
import BoxPlotSeries from '../BoxPlot/BoxPlotSeries.js';
/**
 * Errorbar series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.errorbar
 *
 * @augments Highcharts.Series
 */
declare class ErrorBarSeries extends BoxPlotSeries {
    static defaultOptions: ErrorBarSeriesOptions;
    data: Array<ErrorBarPoint>;
    options: ErrorBarSeriesOptions;
    points: Array<ErrorBarPoint>;
    getColumnMetrics(): ColumnMetricsObject;
    drawDataLabels(): void;
    toYData(point: ErrorBarPoint): Array<number>;
}
interface ErrorBarSeries extends BoxPlotSeries {
    pointClass: typeof ErrorBarPoint;
    doQuartiles: boolean;
    linkedParent: ErrorBarSeries;
    pointArrayMap: Array<string>;
    pointValKey: string;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        errorbar: typeof ErrorBarSeries;
    }
}
export default ErrorBarSeries;

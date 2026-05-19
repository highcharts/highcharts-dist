import type ColumnPyramidPoint from './ColumnPyramidPoint';
import type ColumnPyramidSeriesOptions from './ColumnPyramidSeriesOptions';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
/**
 * The ColumnPyramidSeries class
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.columnpyramid
 *
 * @augments Highcharts.Series
 */
declare class ColumnPyramidSeries extends ColumnSeries {
    static defaultOptions: ColumnPyramidSeriesOptions;
    data: Array<ColumnPyramidPoint>;
    options: ColumnPyramidSeriesOptions;
    points: Array<ColumnPyramidPoint>;
    /**
     * Overrides the column translate method
     * @private
     */
    translate(): void;
}
interface ColumnPyramidSeries {
    pointClass: typeof ColumnPyramidPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        columnpyramid: typeof ColumnPyramidSeries;
    }
}
export default ColumnPyramidSeries;

import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        hasInitializedLinkedSeries?: boolean;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        enabledDataSorting?: boolean;
    }
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart, SeriesClass: typeof Series): void;
/**
 * Options for series data sorting.
 *
 * @since     8.0.0
 * @product   highcharts highstock
 * @requires  modules/data-sorting
 * @apioption plotOptions.series.dataSorting
 */
/**
 * Enable or disable data sorting for the series. Use [xAxis.reversed](
 * #xAxis.reversed) to change the sorting order.
 *
 * @sample {highcharts} highcharts/datasorting/animation/
 *         Data sorting in scatter-3d
 * @sample {highcharts} highcharts/datasorting/labels-animation/
 *         Axis labels animation
 * @sample {highcharts} highcharts/datasorting/dependent-sorting/
 *         Dependent series sorting
 * @sample {highcharts} highcharts/datasorting/independent-sorting/
 *         Independent series sorting
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.enabled
 */
/**
 * Whether to allow matching points by name in an update. If this option
 * is disabled, points will be matched by order.
 *
 * @sample {highcharts} highcharts/datasorting/match-by-name/
 *         Enabled match by name
 *
 * @type      {boolean}
 * @since     8.0.0
 * @apioption plotOptions.series.dataSorting.matchByName
 */
/**
 * Determines what data value should be used to sort by.
 *
 * @sample {highcharts} highcharts/datasorting/sort-key/
 *         Sort key as `z` value
 *
 * @type      {string}
 * @since     8.0.0
 * @default   y
 * @apioption plotOptions.series.dataSorting.sortKey
 */
declare const DataSortingComposition: {
    compose: typeof compose;
};
export default DataSortingComposition;

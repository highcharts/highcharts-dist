import type { SeriesLabelOptions } from './SeriesLabelOptions';
/**
 * Series labels are placed as close to the series as possible in a
 * natural way, seeking to avoid other series. The goal of this
 * feature is to make the chart more easily readable, like if a
 * human designer placed the labels in the optimal position.
 *
 * The series labels currently work with series types having a
 * `graph` or an `area`.
 *
 * @sample highcharts/series-label/line-chart
 *         Line chart
 * @sample highcharts/demo/streamgraph
 *         Stream graph
 * @sample highcharts/series-label/stock-chart
 *         Stock chart
 *
 * @declare  Highcharts.SeriesLabelOptionsObject
 * @since    6.0.0
 * @product  highcharts highstock gantt
 * @requires modules/series-label
 * @optionparent plotOptions.series.label
 */
declare const SeriesLabelDefaults: SeriesLabelOptions;
export {};

import type BoxPlotSeriesOptions from './BoxPlotSeriesOptions';
/**
 * A box plot is a convenient way of depicting groups of data through their
 * five-number summaries: the smallest observation (sample minimum), lower
 * quartile (Q1), median (Q2), upper quartile (Q3), and largest observation
 * (sample maximum).
 *
 * @sample highcharts/demo/box-plot/
 *         Box plot
 * @sample {highcharts} highcharts/css/boxplot/
 *         Box plot in styled mode
 * @sample {highcharts} highcharts/series-scatter/jitter-boxplot
 *         Jittered scatter plot on top of a box plot
 *
 * @extends      plotOptions.column
 * @excluding    borderColor, borderRadius, borderWidth, groupZPadding,
 *               states, boostThreshold, boostBlending
 * @product      highcharts
 * @requires     highcharts-more
 * @optionparent plotOptions.boxplot
 */
declare const BoxPlotSeriesDefaults: BoxPlotSeriesOptions;
export default BoxPlotSeriesDefaults;

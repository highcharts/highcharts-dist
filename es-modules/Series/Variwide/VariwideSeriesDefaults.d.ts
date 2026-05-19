import type VariwideSeriesOptions from './VariwideSeriesOptions';
/**
 * A variwide chart (related to marimekko chart) is a column chart with a
 * variable width expressing a third dimension.
 *
 * @sample {highcharts} highcharts/demo/variwide/
 *         Variwide chart
 * @sample {highcharts} highcharts/series-variwide/inverted/
 *         Inverted variwide chart
 * @sample {highcharts} highcharts/series-variwide/datetime/
 *         Variwide columns on a datetime axis
 *
 * @extends      plotOptions.column
 * @since        6.0.0
 * @product      highcharts
 * @excluding    boostThreshold, crisp, depth, edgeColor, edgeWidth,
 *               groupZPadding, boostBlending
 * @requires     modules/variwide
 * @optionparent plotOptions.variwide
 */
declare const VariwideSeriesDefaults: VariwideSeriesOptions;
export default VariwideSeriesDefaults;

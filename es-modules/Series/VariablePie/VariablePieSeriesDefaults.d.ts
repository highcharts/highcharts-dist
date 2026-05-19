import type VariablePieSeriesOptions from './VariablePieSeriesOptions';
/**
 * A variable pie series is a two dimensional series type, where each point
 * renders an Y and Z value.  Each point is drawn as a pie slice where the
 * size (arc) of the slice relates to the Y value and the radius of pie
 * slice relates to the Z value.
 *
 * @sample {highcharts} highcharts/demo/variable-radius-pie/
 *         Variable-radius pie chart
 *
 * @extends      plotOptions.pie
 * @excluding    dragDrop
 * @since        6.0.0
 * @product      highcharts
 * @requires     modules/variable-pie
 * @optionparent plotOptions.variablepie
 */
declare const VariablePieSeriesDefaults: VariablePieSeriesOptions;
export default VariablePieSeriesDefaults;

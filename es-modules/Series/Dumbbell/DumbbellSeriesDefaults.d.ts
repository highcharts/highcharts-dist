import type DumbbellSeriesOptions from './DumbbellSeriesOptions';
/**
 * The dumbbell series is a cartesian series with higher and lower values
 * for each point along an X axis, connected with a line between the
 * values.
 *
 * Requires `highcharts-more.js` and `modules/dumbbell.js`.
 *
 * @sample {highcharts} highcharts/demo/dumbbell/
 *         Dumbbell chart
 * @sample {highcharts} highcharts/series-dumbbell/styled-mode-dumbbell/
 *         Styled mode
 *
 * @extends      plotOptions.arearange
 * @product      highcharts highstock
 * @excluding    boostThreshold, fillOpacity, legendSymbolColor, lineWidth,
 *               stack, stacking, stickyTracking, trackByArea
 * @since 8.0.0
 * @optionparent plotOptions.dumbbell
 */
declare const DumbbellSeriesDefaults: DumbbellSeriesOptions;
export default DumbbellSeriesDefaults;

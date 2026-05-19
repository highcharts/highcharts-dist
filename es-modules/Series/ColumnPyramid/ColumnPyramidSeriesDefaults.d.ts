import type ColumnPyramidSeriesOptions from './ColumnPyramidSeriesOptions';
/**
 * Column pyramid series display one pyramid per value along an X axis.
 * To display horizontal pyramids, set [chart.inverted](#chart.inverted) to
 * `true`.
 *
 * @sample {highcharts|highstock} highcharts/demo/column-pyramid/
 *         Column pyramid
 * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-stacked/
 *         Column pyramid stacked
 * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-inverted/
 *         Column pyramid inverted
 *
 * @extends      plotOptions.column
 * @since        7.0.0
 * @product      highcharts highstock
 * @excluding    boostThreshold, borderRadius, crisp, depth, edgeColor,
 *               edgeWidth, groupZPadding, negativeColor, softThreshold,
 *               threshold, zoneAxis, zones, boostBlending
 * @requires     highcharts-more
 * @optionparent plotOptions.columnpyramid
 */
declare const ColumnPyramidSeriesDefaults: ColumnPyramidSeriesOptions;
export default ColumnPyramidSeriesDefaults;

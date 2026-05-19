import type ParetoSeriesOptions from './ParetoSeriesOptions';
/**
 * A pareto diagram is a type of chart that contains both bars and a line
 * graph, where individual values are represented in descending order by
 * bars, and the cumulative total is represented by the line.
 *
 * @sample {highcharts} highcharts/demo/pareto/
 *         Pareto diagram
 *
 * @extends      plotOptions.line
 * @since        6.0.0
 * @product      highcharts
 * @excluding    allAreas, boostThreshold, borderColor, borderRadius,
 *               borderWidth, crisp, colorAxis, depth, data, dragDrop,
 *               edgeColor, edgeWidth, findNearestPointBy, gapSize, gapUnit,
 *               grouping, groupPadding, groupZPadding, maxPointWidth, keys,
 *               negativeColor, pointInterval, pointIntervalUnit,
 *               pointPadding, pointPlacement, pointRange, pointStart,
 *               pointWidth, shadow, step, softThreshold, stacking,
 *               threshold, zoneAxis, zones, boostBlending
 * @requires     modules/pareto
 * @optionparent plotOptions.pareto
 */
declare const ParetoSeriesDefaults: ParetoSeriesOptions;
export default ParetoSeriesDefaults;

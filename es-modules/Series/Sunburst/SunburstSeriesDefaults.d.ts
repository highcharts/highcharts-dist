import type SunburstSeriesOptions from './SunburstSeriesOptions';
/**
 * A Sunburst displays hierarchical data, where a level in the hierarchy is
 * represented by a circle. The center represents the root node of the tree.
 * The visualization bears a resemblance to both treemap and pie charts.
 *
 * @sample highcharts/demo/sunburst
 *         Sunburst chart
 *
 * @extends      plotOptions.pie
 * @excluding    allAreas, clip, colorAxis, colorKey, compare, compareBase,
 *               dataGrouping, depth, dragDrop, endAngle, gapSize, gapUnit,
 *               ignoreHiddenPoint, innerSize, joinBy, legendType, linecap,
 *               minSize, navigatorOptions, pointRange
 * @product      highcharts
 * @requires     modules/sunburst
 * @optionparent plotOptions.sunburst
 *
 * @private
 */
declare const SunburstSeriesDefaults: SunburstSeriesOptions;
export default SunburstSeriesDefaults;

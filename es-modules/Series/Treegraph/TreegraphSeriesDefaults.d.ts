import type TreegraphSeriesOptions from './TreegraphSeriesOptions';
/**
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation.
 * The best examples of the dataStructures, which best reflect this chart
 * are e.g. genealogy tree or directory structure.
 *
 * @sample highcharts/demo/treegraph-chart
 *         Treegraph Chart
 *
 * @extends      plotOptions.treemap
 * @excluding    layoutAlgorithm, dashStyle, linecap, lineWidth,
 *               negativeColor, threshold, zones, zoneAxis, colorAxis,
 *               colorKey, compare, dataGrouping, endAngle, gapSize, gapUnit,
 *               ignoreHiddenPoint, innerSize, joinBy, legendType, linecap,
 *               minSize, navigatorOptions, pointRange, allowTraversingTree,
 *               alternateStartingDirection, borderRadius, breadcrumbs,
 *               interactByLeaf, layoutStartingDirection, levelIsConstant,
 *               lineWidth, negativeColor, nodes, sortIndex, zoneAxis,
 *               zones, cluster
 *
 * @product      highcharts
 * @since        10.3.0
 * @requires     modules/treemap
 * @requires     modules/treegraph
 * @optionparent plotOptions.treegraph
 */
declare const TreegraphSeriesDefaults: TreegraphSeriesOptions;
export default TreegraphSeriesDefaults;

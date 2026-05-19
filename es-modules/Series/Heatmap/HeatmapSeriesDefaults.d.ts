import type HeatmapSeriesOptions from './HeatmapSeriesOptions';
/**
 * A heatmap is a graphical representation of data where the individual
 * values contained in a matrix are represented as colors.
 *
 * @productdesc {highcharts}
 *
 * @sample highcharts/demo/heatmap/
 *         Simple heatmap
 * @sample highcharts/demo/heatmap-canvas/
 *         Heavy heatmap
 *
 * @extends      plotOptions.scatter
 * @excluding    animationLimit, cluster, connectEnds, connectNulls,
 *               cropThreshold, dashStyle, dragDrop, findNearestPointBy,
 *               getExtremesFromAll, jitter, legendSymbolColor, linecap,
 *               lineWidth, pointInterval, pointIntervalUnit, pointRange,
 *               pointStart, shadow, softThreshold, stacking, step, threshold
 * @product      highcharts highmaps
 * @requires     modules/heatmap
 * @optionparent plotOptions.heatmap
 */
declare const HeatmapSeriesDefaults: HeatmapSeriesOptions;
export default HeatmapSeriesDefaults;

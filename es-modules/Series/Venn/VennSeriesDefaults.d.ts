import type VennSeriesOptions from './VennSeriesOptions';
/**
 * A Venn diagram displays all possible logical relations between a
 * collection of different sets. The sets are represented by circles, and
 * the relation between the sets are displayed by the overlap or lack of
 * overlap between them. The venn diagram is a special case of Euler
 * diagrams, which can also be displayed by this series type.
 *
 * @sample {highcharts} highcharts/demo/venn-diagram/
 *         Venn diagram
 * @sample {highcharts} highcharts/demo/euler-diagram/
 *         Euler diagram
 * @sample {highcharts} highcharts/series-venn/point-legend/
 *         Venn diagram with a legend
 *
 * @extends      plotOptions.scatter
 * @excluding    connectEnds, connectNulls, cropThreshold, dragDrop,
 *               findNearestPointBy, getExtremesFromAll, jitter, label,
 *               linecap, lineWidth, linkedTo, marker, negativeColor,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointStart, softThreshold, stacking, steps, threshold,
 *               xAxis, yAxis, zoneAxis, zones, dataSorting, boostThreshold,
 *               boostBlending
 * @product      highcharts
 * @requires     modules/venn
 * @optionparent plotOptions.venn
 */
declare const VennSeriesDefaults: VennSeriesOptions;
export default VennSeriesDefaults;

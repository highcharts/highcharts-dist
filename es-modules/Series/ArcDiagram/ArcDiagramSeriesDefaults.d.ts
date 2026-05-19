import type ArcDiagramSeriesOptions from './ArcDiagramSeriesOptions';
/**
 *  Arc diagram series is a chart drawing style in which
 *  the vertices of the chart are positioned along a line
 *  on the Euclidean plane and the edges are drawn as a semicircle
 *  in one of the two half-planes delimited by the line,
 *  or as smooth curves formed by sequences of semicircles.
 *
 * @sample highcharts/demo/arc-diagram/
 *         Arc Diagram
 *
 * @extends      plotOptions.sankey
 * @since 10.0.0
 * @product      highcharts
 * @requires     modules/sankey
 * @requires     modules/arc-diagram
 * @exclude      curveFactor, connectEnds, connectNulls, colorAxis, colorKey,
 *               dataSorting, dragDrop, getExtremesFromAll, legendSymbolColor,
 *               nodeAlignment, nodePadding, centerInCategory, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointStart, relativeXValue,
 *               softThreshold, stack, stacking, step, xAxis, yAxis
 * @optionparent plotOptions.arcdiagram
 */
declare const ArcDiagramSeriesDefaults: ArcDiagramSeriesOptions;
export default ArcDiagramSeriesDefaults;

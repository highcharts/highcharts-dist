import type { PlotOptionsOf } from '../../Core/Series/SeriesOptions';
import type SankeySeries from './SankeySeries';
/**
 * A sankey diagram is a type of flow diagram, in which the width of the
 * link between two nodes is shown proportionally to the flow quantity.
 *
 * @sample highcharts/demo/sankey-diagram/
 *         Sankey diagram
 * @sample highcharts/plotoptions/sankey-inverted/
 *         Inverted sankey diagram
 * @sample highcharts/plotoptions/sankey-outgoing
 *         Sankey diagram with outgoing links
 *
 * @extends      plotOptions.column
 * @since        6.0.0
 * @product      highcharts
 * @excluding    animationLimit, boostBlending, boostThreshold, borderRadius,
 *               crisp, cropThreshold, colorAxis, colorKey, dataSorting, depth,
 *               dragDrop, edgeColor, edgeWidth, findNearestPointBy, grouping,
 *               groupPadding, groupZPadding, legendSymbolColor, maxPointWidth,
 *               minPointLength, negativeColor, pointInterval,
 *               pointIntervalUnit, pointPadding, pointPlacement, pointRange,
 *               pointStart, pointWidth, shadow, softThreshold, stacking,
 *               threshold, zoneAxis, zones
 * @requires     modules/sankey
 * @optionparent plotOptions.sankey
 *
 * @private
 */
declare const SankeySeriesDefaults: PlotOptionsOf<SankeySeries>;
export default SankeySeriesDefaults;

import type PackedBubbleSeriesOptions from './PackedBubbleSeriesOptions';
/**
 * A packed bubble series is a two dimensional series type, where each point
 * renders a value in X, Y position. Each point is drawn as a bubble
 * where the bubbles don't overlap with each other and the radius
 * of the bubble relates to the value.
 *
 * @sample highcharts/demo/packed-bubble/
 *         Packed bubble chart
 * @sample highcharts/demo/packed-bubble-split/
 *         Split packed bubble chart
 *
 * @extends      plotOptions.bubble
 * @excluding    boostThreshold, boostBlending,connectEnds, connectNulls,
 *               cropThreshold, dataSorting, dragDrop, jitter,
 *               legendSymbolColor, keys, pointPlacement, sizeByAbsoluteValue,
 *               step, xAxis, yAxis
 * @product      highcharts
 * @since        7.0.0
 * @requires     highcharts-more
 * @optionparent plotOptions.packedbubble
 *
 * @private
 */
declare const PackedBubbleSeriesDefaults: PackedBubbleSeriesOptions;
export default PackedBubbleSeriesDefaults;

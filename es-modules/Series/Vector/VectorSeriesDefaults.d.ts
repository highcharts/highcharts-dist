import type VectorSeriesOptions from './VectorSeriesOptions';
/**
 * A vector plot is a type of cartesian chart where each point has an X and
 * Y position, a length and a direction. Vectors are drawn as arrows.
 *
 * @sample {highcharts|highstock} highcharts/demo/vector-plot/
 *         Vector pot
 *
 * @since        6.0.0
 * @extends      plotOptions.scatter
 * @excluding    boostThreshold, marker, connectEnds, connectNulls,
 *               cropThreshold, dashStyle, dragDrop, gapSize, gapUnit,
 *               dataGrouping, linecap, shadow, stacking, step, jitter,
 *               boostBlending
 * @product      highcharts highstock
 * @requires     modules/vector
 * @optionparent plotOptions.vector
 */
declare const VectorSeriesDefaults: VectorSeriesOptions;
export default VectorSeriesDefaults;

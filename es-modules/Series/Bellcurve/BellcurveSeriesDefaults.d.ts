import type BellcurveSeriesOptions from './BellcurveSeriesOptions';
/**
 * A bell curve is an areaspline series which represents the probability
 * density function of the normal distribution. It calculates mean and
 * standard deviation of the base series data and plots the curve according
 * to the calculated parameters.
 *
 * @sample {highcharts} highcharts/demo/bellcurve/
 *         Bell curve
 *
 * @extends      plotOptions.areaspline
 * @since        6.0.0
 * @product      highcharts
 * @excluding    boostThreshold, connectNulls, dragDrop, stacking,
 *               pointInterval, pointIntervalUnit
 * @requires     modules/histogram-bellcurve
 * @optionparent plotOptions.bellcurve
 */
declare const BellcurveSeriesDefaults: BellcurveSeriesOptions;
export default BellcurveSeriesDefaults;

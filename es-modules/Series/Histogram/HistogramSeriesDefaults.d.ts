import type HistogramSeriesOptions from './HistogramSeriesOptions';
/**
 * A histogram is a column series which represents the distribution of the
 * data set in the base series. Histogram splits data into bins and shows
 * their frequencies.
 *
 * @sample {highcharts} highcharts/demo/histogram/
 *         Histogram
 *
 * @extends      plotOptions.column
 * @excluding    boostThreshold, dragDrop, pointInterval, pointIntervalUnit,
 *               stacking, boostBlending
 * @product      highcharts
 * @since        6.0.0
 * @requires     modules/histogram-bellcurve
 * @optionparent plotOptions.histogram
 */
declare const HistogramSeriesDefaults: HistogramSeriesOptions;
export default HistogramSeriesDefaults;

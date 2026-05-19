import type LinearRegressionOptions from '../LinearRegression/LinearRegressionOptions';
/**
 * Linear regression slope indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-slope
 *         Linear regression slope indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @interface Highcharts.LinearRegressionSlopesOptions
 */
export interface LinearRegressionSlopesOptions extends LinearRegressionOptions {
}
export default LinearRegressionSlopesOptions;

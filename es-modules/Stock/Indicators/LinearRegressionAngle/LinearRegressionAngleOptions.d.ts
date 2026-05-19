import type LinearRegressionOptions from '../LinearRegression/LinearRegressionOptions';
/**
 * Linear regression angle indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-angle
 *         Linear regression angle indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @interface Highcharts.LinearRegressionAngleOptions
 */
export interface LinearRegressionAngleOptions extends LinearRegressionOptions {
}
export default LinearRegressionAngleOptions;

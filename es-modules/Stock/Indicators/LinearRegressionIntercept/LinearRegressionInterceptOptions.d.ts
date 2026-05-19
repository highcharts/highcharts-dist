import type LinearRegressionOptions from '../LinearRegression/LinearRegressionOptions';
/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-intercept
 *         Linear regression intercept indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @interface Highcharts.LinearRegressionInterceptOptions
 */
export interface LinearRegressionInterceptOptions extends LinearRegressionOptions {
}
export default LinearRegressionInterceptOptions;

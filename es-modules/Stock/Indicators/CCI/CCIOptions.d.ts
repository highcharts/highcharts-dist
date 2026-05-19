import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Commodity Channel Index (CCI). This series requires `linkedTo` option to
 * be set.
 *
 * @sample {highstock} stock/indicators/cci
 *         CCI indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/cci
 * @interface Highcharts.CCIOptions
 */
export interface CCIOptions extends SMAOptions {
    params?: CCIParamsOptions;
}
export interface CCIParamsOptions extends SMAParamsOptions {
    index?: undefined;
}
export default CCIOptions;

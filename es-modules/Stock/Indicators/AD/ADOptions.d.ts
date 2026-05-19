import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to
 * be set.
 *
 * @sample {highstock} stock/indicators/accumulation-distribution
 *         Accumulation/Distribution indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/accumulation-distribution
 * @interface Highcharts.ADOptions
 */
export interface ADOptions extends SMAOptions {
    params?: ADParamsOptions;
}
export interface ADParamsOptions extends SMAParamsOptions {
    /**
     * The id of volume series which is mandatory.
     * For example using OHLC data, volumeSeriesID='volume' means
     * the indicator will be calculated using OHLC and volume values.
     *
     * @since 6.0.0
     */
    volumeSeriesID?: string;
    index?: undefined;
}
export default ADOptions;

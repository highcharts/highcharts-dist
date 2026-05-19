import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Chaikin Money Flow indicator (cmf).
 *
 * @sample {highstock} stock/indicators/cmf/
 *         Chaikin Money Flow indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @excluding    animationLimit
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/cmf
 * @interface Highcharts.CMFOptions
 */
export interface CMFOptions extends SMAOptions {
    params?: CMFParamsOptions;
}
export interface CMFParamsOptions extends SMAParamsOptions {
    /**
     * The id of volume series which is mandatory.
     * For example using OHLC data, volumeSeriesID='volume' means
     * the indicator will be calculated using OHLC and volume values.
     */
    volumeSeriesID?: string;
    index?: undefined;
}
export default CMFOptions;

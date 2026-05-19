import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
import type { SeriesStatesOptions } from '../../../Core/Series/SeriesOptions';
/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/wma
 *         Weighted moving average indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/wma
 * @interface Highcharts.WMAOptions
 */
export interface WMAOptions extends SMAOptions {
    params?: WMAParamsOptions;
    states?: SeriesStatesOptions<WMAOptions>;
}
export interface WMAParamsOptions extends SMAParamsOptions {
}
export default WMAOptions;

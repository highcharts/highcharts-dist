import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * @sample {highstock} stock/indicators/momentum
 *         Momentum indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/momentum
 * @interface Highcharts.MomentumOptions
 */
export interface MomentumOptions extends SMAOptions {
    params?: MomentumParamsOptions;
    period: number;
}
export interface MomentumParamsOptions extends SMAParamsOptions {
}
export default MomentumOptions;

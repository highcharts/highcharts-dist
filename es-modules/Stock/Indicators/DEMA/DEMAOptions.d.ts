import type { EMAOptions, EMAParamsOptions } from '../EMA/EMAOptions';
/**
 * Double exponential moving average (DEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/dema
 *         DEMA indicator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/dema
 * @interface Highcharts.DEMAOptions
 */
export interface DEMAOptions extends EMAOptions {
    params?: EMAParamsOptions;
}
export interface DEMAParamsOptions extends EMAParamsOptions {
}
export default DEMAOptions;

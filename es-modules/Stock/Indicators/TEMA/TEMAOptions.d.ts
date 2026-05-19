import type { EMAOptions, EMAParamsOptions } from '../EMA/EMAOptions';
/**
 * Triple exponential moving average (TEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/tema
 *         TEMA indicator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/tema
 * @interface Highcharts.TEMAOptions
 */
export interface TEMAOptions extends EMAOptions {
    params?: TEMAParamsOptions;
}
export interface TEMAParamsOptions extends EMAParamsOptions {
}
export default TEMAOptions;

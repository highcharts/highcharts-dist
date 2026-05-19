import type { AroonOptions, AroonParamsOptions } from '../Aroon/AroonOptions';
/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * @sample {highstock} stock/indicators/aroon-oscillator
 *         Aroon Oscillator
 *
 * @extends      plotOptions.aroon
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, aroonDown, colorAxis, compare, compareBase,
 *               joinBy, keys, navigatorOptions, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *               showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/aroon
 * @requires     stock/indicators/aroon-oscillator
 * @interface Highcharts.AroonOscillatorOptions
 */
export interface AroonOscillatorOptions extends AroonOptions {
    params?: AroonOscillatorParamsOptions;
}
export interface AroonOscillatorParamsOptions extends AroonParamsOptions {
}
export default AroonOscillatorOptions;

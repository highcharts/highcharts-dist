import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Zig Zag indicator.
 *
 * This series requires `linkedTo` option to be set.
 *
 * @sample {highstock} stock/indicators/zigzag
 *         Zig Zag indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/zigzag
 * @interface Highcharts.ZigzagOptions
 */
export interface ZigzagOptions extends SMAOptions {
    params?: ZigzagParamsOptions;
}
export interface ZigzagParamsOptions extends SMAParamsOptions {
    /**
     * The point index which indicator calculations will base - low
     * value.
     *
     * For example using OHLC data, index=2 means the indicator will be
     * calculated using Low values.
     *
     * @default 2
     */
    lowIndex?: number;
    /**
     * The point index which indicator calculations will base - high
     * value.
     *
     * For example using OHLC data, index=1 means the indicator will be
     * calculated using High values.
     *
     * @default 1
     */
    highIndex?: number;
    /**
     * The threshold for the value change.
     *
     * For example deviation=1 means the indicator will ignore all price
     * movements less than 1%.
     *
     * @default 1
     */
    deviation?: number;
    index?: undefined;
    period?: undefined;
}
export default ZigzagOptions;

import type ColorType from '../../../Core/Color/ColorType';
import type CSSObject from '../../../Core/Renderer/CSSObject';
import type { SMAOptions, SMAParamsOptions } from '../SMA/SMAOptions';
/**
 * Supertrend indicator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/sma.js`.
 *
 * @sample {highstock} stock/indicators/supertrend
 *         Supertrend indicator
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, cropThreshold, negativeColor, colorAxis, joinBy,
 *               keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking, threshold
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/supertrend
 * @interface Highcharts.SupertrendOptions
 */
export interface SupertrendOptions extends SMAOptions {
    /**
     * The styles for the Supertrend line that intersect main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with changeTrendLine
     */
    changeTrendLine?: Record<string, CSSObject>;
    /**
     * Color of the Supertrend series line that is above the main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with fallingTrendColor
     */
    fallingTrendColor?: ColorType;
    params?: SupertrendParamsOptions;
    /**
     * Color of the Supertrend series line that is beneath the main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with risingTrendColor
     */
    risingTrendColor?: ColorType;
}
export interface SupertrendParamsOptions extends SMAParamsOptions {
    /**
     * Multiplier for Supertrend Indicator.
     */
    multiplier?: number;
    /**
     * The base period for indicator Supertrend Indicator calculations.
     * This is the number of data points which are taken into account
     * for the indicator calculations.
     */
    period?: number;
    index?: undefined;
}
export default SupertrendOptions;

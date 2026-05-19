import type { AxisCrosshairOptions } from '../Core/Axis/AxisOptions';
declare module '../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * The line marks the last price from all points.
         *
         * @sample {highstock} stock/indicators/last-price
         *         Last price
         *
         * @since     7.0.0
         * @product   highstock
         * @requires  modules/price-indicator
         */
        lastPrice?: LastPriceOptions;
        /**
         * The line marks the last price from visible range of points.
         *
         * @sample {highstock} stock/indicators/last-visible-price
         *         Last visible price
         *
         * @since     7.0.0
         * @product   highstock
         * @requires  modules/price-indicator
         */
        lastVisiblePrice?: LastVisiblePriceOptions;
    }
}
export interface LastPriceOptions extends AxisCrosshairOptions {
    /**
     * The color of the line of last price.
     * If not set, the line has the same color as the series.
     *
     * @default undefined
     */
    color?: AxisCrosshairOptions['color'];
    /**
     * Enable or disable the indicator.
     *
     * @default false
     */
    enabled?: boolean;
}
export interface LastVisiblePriceOptions extends LastPriceOptions {
    /**
     * The color of the line of last visible price.
     * By default, the line is not visible.
     *
     * @default 'transparent'
     */
    color?: LastPriceOptions['color'];
}

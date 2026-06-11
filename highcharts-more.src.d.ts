/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals.src";
import * as _Highcharts from "./highcharts.src";
declare module "./highcharts.src" {
    interface BorderRadiusOptionsObject {
        radius: (number|string);
        scope: ("individual"|"point"|"stack");
        where: ("all"|"end");
    }
    interface Point {
        /**
         * Range series only. The high or maximum value for each data point.
         */
        high?: number;
        /**
         * Range series only. The low or minimum value for each data point.
         */
        low?: number;
    }
    /**
     * Merge the default options with custom options and return the new options
     * structure. Commonly used for defining reusable templates.
     *
     * @param options
     *        The new custom chart options.
     */
    function setOptions(options: Options): void;
    /**
     * Wrap the getOffset method to return zero offset for title or labels in a
     * radial axis.
     */
    function getOffset(): void;
    /**
     * Find the path for plot lines perpendicular to the radial axis.
     */
    function getPlotLinePath(): void;
    /**
     * Find the position for the axis title, by default inside the gauge.
     */
    function getTitlePosition(): void;
    /**
     * Finalize modification of axis instance with radial logic.
     */
    function onAxisAfterInit(): void;
    /**
     * If a user has defined categories, it is necessary to retroactively hide
     * any ticks added by the 'onAxisFoundExtremes' function above (#21672).
     *
     * Otherwise they can show up on the axis, alongside user-defined
     * categories.
     */
    function onAxisAfterRender(): void;
    /**
     * Gauge-specific tick length
     */
    function onAxisAfterTickSize(): void;
    /**
     * Wrap auto label align to avoid setting axis-wide rotation on radial axes.
     * (#4920)
     */
    function onAxisAutoLabelAlign(): void;
    /**
     * Add logic to pad each axis with the amount of pixels necessary to avoid
     * the bubbles to overflow.
     */
    function onAxisFoundExtremes(): void;
    /**
     * Prepare axis translation.
     */
    function onAxisInitialAxisTranslation(): void;
    function onChartAfterDrawChartBox(): void;
    function onChartCreateAxes(): void;
    /**
     * Update default options for radial axes from setOptions method.
     */
    function onGlobalSetOptions(): void;
    /**
     * Apply conditional rounding to polar bars
     */
    function onSeriesAfterColumnTranslate(): void;
    /**
     * Add special cases within the Tick class' methods for radial axes.
     */
    function onTickAfterGetPosition(): void;
    /**
     * Prevent setting Y axis dirty.
     */
    function renderHidden(): void;
    /**
     * Wrap the `getMinorTickInterval` method to return 'auto' for gauge axes by
     * default, when `minorTicks` are not explicitly enabled or disabled.
     */
    function wrapAxisGetMinorTickInterval(): void;
}
export default _Highcharts;

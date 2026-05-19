import type Chart from '../../Core/Chart/Chart';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * @name Highcharts.Chart#fullscreen
         * @type {Highcharts.Fullscreen}
         * @requires modules/full-screen
         */
        fullscreen?: Fullscreen;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartEventsOptions {
        /**
         * Fires when a fullscreen is closed through the context menu item,
         * or a fullscreen is closed on the `Escape` button click,
         * or the `Chart.fullscreen.close` method.
         *
         * @sample highcharts/chart/events-fullscreen
         *         Title size change on fullscreen open
         *
         * @type      {Highcharts.FullScreenfullscreenCloseCallbackFunction}
         * @since     10.1.0
         * @context   Highcharts.Chart
         * @requires  modules/full-screen
         * @apioption chart.events.fullscreenClose
         */
        fullscreenClose?: FullScreenfullscreenCloseCallbackFunction;
        /**
         * Fires when a fullscreen is opened through the context menu item,
         * or the `Chart.fullscreen.open` method.
         *
         * @sample highcharts/chart/events-fullscreen
         *         Title size change on fullscreen open
         *
         * @type      {Highcharts.FullScreenfullscreenOpenCallbackFunction}
         * @since     10.1.0
         * @context   Highcharts.Chart
         * @requires  modules/full-screen
         * @apioption chart.events.fullscreenOpen
         */
        fullscreenOpen?: FullScreenfullscreenOpenCallbackFunction;
    }
}
/**
 * Gets fired when closing the fullscreen.
 *
 * @callback Highcharts.FullScreenfullscreenCloseCallbackFunction
 *
 * @param {Highcharts.Chart} chart
 *        The chart on which the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 */
export interface FullScreenfullscreenCloseCallbackFunction {
    (chart: Chart, event: Event): void;
}
/**
 * Gets fired when opening the fullscreen.
 *
 * @callback Highcharts.FullScreenfullscreenOpenCallbackFunction
 *
 * @param {Highcharts.Chart} chart
 *        The chart on which the event occurred.
 *
 * @param {global.Event} event
 *        The event that occurred.
 */
export interface FullScreenfullscreenOpenCallbackFunction {
    (chart: Chart, event: Event): void;
}
/**
 * Handles displaying chart's container in the fullscreen mode.
 *
 * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
 *
 * @class
 * @name Highcharts.Fullscreen
 *
 * @param {Highcharts.Chart} chart
 *
 * @requires modules/exporting
 */
declare class Fullscreen {
    constructor(chart: Chart);
    /**
     * Chart managed by the fullscreen controller.
     * @name Highcharts.Fullscreen#chart
     * @type {Highcharts.Chart}
     */
    chart: Chart;
    /**
     * The flag is set to `true` when the chart is displayed in
     * the fullscreen mode.
     *
     * @name Highcharts.Fullscreen#isOpen
     * @type {boolean | undefined}
     * @since 8.0.1
     */
    isOpen: boolean;
    /**
     * Stops displaying the chart in fullscreen mode.
     * Exporting module required.
     *
     * @since       8.0.1
     *
     * @function    Highcharts.Fullscreen#close
     * @return      {void}
     * @requires    modules/full-screen
     */
    close(): void;
    /**
     * Displays the chart in fullscreen mode.
     * When fired customly by user before exporting context button is created,
     * button's text will not be replaced - it's on the user side.
     * Exporting module required.
     *
     * @since       8.0.1
     *
     * @function Highcharts.Fullscreen#open
     * @return      {void}
     * @requires    modules/full-screen
     */
    open(): void;
    /**
     * Toggles displaying the chart in fullscreen mode.
     * By default, when the exporting module is enabled, a context button with
     * a drop down menu in the upper right corner accesses this function.
     * Exporting module required.
     *
     * @since 8.0.1
     *
     * @sample      highcharts/members/chart-togglefullscreen/
     *              Toggle fullscreen mode from a HTML button
     *
     * @function Highcharts.Fullscreen#toggle
     * @requires    modules/full-screen
     */
    toggle(): void;
}
export default Fullscreen;

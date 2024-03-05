/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    /**
     * Standalone Navigator options.
     */
    interface StandaloneNavigatorOptions {}
    /**
     * The StandaloneNavigator class. The StandaloneNavigator class allows for
     * creating a standalone navigator component that synchronizes the extremes
     * across multiple bound charts.
     */
    class StandaloneNavigator {
        /**
         * The StandaloneNavigator class. The StandaloneNavigator class allows
         * for creating a standalone navigator component that synchronizes the
         * extremes across multiple bound charts.
         *
         * @param userOptions
         *        The standalone navigator options.
         */
        constructor(userOptions: StandaloneNavigatorOptions);
        /**
         * The StandaloneNavigator class. The StandaloneNavigator class allows
         * for creating a standalone navigator component that synchronizes the
         * extremes across multiple bound charts.
         *
         * @param renderTo
         *        The DOM element to render to, or its id.
         *
         * @param userOptions
         *        The standalone navigator options.
         */
        constructor(renderTo: (string|HTMLDOMElement), userOptions: StandaloneNavigatorOptions);
        /**
         * Binds an axis to the standalone navigator, allowing the navigator to
         * control the axis' range.
         *
         * @param axisOrChart
         *        The Axis or Chart to bind to the navigator.
         *
         * @param twoWay
         *        Enables two-way binding between the navigator and the
         *        axis/chart. When true, changes in the navigator's range will
         *        update the axis and vice versa. When false, changes in the
         *        navigator's range will be reflected in the axis, but changes
         *        in the axis ranges won't be reflected on the navigator.
         */
        bind(axisOrChart: (Axis|Chart), twoWay?: boolean): void;
        /**
         * Destroys allocated standalone navigator elements.
         */
        destroy(): void;
        /**
         * Get the current range of the standalone navigator.
         *
         * @return The current range of the standalone navigator.
         */
        getRange(): ExtremesObject;
        /**
         * Redraws the standalone navigator.
         */
        redraw(): void;
        /**
         * Set the range of the standalone navigator.
         *
         * @param min
         *        The new minimum value.
         *
         * @param max
         *        The new maximum value.
         *
         * @fires Highcharts.StandaloneNavigator#setRange
         */
        setRange(min: (number|undefined), max: (number|undefined)): void;
        /**
         * Unbinds a single axis or all bound axes from the standalone
         * navigator.
         *
         * @param axisOrChart
         *        Passing a Chart object unbinds the first X axis of the chart,
         *        an Axis object unbinds that specific axis, and undefined
         *        unbinds all axes bound to the navigator.
         */
        unbind(axisOrChart: (Axis|Chart|undefined)): void;
        /**
         * Updates the standalone navigator's options with a new set of user
         * options.
         *
         * @param newOptions
         *        Updates the standalone navigator's options with new user
         *        options.
         *
         * @param redraw
         *        Whether to redraw the standalone navigator. By default, if not
         *        specified, the standalone navigator will be redrawn.
         */
        update(newOptions: StandaloneNavigatorOptions, redraw: (boolean|undefined)): void;
    }
    /**
     * Factory function for standalone navigator.
     *
     * @param options
     *        The standalone navigator options with chart-like structure.
     *
     *        Returns the navigator object.
     */
    function navigator(options: StandaloneNavigatorOptions): void;
    /**
     * Factory function for standalone navigator.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The standalone navigator options with chart-like structure.
     *
     *        Returns the navigator object.
     */
    function navigator(renderTo: (string|HTMLDOMElement), options: StandaloneNavigatorOptions): void;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @param path
     *        Path to be rotated.
     *
     * @param vertical
     *        If vertical scrollbar, swap x-y values.
     *
     * @return Rotated path.
     */
    function swapXY(path: SVGPathArray, vertical?: boolean): SVGPathArray;
}
export default factory;
export let Highcharts: typeof _Highcharts;

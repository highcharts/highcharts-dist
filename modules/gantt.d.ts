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
     * Factory function for Gantt charts.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and and all external
     *        images are loaded. Defining a chart.events.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     */
    function ganttChart(options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * Factory function for Gantt charts.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and and all external
     *        images are loaded. Defining a chart.events.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     */
    function ganttChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): Chart;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @param path
     *        Path to be rotated.
     *
     * @param vertical
     *        If vertical scrollbar, swap x-y values.
     */
    function swapXY(path: Array<(number|string)>, vertical: boolean): Array<(number|string)>;
    /**
     * Returns the first break found where the x is larger then break.from and
     * smaller then break.to.
     *
     * @param x
     *        The number which should be within a break.
     *
     * @param breaks
     *        The array of breaks to search within.
     *
     * @return Returns the first break found that matches, returns false if no
     *         break is found.
     */
    function findBreakAt(x: number, breaks: any[]): (boolean|object);
}
export default factory;
export let Highcharts: typeof _Highcharts;

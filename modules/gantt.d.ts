import * as globals from "../globals";
import * as Highcharts from "../highcharts";
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
     *        images are loaded. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#ganttChart
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
     *        images are loaded. Defining a chart.event.load handler is
     *        equivalent.
     *
     * @return Returns the Chart object.
     *
     * @see https://api.highcharts.com/class-reference/Highcharts#ganttChart
     */
    function ganttChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): Chart;
}
export default factory;

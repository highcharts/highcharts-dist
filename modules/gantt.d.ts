/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface DataTableOptions {
        columns?: DataTableColumnCollection;
        id?: string;
    }
    interface Point {
        /**
         * The ending X value of the range point.
         */
        x2?: number;
    }
    interface PointOptionsObject {
        /**
         * The ending X value of the range point.
         */
        x2?: number;
    }
    /**
     * Gantt-optimized chart. Use Chart for common charts.
     */
    class GanttChart extends Chart {
        /**
         * Initializes the chart. The constructor's arguments are passed on
         * directly.
         *
         * @param userOptions
         *        Custom options.
         *
         * @param callback
         *        Function to run when the chart has loaded and all external
         *        images are loaded.
         *
         * @fires Highcharts.GanttChart#init
         * @fires Highcharts.GanttChart#afterInit
         */
        init(userOptions: Options, callback?: Function): void;
    }
    /**
     * The factory function for creating new gantt charts. Creates a new
     * GanttChart object with different default options than the basic Chart.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The chart options structure.
     *
     * @param callback
     *        Function to run when the chart has loaded and all external images
     *        are loaded. Defining a chart.events.load handler is equivalent.
     *
     * @return Returns the Chart object.
     */
    function ganttChart(renderTo: (string|HTMLDOMElement), options: Options, callback?: ChartCallbackFunction): GanttChart;
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
    /**
     * Callout shape used for default tooltips.
     */
    function callout(): void;
    function circle(): void;
    function diamond(): void;
    function getCurvedPath(): void;
    function getDefaultPath(): void;
    function getStraightPath(): void;
    function rect(): void;
    function triangle(): void;
    function triangleDown(): void;
}
export default _Highcharts;

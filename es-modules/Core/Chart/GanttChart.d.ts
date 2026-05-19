import type Options from '../Options';
import Chart from './Chart.js';
declare module '../Options' {
    interface Options {
    }
}
/**
 * Gantt-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/gantt
 *
 * @class
 * @name Highcharts.GanttChart
 * @extends Highcharts.Chart
 */
declare class GanttChart extends Chart {
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.GanttChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function|true} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Set to `true` to return a promise that
     *        resolves when the chart is ready.
     *
     *
     * @emits Highcharts.GanttChart#event:init
     * @emits Highcharts.GanttChart#event:afterInit
     */
    init(userOptions: Partial<Options>, callback?: Chart.CallbackFunction | true): void;
}
export default GanttChart;

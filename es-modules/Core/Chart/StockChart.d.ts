import type Options from '../Options';
import Chart from '../Chart/Chart.js';
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
declare class StockChart extends Chart {
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function|true} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Set to `true` to return a promise that
     *        resolves when the chart is ready.
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    init(userOptions: Partial<Options>, callback?: Chart.CallbackFunction | true): void;
}
export default StockChart;

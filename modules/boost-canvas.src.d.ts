/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface Chart {
        /**
         * Returns true if the chart is in series boost mode.
         *
         * @param chart
         *        the chart to check
         *
         * @return true if the chart is in series boost mode
         */
        isChartSeriesBoosting(chart: Chart): boolean;
    }
    /**
     * Initialize the canvas boost.
     */
    function initCanvasBoost(): void;
    /**
     * Override a bunch of methods the same way. If the number of points is
     * below the threshold, run the original method. If not, check for a canvas
     * version or do nothing.
     *
     * Note that we're not overriding any of these for heatmaps.
     */
    function wrapSeriesFunctions(): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;

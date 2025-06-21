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
export default _Highcharts;

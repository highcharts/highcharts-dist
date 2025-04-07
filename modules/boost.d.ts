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
    interface DataTableOptions {
        columns?: DataTableColumnCollection;
        id?: string;
    }
    /**
     * Returns true if the current browser supports WebGL.
     *
     * @return `true` if the browser supports WebGL.
     */
    function hasWebGLSupport(): boolean;
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

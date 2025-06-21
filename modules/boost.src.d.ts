/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
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
export default _Highcharts;

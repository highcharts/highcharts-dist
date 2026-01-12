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
     * Returns true if the current browser supports WebGL.
     *
     * @return `true` if the browser supports WebGL.
     */
    function hasWebGLSupport(): boolean;
}
export default _Highcharts;

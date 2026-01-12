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
     * Initialize the canvas boost.
     */
    function initCanvasBoost(): void;
}
export default _Highcharts;

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
}
export default _Highcharts;

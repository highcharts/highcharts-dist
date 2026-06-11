/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface Chart {
        /**
         * Flag used in parallel coordinates plot to check if chart has
         * ||-coords (parallel coords).
         */
        hasParallelCoordinates: boolean;
    }
}
export default _Highcharts;

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Chart {
        /**
         * Flag used in parallel coordinates plot to check if chart has
         * ||-coords (parallel coords).
         */
        hasParallelCoordinates: boolean;
    }
}
export default _Highcharts;

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface Point {
        x2?: number;
    }
    interface PointOptionsObject {
        x2?: number;
    }
}
export default _Highcharts;

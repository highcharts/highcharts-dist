/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Point {
        x2?: number;
    }
    interface PointOptionsObject {
        x2?: number;
    }
}
export default _Highcharts;

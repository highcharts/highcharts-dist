/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface BorderRadiusOptionsObject {
        radius: (number|string);
        scope: ("point"|"stack");
        where: ("all"|"end");
    }
}
export default _Highcharts;

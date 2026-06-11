/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface BorderRadiusOptionsObject {
        radius: (number|string);
        scope: ("individual"|"point"|"stack");
        where: ("all"|"end");
    }
}
export default _Highcharts;

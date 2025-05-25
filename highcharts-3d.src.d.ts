/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals.src";
import * as _Highcharts from "./highcharts.src";
declare module "./highcharts.src" {
    function wrapAreaSeriesGetGraphPath(): void;
}
export default _Highcharts;

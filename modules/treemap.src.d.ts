/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface BreadcrumbsOptions {
        buttonTheme?: SVGAttributes;
    }
    function recursive(): void;
}
export default _Highcharts;

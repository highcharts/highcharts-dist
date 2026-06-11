/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * The color variable names and values are copied from highcharts.css
     */
    let defaultRules: any;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default _Highcharts;

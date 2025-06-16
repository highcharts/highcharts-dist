/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    function getCurvedPath(): void;
    function getDefaultPath(): void;
    function getStraightPath(): void;
}
export default _Highcharts;

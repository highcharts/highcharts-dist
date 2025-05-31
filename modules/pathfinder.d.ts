/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    function getCurvedPath(): void;
    function getDefaultPath(): void;
    function getStraightPath(): void;
}
export default _Highcharts;

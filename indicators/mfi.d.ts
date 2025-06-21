/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    function calculateRawMoneyFlow(): void;
    function calculateTypicalPrice(): void;
    function toFixed(): void;
}
export default _Highcharts;

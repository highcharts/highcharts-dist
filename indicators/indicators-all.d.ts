/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    function calculateDirection(): void;
    function calculateRawMoneyFlow(): void;
    function calculateTypicalPrice(): void;
    function getAccelerationFactor(): void;
    function getAccelerationFactorMultiply(): void;
    function getEPMinusPSAR(): void;
    function getExtremePoint(): void;
    function getPSAR(): void;
    function MFIIndicator_sumArray(): void;
    function PSARIndicator_toFixed(): void;
    function ROCIndicator_populateAverage(): void;
    function RSIIndicator_toFixed(): void;
    function toFixed(): void;
}
export default _Highcharts;

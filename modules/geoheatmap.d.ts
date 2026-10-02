/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface InterpolationOptionsObject {
        /**
         * Represents how much blur should be added to the interpolated image.
         * Works best in the range of 0-1, all higher values would need a lot
         * more performance of the machine to calculate more detailed
         * interpolation.
         */
        blur: number;
        /**
         * Enable or disable the interpolation.
         */
        enabled: boolean;
    }
}
export default _Highcharts;

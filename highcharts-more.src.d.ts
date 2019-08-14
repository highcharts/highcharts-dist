/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals.src";
import * as _Highcharts from "./highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "./highcharts.src" {
    interface Point {
        /**
         * Range series only. The high or maximum value for each data point.
         */
        high?: number;
        /**
         * Range series only. The low or minimum value for each data point.
         */
        low?: number;
    }
    interface PointOptionsObject {
        /**
         * Range series only. The high or maximum value for each data point.
         */
        high?: number;
        /**
         * Range series only. The low or minimum value for each data point.
         */
        low?: number;
    }
}
export default factory;
export let Highcharts: typeof _Highcharts;

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts" {
    /**
     * Utility function to check if an item is an array.
     *
     * @param obj
     *        The item to check.
     *
     * @return True if the argument is an array.
     */
    function isArray(obj: any): boolean;
}
export default factory;
export let Highcharts: typeof _Highcharts;

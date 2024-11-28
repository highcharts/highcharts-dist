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
     * Compares two arrays of strings, checking their length and if
     * corresponding elements are equal.
     *
     * @param a
     *        The first array to compare.
     *
     * @param b
     *        The second array to compare.
     *
     * @return Return `true` if the arrays are equal, otherwise `false`.
     */
    function shallowArraysEqual(a: Array<string>, b: Array<string>): boolean;
}
export default factory;
export let Highcharts: typeof _Highcharts;

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
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
export default _Highcharts;

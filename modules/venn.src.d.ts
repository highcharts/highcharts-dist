/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    /**
     * Finds the root of a given function. The root is the input value needed
     * for a function to return 0.
     *
     * See https://en.wikipedia.org/wiki/Bisection_method#Algorithm
     *
     * TODO: Add unit tests.
     *
     * @param f
     *        The function to find the root of.
     *
     * @param a
     *        The lowest number in the search range.
     *
     * @param b
     *        The highest number in the search range.
     *
     * @param tolerance
     *        The allowed difference between the returned value and root.
     *
     * @param maxIterations
     *        The maximum iterations allowed.
     */
    function bisect(f: Function, a: number, b: number, tolerance?: number, maxIterations?: number): void;
    /**
     * An extended version of draw customized for points. It calls additional
     * methods that is expected when rendering a point.
     *
     * @param params
     *        Parameters
     */
    function drawPoint(params: Dictionary<any>): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;

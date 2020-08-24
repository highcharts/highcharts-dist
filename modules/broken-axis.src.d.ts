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
     * Returns the first break found where the x is larger then break.from and
     * smaller then break.to.
     *
     * @param x
     *        The number which should be within a break.
     *
     * @param breaks
     *        The array of breaks to search within.
     *
     * @return Returns the first break found that matches, returns false if no
     *         break is found.
     */
    function findBreakAt(x: number, breaks: Array<XAxisBreaksOptions>): (XAxisBreaksOptions|undefined);
}
export default factory;
export let Highcharts: typeof _Highcharts;

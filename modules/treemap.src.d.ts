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
     * An extended version of draw customized for points. It calls additional
     * methods that is expected when rendering a point.
     *
     * @param params
     *        Parameters
     */
    function drawPoint(params: object): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;

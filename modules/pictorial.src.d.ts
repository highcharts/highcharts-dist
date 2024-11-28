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
    interface Series {
        /**
         * Animate in the series. Called internally twice. First with the `init`
         * parameter set to true, which sets up the initial state of the
         * animation. Then when ready, it is called with the `init` parameter
         * undefined, in order to perform the actual animation.
         *
         * @param init
         *        Initialize the animation.
         */
        animate(init?: boolean): void;
    }
    function destroyAllStackShadows(): void;
    function forEachStack(): void;
    function getStackMetrics(): void;
    function invertShadowGroup(): void;
    function renderStackShadow(): void;
    function rescalePatternFill(): void;
}
export default factory;
export let Highcharts: typeof _Highcharts;

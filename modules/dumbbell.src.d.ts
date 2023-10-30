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
    interface Point {
        high?: number;
        low?: number;
    }
    interface Series {
        /**
         * Get non-presentational attributes for a point. Used internally for
         * both styled mode and classic. Can be overridden for different series
         * types.
         *
         * @param point
         *        The Point to inspect.
         *
         * @param state
         *        The state, can be either `hover`, `select` or undefined.
         *
         * @return A hash containing those attributes that are not settable from
         *         CSS.
         */
        markerAttribs(point: Point, state?: string): SVGAttributes;
    }
}
export default factory;
export let Highcharts: typeof _Highcharts;

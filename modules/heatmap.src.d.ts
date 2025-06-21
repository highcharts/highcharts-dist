/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface Point {
        /**
         * Heatmap series only. Padding between the points in the heatmap.
         */
        pointPadding?: number;
        /**
         * Heatmap series only. The value of the point, resulting in a color
         * controlled by options as set in the colorAxis configuration.
         */
        value?: (number|null);
    }
    interface PointOptionsObject {
        /**
         * Heatmap series only. Point padding for a single point.
         */
        pointPadding?: number;
        /**
         * Heatmap series only. The value of the point, resulting in a color
         * controlled by options as set in the colorAxis configuration.
         */
        value?: (number|null);
    }
    /**
     * Find color of point based on color axis.
     *
     * @param value
     *        Value to find corresponding color on the color axis.
     *
     * @param point
     *        Point to find it's color from color axis.
     *
     * @return Color in RGBa array.
     */
    function colorFromPoint(value: (number|null), point: Point): Array<number>;
}
export default _Highcharts;

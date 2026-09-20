/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
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
}
export default _Highcharts;

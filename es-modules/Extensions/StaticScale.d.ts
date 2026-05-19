declare module '../Core/Axis/AxisOptions' {
    interface AxisOptions {
        /**
         * For vertical axes only. Setting the static scale ensures that each
         * tick unit is translated into a fixed pixel height. For example,
         * setting the static scale to 24 results in each Y axis category
         * taking up 24 pixels, and the height of the chart adjusts. Adding or
         * removing items will make the chart resize.
         *
         * @sample {gantt} gantt/xrange-series/demo/
         *         X-range series with static scale
         * @sample {highcharts} highcharts/xaxis/staticscale
         *         Static scale on X axis (horizontal bar chart)
         *
         * @requires modules/static-scale
         * @default  50
         * @since    6.2.0
         * @product  highcharts highstock gantt
         */
        staticScale?: number;
    }
}
export {};

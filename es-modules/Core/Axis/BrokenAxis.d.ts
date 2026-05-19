declare module './AxisOptions' {
    /**
     * An array defining breaks in the axis, the sections defined will be
     * left out and all the points shifted closer to each other.
     *
     * @productdesc {highcharts}
     * Requires that the broken-axis.js module is loaded.
     *
     * @sample {highcharts} highcharts/axisbreak/break-simple/
     *         Simple break
     * @sample {highcharts|highstock} highcharts/axisbreak/break-visualized/
     *         Advanced with callback
     * @sample {highstock} stock/demo/intraday-breaks/
     *         Break on nights and weekends
     *
     * @since     4.1.0
     * @product   highcharts highstock gantt
     */
    interface AxisBreakOptions {
        /**
         * A number indicating how much space should be left between the start
         * and the end of the break. The break size is given in axis units,
         * so for instance on a `datetime` axis, a break size of 3600000 would
         * indicate the equivalent of an hour.
         *
         * @default   0
         * @since     4.1.0
         * @product   highcharts highstock gantt
         */
        breakSize?: number;
        /**
         * The axis value where the break starts. On datetime axes, this may be
         * a date string.
         *
         * @since     4.1.0
         * @product   highcharts highstock gantt
         */
        from: number;
        /**
         * Defines an interval after which the break appears again. By default
         * the breaks do not repeat.
         *
         * @default   0
         * @since     4.1.0
         * @product   highcharts highstock gantt
         */
        repeat?: number;
        /**
         * The axis value where the break ends. On datetime axes, this may be
         * a date string.
         *
         * @since     4.1.0
         * @product   highcharts highstock gantt
         */
        to: number;
    }
    interface AxisOptions {
        /**
         * An array defining breaks in the axis, the sections defined will be
         * left out and all the points shifted closer to each other.
         *
         * @productdesc {highcharts}
         * Requires that the broken-axis.js module is loaded.
         *
         * @sample {highcharts} highcharts/axisbreak/break-simple/
         *         Simple break
         * @sample {highcharts|highstock} highcharts/axisbreak/break-visualized/
         *         Advanced with callback
         * @sample {highstock} stock/demo/intraday-breaks/
         *         Break on nights and weekends
         *
         * @since     4.1.0
         * @product   highcharts highstock gantt
         */
        breaks?: Array<AxisBreakOptions>;
    }
}
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * Defines when to display a gap in the graph, together with the
         * [gapUnit](plotOptions.series.gapUnit) option.
         *
         * In case when `dataGrouping` is enabled, points can be grouped
         * into a larger time span. This can make the grouped points to
         * have a greater distance than the absolute value of `gapSize`
         * property, which will result in disappearing graph completely.
         * To prevent this situation the mentioned distance between
         * grouped points is used instead of previously defined
         * `gapSize`.
         *
         * In practice, this option is most often used to visualize gaps
         * in time series. In a stock chart, intraday data is available
         * for daytime hours, while gaps will appear in nights and
         * weekends.
         *
         * @see [gapUnit](plotOptions.series.gapUnit)
         * @see [xAxis.breaks](#xAxis.breaks)
         *
         * @sample {highstock} stock/plotoptions/series-gapsize/
         *         Setting the gap size to 2 introduces gaps for weekends in
         *         daily datasets.
         *
         * @default   0
         * @product   highcharts highstock
         * @requires  modules/broken-axis
         */
        gapSize?: number;
        /**
         * Together with [gapSize](plotOptions.series.gapSize), this
         * option defines where to draw gaps in the graph.
         *
         * When the `gapUnit` is `"relative"` (default), a gap size of 5
         * means that if the distance between two points is greater than
         * 5 times that of the two closest points, the graph will be
         * broken.
         *
         * When the `gapUnit` is `"value"`, the gap is based on absolute
         * axis values, which on a datetime axis is milliseconds. This
         * also applies to the navigator series that inherits gap
         * options from the base series.
         *
         * @see [gapSize](plotOptions.series.gapSize)
         *
         * @default    'relative'
         * @since      5.0.13
         * @product    highcharts highstock
         * @requires   modules/broken-axis
         */
        gapUnit?: 'relative' | 'value';
    }
}
export {};

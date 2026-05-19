interface ScrollablePlotAreaOptions {
    /**
     * The minimum height for the plot area. If it gets smaller than this, the
     * plot area will become scrollable.
     *
     * @since 7.1.2
     */
    minHeight?: number;
    /**
     * The minimum width for the plot area. If it gets smaller than this, the
     * plot area will become scrollable.
     *
     * @since 6.1.0
     */
    minWidth?: number;
    /**
     * The opacity of mask applied on one of the sides of the plot
     * area.
     *
     * @sample {highcharts} highcharts/chart/scrollable-plotarea-opacity
     *         Disabled opacity for the mask
     *
     * @default 0.85
     * @since   7.1.1
     */
    opacity?: number;
    /**
     * The initial scrolling position of the scrollable plot area. Ranges from 0
     * to 1, where 0 aligns the plot area to the left and 1 aligns it to the
     * right. Typically we would use 1 if the chart has right aligned Y axes.
     *
     * @since 6.1.0
     */
    scrollPositionX?: number;
    /**
     * The initial scrolling position of the scrollable plot area. Ranges from 0
     * to 1, where 0 aligns the plot area to the top and 1 aligns it to the
     * bottom.
     *
     * @since 7.1.2
     */
    scrollPositionY?: number;
}
declare module '../Core/Chart/ChartOptions' {
    interface ChartOptions {
        /**
         * Options for a scrollable plot area. This feature provides a minimum
         * size for the plot area of the chart. If the size gets smaller than
         * this, typically on mobile devices, a native browser scrollbar is
         * presented. This scrollbar provides smooth scrolling for the contents
         * of the plot area, whereas the title, legend and unaffected axes are
         * fixed.
         *
         * Since v7.1.2, a scrollable plot area can be defined for either
         * horizontal or vertical scrolling, depending on whether the `minWidth`
         * or `minHeight` option is set.
         *
         * @sample highcharts/chart/scrollable-plotarea
         *         Scrollable plot area
         * @sample highcharts/chart/scrollable-plotarea-vertical
         *         Vertically scrollable plot area
         * @sample {gantt} gantt/chart/scrollable-plotarea-vertical
         *         Gantt chart with vertically scrollable plot area
         *
         * @since     6.1.0
         * @product   highcharts gantt
         */
        scrollablePlotArea?: ScrollablePlotAreaOptions;
    }
}
export {};

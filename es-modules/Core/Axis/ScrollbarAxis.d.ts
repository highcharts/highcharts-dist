import type ScrollbarOptions from '../../Stock/Scrollbar/ScrollbarOptions';
declare module './AxisOptions' {
    interface AxisOptions {
        /**
         * An optional scrollbar to display on the X axis in response to
         * limiting the minimum and maximum of the axis values.
         *
         * In styled mode, all the presentational options for the scrollbar are
         * replaced by the classes `.highcharts-scrollbar-thumb`,
         * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
         * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
         *
         * @sample {highstock} stock/yaxis/heatmap-scrollbars/
         *         Heatmap with both scrollbars
         *
         * @since     4.2.6
         * @product   highstock
         * @apioption xAxis.scrollbar
         */
        scrollbar?: ScrollbarOptions;
    }
}

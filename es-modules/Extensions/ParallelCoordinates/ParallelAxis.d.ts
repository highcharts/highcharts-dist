declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        /**
         * Parallel coordinates only. Format that will be used for point.y
         * and available in [tooltip.pointFormat](#tooltip.pointFormat) as
         * `{point.formattedValue}`. If not set, `{point.formattedValue}`
         * will use other options, in this order:
         *
         * 1. [yAxis.labels.format](#yAxis.labels.format) will be used if
         *    set
         *
         * 2. If yAxis is a category, then category name will be displayed
         *
         * 3. If yAxis is a datetime, then value will use the same format as
         *    yAxis labels
         *
         * 4. If yAxis is linear/logarithmic type, then simple value will be
         *    used
         *
         * @sample {highcharts}
         *         /highcharts/parallel-coordinates/tooltipvalueformat/
         *         Different tooltipValueFormats's
         *
         * @type     {string}
         * @default  undefined
         * @since    6.0.0
         * @product  highcharts
         * @requires modules/parallel-coordinates
         */
        tooltipValueFormat?: string;
    }
}
export {};

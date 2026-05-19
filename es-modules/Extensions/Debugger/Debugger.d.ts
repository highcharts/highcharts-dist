declare module '../../Core/Chart/ChartOptions' {
    interface ChartOptions {
        /**
         * Whether to display errors on the chart. When `false`, the errors will
         * be shown only in the console.
         *
         * @sample highcharts/chart/display-errors/
         *         Show errors on chart
         *
         * @since    7.0.0
         * @default  true
         * @requires modules/debugger
         */
        displayErrors?: boolean;
    }
}
export {};

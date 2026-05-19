import type { NoDataOptions } from './NoDataOptions';
declare module '../../Core/Options' {
    interface LangOptions {
        /**
         * The text to display when the chart contains no data.
         *
         * @see [noData](#noData)
         *
         * @sample highcharts/no-data-to-display/no-data-line
         *         No-data text
         *
         * @since    3.0.8
         * @product  highcharts highstock
         * @requires modules/no-data-to-display
         * @default  No data to display
         */
        noData?: string;
    }
    interface Options {
        /**
         * Options for displaying a message like "No data to display".
         * This feature requires the file no-data-to-display.js to be loaded in
         * the page. The actual text to display is set in the lang.noData
         * option.
         *
         * @sample highcharts/no-data-to-display/no-data-line
         *         Line chart with no-data module
         * @sample highcharts/no-data-to-display/no-data-pie
         *         Pie chart with no-data module
         *
         * @product      highcharts highstock gantt
         * @requires     modules/no-data-to-display
         * @since        3.0.8
         */
        noData?: NoDataOptions;
    }
}

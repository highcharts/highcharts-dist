declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * Whether to zoom non-cartesian series. If `chart.zooming` is set, the
         * option allows to disable zooming on an individual non-cartesian
         * series. By default zooming is enabled for all series.
         *
         * **Note**: This option works only for non-cartesian series.
         *
         * @default  true
         * @since    12.3.0
         * @requires modules/non-cartesian-zoom
         */
        zoomEnabled?: boolean;
    }
}
export {};

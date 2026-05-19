declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /**
         * Perform drilldown on a point instance. The [drilldown](https://api.highcharts.com/highcharts/series.line.data.drilldown)
         * property must be set on the point options.
         *
         * To drill down multiple points in the same category, use
         * `Axis.drilldownCategory` instead.
         *
         * @requires  modules/drilldown
         *
         * @function Highcharts.Point#doDrilldown
         *
         * @sample highcharts/drilldown/programmatic
         *         Programmatic drilldown
         */
        doDrilldown(): void;
    }
}
export {};

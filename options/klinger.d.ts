/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the initial
     * animation when a series is displayed for the `dataLabels`. The animation
     * can also be set as a configuration object. Please note that this option
     * only applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface PlotKlingerDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for the series data sorting.
     */
    interface PlotKlingerDataSortingOptions {
        /**
         * (Highcharts, Highstock) Enable or disable data sorting for the
         * series. Use xAxis.reversed to change the sorting order.
         */
        enabled?: boolean;
        /**
         * (Highcharts, Highstock) Whether to allow matching points by name in
         * an update. If this option is disabled, points will be matched by
         * order.
         */
        matchByName?: boolean;
        /**
         * (Highcharts, Highstock) Determines what data value should be used to
         * sort by.
         */
        sortKey?: string;
    }
    /**
     * (Highstock) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotKlingerOnPointConnectorOptions {
        /**
         * (Highstock) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highstock) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highstock) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highstock) Options allowing to set a position and an offset of the
     * series in the _Series on point_ feature.
     */
    interface PlotKlingerOnPointPositionOptions {
        /**
         * (Highstock) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highstock) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highstock) X position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highstock) Y position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highstock) Parameters used in calculation of Klinger Oscillator.
     */
    interface PlotKlingerParamsOptions {
        /**
         * (Highstock) The fast period for indicator calculations.
         */
        fastAvgPeriod?: number;
        /**
         * (Highstock) The base period for signal calculations.
         */
        signalPeriod?: number;
        /**
         * (Highstock) The slow period for indicator calculations.
         */
        slowAvgPeriod?: number;
        /**
         * (Highstock) The id of another series to use its data as volume data
         * for the indiator calculation.
         */
        volumeSeriesID?: string;
    }
    /**
     * (Highstock) Styles for a signal line.
     */
    interface PlotKlingerSignalLineStylesOptions {
        /**
         * (Highstock) Color of the line. If not set, it's inherited from
         * plotOptions.klinger.color.
         */
        lineColor?: Highcharts.ColorString;
        /**
         * (Highstock) Pixel width of the line.
         */
        lineWidth?: number;
    }
}

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts, Highstock) Enable or disable the initial animation when a
     * series is displayed for the `dataLabels`. The animation can also be set
     * as a configuration object. Please note that this option only applies to
     * the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface PlotAreasplinerangeDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock) The animation delay time in milliseconds. Set
         * to `0` to render the data labels immediately. As `undefined` inherits
         * defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for the connector in the _Series on
     * point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotAreasplinerangeOnPointConnectorOptions {
        /**
         * (Highcharts, Highstock) A name for the dash style to use for the
         * connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts, Highstock) Color of the connector line. By default it's
         * the series' color.
         */
        stroke?: string;
        /**
         * (Highcharts, Highstock) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts, Highstock) Options allowing to set a position and an offset
     * of the series in the _Series on point_ feature.
     */
    interface PlotAreasplinerangeOnPointPositionOptions {
        /**
         * (Highcharts, Highstock) Series center offset from the original x
         * position. If defined, the connector line is drawn connecting original
         * position with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts, Highstock) Series center offset from the original y
         * position. If defined, the connector line is drawn from original
         * position to a new position.
         */
        offsetY?: number;
        /**
         * (Highcharts, Highstock) X position of the series center. By default,
         * the series is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highcharts, Highstock) Y position of the series center. By default,
         * the series is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts, Highstock) A `areasplinerange` series. If the type option is
     * not specified, it is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `areasplinerange` series are defined in
     * plotOptions.areasplinerange.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * You have to extend the `SeriesAreasplinerangeOptions` via an interface to
     * allow custom properties: ``` declare interface
     * SeriesAreasplinerangeOptions { customProperty: string; }
     *
     */
    interface SeriesAreasplinerangeOptions extends Highcharts.PlotAreasplinerangeOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts, Highstock) An array of data points for the series. For
         * the `areasplinerange` series type, points can be given in the
         * following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values
         * correspond to `x,low,high`. If the first value is a string, it is
         * applied as the name of the point, and the `x` value is inferred. The
         * `x` value can also be omitted, in which case the inner arrays should
         * be of length 2\. Then the `x` value is automatically calculated,
         * either starting at 0 and incremented by 1, or from `pointStart` and
         * `pointInterval` given in the series options. (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<([(number|string), number]|[(number|string), number, number]|Highcharts.PointOptionsObject)>;
        /**
         * Not available
         */
        dataParser?: undefined;
        /**
         * Not available
         */
        dataURL?: undefined;
        /**
         * Not available
         */
        stack?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "areasplinerange";
    }
}

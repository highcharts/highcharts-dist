/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
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
    interface PlotXrangeDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Styles for the label. The
     * default `color` setting is `"contrast"`, which is a pseudo color that
     * Highcharts picks up and applies the maximum contrast to the underlying
     * point item, for example the bar in a bar chart.
     *
     * The `textOutline` is a pseudo property that applies an outline of the
     * given width with the given color, which by default is the maximum
     * contrast to the text. So a bright text color will result in a black text
     * outline for maximum readability on a mixed background. In some cases,
     * especially with grayscale text, the text outline doesn't work well, in
     * which cases it can be disabled by setting it to `"none"`. When `useHTML`
     * is true, the `textOutline` will not be picked up. In this, case, the same
     * effect can be acheived through the `text-shadow` CSS property.
     *
     * For some series types, where each point has an extent, like for example
     * tree maps, the data label may overflow the point. There are two
     * strategies for handling overflow. By default, the text will wrap to
     * multiple lines. The other strategy is to set `style.textOverflow` to
     * `ellipsis`, which will keep the text on one line plus it will break
     * inside long words.
     */
    interface PlotXrangeDataLabelsStyleOptions {
        whiteSpace?: string;
    }
    /**
     * (Highcharts, Highstock, Gantt) Options for the connector in the _Series
     * on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotXrangeOnPointConnectorOptions {
        /**
         * (Highcharts, Highstock, Gantt) A name for the dash style to use for
         * the connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts, Highstock, Gantt) Color of the connector line. By
         * default it's the series' color.
         */
        stroke?: string;
        /**
         * (Highcharts, Highstock, Gantt) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Options allowing to set a position and an
     * offset of the series in the _Series on point_ feature.
     */
    interface PlotXrangeOnPointPositionOptions {
        /**
         * (Highcharts, Highstock, Gantt) Series center offset from the original
         * x position. If defined, the connector line is drawn connecting
         * original position with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts, Highstock, Gantt) Series center offset from the original
         * y position. If defined, the connector line is drawn from original
         * position to a new position.
         */
        offsetY?: number;
        /**
         * (Highcharts, Highstock, Gantt) X position of the series center. By
         * default, the series is displayed on the point that it is connected
         * to.
         */
        x?: number;
        /**
         * (Highcharts, Highstock, Gantt) Y position of the series center. By
         * default, the series is displayed on the point that it is connected
         * to.
         */
        y?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) A partial fill for each point, typically
     * used to visualize how much of a task is performed. The partial fill
     * object can be set either on series or point level.
     */
    interface PlotXrangePartialFillOptions {
        /**
         * (Highcharts, Highstock, Gantt) The fill color to be used for partial
         * fills. Defaults to a darker shade of the point color.
         */
        fill?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
    }
    /**
     * (Highcharts, Highstock, Gantt) An `xrange` series. If the type option is
     * not specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `xrange` series are defined in plotOptions.xrange.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * **TypeScript:**
     *
     * - the type option must always be set.
     *
     * - when accessing an array of series, the combined set of all series types
     * is represented by Highcharts.SeriesOptionsType . Narrowing down to the
     * specific type can be done by checking the `type` property. (see online
     * documentation for example)
     *
     * You have to extend the `SeriesXrangeOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesXrangeOptions {
     * customProperty: string; }
     *
     */
    interface SeriesXrangeOptions extends Highcharts.PlotXrangeOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts, Highstock, Gantt) An array of data points for the
         * series. For the `xrange` series type, points can be given in the
         * following ways:
         *
         * 1. An array of objects with named values. The objects are point
         * configuration objects as seen below. (see online documentation for
         * example)
         */
        data?: Array<Highcharts.XrangePointOptionsObject>;
        /**
         * Not available
         */
        depth?: undefined;
        /**
         * Not available
         */
        edgeColor?: undefined;
        /**
         * Not available
         */
        edgeWidth?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "xrange";
    }
}

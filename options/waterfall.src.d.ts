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
    interface PlotWaterfallDataLabelsAnimationOptions {
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
    interface PlotWaterfallDataSortingOptions {
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
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotWaterfallOnPointConnectorOptions {
        /**
         * (Highcharts) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highcharts) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts) Options allowing to set a position and an offset of the
     * series in the _Series on point_ feature.
     */
    interface PlotWaterfallOnPointPositionOptions {
        /**
         * (Highcharts) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highcharts) X position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highcharts) Y position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts) Positioning options for fixed tooltip, taking effect only
     * when tooltip.fixed is `true`.
     */
    interface PlotWaterfallTooltipPositionOptions {
        /**
         * (Highcharts) The horizontal alignment of the fixed tooltip.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highcharts) What the fixed tooltip alignment should be relative to.
         *
         * The default, `pane`, means that it is aligned within the plot area
         * for that given series. If the tooltip is split (as default in Stock
         * charts), each partial tooltip is aligned within the series' pane.
         */
        relativeTo?: Highcharts.OptionsRelativeToValue;
        /**
         * (Highcharts) The vertical alignment of the fixed tooltip.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highcharts) X pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        x?: number;
        /**
         * (Highcharts) Y pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        y?: number;
    }
    /**
     * (Highcharts) A `waterfall` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `waterfall` series are defined in
     * plotOptions.waterfall.
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
     * You have to extend the `SeriesWaterfallOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesWaterfallOptions {
     * customProperty: string; }
     *
     */
    interface SeriesWaterfallOptions extends Highcharts.PlotWaterfallOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `waterfall` series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values
         * will be interpreted as `y` options. The `x` values will be
         * automatically calculated, either starting at 0 and incremented by 1,
         * or from `pointStart` and `pointInterval` given in the series options.
         * If the axis has categories, these will be used. Example: (see online
         * documentation for example)
         *
         * 2. An array of arrays with 2 values. In this case, the values
         * correspond to `x,y`. If the first value is a string, it is applied as
         * the name of the point, and the `x` value is inferred. (see online
         * documentation for example)
         *
         * 3. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<(number|[(number|string), (number|null)]|null|Highcharts.PointOptionsObject)>;
        /**
         * Not available
         */
        dataParser?: undefined;
        /**
         * Not available
         */
        dataURL?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "waterfall";
    }
}

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highstock) The styles for Chikou line
     */
    interface PlotIkhChikouLineOptions {
        styles?: Highcharts.PlotIkhChikouLineStylesOptions;
    }
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
    interface PlotIkhDataLabelsAnimationOptions {
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
    interface PlotIkhDataSortingOptions {
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
    interface PlotIkhKijunLineStylesOptions {
        /**
         * (Highstock) Color of the line.
         */
        lineColor?: Highcharts.ColorString;
        /**
         * (Highstock) Pixel width of the line.
         */
        lineWidth?: number;
    }
    /**
     * (Highstock) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotIkhOnPointConnectorOptions {
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
    interface PlotIkhOnPointPositionOptions {
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
     * (Highstock) Parameters used in calculation of regression series' points.
     */
    interface PlotIkhParamsOptions {
        index?: string;
        /**
         * (Highstock) The base period for indicator calculations. This is the
         * number of data points which are taken into account for the indicator
         * calculations.
         */
        period?: number;
        /**
         * (Highstock) The base period for Senkou Span B calculations
         */
        periodSenkouSpanB?: number;
        /**
         * (Highstock) The base period for Tenkan calculations.
         */
        periodTenkan?: number;
    }
    interface PlotIkhSenkouSpanAStylesOptions {
        /**
         * (Highstock) Color of the line.
         */
        lineColor?: Highcharts.ColorString;
        /**
         * (Highstock) Pixel width of the line.
         */
        lineWidth?: number;
    }
    interface PlotIkhSenkouSpanBStylesOptions {
        /**
         * (Highstock) Color of the line.
         */
        lineColor?: Highcharts.ColorString;
        /**
         * (Highstock) Pixel width of the line.
         */
        lineWidth?: number;
    }
    /**
     * (Highstock) The styles for Tenkan line
     */
    interface PlotIkhTenkanLineOptions {
        styles?: Highcharts.PlotIkhTenkanLineStylesOptions;
    }
    /**
     * (Highstock) Positioning options for fixed tooltip, taking effect only
     * when tooltip.fixed is `true`.
     */
    interface PlotIkhTooltipPositionOptions {
        /**
         * (Highstock) The horizontal alignment of the fixed tooltip.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highstock) What the fixed tooltip alignment should be relative to.
         *
         * The default, `pane`, means that it is aligned within the plot area
         * for that given series. If the tooltip is split (as default in Stock
         * charts), each partial tooltip is aligned within the series' pane.
         */
        relativeTo?: Highcharts.OptionsRelativeToValue;
        /**
         * (Highstock) The vertical alignment of the fixed tooltip.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highstock) X pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        x?: number;
        /**
         * (Highstock) Y pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        y?: number;
    }
}

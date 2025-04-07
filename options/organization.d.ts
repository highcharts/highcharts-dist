/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts) Point accessibility options for a series.
     */
    interface PlotOrganizationAccessibilityPointOptions {
        /**
         * (Highcharts) Date format to use for points on datetime axes when
         * describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highcharts) Formatter function to determine the date/time format
         * used with points on datetime axes when describing them to screen
         * reader users. Receives one argument, `point`, referring to the point
         * to describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts) Whether or not to describe points with the value `null`
         * to assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highcharts) A format string to use instead of the default for point
         * descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highcharts) Formatter function to use instead of the default for
         * point descriptions. Same as
         * `accessibility.point.descriptionFormatter`, but applies to a series
         * instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts) Decimals to use for the values in the point
         * descriptions. Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highcharts) Format to use for describing the values of data points
         * to assistive technology - including screen readers. The point context
         * is available as `{point}`.
         *
         * Other available context variables include `{index}`, `{value}`, and
         * `{xDescription}`.
         *
         * Additionally, the series name, annotation info, and description added
         * in `point.accessibility.description` is added by default if relevant.
         * To override this, use the accessibility.point.descriptionFormatter
         * option.
         */
        valueDescriptionFormat?: string;
        /**
         * (Highcharts) Prefix to add to the values in the point descriptions.
         * Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highcharts) Suffix to add to the values in the point descriptions.
         * Uses tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
    }
    interface PlotOrganizationDataLabelsLinkTextPathAttributesOptions {
        startOffset?: number;
        textAnchor?: string;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotOrganizationLabelStyleOptions {
        fontSize?: (number|string);
    }
    /**
     * (Highcharts) Set options on specific levels. Takes precedence over series
     * options, but not node and link options.
     */
    interface PlotOrganizationLevelsOptions {
        /**
         * (Highcharts) Can set `borderColor` on all nodes which lay on the same
         * level.
         */
        borderColor?: Highcharts.ColorString;
        /**
         * (Highcharts) Can set `borderWidth` on all nodes which lay on the same
         * level.
         */
        borderWidth?: number;
        /**
         * (Highcharts) Can set `color` on all nodes which lay on the same
         * level.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) Can set `colorByPoint` on all nodes which lay on the
         * same level.
         */
        colorByPoint?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Can set `dataLabels` on all
         * points which lay on the same level.
         */
        dataLabels?: (Highcharts.SeriesSankeyDataLabelsOptionsObject|Array<Highcharts.SeriesSankeyDataLabelsOptionsObject>);
        /**
         * (Highcharts) Decides which level takes effect from the options set in
         * the levels object.
         */
        level?: number;
        /**
         * (Highcharts) Can set `linkOpacity` on all points which lay on the
         * same level.
         */
        linkOpacity?: number;
        /**
         * (Highcharts) Can set `states` on all nodes and points which lay on
         * the same level.
         */
        states?: Highcharts.SeriesStatesOptionsObject;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotOrganizationOnPointConnectorOptions {
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
    interface PlotOrganizationOnPointPositionOptions {
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
    interface PlotOrganizationTooltipPositionOptions {
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
     * (Highcharts) Enable or disable the initial animation when a series is
     * displayed for the `dataLabels`. The animation can also be set as a
     * configuration object. Please note that this option only applies to the
     * initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesOrganizationDataDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
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
    interface SeriesOrganizationNodesDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
}

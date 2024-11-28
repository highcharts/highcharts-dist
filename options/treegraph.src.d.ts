/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Highcharts) Point accessibility options for a series.
     */
    interface PlotTreegraphAccessibilityPointOptions {
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
    /**
     * (Highcharts) CSS styles for the collapse button.
     *
     * In styled mode, the collapse button style is given in the
     * `.highcharts-collapse-button` class.
     */
    interface PlotTreegraphCollapseButtonStyleOptions {
        cursor?: string;
        fontSize?: number;
        fontWeight?: string;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Presentation attributes for the
     * text path.
     */
    interface PlotTreegraphDataLabelsLinkTextPathAttributesOptions {
        startOffset?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotTreegraphLabelStyleOptions {
        fontSize?: (number|string);
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
    interface PlotTreegraphLevelsDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Set options on specific levels. Takes precedence over series
     * options, but not point options.
     */
    interface PlotTreegraphLevelsOptions {
        /**
         * (Highcharts) Can set a `borderColor` on all points which lies on the
         * same level.
         */
        borderColor?: Highcharts.ColorString;
        /**
         * (Highcharts) Set the dash style of the border of all the point which
         * lies on the level. See plotOptions.scatter.dashStyle for possible
         * options.
         */
        borderDashStyle?: Highcharts.DashStyleValue;
        /**
         * (Highcharts) Can set the borderWidth on all points which lies on the
         * same level.
         */
        borderWidth?: number;
        /**
         * (Highcharts) Can set a color on all points which lies on the same
         * level.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) A configuration object to define how the color of a
         * child varies from the parent's color. The variation is distributed
         * among the children of node. For example when setting brightness, the
         * brightness change will range from the parent's original brightness on
         * the first child, to the amount set in the `to` setting on the last
         * node. This allows a gradient-like color scheme that sets children out
         * from each other while highlighting the grouping on treemaps and
         * sectors on sunburst charts.
         */
        colorVariation?: Highcharts.PlotTreegraphLevelsColorVariationOptions;
        /**
         * (Highcharts) Can set the options of dataLabels on each point which
         * lies on the level. plotOptions.treemap.dataLabels for possible
         * values.
         */
        dataLabels?: (Highcharts.PlotTreegraphLevelsDataLabelsOptions|Array<Highcharts.PlotTreegraphLevelsDataLabelsOptions>);
        /**
         * (Highcharts) Can set the layoutAlgorithm option on a specific level.
         */
        layoutAlgorithm?: Highcharts.OptionsLayoutAlgorithmValue;
        /**
         * (Highcharts) Can set the layoutStartingDirection option on a specific
         * level.
         */
        layoutStartingDirection?: Highcharts.OptionsLayoutStartingDirectionValue;
        /**
         * (Highcharts) Decides which level takes effect from the options set in
         * the levels object.
         */
        level?: number;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotTreegraphOnPointConnectorOptions {
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
    interface PlotTreegraphOnPointPositionOptions {
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
    interface SeriesTreegraphDataDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) A `treegraph` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `treegraph` series are defined in
     * plotOptions.treegraph.
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
     * You have to extend the `SeriesTreegraphOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesTreegraphOptions {
     * customProperty: string; }
     *
     */
    interface SeriesTreegraphOptions extends Highcharts.PlotTreegraphOptions, Highcharts.SeriesOptions {
        /**
         * Not available
         */
        allowDrillToNode?: undefined;
        /**
         * Not available
         */
        centerInCategory?: undefined;
        /**
         * Not available
         */
        curveFactor?: undefined;
        /**
         * (Highcharts) An array of data points for the series. For the
         * `treegraph` series type, points can be given in the following ways:
         *
         * 1. The array of arrays, with `keys` property, which defines how the
         * fields in array should be interpreted (see online documentation for
         * example)js data: [{ id: 'Category1' }, { id: 'Category1', parent:
         * 'Category2', }] ```
         */
        data?: Array<Highcharts.PointOptionsObject>;
        /**
         * Not available
         */
        layout?: undefined;
        /**
         * Not available
         */
        nodePadding?: undefined;
        /**
         * Not available
         */
        stack?: undefined;
        /**
         * Not available
         */
        traverseUpButton?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "treegraph";
        /**
         * Not available
         */
        xAxis?: undefined;
        /**
         * Not available
         */
        yAxis?: undefined;
    }
}

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts) Options applied to collapse Button. The collapse button is
     * the small button which indicates, that the node is collapsable.
     */
    interface PlotTreegraphCollapseButtonOptions {
        /**
         * (Highcharts) Whether the button should be visible.
         */
        enabled?: boolean;
        /**
         * (Highcharts) Height of the button.
         */
        height?: number;
        /**
         * (Highcharts) The line width of the button in pixels
         */
        lineWidth?: number;
        /**
         * (Highcharts) Whether the button should be visible only when the node
         * is hovered. When set to true, the button is hidden for nodes, which
         * are not collapsed, and shown for the collapsed ones.
         */
        onlyOnHover?: boolean;
        /**
         * (Highcharts) The symbol of the collapse button.
         */
        shape?: string;
        /**
         * (Highcharts) CSS styles for the collapse button.
         *
         * In styled mode, the collapse button style is given in the
         * `.highcharts-collapse-button` class.
         */
        style?: Highcharts.PlotTreegraphCollapseButtonStyleOptions;
        /**
         * (Highcharts) Width of the button.
         */
        width?: number;
        /**
         * (Highcharts) Offset of the button in the x direction.
         */
        x?: number;
        /**
         * (Highcharts) Offset of the button in the y direction.
         */
        y?: number;
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
    interface PlotTreegraphDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotTreegraphLabelStyleOptions {
        fontSize?: number;
        fontWeight?: string;
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
        color?: Highcharts.ColorType;
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
         * lies on the level. plotOptions.treegraph.dataLabels for possible
         * values.
         */
        dataLabels?: (Highcharts.SeriesTreegraphDataLabelsOptionsObject|Array<Highcharts.SeriesTreegraphDataLabelsOptionsObject>);
        /**
         * (Highcharts) Can set the group padding on a specific level. Overrides
         * the series option of the same name.
         */
        groupPadding?: number;
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
        /**
         * (Highcharts) Whether the `level` number is absolute, or relative to
         * the currently visible root. Overrides the series option of the same
         * name for this level.
         */
        levelIsConstant?: boolean;
    }
    /**
     * (Highcharts) Animation when hovering over the marker.
     */
    interface PlotTreegraphMarkerStatesHoverAnimationOptions {
        duration?: number;
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
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotTreegraphStatesHoverAnimationOptions {
        /**
         * (Highcharts, Highstock) The duration of the hover animation in
         * milliseconds. By default the hover state animates quickly in, and
         * slowly back to normal.
         */
        duration?: number;
    }
    /**
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotTreegraphStatesSelectAnimationOptions {
        /**
         * (Highcharts, Highstock) The duration of the hover animation in
         * milliseconds. By default the hover state animates quickly in, and
         * slowly back to normal.
         */
        duration?: number;
    }
    /**
     * (Highcharts, Highstock, Highmaps) Options for the tooltip header when
     * tooltip.split is enabled. The header is the box containing the X value in
     * a split tooltip.
     */
    interface PlotTreegraphTooltipHeaderOptions {
        /**
         * (Highcharts, Highstock, Highmaps) Background color for the tooltip
         * header when tooltip.split is enabled.
         */
        backgroundColor?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps) Border color for the tooltip header
         * when tooltip.split is enabled.
         */
        borderColor?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps) The width of the border for the
         * tooltip header when tooltip.split is enabled.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highstock, Highmaps) Distance between the plot area and
         * the header (except the chevron) in a split tooltip, in pixels. The
         * default value makes the header text align with the axis labels.
         */
        distance?: number;
        /**
         * (Highcharts, Highstock, Highmaps) The name of a symbol to use for the
         * border around the tooltip header. Applies only when tooltip.split is
         * enabled.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
         * series.marker.symbol.
         */
        shape?: string;
        /**
         * (Highcharts, Highstock, Highmaps) CSS styles for the tooltip header.
         * The default is `{ fontSize: '1em' }`, ensuring that the header text
         * is the same size as the axis labels.
         */
        style?: object;
    }
    /**
     * (Highcharts) Options for the button appearing when traversing down in a
     * treemap.
     *
     * Since v9.3.3 the `traverseUpButton` is replaced by `breadcrumbs`.
     *
     * @deprecated 9.3.3
     */
    interface PlotTreegraphTraverseUpButtonOptions {
        /**
         * (Highcharts) The position of the button.
         *
         * @deprecated 9.3.3
         */
        position?: Highcharts.PlotTreegraphTraverseUpButtonPositionOptions;
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
     * (Highcharts, Highmaps) Animation when hovering over the marker.
     */
    interface SeriesTreegraphDataMarkerStatesHoverAnimationOptions {
        duration?: number;
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
     * - type option should always be set, otherwise a broad set of unsupported
     * options is allowed.
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
        headers?: undefined;
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

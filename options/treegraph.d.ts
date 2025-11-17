/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts) Options applied to collapse Button. The collape button is
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
    interface PlotTreegraphDataLabelsStyleOptions {
        textOverflow?: string;
    }
    /**
     * (Highcharts) A configuration object to define how the color of a child
     * varies from the parent's color. The variation is distributed among the
     * children of node. For example when setting brightness, the brightness
     * change will range from the parent's original brightness on the first
     * child, to the amount set in the `to` setting on the last node. This
     * allows a gradient-like color scheme that sets children out from each
     * other while highlighting the grouping on treemaps and sectors on sunburst
     * charts.
     */
    interface PlotTreegraphLevelsColorVariationOptions {
        /**
         * (Highcharts) The key of a color variation. Currently supports
         * `brightness` only.
         */
        key?: "brightness";
        /**
         * (Highcharts) The ending value of a color variation. The last sibling
         * will receive this value.
         */
        to?: number;
    }
    /**
     * (Highcharts) Presentation attributes for the text path.
     */
    interface PlotTreegraphLevelsDataLabelsLinkTextPathAttributesOptions {
        startOffset?: number;
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
         * lies on the level. plotOptions.treegraph.dataLabels for possible
         * values.
         */
        dataLabels?: (Highcharts.SeriesTreegraphDataLabelsOptionsObject|Array<Highcharts.SeriesTreegraphDataLabelsOptionsObject>);
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
     * (Highcharts, Highstock, Highmaps) Positioning options for fixed tooltip,
     * taking effect only when tooltip.fixed is `true`.
     */
    interface PlotTreegraphTooltipPositionOptions {
        /**
         * (Highcharts, Highstock, Highmaps) The horizontal alignment of the
         * fixed tooltip.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highcharts, Highstock, Highmaps) What the fixed tooltip alignment
         * should be relative to.
         *
         * The default, `pane`, means that it is aligned within the plot area
         * for that given series. If the tooltip is split (as default in Stock
         * charts), each partial tooltip is aligned within the series' pane.
         */
        relativeTo?: Highcharts.OptionsRelativeToValue;
        /**
         * (Highcharts, Highstock, Highmaps) The vertical alignment of the fixed
         * tooltip.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highcharts, Highstock, Highmaps) X pixel offset from the given
         * position. Can be used to shy away from axis lines, grid lines etc to
         * avoid the tooltip overlapping other elements.
         */
        x?: number;
        /**
         * (Highcharts, Highstock, Highmaps) Y pixel offset from the given
         * position. Can be used to shy away from axis lines, grid lines etc to
         * avoid the tooltip overlapping other elements.
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

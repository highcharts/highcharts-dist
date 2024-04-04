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
    interface PlotSankeyDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Set options on specific levels. Takes precedence over series
     * options, but not node and link options.
     */
    interface PlotSankeyLevelsOptions {
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
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotSankeyOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotSankeyOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highcharts) The `id` of the point that we connect the series to.
         * Only points with a given `plotX` and `plotY` values and map points
         * are valid.
         */
        id?: string;
        /**
         * (Highcharts) Options allowing to set a position and an offset of the
         * series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotSankeyOnPointPositionOptions);
    }
    /**
     * (Highcharts) A sankey diagram is a type of flow diagram, in which the
     * width of the link between two nodes is shown proportionally to the flow
     * quantity.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `sankey` series are defined in plotOptions.sankey.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     */
    interface PlotSankeyOptions {
        /**
         * (Highcharts) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highcharts) Allow this series' points to be selected by clicking on
         * the graphic (columns, point markers, pie slices, map areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Highcharts) Enable or disable the initial animation when a series is
         * displayed. The animation can also be set as a configuration object.
         * Please note that this option only applies to the initial animation of
         * the series itself. For other animations, see chart.animation and the
         * animation parameter under the API methods. The following properties
         * are supported:
         *
         * - `defer`: The animation delay time in milliseconds.
         *
         * - `duration`: The duration of the animation in milliseconds.
         * (Defaults to `1000`)
         *
         * - `easing`: Can be a string reference to an easing function set on
         * the `Math` object or a function. See the _Custom easing function_
         * demo below. (Defaults to `easeInOutSine`)
         *
         * Due to poor performance, animation is disabled in old IE browsers for
         * several chart types.
         */
        animation?: (boolean|Highcharts.AnimationOptionsObject);
        /**
         * (Highcharts, Highstock, Gantt) The color of the border surrounding
         * each column or bar.
         *
         * In styled mode, the border stroke can be set with the
         * `.highcharts-point` rule.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Gantt) The width of the border surrounding
         * each column or bar. Defaults to `1` when there is room for a border,
         * but to `0` when the columns are so dense that a border would cover
         * the next column.
         *
         * In styled mode, the stroke width can be set with the
         * `.highcharts-point` rule.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highstock, Gantt) When `true`, the columns will center
         * in the category, ignoring null or missing points. When `false`, space
         * will be reserved for null or missing points.
         */
        centerInCategory?: boolean;
        /**
         * (Highcharts) An additional class name to apply to the series'
         * graphical elements. This option does not replace default class names
         * of the graphical element. Changes to the series' color will also be
         * reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highcharts) Disable this option to allow series rendering in the
         * whole plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highcharts) The main color of the series. In line type series it
         * applies to the line and the point markers unless otherwise specified.
         * In bar type series it applies to the bars unless a color is specified
         * per point. The default value is pulled from the `options.colors`
         * array.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Gantt) When using automatic point colors
         * pulled from the global colors or series-specific
         * plotOptions.column.colors collections, this option determines whether
         * the chart should receive one color per series or one color per point.
         *
         * In styled mode, the `colors` or `series.colors` arrays are not
         * supported, and instead this option gives the points individual color
         * class names on the form `highcharts-color-{n}`.
         */
        colorByPoint?: boolean;
        /**
         * (Highcharts) Styled mode only. A specific color index to use for the
         * series, so its graphic representations are given the class name
         * `highcharts-color-{n}`.
         *
         * Since v11, CSS variables on the form `--highcharts-color-{n}` make
         * changing the color scheme very convenient.
         */
        colorIndex?: number;
        /**
         * (Highcharts, Highstock, Gantt) A series specific or series type
         * specific color set to apply instead of the global colors when
         * colorByPoint is true.
         */
        colors?: Array<(Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject)>;
        /**
         * (Highcharts) You can set the cursor to "pointer" if you have click
         * events attached to the series, to signal to the user that the points
         * and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highcharts) Higher numbers makes the links in a sankey diagram or
         * dependency wheelrender more curved. A `curveFactor` of 0 makes the
         * lines straight.
         */
        curveFactor?: number;
        /**
         * (Highcharts) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highcharts) Name of the dash style to use for the graph, or for some
         * series types the outline of each shape.
         *
         * In styled mode, the stroke dash-array can be set with the same
         * classes as listed under series.color.
         */
        dashStyle?: Highcharts.DashStyleValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the data labels
         * appearing on top of the nodes and links. For sankey charts, data
         * labels are visible for the nodes by default, but hidden for links.
         * This is controlled by modifying the `nodeFormat`, and the `format`
         * that applies to links and is an empty string by default.
         */
        dataLabels?: (Highcharts.SeriesSankeyDataLabelsOptionsObject|Array<Highcharts.SeriesSankeyDataLabelsOptionsObject>);
        /**
         * (Highcharts) A description of the series to add to the screen reader
         * information about the series.
         */
        description?: string;
        /**
         * (Highcharts) Enable or disable the mouse tracking for a specific
         * series. This includes point tooltips and click events on graphs and
         * points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highstock, Gantt) Whether to use the Y extremes of the
         * total chart width or only the zoomed area when zooming in on parts of
         * the X axis. By default, the Y axis adjusts to the min and max of the
         * visible data. Cartesian series only.
         */
        getExtremesFromAll?: boolean;
        /**
         * (Highcharts) Highlight only the hovered point and fade the remaining
         * points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highcharts) When set to `false` will prevent the series data from
         * being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highcharts) An array specifying which option maps to which key in
         * the data point array. This makes it convenient to work with
         * unstructured data arrays from different sources.
         */
        keys?: Array<string>;
        /**
         * (Highcharts, Highstock, Gantt) Series labels are placed as close to
         * the series as possible in a natural way, seeking to avoid other
         * series. The goal of this feature is to make the chart more easily
         * readable, like if a human designer placed the labels in the optimal
         * position.
         *
         * The series labels currently work with series types having a `graph`
         * or an `area`.
         */
        label?: Highcharts.SeriesLabelOptionsObject;
        /**
         * (Highcharts) What type of legend symbol to render for this series.
         * Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts) Set options on specific levels. Takes precedence over
         * series options, but not node and link options.
         */
        levels?: Array<Highcharts.PlotSankeyLevelsOptions>;
        /**
         * (Highcharts) Determines color mode for sankey links. Available
         * options:
         *
         * - `from` color of the sankey link will be the same as the 'from node'
         *
         * - `gradient` color of the sankey link will be set to gradient between
         * colors of 'from node' and 'to node'
         *
         * - `to` color of the sankey link will be same as the 'to node'.
         */
        linkColorMode?: ('from'|'gradient'|'to');
        /**
         * (Highcharts, Highstock, Gantt) The id of another series to link to.
         * Additionally, the value can be ":previous" to link to the previous
         * series. When two series are linked, only the first one appears in the
         * legend. Toggling the visibility of this also toggles the linked
         * series.
         *
         * If master series uses data sorting and linked series does not have
         * its own sorting definition, the linked series will be sorted in the
         * same order as the master one.
         */
        linkedTo?: string;
        /**
         * (Highcharts) Opacity for the links between nodes in the sankey
         * diagram.
         */
        linkOpacity?: number;
        /**
         * (Highcharts) The minimal width for a line of a sankey. By default, 0
         * values are not shown.
         */
        minLinkWidth?: number;
        /**
         * (Highcharts) Determines which side of the chart the nodes are to be
         * aligned to. When the chart is inverted, `top` aligns to the left and
         * `bottom` to the right.
         */
        nodeAlignment?: ('bottom'|'center'|'top');
        /**
         * (Highcharts) The distance between nodes in a sankey diagram in the
         * longitudinal direction. The longitudinal direction means the
         * direction that the chart flows - in a horizontal chart the distance
         * is horizontal, in an inverted chart (vertical), the distance is
         * vertical.
         *
         * If a number is given, it denotes pixels. If a percentage string is
         * given, the distance is a percentage of the rendered node width. A
         * `nodeDistance` of `100%` will render equal widths for the nodes and
         * the gaps between them.
         *
         * This option applies only when the `nodeWidth` option is `auto`,
         * making the node width respond to the number of columns.
         */
        nodeDistance?: (number|string);
        /**
         * (Highcharts) The padding between nodes in a sankey diagram or
         * dependency wheel, in pixels. For sankey charts, this applies to the
         * nodes of the same column, so vertical distance by default, or
         * horizontal distance in an inverted (vertical) sankey.
         *
         * If the number of nodes is so great that it is impossible to lay them
         * out within the plot area with the given `nodePadding`, they will be
         * rendered with a smaller padding as a strategy to avoid overflow.
         */
        nodePadding?: number;
        /**
         * (Highcharts) The pixel width of each node in a sankey diagram or
         * dependency wheel, or the height in case the chart is inverted.
         *
         * Can be a number or a percentage string.
         *
         * Sankey series also support setting it to `auto`. With this setting,
         * the nodes are sized to fill up the plot area in the longitudinal
         * direction, regardless of the number of levels.
         */
        nodeWidth?: (number|string);
        /**
         * (Highcharts) Options for the _Series on point_ feature. Only `pie`
         * and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotSankeyOnPointOptions);
        /**
         * (Highcharts) Opacity for the nodes in the sankey diagram.
         */
        opacity?: number;
        /**
         * (Highcharts) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts) Same as accessibility.point.descriptionFormat, but for
         * an individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts) Same as accessibility.series.descriptionFormatter, but
         * for an individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highcharts, Highstock) When true, X values in the data set are
         * relative to the current `pointStart`, `pointInterval` and
         * `pointIntervalUnit` settings. This allows compression of the data for
         * datasets with irregular X values.
         *
         * The real X values are computed on the formula `f(x) = ax + b`, where
         * `a` is the `pointInterval` (optionally with a time unit given by
         * `pointIntervalUnit`), and `b` is the `pointStart`.
         */
        relativeXValue?: boolean;
        /**
         * (Highcharts) Whether to select the series initially. If
         * `showCheckbox` is true, the checkbox next to the series name in the
         * legend will be checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highcharts) If true, a checkbox is displayed next to the legend item
         * to allow selecting the series. The state of the checkbox is
         * determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts) Whether to display this particular series or series type
         * in the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highcharts) If set to `true`, the accessibility module will skip
         * past the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highcharts) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highcharts) Sticky tracking of mouse events. When true, the
         * `mouseOut` event on a series isn't triggered until the mouse moves
         * over another series, or out of the plot area. When false, the
         * `mouseOut` event on a series is triggered when the mouse leaves the
         * area around the series' graph or markers. This also implies the
         * tooltip when not shared. When `stickyTracking` is false and
         * `tooltip.shared` is false, the tooltip will be hidden when moving the
         * mouse between series. Defaults to true for line and area type series,
         * but to false for columns, pies etc.
         *
         * **Note:** The boost module will force this option because of
         * technical limitations.
         */
        stickyTracking?: boolean;
        /**
         * (Highcharts) A configuration object for the tooltip rendering of each
         * single series. Properties are inherited from tooltip, but only the
         * following properties can be defined on a series level.
         */
        tooltip?: Highcharts.SeriesTooltipOptionsObject;
        /**
         * (Highcharts, Highstock, Gantt) When a series contains a data array
         * that is longer than this, only one dimensional arrays of numbers, or
         * two dimensional arrays with x and y values are allowed. Also, only
         * the first point is tested, and the rest are assumed to be the same
         * format. This saves expensive data checking and indexing in long
         * series. Set it to `0` disable.
         *
         * Note: In boost mode turbo threshold is forced. Only array of numbers
         * or two dimensional arrays are allowed.
         */
        turboThreshold?: number;
        /**
         * (Highcharts) Set the initial visibility of the series.
         */
        visible?: boolean;
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
    interface SeriesSankeyNodesDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) A `sankey` series. If the type option is not specified, it
     * is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `sankey` series are defined in plotOptions.sankey.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * You have to extend the `SeriesSankeyOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesSankeyOptions {
     * customProperty: string; }
     *
     */
    interface SeriesSankeyOptions extends Highcharts.PlotSankeyOptions, Highcharts.SeriesOptions {
        /**
         * Not available
         */
        borderRadius?: undefined;
        /**
         * (Highcharts) An array of data points for the series. For the `sankey`
         * series type, points can be given in the following way:
         *
         * An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         *
         *  When you provide the data as tuples, the keys option has to be set
         * as well. (see online documentation for example)
         */
        data?: (Array<Array<(string|number)>>|Array<Highcharts.SeriesSankeyPointOptionsObject>);
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
         * Not available
         */
        grouping?: undefined;
        /**
         * Not available
         */
        groupPadding?: undefined;
        /**
         * Not available
         */
        groupZPadding?: undefined;
        /**
         * Not available
         */
        maxPointWidth?: undefined;
        /**
         * (Highcharts) A collection of options for the individual nodes. The
         * nodes in a sankey diagram are auto-generated instances of
         * `Highcharts.Point`, but options can be applied here and linked by the
         * `id`.
         */
        nodes?: Array<Highcharts.SeriesSankeyNodesOptionsObject>;
        /**
         * Not available
         */
        pointPadding?: undefined;
        /**
         * Not available
         */
        pointWidth?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "sankey";
    }
}

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
     * (Highcharts) Animation when hovering over the marker.
     */
    interface PlotTreegraphMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotTreegraphOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotTreegraphOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotTreegraphOnPointPositionOptions);
    }
    /**
     * (Highcharts) A treegraph series is a diagram, which shows a relation
     * between ancestors and descendants with a clear parent - child relation.
     * The best examples of the dataStructures, which best reflect this chart
     * are e.g. genealogy tree or directory structure.
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
     */
    interface PlotTreegraphOptions {
        /**
         * (Highcharts) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highcharts) When enabled the user can click on a point which is a
         * parent and zoom in on its children. Deprecated and replaced by
         * allowTraversingTree.
         *
         * @deprecated 7.0.3
         */
        allowDrillToNode?: boolean;
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
         * (Highcharts) For some series, there is a limit that shuts down
         * animation by default when the total number of points in the chart is
         * too high. For example, for a column chart and its derivatives,
         * animation does not run if there is more than 250 points totally. To
         * disable this cap, set `animationLimit` to `Infinity`. This option
         * works if animation is fired on individual points, not on a group of
         * points like e.g. during the initial animation.
         */
        animationLimit?: number;
        /**
         * (Highcharts) Sets the color blending in the boost module.
         */
        boostBlending?: Highcharts.OptionsBoostBlendingValue;
        /**
         * (Highcharts) Set the point threshold for when a series should enter
         * boost mode.
         *
         * Setting it to e.g. 2000 will cause the series to enter boost mode
         * when there are 2000 or more points in the series.
         *
         * To disable boosting on the series, set the `boostThreshold` to 0.
         * Setting it to 1 will force boosting.
         *
         * Note that the cropThreshold also affects this setting. When zooming
         * in on a series that has fewer points than the `cropThreshold`, all
         * points are rendered although outside the visible plot area, and the
         * `boostThreshold` won't take effect.
         */
        boostThreshold?: number;
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
         * (Highcharts) Options applied to collapse Button. The collapse button
         * is the small button which indicates, that the node is collapsable.
         */
        collapseButton?: Highcharts.PlotTreegraphCollapseButtonOptions;
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
        color?: Highcharts.ColorType;
        /**
         * (Highcharts) When using automatic point colors pulled from the
         * `options.colors` collection, this option determines whether the chart
         * should receive one color per series or one color per point.
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
         * (Highcharts) A series specific or series type specific color set to
         * apply instead of the global colors when colorByPoint is true.
         */
        colors?: Array<Highcharts.ColorType>;
        /**
         * (Highcharts, Highstock, Gantt) When true, each point or column edge
         * is rounded to its nearest pixel in order to render sharp on screen.
         * In some cases, when there are a lot of densely packed columns, this
         * leads to visible difference in column widths or distance between
         * columns. In these cases, setting `crisp` to `false` may look better,
         * even though each column is rendered blurry.
         */
        crisp?: boolean;
        /**
         * (Highcharts) When the series contains less points than the crop
         * threshold, all points are drawn, even if the points fall outside the
         * visible plot area at the current zoom. The advantage of drawing all
         * points (including markers and columns), is that animation is
         * performed on updates. On the other hand, when the series contains
         * more points than the crop threshold, the series data is cropped to
         * only contain points that fall within the plot area. The advantage of
         * cropping away invisible points is to increase performance on large
         * series.
         */
        cropThreshold?: number;
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
         * (Highcharts) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the data labels
         * appearing on top of the nodes and links. For treegraph charts, data
         * labels are visible for the nodes by default, but hidden for links.
         * This is controlled by modifying the `nodeFormat`, and the `format`
         * that applies to links and is an empty string by default.
         */
        dataLabels?: (Highcharts.SeriesTreegraphDataLabelsOptionsObject|Array<Highcharts.SeriesTreegraphDataLabelsOptionsObject>);
        /**
         * (Highcharts) The mapping between the data table and the series data
         * points. This is used in conjunction with the `dataTable` option (on
         * chart or series level) to map columns from the data table to the
         * properties of the data points. The keys of the `dataMapping` object
         * correspond to the properties of the data points (e.g. `x`, `y`,
         * `name`), and the values are objects that specify which column from
         * which data table to use for that property.
         *
         * The keys can also be nested paths, for example `dataLabel.format`, to
         * map to nested properties of the data points.
         *
         * The values can also be strings, in which case they are interpreted as
         * column id's from the first data table.
         *
         * A typical use case is that multiple series share a common column,
         * like `name` or `x`. In this case, to avoid repetition, the common
         * column can be applied in `plotOptions.series.dataMapping` and the
         * individual series can specify only the columns that are unique to
         * them.
         *
         * The series name defaults to the column ID of the main data column in
         * the mapping. The main data column is typically the `y` data for
         * cartesian series, or `value` for map series. For example, if the
         * mapping is `{ y: 'Cost' }`, the series name will be `Cost`. (see
         * online documentation for example)
         *
         * If the columns of the DataTable have keys matching the series keys,
         * the data mapping is not necessary. For example, this DataTable will
         * connect directly to the series' `x` and `y` keys: (see online
         * documentation for example)
         */
        dataMapping?: Highcharts.DataMappingOptionsObject;
        /**
         * (Highcharts) Deprecated. Use
         * plotOptions.series.accessibility.description instead.
         *
         * A description of the series to add to the screen reader information
         * about the series.
         *
         * @deprecated 8.0.0
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
         * (Highcharts) Whether the treegraph series should fill the entire plot
         * area in the X axis direction, even when there are collapsed points.
         */
        fillSpace?: boolean;
        /**
         * (Highcharts) Determines whether the series should look for the
         * nearest point in both dimensions or just the x-dimension when
         * hovering the series. Defaults to `'xy'` for scatter series and `'x'`
         * for most other series. If the data has duplicate x-values, it is
         * recommended to set this to `'xy'` to allow hovering over all points.
         *
         * Applies only to series types using nearest neighbor search (not
         * direct hover) for tooltip.
         */
        findNearestPointBy?: Highcharts.OptionsFindNearestPointByValue;
        /**
         * (Highcharts, Highstock, Gantt) Whether to use the Y extremes of the
         * total chart width or only the zoomed area when zooming in on parts of
         * the X axis. By default, the Y axis adjusts to the min and max of the
         * visible data. Cartesian series only.
         */
        getExtremesFromAll?: boolean;
        /**
         * (Highcharts) Group padding for parent elements in terms of pixels.
         * See also the `nodeSizeBy` option that controls how the leaf nodes'
         * size is affected by the padding.
         */
        groupPadding?: number;
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
         * series options, but not point options.
         */
        levels?: Array<Highcharts.PlotTreegraphLevelsOptions>;
        link?: Highcharts.PlotTreegraphLinkOptions;
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
         *
         * If a `compare` value is not set on a linked series, it will be
         * inherited from the parent series.
         */
        linkedTo?: string;
        /**
         * (Highcharts) Options for the point markers of line and scatter-like
         * series. Properties like `fillColor`, `lineColor` and `lineWidth`
         * define the visual appearance of the markers. The `symbol` option
         * defines the shape. Other series types, like column series, don't have
         * markers, but have visual options on the series level instead.
         *
         * In styled mode, the markers can be styled with the
         * `.highcharts-point`, `.highcharts-point-hover` and
         * `.highcharts-point-select` class names.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts) The distance between nodes in a tree graph in the
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
         * (Highcharts) Experimental. How to set the size of child nodes when a
         * header or padding is present. When `leaf`, the group is expanded to
         * make room for headers and padding in order to preserve the relative
         * sizes between leaves. When `group`, the leaves are naïvely fit into
         * the remaining area after the header and padding are subtracted.
         */
        nodeSizeBy?: Highcharts.OptionsNodeSizeByValue;
        /**
         * (Highcharts) The pixel width of each node in a, or the height in case
         * the chart is inverted. For tree graphs, the node width is only
         * applied if the marker symbol is `rect`, otherwise the `marker` sizing
         * options apply.
         *
         * Can be a number or a percentage string, or `auto`. If `auto`, the
         * nodes are sized to fill up the plot area in the longitudinal
         * direction, regardless of the number of levels.
         */
        nodeWidth?: (number|string);
        /**
         * (Highcharts, Highstock) Whether or not data-points with the value of
         * `null` should be interactive. When this is set to `true`, tooltips
         * may highlight these points, and this option also enables keyboard
         * navigation for such points. Format options for such points include
         * `nullFormat` and `nullFormatter`. Works for these series: `line`,
         * `spline`, `area`, `area-spline`, `column`, `bar`, and `timeline`.
         */
        nullInteraction?: (boolean|undefined);
        /**
         * (Highcharts) Options for the _Series on point_ feature. Only `pie`
         * and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotTreegraphOnPointOptions);
        /**
         * (Highcharts) The opacity of grouped points in treemap. When a point
         * has children, the group point is covering the children, and is given
         * this opacity. The visibility of the children is determined by the
         * opacity.
         */
        opacity?: number;
        /**
         * (Highcharts) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts) Deprecated. Use
         * series.accessibility.point.descriptionFormat instead.
         *
         * Same as accessibility.point.descriptionFormat, but for an individual
         * series. Overrides the chart wide configuration.
         *
         * @deprecated 12.6.0
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts) Deprecated. Use
         * series.accessibility.point.descriptionFormatter instead.
         *
         * Same as accessibility.series.descriptionFormatter, but for an
         * individual series. Overrides the chart wide configuration.
         *
         * @deprecated 8.0.0
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highcharts, Highstock, Gantt) If no x values are given for the
         * points in a series, `pointInterval` defines the interval of the x
         * values. For example, if a series contains one value every decade
         * starting from year 0, set `pointInterval` to `10`. In true `datetime`
         * axes, the `pointInterval` is set in milliseconds.
         *
         * It can be also be combined with `pointIntervalUnit` to draw irregular
         * time intervals.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point, and the `pointInterval` is added x times to the `pointStart`
         * setting.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         */
        pointInterval?: number;
        /**
         * (Highcharts, Highstock, Gantt) On datetime series, this allows for
         * setting the pointInterval to irregular time units, `day`, `month` and
         * `year`. A day is usually the same as 24 hours, but
         * `pointIntervalUnit` also takes the DST crossover into consideration
         * when dealing with local time. Combine this option with
         * `pointInterval` to draw weeks, quarters, 6 months, 10 years etc.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         */
        pointIntervalUnit?: Highcharts.OptionsPointIntervalUnitValue;
        /**
         * (Highcharts, Highstock, Gantt) If no x values are given for the
         * points in a series, `pointStart` defines on what value to start. For
         * example, if a series contains one yearly value starting from 1945,
         * set `pointStart` to 1945.
         *
         * The `pointStart` setting can be a number, or a datetime string that
         * is parsed according to the `time.timezone` setting.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point. The x value from the point options is multiplied by
         * `pointInterval` and added to `pointStart` to produce a modified x
         * value.
         */
        pointStart?: (number|string);
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
         * (Highcharts) Flips the positions of the nodes of a treegraph along
         * the horizontal axis (vertical if chart is inverted).
         */
        reversed?: boolean;
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
         * (Highcharts) Whether to display this series type or specific series
         * item in the legend.
         */
        showInLegend?: boolean;
        /**
         * (Highcharts) Deprecated. Use series.accessibility.keyboardNavigation
         * instead.
         *
         * If set to `true`, the accessibility module will skip past the points
         * in this series for keyboard navigation.
         *
         * @deprecated 8.0.0
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highcharts, Highstock) When this is true, the series will not cause
         * the Y axis to cross the zero plane (or threshold option) unless the
         * data actually crosses the plane.
         *
         * For example, if `softThreshold` is `false`, a series of 0, 1, 2, 3
         * will make the Y axis show negative values according to the
         * `minPadding` option. If `softThreshold` is `true`, the Y axis starts
         * at 0.
         */
        softThreshold?: boolean;
        /**
         * (Highcharts) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highcharts, Highstock) Whether to stack the values of each series on
         * top of each other. Possible values are null to disable, `"normal"` to
         * stack by value or `"percent"`.
         *
         * When stacking is enabled, data must be sorted in ascending X order.
         *
         * Some stacking options are related to specific series types. In the
         * streamgraph series type, the stacking option is set to `"stream"`.
         * The second one is `"overlap"`, which only applies to waterfall
         * series.
         */
        stacking?: Highcharts.OptionsStackingValue;
        /**
         * (Highcharts) A wrapper object for all the series options in specific
         * states.
         */
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highcharts, Highstock) Whether to apply steps to the line. Possible
         * values are `left`, `center` and `right`.
         */
        step?: Highcharts.OptionsStepValue;
        /**
         * (Highcharts, Highstock, Highmaps) Sticky tracking of mouse events.
         * When true, the `mouseOut` event on a series isn't triggered until the
         * mouse moves over another series, or out of the plot area. When false,
         * the `mouseOut` event on a series is triggered when the mouse leaves
         * the area around the series' graph or markers. This also implies the
         * tooltip. When `stickyTracking` is false and `tooltip.shared` is
         * false, the tooltip will be hidden when moving the mouse between
         * series.
         */
        stickyTracking?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps) A configuration object for the
         * tooltip rendering of each single series. Properties are inherited
         * from tooltip. Overridable properties are `headerFormat`,
         * `pointFormat`, `yDecimals`, `xDateFormat`, `yPrefix` and `ySuffix`.
         * Unlike other series, in a scatter plot the series.name by default
         * shows in the headerFormat and point.x and point.y in the pointFormat.
         */
        tooltip?: Highcharts.SeriesTooltipOptionsObject;
        /**
         * (Highcharts) This option enables automatic traversing to the last
         * child level upon node interaction. This feature simplifies navigation
         * by immediately focusing on the deepest layer of the data structure
         * without intermediate steps.
         */
        traverseToLeaf?: boolean;
        /**
         * (Highcharts) Options for the button appearing when traversing down in
         * a treemap.
         *
         * Since v9.3.3 the `traverseUpButton` is replaced by `breadcrumbs`.
         *
         * @deprecated 9.3.3
         */
        traverseUpButton?: Highcharts.PlotTreegraphTraverseUpButtonOptions;
        /**
         * (Highcharts, Highstock, Gantt) When a series contains a `data` array
         * that is longer than this, the Series class looks for data
         * configurations of plain numbers or arrays of numbers. The first and
         * last valid points are checked. If found, the rest of the data is
         * assumed to be the same. This saves expensive data checking and
         * indexing in long series, and makes data-heavy charts render faster.
         *
         * Set it to `0` disable.
         *
         * Note:
         *
         * - In boost mode turbo threshold is forced. Only array of numbers or
         * two dimensional arrays are allowed.
         *
         * - In version 11.4.3 and earlier, if object configurations were passed
         * beyond the turbo threshold, a warning was logged in the console and
         * the data series didn't render.
         */
        turboThreshold?: number;
        /**
         * (Highcharts) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highcharts) Whether to zoom non-cartesian series. If `chart.zooming`
         * is set, the option allows to disable zooming on an individual
         * non-cartesian series. By default zooming is enabled for all series.
         *
         * **Note**: This option works only for non-cartesian series.
         */
        zoomEnabled?: boolean;
    }
    /**
     * (Highcharts) Animation when not hovering over the marker.
     */
    interface PlotTreegraphStatesInactiveAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) For series on datetime axes, the date
     * format in the tooltip's header will by default be guessed based on the
     * closest data points. This member gives the default string representations
     * used for each unit. For an overview of the string or object
     * configuration, see dateFormat.
     */
    interface PlotTreegraphTooltipDateTimeLabelFormatsOptions {
        day?: string;
        hour?: string;
        millisecond?: string;
        minute?: string;
        month?: string;
        second?: string;
        week?: string;
        year?: string;
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
     * (Highcharts) The position of the button.
     *
     * @deprecated 9.3.3
     */
    interface PlotTreegraphTraverseUpButtonPositionOptions {
        /**
         * (Highcharts) Horizontal alignment of the button.
         *
         * @deprecated 9.3.3
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highcharts) Vertical alignment of the button.
         *
         * @deprecated 9.3.3
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highcharts) Horizontal offset of the button.
         *
         * @deprecated 9.3.3
         */
        x?: number;
        /**
         * (Highcharts) Vertical offset of the button.
         *
         * @deprecated 9.3.3
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
     * (Highcharts, Highmaps) Animation when hovering over the marker.
     */
    interface SeriesTreegraphDataMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
}

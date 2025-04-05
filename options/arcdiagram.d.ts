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
    interface PlotArcdiagramAccessibilityPointOptions {
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
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotArcdiagramLabelStyleOptions {
        fontSize?: (number|string);
    }
    /**
     * (Highcharts) Set options on specific levels. Takes precedence over series
     * options, but not node and link options.
     */
    interface PlotArcdiagramLevelsOptions {
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
    interface PlotArcdiagramOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotArcdiagramOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotArcdiagramOnPointPositionOptions);
    }
    /**
     * (Highcharts) Arc diagram series is a chart drawing style in which the
     * vertices of the chart are positioned along a line on the Euclidean plane
     * and the edges are drawn as a semicircle in one of the two half-planes
     * delimited by the line, or as smooth curves formed by sequences of
     * semicircles.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `arcdiagram` series are defined in
     * plotOptions.arcdiagram.
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
     */
    interface PlotArcdiagramOptions {
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
         * (Highcharts) The option to center links rather than position them one
         * after another
         */
        centeredLinks?: boolean;
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
         * appearing on top of the nodes and links. For arc diagram charts, data
         * labels are visible for the nodes by default, but hidden for links.
         * This is controlled by modifying the `nodeFormat`, and the `format`
         * that applies to links and is an empty string by default.
         */
        dataLabels?: (Highcharts.SeriesArcDiagramDataLabelsOptionsObject|Array<Highcharts.SeriesArcDiagramDataLabelsOptionsObject>);
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
         * (Highcharts) Whether nodes with different values should have the same
         * size. If set to true, all nodes are calculated based on the
         * `nodePadding` and current `plotArea`. It is possible to override it
         * using the `marker.radius` option.
         */
        equalNodes?: boolean;
        /**
         * (Highcharts) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
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
        levels?: Array<Highcharts.PlotArcdiagramLevelsOptions>;
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
         * (Highcharts) The minimal width for a line of a sankey. By default, 0
         * values are not shown.
         */
        minLinkWidth?: number;
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
         * (Highcharts, Highstock) Whether or not data-points with the value of
         * `null` should be interactive. When this is set to `true`, tooltips
         * may highlight these points, and this option also enables keyboard
         * navigation for such points. Format options for such points include
         * `nullFormat` and `nullFormater`. Works for these series: `line`,
         * `spline`, `area`, `area-spline`, `column`, `bar`, and* `timeline`.
         */
        nullInteraction?: (boolean|undefined);
        /**
         * (Highcharts) Options for the _Series on point_ feature. Only `pie`
         * and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotArcdiagramOnPointOptions);
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
         * (Highcharts) Whether the series should be placed on the other side of
         * the `plotArea`.
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
    interface SeriesArcdiagramNodesDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
}

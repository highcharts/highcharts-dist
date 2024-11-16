/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Gantt) Point accessibility options for a series.
     */
    interface PlotGanttAccessibilityPointOptions {
        /**
         * (Gantt) Date format to use for points on datetime axes when
         * describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Gantt) Formatter function to determine the date/time format used
         * with points on datetime axes when describing them to screen reader
         * users. Receives one argument, `point`, referring to the point to
         * describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Gantt) Whether or not to describe points with the value `null` to
         * assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Gantt) A format string to use instead of the default for point
         * descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Gantt) Formatter function to use instead of the default for point
         * descriptions. Same as `accessibility.point.descriptionFormatter`, but
         * applies to a series instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Gantt) Decimals to use for the values in the point descriptions.
         * Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Gantt) Format to use for describing the values of data points to
         * assistive technology - including screen readers. The point context is
         * available as `{point}`.
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
         * (Gantt) Prefix to add to the values in the point descriptions. Uses
         * tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Gantt) Suffix to add to the values in the point descriptions. Uses
         * tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Options for the series data
     * labels, appearing next to each data point.
     *
     * Since v6.2.0, multiple data labels can be applied to each single point by
     * defining them as an array of configs.
     *
     * In styled mode, the data labels can be styled with the
     * `.highcharts-data-label-box` and `.highcharts-data-label` class names
     * (see example).
     */
    interface PlotGanttDataLabelsOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The alignment of the data
         * label compared to the point. If `right`, the right side of the label
         * should be touching the point. For points with an extent, like
         * columns, the alignments also dictates how to align it inside the box,
         * as given with the inside option. Can be one of `left`, `center` or
         * `right`.
         */
        align?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Alignment method for data
         * labels. If set to `plotEdges`, the labels are aligned within the plot
         * area in the direction of the y-axis. So in a regular column chart,
         * the labels are aligned vertically according to the `verticalAlign`
         * setting. In a bar chart, which is inverted, the labels are aligned
         * horizontally according to the `align` setting. Applies to cartesian
         * series only.
         */
        alignTo?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to allow data labels
         * to overlap. To make the labels less sensitive for overlapping, the
         * dataLabels.padding can be set to 0.
         */
        allowOverlap?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the
         * initial animation when a series is displayed for the `dataLabels`.
         * The animation can also be set as a configuration object. Please note
         * that this option only applies to the initial animation.
         *
         * For other animations, see chart.animation and the animation parameter
         * under the API methods. The following properties are supported:
         *
         * - `defer`: The animation delay time in milliseconds.
         */
        animation?: (boolean|Highcharts.PlotGanttDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The background color or
         * gradient for the data label. Setting it to `auto` will use the
         * point's color.
         */
        backgroundColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The border color for the
         * data label. Setting it to `auto` will use the point's color. Defaults
         * to `undefined`.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The border radius in pixels
         * for the data label.
         */
        borderRadius?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The border width in pixels
         * for the data label.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) A class name for the data
         * label. Particularly in styled mode, this can be used to give each
         * series' or point's data label unique styling. In addition to this
         * option, a default color class name is added so that we can give the
         * labels a contrast text shadow.
         */
        className?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This options is deprecated.
         * Use style.color instead.
         *
         * The text color for the data labels. Defaults to `undefined`. For
         * certain series types, like column or map, the data labels can be
         * drawn inside the points. In this case the data label will be drawn
         * with maximum contrast by default. Additionally, it will be given a
         * `text-outline` style with the opposite color, to further increase the
         * contrast. This can be overridden by setting the `text-outline` style
         * to `none` in the `dataLabels.style` option.
         *
         * @deprecated 10.3.0
         */
        color?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to hide data labels
         * that are outside the plot area. By default, the data label is moved
         * inside the plot area according to the overflow option.
         */
        crop?: boolean;
        /**
         * (Highcharts, Highstock, Gantt) Whether to defer displaying the data
         * labels until the initial series animation has finished. Setting to
         * `false` renders the data label immediately. If set to `true` inherits
         * the defer time set in plotOptions.series.animation.
         */
        defer?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the data
         * labels.
         */
        enabled?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) A declarative filter to
         * control of which data labels to display. The declarative filter is
         * designed for use when callback functions are not available, like when
         * the chart options require a pure JSON structure or for use with
         * graphical editors. For programmatic control, use the `formatter`
         * instead, and return `undefined` to disable a single data label.
         */
        filter?: Highcharts.DataLabelsFilterOptionsObject;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) A format string for the data
         * label. Available variables are the same as for `formatter`.
         */
        format?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Callback JavaScript function
         * to format the data label. Note that if a `format` is defined, the
         * format takes precedence and the formatter is ignored.
         */
        formatter?: Highcharts.DataLabelsFormatterCallbackFunction;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) For points with an extent,
         * like columns or map areas, whether to align the data label inside the
         * box or to the actual value point. Defaults to `false` in most cases,
         * `true` in stacked columns.
         */
        inside?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Format for points with the
         * value of null. Works analogously to format. `nullFormat` can be
         * applied only to series which support displaying null points i.e
         * `heatmap` or `tilemap`. Does not work with series that don't display
         * null points, like `line`, `column`, `bar` or `pie`.
         */
        nullFormat?: (boolean|string);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Callback JavaScript function
         * that defines formatting for points with the value of null. Works
         * analogously to formatter. `nullFormatter` can be applied only to
         * series which support displaying null points i.e `heatmap` or
         * `tilemap`. Does not work with series that don't display null points,
         * like `line`, `column`, `bar` or `pie`.
         */
        nullFormatter?: Highcharts.DataLabelsFormatterCallbackFunction;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) How to handle data labels
         * that flow outside the plot area. The default is `"justify"`, which
         * aligns them inside the plot area. For columns and bars, this means it
         * will be moved inside the bar. To display data labels outside the plot
         * area, set `crop` to `false` and `overflow` to `"allow"`.
         */
        overflow?: Highcharts.DataLabelsOverflowValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) When either the
         * `borderWidth` or the `backgroundColor` is set, this is the padding
         * within the box.
         */
        padding?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Aligns data labels relative
         * to points. If `center` alignment is not possible, it defaults to
         * `right`.
         */
        position?: Highcharts.AlignValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Text rotation in degrees.
         * Note that due to a more complex structure, backgrounds, borders and
         * padding will be lost on a rotated data label.
         */
        rotation?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The shadow of the box. Works
         * best with `borderWidth` or `backgroundColor`. Since 2.3 the shadow
         * can be an object configuration containing `color`, `offsetX`,
         * `offsetY`, `opacity` and `width`.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The name of a symbol to use
         * for the border around the label. Symbols are predefined functions on
         * the Renderer object.
         */
        shape?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Styles for the label. The
         * default `color` setting is `"contrast"`, which is a pseudo color that
         * Highcharts picks up and applies the maximum contrast to the
         * underlying point item, for example the bar in a bar chart.
         *
         * The `textOutline` is a pseudo property that applies an outline of the
         * given width with the given color, which by default is the maximum
         * contrast to the text. So a bright text color will result in a black
         * text outline for maximum readability on a mixed background. In some
         * cases, especially with grayscale text, the text outline doesn't work
         * well, in which cases it can be disabled by setting it to `"none"`.
         * When `useHTML` is true, the `textOutline` will not be picked up. In
         * this, case, the same effect can be acheived through the `text-shadow`
         * CSS property.
         *
         * For some series types, where each point has an extent, like for
         * example tree maps, the data label may overflow the point. There are
         * two strategies for handling overflow. By default, the text will wrap
         * to multiple lines. The other strategy is to set `style.textOverflow`
         * to `ellipsis`, which will keep the text on one line plus it will
         * break inside long words.
         */
        style?: (Highcharts.CSSObject|Highcharts.PlotGanttDataLabelsStyleOptions);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for a label text
         * which should follow marker's shape. Border and background are
         * disabled for a label that follows a path.
         *
         * **Note:** Only SVG-based renderer supports this option. Setting
         * `useHTML` to true will disable this option.
         */
        textPath?: Highcharts.DataLabelsTextPathOptionsObject;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to use HTML to
         * render the labels.
         */
        useHTML?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The vertical alignment of a
         * data label. Can be one of `top`, `middle` or `bottom`. The default
         * value depends on the data, for instance in a column chart, the label
         * is above positive values and below negative values.
         */
        verticalAlign?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The x position offset of the
         * label relative to the point in pixels.
         */
        x?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The y position offset of the
         * label relative to the point in pixels.
         */
        y?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The z index of the data
         * labels. Use a `zIndex` of 6 to display it above the series, or use a
         * `zIndex` of 2 to display it behind the series.
         */
        zIndex?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotGanttLabelStyleOptions {
        fontSize?: (number|string);
    }
    /**
     * (Gantt) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotGanttOnPointOptions {
        /**
         * (Gantt) Options for the connector in the _Series on point_ feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotGanttOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Gantt) The `id` of the point that we connect the series to. Only
         * points with a given `plotX` and `plotY` values and map points are
         * valid.
         */
        id?: string;
        /**
         * (Gantt) Options allowing to set a position and an offset of the
         * series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotGanttOnPointPositionOptions);
    }
    /**
     * (Gantt) A `gantt` series. If the type option is not specified, it is
     * inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `gantt` series are defined in plotOptions.gantt.
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
    interface PlotGanttOptions {
        /**
         * (Gantt) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Gantt) Allow this series' points to be selected by clicking on the
         * graphic (columns, point markers, pie slices, map areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Gantt) Enable or disable the initial animation when a series is
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
         * (Gantt) For some series, there is a limit that shuts down animation
         * by default when the total number of points in the chart is too high.
         * For example, for a column chart and its derivatives, animation does
         * not run if there is more than 250 points totally. To disable this
         * cap, set `animationLimit` to `Infinity`. This option works if
         * animation is fired on individual points, not on a group of points
         * like e.g. during the initial animation.
         */
        animationLimit?: number;
        /**
         * (Highcharts, Highstock, Gantt) The color of the border surrounding
         * each column or bar.
         *
         * In styled mode, the border stroke can be set with the
         * `.highcharts-point` rule.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Gantt) The corner radius of the border
         * surrounding each column or bar. A number signifies pixels. A
         * percentage string, like for example `50%`, signifies a relative size.
         * For columns this is relative to the column width, for pies it is
         * relative to the radius and the inner radius.
         */
        borderRadius?: number;
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
         * (Gantt) An additional class name to apply to the series' graphical
         * elements. This option does not replace default class names of the
         * graphical element. Changes to the series' color will also be
         * reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Gantt) Disable this option to allow series rendering in the whole
         * plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Gantt) The main color of the series. In line type series it applies
         * to the line and the point markers unless otherwise specified. In bar
         * type series it applies to the bars unless a color is specified per
         * point. The default value is pulled from the `options.colors` array.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Gantt) In an X-range series, this option
         * makes all points of the same Y-axis category the same color.
         */
        colorByPoint?: boolean;
        /**
         * (Gantt) Styled mode only. A specific color index to use for the
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
         * (Gantt) Override Pathfinder connector options for a series. Requires
         * Highcharts Gantt to be loaded.
         */
        connectors?: Highcharts.SeriesConnectorsOptionsObject;
        /**
         * (Gantt) You can set the cursor to "pointer" if you have click events
         * attached to the series, to signal to the user that the points and
         * lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Gantt) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Gantt) Name of the dash style to use for the graph, or for some
         * series types the outline of each shape.
         *
         * In styled mode, the stroke dash-array can be set with the same
         * classes as listed under series.color.
         */
        dashStyle?: Highcharts.DashStyleValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the series data
         * labels, appearing next to each data point.
         *
         * Since v6.2.0, multiple data labels can be applied to each single
         * point by defining them as an array of configs.
         *
         * In styled mode, the data labels can be styled with the
         * `.highcharts-data-label-box` and `.highcharts-data-label` class names
         * (see example).
         */
        dataLabels?: (Highcharts.PlotGanttDataLabelsOptions|Array<Highcharts.PlotGanttDataLabelsOptions>);
        /**
         * (Gantt) A description of the series to add to the screen reader
         * information about the series.
         */
        description?: string;
        /**
         * (Gantt) The draggable-points module allows points to be moved around
         * or modified in the chart. In addition to the options mentioned under
         * the `dragDrop` API structure, the module fires three events,
         * point.dragStart, point.drag and point.drop.
         */
        dragDrop?: Highcharts.SeriesDragDropOptionsObject;
        /**
         * (Gantt) Enable or disable the mouse tracking for a specific series.
         * This includes point tooltips and click events on graphs and points.
         * For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Gantt) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highstock, Gantt) Whether to group non-stacked columns
         * or to let them render independent of each other. Non-grouped columns
         * will be laid out individually and overlap each other.
         */
        grouping?: boolean;
        /**
         * (Highcharts, Highstock, Gantt) Padding between each value groups, in
         * x axis units.
         */
        groupPadding?: number;
        /**
         * (Gantt) Highlight only the hovered point and fade the remaining
         * points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Gantt) When set to `false` will prevent the series data from being
         * included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Gantt) An array specifying which option maps to which key in the
         * data point array. This makes it convenient to work with unstructured
         * data arrays from different sources.
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
         * (Gantt) What type of legend symbol to render for this series. Can be
         * one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
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
         * (Highcharts, Highstock, Gantt) The maximum allowed pixel width for a
         * column, translated to the height of a bar in a bar chart. This
         * prevents the columns from becoming too wide when there is a small
         * number of points in the chart.
         */
        maxPointWidth?: number;
        /**
         * (Highcharts, Highstock, Gantt) The minimal height for a column or
         * width for a bar. By default, 0 values are not shown. To visualize a 0
         * (or close to zero) point, set the minimal point length to a pixel
         * value like 3\. In stacked column charts, minPointLength might not be
         * respected for tightly packed values.
         */
        minPointLength?: number;
        /**
         * (Gantt) Options for the _Series on point_ feature. Only `pie` and
         * `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotGanttOnPointOptions);
        /**
         * (Gantt) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Gantt) A partial fill for each point, typically used to visualize
         * how much of a task is performed. See completed.
         */
        partialFill?: Highcharts.PlotGanttPartialFillOptions;
        /**
         * (Gantt) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Gantt) Same as accessibility.point.descriptionFormat, but for an
         * individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Gantt) Same as accessibility.series.descriptionFormatter, but for an
         * individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highcharts, Highstock, Gantt) Padding between each column or bar, in
         * x axis units.
         */
        pointPadding?: number;
        pointRange?: number;
        /**
         * (Highcharts, Highstock, Gantt) A pixel value specifying a fixed width
         * for each column or bar point. When set to `undefined`, the width is
         * calculated from the `pointPadding` and `groupPadding`. The width
         * effects the dimension that is not based on the point value. For
         * column series it is the horizontal length and for bar series it is
         * the vertical length.
         */
        pointWidth?: number;
        /**
         * (Gantt) Whether to select the series initially. If `showCheckbox` is
         * true, the checkbox next to the series name in the legend will be
         * checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Gantt) Whether to apply a drop shadow to the graph line. Since 2.3
         * the shadow can be an object configuration containing `color`,
         * `offsetX`, `offsetY`, `opacity` and `width`.
         *
         * Note that in some cases, like stacked columns or other dense layouts,
         * the series may cast shadows on each other. In that case, the
         * `chart.seriesGroupShadow` allows applying a common drop shadow to the
         * whole series group.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Gantt) If true, a checkbox is displayed next to the legend item to
         * allow selecting the series. The state of the checkbox is determined
         * by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Gantt) Whether to display this particular series or series type in
         * the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Gantt) If set to `true`, the accessibility module will skip past the
         * points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Gantt) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Gantt) Sticky tracking of mouse events. When true, the `mouseOut`
         * event on a series isn't triggered until the mouse moves over another
         * series, or out of the plot area. When false, the `mouseOut` event on
         * a series is triggered when the mouse leaves the area around the
         * series' graph or markers. This also implies the tooltip when not
         * shared. When `stickyTracking` is false and `tooltip.shared` is false,
         * the tooltip will be hidden when moving the mouse between series.
         * Defaults to true for line and area type series, but to false for
         * columns, pies etc.
         *
         * **Note:** The boost module will force this option because of
         * technical limitations.
         */
        stickyTracking?: boolean;
        /**
         * (Gantt) A configuration object for the tooltip rendering of each
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
         * (Gantt) Set the initial visibility of the series.
         */
        visible?: boolean;
    }
    /**
     * (Gantt) A `gantt` series.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `gantt` series are defined in plotOptions.gantt.
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
     * You have to extend the `SeriesGanttOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesGanttOptions {
     * customProperty: string; }
     *
     */
    interface SeriesGanttOptions extends Highcharts.PlotGanttOptions, Highcharts.SeriesOptions {
        /**
         * (Gantt) Data for a Gantt series.
         */
        data?: Array<Highcharts.GanttPointOptionsObject>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "gantt";
    }
}

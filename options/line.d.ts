/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts, Highstock) Point accessibility options for a series.
     */
    interface PlotLineAccessibilityPointOptions {
        /**
         * (Highcharts, Highstock) Date format to use for points on datetime
         * axes when describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highcharts, Highstock) Formatter function to determine the date/time
         * format used with points on datetime axes when describing them to
         * screen reader users. Receives one argument, `point`, referring to the
         * point to describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts, Highstock) Whether or not to describe points with the
         * value `null` to assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highcharts, Highstock) A format string to use instead of the default
         * for point descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highcharts, Highstock) Formatter function to use instead of the
         * default for point descriptions. Same as
         * `accessibility.point.descriptionFormatter`, but applies to a series
         * instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highcharts, Highstock) Decimals to use for the values in the point
         * descriptions. Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highcharts, Highstock) Format to use for describing the values of
         * data points to assistive technology - including screen readers. The
         * point context is available as `{point}`.
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
         * (Highcharts, Highstock) Prefix to add to the values in the point
         * descriptions. Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highcharts, Highstock) Suffix to add to the values in the point
         * descriptions. Uses tooltip.valueSuffix if not defined.
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
    interface PlotLineDataLabelsOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The alignment of the data
         * label compared to the point. If `right`, the right side of the label
         * should be touching the point. For points with an extent, like
         * columns, the alignments also dictates how to align it inside the box,
         * as given with the inside option. Can be one of `left`, `center` or
         * `right`.
         */
        align?: (Highcharts.AlignValue|null);
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
        animation?: (boolean|Highcharts.PlotLineDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
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
         * applied only to series which support displaying null points.
         * `heatmap` and `tilemap` supports `nullFormat` by default while the
         * following series requires [#series.nullInteraction] set to `true`:
         * `line`, `spline`, `area`, `area-spline`, `column`, `bar`, and
         * `timeline`. Does not work with series that don't display null points,
         * like `pie`.
         */
        nullFormat?: (boolean|string);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Callback JavaScript function
         * that defines formatting for points with the value of null. Works
         * analogously to formatter. `nullFormatter` can be applied only to
         * series which support displaying null points. `heatmap` and `tilemap`
         * supports `nullFormatter` by default while the following series
         * requires [#series.nullInteraction] set to `true`: `line`, `spline`,
         * `area`, `area-spline`, `column`, `bar`, and `timeline`. Does not work
         * with series that don't display null points, like `pie`.
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
        style?: Highcharts.CSSObject;
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
        verticalAlign?: (Highcharts.VerticalAlignValue|null);
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
    interface PlotLineLabelStyleOptions {
        fontSize?: (number|string);
    }
    /**
     * (Highcharts, Highstock) Options for the _Series on point_ feature. Only
     * `pie` and `sunburst` series are supported at this moment.
     */
    interface PlotLineOnPointOptions {
        /**
         * (Highcharts, Highstock) Options for the connector in the _Series on
         * point_ feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotLineOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highcharts, Highstock) The `id` of the point that we connect the
         * series to. Only points with a given `plotX` and `plotY` values and
         * map points are valid.
         */
        id?: string;
        /**
         * (Highcharts, Highstock) Options allowing to set a position and an
         * offset of the series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotLineOnPointPositionOptions);
    }
    /**
     * (Highcharts, Highstock) A line series displays information as a series of
     * data points connected by straight line segments.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `line` series are defined in plotOptions.line.
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
    interface PlotLineOptions {
        /**
         * (Highcharts, Highstock) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highcharts, Highstock) Allow this series' points to be selected by
         * clicking on the graphic (columns, point markers, pie slices, map
         * areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Highcharts, Highstock) Enable or disable the initial animation when
         * a series is displayed. The animation can also be set as a
         * configuration object. Please note that this option only applies to
         * the initial animation of the series itself. For other animations, see
         * chart.animation and the animation parameter under the API methods.
         * The following properties are supported:
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
         * (Highcharts, Highstock) For some series, there is a limit that shuts
         * down animation by default when the total number of points in the
         * chart is too high. For example, for a column chart and its
         * derivatives, animation does not run if there is more than 250 points
         * totally. To disable this cap, set `animationLimit` to `Infinity`.
         * This option works if animation is fired on individual points, not on
         * a group of points like e.g. during the initial animation.
         */
        animationLimit?: number;
        /**
         * (Highcharts, Highstock) Sets the color blending in the boost module.
         */
        boostBlending?: Highcharts.OptionsBoostBlendingValue;
        /**
         * (Highcharts, Highstock) Set the point threshold for when a series
         * should enter boost mode.
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
         * (Highcharts, Highstock) An additional class name to apply to the
         * series' graphical elements. This option does not replace default
         * class names of the graphical element. Changes to the series' color
         * will also be reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highcharts, Highstock) Disable this option to allow series rendering
         * in the whole plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highcharts, Highstock) The main color of the series. In line type
         * series it applies to the line and the point markers unless otherwise
         * specified. In bar type series it applies to the bars unless a color
         * is specified per point. The default value is pulled from the
         * `options.colors` array.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps) When using dual or multiple color
         * axes, this number defines which colorAxis the particular series is
         * connected to. It refers to either the axis id or the index of the
         * axis in the colorAxis array, with 0 being the first. Set this option
         * to false to prevent a series from connecting to the default color
         * axis.
         *
         * Since v7.2.0 the option can also be an axis id or an axis index
         * instead of a boolean flag.
         */
        colorAxis?: (boolean|number|string);
        /**
         * (Highcharts, Highstock) Styled mode only. A specific color index to
         * use for the series, so its graphic representations are given the
         * class name `highcharts-color-{n}`.
         *
         * Since v11, CSS variables on the form `--highcharts-color-{n}` make
         * changing the color scheme very convenient.
         */
        colorIndex?: number;
        /**
         * (Highcharts, Highstock, Highmaps) Determines what data value should
         * be used to calculate point color if `colorAxis` is used. Requires to
         * set `min` and `max` if some custom point property is used or if
         * approximation for data grouping is set to `'sum'`.
         */
        colorKey?: string;
        /**
         * (Highstock) Compare the values of the series against the first
         * non-null, non- zero value in the visible range. The y axis will show
         * percentage or absolute change depending on whether `compare` is set
         * to `"percent"` or `"value"`. When this is applied to multiple series,
         * it allows comparing the development of the series against each other.
         * Adds a `change` field to every point object.
         */
        compare?: Highcharts.OptionsCompareValue;
        /**
         * (Highstock) When compare is `percent`, this option dictates whether
         * to use 0 or 100 as the base of comparison.
         */
        compareBase?: (0|100);
        /**
         * (Highstock) Defines if comparison should start from the first point
         * within the visible range or should start from the last point
         * **before** the range.
         *
         * In other words, this flag determines if first point within the
         * visible range will have 0% (`compareStart=true`) or should have been
         * already calculated according to the previous point
         * (`compareStart=false`).
         */
        compareStart?: boolean;
        /**
         * (Highcharts) Polar charts only. Whether to connect the ends of a line
         * series plot across the extremes.
         */
        connectEnds?: boolean;
        /**
         * (Highcharts, Highstock) Whether to connect a graph line across null
         * points, or render a gap between the two points on either side of the
         * null.
         *
         * In stacked area chart, if `connectNulls` is set to true, null points
         * are interpreted as 0.
         */
        connectNulls?: boolean;
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
         * (Highcharts, Highstock) When the series contains less points than the
         * crop threshold, all points are drawn, even if the points fall outside
         * the visible plot area at the current zoom. The advantage of drawing
         * all points (including markers and columns), is that animation is
         * performed on updates. On the other hand, when the series contains
         * more points than the crop threshold, the series data is cropped to
         * only contain points that fall within the plot area. The advantage of
         * cropping away invisible points is to increase performance on large
         * series.
         */
        cropThreshold?: number;
        /**
         * (Highstock) Cumulative Sum feature replaces points' values with the
         * following formula: `sum of all previous points' values + current
         * point's value`. Works only for points in a visible range. Adds the
         * `cumulativeSum` field to each point object that can be accessed e.g.
         * in the tooltip.pointFormat.
         *
         * With `dataGrouping` enabled, default grouping approximation is set to
         * `sum`.
         */
        cumulative?: boolean;
        /**
         * (Highstock) Defines if cumulation should start from the first point
         * within the visible range or should start from the last point
         * **before** the range.
         *
         * In other words, this flag determines if first point within the
         * visible range will start at 0 (`cumulativeStart=true`) or should have
         * been already calculated according to the previous point
         * (`cumulativeStart=false`).
         */
        cumulativeStart?: boolean;
        /**
         * (Highcharts, Highstock) You can set the cursor to "pointer" if you
         * have click events attached to the series, to signal to the user that
         * the points and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highcharts, Highstock) A reserved subspace to store options and
         * values for customized functionality. Here you can add additional data
         * for your own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highcharts, Highstock) Name of the dash style to use for the graph,
         * or for some series types the outline of each shape.
         *
         * In styled mode, the stroke dash-array can be set with the same
         * classes as listed under series.color.
         */
        dashStyle?: Highcharts.DashStyleValue;
        /**
         * (Highstock) Data grouping is the concept of sampling the data values
         * into larger blocks in order to ease readability and increase
         * performance of the JavaScript charts. Highcharts Stock by default
         * applies data grouping when the points become closer than a certain
         * pixel value, determined by the `groupPixelWidth` option.
         *
         * If data grouping is applied, the grouping information of grouped
         * points can be read from the Point.dataGroup. If point options other
         * than the data itself are set, for example `name` or `color` or custom
         * properties, the grouping logic doesn't know how to group it. In this
         * case the options of the first point instance are copied over to the
         * group point. This can be altered through a custom `approximation`
         * callback function.
         */
        dataGrouping?: Highcharts.DataGroupingOptionsObject;
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
        dataLabels?: (Highcharts.PlotLineDataLabelsOptions|Array<Highcharts.PlotLineDataLabelsOptions>);
        /**
         * (Highcharts, Highstock) Options for the series data sorting.
         */
        dataSorting?: (Highcharts.DataSortingOptionsObject|Highcharts.PlotLineDataSortingOptions);
        /**
         * (Highcharts, Highstock) A description of the series to add to the
         * screen reader information about the series.
         */
        description?: string;
        /**
         * (Highcharts, Highstock) The draggable-points module allows points to
         * be moved around or modified in the chart. In addition to the options
         * mentioned under the `dragDrop` API structure, the module fires three
         * events, point.dragStart, point.drag and point.drop.
         */
        dragDrop?: Highcharts.SeriesDragDropOptionsObject;
        /**
         * (Highcharts, Highstock) Enable or disable the mouse tracking for a
         * specific series. This includes point tooltips and click events on
         * graphs and points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts, Highstock) General event handlers for the series items.
         * These event hooks can also be attached to the series at run time
         * using the `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highstock) Determines whether the series should look for
         * the nearest point in both dimensions or just the x-dimension when
         * hovering the series. Defaults to `'xy'` for scatter series and `'x'`
         * for most other series. If the data has duplicate x-values, it is
         * recommended to set this to `'xy'` to allow hovering over all points.
         *
         * Applies only to series types using nearest neighbor search (not
         * direct hover) for tooltip.
         */
        findNearestPointBy?: Highcharts.OptionsFindNearestPointByValue;
        /**
         * (Highstock) Defines when to display a gap in the graph, together with
         * the gapUnit option.
         *
         * In case when `dataGrouping` is enabled, points can be grouped into a
         * larger time span. This can make the grouped points to have a greater
         * distance than the absolute value of `gapSize` property, which will
         * result in disappearing graph completely. To prevent this situation
         * the mentioned distance between grouped points is used instead of
         * previously defined `gapSize`.
         *
         * In practice, this option is most often used to visualize gaps in time
         * series. In a stock chart, intraday data is available for daytime
         * hours, while gaps will appear in nights and weekends.
         */
        gapSize?: number;
        /**
         * (Highstock) Together with gapSize, this option defines where to draw
         * gaps in the graph.
         *
         * When the `gapUnit` is `"relative"` (default), a gap size of 5 means
         * that if the distance between two points is greater than 5 times that
         * of the two closest points, the graph will be broken.
         *
         * When the `gapUnit` is `"value"`, the gap is based on absolute axis
         * values, which on a datetime axis is milliseconds. This also applies
         * to the navigator series that inherits gap options from the base
         * series.
         */
        gapUnit?: Highcharts.OptionsGapUnitValue;
        /**
         * (Highcharts, Highstock, Gantt) Whether to use the Y extremes of the
         * total chart width or only the zoomed area when zooming in on parts of
         * the X axis. By default, the Y axis adjusts to the min and max of the
         * visible data. Cartesian series only.
         */
        getExtremesFromAll?: boolean;
        /**
         * (Highcharts, Highstock) Highlight only the hovered point and fade the
         * remaining points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highcharts, Highstock) When set to `false` will prevent the series
         * data from being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highcharts, Highstock) An array specifying which option maps to
         * which key in the data point array. This makes it convenient to work
         * with unstructured data arrays from different sources.
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
         * (Highstock) The line marks the last price from all points.
         */
        lastPrice?: Highcharts.SeriesLastPriceOptionsObject;
        /**
         * (Highstock) The line marks the last price from visible range of
         * points.
         */
        lastVisiblePrice?: Highcharts.SeriesLastVisiblePriceOptionsObject;
        /**
         * (Highcharts, Highstock) What type of legend symbol to render for this
         * series. Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts, Highstock, Highmaps) Defines the color of the legend
         * symbol for this series. Defaults to undefined, in which case the
         * series color is used. Does not work with styled mode.
         */
        legendSymbolColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock) The SVG value used for the `stroke-linecap`
         * and `stroke-linejoin` of a line graph. Round means that lines are
         * rounded in the ends and bends.
         */
        linecap?: Highcharts.SeriesLinecapValue;
        /**
         * (Highcharts, Highstock) Pixel width of the graph line.
         */
        lineWidth?: number;
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
         * (Highcharts, Highstock) Options for the point markers of line and
         * scatter-like series. Properties like `fillColor`, `lineColor` and
         * `lineWidth` define the visual appearance of the markers. The `symbol`
         * option defines the shape. Other series types, like column series,
         * don't have markers, but have visual options on the series level
         * instead.
         *
         * In styled mode, the markers can be styled with the
         * `.highcharts-point`, `.highcharts-point-hover` and
         * `.highcharts-point-select` class names.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highstock) Options for the corresponding navigator series if
         * `showInNavigator` is `true` for this series. Available options are
         * the same as any series, documented at plotOptions and series.
         *
         * These options are merged with options in navigator.series, and will
         * take precedence if the same option is defined both places.
         */
        navigatorOptions?: Highcharts.PlotSeriesOptions;
        /**
         * (Highcharts, Highstock) The color for the parts of the graph or
         * points that are below the threshold. Note that `zones` takes
         * precedence over the negative color. Using `negativeColor` is
         * equivalent to applying a zone with value of 0.
         */
        negativeColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
         * (Highcharts, Highstock) Options for the _Series on point_ feature.
         * Only `pie` and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotLineOnPointOptions);
        /**
         * (Highcharts, Highstock) Opacity of a series parts: line, fill (e.g.
         * area) and dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts, Highstock) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts, Highstock) Same as
         * accessibility.point.descriptionFormat, but for an individual series.
         * Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts, Highstock) Same as
         * accessibility.series.descriptionFormatter, but for an individual
         * series. Overrides the chart wide configuration.
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
         * (Highcharts, Highstock, Gantt) Possible values: `"on"`, `"between"`,
         * `number`.
         *
         * In a column chart, when pointPlacement is `"on"`, the point will not
         * create any padding of the X axis. In a polar column chart this means
         * that the first column points directly north. If the pointPlacement is
         * `"between"`, the columns will be laid out between ticks. This is
         * useful for example for visualising an amount between two points in
         * time or in a certain sector of a polar chart.
         *
         * Since Highcharts 3.0.2, the point placement can also be numeric,
         * where 0 is on the axis value, -0.5 is between this value and the
         * previous, and 0.5 is between this value and the next. Unlike the
         * textual options, numeric point placement options won't affect axis
         * padding.
         *
         * Note that pointPlacement needs a pointRange to work. For column
         * series this is computed, but for line-type series it needs to be set.
         *
         * For the `xrange` series type and gantt charts, if the Y axis is a
         * category axis, the `pointPlacement` applies to the Y axis rather than
         * the (typically datetime) X axis.
         *
         * Defaults to `undefined` in cartesian charts, `"between"` in polar
         * charts.
         */
        pointPlacement?: (number|string);
        /**
         * (Highstock) The width of each point on the x axis. For example in a
         * column chart with one value each day, the pointRange would be 1 day
         * (= 24 * 3600
         *
         * * 1000 milliseconds). This is normally computed automatically, but
         * this option can be used to override the automatic value.
         */
        pointRange?: number;
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
         * (Highcharts, Highstock) Whether to select the series initially. If
         * `showCheckbox` is true, the checkbox next to the series name in the
         * legend will be checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highcharts, Highstock) Whether to apply a drop shadow to the graph
         * line. Since 2.3 the shadow can be an object configuration containing
         * `color`, `offsetX`, `offsetY`, `opacity` and `width`.
         *
         * Note that in some cases, like stacked columns or other dense layouts,
         * the series may cast shadows on each other. In that case, the
         * `chart.seriesGroupShadow` allows applying a common drop shadow to the
         * whole series group.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Highcharts, Highstock) If true, a checkbox is displayed next to the
         * legend item to allow selecting the series. The state of the checkbox
         * is determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts, Highstock) Whether to display this particular series or
         * series type in the legend. Standalone series are shown in legend by
         * default, and linked series are not. Since v7.2.0 it is possible to
         * show series that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highstock) Whether or not to show the series in the navigator. Takes
         * precedence over navigator.baseSeries if defined.
         */
        showInNavigator?: boolean;
        /**
         * (Highcharts, Highstock) If set to `true`, the accessibility module
         * will skip past the points in this series for keyboard navigation.
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
         * (Highcharts, Highstock) Sonification/audio chart options for a
         * series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highcharts, Highstock) Whether to stack the values of each series on
         * top of each other. Possible values are `undefined` to disable,
         * `"normal"` to stack by value or `"percent"`.
         *
         * When stacking is enabled, data must be sorted in ascending X order.
         *
         * Some stacking options are related to specific series types. In the
         * streamgraph series type, the stacking option is set to `"stream"`.
         * The second one is `"overlap"`, which only applies to waterfall
         * series.
         */
        stacking?: Highcharts.OptionsStackingValue;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highcharts, Highstock) Whether to apply steps to the line. Possible
         * values are `left`, `center` and `right`.
         */
        step?: Highcharts.OptionsStepValue;
        /**
         * (Highcharts, Highstock) Sticky tracking of mouse events. When true,
         * the `mouseOut` event on a series isn't triggered until the mouse
         * moves over another series, or out of the plot area. When false, the
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
         * (Highcharts, Highstock) The threshold, also called zero level or base
         * level. For line type series this is only used in conjunction with
         * negativeColor.
         */
        threshold?: (number|null);
        /**
         * (Highcharts, Highstock) A configuration object for the tooltip
         * rendering of each single series. Properties are inherited from
         * tooltip, but only the following properties can be defined on a series
         * level.
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
         * (Highstock) The parameter allows setting line series type and use
         * OHLC indicators. Data in OHLC format is required.
         */
        useOhlcData?: boolean;
        /**
         * (Highcharts, Highstock) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highcharts, Highstock) Defines the Axis on which the zones are
         * applied.
         */
        zoneAxis?: string;
        /**
         * (Highcharts, Highstock) An array defining zones within a series.
         * Zones can be applied to the X axis, Y axis or Z axis for bubbles,
         * according to the `zoneAxis` option. The zone definitions have to be
         * in ascending order regarding to the value.
         *
         * In styled mode, the color zones are styled with the
         * `.highcharts-zone-{n}` class, or custom classed from the `className`
         * option (view live demo).
         */
        zones?: Array<Highcharts.SeriesZonesOptionsObject>;
    }
    /**
     * (Highcharts, Highstock, Gantt) Enable or disable the initial animation
     * when a series is displayed for the `dataLabels`. The animation can also
     * be set as a configuration object. Please note that this option only
     * applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesLineDataDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) A `line` series. If the type option is not
     * specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `line` series are defined in plotOptions.line.
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
     * You have to extend the `SeriesLineOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesLineOptions {
     * customProperty: string; }
     *
     */
    interface SeriesLineOptions extends Highcharts.PlotLineOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts, Highstock) An array of data points for the series. For
         * the `line` series type, points can be given in the following ways:
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
         *
         * **Note:** In TypeScript you have to extend `PointOptionsObject` with
         * an additional declaration to allow custom data types: ```ts declare
         * module `highcharts` { interface PointOptionsObject { custom:
         * Record<string, (boolean|number|string)>; } } ```
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
        type: "line";
    }
}

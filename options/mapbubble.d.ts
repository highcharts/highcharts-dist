/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highmaps) Point accessibility options for a series.
     */
    interface PlotMapbubbleAccessibilityPointOptions {
        /**
         * (Highmaps) Date format to use for points on datetime axes when
         * describing them to screen reader users.
         *
         * Defaults to the same format as in tooltip.
         *
         * For an overview of the replacement codes, see dateFormat.
         */
        dateFormat?: string;
        /**
         * (Highmaps) Formatter function to determine the date/time format used
         * with points on datetime axes when describing them to screen reader
         * users. Receives one argument, `point`, referring to the point to
         * describe. Should return a date format string compatible with
         * dateFormat.
         */
        dateFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highmaps) Whether or not to describe points with the value `null` to
         * assistive technology, such as screen readers.
         */
        describeNull?: boolean;
        /**
         * (Highmaps) A format string to use instead of the default for point
         * descriptions.
         *
         * The context of the format string is the point instance.
         *
         * As opposed to accessibility.point.valueDescriptionFormat, this option
         * replaces the whole description.
         */
        descriptionFormat?: string;
        /**
         * (Highmaps) Formatter function to use instead of the default for point
         * descriptions. Same as `accessibility.point.descriptionFormatter`, but
         * applies to a series instead of the whole chart.
         *
         * Note: Prefer using accessibility.point.valueDescriptionFormat instead
         * if possible, as default functionality such as describing annotations
         * will be preserved.
         */
        descriptionFormatter?: Highcharts.ScreenReaderFormatterCallbackFunction<Highcharts.Point>;
        /**
         * (Highmaps) Decimals to use for the values in the point descriptions.
         * Uses tooltip.valueDecimals if not defined.
         */
        valueDecimals?: number;
        /**
         * (Highmaps) Format to use for describing the values of data points to
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
         * (Highmaps) Prefix to add to the values in the point descriptions.
         * Uses tooltip.valuePrefix if not defined.
         */
        valuePrefix?: string;
        /**
         * (Highmaps) Suffix to add to the values in the point descriptions.
         * Uses tooltip.valueSuffix if not defined.
         */
        valueSuffix?: string;
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
    interface PlotMapbubbleDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
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
    interface PlotMapbubbleDataLabelsOptions {
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
        animation?: (boolean|Highcharts.PlotMapbubbleDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The background color or
         * gradient for the data label. In addition to regular colors, there are
         * two special setting for this option:
         *
         * - `auto` will set the background color the point's color.
         *
         * - `contrast` will set it to a contrast against the text color, with
         * an opacity allowing to see the underlying content. The contrast is
         * great enough to ensure readability for the text according to
         * accessibility standards.
         */
        backgroundColor?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The border color for the
         * data label. Setting it to `auto` will use the point's color. Defaults
         * to `undefined`.
         */
        borderColor?: Highcharts.ColorType;
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
         * (Highcharts, Highstock, Gantt) The distance of the data label from
         * the data point. Note that the `padding` setting also affects the
         * rendered distance, but is not visible unless the data label has a
         * border or background.
         */
        distance?: number;
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
         * instead, and return `undefined` to disable a single data label. (see
         * online documentation for example)
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
         * (Highcharts, Highstock, Highmaps, Gantt) The rank for this point's
         * data label in case of collision. If two data labels are about to
         * overlap, only the one with the highest `labelrank` will be drawn.
         */
        labelrank?: number;
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
         * requires (series.nullInteraction)[#series.nullInteraction] set to
         * `true`: `line`, `spline`, `area`, `area-spline`, `column`, `bar`, and
         * `timeline`. Does not work with series that don't display null points,
         * like `pie`.
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
         *
         * An array of numbers sets padding for the respective sides. An array
         * of two numbers repeats the values for the horizontal and vertical
         * sides.
         */
        padding?: (number|Array<number>);
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
         * this, case, the same effect can be achieved through the `text-shadow`
         * CSS property. As a complementary or alternative to the `textOutline`,
         * a `dataLabels.backgroundColor` can be used. It provides a more calm
         * impression and ensures readable text label, at the cost of a risk of
         * overshadowing the underlying chart elements.
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
         *
         * Text path support is not bundled into `highcharts.js`, and requires
         * the `modules/textpath.js` file. However, it is included in the script
         * files of those series types that use it by default.
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
         * labels group. Does not apply below series level options.
         *
         * Use a `zIndex` of 6 to display it above the series, or use a `zIndex`
         * of 2 to display it behind the series.
         */
        zIndex?: number;
    }
    /**
     * (Highmaps) Animation when hovering over the marker.
     */
    interface PlotMapbubbleMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
    /**
     * (Highmaps) Animation when hovering over the marker.
     */
    interface PlotMapbubbleMarkerStatesSelectAnimationOptions {
        duration?: number;
    }
    /**
     * (Highmaps) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotMapbubbleOnPointConnectorOptions {
        /**
         * (Highmaps) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highmaps) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highmaps) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highmaps) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotMapbubbleOnPointOptions {
        /**
         * (Highmaps) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotMapbubbleOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highmaps) The `id` of the point that we connect the series to. Only
         * points with a given `plotX` and `plotY` values and map points are
         * valid.
         */
        id?: string;
        /**
         * (Highmaps) Options allowing to set a position and an offset of the
         * series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotMapbubbleOnPointPositionOptions);
    }
    /**
     * (Highmaps) Options allowing to set a position and an offset of the series
     * in the _Series on point_ feature.
     */
    interface PlotMapbubbleOnPointPositionOptions {
        /**
         * (Highmaps) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highmaps) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highmaps) X position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highmaps) Y position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highmaps) A map bubble series is a bubble series laid out on top of a
     * map series, where each bubble is tied to a specific map area.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `mapbubble` series are defined in
     * plotOptions.mapbubble.
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
    interface PlotMapbubbleOptions {
        /**
         * (Highmaps) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highmaps) Allow this series' points to be selected by clicking on
         * the graphic (columns, point markers, pie slices, map areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Highmaps) Enable or disable the initial animation when a series is
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
         * (Highmaps) If there are more points in the series than the
         * `animationLimit`, the animation won't run. Animation affects overall
         * performance and doesn't work well with heavy data series.
         */
        animationLimit?: number;
        /**
         * (Highmaps) Sets the color blending in the boost module.
         */
        boostBlending?: Highcharts.OptionsBoostBlendingValue;
        /**
         * (Highmaps) Set the point threshold for when a series should enter
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
         * (Highmaps) The border color of the map areas.
         *
         * In styled mode, the border stroke is given in the `.highcharts-point`
         * class.
         */
        borderColor?: Highcharts.ColorType;
        /**
         * (Highmaps) The border width of each map area.
         *
         * In styled mode, the border stroke width is given in the
         * `.highcharts-point` class.
         */
        borderWidth?: number;
        /**
         * (Highmaps) An additional class name to apply to the series' graphical
         * elements. This option does not replace default class names of the
         * graphical element. Changes to the series' color will also be
         * reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highmaps) Disable this option to allow series rendering in the whole
         * plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highmaps) The main color of the series. This color affects both the
         * fill and the stroke of the bubble. For enhanced control, use `marker`
         * options.
         */
        color?: Highcharts.ColorType;
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
         * (Highmaps) When using automatic point colors pulled from the global
         * colors or series-specific plotOptions.bubble.colors collections, this
         * option determines whether the chart should receive one color per
         * series or one color per point.
         *
         * In styled mode, the `colors` or `series.colors` arrays are not
         * supported, and instead this option gives the points individual color
         * class names on the form `highcharts-color-{n}`.
         */
        colorByPoint?: boolean;
        /**
         * (Highmaps) Styled mode only. A specific color index to use for the
         * series, so its graphic representations are given the class name
         * `highcharts-color-{n}`.
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
         * (Highmaps) You can set the cursor to "pointer" if you have click
         * events attached to the series, to signal to the user that the points
         * and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highmaps) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highmaps) Name of the dash style to use for the graph, or for some
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
        dataLabels?: (Highcharts.PlotMapbubbleDataLabelsOptions|Array<Highcharts.PlotMapbubbleDataLabelsOptions>);
        /**
         * (Highmaps) The mapping between the data table and the series data
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
         * (Highmaps) Options for a specific series-level data table or an array
         * of data tables. The `dataTable` option can be either a configuration
         * object or an instance of the `DataTable` class. If a `DataTable`
         * instance is passed, it will be used directly. If a configuration
         * object or an array is passed, a new `DataTable` instance will be
         * created based on the provided configuration.
         */
        dataTable?: (Highcharts.DataTable|Highcharts.DataTableOptionsObject|Array<(Highcharts.DataTable|Highcharts.DataTableOptionsObject)>);
        /**
         * (Highmaps) Deprecated. Use
         * plotOptions.series.accessibility.description instead.
         *
         * A description of the series to add to the screen reader information
         * about the series.
         *
         * @deprecated 8.0.0
         */
        description?: string;
        /**
         * (Highmaps) Whether to display negative sized bubbles. The threshold
         * is given by the zThreshold option, and negative bubbles can be
         * visualized by setting negativeColor.
         */
        displayNegative?: boolean;
        /**
         * (Highmaps) The draggable-points module allows points to be moved
         * around or modified in the chart. In addition to the options mentioned
         * under the `dragDrop` API structure, the module fires three events,
         * point.dragStart, point.drag and point.drop.
         */
        dragDrop?: Highcharts.SeriesDragDropOptionsObject;
        /**
         * (Highmaps) Enable or disable the mouse tracking for a specific
         * series. This includes point tooltips and click events on graphs and
         * points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highmaps) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highmaps) Determines whether the series should look for the nearest
         * point in both dimensions or just the x-dimension when hovering the
         * series. Defaults to `'xy'` for scatter series and `'x'` for most
         * other series. If the data has duplicate x-values, it is recommended
         * to set this to `'xy'` to allow hovering over all points.
         *
         * Applies only to series types using nearest neighbor search (not
         * direct hover) for tooltip.
         */
        findNearestPointBy?: Highcharts.OptionsFindNearestPointByValue;
        /**
         * (Highmaps) Highlight only the hovered point and fade the remaining
         * points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highmaps) When set to `false` will prevent the series data from
         * being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highmaps) What property to join the `mapData` to the value data. For
         * example, if joinBy is "code", the mapData items with a specific code
         * is merged into the data with the same code. For maps loaded from
         * GeoJSON, the keys may be held in each point's `properties` object.
         *
         * The joinBy option can also be an array of two values, where the first
         * points to a key in the `mapData`, and the second points to another
         * key in the `data`.
         *
         * When joinBy is `null`, the map items are joined by their position in
         * the array, which performs much better in maps with many data points.
         * This is the recommended option if you are printing more than a
         * thousand data points and have a backend that can preprocess the data
         * into a parallel array of the mapData.
         */
        joinBy?: (string|Array<string>);
        /**
         * (Highmaps) An array specifying which option maps to which key in the
         * data point array. This makes it convenient to work with unstructured
         * data arrays from different sources.
         */
        keys?: Array<string>;
        /**
         * (Highmaps) What type of legend symbol to render for this series. Can
         * be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highmaps) The line cap used for line ends and line joins on the
         * graph.
         */
        linecap?: Highcharts.SeriesLinecapValue;
        /**
         * (Highmaps) Color of the line connecting bubbles. The default value is
         * the same as series' color.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        lineColor?: Highcharts.ColorType;
        /**
         * (Highmaps) Pixel width of the line connecting bubbles.
         */
        lineWidth?: number;
        /**
         * (Highmaps) Options for the point markers of line and scatter-like
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
         * (Highmaps) Maximum bubble size. Bubbles will automatically size
         * between the `minSize` and `maxSize` to reflect the `z` value of each
         * bubble. Can be either pixels (when no unit is given), or a percentage
         * of the smallest one of the plot width and height.
         */
        maxSize?: (number|string);
        /**
         * (Highmaps) Minimum bubble size. Bubbles will automatically size
         * between the `minSize` and `maxSize` to reflect the `z` value of each
         * bubble. Can be either pixels (when no unit is given), or a percentage
         * of the smallest one of the plot width and height.
         */
        minSize?: (number|string);
        /**
         * (Highmaps) Options for the _Series on point_ feature. Only `pie` and
         * `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotMapbubbleOnPointOptions);
        /**
         * (Highmaps) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Highmaps) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highmaps) Deprecated. Use
         * series.accessibility.point.descriptionFormat instead.
         *
         * Same as accessibility.point.descriptionFormat, but for an individual
         * series. Overrides the chart wide configuration.
         *
         * @deprecated 12.6.0
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highmaps) Deprecated. Use
         * series.accessibility.point.descriptionFormatter instead.
         *
         * Same as accessibility.series.descriptionFormatter, but for an
         * individual series. Overrides the chart wide configuration.
         *
         * @deprecated 8.0.0
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highmaps) Whether to select the series initially. If `showCheckbox`
         * is true, the checkbox next to the series name in the legend will be
         * checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highmaps) If true, a checkbox is displayed next to the legend item
         * to allow selecting the series. The state of the checkbox is
         * determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highmaps) Whether to display this particular series or series type
         * in the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highmaps) Whether the bubble's value should be represented by the
         * area or the width of the bubble. The default, `area`, corresponds
         * best to the human perception of the size of each bubble.
         */
        sizeBy?: Highcharts.BubbleSizeByValue;
        /**
         * (Highmaps) Deprecated. Use series.accessibility.keyboardNavigation
         * instead.
         *
         * If set to `true`, the accessibility module will skip past the points
         * in this series for keyboard navigation.
         *
         * @deprecated 8.0.0
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highmaps) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highmaps) A collection of options for different series states.
         *
         * In addition to the options documented under each state, any option
         * from the parent series type can be set, with exception of `data` and
         * `states`.
         */
        states?: Highcharts.SeriesStatesOptionsObject;
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
         * (Highmaps) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highmaps) Define the z index of the series.
         */
        zIndex?: number;
        /**
         * (Highmaps) Whether to zoom non-cartesian series. If `chart.zooming`
         * is set, the option allows to disable zooming on an individual
         * non-cartesian series. By default zooming is enabled for all series.
         *
         * **Note**: This option works only for non-cartesian series.
         */
        zoomEnabled?: boolean;
    }
    /**
     * (Highcharts, Highstock, Gantt) For series on datetime axes, the date
     * format in the tooltip's header will by default be guessed based on the
     * closest data points. This member gives the default string representations
     * used for each unit. For an overview of the string or object
     * configuration, see dateFormat.
     */
    interface PlotMapbubbleTooltipDateTimeLabelFormatsOptions {
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
     * (Highcharts, Highstock, Highmaps) Options for the tooltip header when
     * tooltip.split is enabled. The header is the box containing the X value in
     * a split tooltip.
     */
    interface PlotMapbubbleTooltipHeaderOptions {
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
     * (Highcharts, Highstock, Highmaps) Positioning options for fixed tooltip,
     * taking effect only when tooltip.fixed is `true`.
     */
    interface PlotMapbubbleTooltipPositionOptions {
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
     * (Highmaps) The geometry of a point.
     *
     * To achieve a better separation between the structure and the data, it is
     * recommended to use `mapData` to define the geometry instead of defining
     * it on the data points themselves.
     *
     * The geometry object is compatible to that of a `feature` in geoJSON, so
     * features of geoJSON can be passed directly into the `data`, optionally
     * after first filtering and processing it.
     */
    interface SeriesMapbubbleDataGeometryOptions {
        /**
         * (Highmaps) The geometry coordinates in terms of `[longitude,
         * latitude]`.
         */
        coordinates?: Highcharts.LonLatArray;
        /**
         * (Highmaps) The geometry type, which in case of the `mappoint` series
         * is always `Point`.
         */
        type?: "Point";
    }
    /**
     * (Highmaps) An array of data points for the series. For the `mapbubble`
     * series type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will
     * be interpreted as `z` options. Example: (see online documentation for
     * example)
     *
     * 2. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesMapbubbleDataOptions {
        /**
         * (Highmaps) Individual color for the point. By default the color is
         * either used to denote the value, or pulled from the global `colors`
         * array.
         */
        color?: Highcharts.ColorType;
        /**
         * (Highmaps) Individual data label for each point. The options are the
         * same as the ones for plotOptions.series.dataLabels.
         */
        dataLabels?: Highcharts.DataLabelsOptions;
        /**
         * (Highmaps) The `id` of a series in the drilldown.series array to use
         * for a drilldown for this point.
         */
        drilldown?: string;
        /**
         * (Highmaps) Individual point events
         */
        events?: Highcharts.PointEventsOptionsObject;
        /**
         * (Highmaps) The geometry of a point.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define the geometry instead of
         * defining it on the data points themselves.
         *
         * The geometry object is compatible to that of a `feature` in geoJSON,
         * so features of geoJSON can be passed directly into the `data`,
         * optionally after first filtering and processing it.
         */
        geometry?: (object|Highcharts.SeriesMapbubbleDataGeometryOptions);
        /**
         * (Highmaps) An id for the point. This can be used after render time to
         * get a pointer to the point object through `chart.get()`.
         */
        id?: string;
        /**
         * (Highmaps) The name of the point as shown in the legend, tooltip,
         * dataLabel etc.
         */
        name?: string;
        /**
         * (Highmaps) A collection of options for different series states.
         *
         * In addition to the options documented under each state, any option
         * from the parent series type can be set, with exception of `data` and
         * `states`.
         */
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highmaps) While the `x` and `y` values of the bubble are determined
         * by the underlying map, the `z` indicates the actual value that gives
         * the size of the bubble.
         */
        z?: (number|null);
    }
    /**
     * (Highmaps) A `mapbubble` series. If the type option is not specified, it
     * is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `mapbubble` series are defined in
     * plotOptions.mapbubble.
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
     * You have to extend the `SeriesMapbubbleOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesMapbubbleOptions {
     * customProperty: string; }
     *
     */
    interface SeriesMapbubbleOptions extends Highcharts.PlotMapbubbleOptions, Highcharts.SeriesOptions {
        /**
         * Not available
         */
        cluster?: undefined;
        /**
         * (Highmaps) An array of data points for the series. For the
         * `mapbubble` series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values
         * will be interpreted as `z` options. Example: (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<(number|null|Highcharts.SeriesMapbubbleDataOptions)>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "mapbubble";
    }
}

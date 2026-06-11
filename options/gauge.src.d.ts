/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
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
    interface PlotGaugeDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Styles for the label. The default `color` setting is
     * `"contrast"`, which is a pseudo color that Highcharts picks up and
     * applies the maximum contrast to the underlying point item, for example
     * the bar in a bar chart.
     *
     * The `textOutline` is a pseudo property that applies an outline of the
     * given width with the given color, which by default is the maximum
     * contrast to the text. So a bright text color will result in a black text
     * outline for maximum readability on a mixed background. In some cases,
     * especially with grayscale text, the text outline doesn't work well, in
     * which cases it can be disabled by setting it to `"none"`. When `useHTML`
     * is true, the `textOutline` will not be picked up. In this, case, the same
     * effect can be achieved through the `text-shadow` CSS property. As a
     * complementary or alternative to the `textOutline`, a
     * `dataLabels.backgroundColor` can be used. It provides a more calm
     * impression and ensures readable text label, at the cost of a risk of
     * overshadowing the underlying chart elements.
     *
     * For some series types, where each point has an extent, like for example
     * tree maps, the data label may overflow the point. There are two
     * strategies for handling overflow. By default, the text will wrap to
     * multiple lines. The other strategy is to set `style.textOverflow` to
     * `ellipsis`, which will keep the text on one line plus it will break
     * inside long words.
     */
    interface PlotGaugeDataLabelsStyleOptions {
        fontSize?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotGaugeLabelStyleOptions {
        fontSize?: number;
        fontWeight?: string;
    }
    /**
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotGaugeOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotGaugeOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotGaugeOnPointPositionOptions);
    }
    /**
     * (Highcharts) Gauges are circular plots displaying one or more values with
     * a dial pointing to values along the perimeter.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `gauge` series are defined in plotOptions.gauge.
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
    interface PlotGaugeOptions {
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
        color?: string;
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
         * (Highcharts, Highstock, Gantt) When true, each point or column edge
         * is rounded to its nearest pixel in order to render sharp on screen.
         * In some cases, when there are a lot of densely packed columns, this
         * leads to visible difference in column widths or distance between
         * columns. In these cases, setting `crisp` to `false` may look better,
         * even though each column is rendered blurry.
         */
        crisp?: boolean;
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
         * (Highcharts) Data labels for the gauge. For gauges, the data labels
         * are enabled by default and shown in the center.
         */
        dataLabels?: (Highcharts.PlotGaugeDataLabelsOptions|Array<Highcharts.PlotGaugeDataLabelsOptions>);
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
         * (Highcharts) Options for the dial or arrow pointer of the gauge.
         *
         * In styled mode, the dial is styled with the `.highcharts-gauge-series
         * .highcharts-dial` rule.
         */
        dial?: Highcharts.PlotGaugeDialOptions;
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
         * (Highcharts, Highstock) Defines when to display a gap in the graph,
         * together with the gapUnit option.
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
         * (Highcharts, Highstock) Together with gapSize, this option defines
         * where to draw gaps in the graph.
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
         * (Highcharts, Highstock, Highmaps) Defines the color of the legend
         * symbol for this series. Defaults to undefined, in which case the
         * series color is used. Does not work with styled mode.
         */
        legendSymbolColor?: Highcharts.ColorType;
        /**
         * (Highcharts) The line cap used for line ends and line joins on the
         * graph.
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
         *
         * If a `compare` value is not set on a linked series, it will be
         * inherited from the parent series.
         */
        linkedTo?: string;
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
        onPoint?: (object|Highcharts.PlotGaugeOnPointOptions);
        /**
         * (Highcharts) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts) Allow the dial to overshoot the end of the perimeter
         * axis by this many degrees. Say if the gauge axis goes from 0 to 60, a
         * value of 100, or 1000, will show 5 degrees beyond the end of the axis
         * when this option is set to 5.
         */
        overshoot?: number;
        /**
         * (Highcharts) Options for the pivot or the center point of the gauge.
         *
         * In styled mode, the pivot is styled with the
         * `.highcharts-gauge-series .highcharts-pivot` rule.
         */
        pivot?: Highcharts.PlotGaugePivotOptions;
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
         * in the legend. Defaults to false for gauge series.
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
         * (Highcharts) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
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
        threshold?: number;
        /**
         * (Highcharts) A configuration object for the tooltip rendering of each
         * single series. Properties are inherited from tooltip, but only the
         * following properties can be defined on a series level.
         */
        tooltip?: Highcharts.SeriesTooltipOptionsObject;
        /**
         * (Highcharts) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highcharts) When this option is `true`, the dial will wrap around
         * the axes. For instance, in a full-range gauge going from 0 to 360, a
         * value of 400 will point to 40. When `wrap` is `false`, the dial stops
         * at 360.
         *
         * Defaults to `undefined`, which is equivalent to `true` when the axis
         * ranges over 360 degrees, and `false` when less.
         */
        wrap?: boolean;
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
     * (Highcharts, Highstock, Gantt) For series on datetime axes, the date
     * format in the tooltip's header will by default be guessed based on the
     * closest data points. This member gives the default string representations
     * used for each unit. For an overview of the string or object
     * configuration, see dateFormat.
     */
    interface PlotGaugeTooltipDateTimeLabelFormatsOptions {
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
     * (Highcharts) Positioning options for fixed tooltip, taking effect only
     * when tooltip.fixed is `true`.
     */
    interface PlotGaugeTooltipPositionOptions {
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
    interface SeriesGaugeDataDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
}

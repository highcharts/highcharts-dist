/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
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
    interface PlotSeriesDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for the series data sorting.
     */
    interface PlotSeriesDataSortingOptions {
        /**
         * (Highcharts, Highstock) Enable or disable data sorting for the
         * series. Use xAxis.reversed to change the sorting order.
         */
        enabled?: boolean;
        /**
         * (Highcharts, Highstock) Whether to allow matching points by name in
         * an update. If this option is disabled, points will be matched by
         * order.
         */
        matchByName?: boolean;
        /**
         * (Highcharts, Highstock) Determines what data value should be used to
         * sort by.
         */
        sortKey?: string;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Options for the _Series on
     * point_ feature. Only `pie` and `sunburst` series are supported at this
     * moment.
     */
    interface PlotSeriesOnPointOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the connector in
         * the _Series on point_ feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotSeriesOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The `id` of the point that
         * we connect the series to. Only points with a given `plotX` and
         * `plotY` values and map points are valid.
         */
        id?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options allowing to set a
         * position and an offset of the series in the _Series on point_
         * feature.
         */
        position?: (object|Highcharts.PlotSeriesOnPointPositionOptions);
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) General options for all series
     * types.
     *
     * In TypeScript the type option must always be set.
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
     */
    interface PlotSeriesOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Accessibility options for a
         * series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highmaps) Whether all areas of the map defined in `mapData` should
         * be rendered. If `true`, areas which don't correspond to a data point,
         * are rendered as `null` points. If `false`, those areas are skipped.
         */
        allAreas?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Allow this series' points to
         * be selected by clicking on the graphic (columns, point markers, pie
         * slices, map areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the
         * initial animation when a series is displayed. The animation can also
         * be set as a configuration object. Please note that this option only
         * applies to the initial animation of the series itself. For other
         * animations, see chart.animation and the animation parameter under the
         * API methods. The following properties are supported:
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
         * (Highcharts, Highstock, Highmaps, Gantt) For some series, there is a
         * limit that shuts down animation by default when the total number of
         * points in the chart is too high. For example, for a column chart and
         * its derivatives, animation does not run if there is more than 250
         * points totally. To disable this cap, set `animationLimit` to
         * `Infinity`. This option works if animation is fired on individual
         * points, not on a group of points like e.g. during the initial
         * animation.
         */
        animationLimit?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Sets the color blending in
         * the boost module.
         */
        boostBlending?: Highcharts.OptionsBoostBlendingValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Set the point threshold for
         * when a series should enter boost mode.
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
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) The border width of each map area.
         *
         * In styled mode, the border stroke width is given in the
         * `.highcharts-point` class.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) An additional class name to
         * apply to the series' graphical elements. This option does not replace
         * default class names of the graphical element. Changes to the series'
         * color will also be reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Disable this option to allow
         * series rendering in the whole plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The main color of the
         * series. In line type series it applies to the line and the point
         * markers unless otherwise specified. In bar type series it applies to
         * the bars unless a color is specified per point. The default value is
         * pulled from the `options.colors` array.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Styled mode only. A specific
         * color index to use for the series, so its graphic representations are
         * given the class name `highcharts-color-{n}`.
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
         * within the visible range or should start from the first point
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
         * (Gantt) Override Pathfinder connector options for a series. Requires
         * Highcharts Gantt to be loaded.
         */
        connectors?: Highcharts.SeriesConnectorsOptionsObject;
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
         * (Highcharts, Highstock, Highmaps, Gantt) You can set the cursor to
         * "pointer" if you have click events attached to the series, to signal
         * to the user that the points and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) A reserved subspace to store
         * options and values for customized functionality. Here you can add
         * additional data for your own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Name of the dash style to
         * use for the graph, or for some series types the outline of each
         * shape.
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
        dataLabels?: (Highcharts.PlotSeriesDataLabelsOptions|Array<Highcharts.PlotSeriesDataLabelsOptions>);
        /**
         * (Highcharts, Highstock) Options for the series data sorting.
         */
        dataSorting?: (Highcharts.DataSortingOptionsObject|Highcharts.PlotSeriesDataSortingOptions);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) A description of the series
         * to add to the screen reader information about the series.
         */
        description?: string;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The draggable-points module
         * allows points to be moved around or modified in the chart. In
         * addition to the options mentioned under the `dragDrop` API structure,
         * the module fires three events, point.dragStart, point.drag and
         * point.drop.
         */
        dragDrop?: Highcharts.SeriesDragDropOptionsObject;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the mouse
         * tracking for a specific series. This includes point tooltips and
         * click events on graphs and points. For large datasets it improves
         * performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) General event handlers for
         * the series items. These event hooks can also be attached to the
         * series at run time using the `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Determines whether the
         * series should look for the nearest point in both dimensions or just
         * the x-dimension when hovering the series. Defaults to `'xy'` for
         * scatter series and `'x'` for most other series. If the data has
         * duplicate x-values, it is recommended to set this to `'xy'` to allow
         * hovering over all points.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Highlight only the hovered
         * point and fade the remaining points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) When set to `false` will
         * prevent the series data from being included in any form of data
         * export.
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
         * (Highcharts, Highstock, Highmaps, Gantt) An array specifying which
         * option maps to which key in the data point array. This makes it
         * convenient to work with unstructured data arrays from different
         * sources.
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
         * (Highcharts, Highstock, Highmaps, Gantt) What type of legend symbol
         * to render for this series. Can be one of `areaMarker`, `lineMarker`
         * or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts, Highstock) The line cap used for line ends and line
         * joins on the graph.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the point
         * markers of line and scatter-like series. Properties like `fillColor`,
         * `lineColor` and `lineWidth` define the visual appearance of the
         * markers. The `symbol` option defines the shape. Other series types,
         * like column series, don't have markers, but have visual options on
         * the series level instead.
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
         * (Highcharts, Highstock, Highmaps, Gantt) The color for the parts of
         * the graph or points that are below the threshold. Note that `zones`
         * takes precedence over the negative color. Using `negativeColor` is
         * equivalent to applying a zone with value of 0.
         */
        negativeColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the _Series on
         * point_ feature. Only `pie` and `sunburst` series are supported at
         * this moment.
         */
        onPoint?: (object|Highcharts.PlotSeriesOnPointOptions);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Opacity of a series parts:
         * line, fill (e.g. area) and dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Properties for each single
         * point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Same as
         * accessibility.point.descriptionFormat, but for an individual series.
         * Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Same as
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
         * points in a series, pointStart defines on what value to start. For
         * example, if a series contains one yearly value starting from 1945,
         * set pointStart to 1945.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point. The x value from the point options is multiplied by
         * `pointInterval` and added to `pointStart` to produce a modified x
         * value.
         */
        pointStart?: number;
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
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to select the series
         * initially. If `showCheckbox` is true, the checkbox next to the series
         * name in the legend will be checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to apply a drop
         * shadow to the graph line. Since 2.3 the shadow can be an object
         * configuration containing `color`, `offsetX`, `offsetY`, `opacity` and
         * `width`.
         *
         * Note that in some cases, like stacked columns or other dense layouts,
         * the series may cast shadows on each other. In that case, the
         * `chart.seriesGroupShadow` allows applying a common drop shadow to the
         * whole series group.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) If true, a checkbox is
         * displayed next to the legend item to allow selecting the series. The
         * state of the checkbox is determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Whether to display this
         * particular series or series type in the legend. Standalone series are
         * shown in legend by default, and linked series are not. Since v7.2.0
         * it is possible to show series that use colorAxis by setting this
         * option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highstock) Whether or not to show the series in the navigator. Takes
         * precedence over navigator.baseSeries if defined.
         */
        showInNavigator?: boolean;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) If set to `true`, the
         * accessibility module will skip past the points in this series for
         * keyboard navigation.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Sonification/audio chart
         * options for a series.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Sticky tracking of mouse
         * events. When true, the `mouseOut` event on a series isn't triggered
         * until the mouse moves over another series, or out of the plot area.
         * When false, the `mouseOut` event on a series is triggered when the
         * mouse leaves the area around the series' graph or markers. This also
         * implies the tooltip when not shared. When `stickyTracking` is false
         * and `tooltip.shared` is false, the tooltip will be hidden when moving
         * the mouse between series. Defaults to true for line and area type
         * series, but to false for columns, pies etc.
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
         * (Highcharts, Highstock, Highmaps, Gantt) A configuration object for
         * the tooltip rendering of each single series. Properties are inherited
         * from tooltip, but only the following properties can be defined on a
         * series level.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Set the initial visibility
         * of the series.
         */
        visible?: boolean;
        /**
         * (Highmaps) Define the z index of the series.
         */
        zIndex?: number;
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
}

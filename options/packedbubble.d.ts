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
    interface PlotPackedbubbleAccessibilityPointOptions {
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
    interface PlotPackedbubbleDataLabelsStyleOptions {
        transition?: string;
    }
    /**
     * (Highcharts) Options for layout algorithm when simulation is enabled.
     * Inside there are options to change the speed, padding, initial bubbles
     * positions and more.
     */
    interface PlotPackedbubbleLayoutAlgorithmOptions {
        /**
         * (Highcharts) The distance between two bubbles, when the algorithm
         * starts to treat two bubbles as overlapping. The `bubblePadding` is
         * also the expected distance between all the bubbles on simulation end.
         */
        bubblePadding?: number;
        /**
         * (Highcharts) In case of split series, this option allows user to drag
         * and drop points between series, for changing point related series.
         */
        dragBetweenSeries?: boolean;
        /**
         * (Highcharts) Experimental. Enables live simulation of the algorithm
         * implementation. All nodes are animated as the forces applies on them.
         */
        enableSimulation?: boolean;
        /**
         * (Highcharts) Friction applied on forces to prevent nodes rushing to
         * fast to the desired positions.
         */
        friction?: number;
        /**
         * (Highcharts) Gravitational const used in the barycenter force of the
         * algorithm.
         */
        gravitationalConstant?: number;
        /**
         * (Highcharts) When `initialPositions` are set to 'circle',
         * `initialPositionRadius` is a distance from the center of circle, in
         * which nodes are created.
         */
        initialPositionRadius?: number;
        /**
         * (Highcharts) Initial layout algorithm for positioning nodes. Can be
         * one of the built-in options ("circle", "random") or a function where
         * positions should be set on each node (`this.nodes`) as `node.plotX`
         * and `node.plotY`.
         */
        initialPositions?: ("circle"|"random"|Function);
        /**
         * (Highcharts) Integration type. Available options are `'euler'` and
         * `'verlet'`. Integration determines how forces are applied on
         * particles. In Euler integration, force is applied direct as
         * `newPosition += velocity;`. In Verlet integration, new position is
         * based on a previous position without velocity: `newPosition +=
         * previousPosition - newPosition`.
         *
         * Note that different integrations give different results as forces are
         * different.
         *
         * In Highcharts v7.0.x only `'euler'` integration was supported.
         */
        integration?: Highcharts.OptionsIntegrationValue;
        /**
         * (Highcharts) Ideal length (px) of the link between two nodes. When
         * not defined, length is calculated as: `Math.pow(availableWidth *
         * availableHeight / nodesLength, 0.4);`
         *
         * Note: Because of the algorithm specification, length of each link
         * might be not exactly as specified.
         */
        linkLength?: number;
        /**
         * (Highcharts) Max number of iterations before algorithm will stop. In
         * general, algorithm should find positions sooner, but when rendering
         * huge number of nodes, it is recommended to increase this value as
         * finding perfect graph positions can require more time.
         */
        maxIterations?: number;
        /**
         * (Highcharts) Max speed that node can get in one iteration. In terms
         * of simulation, it's a maximum translation (in pixels) that a node can
         * move (in both, x and y, dimensions). While `friction` is applied on
         * all nodes, max speed is applied only for nodes that move very fast,
         * for example small or disconnected ones.
         */
        maxSpeed?: number;
        /**
         * (Highcharts) Whether bubbles should interact with their parentNode to
         * keep them inside.
         */
        parentNodeLimit?: boolean;
        /**
         * (Highcharts) Layout algorithm options for parent nodes.
         */
        parentNodeOptions?: Highcharts.PlotPackedbubbleLayoutAlgorithmParentNodeOptions;
        /**
         * (Highcharts) Whether series should interact with each other or not.
         * When `parentNodeLimit` is set to true, thi option should be set to
         * false to avoid sticking points in wrong series parentNode.
         */
        seriesInteraction?: boolean;
        /**
         * (Highcharts) Whether to split series into individual groups or to mix
         * all series together.
         */
        splitSeries?: boolean;
        /**
         * (Highcharts) Type of the algorithm used when positioning nodes.
         */
        type?: "reingold-fruchterman";
    }
    /**
     * (Highcharts) Animation when hovering over the marker.
     */
    interface PlotPackedbubbleMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotPackedbubbleOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotPackedbubbleOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotPackedbubbleOnPointPositionOptions);
    }
    /**
     * (Highcharts) A packed bubble series is a two dimensional series type,
     * where each point renders a value in X, Y position. Each point is drawn as
     * a bubble where the bubbles don't overlap with each other and the radius
     * of the bubble relates to the value.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `packedbubble` series are defined in
     * plotOptions.packedbubble.
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
    interface PlotPackedbubbleOptions {
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
         * (Highcharts) If there are more points in the series than the
         * `animationLimit`, the animation won't run. Animation affects overall
         * performance and doesn't work well with heavy data series.
         */
        animationLimit?: number;
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
         * (Highcharts) Styled mode only. A specific color index to use for the
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
         * (Highcharts) Name of the dash style to use for the graph, or for some
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
        dataLabels?: (Highcharts.SeriesPackedBubbleDataLabelsOptionsObject|Array<Highcharts.SeriesPackedBubbleDataLabelsOptionsObject>);
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
         * (Highcharts) Whether to display negative sized bubbles. The threshold
         * is given by the zThreshold option, and negative bubbles can be
         * visualized by setting negativeColor.
         */
        displayNegative?: boolean;
        /**
         * (Highcharts) Flag to determine if nodes are draggable or not.
         * Available for graph with useSimulation set to true only.
         */
        draggable?: boolean;
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
         * (Highcharts) Options for layout algorithm when simulation is enabled.
         * Inside there are options to change the speed, padding, initial
         * bubbles positions and more.
         */
        layoutAlgorithm?: Highcharts.PlotPackedbubbleLayoutAlgorithmOptions;
        /**
         * (Highcharts) What type of legend symbol to render for this series.
         * Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts) The line cap used for line ends and line joins on the
         * graph.
         */
        linecap?: Highcharts.SeriesLinecapValue;
        /**
         * (Highcharts, Highstock) The width of the line connecting the data
         * points.
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
         * (Highcharts, Highstock) Maximum bubble size. Bubbles will
         * automatically size between the `minSize` and `maxSize` to reflect the
         * value of each bubble. Can be either pixels (when no unit is given),
         * or a percentage of the smallest one of the plot width and height,
         * divided by the square root of total number of points.
         */
        maxSize?: (number|string);
        /**
         * (Highcharts, Highstock) Minimum bubble size. Bubbles will
         * automatically size between the `minSize` and `maxSize` to reflect the
         * value of each bubble. Can be either pixels (when no unit is given),
         * or a percentage of the smallest one of the plot width and height,
         * divided by the square root of total number of points.
         */
        minSize?: (number|string);
        /**
         * (Highcharts) When a point's Z value is below the zThreshold setting,
         * this color is used.
         */
        negativeColor?: Highcharts.ColorType;
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
        onPoint?: (object|Highcharts.PlotPackedbubbleOnPointOptions);
        /**
         * (Highcharts) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts) Series options for parent nodes.
         */
        parentNode?: Highcharts.PlotPackedbubbleParentNodeOptions;
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
         * in the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highcharts) Whether the bubble's value should be represented by the
         * area or the width of the bubble. The default, `area`, corresponds
         * best to the human perception of the size of each bubble.
         */
        sizeBy?: string;
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
         * (Highcharts) When this is true, the series will not cause the Y axis
         * to cross the zero plane (or threshold option) unless the data
         * actually crosses the plane.
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
         * (Highcharts) A collection of options for different series states.
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
         * (Highcharts, Highstock) The threshold, also called zero level or base
         * level. For line type series this is only used in conjunction with
         * negativeColor.
         */
        threshold?: (number|null);
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
         * (Highcharts) An option is giving a possibility to choose between
         * using simulation for calculating bubble positions. These reflects in
         * both animation and final position of bubbles. Simulation is also
         * adding options to the series graph based on used layout. In case of
         * big data sets, with any performance issues, it is possible to disable
         * animation and pack bubble in a simple circular way.
         */
        useSimulation?: boolean;
        /**
         * (Highcharts) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highcharts) The minimum for the Z value range. Defaults to the
         * highest Z value in the data.
         */
        zMax?: number;
        /**
         * (Highcharts) The minimum for the Z value range. Defaults to the
         * lowest Z value in the data.
         */
        zMin?: number;
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
        /**
         * (Highcharts) Whether to zoom non-cartesian series. If `chart.zooming`
         * is set, the option allows to disable zooming on an individual
         * non-cartesian series. By default zooming is enabled for all series.
         *
         * **Note**: This option works only for non-cartesian series.
         */
        zoomEnabled?: boolean;
        /**
         * (Highcharts) When displayNegative is `false`, bubbles with lower Z
         * values are skipped. When `displayNegative` is `true` and a
         * negativeColor is given, points with lower Z is colored.
         */
        zThreshold?: number;
    }
    /**
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotPackedbubbleStatesHoverAnimationOptions {
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
    interface PlotPackedbubbleStatesSelectAnimationOptions {
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
    interface PlotPackedbubbleTooltipHeaderOptions {
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
    interface SeriesPackedbubbleDataDataLabelsAnimationOptions {
        /**
         * (Highcharts) The animation delay time in milliseconds. Set to `0` to
         * render the data labels immediately. As `undefined` inherits defer
         * time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) A `packedbubble` series. If the type option is not
     * specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `packedbubble` series are defined in
     * plotOptions.packedbubble.
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
     * You have to extend the `SeriesPackedbubbleOptions` via an interface to
     * allow custom properties: ``` declare interface SeriesPackedbubbleOptions
     * { customProperty: string; }
     *
     */
    interface SeriesPackedbubbleOptions extends Highcharts.PlotPackedbubbleOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `packedbubble` series type, points can be given in the following
         * ways:
         *
         * 1. An array of `values`. (see online documentation for example)
         *
         * 2. An array of objects with named values. The objects are point
         * configuration objects as seen below. If the total number of data
         * points exceeds the series' turboThreshold, this option is not
         * available. (see online documentation for example)
         */
        data?: (Highcharts.PointOptionsObject|Array<(object|any[])>);
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
        stack?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "packedbubble";
    }
}

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
    interface PlotMapbubbleDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highmaps) Animation when hovering over the marker.
     */
    interface PlotMapbubbleMarkerStatesHoverAnimationOptions {
        duration?: number;
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
         * (Highmaps) Whether all areas of the map defined in `mapData` should
         * be rendered. If `true`, areas which don't correspond to a data point,
         * are rendered as `null` points. If `false`, those areas are skipped.
         */
        allAreas?: boolean;
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
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
         * (Highmaps) A description of the series to add to the screen reader
         * information about the series.
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
         * (Highmaps) Color of the line connecting bubbles. The default value is
         * the same as series' color.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        lineColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
         * (Highmaps) Same as accessibility.point.descriptionFormat, but for an
         * individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highmaps) Same as accessibility.series.descriptionFormatter, but for
         * an individual series. Overrides the chart wide configuration.
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
         * (Highmaps) If set to `true`, the accessibility module will skip past
         * the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highmaps) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highmaps) A collection of options for different series states.
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
         * Note: This option works only for non-cartesian series.
         */
        zoomEnabled?: boolean;
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
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
        type: "mapbubble";
    }
}

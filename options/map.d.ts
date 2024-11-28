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
    interface PlotMapAccessibilityPointOptions {
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
    interface PlotMapDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highmaps) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotMapOnPointOptions {
        /**
         * (Highmaps) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotMapOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotMapOnPointPositionOptions);
    }
    /**
     * (Highmaps) The map series is used for basic choropleth maps, where each
     * map area has a color based on its value.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `map` series are defined in plotOptions.map.
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
    interface PlotMapOptions {
        /**
         * (Highmaps) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highmaps) Whether the MapView takes this series into account when
         * computing the default zoom and center of the map.
         */
        affectsMapView?: boolean;
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
        animation?: boolean;
        /**
         * (Highmaps) For some series, there is a limit that shuts down
         * animation by default when the total number of points in the chart is
         * too high. For example, for a column chart and its derivatives,
         * animation does not run if there is more than 250 points totally. To
         * disable this cap, set `animationLimit` to `Infinity`. This option
         * works if animation is fired on individual points, not on a group of
         * points like e.g. during the initial animation.
         */
        animationLimit?: number;
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
         * (Highmaps) The main color of the series. In line type series it
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
         * colors or series-specific plotOptions.map.colors collections, this
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
         * (Highmaps) A series specific or series type specific color set to
         * apply instead of the global colors when colorByPoint is true.
         */
        colors?: Array<(Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject)>;
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
        dataLabels?: (Highcharts.PlotMapDataLabelsOptions|Array<Highcharts.PlotMapDataLabelsOptions>);
        /**
         * (Highmaps) A description of the series to add to the screen reader
         * information about the series.
         */
        description?: string;
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
         * (Highmaps) The color for the parts of the graph or points that are
         * below the threshold. Note that `zones` takes precedence over the
         * negative color. Using `negativeColor` is equivalent to applying a
         * zone with value of 0.
         */
        negativeColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) The color to apply to null points.
         *
         * In styled mode, the null point fill is set in the
         * `.highcharts-null-point` class.
         */
        nullColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) Whether to allow pointer interaction like tooltips and
         * mouse events on null points.
         */
        nullInteraction?: boolean;
        /**
         * (Highmaps) Options for the _Series on point_ feature. Only `pie` and
         * `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotMapOnPointOptions);
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
         * (Highmaps) If set to `true`, the accessibility module will skip past
         * the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highmaps) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
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
    }
    /**
     * (Highmaps) An array of data points for the series. For the `map` series
     * type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will
     * be interpreted as `value` options. Example: (see online documentation for
     * example)
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond
     * to `[hc-key, value]`. Example: (see online documentation for example)
     *
     * 3. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesMapDataOptions {
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
         * (Highmaps) For map and mapline series types, the geometry of a point.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define the geometry instead of
         * defining it on the data points themselves.
         *
         * The geometry object is compatible to that of a `feature` in GeoJSON,
         * so features of GeoJSON can be passed directly into the `data`,
         * optionally after first filtering and processing it.
         *
         * For pre-projected maps (like GeoJSON maps from our map collection),
         * user has to specify coordinates in `projectedUnits` for geometry type
         * other than `Point`, instead of `[longitude, latitude]`.
         */
        geometry?: (object|Highcharts.SeriesMapDataGeometryOptions);
        /**
         * (Highmaps) An id for the point. This can be used after render time to
         * get a pointer to the point object through `chart.get()`.
         */
        id?: string;
        /**
         * (Highmaps) When data labels are laid out on a map, Highmaps runs a
         * simplified algorithm to detect collision. When two labels collide,
         * the one with the lowest rank is hidden. By default the rank is
         * computed from the area.
         */
        labelrank?: number;
        /**
         * (Highmaps) The relative mid point of an area, used to place the data
         * label. Ranges from 0 to 1\. When `mapData` is used, middleX can be
         * defined there.
         */
        middleX?: number;
        /**
         * (Highmaps) The relative mid point of an area, used to place the data
         * label. Ranges from 0 to 1\. When `mapData` is used, middleY can be
         * defined there.
         */
        middleY?: number;
        /**
         * (Highmaps) The name of the point as shown in the legend, tooltip,
         * dataLabel etc.
         */
        name?: string;
        /**
         * (Highmaps) For map and mapline series types, the SVG path for the
         * shape. For compatibility with old IE, not all SVG path definitions
         * are supported, but M, L and C operators are safe.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define that paths instead of
         * defining them on the data points themselves.
         *
         * For providing true geographical shapes based on longitude and
         * latitude, use the `geometry` option instead.
         */
        path?: string;
        /**
         * (Highmaps) The numeric value of the data point.
         */
        value?: (number|null);
    }
    /**
     * (Highmaps) A `map` series. If the type option is not specified, it is
     * inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `map` series are defined in plotOptions.map.
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
     * You have to extend the `SeriesMapOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesMapOptions {
     * customProperty: string; }
     *
     */
    interface SeriesMapOptions extends Highcharts.PlotMapOptions, Highcharts.SeriesOptions {
        /**
         * (Highmaps) An array of data points for the series. For the `map`
         * series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values
         * will be interpreted as `value` options. Example: (see online
         * documentation for example)
         *
         * 2. An array of arrays with 2 values. In this case, the values
         * correspond to `[hc-key, value]`. Example: (see online documentation
         * for example)
         *
         * 3. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<(number|[string, (number|null)]|null|Highcharts.SeriesMapDataOptions)>;
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
        type: "map";
    }
}

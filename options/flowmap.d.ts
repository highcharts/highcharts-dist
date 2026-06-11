/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highmaps) A flowmap series is a series laid out on top of a map series
     * allowing to display route paths (e.g. flight or ship routes) or flows on
     * a map. It creates a link between two points on a map chart.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `flowmap` series are defined in plotOptions.flowmap.
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
    interface PlotFlowmapOptions {
        /**
         * (Highmaps) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
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
        colors?: Array<Highcharts.ColorType>;
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
         * (Highmaps) The `curveFactor` option for all links. Value higher than
         * 0 will curve the link clockwise. A negative value will curve it
         * counter clockwise. If the value is 0 the link will be a straight
         * line. By default undefined curveFactor get an automatic curve.
         */
        curveFactor?: number;
        /**
         * (Highmaps) A reserved subspace to store options and values for
         * customized functionality. Here you can add additional data for your
         * own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
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
         * (Highmaps) The fill color of all the links. If not set, the series
         * color will be used with the opacity set in fillOpacity.
         */
        fillColor?: Highcharts.ColorType;
        /**
         * (Highmaps) The opacity of the color fill for all links.
         */
        fillOpacity?: number;
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
        linecap?: string;
        /**
         * (Highmaps) Specify the `lineWidth` of the links if they are not
         * specified.
         */
        lineWidth?: number;
        /**
         * (Highmaps) A `markerEnd` creates an arrow symbol indicating the
         * direction of flow at the destination. Specifying a `markerEnd` here
         * will create one for each link.
         */
        markerEnd?: Highcharts.SeriesFlowMapSeriesOptionsObject;
        /**
         * (Highmaps) Maximum width of a link expressed in pixels. The weight of
         * a link is mapped between `maxWidth` and `minWidth`.
         */
        maxWidth?: number;
        /**
         * (Highmaps) Minimum width of a link expressed in pixels. The weight of
         * a link is mapped between `maxWidth` and `minWidth`.
         */
        minWidth?: number;
        /**
         * (Highmaps) The color to apply to null points.
         *
         * In styled mode, the null point fill is set in the
         * `.highcharts-null-point` class.
         */
        nullColor?: Highcharts.ColorType;
        /**
         * (Highmaps) The opacity of all the links. Affects the opacity for the
         * entire link, including stroke. See also fillOpacity, that affects the
         * opacity of only the fill color.
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
         * (Highmaps) Whether to display this particular series or series type
         * in the legend. Standalone series are shown in legend by default, and
         * linked series are not. Since v7.2.0 it is possible to show series
         * that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
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
         * (Highmaps) The weight for all links with unspecified weights. The
         * weight of a link determines its thickness compared to other links.
         */
        weight?: number;
        /**
         * (Highmaps) If no weight has previously been specified, this will set
         * the width of all the links without being compared to and scaled
         * according to other weights.
         */
        width?: number;
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
    interface PlotFlowmapTooltipDateTimeLabelFormatsOptions {
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
    interface PlotFlowmapTooltipPositionOptions {
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
     * (Highmaps) An array of data points for the series. For the `flowmap`
     * series type, points can be given in the following ways:
     *
     * 1. An array of arrays with options as values. In this case, the values
     * correspond to `from, to, weight`. Example: (see online documentation for
     * example)
     *
     * 2. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. (see online
     * documentation for example)
     *
     * 3. For objects with named values, instead of using the `mappoint` `id`,
     * you can use `[longitude, latitude]` arrays. (see online documentation for
     * example)
     */
    interface SeriesFlowmapDataOptions {
        /**
         * (Highmaps) A `curveFactor` with a higher value than 0 will curve the
         * link clockwise. A negative value will curve the link counter
         * clockwise. If the value is 0 the link will be straight.
         */
        curveFactor?: number;
        /**
         * (Highmaps) The fill color of an individual link.
         */
        fillColor?: Highcharts.ColorType;
        /**
         * (Highmaps) The opacity of the link color fill.
         */
        fillOpacity?: number;
        /**
         * (Highmaps) ID referencing a map point holding coordinates of the link
         * origin or coordinates in terms of array of `[longitude, latitude]` or
         * object with `lon` and `lat` properties.
         */
        from?: (string|Highcharts.LonLatArray|Highcharts.MapLonLatObject);
        /**
         * (Highmaps) If set to `true`, the line will grow towards its end.
         */
        growTowards?: boolean;
        /**
         * (Highmaps) Specify the `lineWidth` of the link.
         */
        lineWidth?: number;
        /**
         * (Highmaps) Specifying a `markerEnd` here will create an arrow symbol
         * indicating the direction of flow at the destination of one individual
         * link. If one has been previously specified at the higher level option
         * it will be overridden for the current link.
         */
        markerEnd?: (Highcharts.SeriesFlowmapDataMarkerEndOptions|null);
        /**
         * (Highmaps) The opacity of an individual link.
         */
        opacity?: number;
        /**
         * (Highmaps) ID referencing a map point holding coordinates of the link
         * origin or coordinates in terms of array of `[longitude, latitude]` or
         * object with `lon` and `lat` properties.
         */
        to?: (string|Highcharts.LonLatArray|Highcharts.MapLonLatObject);
        /**
         * (Highmaps) The weight of a link determines its thickness compared to
         * other links.
         */
        weight?: number;
    }
}

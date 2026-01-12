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
    interface PlotTilemapDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) Styles for the series label. The color
     * defaults to the series color, or a contrast color if `onArea`.
     */
    interface PlotTilemapLabelStyleOptions {
        fontSize?: (number|string);
    }
    /**
     * (Highcharts, Highmaps) Options for the _Series on point_ feature. Only
     * `pie` and `sunburst` series are supported at this moment.
     */
    interface PlotTilemapOnPointOptions {
        /**
         * (Highcharts, Highmaps) Options for the connector in the _Series on
         * point_ feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotTilemapOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highcharts, Highmaps) The `id` of the point that we connect the
         * series to. Only points with a given `plotX` and `plotY` values and
         * map points are valid.
         */
        id?: string;
        /**
         * (Highcharts, Highmaps) Options allowing to set a position and an
         * offset of the series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotTilemapOnPointPositionOptions);
    }
    /**
     * (Highcharts, Highmaps) A tilemap series is a type of heatmap where the
     * tile shapes are configurable.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `tilemap` series are defined in plotOptions.tilemap.
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
    interface PlotTilemapOptions {
        /**
         * (Highcharts, Highmaps) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highcharts, Highmaps) Allow this series' points to be selected by
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
         * (Highcharts, Highmaps) Animation is disabled by default on the
         * heatmap series.
         */
        animation?: boolean;
        /**
         * (Highmaps) The border color of the map areas.
         *
         * In styled mode, the border stroke is given in the `.highcharts-point`
         * class.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highmaps) The border radius for each heatmap item. The
         * border's color and width can be set in marker options.
         */
        borderRadius?: number;
        /**
         * (Highmaps) The border width for each heatmap item.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highmaps) An additional class name to apply to the
         * series' graphical elements. This option does not replace default
         * class names of the graphical element. Changes to the series' color
         * will also be reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highcharts, Highmaps) Disable this option to allow series rendering
         * in the whole plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highcharts) The main color of the series. In heat maps this color is
         * rarely used, as we mostly use the color to denote the value of each
         * point. Unless options are set in the colorAxis, the default value is
         * pulled from the options.colors array.
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
         * (Highcharts, Highmaps) Styled mode only. A specific color index to
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
         * (Highcharts, Highmaps) The column size - how many X axis units each
         * column in the tilemap should span. Works as in Heatmaps.
         */
        colsize?: number;
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
         * (Highcharts, Highmaps) You can set the cursor to "pointer" if you
         * have click events attached to the series, to signal to the user that
         * the points and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highcharts, Highmaps) A reserved subspace to store options and
         * values for customized functionality. Here you can add additional data
         * for your own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
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
        dataLabels?: (Highcharts.PlotTilemapDataLabelsOptions|Array<Highcharts.PlotTilemapDataLabelsOptions>);
        /**
         * (Highcharts, Highmaps) A description of the series to add to the
         * screen reader information about the series.
         */
        description?: string;
        /**
         * (Highcharts, Highmaps) Enable or disable the mouse tracking for a
         * specific series. This includes point tooltips and click events on
         * graphs and points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts, Highmaps) General event handlers for the series items.
         * These event hooks can also be attached to the series at run time
         * using the `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highmaps) Highlight only the hovered point and fade the
         * remaining points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highcharts, Highmaps) When set to `false` will prevent the series
         * data from being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highcharts, Highmaps) Make the heatmap render its data points as an
         * interpolated image.
         */
        interpolation?: boolean;
        /**
         * (Highcharts, Highmaps) An array specifying which option maps to which
         * key in the data point array. This makes it convenient to work with
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
         * (Highcharts, Highmaps) What type of legend symbol to render for this
         * series. Can be one of `areaMarker`, `lineMarker` or `rectangle`.
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
         *
         * If a `compare` value is not set on a linked series, it will be
         * inherited from the parent series.
         */
        linkedTo?: string;
        marker?: any;
        /**
         * (Highcharts, Highmaps) The color for the parts of the graph or points
         * that are below the threshold. Note that `zones` takes precedence over
         * the negative color. Using `negativeColor` is equivalent to applying a
         * zone with value of 0.
         */
        negativeColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highmaps) The color applied to null points. In styled
         * mode, a general CSS class is applied instead.
         */
        nullColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
         * (Highcharts, Highmaps) Options for the _Series on point_ feature.
         * Only `pie` and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotTilemapOnPointOptions);
        /**
         * (Highcharts, Highmaps) Opacity of a series parts: line, fill (e.g.
         * area) and dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts, Highmaps) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts, Highmaps) Same as accessibility.point.descriptionFormat,
         * but for an individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts, Highmaps) Same as
         * accessibility.series.descriptionFormatter, but for an individual
         * series. Overrides the chart wide configuration.
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highcharts, Highmaps) The padding between points in the tilemap.
         */
        pointPadding?: number;
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
         * (Highcharts, Highmaps) The row size - how many Y axis units each
         * tilemap row should span. Analogous to colsize.
         */
        rowsize?: number;
        /**
         * (Highcharts, Highmaps) Whether to select the series initially. If
         * `showCheckbox` is true, the checkbox next to the series name in the
         * legend will be checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highcharts, Highmaps) If true, a checkbox is displayed next to the
         * legend item to allow selecting the series. The state of the checkbox
         * is determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts, Highmaps) Whether to display this particular series or
         * series type in the legend. Standalone series are shown in legend by
         * default, and linked series are not. Since v7.2.0 it is possible to
         * show series that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highcharts, Highmaps) If set to `true`, the accessibility module
         * will skip past the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highcharts, Highmaps) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highcharts, Highmaps) A collection of options for different series
         * states.
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
         * (Highcharts, Highmaps) The shape of the tiles in the tilemap.
         * Possible values are `hexagon`, `circle`, `diamond`, and `square`.
         */
        tileShape?: Highcharts.TilemapShapeValue;
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
         * (Highcharts, Highmaps) Set the initial visibility of the series.
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
        /**
         * (Highcharts, Highmaps) Whether to zoom non-cartesian series. If
         * `chart.zooming` is set, the option allows to disable zooming on an
         * individual non-cartesian series. By default zooming is enabled for
         * all series.
         *
         * Note: This option works only for non-cartesian series.
         */
        zoomEnabled?: boolean;
    }
    /**
     * (Highcharts, Highstock) A collection of SVG attributes to override the
     * appearance of the halo, for example `fill`, `stroke` and `stroke-width`.
     */
    interface PlotTilemapStatesHoverHaloAttributesOptions {
        zIndex?: number;
    }
    /**
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotTilemapStatesSelectAnimationOptions {
        /**
         * (Highcharts, Highstock) The duration of the hover animation in
         * milliseconds. By default the hover state animates quickly in, and
         * slowly back to normal.
         */
        duration?: number;
    }
    /**
     * (Highcharts, Highmaps) A `tilemap` series. If the type option is not
     * specified, it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `tilemap` series are defined in plotOptions.tilemap.
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
     * You have to extend the `SeriesTilemapOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesTilemapOptions {
     * customProperty: string; }
     *
     */
    interface SeriesTilemapOptions extends Highcharts.PlotTilemapOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts, Highmaps) An array of data points for the series. For
         * the `tilemap` series type, points can be given in the following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values
         * correspond to `x,y,value`. If the first value is a string, it is
         * applied as the name of the point, and the `x` value is inferred. The
         * `x` value can also be omitted, in which case the inner arrays should
         * be of length 2\. Then the `x` value is automatically calculated,
         * either starting at 0 and incremented by 1, or from `pointStart` and
         * `pointInterval` given in the series options. (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The objects are point
         * configuration objects as seen below. If the total number of data
         * points exceeds the series' turboThreshold, this option is not
         * available. (see online documentation for example)
         *
         * Note that for some tileShapes the grid coordinates are offset.
         */
        data?: Array<([(number|string), number]|[(number|string), number, number]|Highcharts.PointOptionsObject)>;
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
        mapData?: undefined;
        /**
         * Not available
         */
        stack?: undefined;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) This property is only in
         * TypeScript non-optional and might be `undefined` in series objects
         * from unknown sources.
         */
        type: "tilemap";
    }
}

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
    interface PlotMappointClusterDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
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
    interface PlotMappointClusterDataLabelsStyleOptions {
        color?: string;
    }
    /**
     * (Highcharts, Highmaps) Options for layout algorithm. Inside there are
     * options to change the type of the algorithm, gridSize, distance or
     * iterations.
     */
    interface PlotMappointClusterLayoutAlgorithmOptions {
        /**
         * (Highcharts, Highmaps) When `type` is set to `kmeans`, `distance` is
         * a maximum distance between point and cluster center so that this
         * point will be inside the cluster. The distance is either a number
         * defining pixels or a percentage defining a percentage of the plot
         * area width.
         */
        distance?: (number|string);
        /**
         * (Highcharts, Highmaps) When `type` is set to the `grid`, `gridSize`
         * is a size of a grid square element either as a number defining
         * pixels, or a percentage defining a percentage of the plot area width.
         */
        gridSize?: (number|string);
        /**
         * (Highcharts, Highmaps) When `type` is set to `kmeans`, `iterations`
         * are the number of iterations that this algorithm will be repeated to
         * find clusters positions.
         */
        iterations?: number;
        /**
         * (Highcharts, Highmaps) When `type` is set to `undefined` and there
         * are more visible points than the kmeansThreshold the `grid` algorithm
         * is used to find clusters, otherwise `kmeans`. It ensures good
         * performance on large datasets and better clusters arrangement after
         * the zoom.
         */
        kmeansThreshold?: number;
        /**
         * (Highcharts, Highmaps) Type of the algorithm used to combine points
         * into a cluster. There are three available algorithms:
         *
         * 1) `grid` - grid-based clustering technique. Points are assigned to
         * squares of set size depending on their position on the plot area.
         * Points inside the grid square are combined into a cluster. The grid
         * size can be controlled by `gridSize` property (grid size changes at
         * certain zoom levels).
         *
         * 2) `kmeans` - based on K-Means clustering technique. In the first
         * step, points are divided using the grid method (distance property is
         * a grid size) to find the initial amount of clusters. Next, each point
         * is classified by computing the distance between each cluster center
         * and that point. When the closest cluster distance is lower than
         * distance property set by a user the point is added to this cluster
         * otherwise is classified as `noise`. The algorithm is repeated until
         * each cluster center not change its previous position more than one
         * pixel. This technique is more accurate but also more time consuming
         * than the `grid` algorithm, especially for big datasets.
         *
         * 3) `optimizedKmeans` - based on K-Means clustering technique. This
         * algorithm uses k-means algorithm only on the chart initialization or
         * when chart extremes have greater range than on initialization. When a
         * chart is redrawn the algorithm checks only clustered points distance
         * from the cluster center and rebuild it when the point is spaced
         * enough to be outside the cluster. It provides performance improvement
         * and more stable clusters position yet can be used rather on small and
         * sparse datasets.
         *
         * By default, the algorithm depends on visible quantity of points and
         * `kmeansThreshold`. When there are more visible points than the
         * `kmeansThreshold` the `grid` algorithm is used, otherwise `kmeans`.
         *
         * The custom clustering algorithm can be added by assigning a callback
         * function as the type property. This function takes an array of
         * `processedXData`, `processedYData`, `processedXData` indexes and
         * `layoutAlgorithm` options as arguments and should return an object
         * with grouped data.
         *
         * The algorithm should return an object like that: (see online
         * documentation for example)
         *
         * `clusterId` (example above - unique id of a cluster or noise) is an
         * array of points belonging to a cluster. If the array has only one
         * point or fewer points than set in `cluster.minimumClusterSize` it
         * won't be combined into a cluster.
         */
        type?: (string|Function);
    }
    interface PlotMappointClusterStatesHoverOptions {
        /**
         * (Highcharts, Highmaps) The fill color of the cluster marker in hover
         * state. When `undefined`, the series' or point's fillColor for normal
         * state is used.
         */
        fillColor?: Highcharts.ColorType;
    }
    /**
     * (Highcharts, Highmaps) An array defining zones within marker clusters.
     *
     * In styled mode, the color zones are styled with the
     * `.highcharts-cluster-zone-{n}` class, or custom classed from the
     * `className` option.
     */
    interface PlotMappointClusterZonesOptions {
        /**
         * (Highcharts, Highmaps) Styled mode only. A custom class name for the
         * zone.
         */
        className?: string;
        /**
         * (Highcharts, Highmaps) The value where the zone starts.
         */
        from?: number;
        /**
         * (Highcharts, Highmaps) Settings for the cluster marker belonging to
         * the zone.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts, Highmaps) The value where the zone ends.
         */
        to?: number;
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
    interface PlotMappointDataLabelsOptions {
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
        animation?: (boolean|Highcharts.PlotMappointDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
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
        overflow?: boolean;
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
        style?: (Highcharts.CSSObject|Highcharts.PlotMappointDataLabelsStyleOptions);
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
    interface PlotMappointMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
    /**
     * (Highmaps) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotMappointOnPointConnectorOptions {
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
     * (Highmaps) Options allowing to set a position and an offset of the series
     * in the _Series on point_ feature.
     */
    interface PlotMappointOnPointPositionOptions {
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
     * (Highcharts, Highstock, Gantt) For series on datetime axes, the date
     * format in the tooltip's header will by default be guessed based on the
     * closest data points. This member gives the default string representations
     * used for each unit. For an overview of the string or object
     * configuration, see dateFormat.
     */
    interface PlotMappointTooltipDateTimeLabelFormatsOptions {
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
    interface PlotMappointTooltipPositionOptions {
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
     * (Highmaps) An array of data points for the series. For the `mappoint`
     * series type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will
     * be interpreted as `y` options. The `x` values will be automatically
     * calculated, either starting at 0 and incremented by 1, or from
     * `pointStart` and `pointInterval` given in the series options. If the axis
     * has categories, these will be used. Example: (see online documentation
     * for example)
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond
     * to `[hc-key, value]`. Example: (see online documentation for example)
     *
     * 3. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesMappointDataOptions {
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
        geometry?: (object|Highcharts.SeriesMappointDataGeometryOptions);
        /**
         * (Highmaps) An id for the point. This can be used after render time to
         * get a pointer to the point object through `chart.get()`.
         */
        id?: string;
        /**
         * (Highmaps) The latitude of the point. Must be combined with the `lon`
         * option to work. Overrides `x` and `y` values.
         */
        lat?: number;
        /**
         * (Highmaps) The longitude of the point. Must be combined with the
         * `lon` option to work. Overrides `x` and `y` values.
         */
        lon?: number;
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
         * (Highmaps) The x coordinate of the point in terms of projected units.
         */
        x?: number;
        /**
         * (Highmaps) The x coordinate of the point in terms of projected units.
         */
        y?: (number|null);
    }
}

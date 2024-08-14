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
    interface PlotVariablepieDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotVariablepieOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotVariablepieOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotVariablepieOnPointPositionOptions);
    }
    /**
     * (Highcharts) A variable pie series is a two dimensional series type,
     * where each point renders an Y and Z value. Each point is drawn as a pie
     * slice where the size (arc) of the slice relates to the Y value and the
     * radius of pie slice relates to the Z value.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `variablepie` series are defined in
     * plotOptions.variablepie.
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
    interface PlotVariablepieOptions {
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
         * (Highcharts, Highmaps) The color of the border surrounding each
         * slice. When `null`, the border takes the same color as the slice
         * fill. This can be used together with a `borderWidth` to fill drawing
         * gaps created by antialiazing artefacts in borderless pies.
         *
         * In styled mode, the border stroke is given in the `.highcharts-point`
         * class.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) The corner radius of the border surrounding each slice.
         * A number signifies pixels. A percentage string, like for example
         * `50%`, signifies a size relative to the radius and the inner radius.
         */
        borderRadius?: (number|string|Highcharts.BorderRadiusOptionsObject);
        /**
         * (Highcharts, Highmaps) The width of the border surrounding each
         * slice.
         *
         * When setting the border width to 0, there may be small gaps between
         * the slices due to SVG antialiasing artefacts. To work around this,
         * keep the border width at 0.5 or 1, but set the `borderColor` to
         * `null` instead.
         *
         * In styled mode, the border stroke width is given in the
         * `.highcharts-point` class.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highmaps) The center of the pie chart relative to the
         * plot area. Can be percentages or pixel values. The default behaviour
         * (as of 3.0) is to center the pie so that all slices and data labels
         * are within the plot area. As a consequence, the pie may actually jump
         * around in a chart with dynamic values, as the data labels move. In
         * that case, the center should be explicitly set, for example to
         * `["50%", "50%"]`.
         */
        center?: [(number|string|null), (number|string|null)];
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
         * (Highcharts) The color of the pie series. A pie series is represented
         * as an empty circle if the total sum of its values is 0. Use this
         * property to define the color of its border.
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
         * (Highcharts, Highmaps) A series specific or series type specific
         * color set to use instead of the global colors.
         */
        colors?: Array<(Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject)>;
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
        dataLabels?: (Highcharts.SeriesPieDataLabelsOptionsObject|Array<Highcharts.SeriesPieDataLabelsOptionsObject>);
        /**
         * (Highcharts) The thickness of a 3D pie.
         */
        depth?: number;
        /**
         * (Highcharts) A description of the series to add to the screen reader
         * information about the series.
         */
        description?: string;
        /**
         * (Highcharts) Enable or disable the mouse tracking for a specific
         * series. This includes point tooltips and click events on graphs and
         * points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts, Highmaps) The end angle of the pie in degrees where 0 is
         * top and 90 is right. Defaults to `startAngle` plus 360.
         */
        endAngle?: number;
        /**
         * (Highcharts) General event handlers for the series items. These event
         * hooks can also be attached to the series at run time using the
         * `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts) If the total sum of the pie's values is 0, the series is
         * represented as an empty circle . The `fillColor` option defines the
         * color of that circle. Use pie.borderWidth to set the border
         * thickness.
         */
        fillColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highmaps) Equivalent to chart.ignoreHiddenSeries, this
         * option tells whether the series shall be redrawn as if the hidden
         * point were `null`.
         *
         * The default value changed from `false` to `true` with Highcharts 3.0.
         */
        ignoreHiddenPoint?: boolean;
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
         * (Highcharts, Highmaps) The size of the inner diameter for the pie. A
         * size greater than 0 renders a donut chart. Can be a percentage or
         * pixel value. Percentages are relative to the pie size. Pixel values
         * are given as integers. Setting overridden by thickness.
         *
         * Note: in Highcharts < 4.1.2, the percentage was relative to the plot
         * area, not the pie size.
         */
        innerSize?: (number|string);
        /**
         * (Highcharts) An array specifying which option maps to which key in
         * the data point array. This makes it convenient to work with
         * unstructured data arrays from different sources.
         */
        keys?: Array<string>;
        /**
         * (Highcharts) What type of legend symbol to render for this series.
         * Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts, Highstock) The SVG value used for the `stroke-linecap`
         * and `stroke-linejoin` of a line graph. Round means that lines are
         * rounded in the ends and bends.
         */
        linecap?: Highcharts.SeriesLinecapValue;
        /**
         * (Highcharts) The maximum size of the points' radius related to
         * chart's `plotArea`. If a number is set, it applies in pixels.
         */
        maxPointSize?: (number|string);
        /**
         * (Highcharts) The minimum size of the points' radius related to
         * chart's `plotArea`. If a number is set, it applies in pixels.
         */
        minPointSize?: (number|string);
        /**
         * (Highcharts, Highmaps) The minimum size for a pie in response to auto
         * margins. The pie will try to shrink to make room for data labels in
         * side the plot area, but only to this size.
         */
        minSize?: (number|string);
        /**
         * (Highcharts) Options for the _Series on point_ feature. Only `pie`
         * and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotVariablepieOnPointOptions);
        /**
         * (Highcharts) Opacity of a series parts: line, fill (e.g. area) and
         * dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts) Same as accessibility.point.descriptionFormat, but for
         * an individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts) Same as accessibility.series.descriptionFormatter, but
         * for an individual series. Overrides the chart wide configuration.
         */
        pointDescriptionFormatter?: Function;
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
         * (Highcharts) Whether to apply a drop shadow to the graph line. Since
         * 2.3 the shadow can be an object configuration containing `color`,
         * `offsetX`, `offsetY`, `opacity` and `width`.
         *
         * Note that in some cases, like stacked columns or other dense layouts,
         * the series may cast shadows on each other. In that case, the
         * `chart.seriesGroupShadow` allows applying a common drop shadow to the
         * whole series group.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Highcharts) If true, a checkbox is displayed next to the legend item
         * to allow selecting the series. The state of the checkbox is
         * determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts, Highmaps) Whether to display this particular series or
         * series type in the legend. Since 2.1, pies are not shown in the
         * legend by default.
         */
        showInLegend?: boolean;
        /**
         * (Highcharts, Highmaps) The diameter of the pie relative to the plot
         * area. Can be a percentage or pixel value. Pixel values are given as
         * integers. The default behaviour (as of 3.0) is to scale to the plot
         * area and give room for data labels within the plot area. slicedOffset
         * is also included in the default size calculation. As a consequence,
         * the size of the pie may vary when points are updated and data labels
         * more around. In that case it is best to set a fixed value, for
         * example `"75%"`.
         */
        size?: (number|string|null);
        /**
         * (Highcharts) Whether the pie slice's value should be represented by
         * the area or the radius of the slice. Can be either `area` or
         * `radius`. The default, `area`, corresponds best to the human
         * perception of the size of each pie slice.
         */
        sizeBy?: Highcharts.VariablePieSizeByValue;
        /**
         * (Highcharts) If set to `true`, the accessibility module will skip
         * past the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highcharts, Highmaps) If a point is sliced, moved out from the
         * center, how many pixels should it be moved?.
         */
        slicedOffset?: number;
        /**
         * (Highcharts) Sonification/audio chart options for a series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        /**
         * (Highcharts, Highmaps) The start angle of the pie slices in degrees
         * where 0 is top and 90 right.
         */
        startAngle?: number;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highcharts, Highmaps) Sticky tracking of mouse events. When true,
         * the `mouseOut` event on a series isn't triggered until the mouse
         * moves over another series, or out of the plot area. When false, the
         * `mouseOut` event on a series is triggered when the mouse leaves the
         * area around the series' graph or markers. This also implies the
         * tooltip. When `stickyTracking` is false and `tooltip.shared` is
         * false, the tooltip will be hidden when moving the mouse between
         * series.
         */
        stickyTracking?: boolean;
        /**
         * (Highcharts) Thickness describing the ring size for a donut type
         * chart, overriding innerSize.
         */
        thickness?: number;
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
         * (Highcharts) The maximum possible z value for the point's radius
         * calculation. If the point's Z value is bigger than zMax, the slice
         * will be drawn according to the zMax value
         */
        zMax?: number;
        /**
         * (Highcharts) The minimum possible z value for the point's radius
         * calculation. If the point's Z value is smaller than zMin, the slice
         * will be drawn according to the zMin value.
         */
        zMin?: number;
    }
    /**
     * (Highcharts) A `variablepie` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `variablepie` series are defined in
     * plotOptions.variablepie.
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
     * You have to extend the `SeriesVariablepieOptions` via an interface to
     * allow custom properties: ``` declare interface SeriesVariablepieOptions {
     * customProperty: string; }
     *
     */
    interface SeriesVariablepieOptions extends Highcharts.PlotVariablepieOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `variablepie` series type, points can be given in the following ways:
         *
         * 1. An array of arrays with 2 values. In this case, the numerical
         * values will be interpreted as `y, z` options. Example: (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<([(number|string), number]|Highcharts.PointOptionsObject)>;
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
        type: "variablepie";
        /**
         * Not available
         */
        xAxis?: undefined;
        /**
         * Not available
         */
        yAxis?: undefined;
    }
}

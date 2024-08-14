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
    interface PlotSunburstAccessibilityPointOptions {
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
    interface PlotSunburstBreadcrumbsButtonThemeStyleOptions {
        color?: string;
    }
    /**
     * (Highcharts) Options for the breadcrumbs, the navigation at the top
     * leading the way up through the traversed levels.
     */
    interface PlotSunburstBreadcrumbsOptions {
        /**
         * (Highcharts) The default padding for each button and separator in
         * each direction.
         */
        buttonSpacing?: number;
        /**
         * (Highcharts) A collection of attributes for the buttons. The object
         * takes SVG attributes like `fill`, `stroke`, `stroke-width`, as well
         * as `style`, a collection of CSS properties for the text.
         *
         * The object can also be extended with states, so you can set
         * presentational options for `hover`, `select` or `disabled` button
         * states.
         */
        buttonTheme?: (Highcharts.PlotSunburstBreadcrumbsButtonThemeOptions|Highcharts.SVGAttributes);
        events?: Highcharts.PlotSunburstBreadcrumbsEventsOptions;
        /**
         * (Highcharts) When the breadcrumbs are floating, the plot area will
         * not move to make space for it. By default, the chart will not make
         * space for the buttons. This property won't work when positioned in
         * the middle.
         */
        floating?: boolean;
        /**
         * (Highcharts) A format string for the breadcrumbs button. Variables
         * are enclosed by curly brackets. Available values are passed in the
         * declared point options.
         */
        format?: (string|undefined);
        /**
         * (Highcharts) Callback function to format the breadcrumb text from
         * scratch.
         */
        formatter?: Highcharts.BreadcrumbsFormatterCallbackFunction;
        /**
         * (Highcharts, Highmaps) Positioning for the button row. The
         * breadcrumbs buttons will be aligned properly for the default chart
         * layout (title, subtitle, legend, range selector) for the custom chart
         * layout set the position properties.
         */
        position?: (Highcharts.BreadcrumbsAlignOptions|Highcharts.PlotSunburstBreadcrumbsPositionOptions);
        /**
         * (Highcharts, Highmaps) What box to align the button to. Can be either
         * `plotBox` or `spacingBox`.
         */
        relativeTo?: Highcharts.ButtonRelativeToValue;
        /**
         * (Highcharts) Whether to reverse the order of buttons. This is common
         * in Arabic and Hebrew.
         */
        rtl?: boolean;
        /**
         * (Highcharts) Options object for Breadcrumbs separator.
         */
        separator?: Highcharts.PlotSunburstBreadcrumbsSeparatorOptions;
        /**
         * (Highcharts) Show full path or only a single button.
         */
        showFullPath?: boolean;
        /**
         * (Highcharts) CSS styles for all breadcrumbs.
         *
         * In styled mode, the breadcrumbs buttons are styled by the
         * `.highcharts-breadcrumbs-buttons .highcharts-button` rule with its
         * different states.
         */
        style?: Highcharts.SVGAttributes;
        /**
         * (Highcharts) Whether to use HTML to render the breadcrumbs items
         * texts.
         */
        useHTML?: boolean;
        /**
         * (Highcharts) The z index of the breadcrumbs group.
         */
        zIndex?: number;
    }
    /**
     * (Highcharts) Options object for Breadcrumbs separator.
     */
    interface PlotSunburstBreadcrumbsSeparatorOptions {
        /**
         * (Highcharts) CSS styles for the breadcrumbs separator.
         *
         * In styled mode, the breadcrumbs separators are styled by the
         * `.highcharts-separator` rule with its different states.
         */
        style?: (Highcharts.CSSObject|Highcharts.PlotSunburstBreadcrumbsSeparatorStyleOptions);
        text?: string;
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
    interface PlotSunburstDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
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
    interface PlotSunburstLevelsDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts) Set options on specific levels. Takes precedence over series
     * options, but not point options.
     */
    interface PlotSunburstLevelsOptions {
        /**
         * (Highcharts) Can set a `borderColor` on all points which lies on the
         * same level.
         */
        borderColor?: Highcharts.ColorString;
        /**
         * (Highcharts) Can set a `borderDashStyle` on all points which lies on
         * the same level.
         */
        borderDashStyle?: Highcharts.DashStyleValue;
        /**
         * (Highcharts) Can set a `borderWidth` on all points which lies on the
         * same level.
         */
        borderWidth?: number;
        /**
         * (Highcharts) Can set a `color` on all points which lies on the same
         * level.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) Determines whether the chart should receive one color
         * per point based on this level.
         */
        colorByPoint?: boolean;
        /**
         * (Highcharts) Can set a `colorVariation` on all points which lies on
         * the same level.
         */
        colorVariation?: Highcharts.PlotSunburstLevelsColorVariationOptions;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Can set `dataLabels` on all
         * points which lies on the same level.
         */
        dataLabels?: (Highcharts.SeriesSunburstDataLabelsOptionsObject|Array<Highcharts.SeriesSunburstDataLabelsOptionsObject>);
        /**
         * (Highcharts) Decides which level takes effect from the options set in
         * the levels object.
         */
        level?: number;
        /**
         * (Highcharts) Can set a `levelSize` on all points which lies on the
         * same level.
         */
        levelSize?: object;
    }
    /**
     * (Highcharts) Options for the _Series on point_ feature. Only `pie` and
     * `sunburst` series are supported at this moment.
     */
    interface PlotSunburstOnPointOptions {
        /**
         * (Highcharts) Options for the connector in the _Series on point_
         * feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotSunburstOnPointConnectorOptions|Highcharts.SVGAttributes);
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
        position?: (object|Highcharts.PlotSunburstOnPointPositionOptions);
    }
    /**
     * (Highcharts) A Sunburst displays hierarchical data, where a level in the
     * hierarchy is represented by a circle. The center represents the root node
     * of the tree. The visualization bears a resemblance to both treemap and
     * pie charts.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `sunburst` series are defined in plotOptions.sunburst.
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
    interface PlotSunburstOptions {
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
         * (Highcharts) When enabled the user can click on a point which is a
         * parent and zoom in on its children.
         */
        allowTraversingTree?: boolean;
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
         * (Highcharts) Options for the breadcrumbs, the navigation at the top
         * leading the way up through the traversed levels.
         */
        breadcrumbs?: Highcharts.PlotSunburstBreadcrumbsOptions;
        /**
         * (Highcharts) The center of the sunburst chart relative to the plot
         * area. Can be percentages or pixel values.
         */
        center?: Array<(number|string)>;
        /**
         * (Highcharts) An additional class name to apply to the series'
         * graphical elements. This option does not replace default class names
         * of the graphical element. Changes to the series' color will also be
         * reflected in a chart's legend and tooltip.
         */
        className?: string;
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
        colorByPoint?: boolean;
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
        dataLabels?: (Highcharts.SeriesSunburstDataLabelsOptionsObject|Array<Highcharts.SeriesSunburstDataLabelsOptionsObject>);
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
         * (Highcharts) What type of legend symbol to render for this series.
         * Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts) Used together with the levels and `allowDrillToNode`
         * options. When set to false the first level visible when drilling is
         * considered to be level one. Otherwise the level will be the same as
         * the tree structure.
         */
        levelIsConstant?: boolean;
        /**
         * (Highcharts) Set options on specific levels. Takes precedence over
         * series options, but not point options.
         */
        levels?: Array<Highcharts.PlotSunburstLevelsOptions>;
        /**
         * (Highcharts) Determines the width of the ring per level.
         */
        levelSize?: Highcharts.PlotSunburstLevelSizeOptions;
        /**
         * (Highcharts) Options for the _Series on point_ feature. Only `pie`
         * and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotSunburstOnPointOptions);
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
         * (Highcharts) Which point to use as a root in the visualization.
         */
        rootId?: string;
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
    }
    /**
     * (Highcharts) A `sunburst` series. If the type option is not specified, it
     * is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `sunburst` series are defined in plotOptions.sunburst.
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
     * You have to extend the `SeriesSunburstOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesSunburstOptions {
     * customProperty: string; }
     *
     */
    interface SeriesSunburstOptions extends Highcharts.PlotSunburstOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An array of data points for the series. For the
         * `treemap` series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values
         * will be interpreted as `value` options. Example: (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<(number|null|Highcharts.PointOptionsObject)>;
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
        type: "sunburst";
    }
}

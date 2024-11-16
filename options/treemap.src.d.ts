/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    /**
     * (Highcharts) A collection of attributes for the buttons. The object takes
     * SVG attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button states.
     */
    interface PlotTreemapBreadcrumbsButtonThemeOptions {
        style?: Highcharts.PlotTreemapBreadcrumbsButtonThemeStyleOptions;
    }
    interface PlotTreemapBreadcrumbsEventsOptions {
        /**
         * (Highcharts) Fires when clicking on the breadcrumbs button. Two
         * arguments are passed to the function. First breadcrumb button as an
         * SVG element. Second is the breadcrumbs class, containing reference to
         * the chart, series etc. (see online documentation for example)
         *
         * Return false to stop default buttons click action.
         */
        click?: Highcharts.BreadcrumbsClickCallbackFunction;
    }
    /**
     * (Highcharts, Highmaps) Positioning for the button row. The breadcrumbs
     * buttons will be aligned properly for the default chart layout (title,
     * subtitle, legend, range selector) for the custom chart layout set the
     * position properties.
     */
    interface PlotTreemapBreadcrumbsPositionOptions {
        /**
         * (Highcharts, Highmaps) Horizontal alignment of the breadcrumbs
         * buttons.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highcharts, Highmaps) Vertical alignment of the breadcrumbs buttons.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highcharts, Highmaps) The X offset of the breadcrumbs button group.
         */
        x?: number;
        /**
         * (Highcharts, Highmaps) The Y offset of the breadcrumbs button group.
         * When `undefined`, and `floating` is `false`, the `y` position is
         * adapted so that the breadcrumbs are rendered outside the target area.
         */
        y?: (number|undefined);
    }
    /**
     * (Highcharts) CSS styles for the breadcrumbs separator.
     *
     * In styled mode, the breadcrumbs separators are styled by the
     * `.highcharts-separator` rule with its different states.
     */
    interface PlotTreemapBreadcrumbsSeparatorStyleOptions {
        color?: string;
        fontSize?: number;
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
    interface PlotTreemapDataLabelsOptions {
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
        animation?: (boolean|Highcharts.PlotTreemapDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The background color or
         * gradient for the data label. Setting it to `auto` will use the
         * point's color.
         */
        backgroundColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The border color for the
         * data label. Setting it to `auto` will use the point's color. Defaults
         * to `undefined`.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
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
         * instead, and return `undefined` to disable a single data label.
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
         * (Highcharts, Highstock, Highmaps, Gantt) Format for points with the
         * value of null. Works analogously to format. `nullFormat` can be
         * applied only to series which support displaying null points i.e
         * `heatmap` or `tilemap`. Does not work with series that don't display
         * null points, like `line`, `column`, `bar` or `pie`.
         */
        nullFormat?: (boolean|string);
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Callback JavaScript function
         * that defines formatting for points with the value of null. Works
         * analogously to formatter. `nullFormatter` can be applied only to
         * series which support displaying null points i.e `heatmap` or
         * `tilemap`. Does not work with series that don't display null points,
         * like `line`, `column`, `bar` or `pie`.
         */
        nullFormatter?: Highcharts.DataLabelsFormatterCallbackFunction;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) How to handle data labels
         * that flow outside the plot area. The default is `"justify"`, which
         * aligns them inside the plot area. For columns and bars, this means it
         * will be moved inside the bar. To display data labels outside the plot
         * area, set `crop` to `false` and `overflow` to `"allow"`.
         */
        overflow?: Highcharts.DataLabelsOverflowValue;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) When either the
         * `borderWidth` or the `backgroundColor` is set, this is the padding
         * within the box.
         */
        padding?: number;
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
         * this, case, the same effect can be acheived through the `text-shadow`
         * CSS property.
         *
         * For some series types, where each point has an extent, like for
         * example tree maps, the data label may overflow the point. There are
         * two strategies for handling overflow. By default, the text will wrap
         * to multiple lines. The other strategy is to set `style.textOverflow`
         * to `ellipsis`, which will keep the text on one line plus it will
         * break inside long words.
         */
        style?: Highcharts.CSSObject;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for a label text
         * which should follow marker's shape. Border and background are
         * disabled for a label that follows a path.
         *
         * **Note:** Only SVG-based renderer supports this option. Setting
         * `useHTML` to true will disable this option.
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
        verticalAlign?: string;
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
         * labels. Use a `zIndex` of 6 to display it above the series, or use a
         * `zIndex` of 2 to display it behind the series.
         */
        zIndex?: number;
    }
    /**
     * (Highcharts) A configuration object to define how the color of a child
     * varies from the parent's color. The variation is distributed among the
     * children of node. For example when setting brightness, the brightness
     * change will range from the parent's original brightness on the first
     * child, to the amount set in the `to` setting on the last node. This
     * allows a gradient-like color scheme that sets children out from each
     * other while highlighting the grouping on treemaps and sectors on sunburst
     * charts.
     */
    interface PlotTreemapLevelsColorVariationOptions {
        /**
         * (Highcharts) The key of a color variation. Currently supports
         * `brightness` only.
         */
        key?: "brightness";
        /**
         * (Highcharts) The ending value of a color variation. The last sibling
         * will receive this value.
         */
        to?: number;
    }
    /**
     * (Highcharts) Can set the options of dataLabels on each point which lies
     * on the level. plotOptions.treemap.dataLabels for possible values.
     */
    interface PlotTreemapLevelsDataLabelsOptions {
        /**
         * (Highcharts) The alignment of the data label compared to the point.
         * If `right`, the right side of the label should be touching the point.
         * For points with an extent, like columns, the alignments also dictates
         * how to align it inside the box, as given with the inside option. Can
         * be one of `left`, `center` or `right`.
         */
        align?: (Highcharts.AlignValue|null);
        /**
         * (Highcharts) Alignment method for data labels. If set to `plotEdges`,
         * the labels are aligned within the plot area in the direction of the
         * y-axis. So in a regular column chart, the labels are aligned
         * vertically according to the `verticalAlign` setting. In a bar chart,
         * which is inverted, the labels are aligned horizontally according to
         * the `align` setting. Applies to cartesian series only.
         */
        alignTo?: string;
        /**
         * (Highcharts) Whether to allow data labels to overlap. To make the
         * labels less sensitive for overlapping, the dataLabels.padding can be
         * set to 0.
         */
        allowOverlap?: boolean;
        /**
         * (Highcharts) Enable or disable the initial animation when a series is
         * displayed for the `dataLabels`. The animation can also be set as a
         * configuration object. Please note that this option only applies to
         * the initial animation.
         *
         * For other animations, see chart.animation and the animation parameter
         * under the API methods. The following properties are supported:
         *
         * - `defer`: The animation delay time in milliseconds.
         */
        animation?: (boolean|Highcharts.PlotTreemapLevelsDataLabelsAnimationOptions|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts) The background color or gradient for the data label.
         * Setting it to `auto` will use the point's color.
         */
        backgroundColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) The border color for the data label. Setting it to
         * `auto` will use the point's color. Defaults to `undefined`.
         */
        borderColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts) The border radius in pixels for the data label.
         */
        borderRadius?: number;
        /**
         * (Highcharts) The border width in pixels for the data label.
         */
        borderWidth?: number;
        /**
         * (Highcharts) A class name for the data label. Particularly in styled
         * mode, this can be used to give each series' or point's data label
         * unique styling. In addition to this option, a default color class
         * name is added so that we can give the labels a contrast text shadow.
         */
        className?: string;
        /**
         * (Highcharts) This options is deprecated. Use style.color instead.
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
         * (Highcharts) Whether to hide data labels that are outside the plot
         * area. By default, the data label is moved inside the plot area
         * according to the overflow option.
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
         * (Highcharts) Enable or disable the data labels.
         */
        enabled?: boolean;
        /**
         * (Highcharts) A declarative filter to control of which data labels to
         * display. The declarative filter is designed for use when callback
         * functions are not available, like when the chart options require a
         * pure JSON structure or for use with graphical editors. For
         * programmatic control, use the `formatter` instead, and return
         * `undefined` to disable a single data label.
         */
        filter?: Highcharts.DataLabelsFilterOptionsObject;
        /**
         * (Highcharts) A format string for the data label. Available variables
         * are the same as for `formatter`.
         */
        format?: string;
        /**
         * (Highcharts) Callback JavaScript function to format the data label.
         * Note that if a `format` is defined, the format takes precedence and
         * the formatter is ignored.
         */
        formatter?: Highcharts.DataLabelsFormatterCallbackFunction;
        /**
         * (Highcharts) For points with an extent, like columns or map areas,
         * whether to align the data label inside the box or to the actual value
         * point. Defaults to `false` in most cases, `true` in stacked columns.
         */
        inside?: boolean;
        /**
         * (Highcharts) Format for points with the value of null. Works
         * analogously to format. `nullFormat` can be applied only to series
         * which support displaying null points i.e `heatmap` or `tilemap`. Does
         * not work with series that don't display null points, like `line`,
         * `column`, `bar` or `pie`.
         */
        nullFormat?: (boolean|string);
        /**
         * (Highcharts) Callback JavaScript function that defines formatting for
         * points with the value of null. Works analogously to formatter.
         * `nullFormatter` can be applied only to series which support
         * displaying null points i.e `heatmap` or `tilemap`. Does not work with
         * series that don't display null points, like `line`, `column`, `bar`
         * or `pie`.
         */
        nullFormatter?: Highcharts.DataLabelsFormatterCallbackFunction;
        /**
         * (Highcharts) How to handle data labels that flow outside the plot
         * area. The default is `"justify"`, which aligns them inside the plot
         * area. For columns and bars, this means it will be moved inside the
         * bar. To display data labels outside the plot area, set `crop` to
         * `false` and `overflow` to `"allow"`.
         */
        overflow?: Highcharts.DataLabelsOverflowValue;
        /**
         * (Highcharts) When either the `borderWidth` or the `backgroundColor`
         * is set, this is the padding within the box.
         */
        padding?: number;
        /**
         * (Highcharts) Aligns data labels relative to points. If `center`
         * alignment is not possible, it defaults to `right`.
         */
        position?: Highcharts.AlignValue;
        /**
         * (Highcharts) Text rotation in degrees. Note that due to a more
         * complex structure, backgrounds, borders and padding will be lost on a
         * rotated data label.
         */
        rotation?: number;
        /**
         * (Highcharts) The shadow of the box. Works best with `borderWidth` or
         * `backgroundColor`. Since 2.3 the shadow can be an object
         * configuration containing `color`, `offsetX`, `offsetY`, `opacity` and
         * `width`.
         */
        shadow?: (boolean|Highcharts.ShadowOptionsObject);
        /**
         * (Highcharts) The name of a symbol to use for the border around the
         * label. Symbols are predefined functions on the Renderer object.
         */
        shape?: string;
        /**
         * (Highcharts) Styles for the label. The default `color` setting is
         * `"contrast"`, which is a pseudo color that Highcharts picks up and
         * applies the maximum contrast to the underlying point item, for
         * example the bar in a bar chart.
         *
         * The `textOutline` is a pseudo property that applies an outline of the
         * given width with the given color, which by default is the maximum
         * contrast to the text. So a bright text color will result in a black
         * text outline for maximum readability on a mixed background. In some
         * cases, especially with grayscale text, the text outline doesn't work
         * well, in which cases it can be disabled by setting it to `"none"`.
         * When `useHTML` is true, the `textOutline` will not be picked up. In
         * this, case, the same effect can be acheived through the `text-shadow`
         * CSS property.
         *
         * For some series types, where each point has an extent, like for
         * example tree maps, the data label may overflow the point. There are
         * two strategies for handling overflow. By default, the text will wrap
         * to multiple lines. The other strategy is to set `style.textOverflow`
         * to `ellipsis`, which will keep the text on one line plus it will
         * break inside long words.
         */
        style?: Highcharts.CSSObject;
        /**
         * (Highcharts) Options for a label text which should follow marker's
         * shape. Border and background are disabled for a label that follows a
         * path.
         *
         * **Note:** Only SVG-based renderer supports this option. Setting
         * `useHTML` to true will disable this option.
         */
        textPath?: Highcharts.DataLabelsTextPathOptionsObject;
        /**
         * (Highcharts) Whether to use HTML to render the labels.
         */
        useHTML?: boolean;
        /**
         * (Highcharts) The vertical alignment of a data label. Can be one of
         * `top`, `middle` or `bottom`. The default value depends on the data,
         * for instance in a column chart, the label is above positive values
         * and below negative values.
         */
        verticalAlign?: string;
        /**
         * (Highcharts) The x position offset of the label relative to the point
         * in pixels.
         */
        x?: number;
        /**
         * (Highcharts) The y position offset of the label relative to the point
         * in pixels.
         */
        y?: number;
        /**
         * (Highcharts) The z index of the data labels. Use a `zIndex` of 6 to
         * display it above the series, or use a `zIndex` of 2 to display it
         * behind the series.
         */
        zIndex?: number;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotTreemapOnPointConnectorOptions {
        /**
         * (Highcharts) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Highcharts) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Highcharts) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Highcharts) Options allowing to set a position and an offset of the
     * series in the _Series on point_ feature.
     */
    interface PlotTreemapOnPointPositionOptions {
        /**
         * (Highcharts) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Highcharts) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Highcharts) X position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Highcharts) Y position of the series center. By default, the series
         * is displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts) A `treemap` series. If the type option is not specified, it
     * is inherited from chart.type.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `treemap` series are defined in plotOptions.treemap.
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
     * You have to extend the `SeriesTreemapOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesTreemapOptions {
     * customProperty: string; }
     *
     */
    interface SeriesTreemapOptions extends Highcharts.PlotTreemapOptions, Highcharts.SeriesOptions {
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
        type: "treemap";
    }
}

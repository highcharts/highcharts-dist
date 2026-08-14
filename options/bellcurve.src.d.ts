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
    interface PlotBellcurveDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for series data sorting.
     */
    interface PlotBellcurveDataSortingOptions {
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
     * (Highcharts) Animation when hovering over the marker.
     */
    interface PlotBellcurveMarkerStatesHoverAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotBellcurveOnPointConnectorOptions {
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
    interface PlotBellcurveOnPointPositionOptions {
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
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotBellcurveStatesHoverAnimationOptions {
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
    interface PlotBellcurveStatesSelectAnimationOptions {
        /**
         * (Highcharts, Highstock) The duration of the hover animation in
         * milliseconds. By default the hover state animates quickly in, and
         * slowly back to normal.
         */
        duration?: number;
    }
    /**
     * (Highcharts) Options for the tooltip header when tooltip.split is
     * enabled. The header is the box containing the X value in a split tooltip.
     */
    interface PlotBellcurveTooltipHeaderOptions {
        /**
         * (Highcharts) Background color for the tooltip header when
         * tooltip.split is enabled.
         */
        backgroundColor?: Highcharts.ColorType;
        /**
         * (Highcharts) Border color for the tooltip header when tooltip.split
         * is enabled.
         */
        borderColor?: Highcharts.ColorType;
        /**
         * (Highcharts) The width of the border for the tooltip header when
         * tooltip.split is enabled.
         */
        borderWidth?: number;
        /**
         * (Highcharts) Distance between the plot area and the header (except
         * the chevron) in a split tooltip, in pixels. The default value makes
         * the header text align with the axis labels.
         */
        distance?: number;
        /**
         * (Highcharts) The name of a symbol to use for the border around the
         * tooltip header. Applies only when tooltip.split is enabled.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
         * series.marker.symbol.
         */
        shape?: string;
        /**
         * (Highcharts) CSS styles for the tooltip header. The default is `{
         * fontSize: '1em' }`, ensuring that the header text is the same size as
         * the axis labels.
         */
        style?: object;
    }
    /**
     * (Highcharts) A `bellcurve` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * For options that apply to multiple series, it is recommended to add them
     * to the plotOptions.series options structure. To apply to all series of
     * this specific type, apply it to plotOptions.bellcurve.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `bellcurve` series are defined in
     * plotOptions.bellcurve.
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
     * You have to extend the `SeriesBellcurveOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesBellcurveOptions {
     * customProperty: string; }
     *
     */
    interface SeriesBellcurveOptions extends Highcharts.PlotBellcurveOptions, Highcharts.SeriesOptions {
        /**
         * (Highcharts) An integer identifying the index to use for the base
         * series, or a string representing the id of the series.
         */
        baseSeries?: (number|string);
        /**
         * Not available
         */
        data?: undefined;
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
        type: "bellcurve";
    }
}

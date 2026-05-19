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
    interface PlotPictorialDataLabelsAnimationOptions {
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
    interface PlotPictorialLabelStyleOptions {
        fontSize?: number;
        fontWeight?: string;
    }
    /**
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface PlotPictorialStatesHoverAnimationOptions {
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
    interface PlotPictorialStatesSelectAnimationOptions {
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
    interface PlotPictorialTooltipHeaderOptions {
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
     * (Highcharts, Highstock) Animation setting for hovering the graph in
     * line-type series.
     */
    interface SeriesPictorialDataStatesHoverAnimationOptions {
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
    interface SeriesPictorialDataStatesSelectAnimationOptions {
        /**
         * (Highcharts, Highstock) The duration of the hover animation in
         * milliseconds. By default the hover state animates quickly in, and
         * slowly back to normal.
         */
        duration?: number;
    }
}

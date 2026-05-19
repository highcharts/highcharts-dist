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
    interface PlotGanttDataLabelsAnimationOptions {
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
    interface PlotGanttDataLabelsStyleOptions {
        whiteSpace?: string;
    }
    /**
     * (Gantt) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotGanttOnPointConnectorOptions {
        /**
         * (Gantt) A name for the dash style to use for the connector.
         */
        dashstyle?: string;
        /**
         * (Gantt) Color of the connector line. By default it's the series'
         * color.
         */
        stroke?: string;
        /**
         * (Gantt) Pixel width of the connector line.
         */
        width?: number;
    }
    /**
     * (Gantt) Options allowing to set a position and an offset of the series in
     * the _Series on point_ feature.
     */
    interface PlotGanttOnPointPositionOptions {
        /**
         * (Gantt) Series center offset from the original x position. If
         * defined, the connector line is drawn connecting original position
         * with new position.
         */
        offsetX?: number;
        /**
         * (Gantt) Series center offset from the original y position. If
         * defined, the connector line is drawn from original position to a new
         * position.
         */
        offsetY?: number;
        /**
         * (Gantt) X position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        x?: number;
        /**
         * (Gantt) Y position of the series center. By default, the series is
         * displayed on the point that it is connected to.
         */
        y?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) A partial fill for each point, typically
     * used to visualize how much of a task is performed.
     */
    interface PlotGanttPartialFillOptions {
        /**
         * (Highcharts, Highstock, Gantt) The fill color to be used for partial
         * fills. Defaults to a darker shade of the point color.
         */
        fill?: Highcharts.ColorType;
    }
    /**
     * (Gantt) Animation when not hovering over the marker.
     */
    interface PlotGanttStatesInactiveAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts, Highstock, Gantt) For series on datetime axes, the date
     * format in the tooltip's header will by default be guessed based on the
     * closest data points. This member gives the default string representations
     * used for each unit. For an overview of the string or object
     * configuration, see dateFormat.
     */
    interface PlotGanttTooltipDateTimeLabelFormatsOptions {
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
     * (Gantt) Positioning options for fixed tooltip, taking effect only when
     * tooltip.fixed is `true`.
     */
    interface PlotGanttTooltipPositionOptions {
        /**
         * (Gantt) The horizontal alignment of the fixed tooltip.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Gantt) What the fixed tooltip alignment should be relative to.
         *
         * The default, `pane`, means that it is aligned within the plot area
         * for that given series. If the tooltip is split (as default in Stock
         * charts), each partial tooltip is aligned within the series' pane.
         */
        relativeTo?: Highcharts.OptionsRelativeToValue;
        /**
         * (Gantt) The vertical alignment of the fixed tooltip.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Gantt) X pixel offset from the given position. Can be used to shy
         * away from axis lines, grid lines etc to avoid the tooltip overlapping
         * other elements.
         */
        x?: number;
        /**
         * (Gantt) Y pixel offset from the given position. Can be used to shy
         * away from axis lines, grid lines etc to avoid the tooltip overlapping
         * other elements.
         */
        y?: number;
    }
}

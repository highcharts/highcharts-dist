/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * (Highcharts) A collection of attributes for the buttons. The object takes
     * SVG attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button states.
     */
    interface PlotSunburstBreadcrumbsButtonThemeOptions {
        style?: Highcharts.PlotSunburstBreadcrumbsButtonThemeStyleOptions;
    }
    interface PlotSunburstBreadcrumbsEventsOptions {
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
    interface PlotSunburstBreadcrumbsPositionOptions {
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
    interface PlotSunburstBreadcrumbsSeparatorStyleOptions {
        color?: string;
        fontSize?: number;
    }
    /**
     * (Highcharts) Can set a `colorVariation` on all points which lies on the
     * same level.
     */
    interface PlotSunburstLevelsColorVariationOptions {
        /**
         * (Highcharts) The key of a color variation. Currently supports
         * `brightness` only.
         */
        key?: string;
        /**
         * (Highcharts) The ending value of a color variation. The last sibling
         * will receive this value.
         */
        to?: number;
    }
    /**
     * (Highcharts) Determines the width of the ring per level.
     */
    interface PlotSunburstLevelSizeOptions {
        /**
         * (Highcharts) How to interpret `levelSize.value`.
         *
         * - `percentage` gives a width relative to result of outer radius minus
         * inner radius.
         *
         * - `pixels` gives the ring a fixed width in pixels.
         *
         * - `weight` takes the remaining width after percentage and pixels, and
         * distributes it across all "weighted" levels. The value relative to
         * the sum of all weights determines the width.
         */
        unit?: Highcharts.OptionsUnitValue;
        /**
         * (Highcharts) The value used for calculating the width of the ring.
         * Its' affect is determined by `levelSize.unit`.
         */
        value?: number;
    }
    /**
     * (Highcharts) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotSunburstOnPointConnectorOptions {
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
    interface PlotSunburstOnPointPositionOptions {
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
     * (Highcharts) Positioning options for fixed tooltip, taking effect only
     * when tooltip.fixed is `true`.
     */
    interface PlotSunburstTooltipPositionOptions {
        /**
         * (Highcharts) The horizontal alignment of the fixed tooltip.
         */
        align?: Highcharts.AlignValue;
        /**
         * (Highcharts) What the fixed tooltip alignment should be relative to.
         *
         * The default, `pane`, means that it is aligned within the plot area
         * for that given series. If the tooltip is split (as default in Stock
         * charts), each partial tooltip is aligned within the series' pane.
         */
        relativeTo?: Highcharts.OptionsRelativeToValue;
        /**
         * (Highcharts) The vertical alignment of the fixed tooltip.
         */
        verticalAlign?: Highcharts.VerticalAlignValue;
        /**
         * (Highcharts) X pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        x?: number;
        /**
         * (Highcharts) Y pixel offset from the given position. Can be used to
         * shy away from axis lines, grid lines etc to avoid the tooltip
         * overlapping other elements.
         */
        y?: number;
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

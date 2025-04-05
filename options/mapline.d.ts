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
    interface PlotMaplineDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highmaps) Options for the connector in the _Series on point_ feature.
     *
     * In styled mode, the connector can be styled with the
     * `.highcharts-connector-seriesonpoint` class name.
     */
    interface PlotMaplineOnPointConnectorOptions {
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
    interface PlotMaplineOnPointPositionOptions {
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
     * (Highcharts, Highstock, Highmaps) Positioning options for fixed tooltip,
     * taking effect only when tooltip.fixed is `true`.
     */
    interface PlotMaplineTooltipPositionOptions {
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
     * (Highmaps) An array of data points for the series. For the `mapline`
     * series type, points can be given in the following ways:
     *
     * 1. An array of numerical values. In this case, the numerical values will
     * be interpreted as `value` options. Example: (see online documentation for
     * example)
     *
     * 2. An array of arrays with 2 values. In this case, the values correspond
     * to `[hc-key, value]`. Example: (see online documentation for example)
     *
     * 3. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesMaplineDataOptions {
        /**
         * (Highmaps) Individual color for the point. By default the color is
         * either used to denote the value, or pulled from the global `colors`
         * array.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highmaps) Individual data label for each point. The options are the
         * same as the ones for plotOptions.series.dataLabels.
         */
        dataLabels?: Highcharts.DataLabelsOptions;
        /**
         * (Highmaps) Individual point events
         */
        events?: Highcharts.PointEventsOptionsObject;
        /**
         * (Highmaps) For map and mapline series types, the geometry of a point.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define the geometry instead of
         * defining it on the data points themselves.
         *
         * The geometry object is compatible to that of a `feature` in GeoJSON,
         * so features of GeoJSON can be passed directly into the `data`,
         * optionally after first filtering and processing it.
         *
         * For pre-projected maps (like GeoJSON maps from our map collection),
         * user has to specify coordinates in `projectedUnits` for geometry type
         * other than `Point`, instead of `[longitude, latitude]`.
         */
        geometry?: (object|Highcharts.SeriesMaplineDataGeometryOptions);
        /**
         * (Highmaps) An id for the point. This can be used after render time to
         * get a pointer to the point object through `chart.get()`.
         */
        id?: string;
        /**
         * (Highmaps) When data labels are laid out on a map, Highmaps runs a
         * simplified algorithm to detect collision. When two labels collide,
         * the one with the lowest rank is hidden. By default the rank is
         * computed from the area.
         */
        labelrank?: number;
        /**
         * (Highmaps) Pixel width of the mapline line.
         */
        lineWidth?: (number|undefined);
        /**
         * (Highmaps) The relative mid point of an area, used to place the data
         * label. Ranges from 0 to 1\. When `mapData` is used, middleX can be
         * defined there.
         */
        middleX?: number;
        /**
         * (Highmaps) The relative mid point of an area, used to place the data
         * label. Ranges from 0 to 1\. When `mapData` is used, middleY can be
         * defined there.
         */
        middleY?: number;
        /**
         * (Highmaps) The name of the point as shown in the legend, tooltip,
         * dataLabel etc.
         */
        name?: string;
        /**
         * (Highmaps) For map and mapline series types, the SVG path for the
         * shape. For compatibility with old IE, not all SVG path definitions
         * are supported, but M, L and C operators are safe.
         *
         * To achieve a better separation between the structure and the data, it
         * is recommended to use `mapData` to define that paths instead of
         * defining them on the data points themselves.
         *
         * For providing true geographical shapes based on longitude and
         * latitude, use the `geometry` option instead.
         */
        path?: string;
        /**
         * (Highmaps) The numeric value of the data point.
         */
        value?: (number|null);
    }
}

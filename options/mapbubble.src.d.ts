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
    interface PlotMapbubbleDataLabelsAnimationOptions {
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
    interface PlotMapbubbleOnPointConnectorOptions {
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
    interface PlotMapbubbleOnPointPositionOptions {
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
     * (Highmaps) The geometry of a point.
     *
     * To achieve a better separation between the structure and the data, it is
     * recommended to use `mapData` to define the geometry instead of defining
     * it on the data points themselves.
     *
     * The geometry object is compatible to that of a `feature` in geoJSON, so
     * features of geoJSON can be passed directly into the `data`, optionally
     * after first filtering and processing it.
     */
    interface SeriesMapbubbleDataGeometryOptions {
        /**
         * (Highmaps) The geometry coordinates in terms of `[longitude,
         * latitude]`.
         */
        coordinates?: Highcharts.LonLatArray;
        /**
         * (Highmaps) The geometry type, which in case of the `mappoint` series
         * is always `Point`.
         */
        type?: "Point";
    }
    /**
     * (Highmaps) A `mapbubble` series. If the type option is not specified, it
     * is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `mapbubble` series are defined in
     * plotOptions.mapbubble.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     *
     * You have to extend the `SeriesMapbubbleOptions` via an interface to allow
     * custom properties: ``` declare interface SeriesMapbubbleOptions {
     * customProperty: string; }
     *
     */
    interface SeriesMapbubbleOptions extends Highcharts.PlotMapbubbleOptions, Highcharts.SeriesOptions {
        /**
         * (Highmaps) An array of data points for the series. For the
         * `mapbubble` series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values
         * will be interpreted as `z` options. Example: (see online
         * documentation for example)
         *
         * 2. An array of objects with named values. The following snippet shows
         * only a few settings, see the complete options set below. If the total
         * number of data points exceeds the series' turboThreshold, this option
         * is not available. (see online documentation for example)
         */
        data?: Array<(number|null|Highcharts.SeriesMapbubbleDataOptions)>;
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
        type: "mapbubble";
    }
}

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
     * (Highmaps) Animation when not hovering over the marker.
     */
    interface PlotMaplineStatesInactiveAnimationOptions {
        duration?: number;
    }
    /**
     * (Highmaps) For map and mapline series types, the geometry of a point.
     *
     * To achieve a better separation between the structure and the data, it is
     * recommended to use `mapData` to define the geometry instead of defining
     * it on the data points themselves.
     *
     * The geometry object is compatible to that of a `feature` in GeoJSON, so
     * features of GeoJSON can be passed directly into the `data`, optionally
     * after first filtering and processing it.
     *
     * For pre-projected maps (like GeoJSON maps from our map collection), user
     * has to specify coordinates in `projectedUnits` for geometry type other
     * than `Point`, instead of `[longitude, latitude]`.
     */
    interface SeriesMaplineDataGeometryOptions {
        /**
         * (Highmaps) The geometry coordinates in terms of arrays of
         * `[longitude, latitude]`, or a two dimensional array of the same. The
         * dimensionality must comply with the `type`.
         */
        coordinates?: (Array<Array<LonLatArray>>|Array<LonLatArray>);
        /**
         * (Highmaps) The geometry type. Can be one of `LineString`, `Polygon`,
         * `MultiLineString` or `MultiPolygon`.
         */
        type?: Highcharts.MapGeometryTypeValue;
    }
    /**
     * (Highmaps) Animation when not hovering over the marker.
     */
    interface SeriesMaplineDataStatesInactiveAnimationOptions {
        duration?: number;
    }
}

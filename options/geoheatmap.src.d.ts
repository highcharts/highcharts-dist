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
    interface PlotGeoheatmapDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highmaps) Make the geoheatmap render its data points as an interpolated
     * image. It can be used to show a Temperature Map-like charts.
     */
    interface PlotGeoheatmapInterpolationOptions {
        /**
         * (Highmaps) Represents how much blur should be added to the
         * interpolated image. Works best in the range of 0-1, all higher values
         * would need a lot more performance of the machine to calculate more
         * detailed interpolation.
         *
         * * **Note:** Useful, if the data is spread into wide range of
         * longitude and latitude values.
         */
        blur?: number;
        /**
         * (Highmaps) Enable or disable the interpolation of the geoheatmap
         * series.
         */
        enabled?: boolean;
    }
    /**
     * (Highmaps) An array of data points for the series. For the `geoheatmap`
     * series type, points can be given in the following ways:
     *
     * 1. An array of arrays with 3 or 2 values. In this case, the values
     * correspond to `lon,lat,value`. The `value` refers to the color on the
     * `colorAxis`. (see online documentation for example)
     *
     * 2. An array of objects with named values. The following snippet shows
     * only a few settings, see the complete options set below. If the total
     * number of data points exceeds the series' turboThreshold, this option is
     * not available. (see online documentation for example)
     */
    interface SeriesGeoheatmapDataOptions {
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
         * (Highmaps) The `id` of a series in the drilldown.series array to use
         * for a drilldown for this point.
         */
        drilldown?: string;
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
        geometry?: (object|Highcharts.SeriesGeoheatmapDataGeometryOptions);
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
         * (Highmaps) The value of the point, resulting in a color controlled by
         * options as set in the colorAxis configuration.
         */
        value?: (number|null);
    }
}

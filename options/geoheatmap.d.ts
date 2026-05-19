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
     * (Highmaps) Animation when not hovering over the marker.
     */
    interface PlotGeoheatmapStatesInactiveAnimationOptions {
        duration?: number;
    }
    /**
     * (Highcharts, Highstock, Highmaps) Options for the tooltip header when
     * tooltip.split is enabled. The header is the box containing the X value in
     * a split tooltip.
     */
    interface PlotGeoheatmapTooltipHeaderOptions {
        /**
         * (Highcharts, Highstock, Highmaps) Background color for the tooltip
         * header when tooltip.split is enabled.
         */
        backgroundColor?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps) Border color for the tooltip header
         * when tooltip.split is enabled.
         */
        borderColor?: Highcharts.ColorType;
        /**
         * (Highcharts, Highstock, Highmaps) The width of the border for the
         * tooltip header when tooltip.split is enabled.
         */
        borderWidth?: number;
        /**
         * (Highcharts, Highstock, Highmaps) Distance between the plot area and
         * the header (except the chevron) in a split tooltip, in pixels. The
         * default value makes the header text align with the axis labels.
         */
        distance?: number;
        /**
         * (Highcharts, Highstock, Highmaps) The name of a symbol to use for the
         * border around the tooltip header. Applies only when tooltip.split is
         * enabled.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
         * series.marker.symbol.
         */
        shape?: string;
        /**
         * (Highcharts, Highstock, Highmaps) CSS styles for the tooltip header.
         * The default is `{ fontSize: '1em' }`, ensuring that the header text
         * is the same size as the axis labels.
         */
        style?: object;
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
    interface SeriesGeoheatmapDataGeometryOptions {
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
    interface SeriesGeoheatmapDataStatesInactiveAnimationOptions {
        duration?: number;
    }
}

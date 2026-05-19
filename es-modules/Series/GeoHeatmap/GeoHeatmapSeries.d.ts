import type GeoHeatmapSeriesOptions from './GeoHeatmapSeriesOptions.js';
import type { InterpolationObject } from './GeoHeatmapSeriesOptions.js';
import type MapView from '../../Maps/MapView.js';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import GeoHeatmapPoint from './GeoHeatmapPoint.js';
import Point from '../../Core/Series/Point.js';
import PointerEvent from '../../Core/PointerEvent.js';
declare const MapSeries: typeof import("../Map/MapSeries").default;
/**
 * The Geo Heatmap series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.geoheatmap
 *
 * @augments Highcharts.Series
 */
declare class GeoHeatmapSeries extends MapSeries {
    /**
     * A `geoheatmap` series is a variety of heatmap series, composed into
     * the map projection, where the units are expressed in the latitude
     * and longitude, and individual values contained in a matrix are
     * represented as colors.
     *
     * @sample maps/demo/geoheatmap-europe/
     *         GeoHeatmap Chart with interpolation on Europe map
     * @sample maps/series-geoheatmap/geoheatmap-equalearth/
     *         GeoHeatmap Chart on the Equal Earth Projection
     *
     * @extends      plotOptions.map
     * @since        11.0.0
     * @product      highmaps
     * @excluding    allAreas, dragDrop, findNearestPointBy, geometry, joinBy,
     * negativeColor, onPoint, stickyTracking
     * @requires     modules/geoheatmap
     * @optionparent plotOptions.geoheatmap
     */
    static defaultOptions: GeoHeatmapSeriesOptions;
    options: GeoHeatmapSeriesOptions;
    data: Array<GeoHeatmapPoint>;
    points: Array<GeoHeatmapPoint>;
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
    isDirtyCanvas: boolean;
    /**
     * For updated colsize and rowsize options
     * @private
     */
    update(): void;
    /**
     * Override translate method to not fire if not needed.
     * @private
     */
    translate(): void;
    /**
     * Create the extended object out of the boolean
     * @private
     */
    getInterpolation(): InterpolationObject;
    /**
     * Overriding drawPoints original method to apply new features.
     * @private
     */
    drawPoints(): void;
    /**
     * Project ImageData to actual mapView projection used on a chart.
     * @private
     */
    getProjectedImageData(mapView: MapView, projectedWidth: number, projectedHeight: number, cartesianImageData: ImageData, canvas: HTMLCanvasElement, horizontalShift: number, verticalShift: number): Uint8ClampedArray;
    searchPoint(e: PointerEvent, compareX?: boolean): Point | undefined;
}
interface GeoHeatmapSeries {
    pointClass: typeof GeoHeatmapPoint;
    pointArrayMap: Array<string>;
    image?: SVGElement;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        geoheatmap: typeof GeoHeatmapSeries;
    }
}
export default GeoHeatmapSeries;

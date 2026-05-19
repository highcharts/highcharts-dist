import type HeatmapSeries from './Heatmap/HeatmapSeries';
import type GeoHeatmapSeries from './GeoHeatmap/GeoHeatmapSeries';
import type Point from '../Core/Series/Point';
/**
 * Find color of point based on color axis.
 *
 * @function Highcharts.colorFromPoint
 *
 * @param {number | null} value
 *        Value to find corresponding color on the color axis.
 *
 * @param {Highcharts.Point} point
 *        Point to find it's color from color axis.
 *
 * @return {number[]}
 *        Color in RGBa array.
 */
declare function colorFromPoint(value: number | null, point: Point): number[];
/**
 * Method responsible for creating a canvas for interpolation image.
 * @private
 */
declare function getContext(series: HeatmapSeries | GeoHeatmapSeries): CanvasRenderingContext2D | undefined;
declare const InterpolationUtilities: {
    colorFromPoint: typeof colorFromPoint;
    getContext: typeof getContext;
};
export default InterpolationUtilities;

import type SplinePoint from './SplinePoint';
import type SplineSeriesOptions from './SplineSeriesOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const LineSeries: typeof import("../Line/LineSeries").default;
/**
 * Spline series type.
 *
 * @private
 */
declare class SplineSeries extends LineSeries {
    /**
     * A spline series is a special type of line series, where the segments
     * between the data points are smoothed.
     *
     * @sample {highcharts} highcharts/demo/spline-irregular-time/
     *         Spline chart
     * @sample {highstock} stock/demo/spline/
     *         Spline chart
     *
     * @extends      plotOptions.series
     * @excluding    step, boostThreshold, boostBlending
     * @product      highcharts highstock
     * @optionparent plotOptions.spline
     */
    static defaultOptions: SplineSeriesOptions;
    data: Array<SplinePoint>;
    options: SplineSeriesOptions;
    points: Array<SplinePoint>;
    /**
     * Get the spline segment from a given point's previous neighbor to the
     * given point.
     *
     * @private
     * @function Highcharts.seriesTypes.spline#getPointSpline
     */
    getPointSpline(points: Array<SplinePoint>, point: SplinePoint, i: number): SVGPath.CurveTo;
}
interface SplineSeries {
    pointClass: typeof SplinePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        spline: typeof SplineSeries;
    }
}
export default SplineSeries;

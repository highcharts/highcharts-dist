import type VectorPoint from './VectorPoint';
import type VectorSeriesOptions from './VectorSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
/**
 * The vector series class.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.vector
 *
 * @augments Highcharts.seriesTypes.scatter
 */
declare class VectorSeries extends ScatterSeries {
    static defaultOptions: VectorSeriesOptions;
    data: Array<VectorPoint>;
    lengthData?: Array<number>;
    lengthMax: number;
    options: VectorSeriesOptions;
    points: Array<VectorPoint>;
    /**
     * Fade in the arrows on initializing series.
     * @private
     */
    animate(init?: boolean): void;
    /**
     * Create a single arrow. It is later rotated around the zero
     * centerpoint.
     * @private
     */
    arrow(point: VectorPoint): SVGPath;
    /**
     * @private
     */
    drawPoints(): void;
    /**
     * Get presentational attributes.
     * @private
     */
    pointAttribs(point?: VectorPoint, state?: string): SVGAttributes;
    /**
     * @private
     */
    translate(): void;
}
interface VectorSeries {
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof VectorPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        vector: typeof VectorSeries;
    }
}
export default VectorSeries;

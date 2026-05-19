import type ScatterPoint from './ScatterPoint';
import type ScatterSeriesOptions from './ScatterSeriesOptions';
declare const LineSeries: typeof import("../Line/LineSeries").default;
/**
 * Scatter series type.
 *
 * @private
 */
declare class ScatterSeries extends LineSeries {
    static defaultOptions: import("../Line/LineSeriesOptions").LineSeriesOptions & import("../../Core/Series/SeriesOptions").PlotOptionsOf<ScatterSeries>;
    data: Array<ScatterPoint>;
    options: ScatterSeriesOptions;
    points: Array<ScatterPoint>;
    /**
     * Optionally add the jitter effect.
     * @private
     */
    applyJitter(): void;
    /**
     * @private
     */
    drawGraph(): void;
}
interface ScatterSeries {
    pointClass: typeof ScatterPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        scatter: typeof ScatterSeries;
    }
}
export default ScatterSeries;

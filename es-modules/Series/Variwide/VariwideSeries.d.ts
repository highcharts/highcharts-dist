import type { TypedArray } from '../../Shared/Types';
import type RangeSelector from '../../Stock/RangeSelector/RangeSelector';
import type VariwideSeriesOptions from './VariwideSeriesOptions';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import VariwidePoint from './VariwidePoint.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.variwide
 *
 * @augments Highcharts.Series
 */
declare class VariwideSeries extends ColumnSeries {
    static compose: (AxisClass: typeof import("../../Core/Axis/Axis").default, TickClass: typeof import("../../Core/Axis/Tick").default) => void;
    static defaultOptions: VariwideSeriesOptions;
    crispOption?: boolean;
    data: Array<VariwidePoint>;
    options: VariwideSeriesOptions;
    points: Array<VariwidePoint>;
    relZ: Array<number>;
    totalZ: number;
    zData?: Array<number>;
    processData(force?: boolean): undefined;
    /**
     * Translate an x value inside a given category index into the distorted
     * axis translation.
     *
     * @private
     * @function Highcharts.Series#postTranslate
     *
     * @param {number} index
     *        The category index
     *
     * @param {number} x
     *        The X pixel position in undistorted axis pixels
     *
     * @param {Highcharts.Point} point
     *        For crosshairWidth for every point
     *
     * @return {number}
     *         Distorted X position
     */
    postTranslate(index: number, x: number, point?: VariwidePoint): number;
    translate(): void;
    /**
     * Function that corrects stack labels positions
     * @private
     */
    correctStackLabels(): void;
    getXExtremes(xData: Array<number> | TypedArray): RangeSelector.RangeObject;
}
interface VariwideSeries {
    irregularWidths: boolean;
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof VariwidePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        variwide: typeof VariwideSeries;
    }
}
export default VariwideSeries;

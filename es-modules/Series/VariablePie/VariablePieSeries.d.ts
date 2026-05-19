import type DataLabel from '../../Core/Series/DataLabel';
import type VariablePiePoint from './VariablePiePoint';
import type VariablePieSeriesOptions from './VariablePieSeriesOptions';
declare const PieSeries: typeof import("../Pie/PieSeries").default;
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        maxPxSize?: number;
        minPxSize?: number;
    }
}
/**
 * The variablepie series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.variablepie
 *
 * @augments Highcharts.Series
 */
declare class VariablePieSeries extends PieSeries {
    static defaultOptions: VariablePieSeriesOptions;
    data: Array<VariablePiePoint>;
    options: VariablePieSeriesOptions;
    points: Array<VariablePiePoint>;
    radii: Array<number>;
    /**
     * Before standard translate method for pie chart it is needed to calculate
     * min/max radius of each pie slice based on its Z value.
     * @private
     */
    calculateExtremes(): void;
    /**
     * Finding radius of series points based on their Z value and min/max Z
     * value for all series.
     *
     * @private
     * @function Highcharts.Series#getRadii
     *
     * @param {number} zMin
     * Min threshold for Z value. If point's Z value is smaller that zMin, point
     * will have the smallest possible radius.
     *
     * @param {number} zMax
     * Max threshold for Z value. If point's Z value is bigger that zMax, point
     * will have the biggest possible radius.
     *
     * @param {number} minSize
     * Minimal pixel size possible for radius.
     *
     * @param {number} maxSize
     * Minimal pixel size possible for radius.
     */
    getRadii(zMin: number, zMax: number, minSize: number, maxSize: number): void;
    /**
     * It is needed to null series.center on chart redraw. Probably good idea
     * will be to add this option in directly in pie series.
     * @private
     */
    redraw(): void;
    /** @private */
    getDataLabelPosition(point: VariablePiePoint, distance: number): DataLabel.LabelPositionObject;
    /**
     * Extend translate by updating radius for each pie slice instead of using
     * one global radius.
     * @private
     */
    translate(positions?: Array<number>): void;
    /**
     * For arrayMin and arrayMax calculations array shouldn't have
     * null/undefined/string values. In this case it is needed to check if
     * points Z value is a Number.
     * @private
     */
    zValEval(zVal: (number | string | undefined)): (boolean | null);
}
interface VariablePieSeries {
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof VariablePiePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        variablepie: typeof VariablePieSeries;
    }
}
export default VariablePieSeries;

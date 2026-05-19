import type ParetoPoint from './ParetoPoint';
import type ParetoSeriesOptions from './ParetoSeriesOptions';
import DerivedComposition from '../DerivedComposition.js';
declare const LineSeries: typeof import("../Line/LineSeries").default;
/**
 * The pareto series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pareto
 *
 * @augments Highcharts.Series
 */
declare class ParetoSeries extends LineSeries {
    static defaultOptions: ParetoSeriesOptions;
    data: Array<ParetoPoint>;
    points: Array<ParetoPoint>;
    options: ParetoSeriesOptions;
    /**
     * Calculate y sum and each percent point.
     *
     * @private
     * @function Highcharts.Series#sumPointsPercents
     *
     * @param {Array<number>} yValues
     * Y values
     *
     * @param {Array<number>} xValues
     * X values
     *
     * @param {number} sum
     * Sum of all y values
     *
     * @param {boolean} [isSum]
     * Declares if calculate sum of all points
     *
     * @return {number|Array<number,number>}
     * Returns sum of points or array of points [x,sum]
     *
     * @requires modules/pareto
     */
    sumPointsPercents<T extends (boolean | undefined)>(yValues: Array<number>, xValues: Array<number>, sum: number, isSum?: T): (T extends true ? number : Array<Array<number>>);
    /**
     * Calculate sum and return percent points.
     *
     * @private
     * @function Highcharts.Series#setDerivedData
     * @requires modules/pareto
     */
    setDerivedData(): void;
}
interface ParetoSeries extends DerivedComposition.SeriesComposition {
    pointClass: typeof ParetoPoint;
}
/**
 * @private
 */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pareto: typeof ParetoSeries;
    }
}
export default ParetoSeries;

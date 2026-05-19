import type HistogramPoint from './HistogramPoint';
import type HistogramPointOptions from './HistogramPointOptions';
import type HistogramSeriesOptions from './HistogramSeriesOptions';
import DerivedComposition from '../DerivedComposition.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import AnimationOptions from '../../Core/Animation/AnimationOptions';
/**
 * Histogram class
 * @private
 * @class
 * @name Highcharts.seriesTypes.histogram
 * @augments Highcharts.Series
 */
declare class HistogramSeries extends ColumnSeries {
    static defaultOptions: HistogramSeriesOptions;
    binWidth?: number;
    data: Array<HistogramPoint>;
    options: HistogramSeriesOptions;
    points: Array<HistogramPoint>;
    userOptions: HistogramSeriesOptions;
    binsNumber(data?: number[]): number;
    setData(data: number[] | undefined, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), updatePoints?: boolean): void;
    derivedData(baseData: Array<number>, binsNumber: number, binWidth: number): Array<HistogramPointOptions>;
    setDerivedData(): void;
}
interface HistogramSeries extends DerivedComposition.SeriesComposition {
    animate: typeof ColumnSeries.prototype.animate;
    destroy: typeof ColumnSeries.prototype.destroy;
    drawPoints: typeof ColumnSeries.prototype.drawPoints;
    drawTracker: typeof ColumnSeries.prototype.drawTracker;
    group: typeof ColumnSeries.prototype.group;
    init: typeof ColumnSeries.prototype.init;
    pointAttribs: typeof ColumnSeries.prototype.pointAttribs;
    pointClass: typeof HistogramPoint;
    remove: typeof ColumnSeries.prototype.remove;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        histogram: typeof HistogramSeries;
    }
}
export default HistogramSeries;

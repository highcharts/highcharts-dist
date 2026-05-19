import type RenkoSeriesOptions from './RenkoSeriesOptions';
import type ColorType from '../../Core/Color/ColorType';
import type Series from '../../Core/Series/Series';
import type PointOptions from '../../Core/Series/PointOptions';
import type { PointShortOptions } from '../../Core/Series/PointOptions';
import RenkoPoint from './RenkoPoint.js';
import ColumnSeries from '../Column/ColumnSeries.js';
import type AnimationOptions from '../../Core/Animation/AnimationOptions';
interface RenkoData {
    x: number;
    low: number;
    y: number;
    color?: ColorType;
    upTrend?: boolean;
}
/**
 * The renko series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.renko
 *
 * @augments Highcharts.seriesTypes.column
 */
declare class RenkoSeries extends ColumnSeries {
    /**
     * Renko data created from linear data
     */
    renkoData?: RenkoData[];
    hasDerivedData: boolean;
    allowDG: boolean;
    init(): void;
    setData(data: (PointOptions | PointShortOptions)[], redraw?: boolean, animation?: boolean | Partial<AnimationOptions>): void;
    getXExtremes(xData: number[]): {
        min: number;
        max: number;
    };
    getProcessedData(): Series.ProcessedDataObject;
    static defaultOptions: RenkoSeriesOptions;
    data: Array<RenkoPoint>;
    options: RenkoSeriesOptions;
    points: Array<RenkoPoint>;
}
interface RenkoSeries {
    pointClass: typeof RenkoPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        renko: typeof RenkoSeries;
    }
}
export default RenkoSeries;

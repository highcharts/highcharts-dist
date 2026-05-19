import type RenkoSeries from './RenkoSeries';
import type RenkoPointOptions from './RenkoPointOptions';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare class RenkoPoint extends ColumnPoint {
    options: RenkoPointOptions;
    upTrend: boolean;
    series: RenkoSeries;
    getClassName(): string;
}
export default RenkoPoint;

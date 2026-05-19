import type VariwidePointOptions from './VariwidePointOptions';
import type VariwideSeries from './VariwideSeries';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        crosshairWidth?: VariwidePoint['crosshairWidth'];
    }
}
declare class VariwidePoint extends ColumnPoint {
    crosshairWidth: number;
    options: VariwidePointOptions;
    series: VariwideSeries;
    isValid(): boolean;
}
export default VariwidePoint;

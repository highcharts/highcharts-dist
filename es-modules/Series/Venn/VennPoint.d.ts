import type VennPointOptions from './VennPointOptions';
import type VennSeries from './VennSeries';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class VennPoint extends ScatterPoint {
    options: VennPointOptions;
    series: VennSeries;
    sets?: Array<string>;
    value?: number;
    isValid(): boolean;
    shouldDraw(): boolean;
}
interface VennPoint {
}
export default VennPoint;

import type Funnel3DPointOptions from './Funnel3DPointOptions';
import type Funnel3DSeries from './Funnel3DSeries';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
declare class Funnel3DPoint extends ColumnSeries.prototype.pointClass {
    dlBoxRaw: Record<string, number>;
    options: Funnel3DPointOptions;
    series: Funnel3DSeries;
    y: number;
}
interface Funnel3DPoint {
    shapeType: string;
}
export default Funnel3DPoint;

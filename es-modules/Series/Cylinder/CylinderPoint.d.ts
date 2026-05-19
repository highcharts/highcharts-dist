import type CylinderPointOptions from './CylinderPointOptions';
import type CylinderSeries from './CylinderSeries';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare class CylinderPoint extends ColumnPoint {
    options: CylinderPointOptions;
    series: CylinderSeries;
}
interface CylinderPoint {
    shapeType: string;
}
export default CylinderPoint;

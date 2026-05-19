import type ColumnRangePointOptions from './ColumnRangePointOptions.js';
import type ColumnRangeSeries from './ColumnRangeSeries.js';
declare const columnProto: import("../Column/ColumnPoint.js").ColumnPoint, AreaRangePoint: typeof import("../AreaRange/AreaRangePoint.js").default;
declare class ColumnRangePoint extends AreaRangePoint {
    options: ColumnRangePointOptions;
    series: ColumnRangeSeries;
    isValid(): boolean;
}
interface ColumnRangePoint {
    barX: typeof columnProto.barX;
    pointWidth: typeof columnProto.pointWidth;
    shapeType: typeof columnProto.shapeType;
}
export default ColumnRangePoint;

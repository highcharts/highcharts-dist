import type ItemPointOptions from './ItemPointOptions';
import type ItemSeries from './ItemSeries';
declare const Point: typeof import("../../Core/Series/Point").default, PiePoint: typeof import("../Pie/PiePoint").default;
declare class ItemPoint extends PiePoint {
    options: ItemPointOptions;
    series: ItemSeries;
}
interface ItemPoint {
    haloPath: typeof Point.prototype.haloPath;
}
export default ItemPoint;

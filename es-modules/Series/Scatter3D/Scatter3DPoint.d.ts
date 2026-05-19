import type Scatter3DPointOptions from './Scatter3DPointOptions';
import type Scatter3DSeries from './Scatter3DSeries';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class Scatter3DPoint extends ScatterPoint {
    options: Scatter3DPointOptions;
    series: Scatter3DSeries;
    applyOptions(): Scatter3DPoint;
}
export default Scatter3DPoint;

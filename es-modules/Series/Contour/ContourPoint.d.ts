declare const ScatterPoint: typeof import("../Scatter/ScatterPoint.js").default;
declare class ContourPoint extends ScatterPoint {
    value: (number | null);
    x: number;
    y: number;
}
export default ContourPoint;

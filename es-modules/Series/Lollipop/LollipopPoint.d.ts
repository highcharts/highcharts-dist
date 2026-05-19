import type LollipopPointOptions from './LollipopPointOptions';
import type LollipopSeries from './LollipopSeries';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare const Point: typeof import("../../Core/Series/Point").default, ScatterPoint: typeof import("../Scatter/ScatterPoint").default, DumbbellPoint: typeof import("../Dumbbell/DumbbellPoint").default;
declare class LollipopPoint extends Point {
    connector?: SVGElement;
    options: LollipopPointOptions;
    series: LollipopSeries;
    plotX: number;
    pointWidth: number;
}
interface LollipopPoint {
    destroy: typeof DumbbellPoint.prototype['destroy'];
    pointSetState: typeof ScatterPoint.prototype['setState'];
    setState: typeof DumbbellPoint.prototype['setState'];
}
export default LollipopPoint;

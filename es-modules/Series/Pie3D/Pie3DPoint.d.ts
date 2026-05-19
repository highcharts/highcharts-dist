import type Pie3DSeries from './Pie3DSeries';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const PiePoint: typeof import("../Pie/PiePoint").default;
declare class Pie3DPoint extends PiePoint {
    series: Pie3DSeries;
    /**
     * @private
     */
    haloPath(): SVGPath;
}
export default Pie3DPoint;

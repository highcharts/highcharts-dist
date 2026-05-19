import type PositionObject from '../Renderer/PositionObject';
import type SVGPath from '../Renderer/SVG/SVGPath';
export interface IntersectionObject {
    center: PositionObject;
    d: SVGPath;
}
export default IntersectionObject;

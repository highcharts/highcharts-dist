import type ColorType from '../../Core/Color/ColorType';
import SVGElement3D from '../../Core/Renderer/SVG/SVGElement3D.js';
declare class SVGElement3DCylinder extends SVGElement3D {
    parts: string[];
    pathType: string;
    fillSetter(fill: ColorType): this;
}
export default SVGElement3DCylinder;

import type ColorType from '../../Core/Color/ColorType';
import SVGElement3D from '../../Core/Renderer/SVG/SVGElement3D.js';
declare class SVGElement3DFunnel extends SVGElement3D {
    mainParts: string[];
    parts: string[];
    sideGroups: string[];
    sideParts: Record<string, Array<string>>;
    pathType: string;
    opacitySetter(value: string): this;
    fillSetter(fill: ColorType): this;
    adjustForGradient(): void;
    zIndexSetter(): boolean;
    onAdd(): void;
}
export default SVGElement3DFunnel;

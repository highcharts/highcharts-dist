import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type SVGPath3D from '../../Core/Renderer/SVG/SVGPath3D';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        finishedOnAdd?: boolean;
        lowerGroup?: SVGElement;
        upperGroup?: SVGElement;
        fontLower?: SVGElement;
        backLower?: SVGElement;
        rightLower?: SVGElement;
    }
}
declare module '../../Core/Renderer/SVG/SVGRendererBase' {
    interface SVGRendererBase {
        funnel3d(shapeArgs: SVGAttributes): SVGElement;
        funnel3dPath(shapeArgs: SVGAttributes): Funnel3DPathsObject;
    }
}
interface Funnel3DPathsObject extends SVGPath3D {
    backLower: SVGPath;
    backUpper: SVGPath;
    frontLower: SVGPath;
    frontUpper: SVGPath;
    rightLower: SVGPath;
    rightUpper: SVGPath;
}
/** @private */
declare function compose(SVGRendererClass: typeof SVGRenderer): void;
declare const Funnel3DComposition: {
    compose: typeof compose;
};
export default Funnel3DComposition;

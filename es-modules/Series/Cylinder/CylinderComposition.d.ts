import type Chart from '../../Core/Chart/Chart';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type SVGPath3D from '../../Core/Renderer/SVG/SVGPath3D';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SVGRendererBase' {
    interface SVGRendererBase {
        /** @requires CylinderComposition */
        cylinder(shapeArgs: SVGAttributes): SVGElement;
        /** @requires CylinderComposition */
        cylinderPath(shapeArgs: SVGAttributes): CylinderPathsObject;
        /** @requires CylinderComposition */
        getCurvedPath(points: Array<PositionObject>): SVGPath;
        /** @requires CylinderComposition */
        getCylinderBack(topPath: SVGPath, bottomPath: SVGPath): SVGPath;
        /** @requires CylinderComposition */
        getCylinderEnd(chart: Chart, shapeArgs: SVGAttributes, isBottom?: boolean): SVGPath;
        /** @requires CylinderComposition */
        getCylinderFront(topPath: SVGPath, bottomPath: SVGPath): SVGPath;
    }
}
interface CylinderPathsObject extends SVGPath3D {
    back: SVGPath;
    bottom: SVGPath;
    front: SVGPath;
    top: SVGPath;
    zIndexes: Record<string, number>;
}
/**
 *
 */
declare function compose(SVGRendererClass: typeof SVGRenderer): void;
declare const CylinderComposition: {
    compose: typeof compose;
};
export default CylinderComposition;

import type SVGPath from '../Core/Renderer/SVG/SVGPath';
interface PathParams {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    bendAt?: number;
    offset?: number;
    radius?: number;
    width?: number;
    inverted?: boolean;
    parentVisible: boolean;
}
/**
 *
 */
declare function getOrthogonalPath(pathParams: PathParams): SVGPath;
/**
 *
 */
declare function getStraightPath(pathParams: PathParams): SVGPath;
/**
 *
 */
declare function getCurvedPath(pathParams: PathParams): SVGPath;
/**
 * General function to apply corner radius to a path
 * @private
 */
declare function applyRadius(path: SVGPath, r?: number): SVGPath;
declare const PathUtilities: {
    applyRadius: typeof applyRadius;
    getLinkPath: {
        default: typeof getOrthogonalPath;
        orthogonal: typeof getOrthogonalPath;
        straight: typeof getStraightPath;
        curved: typeof getCurvedPath;
    };
};
export default PathUtilities;

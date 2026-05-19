import type SVGPath from './SVGPath';
export interface SVGPath3D {
    back?: SVGPath;
    bottom?: SVGPath;
    front?: SVGPath;
    side?: SVGPath;
    top?: SVGPath;
    zIndexes?: Record<string, number>;
}
export default SVGPath3D;

import type HLCPointOptions from './HLCPointOptions';
import type HLCSeries from './HLCSeries';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare class HLCPoint extends ColumnPoint {
    close: number;
    high: number;
    low: number;
    options: HLCPointOptions;
    plotClose: number;
    plotHigh?: number;
    plotLow?: number;
    series: HLCSeries;
    yBottom?: number;
    /**
     * Get the origin position for entrance animation of new points
     */
    getOrigin({ x }: SVGAttributes, shape?: SVGAttributes): SVGAttributes;
}
declare namespace HLCPoint {
    type PointShortOptions = Array<number>;
}
export default HLCPoint;

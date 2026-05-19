import type ColorMapComposition from '../ColorMapComposition';
import type HeatmapPointOptions from './HeatmapPointOptions';
import type HeatmapSeries from './HeatmapSeries';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class HeatmapPoint extends ScatterPoint {
    options: HeatmapPointOptions;
    pointPadding?: number;
    series: HeatmapSeries;
    value: (number | null);
    x: number;
    y: number;
    /** @private */
    applyOptions(options: HeatmapPointOptions, x?: number): HeatmapPoint;
    /** @private */
    getCellAttributes(): HeatmapPoint.CellAttributes;
    /**
     * @private
     */
    haloPath(size: number): SVGPath;
    /**
     * Color points have a value option that determines whether or not it is
     * a null point
     * @private
     */
    isValid(): boolean;
}
interface HeatmapPoint extends ColorMapComposition.PointComposition {
}
declare namespace HeatmapPoint {
    interface CellAttributes extends Record<string, number> {
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }
}
export default HeatmapPoint;

import type SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
import type { PictorialPathOptions } from './PictorialSeriesOptions';
import Axis from '../../Core/Axis/Axis.js';
/**
 *
 */
declare function rescalePatternFill(element: SVGElement, stackHeight: number, width: number, height: number, borderWidth?: number): void;
/**
 *
 */
declare function getStackMetrics(yAxis: Axis, shape?: PictorialPathOptions): {
    height: number;
    y: number;
};
/**
 *
 */
declare function invertShadowGroup(shadowGroup: SVGElement, yAxis: Axis): void;
declare const _default: {
    rescalePatternFill: typeof rescalePatternFill;
    invertShadowGroup: typeof invertShadowGroup;
    getStackMetrics: typeof getStackMetrics;
};
export default _default;

import type Point from '../../Core/Series/Point';
import type RectangleObject from '../../Core/Renderer/RectangleObject';
import type Series from '../../Core/Series/Series';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type { XRangePointOptions, XRangePointPartialFillOptions } from './XRangePointOptions';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
import XRangeSeries from './XRangeSeries.js';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        tooltipDateKeys?: Array<string>;
    }
}
interface BBoxObjectWithCenter extends BBoxObject {
    centerX?: number;
}
declare class XRangePoint extends ColumnPoint {
    /**
     * Return color of a point based on its category.
     *
     * @private
     * @function getColorByCategory
     *
     * @param {object} series
     *        The series which the point belongs to.
     *
     * @param {object} point
     *        The point to calculate its color for.
     *
     * @return {object}
     *         Returns an object containing the properties color and colorIndex.
     */
    static getColorByCategory(series: Series, point: Point): AnyRecord;
    options: XRangePointOptions;
    series: XRangeSeries;
    dlBox?: BBoxObjectWithCenter;
    /**
     * @private
     */
    resolveColor(): void;
    /**
     * Extend init to have y default to 0.
     *
     * @private
     */
    constructor(series: XRangeSeries, options: XRangePointOptions, x: number);
    /**
     * Extend applyOptions to handle time strings for x2
     *
     * @private
     */
    applyOptions(options: XRangePointOptions, x: number): Point;
    /**
     * @private
     */
    setState(): void;
    /**
     * @private
     */
    isValid(): boolean;
}
interface XRangePoint {
    clipRectArgs?: RectangleObject;
    len?: number;
    partialFill: XRangePointOptions['partialFill'];
    partShapeArgs?: XRangePointPartialFillOptions;
    shapeType: string;
    tooltipDateKeys: Array<string>;
    x2?: number;
    yCategory?: string;
}
export default XRangePoint;

import type ColorString from '../../Core/Color/ColorString';
import type Series from '../../Core/Series/Series';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import Pie3DPoint from './Pie3DPoint.js';
declare const PieSeries: typeof import("../Pie/PieSeries").default;
/**
 * Internal types
 * @private
 */
declare module '../Pie/PieSeriesOptions' {
    interface PieSeriesOptions {
        depth?: number;
        edgeColor?: ColorString;
        edgeWidth?: number;
    }
}
declare class Pie3DSeries extends PieSeries {
    static compose(SeriesClass: typeof Series): void;
    /**
     * @private
     */
    addPoint(): void;
    /**
     * @private
     */
    animate(init?: boolean): void;
    /**
     * @private
     */
    getDataLabelPosition(point: Pie3DPoint, distance: number): any;
    /**
     * @private
     */
    pointAttribs(point: Pie3DPoint): SVGAttributes;
    /**
     * @private
     */
    translate(): void;
    /**
     * @private
     */
    drawTracker(): void;
}
interface Pie3DSeries {
    pointClass: typeof Pie3DPoint;
}
export default Pie3DSeries;

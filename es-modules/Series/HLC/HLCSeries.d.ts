import type HLCSeriesOptions from './HLCSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
import type Series from '../../Core/Series/Series';
import HLCPoint from './HLCPoint.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
/**
 * The hlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hlc
 *
 * @augments Highcharts.Series
 */
declare class HLCSeries extends ColumnSeries {
    static compose(_SeriesClass: typeof Series, SVGRendererClass: typeof SVGRenderer): void;
    static defaultOptions: HLCSeriesOptions;
    data: Array<HLCPoint>;
    options: HLCSeriesOptions;
    points: Array<HLCPoint>;
    yData: Array<Array<number>>;
    /**
     * Extend the path if close is not between high and low.
     *
     * @param {SVGPath} path the path array of the point
     * @param {number} halfStrokeWidth
     * @param {number} value value of the point to which the stem should be extended
     */
    protected extendStem(path: SVGPath, halfStrokeWidth: number, value: number): void;
    /**
     * Function to create SVGPath of the point based on the plot positions of
     * this point.
     * @private
     */
    protected getPointPath(point: HLCPoint): SVGPath;
    /**
     * @private
     * @function Highcharts.seriesTypes.hlc#init
     */
    init(): void;
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point?: HLCPoint, state?: StatesOptionsKey): SVGAttributes;
    toYData(point: HLCPoint): Array<number>;
    /**
     * Translate data points from raw values x and y to plotX and plotY
     *
     * @private
     * @function Highcharts.seriesTypes.hlc#translate
     */
    translate(): void;
}
interface HLCSeries {
    pointClass: typeof HLCPoint;
    pointAttrToOptions: Record<string, string>;
}
declare module '../../Core/Options' {
    interface LangOptions {
        stockOpen?: string;
        stockHigh?: string;
        stockLow?: string;
        stockClose?: string;
    }
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        hlc: typeof HLCSeries;
    }
}
export default HLCSeries;

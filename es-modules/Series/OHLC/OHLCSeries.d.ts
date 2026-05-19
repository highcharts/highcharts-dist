import type OHLCSeriesOptions from './OHLCSeriesOptions';
import type Series from '../../Core/Series/Series';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import OHLCPoint from './OHLCPoint.js';
declare const HLCSeries: typeof import("../HLC/HLCSeries").default;
/**
 * The ohlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ohlc
 *
 * @augments Highcharts.Series
 */
declare class OHLCSeries extends HLCSeries {
    static defaultOptions: OHLCSeriesOptions;
    static compose(SeriesClass: typeof Series, ..._args: Array<never>): void;
    data: Array<OHLCPoint>;
    options: OHLCSeriesOptions;
    points: Array<OHLCPoint>;
    protected getPointPath(point: OHLCPoint): SVGPath;
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point?: OHLCPoint, state?: StatesOptionsKey): SVGAttributes;
}
interface OHLCSeries {
    pointClass: typeof OHLCPoint;
    pointAttrToOptions: Record<string, string>;
    toYData(point: OHLCPoint): Array<number>;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ohlc: typeof OHLCSeries;
    }
}
export default OHLCSeries;

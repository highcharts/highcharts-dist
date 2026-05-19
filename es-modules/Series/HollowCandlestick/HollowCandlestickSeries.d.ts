import HollowCandlestickPoint from './HollowCandlestickPoint.js';
import type HollowCandlestickSeriesOptions from './HollowCandlestickSeriesOptions';
import { StatesOptionsKey } from '../../Core/Series/StatesOptions.js';
import SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes.js';
import ColorType from '../../Core/Color/ColorType.js';
declare const CandlestickSeries: typeof import("../Candlestick/CandlestickSeries.js").default;
interface HollowcandleInfo {
    isBullish: boolean;
    trendDirection: 'down' | 'up';
}
type OHLCObject = {
    open: number | null | undefined;
    high: number | null | undefined;
    low: number | null | undefined;
    close: number | null | undefined;
};
/**
 * The hollowcandlestick series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hollowcandlestick
 *
 * @augments Highcharts.seriesTypes.candlestick
 */
declare class HollowCandlestickSeries extends CandlestickSeries {
    /**
     * A hollow candlestick chart is a style of financial chart used to
     * describe price movements over time.
     *
     * @sample stock/demo/hollow-candlestick/
     *         Hollow Candlestick chart
     *
     * @extends      plotOptions.candlestick
     * @product      highstock
     * @requires     modules/hollowcandlestick
     * @optionparent plotOptions.hollowcandlestick
     */
    static defaultOptions: HollowCandlestickSeriesOptions;
    data: Array<HollowCandlestickPoint>;
    hollowCandlestickData: Array<HollowcandleInfo>;
    options: HollowCandlestickSeriesOptions;
    points: Array<HollowCandlestickPoint>;
    /**
     * Iterate through all points and get their type.
     * @private
     *
     * @function Highcharts.seriesTypes.hollowcandlestick#getPriceMovement
     *
     *
     */
    getPriceMovement(): void;
    /**
     * Return line color based on candle type.
     * @private
     *
     * @function Highcharts.seriesTypes.hollowcandlestick#getLineColor
     *
     * @param {string} trendDirection
     * Type of candle direction (bearish/bullish)(down/up).
     *
     * @return {ColorType}
     * Line color
     */
    getLineColor(trendDirection: 'up' | 'down'): ColorType;
    /**
     * Return fill color based on candle type.
     * @private
     *
     * @function Highcharts.seriesTypes.hollowcandlestick#getPointFill
     *
     * @param {HollowcandleInfo} hollowcandleInfo
     *        Information about the current candle.
     *
     * @return {ColorType}
     * Point fill color
     */
    getPointFill(hollowcandleInfo: HollowcandleInfo): ColorType;
    /**
     * @private
     * @function Highcharts.seriesTypes.hollowcandlestick#init
     */
    init(): void;
    /**
     * Check if the candle is bearish or bullish. For bullish one, return true.
     * For bearish, return string depending on the previous point.
     *
     * @function Highcharts.seriesTypes.hollowcandlestick#isBullish
     *
     * @param {Object} dataPoint
     * Current point which we calculate.
     *
     * @param {Object} previousDataPoint
     * Previous point.
     */
    isBullish(dataPoint: OHLCObject, previousDataPoint?: OHLCObject): HollowcandleInfo;
    /**
     * Add color and fill attribute for each point.
     *
     * @private
     *
     * @function Highcharts.seriesTypes.hollowcandlestick#pointAttribs
     *
     * @param {HollowCandlestickPoint} point
     * Point to which we are adding attributes.
     *
     * @param {StatesOptionsKey} state
     * Current point state.
     */
    pointAttribs(point?: HollowCandlestickPoint, state?: StatesOptionsKey): SVGAttributes;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        hollowcandlestick: typeof HollowCandlestickSeries;
    }
}
export default HollowCandlestickSeries;

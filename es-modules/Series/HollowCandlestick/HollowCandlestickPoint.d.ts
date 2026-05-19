import HollowCandlestickSeries from './HollowCandlestickSeries.js';
declare const CandlestickSeries: typeof import("../Candlestick/CandlestickSeries.js").default;
declare class HollowCandlestickPoint extends CandlestickSeries.prototype.pointClass {
    series: HollowCandlestickSeries;
    /**
     * Update class name if needed.
     * @private
     * @function Highcharts.seriesTypes.hollowcandlestick#getClassName
     */
    getClassName(): string;
}
export default HollowCandlestickPoint;

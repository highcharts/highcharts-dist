import type HeikinAshiSeries from './HeikinAshiSeries';
declare const CandlestickPoint: typeof import("../Candlestick/CandlestickPoint").default;
declare class HeikinAshiPoint extends CandlestickPoint {
}
interface HeikinAshiPoint {
    series: HeikinAshiSeries;
}
declare namespace HeikinAshiPoint {
    type PointShortOptions = [number, number, number, number];
}
export default HeikinAshiPoint;

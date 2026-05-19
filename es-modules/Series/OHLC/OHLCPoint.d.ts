import type OHLCPointOptions from './OHLCPointOptions';
import type OHLCSeries from './OHLCSeries';
import type Series from './../../Core/Series/Series';
import Point from './../../Core/Series/Point.js';
declare const HLCSeries: typeof import("../HLC/HLCSeries").default;
declare class OHLCPoint extends HLCSeries.prototype.pointClass {
    open: number;
    options: OHLCPointOptions;
    plotOpen: number;
    series: OHLCSeries;
    /**
     * Extend the parent method by adding up or down to the class name.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getClassName
     */
    getClassName(): string;
    /**
     * Save upColor as point color (#14826).
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveUpColor
     */
    resolveUpColor(): void;
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveColor
     */
    resolveColor(): void;
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getZone
     *
     * @return {Highcharts.SeriesZonesOptionsObject}
     *         The zone item.
     */
    getZone(): Series.ZoneObject;
    /**
     * Extend the parent method by resolving up/down colors (#15849)
     * @private
     **/
    applyOptions(): Point;
}
declare namespace OHLCPoint {
    type PointShortOptions = Array<number>;
}
export default OHLCPoint;

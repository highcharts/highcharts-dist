import type SolidGaugePoint from './SolidGaugePoint';
import type SolidGaugeSeriesOptions from './SolidGaugeSeriesOptions';
declare const GaugeSeries: typeof import("../Gauge/GaugeSeries").default;
import SolidGaugeAxis from '../../Core/Axis/SolidGaugeAxis.js';
/**
 * SolidGauge series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.solidgauge
 *
 * @augments Highcharts.Series
 */
declare class SolidGaugeSeries extends GaugeSeries {
    static defaultOptions: SolidGaugeSeriesOptions;
    data: Array<SolidGaugePoint>;
    points: Array<SolidGaugePoint>;
    options: SolidGaugeSeriesOptions;
    axis: SolidGaugeAxis;
    yAxis: SolidGaugeAxis;
    startAngleRad: SolidGaugeSeries['thresholdAngleRad'];
    thresholdAngleRad: number;
    translate(): void;
    drawPoints(): void;
    animate(init?: boolean): void;
}
interface SolidGaugeSeries {
    pointClass: typeof SolidGaugePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        solidgauge: typeof SolidGaugeSeries;
    }
}
export default SolidGaugeSeries;

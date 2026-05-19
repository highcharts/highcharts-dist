import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type ColorType from '../../Core/Color/ColorType';
import type DataLabel from '../../Core/Series/DataLabel';
import type FunnelDataLabelOptions from './FunnelDataLabelOptions';
import type FunnelPoint from './FunnelPoint';
import type FunnelSeriesOptions from './FunnelSeriesOptions';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import Chart from '../../Core/Chart/Chart.js';
declare const PieSeries: typeof import("../Pie/PieSeries").default;
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        borderColor?: ColorType;
        color?: ColorType;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.funnel
 *
 * @augments Highcharts.Series
 */
declare class FunnelSeries extends PieSeries {
    static defaultOptions: FunnelSeriesOptions;
    centerX?: number;
    data: Array<FunnelPoint>;
    options: FunnelSeriesOptions;
    points: Array<FunnelPoint>;
    /**
     * @private
     */
    alignDataLabel(point: FunnelPoint, dataLabel: SVGLabel, options: FunnelDataLabelOptions, alignTo: BBoxObject, isNew?: boolean): void;
    /**
     * Extend the data label method.
     * @private
     */
    drawDataLabels(): void;
    /** @private */
    getDataLabelPosition(point: FunnelPoint, distance: number): DataLabel.LabelPositionObject;
    /**
     * Overrides the pie translate method.
     * @private
     */
    translate(): void;
    /**
     * Funnel items don't have angles (#2289).
     * @private
     */
    sortByAngle(points: Array<FunnelPoint>): void;
}
interface FunnelSeries {
    pointClass: typeof FunnelPoint;
    getWidthAt(y: number): number;
    getXPos(y: number, half: boolean, point: FunnelPoint): number;
}
declare namespace FunnelSeries {
    /** @private */
    function compose(ChartClass: typeof Chart): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        funnel: typeof FunnelSeries;
    }
}
export default FunnelSeries;

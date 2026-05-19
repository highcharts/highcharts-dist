import type Chart from '../../Core/Chart/Chart';
import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type WindbarbSeriesOptions from './WindbarbSeriesOptions';
import OnSeriesComposition from '../OnSeriesComposition.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
import WindbarbPoint from './WindbarbPoint.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.windbarb
 *
 * @augments Highcharts.Series
 */
declare class WindbarbSeries extends ColumnSeries {
    static defaultOptions: WindbarbSeriesOptions;
    data: Array<WindbarbPoint>;
    options: WindbarbSeriesOptions;
    points: Array<WindbarbPoint>;
    init(chart: Chart, options: WindbarbSeriesOptions): void;
    pointAttribs(point?: WindbarbPoint, state?: StatesOptionsKey): SVGAttributes;
    drawPoints(): void;
    animate(init?: boolean): void;
    markerAttribs(): SVGAttributes;
    getExtremes(): DataExtremesObject;
    shouldShowTooltip(plotX: number, plotY: number, options?: Chart.IsInsideOptionsObject): boolean;
}
interface WindbarbSeries extends OnSeriesComposition.SeriesComposition {
    beaufortFloor: Array<number>;
    beaufortName: Array<string>;
    group: typeof ColumnSeries.prototype.group;
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof WindbarbPoint;
    remove: typeof ColumnSeries.prototype.remove;
    drawTracker: typeof ColumnSeries.prototype.remove;
    windArrow(point: WindbarbPoint): (SVGElement | SVGPath);
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        windbarb: typeof WindbarbSeries;
    }
}
export default WindbarbSeries;

import PointAndFigurePoint from './PointAndFigurePoint.js';
import type Point from '../../Core/Series/Point.js';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes.js';
import type PointAndFigureSeriesOptions from './PointAndFigureSeriesOptions';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer.js';
import Series from '../../Core/Series/Series.js';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries.js").default, columnProto: import("../Column/ColumnSeries.js").default;
/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pointandfigure
 *
 * @augments Highcharts.Series
 */
declare class PointAndFigureSeries extends ScatterSeries {
    static defaultOptions: PointAndFigureSeriesOptions;
    static compose(SVGRendererClass: typeof SVGRenderer): void;
    options: PointAndFigureSeriesOptions;
    points: Array<PointAndFigurePoint>;
    xData: Array<number>;
    yData: Array<number>;
    allowDG: boolean;
    init(): void;
    getProcessedData(): Series.ProcessedDataObject;
    markerAttribs(point: Point): SVGAttributes;
    translate(): void;
}
interface PointAndFigureGroup {
    x: number;
    y: Array<number>;
    upTrend: boolean;
}
interface PointAndFigureSeries {
    takeOrdinalPosition: boolean;
    pnfDataGroups: Array<PointAndFigureGroup>;
    getColumnMetrics: typeof columnProto.getColumnMetrics;
    markerWidth: number;
    markerHeight: number;
    calculatedBoxSize: number;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pointandfigure: typeof PointAndFigureSeries;
    }
}
export default PointAndFigureSeries;

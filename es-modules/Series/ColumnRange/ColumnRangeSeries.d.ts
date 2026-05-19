import type ColumnRangeSeriesOptions from './ColumnRangeSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import ColumnRangePoint from './ColumnRangePoint.js';
declare const AreaRangeSeries: typeof import("../AreaRange/AreaRangeSeries").default, columnProto: import("../Column/ColumnSeries").default;
/**
 * The ColumnRangeSeries class
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.columnrange
 *
 * @augments Highcharts.Series
 */
declare class ColumnRangeSeries extends AreaRangeSeries {
    static defaultOptions: ColumnRangeSeriesOptions;
    setOptions(): ColumnRangeSeriesOptions;
    translate(): void;
    pointAttribs(): SVGAttributes;
    translate3dPoints(): void;
    translate3dShapes(): void;
    afterColumnTranslate(): void;
}
interface ColumnRangeSeries {
    options: ColumnRangeSeriesOptions;
    pointClass: typeof ColumnRangePoint;
    points: Array<ColumnRangePoint>;
    adjustForMissingColumns: typeof columnProto.adjustForMissingColumns;
    animate: typeof columnProto.animate;
    crispCol: typeof columnProto.crispCol;
    drawPoints: typeof columnProto.drawPoints;
    getColumnMetrics: typeof columnProto.getColumnMetrics;
}
/**
 * @private
 */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        columnrange: typeof ColumnRangeSeries;
    }
}
export default ColumnRangeSeries;

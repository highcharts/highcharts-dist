import PointAndFigureSeries from './PointAndFigureSeries.js';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint.js").default;
/**
 * @private
 * @class
 */
declare class PointAndFigurePoint extends ScatterPoint {
    upTrend: boolean;
    series: PointAndFigureSeries;
    resolveMarker(): void;
    resolveColor(): void;
    /**
     * Extend the parent method by adding up or down to the class name.
     * @private
     * @function Highcharts.seriesTypes.pointandfigure#getClassName
     */
    getClassName(): string;
}
export default PointAndFigurePoint;

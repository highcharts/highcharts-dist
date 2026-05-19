import type CylinderSeriesOptions from './CylinderSeriesOptions';
import CylinderPoint from './CylinderPoint.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
/**
 * The cylinder series type.
 *
 * @requires highcharts-3d
 * @requires modules/cylinder
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cylinder
 *
 * @augments Highcharts.Series
 */
declare class CylinderSeries extends ColumnSeries {
    static compose: (SVGRendererClass: typeof import("../../Core/Renderer/SVG/SVGRenderer").default) => void;
    static defaultOptions: CylinderSeriesOptions;
    data: Array<CylinderPoint>;
    options: CylinderSeriesOptions;
    points: Array<CylinderPoint>;
}
interface CylinderSeries {
    pointClass: typeof CylinderPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        cylinder: typeof CylinderSeries;
    }
}
export default CylinderSeries;

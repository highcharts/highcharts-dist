import type DotPlotPoint from './DotPlotPoint';
import type DotPlotSeriesOptions from './DotPlotSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.dotplot
 *
 * @augments Highcharts.Series
 */
declare class DotPlotSeries extends ColumnSeries {
    static defaultOptions: DotPlotSeriesOptions;
    data: Array<DotPlotPoint>;
    options: DotPlotSeriesOptions;
    points: Array<DotPlotPoint>;
    drawPoints(): void;
}
interface DotPlotSeries {
    pointAttr?: SVGAttributes;
    pointClass: typeof DotPlotPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dotplot: typeof DotPlotSeries;
    }
}
export default DotPlotSeries;

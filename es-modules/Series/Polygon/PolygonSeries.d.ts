import type PolygonPoint from './PolygonPoint';
import type PolygonSeriesOptions from './PolygonSeriesOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
declare class PolygonSeries extends ScatterSeries {
    static defaultOptions: PolygonSeriesOptions;
    areaPath?: SVGPath;
    data: Array<PolygonPoint>;
    options: PolygonSeriesOptions;
    points: Array<PolygonPoint>;
    getGraphPath(): SVGPath;
    drawGraph(): void;
}
interface PolygonSeries {
    pointClass: typeof PolygonPoint;
    type: string;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        polygon: typeof PolygonSeries;
    }
}
export default PolygonSeries;

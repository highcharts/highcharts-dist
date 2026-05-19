import type MapChart from '../../Core/Chart/MapChart';
import type MapPointPointOptions from './MapPointPointOptions';
import type MapPointSeriesOptions from './MapPointSeriesOptions';
import type { MapBounds } from '../../Maps/MapViewOptions';
import type { ProjectedXY } from '../../Maps/MapViewOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type SymbolOptions from '../../Core/Renderer/SVG/SymbolOptions';
import MapPointPoint from './MapPointPoint.js';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries.js").default;
import '../../Core/Defaults.js';
import '../Scatter/ScatterSeries.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.mappoint
 *
 * @augments Highcharts.Series
 */
declare class MapPointSeries extends ScatterSeries {
    static defaultOptions: MapPointSeriesOptions;
    chart: MapChart;
    data: Array<MapPointPoint>;
    options: MapPointSeriesOptions;
    points: Array<MapPointPoint>;
    clearBounds: () => void;
    drawDataLabels(): void;
    /**
     * Resolve `lon`, `lat` or `geometry` options and project the resulted
     * coordinates.
     *
     * @private
     */
    projectPoint(pointOptions: MapPointPointOptions): ProjectedXY | undefined;
    translate(): void;
}
declare const mapmarker: (x: number, y: number, w: number, h: number, options?: SymbolOptions) => SVGPath;
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Highcharts Maps */
        mapmarker: typeof mapmarker;
    }
}
interface MapPointSeries {
    bounds: MapBounds | undefined;
    pointClass: typeof MapPointPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        mappoint: typeof MapPointSeries;
    }
}
export default MapPointSeries;

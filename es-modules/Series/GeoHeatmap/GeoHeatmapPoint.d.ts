import GeoHeatmapPointOptions from '../GeoHeatmap/GeoHeatmapPointOptions.js';
import GeoHeatmapSeries from '../GeoHeatmap/GeoHeatmapSeries.js';
import { PointShortOptions } from '../../Core/Series/PointOptions.js';
declare const MapPoint: typeof import("../Map/MapPoint.js").default;
declare module '../../Core/Series/KDPointSearchObjectBase' {
    interface KDPointSearchObjectBase {
        lat?: number;
        lon?: number;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        lat?: number;
        lon?: number;
    }
}
declare class GeoHeatmapPoint extends MapPoint {
    lat: number;
    lon: number;
    options: GeoHeatmapPointOptions;
    series: GeoHeatmapSeries;
    /**
     * @private
     */
    applyOptions(options: (GeoHeatmapPointOptions | PointShortOptions), x?: number): GeoHeatmapPoint;
}
export default GeoHeatmapPoint;

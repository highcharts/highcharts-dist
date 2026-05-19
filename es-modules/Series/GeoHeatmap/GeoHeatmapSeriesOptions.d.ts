import type MapSeriesOptions from '../Map/MapSeriesOptions';
export interface InterpolationObject {
    enabled: boolean;
    blur: number;
}
interface GeoHeatmapSeriesOptions extends MapSeriesOptions {
    colsize?: number;
    rowsize?: number;
    interpolation: boolean | InterpolationObject;
}
export default GeoHeatmapSeriesOptions;

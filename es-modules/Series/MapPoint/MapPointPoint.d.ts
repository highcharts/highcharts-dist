import type MapPointPointOptions from './MapPointPointOptions';
import type MapPointSeries from './MapPointSeries';
import type { MapBounds } from '../../Maps/MapViewOptions';
import type ScatterPoint from './../Scatter/ScatterPoint';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
declare class MapPointPoint extends ScatterSeries.prototype.pointClass {
    insetIndex?: number;
    options: MapPointPointOptions;
    properties?: AnyRecord;
    series: MapPointSeries;
    isValid(): boolean;
}
interface MapPointPoint extends ScatterPoint {
    bounds?: MapBounds;
}
export default MapPointPoint;

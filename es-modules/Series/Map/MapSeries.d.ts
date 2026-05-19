import type { AnimationOptions } from '../../Core/Animation/AnimationOptions';
import type ColorType from '../../Core/Color/ColorType';
import type { MapDataType } from '../../Maps/GeoJSON';
import type { MapBounds } from '../../Maps/MapViewOptions';
import type MapSeriesOptions from './MapSeriesOptions';
import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type { SeriesTypeOptions } from '../../Core/Series/SeriesType';
import ColorMapComposition from '../ColorMapComposition.js';
import CU from '../CenteredUtilities.js';
import MapChart from '../../Core/Chart/MapChart.js';
import MapPoint from './MapPoint.js';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        clearBounds?(): void;
        getProjectedBounds?(): MapBounds | undefined;
        mapTitle?: string;
        transformGroups?: Array<SVGElement> | undefined;
        tupleKey?: string;
        useMapGeometry?: boolean;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /** @requires modules/map */
        mapData?: MapDataType;
    }
    interface SeriesStateHoverOptions {
        brightness?: number;
        color?: ColorType;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.map
 *
 * @augments Highcharts.Series
 */
declare class MapSeries extends ScatterSeries {
    static defaultOptions: import("../Line/LineSeriesOptions").LineSeriesOptions & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Scatter/ScatterSeries").default> & MapSeriesOptions;
    bounds?: MapBounds;
    chart: MapChart;
    data: Array<MapPoint>;
    group: SVGElement;
    joinBy: Array<string>;
    mapData?: unknown;
    mapMap?: AnyRecord;
    mapTitle?: string;
    options: MapSeriesOptions;
    pointAttrToOptions?: Record<string, string>;
    points: Array<MapPoint>;
    transformGroups: Array<SVGElement> | undefined;
    valueData?: Array<number>;
    valueMax?: number;
    valueMin?: number;
    tupleKey: string;
    clearBounds(): void;
    /**
     * Get the bounding box of all paths in the map combined.
     *
     */
    getProjectedBounds(): MapBounds | undefined;
    /**
     * Return the stroke-width either from a series options or point options
     * object. This function is used by both the map series where the
     * `borderWidth` sets the stroke-width, and the mapline series where the
     * `lineWidth` sets the stroke-width.
     * @private
     */
    private getStrokeWidth;
    matchPoints(): boolean;
    /**
     * Extend setData to call processData and generatePoints immediately.
     * @private
     */
    setData(data: Array<(PointOptions | PointShortOptions)>, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), updatePoints?: boolean): void;
    getDataColumnKeys(): Array<string>;
    /**
     * Extend processData to join in mapData. If the allAreas option is true,
     * all areas from the mapData are used, and those that don't correspond to a
     * data value are given null values. The results are stored in a modified
     * data table in order to avoid mutating `data`.
     * @private
     */
    processData(): (boolean | undefined);
    /**
     * Extend setOptions by picking up the joinBy option and applying it to a
     * series property.
     * @private
     */
    setOptions(itemOptions: MapSeriesOptions): MapSeriesOptions;
    /**
     * Add the path option for data points. Find the max value for color
     * calculation.
     * @private
     */
    translate(): void;
    update(options: SeriesTypeOptions): void;
}
interface MapSeries extends ColorMapComposition.SeriesComposition {
    getCenter: typeof CU['getCenter'];
    pointArrayMap: ColorMapComposition.SeriesComposition['pointArrayMap'];
    pointClass: typeof MapPoint;
    preserveAspectRatio: boolean;
    trackerGroups: ColorMapComposition.SeriesComposition['trackerGroups'];
    animate(init?: boolean): void;
    doFullTranslate(): boolean;
    drawMapDataLabels(): void;
    drawPoints(): void;
    hasData(): boolean;
    pointAttribs(point?: MapPoint, state?: StatesOptionsKey): SVGAttributes;
    render(): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        map: typeof MapSeries;
    }
}
export default MapSeries;

import type { MapLonLatObject } from '../../Maps/GeoJSON';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type TiledWebMapSeriesOptions from './TiledWebMapSeriesOptions';
declare const MapSeries: typeof import("../Map/MapSeries").default;
import MapView from '../../Maps/MapView.js';
interface TileItem extends SVGElement {
    posX?: number;
    posY?: number;
    originalURL?: string;
    isActive?: boolean;
}
interface TilesItem {
    tiles: Record<string, TileItem>;
    isActive: boolean;
    howManyTiles: number;
    actualTilesCount: number;
    loaded: boolean;
}
/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tiledwebmap
 *
 * @augments Highcharts.Series
 */
declare class TiledWebMapSeries extends MapSeries {
    static defaultOptions: TiledWebMapSeriesOptions;
    static compose(MapViewClass: typeof MapView): void;
    options: TiledWebMapSeriesOptions;
    tiles: Record<string, TilesItem> | undefined;
    minZoom: number | undefined;
    maxZoom: number | undefined;
    redrawTiles: boolean;
    isAnimating: boolean;
    /**
     * Convert map coordinates in longitude/latitude to tile
     * @private
     * @param  {Highcharts.MapLonLatObject} lonLat
     *         The map coordinates
     * @return {Highcharts.PositionObject}
     *         Array of x and y positions of the tile
     */
    lonLatToTile(lonLat: MapLonLatObject, zoom: number): PositionObject;
    /**
     * Convert tile to map coordinates in longitude/latitude
     * @private
     * @return {Highcharts.MapLonLatObject}
     *         The map coordinates
     */
    tileToLonLat(xTile: number, yTile: number, zTile: number): MapLonLatObject;
    drawPoints(): void;
    update(options: TiledWebMapSeriesOptions): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        tiledwebmap: typeof TiledWebMapSeries;
    }
}
export default TiledWebMapSeries;

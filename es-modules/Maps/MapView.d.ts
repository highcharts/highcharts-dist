import type AnimationOptions from '../Core/Animation/AnimationOptions';
import type { DeepPartial } from '../Shared/Types';
import type { MapLonLatObject, MapDataType } from './GeoJSON';
import type MapChart from '../Core/Chart/MapChart';
import type PositionObject from '../Core/Renderer/PositionObject';
import type { LonLatArray, MapBounds, MapViewOptions, MapViewPaddingType, ProjectedXY } from './MapViewOptions';
/**
 * The map view handles zooming and centering on the map, and various
 * client-side projection capabilities.
 *
 * On a chart instance of `MapChart`, the map view is available as `chart.mapView`.
 *
 * @class
 * @name Highcharts.MapView
 *
 * @param {Highcharts.MapChart} chart
 *        The MapChart instance
 * @param {Highcharts.MapViewOptions} options
 *        MapView options
 */
declare class MapView {
    constructor(chart: MapChart, options?: DeepPartial<MapViewOptions>);
    /**
     * The current center of the view in terms of `[longitude, latitude]`.
     * @readonly
     * @type {Highcharts.LonLatArray}
     */
    center: LonLatArray;
    /**
     * The current zoom level of the view.
     * @readonly
     */
    zoom: number;
    /**
     * Fit the view to the given bounds.
     *
     * @function Highcharts.MapView#fitToBounds
     * @param {Highcharts.MapBounds} bounds
     *        Bounds in terms of projected units given as  `{ x1, y1, x2, y2 }`.
     *        If not set, fit to the bounds of the current data set
     * @param {Highcharts.MapViewPaddingType} [padding=0]
     *        Padding inside the bounds. A number signifies pixels, while a
     *        percentage string (like `5%`) can be used as a fraction of the
     *        plot area size.
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart immediately
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        What animation to use for redraw
     */
    fitToBounds(bounds?: MapBounds, padding?: MapViewPaddingType, redraw?: boolean, animation?: boolean | Partial<AnimationOptions>): void;
    /**
     * Convert map coordinates in longitude/latitude to pixels
     *
     * @function Highcharts.MapView#lonLatToPixels
     * @since 10.0.0
     * @param  {Highcharts.MapLonLatObject} lonLat
     *         The map coordinates
     * @return {Highcharts.PositionObject|undefined}
     *         The pixel position
     */
    lonLatToPixels(lonLat: MapLonLatObject): (PositionObject | undefined);
    /**
     * Get projected units from longitude/latitude. Insets are accounted for.
     * Returns an object with x and y values corresponding to positions on the
     * projected plane.
     *
     * @requires modules/map
     *
     * @function Highcharts.MapView#lonLatToProjectedUnits
     *
     * @since 10.0.0
     * @sample maps/series/latlon-to-point/ Find a point from lon/lat
     *
     * @param {Highcharts.MapLonLatObject} lonLat Coordinates.
     *
     * @return {Highcharts.ProjectedXY} X and Y coordinates in terms of
     *      projected values
     */
    lonLatToProjectedUnits(lonLat: MapLonLatObject): (ProjectedXY | undefined);
    /**
     * Convert pixel position to longitude and latitude.
     *
     * @function Highcharts.MapView#pixelsToLonLat
     * @since 10.0.0
     * @param  {Highcharts.PositionObject} pos
     *         The position in pixels
     * @return {Highcharts.MapLonLatObject|undefined}
     *         The map coordinates
     */
    pixelsToLonLat(pos: PositionObject): (MapLonLatObject | undefined);
    /**
     * Convert pixel position to projected units
     *
     * @function Highcharts.MapView#pixelsToProjectedUnits
     * @param {Highcharts.PositionObject} pos
     *        The position in pixels
     * @return {Highcharts.PositionObject} The position in projected units
     */
    pixelsToProjectedUnits(pos: PositionObject): ProjectedXY;
    /**
     * Calculate longitude/latitude values for a point or position. Returns an
     * object with the numeric properties `lon` and `lat`.
     *
     * @requires modules/map
     *
     * @function Highcharts.MapView#projectedUnitsToLonLat
     *
     * @since 10.0.0
     *
     * @sample maps/demo/latlon-advanced/ Advanced lat/lon demo
     *
     * @param {Highcharts.Point|Highcharts.ProjectedXY} point
     *        A `Point` instance or anything containing `x` and `y` properties
     *        with numeric values.
     *
     * @return {Highcharts.MapLonLatObject|undefined} An object with `lat` and
     *         `lon` properties.
     */
    projectedUnitsToLonLat(point: ProjectedXY): (MapLonLatObject | undefined);
    /**
     * Convert projected units to pixel position
     *
     * @function Highcharts.MapView#projectedUnitsToPixels
     * @param {Highcharts.PositionObject} pos
     *        The position in projected units
     * @return {Highcharts.PositionObject} The position in pixels
     */
    projectedUnitsToPixels(pos: ProjectedXY): PositionObject;
    /**
     * Calculate and set the recommended map view based on provided map data
     * from series.
     *
     * @requires modules/map
     *
     * @function Highcharts.MapView#recommendMapView
     *
     * @since 11.4.0
     *
     * @param {Highcharts.Chart} chart
     *        Chart object
     *
     * @param {Array<MapDataType | undefined>} mapDataArray
     *        Array of map data from all series.
     *
     * @param {boolean} [update=false]
     *        Whether to update the chart with recommended map view.
     *
     * @return {Highcharts.MapViewOptions|undefined} Best suitable map view.
     */
    recommendMapView(chart: MapChart, mapDataArray: Array<MapDataType | undefined>, update?: boolean): void;
    /**
     * Set the view to given center and zoom values.
     * @function Highcharts.MapView#setView
     * @param {Highcharts.LonLatArray|undefined} center
     *        The center point
     * @param {number} zoom
     *        The zoom level
     * @param {boolean} [redraw=true]
     *        Whether to redraw immediately
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Animation options for the redraw
     *
     * @sample maps/mapview/setview
     *        Set the view programmatically
     */
    setView(center?: LonLatArray, zoom?: number, redraw?: boolean, animation?: boolean | Partial<AnimationOptions>): void;
    /**
     * Update the view with given options
     *
     * @function Highcharts.MapView#update
     *
     * @param {Partial<Highcharts.MapViewOptions>} options
     *        The new map view options to apply
     * @param {boolean} [redraw=true]
     *        Whether to redraw immediately
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        The animation to apply to a the redraw
     */
    update(options: DeepPartial<MapViewOptions>, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Zoom the map view by a given number
     *
     * @function Highcharts.MapView#zoomBy
     *
     * @param {number|undefined} [howMuch]
     *        The amount of zoom to apply. 1 zooms in on half the current view,
     *        -1 zooms out. Pass `undefined` to zoom to the full bounds of the
     *        map.
     * @param {Highcharts.LonLatArray} [coords]
     *        Optional map coordinates to keep fixed
     * @param {Array<number>} [chartCoords]
     *        Optional chart coordinates to keep fixed, in pixels
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        The animation to apply to a the redraw
     */
    zoomBy(howMuch?: number, coords?: LonLatArray, chartCoords?: [number, number], animation?: boolean | Partial<AnimationOptions>): void;
}
export default MapView;

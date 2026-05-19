import type { GeoJSON, MapLonLatObject, TopoJSON } from './GeoJSON';
import type MapPointOptions from '../Series/Map/MapPointOptions';
import type MapPointPointOptions from '../Series/MapPoint/MapPointPointOptions';
import type { ProjectedXY } from './MapViewOptions';
import type Series from '../Core/Series/Series';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Deprecated. Use `MapView.lonLatToProjectedUnits` instead.
         *
         * @deprecated
         *
         * @requires modules/map
         *
         * @function Highcharts.Chart#fromLatLonToPoint
         *
         * @param {Highcharts.MapLonLatObject} latLon
         * Coordinates.
         *
         * @return {Highcharts.ProjectedXY}
         * X and Y coordinates in terms of projected values
         */
        fromLatLonToPoint(latLon: MapLonLatObject): (ProjectedXY | undefined);
        /**
         * Deprecated. Use `MapView.projectedUnitsToLonLat` instead.
         *
         * @deprecated
         *
         * @requires modules/map
         *
         * @function Highcharts.Chart#fromPointToLatLon
         *
         * @param {Highcharts.Point|Highcharts.ProjectedXY} point
         * A `Point` instance or anything containing `x` and `y` properties
         * with numeric values.
         *
         * @return {Highcharts.MapLonLatObject|undefined}
         * An object with `lat` and `lon` properties.
         */
        fromPointToLatLon(point: ProjectedXY): (MapLonLatObject | undefined);
        /**
         * Highcharts Maps only. Get point from latitude and longitude using
         * specified transform definition.
         *
         * @requires modules/map
         *
         * @sample maps/series/latlon-transform/
         * Use specific transformation for lat/lon
         *
         * @function Highcharts.Chart#transformFromLatLon
         *
         * @param {Highcharts.MapLonLatObject} latLon
         * A latitude/longitude object.
         *
         * @param {*} transform
         * The transform definition to use as explained in the
         * {@link https://www.highcharts.com/docs/maps/latlon|documentation}.
         *
         * @return {ProjectedXY}
         * An object with `x` and `y` properties.
         */
        transformFromLatLon(latLon: MapLonLatObject, transform: any): (ProjectedXY | undefined);
        /**
         * Highcharts Maps only. Get latLon from point using specified transform
         * definition. The method returns an object with the numeric properties
         * `lat` and `lon`.
         *
         * @requires modules/map
         *
         * @sample maps/series/latlon-transform/
         *         Use specific transformation for lat/lon
         *
         * @function Highcharts.Chart#transformToLatLon
         *
         * @param {Highcharts.Point|Highcharts.ProjectedXY} point
         *        A `Point` instance, or any object containing the properties `x`
         *        and `y` with numeric values.
         *
         * @param {*} transform
         *        The transform definition to use as explained in the
         *        {@link https://www.highcharts.com/docs/maps/latlon|documentation}.
         *
         * @return {Highcharts.MapLonLatObject|undefined}
         * An object with `lat` and `lon` properties.
         */
        transformToLatLon(point: ProjectedXY, transform: any): (MapLonLatObject | undefined);
    }
}
declare module '../Core/Chart/ChartOptions' {
    interface ChartOptions {
        /**
         * Allows to manually load the proj4 library from Highcharts options
         * instead of the `window`.
         * In case of loading the library from a `script` tag,
         * this option is not needed, it will be loaded from there by default.
         *
         * @requires  modules/map
         * @type      {Function}
         * @product   highmaps
         * @apioption chart.proj4
         */
        proj4?: any;
    }
}
declare namespace GeoJSONComposition {
    /**
     * Highcharts Maps only. Restructure a GeoJSON or TopoJSON object in
     * preparation to be read directly by the
     * {@link https://api.highcharts.com/highmaps/plotOptions.series.mapData|series.mapData}
     * option. The object will be broken down to fit a specific Highcharts type,
     * either `map`, `mapline` or `mappoint`. Meta data in GeoJSON's properties
     * object will be copied directly over to {@link Point.properties} in
     * Highcharts Maps.
     *
     * @requires modules/map
     *
     * @sample maps/demo/geojson/ Simple areas
     * @sample maps/demo/mapline-mappoint/ Multiple types
     * @sample maps/series/mapdata-multiple/ Multiple map sources
     *
     * @function Highcharts.geojson
     *
     * @param {Highcharts.GeoJSON|Highcharts.TopoJSON} json
     *        The GeoJSON or TopoJSON structure to parse, represented as a
     *        JavaScript object.
     *
     * @param {string} [hType=map]
     *        The Highcharts Maps series type to prepare for. Setting "map" will
     *        return GeoJSON polygons and multipolygons. Setting "mapline" will
     *        return GeoJSON linestrings and multilinestrings. Setting
     *        "mappoint" will return GeoJSON points and multipoints.
     *
     *
     * @return {Array<*>} An object ready for the `mapData` option.
     */
    function geojson(json: GeoJSON | TopoJSON, hType?: string, series?: Series): (MapPointOptions | MapPointPointOptions)[];
}
export default GeoJSONComposition;

import type MapLinePoint from './MapLinePoint.js';
import type MapLineSeriesOptions from './MapLineSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import MapSeries from '../Map/MapSeries.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.mapline
 *
 * @augments Highcharts.Series
 */
declare class MapLineSeries extends MapSeries {
    static defaultOptions: MapLineSeriesOptions;
    data: Array<MapLinePoint>;
    options: MapLineSeriesOptions;
    points: Array<MapLinePoint>;
    /**
     * Get presentational attributes
     * @private
     * @function Highcharts.seriesTypes.mapline#pointAttribs
     */
    pointAttribs(point: MapLinePoint, state: StatesOptionsKey): SVGAttributes;
}
interface MapLineSeries {
    colorProp: 'stroke';
    pointClass: typeof MapLinePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        mapline: typeof MapLineSeries;
    }
}
export default MapLineSeries;

import type MapBubbleSeriesOptions from './MapBubbleSeriesOptions';
import type Point from '../../Core/Series/Point';
import type PointerEvent from '../../Core/PointerEvent';
import BubbleSeries from '../Bubble/BubbleSeries.js';
import MapBubblePoint from './MapBubblePoint.js';
declare const mapProto: import("../Map/MapSeries").default, mapPointProto: import("../MapPoint/MapPointSeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.mapbubble
 *
 * @augments Highcharts.Series
 *
 * @requires BubbleSeries
 * @requires MapPointSeries
 */
declare class MapBubbleSeries extends BubbleSeries {
    /**
     * A map bubble series is a bubble series laid out on top of a map
     * series, where each bubble is tied to a specific map area.
     *
     * @sample maps/demo/map-bubble/
     *         Map bubble chart
     *
     * @extends      plotOptions.bubble
     * @product      highmaps
     * @optionparent plotOptions.mapbubble
     */
    static defaultOptions: MapBubbleSeriesOptions;
    data: Array<MapBubblePoint>;
    options: MapBubbleSeriesOptions;
    points: Array<MapBubblePoint>;
    clearBounds: () => void;
    searchPoint(e: PointerEvent, compareX?: boolean): (Point | undefined);
    translate(): void;
}
interface MapBubbleSeries {
    type: string;
    getProjectedBounds: typeof mapProto.getProjectedBounds;
    pointArrayMap: Array<string>;
    pointClass: typeof MapBubblePoint;
    setData: typeof mapProto.setData;
    processData: typeof mapProto.processData;
    projectPoint: typeof mapPointProto.projectPoint;
    setOptions: typeof mapProto.setOptions;
    xyFromShape: boolean;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        mapbubble: typeof MapBubbleSeries;
    }
}
export default MapBubbleSeries;

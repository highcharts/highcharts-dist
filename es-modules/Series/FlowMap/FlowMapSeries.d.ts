import type FlowMapSeriesOptions from './FlowMapSeriesOptions';
import type { MarkerEndOptions } from './FlowMapPointOptions';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import FlowMapPoint from './FlowMapPoint.js';
declare const ColumnSeries: typeof import("../Column/ColumnSeries").default, MapLineSeries: typeof import("../MapLine/MapLineSeries").default;
/**
 * The flowmap series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.flowmap
 *
 * @augments Highcharts.Series
 */
declare class FlowMapSeries extends MapLineSeries {
    /**
     * A flowmap series is a series laid out on top of a map series allowing to
     * display route paths (e.g. flight or ship routes) or flows on a map. It
     * creates a link between two points on a map chart.
     *
     * @since 11.0.0
     * @extends      plotOptions.mapline
     * @excluding    affectsMapView, allAreas, allowPointSelect, boostBlending,
     * boostThreshold, borderColor, borderWidth, dashStyle, dataLabels,
     * dragDrop, joinBy, mapData, negativeColor, onPoint, shadow, showCheckbox
     * @product      highmaps
     * @requires     modules/flowmap
     * @optionparent plotOptions.flowmap
     */
    static defaultOptions: FlowMapSeriesOptions;
    /**
     * Get vector length.
     * @private
     */
    static getLength(x: number, y: number): number;
    /**
     * Return a normalized vector.
     * @private
     */
    static normalize(x: number, y: number): Array<number>;
    /**
     * Return an SVGPath for markerEnd.
     * @private
     */
    static markerEndPath(lCorner: [number, number], rCorner: [number, number], topCorner: [number, number], options: MarkerEndOptions): SVGPath;
    data: Array<FlowMapPoint>;
    options: FlowMapSeriesOptions;
    points: Array<FlowMapPoint>;
    smallestWeight?: number;
    greatestWeight?: number;
    centerOfPoints: PositionObject;
    /**
     *
     *  Functions
     *
     */
    /**
     * Animate the flowmap point one by one from 'fromPoint'.
     *
     * @private
     * @function Highcharts.seriesTypes.flowmap#animate
     *
     * @param {boolean} init
     *        Whether to initialize the animation or run it
     */
    animate(init: boolean): void;
    /**
     * Get the actual width of a link either as a mapped weight between
     * `minWidth` and `maxWidth` or a specified width.
     * @private
     */
    getLinkWidth(point: FlowMapPoint): number;
    /**
     * Automatically calculate the optimal curve based on a reference point.
     * @private
     */
    autoCurve(fromX: number, fromY: number, toX: number, toY: number, centerX: number, centerY: number): number;
    /**
     * Get point attributes.
     * @private
     */
    pointAttribs(point: FlowMapPoint, state: StatesOptionsKey): SVGAttributes;
    /**
     * Draw shapeArgs based on from/to options. Run translation operations. We
     * need two loops: first loop to calculate data, like smallest/greatest
     * weights and centerOfPoints, which needs the calculated positions, second
     * loop for calculating shapes of points based on previous calculations.
     * @private
     */
    translate(): void;
    getPointShapeArgs(point: FlowMapPoint): SVGAttributes;
}
interface FlowMapSeries {
    pointClass: typeof FlowMapPoint;
    pointArrayMap: Array<string>;
    drawPoints: typeof ColumnSeries.prototype['drawPoints'];
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        flowmap: typeof FlowMapSeries;
    }
}
export default FlowMapSeries;

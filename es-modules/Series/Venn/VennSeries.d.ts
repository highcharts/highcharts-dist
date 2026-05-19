import type CircleObject from '../../Core/Geometry/CircleObject';
import type IntersectionObject from '../../Core/Geometry/IntersectionObject';
import type { VennLabelValuesObject, VennRelationObject } from './VennUtils';
import type PolygonBoxObject from '../../Core/Renderer/PolygonBoxObject';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type VennSeriesOptions from './VennSeriesOptions';
declare const ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
import VennPoint from './VennPoint.js';
import VennUtils from './VennUtils.js';
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.venn
 *
 * @augments Highcharts.Series
 */
declare class VennSeries extends ScatterSeries {
    static splitter: string;
    static defaultOptions: VennSeriesOptions;
    /**
     * Finds the optimal label position by looking for a position that has a low
     * distance from the internal circles, and as large possible distance to the
     * external circles.
     * @private
     * @todo Optimize the initial position.
     * @todo Add unit tests.
     * @param {Array<Highcharts.CircleObject>} internal
     * Internal circles.
     * @param {Array<Highcharts.CircleObject>} external
     * External circles.
     * @return {Highcharts.PositionObject}
     * Returns the found position.
     */
    static getLabelPosition(internal: Array<CircleObject>, external: Array<CircleObject>): PositionObject;
    /**
     * Calculates data label values for a given relations object.
     *
     * @private
     * @todo add unit tests
     * @param {Highcharts.VennRelationObject} relation A relations object.
     * @param {Array<Highcharts.VennRelationObject>} setRelations The list of
     * relations that is a set.
     * @return {Highcharts.VennLabelValuesObject}
     * Returns an object containing position and width of the label.
     */
    static getLabelValues(relation: VennRelationObject, setRelations: Array<VennRelationObject>): VennLabelValuesObject;
    /**
     * Calculates the positions, and the label values of all the sets in the
     * venn diagram.
     *
     * @private
     * @todo Add support for constrained MDS.
     * @param {Array<Highcharts.VennRelationObject>} relations
     * List of the overlap between two or more sets, or the size of a single
     * set.
     * @return {Highcharts.Dictionary<*>}
     * List of circles and their calculated positions.
     */
    static layout(relations: Array<VennRelationObject>): ({
        mapOfIdToShape: Record<string, (CircleObject | IntersectionObject)>;
        mapOfIdToLabelValues: Record<string, (VennLabelValuesObject)>;
    });
    /**
     * Calculates the proper scale to fit the cloud inside the plotting area.
     * @private
     * @todo add unit test
     * @param {number} targetWidth
     * Width of target area.
     * @param {number} targetHeight
     * Height of target area.
     * @param {Highcharts.PolygonBoxObject} field
     * The playing field.
     * @return {Highcharts.Dictionary<number>}
     * Returns the value to scale the playing field up to the size of the target
     * area, and center of x and y.
     */
    static getScale(targetWidth: number, targetHeight: number, field: PolygonBoxObject): Record<string, number>;
    /**
     * If a circle is outside a give field, then the boundaries of the field is
     * adjusted accordingly. Modifies the field object which is passed as the
     * first parameter.
     * @private
     * @todo NOTE: Copied from wordcloud, can probably be unified.
     * @param {Highcharts.PolygonBoxObject} field
     * The bounding box of a playing field.
     * @param {Highcharts.CircleObject} circle
     * The bounding box for a placed point.
     * @return {Highcharts.PolygonBoxObject}
     * Returns a modified field object.
     */
    static updateFieldBoundaries(field: PolygonBoxObject, circle: CircleObject): PolygonBoxObject;
    data: Array<VennPoint>;
    mapOfIdToRelation: Record<string, VennRelationObject>;
    options: VennSeriesOptions;
    points: Array<VennPoint>;
    animate(init?: boolean): void;
    /**
     * Draw the graphics for each point.
     * @private
     */
    drawPoints(): void;
    init(): void;
    /**
     * Calculates the style attributes for a point. The attributes can vary
     * depending on the state of the point.
     * @private
     * @param {Highcharts.Point} point
     * The point which will get the resulting attributes.
     * @param {string} [state]
     * The state of the point.
     * @return {Highcharts.SVGAttributes}
     * Returns the calculated attributes.
     */
    pointAttribs(point: VennPoint, state?: StatesOptionsKey): SVGAttributes;
    translate(): void;
}
interface VennSeries {
    directTouch: boolean;
    isCartesian: boolean;
    pointArrayMap: Array<string>;
    pointClass: typeof VennPoint;
    utils: typeof VennUtils;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        venn: typeof VennSeries;
    }
}
export default VennSeries;

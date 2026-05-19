import type CircleObject from '../../Core/Geometry/CircleObject';
import type DataTableCore from '../../Data/DataTableCore';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type VennPointOptions from './VennPointOptions';
import CU from '../../Core/Geometry/CircleUtilities.js';
import GU from '../../Core/Geometry/GeometryUtilities.js';
export interface NelderMeadCentroidObject {
    i: number;
    sum: number;
}
export interface NelderMeadPointArray extends Array<number> {
    fx: number;
}
export interface NelderMeadTestFunction {
    (point: NelderMeadPointArray): number;
}
export interface VennLabelPositionObject {
    point: PositionObject;
    margin: number;
}
export interface VennLabelValuesObject {
    position: PositionObject;
    width: number;
}
export interface VennLabelOverlapObject {
    coordinates: PositionObject;
    loss: number;
}
export interface VennPropsObject {
    overlapping?: Record<string, number>;
    totalOverlap?: number;
}
export interface VennRelationObject extends VennPropsObject {
    circle?: CircleObject;
    sets: Array<string>;
    value: number;
}
/**
 * Takes an array of relations and adds the properties `totalOverlap` and
 * `overlapping` to each set. The property `totalOverlap` is the sum of
 * value for each relation where this set is included. The property
 * `overlapping` is a map of how much this set is overlapping another set.
 * NOTE: This algorithm ignores relations consisting of more than 2 sets.
 * @private
 * @param {Array<Highcharts.VennRelationObject>} relations
 * The list of relations that should be sorted.
 * @return {Array<Highcharts.VennRelationObject>}
 * Returns the modified input relations with added properties `totalOverlap`
 * and `overlapping`.
 */
declare function addOverlapToSets(relations: Array<VennRelationObject>): Array<VennRelationObject>;
/**
 * @private
 */
declare function getCentroid(simplex: Array<NelderMeadPointArray>): Array<number>;
/**
 * Uses the bisection method to make a best guess of the ideal distance
 * between two circles too get the desired overlap.
 * Currently there is no known formula to calculate the distance from the
 * area of overlap, which makes the bisection method preferred.
 * @private
 * @param {number} r1
 * Radius of the first circle.
 * @param {number} r2
 * Radius of the second circle.
 * @param {number} overlap
 * The wanted overlap between the two circles.
 * @return {number}
 * Returns the distance needed to get the wanted overlap between the two
 * circles.
 */
declare function getDistanceBetweenCirclesByOverlap(r1: number, r2: number, overlap: number): number;
/**
 * Finds the available width for a label, by taking the label position and
 * finding the largest distance, which is inside all internal circles, and
 * outside all external circles.
 *
 * @private
 * @param {Highcharts.PositionObject} pos
 * The x and y coordinate of the label.
 * @param {Array<Highcharts.CircleObject>} internal
 * Internal circles.
 * @param {Array<Highcharts.CircleObject>} external
 * External circles.
 * @return {number}
 * Returns available width for the label.
 */
declare function getLabelWidth(pos: PositionObject, internal: Array<CircleObject>, external: Array<CircleObject>): number;
/**
 * Calculates a margin for a point based on the internal and external
 * circles. The margin describes if the point is well placed within the
 * internal circles, and away from the external.
 * @private
 * @todo add unit tests.
 * @param {Highcharts.PositionObject} point
 * The point to evaluate.
 * @param {Array<Highcharts.CircleObject>} internal
 * The internal circles.
 * @param {Array<Highcharts.CircleObject>} external
 * The external circles.
 * @return {number}
 * Returns the margin.
 */
declare function getMarginFromCircles(point: PositionObject, internal: Array<CircleObject>, external: Array<CircleObject>): number;
/**
 *
 */
declare function isSet(x: (VennPointOptions | VennRelationObject)): boolean;
/**
 * Uses a greedy approach to position all the sets. Works well with a small
 * number of sets, and are in these cases a good choice aesthetically.
 * @private
 * @param {Array<object>} relations List of the overlap between two or more
 * sets, or the size of a single set.
 * @return {Array<object>} List of circles and their calculated positions.
 */
declare function layoutGreedyVenn(relations: Array<VennRelationObject>): Record<string, CircleObject>;
/**
 * Calculates the difference between the desired overlap and the actual
 * overlap between two circles.
 * @private
 * @param {Dictionary<Highcharts.CircleObject>} mapOfIdToCircle
 * Map from id to circle.
 * @param {Array<Highcharts.VennRelationObject>} relations
 * List of relations to calculate the loss of.
 * @return {number}
 * Returns the loss between positions of the circles for the given
 * relations.
 */
declare function loss(mapOfIdToCircle: Record<string, CircleObject>, relations: Array<VennRelationObject>): number;
/**
 * Finds an optimal position for a given point.
 * @todo add unit tests.
 * @todo add constraints to optimize the algorithm.
 * @private
 * @param {Highcharts.NelderMeadTestFunction} fn
 *        The function to test a point.
 * @param {Highcharts.NelderMeadPointArray} initial
 *        The initial point to optimize.
 * @return {Highcharts.NelderMeadPointArray}
 *         Returns the optimized position of a point.
 */
declare function nelderMead(fn: NelderMeadTestFunction, initial: NelderMeadPointArray): NelderMeadPointArray;
/**
 * Prepares the venn data so that it is usable for the layout function.
 * Filter out sets, or intersections that includes sets, that are missing in
 * the data or has (value < 1). Adds missing relations between sets in the
 * data as value = 0.
 * @private
 * @param {DataTableCore} dataTable The raw input data.
 * @return {Array<object>} Returns an array of valid venn data.
 */
declare function processVennData(dataTable: DataTableCore | undefined, splitter: string): Array<VennRelationObject>;
/**
 * Takes two sets and finds the one with the largest total overlap.
 * @private
 * @param {Object} a
 * The first set to compare.
 * @param {Object} b
 * The second set to compare.
 * @return {number}
 * Returns 0 if a and b are equal, <0 if a is greater, >0 if b is greater.
 */
declare function sortByTotalOverlap(a: VennRelationObject, b: VennRelationObject): number;
declare const VennUtils: {
    geometry: typeof GU;
    geometryCircles: typeof CU;
    addOverlapToSets: typeof addOverlapToSets;
    getCentroid: typeof getCentroid;
    getDistanceBetweenCirclesByOverlap: typeof getDistanceBetweenCirclesByOverlap;
    getLabelWidth: typeof getLabelWidth;
    getMarginFromCircles: typeof getMarginFromCircles;
    isSet: typeof isSet;
    layoutGreedyVenn: typeof layoutGreedyVenn;
    loss: typeof loss;
    nelderMead: typeof nelderMead;
    processVennData: typeof processVennData;
    sortByTotalOverlap: typeof sortByTotalOverlap;
};
export default VennUtils;

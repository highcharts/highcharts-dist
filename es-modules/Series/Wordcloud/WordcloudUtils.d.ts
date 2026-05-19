import type PolygonBoxObject from '../../Core/Renderer/PolygonBoxObject';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type WordcloudPoint from './WordcloudPoint';
import type WordcloudSeries from './WordcloudSeries';
/**
 * Detects if there is a collision between two rectangles.
 *
 * @private
 * @function isRectanglesIntersecting
 *
 * @param {Highcharts.PolygonBoxObject} r1
 * First rectangle.
 *
 * @param {Highcharts.PolygonBoxObject} r2
 * Second rectangle.
 *
 * @return {boolean}
 * Returns true if the rectangles overlap.
 */
declare function isRectanglesIntersecting(r1: PolygonBoxObject, r2: PolygonBoxObject): boolean;
/**
 * Checks whether two convex polygons are colliding by using the Separating
 * Axis Theorem.
 *
 * @private
 * @function isPolygonsColliding
 * @param {Highcharts.PolygonObject} polygon1
 *        First polygon.
 *
 * @param {Highcharts.PolygonObject} polygon2
 *        Second polygon.
 *
 * @return {boolean}
 *         Returns true if they are colliding, otherwise false.
 */
declare function isPolygonsColliding(polygon1: WordcloudUtils.PolygonObject, polygon2: WordcloudUtils.PolygonObject): boolean;
/**
 * Gives a set of coordinates for an Archimedean Spiral.
 *
 * @private
 * @function archimedeanSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
declare function archimedeanSpiral(attempt: number, params?: WordcloudSeries.WordcloudSpiralParamsObject): (boolean | PositionObject);
/**
 * Gives a set of coordinates for an rectangular spiral.
 *
 * @private
 * @function squareSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
declare function squareSpiral(attempt: number, params?: WordcloudSeries.WordcloudSpiralParamsObject): (boolean | PositionObject);
/**
 * Gives a set of coordinates for an rectangular spiral.
 *
 * @private
 * @function rectangularSpiral
 *
 * @param {number} attempt
 * How far along the spiral we have traversed.
 *
 * @param {Highcharts.WordcloudSpiralParamsObject} [params]
 * Additional parameters.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Resulting coordinates, x and y. False if the word should be dropped from
 * the visualization.
 */
declare function rectangularSpiral(attempt: number, params?: WordcloudSeries.WordcloudSpiralParamsObject): (boolean | PositionObject);
/**
 * @private
 * @function getRandomPosition
 *
 * @param {number} size
 * Random factor.
 *
 * @return {number}
 * Random position.
 */
declare function getRandomPosition(size: number): number;
/**
 * Calculates the proper scale to fit the cloud inside the plotting area.
 *
 * @private
 * @function getScale
 *
 * @param {number} targetWidth
 * Width of target area.
 *
 * @param {number} targetHeight
 * Height of target area.
 *
 * @param {Object} field
 * The playing field.
 *
 * @return {number}
 * Returns the value to scale the playing field up to the size of the target
 * area.
 */
declare function getScale(targetWidth: number, targetHeight: number, field: PolygonBoxObject): number;
/**
 * Calculates what is called the playing field. The field is the area which
 * all the words are allowed to be positioned within. The area is
 * proportioned to match the target aspect ratio.
 *
 * @private
 * @function getPlayingField
 *
 * @param {number} targetWidth
 * Width of the target area.
 *
 * @param {number} targetHeight
 * Height of the target area.
 *
 * @param {Array<Highcharts.Point>} data
 * Array of points.
 *
 * @param {Object} data.dimensions
 * The height and width of the word.
 *
 * @return {Object}
 * The width and height of the playing field.
 */
declare function getPlayingField(targetWidth: number, targetHeight: number, data: Array<WordcloudPoint>): WordcloudSeries.WordcloudFieldObject;
/**
 * Calculates a number of degrees to rotate, based upon a number of
 * orientations within a range from-to.
 *
 * @private
 * @function getRotation
 *
 * @param {number} [orientations]
 * Number of orientations.
 *
 * @param {number} [index]
 * Index of point, used to decide orientation.
 *
 * @param {number} [from]
 * The smallest degree of rotation.
 *
 * @param {number} [to]
 * The largest degree of rotation.
 *
 * @return {boolean|number}
 * Returns the resulting rotation for the word. Returns false if invalid
 * input parameters.
 */
declare function getRotation(orientations?: number, index?: number, from?: number, to?: number): (boolean | number);
/**
 * Calculates the spiral positions and store them in scope for quick access.
 *
 * @private
 * @function getSpiral
 *
 * @param {Function} fn
 * The spiral function.
 *
 * @param {Object} params
 * Additional parameters for the spiral.
 *
 * @return {Function}
 * Function with access to spiral positions.
 */
declare function getSpiral(fn: WordcloudSeries.WordcloudSpiralFunction, params: WordcloudSeries.WordcloudSpiralParamsObject): WordcloudSeries.WordcloudSpiralFunction;
/**
 * Check if a point intersects with previously placed words, or if it goes
 * outside the field boundaries. If a collision, then try to adjusts the
 * position.
 *
 * @private
 * @function intersectionTesting
 *
 * @param {Highcharts.Point} point
 * Point to test for intersections.
 *
 * @param {Highcharts.WordcloudTestOptionsObject} options
 * Options object.
 *
 * @return {boolean|Highcharts.PositionObject}
 * Returns an object with how much to correct the positions. Returns false
 * if the word should not be placed at all.
 */
declare function intersectionTesting(point: WordcloudPoint, options: WordcloudSeries.WordcloudTestOptionsObject): (boolean | PositionObject);
/**
 * Extends the playing field to have enough space to fit a given word.
 *
 * @private
 * @function extendPlayingField
 *
 * @param {Highcharts.WordcloudFieldObject} field
 * The width, height and ratios of a playing field.
 *
 * @param {Highcharts.PolygonBoxObject} rectangle
 * The bounding box of the word to add space for.
 *
 * @return {Highcharts.WordcloudFieldObject}
 * Returns the extended playing field with updated height and width.
 */
declare function extendPlayingField(field: WordcloudSeries.WordcloudFieldObject, rectangle: PolygonBoxObject): WordcloudSeries.WordcloudFieldObject;
/**
 * If a rectangle is outside a give field, then the boundaries of the field
 * is adjusted accordingly. Modifies the field object which is passed as the
 * first parameter.
 *
 * @private
 * @function updateFieldBoundaries
 *
 * @param {Highcharts.WordcloudFieldObject} field
 * The bounding box of a playing field.
 *
 * @param {Highcharts.PolygonBoxObject} rectangle
 * The bounding box for a placed point.
 *
 * @return {Highcharts.WordcloudFieldObject}
 * Returns a modified field object.
 */
declare function updateFieldBoundaries(field: WordcloudSeries.WordcloudFieldObject, rectangle: PolygonBoxObject): WordcloudSeries.WordcloudFieldObject;
/**
 * @private
 */
declare function getBoundingBoxFromPolygon(points: WordcloudUtils.PolygonObject): PolygonBoxObject;
/**
 * @private
 */
declare function getPolygon(x: number, y: number, width: number, height: number, rotation: number): WordcloudUtils.PolygonObject;
/**
 * Rotates a point clockwise around the origin.
 *
 * @private
 * @function rotate2DToOrigin
 * @param {Highcharts.PolygonPointObject} point
 *        The x and y coordinates for the point.
 * @param {number} angle
 *        The angle of rotation.
 * @return {Highcharts.PolygonPointObject}
 *         The x and y coordinate for the rotated point.
 */
declare function rotate2DToOrigin(point: WordcloudUtils.PolygonPointObject, angle: number): WordcloudUtils.PolygonPointObject;
/**
 * Rotate a point clockwise around another point.
 *
 * @private
 * @function rotate2DToPoint
 * @param {Highcharts.PolygonPointObject} point
 *        The x and y coordinates for the point.
 * @param {Highcharts.PolygonPointObject} origin
 *        The point to rotate around.
 * @param {number} angle
 *        The angle of rotation.
 * @return {Highcharts.PolygonPointObject}
 *         The x and y coordinate for the rotated point.
 */
declare function rotate2DToPoint(point: WordcloudUtils.PolygonPointObject, origin: WordcloudUtils.PolygonPointObject, angle: number): WordcloudUtils.PolygonPointObject;
declare namespace WordcloudUtils {
    interface PolygonPointObject extends Array<number> {
        0: number;
        1: number;
    }
    interface PolygonObject extends Array<PolygonPointObject> {
        axes?: Array<PolygonPointObject>;
    }
}
declare const WordcloudUtils: {
    archimedeanSpiral: typeof archimedeanSpiral;
    extendPlayingField: typeof extendPlayingField;
    getBoundingBoxFromPolygon: typeof getBoundingBoxFromPolygon;
    getPlayingField: typeof getPlayingField;
    getPolygon: typeof getPolygon;
    getRandomPosition: typeof getRandomPosition;
    getRotation: typeof getRotation;
    getScale: typeof getScale;
    getSpiral: typeof getSpiral;
    intersectionTesting: typeof intersectionTesting;
    isPolygonsColliding: typeof isPolygonsColliding;
    isRectanglesIntersecting: typeof isRectanglesIntersecting;
    rectangularSpiral: typeof rectangularSpiral;
    rotate2DToOrigin: typeof rotate2DToOrigin;
    rotate2DToPoint: typeof rotate2DToPoint;
    squareSpiral: typeof squareSpiral;
    updateFieldBoundaries: typeof updateFieldBoundaries;
};
export default WordcloudUtils;

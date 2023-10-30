import type CircleObject from './CircleObject';
import type GeometryObject from './GeometryObject';
import type IntersectionObject from './IntersectionObject';
import type PositionObject from '../Renderer/PositionObject';
declare namespace CircleUtilities {
    /**
     * @private
     *
     * @param {number} x
     * Number to round
     *
     * @param {number} decimals
     * Number of decimals to round to
     *
     * @return {number}
     * Rounded number
     */
    function round(x: number, decimals: number): number;
    /**
     * Calculates the area of a circle based on its radius.
     *
     * @private
     *
     * @param {number} r
     * The radius of the circle.
     *
     * @return {number}
     * Returns the area of the circle.
     */
    function getAreaOfCircle(r: number): number;
    /**
     * Calculates the area of a circular segment based on the radius of the
     * circle and the height of the segment.
     *
     * @see http://mathworld.wolfram.com/CircularSegment.html
     *
     * @private
     *
     * @param {number} r
     * The radius of the circle.
     *
     * @param {number} h
     * The height of the circular segment.
     *
     * @return {number}
     * Returns the area of the circular segment.
     */
    function getCircularSegmentArea(r: number, h: number): number;
    /**
     * Calculates the area of overlap between two circles based on their
     * radiuses and the distance between them.
     *
     * @see http://mathworld.wolfram.com/Circle-CircleIntersection.html
     *
     * @private
     *
     * @param {number} r1
     * Radius of the first circle.
     *
     * @param {number} r2
     * Radius of the second circle.
     *
     * @param {number} d
     * The distance between the two circles.
     *
     * @return {number}
     * Returns the area of overlap between the two circles.
     */
    function getOverlapBetweenCircles(r1: number, r2: number, d: number): number;
    /**
     * Calculates the intersection points of two circles.
     *
     * NOTE: does not handle floating errors well.
     *
     * @private
     *
     * @param {Highcharts.CircleObject} c1
     * The first circle.
     *
     * @param {Highcharts.CircleObject} c2
     * The second sircle.
     *
     * @return {Array<Highcharts.PositionObject>}
     * Returns the resulting intersection points.
     */
    function getCircleCircleIntersection(c1: CircleObject, c2: CircleObject): Array<PositionObject>;
    /**
     * Calculates all the intersection points for between a list of circles.
     *
     * @private
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The circles to calculate the points from.
     *
     * @return {Array<Highcharts.GeometryObject>}
     * Returns a list of intersection points.
     */
    function getCirclesIntersectionPoints(circles: Array<CircleObject>): Array<GeometryObject>;
    /**
     * Tests whether the first circle is completely overlapping the second
     * circle.
     *
     * @private
     *
     * @param {Highcharts.CircleObject} circle1
     * The first circle.
     *
     * @param {Highcharts.CircleObject} circle2
     * The The second circle.
     *
     * @return {boolean}
     * Returns true if circle1 is completely overlapping circle2, false if not.
     */
    function isCircle1CompletelyOverlappingCircle2(circle1: CircleObject, circle2: CircleObject): boolean;
    /**
     * Tests whether a point lies within a given circle.
     * @private
     * @param {Highcharts.PositionObject} point
     * The point to test for.
     *
     * @param {Highcharts.CircleObject} circle
     * The circle to test if the point is within.
     *
     * @return {boolean}
     * Returns true if the point is inside, false if outside.
     */
    function isPointInsideCircle(point: PositionObject, circle: CircleObject): boolean;
    /**
     * Tests whether a point lies within a set of circles.
     *
     * @private
     *
     * @param {Highcharts.PositionObject} point
     * The point to test.
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The list of circles to test against.
     *
     * @return {boolean}
     * Returns true if the point is inside all the circles, false if not.
     */
    function isPointInsideAllCircles(point: PositionObject, circles: Array<CircleObject>): boolean;
    /**
     * Tests whether a point lies outside a set of circles.
     *
     * TODO: add unit tests.
     *
     * @private
     *
     * @param {Highcharts.PositionObject} point
     * The point to test.
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * The list of circles to test against.
     *
     * @return {boolean}
     * Returns true if the point is outside all the circles, false if not.
     */
    function isPointOutsideAllCircles(point: PositionObject, circles: Array<CircleObject>): boolean;
    /**
     * Calculates the points for the polygon of the intersection area between
     * a set of circles.
     *
     * @private
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * List of circles to calculate polygon of.
     *
     * @return {Array<Highcharts.GeometryObject>}
     * Return list of points in the intersection polygon.
     */
    function getCirclesIntersectionPolygon(circles: Array<CircleObject>): Array<GeometryObject>;
    /**
     * Calculate the path for the area of overlap between a set of circles.
     *
     * @todo handle cases with only 1 or 0 arcs.
     *
     * @private
     *
     * @param {Array<Highcharts.CircleObject>} circles
     * List of circles to calculate area of.
     *
     * @return {Highcharts.GeometryIntersectionObject|undefined}
     * Returns the path for the area of overlap. Returns an empty string if
     * there are no intersection between all the circles.
     */
    function getAreaOfIntersectionBetweenCircles(circles: Array<CircleObject>): (IntersectionObject | undefined);
}
export default CircleUtilities;

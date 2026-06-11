/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Point {
        /**
         * Utility to get the position of the marker, based on the path angle
         * and the marker's radius.
         *
         * @param radians
         *        The angle in radians from the point center to another vector.
         *
         * @param markerRadius
         *        The radius of the marker, to calculate the additional distance
         *        to the center of the marker.
         *
         * @param anchor
         *        The anchor point of the path and marker as an object with x/y
         *        properties.
         *
         * @return The marker vector as an object with x/y properties.
         */
        getMarkerVector(radians: number, markerRadius: number, anchor: object): object;
        /**
         * Get coordinates of anchor point for pathfinder connection.
         *
         * @param markerOptions
         *        Connection options for position on point.
         *
         * @return An object with x/y properties for the position. Coordinates
         *         are in plot values, not relative to point.
         */
        getPathfinderAnchorPoint(markerOptions: ConnectorsMarkerOptions): PositionObject;
        /**
         * Utility to get the angle from one point to another.
         *
         * @param v1
         *        The first vector, as an object with x/y properties.
         *
         * @param v2
         *        The second vector, as an object with x/y properties.
         *
         * @return The angle in degrees
         */
        getRadiansToVector(v1: PositionObject, v2: PositionObject): number;
    }
    /**
     * Creates an arrow symbol. Like a triangle, except not filled. (see online
     * documentation for example)
     *
     * @param x
     *        x position of the arrow
     *
     * @param y
     *        y position of the arrow
     *
     * @param w
     *        width of the arrow
     *
     * @param h
     *        height of the arrow
     *
     * @return Path array
     */
    function arrow(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Creates a half-width arrow symbol. Like a triangle, except not filled.
     * (see online documentation for example)
     *
     * @param x
     *        x position of the arrow
     *
     * @param y
     *        y position of the arrow
     *
     * @param w
     *        width of the arrow
     *
     * @param h
     *        height of the arrow
     *
     * @return Path array
     */
    function arrowHalf(x: number, y: number, w: number, h: number): SVGPathArray;
    function getCurvedPath(): void;
    function getOrthogonalPath(): void;
    function getStraightPath(): void;
    /**
     * Creates a left-oriented triangle. (see online documentation for example)
     *
     * @param x
     *        x position of the triangle
     *
     * @param y
     *        y position of the triangle
     *
     * @param w
     *        width of the triangle
     *
     * @param h
     *        height of the triangle
     *
     * @return Path array
     */
    function triangleLeft(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Creates a half-width, left-oriented triangle. (see online documentation
     * for example)
     *
     * @param x
     *        x position of the triangle
     *
     * @param y
     *        y position of the triangle
     *
     * @param w
     *        width of the triangle
     *
     * @param h
     *        height of the triangle
     *
     * @return Path array
     */
    function triangleLeftHalf(x: number, y: number, w: number, h: number): SVGPathArray;
}
export default _Highcharts;

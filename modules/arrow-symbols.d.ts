/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
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

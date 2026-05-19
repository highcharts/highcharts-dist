import type SVGPath from '../Core/Renderer/SVG/SVGPath';
declare module '../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires modules/arrow-symbols */
        arrow: typeof arrow;
        /** @requires modules/arrow-symbols */
        'arrow-filled': typeof triangleLeft;
        /** @requires modules/arrow-symbols */
        'arrow-filled-half': typeof triangleLeftHalf;
        /** @requires modules/arrow-symbols */
        'arrow-half': typeof arrowHalf;
        /** @requires modules/arrow-symbols */
        'triangle-left': typeof triangleLeft;
        /** @requires modules/arrow-symbols */
        'triangle-left-half': typeof triangleLeftHalf;
    }
}
/**
 * Creates an arrow symbol. Like a triangle, except not filled.
 * ```
 *                   o
 *             o
 *       o
 * o
 *       o
 *             o
 *                   o
 * ```
 *
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function arrow(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Creates a half-width arrow symbol. Like a triangle, except not filled.
 * ```
 *       o
 *    o
 * o
 *    o
 *       o
 * ```
 *
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function arrowHalf(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Creates a left-oriented triangle.
 * ```
 *             o
 *       ooooooo
 * ooooooooooooo
 *       ooooooo
 *             o
 * ```
 *
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function triangleLeft(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Creates a half-width, left-oriented triangle.
 * ```
 *       o
 *    oooo
 * ooooooo
 *    oooo
 *       o
 * ```
 *
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function triangleLeftHalf(x: number, y: number, w: number, h: number): SVGPath;
export {};

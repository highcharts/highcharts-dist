import type SVGPath from './SVGPath';
import type SymbolOptions from './SymbolOptions';
import type { SymbolTypeRegistry } from './SymbolType';
/**
 * Arc symbol path.
 *
 * @param {number} cx
 * Center X
 * @param {number} cy
 * Center Y
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function arc(cx: number, cy: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 * Callout shape used for default tooltips.
 *
 * @param {number} x
 * Center X
 * @param {number} y
 * Center Y
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function callout(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 * Circle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function circle(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Diamond symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function diamond(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Rect symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function rect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 * Rounded rectangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @param {Highcharts.SymbolOptions} [options]
 * Options
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function roundedRect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 * Triangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function triangle(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Inverted triangle symbol path.
 *
 * @param {number} x
 * X coordinate
 * @param {number} y
 * Y coordinate
 * @param {number} w
 * Width
 * @param {number} h
 * Height
 * @return {Highcharts.SVGPathArray}
 * Path
 */
declare function triangleDown(x: number, y: number, w: number, h: number): SVGPath;
declare module './SymbolType' {
    interface SymbolTypeRegistry {
        arc: typeof arc;
        callout: typeof callout;
        circle: typeof circle;
        diamond: typeof diamond;
        rect: typeof rect;
        roundedRect: typeof roundedRect;
        square: typeof rect;
        triangle: typeof triangle;
        'triangle-down': typeof triangleDown;
    }
}
declare const Symbols: SymbolTypeRegistry;
export default Symbols;

/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    /**
     * Standalone Navigator options.
     */
    interface StandaloneNavigatorOptions {}
    interface SymbolOptions {}
    /**
     * Factory function for standalone navigator.
     *
     * @param options
     *        The standalone navigator options with chart-like structure.
     *
     *        Returns the navigator object.
     */
    function navigator(options: StandaloneNavigatorOptions): void;
    /**
     * Factory function for standalone navigator.
     *
     * @param renderTo
     *        The DOM element to render to, or its id.
     *
     * @param options
     *        The standalone navigator options with chart-like structure.
     *
     *        Returns the navigator object.
     */
    function navigator(renderTo: (string|HTMLDOMElement), options: StandaloneNavigatorOptions): void;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @param path
     *        Path to be rotated.
     *
     * @param vertical
     *        If vertical scrollbar, swap x-y values.
     *
     * @return Rotated path.
     */
    function swapXY(path: SVGPathArray, vertical?: boolean): SVGPathArray;
    /**
     * Callout shape used for default tooltips.
     *
     * @param x
     *        Center X
     *
     * @param y
     *        Center Y
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function callout(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Circle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function circle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Diamond symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function diamond(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Rect symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @param options
     *        Options
     *
     * @return Path
     */
    function rect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPathArray;
    /**
     * Triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangle(x: number, y: number, w: number, h: number): SVGPathArray;
    /**
     * Inverted triangle symbol path.
     *
     * @param x
     *        X coordinate
     *
     * @param y
     *        Y coordinate
     *
     * @param w
     *        Width
     *
     * @param h
     *        Height
     *
     * @return Path
     */
    function triangleDown(x: number, y: number, w: number, h: number): SVGPathArray;
}
export default _Highcharts;

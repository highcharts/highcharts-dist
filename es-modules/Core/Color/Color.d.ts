import type { ColorBase, ColorType } from './ColorType';
/**
 * Handle color operations. Some object methods are chainable.
 *
 * @class
 * @name Highcharts.Color
 *
 * @param {Highcharts.ColorType} input
 * The input color.
 */
declare class Color implements ColorBase {
    /**
     * Creates a color instance out of a color string or object.
     *
     * @function Highcharts.Color.parse
     *
     * @param {Highcharts.ColorType} [input]
     * The input color.
     *
     * @return {Highcharts.Color}
     * Color instance.
     */
    static parse(input?: ColorType): Color;
    constructor(input: ColorType);
    /**
     * The original input color. This can be a color string, a gradient object,
     * or a pattern object.
     * @name Highcharts.Color#input
     * @type {Highcharts.ColorType}
     */
    input: ColorType;
    /**
     * The RGBA color components, if the color is a solid color.
     * @name Highcharts.Color#rgba
     * @type {Highcharts.RGBA}
     */
    rgba: Color.RGBA;
    /**
     * The gradient stops, if the color is a gradient.
     * @name Highcharts.Color#stops
     * @type {Array<Highcharts.Color>|undefined}
     */
    stops?: Array<Color>;
    /**
     * Return the color or gradient stops in the specified format
     *
     * @function Highcharts.Color#get
     *
     * @param {string} [format]
     * Possible values are 'a', 'rgb', 'rgba' (default).
     *
     * @return {Highcharts.ColorType}
     * This color as a string or gradient stops.
     */
    get(format?: ('a' | 'rgb' | 'rgba')): ColorType;
    /**
     * Brighten the color instance.
     *
     * @function Highcharts.Color#brighten
     *
     * @param {number} alpha
     * The alpha value.
     *
     * @return {Highcharts.Color}
     * This color with modifications.
     */
    brighten(alpha: number): this;
    /**
     * Set the color's opacity to a given alpha value.
     *
     * @function Highcharts.Color#setOpacity
     *
     * @param {number} alpha
     *        Opacity between 0 and 1.
     *
     * @return {Highcharts.Color}
     *         Color with modifications.
     */
    setOpacity(alpha: number): this;
    /**
     * Return an intermediate color between two colors.
     *
     * @function Highcharts.Color#tweenTo
     *
     * @param {Highcharts.Color} to
     * The color object to tween to.
     *
     * @param {number} pos
     * The intermediate position, where 0 is the from color (current color
     * item), and 1 is the `to` color.
     *
     * @return {Highcharts.ColorType}
     * The intermediate color in rgba notation, or unsupported type.
     */
    tweenTo(to: Color, pos: number): ColorType;
}
declare namespace Color {
    interface Parser {
        regex: RegExp;
        parse: (result: RegExpExecArray) => RGBA;
    }
    type RGBA = [number, number, number, number];
}
export default Color;

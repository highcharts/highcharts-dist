import type AnimationOptions from '../Core/Animation/AnimationOptions';
import type ColorString from '../Core/Color/ColorString';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
/**
 * Holds a pattern definition.
 *
 * @sample highcharts/series/pattern-fill-area/
 *         Define a custom path pattern
 * @sample highcharts/series/pattern-fill-pie/
 *         Default patterns and a custom image pattern
 * @sample maps/demo/pattern-fill-map/
 *         Custom images on map
 *
 * @example
 * // Pattern used as a color option
 * color: {
 *     pattern: {
 *            path: {
 *                 d: 'M 3 3 L 8 3 L 8 8 Z',
 *                fill: '#102045'
 *            },
 *            width: 12,
 *            height: 12,
 *            color: '#907000',
 *            opacity: 0.5
 *     }
 * }
 */
export interface PatternObject {
    /**
     * Animation options for the image pattern loading.
     */
    animation?: boolean | Partial<AnimationOptions>;
    /**
     * Pattern options
     */
    pattern: PatternOptionsObject;
    /**
     * Optionally an index referencing which pattern to use. Highcharts adds
     * 10 default patterns to the `Highcharts.patterns` array. Additional
     * pattern definitions can be pushed to this array if desired. This option
     * is an index into this array.
     */
    patternIndex?: number;
}
/**
 * Pattern options.
 */
export interface PatternOptionsObject {
    /**
     * When true, the pattern is anchored to each individual point rather than
     * using a global pattern grid. This ensures consistent pattern rendering
     * across points of different sizes and improves accessibility for narrow
     * columns. Defaults to false for backward compatibility.
     *
     * @sample highcharts/series/pattern-fill-anchor-to-point/
     *         Compare shared vs anchored pattern positioning
     *
     * @since next
     * @default false
     */
    anchorToPoint?: boolean;
    /**
     * For automatically calculated width and height on images, it is possible
     * to set an aspect ratio. The image will be zoomed to fill the bounding
     * box, maintaining the aspect ratio defined.
     */
    aspectRatio?: number;
    /**
     * Background color for the pattern if a `path` is set (not images).
     */
    backgroundColor?: ColorString;
    /**
     * Pattern color, used as default path stroke.
     */
    color: ColorString;
    /**
     * Analogous to pattern.width.
     */
    height: number;
    /**
     * ID to assign to the pattern. This is automatically computed if not added,
     * and identical patterns are reused. To refer to an existing pattern for a
     * Highcharts color, use `color: "url(#pattern-id)"`.
     */
    id?: string;
    /**
     * URL to an image to use as the pattern.
     */
    image?: string;
    /**
     * Opacity of the pattern as a float value from 0 to 1.
     */
    opacity?: number;
    /**
     * Either an SVG path as string, or an object. As an object, supply the path
     * string in the `path.d` property. Other supported properties are standard
     * SVG attributes like `path.stroke` and `path.fill`. If a path is supplied
     * for the pattern, the `image` property is ignored.
     */
    path: (string | SVGAttributes);
    /**
     * SVG `patternTransform` to apply to the entire pattern.
     * @see [patternTransform demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/pattern-fill-transform)
     */
    patternTransform?: string;
    /**
     * Width of the pattern. For images this is automatically set to the width
     * of the element bounding box if not supplied. For non-image patterns the
     * default is 32px. Note that automatic resizing of image patterns to fill a
     * bounding box dynamically is only supported for patterns with an
     * automatically calculated ID.
     */
    width: number;
    /**
     * Horizontal offset of the pattern.
     *
     * @default 0
     */
    x?: number;
    /**
     * Vertical offset of the pattern.
     *
     * @default 0
     */
    y?: number;
}
declare module '../Core/Color/ColorType' {
    interface ColorTypeRegistry {
        PatternFill: PatternObject;
    }
}

import type AlignObject from '../AlignObject';
import type AnimationOptions from '../../Animation/AnimationOptions';
import type BBoxObject from '../BBoxObject';
import type CSSObject from '../CSSObject';
import type { DeepPartial } from '../../../Shared/Types';
import type { DOMElementType } from '../DOMElementType';
import type RectangleObject from '../RectangleObject';
import type ShadowOptionsObject from '../ShadowOptionsObject';
import type SVGAttributes from './SVGAttributes';
import type SVGElementBase from './SVGElementBase';
import type SVGRenderer from './SVGRenderer';
declare module '../CSSObject' {
    interface CSSObject {
        strokeWidth?: (number | string);
    }
}
/**
 * The SVGElement prototype is a JavaScript wrapper for SVG elements used in the
 * rendering layer of Highcharts. Combined with the
 * {@link Highcharts.SVGRenderer}
 * object, these prototypes allow freeform annotation in the charts or even in
 * HTML pages without instantiating a chart. The SVGElement can also wrap HTML
 * labels, when `text` or `label` elements are created with the `useHTML`
 * parameter.
 *
 * The SVGElement instances are created through factory functions on the
 * {@link Highcharts.SVGRenderer}
 * object, like
 * {@link Highcharts.SVGRenderer#rect|rect},
 * {@link Highcharts.SVGRenderer#path|path},
 * {@link Highcharts.SVGRenderer#text|text},
 * {@link Highcharts.SVGRenderer#label|label},
 * {@link Highcharts.SVGRenderer#g|g}
 * and more.
 *
 * See [How to use the SVG Renderer](
 * https://www.highcharts.com/docs/advanced-chart-features/renderer) for a
 * comprehensive tutorial on how to draw SVG elements on a chart.
 *
 * @class
 * @name Highcharts.SVGElement
 */
declare class SVGElement implements SVGElementBase {
    element: DOMElementType;
    renderer: SVGRenderer;
    /**
     * Add the element to the DOM. All elements must be added this way.
     *
     * @sample highcharts/members/renderer-g
     *         Elements added to a group
     *
     * @function Highcharts.SVGElement#add
     *
     * @param {Highcharts.SVGElement} [parent]
     * The parent item to add it to. If undefined, the element is added to the
     * {@link Highcharts.SVGRenderer.box}.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    add(parent?: SVGElement): this;
    /**
     * Add a class name to an element.
     *
     * @function Highcharts.SVGElement#addClass
     *
     * @param {string} className
     * The new class name to add.
     *
     * @param {boolean} [replace=false]
     * When true, the existing class name(s) will be overwritten with the new
     * one. When false, the new one is added.
     *
     * @return {Highcharts.SVGElement}
     * Return the SVG element for chainability.
     */
    addClass(className: string, replace?: boolean): this;
    /**
     * Align the element relative to the chart or another box.
     *
     * @function Highcharts.SVGElement#align
     *
     * @param {Highcharts.AlignObject} [alignOptions]
     * The alignment options. The function can be called without this parameter
     * in order to re-align an element after the box has been updated.
     *
     * @param {boolean} [alignByTranslate]
     * Align element by translation.
     *
     * @param {string|Highcharts.BBoxObject} [alignTo]
     * The box to align to, needs a width and height. When the box is a string,
     * it refers to an object in the Renderer. For example, when box is
     * `spacingBox`, it refers to `Renderer.spacingBox` which holds `width`,
     * `height`, `x` and `y` properties.
     *
     * @param {boolean} [redraw]
     * Decide if SVGElement should be redrawn with new alignment or just change
     * its attributes.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    align(alignOptions?: AlignObject, alignByTranslate?: boolean, alignTo?: (string | BBoxObject), redraw?: boolean): this;
    /**
     * Animate to given attributes or CSS properties.
     *
     * @sample highcharts/members/element-on/
     *         Setting some attributes by animation
     *
     * @function Highcharts.SVGElement#animate
     *
     * @param {Highcharts.SVGAttributes} params
     * SVG attributes or CSS to animate.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [options]
     * Animation options.
     *
     * @param {Function} [complete]
     * Function to perform at the end of animation.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    animate(params: SVGAttributes, options?: (boolean | DeepPartial<AnimationOptions>), complete?: Function): this;
    attr(key: string): (number | string);
    /**
     * Apply native and custom attributes to the SVG elements.
     *
     * In order to set the rotation center for rotation, set x and y to 0 and
     * use `translateX` and `translateY` attributes to position the element
     * instead.
     *
     * Attributes frequently used in Highcharts are `fill`, `stroke`,
     * `stroke-width`.
     *
     * @sample highcharts/members/renderer-rect/
     *         Setting some attributes
     *
     * @example
     * // Set multiple attributes
     * element.attr({
     *     stroke: 'red',
     *     fill: 'blue',
     *     x: 10,
     *     y: 10
     * });
     *
     * // Set a single attribute
     * element.attr('stroke', 'red');
     *
     * // Get an attribute
     * element.attr('stroke'); // => 'red'
     *
     * @param hash
     *        The native and custom SVG attributes.
     *
     * @param val
     *        If the type of the first argument is `string`, the second can be a
     *        value, which will serve as a single attribute setter. If the first
     *        argument is a string and the second is undefined, the function
     *        serves as a getter and the current value of the property is
     *        returned.
     *
     * @param complete
     *        A callback function to execute after setting the attributes. This
     *        makes the function compliant and interchangeable with the
     *        {@link SVGElement#animate} function.
     *
     * @param continueAnimation
     *        Used internally when `.attr` is called as part of an animation
     *        step. Otherwise, calling `.attr` for an attribute will stop
     *        animation for that attribute.
     *
     * @return
     *         If used as a setter, it returns the current
     *         {@link Highcharts.SVGElement} so the calls can be chained. If
     *         used as a getter, the current value of the attribute is returned.
     */
    attr(hash?: SVGAttributes, val?: undefined, complete?: Function, continueAnimation?: boolean): this;
    /**
     * Apply a clipping shape to this element.
     *
     * @function Highcharts.SVGElement#clip
     *
     * @param {SVGElement} [clipElem]
     * The clipping shape. If skipped, the current clip is removed.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVG element to allow chaining.
     */
    clip(clipElem?: SVGElement): this;
    /**
     * Calculate the coordinates needed for drawing a rectangle crisply and
     * return the calculated attributes.
     *
     * @function Highcharts.SVGElement#crisp
     *
     * @param {Highcharts.RectangleObject} rect
     * Rectangle to crisp.
     *
     * @param {number} [strokeWidth]
     * The stroke width to consider when computing crisp positioning. It can
     * also be set directly on the rect parameter.
     *
     * @return {Highcharts.RectangleObject}
     * The modified rectangle arguments.
     */
    crisp(rect: RectangleObject, strokeWidth?: number): RectangleObject;
    /**
     * Set styles for the element. In addition to CSS styles supported by
     * native SVG and HTML elements, there are also some custom made for
     * Highcharts, like `width`, `ellipsis` and `textOverflow` for SVG text
     * elements.
     *
     * @sample highcharts/members/renderer-text-on-chart/
     *         Styled text
     *
     * @function Highcharts.SVGElement#css
     *
     * @param {Highcharts.CSSObject} styles
     * The new CSS styles.
     *
     * @return {Highcharts.SVGElement}
     * Return the SVG element for chaining.
     */
    css(styles: CSSObject): this;
    /**
     * Destroy the element and element wrapper and clear up the DOM and event
     * hooks.
     *
     * @function Highcharts.SVGElement#destroy
     */
    destroy(): undefined;
    /**
     * Get the bounding box (width, height, x and y) for the element. Generally
     * used to get rendered text size. Since this is called a lot in charts,
     * the results are cached based on text properties, in order to save DOM
     * traffic. The returned bounding box includes the rotation, so for example
     * a single text line of rotation 90 will report a greater height, and a
     * width corresponding to the line-height.
     *
     * @sample highcharts/members/renderer-on-chart/
     *         Draw a rectangle based on a text's bounding box
     *
     * @function Highcharts.SVGElement#getBBox
     *
     * @param {boolean} [reload]
     *        Skip the cache and get the updated DOM bounding box.
     *
     * @param {number} [rot]
     *        Override the element's rotation. This is internally used on axis
     *        labels with a value of 0 to find out what the bounding box would
     *        be have been if it were not rotated.
     *
     * @return {Highcharts.BBoxObject}
     *         The bounding box with `x`, `y`, `width` and `height` properties.
     */
    getBBox(reload?: boolean, rot?: number): BBoxObject;
    /**
     * Overridable method to get a cache key for the bounding box of this
     * element.
     *
     * @example
     * // Plugin to let the getBBox function respond to font family changes
     * (({ SVGElement }) => {
     * const getBBoxCacheKey = SVGElement.prototype.getBBoxCacheKey;
     *   SVGElement.prototype.getBBoxCacheKey = function (keys) {
     *     const key = getBBoxCacheKey.call(this, keys);
     *     const fontFamily = this.styles.fontFamily;
     *     return key + (fontFamily ? `,${fontFamily}` : '');
     *   };
     * })(Highcharts);
     *
     * @function Highcharts.SVGElement#getBBoxCacheKey
     *
     * @return {string|void} The cache key based on the text properties.
     */
    getBBoxCacheKey(keys: Array<any>): string | void;
    /**
     * Get the computed style. Only in styled mode.
     *
     * @example
     * chart.series[0].points[0].graphic.getStyle('stroke-width'); // => '1px'
     *
     * @function Highcharts.SVGElement#getStyle
     *
     * @param {string} prop
     *        The property name to check for.
     *
     * @return {string}
     *         The current computed value.
     */
    getStyle(prop: string): string;
    /**
     * Check if an element has the given class name.
     *
     * @function Highcharts.SVGElement#hasClass
     *
     * @param {string} className
     * The class name to check for.
     *
     * @return {boolean}
     * Whether the class name is found.
     */
    hasClass(className: string): boolean;
    /**
     * Hide the element, similar to setting the `visibility` attribute to
     * `hidden`.
     *
     * @function Highcharts.SVGElement#hide
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    hide(): this;
    /**
     * Initialize the SVG element. This function only exists to make the
     * initialization process overridable. It should not be called directly.
     *
     * @function Highcharts.SVGElement#init
     *
     * @param {Highcharts.SVGRenderer} renderer
     * The SVGRenderer instance to initialize to.
     *
     * @param {string} nodeName
     * The SVG node name.
     */
    constructor(renderer: SVGRenderer, nodeName: string);
    /**
     * Add an event listener. This is a simple setter that replaces the
     * previous event of the same type added by this function, as opposed to
     * the {@link Highcharts#addEvent} function.
     *
     * @sample highcharts/members/element-on/
     *         A clickable rectangle
     *
     * @function Highcharts.SVGElement#on
     *
     * @param {string} eventType
     * The event type.
     *
     * @param {Function} handler
     * The handler callback.
     *
     * @return {Highcharts.SVGElement}
     * The SVGElement for chaining.
     */
    on(eventType: string, handler: Function): this;
    /**
     * Remove a class name from the element.
     *
     * @function Highcharts.SVGElement#removeClass
     *
     * @param {string|RegExp} className
     *        The class name to remove.
     *
     * @return {Highcharts.SVGElement} Returns the SVG element for chainability.
     */
    removeClass(className: (string | RegExp)): this;
    /**
     * Set the coordinates needed to draw a consistent radial gradient across
     * a shape regardless of positioning inside the chart. Used on pie slices
     * to make all the slices have the same radial reference point.
     *
     * @function Highcharts.SVGElement#setRadialReference
     *
     * @param {Array<number>} coordinates
     * The center reference. The format is `[centerX, centerY, diameter]` in
     * pixels.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    setRadialReference(coordinates: Array<number>): this;
    /**
     * Add a shadow to the element. In styled mode, this method is not used,
     * instead use `defs` and filters.
     *
     * @example
     * renderer.rect(10, 100, 100, 100)
     *     .attr({ fill: 'red' })
     *     .shadow(true);
     *
     * @function Highcharts.SVGElement#shadow
     *
     * @param {boolean|Highcharts.ShadowOptionsObject} [shadowOptions] The
     *        shadow options. If `true`, the default options are applied. If
     *        `false`, the current shadow will be removed.
     *
     * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
     */
    shadow(shadowOptions?: (boolean | Partial<ShadowOptionsObject>)): this;
    /**
     * Show the element after it has been hidden.
     *
     * @function Highcharts.SVGElement#show
     *
     * @param {boolean} [inherit=true]
     *        Set the visibility attribute to `inherit` rather than `visible`.
     *        The difference is that an element with `visibility="visible"`
     *        will be visible even if the parent is hidden.
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    show(inherit?: boolean): this;
    /**
     * Get the computed stroke width in pixel values. This is used extensively
     * when drawing shapes to ensure the shapes are rendered crisp and
     * positioned correctly relative to each other. Using
     * `shape-rendering: crispEdges` leaves us less control over positioning,
     * for example when we want to stack columns next to each other, or position
     * things pixel-perfectly within the plot box.
     *
     * The common pattern when placing a shape is:
     * - Create the SVGElement and add it to the DOM. In styled mode, it will
     *   now receive a stroke width from the style sheet. In classic mode we
     *   will add the `stroke-width` attribute.
     * - Read the computed `elem.strokeWidth()`.
     * - Place it based on the stroke width.
     *
     * @function Highcharts.SVGElement#strokeWidth
     *
     * @return {number}
     * The stroke width in pixels. Even if the given stroke width (in CSS or by
     * attributes) is based on `em` or other units, the pixel size is returned.
     */
    strokeWidth(): number;
    /**
     * Bring the element to the front. Alternatively, a new zIndex can be set.
     *
     * @sample highcharts/members/element-tofront/
     *         Click an element to bring it to front
     *
     * @function Highcharts.SVGElement#toFront
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    toFront(): this;
    /**
     * Move an object and its children by x and y values.
     *
     * @function Highcharts.SVGElement#translate
     *
     * @param {number} x
     * The x value.
     *
     * @param {number} y
     * The y value.
     *
     * @return {Highcharts.SVGElement}
     * Translated element.
     */
    translate(x: number, y: number): this;
}
interface SVGElement extends SVGElementBase {
}
export default SVGElement;

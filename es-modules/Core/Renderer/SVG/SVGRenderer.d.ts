import type AnimationOptions from '../../Animation/AnimationOptions';
import type ButtonThemeObject from './ButtonThemeObject';
import type ColorString from '../../Color/ColorString';
import type CSSObject from '../CSSObject';
import type { DOMElementType } from '../DOMElementType';
import type { EventCallback } from '../../../Core/Callback';
import type FontMetricsObject from '../FontMetricsObject';
import type SVGAttributes from './SVGAttributes';
import type SVGPath from './SVGPath';
import type SVGRendererBase from './SVGRendererBase';
import type SymbolOptions from './SymbolOptions';
import type { SymbolKey } from './SymbolType';
import AST from '../HTML/AST.js';
import Palette from '../../Color/Palette';
import SVGElement from './SVGElement.js';
import SVGLabel from './SVGLabel.js';
import Symbols from './Symbols.js';
/**
 * Allows direct access to the Highcharts rendering layer in order to draw
 * primitive shapes like circles, rectangles, paths or text directly on a chart,
 * or independent from any chart. The SVGRenderer represents a wrapper object
 * for SVG in modern browsers.
 *
 * An existing chart's renderer can be accessed through {@link Chart.renderer}.
 * The renderer can also be used completely decoupled from a chart.
 *
 * See [How to use the SVG Renderer](
 * https://www.highcharts.com/docs/advanced-chart-features/renderer) for a
 * comprehensive tutorial.
 *
 * @sample highcharts/members/renderer-on-chart
 *         Annotating a chart programmatically.
 * @sample highcharts/members/renderer-basic
 *         Independent SVG drawing.
 *
 * @example
 * // Use directly without a chart object.
 * let renderer = new Highcharts.Renderer(parentNode, 600, 400);
 *
 * @class
 * @name Highcharts.SVGRenderer
 *
 * @param {Highcharts.HTMLDOMElement} container
 *        Where to put the SVG in the web page.
 *
 * @param {number} width
 *        The width of the SVG.
 *
 * @param {number} height
 *        The height of the SVG.
 *
 * @param {Highcharts.CSSObject} [style]
 *        The box style, if not in styleMode
 *
 * @param {boolean} [forExport=false]
 *        Whether the rendered content is intended for export.
 *
 * @param {boolean} [allowHTML=true]
 *        Whether the renderer is allowed to include HTML text, which will be
 *        projected on top of the SVG.
 *
 * @param {boolean} [styledMode=false]
 *        Whether the renderer belongs to a chart that is in styled mode.
 *        If it does, it will avoid setting presentational attributes in
 *        some cases, but not when set explicitly through `.attr` and `.css`
 *        etc.
 */
declare class SVGRenderer implements SVGRendererBase {
    /**
     * The root `svg` node of the renderer.
     *
     * @name Highcharts.SVGRenderer#box
     * @type {Highcharts.SVGDOMElement}
     */
    box: globalThis.SVGElement;
    /**
     * The wrapper for the root `svg` node of the renderer.
     *
     * @name Highcharts.SVGRenderer#boxWrapper
     * @type {Highcharts.SVGElement}
     */
    boxWrapper: SVGElement;
    /**
     * A pointer to the `defs` node of the root SVG.
     *
     * @name Highcharts.SVGRenderer#defs
     * @type {Highcharts.SVGElement}
     */
    defs: SVGElement;
    /**
     * Whether the rendered content is intended for export.
     *
     * @name Highcharts.SVGRenderer#forExport
     * @type {boolean | undefined}
     */
    forExport?: boolean;
    /**
     * The palette instance associated with the renderer. Typically the same
     * as the chart's palette.
     *
     * @name Highcharts.SVGRenderer#palette
     * @type {Highcharts.Palette|undefined}
     */
    palette?: Palette;
    /**
     * General method for adding a definition to the SVG `defs` tag. Can be used
     * for gradients, fills, filters etc. Styled mode only. A hook for adding
     * general definitions to the SVG's defs tag. Definitions can be referenced
     * from the CSS by its `id`. Read more in
     * [gradients, shadows and patterns](https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns).
     * Styled mode only.
     *
     * @function Highcharts.SVGRenderer#definition
     *
     * @param {Highcharts.ASTNode} def
     * A serialized form of an SVG definition, including children.
     *
     * @return {Highcharts.SVGElement}
     * The inserted node.
     */
    definition(def: AST.Node): SVGElement;
    /**
     * Apply the global style on the renderer, mixed with the default styles.
     *
     * @function Highcharts.SVGRenderer#setStyle
     *
     * @param {Highcharts.CSSObject} style
     * CSS to apply.
     */
    setStyle(style: CSSObject): void;
    /**
     * Detect whether the renderer is hidden. This happens when one of the
     * parent elements has `display: none`. Used internally to detect when we
     * need to render preliminarily in another div to get the text bounding
     * boxes right.
     *
     * @function Highcharts.SVGRenderer#isHidden
     *
     * @return {boolean}
     * True if it is hidden.
     */
    isHidden(): boolean;
    /**
     * Destroys the renderer and its allocated members.
     *
     * @function Highcharts.SVGRenderer#destroy
     *
     * @return {null}
     * Pass through value.
     */
    destroy(): null;
    /**
     * Create a wrapper for an SVG element. Serves as a factory for
     * {@link SVGElement}, but this function is itself mostly called from
     * primitive factories like {@link SVGRenderer#path}, {@link
     * SVGRenderer#rect} or {@link SVGRenderer#text}.
     *
     * @function Highcharts.SVGRenderer#createElement
     *
     * @param {string} nodeName
     * The node name, for example `rect`, `g` etc.
     *
     * @return {Highcharts.SVGElement}
     * The generated SVGElement.
     */
    createElement(nodeName: string): SVGElement;
    /**
     * Returns white for dark colors and black for bright colors, based on W3C's
     * definition of [Relative luminance](
     * https://www.w3.org/WAI/GL/wiki/Relative_luminance).
     *
     * @function Highcharts.SVGRenderer#getContrast
     *
     * @param {Highcharts.ColorString} color
     * The color to get the contrast for.
     *
     * @return {Highcharts.ColorString}
     * The contrast color, either `#000000` or `#FFFFFF`.
     */
    getContrast(color: ColorString): ColorString;
    /**
     * Create a button with preset states. Styles for the button can either be
     * set as arguments, or a general theme for all buttons can be set by the
     * `global.buttonTheme` option.
     *
     * @function Highcharts.SVGRenderer#button
     *
     * @param {string} text
     * The text or HTML to draw.
     *
     * @param {number} x
     * The x position of the button's left side.
     *
     * @param {number} y
     * The y position of the button's top side.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.SVGElement>} callback
     * The function to execute on button click or touch.
     *
     * @param {Highcharts.SVGAttributes} [theme]
     * SVG attributes for the normal state.
     *
     * @param {Highcharts.SVGAttributes} [hoverState]
     * SVG attributes for the hover state.
     *
     * @param {Highcharts.SVGAttributes} [selectState]
     * SVG attributes for the pressed state.
     *
     * @param {Highcharts.SVGAttributes} [disabledState]
     * SVG attributes for the disabled state.
     *
     * @param {Highcharts.SymbolKeyValue} [shape=rect]
     * The shape type.
     *
     * @param {boolean} [useHTML=false]
     * Whether to use HTML to render the label.
     *
     * @return {Highcharts.SVGElement}
     * The button element.
     */
    button(text: string, x: number, y: number, callback: EventCallback<SVGElement>, theme?: ButtonThemeObject, hoverState?: SVGAttributes, selectState?: SVGAttributes, disabledState?: SVGAttributes, shape?: SymbolKey, useHTML?: boolean): SVGElement;
    /**
     * Make a straight line crisper by not spilling out to neighbor pixels.
     *
     * @function Highcharts.SVGRenderer#crispLine
     *
     * @param {Highcharts.SVGPathArray} points
     *        The original points on the format `[['M', 0, 0], ['L', 100, 0]]`.
     *
     * @param {number} width
     *        The width of the line.
     *
     * @return {Highcharts.SVGPathArray}
     *         The original points array, but modified to render crisply.
     */
    crispLine(points: SVGPath, width: number): SVGPath;
    /**
     * Draw a path, wraps the SVG `path` element.
     *
     * @sample highcharts/members/renderer-path-on-chart/
     *         Draw a path in a chart
     * @sample highcharts/members/renderer-path/
     *         Draw a path independent from a chart
     *
     * @example
     * let path = renderer.path(['M', 10, 10, 'L', 30, 30, 'z'])
     *     .attr({ stroke: '#ff00ff' })
     *     .add();
     *
     * @function Highcharts.SVGRenderer#path
     *
     * @param {Highcharts.SVGPathArray} [path]
     * An SVG path definition in array form.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     *
     */ /**
    * Draw a path, wraps the SVG `path` element.
    *
    * @function Highcharts.SVGRenderer#path
    *
    * @param {Highcharts.SVGAttributes|Highcharts.SVGPathArray} [path]
    * The initial attributes.
    *
    * @return {Highcharts.SVGElement}
    * The generated wrapper element.
    */
    path(path?: (SVGAttributes | SVGPath)): SVGElement;
    /**
     * Draw a circle, wraps the SVG `circle` element.
     *
     * @sample highcharts/members/renderer-circle/
     *         Drawing a circle
     *
     * @function Highcharts.SVGRenderer#circle
     *
     * @param {number} [x]
     * The center x position.
     *
     * @param {number} [y]
     * The center y position.
     *
     * @param {number} [r]
     * The radius.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     */ /**
    * Draw a circle, wraps the SVG `circle` element.
    *
    * @function Highcharts.SVGRenderer#circle
    *
    * @param {Highcharts.SVGAttributes} [attribs]
    * The initial attributes.
    *
    * @return {Highcharts.SVGElement}
    * The generated wrapper element.
    */
    circle(x?: (number | SVGAttributes), y?: number, r?: number): SVGElement;
    /**
     * Draw and return an arc. Overloaded function that takes arguments object.
     *
     * @param attribs
     * Initial SVG attributes.
     *
     * @return
     * The generated wrapper element.
     */
    arc(attribs?: SVGAttributes): SVGElement;
    /**
     * Draw and return an arc.
     *
     * @sample highcharts/members/renderer-arc/
     *         Drawing an arc
     *
     * @param x
     * Center X position.
     *
     * @param y
     * Center Y position.
     *
     * @param r
     * The outer radius' of the arc.
     *
     * @param innerR
     * Inner radius like used in donut charts.
     *
     * @param start
     * The starting angle of the arc in radians, where 0 is to the right and
     * `-Math.PI/2` is up.
     *
     * @param end
     * The ending angle of the arc in radians, where 0 is to the right and
     * `-Math.PI/2` is up.
     *
     * @return
     * The generated wrapper element.
     */
    arc(x?: number, y?: number, r?: number, innerR?: number, start?: number, end?: number): SVGElement;
    /**
     * Draw and return a rectangle.
     *
     * @function Highcharts.SVGRenderer#rect
     *
     * @param {number} [x]
     * Left position.
     *
     * @param {number} [y]
     * Top position.
     *
     * @param {number} [width]
     * Width of the rectangle.
     *
     * @param {number} [height]
     * Height of the rectangle.
     *
     * @param {number} [r]
     * Border corner radius.
     *
     * @param {number} [strokeWidth]
     * A stroke width can be supplied to allow crisp drawing.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     */ /**
    * Draw and return a rectangle.
    *
    * @sample highcharts/members/renderer-rect-on-chart/
    *         Draw a rectangle in a chart
    * @sample highcharts/members/renderer-rect/
    *         Draw a rectangle independent from a chart
    *
    * @function Highcharts.SVGRenderer#rect
    *
    * @param {Highcharts.SVGAttributes} [attributes]
    * General SVG attributes for the rectangle.
    *
    * @return {Highcharts.SVGElement}
    * The generated wrapper element.
    */
    rect(x?: (number | SVGAttributes), y?: number, width?: number, height?: number, r?: number, strokeWidth?: number): SVGElement;
    /**
     * Draw and return a rectangle with advanced corner rounding options.
     *
     * @function Highcharts.SVGRenderer#roundedRect
     *
     * @param {Highcharts.SVGAttributes} attribs
     * Attributes.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     */
    roundedRect(attribs?: SVGAttributes): SVGElement;
    /**
     * Resize the {@link SVGRenderer#box} and re-align all aligned child
     * elements.
     *
     * @sample highcharts/members/renderer-g/
     *         Show and hide grouped objects
     *
     * @function Highcharts.SVGRenderer#setSize
     *
     * @param {number} width
     * The new pixel width.
     *
     * @param {number} height
     * The new pixel height.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animate=true]
     * Whether and how to animate.
     */
    setSize(width: number, height: number, animate?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * Create and return an svg group element. Child
     * {@link Highcharts.SVGElement} objects are added to the group by using the
     * group as the first parameter in {@link Highcharts.SVGElement#add|add()}.
     *
     * @function Highcharts.SVGRenderer#g
     *
     * @param {string} [name]
     * The group will be given a class name of `highcharts-{name}`. This can be
     * used for styling and scripting.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     */
    g(name?: string): SVGElement;
    /**
     * Display an image.
     *
     * @sample highcharts/members/renderer-image-on-chart/
     *         Add an image in a chart
     * @sample highcharts/members/renderer-image/
     *         Add an image independent of a chart
     *
     * @function Highcharts.SVGRenderer#image
     *
     * @param {string} href
     * The image source.
     *
     * @param {number} [x]
     * The X position.
     *
     * @param {number} [y]
     * The Y position.
     *
     * @param {number} [width]
     * The image width. If omitted, it defaults to the image file width.
     *
     * @param {number} [height]
     * The image height. If omitted it defaults to the image file height.
     *
     * @param {Function} [onload]
     * Event handler for image load.
     *
     * @return {Highcharts.SVGElement}
     * The generated wrapper element.
     */
    image(href: string, x?: number, y?: number, width?: number, height?: number, onload?: Function): SVGElement;
    /**
     * Draw a symbol out of pre-defined shape paths from
     * {@link SVGRenderer#symbols}.
     * It is used in Highcharts for point makers, which cake a `symbol` option,
     * and label and button backgrounds like in the tooltip and stock flags.
     *
     * @function Highcharts.SVGRenderer#symbol
     *
     * @param {string} symbol
     * The symbol name.
     *
     * @param {number} [x]
     * The X coordinate for the top left position.
     *
     * @param {number} [y]
     * The Y coordinate for the top left position.
     *
     * @param {number} [width]
     * The pixel width.
     *
     * @param {number} [height]
     * The pixel height.
     *
     * @param {Highcharts.SymbolOptionsObject} [options]
     * Additional options, depending on the actual symbol drawn.
     *
     * @return {Highcharts.SVGElement}
     * SVG symbol.
     */
    symbol(symbol: SymbolKey, x?: number, y?: number, width?: number, height?: number, options?: SymbolOptions): SVGElement;
    /**
     * Define a clipping rectangle. The clipping rectangle is later applied
     * to {@link SVGElement} objects through the {@link SVGElement#clip}
     * function.
     *
     * This function is deprecated as of v11.2. Instead, use a regular shape
     * (`rect`, `path` etc), and the `SVGElement.clipTo` function.
     *
     * @example
     * let circle = renderer.circle(100, 100, 100)
     *     .attr({ fill: 'red' })
     *     .add();
     * let clipRect = renderer.clipRect(100, 100, 100, 100);
     *
     * // Leave only the lower right quarter visible
     * circle.clip(clipRect);
     *
     * @deprecated
     *
     * @param x
     *
     * @param y
     *
     * @param width
     *
     * @param height
     *
     * @return
     * A clipping rectangle.
     */
    clipRect(x?: number, y?: number, width?: number, height?: number): SVGRenderer.ClipRectElement;
    /**
     * Draw text. The text can contain a subset of HTML, like spans and anchors
     * and some basic text styling of these. For more advanced features like
     * border and background, use {@link Highcharts.SVGRenderer#label} instead.
     * To update the text after render, run `text.attr({ text: 'New text' })`.
     *
     * @sample highcharts/members/renderer-text-on-chart/
     *         Annotate the chart freely
     * @sample highcharts/members/renderer-on-chart/
     *         Annotate with a border and in response to the data
     * @sample highcharts/members/renderer-text/
     *         Formatted text
     *
     * @function Highcharts.SVGRenderer#text
     *
     * @param {string} [str]
     * The text of (subset) HTML to draw.
     *
     * @param {number} [x]
     * The x position of the text's lower left corner.
     *
     * @param {number} [y]
     * The y position of the text's lower left corner.
     *
     * @param {boolean} [useHTML=false]
     * Use HTML to render the text.
     *
     * @return {Highcharts.SVGElement}
     * The text object.
     */
    text(str?: string, x?: number, y?: number, useHTML?: boolean): SVGElement;
    /**
     * Utility to return the baseline offset and total line height from the font
     * size.
     *
     * @function Highcharts.SVGRenderer#fontMetrics
     *
     * @param {Highcharts.SVGElement|Highcharts.SVGDOMElement|number} ref
     * The element to inspect for a current font size. If a number is given,
     * it's used as a fall back for direct font size in pixels.
     *
     * @return {Highcharts.FontMetricsObject}
     * The font metrics.
     */
    fontMetrics(ref: (DOMElementType | SVGElement | number)): FontMetricsObject;
    /**
     * Draw a label, which is an extended text element with support for border
     * and background. Highcharts creates a `g` element with a text and a `path`
     * or `rect` inside, to make it behave somewhat like a HTML div. Border and
     * background are set through `stroke`, `stroke-width` and `fill` attributes
     * using the {@link Highcharts.SVGElement#attr|attr} method. To update the
     * text after render, run `label.attr({ text: 'New text' })`.
     *
     * @sample highcharts/members/renderer-label-on-chart/
     *         A label on the chart
     *
     * @function Highcharts.SVGRenderer#label
     *
     * @param {string} str
     * The initial text string or (subset) HTML to render.
     *
     * @param {number} x
     * The x position of the label's left side.
     *
     * @param {number} [y]
     * The y position of the label's top side or baseline, depending on the
     * `baseline` parameter.
     *
     * @param {string} [shape='rect']
     * The shape of the label's border/background, if any. Defaults to `rect`.
     * Other possible values are `callout` or other shapes defined in
     * {@link Highcharts.SVGRenderer#symbols}.
     *
     * @param {number} [anchorX]
     * In case the `shape` has a pointer, like a flag, this is the coordinates
     * it should be pinned to.
     *
     * @param {number} [anchorY]
     * In case the `shape` has a pointer, like a flag, this is the coordinates
     * it should be pinned to.
     *
     * @param {boolean} [useHTML=false]
     * Whether to use HTML to render the label.
     *
     * @param {boolean} [baseline=false]
     * Whether to position the label relative to the text baseline, like
     * {@link Highcharts.SVGRenderer#text|renderer.text}, or to the upper border
     * of the rectangle.
     *
     * @param {string} [className]
     * Class name for the group.
     *
     * @return {Highcharts.SVGElement}
     * The generated label.
     */
    label(str: string, x: number, y?: number, shape?: SymbolKey, anchorX?: number, anchorY?: number, useHTML?: boolean, baseline?: boolean, className?: string): SVGLabel;
}
interface SVGRenderer extends SVGRendererBase {
    /**
     * A pointer to the renderer's associated Element class.
     *
     * @name Highcharts.SVGRenderer#Element
     * @type {Highcharts.SVGElement}
     */
    Element: typeof SVGElement;
    SVG_NS: string;
    /**
     * A collection of characters mapped to HTML entities. When `useHTML` on an
     * element is true, these entities will be rendered correctly by HTML. In
     * the SVG pseudo-HTML, they need to be unescaped back to simple characters,
     * so for example `&lt;` will render as `<`.
     *
     * @example
     * // Add support for unescaping quotes
     * Highcharts.SVGRenderer.prototype.escapes['"'] = '&quot;';
     *
     * @name Highcharts.SVGRenderer#escapes
     * @type {Highcharts.Dictionary<string>}
     */
    escapes: Record<string, string>;
    /**
     * An extendable collection of functions for defining symbol paths. Each
     * symbol function takes five parameters: `x`, `y`, `width`, `height` and
     * `options`, and returns an `SVGPath` array.
     *
     * @sample highcharts/members/renderer-symbols
     *         Renderer symbols overview
     * @sample highcharts/plotoptions/series-marker-symbol
     *         Custom marker symbol
     *
     * @name Highcharts.SVGRenderer#symbols
     * @type {Highcharts.SymbolDictionary}
     */
    symbols: typeof Symbols;
    /**
     * Dummy function for plugins, called every time the renderer is updated.
     * Prior to Highcharts 5, this was used for the canvg renderer.
     *
     * @deprecated
     * @function Highcharts.SVGRenderer#draw
     */
    draw: Function;
}
declare namespace SVGRenderer {
    type ClipRectElement = SVGElement;
}
export default SVGRenderer;

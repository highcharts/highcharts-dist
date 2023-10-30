import type CSSObject from '../CSSObject';
import type HTMLAttributes from '../HTML/HTMLAttributes';
import type SVGAttributes from '../SVG/SVGAttributes';
/**
 * The AST class represents an abstract syntax tree of HTML or SVG content. It
 * can take HTML as an argument, parse it, optionally transform it to SVG, then
 * perform sanitation before inserting it into the DOM.
 *
 * @class
 * @name Highcharts.AST
 *
 * @param {string|Array<Highcharts.ASTNode>} source
 * Either an HTML string or an ASTNode list to populate the tree.
 */
declare class AST {
    /**
     * The list of allowed SVG or HTML attributes, used for sanitizing
     * potentially harmful content from the chart configuration before adding to
     * the DOM.
     *
     * @see [Source code with default values](
     * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedAttributes)
     *
     * @example
     * // Allow a custom, trusted attribute
     * Highcharts.AST.allowedAttributes.push('data-value');
     *
     * @name Highcharts.AST.allowedAttributes
     * @type {Array<string>}
     */
    static allowedAttributes: string[];
    /**
     * The list of allowed references for referring attributes like `href` and
     * `src`. Attribute values will only be allowed if they start with one of
     * these strings.
     *
     * @see [Source code with default values](
     * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedReferences)
     *
     * @example
     * // Allow tel:
     * Highcharts.AST.allowedReferences.push('tel:');
     *
     * @name    Highcharts.AST.allowedReferences
     * @type    {Array<string>}
     */
    static allowedReferences: string[];
    /**
     * The list of allowed SVG or HTML tags, used for sanitizing potentially
     * harmful content from the chart configuration before adding to the DOM.
     *
     * @see [Source code with default values](
     * https://github.com/highcharts/highcharts/blob/master/ts/Core/Renderer/HTML/AST.ts#:~:text=public%20static%20allowedTags)
     *
     * @example
     * // Allow a custom, trusted tag
     * Highcharts.AST.allowedTags.push('blink'); // ;)
     *
     * @name    Highcharts.AST.allowedTags
     * @type    {Array<string>}
     */
    static allowedTags: string[];
    static emptyHTML: string;
    /**
     * Allow all custom SVG and HTML attributes, references and tags (together
     * with potentially harmful ones) to be added to the DOM from the chart
     * configuration. In other words, disable the the allow-listing which is the
     * primary functionality of the AST.
     *
     * WARNING: Setting this property to `true` while allowing untrusted user
     * data in the chart configuration will expose your application to XSS
     * security risks!
     *
     * Note that in case you want to allow a known set of tags or attributes,
     * you should allow-list them instead of disabling the filtering totally.
     * See [allowedAttributes](Highcharts.AST#.allowedAttributes),
     * [allowedReferences](Highcharts.AST#.allowedReferences) and
     * [allowedTags](Highcharts.AST#.allowedTags). The `bypassHTMLFiltering`
     * setting is intended only for those cases where allow-listing is not
     * practical, and the chart configuration already comes from a secure
     * source.
     *
     * @example
     * // Allow all custom attributes, references and tags (disable DOM XSS
     * // filtering)
     * Highcharts.AST.bypassHTMLFiltering = true;
     *
     * @name Highcharts.AST.bypassHTMLFiltering
     * @static
     */
    static bypassHTMLFiltering: boolean;
    /**
     * Filter an object of SVG or HTML attributes against the allow list.
     *
     * @static
     *
     * @function Highcharts.AST#filterUserAttributes
     *
     * @param {Highcharts.SVGAttributes} attributes The attributes to filter
     *
     * @return {Highcharts.SVGAttributes}
     * The filtered attributes
     */
    static filterUserAttributes(attributes: SVGAttributes): SVGAttributes;
    static parseStyle(style: string): CSSObject;
    /**
     * Utility function to set html content for an element by passing in a
     * markup string. The markup is safely parsed by the AST class to avoid
     * XSS vulnerabilities. This function should be used instead of setting
     * `innerHTML` in all cases where the content is not fully trusted.
     *
     * @static
     * @function Highcharts.AST#setElementHTML
     *
     * @param {SVGDOMElement|HTMLDOMElement} el
     * Node to set content of.
     *
     * @param {string} html
     * Markup string
     */
    static setElementHTML(el: Element, html: string): void;
    constructor(source: (string | Array<AST.Node>));
    /**
     * List of the nodes of this tree, can be modified before adding the tree to
     * the DOM.
     */
    nodes: Array<AST.Node>;
    /**
     * Add the tree defined as a hierarchical JS structure to the DOM
     *
     * @function Highcharts.AST#addToDOM
     *
     * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} parent
     * The node where it should be added
     *
     * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement}
     * The inserted node.
     */
    addToDOM(parent: Element): HTMLElement | SVGElement;
    /**
     * Parse HTML/SVG markup into AST Node objects. Used internally from the
     * constructor.
     *
     * @private
     *
     * @function Highcharts.AST#getNodesFromMarkup
     *
     * @param {string} markup The markup string.
     *
     * @return {Array<Highcharts.ASTNode>} The parsed nodes.
     */
    private parseMarkup;
}
declare namespace AST {
    interface Node {
        attributes?: (HTMLAttributes & SVGAttributes);
        children?: Array<Node>;
        style?: CSSObject;
        tagName?: string;
        textContent?: string;
    }
}
export default AST;

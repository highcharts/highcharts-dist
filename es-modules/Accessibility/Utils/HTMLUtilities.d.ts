import type { DOMElementType, HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
/**
 * @private
 * @param {Highcharts.HTMLDOMElement} el
 * @param {string} className
 * @return {void}
 */
declare function addClass(el: HTMLDOMElement, className: string): void;
/**
 * @private
 * @param {Highcharts.HTMLDOMElement} el
 * @param {string} className
 * @return {void}
 */
declare function removeClass(el: HTMLDOMElement, className: string): void;
/**
 * Utility function to clone a mouse event for re-dispatching.
 * @private
 */
declare function cloneMouseEvent(e: MouseEvent): MouseEvent;
/**
 * Utility function to clone a touch event for re-dispatching.
 * @private
 */
declare function cloneTouchEvent(e: TouchEvent): TouchEvent;
/**
 * @private
 */
declare function escapeStringForHTML(str: string): string;
/**
 * Get an element by ID
 * @private
 */
declare function getElement(id: string): (DOMElementType | null);
/**
 * Get a fake mouse event of a given type. If relatedTarget is not given,
 * it will point to simulatedEventTarget, as an indicator that the event
 * is fake.
 * @private
 */
declare function getFakeMouseEvent(type: string, position?: {
    x: number;
    y: number;
}, relatedTarget?: EventTarget): MouseEvent;
/**
 * Get an appropriate heading level for an element. Corresponds to the
 * heading level below the previous heading in the DOM.
 *
 * Note: Only detects previous headings in the DOM that are siblings,
 * ancestors, or previous siblings of ancestors. Headings that are nested below
 * siblings of ancestors (cousins et.al) are not picked up. This is because it
 * is ambiguous whether or not the nesting is for layout purposes or indicates a
 * separate section.
 *
 * @private
 * @param {Highcharts.HTMLDOMElement} [element]
 * @return {string} The heading tag name (h1, h2 etc).
 * If no nearest heading is found, "p" is returned.
 */
declare function getHeadingTagNameForElement(element: HTMLDOMElement): string;
/**
 * Remove an element from the DOM.
 * @private
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} [element]
 * @return {void}
 */
declare function removeElement(element?: DOMElementType): void;
/**
 * Remove all child nodes from an element.
 * @private
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} [element]
 * @return {void}
 */
declare function removeChildNodes(element: DOMElementType): void;
/**
 * Utility function. Reverses child nodes of a DOM element.
 * @private
 */
declare function reverseChildNodes(node: DOMElementType): void;
/**
 * Used for aria-label attributes, painting on a canvas will fail if the
 * text contains tags.
 * @private
 */
declare function stripHTMLTagsFromString(str: string, isForExport?: boolean): string;
/**
 * Utility function for hiding an element visually, but still keeping it
 * available to screen reader users.
 * @private
 */
declare function visuallyHideElement(element: HTMLDOMElement): void;
declare const HTMLUtilities: {
    addClass: typeof addClass;
    cloneMouseEvent: typeof cloneMouseEvent;
    cloneTouchEvent: typeof cloneTouchEvent;
    escapeStringForHTML: typeof escapeStringForHTML;
    getElement: typeof getElement;
    getFakeMouseEvent: typeof getFakeMouseEvent;
    getHeadingTagNameForElement: typeof getHeadingTagNameForElement;
    removeChildNodes: typeof removeChildNodes;
    removeClass: typeof removeClass;
    removeElement: typeof removeElement;
    reverseChildNodes: typeof reverseChildNodes;
    simulatedEventTarget: EventTarget;
    stripHTMLTagsFromString: typeof stripHTMLTagsFromString;
    visuallyHideElement: typeof visuallyHideElement;
};
export default HTMLUtilities;

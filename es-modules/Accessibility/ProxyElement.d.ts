import type Accessibility from './Accessibility';
import type { DOMElementType, HTMLDOMElement } from '../Core/Renderer/DOMElementType';
import type HTMLAttributes from '../Core/Renderer/HTML/HTMLAttributes';
import type HTMLElement from '../Core/Renderer/HTML/HTMLElement';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
export type NullableHTMLAttributes = Nullable<HTMLAttributes>;
/**
 * Represents a proxy element that overlays a target and relays events
 * to its target.
 *
 * @private
 * @class
 */
declare class ProxyElement {
    private chart;
    target: ProxyElement.Target;
    /**
     * The proxy element that receives the proxied events.
     */
    innerElement: HTMLDOMElement;
    /**
     * The entire proxy HTML element container. Note: If the proxy element is
     * not wrapped, this refers to the same element as innerElement.
     */
    element: HTMLDOMElement;
    private eventProvider;
    constructor(chart: Accessibility.ChartComposition, target: ProxyElement.Target, proxyElementType?: keyof HTMLElementTagNameMap, wrapperElementType?: keyof HTMLElementTagNameMap, attributes?: NullableHTMLAttributes);
    /**
     * Fake a click event on the target.
     */
    click(): void;
    /**
     * Update the target to be proxied. The position and events are updated to
     * match the new target.
     * @param {object} target The new target definition
     * @param {object} attributes New HTML attributes to apply to the proxy. Set an
     * attribute to null to remove.
     */
    updateTarget(target: ProxyElement.Target, attributes?: NullableHTMLAttributes): void;
    /**
     * Refresh the position of the proxy element to match the current target
     */
    refreshPosition(): void;
    /**
     * Remove button from DOM, and clear events.
     */
    remove(): void;
    /**
     * Update the CSS class name to match target
     */
    private updateCSSClassName;
    /**
     * Mirror events for a proxy element to a target
     */
    private addProxyEventsToElement;
    /**
     * Set visually hidden style on a proxy element
     */
    private hideElementVisually;
    /**
     * Get the position relative to chart container for the target
     */
    private getTargetPosition;
    /**
     * Get an attribute value of a target
     */
    private getTargetAttr;
}
declare namespace ProxyElement {
    interface Target {
        click: (DOMElementType | SVGElement | HTMLElement);
        visual?: DOMElementType;
    }
}
export default ProxyElement;

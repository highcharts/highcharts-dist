import type Accessibility from './Accessibility';
import type HTMLAttributes from '../Core/Renderer/HTML/HTMLAttributes';
import type { NullableHTMLAttributes } from './ProxyElement';
import ProxyElement from './ProxyElement.js';
/**
 * Keeps track of all proxy elements and proxy groups.
 *
 * @private
 * @class
 */
declare class ProxyProvider {
    private chart;
    private afterChartProxyPosContainer;
    private beforeChartProxyPosContainer;
    private domElementProvider;
    private groupOrder;
    private groups;
    constructor(chart: Accessibility.ChartComposition);
    /**
     * Add a new proxy element to a group, proxying a target control.
     */
    addProxyElement(groupKey: string, target: ProxyElement.Target, proxyElementType?: keyof HTMLElementTagNameMap, attributes?: NullableHTMLAttributes): ProxyElement;
    /**
     * Create a group that will contain proxy elements. The group order is
     * automatically updated according to the last group order keys.
     *
     * Returns the added group.
     */
    addGroup(groupKey: string, groupElementType?: keyof HTMLElementTagNameMap, attributes?: HTMLAttributes): HTMLElement;
    /**
     * Update HTML attributes of a group.
     */
    updateGroupAttrs(groupKey: string, attributes: HTMLAttributes): void;
    /**
     * Reorder the proxy groups.
     *
     * The group key "series" refers to the chart's data points / <svg> element.
     * This is so that the keyboardNavigation.order option can be used to
     * determine the proxy group order.
     */
    updateGroupOrder(groupKeys: string[]): void;
    /**
     * Remove all proxy elements in a group
     */
    clearGroup(groupKey: string): void;
    /**
     * Remove a group from the DOM and from the proxy provider's group list.
     * All child elements are removed.
     * If the group does not exist, nothing happens.
     */
    removeGroup(groupKey: string): void;
    /**
     * Update the position and order of all proxy groups and elements
     */
    update(): void;
    /**
     * Update all proxy element positions
     */
    updateProxyElementPositions(): void;
    /**
     * Update a group's proxy elements' positions.
     * If the group does not exist, nothing happens.
     */
    updateGroupProxyElementPositions(groupKey: string): void;
    /**
     * Remove all added elements
     */
    destroy(): void;
    /**
     * Create and return a pos container element (the overall containers for
     * the proxy groups).
     */
    private createProxyPosContainer;
    /**
     * Get an array of group keys that corresponds to the current group order
     * in the DOM.
     */
    private getCurrentGroupOrderInDOM;
    /**
     * Check if the current DOM order matches the current group order, so that
     * a reordering/update is unnecessary.
     */
    private isDOMOrderGroupOrder;
    /**
     * Update the DOM positions of the before/after proxy
     * positioning containers for the groups.
     */
    private updatePosContainerPositions;
}
export default ProxyProvider;

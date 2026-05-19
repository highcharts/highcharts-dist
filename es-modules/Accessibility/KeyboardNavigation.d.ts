import type Accessibility from './Accessibility';
import type { DOMElementType, HTMLDOMElement } from '../Core/Renderer/DOMElementType';
import type KeyboardNavigationHandler from './KeyboardNavigationHandler';
import Chart from '../Core/Chart/Chart.js';
import MenuComponent from './Components/MenuComponent.js';
import EventProvider from './Utils/EventProvider.js';
/**
 * The KeyboardNavigation class, containing the overall keyboard navigation
 * logic for the chart.
 *
 * @requires modules/accessibility
 *
 * @private
 * @class
 * @param {Highcharts.Chart} chart
 *        Chart object
 * @param {Object} components
 *        Map of component names to AccessibilityComponent objects.
 * @name Highcharts.KeyboardNavigation
 */
declare class KeyboardNavigation {
    constructor(chart: Chart, components: Accessibility.ComponentsObject);
    chart: Chart;
    components: Accessibility.ComponentsObject;
    currentModuleIx: number;
    eventProvider: EventProvider;
    exitAnchor?: DOMElementType;
    exiting?: boolean;
    isClickingChart?: boolean;
    keyboardReset?: boolean;
    modules: Array<KeyboardNavigationHandler>;
    tabindexContainer: HTMLDOMElement;
    tabbingInBackwards?: boolean;
    /**
     * Initialize the class
     * @private
     * @param {Highcharts.Chart} chart
     *        Chart object
     * @param {Object} components
     *        Map of component names to AccessibilityComponent objects.
     */
    init(chart: Chart, components: Accessibility.ComponentsObject): void;
    /**
     * Update the modules for the keyboard navigation.
     * @param {Array<string>} [order]
     *        Array specifying the tab order of the components.
     */
    update(order?: Array<(keyof Accessibility.ComponentsObject)>): void;
    /**
     * We use an exit anchor to move focus out of chart whenever we want, by
     * setting focus to this div and not preventing the default tab action. We
     * also use this when users come back into the chart by tabbing back, in
     * order to navigate from the end of the chart.
     * @private
     */
    updateExitAnchor(): void;
    /**
     * Move to prev/next module.
     * @private
     * @param {number} direction
     * Direction to move. +1 for next, -1 for prev.
     * @return {boolean}
     * True if there was a valid module in direction.
     */
    move(direction: number): boolean;
    /**
     * Function to run on container focus
     * @private
     * @param {global.FocusEvent} e Browser focus event.
     */
    private onFocus;
    /**
     * Reset chart navigation state if we mouse click and it's not already
     * reset. Reset fully if outside the chart, otherwise just hide focus
     * indicator.
     * @private
     */
    private onMouseUp;
    /**
     * Function to run on keydown
     * @private
     * @param {global.KeyboardEvent} ev Browser keydown event.
     */
    private onKeydown;
    /**
     * Chart container should have tabindex if navigation is enabled.
     * @private
     */
    private updateContainerTabindex;
    /**
     * Add new exit anchor to the chart.
     * @private
     */
    private createExitAnchor;
    /**
     * Add attributes and events to an element to make it function as an
     * exit anchor.
     * @private
     */
    private makeElementAnExitAnchor;
    /**
     * Destroy the exit anchor and remove from DOM.
     * @private
     */
    private removeExitAnchor;
    /**
     * Add focus handler to exit anchor element.
     * @private
     */
    private addExitAnchorEventsToEl;
    /**
     * Get the ix of the first module that either does not require validation or
     * validates positively.
     * @private
     */
    private getFirstValidModuleIx;
    /**
     * Remove all traces of keyboard navigation.
     * @private
     */
    destroy(): void;
}
declare namespace KeyboardNavigation {
    class ChartComposition extends MenuComponent.ChartComposition {
        dismissPopupContent(): void;
    }
    /**
     * Composition function.
     * @private
     */
    function compose<T extends typeof Chart>(ChartClass: T): (T & typeof ChartComposition);
}
export default KeyboardNavigation;

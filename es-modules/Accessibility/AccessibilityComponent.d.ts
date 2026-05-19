import type Accessibility from './Accessibility';
import type { EventCallback } from '../Core/Callback';
import type { DOMElementType } from '../Core/Renderer/DOMElementType';
import type HTMLElement from '../Core/Renderer/HTML/HTMLElement';
import type KeyboardNavigationHandler from './KeyboardNavigationHandler';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type ProxyProvider from './ProxyProvider';
import type { EventOptions } from '../Shared/Utilities.js';
import DOMElementProvider from './Utils/DOMElementProvider.js';
import EventProvider from './Utils/EventProvider.js';
/**
 * The AccessibilityComponent base class, representing a part of the chart that
 * has accessibility logic connected to it. This class can be inherited from to
 * create a custom accessibility component for a chart.
 *
 * Components should take care to destroy added elements and unregister event
 * handlers on destroy. This is handled automatically if using `this.addEvent`
 * and `this.createElement`.
 *
 * @sample highcharts/accessibility/custom-component
 *         Custom accessibility component
 *
 * @requires modules/accessibility
 * @class
 * @name Highcharts.AccessibilityComponent
 */
declare class AccessibilityComponent {
    chart: Accessibility.ChartComposition;
    domElementProvider: DOMElementProvider;
    eventProvider: EventProvider;
    keyCodes: Record<string, number>;
    proxyProvider: ProxyProvider;
    /**
     * Called when accessibility is disabled or chart is destroyed.
     *
     * @function Highcharts.AccessibilityComponent#destroy
     */
    destroy(): void;
    /**
     * Get keyboard navigation handler for this component.
     *
     * @function Highcharts.AccessibilityComponent#getKeyboardNavigation
     * @return   {Highcharts.KeyboardNavigationHandler|Array<Highcharts.KeyboardNavigationHandler>}
     *           The keyboard navigation handler(s) for this component.
     */
    getKeyboardNavigation(): (KeyboardNavigationHandler | Array<KeyboardNavigationHandler>);
    /**
     * Called on component initialization.
     *
     * @function Highcharts.AccessibilityComponent#init
     */
    init(): void;
    /**
     * Called on every chart render.
     *
     * @function Highcharts.AccessibilityComponent#onChartRender
     */
    onChartRender(): void;
    /**
     * Called on updates to the chart, including options changes.
     * Note that this is also called on first render of chart.
     *
     * @function Highcharts.AccessibilityComponent#onChartUpdate
     */
    onChartUpdate(): void;
    /**
     * Initialize the class
     * @private
     * @param {Highcharts.Chart} chart The chart object
     * @param {Highcharts.ProxyProvider} proxyProvider The proxy provider of the accessibility module
     */
    initBase(chart: Accessibility.ChartComposition, proxyProvider: ProxyProvider): void;
    /**
     * Add an event to an element and keep track of it for later removal.
     * See EventProvider for details.
     * @private
     */
    addEvent<T>(el: (T | Class<T>), type: string, fn: (Function | EventCallback<T>), options?: EventOptions): Function;
    /**
     * Create an element and keep track of it for later removal.
     * See DOMElementProvider for details.
     * @private
     */
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    /**
     * Fire a fake click event on an element. It is useful to have this on
     * AccessibilityComponent for users of custom components.
     * @private
     */
    fakeClickEvent(el: (HTMLElement | SVGElement | DOMElementType)): void;
    /**
     * Remove traces of the component.
     * @private
     */
    destroyBase(): void;
}
export default AccessibilityComponent;

import type { DOMElementType } from '../../Core/Renderer/DOMElementType';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type ProxyElement from '../ProxyElement';
import AccessibilityComponent from '../AccessibilityComponent.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
/**
 * The ZoomComponent class
 *
 * @private
 * @class
 * @name Highcharts.ZoomComponent
 */
declare class ZoomComponent extends AccessibilityComponent {
    drillUpProxyButton?: ProxyElement;
    resetZoomProxyButton?: ProxyElement;
    focusedMapNavButtonIx: number;
    /**
     * Initialize the component
     */
    init(): void;
    /**
     * Called when chart is updated
     */
    onChartUpdate(): void;
    /**
     * @private
     * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} button
     * @param {string} labelFormatKey
     */
    setMapNavButtonAttrs(button: DOMElementType, labelFormatKey: string): void;
    /**
     * Update the proxy overlays on every new render to ensure positions are
     * correct.
     */
    onChartRender(): void;
    /**
     * Update proxy overlays, recreating the buttons.
     */
    updateProxyOverlays(): void;
    /**
     * @private
     * @param {Highcharts.SVGElement} buttonEl
     * @param {string} buttonProp
     * @param {string} label
     */
    createZoomProxyButton(buttonEl: SVGElement, buttonProp: ('drillUpProxyButton' | 'resetZoomProxyButton'), label: string): void;
    /**
     * Get keyboard navigation handler for map zoom.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object
     */
    getMapZoomNavigation(): KeyboardNavigationHandler;
    /**
     * Arrow key panning for maps.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler The handler context.
     * @param {number} keyCode Key pressed.
     * @return {number} Response code
     */
    onMapKbdArrow(keyboardNavigationHandler: KeyboardNavigationHandler, keyCode: number): number;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @param {global.KeyboardEvent} event
     * @return {number} Response code
     */
    onMapKbdTab(keyboardNavigationHandler: KeyboardNavigationHandler, event: KeyboardEvent): number;
    /**
     * Called on map button click.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler The handler context object
     * @return {number} Response code
     */
    onMapKbdClick(keyboardNavigationHandler: KeyboardNavigationHandler): number;
    /**
     * @private
     * @param {number} direction
     */
    onMapNavInit(direction: number): void;
    /**
     * Get keyboard navigation handler for a simple chart button. Provide the
     * button reference for the chart, and a function to call on click.
     *
     * @private
     * @param {string} buttonProp The property on chart referencing the button.
     * @return {Highcharts.KeyboardNavigationHandler} The module object
     */
    simpleButtonNavigation(buttonProp: string, proxyProp: string, onClick: Function): KeyboardNavigationHandler;
    /**
     * Get keyboard navigation handlers for this component.
     * @return {Array<Highcharts.KeyboardNavigationHandler>}
     *         List of module objects
     */
    getKeyboardNavigation(): Array<KeyboardNavigationHandler>;
}
export default ZoomComponent;

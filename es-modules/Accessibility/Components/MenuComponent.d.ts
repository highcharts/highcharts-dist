import type Accessibility from '../Accessibility';
import type ProxyElement from '../ProxyElement';
import Chart from '../../Core/Chart/Chart.js';
import AccessibilityComponent from '../AccessibilityComponent.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
/**
 * The MenuComponent class
 *
 * @private
 * @class
 * @name Highcharts.MenuComponent
 */
declare class MenuComponent extends AccessibilityComponent {
    exportButtonProxy?: ProxyElement;
    /**
     * Init the component
     */
    init(): void;
    /**
     * @private
     */
    onMenuHidden(): void;
    /**
     * @private
     */
    onMenuShown(): void;
    /**
     * @private
     * @param {string} stateStr
     */
    setExportButtonExpandedState(stateStr: string): void;
    /**
     * Called on each render of the chart. We need to update positioning of the
     * proxy overlay.
     */
    onChartRender(): void;
    /**
     * @private
     */
    proxyMenuButton(): void;
    /**
     * @private
     */
    createProxyGroup(): void;
    /**
     * @private
     */
    addAccessibleContextMenuAttribs(): void;
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    getKeyboardNavigation(): KeyboardNavigationHandler;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    onKbdPrevious(keyboardNavigationHandler: KeyboardNavigationHandler): number;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    onKbdNext(keyboardNavigationHandler: KeyboardNavigationHandler): number;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    onKbdClick(keyboardNavigationHandler: KeyboardNavigationHandler): number;
}
interface MenuComponent {
    chart: MenuComponent.ChartComposition;
}
declare namespace MenuComponent {
    class ChartComposition extends Accessibility.ChartComposition {
        highlightedExportItemIx?: number;
        /** @requires modules/accessibility */
        hideExportMenu(): void;
        /** @requires modules/accessibility */
        highlightExportItem(ix: number): (boolean | undefined);
        /** @requires modules/accessibility */
        highlightLastExportItem(): boolean;
        /** @requires modules/accessibility */
        showExportMenu(): void;
    }
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart): void;
}
export default MenuComponent;

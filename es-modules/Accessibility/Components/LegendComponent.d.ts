import type Accessibility from '../Accessibility';
import type Chart from '../../Core/Chart/Chart.js';
import type ProxyElement from '../ProxyElement';
import Legend from '../../Core/Legend/Legend.js';
import AccessibilityComponent from '../AccessibilityComponent.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
declare module '../../Core/Legend/LegendItem' {
    interface LegendItem {
        a11yProxyElement?: ProxyElement;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        a11yProxyElement?: ProxyElement;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        a11yProxyElement?: ProxyElement;
    }
}
/**
 * The LegendComponent class
 *
 * @private
 * @class
 * @name Highcharts.LegendComponent
 */
declare class LegendComponent extends AccessibilityComponent {
    highlightedLegendItemIx: number;
    private proxyGroup;
    /**
     * Init the component
     * @private
     */
    init(): void;
    /**
     * Update visibility of legend items when using paged legend
     * @private
     */
    updateLegendItemProxyVisibility(): void;
    /**
     * @private
     */
    onChartRender(): void;
    /**
     * @private
     */
    highlightAdjacentLegendPage(direction: number): void;
    /**
     * @private
     */
    updateProxyPositionForItem(item: Legend.Item): void;
    /**
     * Returns false if legend a11y is disabled and proxies were not created,
     * true otherwise.
     * @private
     */
    recreateProxies(): boolean;
    /**
     * @private
     */
    removeProxies(): void;
    /**
     * @private
     */
    updateLegendTitle(): void;
    /**
     * @private
     */
    addLegendProxyGroup(): void;
    /**
     * @private
     */
    proxyLegendItems(): void;
    /**
     * @private
     * @param {Highcharts.BubbleLegendItem|Point|Highcharts.Series} item
     */
    proxyLegendItem(item: Legend.Item): void;
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    getKeyboardNavigation(): KeyboardNavigationHandler;
    /**
     * Arrow key navigation
     * @private
     */
    onKbdArrowKey(keyboardNavigationHandler: KeyboardNavigationHandler, key: number): number;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} keyboardNavigationHandler
     * @return {number} Response code
     */
    onKbdClick(keyboardNavigationHandler: KeyboardNavigationHandler): number;
    /**
     * @private
     */
    shouldHaveLegendNavigation(): boolean;
    /**
     * Clean up
     * @private
     */
    destroy(): void;
}
interface LegendComponent {
    chart: LegendComponent.ChartComposition;
}
declare namespace LegendComponent {
    class ChartComposition extends Accessibility.ChartComposition {
        highlightedLegendItemIx?: number;
        /** @requires modules/accessibility */
        highlightLegendItem(ix: number): boolean;
    }
    class LegendComposition extends Legend {
        chart: ChartComposition;
    }
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, LegendClass: typeof Legend): void;
}
export default LegendComponent;

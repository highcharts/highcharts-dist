import type { SVGDOMElement } from '../../Core/Renderer/DOMElementType';
import AccessibilityComponent from '../AccessibilityComponent.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
/**
 * The ContainerComponent class
 *
 * @private
 * @class
 * @name Highcharts.ContainerComponent
 */
declare class ContainerComponent extends AccessibilityComponent {
    svgTitleElement?: SVGDOMElement;
    /**
     * Called on first render/updates to the chart, including options changes.
     */
    onChartUpdate(): void;
    /**
     * @private
     */
    handleSVGTitleElement(): void;
    /**
     * @private
     */
    setSVGContainerLabel(): void;
    /**
     * @private
     */
    setGraphicContainerAttrs(): void;
    /**
     * Set attributes on the chart container element.
     * @private
     */
    setRenderToAttrs(): void;
    /**
     * @private
     */
    makeCreditsAccessible(): void;
    /**
     * Empty handler to just set focus on chart
     * @private
     */
    getKeyboardNavigation(): KeyboardNavigationHandler;
    /**
     * Accessibility disabled/chart destroyed.
     */
    destroy(): void;
}
export default ContainerComponent;

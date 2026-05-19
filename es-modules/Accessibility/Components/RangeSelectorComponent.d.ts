import type Accessibility from '../Accessibility';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import AccessibilityComponent from '../AccessibilityComponent.js';
import Announcer from '../Utils/Announcer.js';
import Chart from '../../Core/Chart/Chart.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
import RangeSelector from '../../Stock/RangeSelector/RangeSelector.js';
/**
 * The RangeSelectorComponent class
 *
 * @private
 * @class
 * @name Highcharts.RangeSelectorComponent
 */
declare class RangeSelectorComponent extends AccessibilityComponent {
    announcer: Announcer;
    removeDropdownKeydownHandler?: Function;
    removeInputKeydownHandler?: Function;
    /**
     * Init the component
     * @private
     */
    init(): void;
    /**
     * Called on first render/updates to the chart, including options changes.
     */
    onChartUpdate(): void;
    /**
     * Hide buttons from AT when showing dropdown, and vice versa.
     * @private
     */
    updateSelectorVisibility(): void;
    /**
     * Set accessibility related attributes on dropdown element.
     * @private
     */
    setDropdownAttrs(): void;
    /**
     * Set attrs for a range button
     * @private
     */
    setRangeButtonAttrs(button: SVGElement): void;
    /**
     * Set attrs for a date input
     * @private
     */
    setRangeInputAttrs(input: HTMLDOMElement, langKey: string): void;
    /**
     * Handle arrow key nav
     * @private
     */
    onButtonNavKbdArrowKey(keyboardNavigationHandler: KeyboardNavigationHandler, keyCode: number): number;
    /**
     * Handle keyboard click
     * @private
     */
    onButtonNavKbdClick(keyboardNavigationHandler: KeyboardNavigationHandler): number;
    /**
     * Called whenever a range selector button has been clicked, either by
     * mouse, touch, or kbd/voice/other.
     * @private
     */
    onAfterBtnClick(): void;
    /**
     * Handle move between input elements with Tab key
     * @private
     */
    onInputKbdMove(direction: number): boolean;
    /**
     * Init date input navigation
     * @private
     */
    onInputNavInit(direction: number): void;
    /**
     * Terminate date input nav
     * @private
     */
    onInputNavTerminate(): void;
    /**
     * Init range selector dropdown nav
     * @private
     */
    initDropdownNav(): void;
    /**
     * Get navigation for the range selector buttons.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object.
     */
    getRangeSelectorButtonNavigation(): KeyboardNavigationHandler;
    /**
     * Get navigation for the range selector input boxes.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler}
     *         The module object.
     */
    getRangeSelectorInputNavigation(): KeyboardNavigationHandler;
    /**
     * Get keyboard navigation handlers for this component.
     * @return {Array<Highcharts.KeyboardNavigationHandler>}
     *         List of module objects.
     */
    getKeyboardNavigation(): Array<KeyboardNavigationHandler>;
    /**
     * Remove component traces
     */
    destroy(): void;
}
interface RangeSelectorComponent {
    chart: RangeSelectorComponent.ChartComposition;
}
declare namespace RangeSelectorComponent {
    class ChartComposition extends Accessibility.ChartComposition {
        highlightedInputRangeIx?: number;
        highlightedRangeSelectorItemIx?: number;
        oldRangeSelectorItemState?: number;
        /** @requires modules/accessibility */
        highlightRangeSelectorButton(ix: number): boolean;
    }
    /**
     * Build compositions
     * @private
     */
    function compose(ChartClass: typeof Chart, RangeSelectorClass: typeof RangeSelector): void;
}
export default RangeSelectorComponent;

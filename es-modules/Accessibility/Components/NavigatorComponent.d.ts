import AccessibilityComponent from '../AccessibilityComponent.js';
import KeyboardNavigationHandler from '../KeyboardNavigationHandler.js';
/**
 * The NavigatorComponent class
 *
 * @private
 * @class
 * @name Highcharts.NavigatorComponent
 */
declare class NavigatorComponent extends AccessibilityComponent {
    private announcer;
    private minHandleProxy?;
    private maxHandleProxy?;
    private updateNavigatorThrottleTimer?;
    /**
     * Init the component
     * @private
     */
    init(): void;
    /**
     * Called on updates
     * @private
     */
    onChartUpdate(): void;
    /**
     * Get navigation for a navigator handle.
     * @private
     * @return {Highcharts.KeyboardNavigationHandler} The module object.
     */
    getNavigatorHandleNavigation(handleIx: number): KeyboardNavigationHandler;
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
    /**
     * Update the value of the handles to match current navigator pos.
     * @private
     */
    private updateHandleValues;
    /**
     * Get a navigator handle by its index
     * @private
     */
    private getHandleByIx;
    /**
     * Update navigator to match changed proxy values.
     * @private
     */
    private updateNavigator;
}
export default NavigatorComponent;

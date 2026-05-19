import type Chart from '../../../Core/Chart/Chart';
import type KeyboardNavigationHandler from '../../KeyboardNavigationHandler';
import type Point from '../../../Core/Series/Point';
import AccessibilityComponent from '../../AccessibilityComponent.js';
import NewDataAnnouncer from './NewDataAnnouncer.js';
import Series from '../../../Core/Series/Series.js';
import SeriesKeyboardNavigation from './SeriesKeyboardNavigation.js';
/**
 * The SeriesComponent class
 *
 * @private
 * @class
 * @name Highcharts.SeriesComponent
 */
declare class SeriesComponent extends AccessibilityComponent {
    /**
     * @private
     */
    static compose(ChartClass: typeof Chart, PointClass: typeof Point, SeriesClass: typeof Series): void;
    keyboardNavigation?: SeriesKeyboardNavigation;
    newDataAnnouncer?: NewDataAnnouncer;
    /**
     * Init the component.
     */
    init(): void;
    /**
     * @private
     */
    hideTooltipFromATWhenShown(): void;
    /**
     * @private
     */
    hideSeriesLabelsFromATWhenShown(): void;
    /**
     * Called on chart render. It is necessary to do this for render in case
     * markers change on zoom/pixel density.
     */
    onChartRender(): void;
    /**
     * Get keyboard navigation handler for this component.
     * @private
     */
    getKeyboardNavigation(): KeyboardNavigationHandler;
    /**
     * Remove traces
     * @private
     */
    destroy(): void;
}
interface SeriesComponent {
    chart: SeriesKeyboardNavigation.ChartComposition;
}
export default SeriesComponent;

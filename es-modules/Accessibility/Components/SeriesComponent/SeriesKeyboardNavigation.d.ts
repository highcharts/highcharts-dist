import type Accessibility from '../../Accessibility';
import Chart from '../../../Core/Chart/Chart.js';
import Point from '../../../Core/Series/Point.js';
import Series from '../../../Core/Series/Series.js';
import KeyboardNavigationHandler from '../../KeyboardNavigationHandler.js';
import EventProvider from '../../Utils/EventProvider.js';
declare module '../../../Core/Chart/ChartBase' {
    interface ChartBase {
        highlightedPoint?: Point;
    }
}
declare module '../../../Core/Series/SeriesBase' {
    interface SeriesBase {
        /** @requires modules/accessibility */
        keyboardMoveVertical?: boolean;
    }
}
/**
 * @private
 * @class
 * @name Highcharts.SeriesKeyboardNavigation
 */
declare class SeriesKeyboardNavigation {
    constructor(chart: SeriesKeyboardNavigation.ChartComposition, keyCodes: Record<string, number>);
    chart: SeriesKeyboardNavigation.ChartComposition;
    eventProvider?: EventProvider;
    keyCodes: Record<string, number>;
    lastDrilledDownPoint?: SeriesKeyboardNavigation.DrilldownObject;
    /**
     * Init the keyboard navigation
     */
    init(): void;
    /**
     * After drillup we want to find the point that was drilled down to and
     * highlight it.
     * @private
     */
    onDrillupAll(): void;
    /**
     * @private
     */
    getKeyboardNavigationHandler(): KeyboardNavigationHandler;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler
     * @param {number} keyCode
     * @return {number}
     * response
     */
    onKbdSideways(handler: KeyboardNavigationHandler, keyCode: number): number;
    /**
     * When keyboard navigation inits.
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler The handler object
     * @return {number}
     * response
     */
    onHandlerInit(handler: KeyboardNavigationHandler): number;
    /**
     * @private
     * @param {Highcharts.KeyboardNavigationHandler} handler
     * @param {number} keyCode
     * @return {number}
     * response
     */
    onKbdVertical(handler: KeyboardNavigationHandler, keyCode: number): number;
    /**
     * @private
     */
    onHandlerTerminate(): void;
    /**
     * Function that attempts to highlight next/prev point. Handles wrap around.
     * @private
     */
    attemptHighlightAdjacentPoint(handler: KeyboardNavigationHandler, directionIsNext: boolean): number;
    /**
     * @private
     */
    onSeriesDestroy(series: Series): void;
    /**
     * @private
     */
    destroy(): void;
}
declare namespace SeriesKeyboardNavigation {
    class ChartComposition extends Accessibility.ChartComposition {
        highlightedPoint?: PointComposition;
        series: Array<SeriesComposition>;
        highlightAdjacentPoint(next: boolean): (boolean | PointComposition);
        highlightAdjacentPointVertical(down: boolean): (boolean | PointComposition);
        highlightAdjacentSeries(down: boolean): (boolean | PointComposition);
    }
    interface DrilldownObject {
        x: (number | null);
        y: (number | null | undefined);
        seriesName: string;
    }
    class PointComposition extends Accessibility.PointComposition {
        series: SeriesComposition;
        highlight(highlightVisually?: boolean): PointComposition;
    }
    class SeriesComposition extends Accessibility.SeriesComposition {
        chart: ChartComposition;
        data: Array<PointComposition>;
        pointClass: typeof PointComposition;
        points: Array<PointComposition>;
        highlightNextValidPoint(): (boolean | PointComposition);
    }
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, PointClass: typeof Point, SeriesClass: typeof Series): void;
}
export default SeriesKeyboardNavigation;

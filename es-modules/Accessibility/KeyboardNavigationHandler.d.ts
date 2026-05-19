import type Chart from '../Core/Chart/Chart';
/**
 * Define a keyboard navigation handler for use with a
 * Highcharts.AccessibilityComponent instance. This functions as an abstraction
 * layer for keyboard navigation, and defines a map of keyCodes to handler
 * functions.
 *
 * @requires modules/accessibility
 *
 * @sample highcharts/accessibility/custom-component
 *         Custom accessibility component
 *
 * @class
 * @name Highcharts.KeyboardNavigationHandler
 *
 * @param {Highcharts.Chart} chart
 * The chart this module should act on.
 *
 * @param {Highcharts.KeyboardNavigationHandlerOptionsObject} options
 * Options for the keyboard navigation handler.
 */
declare class KeyboardNavigationHandler {
    constructor(chart: Chart, options: KeyboardNavigationHandler.Options);
    chart: Chart;
    init: Function;
    keyCodeMap: Array<[Array<number>, Function]>;
    response: Record<string, number>;
    terminate?: Function;
    validate?: Function;
    /**
     * Find handler function(s) for key code in the keyCodeMap and run it.
     *
     * @function KeyboardNavigationHandler#run
     * @param {global.KeyboardEvent} e
     * @return {number} Returns a response code indicating whether the run was
     *      a success/fail/unhandled, or if we should move to next/prev module.
     */
    run(e: KeyboardEvent): number;
}
declare namespace KeyboardNavigationHandler {
    interface Options {
        keyCodeMap: Array<[Array<number>, Function]>;
        init: Function;
        terminate?: Function;
        validate?: Function;
    }
}
export default KeyboardNavigationHandler;

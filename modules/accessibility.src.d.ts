/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface Chart {
        /**
         * Apply context to a format string from lang options of the chart.
         *
         * @param langKey
         *        Key (using dot notation) into lang option structure.
         *
         * @param context
         *        Context to apply to the format string.
         *
         * @return The formatted string.
         */
        langFormat(langKey: string, context: Dictionary<any>): string;
    }
    interface PointAccessibilityOptionsObject {
        /**
         * Provide a description of the data point, announced to screen readers.
         */
        description?: string;
    }
    interface PointOptionsObject {
        accessibility?: PointAccessibilityOptionsObject;
        /**
         * A description of the point to add to the screen reader information
         * about the point. Requires the Accessibility module.
         */
        description?: string;
    }
    /**
     * The AccessibilityComponent base class, representing a part of the chart
     * that has accessibility logic connected to it. This class can be inherited
     * from to create a custom accessibility component for a chart.
     *
     * A component:
     *
     * - Must call initBase after inheriting.
     *
     * - Can override any of the following functions: init(), destroy(),
     * getKeyboardNavigation(), onChartUpdate().
     *
     * - Should take care to destroy added elements and unregister event
     * handlers on destroy.
     */
    class AccessibilityComponent {
        /**
         * Called when accessibility is disabled or chart is destroyed. Should
         * call destroyBase to make sure events/elements added are removed.
         */
        static destroy(): void;
        /**
         * Get keyboard navigation handler for this component.
         */
        static getKeyboardNavigation(): KeyboardNavigationHandler;
        /**
         * Initialize component.
         */
        static init(): void;
        /**
         * Called on every chart render.
         */
        static onChartRender(): void;
        /**
         * Called on updates to the chart, including options changes. Note that
         * this is also called on first render of chart.
         */
        static onChartUpdate(): void;
    }
    /**
     * Define a keyboard navigation handler for use with a
     * Highcharts.AccessibilityComponent instance. This functions as an
     * abstraction layer for keyboard navigation, and defines a map of keyCodes
     * to handler functions.
     */
    class KeyboardNavigationHandler {
        /**
         * Define a keyboard navigation handler for use with a
         * Highcharts.AccessibilityComponent instance. This functions as an
         * abstraction layer for keyboard navigation, and defines a map of
         * keyCodes to handler functions.
         *
         * @param chart
         *        The chart this module should act on.
         *
         * @param keyCodeMap
         *        An array containing pairs of an array of keycodes, mapped to a
         *        handler function. When the keycode is received, the handler is
         *        called with the keycode as parameter.
         *
         * @param init
         *        Function to run on initialization of module
         *
         * @param validate
         *        Function to run to validate module. Should return false if
         *        module should not run, true otherwise. Receives chart as
         *        parameter.
         *
         * @param terminate
         *        Function to run before moving to next/prev module. Receives
         *        moving direction as parameter: +1 for next, -1 for previous.
         */
        constructor(chart: Chart, options: object, keyCodeMap: [Array<number>, Function], init?: Function, validate?: Function, terminate?: Function);
    }
    /**
     * i18n formatting function. Extends Highcharts.format() functionality by
     * also handling arrays and plural conditionals. Arrays can be indexed as
     * follows:
     *
     * - Format: 'This is the first index: {myArray[0]}. The last:
     * {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3, 4, 5] }
     *
     * - Result: 'This is the first index: 0. The last: 5.'
     *
     * They can also be iterated using the #each() function. This will repeat
     * the contents of the bracket expression for each element. Example:
     *
     * - Format: 'List contains: {#each(myArray)cm }'
     *
     * - Context: { myArray: [0, 1, 2] }
     *
     * - Result: 'List contains: 0cm 1cm 2cm '
     *
     * The #each() function optionally takes a length parameter. If positive,
     * this parameter specifies the max number of elements to iterate through.
     * If negative, the function will subtract the number from the length of the
     * array. Use this to stop iterating before the array ends. Example:
     *
     * - Format: 'List contains: {#each(myArray, -1) }and {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3] }
     *
     * - Result: 'List contains: 0, 1, 2, and 3.'
     *
     * Use the #plural() function to pick a string depending on whether or not a
     * context object is 1. Arguments are #plural(obj, plural, singular).
     * Example:
     *
     * - Format: 'Has {numPoints} {#plural(numPoints, points, point}.'
     *
     * - Context: { numPoints: 5 }
     *
     * - Result: 'Has 5 points.'
     *
     * Optionally there are additional parameters for dual and none:
     * #plural(obj, plural, singular, dual, none). Example:
     *
     * - Format: 'Has {#plural(numPoints, many points, one point, two points,
     * none}.'
     *
     * - Context: { numPoints: 2 }
     *
     * - Result: 'Has two points.'
     *
     * The dual or none parameters will take precedence if they are supplied.
     *
     * @param formatString
     *        The string to format.
     *
     * @param context
     *        Context to apply to the format string.
     *
     * @param time
     *        A `Time` instance for date formatting, passed on to H.format().
     *
     * @return The formatted string.
     */
    function i18nFormat(formatString: string, context: Dictionary<any>, time: Time): string;
}
export default factory;
export let Highcharts: typeof _Highcharts;

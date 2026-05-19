import type Time from '../Core/Time';
import Chart from '../Core/Chart/Chart.js';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase extends A11yI18nComposition.ChartComposition {
    }
}
declare namespace A11yI18nComposition {
    class ChartComposition {
        /** @requires modules/accessibility */
        langFormat(langKey: string, context: AnyRecord, time?: Time): string;
    }
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart): void;
    /**
     * i18n formatting function.  Extends Highcharts.format() functionality by
     * also handling arrays and plural conditionals.  Arrays can be indexed as
     * follows:
     *
     * - Format: 'This is the first index: {myArray[0]}. The last: {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3, 4, 5] }
     *
     * - Result: 'This is the first index: 0. The last: 5.'
     *
     *
     * They can also be iterated using the #each() function.  This will repeat
     * the contents of the bracket expression for each element.  Example:
     *
     * - Format: 'List contains: {#each(myArray)cm }'
     *
     * - Context: { myArray: [0, 1, 2] }
     *
     * - Result: 'List contains: 0cm 1cm 2cm '
     *
     *
     * The #each() function optionally takes a length parameter.  If positive,
     * this parameter specifies the max number of elements to iterate through.
     * If negative, the function will subtract the number from the length of the
     * array.  Use this to stop iterating before the array ends.  Example:
     *
     * - Format: 'List contains: {#each(myArray, -1), }and {myArray[-1]}.'
     *
     * - Context: { myArray: [0, 1, 2, 3] }
     *
     * - Result: 'List contains: 0, 1, 2, and 3.'
     *
     *
     * Use the #plural() function to pick a string depending on whether or not a
     * context object is 1.  Arguments are #plural(obj, plural, singular).
     * Example:
     *
     * - Format: 'Has {numPoints} {#plural(numPoints, points, point}.'
     *
     * - Context: { numPoints: 5 }
     *
     * - Result: 'Has 5 points.'
     *
     *
     * Optionally there are additional parameters for dual and none:
     * #plural(obj, plural, singular, dual, none).  Example:
     *
     * - Format: 'Has {#plural(numPoints, many points, one point, two points,
     *   none}.'
     *
     * - Context: { numPoints: 2 }
     *
     * - Result: 'Has two points.'
     *
     *
     * The dual or none parameters will take precedence if they are supplied.
     *
     * @requires modules/accessibility
     *
     * @function Highcharts.i18nFormat
     *
     * @param {string} formatString
     * The string to format.
     *
     * @param {Highcharts.Dictionary<*>} context
     * Context to apply to the format string.
     *
     * @param {Highcharts.Chart} chart
     * A `Chart` instance with a time object and numberFormatter, passed on to
     * format().
     *
     * @deprecated
     *
     * @return {string}
     * The formatted string.
     */
    function i18nFormat(formatString: string, context: AnyRecord, chart: Chart): string;
}
export default A11yI18nComposition;

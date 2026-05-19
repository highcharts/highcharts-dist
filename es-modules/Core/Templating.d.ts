import type TimeBase from '../Shared/TimeBase';
import type { LangOptionsCore } from '../Shared/LangOptionsCore';
/**
 * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970) into a
 * human readable date string. The format is a subset of the formats for PHP's
 * [strftime](https://www.php.net/manual/en/function.strftime.php) function.
 * Additional formats can be given in the {@link Highcharts.dateFormats} hook.
 *
 * Since v6.0.5, all internal dates are formatted through the
 * {@link Highcharts.Chart#time} instance to respect chart-level time settings.
 * The `Highcharts.dateFormat` function only reflects global time settings set
 * with `setOptions`.
 *
 * Supported format keys:
 * - `%a`: Short weekday, like 'Mon'
 * - `%A`: Long weekday, like 'Monday'
 * - `%d`: Two digit day of the month, 01 to 31
 * - `%e`: Day of the month, 1 through 31
 * - `%w`: Day of the week, 0 through 6
 * - `%b`: Short month, like 'Jan'
 * - `%B`: Long month, like 'January'
 * - `%m`: Two digit month number, 01 through 12
 * - `%y`: Two digits year, like 09 for 2009
 * - `%Y`: Four digits year, like 2009
 * - `%H`: Two digits hours in 24h format, 00 through 23
 * - `%k`: Hours in 24h format, 0 through 23
 * - `%I`: Two digits hours in 12h format, 00 through 11
 * - `%l`: Hours in 12h format, 1 through 12
 * - `%M`: Two digits minutes, 00 through 59
 * - `%p`: Upper case AM or PM
 * - `%P`: Lower case AM or PM
 * - `%S`: Two digits seconds, 00 through 59
 * - `%L`: Milliseconds (naming from Ruby)
 *
 * @function Highcharts.dateFormat
 *
 * @param {string} format
 *        The desired format where various time representations are prefixed
 *        with `%`.
 *
 * @param {number} timestamp
 *        The JavaScript timestamp.
 *
 * @param {boolean} [upperCaseFirst=false]
 *        Upper case first letter in the return.
 *
 * @return {string}
 *         The formatted date.
 */
declare function dateFormat(format: string, timestamp: number, upperCaseFirst?: boolean): string;
/**
 * Format a string according to a subset of the rules of Python's String.format
 * method.
 *
 * @example
 * let s = Highcharts.format(
 *     'The {color} fox was {len:.2f} feet long',
 *     { color: 'red', len: Math.PI }
 * );
 * // => The red fox was 3.14 feet long
 *
 * @function Highcharts.format
 *
 * @param {string} str
 *        The string to format.
 *
 * @param {Record<string, *>} ctx
 *        The context, a collection of key-value pairs where each key is
 *        replaced by its value.
 *
 * @param {Highcharts.Chart} [owner]
 *        A `Chart` or `Grid` instance used to get numberFormatter and time.
 *
 * @return {string}
 *         The formatted string.
 */
declare function format(str: string | undefined, ctx: any, owner?: Templating.Owner): string;
/**
 * Format a number and return a string based on input settings.
 *
 * @sample highcharts/members/highcharts-numberformat/
 *         Custom number format
 *
 * @function Highcharts.numberFormat
 *
 * @param {number} number
 *        The input number to format.
 *
 * @param {number} decimals
 *        The amount of decimals. A value of -1 preserves the amount in the
 *        input number.
 *
 * @param {string} [decimalPoint]
 *        The decimal point, defaults to the one given in the lang options, or
 *        a dot.
 *
 * @param {string} [thousandsSep]
 *        The thousands separator, defaults to the one given in the lang
 *        options, or a space character.
 *
 * @return {string}
 *         The formatted number.
 */
declare function numberFormat(this: Templating.Owner | void, number: number, decimals: number, decimalPoint?: string, thousandsSep?: string): string;
declare const Templating: {
    dateFormat: typeof dateFormat;
    format: typeof format;
    helpers: Record<string, Function>;
    numberFormat: typeof numberFormat;
};
declare namespace Templating {
    interface FormatterCallback<T> {
        (this: T, ...args: Array<any>): string;
    }
    interface OwnerOptions {
        /**
         * Language options. See {@link Highcharts.LangOptions} for details.
         */
        lang?: LangOptionsCore;
    }
    interface Owner {
        /**
         * The chart options. See {@link Highcharts.Options} for details.
         */
        options?: OwnerOptions;
        /**
         * The time object. See {@link Highcharts.Time} for details.
         */
        time?: TimeBase;
        /**
         * A function to format numbers. See {@link Highcharts.numberFormat} for
         * details.
         */
        numberFormatter?: Function;
        /**
         * The locale to use for number formatting.
         */
        locale?: string | string[];
    }
}
export default Templating;

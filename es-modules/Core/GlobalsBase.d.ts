import type Chart from './Chart/Chart';
import type Time from './Time';
/**
 * Helper interface to add property types to `Globals`.
 *
 * Use the `declare module 'GlobalsBase'` pattern to overload the interface in
 * this definition file.
 */
export interface GlobalsBase {
    /**
     * An array containing the current chart objects in the page. A chart's
     * position in the array is preserved throughout the page's lifetime. When
     * a chart is destroyed, the array item becomes `undefined`.
     */
    readonly charts: Array<(Chart | undefined)>;
    /**
     * A hook for defining additional date format specifiers. New
     * specifiers are defined as key-value pairs by using the
     * specifier as key, and a function which takes the timestamp as
     * value. This function returns the formatted portion of the
     * date.
     *
     * Using `dateFormats` is also a convenient way to define new keys for
     * complex locale-aware date formats compatible with the
     * [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
     * browser API, whenever the built-in formats are not sufficient.
     *
     * @sample highcharts/global/dateformats/
     *         Adding support for week number
     * @sample highcharts/global/dateformats-object/
     *         A locale-aware date format using `Intl.DateTimeFormat`
     */
    readonly dateFormats: Record<string, Time.TimeFormatCallbackFunction>;
}
export default GlobalsBase;

import type { LangOptionsCore } from './LangOptionsCore';
declare module '../Core/Options' {
    interface Options {
        time?: TimeBase.TimeOptions;
    }
}
/**
 * The Time class. Time settings are applied in general for each page using
 * `Highcharts.setOptions`, or individually for each Chart item through the
 * [time](https://api.highcharts.com/highcharts/time) options set.
 *
 * The Time object is available from {@link Highcharts.Chart#time}, which refers
 * to  `Highcharts.time` unless individual time settings are applied for each
 * chart.
 *
 * When configuring time settings for individual chart instances, be aware that
 * using `Highcharts.dateFormat` or `Highcharts.time.dateFormat` within
 * formatter callbacks relies on the global time object, which applies the
 * global language and time zone settings. To ensure charts with local time
 * settings function correctly, use `chart.time.dateFormat? instead. However,
 * the recommended best practice is to use `setOptions` to define global time
 * settings unless specific configurations are needed for each chart.
 *
 * @example
 * // Apply time settings globally
 * Highcharts.setOptions({
 *     time: {
 *         timezone: 'Europe/London'
 *     }
 * });
 *
 * // Apply time settings by instance
 * const chart = Highcharts.chart('container', {
 *     time: {
 *         timezone: 'America/New_York'
 *     },
 *     series: [{
 *         data: [1, 4, 3, 5]
 *     }]
 * });
 *
 * // Use the Time object of a chart instance
 * console.log(
 *        'Current time in New York',
 *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
 * );
 *
 * // Standalone use
 * const time = new Highcharts.Time({
 *    timezone: 'America/New_York'
 * });
 * const s = time.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2020, 0, 1));
 * console.log(s); // => 2019-12-31 19:00:00
 *
 * @since 6.0.5
 *
 * @class
 * @name Highcharts.Time
 *
 * @param {Highcharts.TimeOptions} [options] Time options as defined in
 * [chart.options.time](/highcharts/time).
 */
declare class TimeBase {
    dTLCache: Record<string, Intl.DateTimeFormat>;
    constructor(options?: TimeBase.TimeOptions, lang?: LangOptionsCore);
    options: TimeBase.TimeOptions;
    private lang?;
    timezone?: string;
    variableTimezone: boolean;
    Date: typeof Date;
    private months;
    private shortMonths;
    private weekdays;
    private shortWeekdays;
    /**
     * Get a date in terms of numbers (year, month, day etc) for further
     * processing. Takes the current `timezone` setting into account. Inverse of
     * `makeTime` and the native `Date` constructor and `Date.UTC`.
     *
     * The date is returned in array format with the following indices:
     *
     * 0: year,
     * 1: month (zero based),
     * 2: day,
     * 3: hours,
     * 4: minutes,
     * 5: seconds,
     * 6: milliseconds,
     * 7: weekday (Sunday as 0)
     *
     * @function Highcharts.Time#toParts
     *
     * @param {number|Date} [timestamp]
     *                 The timestamp in milliseconds since January 1st 1970.
     *                 A Date object is also accepted.
     *
     * @return {Array<number>} The date parts in array format.
     */
    toParts(timestamp?: number | Date): number[];
    /**
     * Shorthand to get a cached `Intl.DateTimeFormat` instance.
     */
    dateTimeFormat(options: Intl.DateTimeFormatOptions | string, timestamp?: number | Date, locale?: string | Array<string> | undefined): string;
    /**
     * Take a locale-aware string format and return a full DateTimeFormat in
     * object form.
     */
    private str2dtf;
    /**
     * Make a time and returns milliseconds. Similar to `Date.UTC`, but takes
     * the current `timezone` setting into account.
     *
     * @function Highcharts.Time#makeTime
     *
     * @param {number} year
     *        The year
     *
     * @param {number} month
     *        The month. Zero-based, so January is 0.
     *
     * @param {number} [date=1]
     *        The day of the month
     *
     * @param {number} [hours=0]
     *        The hour of the day, 0-23.
     *
     * @param {number} [minutes=0]
     *        The minutes
     *
     * @param {number} [seconds=0]
     *        The seconds
     *
     * @return {number}
     *         The time in milliseconds since January 1st 1970.
     */
    makeTime(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): number;
    /**
     * Parse a datetime string. Unless the string contains time zone
     * information, apply the current `timezone` from options. If the argument
     * is a number, return it.
     *
     * @function Highcharts.Time#parse
     * @param    {string|number|undefined} s The datetime string to parse
     * @return   {number|undefined}          Parsed JavaScript timestamp
     */
    parse(s: string | number | undefined | null): number | undefined;
    /**
     * Get the time zone offset based on the current timezone information as
     * set in the global options.
     *
     * @function Highcharts.Time#getTimezoneOffset
     *
     * @param {number} timestamp
     *        The JavaScript timestamp to inspect.
     *
     * @return {number}
     *         The timezone offset in minutes compared to UTC.
     */
    getTimezoneOffset(timestamp: number | Date): number;
    /**
     * Formats a JavaScript date timestamp (milliseconds since January 1 1970)
     * into a human readable date string.
     *
     * The `format` parameter accepts two types of values:
     * - An object containing settings that are passed directly on to
     *   [Intl.DateTimeFormat.prototype.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format).
     * - A format string containing either individual or locale-aware format
     *   keys. **Individual keys**, for example `%Y-%m-%d`, are listed below.
     *   **Locale-aware keys** are grouped by square brackets, for example
     *   `%[Ymd]`. The order of keys within the square bracket doesn't affect
     *   the output, which is determined by the locale. See example below.
     *   Internally, the locale-aware format keys are just a shorthand for the
     *   full object formats, but are particularly practical in
     *   [templating](https://www.highcharts.com/docs/chart-concepts/templating)
     *   where full object definitions are not an option.
     *
     * The available string format keys are listed below. Additional formats can
     * be given in the {@link Highcharts.dateFormats} hook.
     *
     * Supported format keys:
     * | Key  | Description                     | Notes on locale-aware format |
     * -------|----------------------------------------------|-------|
     * | `%A` | Long weekday, like 'Monday'                  |       |
     * | `%a` | Short weekday, like 'Mon'                    |       |
     * | `%E` | Narrow weekday, single character             |       |
     * | `%d` | Two digit day of the month, 01 to 31         |       |
     * | `%e` | Day of the month, 1 through 31               |       |
     * | `%w` | Day of the week, 0 through 6                 | N/A   |
     * | `%v` | The prefix "week from", read from `lang.weekFrom` | N/A |
     * | `%b` | Short month, like 'Jan'                      |       |
     * | `%B` | Long month, like 'January'                   |       |
     * | `%m` | Two digit month number, 01 through 12        |       |
     * | `%o` | Month number, 1 through 12                   |       |
     * | `%y` | Two digits year, like 24 for 2024            |       |
     * | `%Y` | Four digits year, like 2024                  |       |
     * | `%H` | Two digits hours in 24h format, 00 through 23 | Depending on the locale, 12h format may be inserted. |
     * | `%k` | Hours in 24h format, 0 through 23            | Depending on the locale, 12h format may be inserted. |
     * | `%I` | Two digits hours in 12h format, 00 through 11 | N/A. The locale determines the hour format. |
     * | `%l` | Hours in 12h format, 1 through 12            | N/A. The locale determines the hour format. |
     * | `%M` | Two digits minutes, 00 through 59            |       |
     * | `%p` | Upper case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
     * | `%P` | Lower case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
     * | `%S` | Two digits seconds, 00 through 59            |       |
     * | `%L` | Milliseconds (naming from Ruby)              |       |
     *
     * @example
     * // Object format, US English
     * const time1 = new Highcharts.Time({ locale: 'en-US' });
     * console.log(
     *     time1.dateFormat({
     *         day: 'numeric',
     *         month: 'short',
     *         year: 'numeric',
     *         hour: 'numeric',
     *         minute: 'numeric'
     *     }, Date.UTC(2024, 11, 31))
     * ); // => Dec 31, 2024, 12:00 AM
     *
     * // Object format, British English
     * const time2 = new Highcharts.Time({ locale: 'en-GB' });
     * console.log(
     *     time2.dateFormat({
     *         day: 'numeric',
     *         month: 'short',
     *         year: 'numeric',
     *         hour: 'numeric',
     *         minute: 'numeric'
     *     }, Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * // Individual key string replacement
     * const time3 = new Highcharts.Time();
     * console.log(
     *     time3.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2024, 11, 31))
     * ); // => 2024-12-31 00:00:00
     *
     * // Locale-aware keys, US English
     * const time4 = new Highcharts.Time({ locale: 'en-US' });
     * console.log(
     *     time4.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
     * ); // => Dec 31, 2024, 12:00 AM
     *
     * // Locale-aware keys, British English
     * const time5 = new Highcharts.Time({ locale: 'en-GB' });
     * console.log(
     *     time5.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * // Mixed locale-aware and individual keys
     * console.log(
     *     time5.dateFormat('%[Yeb], %H:%M', Date.UTC(2024, 11, 31))
     * ); // => 31 Dec 2024, 00:00
     *
     * @function Highcharts.Time#dateFormat
     *
     * @param {string|Highcharts.DateTimeFormatOptions} format
     *        The desired string format where various time representations are
     *        prefixed with %, or an object representing the locale-aware format
     *        options.
     *
     * @param {number} [timestamp]
     *        The JavaScript timestamp.
     *
     * @param {boolean} [upperCaseFirst=false]
     *        Upper case first letter in the return.
     *
     * @return {string}
     *         The formatted date.
     */
    dateFormat(format?: TimeBase.DateTimeFormat | null, timestamp?: number, upperCaseFirst?: boolean): string;
}
declare namespace TimeBase {
    interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
        dateStyle?: 'full' | 'long' | 'medium' | 'short';
        fractionalSecondDigits?: 1 | 2 | 3;
        prefix?: string;
        suffix?: string;
        timeStyle?: 'full' | 'long' | 'medium' | 'short';
    }
    type DateTimeFormat = string | DateTimeFormatOptions;
    interface DateTimeLabelFormatObject {
        from?: DateTimeFormat;
        list?: DateTimeFormat[];
        main: DateTimeFormat;
        range?: boolean;
        to?: DateTimeFormat;
    }
    type DateTimeLabelFormatOption = (DateTimeFormat | Array<string> | TimeBase.DateTimeLabelFormatObject);
    type DateTimeLabelFormatsOption = (Record<TimeUnit, DateTimeLabelFormatOption>);
    interface TimeOptions {
        Date?: any;
        locale?: string | Array<string>;
        timezone?: string;
        timezoneOffset?: number;
        useUTC?: boolean;
    }
    interface TimeFormatCallbackFunction {
        (this: TimeBase, timestamp: number): string;
    }
    interface TimeNormalizedObject {
        count: number;
        unitName: TimeUnit;
        unitRange: number;
    }
    type TimeUnit = ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year');
    type TimeUnitValue = ('Date' | 'Day' | 'FullYear' | 'Hours' | 'Milliseconds' | 'Minutes' | 'Month' | 'Seconds');
}
export default TimeBase;

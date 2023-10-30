import type TickPositionsArray from './Axis/TickPositionsArray';
import type TimeTicksInfoObject from './Axis/TimeTicksInfoObject';
declare module './Options' {
    interface Options {
        time?: Time.TimeOptions;
    }
}
declare module './Axis/TickPositionsArray' {
    interface TickPositionsArray {
        info?: TimeTicksInfoObject;
    }
}
/**
 * The Time class. Time settings are applied in general for each page using
 * `Highcharts.setOptions`, or individually for each Chart item through the
 * [time](https://api.highcharts.com/highcharts/time) options set.
 *
 * The Time object is available from {@link Highcharts.Chart#time},
 * which refers to  `Highcharts.time` if no individual time settings are
 * applied.
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
 * let chart = Highcharts.chart('container', {
 *     time: {
 *         timezone: 'America/New_York'
 *     },
 *     series: [{
 *         data: [1, 4, 3, 5]
 *     }]
 * });
 *
 * // Use the Time object
 * console.log(
 *        'Current time in New York',
 *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
 * );
 *
 * @since 6.0.5
 *
 * @class
 * @name Highcharts.Time
 *
 * @param {Highcharts.TimeOptions} [options]
 * Time options as defined in [chart.options.time](/highcharts/time).
 */
declare class Time {
    constructor(options?: Time.TimeOptions);
    options: Time.TimeOptions;
    timezoneOffset?: number;
    useUTC: boolean;
    variableTimezone: boolean;
    Date: typeof Date;
    getTimezoneOffset: ReturnType<Time['timezoneOffsetFunction']>;
    /**
     * Time units used in `Time.get` and `Time.set`
     *
     * @typedef {"Date"|"Day"|"FullYear"|"Hours"|"Milliseconds"|"Minutes"|"Month"|"Seconds"} Highcharts.TimeUnitValue
     */
    /**
     * Get the value of a date object in given units, and subject to the Time
     * object's current timezone settings. This function corresponds directly to
     * JavaScripts `Date.getXXX / Date.getUTCXXX`, so instead of calling
     * `date.getHours()` or `date.getUTCHours()` we will call
     * `time.get('Hours')`.
     *
     * @function Highcharts.Time#get
     *
     * @param {Highcharts.TimeUnitValue} unit
     * @param {Date} date
     *
     * @return {number}
     *        The given time unit
     */
    get(unit: Time.TimeUnitValue, date: Date): number;
    /**
     * Set the value of a date object in given units, and subject to the Time
     * object's current timezone settings. This function corresponds directly to
     * JavaScripts `Date.setXXX / Date.setUTCXXX`, so instead of calling
     * `date.setHours(0)` or `date.setUTCHours(0)` we will call
     * `time.set('Hours', 0)`.
     *
     * @function Highcharts.Time#set
     *
     * @param {Highcharts.TimeUnitValue} unit
     * @param {Date} date
     * @param {number} value
     *
     * @return {number}
     *        The epoch milliseconds of the updated date
     */
    set(unit: Time.TimeUnitValue, date: Date, value: number): number;
    /**
     * Update the Time object with current options. It is called internally on
     * initializing Highcharts, after running `Highcharts.setOptions` and on
     * `Chart.update`.
     *
     * @private
     * @function Highcharts.Time#update
     *
     * @param {Highcharts.TimeOptions} [options]
     *
     */
    update(options?: Time.TimeOptions): void;
    /**
     * Make a time and returns milliseconds. Interprets the inputs as UTC time,
     * local time or a specific timezone time depending on the current time
     * settings.
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
    makeTime(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number): number;
    /**
     * Sets the getTimezoneOffset function. If the `timezone` option is set, a
     * default getTimezoneOffset function with that timezone is returned. If
     * a `getTimezoneOffset` option is defined, it is returned. If neither are
     * specified, the function using the `timezoneOffset` option or 0 offset is
     * returned.
     *
     * @private
     * @function Highcharts.Time#timezoneOffsetFunction
     *
     * @return {Function}
     *         A getTimezoneOffset function
     */
    timezoneOffsetFunction(): (timestamp: (number | Date)) => number;
    /**
     * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970)
     * into a human readable date string. The available format keys are listed
     * below. Additional formats can be given in the
     * {@link Highcharts.dateFormats} hook.
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
     * @example
     * const time = new Highcharts.Time();
     * const s = time.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2020, 0, 1));
     * console.log(s); // => 2020-01-01 00:00:00
     *
     * @function Highcharts.Time#dateFormat
     *
     * @param {string} format
     *        The desired format where various time representations are
     *        prefixed with %.
     *
     * @param {number} [timestamp]
     *        The JavaScript timestamp.
     *
     * @param {boolean} [capitalize=false]
     *        Upper case first letter in the return.
     *
     * @return {string}
     *         The formatted date.
     */
    dateFormat(format: string, timestamp?: number, capitalize?: boolean): string;
    /**
     * Resolve legacy formats of dateTimeLabelFormats (strings and arrays) into
     * an object.
     * @private
     * @param {string|Array<T>|Highcharts.Dictionary<T>} f
     * General format description
     * @return {Highcharts.Dictionary<T>}
     * The object definition
     */
    resolveDTLFormat(f: Time.DateTimeLabelFormatOption): Time.DateTimeLabelFormatObject;
    /**
     * Return an array with time positions distributed on round time values
     * right and right after min and max. Used in datetime axes as well as for
     * grouping data on a datetime axis.
     *
     * @function Highcharts.Time#getTimeTicks
     *
     * @param {Highcharts.TimeNormalizedObject} normalizedInterval
     *        The interval in axis values (ms) and the count
     *
     * @param {number} [min]
     *        The minimum in axis values
     *
     * @param {number} [max]
     *        The maximum in axis values
     *
     * @param {number} [startOfWeek=1]
     *
     * @return {Highcharts.AxisTickPositionsArray}
     * Time positions
     */
    getTimeTicks(normalizedInterval: Time.TimeNormalizedObject, min?: number, max?: number, startOfWeek?: number): TickPositionsArray;
    /**
     * Get the optimal date format for a point, based on a range.
     *
     * @private
     * @function Highcharts.Time#getDateFormat
     *
     * @param {number} range
     *        The time range
     *
     * @param {number} timestamp
     *        The timestamp of the date
     *
     * @param {number} startOfWeek
     *        An integer representing the first day of the week, where 0 is
     *        Sunday.
     *
     * @param {Highcharts.Dictionary<string>} dateTimeLabelFormats
     *        A map of time units to formats.
     *
     * @return {string}
     *         The optimal date format for a point.
     */
    getDateFormat(range: number, timestamp: number, startOfWeek: number, dateTimeLabelFormats: Time.DateTimeLabelFormatsOption): string | undefined;
}
declare namespace Time {
    interface DateTimeLabelFormatObject {
        from?: string;
        list?: string[];
        main: string;
        range?: boolean;
        to?: string;
    }
    type DateTimeLabelFormatOption = (string | Array<string> | Time.DateTimeLabelFormatObject);
    type DateTimeLabelFormatsOption = (Record<TimeUnit, DateTimeLabelFormatOption>);
    interface TimeOptions {
        Date?: any;
        getTimezoneOffset?: Function;
        timezone?: string;
        timezoneOffset?: number;
        useUTC?: boolean;
        moment?: any;
    }
    interface TimeFormatCallbackFunction {
        (timestamp: number): string;
    }
    interface TimeNormalizedObject {
        count: number;
        unitName: TimeUnit;
        unitRange: number;
    }
    type TimeUnit = ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year');
    type TimeUnitValue = ('Date' | 'Day' | 'FullYear' | 'Hours' | 'Milliseconds' | 'Minutes' | 'Month' | 'Seconds');
}
export default Time;

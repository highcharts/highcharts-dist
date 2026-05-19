import type TickPositionsArray from './Axis/TickPositionsArray';
import type TimeTicksInfoObject from './Axis/TimeTicksInfoObject';
import TimeBase from '../Shared/TimeBase.js';
declare module './Axis/TickPositionsArray' {
    interface TickPositionsArray {
        info?: TimeTicksInfoObject;
    }
}
declare class Time extends TimeBase {
    getBoundaryTicks(tickPositions: TickPositionsArray, unitRange: number, visibleMin?: number, visibleMax?: number): Record<number, Time.TimeUnit>;
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
}
declare namespace Time {
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
        boundary?: DateTimeFormat;
        range?: boolean;
        to?: DateTimeFormat;
    }
    type DateTimeLabelFormatOption = (DateTimeFormat | Time.DateTimeLabelFormatObject);
    type DateTimeLabelFormatsOption = (Record<TimeUnit, DateTimeLabelFormatOption>);
    interface TimeOptions {
        Date?: any;
        locale?: string | Array<string>;
        timezone?: string;
        timezoneOffset?: number;
        useUTC?: boolean;
    }
    interface TimeFormatCallbackFunction {
        (this: Time, timestamp: number): string;
    }
    interface TimeNormalizedObject {
        /**
         * The count of the interval.
         */
        count: number;
        /**
         * A value for how well the returned tick interval fits the input
         * interval. Ranges close to but above 1 indicate that the fit is bad,
         * where 1 is a perfect fit for the _next_ higher interval. For example,
         * if the algorithm lands on weekly ticks but the match is 1.01, it is
         * very close to monthly ticks.
         */
        match?: number;
        /**
         * The name of the time unit.
         */
        unitName: TimeUnit;
        /**
         * The interval in axis values (ms).
         */
        unitRange: number;
    }
    type TimeUnit = ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year');
    type TimeUnitValue = ('Date' | 'Day' | 'FullYear' | 'Hours' | 'Milliseconds' | 'Minutes' | 'Month' | 'Seconds');
}
export default Time;

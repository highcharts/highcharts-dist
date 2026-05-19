import type { DataConverterTypes } from './DataConverterType';
import type { DataEvent, DataEventCallback, DataEventEmitter } from '../DataEvent';
import type { ColumnIdsOptions } from '../Connectors/JSONConnectorOptions';
import DataTable, { type Column as DataTableColumn } from '../DataTable.js';
/**
 * Base class providing an interface and basic methods for a DataConverter
 *
 * @private
 */
declare class DataConverter implements DataEventEmitter<Event> {
    /**
     * Default options
     */
    protected static readonly defaultOptions: Options;
    /**
     * Registry as a record object with converter names and their class.
     */
    static types: DataConverterTypes;
    /**
     * Adds a converter class to the registry.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the converter class.
     *
     * @param {DataConverterTypes} DataConverterClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a converter registered with this key.
     */
    static registerType<T extends keyof DataConverterTypes>(key: T, DataConverterClass: DataConverterTypes[T]): boolean;
    /**
     * Constructs an instance of the DataConverter.
     *
     * @param {UserOptions} [options]
     * Options for the DataConverter.
     */
    constructor(options?: UserOptions);
    /**
     * A collection of available date formats.
     */
    dateFormats: Record<string, DateFormatObject>;
    /**
     * Regular expression used in the trim method to change a decimal point.
     */
    decimalRegExp?: RegExp;
    /**
     * Options for the DataConverter.
     */
    readonly options: Options;
    /**
     * Converts a string value based on its guessed type.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {number | string | Date}
     * The converted value.
     */
    convertByType(value: Type): number | string | Date;
    /**
     * Tries to guess the date format
     *  - Check if either month candidate exceeds 12
     *  - Check if year is missing (use current year)
     *  - Check if a shortened year format is used (e.g. 1/1/99)
     *  - If no guess can be made, the user must be prompted
     * data is the data to deduce a format based on
     * @private
     *
     * @param {string[]} data
     * Data to check the format.
     *
     * @param {number} limit
     * Max data to check the format.
     *
     * @param {boolean} save
     * Whether to save the date format in the converter options.
     */
    deduceDateFormat(data: string[], limit?: number | null, save?: boolean): string;
    /**
     * Emits an event on the DataConverter instance.
     *
     * @param {Event} [e]
     * Event object containing additional event data
     */
    emit(e: Event): void;
    /**
     * Registers a callback for a specific event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventCallback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on<T extends Event['type']>(type: T, callback: DataEventCallback<this, Extract<Event, {
        type: T;
    }>>): Function;
    /**
     * Parse a date and return it as a number.
     *
     * @param {string} value
     * Value to parse.
     *
     * @param {string} dateFormatProp
     * Which of the predefined date formats
     * to use to parse date values.
     */
    parseDate(value: string, dateFormatProp?: string): number;
}
/**
 * Additionally provided types for events and conversion.
 */
/**
 * The basic event object for a DataConverter instance.
 * Valid types are `parse`, `afterParse`, and `parseError`
 */
export interface Event extends DataEvent {
    readonly type: ('export' | 'afterExport' | 'exportError' | 'parse' | 'afterParse' | 'parseError');
    readonly columns: DataTableColumn[];
    readonly error?: string | Error;
    readonly headers: string[] | ColumnIdsOptions;
}
export interface DateFormatCallbackFunction {
    (match: ReturnType<string['match']>): number;
}
export interface DateFormatObject {
    alternative?: string;
    parser: DateFormatCallbackFunction;
    regex: RegExp;
}
/**
 * The shared options for all DataConverter instances
 */
export interface Options {
    dateFormat?: string;
    decimalPoint?: string;
    firstRowAsNames: boolean;
    /**
     * A function to parse string representations of dates into JavaScript
     * timestamps. If not set, the default implementation will be used.
     */
    parseDate?: ParseDateFunction;
}
/**
 * A function to parse string representations of dates
 * into JavaScript timestamps.
 */
export interface ParseDateFunction {
    (dateValue: string): number;
}
/**
 * Contains supported types to convert values from and to.
 */
export type Type = (boolean | null | number | string | DataTable | Date | undefined);
/**
 * Options of the DataConverter.
 */
export type UserOptions = Partial<Options>;
export default DataConverter;

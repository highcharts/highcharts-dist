import type DataEvent from '../DataEvent';
import type DataConnector from '../Connectors/DataConnector';
import DataTable from '../DataTable.js';
/**
 * Base class providing an interface and basic methods for a DataConverter
 *
 * @private
 */
declare class DataConverter implements DataEvent.Emitter {
    /**
     * Default options
     */
    protected static readonly defaultOptions: DataConverter.Options;
    /**
     * Constructs an instance of the DataConverter.
     *
     * @param {DataConverter.UserOptions} [options]
     * Options for the DataConverter.
     */
    constructor(options?: DataConverter.UserOptions);
    /**
     * A collection of available date formats.
     */
    dateFormats: Record<string, DataConverter.DateFormatObject>;
    /**
     * Regular expression used in the trim method to change a decimal point.
     */
    protected decimalRegExp?: RegExp;
    /**
     * Options for the DataConverter.
     */
    readonly options: DataConverter.Options;
    /**
     * Converts a value to a boolean.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {boolean}
     * Converted value as a boolean.
     */
    asBoolean(value: DataConverter.Type): boolean;
    /**
     * Converts a value to a Date.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {globalThis.Date}
     * Converted value as a Date.
     */
    asDate(value: DataConverter.Type): Date;
    /**
     * Casts a string value to it's guessed type
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {number|string|Date}
     * The converted value.
     */
    asGuessedType(value: unknown): (number | string | Date);
    /**
     * Converts a value to a number.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {number}
     * Converted value as a number.
     */
    asNumber(value: DataConverter.Type): number;
    /**
     * Converts a value to a string.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {string}
     * Converted value as a string.
     */
    asString(value: DataConverter.Type): string;
    /**
     * Tries to guess the date format
     *  - Check if either month candidate exceeds 12
     *  - Check if year is missing (use current year)
     *  - Check if a shortened year format is used (e.g. 1/1/99)
     *  - If no guess can be made, the user must be prompted
     * data is the data to deduce a format based on
     * @private
     *
     * @param {Array<string>} data
     * Data to check the format.
     *
     * @param {number} limit
     * Max data to check the format.
     *
     * @param {boolean} save
     * Whether to save the date format in the converter options.
     */
    deduceDateFormat(data: Array<string>, limit?: (number | null), save?: boolean): string;
    /**
     * Emits an event on the DataConverter instance.
     *
     * @param {DataConverter.Event} [e]
     * Event object containing additional event data
     */
    emit<E extends DataEvent>(e: E): void;
    /**
     * Initiates the data exporting. Should emit `exportError` on failure.
     *
     * @param {DataConnector} connector
     * Connector to export from.
     *
     * @param {DataConverter.Options} [options]
     * Options for the export.
     */
    export(connector: DataConnector, options?: DataConverter.Options): string;
    /**
     * Getter for the data table.
     *
     * @return {DataTable}
     * Table of parsed data.
     */
    getTable(): DataTable;
    /**
     * Guesses the potential type of a string value for parsing CSV etc.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {'number'|'string'|'Date'}
     * Type string, either `string`, `Date`, or `number`.
     */
    guessType(value: unknown): ('number' | 'string' | 'Date');
    /**
     * Registers a callback for a specific event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventEmitter.Callback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    on<E extends DataEvent>(type: E['type'], callback: DataEvent.Callback<this, E>): Function;
    /**
     * Initiates the data parsing. Should emit `parseError` on failure.
     *
     * @param {DataConverter.UserOptions} options
     * Options of the DataConverter.
     */
    parse(options: DataConverter.UserOptions): void;
    /**
     * Parse a date and return it as a number.
     *
     * @function Highcharts.Data#parseDate
     *
     * @param {string} value
     * Value to parse.
     *
     * @param {string} dateFormatProp
     * Which of the predefined date formats
     * to use to parse date values.
     */
    private parseDate;
    /**
     * Trim a string from whitespaces.
     *
     * @param {string} str
     * String to trim.
     *
     * @param {boolean} [inside=false]
     * Remove all spaces between numbers.
     *
     * @return {string}
     * Trimed string
     */
    trim(str: string, inside?: boolean): string;
}
/**
 * Additionally provided types for events and conversion.
 */
declare namespace DataConverter {
    /**
     * The basic event object for a DataConverter instance.
     * Valid types are `parse`, `afterParse`, and `parseError`
     */
    interface Event extends DataEvent {
        readonly type: ('export' | 'afterExport' | 'exportError' | 'parse' | 'afterParse' | 'parseError');
        readonly columns: Array<DataTable.Column>;
        readonly error?: (string | Error);
        readonly headers: string[];
    }
    interface DateFormatCallbackFunction {
        (match: ReturnType<string['match']>): number;
    }
    interface DateFormatObject {
        alternative?: string;
        parser: DateFormatCallbackFunction;
        regex: RegExp;
    }
    /**
     * The shared options for all DataConverter instances
     */
    interface Options {
        dateFormat?: string;
        alternativeFormat?: string;
        decimalPoint?: string;
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
        firstRowAsNames: boolean;
        /**
         * A function to parse string representations of dates into JavaScript
         * timestamps. If not set, the default implementation will be used.
         */
        parseDate?: DataConverter.ParseDateFunction;
        switchRowsAndColumns: boolean;
    }
    /**
     * A function to parse string representations of dates
     * into JavaScript timestamps.
     */
    interface ParseDateFunction {
        (dateValue: string): number;
    }
    /**
     * Contains supported types to convert values from and to.
     */
    type Type = (boolean | null | number | string | DataTable | Date | undefined);
    /**
     * Options of the DataConverter.
     */
    type UserOptions = Partial<Options>;
    /**
     * Converts an array of columns to a table instance. Second dimension of the
     * array are the row cells.
     *
     * @param {Array<DataTable.Column>} [columns]
     * Array to convert.
     *
     * @param {Array<string>} [headers]
     * Column names to use.
     *
     * @return {DataTable}
     * Table instance from the arrays.
     */
    function getTableFromColumns(columns?: Array<DataTable.Column>, headers?: Array<string>): DataTable;
}
export default DataConverter;

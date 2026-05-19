import DataConverter, { type Type as DataConverterType } from './DataConverter';
import type { Column as DataTableColumn, ColumnCollection as DataTableColumnCollection } from '../DataTable';
/**
 * Converts a value to a Date.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {globalThis.Date}
 * Converted value as a Date.
 */
export declare function asDate(value: DataConverterType, converter: DataConverter): Date;
/**
 * Converts a value to a number.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {number}
 * Converted value as a number.
 */
export declare function asNumber(value: DataConverterType, decimalRegExp?: RegExp): number;
/**
 * Converts a value to a string.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {string}
 * Converted value as a string.
 */
export declare function asString(value: DataConverterType): string;
/**
 * Converts a value to a boolean.
 *
 * @param {DataConverterType} value
 * Value to convert.
 *
 * @return {boolean}
 * Converted value as a boolean.
 */
export declare function asBoolean(value: DataConverterType): boolean;
/**
 * Guesses the potential type of a string value for parsing CSV etc.
 *
 * @param {*} value
 * The value to examine.
 *
 * @return {'number' | 'string' | 'Date'}
 * Type string, either `string`, `Date`, or `number`.
 */
export declare function guessType(value: unknown, converter: DataConverter): 'number' | 'string' | 'Date';
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
 * Trimmed string
 */
export declare function trim(str: string, inside?: boolean): string;
/**
 * Parses an array of columns to a column collection. If more headers are
 * provided, the corresponding, empty columns are added.
 *
 * @param {DataTableColumn[]} [columnsArray]
 * Array of columns.
 *
 * @param {string[]} [headers]
 * Column ids to use.
 *
 * @return {DataTableColumnCollection}
 * Parsed columns.
 */
export declare function getColumnsCollection(columnsArray: DataTableColumn[] | undefined, headers: string[]): DataTableColumnCollection;
declare const DataConverterUtils: {
    asBoolean: typeof asBoolean;
    asDate: typeof asDate;
    asNumber: typeof asNumber;
    asString: typeof asString;
    getColumnsCollection: typeof getColumnsCollection;
    guessType: typeof guessType;
    trim: typeof trim;
};
export default DataConverterUtils;

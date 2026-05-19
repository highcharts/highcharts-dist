import type { CellType as DataTableCellType, Column as DataTableColumn } from './DataTable';
import type { TypedArray } from '../Shared/Types';
/**
 * Utility functions for columns that can be either arrays or typed arrays.
 * @private
 */
/**
 * Result of the `shift` function.
 */
export interface ShiftResult {
    value: DataTableCellType;
    array: DataTableColumn;
}
/**
 * Result of the `splice` function.
 */
export interface SpliceResult<T extends DataTableColumn> {
    removed: T;
    array: T;
}
/**
 * Sets the length of the column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} length
 * New length of the column.
 *
 * @param {boolean} asSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views of it are destroyed. Default is `false`.
 *
 * @return {DataTableColumn}
 * Modified column.
 *
 * @private
 */
export declare function setLength(column: DataTableColumn, length: number, asSubarray?: boolean): DataTableColumn;
/**
 * Splices a column array.
 *
 * @param {DataTableColumn} column
 * Column to be modified.
 *
 * @param {number} start
 * Index at which to start changing the array.
 *
 * @param {number} deleteCount
 * An integer indicating the number of old array elements to remove.
 *
 * @param {boolean} removedAsSubarray
 * If column is a typed array, return a subarray instead of a new array. It
 * is faster `O(1)`, but the entire buffer will be kept in memory until all
 * views to it are destroyed. Default is `true`.
 *
 * @param {Array<number>|TypedArray} items
 * The elements to add to the array, beginning at the start index. If you
 * don't specify any elements, `splice()` will only remove elements from the
 * array.
 *
 * @return {SpliceResult}
 * Object containing removed elements and the modified column.
 *
 * @private
 */
export declare function splice(column: DataTableColumn, start: number, deleteCount: number, removedAsSubarray?: boolean, items?: DataTableCellType[] | TypedArray): SpliceResult<DataTableColumn>;
/**
 * Converts a cell value to a number.
 *
 * @param {DataTableCellType} value
 * Cell value to convert to a number.
 *
 * @param {boolean} useNaN
 * If `true`, returns `NaN` for non-numeric values; if `false`,
 * returns `null` instead.
 *
 * @return {number | null}
 * Number or `null` if the value is not a number.
 *
 * @private
 */
export declare function convertToNumber(value?: DataTableCellType, useNaN?: boolean): number | null;
declare const ColumnUtils: {
    convertToNumber: typeof convertToNumber;
    setLength: typeof setLength;
    splice: typeof splice;
};
export default ColumnUtils;

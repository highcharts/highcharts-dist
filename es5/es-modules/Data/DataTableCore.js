/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */
'use strict';
import ColumnUtils from './ColumnUtils.js';
var setLength = ColumnUtils.setLength, splice = ColumnUtils.splice;
import { fireEvent, objectEach } from '../Shared/Utilities.js';
import { uniqueKey } from '../Core/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * Highcharts allows passing a `DataTable` or a configuration object for a data
 * table in the `dataTable` property, either chart-level
 * [dataTable](https://api.highcharts.com/highcharts/dataTable) or as
 * [series.dataTable](https://api.highcharts.com/highcharts/series.dataTable).
 * The `DataTable` is then used as a source for the series data points, mapped
 * by the `series.dataMapping` option.
 *
 * After chart instantiation, the data table can be accessed from the series as
 * `series.dataTable`. CRUD operations on the data table will be reflected in
 * the chart.
 *
 * @example
 * const dataTable = new Highcharts.DataTable({
 *   columns: {
 *     year: [2020, 2021, 2022, 2023],
 *     cost: [11, 13, 12, 14],
 *     revenue: [12, 15, 14, 18]
 *   }
 * });
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptionsObject} [options]
 * Options to initialize the new DataTable instance.
 */
var DataTableCore = /** @class */ (function () {
    function DataTableCore(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.isDataTable = true;
        this.autoId = !options.id;
        this.columns = {};
        this.id = (options.id || uniqueKey());
        this.rowCount = 0;
        this.versionTag = uniqueKey();
        var rowCount = 0;
        objectEach(options.columns || {}, function (column, columnId) {
            _this.columns[columnId] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    DataTableCore.prototype.applyRowCount = function (rowCount) {
        var _this = this;
        this.rowCount = rowCount;
        objectEach(this.columns, function (column, columnId) {
            if (column.length !== rowCount) {
                _this.columns[columnId] = setLength(column, rowCount);
            }
        });
    };
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @sample highcharts/datatable/live-chart/
     *       Add and delete rows in a live chart
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    DataTableCore.prototype.deleteRows = function (rowIndex, rowCount) {
        var _this = this;
        if (rowCount === void 0) { rowCount = 1; }
        if (rowCount > 0 && rowIndex < this.rowCount) {
            var length_1 = 0;
            objectEach(this.columns, function (column, columnId) {
                _this.columns[columnId] =
                    splice(column, rowIndex, rowCount).array;
                length_1 = column.length;
            });
            this.rowCount = length_1;
        }
        fireEvent(this, 'afterDeleteRows', { rowIndex: rowIndex, rowCount: rowCount });
        this.versionTag = uniqueKey();
    };
    /**
     * Fetches the given column by the canonical column ID. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @function Highcharts.DataTable#setColumn
     *
     * @param {string} columnId
     * ID of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    DataTableCore.prototype.getColumn = function (columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    };
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @function Highcharts.DataTable#getColumns
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    DataTableCore.prototype.getColumns = function (columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        var _this = this;
        return (columnIds || Object.keys(this.columns)).reduce(function (columns, columnId) {
            columns[columnId] = _this.columns[columnId];
            return columns;
        }, {});
    };
    /**
     * Retrieves the row at a given index.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    DataTableCore.prototype.getRowObject = function (rowIndex, columnNames) {
        var _a;
        var row = {}, columns = this.columns;
        columnNames !== null && columnNames !== void 0 ? columnNames : (columnNames = Object.keys(this.columns));
        for (var _i = 0, columnNames_1 = columnNames; _i < columnNames_1.length; _i++) {
            var columnName = columnNames_1[_i];
            row[columnName] = (_a = columns[columnName]) === null || _a === void 0 ? void 0 : _a[rowIndex];
        }
        return row;
    };
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @function Highcharts.DataTable#setColumn
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    DataTableCore.prototype.setColumn = function (columnId, column, rowIndex, eventDetail) {
        var _a;
        if (column === void 0) { column = []; }
        if (rowIndex === void 0) { rowIndex = 0; }
        this.setColumns((_a = {}, _a[columnId] = column, _a), rowIndex, eventDetail);
    };
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTable.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the simplified `DataTable`,
     * as it always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    DataTableCore.prototype.setColumns = function (columns, rowIndex, eventDetail) {
        var _this = this;
        var rowCount = this.rowCount;
        objectEach(columns, function (column, columnId) {
            _this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!(eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.silent)) {
            fireEvent(this, 'afterSetColumns');
            this.versionTag = uniqueKey();
        }
    };
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @sample highcharts/datatable/live-chart/
     *       Add and delete rows in a live chart
     * @sample stock/datatable/live-candlestick/
     *       Live candlestick
     * @sample highcharts/datatable/shared-with-grid/
     *       Chart with data table CRUD operations
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    DataTableCore.prototype.setRow = function (row, rowIndex, insert, eventDetail) {
        var _a;
        if (rowIndex === void 0) { rowIndex = this.rowCount; }
        var columns = this.columns, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1, rowKeys = Object.keys(row);
        if ((eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.addColumns) !== false) {
            for (var i = 0, iEnd = rowKeys.length; i < iEnd; i++) {
                columns[_a = rowKeys[i]] || (columns[_a] = new Array(this.rowCount));
            }
        }
        objectEach(columns, function (column, columnId) {
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [row[columnId]]).array;
                }
                else {
                    column[rowIndex] =
                        // Preserve explicit null and undefined but fall back
                        // to existing value if the new row does not have the
                        // key
                        columnId in row ?
                            row[columnId] :
                            column[rowIndex];
                }
                columns[columnId] = column;
            }
        });
        this.applyRowCount(Math.max(indexRowCount, this.rowCount));
        if (!(eventDetail === null || eventDetail === void 0 ? void 0 : eventDetail.silent)) {
            fireEvent(this, 'afterSetRows', { rowIndex: rowIndex });
            this.versionTag = uniqueKey();
        }
    };
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTable}
     * The modified (clone) or the original data table.
     */
    DataTableCore.prototype.getModified = function () {
        return this.modified || this;
    };
    return DataTableCore;
}());
/* *
 *
 *  Default Export
 *
 * */
export default DataTableCore;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A collection of data table columns defined by a object where the key is the
 * column ID and the value is an array of the column values. Typed arrays are
 * supported.
 *
 * @type {Highcharts.DataTableColumnCollection|undefined}
 * @apioption dataTable.columns
 */
/**
 * Custom ID to identify the new DataTable instance.
 *
 * @type {string|undefined}
 * @apioption dataTable.id
 */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 */ /**
* A column of values in a data table.
* @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
*/ /**
* A collection of data table columns defined by a object where the key is the
* column ID and the value is an array of the column values. Typed arrays are
* supported.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptionsObject
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptionsObject.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptionsObject.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

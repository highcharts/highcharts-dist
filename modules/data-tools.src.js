// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/data-tools
 * @requires highcharts
 *
 * Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/data-tools", ["highcharts/highcharts"], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/data-tools"] = factory(root["_Highcharts"]);
	else
		root["Highcharts"] = factory(root["Highcharts"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 944:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data_tools_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Data/Modifiers/DataModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Dawid Dragula
 *
 * */


const { addEvent, fireEvent, merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class to provide an interface for modifying a table.
 */
class DataModifier {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Runs a timed execution of the modifier on the given datatable.
     * Can be configured to run multiple times.
     *
     * @param {DataTable} dataTable
     * The datatable to execute
     *
     * @param {DataModifier.BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    benchmark(dataTable, options) {
        const results = [];
        const modifier = this;
        const execute = () => {
            modifier.modifyTable(dataTable);
            modifier.emit({
                type: 'afterBenchmarkIteration'
            });
        };
        const defaultOptions = {
            iterations: 1
        };
        const { iterations } = merge(defaultOptions, options);
        modifier.on('afterBenchmarkIteration', () => {
            if (results.length === iterations) {
                modifier.emit({
                    type: 'afterBenchmark',
                    results
                });
                return;
            }
            // Run again
            execute();
        });
        const times = {
            startTime: 0,
            endTime: 0
        };
        // Add timers
        modifier.on('modify', () => {
            times.startTime = window.performance.now();
        });
        modifier.on('afterModify', () => {
            times.endTime = window.performance.now();
            results.push(times.endTime - times.startTime);
        });
        // Initial run
        execute();
        return results;
    }
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifier.Event} [e]
     * Event object containing additonal event information.
     */
    emit(e) {
        fireEvent(this, e.type, e);
    }
    /**
     * Modifies the given table and sets its `modified` property as a reference
     * to the modified table. If `modified` property does not exist on the
     * original table, it's always created.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    modify(table, eventDetail) {
        const modifier = this;
        return new Promise((resolve, reject) => {
            if (!table.modified) {
                table.modified = table.clone(false, eventDetail);
            }
            try {
                resolve(modifier.modifyTable(table, eventDetail));
            }
            catch (e) {
                modifier.emit({
                    type: 'error',
                    detail: eventDetail,
                    table
                });
                reject(e instanceof Error ? e : new Error('' + e));
            }
        });
    }
    /**
     * Registers a callback for a specific modifier event.
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
    on(type, callback) {
        return addEvent(this, type, callback);
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * Additionally provided types for modifier events and options.
 */
(function (DataModifier) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    DataModifier.types = {};
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a modifier class to the registry. The modifier class has to provide
     * the `DataModifier.options` property and the `DataModifier.modifyTable`
     * method to modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the modifier class.
     *
     * @param {DataModifierType} DataModifierClass
     * Modifier class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a modifier registered with this key.
     */
    function registerType(key, DataModifierClass) {
        return (!!key &&
            !DataModifier.types[key] &&
            !!(DataModifier.types[key] = DataModifierClass));
    }
    DataModifier.registerType = registerType;
})(DataModifier || (DataModifier = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_DataModifier = (DataModifier);

;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
/**
 * Utility functions for columns that can be either arrays or typed arrays.
 * @private
 */
var ColumnUtils;
(function (ColumnUtils) {
    /* *
    *
    *  Declarations
    *
    * */
    /* *
    *
    * Functions
    *
    * */
    /**
     * Sets the length of the column array.
     *
     * @param {DataTable.Column} column
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
     * @return {DataTable.Column}
     * Modified column.
     *
     * @private
     */
    function setLength(column, length, asSubarray) {
        if (Array.isArray(column)) {
            column.length = length;
            return column;
        }
        return column[asSubarray ? 'subarray' : 'slice'](0, length);
    }
    ColumnUtils.setLength = setLength;
    /**
     * Splices a column array.
     *
     * @param {DataTable.Column} column
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
    function splice(column, start, deleteCount, removedAsSubarray, items = []) {
        if (Array.isArray(column)) {
            if (!Array.isArray(items)) {
                items = Array.from(items);
            }
            return {
                removed: column.splice(start, deleteCount, ...items),
                array: column
            };
        }
        const Constructor = Object.getPrototypeOf(column)
            .constructor;
        const removed = column[removedAsSubarray ? 'subarray' : 'slice'](start, start + deleteCount);
        const newLength = column.length - deleteCount + items.length;
        const result = new Constructor(newLength);
        result.set(column.subarray(0, start), 0);
        result.set(items, start);
        result.set(column.subarray(start + deleteCount), start + items.length);
        return {
            removed: removed,
            array: result
        };
    }
    ColumnUtils.splice = splice;
    /**
     * Converts a cell value to a number.
     *
     * @param {DataTable.CellType} value
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
    function convertToNumber(value, useNaN) {
        switch (typeof value) {
            case 'boolean':
                return (value ? 1 : 0);
            case 'number':
                return (isNaN(value) && !useNaN ? null : value);
            default:
                value = parseFloat(`${value ?? ''}`);
                return (isNaN(value) && !useNaN ? null : value);
        }
    }
    ColumnUtils.convertToNumber = convertToNumber;
})(ColumnUtils || (ColumnUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

;// ./code/es-modules/Data/DataTableCore.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength, splice } = Data_ColumnUtils;

const { fireEvent: DataTableCore_fireEvent, objectEach, uniqueKey } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
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
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTableCore {
    /**
     * Constructs an instance of the DataTable class.
     *
     * @example
     * const dataTable = new Highcharts.DataTableCore({
     *   columns: {
     *     year: [2020, 2021, 2022, 2023],
     *     cost: [11, 13, 12, 14],
     *     revenue: [12, 15, 14, 18]
     *   }
     * });

     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options = {}) {
        /**
         * Whether the ID was automatic generated or given in the constructor.
         *
         * @name Highcharts.DataTable#autoId
         * @type {boolean}
         */
        this.autoId = !options.id;
        this.columns = {};
        /**
         * ID of the table for identification purposes.
         *
         * @name Highcharts.DataTable#id
         * @type {string}
         */
        this.id = (options.id || uniqueKey());
        this.rowCount = 0;
        this.versionTag = uniqueKey();
        let rowCount = 0;
        objectEach(options.columns || {}, (column, columnId) => {
            this.columns[columnId] = column.slice();
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
    applyRowCount(rowCount) {
        this.rowCount = rowCount;
        objectEach(this.columns, (column, columnId) => {
            if (column.length !== rowCount) {
                this.columns[columnId] = setLength(column, rowCount);
            }
        });
    }
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
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
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            objectEach(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        DataTableCore_fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = uniqueKey();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnIds || Object.keys(this.columns)).reduce((columns, columnId) => {
            columns[columnId] = this.columns[columnId];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnIds) {
        return (columnIds || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
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
    setColumn(columnId, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnId]: column }, rowIndex, eventDetail);
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTableCore.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the `DataTableCore`, as it
     * always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        objectEach(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetColumns');
            this.versionTag = uniqueKey();
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
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
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1, rowKeys = Object.keys(row);
        if (eventDetail?.addColumns !== false) {
            for (let i = 0, iEnd = rowKeys.length; i < iEnd; i++) {
                const key = rowKeys[i];
                if (!columns[key]) {
                    columns[key] = [];
                }
            }
        }
        objectEach(columns, (column, columnId) => {
            if (!column && eventDetail?.addColumns !== false) {
                column = new Array(indexRowCount);
            }
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [row[columnId] ?? null]).array;
                }
                else {
                    column[rowIndex] = row[columnId] ?? null;
                }
                columns[columnId] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetRows');
            this.versionTag = uniqueKey();
        }
    }
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTableCore}
     * The modified (clone) or the original data table.
     */
    getModified() {
        return this.modified || this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 * //**
 * A column of values in a data table.
 * @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
 */ /**
* A collection of data table columns defined by a object where the key is the
* column name and the value is an array of the column values.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptions
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptions.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptions.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Data/DataTable.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Jomar Hønsi
 *  - Dawid Dragula
 *
 * */



const { splice: DataTable_splice, setLength: DataTable_setLength } = Data_ColumnUtils;

const { addEvent: DataTable_addEvent, defined, extend, fireEvent: DataTable_fireEvent, isNumber, uniqueKey: DataTable_uniqueKey } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
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
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTable extends Data_DataTableCore {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options = {}) {
        super(options);
        this.metadata = options.metadata;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns a clone of this table. The cloned table is completely independent
     * of the original, and any changes made to the clone will not affect
     * the original table.
     *
     * @function Highcharts.DataTable#clone
     *
     * @param {boolean} [skipColumns]
     * Whether to clone columns or not.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTable}
     * Clone of this data table.
     *
     * @emits #cloneTable
     * @emits #afterCloneTable
     */
    clone(skipColumns, eventDetail) {
        const table = this, tableOptions = {};
        table.emit({ type: 'cloneTable', detail: eventDetail });
        if (!skipColumns) {
            tableOptions.columns = table.columns;
        }
        if (!table.autoId) {
            tableOptions.id = table.id;
        }
        const tableClone = new DataTable(tableOptions);
        if (!skipColumns) {
            tableClone.versionTag = table.versionTag;
            tableClone.originalRowIndexes = table.originalRowIndexes;
            tableClone.localRowIndexes = table.localRowIndexes;
        }
        tableClone.metadata = { ...table.metadata };
        table.emit({
            type: 'afterCloneTable',
            detail: eventDetail,
            tableClone
        });
        return tableClone;
    }
    /**
     * Deletes columns from the table.
     *
     * @function Highcharts.DataTable#deleteColumns
     *
     * @param {Array<string>} [columnIds]
     * Names of columns to delete. If no array is provided, all
     * columns will be deleted.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Highcharts.DataTableColumnCollection|undefined}
     * Returns the deleted columns, if found.
     *
     * @emits #deleteColumns
     * @emits #afterDeleteColumns
     */
    deleteColumns(columnIds, eventDetail) {
        const table = this, columns = table.columns, deletedColumns = {}, modifiedColumns = {}, modifier = table.modifier, rowCount = table.rowCount;
        columnIds = (columnIds || Object.keys(columns));
        if (columnIds.length) {
            table.emit({
                type: 'deleteColumns',
                columnIds,
                detail: eventDetail
            });
            for (let i = 0, iEnd = columnIds.length, column, columnId; i < iEnd; ++i) {
                columnId = columnIds[i];
                column = columns[columnId];
                if (column) {
                    deletedColumns[columnId] = column;
                    modifiedColumns[columnId] = new Array(rowCount);
                }
                delete columns[columnId];
            }
            if (!Object.keys(columns).length) {
                table.rowCount = 0;
                this.deleteRowIndexReferences();
            }
            if (modifier) {
                modifier.modifyTable(table);
            }
            table.emit({
                type: 'afterDeleteColumns',
                columns: deletedColumns,
                columnIds,
                detail: eventDetail
            });
            return deletedColumns;
        }
    }
    /**
     * Deletes the row index references. This is useful when the original table
     * is deleted, and the references are no longer needed. This table is
     * then considered an original table or a table that has the same rows
     * order as the original table.
     */
    deleteRowIndexReferences() {
        delete this.originalRowIndexes;
        delete this.localRowIndexes;
    }
    /**
     * Deletes rows in this table.
     *
     * @function Highcharts.DataTable#deleteRows
     *
     * @param {number | number[]} [rowIndex]
     * Index of the row where deletion should start, or an array of indices for
     * deleting multiple rows. If not specified, all rows will be deleted.
     *
     * @param {number} [rowCount]
     * Number of rows to delete.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Array<Highcharts.DataTableRow>}
     * Returns the deleted rows, if found.
     *
     * @emits #deleteRows
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1, eventDetail) {
        const { columns, modifier } = this;
        const deletedRows = [];
        let indices;
        let actualRowCount;
        if (!defined(rowIndex)) {
            // No index provided - delete all rows.
            indices = [0];
            actualRowCount = this.rowCount;
        }
        else if (Array.isArray(rowIndex)) {
            // Array of indices provided - delete the specified rows.
            indices = rowIndex
                // Remove negative indices, and indices beyond the row count,
                // and remove duplicates.
                .filter((index, i, arr) => (index >= 0 &&
                index < this.rowCount &&
                arr.indexOf(index) === i))
                // Sort indices in descending order.
                .sort((a, b) => b - a);
            actualRowCount = indices.length;
        }
        else {
            // Single index provided - delete the specified range of rows.
            indices = [rowIndex];
            actualRowCount = rowCount;
        }
        this.emit({
            type: 'deleteRows',
            detail: eventDetail,
            rowCount: actualRowCount,
            rowIndex: rowIndex ?? 0
        });
        if (actualRowCount > 0) {
            const columnIds = Object.keys(columns);
            for (let i = 0; i < columnIds.length; ++i) {
                const columnId = columnIds[i];
                const column = columns[columnId];
                let deletedCells;
                // Perform a range splice.
                if (indices.length === 1 && actualRowCount > 1) {
                    const result = DataTable_splice(column, indices[0], actualRowCount);
                    deletedCells = result.removed;
                    columns[columnId] = result.array;
                }
                else {
                    // Perform a index splice for each index in the array.
                    deletedCells = [];
                    for (const index of indices) {
                        deletedCells.push(column[index]);
                        DataTable_splice(column, index, 1);
                    }
                    // Reverse the deleted cells to maintain the correct order.
                    deletedCells.reverse();
                }
                if (!i) {
                    this.rowCount = column.length;
                }
                for (let j = 0, jEnd = deletedCells.length; j < jEnd; ++j) {
                    deletedRows[j] = deletedRows[j] || [];
                    deletedRows[j][i] = deletedCells[j];
                }
            }
        }
        if (modifier) {
            modifier.modifyTable(this);
        }
        this.emit({
            type: 'afterDeleteRows',
            detail: eventDetail,
            rowCount: actualRowCount,
            rowIndex: rowIndex ?? 0,
            rows: deletedRows
        });
        return deletedRows;
    }
    /**
     * Emits an event on this table to all registered callbacks of the given
     * event.
     * @private
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit(e) {
        if ([
            'afterDeleteColumns',
            'afterDeleteRows',
            'afterSetCell',
            'afterSetColumns',
            'afterSetRows'
        ].includes(e.type)) {
            this.versionTag = DataTable_uniqueKey();
        }
        DataTable_fireEvent(this, e.type, e);
    }
    /**
     * Fetches a single cell value.
     *
     * @function Highcharts.DataTable#getCell
     *
     * @param {string} columnId
     * Column name of the cell to retrieve.
     *
     * @param {number} rowIndex
     * Row index of the cell to retrieve.
     *
     * @return {Highcharts.DataTableCellType|undefined}
     * Returns the cell value or `undefined`.
     */
    getCell(columnId, rowIndex) {
        const table = this;
        const column = table.columns[columnId];
        if (column) {
            return column[rowIndex];
        }
    }
    /**
     * Fetches the given column by the canonical column name.
     * This function is a simplified wrap of {@link getColumns}.
     *
     * @function Highcharts.DataTable#getColumn
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @param {boolean} [asReference]
     * Whether to return the column as a readonly reference.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnId, asReference) {
        return this.getColumns([columnId], asReference)[columnId];
    }
    /**
     * Fetches all column IDs.
     *
     * @function Highcharts.DataTable#getColumnIds
     *
     * @return {Array<string>}
     * Returns all column IDs.
     */
    getColumnIds() {
        return Object.keys(this.columns);
    }
    /**
     * Retrieves all or the given columns.
     *
     * @function Highcharts.DataTable#getColumns
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @param {boolean} [asReference]
     * Whether to return columns as a readonly reference.
     *
     * @param {boolean} [asBasicColumns]
     * Whether to transform all typed array columns to normal arrays.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnIds, asReference, asBasicColumns) {
        const table = this, tableColumns = table.columns, columns = {};
        columnIds = (columnIds || Object.keys(tableColumns));
        for (let i = 0, iEnd = columnIds.length, column, columnId; i < iEnd; ++i) {
            columnId = columnIds[i];
            column = tableColumns[columnId];
            if (column) {
                if (asReference) {
                    columns[columnId] = column;
                }
                else if (asBasicColumns && !Array.isArray(column)) {
                    columns[columnId] = Array.from(column);
                }
                else {
                    columns[columnId] = column.slice();
                }
            }
        }
        return columns;
    }
    /**
     * Takes the original row index and returns the local row index in the
     * modified table for which this function is called.
     *
     * @param {number} originalRowIndex
     * Original row index to get the local row index for.
     *
     * @return {number|undefined}
     * Returns the local row index or `undefined` if not found.
     */
    getLocalRowIndex(originalRowIndex) {
        const { localRowIndexes } = this;
        if (localRowIndexes) {
            return localRowIndexes[originalRowIndex];
        }
        return originalRowIndex;
    }
    /**
     * Returns the modifier associated with this table, if any.
     *
     * @return {Highcharts.DataModifier|undefined}
     * Returns the modifier or `undefined`.
     *
     * @private
     */
    getModifier() {
        return this.modifier;
    }
    /**
     * Takes the local row index and returns the index of the corresponding row
     * in the original table.
     *
     * @param {number} rowIndex
     * Local row index to get the original row index for.
     *
     * @return {number|undefined}
     * Returns the original row index or `undefined` if not found.
     */
    getOriginalRowIndex(rowIndex) {
        const { originalRowIndexes } = this;
        if (originalRowIndexes) {
            return originalRowIndexes[rowIndex];
        }
        return rowIndex;
    }
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRows}.
     *
     * @function Highcharts.DataTable#getRow
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names in order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnIds) {
        return this.getRows(rowIndex, 1, columnIds)[0];
    }
    /**
     * Returns the number of rows in this table.
     *
     * @function Highcharts.DataTable#getRowCount
     *
     * @return {number}
     * Number of rows in this table.
     */
    getRowCount() {
        // @todo Implement via property getter `.length` browsers supported
        return this.rowCount;
    }
    /**
     * Retrieves the index of the first row matching a specific cell value.
     *
     * @function Highcharts.DataTable#getRowIndexBy
     *
     * @param {string} columnId
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @param {number} [rowIndexOffset]
     * Index offset to start searching.
     *
     * @return {number|undefined}
     * Index of the first row matching the cell value.
     */
    getRowIndexBy(columnId, cellValue, rowIndexOffset) {
        const table = this;
        const column = table.columns[columnId];
        if (column) {
            let rowIndex = -1;
            if (Array.isArray(column)) {
                // Normal array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            else if (isNumber(cellValue)) {
                // Typed array
                rowIndex = column.indexOf(cellValue, rowIndexOffset);
            }
            if (rowIndex !== -1) {
                return rowIndex;
            }
        }
    }
    /**
     * Retrieves the row at a given index. This function is a simplified wrap of
     * {@link getRowObjects}.
     *
     * @function Highcharts.DataTable#getRowObject
     *
     * @param {number} rowIndex
     * Row index.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns the row values, or `undefined` if not found.
     */
    getRowObject(rowIndex, columnIds) {
        return this.getRowObjects(rowIndex, 1, columnIds)[0];
    }
    /**
     * Fetches all or a number of rows as an object.
     *
     * @function Highcharts.DataTable#getRowObjects
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRowObject}
     * Returns retrieved rows.
     */
    getRowObjects(rowIndex = 0, rowCount = (this.rowCount - rowIndex), columnIds) {
        const table = this, columns = table.columns, rows = new Array(rowCount);
        columnIds = (columnIds || Object.keys(columns));
        for (let i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column, row; i < iEnd; ++i, ++i2) {
            row = rows[i2] = {};
            for (const columnId of columnIds) {
                column = columns[columnId];
                row[columnId] = (column ? column[i] : void 0);
            }
        }
        return rows;
    }
    /**
     * Fetches all or a number of rows as an array.
     *
     * @function Highcharts.DataTable#getRows
     *
     * @param {number} [rowIndex]
     * Index of the first row to fetch. Defaults to first row at index `0`.
     *
     * @param {number} [rowCount]
     * Number of rows to fetch. Defaults to maximal number of rows.
     *
     * @param {Array<string>} [columnIds]
     * Column names and their order to retrieve.
     *
     * @return {Highcharts.DataTableRow}
     * Returns retrieved rows.
     */
    getRows(rowIndex = 0, rowCount = (this.rowCount - rowIndex), columnIds) {
        const table = this, columns = table.columns, rows = new Array(rowCount);
        columnIds = (columnIds || Object.keys(columns));
        for (let i = rowIndex, i2 = 0, iEnd = Math.min(table.rowCount, (rowIndex + rowCount)), column, row; i < iEnd; ++i, ++i2) {
            row = rows[i2] = [];
            for (const columnId of columnIds) {
                column = columns[columnId];
                row.push(column ? column[i] : void 0);
            }
        }
        return rows;
    }
    /**
     * Returns the unique version tag of the current state of the table.
     *
     * @function Highcharts.DataTable#getVersionTag
     *
     * @return {string}
     * Unique version tag.
     */
    getVersionTag() {
        return this.versionTag;
    }
    /**
     * Determines whether all specified column names exist in the table.
     *
     * @function Highcharts.DataTable#hasColumns
     *
     * @param {Array<string>} columnIds
     * Column names to check.
     *
     * @return {boolean}
     * Returns `true` if all columns have been found, otherwise `false`.
     */
    hasColumns(columnIds) {
        const table = this, columns = table.columns;
        for (let i = 0, iEnd = columnIds.length, columnId; i < iEnd; ++i) {
            columnId = columnIds[i];
            if (!columns[columnId]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Checks if any row in the specified column contains the given cell value.
     *
     * @function Highcharts.DataTable#hasRowWith
     *
     * @param {string} columnId
     * Column to search in.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to search for. `NaN` and `undefined` are not supported.
     *
     * @return {boolean}
     * True, if a row has been found, otherwise false.
     */
    hasRowWith(columnId, cellValue) {
        const table = this;
        const column = table.columns[columnId];
        // Normal array
        if (Array.isArray(column)) {
            return (column.indexOf(cellValue) !== -1);
        }
        // Typed array
        if (defined(cellValue) && Number.isFinite(cellValue)) {
            return (column.indexOf(+cellValue) !== -1);
        }
        return false;
    }
    /**
     * Registers a callback function to be executed when a specific event is
     * emitted. To stop listening to the event, call the function returned by
     * this method.
     *
     * @function Highcharts.DataTable#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataTable>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on(type, callback) {
        return DataTable_addEvent(this, type, callback);
    }
    /**
     * Changes the ID of an existing column to a new ID, effectively renaming
     * the column.
     *
     * @function Highcharts.DataTable#changeColumnId
     *
     * @param {string} columnId
     * Id of the column to be changed.
     *
     * @param {string} newColumnId
     * New id of the column.
     *
     * @return {boolean}
     * Returns `true` if successful, `false` if the column was not found.
     */
    changeColumnId(columnId, newColumnId) {
        const table = this, columns = table.columns;
        if (columns[columnId]) {
            if (columnId !== newColumnId) {
                columns[newColumnId] = columns[columnId];
                delete columns[columnId];
            }
            return true;
        }
        return false;
    }
    /**
     * Sets the value of a specific cell identified by column ID and row index.
     * If the column does not exist, it will be created. If the row index is
     * beyond the current row count, the table will be expanded to accommodate
     * the new cell.
     *
     * @function Highcharts.DataTable#setCell
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {number|undefined} rowIndex
     * Row index to set.
     *
     * @param {Highcharts.DataTableCellType} cellValue
     * Cell value to set.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setCell
     * @emits #afterSetCell
     */
    setCell(columnId, rowIndex, cellValue, eventDetail) {
        const table = this, columns = table.columns, modifier = table.modifier;
        let column = columns[columnId];
        if (column && column[rowIndex] === cellValue) {
            return;
        }
        table.emit({
            type: 'setCell',
            cellValue,
            columnId: columnId,
            detail: eventDetail,
            rowIndex
        });
        if (!column) {
            column = columns[columnId] = new Array(table.rowCount);
        }
        if (rowIndex >= table.rowCount) {
            table.rowCount = (rowIndex + 1);
        }
        column[rowIndex] = cellValue;
        if (modifier) {
            modifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetCell',
            cellValue,
            columnId: columnId,
            detail: eventDetail,
            rowIndex
        });
    }
    /**
     * Replaces or updates multiple columns in the table with new data. If a
     * column does not exist, it will be created and added to the table.
     *
     * @function Highcharts.DataTable#setColumns
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Keep undefined to reset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @param {boolean} [typeAsOriginal=false]
     * Determines whether the original column retains its type when data
     * replaced. If `true`, the original column keeps its type. If not
     * (default), the original column will adopt the type of the replacement
     * column.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail, typeAsOriginal) {
        const table = this, tableColumns = table.columns, tableModifier = table.modifier, columnIds = Object.keys(columns);
        let rowCount = table.rowCount;
        table.emit({
            type: 'setColumns',
            columns,
            columnIds,
            detail: eventDetail,
            rowIndex
        });
        if (!defined(rowIndex) && !typeAsOriginal) {
            super.setColumns(columns, rowIndex, extend(eventDetail, { silent: true }));
        }
        else {
            for (let i = 0, iEnd = columnIds.length, column, tableColumn, columnId, ArrayConstructor; i < iEnd; ++i) {
                columnId = columnIds[i];
                column = columns[columnId];
                tableColumn = tableColumns[columnId];
                ArrayConstructor = Object.getPrototypeOf((tableColumn && typeAsOriginal) ? tableColumn : column).constructor;
                if (!tableColumn) {
                    tableColumn = new ArrayConstructor(rowCount);
                }
                else if (ArrayConstructor === Array) {
                    if (!Array.isArray(tableColumn)) {
                        tableColumn = Array.from(tableColumn);
                    }
                }
                else if (tableColumn.length < rowCount) {
                    tableColumn =
                        new ArrayConstructor(rowCount);
                    tableColumn.set(tableColumns[columnId]);
                }
                tableColumns[columnId] = tableColumn;
                for (let i = (rowIndex || 0), iEnd = column.length; i < iEnd; ++i) {
                    tableColumn[i] = column[i];
                }
                rowCount = Math.max(rowCount, column.length);
            }
            this.applyRowCount(rowCount);
        }
        if (tableModifier) {
            tableModifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetColumns',
            columns,
            columnIds,
            detail: eventDetail,
            rowIndex
        });
    }
    /**
     * Assigns a new data modifier to the table.
     *
     * This method does not modify the table directly. Instead, it sets the
     * `.modified` property of the table with a modified copy of this table,
     * as produced by the modifier.
     *
     * @param {Highcharts.DataModifier} [modifier]
     * Modifier to set, or `undefined` to unset.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Resolves to this table if successful, or rejects on failure.
     *
     * @emits #setModifier
     * @emits #afterSetModifier
     */
    setModifier(modifier, eventDetail) {
        const table = this;
        let promise;
        table.emit({
            type: 'setModifier',
            detail: eventDetail,
            modifier,
            modified: table.getModified()
        });
        table.modifier = modifier;
        if (modifier) {
            promise = modifier.modify(table);
        }
        else {
            promise = Promise.resolve(table);
        }
        return promise
            .then((table) => {
            table.emit({
                type: 'afterSetModifier',
                detail: eventDetail,
                modifier,
                modified: table.getModified()
            });
            return table;
        })['catch']((error) => {
            table.emit({
                type: 'setModifierError',
                error,
                modifier,
                modified: table.getModified()
            });
            throw error;
        });
    }
    /**
     * Sets the original row indexes for the table. It is used to keep the
     * reference to the original rows when modifying the table.
     *
     * @param {Array<number|undefined>} originalRowIndexes
     * Original row indexes array.
     *
     * @param {boolean} omitLocalRowIndexes
     * Whether to omit the local row indexes calculation. Defaults to `false`.
     */
    setOriginalRowIndexes(originalRowIndexes, omitLocalRowIndexes = false) {
        this.originalRowIndexes = originalRowIndexes;
        if (omitLocalRowIndexes) {
            return;
        }
        const modifiedIndexes = this.localRowIndexes = [];
        for (let i = 0, iEnd = originalRowIndexes.length, originalIndex; i < iEnd; ++i) {
            originalIndex = originalRowIndexes[i];
            if (defined(originalIndex)) {
                modifiedIndexes[originalIndex] = i;
            }
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row, if no index was
     * provided, or if the index is higher than the total number of table rows.
     *
     * Note: This function is just a simplified wrap of
     * {@link Highcharts.DataTable#setRows}.
     *
     * @function Highcharts.DataTable#setRow
     *
     * @param {Highcharts.DataTableRow|Highcharts.DataTableRowObject} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRow(row, rowIndex, insert, eventDetail) {
        this.setRows([row], rowIndex, insert, eventDetail);
    }
    /**
     * Sets cell values for multiple rows. Will insert new rows, if no index was
     * was provided, or if the index is higher than the total number of table
     * rows.
     *
     * @function Highcharts.DataTable#setRows
     *
     * @param {Array<(Highcharts.DataTableRow|Highcharts.DataTableRowObject)>} rows
     * Row values to set.
     *
     * @param {number} [rowIndex]
     * Index of the first row to set. Leave `undefined` to add as new rows.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Highcharts.DataTableEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setRows
     * @emits #afterSetRows
     */
    setRows(rows, rowIndex = this.rowCount, insert, eventDetail) {
        const table = this, columns = table.columns, columnIds = Object.keys(columns), modifier = table.modifier, rowCount = rows.length;
        table.emit({
            type: 'setRows',
            detail: eventDetail,
            rowCount,
            rowIndex,
            rows
        });
        for (let i = 0, i2 = rowIndex, row; i < rowCount; ++i, ++i2) {
            row = rows[i];
            if (Object.keys(row).length === 0) { // Is empty Object
                for (let j = 0, jEnd = columnIds.length; j < jEnd; ++j) {
                    const column = columns[columnIds[j]];
                    if (insert) {
                        columns[columnIds[j]] = DataTable_splice(column, i2, 0, true, [null]).array;
                    }
                    else {
                        column[i2] = null;
                    }
                }
            }
            else if (Array.isArray(row)) {
                for (let j = 0, jEnd = columnIds.length; j < jEnd; ++j) {
                    columns[columnIds[j]][i2] = row[j];
                }
            }
            else {
                super.setRow(row, i2, insert, { silent: true });
            }
        }
        const indexRowCount = insert ?
            rowCount + rows.length :
            rowIndex + rowCount;
        if (indexRowCount > table.rowCount) {
            table.rowCount = indexRowCount;
            for (let i = 0, iEnd = columnIds.length; i < iEnd; ++i) {
                const columnId = columnIds[i];
                columns[columnId] = DataTable_setLength(columns[columnId], indexRowCount);
            }
        }
        if (modifier) {
            modifier.modifyTable(table);
        }
        table.emit({
            type: 'afterSetRows',
            detail: eventDetail,
            rowCount,
            rowIndex,
            rows
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTable = (DataTable);

;// ./code/es-modules/Data/Connectors/DataConnector.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Wojciech Chmiel
 *  - Gøran Slettemark
 *  - Dawid Dragula
 *  - Kamil Kubik
 *
 * */




const { addEvent: DataConnector_addEvent, fireEvent: DataConnector_fireEvent, merge: DataConnector_merge, pick } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class providing an interface for managing a DataConnector.
 */
class DataConnector {
    /**
     * Whether the connector is currently polling for new data.
     */
    get polling() {
        return !!this._polling;
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructor for the connector class.
     *
     * @param {DataConnectorOptions} [options]
     * Options to use in the connector.
     */
    constructor(options) {
        /**
         * Tables managed by this DataConnector instance.
         */
        this.dataTables = {};
        /**
         * Helper flag for detecting whether the data connector is loaded.
         * @internal
         */
        this.loaded = false;
        this.metadata = options.metadata || { columns: {} };
        this.options = options;
        // Create a data table for each defined in the dataTables user options.
        const dataTables = options?.dataTables;
        let dataTableIndex = 0;
        if (options.options) {
            // eslint-disable-next-line no-console
            console.error('The `DataConnectorOptions.options` property was removed in Dashboards v4.0.0. Check how to upgrade your connector to use the new options structure here: https://api.highcharts.com/dashboards/#interfaces/Data_DataTableOptions.DataTableOptions');
        }
        if (dataTables && dataTables?.length > 0) {
            for (let i = 0, iEnd = dataTables.length; i < iEnd; ++i) {
                const dataTable = dataTables[i];
                const key = dataTable?.key;
                this.dataTables[key ?? dataTableIndex] =
                    new Data_DataTable(dataTable);
                if (!key) {
                    dataTableIndex++;
                }
            }
        }
        else {
            // If user options dataTables is not defined, generate a default
            // table.
            this.dataTables[0] = new Data_DataTable({
                id: options.id // Required by DataTableCore
            });
        }
    }
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Returns a single data table instance based on the provided key.
     * Otherwise, returns the first data table.
     *
     * @param {string} [key]
     * The data table key.
     *
     * @return {DataTable}
     * The data table instance.
     */
    getTable(key) {
        if (key) {
            return this.dataTables[key];
        }
        return Object.values(this.dataTables)[0];
    }
    /**
     * Method for adding metadata for a single column.
     *
     * @param {string} name
     * The name of the column to be described.
     *
     * @param {DataConnector.MetaColumn} columnMeta
     * The metadata to apply to the column.
     */
    describeColumn(name, columnMeta) {
        const connector = this;
        const columns = connector.metadata.columns;
        columns[name] = DataConnector_merge(columns[name] || {}, columnMeta);
    }
    /**
     * Method for applying columns meta information to the whole DataConnector.
     *
     * @param {Highcharts.Dictionary<DataConnector.MetaColumn>} columns
     * Pairs of column names and MetaColumn objects.
     */
    describeColumns(columns) {
        const connector = this;
        const columnIds = Object.keys(columns);
        let columnId;
        while (typeof (columnId = columnIds.pop()) === 'string') {
            connector.describeColumn(columnId, columns[columnId]);
        }
    }
    /**
     * Returns the order of columns.
     *
     * @return {string[] | undefined}
     * Order of columns.
     */
    getColumnOrder() {
        const connector = this, columns = connector.metadata.columns, names = Object.keys(columns || {});
        if (names.length) {
            return names.sort((a, b) => (pick(columns[a].index, 0) - pick(columns[b].index, 0)));
        }
    }
    /**
     * Retrieves the columns of the dataTable,
     * applies column order from meta.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * An object with the properties `columnIds` and `columnValues`
     */
    getSortedColumns() {
        return this.getTable().getColumns(this.getColumnOrder());
    }
    /**
     * Sets the index and order of columns.
     *
     * @param {Array<string>} columnIds
     * Order of columns.
     */
    setColumnOrder(columnIds) {
        const connector = this;
        for (let i = 0, iEnd = columnIds.length; i < iEnd; ++i) {
            connector.describeColumn(columnIds[i], { index: i });
        }
    }
    /**
     * Updates the connector with new options.
     *
     * @param newOptions
     * The new options to be applied to the connector.
     *
     * @param reload
     * Whether to reload the connector after applying the new options.
     */
    async update(newOptions, reload = true) {
        this.emit({ type: 'beforeUpdate' });
        DataConnector_merge(true, this.options, newOptions);
        const { options } = this;
        if ('enablePolling' in newOptions || 'dataRefreshRate' in newOptions) {
            if ('enablePolling' in options && options.enablePolling) {
                this.stopPolling();
                this.startPolling(('dataRefreshRate' in options &&
                    typeof options.dataRefreshRate === 'number') ? Math.max(options.dataRefreshRate, 1) * 1000 : 1000);
            }
            else {
                this.stopPolling();
            }
        }
        if (reload) {
            await this.load();
        }
        this.emit({ type: 'afterUpdate' });
    }
    /**
     * The default load method, which fires the `afterLoad` event
     *
     * @return {Promise<DataConnector>}
     * The loaded connector.
     *
     * @emits DataConnector#afterLoad
     */
    load() {
        this.emit({ type: 'afterLoad' });
        return Promise.resolve(this);
    }
    /**
     * Applies the data modifiers to the data tables according to the
     * connector data tables options.
     */
    async applyTableModifiers() {
        const tableOptionsArray = this.options?.dataTables;
        for (const [key, table] of Object.entries(this.dataTables)) {
            // Take data modifier options from the corresponsing data table
            // options, otherwise take the data modifier options from the
            // connector options.
            const dataModifierOptions = tableOptionsArray?.find((dataTable) => dataTable.key === key)?.dataModifier ?? this.options?.dataModifier;
            const ModifierClass = (dataModifierOptions &&
                Modifiers_DataModifier.types[dataModifierOptions.type]);
            await table.setModifier(ModifierClass ?
                new ModifierClass(dataModifierOptions) :
                void 0);
        }
        return this;
    }
    /**
     * Starts polling new data after the specific time span in milliseconds.
     *
     * @param {number} refreshTime
     * Refresh time in milliseconds between polls.
     */
    startPolling(refreshTime = 1000) {
        const connector = this;
        // Assign a new abort controller.
        this.pollingController = new AbortController();
        // Clear the polling timeout.
        window.clearTimeout(connector._polling);
        connector._polling = window.setTimeout(
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        () => connector
            .load()['catch']((error) => connector.emit({
            type: 'loadError',
            error
        }))
            .then(() => {
            if (connector._polling) {
                connector.startPolling(refreshTime);
            }
        }), refreshTime);
    }
    /**
     * Stops polling data. Shouldn't be performed if polling is already stopped.
     */
    stopPolling() {
        const connector = this;
        if (!connector.polling) {
            return;
        }
        // Abort the existing request.
        connector?.pollingController?.abort();
        // Clear the polling timeout.
        window.clearTimeout(connector._polling);
        delete connector._polling;
    }
    /**
     * Emits an event on the connector to all registered callbacks of this
     * event.
     *
     * @param {DataConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        DataConnector_fireEvent(this, e.type, e);
    }
    /**
     * Registers a callback for a specific connector event.
     *
     * @param type
     * Event type.
     *
     * @param callback
     * Function to register for the connector callback.
     *
     * @return {Function}
     * Function to unregister callback from the connector event.
     */
    on(type, callback) {
        return DataConnector_addEvent(this, type, callback);
    }
    /**
     * Iterates over the dataTables and initiates the corresponding converters.
     * Updates the dataTables and assigns the first converter.
     *
     * @param {T}[data]
     * Data specific to the corresponding converter.
     *
     * @param {DataConnector.CreateConverterFunction}[createConverter]
     * Creates a specific converter combining the dataTable options.
     *
     * @param {DataConnector.ParseDataFunction<T>}[parseData]
     * Runs the converter parse method with the specific data type.
     */
    initConverters(data, createConverter, parseData) {
        let index = 0;
        for (const [key, table] of Object.entries(this.dataTables)) {
            // Create a proper converter and parse its data.
            const converter = createConverter(key);
            const columns = parseData(converter, data);
            // Update the dataTable.
            table.deleteColumns();
            table.setColumns(columns);
            // Assign the first converter.
            if (index === 0) {
                this.converter = converter;
            }
            index++;
        }
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
(function (DataConnector) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with connector names and their class.
     */
    DataConnector.types = {};
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a connector class to the registry. The connector has to provide the
     * `DataConnector.options` property and the `DataConnector.load` method to
     * modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the connector class.
     *
     * @param {DataConnectorType} DataConnectorClass
     * Connector class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a connector registered with this key.
     */
    function registerType(key, DataConnectorClass) {
        return (!!key &&
            !DataConnector.types[key] &&
            !!(DataConnector.types[key] = DataConnectorClass));
    }
    DataConnector.registerType = registerType;
})(DataConnector || (DataConnector = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_DataConnector = (DataConnector);

;// ./code/es-modules/Data/Converters/DataConverterUtils.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Kamil Kubik
 *
 * */

const { isNumber: DataConverterUtils_isNumber } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Namespace
 *
 * */
var DataConverterUtils;
(function (DataConverterUtils) {
    /* *
    *
    *  Properties
    *
    * */
    /* *
    *
    * Functions
    *
    * */
    /**
     * Converts a value to a Date.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {globalThis.Date}
     * Converted value as a Date.
     */
    function asDate(value, converter) {
        let timestamp;
        if (typeof value === 'string') {
            timestamp = converter.parseDate(value);
        }
        else if (typeof value === 'number') {
            timestamp = value;
        }
        else if (value instanceof Date) {
            return value;
        }
        else {
            timestamp = converter.parseDate(asString(value));
        }
        return new Date(timestamp);
    }
    DataConverterUtils.asDate = asDate;
    /**
     * Converts a value to a number.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {number}
     * Converted value as a number.
     */
    function asNumber(value, decimalRegExp) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'boolean') {
            return value ? 1 : 0;
        }
        if (typeof value === 'string') {
            const decimalRegex = decimalRegExp;
            if (value.indexOf(' ') > -1) {
                value = value.replace(/\s+/g, '');
            }
            if (decimalRegex) {
                if (!decimalRegex.test(value)) {
                    return NaN;
                }
                value = value.replace(decimalRegex, '$1.$2');
            }
            return parseFloat(value);
        }
        if (value instanceof Date) {
            return value.getDate();
        }
        if (value) {
            return value.getRowCount();
        }
        return NaN;
    }
    DataConverterUtils.asNumber = asNumber;
    /**
     * Converts a value to a string.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {string}
     * Converted value as a string.
     */
    function asString(value) {
        return '' + value;
    }
    DataConverterUtils.asString = asString;
    /**
     * Converts a value to a boolean.
     *
     * @param {DataConverter.Type} value
     * Value to convert.
     *
     * @return {boolean}
     * Converted value as a boolean.
     */
    function asBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            return value !== '' && value !== '0' && value !== 'false';
        }
        return !!asNumber(value);
    }
    DataConverterUtils.asBoolean = asBoolean;
    /**
     * Guesses the potential type of a string value for parsing CSV etc.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {'number' | 'string' | 'Date'}
     * Type string, either `string`, `Date`, or `number`.
     */
    function guessType(value, converter) {
        let result = 'string';
        if (typeof value === 'string') {
            const trimedValue = DataConverterUtils.trim(`${value}`), decimalRegExp = converter.decimalRegExp;
            let innerTrimedValue = DataConverterUtils.trim(trimedValue, true);
            if (decimalRegExp) {
                innerTrimedValue = (decimalRegExp.test(innerTrimedValue) ?
                    innerTrimedValue.replace(decimalRegExp, '$1.$2') :
                    '');
            }
            const floatValue = parseFloat(innerTrimedValue);
            if (+innerTrimedValue === floatValue) {
                // String is numeric
                value = floatValue;
            }
            else {
                // Determine if a date string
                const dateValue = converter.parseDate(value);
                result = DataConverterUtils_isNumber(dateValue) ? 'Date' : 'string';
            }
        }
        if (typeof value === 'number') {
            // Greater than milliseconds in a year assumed timestamp
            result = value > 365 * 24 * 3600 * 1000 ? 'Date' : 'number';
        }
        return result;
    }
    DataConverterUtils.guessType = guessType;
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
    function trim(str, inside) {
        if (typeof str === 'string') {
            str = str.replace(/^\s+|\s+$/g, '');
            // Clear white space insdie the string, like thousands separators
            if (inside && /^[\d\s]+$/.test(str)) {
                str = str.replace(/\s/g, '');
            }
        }
        return str;
    }
    DataConverterUtils.trim = trim;
    /**
     * Parses an array of columns to a column collection. If more headers are
     * provided, the corresponding, empty columns are added.
     *
     * @param {DataTable.Column[]} [columnsArray]
     * Array of columns.
     *
     * @param {string[]} [headers]
     * Column ids to use.
     *
     * @return {DataTable.ColumnCollection}
     * Parsed columns.
     */
    function getColumnsCollection(columnsArray = [], headers) {
        const columns = {};
        for (let i = 0, iEnd = Math.max(headers.length, columnsArray.length); i < iEnd; ++i) {
            const columnId = headers[i] || `${i}`;
            columns[columnId] = columnsArray[i] ? columnsArray[i].slice() : [];
        }
        return columns;
    }
    DataConverterUtils.getColumnsCollection = getColumnsCollection;
})(DataConverterUtils || (DataConverterUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_DataConverterUtils = (DataConverterUtils);

;// ./code/es-modules/Data/Converters/DataConverter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Sebastian Bochan
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *  - Wojciech Chmiel
 *  - Jomar Hønsi
 *  - Kamil Kubik
 *
 * */



const { addEvent: DataConverter_addEvent, fireEvent: DataConverter_fireEvent, merge: DataConverter_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Base class providing an interface and basic methods for a DataConverter
 *
 * @private
 */
class DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the DataConverter.
     *
     * @param {DataConverter.UserOptions} [options]
     * Options for the DataConverter.
     */
    constructor(options) {
        /* *
         *
         *  Properties
         *
         * */
        /**
         * A collection of available date formats.
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})([\-\.\/])(\d{1,2})\2(\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], +match[3] - 1, +match[4]) : NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], +match[3] - 1, +match[1]) : NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4], +match[1] - 1, +match[3]) : NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    const d = new Date();
                    if (!match) {
                        return NaN;
                    }
                    let year = +match[4];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, +match[3] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})([\-\.\/])(\d{1,2})\2(\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[4] + 2000, +match[1] - 1, +match[3]) :
                        NaN);
                }
            }
        };
        const mergedOptions = DataConverter_merge(DataConverter.defaultOptions, options);
        let regExpPoint = mergedOptions.decimalPoint;
        if (regExpPoint === '.' || regExpPoint === ',') {
            regExpPoint = regExpPoint === '.' ? '\\.' : ',';
            this.decimalRegExp =
                new RegExp('^(-?[0-9]+)' + regExpPoint + '([0-9]+)$');
        }
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Converts a string value based on its guessed type.
     *
     * @param {*} value
     * The value to examine.
     *
     * @return {number | string | Date}
     * The converted value.
     */
    convertByType(value) {
        const converter = this, typeMap = {
            'number': (value) => Converters_DataConverterUtils.asNumber(value, converter.decimalRegExp),
            'Date': (value) => Converters_DataConverterUtils.asDate(value, converter),
            'string': Converters_DataConverterUtils.asString
        };
        return typeMap[Converters_DataConverterUtils.guessType(value, converter)]
            .call(converter, value);
    }
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
    deduceDateFormat(data, limit, save) {
        const parser = this, stable = [], max = [];
        let format = 'YYYY/mm/dd', thing, guessedFormat = [], i = 0, madeDeduction = false, elem, j;
        if (!limit || limit > data.length) {
            limit = data.length;
        }
        for (; i < limit; i++) {
            if (typeof data[i] !== 'undefined' &&
                data[i] && data[i].length) {
                thing = data[i]
                    .trim()
                    .replace(/[\-\.\/]/g, ' ')
                    .split(' ');
                guessedFormat = [
                    '',
                    '',
                    ''
                ];
                for (j = 0; j < thing.length; j++) {
                    if (j < guessedFormat.length) {
                        elem = parseInt(thing[j], 10);
                        if (elem) {
                            max[j] = (!max[j] || max[j] < elem) ? elem : max[j];
                            if (typeof stable[j] !== 'undefined') {
                                if (stable[j] !== elem) {
                                    stable[j] = false;
                                }
                            }
                            else {
                                stable[j] = elem;
                            }
                            if (elem > 31) {
                                if (elem < 100) {
                                    guessedFormat[j] = 'YY';
                                }
                                else {
                                    guessedFormat[j] = 'YYYY';
                                }
                            }
                            else if (elem > 12 &&
                                elem <= 31) {
                                guessedFormat[j] = 'dd';
                                madeDeduction = true;
                            }
                            else if (!guessedFormat[j].length) {
                                guessedFormat[j] = 'mm';
                            }
                        }
                    }
                }
            }
        }
        if (madeDeduction) {
            // This handles a few edge cases with hard to guess dates
            for (j = 0; j < stable.length; j++) {
                if (stable[j] !== false) {
                    if (max[j] > 12 &&
                        guessedFormat[j] !== 'YY' &&
                        guessedFormat[j] !== 'YYYY') {
                        guessedFormat[j] = 'YY';
                    }
                }
                else if (max[j] > 12 && guessedFormat[j] === 'mm') {
                    guessedFormat[j] = 'dd';
                }
            }
            // If the middle one is dd, and the last one is dd,
            // the last should likely be year.
            if (guessedFormat.length === 3 &&
                guessedFormat[1] === 'dd' &&
                guessedFormat[2] === 'dd') {
                guessedFormat[2] = 'YY';
            }
            format = guessedFormat.join('/');
            // If the caculated format is not valid, we need to present an
            // error.
        }
        // Save the deduced format in the converter options.
        if (save) {
            parser.options.dateFormat = format;
        }
        return format;
    }
    /**
     * Emits an event on the DataConverter instance.
     *
     * @param {DataConverter.Event} [e]
     * Event object containing additional event data
     */
    emit(e) {
        DataConverter_fireEvent(this, e.type, e);
    }
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
    on(type, callback) {
        return DataConverter_addEvent(this, type, callback);
    }
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
    parseDate(value, dateFormatProp) {
        const converter = this, options = converter.options;
        let dateFormat = dateFormatProp || options.dateFormat, result = NaN, key, match = null;
        if (options.parseDate) {
            result = options.parseDate(value);
        }
        else {
            const dateFormats = converter.dateFormats;
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in dateFormats) { // eslint-disable-line guard-for-in
                    const format = dateFormats[key];
                    match = value.match(format.regex);
                    if (match) {
                        dateFormat = key;
                        result = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                let format = dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = dateFormats['YYYY/mm/dd'];
                }
                match = value.match(format.regex);
                if (match) {
                    result = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                const parsed = Date.parse(value);
                if (!isNaN(parsed)) {
                    result =
                        parsed - new Date(parsed).getTimezoneOffset() * 60000;
                    // Reset dates without year in Chrome
                    if (!value.includes('2001') &&
                        new Date(result).getFullYear() === 2001) {
                        result = NaN;
                    }
                }
            }
        }
        return result;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
DataConverter.defaultOptions = {
    dateFormat: '',
    firstRowAsNames: true
};
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * Additionally provided types for events and conversion.
 */
(function (DataConverter) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Registry as a record object with connector names and their class.
     */
    DataConverter.types = {};
    /* *
     *
     *  Functions
     *
     * */
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
    function registerType(key, DataConverterClass) {
        return (!!key &&
            !DataConverter.types[key] &&
            !!(DataConverter.types[key] = DataConverterClass));
    }
    DataConverter.registerType = registerType;
})(DataConverter || (DataConverter = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_DataConverter = (DataConverter);

;// ./code/es-modules/Data/DataCursor.js
/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Class
 *
 * */
/**
 * This class manages state cursors pointing on {@link Data.DataTable}. It
 * creates a relation between states of the user interface and the table cells,
 * columns, or rows.
 *
 * @class
 * @name Data.DataCursor
 */
class DataCursor {
    /* *
     *
     *  Static Properties
     *
     * */
    /* *
     *
     *  Constructor
     *
     * */
    constructor(stateMap = {}) {
        this.emittingRegister = [];
        this.listenerMap = {};
        this.stateMap = stateMap;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * This function registers a listener for a specific state and table.
     *
     * @example
     * ```TypeScript
     * dataCursor.addListener(myTable.id, 'hover', (e: DataCursor.Event) => {
     *     if (e.cursor.type === 'position') {
     *         console.log(`Hover over row #${e.cursor.row}.`);
     *     }
     * });
     * ```
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table to listen to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table to listen to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to register.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    addListener(tableId, state, listener) {
        const listenerMap = this.listenerMap[tableId] = (this.listenerMap[tableId] ||
            {});
        const listeners = listenerMap[state] = (listenerMap[state] ||
            []);
        listeners.push(listener);
        return this;
    }
    /**
     * @private
     */
    buildEmittingTag(e) {
        return (e.cursor.type === 'position' ?
            [
                e.table.id,
                e.cursor.column,
                e.cursor.row,
                e.cursor.state,
                e.cursor.type
            ] :
            [
                e.table.id,
                e.cursor.columns,
                e.cursor.firstRow,
                e.cursor.lastRow,
                e.cursor.state,
                e.cursor.type
            ]).join('\0');
    }
    /**
     * This function emits a state cursor related to a table. It will provide
     * lasting state cursors of the table to listeners.
     *
     * @example
     * ```ts
     * dataCursor.emit(myTable, {
     *     type: 'position',
     *     column: 'city',
     *     row: 4,
     *     state: 'hover',
     * });
     * ```
     *
     * @param {Data.DataTable} table
     * The related table of the cursor.
     *
     * @param {Data.DataCursor.Type} cursor
     * The state cursor to emit.
     *
     * @param {Event} [event]
     * Optional event information from a related source.
     *
     * @param {boolean} [lasting]
     * Whether this state cursor should be kept until it is cleared with
     * {@link DataCursor#remitCursor}.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    emitCursor(table, cursor, event, lasting) {
        const tableId = table.id, state = cursor.state, listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            const stateMap = this.stateMap[tableId] = (this.stateMap[tableId] ?? {});
            const cursors = stateMap[cursor.state] || [];
            if (lasting) {
                if (!cursors.length) {
                    stateMap[cursor.state] = cursors;
                }
                if (DataCursor.getIndex(cursor, cursors) === -1) {
                    cursors.push(cursor);
                }
            }
            const e = {
                cursor,
                cursors,
                table
            };
            if (event) {
                e.event = event;
            }
            const emittingRegister = this.emittingRegister, emittingTag = this.buildEmittingTag(e);
            if (emittingRegister.indexOf(emittingTag) >= 0) {
                // Break call stack loops
                return this;
            }
            try {
                this.emittingRegister.push(emittingTag);
                for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
                    listeners[i].call(this, e);
                }
            }
            finally {
                const index = this.emittingRegister.indexOf(emittingTag);
                if (index >= 0) {
                    this.emittingRegister.splice(index, 1);
                }
            }
        }
        return this;
    }
    /**
     * Removes a lasting state cursor.
     *
     * @function #remitCursor
     *
     * @param {string} tableId
     * ID of the related cursor table.
     *
     * @param {Data.DataCursor.Type} cursor
     * Copy or reference of the cursor.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    remitCursor(tableId, cursor) {
        const cursors = (this.stateMap[tableId] &&
            this.stateMap[tableId][cursor.state]);
        if (cursors) {
            const index = DataCursor.getIndex(cursor, cursors);
            if (index >= 0) {
                cursors.splice(index, 1);
            }
        }
        return this;
    }
    /**
     * This function removes a listener.
     *
     * @function #addListener
     *
     * @param {Data.DataCursor.TableId} tableId
     * The ID of the table the listener is connected to.
     *
     * @param {Data.DataCursor.State} state
     * The state on the table the listener is listening to.
     *
     * @param {Data.DataCursor.Listener} listener
     * The listener to deregister.
     *
     * @return {Data.DataCursor}
     * Returns the DataCursor instance for a call chain.
     */
    removeListener(tableId, state, listener) {
        const listeners = (this.listenerMap[tableId] &&
            this.listenerMap[tableId][state]);
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
        return this;
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
/**
 * @class Data.DataCursor
 */
(function (DataCursor) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Finds the index of an cursor in an array.
     * @private
     */
    function getIndex(needle, cursors) {
        if (needle.type === 'position') {
            for (let cursor, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
                cursor = cursors[i];
                if (cursor.type === 'position' &&
                    cursor.state === needle.state &&
                    cursor.column === needle.column &&
                    cursor.row === needle.row) {
                    return i;
                }
            }
        }
        else {
            const columnNeedle = JSON.stringify(needle.columns);
            for (let cursor, i = 0, iEnd = cursors.length; i < iEnd; ++i) {
                cursor = cursors[i];
                if (cursor.type === 'range' &&
                    cursor.state === needle.state &&
                    cursor.firstRow === needle.firstRow &&
                    cursor.lastRow === needle.lastRow &&
                    JSON.stringify(cursor.columns) === columnNeedle) {
                    return i;
                }
            }
        }
        return -1;
    }
    DataCursor.getIndex = getIndex;
    /**
     * Checks whether two cursor share the same properties.
     * @private
     */
    function isEqual(cursorA, cursorB) {
        if (cursorA.type === 'position' && cursorB.type === 'position') {
            return (cursorA.column === cursorB.column &&
                cursorA.row === cursorB.row &&
                cursorA.state === cursorB.state);
        }
        if (cursorA.type === 'range' && cursorB.type === 'range') {
            return (cursorA.firstRow === cursorB.firstRow &&
                cursorA.lastRow === cursorB.lastRow &&
                (JSON.stringify(cursorA.columns) ===
                    JSON.stringify(cursorB.columns)));
        }
        return false;
    }
    DataCursor.isEqual = isEqual;
    /**
     * Checks whether a cursor is in a range.
     * @private
     */
    function isInRange(needle, range) {
        if (range.type === 'position') {
            range = toRange(range);
        }
        if (needle.type === 'position') {
            needle = toRange(needle, range);
        }
        const needleColumns = needle.columns;
        const rangeColumns = range.columns;
        return (needle.firstRow >= range.firstRow &&
            needle.lastRow <= range.lastRow &&
            (!needleColumns ||
                !rangeColumns ||
                needleColumns.every((column) => rangeColumns.indexOf(column) >= 0)));
    }
    DataCursor.isInRange = isInRange;
    /**
     * @private
     */
    function toPositions(cursor) {
        if (cursor.type === 'position') {
            return [cursor];
        }
        const columns = (cursor.columns || []);
        const positions = [];
        const state = cursor.state;
        for (let row = cursor.firstRow, rowEnd = cursor.lastRow; row < rowEnd; ++row) {
            if (!columns.length) {
                positions.push({
                    type: 'position',
                    row,
                    state
                });
                continue;
            }
            for (let column = 0, columnEnd = columns.length; column < columnEnd; ++column) {
                positions.push({
                    type: 'position',
                    column: columns[column],
                    row,
                    state
                });
            }
        }
        return positions;
    }
    DataCursor.toPositions = toPositions;
    /**
     * @private
     */
    function toRange(cursor, defaultRange) {
        if (cursor.type === 'range') {
            return cursor;
        }
        const range = {
            type: 'range',
            firstRow: (cursor.row ??
                (defaultRange && defaultRange.firstRow) ??
                0),
            lastRow: (cursor.row ??
                (defaultRange && defaultRange.lastRow) ??
                Number.MAX_VALUE),
            state: cursor.state
        };
        if (typeof cursor.column !== 'undefined') {
            range.columns = [cursor.column];
        }
        return range;
    }
    DataCursor.toRange = toRange;
})(DataCursor || (DataCursor = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataCursor = (DataCursor);

;// ./code/es-modules/Data/DataPool.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */



const { addEvent: DataPool_addEvent, fireEvent: DataPool_fireEvent, merge: DataPool_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Data pool to load connectors on-demand.
 *
 * @class
 * @name Data.DataPool
 *
 * @param {DataPoolOptions} options
 * Pool options with all connectors.
 */
class DataPool {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options) {
        this.options = DataPool_merge(DataPool.defaultOptions, options);
        this.connectors = {};
        this.waiting = {};
    }
    /* *
     *
     *  Methods
     *
     * */
    /**
     * Emits an event on this data pool to all registered callbacks of the given
     * event.
     *
     * @param {DataTable.Event} e
     * Event object with event information.
     */
    emit(e) {
        DataPool_fireEvent(this, e.type, e);
    }
    /**
     * Loads the connector.
     *
     * @function Data.DataPool#getConnector
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    getConnector(connectorId) {
        const connector = this.connectors[connectorId];
        // Already loaded
        if (connector?.loaded) {
            return Promise.resolve(connector);
        }
        let waitingList = this.waiting[connectorId];
        // Start loading
        if (!waitingList) {
            waitingList = this.waiting[connectorId] = [];
            const connectorOptions = this.getConnectorOptions(connectorId);
            if (!connectorOptions) {
                throw new Error(`Connector '${connectorId}' not found.`);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this
                .loadConnector(connectorOptions)
                .then((connector) => {
                delete this.waiting[connectorId];
                for (let i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][0](connector);
                }
            })['catch']((error) => {
                delete this.waiting[connectorId];
                for (let i = 0, iEnd = waitingList.length; i < iEnd; ++i) {
                    waitingList[i][1](error);
                }
            });
        }
        // Add request to waiting list
        return new Promise((resolve, reject) => {
            waitingList.push([resolve, reject]);
        });
    }
    /**
     * Returns the IDs of all connectors.
     *
     * @private
     *
     * @return {Array<string>}
     * Names of all connectors.
     */
    getConnectorIds() {
        const connectors = this.options.connectors, connectorIds = [];
        for (let i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            connectorIds.push(connectors[i].id);
        }
        return connectorIds;
    }
    /**
     * Loads the options of the connector.
     *
     * @private
     *
     * @param {string} connectorId
     * ID of the connector.
     *
     * @return {DataConnectorTypeOptions | undefined}
     * Returns the options of the connector, or `undefined` if not found.
     */
    getConnectorOptions(connectorId) {
        const connectors = this.options.connectors;
        for (let i = 0, iEnd = connectors.length; i < iEnd; ++i) {
            if (connectors[i].id === connectorId) {
                return connectors[i];
            }
        }
    }
    /**
     * Tests whether the connector has never been requested.
     *
     * @param {string} connectorId
     * Name of the connector.
     *
     * @return {boolean}
     * Returns `true`, if the connector has never been requested, otherwise
     * `false`.
     */
    isNewConnector(connectorId) {
        return !this.connectors[connectorId];
    }
    /**
     * Instantiates the connector class for the given options and loads its
     * data.
     *
     * @private
     *
     * @param {Data.DataPoolConnectorOptions} options
     * Options of connector.
     *
     * @return {Promise<Data.DataConnectorType>}
     * Returns the connector.
     */
    loadConnector(options) {
        return new Promise((resolve, reject) => {
            this.emit({
                type: 'load',
                options
            });
            const ConnectorClass = Connectors_DataConnector.types[options.type];
            if (!ConnectorClass) {
                throw new Error(`Connector type not found. (${options.type})`);
            }
            const connector = this.connectors[options.id] =
                new ConnectorClass(options);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connector
                .load()
                .then(({ converter }) => {
                connector.converter = converter;
                connector.loaded = true;
                this.emit({
                    type: 'afterLoad',
                    options
                });
                resolve(connector);
            })['catch'](reject);
        });
    }
    /**
     * Cancels all data connectors pending requests.
     */
    cancelPendingRequests() {
        const { connectors } = this;
        for (const connectorKey of Object.keys(connectors)) {
            connectors[connectorKey].stopPolling();
        }
    }
    /**
     * Registers a callback for a specific event.
     *
     * @function Highcharts.DataPool#on
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {Highcharts.EventCallbackFunction<Highcharts.DataPool>} callback
     * Function to register for an event callback.
     *
     * @return {Function}
     * Function to unregister callback from the event.
     */
    on(type, callback) {
        return DataPool_addEvent(this, type, callback);
    }
    /**
     * Sets connector options under the specified `options.id`.
     *
     * @param options
     * Connector options to set.
     */
    setConnectorOptions(options) {
        const connectorsOptions = this.options.connectors;
        const connectorsInstances = this.connectors;
        this.emit({
            type: 'setConnectorOptions',
            options
        });
        for (let i = 0, iEnd = connectorsOptions.length; i < iEnd; ++i) {
            if (connectorsOptions[i].id === options.id) {
                connectorsOptions.splice(i, 1);
                break;
            }
        }
        // TODO: Check if can be refactored
        if (connectorsInstances[options.id]) {
            connectorsInstances[options.id].stopPolling();
            delete connectorsInstances[options.id];
        }
        connectorsOptions.push(options);
        this.emit({
            type: 'afterSetConnectorOptions',
            options
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
DataPool.defaultOptions = {
    connectors: []
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataPool = (DataPool);

;// ./code/es-modules/Data/Formula/FormulaParser.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { isString } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * @private
 */
const booleanRegExp = /^(?:FALSE|TRUE)/;
/**
 * `.`-separated decimal.
 * @private
 */
const decimal1RegExp = /^[+\-]?\d+(?:\.\d+)?(?:e[+\-]\d+)?/;
/**
 * `,`-separated decimal.
 * @private
 */
const decimal2RegExp = /^[+\-]?\d+(?:,\d+)?(?:e[+\-]\d+)?/;
/**
 * - Group 1: Function name
 * @private
 */
const functionRegExp = /^([A-Z][A-Z\d\.]*)\(/;
/**
 * @private
 */
const operatorRegExp = /^(?:[+\-*\/^<=>]|<=|=>)/;
/**
 * - Group 1: Start column
 * - Group 2: Start row
 * - Group 3: End column
 * - Group 4: End row
 * @private
 */
const rangeA1RegExp = /^(\$?[A-Z]+)(\$?\d+)\:(\$?[A-Z]+)(\$?\d+)/;
/**
 * - Group 1: Start row
 * - Group 2: Start column
 * - Group 3: End row
 * - Group 4: End column
 * @private
 */
const rangeR1C1RegExp = /^R(\d*|\[\d+\])C(\d*|\[\d+\])\:R(\d*|\[\d+\])C(\d*|\[\d+\])/;
/**
 * - Group 1: Column
 * - Group 2: Row
 * @private
 */
const referenceA1RegExp = /^(\$?[A-Z]+)(\$?\d+)(?![\:C])/;
/**
 * - Group 1: Row
 * - Group 2: Column
 * @private
 */
const referenceR1C1RegExp = /^R(\d*|\[\d+\])C(\d*|\[\d+\])(?!\:)/;
/* *
 *
 *  Functions
 *
 * */
/**
 * Extracts the inner string of the most outer parantheses.
 *
 * @private
 *
 * @param {string} text
 * Text string to extract from.
 *
 * @return {string}
 * Extracted parantheses. If not found an exception will be thrown.
 */
function extractParantheses(text) {
    let parantheseLevel = 0;
    for (let i = 0, iEnd = text.length, char, parantheseStart = 1; i < iEnd; ++i) {
        char = text[i];
        if (char === '(') {
            if (!parantheseLevel) {
                parantheseStart = i + 1;
            }
            ++parantheseLevel;
            continue;
        }
        if (char === ')') {
            --parantheseLevel;
            if (!parantheseLevel) {
                return text.substring(parantheseStart, i);
            }
        }
    }
    if (parantheseLevel > 0) {
        const error = new Error('Incomplete parantheses.');
        error.name = 'FormulaParseError';
        throw error;
    }
    return '';
}
/**
 * Extracts the inner string value.
 *
 * @private
 *
 * @param {string} text
 * Text string to extract from.
 *
 * @return {string}
 * Extracted string. If not found an exception will be thrown.
 */
function extractString(text) {
    let start = -1;
    for (let i = 0, iEnd = text.length, char, escaping = false; i < iEnd; ++i) {
        char = text[i];
        if (char === '\\') {
            escaping = !escaping;
            continue;
        }
        if (escaping) {
            escaping = false;
            continue;
        }
        if (char === '"') {
            if (start < 0) {
                start = i;
            }
            else {
                return text.substring(start + 1, i); // `ì` is excluding
            }
        }
    }
    const error = new Error('Incomplete string.');
    error.name = 'FormulaParseError';
    throw error;
}
/**
 * Parses an argument string. Formula arrays with a single term will be
 * simplified to the term.
 *
 * @private
 *
 * @param {string} text
 * Argument string to parse.
 *
 * @param {boolean} alternativeSeparators
 * Whether to expect `;` as argument separator and `,` as decimal separator.
 *
 * @return {Formula|Function|Range|Reference|Value}
 * The recognized term structure.
 */
function parseArgument(text, alternativeSeparators) {
    let match;
    // Check for a R1C1:R1C1 range notation
    match = text.match(rangeR1C1RegExp);
    if (match) {
        const beginColumnRelative = (match[2] === '' || match[2][0] === '[');
        const beginRowRelative = (match[1] === '' || match[1][0] === '[');
        const endColumnRelative = (match[4] === '' || match[4][0] === '[');
        const endRowRelative = (match[3] === '' || match[3][0] === '[');
        const range = {
            type: 'range',
            beginColumn: (beginColumnRelative ?
                parseInt(match[2].substring(1, -1) || '0', 10) :
                parseInt(match[2], 10) - 1),
            beginRow: (beginRowRelative ?
                parseInt(match[1].substring(1, -1) || '0', 10) :
                parseInt(match[1], 10) - 1),
            endColumn: (endColumnRelative ?
                parseInt(match[4].substring(1, -1) || '0', 10) :
                parseInt(match[4], 10) - 1),
            endRow: (endRowRelative ?
                parseInt(match[3].substring(1, -1) || '0', 10) :
                parseInt(match[3], 10) - 1)
        };
        if (beginColumnRelative) {
            range.beginColumnRelative = true;
        }
        if (beginRowRelative) {
            range.beginRowRelative = true;
        }
        if (endColumnRelative) {
            range.endColumnRelative = true;
        }
        if (endRowRelative) {
            range.endRowRelative = true;
        }
        return range;
    }
    // Check for a A1:A1 range notation
    match = text.match(rangeA1RegExp);
    if (match) {
        const beginColumnRelative = match[1][0] !== '$';
        const beginRowRelative = match[2][0] !== '$';
        const endColumnRelative = match[3][0] !== '$';
        const endRowRelative = match[4][0] !== '$';
        const range = {
            type: 'range',
            beginColumn: parseReferenceColumn(beginColumnRelative ?
                match[1] :
                match[1].substring(1)) - 1,
            beginRow: parseInt(beginRowRelative ?
                match[2] :
                match[2].substring(1), 10) - 1,
            endColumn: parseReferenceColumn(endColumnRelative ?
                match[3] :
                match[3].substring(1)) - 1,
            endRow: parseInt(endRowRelative ?
                match[4] :
                match[4].substring(1), 10) - 1
        };
        if (beginColumnRelative) {
            range.beginColumnRelative = true;
        }
        if (beginRowRelative) {
            range.beginRowRelative = true;
        }
        if (endColumnRelative) {
            range.endColumnRelative = true;
        }
        if (endRowRelative) {
            range.endRowRelative = true;
        }
        return range;
    }
    // Fallback to formula processing for other pattern types
    const formula = parseFormula(text, alternativeSeparators);
    return (formula.length === 1 && typeof formula[0] !== 'string' ?
        formula[0] :
        formula);
}
/**
 * Parse arguments string inside function parantheses.
 *
 * @private
 *
 * @param {string} text
 * Parantheses string of the function.
 *
 * @param {boolean} alternativeSeparators
 * Whether to expect `;` as argument separator and `,` as decimal separator.
 *
 * @return {Highcharts.FormulaArguments}
 * Parsed arguments array.
 */
function parseArguments(text, alternativeSeparators) {
    const args = [], argumentsSeparator = (alternativeSeparators ? ';' : ',');
    let parantheseLevel = 0, term = '';
    for (let i = 0, iEnd = text.length, char; i < iEnd; ++i) {
        char = text[i];
        // Check for separator
        if (char === argumentsSeparator &&
            !parantheseLevel &&
            term) {
            args.push(parseArgument(term, alternativeSeparators));
            term = '';
            // Check for a quoted string before skip logic
        }
        else if (char === '"' &&
            !parantheseLevel &&
            !term) {
            const string = extractString(text.substring(i));
            args.push(string);
            i += string.length + 1; // Only +1 to cover ++i in for-loop
            // Skip space and check paranthesis nesting
        }
        else if (char !== ' ') {
            term += char;
            if (char === '(') {
                ++parantheseLevel;
            }
            else if (char === ')') {
                --parantheseLevel;
            }
        }
    }
    // Look for left-overs from last argument
    if (!parantheseLevel && term) {
        args.push(parseArgument(term, alternativeSeparators));
    }
    return args;
}
/**
 * Checks if there's one of the following operator before the negative number
 * value: '*', '/' or '^'.
 *
 * Used to properly indicate a negative value reference or negate a directly
 * passed number value.
 */
function negativeReference(formula) {
    const formulaLength = formula.length;
    const priorFormula = formula[formulaLength - 2];
    return (formula[formulaLength - 1] === '-' &&
        isString(priorFormula) &&
        !!priorFormula.match(/\*|\/|\^/));
}
/**
 * Converts a spreadsheet formula string into a formula array. Throws a
 * `FormulaParserError` when the string can not be parsed.
 *
 * @private
 * @function Formula.parseFormula
 *
 * @param {string} text
 * Spreadsheet formula string, without the leading `=`.
 *
 * @param {boolean} alternativeSeparators
 * * `false` to expect `,` between arguments and `.` in decimals.
 * * `true` to expect `;` between arguments and `,` in decimals.
 *
 * @return {Formula.Formula}
 * Formula array representing the string.
 */
function parseFormula(text, alternativeSeparators) {
    const decimalRegExp = (alternativeSeparators ?
        decimal2RegExp :
        decimal1RegExp), formula = [];
    let match, next = (text[0] === '=' ? text.substring(1) : text).trim();
    while (next) {
        // Check for an R1C1 reference notation
        match = next.match(referenceR1C1RegExp);
        if (match) {
            const columnRelative = (match[2] === '' || match[2][0] === '[');
            const rowRelative = (match[1] === '' || match[1][0] === '[');
            const reference = {
                type: 'reference',
                column: (columnRelative ?
                    parseInt(match[2].substring(1, -1) || '0', 10) :
                    parseInt(match[2], 10) - 1),
                row: (rowRelative ?
                    parseInt(match[1].substring(1, -1) || '0', 10) :
                    parseInt(match[1], 10) - 1)
            };
            if (columnRelative) {
                reference.columnRelative = true;
            }
            if (rowRelative) {
                reference.rowRelative = true;
            }
            if (negativeReference(formula)) {
                formula.pop();
                reference.isNegative = true;
            }
            formula.push(reference);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for an A1 reference notation
        match = next.match(referenceA1RegExp);
        if (match) {
            const columnRelative = match[1][0] !== '$';
            const rowRelative = match[2][0] !== '$';
            const reference = {
                type: 'reference',
                column: parseReferenceColumn(columnRelative ?
                    match[1] :
                    match[1].substring(1)) - 1,
                row: parseInt(rowRelative ?
                    match[2] :
                    match[2].substring(1), 10) - 1
            };
            if (columnRelative) {
                reference.columnRelative = true;
            }
            if (rowRelative) {
                reference.rowRelative = true;
            }
            if (negativeReference(formula)) {
                formula.pop();
                reference.isNegative = true;
            }
            formula.push(reference);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a formula operator
        match = next.match(operatorRegExp);
        if (match) {
            formula.push(match[0]);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a boolean value
        match = next.match(booleanRegExp);
        if (match) {
            formula.push(match[0] === 'TRUE');
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a number value
        match = next.match(decimalRegExp);
        if (match) {
            let number = parseFloat(match[0]);
            // If the current value is multiplication-related and the previous
            // one is a minus sign, set the current value to negative and remove
            // the minus sign.
            if (negativeReference(formula)) {
                formula.pop();
                number = -number;
            }
            formula.push(number);
            next = next.substring(match[0].length).trim();
            continue;
        }
        // Check for a quoted string
        if (next[0] === '"') {
            const string = extractString(next);
            formula.push(string.substring(1, -1));
            next = next.substring(string.length + 2).trim();
            continue;
        }
        // Check for a function
        match = next.match(functionRegExp);
        if (match) {
            next = next.substring(match[1].length).trim();
            const parantheses = extractParantheses(next);
            formula.push({
                type: 'function',
                name: match[1],
                args: parseArguments(parantheses, alternativeSeparators)
            });
            next = next.substring(parantheses.length + 2).trim();
            continue;
        }
        // Check for a formula in parantheses
        if (next[0] === '(') {
            const paranteses = extractParantheses(next);
            if (paranteses) {
                formula
                    .push(parseFormula(paranteses, alternativeSeparators));
                next = next.substring(paranteses.length + 2).trim();
                continue;
            }
        }
        // Something is not right
        const position = text.length - next.length, error = new Error('Unexpected character `' +
            text.substring(position, position + 1) +
            '` at position ' + (position + 1) +
            '. (`...' + text.substring(position - 5, position + 6) + '...`)');
        error.name = 'FormulaParseError';
        throw error;
    }
    return formula;
}
/**
 * Converts a reference column `A` of `A1` into a number. Supports endless sizes
 * `ZZZ...`, just limited by integer precision.
 *
 * @private
 *
 * @param {string} text
 * Column string to convert.
 *
 * @return {number}
 * Converted column index.
 */
function parseReferenceColumn(text) {
    let column = 0;
    for (let i = 0, iEnd = text.length, code, factor = text.length - 1; i < iEnd; ++i) {
        code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            column += (code - 64) * Math.pow(26, factor);
        }
        --factor;
    }
    return column;
}
/* *
 *
 *  Default Export
 *
 * */
const FormulaParser = {
    parseFormula
};
/* harmony default export */ const Formula_FormulaParser = (FormulaParser);

;// ./code/es-modules/Data/Formula/FormulaTypes.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * Array of all possible operators.
 * @private
 */
const operators = ['+', '-', '*', '/', '^', '=', '<', '<=', '>', '>='];
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests an item for a Formula array.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula (or argument) array.
 */
function isFormula(item) {
    return Array.isArray(item);
}
/**
 * Tests an item for a Function structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a formula function.
 */
function isFunction(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'function');
}
/**
 * Tests an item for an Operator string.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is an operator string.
 */
function isOperator(item) {
    return (typeof item === 'string' &&
        operators.indexOf(item) >= 0);
}
/**
 * Tests an item for a Range structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a range.
 */
function isRange(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'range');
}
/**
 * Tests an item for a Reference structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a reference.
 */
function isReference(item) {
    return (typeof item === 'object' &&
        !(Array.isArray(item)) &&
        item.type === 'reference');
}
/**
 * Tests an item for a Value structure.
 *
 * @private
 *
 * @param {Highcharts.FormulaItem|null|undefined} item
 * Item to test.
 *
 * @return {boolean}
 * `true`, if the item is a value.
 */
function isValue(item) {
    return (typeof item === 'boolean' ||
        typeof item === 'number' ||
        typeof item === 'string');
}
/* *
 *
 *  Default Export
 *
 * */
const MathFormula = {
    isFormula,
    isFunction,
    isOperator,
    isRange,
    isReference,
    isValue
};
/* harmony default export */ const FormulaTypes = (MathFormula);

;// ./code/es-modules/Data/Formula/FormulaProcessor.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { isFormula: FormulaProcessor_isFormula, isFunction: FormulaProcessor_isFunction, isOperator: FormulaProcessor_isOperator, isRange: FormulaProcessor_isRange, isReference: FormulaProcessor_isReference, isValue: FormulaProcessor_isValue } = FormulaTypes;

const { defined: FormulaProcessor_defined } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Constants
 *
 * */
const asLogicalStringRegExp = / */;
const MAX_FALSE = Number.MAX_VALUE / 1.000000000001;
const MAX_STRING = Number.MAX_VALUE / 1.000000000002;
const MAX_TRUE = Number.MAX_VALUE;
const operatorPriority = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
    '=': 0,
    '<': 0,
    '<=': 0,
    '>': 0,
    '>=': 0
};
const processorFunctions = {};
const processorFunctionNameRegExp = /^[A-Z][A-Z\.]*$/;
/* *
 *
 *  Functions
 *
 * */
/**
 * Converts non-number types to logical numbers.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Logical number value. `NaN` if not convertable.
 */
function asLogicalNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? MAX_TRUE : MAX_FALSE;
        case 'string':
            return MAX_STRING;
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Converts strings to logical strings, while other types get passed through. In
 * logical strings the space character is the lowest value and letters are case
 * insensitive.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {Highcharts.FormulaValue}
 * Logical string value or passed through value.
 */
function asLogicalString(value) {
    if (typeof value === 'string') {
        return value.toLowerCase().replace(asLogicalStringRegExp, '\0');
    }
    return value;
}
/**
 * Converts non-number types to a logic number.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Number value. `NaN` if not convertable.
 */
function asNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? 1 : 0;
        case 'string':
            return parseFloat(value.replace(',', '.'));
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Process a basic operation of two given values.
 *
 * @private
 *
 * @param {Highcharts.FormulaOperator} operator
 * Operator between values.
 *
 * @param {Highcharts.FormulaValue} x
 * First value for operation.
 *
 * @param {Highcharts.FormulaValue} y
 * Second value for operation.
 *
 * @return {Highcharts.FormulaValue}
 * Operation result. `NaN` if operation is not support.
 */
function basicOperation(operator, x, y) {
    switch (operator) {
        case '=':
            return asLogicalString(x) === asLogicalString(y);
        case '<':
            if (typeof x === typeof y) {
                return asLogicalString(x) < asLogicalString(y);
            }
            return asLogicalNumber(x) < asLogicalNumber(y);
        case '<=':
            if (typeof x === typeof y) {
                return asLogicalString(x) <= asLogicalString(y);
            }
            return asLogicalNumber(x) <= asLogicalNumber(y);
        case '>':
            if (typeof x === typeof y) {
                return asLogicalString(x) > asLogicalString(y);
            }
            return asLogicalNumber(x) > asLogicalNumber(y);
        case '>=':
            if (typeof x === typeof y) {
                return asLogicalString(x) >= asLogicalString(y);
            }
            return asLogicalNumber(x) >= asLogicalNumber(y);
    }
    x = asNumber(x);
    y = asNumber(y);
    let result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            return NaN;
    }
    // Limit decimal to 9 digits
    return (result % 1 ?
        Math.round(result * 1000000000) / 1000000000 :
        result);
}
/**
 * Converts an argument to Value and in case of a range to an array of Values.
 *
 * @function Highcharts.Formula.getArgumentValue
 *
 * @param {Highcharts.FormulaRange|Highcharts.FormulaTerm} arg
 * Formula range or term to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Converted value.
 */
function getArgumentValue(arg, table) {
    // Add value
    if (FormulaProcessor_isValue(arg)) {
        return arg;
    }
    // Add values of a range
    if (FormulaProcessor_isRange(arg)) {
        return (table && getRangeValues(arg, table) || []);
    }
    // Add values of a function
    if (FormulaProcessor_isFunction(arg)) {
        return processFunction(arg, table);
    }
    // Process functions, operations, references with formula processor
    return processFormula((FormulaProcessor_isFormula(arg) ? arg : [arg]), table);
}
/**
 * Converts all arguments to Values and in case of ranges to arrays of Values.
 *
 * @function Highcharts.Formula.getArgumentsValues
 *
 * @param {Highcharts.FormulaArguments} args
 * Formula arguments to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<(Highcharts.FormulaValue|Array<Highcharts.FormulaValue>)>}
 * Converted values.
 */
function getArgumentsValues(args, table) {
    const values = [];
    for (let i = 0, iEnd = args.length; i < iEnd; ++i) {
        values.push(getArgumentValue(args[i], table));
    }
    return values;
}
/**
 * Extracts cell values from a table for a given range.
 *
 * @function Highcharts.Formula.getRangeValues
 *
 * @param {Highcharts.FormulaRange} range
 * Formula range to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Array<Highcharts.FormulaValue>}
 * Extracted values.
 */
function getRangeValues(range, table) {
    const columnIds = table
        .getColumnIds()
        .slice(range.beginColumn, range.endColumn + 1), values = [];
    for (let i = 0, iEnd = columnIds.length, cell; i < iEnd; ++i) {
        const cells = table.getColumn(columnIds[i], true) || [];
        for (let j = range.beginRow, jEnd = range.endRow + 1; j < jEnd; ++j) {
            cell = cells[j];
            if (typeof cell === 'string' &&
                cell[0] === '=' &&
                table !== table.getModified()) {
                // Look in the modified table for formula result
                cell = table.getModified().getCell(columnIds[i], j);
            }
            values.push(FormulaProcessor_isValue(cell) ? cell : NaN);
        }
    }
    return values;
}
/**
 * Extracts the cell value from a table for a given reference.
 *
 * @private
 *
 * @param {Highcharts.FormulaReference} reference
 * Formula reference to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Highcharts.FormulaValue}
 * Extracted value. 'undefined' might also indicate that the cell was not found.
 */
function getReferenceValue(reference, table) {
    const columnId = table.getColumnIds()[reference.column];
    if (columnId) {
        const cell = table.getCell(columnId, reference.row);
        if (typeof cell === 'string' &&
            cell[0] === '=' &&
            table !== table.getModified()) {
            // Look in the modified table for formula result
            const result = table.getModified().getCell(columnId, reference.row);
            return FormulaProcessor_isValue(result) ? result : NaN;
        }
        if (FormulaProcessor_isValue(cell)) {
            return reference.isNegative ? -cell : cell;
        }
        return NaN;
    }
    return NaN;
}
/**
 * Calculates a value based on the two top values and the related operator.
 *
 * Used to properly process the formula's values based on its operators.
 *
 * @private
 * @function Highcharts.applyOperator
 *
 * @param {Array<Highcharts.Value>} values
 * Processed formula values.
 *
 * @param {Array<Highcharts.Operator>} operators
 * Processed formula operators.
 */
function applyOperator(values, operators) {
    if (values.length < 2 || operators.length < 1) {
        values.push(NaN);
    }
    const secondValue = values.pop();
    const firstValue = values.pop();
    const operator = operators.pop();
    if (!FormulaProcessor_defined(secondValue) || !FormulaProcessor_defined(firstValue) || !FormulaProcessor_defined(operator)) {
        values.push(NaN);
    }
    else {
        values.push(basicOperation(operator, firstValue, secondValue));
    }
}
/**
 * Processes a formula array on the given table. If the formula does not contain
 * references or ranges, then no table has to be provided.
 *
 * Performs formulas considering the operators precedence.
 *
 * // Example of the `2 * 3 + 4` formula:
 * 2 -> values: [2], operators: []
 * * -> values: [2], operators: [*]
 * 3 -> values: [2, 3], operators: [*]
 * // Since the higher precedence operator exists (* > +), perform it first.
 * + -> values: [6], operators: [+]
 * 4 -> values: [6, 4], operators: [+]
 * // When non-higher precedence operators remain, perform rest calculations.
 * -> values: [10], operators: []
 *
 * @private
 * @function Highcharts.processFormula
 *
 * @param {Highcharts.Formula} formula
 * Formula array to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue}
 * Result value of the process. `NaN` indicates an error.
 */
function processFormula(formula, table) {
    // Keeps all the values to calculate them in a proper priority, based on the
    // given operators.
    const values = [];
    // Keeps all the operators to calculate the values above, following the
    // proper priority.
    const operators = [];
    // Indicates if the next item is a value (not an operator).
    let expectingValue = true;
    for (let i = 0, iEnd = formula.length; i < iEnd; ++i) {
        const item = formula[i];
        if (FormulaProcessor_isOperator(item)) {
            if (expectingValue && item === '-') {
                // Split the negative values to be handled as a binary
                // operation if the next item is a value.
                values.push(0);
                operators.push('-');
                expectingValue = true;
            }
            else {
                // Perform if the higher precedence operator exist.
                while (operators.length &&
                    operatorPriority[operators[operators.length - 1]] >=
                        operatorPriority[item]) {
                    applyOperator(values, operators);
                }
                operators.push(item);
                expectingValue = true;
            }
            continue;
        }
        let value;
        // Assign the proper value, starting from the most common types.
        if (FormulaProcessor_isValue(item)) {
            value = item;
        }
        else if (FormulaProcessor_isReference(item)) {
            value = table ? getReferenceValue(item, table) : NaN;
        }
        else if (FormulaProcessor_isFunction(item)) {
            const result = processFunction(item, table);
            value = FormulaProcessor_isValue(result) ? result : NaN;
        }
        else if (FormulaProcessor_isFormula(item)) {
            value = processFormula(item, table);
        }
        if (typeof value !== 'undefined') {
            values.push(value);
            expectingValue = false;
        }
        else {
            return NaN;
        }
    }
    // Handle the remaining operators that weren't taken into consideration, due
    // to non-higher precedence.
    while (operators.length) {
        applyOperator(values, operators);
    }
    if (values.length !== 1) {
        return NaN;
    }
    return values[0];
}
/**
 * Process a function on the given table. If the arguments do not contain
 * references or ranges, then no table has to be provided.
 *
 * @private
 *
 * @param {Highcharts.FormulaFunction} formulaFunction
 * Formula function to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @param {Highcharts.FormulaReference} [reference]
 * Table cell reference to use for relative references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value (or values) of the process. `NaN` indicates an error.
 */
function processFunction(formulaFunction, table, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
reference // @todo
) {
    const processor = processorFunctions[formulaFunction.name];
    if (processor) {
        try {
            return processor(formulaFunction.args, table);
        }
        catch {
            return NaN;
        }
    }
    const error = new Error(`Function "${formulaFunction.name}" not found.`);
    error.name = 'FormulaProcessError';
    throw error;
}
/**
 * Registers a function for the FormulaProcessor.
 *
 * @param {string} name
 * Name of the function in spreadsheets notation with upper case.
 *
 * @param {Highcharts.FormulaFunction} processorFunction
 * ProcessorFunction for the FormulaProcessor. This is an object so that it
 * can take additional parameter for future validation routines.
 *
 * @return {boolean}
 * Return true, if the ProcessorFunction has been registered.
 */
function registerProcessorFunction(name, processorFunction) {
    return (processorFunctionNameRegExp.test(name) &&
        !processorFunctions[name] &&
        !!(processorFunctions[name] = processorFunction));
}
/**
 * Translates relative references and ranges in-place.
 *
 * @param {Highcharts.Formula} formula
 * Formula to translate references and ranges in.
 *
 * @param {number} [columnDelta=0]
 * Column delta to translate to. Negative translate back.
 *
 * @param {number} [rowDelta=0]
 * Row delta to translate to. Negative numbers translate back.
 *
 * @return {Highcharts.Formula}
 * Formula with translated reference and ranges. This formula is equal to the
 * first argument.
 */
function translateReferences(formula, columnDelta = 0, rowDelta = 0) {
    for (let i = 0, iEnd = formula.length, item; i < iEnd; ++i) {
        item = formula[i];
        if (Array.isArray(item)) {
            translateReferences(item, columnDelta, rowDelta);
        }
        else if (FormulaProcessor_isFunction(item)) {
            translateReferences(item.args, columnDelta, rowDelta);
        }
        else if (FormulaProcessor_isRange(item)) {
            if (item.beginColumnRelative) {
                item.beginColumn += columnDelta;
            }
            if (item.beginRowRelative) {
                item.beginRow += rowDelta;
            }
            if (item.endColumnRelative) {
                item.endColumn += columnDelta;
            }
            if (item.endRowRelative) {
                item.endRow += rowDelta;
            }
        }
        else if (FormulaProcessor_isReference(item)) {
            if (item.columnRelative) {
                item.column += columnDelta;
            }
            if (item.rowRelative) {
                item.row += rowDelta;
            }
        }
    }
    return formula;
}
/* *
 *
 *  Default Export
 *
 * */
const FormulaProcessor = {
    asNumber,
    getArgumentValue,
    getArgumentsValues,
    getRangeValues,
    getReferenceValue,
    processFormula,
    processorFunctions,
    registerProcessorFunction,
    translateReferences
};
/* harmony default export */ const Formula_FormulaProcessor = (FormulaProcessor);

;// ./code/es-modules/Data/Formula/Functions/ABS.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: ABS_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `ABS(value)` implementation. Returns positive numbers.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<number>}
 * Result value of the process.
 */
function ABS(args, table) {
    const value = ABS_getArgumentValue(args[0], table);
    switch (typeof value) {
        case 'number':
            return Math.abs(value);
        case 'object': {
            const values = [];
            for (let i = 0, iEnd = value.length, value2; i < iEnd; ++i) {
                value2 = value[i];
                if (typeof value2 !== 'number') {
                    return NaN;
                }
                values.push(Math.abs(value2));
            }
            return values;
        }
        default:
            return NaN;
    }
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('ABS', ABS);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_ABS = ((/* unused pure expression or super */ null && (ABS)));

;// ./code/es-modules/Data/Formula/Functions/AND.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: AND_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AND(...tests)` implementation. Returns `TRUE`, if all test
 * results are not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function AND(args, table) {
    for (let i = 0, iEnd = args.length, value; i < iEnd; ++i) {
        value = AND_getArgumentValue(args[i], table);
        if (!value ||
            (typeof value === 'object' &&
                !AND(value, table))) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AND', AND);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_AND = ((/* unused pure expression or super */ null && (AND)));

;// ./code/es-modules/Data/Formula/Functions/AVERAGE.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentsValues: AVERAGE_getArgumentsValues } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AVERAGE(...values)` implementation. Calculates the average
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGE
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function AVERAGE(args, table) {
    const values = AVERAGE_getArgumentsValues(args, table);
    let count = 0, result = 0;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                    result += value;
                }
                break;
            case 'object':
                for (let j = 0, jEnd = value.length, value2; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        ++count;
                        result += value2;
                    }
                }
                break;
        }
    }
    return (count ? (result / count) : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AVERAGE', AVERAGE);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_AVERAGE = ((/* unused pure expression or super */ null && (AVERAGE)));

;// ./code/es-modules/Data/Formula/Functions/AVERAGEA.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: AVERAGEA_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `AVERAGEA(...values)` implementation. Calculates the
 * average of the given values. Strings and FALSE are calculated as 0.
 *
 * @private
 * @function Formula.processorFunctions.AVERAGEA
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function AVERAGEA(args, table) {
    let count = 0, result = 0;
    for (let i = 0, iEnd = args.length, value; i < iEnd; ++i) {
        value = AVERAGEA_getArgumentValue(args[i], table);
        switch (typeof value) {
            case 'boolean':
                ++count;
                result += (value ? 1 : 0);
                continue;
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                    result += value;
                }
                continue;
            case 'string':
                ++count;
                continue;
            default:
                for (let j = 0, jEnd = value.length, value2; j < jEnd; ++j) {
                    value2 = value[j];
                    switch (typeof value2) {
                        case 'boolean':
                            ++count;
                            result += (value2 ? 1 : 0);
                            continue;
                        case 'number':
                            if (!isNaN(value2)) {
                                ++count;
                                result += value2;
                            }
                            continue;
                        case 'string':
                            ++count;
                            continue;
                    }
                }
                continue;
        }
    }
    return (count ? (result / count) : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('AVERAGEA', AVERAGEA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_AVERAGEA = ((/* unused pure expression or super */ null && (AVERAGEA)));

;// ./code/es-modules/Data/Formula/Functions/COUNT.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `COUNT(...values)` implementation. Returns the count of
 * given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.COUNT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function COUNT(args, table) {
    const values = Formula_FormulaProcessor.getArgumentsValues(args, table);
    let count = 0;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    ++count;
                }
                break;
            case 'object':
                count += COUNT(value, table);
                break;
        }
    }
    return count;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('COUNT', COUNT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_COUNT = ((/* unused pure expression or super */ null && (COUNT)));

;// ./code/es-modules/Data/Formula/Functions/COUNTA.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `COUNTA(...values)` implementation. Returns the count of
 * given values that are not empty.
 *
 * @private
 * @function Formula.processorFunctions.COUNT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function COUNTA(args, table) {
    const values = Formula_FormulaProcessor.getArgumentsValues(args, table);
    let count = 0;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (isNaN(value)) {
                    continue;
                }
                break;
            case 'object':
                count += COUNTA(value, table);
                continue;
            case 'string':
                if (!value) {
                    continue;
                }
                break;
        }
        ++count;
    }
    return count;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('COUNTA', COUNTA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_COUNTA = ((/* unused pure expression or super */ null && (COUNTA)));

;// ./code/es-modules/Data/Formula/Functions/IF.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: IF_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `IF(test, value1, value2)` implementation. Returns one of
 * the values based on the test result. `value1` will be returned, if the test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.IF
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value of the process.
 */
function IF(args, table) {
    return (IF_getArgumentValue(args[0], table) ?
        IF_getArgumentValue(args[1], table) :
        IF_getArgumentValue(args[2], table));
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('IF', IF);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_IF = ((/* unused pure expression or super */ null && (IF)));

;// ./code/es-modules/Data/Formula/Functions/ISNA.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: ISNA_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `ISNA(value)` implementation. Returns TRUE if value is not
 * a number.
 *
 * @private
 * @function Formula.processorFunctions.ISNA
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function ISNA(args, table) {
    const value = ISNA_getArgumentValue(args[0], table);
    return (typeof value !== 'number' || isNaN(value));
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('ISNA', ISNA);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_ISNA = ((/* unused pure expression or super */ null && (ISNA)));

;// ./code/es-modules/Data/Formula/Functions/MAX.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentsValues: MAX_getArgumentsValues } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MAX(...values)` implementation. Calculates the largest
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.MAX
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MAX(args, table) {
    const values = MAX_getArgumentsValues(args, table);
    let result = Number.NEGATIVE_INFINITY;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (value > result) {
                    result = value;
                }
                break;
            case 'object':
                value = MAX(value);
                if (value > result) {
                    result = value;
                }
                break;
        }
    }
    return isFinite(result) ? result : 0;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MAX', MAX);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_MAX = ((/* unused pure expression or super */ null && (MAX)));

;// ./code/es-modules/Data/Formula/Functions/MEDIAN.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MEDIAN(...values)` implementation. Calculates the median
 * average of the given values.
 *
 * @private
 * @function Formula.processorFunctions.MEDIAN
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function MEDIAN(args, table) {
    const median = [], values = Formula_FormulaProcessor.getArgumentsValues(args, table);
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    median.push(value);
                }
                break;
            case 'object':
                for (let j = 0, jEnd = value.length, value2; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        median.push(value2);
                    }
                }
                break;
        }
    }
    const count = median.length;
    if (!count) {
        return NaN;
    }
    const half = Math.floor(count / 2); // Floor because index starts at 0
    return (count % 2 ?
        median[half] : // Odd
        (median[half - 1] + median[half]) / 2 // Even
    );
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MEDIAN', MEDIAN);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_MEDIAN = ((/* unused pure expression or super */ null && (MEDIAN)));

;// ./code/es-modules/Data/Formula/Functions/MIN.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentsValues: MIN_getArgumentsValues } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MIN(...values)` implementation. Calculates the lowest
 * of the given values that are numbers.
 *
 * @private
 * @function Formula.processorFunctions.MIN
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MIN(args, table) {
    const values = MIN_getArgumentsValues(args, table);
    let result = Number.POSITIVE_INFINITY;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (value < result) {
                    result = value;
                }
                break;
            case 'object':
                value = MIN(value);
                if (value < result) {
                    result = value;
                }
                break;
        }
    }
    return isFinite(result) ? result : 0;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MIN', MIN);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_MIN = ((/* unused pure expression or super */ null && (MIN)));

;// ./code/es-modules/Data/Formula/Functions/MOD.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: MOD_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `MOD(value1, value2)` implementation. Calculates the rest
 * of the division with the given values.
 *
 * @private
 * @function Formula.processorFunctions.MOD
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function MOD(args, table) {
    let value1 = MOD_getArgumentValue(args[0], table), value2 = MOD_getArgumentValue(args[1], table);
    if (typeof value1 === 'object') {
        value1 = value1[0];
    }
    if (typeof value2 === 'object') {
        value2 = value2[0];
    }
    if (typeof value1 !== 'number' ||
        typeof value2 !== 'number' ||
        value2 === 0) {
        return NaN;
    }
    return value1 % value2;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MOD', MOD);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_MOD = ((/* unused pure expression or super */ null && (MOD)));

;// ./code/es-modules/Data/Formula/Functions/MODE.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Creates the mode map of the given arguments.
 *
 * @private
 * @function Formula.processorFunctions.MULT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function getModeMap(args, table) {
    const modeMap = {}, values = Formula_FormulaProcessor.getArgumentsValues(args, table);
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    modeMap[value] = (modeMap[value] || 0) + 1;
                }
                break;
            case 'object':
                for (let j = 0, jEnd = value.length, value2; j < jEnd; ++j) {
                    value2 = value[j];
                    if (typeof value2 === 'number' &&
                        !isNaN(value2)) {
                        modeMap[value2] = (modeMap[value2] || 0) + 1;
                    }
                }
                break;
        }
    }
    return modeMap;
}
/**
 * Processor for the `MODE.MULT(...values)` implementation. Calculates the most
 * frequent values of the give values.
 *
 * @private
 * @function Formula.processorFunctions.MULT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number|Array<number>}
 * Result value of the process.
 */
function MULT(args, table) {
    const modeMap = getModeMap(args, table), keys = Object.keys(modeMap);
    if (!keys.length) {
        return NaN;
    }
    let modeKeys = [parseFloat(keys[0])], modeCount = modeMap[keys[0]];
    for (let i = 1, iEnd = keys.length, key, count; i < iEnd; ++i) {
        key = keys[i];
        count = modeMap[key];
        if (modeCount < count) {
            modeKeys = [parseFloat(key)];
            modeCount = count;
        }
        else if (modeCount === count) {
            modeKeys.push(parseFloat(key));
        }
    }
    return modeCount > 1 ? modeKeys : NaN;
}
/**
 * Processor for the `MODE.SNGL(...values)` implementation. Calculates the
 * lowest most frequent value of the give values.
 *
 * @private
 * @function Formula.processorFunctions['MODE.SNGL']
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function SNGL(args, table) {
    const modeMap = getModeMap(args, table), keys = Object.keys(modeMap);
    if (!keys.length) {
        return NaN;
    }
    let modeKey = parseFloat(keys[0]), modeCount = modeMap[keys[0]];
    for (let i = 1, iEnd = keys.length, key, keyValue, count; i < iEnd; ++i) {
        key = keys[i];
        count = modeMap[key];
        if (modeCount < count) {
            modeKey = parseFloat(key);
            modeCount = count;
        }
        else if (modeCount === count) {
            keyValue = parseFloat(key);
            if (modeKey > keyValue) {
                modeKey = keyValue;
                modeCount = count;
            }
        }
    }
    return modeCount > 1 ? modeKey : NaN;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('MODE', SNGL);
Formula_FormulaProcessor.registerProcessorFunction('MODE.MULT', MULT);
Formula_FormulaProcessor.registerProcessorFunction('MODE.SNGL', SNGL);
/* *
 *
 *  Default Export
 *
 * */
const MODE = {
    MULT,
    SNGL
};
/* harmony default export */ const Functions_MODE = ((/* unused pure expression or super */ null && (MODE)));

;// ./code/es-modules/Data/Formula/Functions/NOT.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: NOT_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `NOT(value)` implementation. Returns the opposite test
 * result.
 *
 * @private
 * @function Formula.processorFunctions.NOT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean|number}
 * Result value of the process.
 */
function NOT(args, table) {
    let value = NOT_getArgumentValue(args[0], table);
    if (typeof value === 'object') {
        value = value[0];
    }
    switch (typeof value) {
        case 'boolean':
        case 'number':
            return !value;
    }
    return NaN;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('NOT', NOT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_NOT = ((/* unused pure expression or super */ null && (NOT)));

;// ./code/es-modules/Data/Formula/Functions/OR.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: OR_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `OR(...tests)` implementation. Returns `TRUE`, if one test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean}
 * Result value of the process.
 */
function OR(args, table) {
    for (let i = 0, iEnd = args.length, value; i < iEnd; ++i) {
        value = OR_getArgumentValue(args[i], table);
        if (typeof value === 'object') {
            if (OR(value, table)) {
                return true;
            }
        }
        else if (value) {
            return true;
        }
    }
    return false;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('OR', OR);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_OR = ((/* unused pure expression or super */ null && (OR)));

;// ./code/es-modules/Data/Formula/Functions/PRODUCT.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentsValues: PRODUCT_getArgumentsValues } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `PRODUCT(...values)` implementation. Calculates the product
 * of the given values.
 *
 * @private
 * @function Formula.processorFunctions.PRODUCT
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {number}
 * Result value of the process.
 */
function PRODUCT(args, table) {
    const values = PRODUCT_getArgumentsValues(args, table);
    let result = 1, calculated = false;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    calculated = true;
                    result *= value;
                }
                break;
            case 'object':
                calculated = true;
                result *= PRODUCT(value, table);
                break;
        }
    }
    return (calculated ? result : 0);
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('PRODUCT', PRODUCT);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_PRODUCT = ((/* unused pure expression or super */ null && (PRODUCT)));

;// ./code/es-modules/Data/Formula/Functions/SUM.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `SUM(...values)` implementation. Calculates the sum of the
 * given values.
 *
 * @private
 * @function Formula.processorFunctions.SUM
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {number}
 * Result value of the process.
 */
function SUM(args, table) {
    const values = Formula_FormulaProcessor.getArgumentsValues(args, table);
    let result = 0;
    for (let i = 0, iEnd = values.length, value; i < iEnd; ++i) {
        value = values[i];
        switch (typeof value) {
            case 'number':
                if (!isNaN(value)) {
                    result += value;
                }
                break;
            case 'object':
                result += SUM(value, table);
                break;
        }
    }
    return result;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('SUM', SUM); // 🐝
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_SUM = ((/* unused pure expression or super */ null && (SUM)));

;// ./code/es-modules/Data/Formula/Functions/XOR.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


const { getArgumentValue: XOR_getArgumentValue } = Formula_FormulaProcessor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Processor for the `XOR(...tests)` implementation. Returns `TRUE`, if at least
 * one of the given tests differs in result of other tests.
 *
 * @private
 * @function Formula.processorFunctions.AND
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {boolean|number}
 * Result value of the process.
 */
function XOR(args, table) {
    for (let i = 0, iEnd = args.length, lastValue, value; i < iEnd; ++i) {
        value = XOR_getArgumentValue(args[i], table);
        switch (typeof value) {
            case 'boolean':
            case 'number':
                if (typeof lastValue === 'undefined') {
                    lastValue = !!value;
                }
                else if (!!value !== lastValue) {
                    return true;
                }
                break;
            case 'object':
                for (let j = 0, jEnd = value.length, value2; j < jEnd; ++j) {
                    value2 = value[j];
                    switch (typeof value2) {
                        case 'boolean':
                        case 'number':
                            if (typeof lastValue === 'undefined') {
                                lastValue = !!value2;
                            }
                            else if (!!value2 !== lastValue) {
                                return true;
                            }
                            break;
                    }
                }
                break;
        }
    }
    return false;
}
/* *
 *
 *  Registry
 *
 * */
Formula_FormulaProcessor.registerProcessorFunction('XOR', XOR);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Functions_XOR = ((/* unused pure expression or super */ null && (XOR)));

;// ./code/es-modules/Data/Formula/Formula.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Imports
 *
 * */





















/* *
 *
 *  Default Export
 *
 * */
/**
 * Formula engine to make use of spreadsheet formula strings.
 * @internal
 */
const Formula = {
    ...Formula_FormulaParser,
    ...Formula_FormulaProcessor,
    ...FormulaTypes
};
/* harmony default export */ const Formula_Formula = (Formula);

;// ./code/es-modules/Data/Converters/CSVConverter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */




const { merge: CSVConverter_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
class CSVConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the CSV parser.
     */
    constructor(options) {
        const mergedOptions = CSVConverter_merge(CSVConverter.defaultOptions, options);
        super(mergedOptions);
        /* *
         *
         *  Properties
         *
         * */
        this.headers = [];
        this.dataTypes = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Parses the CSV string into a DataTable column collection.
     * Handles line and item delimiters, optional header row, and
     * applies pre-processing if a beforeParse callback is provided.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the parser.
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     * @return {DataTable.ColumnCollection}
     * The parsed column collection.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    parse(options, eventDetail) {
        const converter = this, dataTypes = converter.dataTypes, parserOptions = CSVConverter_merge(this.options, options), { beforeParse, lineDelimiter, firstRowAsNames, itemDelimiter } = parserOptions;
        let lines, rowIt = 0, { csv, startRow, endRow } = parserOptions, column;
        const columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (csv && beforeParse) {
            csv = beforeParse(csv);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n|\r/g, '\n') // Windows | Mac
                .split(lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (!itemDelimiter) {
                converter.guessedItemDelimiter =
                    converter.guessDelimiter(lines);
            }
            // If the first row contain names, add them to the
            // headers array and skip the row.
            if (firstRowAsNames) {
                const headers = lines[0].split(itemDelimiter || converter.guessedItemDelimiter || ',');
                // Remove ""s from the headers
                for (let i = 0; i < headers.length; i++) {
                    headers[i] = headers[i].trim().replace(/^["']|["']$/g, '');
                }
                converter.headers = headers;
                startRow++;
            }
            let offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    converter.parseCSVRow(columnsArray, lines[rowIt], rowIt - startRow - offset);
                }
            }
            if (dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' && // Format is a string date
                !converter.options.dateFormat) {
                converter.deduceDateFormat(columnsArray[0], null, true);
            }
            // Guess types.
            for (let i = 0, iEnd = columnsArray.length; i < iEnd; ++i) {
                column = columnsArray[i];
                for (let j = 0, jEnd = column.length; j < jEnd; ++j) {
                    if (column[j] && typeof column[j] === 'string') {
                        let cellValue = converter.convertByType(column[j]);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columnsArray[i][j] = cellValue;
                    }
                }
            }
        }
        // Normalize columns to same length to avoid truncation.
        columnsArray.forEach((col) => {
            col.length = Math.max(...columnsArray.map((c) => c.length));
        });
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    }
    /**
     * Parses a single CSV row string into columns, handling delimiters,
     * quoted values, data type inference, and column range selection.
     */
    parseCSVRow(columns, columnStr, rowNumber) {
        const converter = this, dataTypes = converter.dataTypes, { startColumn, endColumn } = converter.options, itemDelimiter = (converter.options.itemDelimiter ||
            converter.guessedItemDelimiter);
        let { decimalPoint } = converter.options;
        if (!decimalPoint || decimalPoint === itemDelimiter) {
            decimalPoint = converter.guessedDecimalPoint || '.';
        }
        let i = 0, c = '', token = '', actualColumn = 0, column = 0;
        const read = (j) => {
            c = columnStr[j];
        };
        const pushType = (type) => {
            if (dataTypes.length < column + 1) {
                dataTypes.push([type]);
            }
            if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                dataTypes[column].push(type);
            }
        };
        const push = () => {
            if (startColumn > actualColumn || actualColumn > endColumn) {
                // Skip this column, but increment the column count (#7272)
                ++actualColumn;
                token = '';
                return;
            }
            // Save the type of the token.
            if (typeof token === 'string') {
                const parsedNumber = parseFloat(token);
                if (!isNaN(parsedNumber) && isFinite(Number(token))) {
                    token = parsedNumber;
                    pushType('number');
                }
                else if (!isNaN(Date.parse(token))) {
                    token = token.replace(/\//g, '-');
                    pushType('date');
                }
                else {
                    pushType('string');
                }
            }
            else {
                pushType('number');
            }
            if (columns.length < column + 1) {
                columns.push([]);
            }
            // Try to apply the decimal point, and check if the token then is a
            // number. If not, reapply the initial value
            if (typeof token !== 'number' &&
                Converters_DataConverterUtils.guessType(token, converter) !== 'number' &&
                decimalPoint) {
                const initialValue = token;
                token = token.replace(decimalPoint, '.');
                if (Converters_DataConverterUtils.guessType(token, converter) !== 'number') {
                    token = initialValue;
                }
            }
            columns[column][rowNumber] = token;
            token = '';
            ++column;
            ++actualColumn;
        };
        if (!columnStr.trim().length) {
            return;
        }
        if (columnStr.trim()[0] === '#') {
            return;
        }
        for (; i < columnStr.length; i++) {
            read(i);
            if (c === '#') {
                // If there are hexvalues remaining (#13283)
                if (!/^#[A-F\d]{3,3}|[A-F\d]{6,6}/i.test(columnStr.substring(i))) {
                    // The rest of the row is a comment
                    push();
                    return;
                }
            }
            // Quoted string
            if (c === '"') {
                read(++i);
                while (i < columnStr.length) {
                    if (c === '"') {
                        break;
                    }
                    token += c;
                    read(++i);
                }
            }
            else if (c === itemDelimiter) {
                push();
                // Actual column data
            }
            else {
                token += c;
            }
        }
        push();
    }
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {string[]} lines
     * The CSV, split into lines
     */
    guessDelimiter(lines) {
        let points = 0, commas = 0, guessed;
        const potDelimiters = {
            ',': 0,
            ';': 0,
            '\t': 0
        }, linesCount = lines.length;
        for (let i = 0; i < linesCount; i++) {
            let inStr = false, c, cn, cl, token = '';
            // We should be able to detect dateformats within 13 rows
            if (i > 13) {
                break;
            }
            const columnStr = lines[i];
            for (let j = 0; j < columnStr.length; j++) {
                c = columnStr[j];
                cn = columnStr[j + 1];
                cl = columnStr[j - 1];
                if (c === '#') {
                    // Skip the rest of the line - it's a comment
                    break;
                }
                if (c === '"') {
                    if (inStr) {
                        if (cl !== '"' && cn !== '"') {
                            while (cn === ' ' && j < columnStr.length) {
                                cn = columnStr[++j];
                            }
                            // After parsing a string, the next non-blank
                            // should be a delimiter if the CSV is properly
                            // formed.
                            if (typeof potDelimiters[cn] !== 'undefined') {
                                potDelimiters[cn]++;
                            }
                            inStr = false;
                        }
                    }
                    else {
                        inStr = true;
                    }
                }
                else if (typeof potDelimiters[c] !== 'undefined') {
                    token = token.trim();
                    if (!isNaN(Date.parse(token))) {
                        potDelimiters[c]++;
                    }
                    else if (isNaN(Number(token)) ||
                        !isFinite(Number(token))) {
                        potDelimiters[c]++;
                    }
                    token = '';
                }
                else {
                    token += c;
                }
                if (c === ',') {
                    commas++;
                }
                if (c === '.') {
                    points++;
                }
            }
        }
        // Count the potential delimiters.
        // This could be improved by checking if the number of delimiters
        // equals the number of columns - 1
        if (potDelimiters[';'] > potDelimiters[',']) {
            guessed = ';';
        }
        else if (potDelimiters[','] > potDelimiters[';']) {
            guessed = ',';
        }
        else {
            // No good guess could be made..
            guessed = ',';
        }
        // Try to deduce the decimal point if it's not explicitly set.
        // If both commas or points is > 0 there is likely an issue
        if (points > commas) {
            this.guessedDecimalPoint = '.';
        }
        else {
            this.guessedDecimalPoint = ',';
        }
        return guessed;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
CSVConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    lineDelimiter: '\n',
    startColumn: 0,
    endColumn: Number.MAX_VALUE,
    startRow: 0,
    endRow: Number.MAX_VALUE
};
Converters_DataConverter.registerType('CSV', CSVConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_CSVConverter = (CSVConverter);

;// ./code/es-modules/Data/Connectors/CSVConnector.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */




const { merge: CSVConnector_merge, fireEvent: CSVConnector_fireEvent } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from CSV
 *
 * @private
 */
class CSVConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of CSVConnector.
     *
     * @param {Partial<CSVConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = CSVConnector_merge(CSVConnector.defaultOptions, options);
        super(mergedOptions);
        this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrides the DataConnector method. Emits an event on the connector to
     * all registered callbacks of this event.
     *
     * @param {CSVConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        CSVConnector_fireEvent(this, e.type, e);
    }
    /**
     * Initiates the loading of the CSV source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVConnector#load
     * @emits CSVConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const { csv, csvURL, dataTables, decimalPoint } = options;
        connector.emit({
            type: 'load',
            csv
        });
        return Promise
            .resolve(csvURL ?
            fetch(csvURL, {
                signal: connector?.pollingController?.signal
            }).then((response) => response.text()) :
            csv || '')
            .then((csv) => {
            if (csv) {
                this.initConverters(csv, (key) => {
                    const tableOptions = dataTables?.find((dataTable) => dataTable.key === key);
                    // The data table options takes precedence over the
                    // connector options.
                    const { firstRowAsNames = options.firstRowAsNames, beforeParse = options.beforeParse } = tableOptions || {};
                    const converterOptions = {
                        decimalPoint,
                        firstRowAsNames,
                        beforeParse
                    };
                    return new Converters_CSVConverter(CSVConnector_merge(options, converterOptions));
                }, (converter, data) => converter.parse({ csv: data }));
            }
            return connector.applyTableModifiers().then(() => csv);
        })
            .then((csv) => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                csv
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
CSVConnector.defaultOptions = {
    id: 'csv-connector',
    type: 'CSV',
    csv: '',
    csvURL: '',
    enablePolling: false,
    dataRefreshRate: 1,
    firstRowAsNames: true
};
/* *
 *
 *  Registry
 *
 * */
Connectors_DataConnector.registerType('CSV', CSVConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_CSVConnector = ((/* unused pure expression or super */ null && (CSVConnector)));

;// ./code/es-modules/Data/Converters/JSONConverter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Pawel Lysy
 *  - Kamil Kubik
 *
 * */




const { error, isArray, merge: JSONConverter_merge, objectEach: JSONConverter_objectEach } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
class JSONConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {Partial<JSONConverterOptions>} [options]
     * Options for the JSON parser.
     */
    constructor(options) {
        const mergedOptions = JSONConverter_merge(JSONConverter.defaultOptions, options);
        super(mergedOptions);
        /* *
         *
         *  Properties
         *
         * */
        this.headerColumnIds = [];
        this.headers = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {Partial<JSONConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    parse(options, eventDetail) {
        const converter = this;
        options = JSONConverter_merge(converter.options, options);
        const { beforeParse, orientation, firstRowAsNames, columnIds } = options;
        let data = options.data;
        if (!data) {
            return {};
        }
        converter.headers = [];
        const columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (beforeParse) {
            data = beforeParse(data);
        }
        data = data.slice();
        if (orientation === 'columns') {
            this.parseColumnsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        else if (orientation === 'rows') {
            this.parseRowsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    }
    /**
     * Helper for parsing data in 'columns' orientation.
     *
     * @param {DataTable.BasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {void}
     */
    parseColumnsOrientation(columnsArray, data, firstRowAsNames, columnIds) {
        const converter = this;
        for (let i = 0, iEnd = data.length; i < iEnd; i++) {
            const item = data[i];
            if (!(Array.isArray(item))) {
                return;
            }
            if (Array.isArray(converter.headers)) {
                if (firstRowAsNames) {
                    converter.headers.push(`${item.shift()}`);
                }
                else if (columnIds && Array.isArray(columnIds)) {
                    converter.headers.push(columnIds[i]);
                }
                columnsArray.push(item);
            }
            else {
                error('JSONConverter: Invalid `columnIds` option.', false);
            }
        }
    }
    /**
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {DataTable.BasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {DataTable.BasicColumn[]}
     * Parsed columns.
     */
    parseRowsOrientation(columnsArray, data, firstRowAsNames, columnIds) {
        const converter = this;
        if (firstRowAsNames) {
            converter.headers = data.shift();
        }
        else if (columnIds) {
            converter.headerColumnIds = columnIds;
        }
        for (let rowIndex = 0, iEnd = data.length; rowIndex < iEnd; rowIndex++) {
            let row = data[rowIndex];
            if (!isArray(row)) {
                row = this.convertItemToRow(row, columnIds);
            }
            for (let columnIndex = 0, jEnd = row.length; columnIndex < jEnd; columnIndex++) {
                if (columnsArray.length < columnIndex + 1) {
                    columnsArray.push([]);
                }
                columnsArray[columnIndex].push(row[columnIndex]);
                // Create headers only once.
                if (!firstRowAsNames && rowIndex === 0) {
                    if (Array.isArray(converter.headerColumnIds)) {
                        converter.headers.push(converter.headerColumnIds[columnIndex] ||
                            columnIndex.toString());
                    }
                    else {
                        error('JSONConverter: Invalid `columnIds` option.', false);
                    }
                }
            }
        }
    }
    /**
     * Extracts a row from an object, using columnIds if provided.
     *
     * @param {Record<string, string|number>} [rowObj]
     * Set of props.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Array<string | number>}
     * Row converted to array.
     */
    convertItemToRow(rowObj, columnIds) {
        const converter = this;
        if (columnIds && !(Array.isArray(columnIds))) {
            const newRow = [];
            JSONConverter_objectEach(columnIds, (arrayWithPath, name) => {
                newRow.push(arrayWithPath.reduce((acc, key) => acc[key], rowObj));
                if (converter.headers.indexOf(name) < 0) {
                    converter.headers.push(name);
                }
            });
            return newRow;
        }
        converter.headerColumnIds = Object.keys(rowObj);
        return Object.values(rowObj);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
JSONConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    orientation: 'rows'
};
Converters_DataConverter.registerType('JSON', JSONConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_JSONConverter = (JSONConverter);

;// ./code/es-modules/Data/Connectors/JSONConnector.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Pawel Lysy
 *  - Kamil Kubik
 *
 * */




const { merge: JSONConnector_merge, fireEvent: JSONConnector_fireEvent } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a DataConnector from JSON structure
 *
 * @private
 */
class JSONConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of JSONConnector.
     *
     * @param {Partial<JSONConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = JSONConnector_merge(JSONConnector.defaultOptions, options);
        super(mergedOptions);
        this.options = mergedOptions;
        if (mergedOptions.enablePolling) {
            this.startPolling(Math.max(mergedOptions.dataRefreshRate || 0, 1) * 1000);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrides the DataConnector method. Emits an event on the connector to
     * all registered callbacks of this event.
     *
     * @param {JSONConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        JSONConnector_fireEvent(this, e.type, e);
    }
    /**
     * Initiates the loading of the JSON source to the connector
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConnector#load
     * @emits JSONConnector#afterLoad
     */
    load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const { data, dataUrl, dataTables } = options;
        connector.emit({
            type: 'load',
            detail: eventDetail,
            data
        });
        return Promise
            .resolve(dataUrl ?
            fetch(dataUrl, {
                signal: connector?.pollingController?.signal
            }).then((response) => response.json())['catch']((error) => {
                connector.emit({
                    type: 'loadError',
                    detail: eventDetail,
                    error
                });
                console.warn(`Unable to fetch data from ${dataUrl}.`); // eslint-disable-line no-console
            }) :
            data || [])
            .then(async (data) => {
            if (data) {
                this.initConverters(data, (key) => {
                    const tableOptions = dataTables?.find((dataTable) => dataTable.key === key);
                    // The data table options takes precedence over the
                    // connector options.
                    const { columnIds = options.columnIds, firstRowAsNames = options.firstRowAsNames, orientation = options.orientation, beforeParse = options.beforeParse } = tableOptions || {};
                    const converterOptions = {
                        data,
                        columnIds,
                        firstRowAsNames,
                        orientation,
                        beforeParse
                    };
                    return new Converters_JSONConverter(converterOptions);
                }, (converter, data) => converter.parse({ data }));
            }
            return connector.applyTableModifiers().then(() => data ?? []);
        })
            .then((data) => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                data
            });
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
JSONConnector.defaultOptions = {
    type: 'JSON',
    id: 'json-connector',
    data: [],
    enablePolling: false,
    dataRefreshRate: 0,
    firstRowAsNames: true,
    orientation: 'rows'
};
/* *
 *
 *  Registry
 *
 * */
Connectors_DataConnector.registerType('JSON', JSONConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_JSONConnector = ((/* unused pure expression or super */ null && (JSONConnector)));

;// ./code/es-modules/Data/Converters/GoogleSheetsConverter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */




const { merge: GoogleSheetsConverter_merge, uniqueKey: GoogleSheetsConverter_uniqueKey } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
class GoogleSheetsConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {Partial<GoogleSheetsConverterOptions>} [options]
     * Options for the GoogleSheetsConverter.
     */
    constructor(options) {
        const mergedOptions = GoogleSheetsConverter_merge(GoogleSheetsConverter.defaultOptions, options);
        super(mergedOptions);
        this.header = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {Partial<GoogleSheetsConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    parse(options, eventDetail) {
        const converter = this, parseOptions = GoogleSheetsConverter_merge(converter.options, options);
        let columnsArray = ((parseOptions.json?.values) || []).map((column) => column.slice());
        if (columnsArray.length === 0) {
            return {};
        }
        converter.header = [];
        converter.emit({
            type: 'parse',
            columns: [],
            detail: eventDetail,
            headers: converter.header
        });
        // If beforeParse is defined, use it to modify the data
        const { beforeParse, json } = parseOptions;
        if (beforeParse && json) {
            columnsArray = beforeParse(json.values);
        }
        let column;
        for (let i = 0, iEnd = columnsArray.length; i < iEnd; i++) {
            column = columnsArray[i];
            converter.header[i] = (parseOptions.firstRowAsNames ?
                `${column.shift()}` :
                GoogleSheetsConverter_uniqueKey());
            for (let j = 0, jEnd = column.length; j < jEnd; ++j) {
                let cellValue = column[j];
                if (isDateObject(cellValue)) {
                    cellValue = cellValue.getTime();
                }
                columnsArray[i][j] = cellValue;
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.header
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.header);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
GoogleSheetsConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions
};
Converters_DataConverter.registerType('GoogleSheets', GoogleSheetsConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_GoogleSheetsConverter = (GoogleSheetsConverter);
/**
 * Check if a value is a Date object
 *
 * @param {unknown} value to verify
 * @return {boolean}
 * True if the value is a Date object, false otherwise.
 */
function isDateObject(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

;// ./code/es-modules/Data/Connectors/GoogleSheetsConnector.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Jomar Hønsi
 *  - Kamil Kubik
 *
 * */




const { merge: GoogleSheetsConnector_merge, pick: GoogleSheetsConnector_pick, fireEvent: GoogleSheetsConnector_fireEvent } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests Google's response for error.
 * @private
 */
function isGoogleError(json) {
    return (typeof json === 'object' && json &&
        typeof json.error === 'object' && json.error &&
        typeof json.error.code === 'number' &&
        typeof json.error.message === 'string' &&
        typeof json.error.status === 'string');
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @todo implement save, requires oauth2
 */
class GoogleSheetsConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of GoogleSheetsConnector
     *
     * @param {Partial<GoogleSheetsConnectorOptions>} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = GoogleSheetsConnector_merge(GoogleSheetsConnector.defaultOptions, options);
        super(mergedOptions);
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Overrides the DataConnector method. Emits an event on the connector to
     * all registered callbacks of this event.
     *
     * @param {GoogleSheetsConnector.Event} e
     * Event object containing additional event information.
     */
    emit(e) {
        GoogleSheetsConnector_fireEvent(this, e.type, e);
    }
    /**
     * Loads data from a Google Spreadsheet.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<this>}
     * Same connector instance with modified table.
     */
    load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const { dataRefreshRate, enablePolling, googleAPIKey, googleSpreadsheetKey, dataTables } = options;
        const url = GoogleSheetsConnector.buildFetchURL(googleAPIKey, googleSpreadsheetKey, options);
        connector.emit({
            type: 'load',
            detail: eventDetail,
            url
        });
        if (!URL.canParse(url)) {
            throw new Error('Invalid URL: ' + url);
        }
        return fetch(url, { signal: connector?.pollingController?.signal })
            .then((response) => (response.json()))
            .then((json) => {
            if (isGoogleError(json)) {
                throw new Error(json.error.message);
            }
            this.initConverters(json, (key) => {
                const tableOptions = dataTables?.find((dataTable) => dataTable.key === key);
                // The data table options takes precedence over the
                // connector options.
                const { firstRowAsNames = options.firstRowAsNames, beforeParse = options.beforeParse } = tableOptions || {};
                const converterOptions = {
                    firstRowAsNames,
                    beforeParse
                };
                return new Converters_GoogleSheetsConverter(converterOptions);
            }, (converter, data) => converter.parse({ json: data }));
            return connector.applyTableModifiers();
        })
            .then(() => {
            connector.emit({
                type: 'afterLoad',
                detail: eventDetail,
                url
            });
            // Polling
            if (enablePolling) {
                setTimeout(() => connector.load(), Math.max(dataRefreshRate || 0, 1) * 1000);
            }
            return connector;
        })['catch']((error) => {
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error
            });
            throw error;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
GoogleSheetsConnector.defaultOptions = {
    id: 'google-sheets-connector',
    type: 'GoogleSheets',
    googleAPIKey: '',
    googleSpreadsheetKey: '',
    enablePolling: false,
    dataRefreshRate: 2,
    firstRowAsNames: true
};
/* *
 *
 *  Class Namespace
 *
 * */
(function (GoogleSheetsConnector) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Creates GoogleSheets API v4 URL.
     * @private
     */
    function buildFetchURL(apiKey, sheetKey, options = {}) {
        const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${sheetKey}/values/`);
        const range = options.onlyColumnIds ?
            'A1:Z1' : buildQueryRange(options);
        url.pathname += range;
        const searchParams = url.searchParams;
        searchParams.set('alt', 'json');
        if (!options.onlyColumnIds) {
            searchParams.set('dateTimeRenderOption', 'FORMATTED_STRING');
            searchParams.set('majorDimension', 'COLUMNS');
            searchParams.set('valueRenderOption', 'UNFORMATTED_VALUE');
        }
        searchParams.set('prettyPrint', 'false');
        searchParams.set('key', apiKey);
        return url.href;
    }
    GoogleSheetsConnector.buildFetchURL = buildFetchURL;
    /**
     * Creates sheets range.
     * @private
     */
    function buildQueryRange(options = {}) {
        const { endColumn, endRow, googleSpreadsheetRange, startColumn, startRow } = options;
        return googleSpreadsheetRange || ((alphabet[startColumn || 0] || 'A') +
            (Math.max((startRow || 0), 0) + 1) +
            ':' +
            (alphabet[GoogleSheetsConnector_pick(endColumn, 25)] || 'Z') +
            (endRow ?
                Math.max(endRow, 0) :
                'Z'));
    }
    GoogleSheetsConnector.buildQueryRange = buildQueryRange;
})(GoogleSheetsConnector || (GoogleSheetsConnector = {}));
/* *
 *
 *  Registry
 *
 * */
Connectors_DataConnector.registerType('GoogleSheets', GoogleSheetsConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_GoogleSheetsConnector = ((/* unused pure expression or super */ null && (GoogleSheetsConnector)));

;// ./code/es-modules/Data/Converters/HTMLTableConverter.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */




const { merge: HTMLTableConverter_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Row equal
 */
function isRowEqual(row1, row2) {
    let i = row1.length;
    if (row2.length === i) {
        while (--i) {
            if (row1[i] !== row2[i]) {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an HTML table to a table.
 *
 * @private
 */
class HTMLTableConverter extends Converters_DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the HTMLTableConverter.
     *
     * @param {Partial<HTMLTableConverterOptions>} [options]
     * Options for the HTMLTableConverter.
     */
    constructor(options) {
        const mergedOptions = HTMLTableConverter_merge(HTMLTableConverter.defaultOptions, options);
        super(mergedOptions);
        this.headers = [];
        this.options = mergedOptions;
        if (mergedOptions.tableElement) {
            this.tableElement = mergedOptions.tableElement;
            this.tableElementID = mergedOptions.tableElement.id;
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Exports the dataconnector as an HTML string, using the options
     * provided on import unless other options are provided.
     *
     * @param {DataConnector} connector
     * Connector instance to export from.
     *
     * @param {HTMLTableConnector.ExportOptions} [options]
     * Options that override default or existing export options.
     *
     * @return {string}
     * HTML from the current dataTable.
     */
    export(connector, options = this.options) {
        const exportNames = (options.firstRowAsNames !== false), useMultiLevelHeaders = options.useMultiLevelHeaders;
        const columns = connector.getSortedColumns(), columnIds = Object.keys(columns), htmlRows = [], columnsCount = columnIds.length;
        const rowArray = [];
        let tableHead = '';
        // Add the names as the first row if they should be exported
        if (exportNames) {
            const subcategories = [];
            // If using multilevel headers, the first value
            // of each column is a subcategory
            if (useMultiLevelHeaders) {
                for (const columnId of columnIds) {
                    let column = columns[columnId];
                    if (!Array.isArray(column)) {
                        // Convert to conventional array from typed array
                        // if needed
                        column = Array.from(column);
                    }
                    const subhead = (column.shift() || '').toString();
                    columns[columnId] = column;
                    subcategories.push(subhead);
                }
                tableHead = this.getTableHeaderHTML(columnIds, subcategories, options);
            }
            else {
                tableHead = this.getTableHeaderHTML(void 0, columnIds, options);
            }
        }
        for (let columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
            const columnId = columnIds[columnIndex], column = columns[columnId], columnLength = column.length;
            for (let rowIndex = 0; rowIndex < columnLength; rowIndex++) {
                let cellValue = column[rowIndex];
                if (!rowArray[rowIndex]) {
                    rowArray[rowIndex] = [];
                }
                if (!(typeof cellValue === 'string' ||
                    typeof cellValue === 'number' ||
                    typeof cellValue === 'undefined')) {
                    cellValue = (cellValue || '').toString();
                }
                rowArray[rowIndex][columnIndex] = this.getCellHTMLFromValue(columnIndex ? 'td' : 'th', null, columnIndex ? '' : 'scope="row"', cellValue);
                // On the final column, push the row to the array
                if (columnIndex === columnsCount - 1) {
                    htmlRows.push('<tr>' +
                        rowArray[rowIndex].join('') +
                        '</tr>');
                }
            }
        }
        let caption = '';
        // Add table caption
        // Current exportdata falls back to chart title
        // but that should probably be handled elsewhere?
        if (options.tableCaption) {
            caption = '<caption class="highcharts-table-caption">' +
                options.tableCaption +
                '</caption>';
        }
        return ('<table>' +
            caption +
            tableHead +
            '<tbody>' +
            htmlRows.join('') +
            '</tbody>' +
            '</table>');
    }
    /**
     * Get table cell markup from row data.
     */
    getCellHTMLFromValue(tag, classes, attrs, value, decimalPoint) {
        let val = value, className = 'text' + (classes ? ' ' + classes : '');
        // Convert to string if number
        if (typeof val === 'number') {
            val = val.toString();
            if (decimalPoint === ',') {
                val = val.replace('.', decimalPoint);
            }
            className = 'number';
        }
        else if (!value) {
            val = '';
            className = 'empty';
        }
        return '<' + tag + (attrs ? ' ' + attrs : '') +
            ' class="' + className + '">' +
            val + '</' + tag + '>';
    }
    /**
     * Get table header markup from row data.
     */
    getTableHeaderHTML(topheaders = [], subheaders = [], options = this.options) {
        const { useMultiLevelHeaders, useRowspanHeaders } = options;
        let html = '<thead>', i = 0, len = subheaders && subheaders.length, next, cur, curColspan = 0, rowspan;
        // Clean up multiple table headers. Exporting.getDataRows() returns two
        // levels of headers when using multilevel, not merged. We need to
        // merge identical headers, remove redundant headers, and keep it
        // all marked up nicely.
        if (useMultiLevelHeaders &&
            topheaders &&
            subheaders &&
            !isRowEqual(topheaders, subheaders)) {
            html += '<tr>';
            for (; i < len; ++i) {
                cur = topheaders[i];
                next = topheaders[i + 1];
                if (cur === next) {
                    ++curColspan;
                }
                else if (curColspan) {
                    // Ended colspan
                    // Add cur to HTML with colspan.
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col" ' +
                        'colspan="' + (curColspan + 1) + '"', cur);
                    curColspan = 0;
                }
                else {
                    // Cur is standalone. If it is same as sublevel,
                    // remove sublevel and add just toplevel.
                    if (cur === subheaders[i]) {
                        if (useRowspanHeaders) {
                            rowspan = 2;
                            subheaders.splice(i, 1);
                        }
                        else {
                            rowspan = 1;
                            subheaders[i] = '';
                        }
                    }
                    else {
                        rowspan = 1;
                    }
                    html += this.getCellHTMLFromValue('th', 'highcharts-table-topheading', 'scope="col"' +
                        (rowspan > 1 ?
                            ' valign="top" rowspan="' + rowspan + '"' :
                            ''), cur);
                }
            }
            html += '</tr>';
        }
        // Add the subheaders (the only headers if not using multilevels)
        if (subheaders) {
            html += '<tr>';
            for (i = 0, len = subheaders.length; i < len; ++i) {
                if (typeof subheaders[i] !== 'undefined') {
                    html += this.getCellHTMLFromValue('th', null, 'scope="col"', subheaders[i]);
                }
            }
            html += '</tr>';
        }
        html += '</thead>';
        return html;
    }
    /**
     * Initiates the parsing of the HTML table
     *
     * @param {Partial<HTMLTableConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     * @emits HTMLTableParser#parseError
     */
    parse(options, eventDetail) {
        const converter = this, columnsArray = [], headers = [], parseOptions = HTMLTableConverter_merge(converter.options, options), { endRow, startColumn, endColumn, firstRowAsNames } = parseOptions, tableHTML = parseOptions.tableElement || this.tableElement;
        if (!(tableHTML instanceof HTMLElement)) {
            converter.emit({
                type: 'parseError',
                columns: columnsArray,
                detail: eventDetail,
                headers,
                error: 'Not a valid HTML Table'
            });
            return {};
        }
        converter.tableElement = tableHTML;
        converter.tableElementID = tableHTML.id;
        this.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        const rows = tableHTML.getElementsByTagName('tr'), rowsCount = rows.length;
        let rowIndex = 0, item, { startRow } = parseOptions;
        // Insert headers from the first row
        if (firstRowAsNames && rowsCount) {
            const items = rows[0].children, itemsLength = items.length;
            for (let i = startColumn; i < itemsLength; i++) {
                if (i > endColumn) {
                    break;
                }
                item = items[i];
                if (item.tagName === 'TD' ||
                    item.tagName === 'TH') {
                    headers.push(item.innerHTML);
                }
            }
            startRow++;
        }
        while (rowIndex < rowsCount) {
            if (rowIndex >= startRow && rowIndex <= endRow) {
                const columnsInRow = rows[rowIndex].children, columnsInRowLength = columnsInRow.length;
                let columnIndex = 0;
                while (columnIndex < columnsInRowLength) {
                    const relativeColumnIndex = columnIndex - startColumn, row = columnsArray[relativeColumnIndex];
                    item = columnsInRow[columnIndex];
                    if ((item.tagName === 'TD' ||
                        item.tagName === 'TH') &&
                        (columnIndex >= startColumn &&
                            columnIndex <= endColumn)) {
                        if (!columnsArray[relativeColumnIndex]) {
                            columnsArray[relativeColumnIndex] = [];
                        }
                        let cellValue = converter.convertByType(item.innerHTML);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columnsArray[relativeColumnIndex][rowIndex - startRow] = cellValue;
                        // Loop over all previous indices and make sure
                        // they are nulls, not undefined.
                        let i = 1;
                        while (rowIndex - startRow >= i &&
                            row[rowIndex - startRow - i] === void 0) {
                            row[rowIndex - startRow - i] = null;
                            i++;
                        }
                    }
                    columnIndex++;
                }
            }
            rowIndex++;
        }
        this.headers = headers;
        this.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers
        });
        return Converters_DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
HTMLTableConverter.defaultOptions = {
    ...Converters_DataConverter.defaultOptions,
    useRowspanHeaders: true,
    useMultiLevelHeaders: true,
    startColumn: 0,
    endColumn: Number.MAX_VALUE,
    startRow: 0,
    endRow: Number.MAX_VALUE
};
Converters_DataConverter.registerType('HTMLTable', HTMLTableConverter);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Converters_HTMLTableConverter = (HTMLTableConverter);

;// ./code/es-modules/Data/Connectors/HTMLTableConnector.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */




const { win } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { merge: HTMLTableConnector_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Class that handles creating a data connector from an HTML table.
 *
 * @private
 */
class HTMLTableConnector extends Connectors_DataConnector {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of HTMLTableConnector.
     *
     * @param {HTMLTableConnector.CombinedHTMLTableConnectorOptions} [options]
     * Options for the connector and converter.
     */
    constructor(options) {
        const mergedOptions = HTMLTableConnector_merge(HTMLTableConnector.defaultOptions, options);
        super(mergedOptions);
        this.options = mergedOptions;
        this.converter = new Converters_HTMLTableConverter(mergedOptions);
    }
    /**
     * Initiates creating the dataconnector from the HTML table
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits HTMLTableConnector#load
     * @emits HTMLTableConnector#afterLoad
     * @emits HTMLTableConnector#loadError
     */
    async load(eventDetail) {
        const connector = this;
        const options = connector.options;
        const converter = connector.converter;
        const table = connector.getTable();
        const htmlTable = options.htmlTable;
        connector.emit({
            type: 'load',
            detail: eventDetail
        });
        let tableElement;
        if (typeof htmlTable === 'string') {
            connector.tableID = htmlTable;
            tableElement = win.document.getElementById(htmlTable);
        }
        else {
            tableElement = htmlTable;
            connector.tableID = tableElement.id;
        }
        connector.tableElement = tableElement || void 0;
        if (!connector.tableElement) {
            const error = 'HTML table not provided, or element with ID not found';
            connector.emit({
                type: 'loadError',
                detail: eventDetail,
                error
            });
            return Promise.reject(new Error(error));
        }
        const columns = converter.parse(HTMLTableConnector_merge({ tableElement: connector.tableElement }, options), eventDetail);
        // If already loaded, clear the current rows
        table.deleteColumns();
        table.setColumns(columns);
        await connector.applyTableModifiers();
        connector.emit({
            type: 'afterLoad',
            detail: eventDetail
        });
        return connector;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
HTMLTableConnector.defaultOptions = {
    id: 'HTML-table-connector',
    type: 'HTMLTable',
    htmlTable: ''
};
Connectors_DataConnector.registerType('HTMLTable', HTMLTableConnector);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Connectors_HTMLTableConnector = ((/* unused pure expression or super */ null && (HTMLTableConnector)));

;// ./code/es-modules/Data/Modifiers/ChainModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */



const { addEvent: ChainModifier_addEvent, fireEvent: ChainModifier_fireEvent, merge: ChainModifier_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Modifies a table with the help of modifiers in an ordered chain.
 *
 */
class ChainModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the modifier chain.
     *
     * @param {Partial<ChainModifier.Options>} [options]
     * Options to configure the modifier chain.
     *
     * @param {...DataModifier} [chain]
     * Ordered chain of modifiers.
     */
    constructor(options, ...chain) {
        super();
        this.chain = chain;
        this.options = ChainModifier_merge(ChainModifier.defaultOptions, options);
        const optionsChain = this.options.chain || [];
        for (let i = 0, iEnd = optionsChain.length, modifierOptions, ModifierClass; i < iEnd; ++i) {
            modifierOptions = optionsChain[i];
            if (!modifierOptions.type) {
                continue;
            }
            ModifierClass = Modifiers_DataModifier.types[modifierOptions.type];
            if (ModifierClass) {
                chain.push(new ModifierClass(modifierOptions));
            }
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a configured modifier to the end of the modifier chain. Please note,
     * that the modifier can be added multiple times.
     *
     * @param {DataModifier} modifier
     * Configured modifier to add.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    add(modifier, eventDetail) {
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
        this.chain.push(modifier);
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
    }
    /**
     * Clears all modifiers from the chain.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    clear(eventDetail) {
        this.emit({
            type: 'clearChain',
            detail: eventDetail
        });
        this.chain.length = 0;
        this.emit({
            type: 'afterClearChain',
            detail: eventDetail
        });
    }
    /**
     * Sequentially applies all modifiers in the chain to the given table,
     * updating its `modified` property with the final result.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    async modify(table, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.slice().reverse() :
            this.chain.slice());
        if (!table.modified) {
            table.modified = table.clone(false, eventDetail);
        }
        let modified = table;
        for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
            try {
                await modifiers[i].modify(modified, eventDetail);
            }
            catch (error) {
                this.emit({
                    type: 'error',
                    detail: eventDetail,
                    table
                });
                throw error;
            }
            modified = modified.getModified();
        }
        table.modified = modified;
        return table;
    }
    /**
     * Applies several modifications to the table.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table as a reference.
     *
     * @emits ChainDataModifier#execute
     * @emits ChainDataModifier#afterExecute
     */
    modifyTable(table, eventDetail) {
        const chain = this;
        chain.emit({
            type: 'modify',
            detail: eventDetail,
            table
        });
        const modifiers = (chain.options.reverse ?
            chain.chain.reverse() :
            chain.chain.slice());
        let modified = table.getModified();
        for (let i = 0, iEnd = modifiers.length, modifier; i < iEnd; ++i) {
            modifier = modifiers[i];
            modified =
                modifier.modifyTable(modified, eventDetail).getModified();
        }
        table.modified = modified;
        chain.emit({
            type: 'afterModify',
            detail: eventDetail,
            table
        });
        return table;
    }
    /**
     * Removes a configured modifier from all positions in the modifier chain.
     *
     * @param {DataModifier} modifier
     * Configured modifier to remove.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    remove(modifier, eventDetail) {
        const modifiers = this.chain;
        this.emit({
            type: 'removeModifier',
            detail: eventDetail,
            modifier
        });
        modifiers.splice(modifiers.indexOf(modifier), 1);
        this.emit({
            type: 'afterRemoveModifier',
            detail: eventDetail,
            modifier
        });
    }
    emit(e) {
        ChainModifier_fireEvent(this, e.type, e);
    }
    on(type, callback) {
        return ChainModifier_addEvent(this, type, callback);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default option for the ordered modifier chain.
 */
ChainModifier.defaultOptions = {
    type: 'Chain'
};
Modifiers_DataModifier.registerType('Chain', ChainModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_ChainModifier = ((/* unused pure expression or super */ null && (ChainModifier)));

;// ./code/es-modules/Data/Modifiers/InvertModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *
 * */



const { merge: InvertModifier_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Inverts columns and rows in a table.
 *
 * @private
 */
class InvertModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the invert modifier.
     *
     * @param {Partial<InvertModifier.Options>} [options]
     * Options to configure the invert modifier.
     */
    constructor(options) {
        super();
        this.options = InvertModifier_merge(InvertModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Inverts rows and columns in the table. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to invert.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with inverted `modified` property as a reference or modified table,
     * if `modified` property of the original table is undefined.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const modified = table.getModified();
        if (table.hasColumns(['columnIds'])) { // Inverted table
            const columnIdsColumn = ((table.deleteColumns(['columnIds']) || {})
                .columnIds || []), columns = {}, columnIds = [];
            for (let i = 0, iEnd = columnIdsColumn.length; i < iEnd; ++i) {
                columnIds.push('' + columnIdsColumn[i]);
            }
            for (let i = 0, iEnd = table.getRowCount(), row; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[columnIds[i]] = row;
                }
            }
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        else { // Regular table
            const columns = {};
            for (let i = 0, iEnd = table.getRowCount(), row; i < iEnd; ++i) {
                row = table.getRow(i);
                if (row) {
                    columns[`${i}`] = row;
                }
            }
            columns.columnIds = table.getColumnIds();
            modified.deleteColumns();
            modified.setColumns(columns);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the invert modifier.
 */
InvertModifier.defaultOptions = {
    type: 'Invert'
};
Modifiers_DataModifier.registerType('Invert', InvertModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_InvertModifier = ((/* unused pure expression or super */ null && (InvertModifier)));

;// ./code/es-modules/Data/Modifiers/MathModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */




/* *
 *
 *  Class
 *
 * */
/**
 * Replaces formula strings in a table with calculated values.
 *
 * @class
 * @name Highcharts.DataModifier.types.MathModifier
 * @augments Highcharts.DataModifier
 */
class MathModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options) {
        super();
        this.options = {
            ...MathModifier.defaultOptions,
            ...options
        };
    }
    /* *
     *
     *  Functions
     *
     * */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const alternativeSeparators = modifier.options.alternativeSeparators, formulaColumns = (modifier.options.formulaColumns ||
            table.getColumnIds()), modified = table.getModified();
        for (let i = 0, iEnd = formulaColumns.length, columnId; i < iEnd; ++i) {
            columnId = formulaColumns[i];
            if (formulaColumns.indexOf(columnId) >= 0) {
                modified.setColumn(columnId, modifier.processColumn(table, columnId));
            }
        }
        const columnFormulas = (modifier.options.columnFormulas || []);
        for (let i = 0, iEnd = columnFormulas.length, columnFormula, formula; i < iEnd; ++i) {
            columnFormula = columnFormulas[i];
            formula = Formula_FormulaParser.parseFormula(columnFormula.formula, alternativeSeparators);
            modified.setColumn(columnFormula.column, modifier.processColumnFormula(formula, table, columnFormula.rowStart, columnFormula.rowEnd));
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
    /**
     * Process a column by replacing formula strings with calculated values.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {string} columnId
     * Id of column to process.
     *
     * @param {number} rowIndex
     * Row index to start the replacing process from.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    processColumn(table, columnId, rowIndex = 0) {
        const alternativeSeparators = this.options.alternativeSeparators, column = (table.getColumn(columnId, true) || [])
            .slice(rowIndex > 0 ? rowIndex : 0);
        for (let i = 0, iEnd = column.length, cacheFormula = [], cacheString = '', cell; i < iEnd; ++i) {
            cell = column[i];
            if (typeof cell === 'string' &&
                cell[0] === '=') {
                try {
                    // Use cache while formula string is repetitive
                    cacheFormula = (cacheString === cell ?
                        cacheFormula :
                        Formula_FormulaParser.parseFormula(cell.substring(1), alternativeSeparators));
                    // Process parsed formula string
                    column[i] =
                        Formula_FormulaProcessor.processFormula(cacheFormula, table);
                }
                catch {
                    column[i] = NaN;
                }
            }
        }
        return column;
    }
    /**
     * Process a column by replacing cell values with calculated values from a
     * given formula.
     *
     * @private
     *
     * @param {Highcharts.Formula} formula
     * Formula to use for processing.
     *
     * @param {Highcharts.DataTable} table
     * Table to extract column from and use as reference.
     *
     * @param {number} rowStart
     * Row index to start the replacing process from.
     *
     * @param {number} rowEnd
     * Row index to end the replacing process.
     *
     * @return {Highcharts.DataTableColumn}
     * Returns the processed table column.
     */
    processColumnFormula(formula, table, rowStart = 0, rowEnd = table.getRowCount()) {
        rowStart = rowStart >= 0 ? rowStart : 0;
        rowEnd = rowEnd >= 0 ? rowEnd : table.getRowCount() + rowEnd;
        const column = [], modified = table.getModified();
        for (let i = 0, iEnd = (rowEnd - rowStart); i < iEnd; ++i) {
            try {
                column[i] = Formula_FormulaProcessor.processFormula(formula, modified);
            }
            catch {
                column[i] = NaN;
            }
            finally {
                formula = Formula_FormulaProcessor.translateReferences(formula, 0, 1);
            }
        }
        return column;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options of MathModifier.
 * @private
 */
MathModifier.defaultOptions = {
    type: 'Math',
    alternativeSeparators: false
};
Modifiers_DataModifier.registerType('Math', MathModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_MathModifier = ((/* unused pure expression or super */ null && (MathModifier)));

;// ./code/es-modules/Data/Modifiers/RangeModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */



const { merge: RangeModifier_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Slices the table rows based on the specified range.
 */
class RangeModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the range modifier.
     *
     * @param {Partial<RangeModifier.Options>} [options]
     * Options to configure the range modifier.
     */
    constructor(options) {
        super();
        this.options = RangeModifier_merge(RangeModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Replaces table rows with ranged rows. If the given table does not have
     * defined a `modified` property, the filtering is applied in-place on the
     * original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        let { start, end } = modifier.options;
        start = Math.max(0, start || 0);
        end = Math.min(end || Infinity, table.getRowCount());
        const length = Math.max(end - start, 0);
        const modified = table.getModified();
        modified.deleteRows();
        modified.setRows(table.getRows(start, length));
        modified.setOriginalRowIndexes(Array.from({ length }, (_, i) => table.getOriginalRowIndex(start + i)));
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the range modifier.
 */
RangeModifier.defaultOptions = {
    type: 'Range',
    start: 0,
    end: Infinity
};
Modifiers_DataModifier.registerType('Range', RangeModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_RangeModifier = ((/* unused pure expression or super */ null && (RangeModifier)));

;// ./code/es-modules/Data/Modifiers/SortModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */



const { merge: SortModifier_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Sort table rows according to values of a column.
 *
 */
class SortModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Static Functions
     *
     * */
    static ascending(a, b) {
        return ((a || 0) < (b || 0) ? -1 :
            (a || 0) > (b || 0) ? 1 :
                0);
    }
    static descending(a, b) {
        return ((b || 0) < (a || 0) ? -1 :
            (b || 0) > (a || 0) ? 1 :
                0);
    }
    static compareFactory(direction, customCompare) {
        if (customCompare) {
            if (direction === 'desc') {
                return (a, b) => -customCompare(a, b);
            }
            return customCompare;
        }
        return (direction === 'asc' ?
            SortModifier.ascending :
            SortModifier.descending);
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the sort modifier.
     *
     * @param {Partial<SortDataModifier.Options>} [options]
     * Options to configure the sort modifier.
     */
    constructor(options) {
        super();
        this.options = SortModifier_merge(SortModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Returns index and row for sort reference.
     *
     * @private
     *
     * @param {Highcharts.DataTable} table
     * Table with rows to reference.
     *
     * @return {Array<SortModifier.RowReference>}
     * Array of row references.
     */
    getRowReferences(table) {
        const rows = table.getRows(), rowReferences = [];
        for (let i = 0, iEnd = rows.length; i < iEnd; ++i) {
            rowReferences.push({
                index: i,
                row: rows[i]
            });
        }
        return rowReferences;
    }
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const columnIds = table.getColumnIds(), rowCount = table.getRowCount(), rowReferences = this.getRowReferences(table), { direction, orderInColumn, compare: customCompare } = modifier.options, modified = table.getModified();
        const orderBy = ('columns' in modifier.options ?
            modifier.options.columns :
            [modifier.options.orderByColumn]);
        const orderByIndexes = [];
        for (let i = 0, iEnd = orderBy.length; i < iEnd; ++i) {
            const sort = orderBy[i];
            const isString = typeof sort === 'string';
            const column = isString ? sort : sort.column;
            const columnIndex = columnIds.indexOf(column);
            if (columnIndex === -1) {
                continue;
            }
            orderByIndexes.push({
                columnIndex,
                compare: SortModifier.compareFactory(isString ? direction : (sort.direction || direction), isString ? customCompare : (sort.compare || customCompare))
            });
        }
        if (orderByIndexes.length) {
            rowReferences.sort((a, b) => {
                for (let i = 0, iEnd = orderByIndexes.length; i < iEnd; ++i) {
                    const { columnIndex, compare } = orderByIndexes[i];
                    const result = compare(a.row[columnIndex], b.row[columnIndex]);
                    if (result) {
                        return result;
                    }
                }
                return a.index - b.index;
            });
        }
        if (orderInColumn) {
            const column = [];
            for (let i = 0; i < rowCount; ++i) {
                column[rowReferences[i].index] = i;
            }
            modified.setColumns({ [orderInColumn]: column });
        }
        else {
            const originalIndexes = [];
            const rows = [];
            let rowReference;
            for (let i = 0; i < rowCount; ++i) {
                rowReference = rowReferences[i];
                originalIndexes.push(table.getOriginalRowIndex(rowReference.index));
                rows.push(rowReference.row);
            }
            modified.setRows(rows, 0);
            modified.setOriginalRowIndexes(originalIndexes);
        }
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options to group table rows.
 */
SortModifier.defaultOptions = {
    type: 'Sort',
    direction: 'desc',
    orderByColumn: 'y'
};
Modifiers_DataModifier.registerType('Sort', SortModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_SortModifier = ((/* unused pure expression or super */ null && (SortModifier)));

;// ./code/es-modules/Data/Modifiers/FilterModifier.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */



const { isFunction: FilterModifier_isFunction, merge: FilterModifier_merge } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Filters out table rows matching a given condition.
 */
class FilterModifier extends Modifiers_DataModifier {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Compiles a filter condition into a callback function.
     *
     * @param {FilterCondition} condition
     * Condition to compile.
     */
    static compile(condition) {
        if (FilterModifier_isFunction(condition)) {
            return condition;
        }
        const op = condition.operator;
        switch (op) {
            case 'and': {
                const subs = condition.conditions.map((c) => this.compile(c));
                return (row, table, i) => subs.every((cond) => cond(row, table, i));
            }
            case 'or': {
                const subs = condition.conditions.map((c) => this.compile(c));
                return (row, table, i) => subs.some((cond) => cond(row, table, i));
            }
            case 'not': {
                const sub = this.compile(condition.condition);
                return (row, table, i) => !sub(row, table, i);
            }
        }
        const { columnId: col, value } = condition;
        switch (op) {
            case '==':
                // eslint-disable-next-line eqeqeq
                return (row) => row[col] == value;
            case '===':
                return (row) => row[col] === value;
            case '!=':
                // eslint-disable-next-line eqeqeq
                return (row) => row[col] != value;
            case '!==':
                return (row) => row[col] !== value;
            case '>':
                return (row) => (row[col] || 0) > (value || 0);
            case '>=':
                return (row) => (row[col] || 0) >= (value || 0);
            case '<':
                return (row) => (row[col] || 0) < (value || 0);
            case '<=':
                return (row) => (row[col] || 0) <= (value || 0);
            case 'empty':
                return (row) => row[col] === null || row[col] === '';
        }
        const { ignoreCase } = condition;
        const str = (val) => {
            const s = '' + val;
            return (ignoreCase ?? true) ? s.toLowerCase() : s;
        };
        switch (op) {
            case 'contains':
                return (row) => str(row[col]).includes(str(value));
            default:
                return (row) => str(row[col])[op](str(value));
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the filter modifier.
     *
     * @param {Partial<FilterModifier.Options>} [options]
     * Options to configure the filter modifier.
     */
    constructor(options) {
        super();
        this.options = FilterModifier_merge(FilterModifier.defaultOptions, options);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Filters out table rows matching a given condition. If the given table
     * does not have defined a `modified` property, the filtering is applied
     * in-place on the original table rather than on a `modified` copy.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table with `modified` property as a reference or modified table, if
     * `modified` property of the original table is undefined.
     */
    modifyTable(table, eventDetail) {
        const modifier = this;
        modifier.emit({ type: 'modify', detail: eventDetail, table });
        const { condition } = modifier.options;
        if (!condition) {
            // If no condition is set, return the unmodified table.
            return table;
        }
        const matchRow = FilterModifier.compile(condition);
        const modified = table.getModified();
        const rows = [];
        const indexes = [];
        for (let i = 0, iEnd = table.getRowCount(); i < iEnd; ++i) {
            const row = table.getRowObject(i);
            if (!row) {
                continue;
            }
            if (matchRow(row, table, i)) {
                rows.push(row);
                indexes.push(table.getOriginalRowIndex(i));
            }
        }
        modified.deleteRows();
        modified.setRows(rows);
        modified.setOriginalRowIndexes(indexes);
        modifier.emit({ type: 'afterModify', detail: eventDetail, table });
        return table;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options for the filter modifier.
 */
FilterModifier.defaultOptions = {
    type: 'Filter'
};
Modifiers_DataModifier.registerType('Filter', FilterModifier);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Modifiers_FilterModifier = ((/* unused pure expression or super */ null && (FilterModifier)));

;// ./code/es-modules/masters/modules/data-tools.src.js




















const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.DataConnector = G.DataConnector || Connectors_DataConnector;
G.DataConverter = G.DataConverter || Converters_DataConverter;
G.DataCursor = G.DataCursor || Data_DataCursor;
G.DataModifier = G.DataModifier || Modifiers_DataModifier;
G.DataPool = G.DataPool || Data_DataPool;
G.DataTable = G.DataTable || Data_DataTable;
G.Formula = G.Formula || Formula_Formula;
/* harmony default export */ const data_tools_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
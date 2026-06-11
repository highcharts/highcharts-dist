// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/series-on-point
 * @requires highcharts
 *
 * Series on point module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański and Piotr Madej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Point"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/series-on-point", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Point"],amd1["SeriesRegistry"],amd1["SVGRenderer"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/series-on-point"] = factory(root["_Highcharts"], root["_Highcharts"]["Point"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["SVGRenderer"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Point"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["SVGRenderer"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__260__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__540__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 260:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__260__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 540:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__540__;

/***/ }),

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
  "default": () => (/* binding */ series_on_point_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Dawid Draguła
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
function setLength(column, length, asSubarray) {
    if (Array.isArray(column)) {
        column.length = length;
        return column;
    }
    return column[asSubarray ? 'subarray' : 'slice'](0, length);
}
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
/* *
 *
 *  Default Export
 *
 * */
const ColumnUtils = {
    convertToNumber,
    setLength,
    splice
};
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

;// ./code/es-modules/Data/DataTableCore.js
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


const { setLength: DataTableCore_setLength, splice: DataTableCore_splice } = Data_ColumnUtils;


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
class DataTableCore {
    constructor(options = {}) {
        this.isDataTable = true;
        this.autoId = !options.id;
        this.columns = {};
        this.id = (options.id || (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)());
        this.rowCount = 0;
        this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        let rowCount = 0;
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.objectEach)(options.columns || {}, (column, columnId) => {
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
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.objectEach)(this.columns, (column, columnId) => {
            if (column.length !== rowCount) {
                this.columns[columnId] = DataTableCore_setLength(column, rowCount);
            }
        });
    }
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
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.objectEach)(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    DataTableCore_splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.fireEvent)(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
    }
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
    getColumn(columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    }
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
    getRowObject(rowIndex, columnNames) {
        const row = {}, columns = this.columns;
        columnNames ?? (columnNames = Object.keys(this.columns));
        for (const columnName of columnNames) {
            row[columnName] = columns[columnName]?.[rowIndex];
        }
        return row;
    }
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
    setColumn(columnId, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnId]: column }, rowIndex, eventDetail);
    }
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
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.objectEach)(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.fireEvent)(this, 'afterSetColumns');
            this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        }
    }
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
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        var _a;
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1, rowKeys = Object.keys(row);
        if (eventDetail?.addColumns !== false) {
            for (let i = 0, iEnd = rowKeys.length; i < iEnd; i++) {
                columns[_a = rowKeys[i]] || (columns[_a] = new Array(this.rowCount));
            }
        }
        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.objectEach)(columns, (column, columnId) => {
            if (column) {
                if (insert) {
                    column = DataTableCore_splice(column, rowIndex, 0, true, [row[columnId]]).array;
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
        if (!eventDetail?.silent) {
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.fireEvent)(this, 'afterSetRows', { rowIndex });
            this.versionTag = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.uniqueKey)();
        }
    }
    /**
     * Returns the modified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTable}
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

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Point"],"commonjs":["highcharts","Point"],"commonjs2":["highcharts","Point"],"root":["Highcharts","Point"]}
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_ = __webpack_require__(260);
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default = /*#__PURE__*/__webpack_require__.n(highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
;// ./code/es-modules/Series/SeriesOnPointComposition.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Rafał Sebestjański, Piotr Madej
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */



const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());


const { bubble } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;


/* *
 *
 *  Composition
 *
 * */
var SeriesOnPointComposition;
(function (SeriesOnPointComposition) {
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
     * Extends the series with a small addition.
     *
     * @private
     */
    function compose(SeriesClass, ChartClass) {
        if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.pushUnique)(composed, 'SeriesOnPoint')) {
            const { chartGetZData, seriesAfterInit, seriesAfterRender, seriesGetCenter, seriesShowOrHide, seriesTranslate } = Additions.prototype;
            // We can mark support for pie series here because it's in the core.
            // But all other series outside the core should be marked in its
            // module. This is crucial when loading series-on-point before
            // loading a module, e.g. sunburst.
            // Supported series types:
            // - pie
            // - sunburst
            SeriesClass.types.pie.prototype.onPointSupported = true;
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'afterInit', seriesAfterInit);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'afterRender', seriesAfterRender);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'afterGetCenter', seriesGetCenter);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'hide', seriesShowOrHide);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'show', seriesShowOrHide);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(SeriesClass, 'translate', seriesTranslate);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(ChartClass, 'beforeRender', chartGetZData);
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.addEvent)(ChartClass, 'beforeRedraw', chartGetZData);
        }
        return SeriesClass;
    }
    SeriesOnPointComposition.compose = compose;
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(series) {
            /**
             * @ignore
             */
            this.getColumn = bubble.prototype.getColumn;
            /**
             * @ignore
             */
            this.getRadii = bubble.prototype.getRadii;
            /**
             * @ignore
             */
            this.getRadius = bubble.prototype.getRadius;
            /**
             * @ignore
             */
            this.getPxExtremes = bubble.prototype.getPxExtremes;
            /**
             * @ignore
             */
            this.getZExtremes = bubble.prototype.getZExtremes;
            this.chart = series.chart;
            this.series = series;
            this.options = series.options.onPoint;
        }
        /**
         * Draw connector line that starts from the initial point's position
         * and ends in the center of the series.
         * @private
         */
        drawConnector() {
            if (!this.connector) {
                this.connector = this.series.chart.renderer.path()
                    .addClass('highcharts-connector-seriesonpoint')
                    .attr({
                    zIndex: -1
                })
                    .add(this.series.markerGroup);
            }
            const attribs = this.getConnectorAttributes();
            attribs && this.connector.animate(attribs);
        }
        /**
         * Get connector line path and styles that connects series and point.
         *
         * @private
         *
         * @return {Highcharts.SVGAttributes} attribs - the path and styles.
         */
        getConnectorAttributes() {
            const chart = this.series.chart, onPointOptions = this.options;
            if (!onPointOptions) {
                return;
            }
            const connectorOpts = onPointOptions.connectorOptions || {}, position = onPointOptions.position, connectedPoint = chart.get(onPointOptions.id);
            if (!(connectedPoint instanceof (highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default())) ||
                !position ||
                !(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(connectedPoint.plotX) ||
                !(0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(connectedPoint.plotY)) {
                return;
            }
            const xFrom = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(position.x) ?
                position.x :
                connectedPoint.plotX, yFrom = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(position.y) ?
                position.y :
                connectedPoint.plotY, xTo = xFrom + (position.offsetX || 0), yTo = yFrom + (position.offsetY || 0), width = connectorOpts.width || 1, color = connectorOpts.stroke || this.series.color, dashStyle = connectorOpts.dashstyle, attribs = {
                d: highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default().prototype.crispLine([
                    ['M', xFrom, yFrom],
                    ['L', xTo, yTo]
                ], width),
                'stroke-width': width
            };
            if (!chart.styledMode) {
                attribs.stroke = color;
                attribs.dashstyle = dashStyle;
            }
            return attribs;
        }
        /**
         * Initialize Series on point on series init.
         *
         * @ignore
         */
        seriesAfterInit() {
            if (this.onPointSupported && this.options.onPoint) {
                this.bubblePadding = true;
                this.useMapGeometry = true;
                this.onPoint = new Additions(this);
            }
        }
        /**
         * @ignore
         */
        seriesAfterRender() {
            // Clear bubbleZExtremes to reset z calculations on update.
            delete this.chart.bubbleZExtremes;
            this.onPoint && this.onPoint.drawConnector();
        }
        /**
         * Recalculate series.center (x, y and size).
         *
         * @ignore
         */
        seriesGetCenter(e) {
            const onPointOptions = this.options.onPoint, center = e.positions;
            if (onPointOptions) {
                const connectedPoint = this.chart.get(onPointOptions.id);
                if (connectedPoint instanceof (highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default()) &&
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(connectedPoint.plotX) &&
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(connectedPoint.plotY)) {
                    center[0] = connectedPoint.plotX;
                    center[1] = connectedPoint.plotY;
                }
                const position = onPointOptions.position;
                if (position) {
                    if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(position.x)) {
                        center[0] = position.x;
                    }
                    if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.defined)(position.y)) {
                        center[1] = position.y;
                    }
                    if (position.offsetX) {
                        center[0] += position.offsetX;
                    }
                    if (position.offsetY) {
                        center[1] += position.offsetY;
                    }
                }
            }
            // Get and set the size
            const radius = this.radii && this.radii[this.index];
            if ((0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.isNumber)(radius)) {
                center[2] = radius * 2;
            }
            e.positions = center;
        }
        /**
         * @ignore
         */
        seriesShowOrHide() {
            const allSeries = this.chart.series;
            // When toggling a series visibility, loop through all points
            this.points?.forEach((point) => {
                // Find all series that are on toggled points
                const series = (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.find)(allSeries, (series) => {
                    const id = ((series.onPoint || {}).options || {}).id;
                    if (!id) {
                        return false;
                    }
                    return id === point.id;
                });
                // And also toggle series that are on toggled points. Redraw is
                // not needed because it's fired later after showOrHide event
                series && series.setVisible(!series.visible, false);
            });
        }
        /**
         * Calculate required radius (z data) before original translate.
         *
         * @ignore
         * @function Highcharts.Series#translate
         */
        seriesTranslate() {
            if (this.onPoint) {
                this.onPoint.getRadii();
                this.radii = this.onPoint.radii;
            }
        }
        /**
         * @ignore
         */
        chartGetZData() {
            const zData = [];
            this.series.forEach((series) => {
                const onPointOpts = series.options.onPoint;
                zData.push(onPointOpts?.z ?? null);
            });
            const dataTable = new Data_DataTableCore({
                columns: {
                    z: zData
                }
            });
            this.series.forEach((series) => {
                // Save z values of all the series
                if (series.onPoint) {
                    series.onPoint.dataTable = series.dataTable = dataTable;
                }
            });
        }
    }
    SeriesOnPointComposition.Additions = Additions;
})(SeriesOnPointComposition || (SeriesOnPointComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_SeriesOnPointComposition = (SeriesOnPointComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * Options for the _Series on point_ feature. Only `pie` and `sunburst` series
 * are supported at this moment.
 *
 * @sample      {highcharts} highcharts/series-on-point/series-on-point
 *              Series on point
 * @sample      {highmaps} maps/demo/map-pies
 *              Pies on a map
 * @requires    highcharts-more
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {object}
 * @apioption   plotOptions.series.onPoint
 */
/**
 * Options for the connector in the _Series on point_ feature.
 *
 * In styled mode, the connector can be styled with the
 * `.highcharts-connector-seriesonpoint` class name.
 *
 * @since 10.2.0
 * @type        {Highcharts.SVGAttributes}
 * @apioption   plotOptions.series.onPoint.connectorOptions
 */
/**
 * Color of the connector line. By default it's the series' color.
 *
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.stroke
 */
/**
 * A name for the dash style to use for the connector.
 *
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.dashstyle
 */
/**
 * Pixel width of the connector line.
 *
 * @default     1
 * @type        {number}
 * @since 10.2.0
 * @apioption   plotOptions.series.onPoint.connectorOptions.width
 */
/**
 * The `id` of the point that we connect the series to. Only points with a given
 * `plotX` and `plotY` values and map points are valid.
 *
 * @since 10.2.0
 * @type       {string}
 * @apioption  plotOptions.series.onPoint.id
 */
/**
 * Options allowing to set a position and an offset of the series in the
 * _Series on point_ feature.
 *
 * @since 10.2.0
 * @type        {object}
 * @apioption   plotOptions.series.onPoint.position
 */
/**
 * Series center offset from the original x position. If defined, the connector
 * line is drawn connecting original position with new position.
 *
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetX
 */
/**
 * Series center offset from the original y position. If defined, the connector
 * line is drawn from original position to a new position.
 *
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetY
 */
/**
 * X position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.x
 */
/**
 * Y position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.y
 */
''; // Keeps doclets above in transpiled file

;// ./code/es-modules/masters/modules/series-on-point.src.js




const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
Series_SeriesOnPointComposition.compose(G.Series, G.Chart);
/* harmony default export */ const series_on_point_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/data
 * @requires highcharts
 *
 * Data module
 *
 * (c) 2012-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// ./code/es-modules/Core/HttpUtilities.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Christer Vasseng, Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */


const { win } = (external_highcharts_src_js_default_default());

/* *
 *
 *  Functions
 *
 * */
/**
 * Perform an Ajax call.
 *
 * @function Highcharts.ajax
 *
 * @param {Highcharts.AjaxSettingsObject} settings
 * The Ajax settings to use.
 *
 * @return {false | undefined}
 * Returns false, if error occurred.
 */
function ajax(settings) {
    const headers = {
        json: 'application/json',
        xml: 'application/xml',
        text: 'text/plain',
        octet: 'application/octet-stream'
    }, r = new XMLHttpRequest();
    /**
     * Private error handler.
     * @internal
     * @param {XMLHttpRequest} xhr
     * Internal request object.
     * @param {string | Error} err
     * Occurred error.
     */
    function handleError(xhr, err) {
        if (settings.error) {
            settings.error(xhr, err);
        }
        else {
            // @todo Maybe emit a highcharts error event here
        }
    }
    if (!settings.url) {
        return false;
    }
    r.open((settings.type || 'get').toUpperCase(), settings.url, true);
    if (!settings.headers?.['Content-Type']) {
        r.setRequestHeader('Content-Type', headers[settings.dataType || 'json'] || headers.text);
    }
    (0,external_highcharts_src_js_default_namespaceObject.objectEach)(settings.headers, function (val, key) {
        r.setRequestHeader(key, val);
    });
    if (settings.responseType) {
        r.responseType = settings.responseType;
    }
    // @todo lacking timeout handling
    r.onreadystatechange = function () {
        let res;
        if (r.readyState === 4) {
            if (r.status === 200) {
                if (settings.responseType !== 'blob') {
                    res = r.responseText;
                    if (settings.dataType === 'json') {
                        try {
                            res = JSON.parse(res);
                        }
                        catch (e) {
                            if (e instanceof Error) {
                                return handleError(r, e);
                            }
                        }
                    }
                }
                return settings.success?.(res, r);
            }
            handleError(r, r.responseText);
        }
    };
    if (settings.data && typeof settings.data !== 'string') {
        settings.data = JSON.stringify(settings.data);
    }
    r.send(settings.data);
}
/**
 * Get a JSON resource over XHR, also supporting CORS without preflight.
 *
 * @function Highcharts.getJSON
 *
 * @param {string} url
 * The URL to load.
 * @param {Function} success
 * The success callback. For error handling, use the `Highcharts.ajax` function
 * instead.
 */
function getJSON(url, success) {
    HttpUtilities.ajax({
        url: url,
        success: success,
        dataType: 'json',
        headers: {
            // Override the Content-Type to avoid preflight problems with CORS
            // in the Highcharts demos
            'Content-Type': 'text/plain'
        }
    });
}
/**
 * The post utility.
 *
 * @internal
 * @function Highcharts.post
 *
 * @param {string} url
 * Post URL.
 *
 * @param {Object} data
 * Post data.
 *
 * @param {RequestInit} [fetchOptions]
 * Additional attributes for the post request.
 */
async function post(url, data, fetchOptions) {
    // Prepare a form to send the data
    const formData = new win.FormData();
    // Add the data to the form
    (0,external_highcharts_src_js_default_namespaceObject.objectEach)(data, function (value, name) {
        formData.append(name, value);
    });
    formData.append('b64', 'true');
    // Send the POST
    const response = await win.fetch(url, {
        method: 'POST',
        body: formData,
        ...fetchOptions
    });
    // Check the response
    if (response.ok) {
        // Get the text from the response
        const text = await response.text();
        // Prepare self-click link with the Base64 representation
        const link = document.createElement('a');
        link.href = `data:${data.type};base64,${text}`;
        link.download = data.filename;
        link.click();
        // Remove the link
        (0,external_highcharts_src_js_default_namespaceObject.discardElement)(link);
    }
}
/**
 * Utility functions for Ajax.
 * @class
 * @name Highcharts.HttpUtilities
 */
const HttpUtilities = {
    ajax,
    getJSON
};
HttpUtilities.post = post;
/* harmony default export */ const Core_HttpUtilities = (HttpUtilities);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @interface Highcharts.AjaxSettingsObject
 */ /**
* The payload to send.
*
* @name Highcharts.AjaxSettingsObject#data
* @type {string | Highcharts.Dictionary<any> | undefined}
*/ /**
* The data type expected.
*
* @name Highcharts.AjaxSettingsObject#dataType
* @type {"json" | "xml" | "text" | "octet" | undefined}
*/ /**
* Function to call on error.
*
* @name Highcharts.AjaxSettingsObject#error
* @type {Function | undefined}
*/ /**
* The headers; keyed on header name.
*
* @name Highcharts.AjaxSettingsObject#headers
* @type {Highcharts.Dictionary<string> | undefined}
*/ /**
* Function to call on success.
*
* @name Highcharts.AjaxSettingsObject#success
* @type {Function | undefined}
*/ /**
* The HTTP method to use. For example GET or POST.
*
* @name Highcharts.AjaxSettingsObject#type
* @type {string | undefined}
*/ /**
* The URL to call.
*
* @name Highcharts.AjaxSettingsObject#url
* @type {string}
*/
(''); // Keeps doclets above in JS file

;// external ["../highcharts.src.js","default","Axis"]
const external_highcharts_src_js_default_Axis_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Axis;
var external_highcharts_src_js_default_Axis_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Axis_namespaceObject);
;// external ["../highcharts.src.js","default","Chart"]
const external_highcharts_src_js_default_Chart_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Chart;
var external_highcharts_src_js_default_Chart_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Chart_namespaceObject);
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
        this.id = (options.id || (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)());
        this.rowCount = 0;
        this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
        let rowCount = 0;
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(options.columns || {}, (column, columnId) => {
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
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(this.columns, (column, columnId) => {
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
            (0,external_highcharts_src_js_default_namespaceObject.objectEach)(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    DataTableCore_splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
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
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'afterSetColumns');
            this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
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
        (0,external_highcharts_src_js_default_namespaceObject.objectEach)(columns, (column, columnId) => {
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
            (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(this, 'afterSetRows', { rowIndex });
            this.versionTag = (0,external_highcharts_src_js_default_namespaceObject.uniqueKey)();
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

;// external ["../highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// external ["../highcharts.src.js","default","Time"]
const external_highcharts_src_js_default_Time_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Time;
var external_highcharts_src_js_default_Time_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Time_namespaceObject);
;// ./code/es-modules/Extensions/Data.js
/* *
 *
 *  Data module
 *
 *  (c) 2012-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */






const { doc } = (external_highcharts_src_js_default_default());



const { seriesTypes } = (external_highcharts_src_js_default_SeriesRegistry_default());



/* *
 *
 *  Functions
 *
 * */
/**
 * Get the free column indexes.
 *
 * @param {number} numberOfColumns
 * The number of columns.
 *
 * @param {Array<SeriesBuilder>} seriesBuilders
 * The seriesBuilders.
 *
 * @return {Array<number>}
 * The free indexes.
 *
 * @internal
 */
function getFreeIndexes(numberOfColumns, seriesBuilders) {
    // Add all columns as free
    const freeIndexes = new Array(numberOfColumns).fill(true), freeIndexValues = [];
    // Loop all defined builders and remove their referenced columns
    seriesBuilders.forEach((seriesBuilder) => {
        seriesBuilder.getReferencedColumnIndexes().forEach((index) => {
            freeIndexes[index] = false;
        });
    });
    // Collect the values for the free indexes
    freeIndexes.forEach((isFree, i) => {
        if (isFree) {
            freeIndexValues.push(i);
        }
    });
    return freeIndexValues;
}
/**
 * Checks if the data options has URL options.
 *
 * @internal
 *
 * @param {Highcharts.DataOptions} options
 * The data options to check.
 *
 * @return {boolean}
 * Returns true if any of the URL options is set.
 */
function hasURLOption(options) {
    return !!(options.rowsURL || options.csvURL || options.columnsURL);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Data class
 *
 * @requires modules/data
 *
 * @class
 * @name Highcharts.Data
 *
 * @param {Highcharts.DataOptions} dataOptions
 *
 * @param {Highcharts.Options} [chartOptions]
 *
 * @param {Highcharts.Chart} [chart]
 */
class Data {
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Creates a data object to parse data for a chart.
     *
     * @function Highcharts.data
     */
    static data(dataOptions, chartOptions = {}, chart) {
        return new Data(dataOptions, chartOptions, chart);
    }
    /**
     * Reorganize rows into columns.
     *
     * @function Highcharts.Data.rowsToColumns
     */
    static rowsToColumns(rows) {
        let row, rowsLength, col, colsLength, columns;
        if (rows) {
            columns = [];
            rowsLength = rows.length;
            for (row = 0; row < rowsLength; row++) {
                colsLength = rows[row].length;
                for (col = 0; col < colsLength; col++) {
                    if (!columns[col]) {
                        columns[col] = [];
                    }
                    columns[col][row] = rows[row][col];
                }
            }
        }
        return columns;
    }
    /* *
     *
     *  Constructors
     *
     * */
    constructor(dataOptions, chartOptions = {}, chart) {
        /**
         * A collection of two-dimensional arrays.
         * @internal
         */
        this.rowsToColumns = Data.rowsToColumns; // Backwards compatibility
        /**
         * A collection of available date formats, extendable from the outside to
         * support custom date formats.
         *
         * @name Highcharts.Data#dateFormats
         * @type {Highcharts.Dictionary<Highcharts.DataDateFormatObject>}
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], +match[2] - 1, +match[3]) :
                        NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[2] - 1, +match[1]) :
                        NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[1] - 1, +match[2]) :
                        NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    if (!match) {
                        return NaN;
                    }
                    const d = new Date();
                    let year = +match[3];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, +match[2] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3] + 2000, +match[1] - 1, +match[2]) :
                        NaN);
                }
            }
        };
        this.chart = chart;
        this.chartOptions = chartOptions;
        this.options = dataOptions;
        this.rawColumns = [];
        this.init(dataOptions, chartOptions, chart);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the Data object with the given options
     *
     * @internal
     * @function Highcharts.Data#init
     */
    init(dataOptions, chartOptions, chart) {
        let decimalPoint = dataOptions.decimalPoint, hasData;
        if (chartOptions) {
            this.chartOptions = chartOptions;
        }
        if (chart) {
            this.chart = chart;
        }
        if (decimalPoint !== '.' && decimalPoint !== ',') {
            decimalPoint = void 0;
        }
        this.options = dataOptions;
        this.columns = (dataOptions.columns ||
            this.rowsToColumns(dataOptions.rows) ||
            []);
        this.firstRowAsNames = dataOptions.firstRowAsNames ??
            this.firstRowAsNames ?? true;
        this.decimalRegex = (decimalPoint &&
            new RegExp('^(-?[0-9]+)' + decimalPoint + '([0-9]+)$'));
        // Always stop old polling when we have new options
        if (this.liveDataTimeout !== void 0) {
            (0,external_highcharts_src_js_default_namespaceObject.internalClearTimeout)(this.liveDataTimeout);
        }
        // This is a two-dimensional array holding the raw, trimmed string
        // values with the same organization as the columns array. It makes it
        // possible for example to revert from interpreted timestamps to
        // string-based categories.
        this.rawColumns = [];
        // No need to parse or interpret anything
        if (this.columns.length) {
            this.dataFound();
            hasData = !hasURLOption(dataOptions);
        }
        if (!hasData) {
            // Fetch live data
            hasData = this.fetchLiveData();
        }
        if (!hasData) {
            // Parse a CSV string if options.csv is given. The parseCSV function
            // returns a columns array, if it has no length, we have no data
            hasData = Boolean(this.parseCSV().length);
        }
        if (!hasData) {
            // Parse a HTML table if options.table is given
            hasData = Boolean(this.parseTable().length);
        }
        if (!hasData) {
            // Parse a Google Spreadsheet
            hasData = this.parseGoogleSpreadsheet();
        }
        if (!hasData && dataOptions.afterComplete) {
            dataOptions.afterComplete(this);
        }
    }
    /**
     * Get the column distribution. For example, a line series takes a single
     * column for Y values. A range series takes two columns for low and high
     * values respectively, and an OHLC series takes four columns.
     *
     * @function Highcharts.Data#getColumnDistribution
     * @internal
     */
    getColumnDistribution() {
        const chartOptions = this.chartOptions, options = this.options, xColumns = [], getValueCount = function (type = 'line') {
            return (seriesTypes[type].prototype.pointArrayMap || [0]).length;
        }, getPointArrayMap = function (type = 'line') {
            return seriesTypes[type].prototype.pointArrayMap;
        }, globalType = chartOptions?.chart?.type, individualCounts = [], seriesBuilders = [], 
        // If no series mapping is defined, check if the series array is
        // defined with types.
        seriesMapping = (options?.seriesMapping ||
            chartOptions?.series?.map(function () {
                return { x: 0 };
            }) ||
            []);
        let seriesIndex = 0;
        (chartOptions?.series || []).forEach((series) => {
            individualCounts.push(getValueCount(series.type || globalType));
        });
        // Collect the x-column indexes from seriesMapping
        seriesMapping.forEach((mapping) => {
            xColumns.push(mapping.x || 0);
        });
        // If there are no defined series with x-columns, use the first column
        // as x column
        if (xColumns.length === 0) {
            xColumns.push(0);
        }
        // Loop all seriesMappings and constructs SeriesBuilders from
        // the mapping options.
        seriesMapping.forEach((mapping) => {
            const builder = new SeriesBuilder(), numberOfValueColumnsNeeded = individualCounts[seriesIndex] ||
                getValueCount(globalType), seriesArr = chartOptions?.series ?? [], series = seriesArr[seriesIndex] ?? {}, defaultPointArrayMap = getPointArrayMap(series.type || globalType), pointArrayMap = defaultPointArrayMap ?? ['y'];
            if (
            // User-defined x.mapping
            (0,external_highcharts_src_js_default_namespaceObject.defined)(mapping.x) ||
                // All non cartesian don't need 'x'
                series.isCartesian ||
                // Except pie series:
                !defaultPointArrayMap) {
                // Add an x reader from the x property or from an undefined
                // column if the property is not set. It will then be auto
                // populated later.
                builder.addColumnReader(mapping.x, 'x');
            }
            // Add all column mappings
            (0,external_highcharts_src_js_default_namespaceObject.objectEach)(mapping, function (val, name) {
                if (name !== 'x') {
                    builder.addColumnReader(val, name);
                }
            });
            // Add missing columns
            for (let i = 0; i < numberOfValueColumnsNeeded; i++) {
                if (!builder.hasReader(pointArrayMap[i])) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, pointArrayMap[i]);
                }
            }
            seriesBuilders.push(builder);
            seriesIndex++;
        });
        let globalPointArrayMap = getPointArrayMap(globalType);
        if (typeof globalPointArrayMap === 'undefined') {
            globalPointArrayMap = ['y'];
        }
        this.valueCount = {
            global: getValueCount(globalType),
            xColumns: xColumns,
            individual: individualCounts,
            seriesBuilders: seriesBuilders,
            globalPointArrayMap: globalPointArrayMap
        };
    }
    /**
     * When the data is parsed into columns, either by CSV, table, GS or direct
     * input, continue with other operations.
     *
     * @internal
     * @function Highcharts.Data#dataFound
     */
    dataFound() {
        if (this.options.switchRowsAndColumns) {
            this.columns = this.rowsToColumns(this.columns);
        }
        // Interpret the info about series and columns
        this.getColumnDistribution();
        // Interpret the values into right types
        this.parseTypes();
        // Handle columns if a handleColumns callback is given
        if (this.parsed() !== false) {
            // Complete if a complete callback is given
            this.complete();
        }
    }
    /**
     * Parse a CSV input string
     *
     * @function Highcharts.Data#parseCSV
     */
    parseCSV(inOptions) {
        const self = this, columns = this.columns = [], options = inOptions || this.options, startColumn = options.startColumn || 0, endColumn = options.endColumn || Number.MAX_VALUE, dataTypes = [], 
        // We count potential delimiters in the prepass, and use the
        // result as the basis of half-intelligent guesses.
        potDelimiters = {
            ',': 0,
            ';': 0,
            '\t': 0
        };
        let csv = options.csv, startRow = options.startRow || 0, endRow = options.endRow || Number.MAX_VALUE, itemDelimiter, lines, rowIt = 0;
        /*
            This implementation is quite verbose. It will be shortened once
            it's stable and passes all the test.

            It's also not written with speed in mind, instead everything is
            very segregated, and there a several redundant loops.
            This is to make it easier to stabilize the code initially.

            We do a pre-pass on the first 4 rows to make some intelligent
            guesses on the set. Guessed delimiters are in this pass counted.

            Auto detecting delimiters
                - If we meet a quoted string, the next symbol afterwards
                  (that's not \s, \t) is the delimiter
                - If we meet a date, the next symbol afterwards is the delimiter

            Date formats
                - If we meet a column with date formats, check all of them to
                  see if one of the potential months crossing 12. If it does,
                  we now know the format

            It would make things easier to guess the delimiter before
            doing the actual parsing.

            General rules:
                - Quoting is allowed, e.g: "Col 1",123,321
                - Quoting is optional, e.g.: Col1,123,321
                - Double quoting is escaping, e.g. "Col ""Hello world""",123
                - Spaces are considered part of the data: Col1 ,123
                - New line is always the row delimiter
                - Potential column delimiters are , ; \t
                - First row may optionally contain headers
                - The last row may or may not have a row delimiter
                - Comments are optionally supported, in which case the comment
                  must start at the first column, and the rest of the line will
                  be ignored
        */
        /**
         * Parse a single row.
         * @internal
         */
        function parseRow(columnStr, rowNumber, noAdd, callbacks) {
            let i = 0, c = '', cl = '', cn = '', token = '', actualColumn = 0, column = 0;
            /**
             * Read a single character from the column string.
             *
             * @internal
             */
            function read(j) {
                c = columnStr[j];
                cl = columnStr[j - 1];
                cn = columnStr[j + 1];
            }
            /**
             * Push a type to the dataTypes array.
             *
             * @internal
             */
            function pushType(type) {
                if (dataTypes.length < column + 1) {
                    dataTypes.push([type]);
                }
                if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                    dataTypes[column].push(type);
                }
            }
            /**
             * Push a token to the columns array.
             *
             * @internal
             */
            function push() {
                if (startColumn > actualColumn || actualColumn > endColumn) {
                    // Skip this column, but increment the column count (#7272)
                    ++actualColumn;
                    token = '';
                    return;
                }
                if (!options.columnTypes) {
                    if (!isNaN(parseFloat(token)) && isFinite(token)) {
                        token = parseFloat(token);
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
                if (columns.length < column + 1) {
                    columns.push([]);
                }
                if (!noAdd) {
                    // Don't push - if there's a varying amount of columns
                    // for each row, pushing will skew everything down n slots
                    columns[column][rowNumber] = token;
                }
                token = '';
                ++column;
                ++actualColumn;
            }
            if (!columnStr.trim().length) {
                return;
            }
            if (columnStr.trim()[0] === '#') {
                return;
            }
            for (; i < columnStr.length; i++) {
                read(i);
                if (c === '"') {
                    read(++i);
                    while (i < columnStr.length) {
                        if (c === '"' && cl !== '"' && cn !== '"') {
                            break;
                        }
                        if (c !== '"' || (c === '"' && cl !== '"')) {
                            token += c;
                        }
                        read(++i);
                    }
                    // Perform "plugin" handling
                }
                else if (callbacks?.[c]) {
                    if (callbacks[c](c, token)) {
                        push();
                    }
                    // Delimiter - push current token
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
         * Attempt to guess the delimiter. We do a separate parse pass here
         * because we need to count potential delimiters softly without making
         * any assumptions.
         * @internal
         */
        function guessDelimiter(lines) {
            let points = 0, commas = 0, guessed = false;
            lines.some(function (columnStr, i) {
                let inStr = false, c, cn, cl, token = '';
                // We should be able to detect dateFormats within 13 rows
                if (i > 13) {
                    return true;
                }
                for (let j = 0; j < columnStr.length; j++) {
                    c = columnStr[j];
                    cn = columnStr[j + 1];
                    cl = columnStr[j - 1];
                    if (c === '#') {
                        // Skip the rest of the line - it's a comment
                        return;
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
                        else if (isNaN(token) ||
                            !isFinite(token)) {
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
            });
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
            if (!options.decimalPoint) {
                if (points > commas) {
                    options.decimalPoint = '.';
                }
                else {
                    options.decimalPoint = ',';
                }
                // Apply a new decimal regex based on the presumed decimal sep.
                self.decimalRegex = new RegExp('^(-?[0-9]+)' +
                    options.decimalPoint +
                    '([0-9]+)$');
            }
            return guessed;
        }
        /**
         * Tries to guess the date format
         *  - Check if either month candidate exceeds 12
         *  - Check if year is missing (use current year)
         *  - Check if a shortened year format is used (e.g. 1/1/99)
         *  - If no guess can be made, the user must be prompted
         * data is the data to deduce a format based on
         * @internal
         */
        function deduceDateFormat(data, limit) {
            const format = 'YYYY/mm/dd', stable = [], max = [];
            let thing, guessedFormat = [], calculatedFormat, i = 0, madeDeduction = false, j;
            if (!limit || limit > data.length) {
                limit = data.length;
            }
            for (; i < limit; i++) {
                if (typeof data[i] !== 'undefined' &&
                    data[i]?.length) {
                    thing = data[i]
                        .trim()
                        .replace(/\//g, ' ')
                        .replace(/\-/g, ' ')
                        .replace(/\./g, ' ')
                        .split(' ');
                    guessedFormat = [
                        '',
                        '',
                        ''
                    ];
                    for (j = 0; j < thing.length; j++) {
                        if (j < guessedFormat.length) {
                            thing[j] = parseInt(thing[j], 10);
                            if (thing[j]) {
                                max[j] = (!max[j] || max[j] < thing[j]) ?
                                    thing[j] :
                                    max[j];
                                if (typeof stable[j] !== 'undefined') {
                                    if (stable[j] !== thing[j]) {
                                        stable[j] = false;
                                    }
                                }
                                else {
                                    stable[j] = thing[j];
                                }
                                if (thing[j] > 31) {
                                    if (thing[j] < 100) {
                                        guessedFormat[j] = 'YY';
                                    }
                                    else {
                                        guessedFormat[j] = 'YYYY';
                                    }
                                }
                                else if (thing[j] > 12 &&
                                    thing[j] <= 31) {
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
                calculatedFormat = guessedFormat.join('/');
                // If the calculated format is not valid, we need to present an
                // error.
                if (!self.dateFormats[calculatedFormat]) {
                    // This should emit an event instead
                    (0,external_highcharts_src_js_default_namespaceObject.fireEvent)(self, 'deduceDateFailed');
                    return format;
                }
                return calculatedFormat;
            }
            return format;
        }
        if (csv && options.beforeParse) {
            csv = options.beforeParse.call(this, csv, this);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n/g, '\n') // Unix
                .replace(/\r/g, '\n') // Mac
                .split(options.lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (options.itemDelimiter) {
                itemDelimiter = options.itemDelimiter;
            }
            else {
                itemDelimiter = guessDelimiter(lines);
            }
            let offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    parseRow(lines[rowIt], rowIt - startRow - offset);
                }
            }
            if ((!options.columnTypes || options.columnTypes.length === 0) &&
                dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' &&
                !options.dateFormat) {
                options.dateFormat = deduceDateFormat(columns[0]);
            }
            /// lines.forEach(function (line, rowNo) {
            //    let trimmed = self.trim(line),
            //        isComment = trimmed.indexOf('#') === 0,
            //        isBlank = trimmed === '',
            //        items;
            //    if (
            //        rowNo >= startRow &&
            //        rowNo <= endRow &&
            //        !isComment && !isBlank
            //    ) {
            //        items = line.split(itemDelimiter);
            //        items.forEach(function (item, colNo) {
            //            if (colNo >= startColumn && colNo <= endColumn) {
            //                if (!columns[colNo - startColumn]) {
            //                    columns[colNo - startColumn] = [];
            //                }
            //                columns[colNo - startColumn][activeRowNo] = item;
            //            }
            //        });
            //        activeRowNo += 1;
            //    }
            // });
            //
            this.dataFound();
        }
        return columns;
    }
    /**
     * Parse a HTML table
     *
     * @function Highcharts.Data#parseTable
     */
    parseTable() {
        const options = this.options, columns = this.columns || [], startRow = options.startRow || 0, endRow = options.endRow || Number.MAX_VALUE, startColumn = options.startColumn || 0, endColumn = options.endColumn || Number.MAX_VALUE;
        if (options.table) {
            let table = options.table;
            if (typeof table === 'string') {
                table = doc.getElementById(table);
            }
            [].forEach.call(table.getElementsByTagName('tr'), (tr, rowNo) => {
                if (rowNo >= startRow && rowNo <= endRow) {
                    [].forEach.call(tr.children, (item, colNo) => {
                        const row = columns[colNo - startColumn];
                        let i = 1;
                        if ((item.tagName === 'TD' ||
                            item.tagName === 'TH') &&
                            colNo >= startColumn &&
                            colNo <= endColumn) {
                            if (!columns[colNo - startColumn]) {
                                columns[colNo - startColumn] = [];
                            }
                            columns[colNo - startColumn][rowNo - startRow] = item.innerHTML;
                            // Loop over all previous indices and make sure
                            // they are nulls, not undefined.
                            while (rowNo - startRow >= i &&
                                row[rowNo - startRow - i] === void 0) {
                                row[rowNo - startRow - i] = null;
                                i++;
                            }
                        }
                    });
                }
            });
            this.dataFound(); // Continue
        }
        return columns;
    }
    /**
     * Fetch or refetch live data
     *
     * @function Highcharts.Data#fetchLiveData
     *
     * @return {boolean}
     *         The URLs that were tried can be found in the options
     */
    fetchLiveData() {
        const data = this, chart = this.chart, options = this.options, maxRetries = 3, pollingEnabled = options.enablePolling, originalOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)(options);
        let currentRetries = 0, updateIntervalMs = (options.dataRefreshRate || 2) * 1000;
        if (!hasURLOption(options)) {
            return false;
        }
        // Do not allow polling more than once a second
        updateIntervalMs = Math.max(updateIntervalMs, 1000);
        delete options.csvURL;
        delete options.rowsURL;
        delete options.columnsURL;
        /**
         * Performs a data fetch with optional polling support. Attempts to load
         * data from configured sources in the following order: `csvURL`,
         * `rowsURL`, then `columnsURL`. On success, updates the chart with the
         * received data.
         *
         * @param {boolean} initialFetch
         * Whether this is the initial fetch. When `true`, clears any existing
         * polling timeout and sets the active `liveDataURL` on the chart.
         *
         * @internal
         */
        function performFetch(initialFetch) {
            /**
             * Helper function for doing the data fetch + polling.
             * @internal
             */
            function request(url, done, tp) {
                if (!url ||
                    !/^(http|\/|\.\/|\.\.\/)/.test(url)) {
                    if (url) {
                        (0,external_highcharts_src_js_default_namespaceObject.error)(`Invalid URL: ${url}`, false, chart);
                    }
                    return false;
                }
                if (initialFetch) {
                    (0,external_highcharts_src_js_default_namespaceObject.internalClearTimeout)(data.liveDataTimeout);
                    chart.liveDataURL = url;
                }
                /**
                 * Schedules the next fetch if polling is enabled and the URL
                 * has not changed since the request was initiated.
                 * @internal
                 */
                function poll() {
                    // Poll
                    if (pollingEnabled && chart.liveDataURL === url) {
                        // We need to stop doing this if the URL has changed
                        data.liveDataTimeout =
                            setTimeout(performFetch, updateIntervalMs);
                    }
                }
                ajax({
                    url: url,
                    dataType: tp || 'json',
                    success: function (res) {
                        if (chart?.series) {
                            done(res);
                        }
                        poll();
                    },
                    error: function (xhr, e) {
                        if (++currentRetries < maxRetries) {
                            poll();
                        }
                        if (!chart.options) {
                            // If the chart is destroyed, ignore the error as
                            // a cancelled request.
                            return;
                        }
                        return (0,external_highcharts_src_js_default_namespaceObject.error)(`Request failed - ${xhr.status} \n` +
                            (typeof e === 'string' ? e : e.message), false, chart);
                    }
                });
                return true;
            }
            if (!request(originalOptions.csvURL, function (res) {
                chart.update({ data: { csv: res } });
            }, 'text')) {
                if (!request(originalOptions.rowsURL, function (res) {
                    chart.update({
                        data: {
                            rows: res
                        }
                    });
                })) {
                    request(originalOptions.columnsURL, function (res) {
                        chart.update({
                            data: {
                                columns: res
                            }
                        });
                    });
                }
            }
        }
        performFetch(true);
        return hasURLOption(options);
    }
    /**
     * Parse a Google spreadsheet.
     *
     * @function Highcharts.Data#parseGoogleSpreadsheet
     *
     * @return {boolean}
     *         Always returns false, because it is an intermediate fetch.
     */
    parseGoogleSpreadsheet() {
        const data = this, options = this.options, googleSpreadsheetKey = options.googleSpreadsheetKey, chart = this.chart, refreshRate = Math.max((options.dataRefreshRate || 2) * 1000, 4000);
        /**
         * Form the `values` field after range settings, unless the
         * googleSpreadsheetRange option is set.
         */
        const getRange = () => {
            if (options.googleSpreadsheetRange) {
                return options.googleSpreadsheetRange;
            }
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const start = (alphabet.charAt(options.startColumn || 0) || 'A') +
                ((options.startRow || 0) + 1);
            let end = alphabet.charAt(options.endColumn ?? -1) || 'ZZ';
            if ((0,external_highcharts_src_js_default_namespaceObject.defined)(options.endRow)) {
                end += options.endRow + 1;
            }
            return `${start}:${end}`;
        };
        /**
         * Fetch the actual spreadsheet using XMLHttpRequest.
         * @internal
         */
        function fetchSheet(fn) {
            const url = [
                'https://sheets.googleapis.com/v4/spreadsheets',
                googleSpreadsheetKey,
                'values',
                getRange(),
                '?alt=json&' +
                    'majorDimension=COLUMNS&' +
                    'valueRenderOption=UNFORMATTED_VALUE&' +
                    'dateTimeRenderOption=FORMATTED_STRING&' +
                    'key=' + options.googleAPIKey
            ].join('/');
            ajax({
                url,
                dataType: 'json',
                success: function (json) {
                    fn(json);
                    if (options.enablePolling) {
                        data.liveDataTimeout = setTimeout(function () {
                            fetchSheet(fn);
                        }, refreshRate);
                    }
                },
                error: function (xhr, text) {
                    if (!chart.options) {
                        // If the chart is destroyed, ignore the error as
                        // a cancelled request.
                        return;
                    }
                    return (0,external_highcharts_src_js_default_namespaceObject.error)(`Request failed - ${xhr.status} \n` +
                        (typeof text === 'string' ? text : text.message), false, chart);
                }
            });
        }
        if (googleSpreadsheetKey) {
            delete options.googleSpreadsheetKey;
            fetchSheet(function (json) {
                // Prepare the data from the spreadsheet
                const columns = json.values;
                if (!columns || columns.length === 0) {
                    return false;
                }
                // Find the maximum row count in order to extend shorter columns
                const rowCount = columns.reduce((rowCount, column) => Math.max(rowCount, column.length), 0);
                // Insert null for empty spreadsheet cells (#5298)
                columns.forEach((column) => {
                    for (let i = 0; i < rowCount; i++) {
                        if (typeof column[i] === 'undefined') {
                            column[i] = null;
                        }
                    }
                });
                if (chart?.series) {
                    chart.update({
                        data: {
                            columns: columns
                        }
                    });
                }
                else { // #8245
                    data.columns = columns;
                    data.dataFound();
                }
            });
        }
        // This is an intermediate fetch, so always return false.
        return false;
    }
    /**
     * Trim a string from whitespaces.
     *
     * @function Highcharts.Data#trim
     *
     * @param {string} str
     *        String to trim
     *
     * @param {boolean} [inside=false]
     *        Remove all spaces between numbers.
     *
     * @return {string}
     *         Trimmed string
     */
    trim(str, inside) {
        if (typeof str === 'string') {
            str = str.replace(/^\s+|\s+$/g, '');
            // Clear white space inside the string, like thousands separators
            if (inside && /[\d\s]+/.test(str)) {
                str = str.replace(/\s/g, '');
            }
            if (this.decimalRegex) {
                str = str.replace(this.decimalRegex, '$1.$2');
            }
        }
        return str;
    }
    /**
     * Parse numeric cells in to number types and date types in to true dates.
     *
     * @function Highcharts.Data#parseTypes
     */
    parseTypes() {
        const columns = this.columns || [];
        let col = columns.length;
        while (col--) {
            this.parseColumn(columns[col], col);
        }
    }
    /**
     * Parse a single column. Set properties like .isDatetime and .isNumeric.
     *
     * @function Highcharts.Data#parseColumn
     *
     * @param {Array<Highcharts.DataValueType>} column
     *        Column to parse
     *
     * @param {number} col
     *        Column index
     */
    parseColumn(column, col) {
        const rawColumns = this.rawColumns, columns = this.columns = this.columns || [], firstRowAsNames = this.firstRowAsNames, isXColumn = this.valueCount?.xColumns.indexOf(col) !== -1, backup = [], chartOptions = this.chartOptions, columnTypes = this.options.columnTypes || [], columnType = columnTypes[col], forceCategory = (isXColumn &&
            (chartOptions?.xAxis &&
                (0,external_highcharts_src_js_default_namespaceObject.splat)(chartOptions.xAxis)[0].type === 'category')) || columnType === 'string', columnHasName = (0,external_highcharts_src_js_default_namespaceObject.defined)(column.name);
        let row = column.length, val, floatVal, trimVal, trimInsideVal, dateVal, diff, descending;
        if (!rawColumns[col]) {
            rawColumns[col] = [];
        }
        while (row--) {
            val = backup[row] || column[row];
            trimVal = this.trim(val);
            trimInsideVal = this.trim(val, true);
            floatVal = parseFloat(trimInsideVal);
            // Set it the first time
            if (typeof rawColumns[col][row] === 'undefined') {
                rawColumns[col][row] = trimVal;
            }
            // Disable number or date parsing by setting the X axis type to
            // category
            if (forceCategory ||
                (row === 0 && firstRowAsNames && !columnHasName)) {
                column[row] = '' + trimVal;
            }
            else if (+trimInsideVal === floatVal) { // Is numeric
                column[row] = floatVal;
                // If the number is greater than milliseconds in a year, assume
                // datetime
                if (floatVal > 365 * 24 * 3600 * 1000 &&
                    columnType !== 'float') {
                    column.isDatetime = true;
                }
                else {
                    column.isNumeric = true;
                }
                if (typeof column[row + 1] !== 'undefined') {
                    descending = floatVal > column[row + 1];
                }
                // String, continue to determine if it is a date string or really a
                // string
            }
            else {
                if (trimVal?.length) {
                    dateVal = this.parseDate(val);
                }
                // Only allow parsing of dates if this column is an x-column
                if (isXColumn && (0,external_highcharts_src_js_default_namespaceObject.isNumber)(dateVal) && columnType !== 'float') {
                    backup[row] = val;
                    column[row] = dateVal;
                    column.isDatetime = true;
                    // Check if the dates are uniformly descending or ascending.
                    // If they are not, chances are that they are a different
                    // time format, so check for alternative.
                    if (typeof column[row + 1] !== 'undefined') {
                        diff = dateVal > column[row + 1];
                        if (diff !== descending &&
                            typeof descending !== 'undefined' &&
                            this.alternativeFormat) {
                            this.dateFormat = this.alternativeFormat;
                            row = column.length;
                            this.alternativeFormat =
                                this.dateFormats[this.dateFormat].alternative;
                        }
                        descending = diff;
                    }
                }
                else { // String
                    column[row] = trimVal === '' ? null : trimVal;
                    if (row !== 0 &&
                        (column.isDatetime ||
                            column.isNumeric)) {
                        column.mixed = true;
                    }
                }
            }
        }
        // If strings are intermixed with numbers or dates in a parsed column,
        // it is an indication that parsing went wrong or the data was not
        // intended to display as numbers or dates and parsing is too
        // aggressive. Fall back to categories. Demonstrated in the
        // highcharts/demo/column-drilldown sample.
        if (isXColumn && column.mixed) {
            columns[col] = rawColumns[col];
        }
    }
    /**
     * Parse a date and return it as a number. Overridable through
     * `options.parseDate`.
     *
     * @function Highcharts.Data#parseDate
     */
    parseDate(val) {
        const parseDate = this.options.parseDate;
        let ret, key, format, dateFormat = this.options.dateFormat || this.dateFormat, match;
        if (parseDate) {
            ret = parseDate(val);
        }
        else if (parseDate === false) {
            ret = val;
        }
        else if (typeof val === 'string') {
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in this.dateFormats) { // eslint-disable-line guard-for-in
                    format = this.dateFormats[key];
                    match = val.match(format.regex);
                    if (match) {
                        this.dateFormat = dateFormat = key;
                        this.alternativeFormat = format.alternative;
                        ret = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                format = this.dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = this.dateFormats['YYYY/mm/dd'];
                }
                match = val.match(format.regex);
                if (match) {
                    ret = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                ret = new (external_highcharts_src_js_default_Time_default())().parse(val);
            }
        }
        return ret;
    }
    /**
     * Get the parsed data in a form that we can apply directly to the
     * `series.data` config. Array positions can be mapped using the
     * `series.keys` option.
     *
     * @example
     * const data = Highcharts.data({
     *   csv: document.getElementById('data').innerHTML
     * }).getData();
     *
     * @function Highcharts.Data#getData
     *
     * @return {Array<Array<DataValueType>>|undefined} Data rows
     */
    getData() {
        if (this.columns) {
            return this.rowsToColumns(this.columns)?.slice(1);
        }
    }
    /**
     * Return a DataTable with the parsed data
     *
     * @example
     * const csv = await fetch(
     *   'https://www.example.com/sample-data.csv'
     * ).then(result => result.text());
     * const dataTable = new Highcharts.Data({ csv }).getDataTable();
     *
     * @sample highcharts/data/getdatatable
     *
     * @function Highcharts.Data#getDataTable
     *
     * @since 13.0.0
     * @return {Highcharts.DataTable} DataTable with the parsed data
     */
    getDataTable() {
        return new Data_DataTableCore({
            columns: Object.values(this.columns || [])
                .reduce((dtColumns, dtColumn) => {
                // To avoid shifting the original column, create a copy
                const column = dtColumn.slice(), columnId = column.shift();
                if (typeof columnId === 'string' ||
                    typeof columnId === 'number') {
                    dtColumns[columnId] = column;
                }
                return dtColumns;
            }, {})
        });
    }
    /**
     * A hook for working directly on the parsed columns
     *
     * @function Highcharts.Data#parsed
     */
    parsed() {
        if (this.options.parsed) {
            return this.options.parsed.call(this, this.columns, this);
        }
    }
    /**
     * If a complete callback function is provided in the options, interpret the
     * columns into a Highcharts options object.
     *
     * The function requires that the context has the `valueCount` property set.
     *
     * @function Highcharts.Data#complete
     * @internal
     */
    complete() {
        const columns = this.columns = this.columns || [], xColumns = [], options = this.options, allSeriesBuilders = [];
        let type = 'linear', series, data, i, j, r, seriesIndex, chartOptions, builder, freeIndexes, typeCol, index;
        xColumns.length = columns.length;
        if (options.complete || options.afterComplete) {
            // Get the names and shift the top row
            if (this.firstRowAsNames) {
                for (i = 0; i < columns.length; i++) {
                    const curCol = columns[i];
                    if (!(0,external_highcharts_src_js_default_namespaceObject.defined)(curCol.name)) {
                        curCol.name = (curCol.shift() ?? '').toString();
                    }
                }
            }
            // Use the next columns for series
            series = [];
            freeIndexes = getFreeIndexes(columns?.length || 0, this.valueCount.seriesBuilders);
            // Populate defined series
            for (seriesIndex = 0; seriesIndex < this.valueCount.seriesBuilders.length; seriesIndex++) {
                builder = this.valueCount.seriesBuilders[seriesIndex];
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Populate dynamic series
            while (freeIndexes.length > 0) {
                builder = new SeriesBuilder();
                builder.addColumnReader(0, 'x');
                // Mark index as used (not free)
                index = freeIndexes.indexOf(0);
                if (index !== -1) {
                    freeIndexes.splice(index, 1);
                }
                for (i = 0; i < this.valueCount.global; i++) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, this.valueCount.globalPointArrayMap[i]);
                }
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Get the data-type from the first series x column
            if (allSeriesBuilders.length > 0 &&
                allSeriesBuilders[0].readers.length > 0) {
                typeCol = columns?.[allSeriesBuilders[0].readers[0].columnIndex ?? -1];
                if (typeof typeCol !== 'undefined') {
                    if (typeCol.isDatetime) {
                        type = 'datetime';
                    }
                    else if (!typeCol.isNumeric) {
                        type = 'category';
                    }
                }
            }
            // Axis type is category, then the "x" column should be called
            // "name"
            if (type === 'category') {
                for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                    builder = allSeriesBuilders[seriesIndex];
                    for (r = 0; r < builder.readers.length; r++) {
                        if (builder.readers[r].configName === 'x') {
                            builder.readers[r].configName = 'name';
                        }
                    }
                }
            }
            // Read data for all builders
            for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                builder = allSeriesBuilders[seriesIndex];
                // Iterate down the cells of each column and add data to the
                // series
                data = [];
                for (j = 0; j < columns[0].length; j++) {
                    data[j] = builder.read(columns, j);
                }
                // Add the series
                series[seriesIndex] = {
                    data,
                    pointStart: data[0] && (builder.pointIsArray ?
                        data[0]?.[0] :
                        data[0]?.x) || void 0
                };
                if (builder.name) {
                    series[seriesIndex].name = builder.name;
                }
                if (type === 'category') {
                    series[seriesIndex].turboThreshold = 0;
                    series[seriesIndex].pointStart = 0;
                }
            }
            // Do the callback
            chartOptions = { series };
            // Prepare the axis options
            if (type === 'linear' && (!this.xAxisOptions ||
                this.xAxisOptions.type === type)) {
                // Clear default value ('linear') if it is not changing the
                // axis type to avoid loosing animation
                type = this.xAxisOptions = void 0;
            }
            else {
                this.xAxisOptions = { type };
                if (type === 'category') {
                    this.xAxisOptions.uniqueNames = false;
                }
            }
            // Merge the xAxisOptions for the standalone Data module
            if (!this.chart) {
                (0,external_highcharts_src_js_default_namespaceObject.merge)(true, chartOptions, { xAxis: this.xAxisOptions || {} });
            }
            options.complete?.(chartOptions);
            // The afterComplete hook is used internally to avoid conflict with
            // the externally available complete option.
            options.afterComplete?.(this, chartOptions);
        }
    }
    /**
     * Sets properties directly on the xAxis object.
     *
     * @internal
     */
    xAxisUpdateHandler(axis) {
        const options = this.xAxisOptions;
        if (!options) {
            return;
        }
        // Set the axis properties if not blocked by the axis options that could
        // have changed in the update event.
        if (!axis.options.type && options.type) {
            axis.type = options.type;
        }
        if (!axis.options.uniqueNames &&
            options.uniqueNames === false) {
            axis.uniqueNames = options.uniqueNames;
        }
    }
    /**
     * Updates the chart with new data options.
     *
     * @function Highcharts.Data#update
     *
     * @param {Highcharts.DataOptions} options
     *        The new data options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the new options are set.
     */
    update(options, redraw) {
        const chart = this.chart, chartOptions = chart.options;
        if (options) {
            // Set the complete handler
            options.afterComplete = function (dataInstance, dataChartOptions) {
                if (!dataChartOptions) {
                    return;
                }
                // Avoid setting axis options unless they change. Running
                // Axis.update will cause the whole structure to be
                // destroyed and rebuilt, and animation is lost.
                const xAxis = chart.xAxis[0], xAxisOptions = dataInstance.xAxisOptions;
                // Update axis if xAxisOptions are different from the current
                // and not blocked by the axis options.
                if (xAxisOptions && xAxis && ((xAxis.type !== xAxisOptions.type && !xAxis.options.type) ||
                    (xAxis.uniqueNames &&
                        xAxisOptions.uniqueNames === false &&
                        xAxis.options.uniqueNames === void 0))) {
                    xAxis.update({}, false);
                }
                else {
                    // Prefer smooth points update when no axis update
                    (dataChartOptions?.series || []).forEach(function (seriesOptions) {
                        delete seriesOptions.pointStart;
                    });
                }
                chart.update(dataChartOptions, redraw, true);
            };
            // Apply it
            (0,external_highcharts_src_js_default_namespaceObject.merge)(true, chartOptions.data, options);
            // Reset columns if fetching spreadsheet, to force a re-fetch
            if (chartOptions.data?.googleSpreadsheetKey && !options.columns) {
                delete chartOptions.data.columns;
            }
            this.init(chartOptions.data || {}, chartOptions);
        }
    }
}
// Fire 1st xAxis properties modifier after the options are set.
(0,external_highcharts_src_js_default_namespaceObject.addEvent)((external_highcharts_src_js_default_Axis_default()), 'afterSetOptions', function () {
    // Target first xAxis only
    if (this.isXAxis &&
        // Init or update
        (!this.chart.xAxis.length || this.chart.xAxis[0] === this)) {
        this.chart.data?.xAxisUpdateHandler(this);
    }
});
// Extend Chart.init so that the Chart constructor accepts a new configuration
// option group, data.
(0,external_highcharts_src_js_default_namespaceObject.addEvent)((external_highcharts_src_js_default_Chart_default()), 'init', function (e) {
    const chart = this, callback = e.args[1], defaultDataOptions = (0,external_highcharts_src_js_default_namespaceObject.getOptions)().data;
    let userOptions = (e.args[0] || {});
    if ((defaultDataOptions || userOptions && userOptions.data) &&
        !chart.hasDataDef) {
        chart.hasDataDef = true;
        /**
         * The data parser for this chart.
         *
         * @requires modules/data
         * @name Highcharts.Chart#data
         * @type {Highcharts.Data|undefined}
         */
        const dataOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)(defaultDataOptions, userOptions.data);
        chart.data = new Data((0,external_highcharts_src_js_default_namespaceObject.extend)(dataOptions, {
            afterComplete: function (dataInstance, dataOptions) {
                let i, series;
                // Merge series configs
                if (Object.hasOwnProperty.call(userOptions, 'series')) {
                    if (typeof userOptions.series === 'object') {
                        i = Math.max(userOptions.series.length, dataOptions?.series?.length ?? 0);
                        while (i--) {
                            series = userOptions.series[i] || {};
                            userOptions.series[i] = (0,external_highcharts_src_js_default_namespaceObject.merge)(series, dataOptions?.series?.[i] ?? {});
                        }
                    }
                    else { // Allow merging in dataOptions.series (#2856)
                        delete userOptions.series;
                    }
                }
                // Do the merge
                userOptions = (0,external_highcharts_src_js_default_namespaceObject.merge)(dataOptions, userOptions);
                // Register for access in events (Axis' afterSetOptions)
                chart.data = dataInstance;
                // Run chart.init again
                chart.init(userOptions, callback);
            }
        }), userOptions, chart);
        e.preventDefault();
    }
});
/**
 * Creates a new SeriesBuilder. A SeriesBuilder consists of a number
 * of ColumnReaders that reads columns and give them a name.
 * Ex: A series builder can be constructed to read column 3 as 'x' and
 * column 7 and 8 as 'y1' and 'y2'.
 * The output would then be points/rows of the form {x: 11, y1: 22, y2: 33}
 *
 * The name of the builder is taken from the second column. In the above
 * example it would be the column with index 7.
 *
 * @internal
 * @class
 * @name SeriesBuilder
 */
class SeriesBuilder {
    constructor() {
        /* eslint-disable no-invalid-this */
        this.readers = [];
        this.pointIsArray = true;
    }
    /**
     * Populates readers with column indexes. A reader can be added without
     * a specific index and for those readers the index is taken sequentially
     * from the free columns (this is handled by the ColumnCursor instance).
     *
     * @function SeriesBuilder#populateColumns
     */
    populateColumns(freeIndexes) {
        const builder = this;
        let enoughColumns = true;
        // Loop each reader and give it an index if its missing.
        // The freeIndexes.shift() will return undefined if there
        // are no more columns.
        builder.readers.forEach((reader) => {
            if (typeof reader.columnIndex === 'undefined') {
                reader.columnIndex = freeIndexes.shift();
            }
        });
        // Now, all readers should have columns mapped. If not
        // then return false to signal that this series should
        // not be added.
        builder.readers.forEach((reader) => {
            if (typeof reader.columnIndex === 'undefined') {
                enoughColumns = false;
            }
        });
        return enoughColumns;
    }
    /**
     * Reads a row from the dataset and returns a point or array depending
     * on the names of the readers.
     *
     * @function SeriesBuilder#read<T>
     */
    read(columns, rowIndex) {
        const builder = this, pointIsArray = builder.pointIsArray, point = pointIsArray ? [] : {};
        // Loop each reader and ask it to read its value.
        // Then, build an array or point based on the readers names.
        builder.readers.forEach((reader) => {
            const value = columns[reader.columnIndex][rowIndex];
            if (pointIsArray) {
                point.push(value);
            }
            else {
                if (reader.configName.indexOf('.') > 0) {
                    // Handle nested property names
                    external_highcharts_src_js_default_Point_default().prototype.setNestedProperty(point, value, reader.configName);
                }
                else {
                    point[reader.configName] = value;
                }
            }
        });
        // The name comes from the first column (excluding the x column)
        if (typeof this.name === 'undefined' && builder.readers.length >= 2) {
            const columnIndexes = [];
            builder.readers.forEach(function (reader) {
                if (reader.configName === 'x' ||
                    reader.configName === 'name' ||
                    reader.configName === 'y') {
                    if (typeof reader.columnIndex !== 'undefined') {
                        columnIndexes.push(reader.columnIndex);
                    }
                }
            });
            if (columnIndexes.length >= 2) {
                // Remove the first one (x col)
                columnIndexes.shift();
                // Sort the remaining
                columnIndexes.sort(function (a, b) {
                    return a - b;
                });
            }
            // Now use the lowest index as name column
            this.name = columns[columnIndexes.shift() ?? 0].name;
        }
        return point;
    }
    /**
     * Creates and adds ColumnReader from the given columnIndex and configName.
     * ColumnIndex can be undefined and in that case the reader will be given
     * an index when columns are populated.
     *
     * @function SeriesBuilder#addColumnReader
     */
    addColumnReader(columnIndex, configName) {
        this.readers.push({
            columnIndex: columnIndex,
            configName: configName
        });
        if (!(configName === 'x' ||
            configName === 'y' ||
            typeof configName === 'undefined')) {
            this.pointIsArray = false;
        }
    }
    /**
     * Returns an array of column indexes that the builder will use when
     * reading data.
     *
     * @function SeriesBuilder#getReferencedColumnIndexes
     */
    getReferencedColumnIndexes() {
        const referencedColumnIndexes = [];
        let i, columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (typeof columnReader.columnIndex !== 'undefined') {
                referencedColumnIndexes.push(columnReader.columnIndex);
            }
        }
        return referencedColumnIndexes;
    }
    /**
     * Returns true if the builder has a reader for the given configName.
     *
     * @function SeriesBuilder#hasReader
     */
    hasReader(configName) {
        let i, columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (columnReader.configName === configName) {
                return true;
            }
        }
        // Else return undefined
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Extensions_Data = (Data);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback function to modify the CSV before parsing it by the data module.
 *
 * @callback Highcharts.DataBeforeParseCallbackFunction
 *
 * @param {string} csv
 *        The CSV to modify.
 *
 * @param {Highcharts.Data} ctx
 *        The Data instance.
 *
 * @return {string}
 *         The CSV to parse.
 */
/**
 * Callback function that gets called after parsing data.
 *
 * @callback Highcharts.DataCompleteCallbackFunction
 *
 * @param {Highcharts.Options} chartOptions
 *        The chart options that were used.
 */
/**
 * Callback function that returns the corresponding Date object to a match.
 *
 * @callback Highcharts.DataDateFormatCallbackFunction
 *
 * @param {Array<number>} match
 *
 * @return {number}
 */
/**
 * Structure for alternative date formats to parse.
 *
 * @interface Highcharts.DataDateFormatObject
 */ /**
* @name Highcharts.DataDateFormatObject#alternative
* @type {string|undefined}
*/ /**
* @name Highcharts.DataDateFormatObject#parser
* @type {Highcharts.DataDateFormatCallbackFunction}
*/ /**
* @name Highcharts.DataDateFormatObject#regex
* @type {global.RegExp}
*/
/**
 * Possible types for a data item in a column or row.
 *
 * @typedef {number|string|null} Highcharts.DataValueType
 */
/**
 * Callback function to parse string representations of dates into
 * JavaScript timestamps (milliseconds since 1.1.1970).
 *
 * @callback Highcharts.DataParseDateCallbackFunction
 *
 * @param {string} dateValue
 *
 * @return {number}
 *         Timestamp (milliseconds since 1.1.1970) as integer for Date class.
 */
/**
 * Callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories.
 *
 * @callback Highcharts.DataParsedCallbackFunction
 *
 * @param {Array<Array<Highcharts.DataValueType>>} columns
 *        The parsed columns by the data module.
 * @param {Highcharts.Data} ctx
 *        The Data object instance.
 *
 * @return {boolean|undefined}
 *         Return `false` to stop completion, or call `this.complete()` to
 *         continue async.
 */
/* *
 *
 *  API Options
 *
 * */
/**
 * The Data module provides a simplified interface for adding data to
 * a chart from sources like CVS, HTML tables or grid views. See also
 * the [tutorial article on the Data module](
 * https://www.highcharts.com/docs/working-with-data/data-module).
 *
 * It requires the `modules/data.js` file to be loaded.
 *
 * Please note that the default way of adding data in Highcharts, without
 * the need of a module, is through the [series._type_.data](#series.line.data)
 * option.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         HTML table
 * @sample {highcharts} highcharts/data/csv/
 *         CSV
 *
 * @since     4.0
 * @requires  modules/data
 * @apioption data
 */
/**
 * A callback function to modify the CSV before parsing it. Returns the modified
 * string.
 *
 * @sample {highcharts} highcharts/demo/line-csv/
 *         Modify CSV before parse
 *
 * @type      {Highcharts.DataBeforeParseCallbackFunction}
 * @since     6.1
 * @apioption data.beforeParse
 */
/**
 * A two-dimensional array representing the input data on tabular form.
 * This input can be used when the data is already parsed, for example
 * from a grid view component. Each cell can be a string or number.
 * If not switchRowsAndColumns is set, the columns are interpreted as
 * series.
 *
 * @see [data.rows](#data.rows)
 *
 * @sample {highcharts} highcharts/data/columns/
 *         Columns
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.columns
 */
/**
 * An array option that specifies the data type for each column in the series
 * loaded within the data module.
 *
 * Possible values: `"string"`, `"number"`, `"float"`, `"date"`.
 *
 * @sample {highcharts|highstock} highcharts/data/column-types/
 *         X-axis categories based on CSV data
 * @sample {highmaps} highcharts/data/column-types-map/
 *         Map chart created with fips from CSV
 *
 * @type       {Array<'string'|'number'|'float'|'date'>}
 * @since      11.3.0
 * @validvalue ["string", "number", "float", "date"]
 * @apioption  data.columnTypes
 */
/**
 * The callback that is evaluated when the data is finished loading,
 * optionally from an external source, and parsed. The first argument
 * passed is a finished chart options object, containing the series.
 * These options can be extended with additional options and passed
 * directly to the chart constructor.
 *
 * @see [data.parsed](#data.parsed)
 *
 * @sample {highcharts} highcharts/data/complete/
 *         Modify data on complete
 *
 * @type      {Highcharts.DataCompleteCallbackFunction}
 * @since     4.0
 * @apioption data.complete
 */
/**
 * A comma delimited string to be parsed. Related options are [startRow](
 * #data.startRow), [endRow](#data.endRow), [startColumn](#data.startColumn)
 * and [endColumn](#data.endColumn) to delimit what part of the table
 * is used. The [lineDelimiter](#data.lineDelimiter) and [itemDelimiter](
 * #data.itemDelimiter) options define the CSV delimiter formats.
 *
 * The built-in CSV parser doesn't support all flavours of CSV, so in
 * some cases it may be necessary to use an external CSV parser. See
 * [this example](https://jsfiddle.net/highcharts/u59176h4/) of parsing
 * CSV through the MIT licensed [Papa Parse](http://papaparse.com/)
 * library.
 *
 * @sample {highcharts} highcharts/data/csv/
 *         Data from CSV
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.csv
 */
/**
 * Which of the predefined date formats in Date.prototype.dateFormats
 * to use to parse date values. Defaults to a best guess based on what
 * format gives valid and ordered dates. Valid options include: `YYYY/mm/dd`,
 * `dd/mm/YYYY`, `mm/dd/YYYY`, `dd/mm/YY`, `mm/dd/YY`.
 *
 * @see [data.parseDate](#data.parseDate)
 *
 * @sample {highcharts} highcharts/data/dateformat-auto/
 *         Best guess date format
 *
 * @type       {string}
 * @since      4.0
 * @validvalue ["YYYY/mm/dd", "dd/mm/YYYY", "mm/dd/YYYY", "dd/mm/YYYY",
 *             "dd/mm/YY", "mm/dd/YY"]
 * @apioption  data.dateFormat
 */
/**
 * The decimal point used for parsing numbers in the CSV.
 *
 * If both this and data.delimiter is set to `undefined`, the parser will
 * attempt to deduce the decimal point automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Comma as decimal point
 *
 * @type      {string}
 * @default   .
 * @since     4.1.0
 * @apioption data.decimalPoint
 */
/**
 * In tabular input data, the last column (indexed by 0) to use. Defaults
 * to the last column containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0
 * @apioption data.endColumn
 */
/**
 * In tabular input data, the last row (indexed by 0) to use. Defaults
 * to the last row containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0.4
 * @apioption data.endRow
 */
/**
 * Whether to use the first row in the data set as series names.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Don't get series names from the CSV
 * @sample {highstock} highcharts/data/start-end/
 *         Don't get series names from the CSV
 *
 * @type      {boolean}
 * @default   true
 * @since     4.1.0
 * @product   highcharts highstock gantt
 * @apioption data.firstRowAsNames
 */
/**
 * The Google Spreadsheet API key required for access generated at [API Services
 * / Credentials](https://console.cloud.google.com/apis/credentials). See a
 * comprehensive tutorial for setting up the key at the
 * [Hands-On Data Visualization](https://handsondataviz.org/google-sheets-api-key.html)
 * book website.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     9.2.2
 * @apioption data.googleAPIKey
 */
/**
 * The key or `spreadsheetId` value for a Google Spreadsheet to load. See
 * [developers.google.com](https://developers.google.com/sheets/api/guides/concepts)
 * for how to find the `spreadsheetId`.
 *
 * In order for Google Sheets to load, a valid [googleAPIKey](#data.googleAPIKey)
 * must also be given.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetKey
 */
/**
 * The Google Spreadsheet `range` to use in combination with
 * [googleSpreadsheetKey](#data.googleSpreadsheetKey). See
 * [developers.google.com](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get)
 * for details.
 *
 * If given, it takes precedence over `startColumn`, `endColumn`, `startRow` and
 * `endRow`.
 *
 * ```js
 * googleSpreadsheetRange: 'Fruit Consumption' // Load a named worksheet
 * googleSpreadsheetRange: 'A:Z' // Load columns A to Z
 * ```
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string|undefined}
 * @since     9.2.2
 * @apioption data.googleSpreadsheetRange
 */
/**
 * No longer works since v9.2.2, that uses Google Sheets API v4. Instead, use
 * the [googleSpreadsheetRange](#data.googleSpreadsheetRange) option to load a
 * specific sheet.
 *
 * @deprecated 9.2.2
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetWorksheet
 */
/**
 * Item or cell delimiter for parsing CSV. Defaults to the tab character
 * `\t` if a tab character is found in the CSV string, if not it defaults
 * to `,`.
 *
 * If this is set to false or undefined, the parser will attempt to deduce
 * the delimiter automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.itemDelimiter
 */
/**
 * Line delimiter for parsing CSV.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @default   \n
 * @since     4.0
 * @apioption data.lineDelimiter
 */
/**
 * A callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories. Return `false` to stop completion, or call
 * `this.complete()` to continue async.
 *
 * @see [data.complete](#data.complete)
 *
 * @sample {highcharts} highcharts/data/parsed/
 *         Modify data after parse
 *
 * @type      {Highcharts.DataParsedCallbackFunction}
 * @since     4.0
 * @apioption data.parsed
 */
/**
 * A callback function to parse string representations of dates into JavaScript
 * timestamps. Should return an integer timestamp on success.
 *
 * Set `false` to disable date parsing. Highcharts supports internal date
 * parsing as of v12.
 *
 * @see [dateFormat](#data.dateFormat)
 *
 * @type      {Highcharts.DataParseDateCallbackFunction|false}
 * @since     4.0
 * @apioption data.parseDate
 */
/**
 * The same as the columns input option, but defining rows instead of
 * columns.
 *
 * @see [data.columns](#data.columns)
 *
 * @sample {highcharts} highcharts/data/rows/
 *         Data in rows
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.rows
 */
/**
 * An array containing dictionaries for each series. A dictionary exists of
 * Point property names as the key and the CSV column index as the value.
 *
 * @sample {highcharts} highcharts/data/seriesmapping-label/
 *         Label from data set
 *
 * @type      {Array<Highcharts.Dictionary<number>>}
 * @since     4.0.4
 * @apioption data.seriesMapping
 */
/**
 * In tabular input data, the first column (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startColumn
 */
/**
 * In tabular input data, the first row (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startRow
 */
/**
 * Switch rows and columns of the input data, so that `this.columns`
 * effectively becomes the rows of the data set, and the rows are interpreted
 * as series.
 *
 * @sample {highcharts} highcharts/data/switchrowsandcolumns/
 *         Switch rows and columns
 *
 * @type      {boolean}
 * @default   false
 * @since     4.0
 * @apioption data.switchRowsAndColumns
 */
/**
 * An HTML table or the id of such to be parsed as input data. Related
 * options are `startRow`, `endRow`, `startColumn` and `endColumn` to
 * delimit what part of the table is used.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         Parsed table
 *
 * @type      {string|global.HTMLElement}
 * @since     4.0
 * @apioption data.table
 */
/**
 * An URL to a remote CSV dataset. Will be fetched when the chart is created
 * using Ajax.
 *
 * @sample highcharts/demo/livedata-columns
 *         Categorized bar chart with CSV and live polling
 * @sample highcharts/data/livedata-csv
 *         Time based line chart with CSV and live polling
 *
 * @type      {string}
 * @apioption data.csvURL
 */
/**
 * A URL to a remote JSON dataset, structured as a row array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/data/livedata-rows
 *         Rows with live polling
 *
 * @type      {string}
 * @apioption data.rowsURL
 */
/**
 * A URL to a remote JSON dataset, structured as a column array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/demo/livedata-columns
 *         Columns with live polling
 *
 * @type      {string}
 * @apioption data.columnsURL
 */
/**
 * Sets the refresh rate for data polling when importing remote dataset by
 * setting [data.csvURL](data.csvURL), [data.rowsURL](data.rowsURL),
 * [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * Note that polling must be enabled by setting
 * [data.enablePolling](data.enablePolling) to true.
 *
 * The value is the number of seconds between pollings.
 * It cannot be set to less than 1 second.
 *
 * @sample highcharts/demo/live-data
 *         Live data with user set refresh rate
 *
 * @default   1
 * @type      {number}
 * @apioption data.dataRefreshRate
 */
/**
 * Enables automatic refetching of remote datasets every _n_ seconds (defined by
 * setting [data.dataRefreshRate](data.dataRefreshRate)).
 *
 * Only works when either [data.csvURL](data.csvURL),
 * [data.rowsURL](data.rowsURL), [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * @sample highcharts/demo/live-data
 *         Live data
 * @sample highcharts/demo/livedata-columns
 *         Categorized bar chart with CSV and live polling
 *
 * @type      {boolean}
 * @default   false
 * @apioption data.enablePolling
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/data.src.js





const G = (external_highcharts_src_js_default_default());
// Classes
G.Data = G.Data || Extensions_Data;
G.HttpUtilities = G.HttpUtilities || Core_HttpUtilities;
// Functions
G.ajax = G.HttpUtilities.ajax;
G.data = G.Data.data;
G.getJSON = G.HttpUtilities.getJSON;
G.post = G.HttpUtilities.post;
/* harmony default export */ const data_src = ((external_highcharts_src_js_default_default()));

export { data_src as default };

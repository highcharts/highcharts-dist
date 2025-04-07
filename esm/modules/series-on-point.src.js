/**
 * @license Highcharts JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/series-on-point
 * @requires highcharts
 *
 * Series on point module
 *
 * (c) 2010-2025 Highsoft AS
 * Author: Rafal Sebestjanski and Piotr Madej
 *
 * License: www.highcharts.com/license
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

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
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
     * views to it are destroyed. Default is `false`.
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
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength, splice } = Data_ColumnUtils;

const { fireEvent, objectEach, uniqueKey } = (external_highcharts_src_js_default_default());
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
        this.modified = this;
        this.rowCount = 0;
        this.versionTag = uniqueKey();
        let rowCount = 0;
        objectEach(options.columns || {}, (column, columnName) => {
            this.columns[columnName] = column.slice();
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
        objectEach(this.columns, (column, columnName) => {
            if (column.length !== rowCount) {
                this.columns[columnName] = setLength(column, rowCount);
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
            objectEach(this.columns, (column, columnName) => {
                this.columns[columnName] =
                    splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = uniqueKey();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnName
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnName, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnName];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnNames]
     * Column names to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnNames, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnNames || Object.keys(this.columns)).reduce((columns, columnName) => {
            columns[columnName] = this.columns[columnName];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
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
    getRow(rowIndex, columnNames) {
        return (columnNames || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @param {string} columnName
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
    setColumn(columnName, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnName]: column }, rowIndex, eventDetail);
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
        objectEach(columns, (column, columnName) => {
            this.columns[columnName] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            fireEvent(this, 'afterSetColumns');
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
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1;
        objectEach(row, (cellValue, columnName) => {
            let column = columns[columnName] ||
                eventDetail?.addColumns !== false && new Array(indexRowCount);
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [cellValue]).array;
                }
                else {
                    column[rowIndex] = cellValue;
                }
                columns[columnName] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            fireEvent(this, 'afterSetRows');
            this.versionTag = uniqueKey();
        }
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

;// external ["../highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// external ["../highcharts.src.js","default","Series"]
var x = (y) => {
	var x = {}; __webpack_require__.d(x,
    	y); return x
    } 
    var y = (x) => (() => (x))
    const external_highcharts_src_js_default_Series_namespaceObject = x({  });
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// external ["../highcharts.src.js","default","SVGRenderer"]
const external_highcharts_src_js_default_SVGRenderer_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGRenderer;
var external_highcharts_src_js_default_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGRenderer_namespaceObject);
;// ./code/es-modules/Series/SeriesOnPointComposition.js
/* *
 *
 *  (c) 2010-2025 Rafal Sebestjanski, Piotr Madej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed } = (external_highcharts_src_js_default_default());



const { bubble } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;


const { addEvent, defined, find, isNumber, pushUnique } = (external_highcharts_src_js_default_default());
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
     *
     * @param SeriesClass
     * Series class to use.
     *
     * @param ChartClass
     * Chart class to use.
     */
    function compose(SeriesClass, ChartClass) {
        if (pushUnique(composed, 'SeriesOnPoint')) {
            const { chartGetZData, seriesAfterInit, seriesAfterRender, seriesGetCenter, seriesShowOrHide, seriesTranslate } = Additions.prototype;
            // We can mark support for pie series here because it's in the core.
            // But all other series outside the core should be marked in its
            // module. This is crucial when loading series-on-point before
            // loading a module, e.g. sunburst.
            // Supported series types:
            // - pie
            // - sunburst
            SeriesClass.types.pie.prototype.onPointSupported = true;
            addEvent(SeriesClass, 'afterInit', seriesAfterInit);
            addEvent(SeriesClass, 'afterRender', seriesAfterRender);
            addEvent(SeriesClass, 'afterGetCenter', seriesGetCenter);
            addEvent(SeriesClass, 'hide', seriesShowOrHide);
            addEvent(SeriesClass, 'show', seriesShowOrHide);
            addEvent(SeriesClass, 'translate', seriesTranslate);
            addEvent(ChartClass, 'beforeRender', chartGetZData);
            addEvent(ChartClass, 'beforeRedraw', chartGetZData);
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
            if (!(connectedPoint instanceof (external_highcharts_src_js_default_Point_default())) ||
                !position ||
                !defined(connectedPoint.plotX) ||
                !defined(connectedPoint.plotY)) {
                return;
            }
            const xFrom = defined(position.x) ?
                position.x :
                connectedPoint.plotX, yFrom = defined(position.y) ?
                position.y :
                connectedPoint.plotY, xTo = xFrom + (position.offsetX || 0), yTo = yFrom + (position.offsetY || 0), width = connectorOpts.width || 1, color = connectorOpts.stroke || this.series.color, dashStyle = connectorOpts.dashstyle, attribs = {
                d: external_highcharts_src_js_default_SVGRenderer_default().prototype.crispLine([
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
                if (connectedPoint instanceof (external_highcharts_src_js_default_Point_default()) &&
                    defined(connectedPoint.plotX) &&
                    defined(connectedPoint.plotY)) {
                    center[0] = connectedPoint.plotX;
                    center[1] = connectedPoint.plotY;
                }
                const position = onPointOptions.position;
                if (position) {
                    if (defined(position.x)) {
                        center[0] = position.x;
                    }
                    if (defined(position.y)) {
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
            if (isNumber(radius)) {
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
                const series = find(allSeries, (series) => {
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
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {Highcharts.SVGAttributes}
 * @apioption   plotOptions.series.onPoint.connectorOptions
 */
/**
 * Color of the connector line. By default it's the series' color.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.stroke
 */
/**
 * A name for the dash style to use for the connector.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {string}
 * @apioption   plotOptions.series.onPoint.connectorOptions.dashstyle
 */
/**
 * Pixel width of the connector line.
 *
 * @default     1
 * @requires    modules/series-on-point
 * @type        {number}
 * @since 10.2.0
 * @apioption   plotOptions.series.onPoint.connectorOptions.width
 */
/**
 * The `id` of the point that we connect the series to. Only points with a given
 * `plotX` and `plotY` values and map points are valid.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {string}
 * @apioption  plotOptions.series.onPoint.id
 */
/**
 * Options allowing to set a position and an offset of the series in the
 * _Series on point_ feature.
 *
 * @requires    modules/series-on-point
 * @since 10.2.0
 * @type        {object}
 * @apioption   plotOptions.series.onPoint.position
 */
/**
 * Series center offset from the original x position. If defined, the connector
 * line is drawn connecting original position with new position.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetX
 */
/**
 * Series center offset from the original y position. If defined, the connector
 * line is drawn from original position to a new position.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.offsetY
 */
/**
 * X position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.x
 */
/**
 * Y position of the series center. By default, the series is displayed on the
 * point that it is connected to.
 *
 * @requires   modules/series-on-point
 * @since 10.2.0
 * @type       {number}
 * @apioption  plotOptions.series.onPoint.position.y
 */
''; // Keeps doclets above in transpiled file

;// ./code/es-modules/masters/modules/series-on-point.src.js




const G = (external_highcharts_src_js_default_default());
Series_SeriesOnPointComposition.compose(G.Series, G.Chart);
/* harmony default export */ const series_on_point_src = ((external_highcharts_src_js_default_default()));

export { series_on_point_src as default };

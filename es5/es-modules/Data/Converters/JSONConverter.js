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
 *  - Paweł Lysy
 *  - Kamil Kubik
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import DataConverter from './DataConverter.js';
import DataConverterUtils from './DataConverterUtils.js';
import { isArray, merge, objectEach } from '../../Shared/Utilities.js';
import { error } from '../../Core/Utilities.js';
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
var JSONConverter = /** @class */ (function (_super) {
    __extends(JSONConverter, _super);
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
    function JSONConverter(options) {
        var _this = this;
        var mergedOptions = merge(JSONConverter.defaultOptions, options);
        _this = _super.call(this, mergedOptions) || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.headerColumnIds = [];
        _this.headers = [];
        _this.options = mergedOptions;
        return _this;
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
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    JSONConverter.prototype.parse = function (options, eventDetail) {
        var converter = this;
        options = merge(converter.options, options);
        var beforeParse = options.beforeParse, orientation = options.orientation, firstRowAsNames = options.firstRowAsNames, columnIds = options.columnIds;
        var data = options.data;
        if (!data) {
            return {};
        }
        converter.headers = [];
        var columnsArray = [];
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
        return DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    };
    /**
     * Helper for parsing data in 'columns' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
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
    JSONConverter.prototype.parseColumnsOrientation = function (columnsArray, data, firstRowAsNames, columnIds) {
        var converter = this;
        for (var i = 0, iEnd = data.length; i < iEnd; i++) {
            var item = data[i];
            if (!(Array.isArray(item))) {
                return;
            }
            if (Array.isArray(converter.headers)) {
                if (firstRowAsNames) {
                    converter.headers.push("".concat(item.shift()));
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
    };
    /**
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {DataTableBasicColumn[]} [columnsArray]
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
     * @return {DataTableBasicColumn[]}
     * Parsed columns.
     */
    JSONConverter.prototype.parseRowsOrientation = function (columnsArray, data, firstRowAsNames, columnIds) {
        var converter = this;
        if (firstRowAsNames) {
            converter.headers = data.shift();
        }
        else if (columnIds) {
            converter.headerColumnIds = columnIds;
        }
        for (var rowIndex = 0, iEnd = data.length; rowIndex < iEnd; rowIndex++) {
            var row = data[rowIndex];
            if (!isArray(row)) {
                row = this.convertItemToRow(row, columnIds);
            }
            for (var columnIndex = 0, jEnd = row.length; columnIndex < jEnd; columnIndex++) {
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
    };
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
    JSONConverter.prototype.convertItemToRow = function (rowObj, columnIds) {
        var converter = this;
        if (columnIds && !(Array.isArray(columnIds))) {
            var newRow_1 = [];
            objectEach(columnIds, function (arrayWithPath, name) {
                newRow_1.push(arrayWithPath.reduce(function (acc, key) {
                    return acc[key];
                }, rowObj));
                if (converter.headers.indexOf(name) < 0) {
                    converter.headers.push(name);
                }
            });
            return newRow_1;
        }
        converter.headerColumnIds = Object.keys(rowObj);
        return Object.values(rowObj);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    JSONConverter.defaultOptions = __assign(__assign({}, DataConverter.defaultOptions), { orientation: 'rows' });
    return JSONConverter;
}(DataConverter));
DataConverter.registerType('JSON', JSONConverter);
/* *
 *
 *  Default Export
 *
 * */
export default JSONConverter;

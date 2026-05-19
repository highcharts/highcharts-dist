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
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
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
import { merge } from '../../Shared/Utilities.js';
import { uniqueKey } from '../../Core/Utilities.js';
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
var GoogleSheetsConverter = /** @class */ (function (_super) {
    __extends(GoogleSheetsConverter, _super);
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
    function GoogleSheetsConverter(options) {
        var _this = this;
        var mergedOptions = merge(GoogleSheetsConverter.defaultOptions, options);
        _this = _super.call(this, mergedOptions) || this;
        _this.header = [];
        _this.options = mergedOptions;
        return _this;
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
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    GoogleSheetsConverter.prototype.parse = function (options, eventDetail) {
        var _a;
        var converter = this, parseOptions = merge(converter.options, options);
        var columnsArray = (((_a = parseOptions.json) === null || _a === void 0 ? void 0 : _a.values) || []).map(function (column) { return column.slice(); });
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
        var beforeParse = parseOptions.beforeParse, json = parseOptions.json;
        if (beforeParse && json) {
            columnsArray = beforeParse(json.values);
        }
        var column;
        for (var i = 0, iEnd = columnsArray.length; i < iEnd; i++) {
            column = columnsArray[i];
            converter.header[i] = (parseOptions.firstRowAsNames ?
                "".concat(column.shift()) :
                uniqueKey());
            for (var j = 0, jEnd = column.length; j < jEnd; ++j) {
                var cellValue = column[j];
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
        return DataConverterUtils.getColumnsCollection(columnsArray, converter.header);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    GoogleSheetsConverter.defaultOptions = __assign({}, DataConverter.defaultOptions);
    return GoogleSheetsConverter;
}(DataConverter));
DataConverter.registerType('GoogleSheets', GoogleSheetsConverter);
/* *
 *
 *  Default Export
 *
 * */
export default GoogleSheetsConverter;
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
